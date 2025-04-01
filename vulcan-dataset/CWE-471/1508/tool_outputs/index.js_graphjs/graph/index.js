const fs = require('fs');
var REG_GROUP = /^\s*\[(.+?)\]\s*$/;
var REG_PROP = /^\s*([^#].*?)\s*=\s*(.*?)\s*$/;
const parse = function (string) {
    var object = {};
    var lines = string.split('\n');
    var group;
    var match;
    var i = 0;
    var len = lines.length;
    let v20 = i !== len;
    while (v20) {
        const v22 = lines[i];
        if (match = v22.match(REG_GROUP)) {
            const v23 = match[1];
            const v24 = match[1];
            const v25 = object[v24];
            const v26 = {};
            group = v25 || v26;
            object[v23] = group;
        } else {
            const v27 = lines[i];
            const v28 = group && (match = v27.match(REG_PROP));
            if (v28) {
                const v29 = match[1];
                const v30 = match[2];
                group[v29] = v30;
            }
        }
        const v21 = i++;
        v20 = i !== len;
    }
    return object;
};
const parseFile = function (file, callback) {
    const v34 = function (error, data) {
        if (error) {
            const v31 = callback(error);
            return v31;
        }
        const v32 = parse(data);
        const v33 = callback(null, v32);
        v33;
    };
    const v35 = fs.readFile(file, 'utf-8', v34);
    v35;
};
const parseFileSync = function (file) {
    const v36 = fs.readFileSync(file, 'utf-8');
    const v37 = parse(v36);
    return v37;
};
const v38 = {};
v38.parse = parse;
v38.parseFile = parseFile;
v38.parseFileSync = parseFileSync;
module.exports = v38;