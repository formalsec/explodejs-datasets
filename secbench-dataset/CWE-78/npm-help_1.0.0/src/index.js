/**
 * Created by @玩家 on 16/4/5.
 */
var execSync = require('child_process').execSync;
var semver = require('semver');

/**
 * 获取模块的最新版本号
 * @param module
 * @returns {string}
 */
exports.latestVersion = function (module_) {
	var latestVersion = execSync('tnpm view ' + module_ + ' version').toString();
	return latestVersion;
}

exports.checkLatestVersion = function (module_, version) {
	var latestVersion = this.latestVersion(module_);
	if (semver.lt(version, latestVersion)) {
		return false;
	}
	return true;
}
