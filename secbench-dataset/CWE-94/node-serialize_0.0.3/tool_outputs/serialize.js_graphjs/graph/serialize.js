var FUNCFLAG = '_$$ND_FUNC$$_';
var CIRCULARFLAG = '_$$ND_CC$$_';
var KEYPATHSEPARATOR = '_$$.$$_';
var ISNATIVEFUNC = /^function\s*[^(]*\(.*\)\s*\{\s*\[native code\]\s*\}$/;
var getKeyPath = function (obj, path) {
    path = path.split(KEYPATHSEPARATOR);
    var currentObj = obj;
    const v70 = function (p, index) {
        if (index) {
            currentObj = currentObj[p];
        }
    };
    const v71 = path.forEach(v70);
    v71;
    return currentObj;
};
const v101 = function (obj, ignoreNativeFunc, outputObj, cache, path) {
    path = path || '$';
    const v72 = {};
    cache = cache || v72;
    cache[path] = obj;
    const v73 = {};
    outputObj = outputObj || v73;
    var key;
    for (key in obj) {
        const v74 = obj.hasOwnProperty(key);
        if (v74) {
            const v75 = obj[key];
            const v76 = typeof v75;
            const v77 = v76 === 'object';
            const v78 = obj[key];
            const v79 = v78 !== null;
            const v80 = v77 && v79;
            if (v80) {
                var subKey;
                var found = false;
                for (subKey in cache) {
                    const v81 = cache.hasOwnProperty(subKey);
                    if (v81) {
                        const v82 = cache[subKey];
                        const v83 = obj[key];
                        const v84 = v82 === v83;
                        if (v84) {
                            outputObj[key] = CIRCULARFLAG + subKey;
                            found = true;
                        }
                    }
                }
                const v85 = !found;
                if (v85) {
                    const v86 = obj[key];
                    const v87 = outputObj[key];
                    const v88 = path + KEYPATHSEPARATOR;
                    const v89 = v88 + key;
                    const v90 = exports.serialize(v86, ignoreNativeFunc, v87, cache, v89);
                    outputObj[key] = v90;
                }
            } else {
                const v91 = obj[key];
                const v92 = typeof v91;
                const v93 = v92 === 'function';
                if (v93) {
                    const v94 = obj[key];
                    var funcStr = v94.toString();
                    const v95 = ISNATIVEFUNC.test(funcStr);
                    if (v95) {
                        if (ignoreNativeFunc) {
                            funcStr = 'function() {throw new Error("Call a native function unserialized")}';
                        } else {
                            const v96 = new Error('Can\'t serialize a object with a native function property. Use serialize(obj, true) to ignore the error.');
                            throw v96;
                        }
                    }
                    outputObj[key] = FUNCFLAG + funcStr;
                } else {
                    const v97 = obj[key];
                    outputObj[key] = v97;
                }
            }
        }
    }
    const v98 = path === '$';
    const v99 = JSON.stringify(outputObj);
    let v100;
    if (v98) {
        v100 = v99;
    } else {
        v100 = outputObj;
    }
    return v100;
};
exports.serialize = v101;
const v138 = function (obj, originObj) {
    var isIndex;
    const v102 = typeof obj;
    const v103 = v102 === 'string';
    if (v103) {
        obj = JSON.parse(obj);
        isIndex = true;
    }
    originObj = originObj || obj;
    var circularTasks = [];
    var key;
    for (key in obj) {
        const v104 = obj.hasOwnProperty(key);
        if (v104) {
            const v105 = obj[key];
            const v106 = typeof v105;
            const v107 = v106 === 'object';
            if (v107) {
                const v108 = obj[key];
                const v109 = exports.unserialize(v108, originObj);
                obj[key] = v109;
            } else {
                const v110 = obj[key];
                const v111 = typeof v110;
                const v112 = v111 === 'string';
                if (v112) {
                    const v113 = obj[key];
                    const v114 = v113.indexOf(FUNCFLAG);
                    const v115 = v114 === 0;
                    if (v115) {
                        const v116 = obj[key];
                        const v117 = FUNCFLAG.length;
                        const v118 = v116.substring(v117);
                        const v119 = '(' + v118;
                        const v120 = v119 + ')';
                        const v121 = eval(v120);
                        obj[key] = v121;
                    } else {
                        const v122 = obj[key];
                        const v123 = v122.indexOf(CIRCULARFLAG);
                        const v124 = v123 === 0;
                        if (v124) {
                            const v125 = obj[key];
                            const v126 = CIRCULARFLAG.length;
                            const v127 = v125.substring(v126);
                            obj[key] = v127;
                            const v128 = {
                                obj: obj,
                                key: key
                            };
                            const v129 = circularTasks.push(v128);
                            v129;
                        }
                    }
                }
            }
        }
    }
    if (isIndex) {
        const v136 = function (task) {
            const v132 = task.obj;
            const v133 = task.key;
            const v134 = v132[v133];
            const v135 = getKeyPath(originObj, v134);
            v130[v131] = v135;
        };
        const v137 = circularTasks.forEach(v136);
        v137;
    }
    return obj;
};
exports.unserialize = v138;