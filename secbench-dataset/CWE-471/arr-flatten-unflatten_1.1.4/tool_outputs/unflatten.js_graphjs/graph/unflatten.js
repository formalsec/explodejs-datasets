'use strict';
const unflatten = function (obj = {}) {
    const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g;
    const resultholder = {};
    let p;
    for (p in obj) {
        let curr = resultholder;
        let prop = '';
        let m = {};
        while (m = regex.exec(p)) {
            const v11 = curr[prop];
            const v12 = m[2];
            const v13 = [];
            const v14 = {};
            let v15;
            if (v12) {
                v15 = v13;
            } else {
                v15 = v14;
            }
            curr = v11 || (curr[prop] = v15);
            const v16 = m[2];
            const v17 = m[1];
            prop = v16 || v17;
        }
        const v18 = obj[p];
        curr[prop] = v18;
    }
    const v19 = resultholder[''];
    const v20 = v19 || resultholder;
    return v20;
};
module.exports = unflatten;