import amplitude from 'amplitude-js';
import React from 'react';
import { config } from './config';

class Amplitude extends React.Component {
  componentDidMount() {
    (function (e, t) {
      var n = e.amplitude || { _q: [], _iq: {} };
      var r = t.createElement('script');
      r.type = 'text/javascript';
      r.crossOrigin = 'anonymous';
      r.async = true;
      r.src = '/amplitude/amplitude-8.18.1-min.gz.js';
      r.onload = function () {
        if (!e.amplitude.runQueuedFunctions) {
          console.log('[Amplitude] Error: could not load SDK');
        }
      };
      var i = t.getElementsByTagName('script')[0];
      i.parentNode.insertBefore(r, i);
      function s(e, t) {
        e.prototype[t] = function () {
          this._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
          return this;
        };
      }
      var o = function () {
        this._q = [];
        return this;
      };
      var a = [
        'add',
        'append',
        'clearAll',
        'prepend',
        'set',
        'setOnce',
        'unset',
        'preInsert',
        'postInsert',
        'remove',
      ];
      for (var c = 0; c < a.length; c++) {
        s(o, a[c]);
      }
      n.Identify = o;
      var u = function () {
        this._q = [];
        return this;
      };
      var l = [
        'setProductId',
        'setQuantity',
        'setPrice',
        'setRevenueType',
        'setEventProperties',
      ];
      for (var p = 0; p < l.length; p++) {
        s(u, l[p]);
      }
      n.Revenue = u;
      var d = [
        'init',
        'logEvent',
        'logRevenue',
        'setUserId',
        'setUserProperties',
        'setOptOut',
        'setVersionName',
        'setDomain',
        'setDeviceId',
        'enableTracking',
        'setGlobalUserProperties',
        'identify',
        'clearUserProperties',
        'setGroup',
        'logRevenueV2',
        'regenerateDeviceId',
        'groupIdentify',
        'onInit',
        'logEventWithTimestamp',
        'logEventWithGroups',
        'setSessionId',
        'resetSessionId',
      ];
      function v(e) {
        function t(t) {
          e[t] = function () {
            e._q.push([t].concat(Array.prototype.slice.call(arguments, 0)));
          };
        }
        for (var n = 0; n < d.length; n++) {
          t(d[n]);
        }
      }
      v(n);
      n.getInstance = function (e) {
        e = (!e || e.length === 0 ? '$default_instance' : e).toLowerCase();
        if (!Object.prototype.hasOwnProperty.call(n._iq, e)) {
          n._iq[e] = { _q: [] };
          v(n._iq[e]);
        }
        return n._iq[e];
      };
      e.amplitude = n;
    })(window, document);

    amplitude.getInstance().init(config.amplitudeApiKey, undefined, {
      apiEndpoint: config.analyticsURL, // Without this option, calls directly https://api.amplitude.com
      disableCookies: true, // We would need cookies to track users across amuni.fr and app.amuni.fr
    });
  }

  render() {
    return null;
  }
}
export default Amplitude;
