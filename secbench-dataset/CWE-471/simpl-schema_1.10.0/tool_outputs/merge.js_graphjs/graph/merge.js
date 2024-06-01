'use strict';
const v41 = { value: true };
const v42 = Object.defineProperty(exports, '__esModule', v41);
v42;
exports.default = merge;
const merge = function (destination) {
    var _len = arguments.length;
    const v43 = _len > 1;
    const v44 = _len - 1;
    let v45;
    if (v43) {
        v45 = v44;
    } else {
        v45 = 0;
    }
    var sources = new Array(v45);
    var _key = 1;
    let v46 = _key < _len;
    while (v46) {
        const v48 = _key - 1;
        const v49 = arguments[_key];
        sources[v48] = v49;
        const v47 = _key++;
        v46 = _key < _len;
    }
    const v76 = function (source) {
        const v50 = Object.keys(source);
        const v74 = function (prop) {
            const v51 = source[prop];
            const v52 = source[prop];
            const v53 = v52.constructor;
            const v54 = v51 && v53;
            const v55 = source[prop];
            const v56 = v55.constructor;
            const v57 = v56 === Object;
            const v58 = v54 && v57;
            if (v58) {
                const v59 = destination[prop];
                const v60 = !v59;
                const v61 = destination[prop];
                const v62 = v61.constructor;
                const v63 = !v62;
                const v64 = v60 || v63;
                const v65 = destination[prop];
                const v66 = v65.constructor;
                const v67 = v66 !== Object;
                const v68 = v64 || v67;
                if (v68) {
                    const v69 = {};
                    destination[prop] = v69;
                }
                const v70 = destination[prop];
                const v71 = source[prop];
                const v72 = merge(v70, v71);
                v72;
            } else {
                const v73 = source[prop];
                destination[prop] = v73;
            }
        };
        const v75 = v50.forEach(v74);
        v75;
    };
    const v77 = sources.forEach(v76);
    v77;
    return destination;
};
const v78 = exports.default;
module.exports = v78;
const v79 = module.exports;
const v80 = exports.default;
v79.default = v80;