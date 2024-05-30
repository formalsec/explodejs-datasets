var os = require('os');
var path = require('path');
var configUtil = require('./configUtil');
var childProcess = require('child_process');
var platform = os.platform();
const v49 = {};
v49.darwin = 'com.google.Chrome';
v49.appName = 'Google Chrome';
v49.win32 = 'chrome.exe';
v49.linux = 'google-chrome';
const v50 = {};
v50.darwin = 'org.mozilla.firefox';
v50.appName = 'firefox';
v50.win32 = 'firefox.exe';
const v51 = {};
v51.darwin = 'com.operasoftware.Opera';
v51.appName = 'Opera';
v51.win32 = 'opera.exe';
const v52 = {};
v52.darwin = 'com.apple.Safari';
v52.appName = 'Safari';
v52.win32 = 'safari.exe';
var browsers = {};
browsers['chrome'] = v49;
browsers['firefox'] = v50;
browsers['opera'] = v51;
browsers['safari'] = v52;
const v71 = function (browser, url, proxyURL, pacFileURL, dataDir, bypassList) {
    const v53 = this.detect(browser);
    const v69 = function (browserPath) {
        const v54 = !browserPath;
        if (v54) {
            const v55 = '[Error] can not find browser ' + browser;
            const v56 = Error(v55);
            throw v56;
        } else {
            const v57 = os.tmpdir();
            const v58 = path.join(v57, 'op-browser');
            dataDir = dataDir || v58;
            var commandOptions = configUtil[browser](dataDir, url, browserPath, proxyURL, pacFileURL, bypassList);
            const v67 = function (resolve, reject) {
                const v59 = path.resolve(browserPath);
                const v60 = 50000 * 1024;
                const v61 = { maxBuffer: v60 };
                const v65 = function (err) {
                    if (err) {
                        const v62 = reject(err);
                        v62;
                    } else {
                        const v63 = {
                            path: browserPath,
                            cmdOptions: commandOptions,
                            proxyURL: proxyURL,
                            pacFileURL: pacFileURL
                        };
                        const v64 = resolve(v63);
                        v64;
                    }
                };
                const v66 = childProcess.execFile(v59, commandOptions, v61, v65);
                v66;
            };
            const v68 = new Promise(v67);
            return v68;
        }
    };
    const v70 = v53.then(v69);
    return v70;
};
const v95 = function (name) {
    var result = '';
    var cmd = '';
    var info = browsers[name];
    const v93 = function (resolve, reject) {
        const v72 = !info;
        if (v72) {
            const v73 = Error('Browser not supported.');
            const v74 = reject(v73);
            v74;
        }
        try {
            switch (platform) {
            case 'darwin':
                const v75 = info.darwin;
                const v76 = 'mdfind "kMDItemCFBundleIdentifier==' + v75;
                cmd = v76 + '" | head -1';
                const v77 = childProcess.execSync(cmd);
                const v78 = v77.toString();
                result = v78.trim();
                const v79 = info.appName;
                result += '/Contents/MacOS/' + v79;
                result = result.replace(/\s/g, '\\ ');
                break;
            case 'win32':
                const v80 = info.win32;
                const v81 = 'reg query "HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths\\' + v80;
                cmd = v81 + '" /ve';
                const v82 = childProcess.execSync(cmd);
                const v83 = v82.toString();
                result = v83.trim();
                const v84 = result.split('\n');
                const v85 = v84.pop();
                const v86 = v85.split(/\s+REG_SZ\s+/);
                result = v86.pop();
                result = result.replace(/^"|"$/g, '');
                break;
            case 'linux':
                const v87 = info.linux;
                if (v87) {
                    const v88 = info.linux;
                    result = path.join('/usr/bin', v88);
                }
                break;
            default:
                result = name;
            }
        } catch (e) {
            const v89 = Error('Can not find browser info', name);
            const v90 = reject(v89);
            v90;
        }
        const v91 = result.trim();
        const v92 = resolve(v91);
        v92;
    };
    const v94 = new Promise(v93);
    return v94;
};
const v96 = {};
v96.open = v71;
v96.detect = v95;
module.exports = v96;