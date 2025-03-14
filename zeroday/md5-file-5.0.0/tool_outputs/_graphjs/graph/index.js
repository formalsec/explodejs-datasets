const crypto = require('crypto');
const fs = require('fs');
const BUFFER_SIZE = 8192;
const md5FileSync = function (path) {
    const fd = fs.openSync(path, 'r');
    const hash = crypto.createHash('md5');
    const buffer = Buffer.alloc(BUFFER_SIZE);
    try {
        let bytesRead;
        let v18 = true;
        while (v18) {
            bytesRead = fs.readSync(fd, buffer, 0, BUFFER_SIZE);
            const v19 = buffer.slice(0, bytesRead);
            const v20 = hash.update(v19);
            v20;
            v18 = bytesRead === BUFFER_SIZE;
        }
    } finally {
        const v21 = fs.closeSync(fd);
        v21;
    }
    const v22 = hash.digest('hex');
    return v22;
};
const md5File = function (path) {
    const v32 = (resolve, reject) => {
        const output = crypto.createHash('md5');
        const input = fs.createReadStream(path);
        const v24 = err => {
            const v23 = reject(err);
            v23;
        };
        const v25 = input.on('error', v24);
        v25;
        const v29 = () => {
            const v26 = output.read();
            const v27 = v26.toString('hex');
            const v28 = resolve(v27);
            v28;
        };
        const v30 = output.once('readable', v29);
        v30;
        const v31 = input.pipe(output);
        v31;
    };
    const v33 = new Promise(v32);
    return v33;
};
module.exports = md5File;
const v34 = module.exports;
v34.sync = md5FileSync;