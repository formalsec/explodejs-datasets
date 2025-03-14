const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const THIS_FILE = fs.readFileSync(__filename);
const base64 = (filename, data) => {
    const v25 = path.extname(filename);
    let extname = v25.substr(1);
    extname = extname || 'png';
    const v26 = extname === 'svg';
    if (v26) {
        extname = 'svg+xml';
    }
    const v27 = 'data:image/' + extname;
    const v28 = v27 + ';base64,';
    const v29 = data.toString('base64');
    const v30 = v28 + v29;
    return v30;
};
const v43 = (fileData, filename, configString, {instrument}) => {
    const v31 = crypto.createHash('md5');
    const v32 = v31.update(THIS_FILE);
    const v33 = v32.update('\0', 'utf8');
    const v34 = v33.update(fileData);
    const v35 = v34.update('\0', 'utf8');
    const v36 = v35.update(filename);
    const v37 = v36.update('\0', 'utf8');
    const v38 = v37.update(configString);
    const v39 = v38.update('\0', 'utf8');
    let v40;
    if (instrument) {
        v40 = 'instrument';
    } else {
        v40 = '';
    }
    const v41 = v39.update(v40);
    const v42 = v41.digest('hex');
    return v42;
};
const v47 = (src, filename, config, options) => {
    const v44 = fs.readFileSync(filename);
    const data = base64(filename, v44);
    const v45 = JSON.stringify(data);
    const v46 = `module.exports = ${ v45 };`;
    return v46;
};
const v48 = {};
v48.getCacheKey = v43;
v48.process = v47;
module.exports = v48;