module.exports = function (packageName, { registry = '', timeout = null } = {}) {
    try {
        let version;

        const config = {
            stdio: ['pipe', 'pipe', 'ignore']
        };

        if (timeout) {
            config.timeout = timeout;
        }

        if (registry) {
            version = require('child_process').execSync(`npm view ${packageName} version --registry ${registry}`, config);
        } else {
            version = require('child_process').execSync(`npm view ${packageName} version`, config);
        }

        if (version) {
            return version.toString().trim().replace(/^\n*/, '').replace(/\n*$/, '');
        } else {
            return null;
        }

    } catch(err) {
        return null;
    }
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let packageName = esl_symbolic.string("packageName");
let undefined = esl_symbolic.any("undefined");
module.exports(packageName, undefined);
