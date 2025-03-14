const v8 = require('child_process');
var execSync = v8.execSync;
var semver = require('semver');
const v12 = function (module_) {
    const v9 = 'tnpm view ' + module_;
    const v10 = v9 + ' version';
    const v11 = execSync(v10);
    var latestVersion = v11.toString();
    return latestVersion;
};
exports.latestVersion = v12;
const v14 = function (module_, version) {
    var latestVersion = this.latestVersion(module_);
    const v13 = semver.lt(version, latestVersion);
    if (v13) {
        return false;
    }
    return true;
};
exports.checkLatestVersion = v14;