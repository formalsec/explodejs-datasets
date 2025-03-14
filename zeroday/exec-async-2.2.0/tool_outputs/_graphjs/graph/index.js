var child_process = require('child_process');
const escapeArg = function (s) {
    const v64 = s === '';
    if (v64) {
        return '\'\'';
    }
    const v65 = /[^A-Za-z0-9_\/:=-]/.test(s);
    if (v65) {
        const v66 = s.replace(/'/g, '\'\\\'\'');
        const v67 = '\'' + v66;
        s = v67 + '\'';
        const v68 = s.replace(/^(?:'')+/g, '');
        s = v68.replace(/\\'''/g, '\\\'');
    }
    return s;
};
const argsFromKeyVal = function (key, val, opts) {
    const v69 = {};
    opts = opts || v69;
    var prefix = '--';
    const v70 = key.length;
    const v71 = v70 === 1;
    if (v71) {
        prefix = '-';
    }
    const v72 = val === true;
    const v73 = val == null;
    const v74 = v72 || v73;
    if (v74) {
        const v75 = prefix + key;
        return v75;
    } else {
        const v76 = val === false;
        if (v76) {
            const v77 = prefix + 'no';
            const v78 = v77 + key;
            const v79 = [v78];
            return v79;
        } else {
            const v80 = Array.isArray(val);
            if (v80) {
                var a = [];
                var j = 0;
                const v81 = val.length;
                let v82 = j < v81;
                while (v82) {
                    const v84 = val[j];
                    const v85 = argsFromKeyVal(key, v84, opts);
                    a = a.concat(v85);
                    const v83 = j++;
                    v82 = j < v81;
                }
                return a;
            } else {
                const v86 = key.length;
                const v87 = v86 === 1;
                const v88 = opts.spaceForLongArgs;
                const v89 = v87 || v88;
                if (v89) {
                    const v90 = prefix + key;
                    const v91 = [
                        v90,
                        val
                    ];
                    return v91;
                } else {
                    const v92 = prefix + key;
                    const v93 = v92 + '=';
                    const v94 = escapeArg(val);
                    const v95 = v93 + v94;
                    const v96 = [v95];
                    return v96;
                }
            }
        }
    }
};
const argsListFromObject = function (args, opts) {
    const v97 = !args;
    if (v97) {
        const v98 = [];
        return v98;
    }
    const v99 = Array.isArray(args);
    if (v99) {
        const v100 = { _: args };
        const v101 = argsListFromObject(v100);
        return v101;
    }
    var a = [];
    var keys = Object.keys(args);
    var i = 0;
    const v102 = keys.length;
    let v103 = i < v102;
    while (v103) {
        var key = keys[i];
        const v105 = key[0];
        const v106 = v105 === '_';
        if (v106) {
            continue;
        }
        var val = args[key];
        const v107 = argsFromKeyVal(key, val, opts);
        a = a.concat(v107);
        const v104 = i++;
        v103 = i < v102;
    }
    const v108 = args._;
    if (v108) {
        var i = 0;
        const v109 = args._;
        const v110 = v109.length;
        let v111 = i < v110;
        while (v111) {
            const v113 = args._;
            const v114 = v113[i];
            const v115 = '' + v114;
            const v116 = a.push(v115);
            v116;
            const v112 = i++;
            v111 = i < v110;
        }
    }
    return a;
};
const execAsync = function (cmd, args, opts) {
    const v122 = function (fulfill, reject) {
        const v117 = argsListFromObject(args, opts);
        const v120 = function (err, result) {
            if (err) {
                const v118 = reject(err);
                v118;
            } else {
                const v119 = fulfill(result);
                v119;
            }
        };
        const v121 = child_process.execFile(cmd, v117, opts, v120);
        v121;
    };
    const v123 = new Promise(v122);
    return v123;
};
module.exports = execAsync;
const v124 = module.exports;
v124.argsListFromObject = argsListFromObject;
const v125 = module.exports;
v125.argsFromKeyVal = argsFromKeyVal;
const v126 = module.exports;
v126.escapeArg = escapeArg;