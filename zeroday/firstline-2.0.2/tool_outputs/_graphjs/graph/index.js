'use strict';
const fs = require('fs');
const v44 = (path, usrOpts) => {
    const opts = {};
    opts.encoding = 'utf8';
    opts.lineEnding = '\n';
    const v23 = Object.assign(opts, usrOpts);
    v23;
    const v42 = (resolve, reject) => {
        const v24 = opts.encoding;
        const v25 = { encoding: v24 };
        const rs = fs.createReadStream(path, v25);
        let acc = '';
        let pos = 0;
        let index;
        const v30 = chunk => {
            const v26 = opts.lineEnding;
            index = chunk.indexOf(v26);
            acc += chunk;
            const v27 = -1;
            const v28 = index === v27;
            if (v28) {
                pos += chunk.length;
            } else {
                pos += index;
                const v29 = rs.close();
                v29;
            }
        };
        const v31 = rs.on('data', v30);
        const v37 = () => {
            const v32 = acc.charCodeAt(0);
            const v33 = v32 === 65279;
            let v34;
            if (v33) {
                v34 = 1;
            } else {
                v34 = 0;
            }
            const v35 = acc.slice(v34, pos);
            const v36 = resolve(v35);
            return v36;
        };
        const v38 = v31.on('close', v37);
        const v40 = err => {
            const v39 = reject(err);
            return v39;
        };
        const v41 = v38.on('error', v40);
        v41;
    };
    const v43 = new Promise(v42);
    return v43;
};
module.exports = v44;