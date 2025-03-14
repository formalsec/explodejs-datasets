const _cross = function (o, a, b) {
    const v148 = a[0];
    const v149 = o[0];
    const v150 = v148 - v149;
    const v151 = b[1];
    const v152 = o[1];
    const v153 = v151 - v152;
    const v154 = v150 * v153;
    const v155 = a[1];
    const v156 = o[1];
    const v157 = v155 - v156;
    const v158 = b[0];
    const v159 = o[0];
    const v160 = v158 - v159;
    const v161 = v157 * v160;
    const v162 = v154 - v161;
    return v162;
};
const _upperTangent = function (pointset) {
    const lower = [];
    let l = 0;
    const v163 = pointset.length;
    let v164 = l < v163;
    while (v164) {
        const v166 = lower.length;
        const v167 = v166 >= 2;
        const v168 = lower.length;
        const v169 = v168 - 2;
        const v170 = lower[v169];
        const v171 = lower.length;
        const v172 = v171 - 1;
        const v173 = lower[v172];
        const v174 = pointset[l];
        const v175 = _cross(v170, v173, v174);
        const v176 = v175 <= 0;
        let v177 = v167 && v176;
        while (v177) {
            const v178 = lower.pop();
            v178;
            v177 = v167 && v176;
        }
        const v179 = pointset[l];
        const v180 = lower.push(v179);
        v180;
        const v165 = l++;
        v164 = l < v163;
    }
    const v181 = lower.pop();
    v181;
    return lower;
};
const _lowerTangent = function (pointset) {
    const reversed = pointset.reverse();
    const upper = [];
    let u = 0;
    const v182 = reversed.length;
    let v183 = u < v182;
    while (v183) {
        const v185 = upper.length;
        const v186 = v185 >= 2;
        const v187 = upper.length;
        const v188 = v187 - 2;
        const v189 = upper[v188];
        const v190 = upper.length;
        const v191 = v190 - 1;
        const v192 = upper[v191];
        const v193 = reversed[u];
        const v194 = _cross(v189, v192, v193);
        const v195 = v194 <= 0;
        let v196 = v186 && v195;
        while (v196) {
            const v197 = upper.pop();
            v197;
            v196 = v186 && v195;
        }
        const v198 = reversed[u];
        const v199 = upper.push(v198);
        v199;
        const v184 = u++;
        v183 = u < v182;
    }
    const v200 = upper.pop();
    v200;
    return upper;
};
const convex = function (pointset) {
    const upper = _upperTangent(pointset);
    const lower = _lowerTangent(pointset);
    const convex = lower.concat(upper);
    const v201 = pointset[0];
    const v202 = convex.push(v201);
    v202;
    return convex;
};
module.exports = convex;