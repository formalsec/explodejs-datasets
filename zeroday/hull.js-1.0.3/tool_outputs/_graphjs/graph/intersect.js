const ccw = function (x1, y1, x2, y2, x3, y3) {
    const v1 = y3 - y1;
    const v2 = x2 - x1;
    const v3 = v1 * v2;
    const v4 = y2 - y1;
    const v5 = x3 - x1;
    const v6 = v4 * v5;
    const cw = v3 - v6;
    const v7 = cw > 0;
    const v8 = cw < 0;
    let v9;
    if (v8) {
        v9 = false;
    } else {
        v9 = true;
    }
    let v10;
    if (v7) {
        v10 = true;
    } else {
        v10 = v9;
    }
    return v10;
};
const intersect = function (seg1, seg2) {
    const v11 = seg1[0];
    const x1 = v11[0];
    const v12 = seg1[0];
    const y1 = v12[1];
    const v13 = seg1[1];
    const x2 = v13[0];
    const v14 = seg1[1];
    const y2 = v14[1];
    const v15 = seg2[0];
    const x3 = v15[0];
    const v16 = seg2[0];
    const y3 = v16[1];
    const v17 = seg2[1];
    const x4 = v17[0];
    const v18 = seg2[1];
    const y4 = v18[1];
    const v19 = ccw(x1, y1, x3, y3, x4, y4);
    const v20 = ccw(x2, y2, x3, y3, x4, y4);
    const v21 = v19 !== v20;
    const v22 = ccw(x1, y1, x2, y2, x3, y3);
    const v23 = ccw(x1, y1, x2, y2, x4, y4);
    const v24 = v22 !== v23;
    const v25 = v21 && v24;
    return v25;
};
module.exports = intersect;