var fs = require('fs');
const v40 = function (filepath, split, encoding) {
    const v21 = typeof split;
    const v22 = v21 !== 'undefined';
    if (v22) {
        split = split;
    } else {
        split = '\n';
    }
    const v23 = typeof encoding;
    const v24 = v23 !== 'undefined';
    if (v24) {
        encoding = encoding;
    } else {
        encoding = 'utf8';
    }
    var ca = [];
    var chain = fs.readFileSync(filepath, encoding);
    const v25 = chain.indexOf('-END CERTIFICATE-');
    const v26 = v25 < 0;
    const v27 = chain.indexOf('-BEGIN CERTIFICATE-');
    const v28 = v27 < 0;
    const v29 = v26 || v28;
    if (v29) {
        const v30 = Error('File does not contain \'BEGIN CERTIFICATE\' or \'END CERTIFICATE\'');
        throw v30;
    }
    chain = chain.split(split);
    var cert = [];
    var _i;
    var _len;
    (_i = 0, _len = chain.length)
    let v31 = _i < _len;
    while (v31) {
        var line = chain[_i];
        const v33 = line.length;
        const v34 = v33 !== 0;
        const v35 = !v34;
        if (v35) {
            continue;
        }
        const v36 = cert.push(line);
        v36;
        const v37 = line.match(/-END CERTIFICATE-/);
        if (v37) {
            const v38 = cert.join(split);
            const v39 = ca.push(v38);
            v39;
            cert = [];
        }
        const v32 = _i++;
        v31 = _i < _len;
    }
    return ca;
};
module.exports = v40;