!(function(e) {
    var o = {};

    function n(t) {
        if (o[t]) return o[t].exports;
        var r = (o[t] = { i: t, l: !1, exports: {} });
        return e[t].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
    (n.c = o),
    (n.d = function(e, o, t) {
        n.o(e, o) || Object.defineProperty(e, o, { configurable: !1, enumerable: !0, get: t });
    }),
    (n.r = function(e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.n = function(e) {
        var o =
            e && e.__esModule ?

            function() {
                return e.default;
            } :
            function() {
                return e;
            };
        return n.d(o, "a", o), o;
    }),
    (n.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
    function(e, o) {
        let { x: n, y: t, ...r } = { x: 1, y: 2, a: 3, b: 4 };
        [1, 2, 3].map(e => console.log(e)), console.log(n), console.log(t), console.log(r);
    }
]);