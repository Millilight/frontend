var amplitude = (function () {
  'use strict';
  function t(e) {
    return (t =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          })(e);
  }
  function p(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function n(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        'value' in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function i(e, t, i) {
    return t && n(e.prototype, t), i && n(e, i), e;
  }
  function s(e, t, i) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = i),
      e
    );
  }
  function y(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {},
        n = Object.keys(i);
      'function' == typeof Object.getOwnPropertySymbols &&
        (n = n.concat(
          Object.getOwnPropertySymbols(i).filter(function (e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable;
          })
        )),
        n.forEach(function (e) {
          s(t, e, i[e]);
        });
    }
    return t;
  }
  function o(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) {
          for (var t = 0, i = new Array(e.length); t < e.length; t++)
            i[t] = e[t];
          return i;
        }
      })(e) ||
      (function (e) {
        if (
          Symbol.iterator in Object(e) ||
          '[object Arguments]' === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      })(e) ||
      (function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      })()
    );
  }
  function d() {
    return (
      'object' == typeof window &&
      void 0 !==
        (null === window || void 0 === window ? void 0 : window.document)
    );
  }
  var w = {
      DEFAULT_INSTANCE: '$default_instance',
      API_VERSION: 2,
      MAX_STRING_LENGTH: 4096,
      MAX_PROPERTY_KEYS: 1e3,
      IDENTIFY_EVENT: '$identify',
      GROUP_IDENTIFY_EVENT: '$groupidentify',
      EVENT_LOG_URL: 'api.amplitude.com',
      EVENT_LOG_EU_URL: 'api.eu.amplitude.com',
      DYNAMIC_CONFIG_URL: 'regionconfig.amplitude.com',
      DYNAMIC_CONFIG_EU_URL: 'regionconfig.eu.amplitude.com',
      LAST_EVENT_ID: 'amplitude_lastEventId',
      LAST_EVENT_TIME: 'amplitude_lastEventTime',
      LAST_IDENTIFY_ID: 'amplitude_lastIdentifyId',
      LAST_SEQUENCE_NUMBER: 'amplitude_lastSequenceNumber',
      SESSION_ID: 'amplitude_sessionId',
      DEVICE_ID: 'amplitude_deviceId',
      OPT_OUT: 'amplitude_optOut',
      USER_ID: 'amplitude_userId',
      DEVICE_ID_INDEX: 0,
      USER_ID_INDEX: 1,
      OPT_OUT_INDEX: 2,
      SESSION_ID_INDEX: 3,
      LAST_EVENT_TIME_INDEX: 4,
      EVENT_ID_INDEX: 5,
      IDENTIFY_ID_INDEX: 6,
      SEQUENCE_NUMBER_INDEX: 7,
      COOKIE_TEST_PREFIX: 'amp_cookie_test',
      COOKIE_PREFIX: 'amp',
      STORAGE_DEFAULT: '',
      STORAGE_COOKIES: 'cookies',
      STORAGE_NONE: 'none',
      STORAGE_LOCAL: 'localStorage',
      STORAGE_SESSION: 'sessionStorage',
      REVENUE_EVENT: 'revenue_amount',
      REVENUE_PRODUCT_ID: '$productId',
      REVENUE_QUANTITY: '$quantity',
      REVENUE_PRICE: '$price',
      REVENUE_REVENUE_TYPE: '$revenueType',
      AMP_DEVICE_ID_PARAM: 'amp_device_id',
      REFERRER: 'referrer',
      UTM_SOURCE: 'utm_source',
      UTM_MEDIUM: 'utm_medium',
      UTM_CAMPAIGN: 'utm_campaign',
      UTM_TERM: 'utm_term',
      UTM_CONTENT: 'utm_content',
      ATTRIBUTION_EVENT: '[Amplitude] Attribution Captured',
      TRANSPORT_HTTP: 'http',
      TRANSPORT_BEACON: 'beacon',
    },
    l = function (e) {
      for (var t = '', i = 0; i < e.length; i++) {
        var n = e.charCodeAt(i);
        n < 128
          ? (t += String.fromCharCode(n))
          : (127 < n && n < 2048
              ? (t += String.fromCharCode((n >> 6) | 192))
              : ((t += String.fromCharCode((n >> 12) | 224)),
                (t += String.fromCharCode(((n >> 6) & 63) | 128))),
            (t += String.fromCharCode((63 & n) | 128)));
      }
      return t;
    },
    c = function (e) {
      for (var t, i, n = '', o = 0, r = 0; o < e.length; )
        (t = e.charCodeAt(o)) < 128
          ? ((n += String.fromCharCode(t)), o++)
          : 191 < t && t < 224
          ? ((r = e.charCodeAt(o + 1)),
            (n += String.fromCharCode(((31 & t) << 6) | (63 & r))),
            (o += 2))
          : ((r = e.charCodeAt(o + 1)),
            (i = e.charCodeAt(o + 2)),
            (n += String.fromCharCode(
              ((15 & t) << 12) | ((63 & r) << 6) | (63 & i)
            )),
            (o += 3));
      return n;
    },
    h =
      'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof global
        ? global
        : void 0,
    f = {
      _keyStr:
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      encode: function (e) {
        try {
          if (h.btoa && h.atob) return h.btoa(unescape(encodeURIComponent(e)));
        } catch (e) {}
        return f._encode(e);
      },
      _encode: function (e) {
        var t,
          i,
          n,
          o,
          r,
          s,
          a,
          u = '',
          c = 0;
        for (e = l(e); c < e.length; )
          (o = (t = e.charCodeAt(c++)) >> 2),
            (r = ((3 & t) << 4) | ((i = e.charCodeAt(c++)) >> 4)),
            (s = ((15 & i) << 2) | ((n = e.charCodeAt(c++)) >> 6)),
            (a = 63 & n),
            isNaN(i) ? (s = a = 64) : isNaN(n) && (a = 64),
            (u =
              u +
              f._keyStr.charAt(o) +
              f._keyStr.charAt(r) +
              f._keyStr.charAt(s) +
              f._keyStr.charAt(a));
        return u;
      },
      decode: function (e) {
        try {
          if (h.btoa && h.atob) return decodeURIComponent(escape(h.atob(e)));
        } catch (e) {}
        return f._decode(e);
      },
      _decode: function (e) {
        var t,
          i,
          n,
          o,
          r,
          s,
          a = '',
          u = 0;
        for (e = e.replace(/[^A-Za-z0-9+/=]/g, ''); u < e.length; )
          (t =
            (f._keyStr.indexOf(e.charAt(u++)) << 2) |
            ((o = f._keyStr.indexOf(e.charAt(u++))) >> 4)),
            (i =
              ((15 & o) << 4) | ((r = f._keyStr.indexOf(e.charAt(u++))) >> 2)),
            (n = ((3 & r) << 6) | (s = f._keyStr.indexOf(e.charAt(u++)))),
            (a += String.fromCharCode(t)),
            64 !== r && (a += String.fromCharCode(i)),
            64 !== s && (a += String.fromCharCode(n));
        return (a = c(a));
      },
    },
    r = Object.prototype.toString;
  function _(e) {
    switch (r.call(e)) {
      case '[object Date]':
        return 'date';
      case '[object RegExp]':
        return 'regexp';
      case '[object Arguments]':
        return 'arguments';
      case '[object Array]':
        return 'array';
      case '[object Error]':
        return 'error';
    }
    return null === e
      ? 'null'
      : void 0 === e
      ? 'undefined'
      : e != e
      ? 'nan'
      : e && 1 === e.nodeType
      ? 'element'
      : 'undefined' != typeof Buffer &&
        'function' == typeof Buffer.isBuffer &&
        Buffer.isBuffer(e)
      ? 'buffer'
      : t((e = e.valueOf ? e.valueOf() : Object.prototype.valueOf.apply(e)));
  }
  function a(e, t, i) {
    return (
      _(e) === i ||
      (O.error(
        'Invalid ' + t + ' input type. Expected ' + i + ' but received ' + _(e)
      ),
      !1)
    );
  }
  function u(e) {
    var t = _(e);
    if ('object' !== t)
      return (
        O.error(
          'Error: invalid properties format. Expecting Javascript object, received ' +
            t +
            ', ignoring'
        ),
        {}
      );
    if (Object.keys(e).length > w.MAX_PROPERTY_KEYS)
      return (
        O.error('Error: too many properties (more than 1000), ignoring'), {}
      );
    var i,
      n,
      o,
      r = {};
    for (var s in e) {
      Object.prototype.hasOwnProperty.call(e, s) &&
        ('string' !== (n = _((i = s))) &&
          ((i = String(i)),
          O.warn(
            'WARNING: Non-string property key, received type ' +
              n +
              ', coercing to string "' +
              i +
              '"'
          )),
        null !== (o = R(i, e[s])) && (r[i] = o));
    }
    return r;
  }
  function v() {
    for (var e = '', t = 0; t < 22; ++t)
      e +=
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.charAt(
          Math.floor(64 * Math.random())
        );
    return e;
  }
  function b(e) {
    try {
      for (
        var t = document.cookie.split(';'), i = null, n = 0;
        n < t.length;
        n++
      ) {
        for (var o = t[n]; ' ' === o.charAt(0); ) o = o.substring(1, o.length);
        if (0 === o.indexOf(e)) {
          i = o.substring(e.length, o.length);
          break;
        }
      }
      return i;
    } catch (e) {
      return null;
    }
  }
  function g(e, t, i) {
    var n,
      o = null !== t ? i.expirationDays : -1;
    o &&
      ((n = new Date()).setTime(n.getTime() + 24 * o * 60 * 60 * 1e3), (o = n));
    var r = e + '=' + t;
    o && (r += '; expires=' + o.toUTCString()),
      (r += '; path=/'),
      i.domain && (r += '; domain=' + i.domain),
      i.secure && (r += '; Secure'),
      i.sameSite && (r += '; SameSite=' + i.sameSite),
      (document.cookie = r);
  }
  function m(e) {
    var t,
      i = 0 < arguments.length && void 0 !== e ? e : '',
      n = i.split('.')[w.LAST_EVENT_TIME_INDEX];
    return (
      n && (t = parseInt(n, 32)),
      t || (P.warn('unable to parse malformed cookie: '.concat(i)), 0)
    );
  }
  function E(e) {
    if (e) {
      if ('undefined' != typeof document) {
        var t = document.createElement('a');
        return (t.href = e), t.hostname || h.location.hostname;
      }
      if ('function' == typeof URL)
        return new URL(e).hostname || h.location.hostname;
    }
    return h.location.hostname;
  }
  function I(e) {
    var t = '';
    return (
      H.domain &&
        (t = '.' === H.domain.charAt(0) ? H.domain.substring(1) : H.domain),
      e + t
    );
  }
  var e,
    S,
    N,
    k = { DISABLE: 0, ERROR: 1, WARN: 2, INFO: 3 },
    T = k.WARN,
    O = {
      error: function (e) {
        k.ERROR <= T && x(e);
      },
      warn: function (e) {
        k.WARN <= T && x(e);
      },
      info: function (e) {
        k.INFO <= T && x(e);
      },
    },
    x = function (e) {
      try {
        console.log('[Amplitude] ' + e);
      } catch (e) {}
    },
    A = function (e) {
      return 'string' === _(e) && e.length > w.MAX_STRING_LENGTH
        ? e.substring(0, w.MAX_STRING_LENGTH)
        : e;
    },
    C = ['nan', 'function', 'arguments', 'regexp', 'element'],
    R = function e(t, i) {
      var n = _(i);
      if (-1 !== C.indexOf(n))
        O.warn(
          'WARNING: Property key "' +
            t +
            '" with invalid value type ' +
            n +
            ', ignoring'
        ),
          (i = null);
      else if ('undefined' === n) i = null;
      else if ('error' === n)
        (i = String(i)),
          O.warn(
            'WARNING: Property key "' +
              t +
              '" with value type error, coercing to ' +
              i
          );
      else if ('array' === n) {
        for (var o = [], r = 0; r < i.length; r++) {
          var s = i[r],
            a = _(s);
          'array' !== a
            ? 'object' === a
              ? o.push(u(s))
              : o.push(e(t, s))
            : O.warn(
                'WARNING: Cannot have ' +
                  a +
                  ' nested in an array property value, skipping'
              );
        }
        i = o;
      } else 'object' === n && (i = u(i));
      return i;
    },
    U = function (e, t) {
      var i = _(t);
      if ('string' === i) return t;
      if ('date' === i || 'number' === i || 'boolean' === i)
        return (
          (t = String(t)),
          O.warn(
            'WARNING: Non-string groupName, received type ' +
              i +
              ', coercing to string "' +
              t +
              '"'
          ),
          t
        );
      if ('array' === i) {
        for (var n = [], o = 0; o < t.length; o++) {
          var r = t[o],
            s = _(r);
          'array' !== s && 'object' !== s
            ? 'string' === s
              ? n.push(r)
              : ('date' !== s && 'number' !== s && 'boolean' !== s) ||
                ((r = String(r)),
                O.warn(
                  'WARNING: Non-string groupName, received type ' +
                    s +
                    ', coercing to string "' +
                    r +
                    '"'
                ),
                n.push(r))
            : O.warn('WARNING: Skipping nested ' + s + ' in array groupName');
        }
        return n;
      }
      O.warn(
        'WARNING: Non-string groupName, received type ' +
          i +
          '. Please use strings or array of strings for groupName'
      );
    },
    D = function (e) {
      Object.prototype.hasOwnProperty.call(k, e) && (T = k[e]);
    },
    P = O,
    q = function (e) {
      return !e || 0 === e.length;
    },
    j = function () {
      return 'undefined' != typeof WorkerGlobalScope;
    },
    M = function (e, t) {
      e = e.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
      var i = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(t);
      return null === i ? void 0 : decodeURIComponent(i[1].replace(/\+/g, ' '));
    },
    G = function e(t) {
      if ('array' === _(t)) for (var i = 0; i < t.length; i++) t[i] = e(t[i]);
      else if ('object' === _(t)) for (var n in t) n in t && (t[n] = e(t[n]));
      else t = A(t);
      return t;
    },
    V = function (e) {
      var t = _(e);
      if ('object' !== t)
        return (
          O.error(
            'Error: invalid groups format. Expecting Javascript object, received ' +
              t +
              ', ignoring'
          ),
          {}
        );
      var i,
        n,
        o,
        r = {};
      for (var s in e) {
        Object.prototype.hasOwnProperty.call(e, s) &&
          ('string' !== (n = _((i = s))) &&
            ((i = String(i)),
            O.warn(
              'WARNING: Non-string groupType, received type ' +
                n +
                ', coercing to string "' +
                i +
                '"'
            )),
          null !== (o = U(i, e[s])) && (r[i] = o));
      }
      return r;
    },
    L = a,
    F = u,
    z = function (e) {
      return (
        !!a(e, 'deviceId', 'string') &&
        (!e.includes('.') ||
          (O.error(
            "Device IDs may not contain '.' characters. Value will be ignored: \"".concat(
              e,
              '"'
            )
          ),
          !1))
      );
    },
    K = function (e) {
      return (
        !!a(e, 'transport', 'string') &&
        (e !== w.TRANSPORT_HTTP && e !== w.TRANSPORT_BEACON
          ? (O.error(
              "transport value must be one of '"
                .concat(w.TRANSPORT_BEACON, "' or '")
                .concat(w.TRANSPORT_HTTP, "'")
            ),
            !1)
          : !(e !== w.TRANSPORT_HTTP && !navigator.sendBeacon) ||
            (O.error(
              'browser does not support sendBeacon, so transport must be HTTP'
            ),
            !1))
      );
    },
    B = function (e) {
      return (
        !!(a(e, 'sessionId', 'number') && 0 < new Date(e).getTime()) ||
        (O.error(
          'sessionId value must in milliseconds since epoch (Unix Timestamp)'
        ),
        !1)
      );
    },
    X = function () {
      return h.location;
    },
    W = {
      set: g,
      get: b,
      getAll: function (e) {
        try {
          var t = document.cookie.split(';').map(function (e) {
              return e.trimStart();
            }),
            i = [],
            n = !0,
            o = !1,
            r = void 0;
          try {
            for (
              var s, a = t[Symbol.iterator]();
              !(n = (s = a.next()).done);
              n = !0
            ) {
              for (var u = s.value; ' ' === u.charAt(0); ) u = u.substring(1);
              0 === u.indexOf(e) && i.push(u.substring(e.length));
            }
          } catch (e) {
            (o = !0), (r = e);
          } finally {
            try {
              n || null == a.return || a.return();
            } finally {
              if (o) throw r;
            }
          }
          return i;
        } catch (e) {
          return [];
        }
      },
      getLastEventTime: m,
      sortByEventTime: function (e) {
        return o(e).sort(function (e, t) {
          var i = m(e);
          return m(t) - i;
        });
      },
      areCookiesEnabled: function (e) {
        var t = 0 < arguments.length && void 0 !== e ? e : {},
          i = w.COOKIE_TEST_PREFIX + v();
        if ('undefined' == typeof document) return !1;
        var n = !1;
        try {
          var o = String(Date.now());
          g(i, o, t),
            P.info('Testing if cookies available'),
            (n = b(i + '=') === o);
        } catch (e) {
          P.warn(
            'Error thrown when checking for cookies. Reason: "'.concat(e, '"')
          );
        } finally {
          P.info('Cleaning up cookies availability test'), g(i, null, t);
        }
        return n;
      },
    },
    $ = function (e) {
      var t = E(e).split('.'),
        i = [],
        n = '_tldtest_' + v();
      if (j()) return '';
      for (var o = t.length - 2; 0 <= o; --o) i.push(t.slice(o).join('.'));
      for (var r = 0; r < i.length; ++r) {
        var s = i[r],
          a = { domain: '.' + s };
        if ((W.set(n, 1, a), W.get(n))) return W.set(n, null, a), s;
      }
      return '';
    },
    H = { expirationDays: void 0, domain: void 0 },
    Y = function (e) {
      var t = I(e) + '=',
        i = W.get(t);
      try {
        if (i) return JSON.parse(f.decode(i));
      } catch (e) {
        return null;
      }
      return null;
    },
    Z = function (e, t) {
      try {
        return W.set(I(e), f.encode(JSON.stringify(t)), H), !0;
      } catch (e) {
        return !1;
      }
    },
    J = function (e) {
      try {
        return W.set(I(e), null, H), !0;
      } catch (e) {
        return !1;
      }
    },
    Q = {
      reset: function () {
        H = { expirationDays: void 0, domain: void 0 };
      },
      options: function (e) {
        if (0 === arguments.length) return H;
        (e = e || {}),
          (H.expirationDays = e.expirationDays),
          (H.secure = e.secure),
          (H.sameSite = e.sameSite);
        var t = q(e.domain) ? '.' + $(X().href) : e.domain,
          i = Math.random();
        (H.domain = t), Z('amplitude_test', i);
        var n = Y('amplitude_test');
        return (
          (n && n === i) || (t = null), J('amplitude_test'), (H.domain = t), H
        );
      },
      get: Y,
      set: Z,
      remove: J,
      setRaw: function (e, t) {
        try {
          return W.set(I(e), t, H), !0;
        } catch (e) {
          return !1;
        }
      },
      getRaw: function (e) {
        var t = I(e) + '=';
        return W.get(t);
      },
    },
    ee = (function () {
      function e() {
        p(this, e), (this.map = new Map()), (this.length = 0);
      }
      return (
        i(e, [
          {
            key: 'key',
            value: function (e) {
              var t = Array.from(this.map.keys())[e];
              return this.map.get(t);
            },
          },
          {
            key: 'getItem',
            value: function (e) {
              return this.map.get(e);
            },
          },
          {
            key: 'setItem',
            value: function (e, t) {
              this.map.has(e) || (this.length += 1), this.map.set(e, t);
            },
          },
          {
            key: 'removeItem',
            value: function (e) {
              this.map.has(e) && (--this.length, this.map.delete(e));
            },
          },
          {
            key: 'clear',
            value: function () {
              this.map.clear(), (this.length = 0);
            },
          },
        ]),
        e
      );
    })();
  if (
    (function () {
      var e,
        t = new Date();
      try {
        return (
          h.localStorage.setItem(t, t),
          (e = h.localStorage.getItem(t) === String(t)),
          h.localStorage.removeItem(t),
          e
        );
      } catch (e) {}
      return !1;
    })()
  )
    e = h.localStorage;
  else if (void 0 !== h && h.globalStorage)
    try {
      e = h.globalStorage[h.location.hostname];
    } catch (e) {}
  else {
    'undefined' != typeof document
      ? ((S = document.createElement('div')),
        (N = 'localStorage'),
        (S.style.display = 'none'),
        document.getElementsByTagName('head')[0].appendChild(S),
        S.addBehavior &&
          (S.addBehavior('#default#userdata'),
          (e = {
            length: 0,
            setItem: function (e, t) {
              S.load(N),
                S.getAttribute(e) || this.length++,
                S.setAttribute(e, t),
                S.save(N);
            },
            getItem: function (e) {
              return S.load(N), S.getAttribute(e);
            },
            removeItem: function (e) {
              S.load(N),
                S.getAttribute(e) && this.length--,
                S.removeAttribute(e),
                S.save(N);
            },
            clear: function () {
              S.load(N);
              for (
                var e, t = 0;
                (e = S.XMLDocument.documentElement.attributes[t++]);

              )
                S.removeAttribute(e.name);
              S.save(N), (this.length = 0);
            },
            key: function (e) {
              return S.load(N), S.XMLDocument.documentElement.attributes[e];
            },
          }),
          S.load(N),
          (e.length = S.XMLDocument.documentElement.attributes.length)))
      : j() && (e = new ee());
  }
  function te() {
    this.storage = null;
  }
  var ie,
    ne = (e = e || {
      length: 0,
      setItem: function () {},
      getItem: function () {},
      removeItem: function () {},
      clear: function () {},
      key: function () {},
    });
  te.prototype.getStorage = function () {
    return (
      null !== this.storage ||
        (W.areCookiesEnabled()
          ? (this.storage = Q)
          : ((i = 'amp_cookiestore_'),
            (this.storage = {
              _options: { expirationDays: void 0, domain: void 0, secure: !1 },
              reset: function () {
                this._options = {
                  expirationDays: void 0,
                  domain: void 0,
                  secure: !1,
                };
              },
              options: function (e) {
                return 0 === arguments.length
                  ? this._options
                  : ((e = e || {}),
                    (this._options.expirationDays =
                      e.expirationDays || this._options.expirationDays),
                    (this._options.domain =
                      e.domain ||
                      this._options.domain ||
                      (h && h.location && h.location.hostname)),
                    (this._options.secure = e.secure || !1));
              },
              get: function (e) {
                try {
                  return JSON.parse(ne.getItem(i + e));
                } catch (e) {}
                return null;
              },
              set: function (e, t) {
                try {
                  return ne.setItem(i + e, JSON.stringify(t)), !0;
                } catch (e) {}
                return !1;
              },
              remove: function (e) {
                try {
                  ne.removeItem(i + e);
                } catch (e) {
                  return !1;
                }
              },
            }))),
      this.storage
    );
    var i;
  };
  function oe(e, t) {
    function i(e, t, i, n) {
      return M(e, t) || M(i, n);
    }
    function n(e, t) {
      q(t) || (l[e] = t);
    }
    var o = e ? '?' + e.split('.').slice(-1)[0].replace(/\|/g, '&') : '',
      r = i(w.UTM_SOURCE, t, 'utmcsr', o),
      s = i(w.UTM_MEDIUM, t, 'utmcmd', o),
      a = i(w.UTM_CAMPAIGN, t, 'utmccn', o),
      u = i(w.UTM_TERM, t, 'utmctr', o),
      c = i(w.UTM_CONTENT, t, 'utmcct', o),
      l = {};
    return (
      n(w.UTM_SOURCE, r),
      n(w.UTM_MEDIUM, s),
      n(w.UTM_CAMPAIGN, a),
      n(w.UTM_TERM, u),
      n(w.UTM_CONTENT, c),
      l
    );
  }
  function re() {
    (this.userPropertiesOperations = {}), (this.properties = []);
  }
  var se =
      (s((ie = {}), w.STORAGE_COOKIES, !0),
      s(ie, w.STORAGE_NONE, !0),
      s(ie, w.STORAGE_LOCAL, !0),
      s(ie, w.STORAGE_SESSION, !0),
      ie),
    ae = (function () {
      function l(e) {
        var t = e.storageKey,
          i = e.disableCookies,
          n = e.domain,
          o = e.secure,
          r = e.sameSite,
          s = e.expirationDays,
          a = e.storage;
        p(this, l),
          (this.storageKey = t),
          (this.domain = n),
          (this.secure = o),
          (this.sameSite = r),
          (this.expirationDays = s),
          (this.cookieDomain = '');
        var u,
          c = $(X().href);
        (this.cookieDomain = n || (c ? '.' + c : null)),
          se[a]
            ? (this.storage = a)
            : ((u =
                i ||
                !W.areCookiesEnabled({
                  domain: this.cookieDomain,
                  secure: this.secure,
                  sameSite: this.sameSite,
                  expirationDays: this.expirationDays,
                })),
              (this.storage = u ? w.STORAGE_LOCAL : w.STORAGE_COOKIES));
      }
      return (
        i(l, [
          {
            key: 'getCookieStorageKey',
            value: function () {
              if (!this.domain) return this.storageKey;
              var e =
                '.' === this.domain.charAt(0)
                  ? this.domain.substring(1)
                  : this.domain;
              return ''.concat(this.storageKey).concat(e ? '_'.concat(e) : '');
            },
          },
          {
            key: 'save',
            value: function (e) {
              var t = e.deviceId,
                i = e.userId,
                n = e.optOut,
                o = e.sessionId,
                r = e.lastEventTime,
                s = e.eventId,
                a = e.identifyId,
                u = e.sequenceNumber;
              if (this.storage !== w.STORAGE_NONE) {
                var c = [
                  t,
                  f.encode(i || ''),
                  n ? '1' : '',
                  o ? o.toString(32) : '0',
                  r ? r.toString(32) : '0',
                  s ? s.toString(32) : '0',
                  a ? a.toString(32) : '0',
                  u ? u.toString(32) : '0',
                ].join('.');
                switch (this.storage) {
                  case w.STORAGE_SESSION:
                    h.sessionStorage &&
                      h.sessionStorage.setItem(this.storageKey, c);
                    break;
                  case w.STORAGE_LOCAL:
                    ne.setItem(this.storageKey, c);
                    break;
                  case w.STORAGE_COOKIES:
                    this.saveCookie(c);
                }
              }
            },
          },
          {
            key: 'saveCookie',
            value: function (e) {
              W.set(this.getCookieStorageKey(), e, {
                domain: this.cookieDomain,
                secure: this.secure,
                sameSite: this.sameSite,
                expirationDays: this.expirationDays,
              });
            },
          },
          {
            key: 'load',
            value: function () {
              var e,
                t,
                i,
                n,
                o = this;
              if (
                (this.storage === w.STORAGE_COOKIES &&
                  ((e = this.getCookieStorageKey() + '='),
                  (n =
                    0 === (t = W.getAll(e)).length || 1 === t.length
                      ? t[0]
                      : ((i = W.sortByEventTime(t)[0]),
                        t.forEach(function () {
                          return W.set(o.getCookieStorageKey(), null, {});
                        }),
                        this.saveCookie(i),
                        W.get(e)))),
                !(n = n || ne.getItem(this.storageKey)))
              )
                try {
                  n =
                    h.sessionStorage &&
                    h.sessionStorage.getItem(this.storageKey);
                } catch (e) {
                  P.info(
                    'window.sessionStorage unavailable. Reason: "'.concat(
                      e,
                      '"'
                    )
                  );
                }
              if (!n) return null;
              var r = n.split('.'),
                s = null;
              if (r[w.USER_ID_INDEX])
                try {
                  s = f.decode(r[w.USER_ID_INDEX]);
                } catch (e) {
                  s = null;
                }
              return {
                deviceId: r[w.DEVICE_ID_INDEX],
                userId: s,
                optOut: '1' === r[w.OPT_OUT_INDEX],
                sessionId: parseInt(r[w.SESSION_ID_INDEX], 32),
                lastEventTime: parseInt(r[w.LAST_EVENT_TIME_INDEX], 32),
                eventId: parseInt(r[w.EVENT_ID_INDEX], 32),
                identifyId: parseInt(r[w.IDENTIFY_ID_INDEX], 32),
                sequenceNumber: parseInt(r[w.SEQUENCE_NUMBER_INDEX], 32),
              };
            },
          },
          {
            key: 'clear',
            value: function () {
              var e;
              if (
                (this.storage === w.STORAGE_COOKIES &&
                  ((e = W.get(this.getCookieStorageKey() + '=')),
                  W.set(this.getCookieStorageKey(), null, {
                    domain: this.cookieDomain,
                    secure: this.secure,
                    sameSite: this.sameSite,
                    expirationDays: 0,
                  })),
                e || ((e = ne.getItem(this.storageKey)), ne.clear()),
                !e)
              )
                try {
                  (e =
                    h.sessionStorage &&
                    h.sessionStorage.getItem(this.storageKey)),
                    h.sessionStorage.clear();
                } catch (e) {
                  P.info(
                    'window.sessionStorage unavailable. Reason: "'.concat(
                      e,
                      '"'
                    )
                  );
                }
              return !!e;
            },
          },
        ]),
        l
      );
    })(),
    ue = '$clearAll';
  (re.prototype.add = function (e, t) {
    return (
      'number' === _(t) || 'string' === _(t)
        ? this._addOperation('$add', e, t)
        : P.error(
            'Unsupported type for value: ' +
              _(t) +
              ', expecting number or string'
          ),
      this
    );
  }),
    (re.prototype.append = function (e, t) {
      return this._addOperation('$append', e, t), this;
    }),
    (re.prototype.clearAll = function () {
      return (
        0 < Object.keys(this.userPropertiesOperations).length
          ? Object.prototype.hasOwnProperty.call(
              this.userPropertiesOperations,
              ue
            ) ||
            P.error(
              'Need to send $clearAll on its own Identify object without any other operations, skipping $clearAll'
            )
          : (this.userPropertiesOperations[ue] = '-'),
        this
      );
    }),
    (re.prototype.prepend = function (e, t) {
      return this._addOperation('$prepend', e, t), this;
    }),
    (re.prototype.set = function (e, t) {
      return this._addOperation('$set', e, t), this;
    }),
    (re.prototype.setOnce = function (e, t) {
      return this._addOperation('$setOnce', e, t), this;
    }),
    (re.prototype.unset = function (e) {
      return this._addOperation('$unset', e, '-'), this;
    }),
    (re.prototype.preInsert = function (e, t) {
      return this._addOperation('$preInsert', e, t), this;
    }),
    (re.prototype.postInsert = function (e, t) {
      return this._addOperation('$postInsert', e, t), this;
    }),
    (re.prototype.remove = function (e, t) {
      return this._addOperation('$remove', e, t), this;
    }),
    (re.prototype._addOperation = function (e, t, i) {
      Object.prototype.hasOwnProperty.call(this.userPropertiesOperations, ue)
        ? P.error(
            'This identify already contains a $clearAll operation, skipping operation ' +
              e
          )
        : -1 === this.properties.indexOf(t)
        ? (Object.prototype.hasOwnProperty.call(
            this.userPropertiesOperations,
            e
          ) || (this.userPropertiesOperations[e] = {}),
          (this.userPropertiesOperations[e][t] = i),
          this.properties.push(t))
        : P.error(
            'User property "' +
              t +
              '" already used in this identify, skipping operation ' +
              e
          );
    });
  var ce =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function le(e, t, i) {
    return (
      e(
        (i = {
          path: t,
          exports: {},
          require: function (e, t) {
            return (function () {
              throw new Error(
                'Dynamic requires are not currently supported by @rollup/plugin-commonjs'
              );
            })(null == t && i.path);
          },
        }),
        i.exports
      ),
      i.exports
    );
  }
  var pe = le(function (e) {
      function p(e, t) {
        var i = (65535 & e) + (65535 & t);
        return (((e >> 16) + (t >> 16) + (i >> 16)) << 16) | (65535 & i);
      }
      function a(e, t, i, n, o, r) {
        return p(((s = p(p(t, e), p(n, r))) << (a = o)) | (s >>> (32 - a)), i);
        var s, a;
      }
      function d(e, t, i, n, o, r, s) {
        return a((t & i) | (~t & n), e, t, o, r, s);
      }
      function h(e, t, i, n, o, r, s) {
        return a((t & n) | (i & ~n), e, t, o, r, s);
      }
      function f(e, t, i, n, o, r, s) {
        return a(t ^ i ^ n, e, t, o, r, s);
      }
      function v(e, t, i, n, o, r, s) {
        return a(i ^ (t | ~n), e, t, o, r, s);
      }
      function u(e, t) {
        var i, n, o, r;
        (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
        for (
          var s = 1732584193,
            a = -271733879,
            u = -1732584194,
            c = 271733878,
            l = 0;
          l < e.length;
          l += 16
        )
          (s = d((i = s), (n = a), (o = u), (r = c), e[l], 7, -680876936)),
            (c = d(c, s, a, u, e[l + 1], 12, -389564586)),
            (u = d(u, c, s, a, e[l + 2], 17, 606105819)),
            (a = d(a, u, c, s, e[l + 3], 22, -1044525330)),
            (s = d(s, a, u, c, e[l + 4], 7, -176418897)),
            (c = d(c, s, a, u, e[l + 5], 12, 1200080426)),
            (u = d(u, c, s, a, e[l + 6], 17, -1473231341)),
            (a = d(a, u, c, s, e[l + 7], 22, -45705983)),
            (s = d(s, a, u, c, e[l + 8], 7, 1770035416)),
            (c = d(c, s, a, u, e[l + 9], 12, -1958414417)),
            (u = d(u, c, s, a, e[l + 10], 17, -42063)),
            (a = d(a, u, c, s, e[l + 11], 22, -1990404162)),
            (s = d(s, a, u, c, e[l + 12], 7, 1804603682)),
            (c = d(c, s, a, u, e[l + 13], 12, -40341101)),
            (u = d(u, c, s, a, e[l + 14], 17, -1502002290)),
            (s = h(
              s,
              (a = d(a, u, c, s, e[l + 15], 22, 1236535329)),
              u,
              c,
              e[l + 1],
              5,
              -165796510
            )),
            (c = h(c, s, a, u, e[l + 6], 9, -1069501632)),
            (u = h(u, c, s, a, e[l + 11], 14, 643717713)),
            (a = h(a, u, c, s, e[l], 20, -373897302)),
            (s = h(s, a, u, c, e[l + 5], 5, -701558691)),
            (c = h(c, s, a, u, e[l + 10], 9, 38016083)),
            (u = h(u, c, s, a, e[l + 15], 14, -660478335)),
            (a = h(a, u, c, s, e[l + 4], 20, -405537848)),
            (s = h(s, a, u, c, e[l + 9], 5, 568446438)),
            (c = h(c, s, a, u, e[l + 14], 9, -1019803690)),
            (u = h(u, c, s, a, e[l + 3], 14, -187363961)),
            (a = h(a, u, c, s, e[l + 8], 20, 1163531501)),
            (s = h(s, a, u, c, e[l + 13], 5, -1444681467)),
            (c = h(c, s, a, u, e[l + 2], 9, -51403784)),
            (u = h(u, c, s, a, e[l + 7], 14, 1735328473)),
            (s = f(
              s,
              (a = h(a, u, c, s, e[l + 12], 20, -1926607734)),
              u,
              c,
              e[l + 5],
              4,
              -378558
            )),
            (c = f(c, s, a, u, e[l + 8], 11, -2022574463)),
            (u = f(u, c, s, a, e[l + 11], 16, 1839030562)),
            (a = f(a, u, c, s, e[l + 14], 23, -35309556)),
            (s = f(s, a, u, c, e[l + 1], 4, -1530992060)),
            (c = f(c, s, a, u, e[l + 4], 11, 1272893353)),
            (u = f(u, c, s, a, e[l + 7], 16, -155497632)),
            (a = f(a, u, c, s, e[l + 10], 23, -1094730640)),
            (s = f(s, a, u, c, e[l + 13], 4, 681279174)),
            (c = f(c, s, a, u, e[l], 11, -358537222)),
            (u = f(u, c, s, a, e[l + 3], 16, -722521979)),
            (a = f(a, u, c, s, e[l + 6], 23, 76029189)),
            (s = f(s, a, u, c, e[l + 9], 4, -640364487)),
            (c = f(c, s, a, u, e[l + 12], 11, -421815835)),
            (u = f(u, c, s, a, e[l + 15], 16, 530742520)),
            (s = v(
              s,
              (a = f(a, u, c, s, e[l + 2], 23, -995338651)),
              u,
              c,
              e[l],
              6,
              -198630844
            )),
            (c = v(c, s, a, u, e[l + 7], 10, 1126891415)),
            (u = v(u, c, s, a, e[l + 14], 15, -1416354905)),
            (a = v(a, u, c, s, e[l + 5], 21, -57434055)),
            (s = v(s, a, u, c, e[l + 12], 6, 1700485571)),
            (c = v(c, s, a, u, e[l + 3], 10, -1894986606)),
            (u = v(u, c, s, a, e[l + 10], 15, -1051523)),
            (a = v(a, u, c, s, e[l + 1], 21, -2054922799)),
            (s = v(s, a, u, c, e[l + 8], 6, 1873313359)),
            (c = v(c, s, a, u, e[l + 15], 10, -30611744)),
            (u = v(u, c, s, a, e[l + 6], 15, -1560198380)),
            (a = v(a, u, c, s, e[l + 13], 21, 1309151649)),
            (s = v(s, a, u, c, e[l + 4], 6, -145523070)),
            (c = v(c, s, a, u, e[l + 11], 10, -1120210379)),
            (u = v(u, c, s, a, e[l + 2], 15, 718787259)),
            (a = v(a, u, c, s, e[l + 9], 21, -343485551)),
            (s = p(s, i)),
            (a = p(a, n)),
            (u = p(u, o)),
            (c = p(c, r));
        return [s, a, u, c];
      }
      function c(e) {
        for (var t = '', i = 32 * e.length, n = 0; n < i; n += 8)
          t += String.fromCharCode((e[n >> 5] >>> n % 32) & 255);
        return t;
      }
      function l(e) {
        var t = [];
        for (t[(e.length >> 2) - 1] = void 0, n = 0; n < t.length; n += 1)
          t[n] = 0;
        for (var i = 8 * e.length, n = 0; n < i; n += 8)
          t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
        return t;
      }
      function n(e) {
        for (var t, i = '0123456789abcdef', n = '', o = 0; o < e.length; o += 1)
          (t = e.charCodeAt(o)),
            (n += i.charAt((t >>> 4) & 15) + i.charAt(15 & t));
        return n;
      }
      function i(e) {
        return unescape(encodeURIComponent(e));
      }
      function o(e) {
        return c(u(l((t = i(e))), 8 * t.length));
        var t;
      }
      function r(e, t) {
        return (function (e, t) {
          var i,
            n,
            o = l(e),
            r = [],
            s = [];
          for (
            r[15] = s[15] = void 0,
              16 < o.length && (o = u(o, 8 * e.length)),
              i = 0;
            i < 16;
            i += 1
          )
            (r[i] = 909522486 ^ o[i]), (s[i] = 1549556828 ^ o[i]);
          return (
            (n = u(r.concat(l(t)), 512 + 8 * t.length)), c(u(s.concat(n), 640))
          );
        })(i(e), i(t));
      }
      function t(e, t, i) {
        return t ? (i ? r(t, e) : n(r(t, e))) : i ? o(e) : n(o(e));
      }
      var s;
      (s = ce), e.exports ? (e.exports = t) : (s.md5 = t);
    }),
    de = function (e) {
      return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
      });
    },
    he = Object.getOwnPropertySymbols,
    fe = Object.prototype.hasOwnProperty,
    ve = Object.prototype.propertyIsEnumerable;
  var be = (function () {
      try {
        if (!Object.assign) return;
        var e = new String('abc');
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return;
        for (var t = {}, i = 0; i < 10; i++)
          t['_' + String.fromCharCode(i)] = i;
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join('')
        )
          return;
        var n = {};
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function (e) {
            n[e] = e;
          }),
          'abcdefghijklmnopqrst' !== Object.keys(Object.assign({}, n)).join('')
            ? void 0
            : 1
        );
      } catch (e) {
        return;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (
            var i,
              n,
              o = (function (e) {
                if (null == e)
                  throw new TypeError(
                    'Object.assign cannot be called with null or undefined'
                  );
                return Object(e);
              })(e),
              r = 1;
            r < arguments.length;
            r++
          ) {
            for (var s in (i = Object(arguments[r])))
              fe.call(i, s) && (o[s] = i[s]);
            if (he) {
              n = he(i);
              for (var a = 0; a < n.length; a++)
                ve.call(i, n[a]) && (o[n[a]] = i[n[a]]);
            }
          }
          return o;
        },
    ge = '%[a-f0-9]{2}';
  new RegExp(ge, 'gi'), new RegExp('(' + ge + ')+', 'gi');
  function me(e, t) {
    return t.encode ? (t.strict ? de : encodeURIComponent)(e) : e;
  }
  function ye(e, t, i) {
    (this.url = e), (this.data = t || {}), (this.headers = i);
  }
  var we = function (n, o) {
    !1 === (o = be({ encode: !0, strict: !0, arrayFormat: 'none' }, o)).sort &&
      (o.sort = function () {});
    var r = (function (n) {
      switch (n.arrayFormat) {
        case 'index':
          return function (e, t, i) {
            return null === t
              ? [me(e, n), '[', i, ']'].join('')
              : [me(e, n), '[', me(i, n), ']=', me(t, n)].join('');
          };
        case 'bracket':
          return function (e, t) {
            return null === t ? me(e, n) : [me(e, n), '[]=', me(t, n)].join('');
          };
        default:
          return function (e, t) {
            return null === t ? me(e, n) : [me(e, n), '=', me(t, n)].join('');
          };
      }
    })(o);
    return n
      ? Object.keys(n)
          .sort(o.sort)
          .map(function (t) {
            var e = n[t];
            if (void 0 === e) return '';
            if (null === e) return me(t, o);
            if (Array.isArray(e)) {
              var i = [];
              return (
                e.slice().forEach(function (e) {
                  void 0 !== e && i.push(r(t, e, i.length));
                }),
                i.join('&')
              );
            }
            return me(t, o) + '=' + me(e, o);
          })
          .filter(function (e) {
            return 0 < e.length;
          })
          .join('&')
      : '';
  };
  ye.prototype.send = function (t) {
    var e, i, n;
    h.XDomainRequest
      ? ((e = new h.XDomainRequest()).open('POST', this.url, !0),
        (e.onload = function () {
          t(200, e.responseText);
        }),
        (e.onerror = function () {
          'Request Entity Too Large' === e.responseText
            ? t(413, e.responseText)
            : t(500, e.responseText);
        }),
        (e.ontimeout = function () {}),
        (e.onprogress = function () {}),
        e.send(we(this.data)))
      : 'undefined' != typeof XMLHttpRequest
      ? ((i = new XMLHttpRequest()).open('POST', this.url, !0),
        (i.onreadystatechange = function () {
          4 === i.readyState && t(i.status, i.responseText);
        }),
        (function (e, t) {
          for (var i in t)
            ('Cross-Origin-Resource-Policy' === i && !t[i]) ||
              e.setRequestHeader(i, t[i]);
        })(i, this.headers),
        i.send(we(this.data)))
      : ((n = void 0),
        fetch(this.url, {
          method: 'POST',
          headers: this.headers,
          body: we(this.data),
        })
          .then(function (e) {
            return (n = e.status), e.text();
          })
          .then(function (e) {
            t(n, e);
          }));
  };
  function _e() {
    (this._price = null),
      (this._productId = null),
      (this._quantity = 1),
      (this._revenueType = null),
      (this._properties = null);
  }
  (_e.prototype.setProductId = function (e) {
    return (
      'string' !== _(e)
        ? P.error(
            'Unsupported type for productId: ' + _(e) + ', expecting string'
          )
        : q(e)
        ? P.error('Invalid empty productId')
        : (this._productId = e),
      this
    );
  }),
    (_e.prototype.setQuantity = function (e) {
      return (
        'number' !== _(e)
          ? P.error(
              'Unsupported type for quantity: ' + _(e) + ', expecting number'
            )
          : (this._quantity = parseInt(e)),
        this
      );
    }),
    (_e.prototype.setPrice = function (e) {
      return (
        'number' !== _(e)
          ? P.error(
              'Unsupported type for price: ' + _(e) + ', expecting number'
            )
          : (this._price = e),
        this
      );
    }),
    (_e.prototype.setRevenueType = function (e) {
      return (
        'string' !== _(e)
          ? P.error(
              'Unsupported type for revenueType: ' + _(e) + ', expecting string'
            )
          : (this._revenueType = e),
        this
      );
    }),
    (_e.prototype.setEventProperties = function (e) {
      return (
        'object' !== _(e)
          ? P.error(
              'Unsupported type for eventProperties: ' +
                _(e) +
                ', expecting object'
            )
          : (this._properties = F(e)),
        this
      );
    }),
    (_e.prototype._isValidRevenue = function () {
      return (
        'number' === _(this._price) ||
        (P.error('Invalid revenue, need to set price field'), !1)
      );
    }),
    (_e.prototype._toJSONObject = function () {
      var e = 'object' === _(this._properties) ? this._properties : {};
      return (
        null !== this._productId && (e[w.REVENUE_PRODUCT_ID] = this._productId),
        null !== this._quantity && (e[w.REVENUE_QUANTITY] = this._quantity),
        null !== this._price && (e[w.REVENUE_PRICE] = this._price),
        null !== this._revenueType &&
          (e[w.REVENUE_REVENUE_TYPE] = this._revenueType),
        e
      );
    });
  function Ee(e) {
    var t = w.EVENT_LOG_URL;
    switch (e) {
      case Te:
        t = w.EVENT_LOG_EU_URL;
        break;
      case ke:
        t = w.EVENT_LOG_URL;
    }
    return t;
  }
  function Ie(e) {
    d() ||
      j() ||
      P.warn(
        'amplitude-js will not work in a non-browser environment. If you are planning to add Amplitude to a node environment, please use @amplitude/node'
      ),
      (this._instanceName = q(e) ? w.DEFAULT_INSTANCE : e.toLowerCase()),
      (this._unsentEvents = []),
      (this._unsentIdentifys = []),
      (this._ua = new Se(navigator.userAgent).getResult()),
      (this.options = y({}, Oe, {
        trackingOptions: y({}, Oe.trackingOptions),
      })),
      (this.cookieStorage = new te().getStorage()),
      (this._q = []),
      (this._sending = !1),
      (this._updateScheduled = !1),
      (this._onInitCallbacks = []),
      (this._onNewSessionStartCallbacks = []),
      (this._eventId = 0),
      (this._identifyId = 0),
      (this._lastEventTime = null),
      (this._newSession = !1),
      (this._sequenceNumber = 0),
      (this._sessionId = null),
      (this._isInitialized = !1),
      (this._connector = null),
      (this._userAgent = (navigator && navigator.userAgent) || null);
  }
  var Se = le(function (F, z) {
      !(function (o, p) {
        function e(e) {
          for (var t = {}, i = 0; i < e.length; i++)
            t[e[i].toUpperCase()] = e[i];
          return t;
        }
        function r(e, t) {
          return typeof e == c && -1 !== q(t).indexOf(q(e));
        }
        function s(e, t) {
          if (typeof e == c)
            return (
              (e = e.replace(/^\s+|\s+$/g, '')),
              typeof t == u ? e : e.substring(0, 255)
            );
        }
        function a(e, t) {
          for (var i, n, o, r, s, a = 0; a < t.length && !r; ) {
            for (var u = t[a], c = t[a + 1], l = (i = 0); l < u.length && !r; )
              if ((r = u[l++].exec(e)))
                for (n = 0; n < c.length; n++)
                  (s = r[++i]),
                    typeof (o = c[n]) == h && 0 < o.length
                      ? 2 == o.length
                        ? typeof o[1] == d
                          ? (this[o[0]] = o[1].call(this, s))
                          : (this[o[0]] = o[1])
                        : 3 == o.length
                        ? typeof o[1] != d || (o[1].exec && o[1].test)
                          ? (this[o[0]] = s ? s.replace(o[1], o[2]) : p)
                          : (this[o[0]] = s ? o[1].call(this, s, o[2]) : p)
                        : 4 == o.length &&
                          (this[o[0]] = s
                            ? o[3].call(this, s.replace(o[1], o[2]))
                            : p)
                      : (this[o] = s || p);
            a += 2;
          }
        }
        function t(e, t) {
          for (var i in t)
            if (typeof t[i] == h && 0 < t[i].length) {
              for (var n = 0; n < t[i].length; n++)
                if (r(t[i][n], e)) return '?' === i ? p : i;
            } else if (r(t[i], e)) return '?' === i ? p : i;
          return e;
        }
        var d = 'function',
          u = 'undefined',
          h = 'object',
          c = 'string',
          l = 'model',
          f = 'name',
          v = 'type',
          b = 'vendor',
          g = 'version',
          m = 'architecture',
          i = 'console',
          n = 'mobile',
          y = 'tablet',
          w = 'smarttv',
          _ = 'wearable',
          E = 'embedded',
          I = 'Amazon',
          S = 'Apple',
          N = 'BlackBerry',
          k = 'Browser',
          T = 'Chrome',
          O = 'Firefox',
          x = 'Google',
          A = 'Microsoft',
          C = 'Motorola',
          R = 'Opera',
          U = 'Samsung',
          D = 'Sony',
          P = 'Zebra',
          q = function (e) {
            return e.toLowerCase();
          },
          j = {
            ME: '4.90',
            'NT 3.11': 'NT3.51',
            'NT 4.0': 'NT4.0',
            2e3: 'NT 5.0',
            XP: ['NT 5.1', 'NT 5.2'],
            Vista: 'NT 6.0',
            7: 'NT 6.1',
            8: 'NT 6.2',
            8.1: 'NT 6.3',
            10: ['NT 6.4', 'NT 10.0'],
            RT: 'ARM',
          },
          M = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [g, [f, 'Chrome']],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [g, [f, 'Edge']],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [f, g],
              [/opios[\/ ]+([\w\.]+)/i],
              [g, [f, R + ' Mini']],
              [/\bopr\/([\w\.]+)/i],
              [g, [f, R]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [f, g],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [g, [f, 'UC' + k]],
              [/\bqbcore\/([\w\.]+)/i],
              [g, [f, 'WeChat(Win) Desktop']],
              [/micromessenger\/([\w\.]+)/i],
              [g, [f, 'WeChat']],
              [/konqueror\/([\w\.]+)/i],
              [g, [f, 'Konqueror']],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [g, [f, 'IE']],
              [/yabrowser\/([\w\.]+)/i],
              [g, [f, 'Yandex']],
              [/(avast|avg)\/([\w\.]+)/i],
              [[f, /(.+)/, '$1 Secure ' + k], g],
              [/\bfocus\/([\w\.]+)/i],
              [g, [f, O + ' Focus']],
              [/\bopt\/([\w\.]+)/i],
              [g, [f, R + ' Touch']],
              [/coc_coc\w+\/([\w\.]+)/i],
              [g, [f, 'Coc Coc']],
              [/dolfin\/([\w\.]+)/i],
              [g, [f, 'Dolphin']],
              [/coast\/([\w\.]+)/i],
              [g, [f, R + ' Coast']],
              [/miuibrowser\/([\w\.]+)/i],
              [g, [f, 'MIUI ' + k]],
              [/fxios\/([-\w\.]+)/i],
              [g, [f, O]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[f, '360 ' + k]],
              [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
              [[f, /(.+)/, '$1 ' + k], g],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[f, /_/g, ' '], g],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [f, g],
              [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
              [f],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[f, 'Facebook'], g],
              [
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              [f, g],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [g, [f, 'GSA']],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [g, [f, T + ' Headless']],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[f, T + ' WebView'], g],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [g, [f, 'Android ' + k]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [f, g],
              [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
              [g, [f, 'Mobile Safari']],
              [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
              [g, f],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                f,
                [
                  g,
                  t,
                  {
                    '1.0': '/8',
                    1.2: '/1',
                    1.3: '/3',
                    '2.0': '/412',
                    '2.0.2': '/416',
                    '2.0.3': '/417',
                    '2.0.4': '/419',
                    '?': '/',
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [f, g],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[f, 'Netscape'], g],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [g, [f, O + ' Reality']],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [f, g],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, 'amd64']],
              [/(ia32(?=;))/i],
              [[m, q]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, 'ia32']],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, 'arm64']],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, 'armhf']],
              [/windows (ce|mobile); ppc;/i],
              [[m, 'arm']],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, '', q]],
              [/(sun4\w)[;\)]/i],
              [[m, 'sparc']],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, q]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [l, [b, U], [v, y]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [l, [b, U], [v, n]],
              [/((ipod|iphone)\d+,\d+)/i],
              [l, [b, S], [v, n]],
              [/(ipad\d+,\d+)/i],
              [l, [b, S], [v, y]],
              [/\((ip(?:hone|od)[\w ]*);/i],
              [l, [b, S], [v, n]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [l, [b, S], [v, y]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [l, [b, 'Huawei'], [v, y]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
              ],
              [l, [b, 'Huawei'], [v, n]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [l, /_/g, ' '],
                [b, 'Xiaomi'],
                [v, n],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [l, /_/g, ' '],
                [b, 'Xiaomi'],
                [v, y],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
              ],
              [l, [b, 'OPPO'], [v, n]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [l, [b, 'Vivo'], [v, n]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [l, [b, 'Realme'], [v, n]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [l, [b, C], [v, n]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [l, [b, C], [v, y]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [l, [b, 'LG'], [v, y]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [l, [b, 'LG'], [v, n]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [l, [b, 'Lenovo'], [v, y]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [l, /_/g, ' '],
                [b, 'Nokia'],
                [v, n],
              ],
              [/(pixel c)\b/i],
              [l, [b, x], [v, y]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [l, [b, x], [v, n]],
              [
                /droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [l, [b, D], [v, n]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [l, 'Xperia Tablet'],
                [b, D],
                [v, y],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [l, [b, 'OnePlus'], [v, n]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [l, [b, I], [v, y]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [l, /(.+)/g, 'Fire Phone $1'],
                [b, I],
                [v, n],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [l, b, [v, y]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [l, [b, N], [v, n]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [l, [b, 'ASUS'], [v, y]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [l, [b, 'ASUS'], [v, n]],
              [/(nexus 9)/i],
              [l, [b, 'HTC'], [v, y]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
              ],
              [b, [l, /_/g, ' '], [v, n]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [l, [b, 'Acer'], [v, y]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [l, [b, 'Meizu'], [v, n]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [l, [b, 'Sharp'], [v, n]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [b, l, [v, n]],
              [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [b, l, [v, y]],
              [/(surface duo)/i],
              [l, [b, A], [v, y]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [l, [b, 'Fairphone'], [v, n]],
              [/(u304aa)/i],
              [l, [b, 'AT&T'], [v, n]],
              [/\bsie-(\w*)/i],
              [l, [b, 'Siemens'], [v, n]],
              [/\b(rct\w+) b/i],
              [l, [b, 'RCA'], [v, y]],
              [/\b(venue[\d ]{2,7}) b/i],
              [l, [b, 'Dell'], [v, y]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [l, [b, 'Verizon'], [v, y]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [l, [b, 'Barnes & Noble'], [v, y]],
              [/\b(tm\d{3}\w+) b/i],
              [l, [b, 'NuVision'], [v, y]],
              [/\b(k88) b/i],
              [l, [b, 'ZTE'], [v, y]],
              [/\b(nx\d{3}j) b/i],
              [l, [b, 'ZTE'], [v, n]],
              [/\b(gen\d{3}) b.+49h/i],
              [l, [b, 'Swiss'], [v, n]],
              [/\b(zur\d{3}) b/i],
              [l, [b, 'Swiss'], [v, y]],
              [/\b((zeki)?tb.*\b) b/i],
              [l, [b, 'Zeki'], [v, y]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[b, 'Dragon Touch'], l, [v, y]],
              [/\b(ns-?\w{0,9}) b/i],
              [l, [b, 'Insignia'], [v, y]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [l, [b, 'NextBook'], [v, y]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[b, 'Voice'], l, [v, n]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[b, 'LvTel'], l, [v, n]],
              [/\b(ph-1) /i],
              [l, [b, 'Essential'], [v, n]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [l, [b, 'Envizen'], [v, y]],
              [/\b(trio[-\w\. ]+) b/i],
              [l, [b, 'MachSpeed'], [v, y]],
              [/\btu_(1491) b/i],
              [l, [b, 'Rotor'], [v, y]],
              [/(shield[\w ]+) b/i],
              [l, [b, 'Nvidia'], [v, y]],
              [/(sprint) (\w+)/i],
              [b, l, [v, n]],
              [/(kin\.[onetw]{3})/i],
              [
                [l, /\./g, ' '],
                [b, A],
                [v, n],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [l, [b, P], [v, y]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [l, [b, P], [v, n]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [b, l, [v, i]],
              [/droid.+; (shield) bui/i],
              [l, [b, 'Nvidia'], [v, i]],
              [/(playstation [345portablevi]+)/i],
              [l, [b, D], [v, i]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [l, [b, A], [v, i]],
              [/smart-tv.+(samsung)/i],
              [b, [v, w]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [l, /^/, 'SmartTV'],
                [b, U],
                [v, w],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [b, 'LG'],
                [v, w],
              ],
              [/(apple) ?tv/i],
              [b, [l, S + ' TV'], [v, w]],
              [/crkey/i],
              [
                [l, T + 'cast'],
                [b, x],
                [v, w],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [l, [b, I], [v, w]],
              [/\(dtv[\);].+(aquos)/i],
              [l, [b, 'Sharp'], [v, w]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
              ],
              [
                [b, s],
                [l, s],
                [v, w],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[v, w]],
              [/((pebble))app/i],
              [b, l, [v, _]],
              [/droid.+; (glass) \d/i],
              [l, [b, x], [v, _]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [l, [b, P], [v, _]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [b, [v, E]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [l, [v, n]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [l, [v, y]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[v, y]],
              [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
              [[v, n]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [l, [b, 'Generic']],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [g, [f, 'EdgeHTML']],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [g, [f, 'Blink']],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
              ],
              [f, g],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [g, f],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [f, g],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [f, [g, t, j]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [f, 'Windows'],
                [g, t, j],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [g, /_/g, '.'],
                [f, 'iOS'],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [f, 'Mac OS'],
                [g, /_/g, '.'],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
              [g, f],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [f, g],
              [/\(bb(10);/i],
              [g, [f, N]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [g, [f, 'Symbian']],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [g, [f, O + ' OS']],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [g, [f, 'webOS']],
              [/crkey\/([\d\.]+)/i],
              [g, [f, T + 'cast']],
              [/(cros) [\w]+ ([\w\.]+\w)/i],
              [[f, 'Chromium OS'], g],
              [
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [f, g],
              [/(sunos) ?([\w\.\d]*)/i],
              [[f, 'Solaris'], g],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [f, g],
            ],
          },
          G = function (e, t) {
            if ((typeof e == h && ((t = e), (e = p)), !(this instanceof G)))
              return new G(e, t).getResult();
            var i =
                e ||
                (typeof o != u && o.navigator && o.navigator.userAgent
                  ? o.navigator.userAgent
                  : ''),
              n = t
                ? (function (e, t) {
                    var i = {};
                    for (var n in e)
                      t[n] && t[n].length % 2 == 0
                        ? (i[n] = t[n].concat(e[n]))
                        : (i[n] = e[n]);
                    return i;
                  })(M, t)
                : M;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[f] = p),
                  (t[g] = p),
                  a.call(t, i, n.browser),
                  (t.major =
                    typeof (e = t.version) == c
                      ? e.replace(/[^\d\.]/g, '').split('.')[0]
                      : p),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = p), a.call(e, i, n.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[b] = p), (e[l] = p), (e[v] = p), a.call(e, i, n.device), e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[f] = p), (e[g] = p), a.call(e, i, n.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (e[f] = p), (e[g] = p), a.call(e, i, n.os), e;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return i;
              }),
              (this.setUA = function (e) {
                return (
                  (i = typeof e == c && 255 < e.length ? s(e, 255) : e), this
                );
              }),
              this.setUA(i),
              this
            );
          };
        (G.VERSION = '0.7.28'),
          (G.BROWSER = e([f, g, 'major'])),
          (G.CPU = e([m])),
          (G.DEVICE = e([l, b, v, i, n, w, y, _, E])),
          (G.ENGINE = G.OS = e([f, g])),
          F.exports && (z = F.exports = G),
          (z.UAParser = G);
        var V,
          L = typeof o != u && (o.jQuery || o.Zepto);
        L &&
          !L.ua &&
          ((V = new G()),
          (L.ua = V.getResult()),
          (L.ua.get = function () {
            return V.getUA();
          }),
          (L.ua.set = function (e) {
            V.setUA(e);
            var t = V.getResult();
            for (var i in t) L.ua[i] = t[i];
          }));
      })('object' == typeof window ? window : ce);
    }),
    Ne = function () {
      return (
        ('undefined' != typeof navigator &&
          ((navigator.languages && navigator.languages[0]) ||
            navigator.language ||
            navigator.userLanguage)) ||
        ''
      );
    },
    ke = 'US',
    Te = 'EU',
    Oe = {
      apiEndpoint: w.EVENT_LOG_URL,
      batchEvents: !1,
      cookieExpiration: 365,
      cookieName: 'amplitude_id',
      sameSiteCookie: 'Lax',
      cookieForceUpgrade: !1,
      deferInitialization: !1,
      disableCookies: !1,
      deviceIdFromUrlParam: !1,
      domain: '',
      eventUploadPeriodMillis: 3e4,
      eventUploadThreshold: 30,
      forceHttps: !0,
      includeFbclid: !1,
      includeGclid: !1,
      includeReferrer: !1,
      includeUtm: !1,
      language: Ne(),
      library: { name: 'amplitude-js', version: '8.18.1' },
      logLevel: 'WARN',
      logAttributionCapturedEvent: !1,
      optOut: !1,
      onError: function () {},
      onExitPage: function () {},
      onNewSessionStart: function () {},
      plan: { branch: '', source: '', version: '', versionId: '' },
      platform: 'Web',
      savedMaxCount: 1e3,
      saveEvents: !0,
      saveParamsReferrerOncePerSession: !0,
      secureCookie: !1,
      sessionTimeout: 18e5,
      storage: w.STORAGE_DEFAULT,
      trackingOptions: {
        city: !0,
        country: !0,
        carrier: !0,
        device_manufacturer: !0,
        device_model: !0,
        dma: !0,
        ip_address: !0,
        language: !0,
        os_name: !0,
        os_version: !0,
        platform: !0,
        region: !0,
        version_name: !0,
      },
      transport: w.TRANSPORT_HTTP,
      unsetParamsReferrerOnNewSession: !1,
      unsentKey: 'amplitude_unsent',
      unsentIdentifyKey: 'amplitude_unsent_identify',
      uploadBatchSize: 100,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cross-Origin-Resource-Policy': 'cross-origin',
      },
      serverZone: ke,
      useDynamicConfig: !1,
      serverZoneBasedApi: !1,
      sessionId: null,
    },
    xe = new ((function () {
      function e() {
        return (
          p(this, e),
          e.instance ||
            ((this.ingestionEndpoint = w.EVENT_LOG_URL), (e.instance = this)),
          e.instance
        );
      }
      return (
        i(e, [
          {
            key: 'refresh',
            value: function (e, t, i) {
              var n = 'https';
              t || 'https:' === h.location.protocol || (n = 'http');
              var o,
                r,
                s =
                  n +
                  '://' +
                  (function (e) {
                    var t = w.DYNAMIC_CONFIG_URL;
                    switch (e) {
                      case Te:
                        t = w.DYNAMIC_CONFIG_EU_URL;
                        break;
                      case ke:
                        t = w.DYNAMIC_CONFIG_URL;
                    }
                    return t;
                  })(e),
                a = this;
              h.XDomainRequest
                ? ((o = new h.XDomainRequest()).open('GET', s, !0),
                  (o.onload = function () {
                    var e = JSON.parse(o.responseText);
                    (a.ingestionEndpoint = e.ingestionEndpoint), i && i();
                  }),
                  (o.onerror = function () {}),
                  (o.ontimeout = function () {}),
                  (o.onprogress = function () {}),
                  o.send())
                : ((r = new XMLHttpRequest()).open('GET', s, !0),
                  (r.onreadystatechange = function () {
                    var e;
                    4 === r.readyState &&
                      200 === r.status &&
                      ((e = JSON.parse(r.responseText)),
                      (a.ingestionEndpoint = e.ingestionEndpoint),
                      i && i());
                  }),
                  r.send());
            },
          },
        ]),
        e
      );
    })())(),
    Ae = le(function (e, t) {
      var i, n, o, r, s, a, u, c, l, v, p, d, h, f;
      (i = t),
        (n =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : void 0 !== ce
            ? ce
            : 'undefined' != typeof self
            ? self
            : {}),
        (o = (function (e, t, i) {
          return (
            e(
              (i = {
                path: t,
                exports: {},
                require: function (e, t) {
                  return (function () {
                    throw new Error(
                      'Dynamic requires are not currently supported by @rollup/plugin-commonjs'
                    );
                  })(null == t && i.path);
                },
              }),
              i.exports
            ),
            i.exports
          );
        })(function (F, z) {
          !(function (o, p) {
            function e(e) {
              for (var t = {}, i = 0; i < e.length; i++)
                t[e[i].toUpperCase()] = e[i];
              return t;
            }
            function r(e, t) {
              return typeof e == c && -1 !== q(t).indexOf(q(e));
            }
            function s(e, t) {
              if (typeof e == c)
                return (
                  (e = e.replace(/^\s+|\s+$/g, '')),
                  typeof t == u ? e : e.substring(0, 255)
                );
            }
            function a(e, t) {
              for (var i, n, o, r, s, a = 0; a < t.length && !r; ) {
                for (
                  var u = t[a], c = t[a + 1], l = (i = 0);
                  l < u.length && !r;

                )
                  if ((r = u[l++].exec(e)))
                    for (n = 0; n < c.length; n++)
                      (s = r[++i]),
                        typeof (o = c[n]) == h && 0 < o.length
                          ? 2 == o.length
                            ? typeof o[1] == d
                              ? (this[o[0]] = o[1].call(this, s))
                              : (this[o[0]] = o[1])
                            : 3 == o.length
                            ? typeof o[1] != d || (o[1].exec && o[1].test)
                              ? (this[o[0]] = s ? s.replace(o[1], o[2]) : p)
                              : (this[o[0]] = s ? o[1].call(this, s, o[2]) : p)
                            : 4 == o.length &&
                              (this[o[0]] = s
                                ? o[3].call(this, s.replace(o[1], o[2]))
                                : p)
                          : (this[o] = s || p);
                a += 2;
              }
            }
            function t(e, t) {
              for (var i in t)
                if (typeof t[i] == h && 0 < t[i].length) {
                  for (var n = 0; n < t[i].length; n++)
                    if (r(t[i][n], e)) return '?' === i ? p : i;
                } else if (r(t[i], e)) return '?' === i ? p : i;
              return e;
            }
            var d = 'function',
              u = 'undefined',
              h = 'object',
              c = 'string',
              l = 'model',
              f = 'name',
              v = 'type',
              b = 'vendor',
              g = 'version',
              m = 'architecture',
              i = 'console',
              n = 'mobile',
              y = 'tablet',
              w = 'smarttv',
              _ = 'wearable',
              E = 'embedded',
              I = 'Amazon',
              S = 'Apple',
              N = 'BlackBerry',
              k = 'Browser',
              T = 'Chrome',
              O = 'Firefox',
              x = 'Google',
              A = 'Microsoft',
              C = 'Motorola',
              R = 'Opera',
              U = 'Samsung',
              D = 'Sony',
              P = 'Zebra',
              q = function (e) {
                return e.toLowerCase();
              },
              j = {
                ME: '4.90',
                'NT 3.11': 'NT3.51',
                'NT 4.0': 'NT4.0',
                2e3: 'NT 5.0',
                XP: ['NT 5.1', 'NT 5.2'],
                Vista: 'NT 6.0',
                7: 'NT 6.1',
                8: 'NT 6.2',
                8.1: 'NT 6.3',
                10: ['NT 6.4', 'NT 10.0'],
                RT: 'ARM',
              },
              M = {
                browser: [
                  [/\b(?:crmo|crios)\/([\w\.]+)/i],
                  [g, [f, 'Chrome']],
                  [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                  [g, [f, 'Edge']],
                  [
                    /(opera mini)\/([-\w\.]+)/i,
                    /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                    /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                  ],
                  [f, g],
                  [/opios[\/ ]+([\w\.]+)/i],
                  [g, [f, R + ' Mini']],
                  [/\bopr\/([\w\.]+)/i],
                  [g, [f, R]],
                  [
                    /(kindle)\/([\w\.]+)/i,
                    /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                    /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                    /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                    /(?:ms|\()(ie) ([\w\.]+)/i,
                    /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                    /(weibo)__([\d\.]+)/i,
                  ],
                  [f, g],
                  [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                  [g, [f, 'UC' + k]],
                  [/\bqbcore\/([\w\.]+)/i],
                  [g, [f, 'WeChat(Win) Desktop']],
                  [/micromessenger\/([\w\.]+)/i],
                  [g, [f, 'WeChat']],
                  [/konqueror\/([\w\.]+)/i],
                  [g, [f, 'Konqueror']],
                  [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                  [g, [f, 'IE']],
                  [/yabrowser\/([\w\.]+)/i],
                  [g, [f, 'Yandex']],
                  [/(avast|avg)\/([\w\.]+)/i],
                  [[f, /(.+)/, '$1 Secure ' + k], g],
                  [/\bfocus\/([\w\.]+)/i],
                  [g, [f, O + ' Focus']],
                  [/\bopt\/([\w\.]+)/i],
                  [g, [f, R + ' Touch']],
                  [/coc_coc\w+\/([\w\.]+)/i],
                  [g, [f, 'Coc Coc']],
                  [/dolfin\/([\w\.]+)/i],
                  [g, [f, 'Dolphin']],
                  [/coast\/([\w\.]+)/i],
                  [g, [f, R + ' Coast']],
                  [/miuibrowser\/([\w\.]+)/i],
                  [g, [f, 'MIUI ' + k]],
                  [/fxios\/([-\w\.]+)/i],
                  [g, [f, O]],
                  [/\bqihu|(qi?ho?o?|360)browser/i],
                  [[f, '360 ' + k]],
                  [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                  [[f, /(.+)/, '$1 ' + k], g],
                  [/(comodo_dragon)\/([\w\.]+)/i],
                  [[f, /_/g, ' '], g],
                  [
                    /(electron)\/([\w\.]+) safari/i,
                    /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                    /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                  ],
                  [f, g],
                  [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
                  [f],
                  [
                    /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i,
                  ],
                  [[f, 'Facebook'], g],
                  [
                    /safari (line)\/([\w\.]+)/i,
                    /\b(line)\/([\w\.]+)\/iab/i,
                    /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                  ],
                  [f, g],
                  [/\bgsa\/([\w\.]+) .*safari\//i],
                  [g, [f, 'GSA']],
                  [/headlesschrome(?:\/([\w\.]+)| )/i],
                  [g, [f, T + ' Headless']],
                  [/ wv\).+(chrome)\/([\w\.]+)/i],
                  [[f, T + ' WebView'], g],
                  [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                  [g, [f, 'Android ' + k]],
                  [
                    /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i,
                  ],
                  [f, g],
                  [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
                  [g, [f, 'Mobile Safari']],
                  [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
                  [g, f],
                  [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                  [
                    f,
                    [
                      g,
                      t,
                      {
                        '1.0': '/8',
                        1.2: '/1',
                        1.3: '/3',
                        '2.0': '/412',
                        '2.0.2': '/416',
                        '2.0.3': '/417',
                        '2.0.4': '/419',
                        '?': '/',
                      },
                    ],
                  ],
                  [/(webkit|khtml)\/([\w\.]+)/i],
                  [f, g],
                  [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                  [[f, 'Netscape'], g],
                  [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                  [g, [f, O + ' Reality']],
                  [
                    /ekiohf.+(flow)\/([\w\.]+)/i,
                    /(swiftfox)/i,
                    /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                    /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                    /(firefox)\/([\w\.]+)/i,
                    /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                    /(links) \(([\w\.]+)/i,
                  ],
                  [f, g],
                ],
                cpu: [
                  [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                  [[m, 'amd64']],
                  [/(ia32(?=;))/i],
                  [[m, q]],
                  [/((?:i[346]|x)86)[;\)]/i],
                  [[m, 'ia32']],
                  [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                  [[m, 'arm64']],
                  [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                  [[m, 'armhf']],
                  [/windows (ce|mobile); ppc;/i],
                  [[m, 'arm']],
                  [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                  [[m, /ower/, '', q]],
                  [/(sun4\w)[;\)]/i],
                  [[m, 'sparc']],
                  [
                    /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                  ],
                  [[m, q]],
                ],
                device: [
                  [
                    /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                  ],
                  [l, [b, U], [v, y]],
                  [
                    /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                    /samsung[- ]([-\w]+)/i,
                    /sec-(sgh\w+)/i,
                  ],
                  [l, [b, U], [v, n]],
                  [/((ipod|iphone)\d+,\d+)/i],
                  [l, [b, S], [v, n]],
                  [/(ipad\d+,\d+)/i],
                  [l, [b, S], [v, y]],
                  [/\((ip(?:hone|od)[\w ]*);/i],
                  [l, [b, S], [v, n]],
                  [
                    /\((ipad);[-\w\),; ]+apple/i,
                    /applecoremedia\/[\w\.]+ \((ipad)/i,
                    /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                  ],
                  [l, [b, S], [v, y]],
                  [
                    /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i,
                  ],
                  [l, [b, 'Huawei'], [v, y]],
                  [
                    /(?:huawei|honor)([-\w ]+)[;\)]/i,
                    /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
                  ],
                  [l, [b, 'Huawei'], [v, n]],
                  [
                    /\b(poco[\w ]+)(?: bui|\))/i,
                    /\b; (\w+) build\/hm\1/i,
                    /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                    /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                    /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                  ],
                  [
                    [l, /_/g, ' '],
                    [b, 'Xiaomi'],
                    [v, n],
                  ],
                  [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                  [
                    [l, /_/g, ' '],
                    [b, 'Xiaomi'],
                    [v, y],
                  ],
                  [
                    /; (\w+) bui.+ oppo/i,
                    /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i,
                  ],
                  [l, [b, 'OPPO'], [v, n]],
                  [
                    /vivo (\w+)(?: bui|\))/i,
                    /\b(v[12]\d{3}\w?[at])(?: bui|;)/i,
                  ],
                  [l, [b, 'Vivo'], [v, n]],
                  [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                  [l, [b, 'Realme'], [v, n]],
                  [
                    /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                    /\bmot(?:orola)?[- ](\w*)/i,
                    /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                  ],
                  [l, [b, C], [v, n]],
                  [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                  [l, [b, C], [v, y]],
                  [
                    /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                  ],
                  [l, [b, 'LG'], [v, y]],
                  [
                    /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                    /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                    /\blg-?([\d\w]+) bui/i,
                  ],
                  [l, [b, 'LG'], [v, n]],
                  [
                    /(ideatab[-\w ]+)/i,
                    /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                  ],
                  [l, [b, 'Lenovo'], [v, y]],
                  [
                    /(?:maemo|nokia).*(n900|lumia \d+)/i,
                    /nokia[-_ ]?([-\w\.]*)/i,
                  ],
                  [
                    [l, /_/g, ' '],
                    [b, 'Nokia'],
                    [v, n],
                  ],
                  [/(pixel c)\b/i],
                  [l, [b, x], [v, y]],
                  [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                  [l, [b, x], [v, n]],
                  [
                    /droid.+ ([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                  ],
                  [l, [b, D], [v, n]],
                  [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                  [
                    [l, 'Xperia Tablet'],
                    [b, D],
                    [v, y],
                  ],
                  [
                    / (kb2005|in20[12]5|be20[12][59])\b/i,
                    /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                  ],
                  [l, [b, 'OnePlus'], [v, n]],
                  [
                    /(alexa)webm/i,
                    /(kf[a-z]{2}wi)( bui|\))/i,
                    /(kf[a-z]+)( bui|\)).+silk\//i,
                  ],
                  [l, [b, I], [v, y]],
                  [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                  [
                    [l, /(.+)/g, 'Fire Phone $1'],
                    [b, I],
                    [v, n],
                  ],
                  [/(playbook);[-\w\),; ]+(rim)/i],
                  [l, b, [v, y]],
                  [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                  [l, [b, N], [v, n]],
                  [
                    /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                  ],
                  [l, [b, 'ASUS'], [v, y]],
                  [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                  [l, [b, 'ASUS'], [v, n]],
                  [/(nexus 9)/i],
                  [l, [b, 'HTC'], [v, y]],
                  [
                    /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                    /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                    /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
                  ],
                  [b, [l, /_/g, ' '], [v, n]],
                  [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                  [l, [b, 'Acer'], [v, y]],
                  [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                  [l, [b, 'Meizu'], [v, n]],
                  [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                  [l, [b, 'Sharp'], [v, n]],
                  [
                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                    /(hp) ([\w ]+\w)/i,
                    /(asus)-?(\w+)/i,
                    /(microsoft); (lumia[\w ]+)/i,
                    /(lenovo)[-_ ]?([-\w]+)/i,
                    /(jolla)/i,
                    /(oppo) ?([\w ]+) bui/i,
                  ],
                  [b, l, [v, n]],
                  [
                    /(archos) (gamepad2?)/i,
                    /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                    /(kindle)\/([\w\.]+)/i,
                    /(nook)[\w ]+build\/(\w+)/i,
                    /(dell) (strea[kpr\d ]*[\dko])/i,
                    /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                    /(trinity)[- ]*(t\d{3}) bui/i,
                    /(gigaset)[- ]+(q\w{1,9}) bui/i,
                    /(vodafone) ([\w ]+)(?:\)| bui)/i,
                  ],
                  [b, l, [v, y]],
                  [/(surface duo)/i],
                  [l, [b, A], [v, y]],
                  [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                  [l, [b, 'Fairphone'], [v, n]],
                  [/(u304aa)/i],
                  [l, [b, 'AT&T'], [v, n]],
                  [/\bsie-(\w*)/i],
                  [l, [b, 'Siemens'], [v, n]],
                  [/\b(rct\w+) b/i],
                  [l, [b, 'RCA'], [v, y]],
                  [/\b(venue[\d ]{2,7}) b/i],
                  [l, [b, 'Dell'], [v, y]],
                  [/\b(q(?:mv|ta)\w+) b/i],
                  [l, [b, 'Verizon'], [v, y]],
                  [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                  [l, [b, 'Barnes & Noble'], [v, y]],
                  [/\b(tm\d{3}\w+) b/i],
                  [l, [b, 'NuVision'], [v, y]],
                  [/\b(k88) b/i],
                  [l, [b, 'ZTE'], [v, y]],
                  [/\b(nx\d{3}j) b/i],
                  [l, [b, 'ZTE'], [v, n]],
                  [/\b(gen\d{3}) b.+49h/i],
                  [l, [b, 'Swiss'], [v, n]],
                  [/\b(zur\d{3}) b/i],
                  [l, [b, 'Swiss'], [v, y]],
                  [/\b((zeki)?tb.*\b) b/i],
                  [l, [b, 'Zeki'], [v, y]],
                  [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                  [[b, 'Dragon Touch'], l, [v, y]],
                  [/\b(ns-?\w{0,9}) b/i],
                  [l, [b, 'Insignia'], [v, y]],
                  [/\b((nxa|next)-?\w{0,9}) b/i],
                  [l, [b, 'NextBook'], [v, y]],
                  [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                  [[b, 'Voice'], l, [v, n]],
                  [/\b(lvtel\-)?(v1[12]) b/i],
                  [[b, 'LvTel'], l, [v, n]],
                  [/\b(ph-1) /i],
                  [l, [b, 'Essential'], [v, n]],
                  [/\b(v(100md|700na|7011|917g).*\b) b/i],
                  [l, [b, 'Envizen'], [v, y]],
                  [/\b(trio[-\w\. ]+) b/i],
                  [l, [b, 'MachSpeed'], [v, y]],
                  [/\btu_(1491) b/i],
                  [l, [b, 'Rotor'], [v, y]],
                  [/(shield[\w ]+) b/i],
                  [l, [b, 'Nvidia'], [v, y]],
                  [/(sprint) (\w+)/i],
                  [b, l, [v, n]],
                  [/(kin\.[onetw]{3})/i],
                  [
                    [l, /\./g, ' '],
                    [b, A],
                    [v, n],
                  ],
                  [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                  [l, [b, P], [v, y]],
                  [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                  [l, [b, P], [v, n]],
                  [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                  [b, l, [v, i]],
                  [/droid.+; (shield) bui/i],
                  [l, [b, 'Nvidia'], [v, i]],
                  [/(playstation [345portablevi]+)/i],
                  [l, [b, D], [v, i]],
                  [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                  [l, [b, A], [v, i]],
                  [/smart-tv.+(samsung)/i],
                  [b, [v, w]],
                  [/hbbtv.+maple;(\d+)/i],
                  [
                    [l, /^/, 'SmartTV'],
                    [b, U],
                    [v, w],
                  ],
                  [
                    /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i,
                  ],
                  [
                    [b, 'LG'],
                    [v, w],
                  ],
                  [/(apple) ?tv/i],
                  [b, [l, S + ' TV'], [v, w]],
                  [/crkey/i],
                  [
                    [l, T + 'cast'],
                    [b, x],
                    [v, w],
                  ],
                  [/droid.+aft(\w)( bui|\))/i],
                  [l, [b, I], [v, w]],
                  [/\(dtv[\);].+(aquos)/i],
                  [l, [b, 'Sharp'], [v, w]],
                  [
                    /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                    /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
                  ],
                  [
                    [b, s],
                    [l, s],
                    [v, w],
                  ],
                  [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                  [[v, w]],
                  [/((pebble))app/i],
                  [b, l, [v, _]],
                  [/droid.+; (glass) \d/i],
                  [l, [b, x], [v, _]],
                  [/droid.+; (wt63?0{2,3})\)/i],
                  [l, [b, P], [v, _]],
                  [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                  [b, [v, E]],
                  [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                  [l, [v, n]],
                  [
                    /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i,
                  ],
                  [l, [v, y]],
                  [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                  [[v, y]],
                  [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
                  [[v, n]],
                  [/(android[-\w\. ]{0,9});.+buil/i],
                  [l, [b, 'Generic']],
                ],
                engine: [
                  [/windows.+ edge\/([\w\.]+)/i],
                  [g, [f, 'EdgeHTML']],
                  [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                  [g, [f, 'Blink']],
                  [
                    /(presto)\/([\w\.]+)/i,
                    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                    /ekioh(flow)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                    /(icab)[\/ ]([23]\.[\d\.]+)/i,
                  ],
                  [f, g],
                  [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                  [g, f],
                ],
                os: [
                  [/microsoft (windows) (vista|xp)/i],
                  [f, g],
                  [
                    /(windows) nt 6\.2; (arm)/i,
                    /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                    /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                  ],
                  [f, [g, t, j]],
                  [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                  [
                    [f, 'Windows'],
                    [g, t, j],
                  ],
                  [
                    /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                    /cfnetwork\/.+darwin/i,
                  ],
                  [
                    [g, /_/g, '.'],
                    [f, 'iOS'],
                  ],
                  [
                    /(mac os x) ?([\w\. ]*)/i,
                    /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                  ],
                  [
                    [f, 'Mac OS'],
                    [g, /_/g, '.'],
                  ],
                  [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
                  [g, f],
                  [
                    /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                    /(blackberry)\w*\/([\w\.]*)/i,
                    /(tizen|kaios)[\/ ]([\w\.]+)/i,
                    /\((series40);/i,
                  ],
                  [f, g],
                  [/\(bb(10);/i],
                  [g, [f, N]],
                  [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                  [g, [f, 'Symbian']],
                  [
                    /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                  ],
                  [g, [f, O + ' OS']],
                  [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                  [g, [f, 'webOS']],
                  [/crkey\/([\d\.]+)/i],
                  [g, [f, T + 'cast']],
                  [/(cros) [\w]+ ([\w\.]+\w)/i],
                  [[f, 'Chromium OS'], g],
                  [
                    /(nintendo|playstation) ([wids345portablevuch]+)/i,
                    /(xbox); +xbox ([^\);]+)/i,
                    /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                    /(mint)[\/\(\) ]?(\w*)/i,
                    /(mageia|vectorlinux)[; ]/i,
                    /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                    /(hurd|linux) ?([\w\.]*)/i,
                    /(gnu) ?([\w\.]*)/i,
                    /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                    /(haiku) (\w+)/i,
                  ],
                  [f, g],
                  [/(sunos) ?([\w\.\d]*)/i],
                  [[f, 'Solaris'], g],
                  [
                    /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                    /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                    /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                    /(unix) ?([\w\.]*)/i,
                  ],
                  [f, g],
                ],
              },
              G = function (e, t) {
                if ((typeof e == h && ((t = e), (e = p)), !(this instanceof G)))
                  return new G(e, t).getResult();
                var i =
                    e ||
                    (typeof o != u && o.navigator && o.navigator.userAgent
                      ? o.navigator.userAgent
                      : ''),
                  n = t
                    ? (function (e, t) {
                        var i = {};
                        for (var n in e)
                          t[n] && t[n].length % 2 == 0
                            ? (i[n] = t[n].concat(e[n]))
                            : (i[n] = e[n]);
                        return i;
                      })(M, t)
                    : M;
                return (
                  (this.getBrowser = function () {
                    var e,
                      t = {};
                    return (
                      (t[f] = p),
                      (t[g] = p),
                      a.call(t, i, n.browser),
                      (t.major =
                        typeof (e = t.version) == c
                          ? e.replace(/[^\d\.]/g, '').split('.')[0]
                          : p),
                      t
                    );
                  }),
                  (this.getCPU = function () {
                    var e = {};
                    return (e[m] = p), a.call(e, i, n.cpu), e;
                  }),
                  (this.getDevice = function () {
                    var e = {};
                    return (
                      (e[b] = p),
                      (e[l] = p),
                      (e[v] = p),
                      a.call(e, i, n.device),
                      e
                    );
                  }),
                  (this.getEngine = function () {
                    var e = {};
                    return (e[f] = p), (e[g] = p), a.call(e, i, n.engine), e;
                  }),
                  (this.getOS = function () {
                    var e = {};
                    return (e[f] = p), (e[g] = p), a.call(e, i, n.os), e;
                  }),
                  (this.getResult = function () {
                    return {
                      ua: this.getUA(),
                      browser: this.getBrowser(),
                      engine: this.getEngine(),
                      os: this.getOS(),
                      device: this.getDevice(),
                      cpu: this.getCPU(),
                    };
                  }),
                  (this.getUA = function () {
                    return i;
                  }),
                  (this.setUA = function (e) {
                    return (
                      (i = typeof e == c && 255 < e.length ? s(e, 255) : e),
                      this
                    );
                  }),
                  this.setUA(i),
                  this
                );
              };
            (G.VERSION = '0.7.28'),
              (G.BROWSER = e([f, g, 'major'])),
              (G.CPU = e([m])),
              (G.DEVICE = e([l, b, v, i, n, w, y, _, E])),
              (G.ENGINE = G.OS = e([f, g])),
              F.exports && (z = F.exports = G),
              (z.UAParser = G);
            var V,
              L = typeof o != u && (o.jQuery || o.Zepto);
            L &&
              !L.ua &&
              ((V = new G()),
              (L.ua = V.getResult()),
              (L.ua.get = function () {
                return V.getUA();
              }),
              (L.ua.set = function (e) {
                V.setUA(e);
                var t = V.getResult();
                for (var i in t) L.ua[i] = t[i];
              }));
          })('object' == typeof window ? window : n);
        })),
        (r = (function () {
          function e() {
            this.ua = new o.UAParser(navigator.userAgent).getResult();
          }
          return (
            (e.prototype.getApplicationContext = function () {
              return {
                versionName: this.versionName,
                language: u(),
                platform: 'Web',
                os: s(this.ua),
                deviceModel: a(this.ua),
              };
            }),
            e
          );
        })()),
        (s = function (e) {
          var t, i;
          return [
            null === (t = e.browser) || void 0 === t ? void 0 : t.name,
            null === (i = e.browser) || void 0 === i ? void 0 : i.major,
          ]
            .filter(function (e) {
              return null != e;
            })
            .join(' ');
        }),
        (a = function (e) {
          var t;
          return null === (t = e.os) || void 0 === t ? void 0 : t.name;
        }),
        (u = function () {
          return (
            ('undefined' != typeof navigator &&
              ((navigator.languages && navigator.languages[0]) ||
                navigator.language)) ||
            ''
          );
        }),
        (c = (function () {
          function e() {
            this.queue = [];
          }
          return (
            (e.prototype.logEvent = function (e) {
              this.receiver
                ? this.receiver(e)
                : this.queue.length < 512 && this.queue.push(e);
            }),
            (e.prototype.setEventReceiver = function (t) {
              (this.receiver = t),
                0 < this.queue.length &&
                  (this.queue.forEach(function (e) {
                    t(e);
                  }),
                  (this.queue = []));
            }),
            e
          );
        })()),
        (l = function () {
          return (l =
            Object.assign ||
            function (e) {
              for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var o in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        }),
        (v = '$clearAll'),
        (p = (function () {
          function e() {
            (this.identity = { userProperties: {} }),
              (this.listeners = new Set());
          }
          return (
            (e.prototype.editIdentity = function () {
              var e = this,
                t = l({}, this.identity.userProperties),
                f = l(l({}, this.identity), { userProperties: t });
              return {
                setUserId: function (e) {
                  return (f.userId = e), this;
                },
                setDeviceId: function (e) {
                  return (f.deviceId = e), this;
                },
                setUserProperties: function (e) {
                  return (f.userProperties = e), this;
                },
                updateUserProperties: function (e) {
                  for (
                    var t = f.userProperties || {},
                      i = 0,
                      n = Object.entries(e);
                    i < n.length;
                    i++
                  ) {
                    var o = n[i],
                      r = o[0],
                      s = o[1];
                    switch (r) {
                      case '$set':
                        for (
                          var a = 0, u = Object.entries(s);
                          a < u.length;
                          a++
                        ) {
                          var c = u[a],
                            l = c[0],
                            p = c[1];
                          t[l] = p;
                        }
                        break;
                      case '$unset':
                        for (var d = 0, h = Object.keys(s); d < h.length; d++) {
                          delete t[(l = h[d])];
                        }
                        break;
                      case v:
                        t = {};
                    }
                  }
                  return (f.userProperties = t), this;
                },
                commit: function () {
                  return e.setIdentity(f), this;
                },
              };
            }),
            (e.prototype.getIdentity = function () {
              return l({}, this.identity);
            }),
            (e.prototype.setIdentity = function (t) {
              var e = l({}, this.identity);
              (this.identity = l({}, t)),
                d(e, this.identity) ||
                  this.listeners.forEach(function (e) {
                    e(t);
                  });
            }),
            (e.prototype.addIdentityListener = function (e) {
              this.listeners.add(e);
            }),
            (e.prototype.removeIdentityListener = function (e) {
              this.listeners.delete(e);
            }),
            e
          );
        })()),
        (d = function (t, i) {
          var e = typeof t;
          if (e != typeof i) return !1;
          if (['string', 'number', 'boolean', 'undefined'].includes(e))
            return t === i;
          if (t.length !== i.length) return !1;
          var n = Array.isArray(t),
            o = Array.isArray(i);
          if (n !== o) return !1;
          if (!n || !o) {
            var r = Object.keys(t).sort(),
              s = Object.keys(i).sort();
            if (!d(r, s)) return !1;
            var a = !0;
            return (
              Object.keys(t).forEach(function (e) {
                d(t[e], i[e]) || (a = !1);
              }),
              a
            );
          }
          for (var u = 0; u < t.length; u++) if (!d(t[u], i[u])) return !1;
          return !0;
        }),
        (h = 'undefined' != typeof globalThis ? globalThis : ce || self),
        (f = (function () {
          function t() {
            (this.identityStore = new p()),
              (this.eventBridge = new c()),
              (this.applicationContextProvider = new r());
          }
          return (
            (t.getInstance = function (e) {
              return (
                h.analyticsConnectorInstances ||
                  (h.analyticsConnectorInstances = {}),
                h.analyticsConnectorInstances[e] ||
                  (h.analyticsConnectorInstances[e] = new t()),
                h.analyticsConnectorInstances[e]
              );
            }),
            t
          );
        })()),
        (i.AnalyticsConnector = f),
        Object.defineProperty(i, '__esModule', { value: !0 });
    });
  (Ie.prototype.Identify = re),
    (Ie.prototype.Revenue = _e),
    (Ie.prototype.init = function (e, o, r, t) {
      var s = this;
      if ('string' !== _(e) || q(e))
        P.error('Invalid apiKey. Please re-initialize with a valid apiKey');
      else
        try {
          (this._connector = Ae.AnalyticsConnector.getInstance(
            this._instanceName
          )),
            Re(this.options, r),
            (d() || j()) &&
              void 0 !== h.Prototype &&
              Array.prototype.toJSON &&
              ((function () {
                var e;
                if (d()) {
                  var t = window,
                    i = Array;
                  if (
                    void 0 !== t.Prototype &&
                    void 0 !==
                      (null === (e = i.prototype) || void 0 === e
                        ? void 0
                        : e.toJSON)
                  )
                    return delete i.prototype.toJSON;
                }
              })(),
              P.warn(
                'Prototype.js injected Array.prototype.toJSON. Deleting Array.prototype.toJSON to prevent double-stringify'
              )),
            this.options.cookieName !== Oe.cookieName &&
              P.warn(
                'The cookieName option is deprecated. We will be ignoring it for newer cookies'
              ),
            this.options.serverZoneBasedApi &&
              (this.options.apiEndpoint = Ee(this.options.serverZone)),
            this._refreshDynamicConfig(),
            (this.options.apiKey = e),
            (this._storageSuffix =
              '_' +
              e +
              (this._instanceName === w.DEFAULT_INSTANCE
                ? ''
                : '_' + this._instanceName)),
            (this._storageSuffixV5 = e.slice(0, 6)),
            (this._oldCookiename =
              this.options.cookieName + this._storageSuffix),
            (this._unsentKey = this.options.unsentKey + this._storageSuffix),
            (this._unsentIdentifyKey =
              this.options.unsentIdentifyKey + this._storageSuffix),
            (this._cookieName = w.COOKIE_PREFIX + '_' + this._storageSuffixV5),
            this.cookieStorage.options({
              expirationDays: this.options.cookieExpiration,
              domain: this.options.domain,
              secure: this.options.secureCookie,
              sameSite: this.options.sameSiteCookie,
            }),
            (this._metadataStorage = new ae({
              storageKey: this._cookieName,
              disableCookies: this.options.disableCookies,
              expirationDays: this.options.cookieExpiration,
              domain: this.options.domain,
              secure: this.options.secureCookie,
              sameSite: this.options.sameSiteCookie,
              storage: this.options.storage,
            }));
          var i = !!this.cookieStorage.get(this._oldCookiename),
            n = !!this._metadataStorage.load();
          this._useOldCookie = !n && i && !this.options.cookieForceUpgrade;
          var a = n || i;
          if (
            ((this.options.domain = this.cookieStorage.options().domain),
            this.options.deferInitialization && !a)
          )
            return void this._deferInitialization(e, o, r, t);
          'string' === _(this.options.logLevel) && D(this.options.logLevel);
          var u = Le(this);
          (this._apiPropertiesTrackingOptions =
            0 < Object.keys(u).length ? { tracking_options: u } : {}),
            this.options.cookieForceUpgrade &&
              i &&
              (n || De(this), this.cookieStorage.remove(this._oldCookiename)),
            Ue(this),
            (this._pendingReadStorage = !0);
          this.options.saveEvents &&
            ((this._unsentEvents = this._loadSavedUnsentEvents(
              this.options.unsentKey
            )
              .map(function (e) {
                return { event: e };
              })
              .concat(this._unsentEvents)),
            (this._unsentIdentifys = this._loadSavedUnsentEvents(
              this.options.unsentIdentifyKey
            )
              .map(function (e) {
                return { event: e };
              })
              .concat(this._unsentIdentifys))),
            r &&
              r.onNewSessionStart &&
              this.onNewSessionStart(this.options.onNewSessionStart),
            (function (e) {
              r &&
                r.deviceId &&
                !z(r.deviceId) &&
                (P.error(
                  'Invalid device ID rejected. Randomly generated UUID will be used instead of "'.concat(
                    r.deviceId,
                    '"'
                  )
                ),
                delete r.deviceId),
                (s.options.deviceId = s._getInitialDeviceId(
                  r && r.deviceId,
                  e
                )),
                (s.options.userId =
                  ('string' === _(o) && !q(o) && o) ||
                  ('number' === _(o) && o.toString()) ||
                  s.options.userId ||
                  null);
              var t = new Date().getTime(),
                i =
                  !s._sessionId ||
                  !s._lastEventTime ||
                  t - s._lastEventTime > s.options.sessionTimeout ||
                  s.options.sessionId;
              i &&
                (s.options.unsetParamsReferrerOnNewSession &&
                  s._unsetUTMParams(),
                (s._newSession = !0),
                (s._sessionId = s.options.sessionId || t),
                (s.options.sessionId = void 0),
                s.options.saveParamsReferrerOncePerSession &&
                  s._trackParamsAndReferrer()),
                s.options.saveParamsReferrerOncePerSession ||
                  s._trackParamsAndReferrer(),
                s.options.saveEvents &&
                  (Ce(s._unsentEvents), Ce(s._unsentIdentifys)),
                (s._lastEventTime = t),
                qe(s),
                (s._pendingReadStorage = !1),
                s._sendEventsIfReady();
              for (var n = 0; n < s._onInitCallbacks.length; n++)
                s._onInitCallbacks[n](s);
              (s._onInitCallbacks = []),
                (s._isInitialized = !0),
                i && s._runNewSessionStartCallbacks();
            })(),
            this.runQueuedFunctions(),
            'function' === _(t) && t(this);
          var c = this.options.onExitPage;
          'function' === _(c) &&
            (this.pageHandlersAdded ||
              ((this.pageHandlersAdded = !0),
              h.addEventListener(
                'pagehide',
                function () {
                  var e;
                  (e = s.options.transport),
                    s.setTransport(w.TRANSPORT_BEACON),
                    c(),
                    s.setTransport(e);
                },
                !1
              ))),
            this._connector.eventBridge.setEventReceiver(function (e) {
              s._logEvent(e.eventType, e.eventProperties, e.userProperties);
            });
          var l = this._connector.identityStore.editIdentity();
          this.options.deviceId && l.setDeviceId(this.options.deviceId),
            this.options.userId && l.setUserId(this.options.userId),
            l.commit();
        } catch (e) {
          P.error(e), r && 'function' === _(r.onError) && r.onError(e);
        }
    }),
    (Ie.prototype._runNewSessionStartCallbacks = function () {
      for (var e = 0; e < this._onNewSessionStartCallbacks.length; e++)
        this._onNewSessionStartCallbacks[e](this);
    }),
    (Ie.prototype.deleteLowerLevelDomainCookies = function () {
      var e = E(),
        t =
          this.options.domain && '.' === this.options.domain[0]
            ? this.options.domain.slice(1)
            : this.options.domain;
      if (t && j() && e !== t && new RegExp(t + '$').test(e)) {
        for (
          var i = e.split('.'), n = t.split('.'), o = i.length;
          o > n.length;
          --o
        ) {
          var r = i.slice(i.length - o).join('.');
          W.set(this._cookieName, null, { domain: '.' + r });
        }
        W.set(this._cookieName, null, {});
      }
    }),
    (Ie.prototype._getInitialDeviceId = function (e, t) {
      if (e) return e;
      if (this.options.deviceIdFromUrlParam) {
        var i = this._getDeviceIdFromUrlParam(this._getUrlParams());
        if (i) return i;
      }
      return this.options.deviceId ? this.options.deviceId : t || v();
    });
  var Ce = function (e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t].event.user_properties,
        n = e[t].event.event_properties,
        o = e[t].event.groups;
      (e[t].event.user_properties = F(i)),
        (e[t].event.event_properties = F(n)),
        (e[t].event.groups = V(o));
    }
  };
  Ie.prototype._trackParamsAndReferrer = function () {
    var e, t, i, n, o;
    this.options.includeUtm && (e = this._initUtmData()),
      this.options.includeReferrer &&
        (t = this._saveReferrer(this._getReferrer())),
      this.options.includeGclid && (i = this._saveGclid(this._getUrlParams())),
      this.options.includeFbclid &&
        (n = this._saveFbclid(this._getUrlParams())),
      this.options.logAttributionCapturedEvent &&
        ((o = y({}, e, t, i, n)),
        0 < Object.keys(o).length && this.logEvent(w.ATTRIBUTION_EVENT, o));
  };
  var Re = function e(t, i) {
    if ('object' === _(i)) {
      var n,
        o,
        r,
        s = new Set(['headers']);
      for (var a in i)
        s.has(a)
          ? (t[a] = y({}, t[a], i[a]))
          : Object.prototype.hasOwnProperty.call(i, a) &&
            ((n = a),
            (r = o = void 0),
            Object.prototype.hasOwnProperty.call(t, n) &&
              ((o = i[n]),
              (r = _(t[n])),
              ('transport' === n && !K(o)) ||
                ('sessionId' !== n || null === o
                  ? L(o, n + ' option', r) &&
                    ('boolean' === r
                      ? (t[n] = !!o)
                      : ('string' === r && !q(o)) ||
                        ('number' === r && 0 < o) ||
                        'function' === r
                      ? (t[n] = o)
                      : 'object' === r && e(t[n], o))
                  : (t[n] = B(o) ? o : null))));
    }
  };
  (Ie.prototype.runQueuedFunctions = function () {
    var e = this._q;
    this._q = [];
    for (var t = 0; t < e.length; t++) {
      var i = this[e[t][0]];
      'function' === _(i) && i.apply(this, e[t].slice(1));
    }
  }),
    (Ie.prototype._apiKeySet = function (e) {
      return (
        !q(this.options.apiKey) ||
        (P.error(
          'Invalid apiKey. Please set a valid apiKey with init() before calling ' +
            e
        ),
        !1)
      );
    }),
    (Ie.prototype._loadSavedUnsentEvents = function (e) {
      var t = this._getFromStorage(ne, e),
        i = this._parseSavedUnsentEventsString(t, e);
      return this._setInStorage(ne, e, JSON.stringify(i)), i;
    }),
    (Ie.prototype._parseSavedUnsentEventsString = function (e, t) {
      if (q(e)) return [];
      if ('string' === _(e))
        try {
          var i = JSON.parse(e);
          if ('array' === _(i)) return i;
        } catch (e) {}
      return (
        P.error(
          'Unable to load ' + t + ' events. Restart with a new empty queue.'
        ),
        []
      );
    }),
    (Ie.prototype.isNewSession = function () {
      return this._newSession;
    }),
    (Ie.prototype.onInit = function (e) {
      this._isInitialized ? e(this) : this._onInitCallbacks.push(e);
    }),
    (Ie.prototype.onNewSessionStart = function (e) {
      this._onNewSessionStartCallbacks.push(e);
    }),
    (Ie.prototype.getSessionId = function () {
      return this._sessionId;
    }),
    (Ie.prototype.nextEventId = function () {
      return this._eventId++, this._eventId;
    }),
    (Ie.prototype.nextIdentifyId = function () {
      return this._identifyId++, this._identifyId;
    }),
    (Ie.prototype.nextSequenceNumber = function () {
      return this._sequenceNumber++, this._sequenceNumber;
    }),
    (Ie.prototype._unsentCount = function () {
      return this._unsentEvents.length + this._unsentIdentifys.length;
    }),
    (Ie.prototype._sendEventsIfReady = function () {
      return (
        0 !== this._unsentCount() &&
        (!this.options.batchEvents ||
        this._unsentCount() >= this.options.eventUploadThreshold ||
        this.options.transport === w.TRANSPORT_BEACON
          ? (this.sendEvents(), !0)
          : (this._updateScheduled ||
              ((this._updateScheduled = !0),
              setTimeout(
                function () {
                  (this._updateScheduled = !1), this.sendEvents();
                }.bind(this),
                this.options.eventUploadPeriodMillis
              )),
            !1))
      );
    }),
    (Ie.prototype.clearStorage = function () {
      return this._metadataStorage.clear();
    }),
    (Ie.prototype._getFromStorage = function (e, t) {
      return e.getItem(t + this._storageSuffix);
    }),
    (Ie.prototype._setInStorage = function (e, t, i) {
      e.setItem(t + this._storageSuffix, i);
    });
  var Ue = function (e) {
      var t, i;
      e._useOldCookie
        ? 'object' !== _((t = e.cookieStorage.get(e._oldCookiename))) ||
          Pe(e, t)
        : 'object' === _((i = e._metadataStorage.load())) && Pe(e, i);
    },
    De = function (e) {
      var t = e.cookieStorage.get(e._oldCookiename);
      'object' === _(t) && (Pe(e, t), qe(e));
    },
    Pe = function (e, t) {
      t.deviceId && (e.options.deviceId = t.deviceId),
        t.userId && (e.options.userId = t.userId),
        null !== t.optOut &&
          void 0 !== t.optOut &&
          !1 !== t.optOut &&
          (e.options.optOut = t.optOut),
        t.sessionId && (e._sessionId = parseInt(t.sessionId, 10)),
        t.lastEventTime && (e._lastEventTime = parseInt(t.lastEventTime, 10)),
        t.eventId && (e._eventId = parseInt(t.eventId, 10)),
        t.identifyId && (e._identifyId = parseInt(t.identifyId, 10)),
        t.sequenceNumber &&
          (e._sequenceNumber = parseInt(t.sequenceNumber, 10));
    },
    qe = function (e) {
      var t = {
        deviceId: e.options.deviceId,
        userId: e.options.userId,
        optOut: e.options.optOut,
        sessionId: e._sessionId,
        lastEventTime: e._lastEventTime,
        eventId: e._eventId,
        identifyId: e._identifyId,
        sequenceNumber: e._sequenceNumber,
      };
      e._useOldCookie
        ? e.cookieStorage.set(e.options.cookieName + e._storageSuffix, t)
        : e._metadataStorage.save(t);
    };
  (Ie.prototype._initUtmData = function (e, t) {
    (e = e || this._getUrlParams()),
      (t = t || this.cookieStorage.get('__utmz'));
    var i = oe(t, e);
    return je(this, i), i;
  }),
    (Ie.prototype._unsetUTMParams = function () {
      var e = new re();
      e.unset(w.REFERRER),
        e.unset(w.UTM_SOURCE),
        e.unset(w.UTM_MEDIUM),
        e.unset(w.UTM_CAMPAIGN),
        e.unset(w.UTM_TERM),
        e.unset(w.UTM_CONTENT),
        this.identify(e);
    });
  var je = function (e, t) {
    if ('object' === _(t) && 0 !== Object.keys(t).length) {
      var i = new re();
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) &&
          (i.setOnce('initial_' + n, t[n]), i.set(n, t[n]));
      e.identify(i);
    }
  };
  (Ie.prototype._getReferrer = function () {
    return 'undefined' != typeof document ? document.referrer : '';
  }),
    (Ie.prototype._getUrlParams = function () {
      return h.location.search;
    }),
    (Ie.prototype._saveGclid = function (e) {
      var t = M('gclid', e);
      if (!q(t)) {
        var i = { gclid: t };
        return je(this, i), i;
      }
    }),
    (Ie.prototype._saveFbclid = function (e) {
      var t = M('fbclid', e);
      if (!q(t)) {
        var i = { fbclid: t };
        return je(this, i), i;
      }
    }),
    (Ie.prototype._getDeviceIdFromUrlParam = function (e) {
      return M(w.AMP_DEVICE_ID_PARAM, e);
    }),
    (Ie.prototype._getReferringDomain = function (e) {
      if (q(e)) return null;
      var t = e.split('/');
      return 3 <= t.length ? t[2] : null;
    }),
    (Ie.prototype._saveReferrer = function (e) {
      if (!q(e)) {
        var t = { referrer: e, referring_domain: this._getReferringDomain(e) };
        return je(this, t), t;
      }
    }),
    (Ie.prototype.saveEvents = function () {
      try {
        var e = JSON.stringify(
          this._unsentEvents.map(function (e) {
            return e.event;
          })
        );
        this._setInStorage(ne, this.options.unsentKey, e);
      } catch (e) {}
      try {
        var t = JSON.stringify(
          this._unsentIdentifys.map(function (e) {
            return e.event;
          })
        );
        this._setInStorage(ne, this.options.unsentIdentifyKey, t);
      } catch (e) {}
    }),
    (Ie.prototype.setDomain = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ['setDomain'].concat(Array.prototype.slice.call(arguments, 0))
        );
      if (L(e, 'domain', 'string'))
        try {
          this.cookieStorage.options({
            expirationDays: this.options.cookieExpiration,
            secure: this.options.secureCookie,
            domain: e,
            sameSite: this.options.sameSiteCookie,
          }),
            (this.options.domain = this.cookieStorage.options().domain),
            Ue(this),
            qe(this);
        } catch (e) {
          P.error(e);
        }
    }),
    (Ie.prototype.setUserId = function (e, t) {
      var i = 1 < arguments.length && void 0 !== t && t;
      if (L(i, 'startNewSession', 'boolean')) {
        if (this._shouldDeferCall())
          return this._q.push(
            ['setUserId'].concat(Array.prototype.slice.call(arguments, 0))
          );
        try {
          (this.options.userId = (null != e && '' + e) || null),
            i &&
              (this.options.unsetParamsReferrerOnNewSession &&
                this._unsetUTMParams(),
              (this._newSession = !0),
              (this._sessionId = new Date().getTime()),
              this._runNewSessionStartCallbacks(),
              this.options.saveParamsReferrerOncePerSession &&
                this._trackParamsAndReferrer()),
            qe(this),
            this._connector &&
              this._connector.identityStore
                .editIdentity()
                .setUserId(this.options.userId)
                .commit();
        } catch (e) {
          P.error(e);
        }
      }
    }),
    (Ie.prototype.setGroup = function (e, t) {
      if (this._shouldDeferCall())
        return this._q.push(
          ['setGroup'].concat(Array.prototype.slice.call(arguments, 0))
        );
      var i, n;
      this._apiKeySet('setGroup()') &&
        L(e, 'groupType', 'string') &&
        !q(e) &&
        (((i = {})[e] = t),
        (n = new re().set(e, t)),
        this._logEvent(
          w.IDENTIFY_EVENT,
          null,
          null,
          n.userPropertiesOperations,
          i,
          null,
          null,
          null
        ));
    }),
    (Ie.prototype.setOptOut = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ['setOptOut'].concat(Array.prototype.slice.call(arguments, 0))
        );
      if (L(e, 'enable', 'boolean'))
        try {
          (this.options.optOut = e), qe(this);
        } catch (e) {
          P.error(e);
        }
    }),
    (Ie.prototype.setSessionId = function (e) {
      if (L(e, 'sessionId', 'number'))
        try {
          (this._sessionId = e), qe(this);
        } catch (e) {
          P.error(e);
        }
    }),
    (Ie.prototype.resetSessionId = function () {
      this.setSessionId(new Date().getTime());
    }),
    (Ie.prototype.regenerateDeviceId = function () {
      if (this._shouldDeferCall())
        return this._q.push(
          ['regenerateDeviceId'].concat(
            Array.prototype.slice.call(arguments, 0)
          )
        );
      this.setDeviceId(v());
    }),
    (Ie.prototype.setDeviceId = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ['setDeviceId'].concat(Array.prototype.slice.call(arguments, 0))
        );
      if (z(e))
        try {
          q(e) ||
            ((this.options.deviceId = '' + e),
            qe(this),
            this._connector &&
              this._connector.identityStore
                .editIdentity()
                .setDeviceId(this.options.deviceId)
                .commit());
        } catch (e) {
          P.error(e);
        }
    }),
    (Ie.prototype.setTransport = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ['setTransport'].concat(Array.prototype.slice.call(arguments, 0))
        );
      K(e) && (this.options.transport = e);
    }),
    (Ie.prototype.setUserProperties = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ['setUserProperties'].concat(Array.prototype.slice.call(arguments, 0))
        );
      if (
        this._apiKeySet('setUserProperties()') &&
        L(e, 'userProperties', 'object')
      ) {
        var t = G(F(e));
        if (0 !== Object.keys(t).length) {
          var i = new re();
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && i.set(n, t[n]);
          this.identify(i);
        }
      }
    }),
    (Ie.prototype.clearUserProperties = function () {
      if (this._shouldDeferCall())
        return this._q.push(
          ['clearUserProperties'].concat(
            Array.prototype.slice.call(arguments, 0)
          )
        );
      var e;
      this._apiKeySet('clearUserProperties()') &&
        ((e = new re()).clearAll(), this.identify(e));
    });
  function Me(e, t) {
    for (var i = 0; i < t._q.length; i++) {
      var n = e[t._q[i][0]];
      'function' === _(n) && n.apply(e, t._q[i].slice(1));
    }
    return e;
  }
  (Ie.prototype.identify = function (e, t, i, n) {
    if (this._shouldDeferCall())
      return this._q.push(
        ['identify'].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (this._apiKeySet('identify()'))
      if (
        ('object' === _(e) &&
          Object.prototype.hasOwnProperty.call(e, '_q') &&
          (e = Me(new re(), e)),
        e instanceof re)
      ) {
        if (0 < Object.keys(e.userPropertiesOperations).length)
          return this._logEvent(
            w.IDENTIFY_EVENT,
            null,
            null,
            e.userPropertiesOperations,
            null,
            null,
            null,
            t,
            i,
            n
          );
        ze(t, i, 0, 'No request sent', {
          reason: 'No user property operations',
        });
      } else
        P.error(
          'Invalid identify input type. Expected Identify object but saw ' +
            _(e)
        ),
          ze(t, i, 0, 'No request sent', {
            reason: 'Invalid identify input type',
          });
    else ze(t, i, 0, 'No request sent', { reason: 'API key is not set' });
  }),
    (Ie.prototype.groupIdentify = function (e, t, i, n, o, r) {
      if (this._shouldDeferCall())
        return this._q.push(
          ['groupIdentify'].concat(Array.prototype.slice.call(arguments, 0))
        );
      if (this._apiKeySet('groupIdentify()'))
        if (L(e, 'group_type', 'string') && !q(e))
          if (null != t)
            if (
              ('object' === _(i) &&
                Object.prototype.hasOwnProperty.call(i, '_q') &&
                (i = Me(new re(), i)),
              i instanceof re)
            ) {
              if (0 < Object.keys(i.userPropertiesOperations).length)
                return this._logEvent(
                  w.GROUP_IDENTIFY_EVENT,
                  null,
                  null,
                  null,
                  s({}, e, t),
                  i.userPropertiesOperations,
                  null,
                  n,
                  o,
                  r
                );
              ze(n, o, 0, 'No request sent', {
                reason: 'No group property operations',
              });
            } else
              P.error(
                'Invalid identify input type. Expected Identify object but saw ' +
                  _(i)
              ),
                ze(n, o, 0, 'No request sent', {
                  reason: 'Invalid identify input type',
                });
          else ze(n, o, 0, 'No request sent', { reason: 'Invalid group name' });
        else ze(n, o, 0, 'No request sent', { reason: 'Invalid group type' });
      else ze(n, o, 0, 'No request sent', { reason: 'API key is not set' });
    }),
    (Ie.prototype.setVersionName = function (e) {
      if (this._shouldDeferCall())
        return this._q.push(
          ['setVersionName'].concat(Array.prototype.slice.call(arguments, 0))
        );
      L(e, 'versionName', 'string') && (this.options.versionName = e);
    }),
    (Ie.prototype._logEvent = function (e, t, i, n, o, r, s, a, u, c) {
      if ((Ue(this), e))
        if (this.options.optOut)
          ze(a, u, 0, 'No request sent', { reason: 'optOut is set to true' });
        else
          try {
            var l =
                e === w.IDENTIFY_EVENT || e === w.GROUP_IDENTIFY_EVENT
                  ? this.nextIdentifyId()
                  : this.nextEventId(),
              p = this.nextSequenceNumber(),
              d = 'number' === _(s) ? s : new Date().getTime();
            c
              ? (this._sessionId = -1)
              : (this._sessionId &&
                  this._lastEventTime &&
                  !(d - this._lastEventTime > this.options.sessionTimeout)) ||
                ((this._sessionId = d), this._runNewSessionStartCallbacks()),
              (this._lastEventTime = d),
              qe(this);
            var h = this._ua.browser.name,
              f = this._ua.browser.major,
              v = this._ua.device.model || this._ua.os.name,
              b = this._ua.device.vendor;
            n = n || {};
            var g = y({}, this._apiPropertiesTrackingOptions);
            (i = y({}, i || {}, g)),
              (t = t || {}),
              (o = o || {}),
              (r = r || {});
            var m = {
              device_id: this.options.deviceId,
              user_id: this.options.userId,
              timestamp: d,
              event_id: l,
              session_id: this._sessionId || -1,
              event_type: e,
              version_name: this.options.versionName || null,
              platform: Ve(this, 'platform') ? this.options.platform : null,
              os_name: (Ve(this, 'os_name') && h) || null,
              os_version: (Ve(this, 'os_version') && f) || null,
              device_model: (Ve(this, 'device_model') && v) || null,
              device_manufacturer:
                (Ve(this, 'device_manufacturer') && b) || null,
              language: Ve(this, 'language') ? this.options.language : null,
              api_properties: i,
              event_properties: G(F(t)),
              user_properties: G(F(n)),
              uuid: (function e(t) {
                return t
                  ? (t ^ ((16 * Math.random()) >> (t / 4))).toString(16)
                  : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e);
              })(),
              library: this.options.library,
              sequence_number: p,
              groups: G(V(o)),
              group_properties: G(F(r)),
              user_agent: this._userAgent,
            };
            return (
              Ge(this) &&
                (m.plan = {
                  branch: this.options.plan.branch || void 0,
                  source: this.options.plan.source || void 0,
                  version: this.options.plan.version || void 0,
                  versionId: this.options.plan.versionId || void 0,
                }),
              e === w.IDENTIFY_EVENT || e === w.GROUP_IDENTIFY_EVENT
                ? (this._unsentIdentifys.push({
                    event: m,
                    callback: a,
                    errorCallback: u,
                  }),
                  this._limitEventsQueued(this._unsentIdentifys))
                : (this._unsentEvents.push({
                    event: m,
                    callback: a,
                    errorCallback: u,
                  }),
                  this._limitEventsQueued(this._unsentEvents)),
              this.options.saveEvents && this.saveEvents(),
              this._sendEventsIfReady(),
              e === w.IDENTIFY_EVENT &&
                this._connector &&
                this._connector.identityStore
                  .editIdentity()
                  .updateUserProperties(G(F(n)))
                  .commit(),
              l
            );
          } catch (e) {
            P.error(e);
          }
      else ze(a, u, 0, 'No request sent', { reason: 'Missing eventType' });
    });
  var Ge = function (e) {
      return (
        e.options.plan &&
        (e.options.plan.source ||
          e.options.plan.branch ||
          e.options.plan.version ||
          e.options.plan.versionId)
      );
    },
    Ve = function (e, t) {
      return !!e.options.trackingOptions[t];
    },
    Le = function (e) {
      for (
        var t = ['city', 'country', 'dma', 'ip_address', 'region'],
          i = {},
          n = 0;
        n < t.length;
        n++
      ) {
        var o = t[n];
        Ve(e, o) || (i[o] = !1);
      }
      return i;
    };
  (Ie.prototype._limitEventsQueued = function (e) {
    e.length > this.options.savedMaxCount &&
      e.splice(0, e.length - this.options.savedMaxCount).forEach(function (e) {
        ze(e.callback, e.errorCallback, 0, 'No request sent', {
          reason:
            'Event dropped because options.savedMaxCount exceeded. User may be offline or have a content blocker',
        });
      });
  }),
    (Ie.prototype.logEvent = function (e, t, i, n, o) {
      var r = 4 < arguments.length && void 0 !== o && o;
      return this._shouldDeferCall()
        ? this._q.push(
            ['logEvent'].concat(Array.prototype.slice.call(arguments, 0))
          )
        : this.logEventWithTimestamp(e, t, null, i, n, r);
    }),
    (Ie.prototype.logEventWithTimestamp = function (e, t, i, n, o, r) {
      var s = 5 < arguments.length && void 0 !== r && r;
      return this._shouldDeferCall()
        ? this._q.push(
            ['logEventWithTimestamp'].concat(
              Array.prototype.slice.call(arguments, 0)
            )
          )
        : this._apiKeySet('logEvent()')
        ? L(e, 'eventType', 'string')
          ? q(e)
            ? (ze(n, o, 0, 'No request sent', { reason: 'Missing eventType' }),
              -1)
            : (L(s, 'outOfSession', 'boolean') ||
                ze(n, o, 0, 'No request sent', {
                  reason: 'Invalid outOfSession value',
                }),
              this._logEvent(e, t, null, null, null, null, i, n, o, s))
          : (ze(n, o, 0, 'No request sent', {
              reason: 'Invalid type for eventType',
            }),
            -1)
        : (ze(n, o, 0, 'No request sent', { reason: 'API key not set' }), -1);
    }),
    (Ie.prototype.logEventWithGroups = function (e, t, i, n, o) {
      var r = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
      return this._shouldDeferCall()
        ? this._q.push(
            ['logEventWithGroups'].concat(
              Array.prototype.slice.call(arguments, 0)
            )
          )
        : this._apiKeySet('logEventWithGroups()')
        ? L(e, 'eventType', 'string')
          ? (L(r, 'outOfSession', 'boolean') ||
              ze(event.callback, event.errorCallback, 0, 'No request sent', {
                reason: 'Invalid outOfSession value',
              }),
            this._logEvent(e, t, null, null, i, null, null, n, o, r))
          : (ze(event.callback, event.errorCallback, 0, 'No request sent', {
              reason: 'Invalid type for eventType',
            }),
            -1)
        : (ze(event.callback, event.errorCallback, 0, 'No request sent', {
            reason: 'API key not set',
          }),
          -1);
    });
  function Fe(e) {
    return !isNaN(parseFloat(e)) && isFinite(e);
  }
  var ze = function (e, t, i, n, o) {
    'function' === _(e) && e(i, n, o), 'function' === _(t) && t(i, n, o);
  };
  (Ie.prototype.logRevenueV2 = function (e) {
    if (this._shouldDeferCall())
      return this._q.push(
        ['logRevenueV2'].concat(Array.prototype.slice.call(arguments, 0))
      );
    if (this._apiKeySet('logRevenueV2()'))
      if (
        ('object' === _(e) &&
          Object.prototype.hasOwnProperty.call(e, '_q') &&
          (e = Me(new _e(), e)),
        e instanceof _e)
      ) {
        if (e && e._isValidRevenue())
          return this.logEvent(w.REVENUE_EVENT, e._toJSONObject());
      } else
        P.error(
          'Invalid revenue input type. Expected Revenue object but saw ' + _(e)
        );
  }),
    (Ie.prototype.logRevenue = function (e, t, i) {
      return this._shouldDeferCall()
        ? this._q.push(
            ['logRevenue'].concat(Array.prototype.slice.call(arguments, 0))
          )
        : this._apiKeySet('logRevenue()') && Fe(e) && (void 0 === t || Fe(t))
        ? this._logEvent(
            w.REVENUE_EVENT,
            {},
            {
              productId: i,
              special: 'revenue_amount',
              quantity: t || 1,
              price: e,
            },
            null,
            null,
            null,
            null,
            null
          )
        : -1;
    }),
    (Ie.prototype._logErrorsOnEvents = function (e, t, i, n) {
      for (
        var o = ['_unsentEvents', '_unsentIdentifys'], r = 0;
        r < o.length;
        r++
      )
        for (
          var s = o[r], a = '_unsentEvents' === s ? e : t, u = 0;
          u < this[s].length;
          u++
        ) {
          var c = this[s][u];
          c.event.event_id <= a && c.errorCallback && c.errorCallback(i, n);
        }
    }),
    (Ie.prototype.removeEvents = function (e, t, i, n) {
      Ke(this, '_unsentEvents', e, i, n), Ke(this, '_unsentIdentifys', t, i, n);
    });
  var Ke = function (e, t, i, n, o) {
    if (!(i < 0)) {
      for (var r = [], s = 0; s < e[t].length; s++) {
        var a = e[t][s];
        a.event.event_id > i ? r.push(a) : a.callback && a.callback(n, o);
      }
      e[t] = r;
    }
  };
  (Ie.prototype.sendEvents = function () {
    if (this._apiKeySet('sendEvents()')) {
      if (this.options.optOut)
        this.removeEvents(1 / 0, 1 / 0, 0, 'No request sent', {
          reason: 'Opt out is set to true',
        });
      else if (0 !== this._unsentCount()) {
        if (this.options.transport !== w.TRANSPORT_BEACON) {
          if (this._sending) return;
          this._sending = !0;
        }
        var e =
            (this.options.forceHttps || 'https:' === h.location.protocol
              ? 'https'
              : 'http') +
            '://' +
            this.options.apiEndpoint,
          i = Math.min(this._unsentCount(), this.options.uploadBatchSize),
          t = this._mergeEventsAndIdentifys(i),
          n = t.maxEventId,
          o = t.maxIdentifyId,
          r = JSON.stringify(
            t.eventsToSend.map(function (e) {
              return e.event;
            })
          ),
          s = new Date().getTime(),
          a = {
            client: this.options.apiKey,
            e: r,
            v: w.API_VERSION,
            upload_time: s,
            checksum: pe(w.API_VERSION + this.options.apiKey + r + s),
          };
        if (this.options.transport !== w.TRANSPORT_BEACON) {
          var u = this;
          try {
            new ye(e, a, this.options.headers).send(function (e, t) {
              u._sending = !1;
              try {
                200 === e && 'success' === t
                  ? (u.removeEvents(n, o, e, t),
                    u.options.saveEvents && u.saveEvents(),
                    u._sendEventsIfReady())
                  : (u._logErrorsOnEvents(n, o, e, t),
                    413 === e &&
                      (1 === u.options.uploadBatchSize &&
                        u.removeEvents(n, o, e, t),
                      (u.options.uploadBatchSize = Math.ceil(i / 2)),
                      u.sendEvents()));
              } catch (e) {}
            });
          } catch (e) {
            var c = 'Request failed to send';
            P.error(c),
              u._logErrorsOnEvents(n, o, 0, c),
              u.removeEvents(n, o, 0, c, { reason: e.message });
          }
        } else {
          navigator.sendBeacon(e, new URLSearchParams(a))
            ? (this.removeEvents(n, o, 200, 'success'),
              this.options.saveEvents && this.saveEvents())
            : this._logErrorsOnEvents(n, o, 0, '');
        }
      }
    } else
      this.removeEvents(1 / 0, 1 / 0, 0, 'No request sent', {
        reason: 'API key not set',
      });
  }),
    (Ie.prototype._mergeEventsAndIdentifys = function (e) {
      for (var t = [], i = 0, n = -1, o = 0, r = -1; t.length < e; ) {
        var s = void 0,
          a = o >= this._unsentIdentifys.length,
          u = i >= this._unsentEvents.length;
        if (u && a) {
          P.error(
            'Merging Events and Identifys, less events and identifys than expected'
          );
          break;
        }
        a ||
        (!u &&
          (!('sequence_number' in this._unsentEvents[i].event) ||
            this._unsentEvents[i].event.sequence_number <
              this._unsentIdentifys[o].event.sequence_number))
          ? (n = (s = this._unsentEvents[i++]).event.event_id)
          : (r = (s = this._unsentIdentifys[o++]).event.event_id),
          t.push(s);
      }
      return { eventsToSend: t, maxEventId: n, maxIdentifyId: r };
    }),
    (Ie.prototype.setGlobalUserProperties = function (e) {
      this.setUserProperties(e);
    }),
    (Ie.prototype.__VERSION__ = function () {
      return this.options.library.version;
    }),
    (Ie.prototype.setLibrary = function (e, t) {
      null != e && (this.options.library.name = e),
        null != t && (this.options.library.version = t);
    }),
    (Ie.prototype._shouldDeferCall = function () {
      return this._pendingReadStorage || this._initializationDeferred;
    }),
    (Ie.prototype._deferInitialization = function () {
      (this._initializationDeferred = !0),
        this._q.push(['init'].concat(Array.prototype.slice.call(arguments, 0)));
    }),
    (Ie.prototype.enableTracking = function () {
      (this._initializationDeferred = !1), qe(this), this.runQueuedFunctions();
    }),
    (Ie.prototype._refreshDynamicConfig = function () {
      this.options.useDynamicConfig &&
        xe.refresh(
          this.options.serverZone,
          this.options.forceHttps,
          function () {
            this.options.apiEndpoint = xe.ingestionEndpoint;
          }.bind(this)
        );
    }),
    (Ie.prototype.getDeviceId = function () {
      return this.options.deviceId;
    }),
    (Ie.prototype.getUserId = function () {
      return this.options.userId;
    }),
    (Ie.prototype.setMinTimeBetweenSessionsMillis = function (e) {
      if (L(e, 'timeInMillis', 'number')) {
        if (this._shouldDeferCall())
          return this._q.push(
            ['setMinTimeBetweenSessionsMillis'].concat(
              Array.prototype.slice.call(arguments, 0)
            )
          );
        try {
          this.options.sessionTimeout = e;
        } catch (e) {
          P.error(e);
        }
      }
    }),
    (Ie.prototype.setEventUploadThreshold = function (e) {
      if (L(e, 'eventUploadThreshold', 'number')) {
        if (this._shouldDeferCall())
          return this._q.push(
            ['setEventUploadThreshold'].concat(
              Array.prototype.slice.call(arguments, 0)
            )
          );
        try {
          this.options.eventUploadThreshold = e;
        } catch (e) {
          P.error(e);
        }
      }
    }),
    (Ie.prototype.setUseDynamicConfig = function (e) {
      if (L(e, 'useDynamicConfig', 'boolean')) {
        if (this._shouldDeferCall())
          return this._q.push(
            ['setUseDynamicConfig'].concat(
              Array.prototype.slice.call(arguments, 0)
            )
          );
        try {
          (this.options.useDynamicConfig = e), this._refreshDynamicConfig();
        } catch (e) {
          P.error(e);
        }
      }
    }),
    (Ie.prototype.setServerZone = function (e, t) {
      var i = !(1 < arguments.length && void 0 !== t) || t;
      if ((e === Te || e === ke) && L(i, 'serverZoneBasedApi', 'boolean')) {
        if (this._shouldDeferCall())
          return this._q.push(
            ['setServerZone'].concat(Array.prototype.slice.call(arguments, 0))
          );
        try {
          (this.options.serverZone = e),
            (this.options.serverZoneBasedApi = i) &&
              (this.options.apiEndpoint = Ee(this.options.serverZone));
        } catch (e) {
          P.error(e);
        }
      }
    }),
    (Ie.prototype.setServerUrl = function (e) {
      if (L(e, 'serverUrl', 'string')) {
        if (this._shouldDeferCall())
          return this._q.push(
            ['setServerUrl'].concat(Array.prototype.slice.call(arguments, 0))
          );
        try {
          this.options.apiEndpoint = e;
        } catch (e) {
          P.error(e);
        }
      }
    });
  function Be() {
    (this.options = y({}, Oe)), (this._q = []), (this._instances = {});
  }
  (Be.prototype.Identify = re),
    (Be.prototype.Revenue = _e),
    (Be.prototype.getInstance = function (e) {
      e = q(e) ? w.DEFAULT_INSTANCE : e.toLowerCase();
      var t = this._instances[e];
      return void 0 === t && ((t = new Ie(e)), (this._instances[e] = t)), t;
    }),
    (Be.prototype.runQueuedFunctions = function () {
      for (var e = 0; e < this._q.length; e++) {
        var t = this[this._q[e][0]];
        'function' === _(t) && t.apply(this, this._q[e].slice(1));
      }
      for (var i in ((this._q = []), this._instances))
        Object.prototype.hasOwnProperty.call(this._instances, i) &&
          this._instances[i].runQueuedFunctions();
    }),
    (Be.prototype.init = function (e, t, i, n) {
      this.getInstance().init(
        e,
        t,
        i,
        function (e) {
          (this.options = e.options), 'function' === _(n) && n(e);
        }.bind(this)
      );
    }),
    (Be.prototype.isNewSession = function () {
      return this.getInstance().isNewSession();
    }),
    (Be.prototype.getSessionId = function () {
      return this.getInstance().getSessionId();
    }),
    (Be.prototype.nextEventId = function () {
      return this.getInstance().nextEventId();
    }),
    (Be.prototype.nextIdentifyId = function () {
      return this.getInstance().nextIdentifyId();
    }),
    (Be.prototype.nextSequenceNumber = function () {
      return this.getInstance().nextSequenceNumber();
    }),
    (Be.prototype.saveEvents = function () {
      this.getInstance().saveEvents();
    }),
    (Be.prototype.setDomain = function (e) {
      this.getInstance().setDomain(e);
    }),
    (Be.prototype.setUserId = function (e) {
      this.getInstance().setUserId(e);
    }),
    (Be.prototype.setGroup = function (e, t) {
      this.getInstance().setGroup(e, t);
    }),
    (Be.prototype.setOptOut = function (e) {
      this.getInstance().setOptOut(e);
    }),
    (Be.prototype.regenerateDeviceId = function () {
      this.getInstance().regenerateDeviceId();
    }),
    (Be.prototype.setDeviceId = function (e) {
      this.getInstance().setDeviceId(e);
    }),
    (Be.prototype.setUserProperties = function (e) {
      this.getInstance().setUserProperties(e);
    }),
    (Be.prototype.clearUserProperties = function () {
      this.getInstance().clearUserProperties();
    }),
    (Be.prototype.identify = function (e, t) {
      this.getInstance().identify(e, t);
    }),
    (Be.prototype.setVersionName = function (e) {
      this.getInstance().setVersionName(e);
    }),
    (Be.prototype.logEvent = function (e, t, i) {
      return this.getInstance().logEvent(e, t, i);
    }),
    (Be.prototype.logEventWithGroups = function (e, t, i, n) {
      return this.getInstance().logEventWithGroups(e, t, i, n);
    }),
    (Be.prototype.logRevenueV2 = function (e) {
      return this.getInstance().logRevenueV2(e);
    }),
    (Be.prototype.logRevenue = function (e, t, i) {
      return this.getInstance().logRevenue(e, t, i);
    }),
    (Be.prototype.removeEvents = function (e, t) {
      this.getInstance().removeEvents(e, t);
    }),
    (Be.prototype.sendEvents = function (e) {
      this.getInstance().sendEvents(e);
    }),
    (Be.prototype.setGlobalUserProperties = function (e) {
      this.getInstance().setUserProperties(e);
    }),
    (Be.prototype.__VERSION__ = '8.18.1');
  var Xe = (void 0 !== h && h.amplitude) || {},
    We = new Be();
  for (var $e in ((We._q = Xe._q || []), Xe._iq))
    Object.prototype.hasOwnProperty.call(Xe._iq, $e) &&
      (We.getInstance($e)._q = Xe._iq[$e]._q || []);
  return We.runQueuedFunctions(), We;
})();
