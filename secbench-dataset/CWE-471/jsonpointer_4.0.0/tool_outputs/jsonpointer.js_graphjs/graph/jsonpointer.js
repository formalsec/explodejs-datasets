var hasExcape = /~/;
var escapeMatcher = /~[01]/g;
const escapeReplacer = function (m) {
    switch (m) {
    case '~1':
        return '/';
    case '~0':
        return '~';
    }
    const v58 = 'Invalid tilde escape: ' + m;
    const v59 = new Error(v58);
    throw v59;
};
const untilde = function (str) {
    const v60 = hasExcape.test(str);
    const v61 = !v60;
    if (v61) {
        return str;
    }
    const v62 = str.replace(escapeMatcher, escapeReplacer);
    return v62;
};
const setter = function (obj, pointer, value) {
    var part;
    var hasNextPart;
    var p = 1;
    var len = pointer.length;
    let v63 = p < len;
    while (v63) {
        const v64 = p++;
        const v65 = pointer[v64];
        part = untilde(v65);
        hasNextPart = len > p;
        const v66 = obj[part];
        const v67 = typeof v66;
        const v68 = v67 === 'undefined';
        if (v68) {
            const v69 = Array.isArray(obj);
            const v70 = part === '-';
            const v71 = v69 && v70;
            if (v71) {
                part = obj.length;
            }
            if (hasNextPart) {
                const v72 = pointer[p];
                const v73 = v72 !== '';
                const v74 = pointer[p];
                const v75 = v74 < Infinity;
                const v76 = v73 && v75;
                const v77 = pointer[p];
                const v78 = v77 === '-';
                const v79 = v76 || v78;
                if (v79) {
                    obj[part] = [];
                } else {
                    const v80 = {};
                    obj[part] = v80;
                }
            }
        }
        const v81 = !hasNextPart;
        if (v81) {
            break;
        }
        obj = obj[part];
        v63 = p < len;
    }
    var oldValue = obj[part];
    const v82 = value === undefined;
    if (v82) {
        const v83 = obj[part];
        const v84 = delete v83;
        v84;
    } else {
        obj[part] = value;
    }
    return oldValue;
};
const compilePointer = function (pointer) {
    const v85 = typeof pointer;
    const v86 = v85 === 'string';
    if (v86) {
        pointer = pointer.split('/');
        const v87 = pointer[0];
        const v88 = v87 === '';
        if (v88) {
            return pointer;
        }
        const v89 = new Error('Invalid JSON pointer.');
        throw v89;
    } else {
        const v90 = Array.isArray(pointer);
        if (v90) {
            return pointer;
        }
    }
    const v91 = new Error('Invalid JSON pointer.');
    throw v91;
};
const get = function (obj, pointer) {
    const v92 = typeof obj;
    const v93 = v92 !== 'object';
    if (v93) {
        const v94 = new Error('Invalid input object.');
        throw v94;
    }
    pointer = compilePointer(pointer);
    var len = pointer.length;
    const v95 = len === 1;
    if (v95) {
        return obj;
    }
    var p = 1;
    let v96 = p < len;
    while (v96) {
        const v97 = p++;
        const v98 = pointer[v97];
        const v99 = untilde(v98);
        obj = obj[v99];
        const v100 = len === p;
        if (v100) {
            return obj;
        }
        const v101 = typeof obj;
        const v102 = v101 !== 'object';
        if (v102) {
            return undefined;
        }
        v96 = p < len;
    }
};
const set = function (obj, pointer, value) {
    const v103 = typeof obj;
    const v104 = v103 !== 'object';
    if (v104) {
        const v105 = new Error('Invalid input object.');
        throw v105;
    }
    pointer = compilePointer(pointer);
    const v106 = pointer.length;
    const v107 = v106 === 0;
    if (v107) {
        const v108 = new Error('Invalid JSON pointer for set.');
        throw v108;
    }
    const v109 = setter(obj, pointer, value);
    return v109;
};
const compile = function (pointer) {
    var compiled = compilePointer(pointer);
    const v111 = function (object) {
        const v110 = get(object, compiled);
        return v110;
    };
    const v113 = function (object, value) {
        const v112 = set(object, compiled, value);
        return v112;
    };
    const v114 = {};
    v114.get = v111;
    v114.set = v113;
    return v114;
};
exports.get = get;
exports.set = set;
exports.compile = compile;