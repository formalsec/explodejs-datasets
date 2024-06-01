'use strict';
const hasProperty = function (obj, name) {
    const v76 = typeof obj;
    const v77 = v76 === 'undefined';
    const v78 = obj === null;
    const v79 = v77 || v78;
    if (v79) {
        return false;
    }
    const v80 = Object(obj);
    const v81 = name in v80;
    return v81;
};
const parsePath = function (path) {
    var str = path.replace(/([^\\])\[/g, '$1.[');
    var parts = str.match(/(\\\.|[^.]+?)+/g);
    const v85 = function mapMatches(value) {
        var regexp = /^\[(\d+)\]$/;
        var mArr = regexp.exec(value);
        var parsed = null;
        if (mArr) {
            const v82 = mArr[1];
            const v83 = parseFloat(v82);
            parsed.i = v83;
            parsed = {};
            parsed = {};
        } else {
            const v84 = value.replace(/\\([.\[\]])/g, '$1');
            parsed.p = v84;
            parsed = {};
            parsed = {};
        }
        return parsed;
    };
    const v86 = parts.map(v85);
    return v86;
};
const internalGetPathValue = function (obj, parsed, pathDepth) {
    var temporaryValue = obj;
    var res = null;
    const v87 = typeof pathDepth;
    const v88 = v87 === 'undefined';
    const v89 = parsed.length;
    if (v88) {
        pathDepth = v89;
    } else {
        pathDepth = pathDepth;
    }
    var i = 0;
    let v90 = i < pathDepth;
    while (v90) {
        var part = parsed[i];
        if (temporaryValue) {
            const v92 = part.p;
            const v93 = typeof v92;
            const v94 = v93 === 'undefined';
            if (v94) {
                const v95 = part.i;
                temporaryValue = temporaryValue[v95];
            } else {
                const v96 = part.p;
                temporaryValue = temporaryValue[v96];
            }
            const v97 = pathDepth - 1;
            const v98 = i === v97;
            if (v98) {
                res = temporaryValue;
            }
        }
        const v91 = i++;
        v90 = i < pathDepth;
    }
    return res;
};
const internalSetPathValue = function (obj, val, parsed) {
    var tempObj = obj;
    var pathDepth = parsed.length;
    var part = null;
    var i = 0;
    let v99 = i < pathDepth;
    while (v99) {
        var propName = null;
        var propVal = null;
        part = parsed[i];
        const v101 = pathDepth - 1;
        const v102 = i === v101;
        if (v102) {
            const v103 = part.p;
            const v104 = typeof v103;
            const v105 = v104 === 'undefined';
            const v106 = part.i;
            const v107 = part.p;
            if (v105) {
                propName = v106;
            } else {
                propName = v107;
            }
            tempObj[propName] = val;
        } else {
            const v108 = part.p;
            const v109 = typeof v108;
            const v110 = v109 !== 'undefined';
            const v111 = part.p;
            const v112 = tempObj[v111];
            const v113 = v110 && v112;
            if (v113) {
                const v114 = part.p;
                tempObj = tempObj[v114];
            } else {
                const v115 = part.i;
                const v116 = typeof v115;
                const v117 = v116 !== 'undefined';
                const v118 = part.i;
                const v119 = tempObj[v118];
                const v120 = v117 && v119;
                if (v120) {
                    const v121 = part.i;
                    tempObj = tempObj[v121];
                } else {
                    const v122 = i + 1;
                    var next = parsed[v122];
                    const v123 = part.p;
                    const v124 = typeof v123;
                    const v125 = v124 === 'undefined';
                    const v126 = part.i;
                    const v127 = part.p;
                    if (v125) {
                        propName = v126;
                    } else {
                        propName = v127;
                    }
                    const v128 = next.p;
                    const v129 = typeof v128;
                    const v130 = v129 === 'undefined';
                    const v131 = [];
                    const v132 = {};
                    if (v130) {
                        propVal = v131;
                    } else {
                        propVal = v132;
                    }
                    tempObj[propName] = propVal;
                    tempObj = tempObj[propName];
                }
            }
        }
        const v100 = i++;
        v99 = i < pathDepth;
    }
};
const getPathInfo = function (obj, path) {
    var parsed = parsePath(path);
    const v133 = parsed.length;
    const v134 = v133 - 1;
    var last = parsed[v134];
    const v135 = parsed.length;
    const v136 = v135 > 1;
    const v137 = parsed.length;
    const v138 = v137 - 1;
    const v139 = internalGetPathValue(obj, parsed, v138);
    let v140;
    if (v136) {
        v140 = v139;
    } else {
        v140 = obj;
    }
    const v141 = last.p;
    const v142 = last.i;
    const v143 = v141 || v142;
    const v144 = internalGetPathValue(obj, parsed);
    var info = {};
    info.parent = v140;
    info.name = v143;
    info.value = v144;
    const v145 = info.parent;
    const v146 = info.name;
    const v147 = hasProperty(v145, v146);
    info.exists = v147;
    return info;
};
const getPathValue = function (obj, path) {
    var info = getPathInfo(obj, path);
    const v148 = info.value;
    return v148;
};
const setPathValue = function (obj, path, val) {
    var parsed = parsePath(path);
    const v149 = internalSetPathValue(obj, val, parsed);
    v149;
    return obj;
};
const v150 = {};
v150.hasProperty = hasProperty;
v150.getPathInfo = getPathInfo;
v150.getPathValue = getPathValue;
v150.setPathValue = setPathValue;
module.exports = v150;