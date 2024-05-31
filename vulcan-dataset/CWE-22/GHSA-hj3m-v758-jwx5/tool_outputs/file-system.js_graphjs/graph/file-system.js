const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const config = require('../config');
const currentWorkDirectory = process.cwd();
const createReadStream = function (url) {
    const entryDir = config.getOption('entryDir');
    const filePath = path.join(entryDir, url);
    const readStream = fs.createReadStream(filePath);
    return readStream;
};
const findEntryPoint = function () {
    const v26 = async (resolve, reject) => {
        try {
            let dirName;
            let entryPoint = config.getOption('entryPoint');
            const filePath = path.join(currentWorkDirectory, entryPoint);
            let fileName = path.basename(filePath);
            const v15 = fileName.split('.');
            const v16 = v15[1];
            if (v16) {
                dirName = path.dirname(filePath);
            } else {
                dirName = filePath;
                fileName = 'index.html';
            }
            const v17 = config.setOption('entryDir', dirName);
            v17;
            const v18 = config.setOption('entryName', fileName);
            v18;
            const files = await fsp.readdir(dirName);
            const v20 = _f => {
                const v19 = _f == fileName;
                return v19;
            };
            const matchedEntryPoint = files.find(v20);
            if (matchedEntryPoint) {
                const v21 = resolve(matchedEntryPoint);
                v21;
            } else {
                const v22 = `No Entry Point Found ${ entryPoint }`;
                const v23 = reject(v22);
                v23;
            }
        } catch (err) {
            const v24 = `Please Type correct Entry Point Found`;
            const v25 = reject(v24);
            v25;
        }
    };
    const v27 = new Promise(v26);
    return v27;
};
const v28 = {};
v28.createReadStream = createReadStream;
v28.findEntryPoint = findEntryPoint;
module.exports = v28;