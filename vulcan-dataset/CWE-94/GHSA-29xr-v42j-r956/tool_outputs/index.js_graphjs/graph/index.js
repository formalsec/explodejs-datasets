var Promise = require('any-promise');
var assert = require('assert');
module.exports = thenify;
const thenify = function ($$__fn__$$, options) {
    const v59 = typeof $$__fn__$$;
    const v60 = v59 === 'function';
    const v61 = assert(v60);
    v61;
    const v62 = $$__fn__$$.name;
    const v63 = createWrapper(v62, options);
    const v64 = eval(v63);
    return v64;
};
const v74 = function ($$__fn__$$, options) {
    const v65 = typeof $$__fn__$$;
    const v66 = v65 === 'function';
    const v67 = assert(v66);
    v67;
    const v68 = {};
    options = options || v68;
    options.withCallback = true;
    const v69 = options.multiArgs;
    const v70 = v69 === undefined;
    if (v70) {
        options.multiArgs = true;
    }
    const v71 = $$__fn__$$.name;
    const v72 = createWrapper(v71, options);
    const v73 = eval(v72);
    return v73;
};
thenify.withCallback = v74;
const createCallback = function (resolve, reject, multiArgs) {
    const v93 = function (err, value) {
        if (err) {
            const v75 = reject(err);
            return v75;
        }
        var length = arguments.length;
        const v76 = length <= 2;
        const v77 = !multiArgs;
        const v78 = v76 || v77;
        if (v78) {
            const v79 = resolve(value);
            return v79;
        }
        const v80 = Array.isArray(multiArgs);
        if (v80) {
            var values = {};
            var i = 1;
            let v81 = i < length;
            while (v81) {
                const v83 = i - 1;
                const v84 = multiArgs[v83];
                const v85 = arguments[i];
                values[v84] = v85;
                const v82 = i++;
                v81 = i < length;
            }
            const v86 = resolve(values);
            return v86;
        }
        const v87 = length - 1;
        var values = new Array(v87);
        var i = 1;
        let v88 = i < length;
        while (v88) {
            const v90 = i - 1;
            const v91 = arguments[i];
            values[v90] = v91;
            const v89 = ++i;
            v88 = i < length;
        }
        const v92 = resolve(values);
        v92;
    };
    return v93;
};
const createWrapper = function (name, options) {
    const v94 = name || '';
    name = v94.replace(/\s|bound(?!$)/g, '');
    const v95 = {};
    options = options || v95;
    let multiArgs;
    const v96 = options.multiArgs;
    const v97 = v96 !== undefined;
    const v98 = options.multiArgs;
    if (v97) {
        multiArgs = v98;
    } else {
        multiArgs = true;
    }
    const v99 = JSON.stringify(multiArgs);
    const v100 = 'var multiArgs = ' + v99;
    multiArgs = v100 + '\n';
    let withCallback;
    const v101 = options.withCallback;
    const v102 = 'var lastType = typeof arguments[len - 1]\n' + 'if (lastType === "function") return $$__fn__$$.apply(self, arguments)\n';
    if (v101) {
        withCallback = v102;
    } else {
        withCallback = '';
    }
    const v103 = '(function ' + name;
    const v104 = v103 + '() {\n';
    const v105 = v104 + 'var self = this\n';
    const v106 = v105 + 'var len = arguments.length\n';
    const v107 = v106 + multiArgs;
    const v108 = v107 + withCallback;
    const v109 = v108 + 'var args = new Array(len + 1)\n';
    const v110 = v109 + 'for (var i = 0; i < len; ++i) args[i] = arguments[i]\n';
    const v111 = v110 + 'var lastIndex = i\n';
    const v112 = v111 + 'return new Promise(function (resolve, reject) {\n';
    const v113 = v112 + 'args[lastIndex] = createCallback(resolve, reject, multiArgs)\n';
    const v114 = v113 + '$$__fn__$$.apply(self, args)\n';
    const v115 = v114 + '})\n';
    const v116 = v115 + '})';
    return v116;
};