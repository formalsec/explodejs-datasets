'use strict';
var eachProps = require('each-props');
var isPlainObject = require('is-plain-object');
const v108 = function (src, dst, fromto, converter, reverse) {
    const v89 = isObject(src);
    const v90 = !v89;
    if (v90) {
        src = {};
    }
    const v91 = isObject(dst);
    const v92 = !v91;
    if (v92) {
        dst = {};
    }
    const v93 = isPlainObject(fromto);
    if (v93) {
        fromto = onlyValueIsString(fromto);
    } else {
        const v94 = Array.isArray(fromto);
        if (v94) {
            fromto = arrayToObject(fromto);
        } else {
            const v95 = typeof fromto;
            const v96 = v95 === 'boolean';
            if (v96) {
                reverse = fromto;
                converter = noop;
                fromto = null;
            } else {
                const v97 = typeof fromto;
                const v98 = v97 === 'function';
                if (v98) {
                    reverse = converter;
                    converter = fromto;
                    fromto = null;
                } else {
                    fromto = null;
                }
            }
        }
    }
    const v99 = typeof converter;
    const v100 = v99 !== 'function';
    if (v100) {
        const v101 = typeof converter;
        const v102 = v101 === 'boolean';
        if (v102) {
            reverse = converter;
            converter = noop;
        } else {
            converter = noop;
        }
    }
    const v103 = typeof reverse;
    const v104 = v103 !== 'boolean';
    if (v104) {
        reverse = false;
    }
    if (reverse) {
        var tmp = src;
        src = dst;
        dst = tmp;
        if (fromto) {
            fromto = invert(fromto);
        }
    }
    var opts = {};
    opts.dest = dst;
    opts.fromto = fromto;
    opts.convert = converter;
    if (fromto) {
        const v105 = eachProps(src, copyWithFromto, opts);
        v105;
        const v106 = setParentEmptyObject(dst, fromto);
        v106;
    } else {
        const v107 = eachProps(src, copyWithoutFromto, opts);
        v107;
    }
    return dst;
};
module.exports = v108;
const copyWithFromto = function (value, keyChain, nodeInfo) {
    const v109 = isPlainObject(value);
    if (v109) {
        return;
    }
    const v110 = nodeInfo.fromto;
    var dstKeyChains = v110[keyChain];
    const v111 = !dstKeyChains;
    if (v111) {
        return;
    }
    const v112 = nodeInfo.fromto;
    const v113 = v112[keyChain];
    const v114 = delete v113;
    v114;
    const v115 = Array.isArray(dstKeyChains);
    const v116 = !v115;
    if (v116) {
        dstKeyChains = [dstKeyChains];
    }
    const v117 = nodeInfo.name;
    const v118 = nodeInfo.depth;
    const v119 = nodeInfo.parent;
    var srcInfo = {};
    srcInfo.keyChain = keyChain;
    srcInfo.value = value;
    srcInfo.key = v117;
    srcInfo.depth = v118;
    srcInfo.parent = v119;
    var i = 0;
    var n = dstKeyChains.length;
    let v120 = i < n;
    while (v120) {
        const v122 = nodeInfo.dest;
        const v123 = dstKeyChains[i];
        const v127 = function (parent, key, depth) {
            const v124 = dstKeyChains[i];
            const v125 = parent[key];
            var dstInfo = {};
            dstInfo.keyChain = v124;
            dstInfo.value = v125;
            dstInfo.key = key;
            dstInfo.depth = depth;
            dstInfo.parent = parent;
            const v126 = nodeInfo.convert(srcInfo, dstInfo);
            return v126;
        };
        const v128 = setDeep(v122, v123, v127);
        v128;
        const v121 = i++;
        v120 = i < n;
    }
};
const copyWithoutFromto = function (value, keyChain, nodeInfo) {
    const v129 = isPlainObject(value);
    if (v129) {
        let k;
        for (k in value) {
            return;
        }
        const v130 = nodeInfo.dest;
        const v131 = setDeep(v130, keyChain, newObject);
        v131;
        return;
    }
    const v132 = nodeInfo.name;
    const v133 = nodeInfo.depth;
    const v134 = nodeInfo.parent;
    var srcInfo = {};
    srcInfo.keyChain = keyChain;
    srcInfo.value = value;
    srcInfo.key = v132;
    srcInfo.depth = v133;
    srcInfo.parent = v134;
    const v135 = nodeInfo.dest;
    const v138 = function (parent, key, depth) {
        const v136 = parent[key];
        var dstInfo = {};
        dstInfo.keyChain = keyChain;
        dstInfo.value = v136;
        dstInfo.key = key;
        dstInfo.depth = depth;
        dstInfo.parent = parent;
        const v137 = nodeInfo.convert(srcInfo, dstInfo);
        return v137;
    };
    const v139 = setDeep(v135, keyChain, v138);
    v139;
};
const newObject = function () {
    const v140 = {};
    return v140;
};
const noop = function (srcInfo) {
    const v141 = srcInfo.value;
    return v141;
};
const onlyValueIsString = function (obj) {
    var newObj = {};
    let key;
    for (key in obj) {
        var val = obj[key];
        const v142 = typeof val;
        const v143 = v142 === 'string';
        if (v143) {
            newObj[key] = val;
        }
    }
    return newObj;
};
const arrayToObject = function (arr) {
    var obj = {};
    var i = 0;
    var n = arr.length;
    let v144 = i < n;
    while (v144) {
        var elm = arr[i];
        const v146 = typeof elm;
        const v147 = v146 === 'string';
        if (v147) {
            obj[elm] = elm;
        }
        const v145 = i++;
        v144 = i < n;
    }
    return obj;
};
const invert = function (fromto) {
    var inv = {};
    let key;
    for (key in fromto) {
        var val = fromto[key];
        const v148 = inv[val];
        const v149 = !v148;
        if (v149) {
            inv[val] = [];
        }
        const v150 = inv[val];
        const v151 = v150.push(key);
        v151;
    }
    return inv;
};
const setDeep = function (obj, keyChain, valueCreator) {
    const v152 = keyChain.split('.');
    const v153 = _setDeep(obj, v152, 1, valueCreator);
    v153;
};
const _setDeep = function (obj, keyElems, depth, valueCreator) {
    var key = keyElems.shift();
    const v154 = keyElems.length;
    const v155 = !v154;
    if (v155) {
        var value = valueCreator(obj, key, depth);
        const v156 = value === undefined;
        if (v156) {
            return;
        }
        const v157 = isPlainObject(value);
        if (v157) {
            const v158 = obj[key];
            const v159 = isPlainObject(v158);
            if (v159) {
                return;
            }
        }
        obj[key] = value;
        return;
    }
    const v160 = obj[key];
    const v161 = isPlainObject(v160);
    const v162 = !v161;
    if (v162) {
        const v163 = {};
        obj[key] = v163;
    }
    const v164 = obj[key];
    const v165 = depth + 1;
    const v166 = _setDeep(v164, keyElems, v165, valueCreator);
    v166;
};
const setParentEmptyObject = function (obj, fromto) {
    let srcKeyChain;
    for (srcKeyChain in fromto) {
        var dstKeyChains = fromto[srcKeyChain];
        const v167 = Array.isArray(dstKeyChains);
        const v168 = !v167;
        if (v168) {
            dstKeyChains = [dstKeyChains];
        }
        var i = 0;
        var n = dstKeyChains.length;
        let v169 = i < n;
        while (v169) {
            const v171 = dstKeyChains[i];
            const v172 = setDeep(obj, v171, newUndefined);
            v172;
            const v170 = i++;
            v169 = i < n;
        }
    }
};
const newUndefined = function () {
    return undefined;
};
const isObject = function (v) {
    const v173 = Object.prototype;
    const v174 = v173.toString;
    const v175 = v174.call(v);
    const v176 = v175 === '[object Object]';
    return v176;
};