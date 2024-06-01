'use strict';
var _ = require('lodash');
const v75 = function (values) {
    const v60 = module.exports;
    var mask = v60.mask;
    const wrap = function (original) {
        const v66 = function (obj) {
            const v61 = _.isFunction(values);
            if (v61) {
                const v63 = function (err, masked) {
                    const v62 = original(masked);
                    v62;
                };
                const v64 = values(obj, mask, v63);
                v64;
            } else {
                var duplicate = mask(obj, values);
                const v65 = original(duplicate);
                v65;
            }
        };
        return v66;
    };
    const v74 = function (req, res, next) {
        const v67 = res.json;
        const v68 = v67.bind(res);
        const v69 = wrap(v68);
        res.json = v69;
        const v70 = res.jsonp;
        const v71 = v70.bind(res);
        const v72 = wrap(v71);
        res.jsonp = v72;
        const v73 = next();
        v73;
    };
    return v74;
};
module.exports = v75;
exports = module.exports;
const v76 = module.exports;
const mask = function (obj, values) {
    const v77 = _.isArray(obj);
    if (v77) {
        var results = [];
        const v80 = function (item) {
            const v78 = masked(item, values);
            const v79 = results.push(v78);
            v79;
        };
        const v81 = _.each(obj, v80);
        v81;
        return results;
    }
    const v82 = masked(obj, values);
    return v82;
};
v76.mask = mask;
const v83 = module.exports;
const expose = function (obj, values) {
    const v84 = _.isArray(obj);
    if (v84) {
        var results = [];
        const v87 = function (item) {
            const v85 = exposed(item, values);
            const v86 = results.push(v85);
            v86;
        };
        const v88 = _.each(obj, v87);
        v88;
        return results;
    }
    const v89 = exposed(obj, values);
    return v89;
};
v83.expose = expose;
const masked = function (obj, values) {
    var duplicate = {};
    const v90 = obj.toObject;
    const v91 = _.isFunction(v90);
    if (v91) {
        duplicate = obj.toObject();
    } else {
        duplicate = _.clone(obj);
    }
    const v97 = function (item) {
        const v92 = _.isObject(item);
        if (v92) {
            const v94 = function (value) {
                const v93 = deleteItemValue(duplicate, value);
                v93;
            };
            const v95 = _.forIn(item, v94);
            v95;
        } else {
            const v96 = deleteItemValue(duplicate, item);
            v96;
        }
    };
    const v98 = _.each(values, v97);
    v98;
    return duplicate;
};
const exposed = function (obj, values) {
    var duplicate = {};
    const v104 = function (item) {
        const v99 = _.isObject(item);
        if (v99) {
            const v101 = function (value, key) {
                const v100 = setItemValue(duplicate, obj, key, value);
                v100;
            };
            const v102 = _.forIn(item, v101);
            v102;
        } else {
            const v103 = setItemValue(duplicate, obj, item, item);
            v103;
        }
    };
    const v105 = _.each(values, v104);
    v105;
    return duplicate;
};
const findValue = function (objectPath, obj) {
    var objPath = objectPath.split('.');
    var value = objectPath;
    var k = 0;
    const v106 = objPath.length;
    let v107 = k < v106;
    while (v107) {
        if (obj) {
            const v109 = objPath[k];
            value = obj[v109];
        }
        obj = value;
        const v108 = k++;
        v107 = k < v106;
    }
    return value;
};
const buildDuplicatePath = function (dup, duplicatePath) {
    var dupPath = duplicatePath.split('.');
    var path = 'dup';
    var dupObj = dup;
    const v114 = function (item) {
        const v110 = dupObj[item];
        const v111 = _.isUndefined(v110);
        if (v111) {
            const v112 = {};
            dupObj[item] = v112;
        }
        dupObj = dupObj[item];
        const v113 = '["' + item;
        path += v113 + '"]';
    };
    const v115 = _.each(dupPath, v114);
    v115;
    return path;
};
const setItemPath = function (dup, obj, objectPath, path) {
    var value = findValue(objectPath, obj);
    path += '=value;';
    const v116 = eval(path);
    v116;
};
const setItemValue = function (dup, obj, objectPath, duplicatePath) {
    var path = buildDuplicatePath(dup, duplicatePath);
    const v117 = setItemPath(dup, obj, objectPath, path);
    v117;
};
const deleteItemValue = function (dup, duplicatePath) {
    var path = buildDuplicatePath(dup, duplicatePath);
    path = 'delete ' + path;
    const v118 = eval(path);
    v118;
};