'use strict';
const isObject = function (val) {
    const v97 = val != null;
    const v98 = typeof val;
    const v99 = v98 === 'object';
    const v100 = v97 && v99;
    const v101 = Array.isArray(val);
    const v102 = v101 === false;
    const v103 = v100 && v102;
    return v103;
};
const isObjectObject = function (o) {
    const v104 = isObject(o);
    const v105 = v104 === true;
    const v106 = Object.prototype;
    const v107 = v106.toString;
    const v108 = v107.call(o);
    const v109 = v108 === '[object Object]';
    const v110 = v105 && v109;
    return v110;
};
const isPlain = function (o) {
    var ctor;
    var prot;
    const v111 = isObjectObject(o);
    const v112 = v111 === false;
    if (v112) {
        return false;
    }
    ctor = o.constructor;
    const v113 = typeof ctor;
    const v114 = v113 !== 'function';
    if (v114) {
        return false;
    }
    prot = ctor.prototype;
    const v115 = isObjectObject(prot);
    const v116 = v115 === false;
    if (v116) {
        return false;
    }
    const v117 = prot.hasOwnProperty('isPrototypeOf');
    const v118 = v117 === false;
    if (v118) {
        return false;
    }
    return true;
};
const set = function (target, path, value, options) {
    const v119 = isObject(target);
    const v120 = !v119;
    if (v120) {
        return target;
    }
    const v121 = {};
    let opts = options || v121;
    const isArray = Array.isArray(path);
    const v122 = !isArray;
    const v123 = typeof path;
    const v124 = v123 !== 'string';
    const v125 = v122 && v124;
    if (v125) {
        return target;
    }
    let merge = opts.merge;
    const v126 = typeof merge;
    const v127 = v126 !== 'function';
    const v128 = merge && v127;
    if (v128) {
        merge = Object.assign;
    }
    let keys;
    const v129 = split(path, opts);
    if (isArray) {
        keys = path;
    } else {
        keys = v129;
    }
    const len = keys.length;
    const orig = target;
    const v130 = !options;
    const v131 = keys.length;
    const v132 = v131 === 1;
    const v133 = v130 && v132;
    if (v133) {
        const v134 = keys[0];
        const v135 = result(target, v134, value, merge);
        v135;
        return target;
    }
    let i = 0;
    let v136 = i < len;
    while (v136) {
        let prop = keys[i];
        const v138 = target[prop];
        const v139 = isObject(v138);
        const v140 = !v139;
        if (v140) {
            const v141 = {};
            target[prop] = v141;
        }
        const v142 = len - 1;
        const v143 = i === v142;
        if (v143) {
            const v144 = result(target, prop, value, merge);
            v144;
            break;
        }
        target = target[prop];
        const v137 = i++;
        v136 = i < len;
    }
    return orig;
};
const result = function (target, path, value, merge) {
    const v145 = target[path];
    const v146 = isPlain(v145);
    const v147 = merge && v146;
    const v148 = isPlain(value);
    const v149 = v147 && v148;
    if (v149) {
        const v150 = {};
        const v151 = target[path];
        const v152 = merge(v150, v151, value);
        target[path] = v152;
    } else {
        target[path] = value;
    }
};
const split = function (path, options) {
    const id = createKey(path, options);
    const v153 = set.memo;
    const v154 = v153[id];
    if (v154) {
        const v155 = set.memo;
        const v156 = v155[id];
        return v156;
    }
    let char;
    const v157 = options.separator;
    const v158 = options && v157;
    const v159 = options.separator;
    if (v158) {
        char = v159;
    } else {
        char = '.';
    }
    let keys = [];
    let res = [];
    const v160 = options.split;
    const v161 = typeof v160;
    const v162 = v161 === 'function';
    const v163 = options && v162;
    if (v163) {
        keys = options.split(path);
    } else {
        keys = path.split(char);
    }
    let i = 0;
    const v164 = keys.length;
    let v165 = i < v164;
    while (v165) {
        let prop = keys[i];
        const v167 = -1;
        const v168 = prop.slice(v167);
        const v169 = v168 === '\\';
        const v170 = prop && v169;
        const v171 = i + 1;
        const v172 = keys[v171];
        let v173 = v170 && v172;
        while (v173) {
            const v174 = -1;
            const v175 = prop.slice(0, v174);
            const v176 = v175 + char;
            const v177 = ++i;
            const v178 = keys[v177];
            prop = v176 + v178;
            v173 = v170 && v172;
        }
        const v179 = res.push(prop);
        v179;
        const v166 = i++;
        v165 = i < v164;
    }
    const v180 = set.memo;
    v180[id] = res;
    return res;
};
const createKey = function (pattern, options) {
    let id = pattern;
    const v181 = typeof options;
    const v182 = v181 === 'undefined';
    if (v182) {
        const v183 = id + '';
        return v183;
    }
    const keys = Object.keys(options);
    let i = 0;
    const v184 = keys.length;
    let v185 = i < v184;
    while (v185) {
        const key = keys[i];
        const v187 = ';' + key;
        const v188 = v187 + '=';
        const v189 = options[key];
        const v190 = String(v189);
        id += v188 + v190;
        const v186 = i++;
        v185 = i < v184;
    }
    return id;
};
const isObject = function (val) {
    const v191 = typeof val;
    switch (v191) {
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
const v192 = {};
set.memo = v192;
module.exports = set;