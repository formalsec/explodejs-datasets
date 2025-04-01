'use strict';
const v68 = Object.prototype;
var toStr = v68.toString;
const hasOwnProperty = function (obj, prop) {
    const v69 = obj == null;
    if (v69) {
        return false;
    }
    const v70 = Object.prototype;
    const v71 = v70.hasOwnProperty;
    const v72 = v71.call(obj, prop);
    return v72;
};
const isEmpty = function (value) {
    const v73 = !value;
    if (v73) {
        return true;
    }
    const v74 = isArray(value);
    const v75 = value.length;
    const v76 = v75 === 0;
    const v77 = v74 && v76;
    if (v77) {
        return true;
    } else {
        const v78 = typeof value;
        const v79 = v78 !== 'string';
        if (v79) {
            let i;
            for (i in value) {
                const v80 = hasOwnProperty(value, i);
                if (v80) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
};
const toString = function (type) {
    const v81 = toStr.call(type);
    return v81;
};
const isObject = function (obj) {
    const v82 = typeof obj;
    const v83 = v82 === 'object';
    const v84 = toString(obj);
    const v85 = v84 === '[object Object]';
    const v86 = v83 && v85;
    return v86;
};
const v87 = Array.isArray;
const v90 = function (obj) {
    const v88 = toStr.call(obj);
    const v89 = v88 === '[object Array]';
    return v89;
};
var isArray = v87 || v90;
const isBoolean = function (obj) {
    const v91 = typeof obj;
    const v92 = v91 === 'boolean';
    const v93 = toString(obj);
    const v94 = v93 === '[object Boolean]';
    const v95 = v92 || v94;
    return v95;
};
const getKey = function (key) {
    var intKey = parseInt(key);
    const v96 = intKey.toString();
    const v97 = v96 === key;
    if (v97) {
        return intKey;
    }
    return key;
};
const hasShallowProperty = function (obj, prop) {
    const v98 = options.includeInheritedProps;
    const v99 = typeof prop;
    const v100 = v99 === 'number';
    const v101 = Array.isArray(obj);
    const v102 = v100 && v101;
    const v103 = v98 || v102;
    const v104 = hasOwnProperty(obj, prop);
    const v105 = v103 || v104;
    return v105;
};
const getShallowProperty = function (obj, prop) {
    const v106 = hasShallowProperty(obj, prop);
    if (v106) {
        const v107 = obj[prop];
        return v107;
    }
};
const set = function (obj, path, value, doNotReplace) {
    const v108 = typeof path;
    const v109 = v108 === 'number';
    if (v109) {
        path = [path];
    }
    const v110 = !path;
    const v111 = path.length;
    const v112 = v111 === 0;
    const v113 = v110 || v112;
    if (v113) {
        return obj;
    }
    const v114 = typeof path;
    const v115 = v114 === 'string';
    if (v115) {
        const v116 = path.split('.');
        const v117 = v116.map(getKey);
        const v118 = set(obj, v117, value, doNotReplace);
        return v118;
    }
    var currentPath = path[0];
    var currentValue = getShallowProperty(obj, currentPath);
    const v119 = path.length;
    const v120 = v119 === 1;
    if (v120) {
        const v121 = void 0;
        const v122 = currentValue === v121;
        const v123 = !doNotReplace;
        const v124 = v122 || v123;
        if (v124) {
            obj[currentPath] = value;
        }
        return currentValue;
    }
    const v125 = void 0;
    const v126 = currentValue === v125;
    if (v126) {
        const v127 = path[1];
        const v128 = typeof v127;
        const v129 = v128 === 'number';
        if (v129) {
            obj[currentPath] = [];
        } else {
            const v130 = {};
            obj[currentPath] = v130;
        }
    }
    const v131 = obj[currentPath];
    const v132 = path.slice(1);
    const v133 = set(v131, v132, value, doNotReplace);
    return v133;
};
const v134 = module.export;
v134.set = set;