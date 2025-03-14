var path = require('path');
var exeq = require('exeq');
var common = require('./common');
const v54 = function () {
    const v52 = this.path;
    const v53 = v52 + '/Contents/MacOS/Google Chrome';
    return v53;
};
const v65 = function (cb) {
    var that = this;
    const v55 = this.version;
    if (v55) {
        const v56 = cb(true);
        v56;
        return;
    }
    const v63 = function (err, p) {
        if (err) {
            const v57 = cb(false);
            v57;
            return;
        }
        that.path = p;
        var pl = path.join(p, 'Contents', 'Info.plist');
        const v61 = function (v) {
            const v58 = !v;
            if (v58) {
                const v59 = cb(false);
                v59;
                return;
            }
            that.version = v;
            const v60 = cb(true);
            v60;
        };
        const v62 = common.parseVersionByPlist(pl, 'KSVersion', v61);
        v62;
    };
    const v64 = common.find('com.google.Chrome', v63);
    v64;
};
const v70 = function (str) {
    const v66 = /\s/g.test(str);
    const v67 = '"' + str;
    const v68 = v67 + '"';
    let v69;
    if (v66) {
        v69 = v68;
    } else {
        v69 = str;
    }
    return v69;
};
var chrome = {};
chrome.getCommand = v54;
chrome.isExist = v65;
chrome.fixWhitespace = v70;
const v86 = function () {
    const v71 = chrome.getCommand();
    const v72 = [v71];
    const v73 = process.argv;
    const v74 = v73.slice(2);
    const v75 = v72.concat(v74);
    const v76 = chrome.fixWhitespace;
    const v77 = v75.map(v76);
    const v78 = v77.join(' ');
    const v79 = exeq(v78);
    const v84 = function (err) {
        const v80 = console.error('Failed to open Google Chrome as intended', err);
        v80;
        const v81 = err.code;
        const v82 = v81 || 13;
        const v83 = process.exit(v82);
        v83;
    };
    const v85 = v79.catch(v84);
    v85;
};
const v87 = chrome.isExist(v86);
v87;