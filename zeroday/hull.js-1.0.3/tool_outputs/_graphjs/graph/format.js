const v134 = function (pointset, format) {
    const v122 = format === undefined;
    if (v122) {
        const v123 = pointset.slice();
        return v123;
    }
    const v132 = function (pt) {
        const v124 = format[0];
        const v125 = 'return [pt' + v124;
        const v126 = v125 + ',';
        const v127 = v126 + 'pt';
        const v128 = format[1];
        const v129 = v127 + v128;
        const v130 = v129 + '];';
        const _getXY = new Function('pt', v130);
        const v131 = _getXY(pt);
        return v131;
    };
    const v133 = pointset.map(v132);
    return v133;
};
const v146 = function (pointset, format) {
    const v135 = format === undefined;
    if (v135) {
        const v136 = pointset.slice();
        return v136;
    }
    const v144 = function (pt) {
        const v137 = format[0];
        const v138 = 'const o = {}; o' + v137;
        const v139 = v138 + '= pt[0]; o';
        const v140 = format[1];
        const v141 = v139 + v140;
        const v142 = v141 + '= pt[1]; return o;';
        const _getObj = new Function('pt', v142);
        const v143 = _getObj(pt);
        return v143;
    };
    const v145 = pointset.map(v144);
    return v145;
};
const v147 = {};
v147.toXy = v134;
v147.fromXy = v146;
module.exports = v147;