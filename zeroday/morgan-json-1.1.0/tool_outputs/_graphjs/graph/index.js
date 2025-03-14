'use strict';
const v63 = require('diagnostics');
var debug = v63('morgan-json');
const compile = function (format, opts) {
    const v64 = format === '';
    if (v64) {
        const v65 = new Error('argument format string must not be empty');
        throw v65;
    }
    const v66 = typeof format;
    const v67 = v66 !== 'string';
    if (v67) {
        const v68 = compileObject(format, opts);
        return v68;
    }
    const v69 = {};
    opts = opts || v69;
    var fmt = format.replace(/"/g, '\\"');
    let stringify;
    const v70 = opts.stringify;
    const v71 = v70 !== false;
    if (v71) {
        stringify = 'JSON.stringify';
    } else {
        stringify = '';
    }
    const v72 = '  "use strict"\n  return ' + stringify;
    const v73 = v72 + '({';
    const v89 = function (_, name, arg, trail, offset, str) {
        const v74 = JSON.stringify(name);
        var tokenName = String(v74);
        var tokenArguments = 'req, res';
        const v75 = 'tokens[' + tokenName;
        var tokenFunction = v75 + ']';
        const v76 = trail || '';
        var trailer = v76.trimRight();
        const v77 = arg !== undefined;
        if (v77) {
            const v78 = JSON.stringify(arg);
            const v79 = String(v78);
            tokenArguments += ', ' + v79;
        }
        const v80 = '\n    ' + tokenName;
        const v81 = v80 + ': (';
        const v82 = v81 + tokenFunction;
        const v83 = v82 + '(';
        const v84 = v83 + tokenArguments;
        const v85 = v84 + ') || "-") + ';
        const v86 = JSON.stringify(trailer);
        const v87 = v85 + v86;
        const v88 = v87 + ',';
        return v88;
    };
    const v90 = fmt.replace(/:([-\w]{2,})(?:\[([^\]]+)\])?([^:]+)?/g, v89);
    const v91 = v73 + v90;
    var js = v91 + '\n  })';
    const v92 = debug('\n%s', js);
    v92;
    const v93 = new Function('tokens, req, res', js);
    return v93;
};
module.exports = compile;
const compileObject = function (format, opts) {
    const v94 = !format;
    const v95 = typeof format;
    const v96 = v95 !== 'object';
    const v97 = v94 || v96;
    if (v97) {
        const v98 = new Error('argument format must be a string or an object');
        throw v98;
    }
    const v99 = {};
    opts = opts || v99;
    var keys = Object.keys(format);
    let stringify;
    const v100 = opts.stringify;
    const v101 = v100 !== false;
    if (v101) {
        stringify = 'JSON.stringify';
    } else {
        stringify = '';
    }
    const v102 = '  "use strict"\n  return ' + stringify;
    const v103 = v102 + '({';
    const v120 = function (key, i) {
        const v104 = '\n    "' + key;
        const v105 = v104 + '": "';
        const v106 = format[key];
        const v117 = function (_, name, arg) {
            var tokenArguments = 'req, res';
            const v107 = JSON.stringify(name);
            const v108 = String(v107);
            const v109 = 'tokens[' + v108;
            var tokenFunction = v109 + ']';
            const v110 = arg !== undefined;
            if (v110) {
                const v111 = JSON.stringify(arg);
                const v112 = String(v111);
                tokenArguments += ', ' + v112;
            }
            const v113 = '" + (' + tokenFunction;
            const v114 = v113 + '(';
            const v115 = v114 + tokenArguments;
            const v116 = v115 + ') || "-") + "';
            return v116;
        };
        const v118 = v106.replace(/:([-\w]{2,})(?:\[([^\]]+)\])?/g, v117);
        const v119 = v105 + v118;
        var assignment = v119 + '"';
        return assignment;
    };
    const v121 = keys.map(v120);
    const v122 = v103 + v121;
    var js = v122 + '\n  })';
    const v123 = debug('\n%s', js);
    v123;
    const v124 = new Function('tokens, req, res', js);
    return v124;
};
;