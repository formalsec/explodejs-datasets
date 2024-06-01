const v107 = function (e) {
    const v85 = typeof exports;
    const v86 = 'object' == v85;
    const v87 = typeof module;
    const v88 = 'undefined' != v87;
    const v89 = v86 && v88;
    if (v89) {
        const v90 = e();
        module.exports = v90;
    } else {
        const v91 = typeof define;
        const v92 = 'function' == v91;
        const v93 = define.amd;
        const v94 = v92 && v93;
        if (v94) {
            const v95 = [];
            const v96 = define(v95, e);
            v96;
        } else {
            var f;
            const v97 = typeof window;
            const v98 = 'undefined' != v97;
            const v99 = typeof global;
            const v100 = 'undefined' != v99;
            const v101 = typeof self;
            const v102 = 'undefined' != v101;
            const v103 = v102 && (f = self);
            let v104;
            if (v100) {
                f = global;
                v104 = f;
            } else {
                v104 = v103;
            }
            let v105;
            if (v98) {
                f = window;
                v105 = f;
            } else {
                v105 = v104;
            }
            const v106 = e();
            v105, f.deepSet = v106;
        }
    }
};
const v166 = function () {
    var define;
    var module;
    var exports;
    const v143 = function e(t, n, r) {
        const s = function (o, u) {
            const v108 = n[o];
            const v109 = !v108;
            if (v109) {
                const v110 = t[o];
                const v111 = !v110;
                if (v111) {
                    const v112 = typeof require;
                    const v113 = v112 == 'function';
                    var a = v113 && require;
                    const v114 = !u;
                    const v115 = v114 && a;
                    if (v115) {
                        const v116 = !0;
                        const v117 = a(o, v116);
                        return v117;
                    }
                    if (i) {
                        const v118 = !0;
                        const v119 = i(o, v118);
                        return v119;
                    }
                    const v120 = 'Cannot find module \'' + o;
                    const v121 = v120 + '\'';
                    var f = new Error(v121);
                    throw f.code = 'MODULE_NOT_FOUND', f;
                }
                const v122 = {};
                const v123 = {};
                v123.exports = v122;
                n[o] = v123;
                var l = n[o];
                const v124 = t[o];
                const v125 = v124[0];
                const v126 = l.exports;
                const v131 = function (e) {
                    const v127 = t[o];
                    const v128 = v127[1];
                    var n = v128[e];
                    let v129;
                    if (n) {
                        v129 = n;
                    } else {
                        v129 = e;
                    }
                    const v130 = s(v129);
                    return v130;
                };
                const v132 = l.exports;
                const v133 = v125.call(v126, v131, l, v132, e, t, n, r);
                v133;
            }
            const v134 = n[o];
            const v135 = v134.exports;
            return v135;
        };
        const v136 = typeof require;
        const v137 = v136 == 'function';
        var i = v137 && require;
        var o = 0;
        const v138 = r.length;
        let v139 = o < v138;
        while (v139) {
            const v141 = r[o];
            const v142 = s(v141);
            v142;
            const v140 = o++;
            v139 = o < v138;
        }
        return s;
    };
    const v158 = function (require, module, exports) {
        const deepSet = function (obj, path, value, create) {
            var properties = path.split('.');
            var currentObject = obj;
            var property;
            const v144 = create === undefined;
            if (v144) {
                create = true;
            } else {
                create = create;
            }
            let v145 = properties.length;
            while (v145) {
                property = properties.shift();
                const v146 = !currentObject;
                if (v146) {
                    break;
                }
                const v147 = currentObject[property];
                const v148 = isObject(v147);
                const v149 = !v148;
                const v150 = v149 && create;
                if (v150) {
                    const v151 = {};
                    currentObject[property] = v151;
                }
                const v152 = properties.length;
                const v153 = !v152;
                if (v153) {
                    currentObject[property] = value;
                }
                currentObject = currentObject[property];
                v145 = properties.length;
            }
            return obj;
        };
        module.exports = deepSet;
        const isObject = function (obj) {
            const v154 = typeof obj;
            const v155 = v154 === 'object';
            const v156 = obj !== null;
            const v157 = v155 && v156;
            return v157;
        };
    };
    const v159 = {};
    const v160 = [
        v158,
        v159
    ];
    const v161 = { 1: v160 };
    const v162 = {};
    const v163 = [1];
    const v164 = v143(v161, v162, v163);
    const v165 = v164(1);
    return v165;
};
const v167 = v107(v166);
const v168 = !v167;
v168;