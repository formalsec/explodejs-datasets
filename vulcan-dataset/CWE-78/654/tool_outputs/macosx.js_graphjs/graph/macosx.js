const v12 = require('child_process');
var exec = v12.exec;
const v22 = function (iface, callback) {
    const v13 = 'networksetup -getmacaddress ' + iface;
    const v20 = function (err, out) {
        if (err) {
            const v14 = callback(err, null);
            v14;
            return;
        }
        const v15 = out.toLowerCase();
        var match = /[a-f0-9]{2}(:[a-f0-9]{2}){5}/.exec(v15);
        const v16 = !match;
        if (v16) {
            const v17 = callback('did not find a mac address', null);
            v17;
            return;
        }
        const v18 = match[0];
        const v19 = callback(null, v18);
        v19;
    };
    const v21 = exec(v13, v20);
    v21;
};
module.exports = v22;