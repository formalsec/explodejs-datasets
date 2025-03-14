'use strict';
const v42 = require('child_process');
var exec = v42.exec;
var isDigits = function (value) {
    const v43 = typeof value;
    const v44 = v43 === 'string';
    const v45 = /^[0-9]+$/.test(value);
    const v46 = v44 && v45;
    return v46;
};
const diskusage = function (path, cb) {
    const v47 = path.indexOf('"');
    const v48 = -1;
    const v49 = v47 !== v48;
    if (v49) {
        const v50 = new Error('Paths with double quotes are not supported yet');
        const v51 = cb(v50);
        return v51;
    }
    const v52 = 'df -k "' + path;
    const v53 = v52 + '"';
    const v58 = function (err, stdout) {
        if (err) {
            const v54 = cb(err);
            return v54;
        }
        try {
            const v55 = parse(stdout);
            const v56 = cb(null, v55);
            v56;
        } catch (e) {
            const v57 = cb(e);
            v57;
        }
    };
    const v59 = exec(v53, v58);
    v59;
};
const parse = function (dusage) {
    var lines = dusage.split('\n');
    const v60 = lines[1];
    const v61 = !v60;
    if (v61) {
        const v62 = 'Unexpected df output: [' + dusage;
        const v63 = v62 + ']';
        const v64 = new Error(v63);
        throw v64;
    }
    const v65 = lines[1];
    const v66 = v65.split(' ');
    const v68 = function (x) {
        const v67 = x !== '';
        return v67;
    };
    var parts = v66.filter(v68);
    var total = parts[1];
    var used = parts[2];
    var available = parts[3];
    const v69 = isDigits(total);
    const v70 = isDigits(used);
    const v71 = v69 && v70;
    const v72 = isDigits(available);
    const v73 = v71 && v72;
    const v74 = !v73;
    if (v74) {
        const v75 = 'Unexpected df output: [' + dusage;
        const v76 = v75 + ']';
        const v77 = new Error(v76);
        throw v77;
    }
    const v78 = total * 1024;
    const v79 = used * 1024;
    const v80 = available * 1024;
    const v81 = {};
    v81.total = v78;
    v81.used = v79;
    v81.available = v80;
    return v81;
};
const v82 = {};
v82.diskusage = diskusage;
v82.parse = parse;
module.exports = v82;