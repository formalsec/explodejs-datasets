var _ = require('lodash');
const deepExtend = function (objects, collision, path) {
    const v33 = objects == null;
    if (v33) {
        const v34 = {};
        return v34;
    }
    var src;
    var copyIsArray;
    var copy;
    var name;
    var options;
    var clone;
    const v35 = objects[0];
    const v36 = {};
    var target = v35 || v36;
    var i = 1;
    var length = objects.length;
    const v37 = [];
    path = path || v37;
    const v38 = typeof target;
    const v39 = v38 !== 'object';
    if (v39) {
        target = {};
    }
    let v40 = i < length;
    while (v40) {
        const v42 = (options = objects[i]) != null;
        if (v42) {
            for (name in options) {
                const v43 = options.hasOwnProperty(name);
                const v44 = !v43;
                if (v44) {
                    continue;
                }
                src = target[name];
                copy = options[name];
                const v45 = target === copy;
                if (v45) {
                    continue;
                }
                const v46 = _.isPlainObject(copy);
                const v47 = v46 || (copyIsArray = _.isArray(copy));
                const v48 = copy && v47;
                if (v48) {
                    if (copyIsArray) {
                        copyIsArray = false;
                        const v49 = _.isArray(src);
                        const v50 = src && v49;
                        const v51 = [];
                        if (v50) {
                            clone = src;
                        } else {
                            clone = v51;
                        }
                    } else {
                        const v52 = _.isPlainObject(src);
                        const v53 = src && v52;
                        const v54 = {};
                        if (v53) {
                            clone = src;
                        } else {
                            clone = v54;
                        }
                    }
                    var nextPath = path.slice(0);
                    const v55 = nextPath.push(name);
                    v55;
                    const v56 = [
                        clone,
                        copy
                    ];
                    const v57 = deepExtend(v56, collision, nextPath);
                    target[name] = v57;
                } else {
                    const v58 = copy !== undefined;
                    if (v58) {
                        const v59 = src != null;
                        const v60 = typeof collision;
                        const v61 = v60 == 'function';
                        const v62 = v59 && v61;
                        if (v62) {
                            const v63 = {
                                target: target,
                                copy: options,
                                path: path,
                                key: name
                            };
                            const v64 = collision(v63);
                            v64;
                        }
                        target[name] = copy;
                    }
                }
            }
        }
        const v41 = i++;
        v40 = i < length;
    }
    return target;
};
module.exports = deepExtend;