'use strict';
const undefsafe = function (obj, path, value, __res) {
    const split = function (path) {
        var res = [];
        var level = 0;
        var key = '';
        var i = 0;
        const v60 = path.length;
        let v61 = i < v60;
        while (v61) {
            var c = path.substr(i, 1);
            const v63 = level === 0;
            const v64 = c === '.';
            const v65 = c === '[';
            const v66 = v64 || v65;
            const v67 = v63 && v66;
            if (v67) {
                const v68 = c === '[';
                if (v68) {
                    const v69 = level++;
                    v69;
                    const v70 = i++;
                    v70;
                    c = path.substr(i, 1);
                }
                if (key) {
                    const v71 = res.push(key);
                    v71;
                }
                key = '';
                continue;
            }
            const v72 = c === ']';
            if (v72) {
                const v73 = level--;
                v73;
                const v74 = -1;
                key = key.slice(0, v74);
                continue;
            }
            key += c;
            const v62 = i++;
            v61 = i < v60;
        }
        const v75 = res.push(key);
        v75;
        return res;
    };
    const v76 = obj === undefined;
    const v77 = obj === null;
    const v78 = v76 || v77;
    if (v78) {
        return undefined;
    }
    var parts = split(path);
    var key = null;
    const v79 = typeof obj;
    var type = v79;
    var root = obj;
    var parent = obj;
    const v81 = function (_) {
        const v80 = _ === '*';
        return v80;
    };
    const v82 = parts.filter(v81);
    const v83 = v82.length;
    var star = v83 > 0;
    const v84 = type !== 'object';
    const v85 = type !== 'function';
    const v86 = v84 && v85;
    if (v86) {
        return obj;
    } else {
        const v87 = path.trim();
        const v88 = v87 === '';
        if (v88) {
            return obj;
        }
    }
    key = parts[0];
    var i = 0;
    const v89 = parts.length;
    let v90 = i < v89;
    while (v90) {
        key = parts[i];
        parent = obj;
        const v92 = key === '*';
        if (v92) {
            var prop = '';
            const v93 = [];
            var res = __res || v93;
            for (prop in parent) {
                const v94 = obj[prop];
                const v95 = i + 1;
                const v96 = parts.slice(v95);
                const v97 = v96.join('.');
                var shallowObj = undefsafe(v94, v97, value, res);
                const v98 = shallowObj !== res;
                const v99 = shallowObj && v98;
                if (v99) {
                    const v100 = shallowObj === value;
                    const v101 = value && v100;
                    const v102 = value === undefined;
                    const v103 = v101 || v102;
                    if (v103) {
                        const v104 = value !== undefined;
                        if (v104) {
                            return shallowObj;
                        }
                        const v105 = res.push(shallowObj);
                        v105;
                    }
                }
            }
            const v106 = res.length;
            const v107 = v106 === 0;
            if (v107) {
                return undefined;
            }
            return res;
        }
        obj = obj[key];
        const v108 = obj === undefined;
        const v109 = obj === null;
        const v110 = v108 || v109;
        if (v110) {
            break;
        }
        const v91 = i++;
        v90 = i < v89;
    }
    const v111 = obj === null;
    const v112 = parts.length;
    const v113 = v112 - 1;
    const v114 = i !== v113;
    const v115 = v111 && v114;
    if (v115) {
        obj = undefined;
    } else {
        const v116 = !star;
        const v117 = v116 && value;
        if (v117) {
            const v118 = path.split('.');
            key = v118.pop();
            parent[key] = value;
        }
    }
    return obj;
};
module.exports = undefsafe;