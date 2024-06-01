'use strict';
const isObject = element => {
    const v92 = typeof element;
    const v93 = v92 === 'object';
    return v93;
};
const noObjectsInArray = array => {
    const v94 = array.findIndex(isObject);
    const v95 = -1;
    const v96 = v94 === v95;
    return v96;
};
const arrayMerge = (original, patch, removeMode) => {
    let orig_length = original.length;
    const patch_length = patch.length;
    let i;
    let isArr;
    const v97 = patch_length < orig_length;
    if (v97) {
        const v98 = new Error('Cannot remove object array elements, only make them null');
        throw v98;
    }
    (i = 0)
    let v99 = i < orig_length;
    while (v99) {
        const v101 = patch[i];
        const v102 = isObject(v101);
        const v103 = !v102;
        const v104 = patch[i];
        const v105 = v104 === null;
        const v106 = v103 || v105;
        const v107 = original[i];
        const v108 = isObject(v107);
        const v109 = !v108;
        const v110 = original[i];
        const v111 = v110 === null;
        const v112 = v109 || v111;
        const v113 = patch[i];
        const v114 = Object.getOwnPropertyNames(v113);
        const v115 = v114.length;
        const v116 = v112 && v115;
        const v117 = v106 || v116;
        const v118 = patch[i];
        const v119 = original[i];
        const v120 = Array.isArray(v119);
        const v121 = (isArr = Array.isArray(v118)) !== v120;
        const v122 = v117 || v121;
        const v123 = patch[i];
        const v124 = noObjectsInArray(v123);
        const v125 = isArr && v124;
        const v126 = original[i];
        const v127 = noObjectsInArray(v126);
        const v128 = v125 && v127;
        const v129 = v122 || v128;
        if (v129) {
            const v130 = patch[i];
            original[i] = v130;
        } else {
            if (isArr) {
                const v131 = original[i];
                const v132 = patch[i];
                const v133 = arrayMerge(v131, v132, removeMode);
                original[i] = v133;
            } else {
                const v134 = original[i];
                const v135 = patch[i];
                const v136 = objectMerge(v134, v135, removeMode);
                original[i] = v136;
            }
        }
        const v100 = i++;
        v99 = i < orig_length;
    }
    let v137 = orig_length !== patch_length;
    while (v137) {
        const v138 = orig_length++;
        const v139 = patch[v138];
        const v140 = original.push(v139);
        v140;
        v137 = orig_length !== patch_length;
    }
    return original;
};
const objectMerge = (original, patch, removeMode) => {
    const patchProps = Object.getOwnPropertyNames(patch);
    let i;
    let len;
    (i = 0, len = patchProps.length)
    let v141 = i < len;
    while (v141) {
        const name = patchProps[i];
        let isArr;
        const v143 = patch[name];
        const v144 = isObject(v143);
        const v145 = !v144;
        const v146 = patch[name];
        const v147 = v146 === null;
        const v148 = v145 || v147;
        const v149 = patch[name];
        const v150 = original[name];
        const v151 = Array.isArray(v150);
        const v152 = (isArr = Array.isArray(v149)) !== v151;
        const v153 = v148 || v152;
        const v154 = patch[name];
        const v155 = noObjectsInArray(v154);
        const v156 = isArr && v155;
        const v157 = original[name];
        const v158 = noObjectsInArray(v157);
        const v159 = v156 && v158;
        const v160 = v153 || v159;
        if (v160) {
            const v161 = removeMode !== 1;
            const v162 = patch[name];
            const v163 = v162 !== null;
            const v164 = v161 || v163;
            if (v164) {
                const v165 = patch[name];
                original[name] = v165;
            } else {
                original[name] = undefined;
            }
        } else {
            if (isArr) {
                const v166 = original[name];
                const v167 = patch[name];
                const v168 = arrayMerge(v166, v167, removeMode);
                original[name] = v168;
            } else {
                const v169 = original[name];
                const v170 = patch[name];
                const v171 = objectMerge(v169, v170, removeMode);
                original[name] = v171;
            }
        }
        const v142 = i++;
        v141 = i < len;
    }
    return original;
};
const v182 = (original, patch, removeMode) => {
    const v172 = patch === null;
    const v173 = JSON.stringify(original);
    const v174 = JSON.parse(v173);
    const v175 = JSON.stringify(patch);
    const v176 = JSON.parse(v175);
    const v177 = typeof removeMode;
    const v178 = v177 !== 'number';
    let v179;
    if (v178) {
        v179 = 1;
    } else {
        v179 = removeMode;
    }
    const v180 = objectMerge(v174, v176, v179);
    let v181;
    if (v172) {
        v181 = null;
    } else {
        v181 = v180;
    }
    return v181;
};
module.exports = v182;