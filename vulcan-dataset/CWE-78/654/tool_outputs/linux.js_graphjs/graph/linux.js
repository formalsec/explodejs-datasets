const v11 = require('child_process');
var exec = v11.exec;
const v20 = function (iface, callback) {
    const v12 = 'cat /sys/class/net/' + iface;
    const v13 = v12 + '/address';
    const v18 = function (err, out) {
        if (err) {
            const v14 = callback(err, null);
            v14;
            return;
        }
        const v15 = out.trim();
        const v16 = v15.toLowerCase();
        const v17 = callback(null, v16);
        v17;
    };
    const v19 = exec(v13, v18);
    v19;
};
module.exports = v20;