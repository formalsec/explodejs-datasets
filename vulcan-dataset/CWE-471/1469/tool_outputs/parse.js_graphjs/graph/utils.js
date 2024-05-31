'use strict';
const v8 = function () {
    var array = new Array(256);
    var i = 0;
    let v1 = i < 256;
    while (v1) {
        const v3 = i < 16;
        let v4;
        if (v3) {
            v4 = '0';
        } else {
            v4 = '';
        }
        const v5 = i.toString(16);
        const v6 = v4 + v5;
        const v7 = v6.toUpperCase();
        array[i] = '%' + v7;
        const v2 = ++i;
        v1 = i < 256;
    }
    return array;
};
var hexTable = v8();
const v19 = function (source, options) {
    let obj;
    const v9 = options.plainObjects;
    const v10 = Object.create(null);
    const v11 = {};
    if (v9) {
        obj = v10;
    } else {
        obj = v11;
    }
    var i = 0;
    const v12 = source.length;
    let v13 = i < v12;
    while (v13) {
        const v15 = source[i];
        const v16 = typeof v15;
        const v17 = v16 !== 'undefined';
        if (v17) {
            const v18 = source[i];
            obj[i] = v18;
        }
        const v14 = ++i;
        v13 = i < v12;
    }
    return obj;
};
exports.arrayToObject = v19;
const v44 = function (target, source, options) {
    const v20 = !source;
    if (v20) {
        return target;
    }
    const v21 = typeof source;
    const v22 = v21 !== 'object';
    if (v22) {
        const v23 = Array.isArray(target);
        if (v23) {
            const v24 = target.push(source);
            v24;
        } else {
            const v25 = typeof target;
            const v26 = v25 === 'object';
            if (v26) {
                target[source] = true;
            } else {
                const v27 = [
                    target,
                    source
                ];
                return v27;
            }
        }
        return target;
    }
    const v28 = typeof target;
    const v29 = v28 !== 'object';
    if (v29) {
        const v30 = [target];
        const v31 = v30.concat(source);
        return v31;
    }
    var mergeTarget = target;
    const v32 = Array.isArray(target);
    const v33 = Array.isArray(source);
    const v34 = !v33;
    const v35 = v32 && v34;
    if (v35) {
        mergeTarget = exports.arrayToObject(target, options);
    }
    const v36 = Object.keys(source);
    const v42 = function (acc, key) {
        var value = source[key];
        const v37 = Object.prototype;
        const v38 = v37.hasOwnProperty;
        const v39 = v38.call(acc, key);
        if (v39) {
            const v40 = acc[key];
            const v41 = exports.merge(v40, value, options);
            acc[key] = v41;
        } else {
            acc[key] = value;
        }
        return acc;
    };
    const v43 = v36.reduce(v42, mergeTarget);
    return v43;
};
exports.merge = v44;
const v47 = function (str) {
    try {
        const v45 = str.replace(/\+/g, ' ');
        const v46 = decodeURIComponent(v45);
        return v46;
    } catch (e) {
        return str;
    }
};
exports.decode = v47;
const v121 = function (str) {
    const v48 = str.length;
    const v49 = v48 === 0;
    if (v49) {
        return str;
    }
    let string;
    const v50 = typeof str;
    const v51 = v50 === 'string';
    const v52 = String(str);
    if (v51) {
        string = str;
    } else {
        string = v52;
    }
    var out = '';
    var i = 0;
    const v53 = string.length;
    let v54 = i < v53;
    while (v54) {
        var c = string.charCodeAt(i);
        const v56 = c === 45;
        const v57 = c === 46;
        const v58 = v56 || v57;
        const v59 = c === 95;
        const v60 = v58 || v59;
        const v61 = c === 126;
        const v62 = v60 || v61;
        const v63 = c >= 48;
        const v64 = c <= 57;
        const v65 = v63 && v64;
        const v66 = v62 || v65;
        const v67 = c >= 65;
        const v68 = c <= 90;
        const v69 = v67 && v68;
        const v70 = v66 || v69;
        const v71 = c >= 97;
        const v72 = c <= 122;
        const v73 = v71 && v72;
        const v74 = v70 || v73;
        if (v74) {
            out += string.charAt(i);
            continue;
        }
        const v75 = c < 128;
        if (v75) {
            const v76 = hexTable[c];
            out = out + v76;
            continue;
        }
        const v77 = c < 2048;
        if (v77) {
            const v78 = c >> 6;
            const v79 = 192 | v78;
            const v80 = hexTable[v79];
            const v81 = c & 63;
            const v82 = 128 | v81;
            const v83 = hexTable[v82];
            const v84 = v80 + v83;
            out = out + v84;
            continue;
        }
        const v85 = c < 55296;
        const v86 = c >= 57344;
        const v87 = v85 || v86;
        if (v87) {
            const v88 = c >> 12;
            const v89 = 224 | v88;
            const v90 = hexTable[v89];
            const v91 = c >> 6;
            const v92 = v91 & 63;
            const v93 = 128 | v92;
            const v94 = hexTable[v93];
            const v95 = v90 + v94;
            const v96 = c & 63;
            const v97 = 128 | v96;
            const v98 = hexTable[v97];
            const v99 = v95 + v98;
            out = out + v99;
            continue;
        }
        i += 1;
        const v100 = c & 1023;
        const v101 = v100 << 10;
        const v102 = string.charCodeAt(i);
        const v103 = v102 & 1023;
        const v104 = v101 | v103;
        c = 65536 + v104;
        const v105 = c >> 18;
        const v106 = 240 | v105;
        const v107 = hexTable[v106];
        const v108 = c >> 12;
        const v109 = v108 & 63;
        const v110 = 128 | v109;
        const v111 = hexTable[v110];
        const v112 = v107 + v111;
        const v113 = c >> 6;
        const v114 = v113 & 63;
        const v115 = 128 | v114;
        const v116 = hexTable[v115];
        const v117 = v112 + v116;
        const v118 = c & 63;
        const v119 = 128 | v118;
        const v120 = hexTable[v119];
        out += v117 + v120;
        const v55 = ++i;
        v54 = i < v53;
    }
    return out;
};
exports.encode = v121;
const v153 = function (obj, references) {
    const v122 = typeof obj;
    const v123 = v122 !== 'object';
    const v124 = obj === null;
    const v125 = v123 || v124;
    if (v125) {
        return obj;
    }
    const v126 = [];
    var refs = references || v126;
    var lookup = refs.indexOf(obj);
    const v127 = -1;
    const v128 = lookup !== v127;
    if (v128) {
        const v129 = refs[lookup];
        return v129;
    }
    const v130 = refs.push(obj);
    v130;
    const v131 = Array.isArray(obj);
    if (v131) {
        var compacted = [];
        var i = 0;
        const v132 = obj.length;
        let v133 = i < v132;
        while (v133) {
            const v135 = obj[i];
            const v136 = obj[i];
            const v137 = typeof v136;
            const v138 = v137 === 'object';
            const v139 = v135 && v138;
            if (v139) {
                const v140 = obj[i];
                const v141 = exports.compact(v140, refs);
                const v142 = compacted.push(v141);
                v142;
            } else {
                const v143 = obj[i];
                const v144 = typeof v143;
                const v145 = v144 !== 'undefined';
                if (v145) {
                    const v146 = obj[i];
                    const v147 = compacted.push(v146);
                    v147;
                }
            }
            const v134 = ++i;
            v133 = i < v132;
        }
        return compacted;
    }
    var keys = Object.keys(obj);
    var j = 0;
    const v148 = keys.length;
    let v149 = j < v148;
    while (v149) {
        var key = keys[j];
        const v151 = obj[key];
        const v152 = exports.compact(v151, refs);
        obj[key] = v152;
        const v150 = ++j;
        v149 = j < v148;
    }
    return obj;
};
exports.compact = v153;
const v158 = function (obj) {
    const v154 = Object.prototype;
    const v155 = v154.toString;
    const v156 = v155.call(obj);
    const v157 = v156 === '[object RegExp]';
    return v157;
};
exports.isRegExp = v158;
const v172 = function (obj) {
    const v159 = obj === null;
    const v160 = typeof obj;
    const v161 = v160 === 'undefined';
    const v162 = v159 || v161;
    if (v162) {
        return false;
    }
    const v163 = obj.constructor;
    const v164 = obj.constructor;
    const v165 = v164.isBuffer;
    const v166 = v163 && v165;
    const v167 = obj.constructor;
    const v168 = v167.isBuffer(obj);
    const v169 = v166 && v168;
    const v170 = !v169;
    const v171 = !v170;
    return v171;
};
exports.isBuffer = v172;