'use strict';
const isObj = o => {
    const v90 = o !== null;
    const v91 = typeof o;
    const v92 = v91 == 'object';
    const v93 = v90 && v92;
    return v93;
};
const getPathSegments = function (path) {
    const pathArray = path.split('.');
    const parts = [];
    let i = 0;
    const v94 = pathArray.length;
    let v95 = i < v94;
    while (v95) {
        let p = pathArray[i];
        const v97 = p.length;
        const v98 = v97 - 1;
        const v99 = p[v98];
        const v100 = v99 === '\\';
        const v101 = i + 1;
        const v102 = pathArray[v101];
        const v103 = v102 !== undefined;
        let v104 = v100 && v103;
        while (v104) {
            const v105 = -1;
            const v106 = p.slice(0, v105);
            p = v106 + '.';
            const v107 = ++i;
            p += pathArray[v107];
            v104 = v100 && v103;
        }
        const v108 = parts.push(p);
        v108;
        const v96 = i++;
        v95 = i < v94;
    }
    return parts;
};
const v131 = function (object, path, value) {
    const v109 = isObj(object);
    const v110 = !v109;
    const v111 = typeof path;
    const v112 = v111 !== 'string';
    const v113 = v110 || v112;
    if (v113) {
        const v114 = value === undefined;
        let v115;
        if (v114) {
            v115 = object;
        } else {
            v115 = value;
        }
        return v115;
    }
    const pathArray = getPathSegments(path);
    let i = 0;
    const v116 = pathArray.length;
    let v117 = i < v116;
    while (v117) {
        const v119 = Object.prototype;
        const v120 = v119.propertyIsEnumerable;
        const v121 = pathArray[i];
        const v122 = v120.call(object, v121);
        const v123 = !v122;
        if (v123) {
            return value;
        }
        const v124 = pathArray[i];
        object = object[v124];
        const v125 = object === undefined;
        const v126 = object === null;
        const v127 = v125 || v126;
        if (v127) {
            const v128 = pathArray.length;
            const v129 = v128 - 1;
            const v130 = i !== v129;
            if (v130) {
                return value;
            }
            break;
        }
        const v118 = i++;
        v117 = i < v116;
    }
    return object;
};
const v147 = function (object, path, value) {
    const v132 = isObj(object);
    const v133 = !v132;
    const v134 = typeof path;
    const v135 = v134 !== 'string';
    const v136 = v133 || v135;
    if (v136) {
        return object;
    }
    const root = object;
    const pathArray = getPathSegments(path);
    let i = 0;
    const v137 = pathArray.length;
    let v138 = i < v137;
    while (v138) {
        const p = pathArray[i];
        const v140 = object[p];
        const v141 = isObj(v140);
        const v142 = !v141;
        if (v142) {
            const v143 = {};
            object[p] = v143;
        }
        const v144 = pathArray.length;
        const v145 = v144 - 1;
        const v146 = i === v145;
        if (v146) {
            object[p] = value;
        }
        object = object[p];
        const v139 = i++;
        v138 = i < v137;
    }
    return root;
};
const v163 = function (object, path) {
    const v148 = isObj(object);
    const v149 = !v148;
    const v150 = typeof path;
    const v151 = v150 !== 'string';
    const v152 = v149 || v151;
    if (v152) {
        return;
    }
    const pathArray = getPathSegments(path);
    let i = 0;
    const v153 = pathArray.length;
    let v154 = i < v153;
    while (v154) {
        const p = pathArray[i];
        const v156 = pathArray.length;
        const v157 = v156 - 1;
        const v158 = i === v157;
        if (v158) {
            const v159 = object[p];
            const v160 = delete v159;
            v160;
            return;
        }
        object = object[p];
        const v161 = isObj(object);
        const v162 = !v161;
        if (v162) {
            return;
        }
        const v155 = i++;
        v154 = i < v153;
    }
};
const v177 = function (object, path) {
    const v164 = isObj(object);
    const v165 = !v164;
    const v166 = typeof path;
    const v167 = v166 !== 'string';
    const v168 = v165 || v167;
    if (v168) {
        return false;
    }
    const pathArray = getPathSegments(path);
    let i = 0;
    const v169 = pathArray.length;
    let v170 = i < v169;
    while (v170) {
        const v172 = isObj(object);
        if (v172) {
            const v173 = pathArray[i];
            const v174 = v173 in object;
            const v175 = !v174;
            if (v175) {
                return false;
            }
            const v176 = pathArray[i];
            object = object[v176];
        } else {
            return false;
        }
        const v171 = i++;
        v170 = i < v169;
    }
    return true;
};
const v178 = {};
v178.get = v131;
v178.set = v147;
v178.delete = v163;
v178.has = v177;
module.exports = v178;