'use strict';
const crypto = require('crypto');
const fs = require('fs');
const getCacheKey = function (files) {
    const v11 = (hash, file) => {
        const v8 = hash.update('\0', 'utf8');
        const v9 = fs.readFileSync(file);
        const v10 = v8.update(v9);
        return v10;
    };
    const v12 = crypto.createHash('md5');
    const v13 = files.reduce(v11, v12);
    const v14 = v13.digest('hex');
    return v14;
};
module.exports = getCacheKey;