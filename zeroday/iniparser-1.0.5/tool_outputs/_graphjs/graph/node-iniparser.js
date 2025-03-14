var fs = require('fs');
var regex = {};
regex.section = /^\s*\[\s*([^\]]*)\s*\]\s*$/;
regex.param = /^\s*([\w\.\-\_]+)\s*=\s*(.*?)\s*$/;
regex.comment = /^\s*;.*$/;
const v34 = module.exports;
const v41 = function (file, callback) {
    const v35 = !callback;
    if (v35) {
        return;
    }
    const v39 = function (err, data) {
        if (err) {
            const v36 = callback(err);
            v36;
        } else {
            const v37 = parse(data);
            const v38 = callback(null, v37);
            v38;
        }
    };
    const v40 = fs.readFile(file, 'utf8', v39);
    v40;
};
v34.parse = v41;
const v42 = module.exports;
const v45 = function (file) {
    const v43 = fs.readFileSync(file, 'utf8');
    const v44 = parse(v43);
    return v44;
};
v42.parseSync = v45;
const parse = function (data) {
    var value = {};
    var lines = data.split(/\r\n|\r|\n/);
    var section = null;
    const v64 = function (line) {
        const v46 = regex.comment;
        const v47 = v46.test(line);
        if (v47) {
            return;
        } else {
            const v48 = regex.param;
            const v49 = v48.test(line);
            if (v49) {
                const v50 = regex.param;
                var match = line.match(v50);
                if (section) {
                    const v51 = value[section];
                    const v52 = match[1];
                    const v53 = match[2];
                    v51[v52] = v53;
                } else {
                    const v54 = match[1];
                    const v55 = match[2];
                    value[v54] = v55;
                }
            } else {
                const v56 = regex.section;
                const v57 = v56.test(line);
                if (v57) {
                    const v58 = regex.section;
                    var match = line.match(v58);
                    const v59 = match[1];
                    const v60 = {};
                    value[v59] = v60;
                    section = match[1];
                } else {
                    const v61 = line.length;
                    const v62 = v61 == 0;
                    const v63 = v62 && section;
                    if (v63) {
                        section = null;
                    }
                }
            }
        }
        ;
    };
    const v65 = lines.forEach(v64);
    v65;
    return value;
};
const v66 = module.exports;
v66.parseString = parse;