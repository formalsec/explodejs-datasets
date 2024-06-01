'use strict';
const undefsafe = function (obj, path, value, __res) {
    const split = function (path) {
        var res = [];
        var level = 0;
        var key = '';
        var i = 0;
        const v62 = path.length;
        let v63 = i < v62;
        while (v63) {
            var c = path.substr(i, 1);
            const v65 = level === 0;
            const v66 = c === '.';
            const v67 = c === '[';
            const v68 = v66 || v67;
            const v69 = v65 && v68;
            if (v69) {
                const v70 = c === '[';
                if (v70) {
                    const v71 = level++;
                    v71;
                    const v72 = i++;
                    v72;
                    c = path.substr(i, 1);
                }
                if (key) {
                    const v73 = res.push(key);
                    v73;
                }
                key = '';
                continue;
            }
            const v74 = c === ']';
            if (v74) {
                const v75 = level--;
                v75;
                const v76 = -1;
                key = key.slice(0, v76);
                continue;
            }
            key += c;
            const v64 = i++;
            v63 = i < v62;
        }
        const v77 = res.push(key);
        v77;
        return res;
    };
    const v78 = obj === undefined;
    const v79 = obj === null;
    const v80 = v78 || v79;
    if (v80) {
        return undefined;
    }
    var parts = split(path);
    var key = null;
    const v81 = typeof obj;
    var type = v81;
    var root = obj;
    var parent = obj;
    const v83 = function (_) {
        const v82 = _ === '*';
        return v82;
    };
    const v84 = parts.filter(v83);
    const v85 = v84.length;
    var star = v85 > 0;
    const v86 = type !== 'object';
    const v87 = type !== 'function';
    const v88 = v86 && v87;
    if (v88) {
        return obj;
    } else {
        const v89 = path.trim();
        const v90 = v89 === '';
        if (v90) {
            return obj;
        }
    }
    key = parts[0];
    var i = 0;
    const v91 = parts.length;
    let v92 = i < v91;
    while (v92) {
        key = parts[i];
        parent = obj;
        const v94 = key === '*';
        if (v94) {
            var prop = '';
            const v95 = [];
            var res = __res || v95;
            for (prop in parent) {
                const v96 = obj[prop];
                const v97 = i + 1;
                const v98 = parts.slice(v97);
                const v99 = v98.join('.');
                var shallowObj = undefsafe(v96, v99, value, res);
                const v100 = shallowObj !== res;
                const v101 = shallowObj && v100;
                if (v101) {
                    const v102 = shallowObj === value;
                    const v103 = value && v102;
                    const v104 = value === undefined;
                    const v105 = v103 || v104;
                    if (v105) {
                        const v106 = value !== undefined;
                        if (v106) {
                            return shallowObj;
                        }
                        const v107 = res.push(shallowObj);
                        v107;
                    }
                }
            }
            const v108 = res.length;
            const v109 = v108 === 0;
            if (v109) {
                return undefined;
            }
            return res;
        }
        obj = obj[key];
        const v110 = obj === undefined;
        const v111 = obj === null;
        const v112 = v110 || v111;
        if (v112) {
            break;
        }
        const v93 = i++;
        v92 = i < v91;
    }
    const v113 = obj === null;
    const v114 = parts.length;
    const v115 = v114 - 1;
    const v116 = i !== v115;
    const v117 = v113 && v116;
    if (v117) {
        obj = undefined;
    } else {
        const v118 = !star;
        const v119 = v118 && value;
        if (v119) {
            const v120 = path.split('.');
            key = v120.pop();
            parent[key] = value;
        }
    }
    return obj;
};
const v121 = typeof module;
const v122 = v121 !== 'undefined';
if (v122) {
    module.exports = undefsafe;
}