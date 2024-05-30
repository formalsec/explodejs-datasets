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

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let iface = esl_symbolic.string("iface");
let callback = esl_symbolic.function("callback");
module.exports(iface, callback);
