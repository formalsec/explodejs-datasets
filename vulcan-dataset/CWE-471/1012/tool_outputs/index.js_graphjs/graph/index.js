'use strict';
const isPlain = require('is-plain-object');
const set = function (target, path, value, options) {
    const v75 = isObject(target);
    const v76 = !v75;
    if (v76) {
        return target;
    }
    const v77 = {};
    let opts = options || v77;
    const isArray = Array.isArray(path);
    const v78 = !isArray;
    const v79 = typeof path;
    const v80 = v79 !== 'string';
    const v81 = v78 && v80;
    if (v81) {
        return target;
    }
    let merge = opts.merge;
    const v82 = typeof merge;
    const v83 = v82 !== 'function';
    const v84 = merge && v83;
    if (v84) {
        merge = Object.assign;
    }
    let keys;
    const v85 = split(path, opts);
    if (isArray) {
        keys = path;
    } else {
        keys = v85;
    }
    const len = keys.length;
    const orig = target;
    const v86 = !options;
    const v87 = keys.length;
    const v88 = v87 === 1;
    const v89 = v86 && v88;
    if (v89) {
        const v90 = keys[0];
        const v91 = result(target, v90, value, merge);
        v91;
        return target;
    }
    let i = 0;
    let v92 = i < len;
    while (v92) {
        let prop = keys[i];
        const v94 = target[prop];
        const v95 = isObject(v94);
        const v96 = !v95;
        if (v96) {
            const v97 = {};
            target[prop] = v97;
        }
        const v98 = len - 1;
        const v99 = i === v98;
        if (v99) {
            const v100 = result(target, prop, value, merge);
            v100;
            break;
        }
        target = target[prop];
        const v93 = i++;
        v92 = i < len;
    }
    return orig;
};
const result = function (target, path, value, merge) {
    const v101 = target[path];
    const v102 = isPlain(v101);
    const v103 = merge && v102;
    const v104 = isPlain(value);
    const v105 = v103 && v104;
    if (v105) {
        const v106 = {};
        const v107 = target[path];
        const v108 = merge(v106, v107, value);
        target[path] = v108;
    } else {
        target[path] = value;
    }
};
const split = function (path, options) {
    const id = createKey(path, options);
    const v109 = set.memo;
    const v110 = v109[id];
    if (v110) {
        const v111 = set.memo;
        const v112 = v111[id];
        return v112;
    }
    let char;
    const v113 = options.separator;
    const v114 = options && v113;
    const v115 = options.separator;
    if (v114) {
        char = v115;
    } else {
        char = '.';
    }
    let keys = [];
    let res = [];
    const v116 = options.split;
    const v117 = typeof v116;
    const v118 = v117 === 'function';
    const v119 = options && v118;
    if (v119) {
        keys = options.split(path);
    } else {
        keys = path.split(char);
    }
    let i = 0;
    const v120 = keys.length;
    let v121 = i < v120;
    while (v121) {
        let prop = keys[i];
        const v123 = -1;
        const v124 = prop.slice(v123);
        const v125 = v124 === '\\';
        const v126 = prop && v125;
        const v127 = i + 1;
        const v128 = keys[v127];
        let v129 = v126 && v128;
        while (v129) {
            const v130 = -1;
            const v131 = prop.slice(0, v130);
            const v132 = v131 + char;
            const v133 = ++i;
            const v134 = keys[v133];
            prop = v132 + v134;
            v129 = v126 && v128;
        }
        const v135 = res.push(prop);
        v135;
        const v122 = i++;
        v121 = i < v120;
    }
    const v136 = set.memo;
    v136[id] = res;
    return res;
};
const createKey = function (pattern, options) {
    let id = pattern;
    const v137 = typeof options;
    const v138 = v137 === 'undefined';
    if (v138) {
        const v139 = id + '';
        return v139;
    }
    const keys = Object.keys(options);
    let i = 0;
    const v140 = keys.length;
    let v141 = i < v140;
    while (v141) {
        const key = keys[i];
        const v143 = ';' + key;
        const v144 = v143 + '=';
        const v145 = options[key];
        const v146 = String(v145);
        id += v144 + v146;
        const v142 = i++;
        v141 = i < v140;
    }
    return id;
};
const isObject = function (val) {
    const v147 = typeof val;
    switch (v147) {
    case 'null':
        return false;
    case 'object':
        return true;
    case 'function':
        return true;
    default: {
            return false;
        }
    }
};
const v148 = {};
set.memo = v148;
module.exports = set;