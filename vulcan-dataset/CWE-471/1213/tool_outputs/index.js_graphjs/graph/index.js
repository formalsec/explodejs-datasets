'use strict';
const isObj = require('is-obj');
const getPathSegments = function (path) {
    const pathArray = path.split('.');
    const parts = [];
    let i = 0;
    const v86 = pathArray.length;
    let v87 = i < v86;
    while (v87) {
        let p = pathArray[i];
        const v89 = p.length;
        const v90 = v89 - 1;
        const v91 = p[v90];
        const v92 = v91 === '\\';
        const v93 = i + 1;
        const v94 = pathArray[v93];
        const v95 = v94 !== undefined;
        let v96 = v92 && v95;
        while (v96) {
            const v97 = -1;
            const v98 = p.slice(0, v97);
            p = v98 + '.';
            const v99 = ++i;
            p += pathArray[v99];
            v96 = v92 && v95;
        }
        const v100 = parts.push(p);
        v100;
        const v88 = i++;
        v87 = i < v86;
    }
    return parts;
};
const v123 = function (object, path, value) {
    const v101 = isObj(object);
    const v102 = !v101;
    const v103 = typeof path;
    const v104 = v103 !== 'string';
    const v105 = v102 || v104;
    if (v105) {
        const v106 = value === undefined;
        let v107;
        if (v106) {
            v107 = object;
        } else {
            v107 = value;
        }
        return v107;
    }
    const pathArray = getPathSegments(path);
    let i = 0;
    const v108 = pathArray.length;
    let v109 = i < v108;
    while (v109) {
        const v111 = Object.prototype;
        const v112 = v111.propertyIsEnumerable;
        const v113 = pathArray[i];
        const v114 = v112.call(object, v113);
        const v115 = !v114;
        if (v115) {
            return value;
        }
        const v116 = pathArray[i];
        object = object[v116];
        const v117 = object === undefined;
        const v118 = object === null;
        const v119 = v117 || v118;
        if (v119) {
            const v120 = pathArray.length;
            const v121 = v120 - 1;
            const v122 = i !== v121;
            if (v122) {
                return value;
            }
            break;
        }
        const v110 = i++;
        v109 = i < v108;
    }
    return object;
};
const v139 = function (object, path, value) {
    const v124 = isObj(object);
    const v125 = !v124;
    const v126 = typeof path;
    const v127 = v126 !== 'string';
    const v128 = v125 || v127;
    if (v128) {
        return object;
    }
    const root = object;
    const pathArray = getPathSegments(path);
    let i = 0;
    const v129 = pathArray.length;
    let v130 = i < v129;
    while (v130) {
        const p = pathArray[i];
        const v132 = object[p];
        const v133 = isObj(v132);
        const v134 = !v133;
        if (v134) {
            const v135 = {};
            object[p] = v135;
        }
        const v136 = pathArray.length;
        const v137 = v136 - 1;
        const v138 = i === v137;
        if (v138) {
            object[p] = value;
        }
        object = object[p];
        const v131 = i++;
        v130 = i < v129;
    }
    return root;
};
const v155 = function (object, path) {
    const v140 = isObj(object);
    const v141 = !v140;
    const v142 = typeof path;
    const v143 = v142 !== 'string';
    const v144 = v141 || v143;
    if (v144) {
        return;
    }
    const pathArray = getPathSegments(path);
    let i = 0;
    const v145 = pathArray.length;
    let v146 = i < v145;
    while (v146) {
        const p = pathArray[i];
        const v148 = pathArray.length;
        const v149 = v148 - 1;
        const v150 = i === v149;
        if (v150) {
            const v151 = object[p];
            const v152 = delete v151;
            v152;
            return;
        }
        object = object[p];
        const v153 = isObj(object);
        const v154 = !v153;
        if (v154) {
            return;
        }
        const v147 = i++;
        v146 = i < v145;
    }
};
const v169 = function (object, path) {
    const v156 = isObj(object);
    const v157 = !v156;
    const v158 = typeof path;
    const v159 = v158 !== 'string';
    const v160 = v157 || v159;
    if (v160) {
        return false;
    }
    const pathArray = getPathSegments(path);
    let i = 0;
    const v161 = pathArray.length;
    let v162 = i < v161;
    while (v162) {
        const v164 = isObj(object);
        if (v164) {
            const v165 = pathArray[i];
            const v166 = v165 in object;
            const v167 = !v166;
            if (v167) {
                return false;
            }
            const v168 = pathArray[i];
            object = object[v168];
        } else {
            return false;
        }
        const v163 = i++;
        v162 = i < v161;
    }
    return true;
};
const v170 = {};
v170.get = v123;
v170.set = v139;
v170.delete = v155;
v170.has = v169;
module.exports = v170;