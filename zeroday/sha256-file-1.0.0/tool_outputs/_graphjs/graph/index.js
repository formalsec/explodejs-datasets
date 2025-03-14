'use strict';
var crypto = require('crypto');
var fs = require('fs');
const v36 = function (filename, callback) {
    var sum = crypto.createHash('sha256');
    const v19 = typeof callback;
    const v20 = v19 === 'function';
    const v21 = callback && v20;
    if (v21) {
        var fileStream = fs.createReadStream(filename);
        const v23 = function (err) {
            const v22 = callback(err, null);
            return v22;
        };
        const v24 = fileStream.on('error', v23);
        v24;
        const v27 = function (chunk) {
            try {
                const v25 = sum.update(chunk);
                v25;
            } catch (ex) {
                const v26 = callback(ex, null);
                return v26;
            }
        };
        const v28 = fileStream.on('data', v27);
        v28;
        const v31 = function () {
            const v29 = sum.digest('hex');
            const v30 = callback(null, v29);
            return v30;
        };
        const v32 = fileStream.on('end', v31);
        v32;
    } else {
        const v33 = fs.readFileSync(filename);
        const v34 = sum.update(v33);
        v34;
        const v35 = sum.digest('hex');
        return v35;
    }
};
module.exports = v36;