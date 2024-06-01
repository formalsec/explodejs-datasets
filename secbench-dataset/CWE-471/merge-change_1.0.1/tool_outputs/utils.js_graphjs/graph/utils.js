const v87 = (obj, path) => {
    const v70 = typeof path;
    const v71 = v70 === 'number';
    if (v71) {
        path = [path];
    }
    const v72 = obj === null;
    if (v72) {
        return obj;
    }
    const v73 = !path;
    if (v73) {
        return obj;
    }
    const v74 = typeof path;
    const v75 = v74 === 'string';
    if (v75) {
        const v76 = path.split('.');
        const v77 = utils.unset(obj, v76);
        return v77;
    }
    const currentPath = path[0];
    const v78 = path.length;
    const v79 = v78 === 1;
    if (v79) {
        const v80 = Array.isArray(obj);
        if (v80) {
            const v81 = obj.splice(currentPath, 1);
            v81;
        } else {
            const v82 = obj[currentPath];
            const v83 = delete v82;
            v83;
        }
    } else {
        const v84 = obj[currentPath];
        const v85 = path.slice(1);
        const v86 = utils.unset(v84, v85);
        return v86;
    }
    return obj;
};
const v100 = (obj, path, defaultValue) => {
    const v88 = typeof path;
    const v89 = v88 === 'string';
    if (v89) {
        path = path.split('.');
    }
    const v90 = typeof path;
    const v91 = v90 === 'number';
    if (v91) {
        path = [path];
    }
    const v92 = typeof obj;
    const v93 = v92 === 'undefined';
    if (v93) {
        return defaultValue;
    }
    const v94 = path.length;
    const v95 = v94 === 0;
    if (v95) {
        return obj;
    }
    const v96 = path[0];
    const v97 = obj[v96];
    const v98 = path.slice(1);
    const v99 = utils.get(v97, v98, defaultValue);
    return v99;
};
const v126 = (obj, path, value, doNotReplace) => {
    const v101 = typeof path;
    const v102 = v101 === 'number';
    if (v102) {
        path = [path];
    }
    const v103 = !path;
    const v104 = path.length;
    const v105 = v104 === 0;
    const v106 = v103 || v105;
    if (v106) {
        return obj;
    }
    const v107 = typeof path;
    const v108 = v107 === 'string';
    if (v108) {
        const v109 = path.split('.');
        const v110 = utils.set(obj, v109, value, doNotReplace);
        return v110;
    }
    const currentPath = path[0];
    const currentValue = obj[currentPath];
    const v111 = path.length;
    const v112 = v111 === 1;
    if (v112) {
        const v113 = void 0;
        const v114 = currentValue === v113;
        const v115 = !doNotReplace;
        const v116 = v114 || v115;
        if (v116) {
            obj[currentPath] = value;
        }
        return currentValue;
    }
    const v117 = void 0;
    const v118 = currentValue === v117;
    if (v118) {
        const v119 = path[1];
        const v120 = typeof v119;
        const v121 = v120 === 'number';
        if (v121) {
            obj[currentPath] = [];
        } else {
            const v122 = {};
            obj[currentPath] = v122;
        }
    }
    const v123 = obj[currentPath];
    const v124 = path.slice(1);
    const v125 = utils.set(v123, v124, value, doNotReplace);
    return v125;
};
const v128 = function (first, second) {
    const v127 = first === second;
    return v127;
};
const v138 = function (value) {
    const v129 = value.constructor;
    const v130 = value && v129;
    if (v130) {
        const v131 = value.constructor;
        const v132 = v131.name;
        return v132;
    } else {
        const v133 = Object.prototype;
        const v134 = v133.toString;
        const v135 = v134.call(value);
        const v136 = -1;
        const v137 = v135.slice(8, v136);
        return v137;
    }
};
const utils = {};
utils.unset = v87;
utils.get = v100;
utils.set = v126;
utils.equal = v128;
utils.type = v138;
module.exports = utils;