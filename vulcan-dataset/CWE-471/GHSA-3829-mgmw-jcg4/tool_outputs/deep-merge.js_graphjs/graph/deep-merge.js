'use strict';
const deepMerge = function (result, initial, options = {}) {
    let nodes = [];
    let current = [initial];
    let levelCount = 0;
    let depth;
    const v60 = options.depth;
    const v61 = typeof v60;
    const v62 = v61 === 'number';
    const v63 = options.depth;
    if (v62) {
        depth = v63;
    } else {
        depth = Infinity;
    }
    while (current) {
        let key;
        const v64 = current[0];
        for (key in v64) {
            const v65 = current[0];
            const v66 = v65[key];
            const v67 = current[0];
            const v68 = v67[key];
            const v69 = typeof v68;
            const v70 = v69 === 'object';
            const v71 = v66 && v70;
            const v72 = options.deep;
            const v73 = v72 !== false;
            const v74 = v71 && v73;
            const v75 = depth > 0;
            const v76 = v74 && v75;
            if (v76) {
                let parent;
                const v77 = current[0];
                const v78 = v77[key];
                let isArray = Array.isArray(v78);
                const v79 = current[1];
                if (v79) {
                    const v80 = current[1];
                    const v81 = current[1];
                    const v82 = v81[key];
                    const v83 = current[1];
                    const v84 = v83[key];
                    const v85 = typeof v84;
                    const v86 = v85 === 'object';
                    const v87 = v82 && v86;
                    const v88 = current[1];
                    const v89 = v88[key];
                    const v90 = [];
                    const v91 = {};
                    let v92;
                    if (isArray) {
                        v92 = v90;
                    } else {
                        v92 = v91;
                    }
                    let v93;
                    if (v87) {
                        v93 = v89;
                    } else {
                        v93 = v92;
                    }
                    v80[key] = v93;
                    const v94 = current[1];
                    parent = v94[key];
                } else {
                    const v95 = result[key];
                    const v96 = result[key];
                    const v97 = typeof v96;
                    const v98 = v97 === 'object';
                    const v99 = v95 && v98;
                    const v100 = result[key];
                    const v101 = [];
                    const v102 = {};
                    let v103;
                    if (isArray) {
                        v103 = v101;
                    } else {
                        v103 = v102;
                    }
                    let v104;
                    if (v99) {
                        v104 = v100;
                    } else {
                        v104 = v103;
                    }
                    result[key] = v104;
                    parent = result[key];
                }
                const v105 = levelCount++;
                v105;
                const v106 = current[0];
                const v107 = v106[key];
                const v108 = [
                    v107,
                    parent
                ];
                const v109 = nodes.push(v108);
                v109;
            } else {
                const v110 = current[1];
                if (v110) {
                    const v111 = current[1];
                    const v112 = current[0];
                    const v113 = v112[key];
                    v111[key] = v113;
                } else {
                    const v114 = current[0];
                    const v115 = v114[key];
                    result[key] = v115;
                }
            }
        }
        const v116 = --levelCount;
        const v117 = v116 === 0;
        if (v117) {
            const v118 = depth--;
            v118;
        }
        current = nodes.shift();
    }
    return result;
};
module.exports = deepMerge;