var fs = require('fs');
var stream = require('stream-source');
const v24 = function (path, options) {
    var highWaterMark = 65536;
    const v13 = options.highWaterMark;
    const v14 = v13 != null;
    const v15 = options && v14;
    if (v15) {
        highWaterMark = options.highWaterMark;
    }
    const v22 = function (resolve, reject) {
        const v16 = { highWaterMark: highWaterMark };
        var f = fs.createReadStream(path, v16);
        const v19 = function () {
            const v17 = stream(f);
            const v18 = resolve(v17);
            v18;
        };
        const v20 = f.once('open', v19);
        v20;
        const v21 = f.once('error', reject);
        v21;
    };
    const v23 = new Promise(v22);
    return v23;
};
module.exports = v24;