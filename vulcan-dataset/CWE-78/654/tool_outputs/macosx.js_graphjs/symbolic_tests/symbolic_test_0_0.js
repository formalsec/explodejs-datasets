var exec = require('child_process').exec;

module.exports = function (iface, callback) {
    exec("networksetup -getmacaddress " + iface, function (err, out) {
        if (err) {
            callback(err, null);
            return;
        }
        var match = /[a-f0-9]{2}(:[a-f0-9]{2}){5}/.exec(out.toLowerCase());
        if (!match) {
            callback("did not find a mac address", null);
            return;
        }
        callback(null, match[0]);
    });
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let iface = esl_symbolic.string("iface");
let callback = esl_symbolic.function("callback");
module.exports(iface, callback);
