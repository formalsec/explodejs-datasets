;
const v100 = function (isNode) {
    var Public = function (clone) {
        const v56 = clone === true;
        const v57 = merge(v56, false, arguments);
        return v57;
    };
    var publicName = 'merge';
    const v60 = function (clone) {
        const v58 = clone === true;
        const v59 = merge(v58, true, arguments);
        return v59;
    };
    Public.recursive = v60;
    const v69 = function (input) {
        var output = input;
        var type = typeOf(input);
        var index;
        var size;
        const v61 = type === 'array';
        if (v61) {
            output = [];
            size = input.length;
            index = 0
            let v62 = index < size;
            while (v62) {
                const v64 = input[index];
                const v65 = Public.clone(v64);
                output[index] = v65;
                const v63 = ++index;
                v62 = index < size;
            }
        } else {
            const v66 = type === 'object';
            if (v66) {
                output = {};
                for (index in input) {
                    const v67 = input[index];
                    const v68 = Public.clone(v67);
                    output[index] = v68;
                }
            }
        }
        return output;
    };
    Public.clone = v69;
    const merge_recursive = function (base, extend) {
        const v70 = typeOf(base);
        const v71 = v70 !== 'object';
        if (v71) {
            return extend;
        }
        let key;
        for (key in extend) {
            const v72 = base[key];
            const v73 = typeOf(v72);
            const v74 = v73 === 'object';
            const v75 = extend[key];
            const v76 = typeOf(v75);
            const v77 = v76 === 'object';
            const v78 = v74 && v77;
            if (v78) {
                const v79 = base[key];
                const v80 = extend[key];
                const v81 = merge_recursive(v79, v80);
                base[key] = v81;
            } else {
                const v82 = extend[key];
                base[key] = v82;
            }
        }
        return base;
    };
    const merge = function (clone, recursive, argv) {
        var result = argv[0];
        var size = argv.length;
        const v83 = typeOf(result);
        const v84 = v83 !== 'object';
        const v85 = clone || v84;
        if (v85) {
            result = {};
        }
        var index = 0;
        let v86 = index < size;
        while (v86) {
            var item = argv[index];
            var type = typeOf(item);
            const v88 = type !== 'object';
            if (v88) {
                continue;
            }
            let key;
            for (key in item) {
                let sitem;
                const v89 = item[key];
                const v90 = Public.clone(v89);
                const v91 = item[key];
                if (clone) {
                    sitem = v90;
                } else {
                    sitem = v91;
                }
                if (recursive) {
                    const v92 = result[key];
                    const v93 = merge_recursive(v92, sitem);
                    result[key] = v93;
                } else {
                    result[key] = sitem;
                }
            }
            const v87 = ++index;
            v86 = index < size;
        }
        return result;
    };
    const typeOf = function (input) {
        const v94 = {};
        const v95 = v94.toString;
        const v96 = v95.call(input);
        const v97 = -1;
        const v98 = v96.slice(8, v97);
        const v99 = v98.toLowerCase();
        return v99;
    };
    if (isNode) {
        module.exports = Public;
    } else {
        window[publicName] = Public;
    }
};
const v101 = typeof module;
const v102 = v101 === 'object';
const v103 = v102 && module;
const v104 = module.exports;
const v105 = typeof v104;
const v106 = v105 === 'object';
const v107 = v103 && v106;
const v108 = module.exports;
const v109 = v107 && v108;
const v110 = v100(v109);
v110;