! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.L = {})
}(this, function(t) {
    "use strict";

    function h(t) {
        var e, i, n, o;
        for (i = 1, n = arguments.length; i < n; i++)
            for (e in o = arguments[i]) t[e] = o[e];
        return t
    }

    function p(t, e) {
        var i = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function() {
            return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
        }
    }

    function u(t) {
        return t._leaflet_id = t._leaflet_id || ++Ut, t._leaflet_id
    }

    function e(t, e, i) {
        var n, o, s, r;
        return r = function() {
            n = !1, o && (s.apply(i, o), o = !1)
        }, s = function() {
            n ? o = arguments : (t.apply(i, arguments), setTimeout(r, e), n = !0)
        }
    }

    function i(t, e, i) {
        var n = e[1],
            o = e[0],
            s = n - o;
        return t === n && i ? t : ((t - o) % s + s) % s + o
    }

    function a() {
        return !1
    }

    function n(t, e) {
        var i = Math.pow(10, void 0 === e ? 6 : e);
        return Math.round(t * i) / i
    }

    function o(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }

    function l(t) {
        return o(t).split(/\s+/)
    }

    function r(t, e) {
        for (var i in t.hasOwnProperty("options") || (t.options = t.options ? Ht(t.options) : {}), e) t.options[i] = e[i];
        return t.options
    }

    function _(t, e, i) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
    }

    function s(t, n) {
        return t.replace(Ft, function(t, e) {
            var i = n[e];
            if (void 0 === i) throw new Error("No value provided for variable " + t);
            return "function" == typeof i && (i = i(n)), i
        })
    }

    function c(t, e) {
        for (var i = 0; i < t.length; i++)
            if (t[i] === e) return i;
        return -1
    }

    function d(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }

    function m(t) {
        var e = +new Date,
            i = Math.max(0, 16 - (e - qt));
        return qt = e + i, window.setTimeout(t, i)
    }

    function x(t, e, i) {
        if (!i || Kt !== m) return Kt.call(window, p(t, e));
        t.call(e)
    }

    function f(t) {
        t && Yt.call(window, t)
    }

    function g() {}

    function v(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
    }

    function y(t, e, i) {
        return t instanceof v ? t : Wt(t) ? new v(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new v(t.x, t.y) : new v(t, e, i)
    }

    function w(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }

    function P(t, e) {
        return !t || t instanceof w ? t : new w(t, e)
    }

    function b(t, e) {
        if (t)
            for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }

    function C(t, e) {
        return t instanceof b ? t : new b(t, e)
    }

    function M(t, e, i) {
        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i)
    }

    function T(t, e, i) {
        return t instanceof M ? t : Wt(t) && "object" != typeof t[0] ? 3 === t.length ? new M(t[0], t[1], t[2]) : 2 === t.length ? new M(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new M(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new M(t, e, i)
    }

    function z(t, e, i, n) {
        if (Wt(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void(this._d = t[3]);
        this._a = t, this._b = e, this._c = i, this._d = n
    }

    function k(t, e, i, n) {
        return new z(t, e, i, n)
    }

    function S(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function Z(t, e) {
        var i, n, o, s, r, a, h = "";
        for (i = 0, o = t.length; i < o; i++) {
            for (n = 0, s = (r = t[i]).length; n < s; n++) h += (n ? "L" : "M") + (a = r[n]).x + " " + a.y;
            h += e ? Ge ? "z" : "x" : ""
        }
        return h || "M0 0"
    }

    function E(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
    }

    function A(t, e, i, n) {
        return "touchstart" === e ? (u = t, _ = i, c = n, d = p(function(t) {
            if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (!(Ke.indexOf(t.target.tagName) < 0)) return;
                q(t)
            }
            N(t, _)
        }), u["_leaflet_touchstart" + c] = d, u.addEventListener(Fe, d, !1), Xe || (document.documentElement.addEventListener(Fe, B, !0), document.documentElement.addEventListener(We, I, !0), document.documentElement.addEventListener(Ve, O, !0), document.documentElement.addEventListener(qe, O, !0), Xe = !0)) : "touchmove" === e ? (h = i, l = function(t) {
            (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && N(t, h)
        }, (a = t)["_leaflet_touchmove" + n] = l, a.addEventListener(We, l, !1)) : "touchend" === e && (s = i, r = function(t) {
            N(t, s)
        }, (o = t)["_leaflet_touchend" + n] = r, o.addEventListener(Ve, r, !1), o.addEventListener(qe, r, !1)), this;
        var o, s, r, a, h, l, u, _, c, d
    }

    function B(t) {
        Ye[t.pointerId] = t, Je++
    }

    function I(t) {
        Ye[t.pointerId] && (Ye[t.pointerId] = t)
    }

    function O(t) {
        delete Ye[t.pointerId], Je--
    }

    function N(t, e) {
        for (var i in t.touches = [], Ye) t.touches.push(Ye[i]);
        t.changedTouches = [t], e(t)
    }

    function R(t, o, e) {
        function i(t) {
            var e;
            if (Ie) {
                if (!pe || "mouse" === t.pointerType) return;
                e = Je
            } else e = t.touches.length;
            if (!(1 < e)) {
                var i = Date.now(),
                    n = i - (s || i);
                r = t.touches ? t.touches[0] : t, a = 0 < n && n <= 250, s = i
            }
        }

        function n(t) {
            if (a && !r.cancelBubble) {
                if (Ie) {
                    if (!pe || "mouse" === t.pointerType) return;
                    var e, i, n = {};
                    for (i in r) e = r[i], n[i] = e && e.bind ? e.bind(r) : e;
                    r = n
                }
                r.type = "dblclick", o(r), s = null
            }
        }
        var s, r, a = !1;
        return t[ti + Qe + e] = i, t[ti + $e + e] = n, t[ti + "dblclick" + e] = o, t.addEventListener(Qe, i, !1), t.addEventListener($e, n, !1), t.addEventListener("dblclick", o, !1), this
    }

    function D(t, e) {
        var i = t[ti + Qe + e],
            n = t[ti + $e + e],
            o = t[ti + "dblclick" + e];
        return t.removeEventListener(Qe, i, !1), t.removeEventListener($e, n, !1), pe || t.removeEventListener("dblclick", o, !1), this
    }

    function j(t, e, i, n) {
        if ("object" == typeof e)
            for (var o in e) H(t, o, e[o], i);
        else
            for (var s = 0, r = (e = l(e)).length; s < r; s++) H(t, e[s], i, n);
        return this
    }

    function G(t, e, i, n) {
        if ("object" == typeof e)
            for (var o in e) U(t, o, e[o], i);
        else if (e)
            for (var s = 0, r = (e = l(e)).length; s < r; s++) U(t, e[s], i, n);
        else {
            for (var a in t[ei]) U(t, a, t[ei][a]);
            delete t[ei]
        }
        return this
    }

    function H(e, t, i, n) {
        var o = t + u(i) + (n ? "_" + u(n) : "");
        if (e[ei] && e[ei][o]) return this;
        var s = function(t) {
                return i.call(n || e, t || window.event)
            },
            r = s;
        Ie && 0 === t.indexOf("touch") ? A(e, t, s, o) : !Oe || "dblclick" !== t || Ie && xe ? "addEventListener" in e ? "mousewheel" === t ? e.addEventListener("onwheel" in e ? "wheel" : "mousewheel", s, !1) : "mouseenter" === t || "mouseleave" === t ? (s = function(t) {
            t = t || window.event, $(e, t) && r(t)
        }, e.addEventListener("mouseenter" === t ? "mouseover" : "mouseout", s, !1)) : ("click" === t && fe && (s = function(t) {
            var e, i, n, o;
            i = r, n = (e = t).timeStamp || e.originalEvent && e.originalEvent.timeStamp, (o = oe && n - oe) && 100 < o && o < 500 || e.target._simulatedClick && !e._simulated ? K(e) : (oe = n, i(e))
        }), e.addEventListener(t, s, !1)) : "attachEvent" in e && e.attachEvent("on" + t, s) : R(e, s, o), e[ei] = e[ei] || {}, e[ei][o] = s
    }

    function U(t, e, i, n) {
        var o = e + u(i) + (n ? "_" + u(n) : ""),
            s = t[ei] && t[ei][o];
        if (!s) return this;
        Ie && 0 === e.indexOf("touch") ? (r = t, a = e, h = o, l = r["_leaflet_" + a + h], "touchstart" === a ? r.removeEventListener(Fe, l, !1) : "touchmove" === a ? r.removeEventListener(We, l, !1) : "touchend" === a && (r.removeEventListener(Ve, l, !1), r.removeEventListener(qe, l, !1))) : !Oe || "dblclick" !== e || Ie && xe ? "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, s, !1) : "detachEvent" in t && t.detachEvent("on" + e, s) : D(t, o), t[ei][o] = null;
        var r, a, h, l
    }

    function F(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Q(t), this
    }

    function W(t) {
        return H(t, "mousewheel", F), this
    }

    function V(t) {
        return j(t, "mousedown touchstart dblclick", F), H(t, "click", J), this
    }

    function q(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
    }

    function K(t) {
        return q(t), F(t), this
    }

    function Y(t, e) {
        if (!e) return new v(t.clientX, t.clientY);
        var i = e.getBoundingClientRect(),
            n = i.width / e.offsetWidth || 1,
            o = i.height / e.offsetHeight || 1;
        return new v(t.clientX / n - i.left - e.clientLeft, t.clientY / o - i.top - e.clientTop)
    }

    function X(t) {
        return pe ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / ii : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }

    function J(t) {
        ni[t.type] = !0
    }

    function Q(t) {
        var e = ni[t.type];
        return ni[t.type] = !1, e
    }

    function $(t, e) {
        var i = e.relatedTarget;
        if (!i) return !0;
        try {
            for (; i && i !== t;) i = i.parentNode
        } catch (t) {
            return !1
        }
        return i !== t
    }

    function tt(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function et(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || "auto" === i) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            i = n ? n[e] : null
        }
        return "auto" === i ? null : i
    }

    function it(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "", i && i.appendChild(n), n
    }

    function nt(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }

    function ot(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function st(t) {
        var e = t.parentNode;
        e.lastChild !== t && e.appendChild(t)
    }

    function rt(t) {
        var e = t.parentNode;
        e.firstChild !== t && e.insertBefore(t, e.firstChild)
    }

    function at(t, e) {
        if (void 0 !== t.classList) return t.classList.contains(e);
        var i = _t(t);
        return 0 < i.length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
    }

    function ht(t, e) {
        if (void 0 !== t.classList)
            for (var i = l(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]);
        else if (!at(t, e)) {
            var s = _t(t);
            ut(t, (s ? s + " " : "") + e)
        }
    }

    function lt(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : ut(t, o((" " + _t(t) + " ").replace(" " + e + " ", " ")))
    }

    function ut(t, e) {
        void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
    }

    function _t(t) {
        return void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }

    function ct(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function(t, e) {
            var i = !1,
                n = "DXImageTransform.Microsoft.Alpha";
            try {
                i = t.filters.item(n)
            } catch (t) {
                if (1 === e) return
            }
            e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
        }(t, e)
    }

    function dt(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++)
            if (t[i] in e) return t[i];
        return !1
    }

    function pt(t, e, i) {
        var n = e || new v(0, 0);
        t.style[si] = (Te ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
    }

    function mt(t, e) {
        t._leaflet_pos = e, Se ? pt(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
    }

    function ft(t) {
        return t._leaflet_pos || new v(0, 0)
    }

    function gt() {
        j(window, "dragstart", q)
    }

    function vt() {
        G(window, "dragstart", q)
    }

    function yt(t) {
        for (; - 1 === t.tabIndex;) t = t.parentNode;
        t.style && (Lt(), ui = (li = t).style.outline, t.style.outline = "none", j(window, "keydown", Lt))
    }

    function Lt() {
        li && (li.style.outline = ui, ui = li = void 0, G(window, "keydown", Lt))
    }

    function xt(t, e) {
        if (!e || !t.length) return t.slice();
        var i = e * e;
        return function(t, e) {
            var i = t.length,
                n = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
            n[0] = n[i - 1] = 1,
                function t(e, i, n, o, s) {
                    var r, a, h, l = 0;
                    for (a = o + 1; a <= s - 1; a++)(h = Mt(e[a], e[o], e[s], !0)) > l && (r = a, l = h);
                    n < l && (i[r] = 1, t(e, i, n, o, r), t(e, i, n, r, s))
                }(t, n, e, 0, i - 1);
            var o, s = [];
            for (o = 0; o < i; o++) n[o] && s.push(t[o]);
            return s
        }(t = function(t, e) {
            for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) r = t[n], a = t[o], void 0, void 0, h = a.x - r.x, l = a.y - r.y, e < h * h + l * l && (i.push(t[n]), o = n);
            var r, a, h, l;
            return o < s - 1 && i.push(t[s - 1]), i
        }(t, i), i)
    }

    function wt(t, e, i) {
        return Math.sqrt(Mt(t, e, i, !0))
    }

    function Pt(t, e, i, n, o) {
        var s, r, a, h = n ? xi : Ct(t, i),
            l = Ct(e, i);
        for (xi = l;;) {
            if (!(h | l)) return [t, e];
            if (h & l) return !1;
            a = Ct(r = bt(t, e, s = h || l, i, o), i), s === h ? (t = r, h = a) : (e = r, l = a)
        }
    }

    function bt(t, e, i, n, o) {
        var s, r, a = e.x - t.x,
            h = e.y - t.y,
            l = n.min,
            u = n.max;
        return 8 & i ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 4 & i ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 2 & i ? (s = u.x, r = t.y + h * (u.x - t.x) / a) : 1 & i && (s = l.x, r = t.y + h * (l.x - t.x) / a), new v(s, r, o)
    }

    function Ct(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
    }

    function Mt(t, e, i, n) {
        var o, s = e.x,
            r = e.y,
            a = i.x - s,
            h = i.y - r,
            l = a * a + h * h;
        return 0 < l && (1 < (o = ((t.x - s) * a + (t.y - r) * h) / l) ? (s = i.x, r = i.y) : 0 < o && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new v(s, r)
    }

    function Tt(t) {
        return !Wt(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }

    function zt(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Tt(t)
    }

    function kt(t, e, i) {
        var n, o, s, r, a, h, l, u, _, c = [1, 4, 2, 8];
        for (o = 0, l = t.length; o < l; o++) t[o]._code = Ct(t[o], e);
        for (r = 0; r < 4; r++) {
            for (u = c[r], n = [], o = 0, s = (l = t.length) - 1; o < l; s = o++) a = t[o], h = t[s], a._code & u ? h._code & u || ((_ = bt(h, a, u, e, i))._code = Ct(_, e), n.push(_)) : (h._code & u && ((_ = bt(h, a, u, e, i))._code = Ct(_, e), n.push(_)), n.push(a));
            t = n
        }
        return t
    }

    function St(t, e) {
        var i, n, o, s, r = "Feature" === t.type ? t.geometry : t,
            a = r ? r.coordinates : null,
            h = [],
            l = e && e.pointToLayer,
            u = e && e.coordsToLatLng || Zt;
        if (!a && !r) return null;
        switch (r.type) {
            case "Point":
                return i = u(a), l ? l(t, i) : new Hi(i);
            case "MultiPoint":
                for (o = 0, s = a.length; o < s; o++) i = u(a[o]), h.push(l ? l(t, i) : new Hi(i));
                return new Ri(h);
            case "LineString":
            case "MultiLineString":
                return n = Et(a, "LineString" === r.type ? 0 : 1, u), new Vi(n, e);
            case "Polygon":
            case "MultiPolygon":
                return n = Et(a, "Polygon" === r.type ? 1 : 2, u), new qi(n, e);
            case "GeometryCollection":
                for (o = 0, s = r.geometries.length; o < s; o++) {
                    var _ = St({
                        geometry: r.geometries[o],
                        type: "Feature",
                        properties: t.properties
                    }, e);
                    _ && h.push(_)
                }
                return new Ri(h);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    }

    function Zt(t) {
        return new M(t[1], t[0], t[2])
    }

    function Et(t, e, i) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++) n = e ? Et(t[s], e - 1, i) : (i || Zt)(t[s]), o.push(n);
        return o
    }

    function At(t, e) {
        return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [n(t.lng, e), n(t.lat, e), n(t.alt, e)] : [n(t.lng, e), n(t.lat, e)]
    }

    function Bt(t, e, i, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++) o.push(e ? Bt(t[s], e - 1, i, n) : At(t[s], n));
        return !e && i && o.push(o[0]), o
    }

    function It(t, e) {
        return t.feature ? h({}, t.feature, {
            geometry: e
        }) : Ot(e)
    }

    function Ot(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }

    function Nt(t, e) {
        return new Ki(t, e)
    }

    function Rt(t, e) {
        return new sn(t, e)
    }

    function Dt(t) {
        return je ? new hn(t) : null
    }

    function jt(t) {
        return Ge || He ? new cn(t) : null
    }
    var Gt = Object.freeze;
    Object.freeze = function(t) {
        return t
    };
    var Ht = Object.create || function() {
            function e() {}
            return function(t) {
                return e.prototype = t, new e
            }
        }(),
        Ut = 0,
        Ft = /\{ *([\w_-]+) *\}/g,
        Wt = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        Vt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        qt = 0,
        Kt = window.requestAnimationFrame || d("RequestAnimationFrame") || m,
        Yt = window.cancelAnimationFrame || d("CancelAnimationFrame") || d("CancelRequestAnimationFrame") || function(t) {
            window.clearTimeout(t)
        },
        Xt = (Object.freeze || Object)({
            freeze: Gt,
            extend: h,
            create: Ht,
            bind: p,
            lastId: Ut,
            stamp: u,
            throttle: e,
            wrapNum: i,
            falseFn: a,
            formatNum: n,
            trim: o,
            splitWords: l,
            setOptions: r,
            getParamString: _,
            template: s,
            isArray: Wt,
            indexOf: c,
            emptyImageUrl: Vt,
            requestFn: Kt,
            cancelFn: Yt,
            requestAnimFrame: x,
            cancelAnimFrame: f
        });
    g.extend = function(t) {
        var e = function() {
                this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
            },
            i = e.__super__ = this.prototype,
            n = Ht(i);
        for (var o in (n.constructor = e).prototype = n, this) this.hasOwnProperty(o) && "prototype" !== o && "__super__" !== o && (e[o] = this[o]);
        return t.statics && (h(e, t.statics), delete t.statics), t.includes && (function(t) {
            if ("undefined" != typeof L && L && L.Mixin) {
                t = Wt(t) ? t : [t];
                for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
            }
        }(t.includes), h.apply(null, [n].concat(t.includes)), delete t.includes), n.options && (t.options = h(Ht(n.options), t.options)), h(n, t), n._initHooks = [], n.callInitHooks = function() {
            if (!this._initHooksCalled) {
                i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, e = n._initHooks.length; t < e; t++) n._initHooks[t].call(this)
            }
        }, e
    }, g.include = function(t) {
        return h(this.prototype, t), this
    }, g.mergeOptions = function(t) {
        return h(this.prototype.options, t), this
    }, g.addInitHook = function(t) {
        var e = Array.prototype.slice.call(arguments, 1),
            i = "function" == typeof t ? t : function() {
                this[t].apply(this, e)
            };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
    };
    var Jt = {
        on: function(t, e, i) {
            if ("object" == typeof t)
                for (var n in t) this._on(n, t[n], e);
            else
                for (var o = 0, s = (t = l(t)).length; o < s; o++) this._on(t[o], e, i);
            return this
        },
        off: function(t, e, i) {
            if (t)
                if ("object" == typeof t)
                    for (var n in t) this._off(n, t[n], e);
                else
                    for (var o = 0, s = (t = l(t)).length; o < s; o++) this._off(t[o], e, i);
            else delete this._events;
            return this
        },
        _on: function(t, e, i) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (n = [], this._events[t] = n), i === this && (i = void 0);
            for (var o = {
                    fn: e,
                    ctx: i
                }, s = n, r = 0, a = s.length; r < a; r++)
                if (s[r].fn === e && s[r].ctx === i) return;
            s.push(o)
        },
        _off: function(t, e, i) {
            var n, o, s;
            if (this._events && (n = this._events[t]))
                if (e) {
                    if (i === this && (i = void 0), n)
                        for (o = 0, s = n.length; o < s; o++) {
                            var r = n[o];
                            if (r.ctx === i && r.fn === e) return r.fn = a, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                        }
                } else {
                    for (o = 0, s = n.length; o < s; o++) n[o].fn = a;
                    delete this._events[t]
                }
        },
        fire: function(t, e, i) {
            if (!this.listens(t, i)) return this;
            var n = h({}, e, {
                type: t,
                target: this,
                sourceTarget: e && e.sourceTarget || this
            });
            if (this._events) {
                var o = this._events[t];
                if (o) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var s = 0, r = o.length; s < r; s++) {
                        var a = o[s];
                        a.fn.call(a.ctx || this, n)
                    }
                    this._firingCount--
                }
            }
            return i && this._propagateEvent(n), this
        },
        listens: function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) return !0;
            if (e)
                for (var n in this._eventParents)
                    if (this._eventParents[n].listens(t, e)) return !0;
            return !1
        },
        once: function(t, e, i) {
            if ("object" == typeof t) {
                for (var n in t) this.once(n, t[n], e);
                return this
            }
            var o = p(function() {
                this.off(t, e, i).off(t, o, i)
            }, this);
            return this.on(t, e, i).on(t, o, i)
        },
        addEventParent: function(t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[u(t)] = t, this
        },
        removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[u(t)], this
        },
        _propagateEvent: function(t) {
            for (var e in this._eventParents) this._eventParents[e].fire(t.type, h({
                layer: t.target,
                propagatedFrom: t.target
            }, t), !0)
        }
    };
    Jt.addEventListener = Jt.on, Jt.removeEventListener = Jt.clearAllEventListeners = Jt.off, Jt.addOneTimeEventListener = Jt.once, Jt.fireEvent = Jt.fire, Jt.hasEventListeners = Jt.listens;
    var Qt = g.extend(Jt),
        $t = Math.trunc || function(t) {
            return 0 < t ? Math.floor(t) : Math.ceil(t)
        };
    v.prototype = {
        clone: function() {
            return new v(this.x, this.y)
        },
        add: function(t) {
            return this.clone()._add(y(t))
        },
        _add: function(t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function(t) {
            return this.clone()._subtract(y(t))
        },
        _subtract: function(t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        divideBy: function(t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function(t) {
            return this.x /= t, this.y /= t, this
        },
        multiplyBy: function(t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function(t) {
            return this.x *= t, this.y *= t, this
        },
        scaleBy: function(t) {
            return new v(this.x * t.x, this.y * t.y)
        },
        unscaleBy: function(t) {
            return new v(this.x / t.x, this.y / t.y)
        },
        round: function() {
            return this.clone()._round()
        },
        _round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function() {
            return this.clone()._floor()
        },
        _floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.clone()._ceil()
        },
        _ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        trunc: function() {
            return this.clone()._trunc()
        },
        _trunc: function() {
            return this.x = $t(this.x), this.y = $t(this.y), this
        },
        distanceTo: function(t) {
            var e = (t = y(t)).x - this.x,
                i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
        },
        equals: function(t) {
            return (t = y(t)).x === this.x && t.y === this.y
        },
        contains: function(t) {
            return t = y(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function() {
            return "Point(" + n(this.x) + ", " + n(this.y) + ")"
        }
    }, w.prototype = {
        extend: function(t) {
            return t = y(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        },
        getCenter: function(t) {
            return new v((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function() {
            return new v(this.min.x, this.max.y)
        },
        getTopRight: function() {
            return new v(this.max.x, this.min.y)
        },
        getTopLeft: function() {
            return this.min
        },
        getBottomRight: function() {
            return this.max
        },
        getSize: function() {
            return this.max.subtract(this.min)
        },
        contains: function(t) {
            var e, i;
            return (t = "number" == typeof t[0] || t instanceof v ? y(t) : P(t)) instanceof w ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        },
        intersects: function(t) {
            t = P(t);
            var e = this.min,
                i = this.max,
                n = t.min,
                o = t.max,
                s = o.x >= e.x && n.x <= i.x,
                r = o.y >= e.y && n.y <= i.y;
            return s && r
        },
        overlaps: function(t) {
            t = P(t);
            var e = this.min,
                i = this.max,
                n = t.min,
                o = t.max,
                s = o.x > e.x && n.x < i.x,
                r = o.y > e.y && n.y < i.y;
            return s && r
        },
        isValid: function() {
            return !(!this.min || !this.max)
        }
    }, b.prototype = {
        extend: function(t) {
            var e, i, n = this._southWest,
                o = this._northEast;
            if (t instanceof M) i = e = t;
            else {
                if (!(t instanceof b)) return t ? this.extend(T(t) || C(t)) : this;
                if (e = t._southWest, i = t._northEast, !e || !i) return this
            }
            return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new M(e.lat, e.lng), this._northEast = new M(i.lat, i.lng)), this
        },
        pad: function(t) {
            var e = this._southWest,
                i = this._northEast,
                n = Math.abs(e.lat - i.lat) * t,
                o = Math.abs(e.lng - i.lng) * t;
            return new b(new M(e.lat - n, e.lng - o), new M(i.lat + n, i.lng + o))
        },
        getCenter: function() {
            return new M((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function() {
            return this._southWest
        },
        getNorthEast: function() {
            return this._northEast
        },
        getNorthWest: function() {
            return new M(this.getNorth(), this.getWest())
        },
        getSouthEast: function() {
            return new M(this.getSouth(), this.getEast())
        },
        getWest: function() {
            return this._southWest.lng
        },
        getSouth: function() {
            return this._southWest.lat
        },
        getEast: function() {
            return this._northEast.lng
        },
        getNorth: function() {
            return this._northEast.lat
        },
        contains: function(t) {
            t = "number" == typeof t[0] || t instanceof M || "lat" in t ? T(t) : C(t);
            var e, i, n = this._southWest,
                o = this._northEast;
            return t instanceof b ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
        },
        intersects: function(t) {
            t = C(t);
            var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat >= e.lat && n.lat <= i.lat,
                r = o.lng >= e.lng && n.lng <= i.lng;
            return s && r
        },
        overlaps: function(t) {
            t = C(t);
            var e = this._southWest,
                i = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat > e.lat && n.lat < i.lat,
                r = o.lng > e.lng && n.lng < i.lng;
            return s && r
        },
        toBBoxString: function() {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function(t, e) {
            return !!t && (t = C(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
        },
        isValid: function() {
            return !(!this._southWest || !this._northEast)
        }
    };
    var te, ee = {
            latLngToPoint: function(t, e) {
                var i = this.projection.project(t),
                    n = this.scale(e);
                return this.transformation._transform(i, n)
            },
            pointToLatLng: function(t, e) {
                var i = this.scale(e),
                    n = this.transformation.untransform(t, i);
                return this.projection.unproject(n)
            },
            project: function(t) {
                return this.projection.project(t)
            },
            unproject: function(t) {
                return this.projection.unproject(t)
            },
            scale: function(t) {
                return 256 * Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t / 256) / Math.LN2
            },
            getProjectedBounds: function(t) {
                if (this.infinite) return null;
                var e = this.projection.bounds,
                    i = this.scale(t);
                return new w(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i))
            },
            infinite: !(M.prototype = {
                equals: function(t, e) {
                    return !!t && (t = T(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
                },
                toString: function(t) {
                    return "LatLng(" + n(this.lat, t) + ", " + n(this.lng, t) + ")"
                },
                distanceTo: function(t) {
                    return ie.distance(this, T(t))
                },
                wrap: function() {
                    return ie.wrapLatLng(this)
                },
                toBounds: function(t) {
                    var e = 180 * t / 40075017,
                        i = e / Math.cos(Math.PI / 180 * this.lat);
                    return C([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
                },
                clone: function() {
                    return new M(this.lat, this.lng, this.alt)
                }
            }),
            wrapLatLng: function(t) {
                var e = this.wrapLng ? i(t.lng, this.wrapLng, !0) : t.lng;
                return new M(this.wrapLat ? i(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
            },
            wrapLatLngBounds: function(t) {
                var e = t.getCenter(),
                    i = this.wrapLatLng(e),
                    n = e.lat - i.lat,
                    o = e.lng - i.lng;
                if (0 === n && 0 === o) return t;
                var s = t.getSouthWest(),
                    r = t.getNorthEast();
                return new b(new M(s.lat - n, s.lng - o), new M(r.lat - n, r.lng - o))
            }
        },
        ie = h({}, ee, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function(t, e) {
                var i = Math.PI / 180,
                    n = t.lat * i,
                    o = e.lat * i,
                    s = Math.sin((e.lat - t.lat) * i / 2),
                    r = Math.sin((e.lng - t.lng) * i / 2),
                    a = s * s + Math.cos(n) * Math.cos(o) * r * r,
                    h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * h
            }
        }),
        ne = {
            R: 6378137,
            MAX_LATITUDE: 85.0511287798,
            project: function(t) {
                var e = Math.PI / 180,
                    i = this.MAX_LATITUDE,
                    n = Math.max(Math.min(i, t.lat), -i),
                    o = Math.sin(n * e);
                return new v(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
            },
            unproject: function(t) {
                var e = 180 / Math.PI;
                return new M((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
            },
            bounds: (te = 6378137 * Math.PI, new w([-te, -te], [te, te]))
        };
    z.prototype = {
        transform: function(t, e) {
            return this._transform(t.clone(), e)
        },
        _transform: function(t, e) {
            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
        },
        untransform: function(t, e) {
            return e = e || 1, new v((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    };
    var oe, se, re, ae, he, le = h({}, ie, {
            code: "EPSG:3857",
            projection: ne,
            transformation: (he = .5 / (Math.PI * ne.R), k(he, .5, -he, .5))
        }),
        ue = h({}, le, {
            code: "EPSG:900913"
        }),
        _e = document.documentElement.style,
        ce = "ActiveXObject" in window,
        de = ce && !document.addEventListener,
        pe = "msLaunchUri" in navigator && !("documentMode" in document),
        me = E("webkit"),
        fe = E("android"),
        ge = E("android 2") || E("android 3"),
        ve = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        ye = fe && E("Google") && ve < 537 && !("AudioNode" in window),
        Le = !!window.opera,
        xe = E("chrome"),
        we = E("gecko") && !me && !Le && !ce,
        Pe = !xe && E("safari"),
        be = E("phantom"),
        Ce = "OTransition" in _e,
        Me = 0 === navigator.platform.indexOf("Win"),
        Te = ce && "transition" in _e,
        ze = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !ge,
        ke = "MozPerspective" in _e,
        Se = !window.L_DISABLE_3D && (Te || ze || ke) && !Ce && !be,
        Ze = "undefined" != typeof orientation || E("mobile"),
        Ee = Ze && me,
        Ae = Ze && ze,
        Be = !window.PointerEvent && window.MSPointerEvent,
        Ie = !(!window.PointerEvent && !Be),
        Oe = !window.L_NO_TOUCH && (Ie || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        Ne = Ze && Le,
        Re = Ze && we,
        De = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
        je = !!document.createElement("canvas").getContext,
        Ge = !(!document.createElementNS || !S("svg").createSVGRect),
        He = !Ge && function() {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var e = t.firstChild;
                return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
            } catch (t) {
                return !1
            }
        }(),
        Ue = (Object.freeze || Object)({
            ie: ce,
            ielt9: de,
            edge: pe,
            webkit: me,
            android: fe,
            android23: ge,
            androidStock: ye,
            opera: Le,
            chrome: xe,
            gecko: we,
            safari: Pe,
            phantom: be,
            opera12: Ce,
            win: Me,
            ie3d: Te,
            webkit3d: ze,
            gecko3d: ke,
            any3d: Se,
            mobile: Ze,
            mobileWebkit: Ee,
            mobileWebkit3d: Ae,
            msPointer: Be,
            pointer: Ie,
            touch: Oe,
            mobileOpera: Ne,
            mobileGecko: Re,
            retina: De,
            canvas: je,
            svg: Ge,
            vml: He
        }),
        Fe = Be ? "MSPointerDown" : "pointerdown",
        We = Be ? "MSPointerMove" : "pointermove",
        Ve = Be ? "MSPointerUp" : "pointerup",
        qe = Be ? "MSPointerCancel" : "pointercancel",
        Ke = ["INPUT", "SELECT", "OPTION"],
        Ye = {},
        Xe = !1,
        Je = 0,
        Qe = Be ? "MSPointerDown" : Ie ? "pointerdown" : "touchstart",
        $e = Be ? "MSPointerUp" : Ie ? "pointerup" : "touchend",
        ti = "_leaflet_",
        ei = "_leaflet_events",
        ii = Me && xe ? 2 * window.devicePixelRatio : we ? window.devicePixelRatio : 1,
        ni = {},
        oi = (Object.freeze || Object)({
            on: j,
            off: G,
            stopPropagation: F,
            disableScrollPropagation: W,
            disableClickPropagation: V,
            preventDefault: q,
            stop: K,
            getMousePosition: Y,
            getWheelDelta: X,
            fakeStop: J,
            skipped: Q,
            isExternalTarget: $,
            addListener: j,
            removeListener: G
        }),
        si = dt(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
        ri = dt(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        ai = "webkitTransition" === ri || "OTransition" === ri ? ri + "End" : "transitionend";
    if ("onselectstart" in document) se = function() {
        j(window, "selectstart", q)
    }, re = function() {
        G(window, "selectstart", q)
    };
    else {
        var hi = dt(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        se = function() {
            if (hi) {
                var t = document.documentElement.style;
                ae = t[hi], t[hi] = "none"
            }
        }, re = function() {
            hi && (document.documentElement.style[hi] = ae, ae = void 0)
        }
    }
    var li, ui, _i = (Object.freeze || Object)({
            TRANSFORM: si,
            TRANSITION: ri,
            TRANSITION_END: ai,
            get: tt,
            getStyle: et,
            create: it,
            remove: nt,
            empty: ot,
            toFront: st,
            toBack: rt,
            hasClass: at,
            addClass: ht,
            removeClass: lt,
            setClass: ut,
            getClass: _t,
            setOpacity: ct,
            testProp: dt,
            setTransform: pt,
            setPosition: mt,
            getPosition: ft,
            disableTextSelection: se,
            enableTextSelection: re,
            disableImageDrag: gt,
            enableImageDrag: vt,
            preventOutline: yt,
            restoreOutline: Lt
        }),
        ci = Qt.extend({
            run: function(t, e, i, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = ft(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            },
            stop: function() {
                this._inProgress && (this._step(!0), this._complete())
            },
            _animate: function() {
                this._animId = x(this._animate, this), this._step()
            },
            _step: function(t) {
                var e = +new Date - this._startTime,
                    i = 1e3 * this._duration;
                e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
            },
            _runFrame: function(t, e) {
                var i = this._startPos.add(this._offset.multiplyBy(t));
                e && i._round(), mt(this._el, i), this.fire("step")
            },
            _complete: function() {
                f(this._animId), this._inProgress = !1, this.fire("end")
            },
            _easeOut: function(t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }),
        di = Qt.extend({
            options: {
                crs: le,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
            },
            initialize: function(t, e) {
                e = r(this, e), this._initContainer(t), this._initLayout(), this._onResize = p(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(T(e.center), e.zoom, {
                    reset: !0
                }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = ri && Se && !Ne && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), j(this._proxy, ai, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
            },
            setView: function(t, e, i) {
                return e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(T(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i && (void 0 !== i.animate && (i.zoom = h({
                    animate: i.animate
                }, i.zoom), i.pan = h({
                    animate: i.animate,
                    duration: i.duration
                }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan)) ? clearTimeout(this._sizeTimer) : this._resetView(t, e), this
            },
            setZoom: function(t, e) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: e
                }) : (this._zoom = t, this)
            },
            zoomIn: function(t, e) {
                return t = t || (Se ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
            },
            zoomOut: function(t, e) {
                return t = t || (Se ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
            },
            setZoomAround: function(t, e, i) {
                var n = this.getZoomScale(e),
                    o = this.getSize().divideBy(2),
                    s = (t instanceof v ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                    r = this.containerPointToLatLng(o.add(s));
                return this.setView(r, e, {
                    zoom: i
                })
            },
            _getBoundsCenterZoom: function(t, e) {
                e = e || {}, t = t.getBounds ? t.getBounds() : C(t);
                var i = y(e.paddingTopLeft || e.padding || [0, 0]),
                    n = y(e.paddingBottomRight || e.padding || [0, 0]),
                    o = this.getBoundsZoom(t, !1, i.add(n));
                if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return {
                    center: t.getCenter(),
                    zoom: o
                };
                var s = n.subtract(i).divideBy(2),
                    r = this.project(t.getSouthWest(), o),
                    a = this.project(t.getNorthEast(), o);
                return {
                    center: this.unproject(r.add(a).divideBy(2).add(s), o),
                    zoom: o
                }
            },
            fitBounds: function(t, e) {
                if (!(t = C(t)).isValid()) throw new Error("Bounds are not valid.");
                var i = this._getBoundsCenterZoom(t, e);
                return this.setView(i.center, i.zoom, e)
            },
            fitWorld: function(t) {
                return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t)
            },
            panTo: function(t, e) {
                return this.setView(t, this._zoom, {
                    pan: e
                })
            },
            panBy: function(t, e) {
                if (e = e || {}, !(t = y(t).round()).x && !t.y) return this.fire("moveend");
                if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                if (this._panAnim || (this._panAnim = new ci, this._panAnim.on({
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd
                    }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                    ht(this._mapPane, "leaflet-pan-anim");
                    var i = this._getMapPanePos().subtract(t).round();
                    this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
            },
            flyTo: function(s, r, t) {
                function e(t) {
                    var e = (o * o - c * c + (t ? -1 : 1) * m * m * d * d) / (2 * (t ? o : c) * m * d),
                        i = Math.sqrt(e * e + 1) - e;
                    return i < 1e-9 ? -18 : Math.log(i)
                }

                function i(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function a(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2
                }

                function h(t) {
                    return c * (a(f) * (i(e = f + p * t) / a(e)) - i(f)) / m;
                    var e
                }
                if (!1 === (t = t || {}).animate || !Se) return this.setView(s, r, t);
                this._stop();
                var l = this.project(this.getCenter()),
                    u = this.project(s),
                    n = this.getSize(),
                    _ = this._zoom;
                s = T(s), r = void 0 === r ? _ : r;
                var c = Math.max(n.x, n.y),
                    o = c * this.getZoomScale(_, r),
                    d = u.distanceTo(l) || 1,
                    p = 1.42,
                    m = p * p,
                    f = e(0),
                    g = Date.now(),
                    v = (e(1) - f) / p,
                    y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;
                return this._moveStart(!0, t.noMoveStart),
                    function t() {
                        var e, i, n = (Date.now() - g) / y,
                            o = (e = n, (1 - Math.pow(1 - e, 1.5)) * v);
                        n <= 1 ? (this._flyToFrame = x(t, this), this._move(this.unproject(l.add(u.subtract(l).multiplyBy(h(o) / d)), _), this.getScaleZoom(c / (i = o, c * (a(f) / a(f + p * i))), _), {
                            flyTo: !0
                        })) : this._move(s, r)._moveEnd(!0)
                    }.call(this), this
            },
            flyToBounds: function(t, e) {
                var i = this._getBoundsCenterZoom(t, e);
                return this.flyTo(i.center, i.zoom, e)
            },
            setMaxBounds: function(t) {
                return (t = C(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function(t) {
                var e = this.options.minZoom;
                return this.options.minZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
            },
            setMaxZoom: function(t) {
                var e = this.options.maxZoom;
                return this.options.maxZoom = t, this._loaded && e !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
            },
            panInsideBounds: function(t, e) {
                this._enforcingBounds = !0;
                var i = this.getCenter(),
                    n = this._limitCenter(i, this._zoom, C(t));
                return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this
            },
            invalidateSize: function(t) {
                if (!this._loaded) return this;
                t = h({
                    animate: !1,
                    pan: !0
                }, !0 === t ? {
                    animate: !0
                } : t);
                var e = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var i = this.getSize(),
                    n = e.divideBy(2).round(),
                    o = i.divideBy(2).round(),
                    s = n.subtract(o);
                return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(p(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: e,
                    newSize: i
                })) : this
            },
            stop: function() {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
            },
            locate: function(t) {
                if (t = this._locateOptions = h({
                        timeout: 1e4,
                        watch: !1
                    }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var e = p(this._handleGeolocationResponse, this),
                    i = p(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
            },
            stopLocate: function() {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function(t) {
                var e = t.code,
                    i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: e,
                    message: "Geolocation error: " + i + "."
                })
            },
            _handleGeolocationResponse: function(t) {
                var e = new M(t.coords.latitude, t.coords.longitude),
                    i = e.toBounds(t.coords.accuracy),
                    n = this._locateOptions;
                if (n.setView) {
                    var o = this.getBoundsZoom(i);
                    this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o)
                }
                var s = {
                    latlng: e,
                    bounds: i,
                    timestamp: t.timestamp
                };
                for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
                this.fire("locationfound", s)
            },
            addHandler: function(t, e) {
                if (!e) return this;
                var i = this[t] = new e(this);
                return this._handlers.push(i), this.options[t] && i.enable(), this
            },
            remove: function() {
                if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                try {
                    delete this._container._leaflet_id, delete this._containerId
                } catch (t) {
                    this._container._leaflet_id = void 0, this._containerId = void 0
                }
                var t;
                for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), nt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                for (t in this._panes) nt(this._panes[t]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
            },
            createPane: function(t, e) {
                var i = it("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
                return t && (this._panes[t] = i), i
            },
            getCenter: function() {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function() {
                return this._zoom
            },
            getBounds: function() {
                var t = this.getPixelBounds();
                return new b(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
            },
            getMinZoom: function() {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function() {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function(t, e, i) {
                t = C(t), i = y(i || [0, 0]);
                var n = this.getZoom() || 0,
                    o = this.getMinZoom(),
                    s = this.getMaxZoom(),
                    r = t.getNorthWest(),
                    a = t.getSouthEast(),
                    h = this.getSize().subtract(i),
                    l = P(this.project(a, n), this.project(r, n)).getSize(),
                    u = Se ? this.options.zoomSnap : 1,
                    _ = h.x / l.x,
                    c = h.y / l.y,
                    d = e ? Math.max(_, c) : Math.min(_, c);
                return n = this.getScaleZoom(d, n), u && (n = Math.round(n / (u / 100)) * (u / 100), n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u), Math.max(o, Math.min(s, n))
            },
            getSize: function() {
                return this._size && !this._sizeChanged || (this._size = new v(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function(t, e) {
                var i = this._getTopLeftPoint(t, e);
                return new w(i, i.add(this.getSize()))
            },
            getPixelOrigin: function() {
                return this._checkIfLoaded(), this._pixelOrigin
            },
            getPixelWorldBounds: function(t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function(t) {
                return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function() {
                return this._panes
            },
            getContainer: function() {
                return this._container
            },
            getZoomScale: function(t, e) {
                var i = this.options.crs;
                return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e)
            },
            getScaleZoom: function(t, e) {
                var i = this.options.crs;
                e = void 0 === e ? this._zoom : e;
                var n = i.zoom(t * i.scale(e));
                return isNaN(n) ? 1 / 0 : n
            },
            project: function(t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(T(t), e)
            },
            unproject: function(t, e) {
                return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(y(t), e)
            },
            layerPointToLatLng: function(t) {
                var e = y(t).add(this.getPixelOrigin());
                return this.unproject(e)
            },
            latLngToLayerPoint: function(t) {
                return this.project(T(t))._round()._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function(t) {
                return this.options.crs.wrapLatLng(T(t))
            },
            wrapLatLngBounds: function(t) {
                return this.options.crs.wrapLatLngBounds(C(t))
            },
            distance: function(t, e) {
                return this.options.crs.distance(T(t), T(e))
            },
            containerPointToLayerPoint: function(t) {
                return y(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function(t) {
                return y(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function(t) {
                var e = this.containerPointToLayerPoint(y(t));
                return this.layerPointToLatLng(e)
            },
            latLngToContainerPoint: function(t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(T(t)))
            },
            mouseEventToContainerPoint: function(t) {
                return Y(t, this._container)
            },
            mouseEventToLayerPoint: function(t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function(t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function(t) {
                var e = this._container = tt(t);
                if (!e) throw new Error("Map container not found.");
                if (e._leaflet_id) throw new Error("Map container is already initialized.");
                j(e, "scroll", this._onScroll, this), this._containerId = u(e)
            },
            _initLayout: function() {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && Se, ht(t, "leaflet-container" + (Oe ? " leaflet-touch" : "") + (De ? " leaflet-retina" : "") + (de ? " leaflet-oldie" : "") + (Pe ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var e = et(t, "position");
                "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function() {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), mt(this._mapPane, new v(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (ht(t.markerPane, "leaflet-zoom-hide"), ht(t.shadowPane, "leaflet-zoom-hide"))
            },
            _resetView: function(t, e) {
                mt(this._mapPane, new v(0, 0));
                var i = !this._loaded;
                this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
                var n = this._zoom !== e;
                this._moveStart(n, !1)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load")
            },
            _moveStart: function(t, e) {
                return t && this.fire("zoomstart"), e || this.fire("movestart"), this
            },
            _move: function(t, e, i) {
                void 0 === e && (e = this._zoom);
                var n = this._zoom !== e;
                return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)
            },
            _moveEnd: function(t) {
                return t && this.fire("zoomend"), this.fire("moveend")
            },
            _stop: function() {
                return f(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
            },
            _rawPanBy: function(t) {
                mt(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function() {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function() {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function() {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function(t) {
                this._targets = {};
                var e = t ? G : j;
                e((this._targets[u(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), Se && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
            },
            _onResize: function() {
                f(this._resizeRequest), this._resizeRequest = x(function() {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }, this)
            },
            _onScroll: function() {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
            },
            _onMoveEnd: function() {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function(t, e) {
                for (var i, n = [], o = "mouseout" === e || "mouseover" === e, s = t.target || t.srcElement, r = !1; s;) {
                    if ((i = this._targets[u(s)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                        r = !0;
                        break
                    }
                    if (i && i.listens(e, !0)) {
                        if (o && !$(s, t)) break;
                        if (n.push(i), o) break
                    }
                    if (s === this._container) break;
                    s = s.parentNode
                }
                return n.length || r || o || !$(s, t) || (n = [this]), n
            },
            _handleDOMEvent: function(t) {
                if (this._loaded && !Q(t)) {
                    var e = t.type;
                    "mousedown" !== e && "keypress" !== e || yt(t.target || t.srcElement), this._fireDOMEvent(t, e)
                }
            },
            _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
            _fireDOMEvent: function(t, e, i) {
                if ("click" === t.type) {
                    var n = h({}, t);
                    n.type = "preclick", this._fireDOMEvent(n, n.type, i)
                }
                if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                    var o = i[0];
                    "contextmenu" === e && o.listens(e, !0) && q(t);
                    var s = {
                        originalEvent: t
                    };
                    if ("keypress" !== t.type) {
                        var r = o.getLatLng && (!o._radius || o._radius <= 10);
                        s.containerPoint = r ? this.latLngToContainerPoint(o.getLatLng()) : this.mouseEventToContainerPoint(t), s.layerPoint = this.containerPointToLayerPoint(s.containerPoint), s.latlng = r ? o.getLatLng() : this.layerPointToLatLng(s.layerPoint)
                    }
                    for (var a = 0; a < i.length; a++)
                        if (i[a].fire(e, s, !0), s.originalEvent._stopped || !1 === i[a].options.bubblingMouseEvents && -1 !== c(this._mouseEvents, e)) return
                }
            },
            _draggableMoved: function(t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function() {
                for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
            },
            whenReady: function(t, e) {
                return this._loaded ? t.call(e || this, {
                    target: this
                }) : this.on("load", t, e), this
            },
            _getMapPanePos: function() {
                return ft(this._mapPane) || new v(0, 0)
            },
            _moved: function() {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function(t, e) {
                return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function(t, e) {
                var i = this.getSize()._divideBy(2);
                return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function(t, e, i) {
                var n = this._getNewPixelOrigin(i, e);
                return this.project(t, e)._subtract(n)
            },
            _latLngBoundsToNewLayerBounds: function(t, e, i) {
                var n = this._getNewPixelOrigin(i, e);
                return P([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
            },
            _getCenterLayerPoint: function() {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function(t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function(t, e, i) {
                if (!i) return t;
                var n = this.project(t, e),
                    o = this.getSize().divideBy(2),
                    s = new w(n.subtract(o), n.add(o)),
                    r = this._getBoundsOffset(s, i, e);
                return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), e)
            },
            _limitOffset: function(t, e) {
                if (!e) return t;
                var i = this.getPixelBounds(),
                    n = new w(i.min.add(t), i.max.add(t));
                return t.add(this._getBoundsOffset(n, e))
            },
            _getBoundsOffset: function(t, e, i) {
                var n = P(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                    o = n.min.subtract(t.min),
                    s = n.max.subtract(t.max);
                return new v(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
            },
            _rebound: function(t, e) {
                return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
            },
            _limitZoom: function(t) {
                var e = this.getMinZoom(),
                    i = this.getMaxZoom(),
                    n = Se ? this.options.zoomSnap : 1;
                return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t))
            },
            _onPanTransitionStep: function() {
                this.fire("move")
            },
            _onPanTransitionEnd: function() {
                lt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function(t, e) {
                var i = this._getCenterOffset(t)._trunc();
                return !(!0 !== (e && e.animate) && !this.getSize().contains(i) || (this.panBy(i, e), 0))
            },
            _createAnimProxy: function() {
                var t = this._proxy = it("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", function(t) {
                    var e = si,
                        i = this._proxy.style[e];
                    pt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
                }, this), this.on("load moveend", function() {
                    var t = this.getCenter(),
                        e = this.getZoom();
                    pt(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
                }, this), this._on("unload", this._destroyAnimProxy, this)
            },
            _destroyAnimProxy: function() {
                nt(this._proxy), delete this._proxy
            },
            _catchTransitionEnd: function(t) {
                this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function() {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function(t, e, i) {
                if (this._animatingZoom) return !0;
                if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var n = this.getZoomScale(e),
                    o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                return !(!0 !== i.animate && !this.getSize().contains(o) || (x(function() {
                    this._moveStart(!0, !1)._animateZoom(t, e, !0)
                }, this), 0))
            },
            _animateZoom: function(t, e, i, n) {
                this._mapPane && (i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, ht(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                    center: t,
                    zoom: e,
                    noUpdate: n
                }), setTimeout(p(this._onZoomTransitionEnd, this), 250))
            },
            _onZoomTransitionEnd: function() {
                this._animatingZoom && (this._mapPane && lt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), x(function() {
                    this._moveEnd(!0)
                }, this))
            }
        }),
        pi = g.extend({
            options: {
                position: "topright"
            },
            initialize: function(t) {
                r(this, t)
            },
            getPosition: function() {
                return this.options.position
            },
            setPosition: function(t) {
                var e = this._map;
                return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
            },
            getContainer: function() {
                return this._container
            },
            addTo: function(t) {
                this.remove(), this._map = t;
                var e = this._container = this.onAdd(t),
                    i = this.getPosition(),
                    n = t._controlCorners[i];
                return ht(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
            },
            remove: function() {
                return this._map && (nt(this._container), this.onRemove && this.onRemove(this._map), this._map = null), this
            },
            _refocusOnMap: function(t) {
                this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
            }
        }),
        mi = function(t) {
            return new pi(t)
        };
    di.include({
        addControl: function(t) {
            return t.addTo(this), this
        },
        removeControl: function(t) {
            return t.remove(), this
        },
        _initControlPos: function() {
            function t(t, e) {
                var i = o + t + " " + o + e;
                n[t + e] = it("div", i, s)
            }
            var n = this._controlCorners = {},
                o = "leaflet-",
                s = this._controlContainer = it("div", o + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        },
        _clearControlPos: function() {
            for (var t in this._controlCorners) nt(this._controlCorners[t]);
            nt(this._controlContainer), delete this._controlCorners, delete this._controlContainer
        }
    });
    var fi = pi.extend({
            options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function(t, e, i, n) {
                    return i < n ? -1 : n < i ? 1 : 0
                }
            },
            initialize: function(t, e, i) {
                for (var n in r(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n);
                for (n in e) this._addLayer(e[n], n, !0)
            },
            onAdd: function(t) {
                this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);
                for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
                return this._container
            },
            addTo: function(t) {
                return pi.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
            },
            onRemove: function() {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
            },
            addBaseLayer: function(t, e) {
                return this._addLayer(t, e), this._map ? this._update() : this
            },
            addOverlay: function(t, e) {
                return this._addLayer(t, e, !0), this._map ? this._update() : this
            },
            removeLayer: function(t) {
                t.off("add remove", this._onLayerChange, this);
                var e = this._getLayer(u(t));
                return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
            },
            expand: function() {
                ht(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
                var t = this._map.getSize().y - (this._container.offsetTop + 50);
                return t < this._form.clientHeight ? (ht(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : lt(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
            },
            collapse: function() {
                return lt(this._container, "leaflet-control-layers-expanded"), this
            },
            _initLayout: function() {
                var t = "leaflet-control-layers",
                    e = this._container = it("div", t),
                    i = this.options.collapsed;
                e.setAttribute("aria-haspopup", !0), V(e), W(e);
                var n = this._form = it("form", t + "-list");
                i && (this._map.on("click", this.collapse, this), fe || j(e, {
                    mouseenter: this.expand,
                    mouseleave: this.collapse
                }, this));
                var o = this._layersLink = it("a", t + "-toggle", e);
                o.href = "#", o.title = "Layers", Oe ? (j(o, "click", K), j(o, "click", this.expand, this)) : j(o, "focus", this.expand, this), i || this.expand(), this._baseLayersList = it("div", t + "-base", n), this._separator = it("div", t + "-separator", n), this._overlaysList = it("div", t + "-overlays", n), e.appendChild(n)
            },
            _getLayer: function(t) {
                for (var e = 0; e < this._layers.length; e++)
                    if (this._layers[e] && u(this._layers[e].layer) === t) return this._layers[e]
            },
            _addLayer: function(t, e, i) {
                this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                    layer: t,
                    name: e,
                    overlay: i
                }), this.options.sortLayers && this._layers.sort(p(function(t, e) {
                    return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
                }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
            },
            _update: function() {
                if (!this._container) return this;
                ot(this._baseLayersList), ot(this._overlaysList), this._layerControlInputs = [];
                var t, e, i, n, o = 0;
                for (i = 0; i < this._layers.length; i++) n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
                return this.options.hideSingleBase && (t = t && 1 < o, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
            },
            _onLayerChange: function(t) {
                this._handlingClick || this._update();
                var e = this._getLayer(u(t.target)),
                    i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
                i && this._map.fire(i, e)
            },
            _createRadioElement: function(t, e) {
                var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                    n = document.createElement("div");
                return n.innerHTML = i, n.firstChild
            },
            _addItem: function(t) {
                var e, i = document.createElement("label"),
                    n = this._map.hasLayer(t.layer);
                t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = n) : e = this._createRadioElement("leaflet-base-layers", n), this._layerControlInputs.push(e), e.layerId = u(t.layer), j(e, "click", this._onInputClick, this);
                var o = document.createElement("span");
                o.innerHTML = " " + t.name;
                var s = document.createElement("div");
                return i.appendChild(s), s.appendChild(e), s.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i
            },
            _onInputClick: function() {
                var t, e, i = this._layerControlInputs,
                    n = [],
                    o = [];
                this._handlingClick = !0;
                for (var s = i.length - 1; 0 <= s; s--) t = i[s], e = this._getLayer(t.layerId).layer, t.checked ? n.push(e) : t.checked || o.push(e);
                for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
                for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
                this._handlingClick = !1, this._refocusOnMap()
            },
            _checkDisabledLayers: function() {
                for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; 0 <= o; o--) t = i[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
            },
            _expandIfNotCollapsed: function() {
                return this._map && !this.options.collapsed && this.expand(), this
            },
            _expand: function() {
                return this.expand()
            },
            _collapse: function() {
                return this.collapse()
            }
        }),
        gi = pi.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function(t) {
                var e = "leaflet-control-zoom",
                    i = it("div", e + " leaflet-bar"),
                    n = this.options;
                return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
            },
            onRemove: function(t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            disable: function() {
                return this._disabled = !0, this._updateDisabled(), this
            },
            enable: function() {
                return this._disabled = !1, this._updateDisabled(), this
            },
            _zoomIn: function(t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _zoomOut: function(t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _createButton: function(t, e, i, n, o) {
                var s = it("a", i, n);
                return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), V(s), j(s, "click", K), j(s, "click", o, this), j(s, "click", this._refocusOnMap, this), s
            },
            _updateDisabled: function() {
                var t = this._map,
                    e = "leaflet-disabled";
                lt(this._zoomInButton, e), lt(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && ht(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && ht(this._zoomInButton, e)
            }
        });
    di.mergeOptions({
        zoomControl: !0
    }), di.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new gi, this.addControl(this.zoomControl))
    });
    var vi = pi.extend({
            options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0
            },
            onAdd: function(t) {
                var e = it("div", "leaflet-control-scale"),
                    i = this.options;
                return this._addScales(i, "leaflet-control-scale-line", e), t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
            },
            onRemove: function(t) {
                t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
            },
            _addScales: function(t, e, i) {
                t.metric && (this._mScale = it("div", e, i)), t.imperial && (this._iScale = it("div", e, i))
            },
            _update: function() {
                var t = this._map,
                    e = t.getSize().y / 2,
                    i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
                this._updateScales(i)
            },
            _updateScales: function(t) {
                this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
            },
            _updateMetric: function(t) {
                var e = this._getRoundNum(t),
                    i = e < 1e3 ? e + " m" : e / 1e3 + " km";
                this._updateScale(this._mScale, i, e / t)
            },
            _updateImperial: function(t) {
                var e, i, n, o = 3.2808399 * t;
                5280 < o ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
            },
            _updateScale: function(t, e, i) {
                t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
            },
            _getRoundNum: function(t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                    i = t / e;
                return e * (i = 10 <= i ? 10 : 5 <= i ? 5 : 3 <= i ? 3 : 2 <= i ? 2 : 1)
            }
        }),
        yi = pi.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function(t) {
                r(this, t), this._attributions = {}
            },
            onAdd: function(t) {
                for (var e in (t.attributionControl = this)._container = it("div", "leaflet-control-attribution"), V(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
                return this._update(), this._container
            },
            setPrefix: function(t) {
                return this.options.prefix = t, this._update(), this
            },
            addAttribution: function(t) {
                return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this
            },
            removeAttribution: function(t) {
                return t && this._attributions[t] && (this._attributions[t]--, this._update()), this
            },
            _update: function() {
                if (this._map) {
                    var t = [];
                    for (var e in this._attributions) this._attributions[e] && t.push(e);
                    var i = [];
                    this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
                }
            }
        });
    di.mergeOptions({
        attributionControl: !0
    }), di.addInitHook(function() {
        this.options.attributionControl && (new yi).addTo(this)
    }), pi.Layers = fi, pi.Zoom = gi, pi.Scale = vi, pi.Attribution = yi, mi.layers = function(t, e, i) {
        return new fi(t, e, i)
    }, mi.zoom = function(t) {
        return new gi(t)
    }, mi.scale = function(t) {
        return new vi(t)
    }, mi.attribution = function(t) {
        return new yi(t)
    };
    var Li = g.extend({
        initialize: function(t) {
            this._map = t
        },
        enable: function() {
            return this._enabled || (this._enabled = !0, this.addHooks()), this
        },
        disable: function() {
            return this._enabled && (this._enabled = !1, this.removeHooks()), this
        },
        enabled: function() {
            return !!this._enabled
        }
    });
    Li.addTo = function(t, e) {
        return t.addHandler(e, this), this
    };
    var xi, wi, Pi = {
            Events: Jt
        },
        bi = Oe ? "touchstart mousedown" : "mousedown",
        Ci = {
            mousedown: "mouseup",
            touchstart: "touchend",
            pointerdown: "touchend",
            MSPointerDown: "touchend"
        },
        Mi = {
            mousedown: "mousemove",
            touchstart: "touchmove",
            pointerdown: "touchmove",
            MSPointerDown: "touchmove"
        },
        Ti = Qt.extend({
            options: {
                clickTolerance: 3
            },
            initialize: function(t, e, i, n) {
                r(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
            },
            enable: function() {
                this._enabled || (j(this._dragStartTarget, bi, this._onDown, this), this._enabled = !0)
            },
            disable: function() {
                this._enabled && (Ti._dragging === this && this.finishDrag(), G(this._dragStartTarget, bi, this._onDown, this), this._enabled = !1, this._moved = !1)
            },
            _onDown: function(t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !at(this._element, "leaflet-zoom-anim") && !(Ti._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((Ti._dragging = this)._preventOutline && yt(this._element), gt(), se(), this._moving)))) {
                    this.fire("down");
                    var e = t.touches ? t.touches[0] : t;
                    this._startPoint = new v(e.clientX, e.clientY), j(document, Mi[t.type], this._onMove, this), j(document, Ci[t.type], this._onUp, this)
                }
            },
            _onMove: function(t) {
                if (!t._simulated && this._enabled)
                    if (t.touches && 1 < t.touches.length) this._moved = !0;
                    else {
                        var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                            i = new v(e.clientX, e.clientY).subtract(this._startPoint);
                        (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (q(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = ft(this._element).subtract(i), ht(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), ht(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, f(this._animRequest), this._lastEvent = t, this._animRequest = x(this._updatePosition, this, !0)))
                    }
            },
            _updatePosition: function() {
                var t = {
                    originalEvent: this._lastEvent
                };
                this.fire("predrag", t), mt(this._element, this._newPos), this.fire("drag", t)
            },
            _onUp: function(t) {
                !t._simulated && this._enabled && this.finishDrag()
            },
            finishDrag: function() {
                for (var t in lt(document.body, "leaflet-dragging"), this._lastTarget && (lt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Mi) G(document, Mi[t], this._onMove, this), G(document, Ci[t], this._onUp, this);
                vt(), re(), this._moved && this._moving && (f(this._animRequest), this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1, Ti._dragging = !1
            }
        }),
        zi = (Object.freeze || Object)({
            simplify: xt,
            pointToSegmentDistance: wt,
            closestPointOnSegment: function(t, e, i) {
                return Mt(t, e, i)
            },
            clipSegment: Pt,
            _getEdgeIntersection: bt,
            _getBitCode: Ct,
            _sqClosestPointOnSegment: Mt,
            isFlat: Tt,
            _flat: zt
        }),
        ki = (Object.freeze || Object)({
            clipPolygon: kt
        }),
        Si = {
            project: function(t) {
                return new v(t.lng, t.lat)
            },
            unproject: function(t) {
                return new M(t.y, t.x)
            },
            bounds: new w([-180, -90], [180, 90])
        },
        Zi = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new w([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function(t) {
                var e = Math.PI / 180,
                    i = this.R,
                    n = t.lat * e,
                    o = this.R_MINOR / i,
                    s = Math.sqrt(1 - o * o),
                    r = s * Math.sin(n),
                    a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
                return n = -i * Math.log(Math.max(a, 1e-10)), new v(t.lng * e * i, n)
            },
            unproject: function(t) {
                for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, l = .1; h < 15 && 1e-7 < Math.abs(l); h++) e = s * Math.sin(a), e = Math.pow((1 - e) / (1 + e), s / 2), a += l = Math.PI / 2 - 2 * Math.atan(r * e) - a;
                return new M(a * i, t.x * i / n)
            }
        },
        Ei = (Object.freeze || Object)({
            LonLat: Si,
            Mercator: Zi,
            SphericalMercator: ne
        }),
        Ai = h({}, ie, {
            code: "EPSG:3395",
            projection: Zi,
            transformation: (wi = .5 / (Math.PI * Zi.R), k(wi, .5, -wi, .5))
        }),
        Bi = h({}, ie, {
            code: "EPSG:4326",
            projection: Si,
            transformation: k(1 / 180, 1, -1 / 180, .5)
        }),
        Ii = h({}, ee, {
            projection: Si,
            transformation: k(1, 0, -1, 0),
            scale: function(t) {
                return Math.pow(2, t)
            },
            zoom: function(t) {
                return Math.log(t) / Math.LN2
            },
            distance: function(t, e) {
                var i = e.lng - t.lng,
                    n = e.lat - t.lat;
                return Math.sqrt(i * i + n * n)
            },
            infinite: !0
        });
    ee.Earth = ie, ee.EPSG3395 = Ai, ee.EPSG3857 = le, ee.EPSG900913 = ue, ee.EPSG4326 = Bi, ee.Simple = Ii;
    var Oi = Qt.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function(t) {
            return t.addLayer(this), this
        },
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function(t) {
            return t && t.removeLayer(this), this
        },
        getPane: function(t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function(t) {
            return this._map._targets[u(t)] = this
        },
        removeInteractiveTarget: function(t) {
            return delete this._map._targets[u(t)], this
        },
        getAttribution: function() {
            return this.options.attribution
        },
        _layerAdd: function(t) {
            var e = t.target;
            if (e.hasLayer(this)) {
                if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                    var i = this.getEvents();
                    e.on(i, this), this.once("remove", function() {
                        e.off(i, this)
                    }, this)
                }
                this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                    layer: this
                })
            }
        }
    });
    di.include({
        addLayer: function(t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var e = u(t);
            return this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
        },
        removeLayer: function(t) {
            var e = u(t);
            return this._layers[e] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                layer: t
            }), t.fire("remove")), t._map = t._mapToAdd = null), this
        },
        hasLayer: function(t) {
            return !!t && u(t) in this._layers
        },
        eachLayer: function(t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this
        },
        _addLayers: function(t) {
            for (var e = 0, i = (t = t ? Wt(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e])
        },
        _addZoomLimit: function(t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[u(t)] = t, this._updateZoomLevels())
        },
        _removeZoomLimit: function(t) {
            var e = u(t);
            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
        },
        _updateZoomLevels: function() {
            var t = 1 / 0,
                e = -1 / 0,
                i = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[n].options;
                t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
            }
            this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var Ni = Oi.extend({
            initialize: function(t, e) {
                var i, n;
                if (r(this, e), this._layers = {}, t)
                    for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i])
            },
            addLayer: function(t) {
                var e = this.getLayerId(t);
                return this._layers[e] = t, this._map && this._map.addLayer(t), this
            },
            removeLayer: function(t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
            },
            hasLayer: function(t) {
                return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
            },
            clearLayers: function() {
                return this.eachLayer(this.removeLayer, this)
            },
            invoke: function(t) {
                var e, i, n = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers)(i = this._layers[e])[t] && i[t].apply(i, n);
                return this
            },
            onAdd: function(t) {
                this.eachLayer(t.addLayer, t)
            },
            onRemove: function(t) {
                this.eachLayer(t.removeLayer, t)
            },
            eachLayer: function(t, e) {
                for (var i in this._layers) t.call(e, this._layers[i]);
                return this
            },
            getLayer: function(t) {
                return this._layers[t]
            },
            getLayers: function() {
                var t = [];
                return this.eachLayer(t.push, t), t
            },
            setZIndex: function(t) {
                return this.invoke("setZIndex", t)
            },
            getLayerId: function(t) {
                return u(t)
            }
        }),
        Ri = Ni.extend({
            addLayer: function(t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this), Ni.prototype.addLayer.call(this, t), this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function(t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ni.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                    layer: t
                })) : this
            },
            setStyle: function(t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function() {
                return this.invoke("bringToFront")
            },
            bringToBack: function() {
                return this.invoke("bringToBack")
            },
            getBounds: function() {
                var t = new b;
                for (var e in this._layers) {
                    var i = this._layers[e];
                    t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
                }
                return t
            }
        }),
        Di = g.extend({
            options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0]
            },
            initialize: function(t) {
                r(this, t)
            },
            createIcon: function(t) {
                return this._createIcon("icon", t)
            },
            createShadow: function(t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function(t, e) {
                var i = this._getIconUrl(t);
                if (!i) {
                    if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
                return this._setIconStyles(n, t), n
            },
            _setIconStyles: function(t, e) {
                var i = this.options,
                    n = i[e + "Size"];
                "number" == typeof n && (n = [n, n]);
                var o = y(n),
                    s = y("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
                t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
            },
            _createImg: function(t, e) {
                return (e = e || document.createElement("img")).src = t, e
            },
            _getIconUrl: function(t) {
                return De && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
            }
        }),
        ji = Di.extend({
            options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41]
            },
            _getIconUrl: function(t) {
                return ji.imagePath || (ji.imagePath = this._detectIconPath()), (this.options.imagePath || ji.imagePath) + Di.prototype._getIconUrl.call(this, t)
            },
            _detectIconPath: function() {
                var t = it("div", "leaflet-default-icon-path", document.body),
                    e = et(t, "background-image") || et(t, "backgroundImage");
                return document.body.removeChild(t), null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
            }
        }),
        Gi = Li.extend({
            initialize: function(t) {
                this._marker = t
            },
            addHooks: function() {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new Ti(t, t, !0)), this._draggable.on({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).enable(), ht(t, "leaflet-marker-draggable")
            },
            removeHooks: function() {
                this._draggable.off({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).disable(), this._marker._icon && lt(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function() {
                return this._draggable && this._draggable._moved
            },
            _adjustPan: function(t) {
                var e = this._marker,
                    i = e._map,
                    n = this._marker.options.autoPanSpeed,
                    o = this._marker.options.autoPanPadding,
                    s = L.DomUtil.getPosition(e._icon),
                    r = i.getPixelBounds(),
                    a = i.getPixelOrigin(),
                    h = P(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
                if (!h.contains(s)) {
                    var l = y((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
                    i.panBy(l, {
                        animate: !1
                    }), this._draggable._newPos._add(l), this._draggable._startPos._add(l), L.DomUtil.setPosition(e._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = x(this._adjustPan.bind(this, t))
                }
            },
            _onDragStart: function() {
                this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onPreDrag: function(t) {
                this._marker.options.autoPan && (f(this._panRequest), this._panRequest = x(this._adjustPan.bind(this, t)))
            },
            _onDrag: function(t) {
                var e = this._marker,
                    i = e._shadow,
                    n = ft(e._icon),
                    o = e._map.layerPointToLatLng(n);
                i && mt(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
            },
            _onDragEnd: function(t) {
                f(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
            }
        }),
        Hi = Oi.extend({
            options: {
                icon: new ji,
                interactive: !0,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                bubblingMouseEvents: !1
            },
            initialize: function(t, e) {
                r(this, e), this._latlng = T(t)
            },
            onAdd: function(t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
            },
            onRemove: function(t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
            },
            getEvents: function() {
                return {
                    zoom: this.update,
                    viewreset: this.update
                }
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                var e = this._latlng;
                return this._latlng = T(t), this.update(), this.fire("move", {
                    oldLatLng: e,
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function(t) {
                return this.options.zIndexOffset = t, this.update()
            },
            setIcon: function(t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
            },
            getElement: function() {
                return this._icon
            },
            update: function() {
                if (this._icon && this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(t)
                }
                return this
            },
            _initIcon: function() {
                var t = this.options,
                    e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                    i = t.icon.createIcon(this._icon),
                    n = !1;
                i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), "IMG" === i.tagName && (i.alt = t.alt || "")), ht(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                });
                var o = t.icon.createShadow(this._shadow),
                    s = !1;
                o !== this._shadow && (this._removeShadow(), s = !0), o && (ht(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
            },
            _removeIcon: function() {
                this.options.riseOnHover && this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                }), nt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
            },
            _removeShadow: function() {
                this._shadow && nt(this._shadow), this._shadow = null
            },
            _setPos: function(t) {
                mt(this._icon, t), this._shadow && mt(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function(t) {
                this._icon.style.zIndex = this._zIndex + t
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(e)
            },
            _initInteraction: function() {
                if (this.options.interactive && (ht(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Gi)) {
                    var t = this.options.draggable;
                    this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Gi(this), t && this.dragging.enable()
                }
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function() {
                var t = this.options.opacity;
                ct(this._icon, t), this._shadow && ct(this._shadow, t)
            },
            _bringToFront: function() {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function() {
                this._updateZIndex(0)
            },
            _getPopupAnchor: function() {
                return this.options.icon.options.popupAnchor
            },
            _getTooltipAnchor: function() {
                return this.options.icon.options.tooltipAnchor
            }
        }),
        Ui = Oi.extend({
            options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: .2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0
            },
            beforeAdd: function(t) {
                this._renderer = t.getRenderer(this)
            },
            onAdd: function() {
                this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
            },
            onRemove: function() {
                this._renderer._removePath(this)
            },
            redraw: function() {
                return this._map && this._renderer._updatePath(this), this
            },
            setStyle: function(t) {
                return r(this, t), this._renderer && this._renderer._updateStyle(this), this
            },
            bringToFront: function() {
                return this._renderer && this._renderer._bringToFront(this), this
            },
            bringToBack: function() {
                return this._renderer && this._renderer._bringToBack(this), this
            },
            getElement: function() {
                return this._path
            },
            _reset: function() {
                this._project(), this._update()
            },
            _clickTolerance: function() {
                return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
            }
        }),
        Fi = Ui.extend({
            options: {
                fill: !0,
                radius: 10
            },
            initialize: function(t, e) {
                r(this, e), this._latlng = T(t), this._radius = this.options.radius
            },
            setLatLng: function(t) {
                return this._latlng = T(t), this.redraw(), this.fire("move", {
                    latlng: this._latlng
                })
            },
            getLatLng: function() {
                return this._latlng
            },
            setRadius: function(t) {
                return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function() {
                return this._radius
            },
            setStyle: function(t) {
                var e = t && t.radius || this._radius;
                return Ui.prototype.setStyle.call(this, t), this.setRadius(e), this
            },
            _project: function() {
                this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
            },
            _updateBounds: function() {
                var t = this._radius,
                    e = this._radiusY || t,
                    i = this._clickTolerance(),
                    n = [t + i, e + i];
                this._pxBounds = new w(this._point.subtract(n), this._point.add(n))
            },
            _update: function() {
                this._map && this._updatePath()
            },
            _updatePath: function() {
                this._renderer._updateCircle(this)
            },
            _empty: function() {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
            },
            _containsPoint: function(t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
            }
        }),
        Wi = Fi.extend({
            initialize: function(t, e, i) {
                if ("number" == typeof e && (e = h({}, i, {
                        radius: e
                    })), r(this, e), this._latlng = T(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
                this._mRadius = this.options.radius
            },
            setRadius: function(t) {
                return this._mRadius = t, this.redraw()
            },
            getRadius: function() {
                return this._mRadius
            },
            getBounds: function() {
                var t = [this._radius, this._radiusY || this._radius];
                return new b(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: Ui.prototype.setStyle,
            _project: function() {
                var t = this._latlng.lng,
                    e = this._latlng.lat,
                    i = this._map,
                    n = i.options.crs;
                if (n.distance === ie.distance) {
                    var o = Math.PI / 180,
                        s = this._mRadius / ie.R / o,
                        r = i.project([e + s, t]),
                        a = i.project([e - s, t]),
                        h = r.add(a).divideBy(2),
                        l = i.unproject(h).lat,
                        u = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(l * o)) / (Math.cos(e * o) * Math.cos(l * o))) / o;
                    (isNaN(u) || 0 === u) && (u = s / Math.cos(Math.PI / 180 * e)), this._point = h.subtract(i.getPixelOrigin()), this._radius = isNaN(u) ? 0 : h.x - i.project([l, t - u]).x, this._radiusY = h.y - r.y
                } else {
                    var _ = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                    this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(_).x
                }
                this._updateBounds()
            }
        }),
        Vi = Ui.extend({
            options: {
                smoothFactor: 1,
                noClip: !1
            },
            initialize: function(t, e) {
                r(this, e), this._setLatLngs(t)
            },
            getLatLngs: function() {
                return this._latlngs
            },
            setLatLngs: function(t) {
                return this._setLatLngs(t), this.redraw()
            },
            isEmpty: function() {
                return !this._latlngs.length
            },
            closestLayerPoint: function(t) {
                for (var e, i, n = 1 / 0, o = null, s = Mt, r = 0, a = this._parts.length; r < a; r++)
                    for (var h = this._parts[r], l = 1, u = h.length; l < u; l++) {
                        var _ = s(t, e = h[l - 1], i = h[l], !0);
                        _ < n && (n = _, o = s(t, e, i))
                    }
                return o && (o.distance = Math.sqrt(n)), o
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, i, n, o, s, r, a = this._rings[0],
                    h = a.length;
                if (!h) return null;
                for (e = t = 0; t < h - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
                if (0 === e) return this._map.layerPointToLatLng(a[0]);
                for (n = t = 0; t < h - 1; t++)
                    if (o = a[t], s = a[t + 1], (n += i = o.distanceTo(s)) > e) return r = (n - e) / i, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
            },
            getBounds: function() {
                return this._bounds
            },
            addLatLng: function(t, e) {
                return e = e || this._defaultShape(), t = T(t), e.push(t), this._bounds.extend(t), this.redraw()
            },
            _setLatLngs: function(t) {
                this._bounds = new b, this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function() {
                return Tt(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function(t) {
                for (var e = [], i = Tt(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = T(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
                return e
            },
            _project: function() {
                var t = new w;
                this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
                var e = this._clickTolerance(),
                    i = new v(e, e);
                this._bounds.isValid() && t.isValid() && (t.min._subtract(i), t.max._add(i), this._pxBounds = t)
            },
            _projectLatlngs: function(t, e, i) {
                var n, o, s = t[0] instanceof M,
                    r = t.length;
                if (s) {
                    for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
                    e.push(o)
                } else
                    for (n = 0; n < r; n++) this._projectLatlngs(t[n], e, i)
            },
            _clipPoints: function() {
                var t = this._renderer._bounds;
                if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else {
                        var e, i, n, o, s, r, a, h = this._parts;
                        for (n = e = 0, o = this._rings.length; e < o; e++)
                            for (i = 0, s = (a = this._rings[e]).length; i < s - 1; i++)(r = Pt(a[i], a[i + 1], t, i, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[i + 1] && i !== s - 2 || (h[n].push(r[1]), n++))
                    }
            },
            _simplifyPoints: function() {
                for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = xt(t[i], e)
            },
            _update: function() {
                this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
            },
            _updatePath: function() {
                this._renderer._updatePoly(this)
            },
            _containsPoint: function(t, e) {
                var i, n, o, s, r, a, h = this._clickTolerance();
                if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
                for (i = 0, s = this._parts.length; i < s; i++)
                    for (n = 0, o = (r = (a = this._parts[i]).length) - 1; n < r; o = n++)
                        if ((e || 0 !== n) && wt(t, a[o], a[n]) <= h) return !0;
                return !1
            }
        });
    Vi._flat = zt;
    var qi = Vi.extend({
            options: {
                fill: !0
            },
            isEmpty: function() {
                return !this._latlngs.length || !this._latlngs[0].length
            },
            getCenter: function() {
                if (!this._map) throw new Error("Must add layer to map before using getCenter()");
                var t, e, i, n, o, s, r, a, h, l = this._rings[0],
                    u = l.length;
                if (!u) return null;
                for (s = r = a = 0, t = 0, e = u - 1; t < u; e = t++) i = l[t], n = l[e], o = i.y * n.x - n.y * i.x, r += (i.x + n.x) * o, a += (i.y + n.y) * o, s += 3 * o;
                return h = 0 === s ? l[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
            },
            _convertLatLngs: function(t) {
                var e = Vi.prototype._convertLatLngs.call(this, t),
                    i = e.length;
                return 2 <= i && e[0] instanceof M && e[0].equals(e[i - 1]) && e.pop(), e
            },
            _setLatLngs: function(t) {
                Vi.prototype._setLatLngs.call(this, t), Tt(this._latlngs) && (this._latlngs = [this._latlngs])
            },
            _defaultShape: function() {
                return Tt(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
            },
            _clipPoints: function() {
                var t = this._renderer._bounds,
                    e = this.options.weight,
                    i = new v(e, e);
                if (t = new w(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                    if (this.options.noClip) this._parts = this._rings;
                    else
                        for (var n, o = 0, s = this._rings.length; o < s; o++)(n = kt(this._rings[o], t, !0)).length && this._parts.push(n)
            },
            _updatePath: function() {
                this._renderer._updatePoly(this, !0)
            },
            _containsPoint: function(t) {
                var e, i, n, o, s, r, a, h, l = !1;
                if (!this._pxBounds.contains(t)) return !1;
                for (o = 0, a = this._parts.length; o < a; o++)
                    for (s = 0, r = (h = (e = this._parts[o]).length) - 1; s < h; r = s++) i = e[s], n = e[r], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (l = !l);
                return l || Vi.prototype._containsPoint.call(this, t, !0)
            }
        }),
        Ki = Ri.extend({
            initialize: function(t, e) {
                r(this, e), this._layers = {}, t && this.addData(t)
            },
            addData: function(t) {
                var e, i, n, o = Wt(t) ? t : t.features;
                if (o) {
                    for (e = 0, i = o.length; e < i; e++)((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                    return this
                }
                var s = this.options;
                if (s.filter && !s.filter(t)) return this;
                var r = St(t, s);
                return r ? (r.feature = Ot(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
            },
            resetStyle: function(t) {
                return t.options = h({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
            },
            setStyle: function(e) {
                return this.eachLayer(function(t) {
                    this._setLayerStyle(t, e)
                }, this)
            },
            _setLayerStyle: function(t, e) {
                "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
            }
        }),
        Yi = {
            toGeoJSON: function(t) {
                return It(this, {
                    type: "Point",
                    coordinates: At(this.getLatLng(), t)
                })
            }
        };
    Hi.include(Yi), Wi.include(Yi), Fi.include(Yi), Vi.include({
        toGeoJSON: function(t) {
            var e = !Tt(this._latlngs);
            return It(this, {
                type: (e ? "Multi" : "") + "LineString",
                coordinates: Bt(this._latlngs, e ? 1 : 0, !1, t)
            })
        }
    }), qi.include({
        toGeoJSON: function(t) {
            var e = !Tt(this._latlngs),
                i = e && !Tt(this._latlngs[0]),
                n = Bt(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
            return e || (n = [n]), It(this, {
                type: (i ? "Multi" : "") + "Polygon",
                coordinates: n
            })
        }
    }), Ni.include({
        toMultiPoint: function(e) {
            var i = [];
            return this.eachLayer(function(t) {
                i.push(t.toGeoJSON(e).geometry.coordinates)
            }), It(this, {
                type: "MultiPoint",
                coordinates: i
            })
        },
        toGeoJSON: function(n) {
            var t = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === t) return this.toMultiPoint(n);
            var o = "GeometryCollection" === t,
                s = [];
            return this.eachLayer(function(t) {
                if (t.toGeoJSON) {
                    var e = t.toGeoJSON(n);
                    if (o) s.push(e.geometry);
                    else {
                        var i = Ot(e);
                        "FeatureCollection" === i.type ? s.push.apply(s, i.features) : s.push(i)
                    }
                }
            }), o ? It(this, {
                geometries: s,
                type: "GeometryCollection"
            }) : {
                type: "FeatureCollection",
                features: s
            }
        }
    });
    var Xi = Nt,
        Ji = Oi.extend({
            options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
            },
            initialize: function(t, e, i) {
                this._url = t, this._bounds = C(e), r(this, i)
            },
            onAdd: function() {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (ht(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
            },
            onRemove: function() {
                nt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._image && this._updateOpacity(), this
            },
            setStyle: function(t) {
                return t.opacity && this.setOpacity(t.opacity), this
            },
            bringToFront: function() {
                return this._map && st(this._image), this
            },
            bringToBack: function() {
                return this._map && rt(this._image), this
            },
            setUrl: function(t) {
                return this._url = t, this._image && (this._image.src = t), this
            },
            setBounds: function(t) {
                return this._bounds = C(t), this._map && this._reset(), this
            },
            getEvents: function() {
                var t = {
                    zoom: this._reset,
                    viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            getBounds: function() {
                return this._bounds
            },
            getElement: function() {
                return this._image
            },
            _initImage: function() {
                var t = "IMG" === this._url.tagName,
                    e = this._image = t ? this._url : it("img");
                ht(e, "leaflet-image-layer"), this._zoomAnimated && ht(e, "leaflet-zoom-animated"), this.options.className && ht(e, this.options.className), e.onselectstart = a, e.onmousemove = a, e.onload = p(this.fire, this, "load"), e.onerror = p(this._overlayOnError, this, "error"), this.options.crossOrigin && (e.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t ? this._url = e.src : (e.src = this._url, e.alt = this.options.alt)
            },
            _animateZoom: function(t) {
                var e = this._map.getZoomScale(t.zoom),
                    i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                pt(this._image, i, e)
            },
            _reset: function() {
                var t = this._image,
                    e = new w(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                    i = e.getSize();
                mt(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
            },
            _updateOpacity: function() {
                ct(this._image, this.options.opacity)
            },
            _updateZIndex: function() {
                this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
            },
            _overlayOnError: function() {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t)
            }
        }),
        Qi = Ji.extend({
            options: {
                autoplay: !0,
                loop: !0
            },
            _initImage: function() {
                var t = "VIDEO" === this._url.tagName,
                    e = this._image = t ? this._url : it("video");
                if (ht(e, "leaflet-image-layer"), this._zoomAnimated && ht(e, "leaflet-zoom-animated"), e.onselectstart = a, e.onmousemove = a, e.onloadeddata = p(this.fire, this, "load"), t) {
                    for (var i = e.getElementsByTagName("source"), n = [], o = 0; o < i.length; o++) n.push(i[o].src);
                    this._url = 0 < i.length ? n : [e.src]
                } else {
                    Wt(this._url) || (this._url = [this._url]), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop;
                    for (var s = 0; s < this._url.length; s++) {
                        var r = it("source");
                        r.src = this._url[s], e.appendChild(r)
                    }
                }
            }
        }),
        $i = Oi.extend({
            options: {
                offset: [0, 7],
                className: "",
                pane: "popupPane"
            },
            initialize: function(t, e) {
                r(this, t), this._source = e
            },
            onAdd: function(t) {
                this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ct(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ct(this._container, 1), this.bringToFront()
            },
            onRemove: function(t) {
                t._fadeAnimated ? (ct(this._container, 0), this._removeTimeout = setTimeout(p(nt, void 0, this._container), 200)) : nt(this._container)
            },
            getLatLng: function() {
                return this._latlng
            },
            setLatLng: function(t) {
                return this._latlng = T(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function() {
                return this._content
            },
            setContent: function(t) {
                return this._content = t, this.update(), this
            },
            getElement: function() {
                return this._container
            },
            update: function() {
                this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            getEvents: function() {
                var t = {
                    zoom: this._updatePosition,
                    viewreset: this._updatePosition
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            isOpen: function() {
                return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function() {
                return this._map && st(this._container), this
            },
            bringToBack: function() {
                return this._map && rt(this._container), this
            },
            _updateContent: function() {
                if (this._content) {
                    var t = this._contentNode,
                        e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                    if ("string" == typeof e) t.innerHTML = e;
                    else {
                        for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                        t.appendChild(e)
                    }
                    this.fire("contentupdate")
                }
            },
            _updatePosition: function() {
                if (this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng),
                        e = y(this.options.offset),
                        i = this._getAnchor();
                    this._zoomAnimated ? mt(this._container, t.add(i)) : e = e.add(t).add(i);
                    var n = this._containerBottom = -e.y,
                        o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                    this._container.style.bottom = n + "px", this._container.style.left = o + "px"
                }
            },
            _getAnchor: function() {
                return [0, 0]
            }
        }),
        tn = $i.extend({
            options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: ""
            },
            openOn: function(t) {
                return t.openPopup(this), this
            },
            onAdd: function(t) {
                $i.prototype.onAdd.call(this, t), t.fire("popupopen", {
                    popup: this
                }), this._source && (this._source.fire("popupopen", {
                    popup: this
                }, !0), this._source instanceof Ui || this._source.on("preclick", F))
            },
            onRemove: function(t) {
                $i.prototype.onRemove.call(this, t), t.fire("popupclose", {
                    popup: this
                }), this._source && (this._source.fire("popupclose", {
                    popup: this
                }, !0), this._source instanceof Ui || this._source.off("preclick", F))
            },
            getEvents: function() {
                var t = $i.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function() {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function() {
                var t = "leaflet-popup",
                    e = this._container = it("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                    i = this._wrapper = it("div", t + "-content-wrapper", e);
                if (this._contentNode = it("div", t + "-content", i), V(i), W(this._contentNode), j(i, "contextmenu", F), this._tipContainer = it("div", t + "-tip-container", e), this._tip = it("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                    var n = this._closeButton = it("a", t + "-close-button", e);
                    n.href = "#close", n.innerHTML = "&#215;", j(n, "click", this._onCloseButtonClick, this)
                }
            },
            _updateLayout: function() {
                var t = this._contentNode,
                    e = t.style;
                e.width = "", e.whiteSpace = "nowrap";
                var i = t.offsetWidth;
                i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
                var n = t.offsetHeight,
                    o = this.options.maxHeight;
                o && o < n ? (e.height = o + "px", ht(t, "leaflet-popup-scrolled")) : lt(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
            },
            _animateZoom: function(t) {
                var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                    i = this._getAnchor();
                mt(this._container, e.add(i))
            },
            _adjustPan: function() {
                if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                    var t = this._map,
                        e = parseInt(et(this._container, "marginBottom"), 10) || 0,
                        i = this._container.offsetHeight + e,
                        n = this._containerWidth,
                        o = new v(this._containerLeft, -i - this._containerBottom);
                    o._add(ft(this._container));
                    var s = t.layerPointToContainerPoint(o),
                        r = y(this.options.autoPanPadding),
                        a = y(this.options.autoPanPaddingTopLeft || r),
                        h = y(this.options.autoPanPaddingBottomRight || r),
                        l = t.getSize(),
                        u = 0,
                        _ = 0;
                    s.x + n + h.x > l.x && (u = s.x + n - l.x + h.x), s.x - u - a.x < 0 && (u = s.x - a.x), s.y + i + h.y > l.y && (_ = s.y + i - l.y + h.y), s.y - _ - a.y < 0 && (_ = s.y - a.y), (u || _) && t.fire("autopanstart").panBy([u, _])
                }
            },
            _onCloseButtonClick: function(t) {
                this._close(), K(t)
            },
            _getAnchor: function() {
                return y(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
            }
        });
    di.mergeOptions({
        closePopupOnClick: !0
    }), di.include({
        openPopup: function(t, e, i) {
            return t instanceof tn || (t = new tn(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        },
        closePopup: function(t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), Oi.include({
        bindPopup: function(t, e) {
            return t instanceof tn ? (r(t, e), (this._popup = t)._source = this) : (this._popup && !e || (this._popup = new tn(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        },
        unbindPopup: function() {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        },
        openPopup: function(t, e) {
            if (t instanceof Oi || (e = t, t = this), t instanceof Ri)
                for (var i in this._layers) {
                    t = this._layers[i];
                    break
                }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this
        },
        closePopup: function() {
            return this._popup && this._popup._close(), this
        },
        togglePopup: function(t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        },
        isPopupOpen: function() {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function(t) {
            return this._popup && this._popup.setContent(t), this
        },
        getPopup: function() {
            return this._popup
        },
        _openPopup: function(t) {
            var e = t.layer || t.target;
            this._popup && this._map && (K(t), e instanceof Ui ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
        },
        _movePopup: function(t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function(t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var en = $i.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        },
        onAdd: function(t) {
            $i.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                tooltip: this
            }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
            }, !0)
        },
        onRemove: function(t) {
            $i.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                tooltip: this
            }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
            }, !0)
        },
        getEvents: function() {
            var t = $i.prototype.getEvents.call(this);
            return Oe && !this.options.permanent && (t.preclick = this._close), t
        },
        _close: function() {
            this._map && this._map.closeTooltip(this)
        },
        _initLayout: function() {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = it("div", t)
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(t) {
            var e = this._map,
                i = this._container,
                n = e.latLngToContainerPoint(e.getCenter()),
                o = e.layerPointToContainerPoint(t),
                s = this.options.direction,
                r = i.offsetWidth,
                a = i.offsetHeight,
                h = y(this.options.offset),
                l = this._getAnchor();
            "top" === s ? t = t.add(y(-r / 2 + h.x, -a + h.y + l.y, !0)) : "bottom" === s ? t = t.subtract(y(r / 2 - h.x, -h.y, !0)) : "center" === s ? t = t.subtract(y(r / 2 + h.x, a / 2 - l.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(y(h.x + l.x, l.y - a / 2 + h.y, !0))) : (s = "left", t = t.subtract(y(r + l.x - h.x, a / 2 - l.y - h.y, !0))), lt(i, "leaflet-tooltip-right"), lt(i, "leaflet-tooltip-left"), lt(i, "leaflet-tooltip-top"), lt(i, "leaflet-tooltip-bottom"), ht(i, "leaflet-tooltip-" + s), mt(i, t)
        },
        _updatePosition: function() {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function(t) {
            this.options.opacity = t, this._container && ct(this._container, t)
        },
        _animateZoom: function(t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(e)
        },
        _getAnchor: function() {
            return y(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    di.include({
        openTooltip: function(t, e, i) {
            return t instanceof en || (t = new en(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
        },
        closeTooltip: function(t) {
            return t && this.removeLayer(t), this
        }
    }), Oi.include({
        bindTooltip: function(t, e) {
            return t instanceof en ? (r(t, e), (this._tooltip = t)._source = this) : (this._tooltip && !e || (this._tooltip = new en(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
        },
        unbindTooltip: function() {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
        },
        _initTooltipInteractions: function(t) {
            if (t || !this._tooltipHandlersAdded) {
                var e = t ? "off" : "on",
                    i = {
                        remove: this.closeTooltip,
                        move: this._moveTooltip
                    };
                this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), Oe && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t
            }
        },
        openTooltip: function(t, e) {
            if (t instanceof Oi || (e = t, t = this), t instanceof Ri)
                for (var i in this._layers) {
                    t = this._layers[i];
                    break
                }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (ht(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
        },
        closeTooltip: function() {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (lt(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
        },
        toggleTooltip: function(t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        },
        isTooltipOpen: function() {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function(t) {
            return this._tooltip && this._tooltip.setContent(t), this
        },
        getTooltip: function() {
            return this._tooltip
        },
        _openTooltip: function(t) {
            var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
        },
        _moveTooltip: function(t) {
            var e, i, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n)
        }
    });
    var nn = Di.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(t) {
            var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                i = this.options;
            if (e.innerHTML = !1 !== i.html ? i.html : "", i.bgPos) {
                var n = y(i.bgPos);
                e.style.backgroundPosition = -n.x + "px " + -n.y + "px"
            }
            return this._setIconStyles(e, "icon"), e
        },
        createShadow: function() {
            return null
        }
    });
    Di.Default = ji;
    var on = Oi.extend({
            options: {
                tileSize: 256,
                opacity: 1,
                updateWhenIdle: Ze,
                updateWhenZooming: !0,
                updateInterval: 200,
                zIndex: 1,
                bounds: null,
                minZoom: 0,
                maxZoom: void 0,
                maxNativeZoom: void 0,
                minNativeZoom: void 0,
                noWrap: !1,
                pane: "tilePane",
                className: "",
                keepBuffer: 2
            },
            initialize: function(t) {
                r(this, t)
            },
            onAdd: function() {
                this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
            },
            beforeAdd: function(t) {
                t._addZoomLimit(this)
            },
            onRemove: function(t) {
                this._removeAllTiles(), nt(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
            },
            bringToFront: function() {
                return this._map && (st(this._container), this._setAutoZIndex(Math.max)), this
            },
            bringToBack: function() {
                return this._map && (rt(this._container), this._setAutoZIndex(Math.min)), this
            },
            getContainer: function() {
                return this._container
            },
            setOpacity: function(t) {
                return this.options.opacity = t, this._updateOpacity(), this
            },
            setZIndex: function(t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            isLoading: function() {
                return this._loading
            },
            redraw: function() {
                return this._map && (this._removeAllTiles(), this._update()), this
            },
            getEvents: function() {
                var t = {
                    viewprereset: this._invalidateAll,
                    viewreset: this._resetView,
                    zoom: this._resetView,
                    moveend: this._onMoveEnd
                };
                return this.options.updateWhenIdle || (this._onMove || (this._onMove = e(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            createTile: function() {
                return document.createElement("div")
            },
            getTileSize: function() {
                var t = this.options.tileSize;
                return t instanceof v ? t : new v(t, t)
            },
            _updateZIndex: function() {
                this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t) {
                for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
                isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
            },
            _updateOpacity: function() {
                if (this._map && !de) {
                    ct(this._container, this.options.opacity);
                    var t = +new Date,
                        e = !1,
                        i = !1;
                    for (var n in this._tiles) {
                        var o = this._tiles[n];
                        if (o.current && o.loaded) {
                            var s = Math.min(1, (t - o.loaded) / 200);
                            ct(o.el, s), s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0)
                        }
                    }
                    i && !this._noPrune && this._pruneTiles(), e && (f(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this))
                }
            },
            _onOpaqueTile: a,
            _initContainer: function() {
                this._container || (this._container = it("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
            },
            _updateLevels: function() {
                var t = this._tileZoom,
                    e = this.options.maxZoom;
                if (void 0 !== t) {
                    for (var i in this._levels) this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (nt(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
                    var n = this._levels[t],
                        o = this._map;
                    return n || ((n = this._levels[t] = {}).el = it("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n
                }
            },
            _onUpdateLevel: a,
            _onRemoveLevel: a,
            _onCreateLevel: a,
            _pruneTiles: function() {
                if (this._map) {
                    var t, e, i = this._map.getZoom();
                    if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles();
                    else {
                        for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
                        for (t in this._tiles)
                            if ((e = this._tiles[t]).current && !e.active) {
                                var n = e.coords;
                                this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                            }
                        for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                    }
                }
            },
            _removeTilesAtZoom: function(t) {
                for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
            },
            _removeAllTiles: function() {
                for (var t in this._tiles) this._removeTile(t)
            },
            _invalidateAll: function() {
                for (var t in this._levels) nt(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
                this._removeAllTiles(), this._tileZoom = void 0
            },
            _retainParent: function(t, e, i, n) {
                var o = Math.floor(t / 2),
                    s = Math.floor(e / 2),
                    r = i - 1,
                    a = new v(+o, +s);
                a.z = +r;
                var h = this._tileCoordsToKey(a),
                    l = this._tiles[h];
                return l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), n < r && this._retainParent(o, s, r, n))
            },
            _retainChildren: function(t, e, i, n) {
                for (var o = 2 * t; o < 2 * t + 2; o++)
                    for (var s = 2 * e; s < 2 * e + 2; s++) {
                        var r = new v(o, s);
                        r.z = i + 1;
                        var a = this._tileCoordsToKey(r),
                            h = this._tiles[a];
                        h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n))
                    }
            },
            _resetView: function(t) {
                var e = t && (t.pinch || t.flyTo);
                this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
            },
            _animateZoom: function(t) {
                this._setView(t.center, t.zoom, !0, t.noUpdate)
            },
            _clampZoom: function(t) {
                var e = this.options;
                return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
            },
            _setView: function(t, e, i, n) {
                var o = this._clampZoom(Math.round(e));
                (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
                var s = this.options.updateWhenZooming && o !== this._tileZoom;
                n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e)
            },
            _setZoomTransforms: function(t, e) {
                for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
            },
            _setZoomTransform: function(t, e, i) {
                var n = this._map.getZoomScale(i, t.zoom),
                    o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
                Se ? pt(t.el, o, n) : mt(t.el, o)
            },
            _resetGrid: function() {
                var t = this._map,
                    e = t.options.crs,
                    i = this._tileSize = this.getTileSize(),
                    n = this._tileZoom,
                    o = this._map.getPixelWorldBounds(this._tileZoom);
                o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
            },
            _onMoveEnd: function() {
                this._map && !this._map._animatingZoom && this._update()
            },
            _getTiledPixelBounds: function(t) {
                var e = this._map,
                    i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                    n = e.getZoomScale(i, this._tileZoom),
                    o = e.project(t, this._tileZoom).floor(),
                    s = e.getSize().divideBy(2 * n);
                return new w(o.subtract(s), o.add(s))
            },
            _update: function(t) {
                var e = this._map;
                if (e) {
                    var i = this._clampZoom(e.getZoom());
                    if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                        var n = this._getTiledPixelBounds(t),
                            o = this._pxBoundsToTileRange(n),
                            s = o.getCenter(),
                            r = [],
                            a = this.options.keepBuffer,
                            h = new w(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                        if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                        for (var l in this._tiles) {
                            var u = this._tiles[l].coords;
                            u.z === this._tileZoom && h.contains(new v(u.x, u.y)) || (this._tiles[l].current = !1)
                        }
                        if (1 < Math.abs(i - this._tileZoom)) this._setView(t, i);
                        else {
                            for (var _ = o.min.y; _ <= o.max.y; _++)
                                for (var c = o.min.x; c <= o.max.x; c++) {
                                    var d = new v(c, _);
                                    if (d.z = this._tileZoom, this._isValidTile(d)) {
                                        var p = this._tiles[this._tileCoordsToKey(d)];
                                        p ? p.current = !0 : r.push(d)
                                    }
                                }
                            if (r.sort(function(t, e) {
                                    return t.distanceTo(s) - e.distanceTo(s)
                                }), 0 !== r.length) {
                                this._loading || (this._loading = !0, this.fire("loading"));
                                var m = document.createDocumentFragment();
                                for (c = 0; c < r.length; c++) this._addTile(r[c], m);
                                this._level.el.appendChild(m)
                            }
                        }
                    }
                }
            },
            _isValidTile: function(t) {
                var e = this._map.options.crs;
                if (!e.infinite) {
                    var i = this._globalTileRange;
                    if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1
                }
                if (!this.options.bounds) return !0;
                var n = this._tileCoordsToBounds(t);
                return C(this.options.bounds).overlaps(n)
            },
            _keyToBounds: function(t) {
                return this._tileCoordsToBounds(this._keyToTileCoords(t))
            },
            _tileCoordsToNwSe: function(t) {
                var e = this._map,
                    i = this.getTileSize(),
                    n = t.scaleBy(i),
                    o = n.add(i);
                return [e.unproject(n, t.z), e.unproject(o, t.z)]
            },
            _tileCoordsToBounds: function(t) {
                var e = this._tileCoordsToNwSe(t),
                    i = new b(e[0], e[1]);
                return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i
            },
            _tileCoordsToKey: function(t) {
                return t.x + ":" + t.y + ":" + t.z
            },
            _keyToTileCoords: function(t) {
                var e = t.split(":"),
                    i = new v(+e[0], +e[1]);
                return i.z = +e[2], i
            },
            _removeTile: function(t) {
                var e = this._tiles[t];
                e && (ye || e.el.setAttribute("src", Vt), nt(e.el), delete this._tiles[t], this.fire("tileunload", {
                    tile: e.el,
                    coords: this._keyToTileCoords(t)
                }))
            },
            _initTile: function(t) {
                ht(t, "leaflet-tile");
                var e = this.getTileSize();
                t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = a, t.onmousemove = a, de && this.options.opacity < 1 && ct(t, this.options.opacity), fe && !ge && (t.style.WebkitBackfaceVisibility = "hidden")
            },
            _addTile: function(t, e) {
                var i = this._getTilePos(t),
                    n = this._tileCoordsToKey(t),
                    o = this.createTile(this._wrapCoords(t), p(this._tileReady, this, t));
                this._initTile(o), this.createTile.length < 2 && x(p(this._tileReady, this, t, null, o)), mt(o, i), this._tiles[n] = {
                    el: o,
                    coords: t,
                    current: !0
                }, e.appendChild(o), this.fire("tileloadstart", {
                    tile: o,
                    coords: t
                })
            },
            _tileReady: function(t, e, i) {
                if (this._map) {
                    e && this.fire("tileerror", {
                        error: e,
                        tile: i,
                        coords: t
                    });
                    var n = this._tileCoordsToKey(t);
                    (i = this._tiles[n]) && (i.loaded = +new Date, this._map._fadeAnimated ? (ct(i.el, 0), f(this._fadeFrame), this._fadeFrame = x(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (ht(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
                        tile: i.el,
                        coords: t
                    })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), de || !this._map._fadeAnimated ? x(this._pruneTiles, this) : setTimeout(p(this._pruneTiles, this), 250)))
                }
            },
            _getTilePos: function(t) {
                return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
            },
            _wrapCoords: function(t) {
                var e = new v(this._wrapX ? i(t.x, this._wrapX) : t.x, this._wrapY ? i(t.y, this._wrapY) : t.y);
                return e.z = t.z, e
            },
            _pxBoundsToTileRange: function(t) {
                var e = this.getTileSize();
                return new w(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
            },
            _noTilesToLoad: function() {
                for (var t in this._tiles)
                    if (!this._tiles[t].loaded) return !1;
                return !0
            }
        }),
        sn = on.extend({
            options: {
                minZoom: 0,
                maxZoom: 18,
                subdomains: "abc",
                errorTileUrl: "",
                zoomOffset: 0,
                tms: !1,
                zoomReverse: !1,
                detectRetina: !1,
                crossOrigin: !1
            },
            initialize: function(t, e) {
                this._url = t, (e = r(this, e)).detectRetina && De && 0 < e.maxZoom && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), fe || this.on("tileunload", this._onTileRemove)
            },
            setUrl: function(t, e) {
                return this._url = t, e || this.redraw(), this
            },
            createTile: function(t, e) {
                var i = document.createElement("img");
                return j(i, "load", p(this._tileOnLoad, this, e, i)), j(i, "error", p(this._tileOnError, this, e, i)), this.options.crossOrigin && (i.crossOrigin = ""), i.alt = "", i.setAttribute("role", "presentation"), i.src = this.getTileUrl(t), i
            },
            getTileUrl: function(t) {
                var e = {
                    r: De ? "@2x" : "",
                    s: this._getSubdomain(t),
                    x: t.x,
                    y: t.y,
                    z: this._getZoomForUrl()
                };
                if (this._map && !this._map.options.crs.infinite) {
                    var i = this._globalTileRange.max.y - t.y;
                    this.options.tms && (e.y = i), e["-y"] = i
                }
                return s(this._url, h(e, this.options))
            },
            _tileOnLoad: function(t, e) {
                de ? setTimeout(p(t, this, null, e), 0) : t(null, e)
            },
            _tileOnError: function(t, e, i) {
                var n = this.options.errorTileUrl;
                n && e.getAttribute("src") !== n && (e.src = n), t(i, e)
            },
            _onTileRemove: function(t) {
                t.tile.onload = null
            },
            _getZoomForUrl: function() {
                var t = this._tileZoom,
                    e = this.options.maxZoom;
                return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset
            },
            _getSubdomain: function(t) {
                var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
                return this.options.subdomains[e]
            },
            _abortLoading: function() {
                var t, e;
                for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = a, e.onerror = a, e.complete || (e.src = Vt, nt(e), delete this._tiles[t]))
            }
        }),
        rn = sn.extend({
            defaultWmsParams: {
                service: "WMS",
                request: "GetMap",
                layers: "",
                styles: "",
                format: "image/jpeg",
                transparent: !1,
                version: "1.1.1"
            },
            options: {
                crs: null,
                uppercase: !1
            },
            initialize: function(t, e) {
                this._url = t;
                var i = h({}, this.defaultWmsParams);
                for (var n in e) n in this.options || (i[n] = e[n]);
                var o = (e = r(this, e)).detectRetina && De ? 2 : 1,
                    s = this.getTileSize();
                i.width = s.x * o, i.height = s.y * o, this.wmsParams = i
            },
            onAdd: function(t) {
                this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
                this.wmsParams[e] = this._crs.code, sn.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
                var e = this._tileCoordsToNwSe(t),
                    i = this._crs,
                    n = P(i.project(e[0]), i.project(e[1])),
                    o = n.min,
                    s = n.max,
                    r = (1.3 <= this._wmsVersion && this._crs === Bi ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                    a = L.TileLayer.prototype.getTileUrl.call(this, t);
                return a + _(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
            },
            setParams: function(t, e) {
                return h(this.wmsParams, t), e || this.redraw(), this
            }
        });
    sn.WMS = rn, Rt.wms = function(t, e) {
        return new rn(t, e)
    };
    var an = Oi.extend({
            options: {
                padding: .1,
                tolerance: 0
            },
            initialize: function(t) {
                r(this, t), u(this), this._layers = this._layers || {}
            },
            onAdd: function() {
                this._container || (this._initContainer(), this._zoomAnimated && ht(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
            },
            onRemove: function() {
                this.off("update", this._updatePaths, this), this._destroyContainer()
            },
            getEvents: function() {
                var t = {
                    viewreset: this._reset,
                    zoom: this._onZoom,
                    moveend: this._update,
                    zoomend: this._onZoomEnd
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
            },
            _onAnimZoom: function(t) {
                this._updateTransform(t.center, t.zoom)
            },
            _onZoom: function() {
                this._updateTransform(this._map.getCenter(), this._map.getZoom())
            },
            _updateTransform: function(t, e) {
                var i = this._map.getZoomScale(e, this._zoom),
                    n = ft(this._container),
                    o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                    s = this._map.project(this._center, e),
                    r = this._map.project(t, e).subtract(s),
                    a = o.multiplyBy(-i).add(n).add(o).subtract(r);
                Se ? pt(this._container, a, i) : mt(this._container, a)
            },
            _reset: function() {
                for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
            },
            _onZoomEnd: function() {
                for (var t in this._layers) this._layers[t]._project()
            },
            _updatePaths: function() {
                for (var t in this._layers) this._layers[t]._update()
            },
            _update: function() {
                var t = this.options.padding,
                    e = this._map.getSize(),
                    i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
                this._bounds = new w(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
            }
        }),
        hn = an.extend({
            getEvents: function() {
                var t = an.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset, t
            },
            _onViewPreReset: function() {
                this._postponeUpdatePaths = !0
            },
            onAdd: function() {
                an.prototype.onAdd.call(this), this._draw()
            },
            _initContainer: function() {
                var t = this._container = document.createElement("canvas");
                j(t, "mousemove", e(this._onMouseMove, 32, this), this), j(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), j(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
            },
            _destroyContainer: function() {
                delete this._ctx, nt(this._container), G(this._container), delete this._container
            },
            _updatePaths: function() {
                if (!this._postponeUpdatePaths) {
                    for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                    this._redraw()
                }
            },
            _update: function() {
                if (!this._map._animatingZoom || !this._bounds) {
                    this._drawnLayers = {}, an.prototype._update.call(this);
                    var t = this._bounds,
                        e = this._container,
                        i = t.getSize(),
                        n = De ? 2 : 1;
                    mt(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", De && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                }
            },
            _reset: function() {
                an.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
            },
            _initPath: function(t) {
                this._updateDashArray(t);
                var e = (this._layers[u(t)] = t)._order = {
                    layer: t,
                    prev: this._drawLast,
                    next: null
                };
                this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
            },
            _addPath: function(t) {
                this._requestRedraw(t)
            },
            _removePath: function(t) {
                var e = t._order,
                    i = e.next,
                    n = e.prev;
                i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[L.stamp(t)], this._requestRedraw(t)
            },
            _updatePath: function(t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
            },
            _updateStyle: function(t) {
                this._updateDashArray(t), this._requestRedraw(t)
            },
            _updateDashArray: function(t) {
                if (t.options.dashArray) {
                    var e, i = t.options.dashArray.split(","),
                        n = [];
                    for (e = 0; e < i.length; e++) n.push(Number(i[e]));
                    t.options._dashArray = n
                }
            },
            _requestRedraw: function(t) {
                this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || x(this._redraw, this))
            },
            _extendRedrawBounds: function(t) {
                if (t._pxBounds) {
                    var e = (t.options.weight || 0) + 1;
                    this._redrawBounds = this._redrawBounds || new w, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
                }
            },
            _redraw: function() {
                this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
            },
            _clear: function() {
                var t = this._redrawBounds;
                if (t) {
                    var e = t.getSize();
                    this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
                } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
            },
            _draw: function() {
                var t, e = this._redrawBounds;
                if (this._ctx.save(), e) {
                    var i = e.getSize();
                    this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()
                }
                this._drawing = !0;
                for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
                this._drawing = !1, this._ctx.restore()
            },
            _updatePoly: function(t, e) {
                if (this._drawing) {
                    var i, n, o, s, r = t._parts,
                        a = r.length,
                        h = this._ctx;
                    if (a) {
                        for (this._drawnLayers[t._leaflet_id] = t, h.beginPath(), i = 0; i < a; i++) {
                            for (n = 0, o = r[i].length; n < o; n++) s = r[i][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                            e && h.closePath()
                        }
                        this._fillStroke(h, t)
                    }
                }
            },
            _updateCircle: function(t) {
                if (this._drawing && !t._empty()) {
                    var e = t._point,
                        i = this._ctx,
                        n = Math.max(Math.round(t._radius), 1),
                        o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                    this._drawnLayers[t._leaflet_id] = t, 1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t)
                }
            },
            _fillStroke: function(t, e) {
                var i = e.options;
                i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
            },
            _onClick: function(t) {
                for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
                i && (J(t), this._fireEvent([i], t))
            },
            _onMouseMove: function(t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                    var e = this._map.mouseEventToLayerPoint(t);
                    this._handleMouseHover(t, e)
                }
            },
            _handleMouseOut: function(t) {
                var e = this._hoveredLayer;
                e && (lt(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null)
            },
            _handleMouseHover: function(t, e) {
                for (var i, n, o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
                n !== this._hoveredLayer && (this._handleMouseOut(t), n && (ht(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
            },
            _fireEvent: function(t, e, i) {
                this._map._fireDOMEvent(e, i || e.type, t)
            },
            _bringToFront: function(t) {
                var e = t._order,
                    i = e.next,
                    n = e.prev;
                i && ((i.prev = n) ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, (this._drawLast.next = e).next = null, this._drawLast = e, this._requestRedraw(t))
            },
            _bringToBack: function(t) {
                var e = t._order,
                    i = e.next,
                    n = e.prev;
                n && ((n.next = i) ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
            }
        }),
        ln = function() {
            try {
                return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                    function(t) {
                        return document.createElement("<lvml:" + t + ' class="lvml">')
                    }
            } catch (t) {
                return function(t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
                }
            }
        }(),
        un = {
            _initContainer: function() {
                this._container = it("div", "leaflet-vml-container")
            },
            _update: function() {
                this._map._animatingZoom || (an.prototype._update.call(this), this.fire("update"))
            },
            _initPath: function(t) {
                var e = t._container = ln("shape");
                ht(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = ln("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[u(t)] = t
            },
            _addPath: function(t) {
                var e = t._container;
                this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
            },
            _removePath: function(t) {
                var e = t._container;
                nt(e), t.removeInteractiveTarget(e), delete this._layers[u(t)]
            },
            _updateStyle: function(t) {
                var e = t._stroke,
                    i = t._fill,
                    n = t.options,
                    o = t._container;
                o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = ln("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = Wt(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = ln("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null)
            },
            _updateCircle: function(t) {
                var e = t._point.round(),
                    i = Math.round(t._radius),
                    n = Math.round(t._radiusY || i);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
            },
            _setPath: function(t, e) {
                t._path.v = e
            },
            _bringToFront: function(t) {
                st(t._container)
            },
            _bringToBack: function(t) {
                rt(t._container)
            }
        },
        _n = He ? ln : S,
        cn = an.extend({
            getEvents: function() {
                var t = an.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart, t
            },
            _initContainer: function() {
                this._container = _n("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = _n("g"), this._container.appendChild(this._rootGroup)
            },
            _destroyContainer: function() {
                nt(this._container), G(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
            },
            _onZoomStart: function() {
                this._update()
            },
            _update: function() {
                if (!this._map._animatingZoom || !this._bounds) {
                    an.prototype._update.call(this);
                    var t = this._bounds,
                        e = t.getSize(),
                        i = this._container;
                    this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), mt(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
                }
            },
            _initPath: function(t) {
                var e = t._path = _n("path");
                t.options.className && ht(e, t.options.className), t.options.interactive && ht(e, "leaflet-interactive"), this._updateStyle(t), this._layers[u(t)] = t
            },
            _addPath: function(t) {
                this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
            },
            _removePath: function(t) {
                nt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[u(t)]
            },
            _updatePath: function(t) {
                t._project(), t._update()
            },
            _updateStyle: function(t) {
                var e = t._path,
                    i = t.options;
                e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
            },
            _updatePoly: function(t, e) {
                this._setPath(t, Z(t._parts, e))
            },
            _updateCircle: function(t) {
                var e = t._point,
                    i = Math.max(Math.round(t._radius), 1),
                    n = "a" + i + "," + (Math.max(Math.round(t._radiusY), 1) || i) + " 0 1,0 ",
                    o = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
                this._setPath(t, o)
            },
            _setPath: function(t, e) {
                t._path.setAttribute("d", e)
            },
            _bringToFront: function(t) {
                st(t._path)
            },
            _bringToBack: function(t) {
                rt(t._path)
            }
        });
    He && cn.include(un), di.include({
        getRenderer: function(t) {
            var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return e || (e = this._renderer = this.options.preferCanvas && Dt() || jt()), this.hasLayer(e) || this.addLayer(e), e
        },
        _getPaneRenderer: function(t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var e = this._paneRenderers[t];
            return void 0 === e && (e = cn && jt({
                pane: t
            }) || hn && Dt({
                pane: t
            }), this._paneRenderers[t] = e), e
        }
    });
    var dn = qi.extend({
        initialize: function(t, e) {
            qi.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        },
        setBounds: function(t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function(t) {
            return [(t = C(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    cn.create = _n, cn.pointsToPath = Z, Ki.geometryToLayer = St, Ki.coordsToLatLng = Zt, Ki.coordsToLatLngs = Et, Ki.latLngToCoords = At, Ki.latLngsToCoords = Bt, Ki.getFeature = It, Ki.asFeature = Ot, di.mergeOptions({
        boxZoom: !0
    });
    var pn = Li.extend({
        initialize: function(t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
        },
        addHooks: function() {
            j(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function() {
            G(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function() {
            return this._moved
        },
        _destroy: function() {
            nt(this._pane), delete this._pane
        },
        _resetState: function() {
            this._resetStateTimeout = 0, this._moved = !1
        },
        _clearDeferredResetState: function() {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        },
        _onMouseDown: function(t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
            this._clearDeferredResetState(), this._resetState(), se(), gt(), this._startPoint = this._map.mouseEventToContainerPoint(t), j(document, {
                contextmenu: K,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function(t) {
            this._moved || (this._moved = !0, this._box = it("div", "leaflet-zoom-box", this._container), ht(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var e = new w(this._point, this._startPoint),
                i = e.getSize();
            mt(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px"
        },
        _finish: function() {
            this._moved && (nt(this._box), lt(this._container, "leaflet-crosshair")), re(), vt(), G(document, {
                contextmenu: K,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function(t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(p(this._resetState, this), 0);
                var e = new b(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(e).fire("boxzoomend", {
                    boxZoomBounds: e
                })
            }
        },
        _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
        }
    });
    di.addInitHook("addHandler", "boxZoom", pn), di.mergeOptions({
        doubleClickZoom: !0
    });
    var mn = Li.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function(t) {
            var e = this._map,
                i = e.getZoom(),
                n = e.options.zoomDelta,
                o = t.originalEvent.shiftKey ? i - n : i + n;
            "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
        }
    });
    di.addInitHook("addHandler", "doubleClickZoom", mn), di.mergeOptions({
        dragging: !0,
        inertia: !ge,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var fn = Li.extend({
        addHooks: function() {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new Ti(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            ht(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
        },
        removeHooks: function() {
            lt(this._map._container, "leaflet-grab"), lt(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
        },
        moved: function() {
            return this._draggable && this._draggable._moved
        },
        moving: function() {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function() {
            var t = this._map;
            if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var e = C(this._map.options.maxBounds);
                this._offsetLimit = P(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function(t) {
            if (this._map.options.inertia) {
                var e = this._lastTime = +new Date,
                    i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(i), this._times.push(e), this._prunePositions(e)
            }
            this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function(t) {
            for (; 1 < this._positions.length && 50 < t - this._times[0];) this._positions.shift(), this._times.shift()
        },
        _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function(t, e) {
            return t - (t - e) * this._viscosity
        },
        _onPreDragLimit: function() {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                    e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
        },
        _onPreDragWrap: function() {
            var t = this._worldWidth,
                e = Math.round(t / 2),
                i = this._initialWorldOffset,
                n = this._draggable._newPos.x,
                o = (n - e + i) % t + e - i,
                s = (n + e + i) % t - e - i,
                r = Math.abs(o + i) < Math.abs(s + i) ? o : s;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
        },
        _onDragEnd: function(t) {
            var e = this._map,
                i = e.options,
                n = !i.inertia || this._times.length < 2;
            if (e.fire("dragend", t), n) e.fire("moveend");
            else {
                this._prunePositions(+new Date);
                var o = this._lastPos.subtract(this._positions[0]),
                    s = (this._lastTime - this._times[0]) / 1e3,
                    r = i.easeLinearity,
                    a = o.multiplyBy(r / s),
                    h = a.distanceTo([0, 0]),
                    l = Math.min(i.inertiaMaxSpeed, h),
                    u = a.multiplyBy(l / h),
                    _ = l / (i.inertiaDeceleration * r),
                    c = u.multiplyBy(-_ / 2).round();
                c.x || c.y ? (c = e._limitOffset(c, e.options.maxBounds), x(function() {
                    e.panBy(c, {
                        duration: _,
                        easeLinearity: r,
                        noMoveStart: !0,
                        animate: !0
                    })
                })) : e.fire("moveend")
            }
        }
    });
    di.addInitHook("addHandler", "dragging", fn), di.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    var gn = Li.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function(t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), j(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function() {
            this._removeHooks(), G(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function() {
            if (!this._focused) {
                var t = document.body,
                    e = document.documentElement,
                    i = t.scrollTop || e.scrollTop,
                    n = t.scrollLeft || e.scrollLeft;
                this._map._container.focus(), window.scrollTo(n, i)
            }
        },
        _onFocus: function() {
            this._focused = !0, this._map.fire("focus")
        },
        _onBlur: function() {
            this._focused = !1, this._map.fire("blur")
        },
        _setPanDelta: function(t) {
            var e, i, n = this._panKeys = {},
                o = this.keyCodes;
            for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
            for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
            for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
            for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t]
        },
        _setZoomDelta: function(t) {
            var e, i, n = this._zoomKeys = {},
                o = this.keyCodes;
            for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
            for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t
        },
        _addHooks: function() {
            j(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function() {
            G(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, i = t.keyCode,
                    n = this._map;
                if (i in this._panKeys) {
                    if (n._panAnim && n._panAnim._inProgress) return;
                    e = this._panKeys[i], t.shiftKey && (e = y(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
                } else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
                else {
                    if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                    n.closePopup()
                }
                K(t)
            }
        }
    });
    di.addInitHook("addHandler", "keyboard", gn), di.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var vn = Li.extend({
        addHooks: function() {
            j(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function() {
            G(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function(t) {
            var e = X(t),
                i = this._map.options.wheelDebounceTime;
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var n = Math.max(i - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(p(this._performZoom, this), n), K(t)
        },
        _performZoom: function() {
            var t = this._map,
                e = t.getZoom(),
                i = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                s = i ? Math.ceil(o / i) * i : o,
                r = t._limitZoom(e + (0 < this._delta ? s : -s)) - e;
            this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + r) : t.setZoomAround(this._lastMousePos, e + r))
        }
    });
    di.addInitHook("addHandler", "scrollWheelZoom", vn), di.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    var yn = Li.extend({
        addHooks: function() {
            j(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function() {
            G(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function(t) {
            if (t.touches) {
                if (q(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var e = t.touches[0],
                    i = e.target;
                this._startPos = this._newPos = new v(e.clientX, e.clientY), i.tagName && "a" === i.tagName.toLowerCase() && ht(i, "leaflet-active"), this._holdTimeout = setTimeout(p(function() {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                }, this), 1e3), this._simulateEvent("mousedown", e), j(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        },
        _onUp: function(t) {
            if (clearTimeout(this._holdTimeout), G(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this), this._fireClick && t && t.changedTouches) {
                var e = t.changedTouches[0],
                    i = e.target;
                i && i.tagName && "a" === i.tagName.toLowerCase() && lt(i, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
            }
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function(t) {
            var e = t.touches[0];
            this._newPos = new v(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
        },
        _simulateEvent: function(t, e) {
            var i = document.createEvent("MouseEvents");
            i._simulated = !0, e.target._simulatedClick = !0, i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i)
        }
    });
    Oe && !Ie && di.addInitHook("addHandler", "tap", yn), di.mergeOptions({
        touchZoom: Oe && !ge,
        bounceAtZoomLimits: !0
    });
    var Ln = Li.extend({
        addHooks: function() {
            ht(this._map._container, "leaflet-touch-zoom"), j(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function() {
            lt(this._map._container, "leaflet-touch-zoom"), G(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function(t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                var i = e.mouseEventToContainerPoint(t.touches[0]),
                    n = e.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), j(document, "touchmove", this._onTouchMove, this), j(document, "touchend", this._onTouchEnd, this), q(t)
            }
        },
        _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                    i = e.mouseEventToContainerPoint(t.touches[0]),
                    n = e.mouseEventToContainerPoint(t.touches[1]),
                    o = i.distanceTo(n) / this._startDist;
                if (this._zoom = e.getScaleZoom(o, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && o < 1 || this._zoom > e.getMaxZoom() && 1 < o) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 === o) return
                } else {
                    var s = i._add(n)._divideBy(2)._subtract(this._centerPoint);
                    if (1 === o && 0 === s.x && 0 === s.y) return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom)
                }
                this._moved || (e._moveStart(!0, !1), this._moved = !0), f(this._animRequest);
                var r = p(e._move, e, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = x(r, this, !0), q(t)
            }
        },
        _onTouchEnd: function() {
            this._moved && this._zooming ? (this._zooming = !1, f(this._animRequest), G(document, "touchmove", this._onTouchMove), G(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    di.addInitHook("addHandler", "touchZoom", Ln), di.BoxZoom = pn, di.DoubleClickZoom = mn, di.Drag = fn, di.Keyboard = gn, di.ScrollWheelZoom = vn, di.Tap = yn, di.TouchZoom = Ln;
    var xn = window.L;
    window.L = t, Object.freeze = Gt, t.version = "1.3.1+HEAD.ba6f97f", t.noConflict = function() {
        return window.L = xn, this
    }, t.Control = pi, t.control = mi, t.Browser = Ue, t.Evented = Qt, t.Mixin = Pi, t.Util = Xt, t.Class = g, t.Handler = Li, t.extend = h, t.bind = p, t.stamp = u, t.setOptions = r, t.DomEvent = oi, t.DomUtil = _i, t.PosAnimation = ci, t.Draggable = Ti, t.LineUtil = zi, t.PolyUtil = ki, t.Point = v, t.point = y, t.Bounds = w, t.bounds = P, t.Transformation = z, t.transformation = k, t.Projection = Ei, t.LatLng = M, t.latLng = T, t.LatLngBounds = b, t.latLngBounds = C, t.CRS = ee, t.GeoJSON = Ki, t.geoJSON = Nt, t.geoJson = Xi, t.Layer = Oi, t.LayerGroup = Ni, t.layerGroup = function(t, e) {
        return new Ni(t, e)
    }, t.FeatureGroup = Ri, t.featureGroup = function(t) {
        return new Ri(t)
    }, t.ImageOverlay = Ji, t.imageOverlay = function(t, e, i) {
        return new Ji(t, e, i)
    }, t.VideoOverlay = Qi, t.videoOverlay = function(t, e, i) {
        return new Qi(t, e, i)
    }, t.DivOverlay = $i, t.Popup = tn, t.popup = function(t, e) {
        return new tn(t, e)
    }, t.Tooltip = en, t.tooltip = function(t, e) {
        return new en(t, e)
    }, t.Icon = Di, t.icon = function(t) {
        return new Di(t)
    }, t.DivIcon = nn, t.divIcon = function(t) {
        return new nn(t)
    }, t.Marker = Hi, t.marker = function(t, e) {
        return new Hi(t, e)
    }, t.TileLayer = sn, t.tileLayer = Rt, t.GridLayer = on, t.gridLayer = function(t) {
        return new on(t)
    }, t.SVG = cn, t.svg = jt, t.Renderer = an, t.Canvas = hn, t.canvas = Dt, t.Path = Ui, t.CircleMarker = Fi, t.circleMarker = function(t, e) {
        return new Fi(t, e)
    }, t.Circle = Wi, t.circle = function(t, e, i) {
        return new Wi(t, e, i)
    }, t.Polyline = Vi, t.polyline = function(t, e) {
        return new Vi(t, e)
    }, t.Polygon = qi, t.polygon = function(t, e) {
        return new qi(t, e)
    }, t.Rectangle = dn, t.rectangle = function(t, e) {
        return new dn(t, e)
    }, t.Map = di, t.map = function(t, e) {
        return new di(t, e)
    }
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t.Leaflet = t.Leaflet || {}, t.Leaflet.markercluster = t.Leaflet.markercluster || {}))
}(this, function(t) {
    "use strict";
    var e = L.MarkerClusterGroup = L.FeatureGroup.extend({
        options: {
            maxClusterRadius: 80,
            iconCreateFunction: null,
            clusterPane: L.Marker.prototype.options.pane,
            spiderfyOnMaxZoom: !0,
            showCoverageOnHover: !0,
            zoomToBoundsOnClick: !0,
            singleMarkerMode: !1,
            disableClusteringAtZoom: null,
            removeOutsideVisibleBounds: !0,
            animate: !0,
            animateAddingMarkers: !1,
            spiderfyDistanceMultiplier: 1,
            spiderLegPolylineOptions: {
                weight: 1.5,
                color: "#222",
                opacity: .5
            },
            chunkedLoading: !1,
            chunkInterval: 200,
            chunkDelay: 50,
            chunkProgress: null,
            polygonOptions: {}
        },
        initialize: function(t) {
            L.Util.setOptions(this, t), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.addEventParent(this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.addEventParent(this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [], this._childMarkerEventHandlers = {
                dragstart: this._childMarkerDragStart,
                move: this._childMarkerMoved,
                dragend: this._childMarkerDragEnd
            };
            var e = L.DomUtil.TRANSITION && this.options.animate;
            L.extend(this, e ? this._withAnimation : this._noAnimation), this._markerCluster = e ? L.MarkerCluster : L.MarkerClusterNonAnimated
        },
        addLayer: function(t) {
            if (t instanceof L.LayerGroup) return this.addLayers([t]);
            if (!t.getLatLng) return this._nonPointGroup.addLayer(t), this.fire("layeradd", {
                layer: t
            }), this;
            if (!this._map) return this._needsClustering.push(t), this.fire("layeradd", {
                layer: t
            }), this;
            if (this.hasLayer(t)) return this;
            this._unspiderfy && this._unspiderfy(), this._addLayer(t, this._maxZoom), this.fire("layeradd", {
                layer: t
            }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons();
            var e = t,
                i = this._zoom;
            if (t.__parent)
                for (; e.__parent._zoom >= i;) e = e.__parent;
            return this._currentShownBounds.contains(e.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, e) : this._animationAddLayerNonAnimated(t, e)), this
        },
        removeLayer: function(t) {
            return t instanceof L.LayerGroup ? this.removeLayers([t]) : (t.getLatLng ? this._map ? t.__parent && (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(t)), this._removeLayer(t, !0), this.fire("layerremove", {
                layer: t
            }), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), t.off(this._childMarkerEventHandlers, this), this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t), t.clusterShow && t.clusterShow())) : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push({
                layer: t,
                latlng: t._latlng
            }), this.fire("layerremove", {
                layer: t
            })) : (this._nonPointGroup.removeLayer(t), this.fire("layerremove", {
                layer: t
            })), this)
        },
        addLayers: function(o, s) {
            if (!L.Util.isArray(o)) return this.addLayer(o);
            var r, a = this._featureGroup,
                h = this._nonPointGroup,
                l = this.options.chunkedLoading,
                u = this.options.chunkInterval,
                _ = this.options.chunkProgress,
                c = o.length,
                d = 0,
                p = !0;
            if (this._map) {
                var m = (new Date).getTime(),
                    f = L.bind(function() {
                        for (var t = (new Date).getTime(); d < c; d++) {
                            if (l && 0 == d % 200) {
                                var e = (new Date).getTime() - t;
                                if (u < e) break
                            }
                            if ((r = o[d]) instanceof L.LayerGroup) p && (o = o.slice(), p = !1), this._extractNonGroupLayers(r, o), c = o.length;
                            else if (r.getLatLng) {
                                if (!this.hasLayer(r) && (this._addLayer(r, this._maxZoom), s || this.fire("layeradd", {
                                        layer: r
                                    }), r.__parent && 2 === r.__parent.getChildCount())) {
                                    var i = r.__parent.getAllChildMarkers(),
                                        n = i[0] === r ? i[1] : i[0];
                                    a.removeLayer(n)
                                }
                            } else h.addLayer(r), s || this.fire("layeradd", {
                                layer: r
                            })
                        }
                        _ && _(d, c, (new Date).getTime() - m), d === c ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(f, this.options.chunkDelay)
                    }, this);
                f()
            } else
                for (var t = this._needsClustering; d < c; d++)(r = o[d]) instanceof L.LayerGroup ? (p && (o = o.slice(), p = !1), this._extractNonGroupLayers(r, o), c = o.length) : r.getLatLng ? this.hasLayer(r) || t.push(r) : h.addLayer(r);
            return this
        },
        removeLayers: function(t) {
            var e, i, n = t.length,
                o = this._featureGroup,
                s = this._nonPointGroup,
                r = !0;
            if (!this._map) {
                for (e = 0; e < n; e++)(i = t[e]) instanceof L.LayerGroup ? (r && (t = t.slice(), r = !1), this._extractNonGroupLayers(i, t), n = t.length) : (this._arraySplice(this._needsClustering, i), s.removeLayer(i), this.hasLayer(i) && this._needsRemoving.push({
                    layer: i,
                    latlng: i._latlng
                }), this.fire("layerremove", {
                    layer: i
                }));
                return this
            }
            if (this._unspiderfy) {
                this._unspiderfy();
                var a = t.slice(),
                    h = n;
                for (e = 0; e < h; e++)(i = a[e]) instanceof L.LayerGroup ? (this._extractNonGroupLayers(i, a), h = a.length) : this._unspiderfyLayer(i)
            }
            for (e = 0; e < n; e++)(i = t[e]) instanceof L.LayerGroup ? (r && (t = t.slice(), r = !1), this._extractNonGroupLayers(i, t), n = t.length) : i.__parent ? (this._removeLayer(i, !0, !0), this.fire("layerremove", {
                layer: i
            }), o.hasLayer(i) && (o.removeLayer(i), i.clusterShow && i.clusterShow())) : (s.removeLayer(i), this.fire("layerremove", {
                layer: i
            }));
            return this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), this
        },
        clearLayers: function() {
            return this._map || (this._needsClustering = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function(t) {
                t.off(this._childMarkerEventHandlers, this), delete t.__parent
            }, this), this._map && this._generateInitialClusters(), this
        },
        getBounds: function() {
            var t = new L.LatLngBounds;
            this._topClusterLevel && t.extend(this._topClusterLevel._bounds);
            for (var e = this._needsClustering.length - 1; 0 <= e; e--) t.extend(this._needsClustering[e].getLatLng());
            return t.extend(this._nonPointGroup.getBounds()), t
        },
        eachLayer: function(t, e) {
            var i, n, o, s = this._needsClustering.slice(),
                r = this._needsRemoving;
            for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(s), n = s.length - 1; 0 <= n; n--) {
                for (i = !0, o = r.length - 1; 0 <= o; o--)
                    if (r[o].layer === s[n]) {
                        i = !1;
                        break
                    }
                i && t.call(e, s[n])
            }
            this._nonPointGroup.eachLayer(t, e)
        },
        getLayers: function() {
            var e = [];
            return this.eachLayer(function(t) {
                e.push(t)
            }), e
        },
        getLayer: function(e) {
            var i = null;
            return e = parseInt(e, 10), this.eachLayer(function(t) {
                L.stamp(t) === e && (i = t)
            }), i
        },
        hasLayer: function(t) {
            if (!t) return !1;
            var e, i = this._needsClustering;
            for (e = i.length - 1; 0 <= e; e--)
                if (i[e] === t) return !0;
            for (e = (i = this._needsRemoving).length - 1; 0 <= e; e--)
                if (i[e].layer === t) return !1;
            return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t)
        },
        zoomToShowLayer: function(t, e) {
            "function" != typeof e && (e = function() {});
            var i = function() {
                !t._icon && !t.__parent._icon || this._inZoomAnimation || (this._map.off("moveend", i, this), this.off("animationend", i, this), t._icon ? e() : t.__parent._icon && (this.once("spiderfied", e, this), t.__parent.spiderfy()))
            };
            t._icon && this._map.getBounds().contains(t.getLatLng()) ? e() : t.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", i, this), this._map.panTo(t.getLatLng())) : (this._map.on("moveend", i, this), this.on("animationend", i, this), t.__parent.zoomToBounds())
        },
        onAdd: function(t) {
            var e, i, n;
            if (this._map = t, !isFinite(this._map.getMaxZoom())) throw "Map has no maxZoom specified";
            for (this._featureGroup.addTo(t), this._nonPointGroup.addTo(t), this._gridClusters || this._generateInitialClusters(), this._maxLat = t.options.crs.projection.MAX_LATITUDE, e = 0, i = this._needsRemoving.length; e < i; e++)(n = this._needsRemoving[e]).newlatlng = n.layer._latlng, n.layer._latlng = n.latlng;
            for (e = 0, i = this._needsRemoving.length; e < i; e++) n = this._needsRemoving[e], this._removeLayer(n.layer, !0), n.layer._latlng = n.newlatlng;
            this._needsRemoving = [], this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), i = this._needsClustering, this._needsClustering = [], this.addLayers(i, !0)
        },
        onRemove: function(t) {
            t.off("zoomend", this._zoomEnd, this), t.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), delete this._maxLat, this._hideCoverage(), this._featureGroup.remove(), this._nonPointGroup.remove(), this._featureGroup.clearLayers(), this._map = null
        },
        getVisibleParent: function(t) {
            for (var e = t; e && !e._icon;) e = e.__parent;
            return e || null
        },
        _arraySplice: function(t, e) {
            for (var i = t.length - 1; 0 <= i; i--)
                if (t[i] === e) return t.splice(i, 1), !0
        },
        _removeFromGridUnclustered: function(t, e) {
            for (var i = this._map, n = this._gridUnclustered, o = Math.floor(this._map.getMinZoom()); o <= e && n[e].removeObject(t, i.project(t.getLatLng(), e)); e--);
        },
        _childMarkerDragStart: function(t) {
            t.target.__dragStart = t.target._latlng
        },
        _childMarkerMoved: function(t) {
            if (!this._ignoreMove && !t.target.__dragStart) {
                var e = t.target._popup && t.target._popup.isOpen();
                this._moveChild(t.target, t.oldLatLng, t.latlng), e && t.target.openPopup()
            }
        },
        _moveChild: function(t, e, i) {
            t._latlng = e, this.removeLayer(t), t._latlng = i, this.addLayer(t)
        },
        _childMarkerDragEnd: function(t) {
            t.target.__dragStart && this._moveChild(t.target, t.target.__dragStart, t.target._latlng), delete t.target.__dragStart
        },
        _removeLayer: function(t, e, i) {
            var n = this._gridClusters,
                o = this._gridUnclustered,
                s = this._featureGroup,
                r = this._map,
                a = Math.floor(this._map.getMinZoom());
            e && this._removeFromGridUnclustered(t, this._maxZoom);
            var h, l = t.__parent,
                u = l._markers;
            for (this._arraySplice(u, t); l && (l._childCount--, l._boundsNeedUpdate = !0, !(l._zoom < a));) e && l._childCount <= 1 ? (h = l._markers[0] === t ? l._markers[1] : l._markers[0], n[l._zoom].removeObject(l, r.project(l._cLatLng, l._zoom)), o[l._zoom].addObject(h, r.project(h.getLatLng(), l._zoom)), this._arraySplice(l.__parent._childClusters, l), l.__parent._markers.push(h), h.__parent = l.__parent, l._icon && (s.removeLayer(l), i || s.addLayer(h))) : l._iconNeedsUpdate = !0, l = l.__parent;
            delete t.__parent
        },
        _isOrIsParent: function(t, e) {
            for (; e;) {
                if (t === e) return !0;
                e = e.parentNode
            }
            return !1
        },
        fire: function(t, e, i) {
            if (e && e.layer instanceof L.MarkerCluster) {
                if (e.originalEvent && this._isOrIsParent(e.layer._icon, e.originalEvent.relatedTarget)) return;
                t = "cluster" + t
            }
            L.FeatureGroup.prototype.fire.call(this, t, e, i)
        },
        listens: function(t, e) {
            return L.FeatureGroup.prototype.listens.call(this, t, e) || L.FeatureGroup.prototype.listens.call(this, "cluster" + t, e)
        },
        _defaultIconCreateFunction: function(t) {
            var e = t.getChildCount(),
                i = " marker-cluster-";
            return i += e < 10 ? "small" : e < 100 ? "medium" : "large", new L.DivIcon({
                html: "<div><span>" + e + "</span></div>",
                className: "marker-cluster" + i,
                iconSize: new L.Point(40, 40)
            })
        },
        _bindEvents: function() {
            var t = this._map,
                e = this.options.spiderfyOnMaxZoom,
                i = this.options.showCoverageOnHover,
                n = this.options.zoomToBoundsOnClick;
            (e || n) && this.on("clusterclick", this._zoomOrSpiderfy, this), i && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), t.on("zoomend", this._hideCoverage, this))
        },
        _zoomOrSpiderfy: function(t) {
            for (var e = t.layer, i = e; 1 === i._childClusters.length;) i = i._childClusters[0];
            i._zoom === this._maxZoom && i._childCount === e._childCount && this.options.spiderfyOnMaxZoom ? e.spiderfy() : this.options.zoomToBoundsOnClick && e.zoomToBounds(), t.originalEvent && 13 === t.originalEvent.keyCode && this._map._container.focus()
        },
        _showCoverage: function(t) {
            var e = this._map;
            this._inZoomAnimation || (this._shownPolygon && e.removeLayer(this._shownPolygon), 2 < t.layer.getChildCount() && t.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(t.layer.getConvexHull(), this.options.polygonOptions), e.addLayer(this._shownPolygon)))
        },
        _hideCoverage: function() {
            this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null)
        },
        _unbindEvents: function() {
            var t = this.options.spiderfyOnMaxZoom,
                e = this.options.showCoverageOnHover,
                i = this.options.zoomToBoundsOnClick,
                n = this._map;
            (t || i) && this.off("clusterclick", this._zoomOrSpiderfy, this), e && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), n.off("zoomend", this._hideCoverage, this))
        },
        _zoomEnd: function() {
            this._map && (this._mergeSplitClusters(), this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds())
        },
        _moveEnd: function() {
            if (!this._inZoomAnimation) {
                var t = this._getExpandedVisibleBounds();
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), t), this._currentShownBounds = t
            }
        },
        _generateInitialClusters: function() {
            var t = Math.ceil(this._map.getMaxZoom()),
                e = Math.floor(this._map.getMinZoom()),
                i = this.options.maxClusterRadius,
                n = i;
            "function" != typeof i && (n = function() {
                return i
            }), null !== this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1), this._maxZoom = t, this._gridClusters = {}, this._gridUnclustered = {};
            for (var o = t; e <= o; o--) this._gridClusters[o] = new L.DistanceGrid(n(o)), this._gridUnclustered[o] = new L.DistanceGrid(n(o));
            this._topClusterLevel = new this._markerCluster(this, e - 1)
        },
        _addLayer: function(t, e) {
            var i, n, o = this._gridClusters,
                s = this._gridUnclustered,
                r = Math.floor(this._map.getMinZoom());
            for (this.options.singleMarkerMode && this._overrideMarkerIcon(t), t.on(this._childMarkerEventHandlers, this); r <= e; e--) {
                i = this._map.project(t.getLatLng(), e);
                var a = o[e].getNearObject(i);
                if (a) return a._addChild(t), void(t.__parent = a);
                if (a = s[e].getNearObject(i)) {
                    var h = a.__parent;
                    h && this._removeLayer(a, !1);
                    var l = new this._markerCluster(this, e, a, t);
                    o[e].addObject(l, this._map.project(l._cLatLng, e)), a.__parent = l;
                    var u = t.__parent = l;
                    for (n = e - 1; n > h._zoom; n--) u = new this._markerCluster(this, n, u), o[n].addObject(u, this._map.project(a.getLatLng(), n));
                    return h._addChild(u), void this._removeFromGridUnclustered(a, e)
                }
                s[e].addObject(t, i)
            }
            this._topClusterLevel._addChild(t), t.__parent = this._topClusterLevel
        },
        _refreshClustersIcons: function() {
            this._featureGroup.eachLayer(function(t) {
                t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon()
            })
        },
        _enqueue: function(t) {
            this._queue.push(t), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300))
        },
        _processQueue: function() {
            for (var t = 0; t < this._queue.length; t++) this._queue[t].call(this);
            this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null
        },
        _mergeSplitClusters: function() {
            var t = Math.round(this._map._zoom);
            this._processQueue(), this._zoom < t && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, t)) : this._zoom > t ? (this._animationStart(), this._animationZoomOut(this._zoom, t)) : this._moveEnd()
        },
        _getExpandedVisibleBounds: function() {
            return this.options.removeOutsideVisibleBounds ? L.Browser.mobile ? this._checkBoundsMaxLat(this._map.getBounds()) : this._checkBoundsMaxLat(this._map.getBounds().pad(1)) : this._mapBoundsInfinite
        },
        _checkBoundsMaxLat: function(t) {
            var e = this._maxLat;
            return void 0 !== e && (t.getNorth() >= e && (t._northEast.lat = 1 / 0), t.getSouth() <= -e && (t._southWest.lat = -1 / 0)), t
        },
        _animationAddLayerNonAnimated: function(t, e) {
            if (e === t) this._featureGroup.addLayer(t);
            else if (2 === e._childCount) {
                e._addToMap();
                var i = e.getAllChildMarkers();
                this._featureGroup.removeLayer(i[0]), this._featureGroup.removeLayer(i[1])
            } else e._updateIcon()
        },
        _extractNonGroupLayers: function(t, e) {
            var i, n = t.getLayers(),
                o = 0;
            for (e = e || []; o < n.length; o++)(i = n[o]) instanceof L.LayerGroup ? this._extractNonGroupLayers(i, e) : e.push(i);
            return e
        },
        _overrideMarkerIcon: function(t) {
            return t.options.icon = this.options.iconCreateFunction({
                getChildCount: function() {
                    return 1
                },
                getAllChildMarkers: function() {
                    return [t]
                }
            })
        }
    });
    L.MarkerClusterGroup.include({
        _mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))
    }), L.MarkerClusterGroup.include({
        _noAnimation: {
            _animationStart: function() {},
            _animationZoomIn: function(t, e) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this.fire("animationend")
            },
            _animationZoomOut: function(t, e) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this.fire("animationend")
            },
            _animationAddLayer: function(t, e) {
                this._animationAddLayerNonAnimated(t, e)
            }
        },
        _withAnimation: {
            _animationStart: function() {
                this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++
            },
            _animationZoomIn: function(o, s) {
                var r, a = this._getExpandedVisibleBounds(),
                    h = this._featureGroup,
                    t = Math.floor(this._map.getMinZoom());
                this._ignoreMove = !0, this._topClusterLevel._recursively(a, o, t, function(t) {
                    var e, i = t._latlng,
                        n = t._markers;
                    for (a.contains(i) || (i = null), t._isSingleParent() && o + 1 === s ? (h.removeLayer(t), t._recursivelyAddChildrenToMap(null, s, a)) : (t.clusterHide(), t._recursivelyAddChildrenToMap(i, s, a)), r = n.length - 1; 0 <= r; r--) e = n[r], a.contains(e._latlng) || h.removeLayer(e)
                }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(a, s), h.eachLayer(function(t) {
                    t instanceof L.MarkerCluster || !t._icon || t.clusterShow()
                }), this._topClusterLevel._recursively(a, o, s, function(t) {
                    t._recursivelyRestoreChildPositions(s)
                }), this._ignoreMove = !1, this._enqueue(function() {
                    this._topClusterLevel._recursively(a, o, t, function(t) {
                        h.removeLayer(t), t.clusterShow()
                    }), this._animationEnd()
                })
            },
            _animationZoomOut: function(t, e) {
                this._animationZoomOutSingle(this._topClusterLevel, t - 1, e), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t, this._getExpandedVisibleBounds())
            },
            _animationAddLayer: function(t, e) {
                var i = this,
                    n = this._featureGroup;
                n.addLayer(t), e !== t && (2 < e._childCount ? (e._updateIcon(), this._forceLayout(), this._animationStart(), t._setPos(this._map.latLngToLayerPoint(e.getLatLng())), t.clusterHide(), this._enqueue(function() {
                    n.removeLayer(t), t.clusterShow(), i._animationEnd()
                })) : (this._forceLayout(), i._animationStart(), i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._zoom)))
            }
        },
        _animationZoomOutSingle: function(e, i, n) {
            var o = this._getExpandedVisibleBounds(),
                s = Math.floor(this._map.getMinZoom());
            e._recursivelyAnimateChildrenInAndAddSelfToMap(o, s, i + 1, n);
            var r = this;
            this._forceLayout(), e._recursivelyBecomeVisible(o, n), this._enqueue(function() {
                if (1 === e._childCount) {
                    var t = e._markers[0];
                    this._ignoreMove = !0, t.setLatLng(t.getLatLng()), this._ignoreMove = !1, t.clusterShow && t.clusterShow()
                } else e._recursively(o, n, s, function(t) {
                    t._recursivelyRemoveChildrenFromMap(o, s, i + 1)
                });
                r._animationEnd()
            })
        },
        _animationEnd: function() {
            this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend")
        },
        _forceLayout: function() {
            L.Util.falseFn(document.body.offsetWidth)
        }
    }), L.markerClusterGroup = function(t) {
        return new L.MarkerClusterGroup(t)
    };
    var i = L.MarkerCluster = L.Marker.extend({
        options: L.Icon.prototype.options,
        initialize: function(t, e, i, n) {
            L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0), {
                icon: this,
                pane: t.options.clusterPane
            }), this._group = t, this._zoom = e, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._bounds = new L.LatLngBounds, i && this._addChild(i), n && this._addChild(n)
        },
        getAllChildMarkers: function(t) {
            t = t || [];
            for (var e = this._childClusters.length - 1; 0 <= e; e--) this._childClusters[e].getAllChildMarkers(t);
            for (var i = this._markers.length - 1; 0 <= i; i--) t.push(this._markers[i]);
            return t
        },
        getChildCount: function() {
            return this._childCount
        },
        zoomToBounds: function(t) {
            for (var e, i = this._childClusters.slice(), n = this._group._map, o = n.getBoundsZoom(this._bounds), s = this._zoom + 1, r = n.getZoom(); 0 < i.length && s < o;) {
                s++;
                var a = [];
                for (e = 0; e < i.length; e++) a = a.concat(i[e]._childClusters);
                i = a
            }
            s < o ? this._group._map.setView(this._latlng, s) : o <= r ? this._group._map.setView(this._latlng, r + 1) : this._group._map.fitBounds(this._bounds, t)
        },
        getBounds: function() {
            var t = new L.LatLngBounds;
            return t.extend(this._bounds), t
        },
        _updateIcon: function() {
            this._iconNeedsUpdate = !0, this._icon && this.setIcon(this)
        },
        createIcon: function() {
            return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon()
        },
        createShadow: function() {
            return this._iconObj.createShadow()
        },
        _addChild: function(t, e) {
            this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._setClusterCenter(t), t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t), t.__parent = this), this._childCount += t._childCount) : (e || this._markers.push(t), this._childCount++), this.__parent && this.__parent._addChild(t, !0)
        },
        _setClusterCenter: function(t) {
            this._cLatLng || (this._cLatLng = t._cLatLng || t._latlng)
        },
        _resetBounds: function() {
            var t = this._bounds;
            t._southWest && (t._southWest.lat = 1 / 0, t._southWest.lng = 1 / 0), t._northEast && (t._northEast.lat = -1 / 0, t._northEast.lng = -1 / 0)
        },
        _recalculateBounds: function() {
            var t, e, i, n, o = this._markers,
                s = this._childClusters,
                r = 0,
                a = 0,
                h = this._childCount;
            if (0 !== h) {
                for (this._resetBounds(), t = 0; t < o.length; t++) i = o[t]._latlng, this._bounds.extend(i), r += i.lat, a += i.lng;
                for (t = 0; t < s.length; t++)(e = s[t])._boundsNeedUpdate && e._recalculateBounds(), this._bounds.extend(e._bounds), i = e._wLatLng, n = e._childCount, r += i.lat * n, a += i.lng * n;
                this._latlng = this._wLatLng = new L.LatLng(r / h, a / h), this._boundsNeedUpdate = !1
            }
        },
        _addToMap: function(t) {
            t && (this._backupLatlng = this._latlng, this.setLatLng(t)), this._group._featureGroup.addLayer(this)
        },
        _recursivelyAnimateChildrenIn: function(t, o, e) {
            this._recursively(t, this._group._map.getMinZoom(), e - 1, function(t) {
                var e, i, n = t._markers;
                for (e = n.length - 1; 0 <= e; e--)(i = n[e])._icon && (i._setPos(o), i.clusterHide())
            }, function(t) {
                var e, i, n = t._childClusters;
                for (e = n.length - 1; 0 <= e; e--)(i = n[e])._icon && (i._setPos(o), i.clusterHide())
            })
        },
        _recursivelyAnimateChildrenInAndAddSelfToMap: function(e, i, n, o) {
            this._recursively(e, o, i, function(t) {
                t._recursivelyAnimateChildrenIn(e, t._group._map.latLngToLayerPoint(t.getLatLng()).round(), n), t._isSingleParent() && n - 1 === o ? (t.clusterShow(), t._recursivelyRemoveChildrenFromMap(e, i, n)) : t.clusterHide(), t._addToMap()
            })
        },
        _recursivelyBecomeVisible: function(t, e) {
            this._recursively(t, this._group._map.getMinZoom(), e, null, function(t) {
                t.clusterShow()
            })
        },
        _recursivelyAddChildrenToMap: function(n, o, s) {
            this._recursively(s, this._group._map.getMinZoom() - 1, o, function(t) {
                if (o !== t._zoom)
                    for (var e = t._markers.length - 1; 0 <= e; e--) {
                        var i = t._markers[e];
                        s.contains(i._latlng) && (n && (i._backupLatlng = i.getLatLng(), i.setLatLng(n), i.clusterHide && i.clusterHide()), t._group._featureGroup.addLayer(i))
                    }
            }, function(t) {
                t._addToMap(n)
            })
        },
        _recursivelyRestoreChildPositions: function(t) {
            for (var e = this._markers.length - 1; 0 <= e; e--) {
                var i = this._markers[e];
                i._backupLatlng && (i.setLatLng(i._backupLatlng), delete i._backupLatlng)
            }
            if (t - 1 === this._zoom)
                for (var n = this._childClusters.length - 1; 0 <= n; n--) this._childClusters[n]._restorePosition();
            else
                for (var o = this._childClusters.length - 1; 0 <= o; o--) this._childClusters[o]._recursivelyRestoreChildPositions(t)
        },
        _restorePosition: function() {
            this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng)
        },
        _recursivelyRemoveChildrenFromMap: function(t, e, i, n) {
            var o, s;
            this._recursively(t, e - 1, i - 1, function(t) {
                for (s = t._markers.length - 1; 0 <= s; s--) o = t._markers[s], n && n.contains(o._latlng) || (t._group._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow())
            }, function(t) {
                for (s = t._childClusters.length - 1; 0 <= s; s--) o = t._childClusters[s], n && n.contains(o._latlng) || (t._group._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow())
            })
        },
        _recursively: function(t, e, i, n, o) {
            var s, r, a = this._childClusters,
                h = this._zoom;
            if (e <= h && (n && n(this), o && h === i && o(this)), h < e || h < i)
                for (s = a.length - 1; 0 <= s; s--) r = a[s], t.intersects(r._bounds) && r._recursively(t, e, i, n, o)
        },
        _isSingleParent: function() {
            return 0 < this._childClusters.length && this._childClusters[0]._childCount === this._childCount
        }
    });
    L.Marker.include({
        clusterHide: function() {
            return this.options.opacityWhenUnclustered = this.options.opacity || 1, this.setOpacity(0)
        },
        clusterShow: function() {
            var t = this.setOpacity(this.options.opacity || this.options.opacityWhenUnclustered);
            return delete this.options.opacityWhenUnclustered, t
        }
    }), L.DistanceGrid = function(t) {
        this._cellSize = t, this._sqCellSize = t * t, this._grid = {}, this._objectPoint = {}
    }, L.DistanceGrid.prototype = {
        addObject: function(t, e) {
            var i = this._getCoord(e.x),
                n = this._getCoord(e.y),
                o = this._grid,
                s = o[n] = o[n] || {},
                r = s[i] = s[i] || [],
                a = L.Util.stamp(t);
            this._objectPoint[a] = e, r.push(t)
        },
        updateObject: function(t, e) {
            this.removeObject(t), this.addObject(t, e)
        },
        removeObject: function(t, e) {
            var i, n, o = this._getCoord(e.x),
                s = this._getCoord(e.y),
                r = this._grid,
                a = r[s] = r[s] || {},
                h = a[o] = a[o] || [];
            for (delete this._objectPoint[L.Util.stamp(t)], i = 0, n = h.length; i < n; i++)
                if (h[i] === t) return h.splice(i, 1), 1 === n && delete a[o], !0
        },
        eachObject: function(t, e) {
            var i, n, o, s, r, a, h = this._grid;
            for (i in h)
                for (n in r = h[i])
                    for (o = 0, s = (a = r[n]).length; o < s; o++) t.call(e, a[o]) && (o--, s--)
        },
        getNearObject: function(t) {
            var e, i, n, o, s, r, a, h, l = this._getCoord(t.x),
                u = this._getCoord(t.y),
                _ = this._objectPoint,
                c = this._sqCellSize,
                d = null;
            for (e = u - 1; e <= u + 1; e++)
                if (o = this._grid[e])
                    for (i = l - 1; i <= l + 1; i++)
                        if (s = o[i])
                            for (n = 0, r = s.length; n < r; n++) a = s[n], ((h = this._sqDist(_[L.Util.stamp(a)], t)) < c || h <= c && null === d) && (c = h, d = a);
            return d
        },
        _getCoord: function(t) {
            var e = Math.floor(t / this._cellSize);
            return isFinite(e) ? e : t
        },
        _sqDist: function(t, e) {
            var i = e.x - t.x,
                n = e.y - t.y;
            return i * i + n * n
        }
    }, L.QuickHull = {
        getDistant: function(t, e) {
            var i = e[1].lat - e[0].lat;
            return (e[0].lng - e[1].lng) * (t.lat - e[0].lat) + i * (t.lng - e[0].lng)
        },
        findMostDistantPointFromBaseLine: function(t, e) {
            var i, n, o, s = 0,
                r = null,
                a = [];
            for (i = e.length - 1; 0 <= i; i--) n = e[i], 0 < (o = this.getDistant(n, t)) && (a.push(n), s < o && (s = o, r = n));
            return {
                maxPoint: r,
                newPoints: a
            }
        },
        buildConvexHull: function(t, e) {
            var i = [],
                n = this.findMostDistantPointFromBaseLine(t, e);
            return n.maxPoint ? i = (i = i.concat(this.buildConvexHull([t[0], n.maxPoint], n.newPoints))).concat(this.buildConvexHull([n.maxPoint, t[1]], n.newPoints)) : [t[0]]
        },
        getConvexHull: function(t) {
            var e, i = !1,
                n = !1,
                o = !1,
                s = !1,
                r = null,
                a = null,
                h = null,
                l = null,
                u = null,
                _ = null;
            for (e = t.length - 1; 0 <= e; e--) {
                var c = t[e];
                (!1 === i || c.lat > i) && (i = (r = c).lat), (!1 === n || c.lat < n) && (n = (a = c).lat), (!1 === o || c.lng > o) && (o = (h = c).lng), (!1 === s || c.lng < s) && (s = (l = c).lng)
            }
            return n !== i ? (_ = a, u = r) : (_ = l, u = h), [].concat(this.buildConvexHull([_, u], t), this.buildConvexHull([u, _], t))
        }
    }, L.MarkerCluster.include({
        getConvexHull: function() {
            var t, e, i = this.getAllChildMarkers(),
                n = [];
            for (e = i.length - 1; 0 <= e; e--) t = i[e].getLatLng(), n.push(t);
            return L.QuickHull.getConvexHull(n)
        }
    }), L.MarkerCluster.include({
        _2PI: 2 * Math.PI,
        _circleFootSeparation: 25,
        _circleStartAngle: 0,
        _spiralFootSeparation: 28,
        _spiralLengthStart: 11,
        _spiralLengthFactor: 5,
        _circleSpiralSwitchover: 9,
        spiderfy: function() {
            if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
                var t, e = this.getAllChildMarkers(),
                    i = this._group._map.latLngToLayerPoint(this._latlng);
                this._group._unspiderfy(), this._group._spiderfied = this, e.length >= this._circleSpiralSwitchover ? t = this._generatePointsSpiral(e.length, i) : (i.y += 10, t = this._generatePointsCircle(e.length, i)), this._animationSpiderfy(e, t)
            }
        },
        unspiderfy: function(t) {
            this._group._inZoomAnimation || (this._animationUnspiderfy(t), this._group._spiderfied = null)
        },
        _generatePointsCircle: function(t, e) {
            var i, n, o = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t) / this._2PI,
                s = this._2PI / t,
                r = [];
            for (o = Math.max(o, 35), r.length = t, i = 0; i < t; i++) n = this._circleStartAngle + i * s, r[i] = new L.Point(e.x + o * Math.cos(n), e.y + o * Math.sin(n))._round();
            return r
        },
        _generatePointsSpiral: function(t, e) {
            var i, n = this._group.options.spiderfyDistanceMultiplier,
                o = n * this._spiralLengthStart,
                s = n * this._spiralFootSeparation,
                r = n * this._spiralLengthFactor * this._2PI,
                a = 0,
                h = [];
            for (i = h.length = t; 0 <= i; i--) i < t && (h[i] = new L.Point(e.x + o * Math.cos(a), e.y + o * Math.sin(a))._round()), o += r / (a += s / o + 5e-4 * i);
            return h
        },
        _noanimationUnspiderfy: function() {
            var t, e, i = this._group,
                n = i._map,
                o = i._featureGroup,
                s = this.getAllChildMarkers();
            for (i._ignoreMove = !0, this.setOpacity(1), e = s.length - 1; 0 <= e; e--) t = s[e], o.removeLayer(t), t._preSpiderfyLatlng && (t.setLatLng(t._preSpiderfyLatlng), delete t._preSpiderfyLatlng), t.setZIndexOffset && t.setZIndexOffset(0), t._spiderLeg && (n.removeLayer(t._spiderLeg), delete t._spiderLeg);
            i.fire("unspiderfied", {
                cluster: this,
                markers: s
            }), i._ignoreMove = !1, i._spiderfied = null
        }
    }), L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
        _animationSpiderfy: function(t, e) {
            var i, n, o, s, r = this._group,
                a = r._map,
                h = r._featureGroup,
                l = this._group.options.spiderLegPolylineOptions;
            for (r._ignoreMove = !0, i = 0; i < t.length; i++) s = a.layerPointToLatLng(e[i]), n = t[i], o = new L.Polyline([this._latlng, s], l), a.addLayer(o), n._spiderLeg = o, n._preSpiderfyLatlng = n._latlng, n.setLatLng(s), n.setZIndexOffset && n.setZIndexOffset(1e6), h.addLayer(n);
            this.setOpacity(.3), r._ignoreMove = !1, r.fire("spiderfied", {
                cluster: this,
                markers: t
            })
        },
        _animationUnspiderfy: function() {
            this._noanimationUnspiderfy()
        }
    }), L.MarkerCluster.include({
        _animationSpiderfy: function(t, e) {
            var i, n, o, s, r, a, h = this,
                l = this._group,
                u = l._map,
                _ = l._featureGroup,
                c = this._latlng,
                d = u.latLngToLayerPoint(c),
                p = L.Path.SVG,
                m = L.extend({}, this._group.options.spiderLegPolylineOptions),
                f = m.opacity;
            for (void 0 === f && (f = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), p ? (m.opacity = 0, m.className = (m.className || "") + " leaflet-cluster-spider-leg") : m.opacity = f, l._ignoreMove = !0, i = 0; i < t.length; i++) n = t[i], a = u.layerPointToLatLng(e[i]), o = new L.Polyline([c, a], m), u.addLayer(o), n._spiderLeg = o, p && (r = (s = o._path).getTotalLength() + .1, s.style.strokeDasharray = r, s.style.strokeDashoffset = r), n.setZIndexOffset && n.setZIndexOffset(1e6), n.clusterHide && n.clusterHide(), _.addLayer(n), n._setPos && n._setPos(d);
            for (l._forceLayout(), l._animationStart(), i = t.length - 1; 0 <= i; i--) a = u.layerPointToLatLng(e[i]), (n = t[i])._preSpiderfyLatlng = n._latlng, n.setLatLng(a), n.clusterShow && n.clusterShow(), p && ((s = (o = n._spiderLeg)._path).style.strokeDashoffset = 0, o.setStyle({
                opacity: f
            }));
            this.setOpacity(.3), l._ignoreMove = !1, setTimeout(function() {
                l._animationEnd(), l.fire("spiderfied", {
                    cluster: h,
                    markers: t
                })
            }, 200)
        },
        _animationUnspiderfy: function(t) {
            var e, i, n, o, s, r, a = this,
                h = this._group,
                l = h._map,
                u = h._featureGroup,
                _ = t ? l._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : l.latLngToLayerPoint(this._latlng),
                c = this.getAllChildMarkers(),
                d = L.Path.SVG;
            for (h._ignoreMove = !0, h._animationStart(), this.setOpacity(1), i = c.length - 1; 0 <= i; i--)(e = c[i])._preSpiderfyLatlng && (e.closePopup(), e.setLatLng(e._preSpiderfyLatlng), delete e._preSpiderfyLatlng, r = !0, e._setPos && (e._setPos(_), r = !1), e.clusterHide && (e.clusterHide(), r = !1), r && u.removeLayer(e), d && (s = (o = (n = e._spiderLeg)._path).getTotalLength() + .1, o.style.strokeDashoffset = s, n.setStyle({
                opacity: 0
            })));
            h._ignoreMove = !1, setTimeout(function() {
                var t = 0;
                for (i = c.length - 1; 0 <= i; i--)(e = c[i])._spiderLeg && t++;
                for (i = c.length - 1; 0 <= i; i--)(e = c[i])._spiderLeg && (e.clusterShow && e.clusterShow(), e.setZIndexOffset && e.setZIndexOffset(0), 1 < t && u.removeLayer(e), l.removeLayer(e._spiderLeg), delete e._spiderLeg);
                h._animationEnd(), h.fire("unspiderfied", {
                    cluster: a,
                    markers: c
                })
            }, 200)
        }
    }), L.MarkerClusterGroup.include({
        _spiderfied: null,
        unspiderfy: function() {
            this._unspiderfy.apply(this, arguments)
        },
        _spiderfierOnAdd: function() {
            this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Browser.touch || this._map.getRenderer(this)
        },
        _spiderfierOnRemove: function() {
            this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._map.off("zoomend", this._noanimationUnspiderfy, this), this._noanimationUnspiderfy()
        },
        _unspiderfyZoomStart: function() {
            this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this)
        },
        _unspiderfyZoomAnim: function(t) {
            L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(t))
        },
        _unspiderfyWrapper: function() {
            this._unspiderfy()
        },
        _unspiderfy: function(t) {
            this._spiderfied && this._spiderfied.unspiderfy(t)
        },
        _noanimationUnspiderfy: function() {
            this._spiderfied && this._spiderfied._noanimationUnspiderfy()
        },
        _unspiderfyLayer: function(t) {
            t._spiderLeg && (this._featureGroup.removeLayer(t), t.clusterShow && t.clusterShow(), t.setZIndexOffset && t.setZIndexOffset(0), this._map.removeLayer(t._spiderLeg), delete t._spiderLeg)
        }
    }), L.MarkerClusterGroup.include({
        refreshClusters: function(t) {
            return t ? t instanceof L.MarkerClusterGroup ? t = t._topClusterLevel.getAllChildMarkers() : t instanceof L.LayerGroup ? t = t._layers : t instanceof L.MarkerCluster ? t = t.getAllChildMarkers() : t instanceof L.Marker && (t = [t]) : t = this._topClusterLevel.getAllChildMarkers(), this._flagParentsIconsNeedUpdate(t), this._refreshClustersIcons(), this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(t), this
        },
        _flagParentsIconsNeedUpdate: function(t) {
            var e, i;
            for (e in t)
                for (i = t[e].__parent; i;) i._iconNeedsUpdate = !0, i = i.__parent
        },
        _refreshSingleMarkerModeMarkers: function(t) {
            var e, i;
            for (e in t) i = t[e], this.hasLayer(i) && i.setIcon(this._overrideMarkerIcon(i))
        }
    }), L.Marker.include({
        refreshIconOptions: function(t, e) {
            var i = this.options.icon;
            return L.setOptions(i, t), this.setIcon(i), e && this.__parent && this.__parent._group.refreshClusters(this), this
        }
    }), t.MarkerClusterGroup = e, t.MarkerCluster = i
});
"use strict";
window.createMarker = function(r, a, e, t, o, i, n) {
    if (n) {
        var p = L.marker(t, {
            icon: o
        }).bindPopup(i, {
            maxWidth: 550
        });
        return e.push(p), void a.addLayer(p)
    }
    L.marker(t, {
        icon: o
    }).addTo(r).bindPopup(i, {
        maxWidth: 550
    })
}, window.createMap = function(r, a, e, t, o) {
    var i = L.tileLayer("/map/?s={s}&z={z}&x={x}&y={y}", {
            maxZoom: t,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }),
        n = L.latLng(r, a),
        p = 30;
    return o || (p = 0), {
        map: L.map("openimmo-google-map-overview", {
            center: n,
            zoom: e,
            layers: [i]
        }),
        markers: L.markerClusterGroup({
            animateAddingMarkers: !0,
            maxClusterRadius: p,
            showCoverageOnHover: !1,
            //disableClusteringAtZoom: 20
        }),
        markersList: []
    }
};