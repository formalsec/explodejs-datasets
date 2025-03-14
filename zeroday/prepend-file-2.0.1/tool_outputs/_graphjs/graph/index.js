'use strict';
const fs = require('fs');
const stream = require('stream');
const v50 = require('util');
const promisify = v50.promisify;
const tempWrite = require('temp-write');
const path = require('path');
const v51 = stream.pipeline;
const pipeline = promisify(v51);
const v52 = stream;
const Transform = v52.Transform;
const hasBOM = function (text) {
    const v53 = text.toString();
    const v54 = v53.charCodeAt(0);
    const v55 = v54 === 65279;
    return v55;
};
const prependBOM = function (text) {
    const v56 = '\uFEFF' + text;
    return v56;
};
const stripBOM = function (text) {
    const v57 = text.toString();
    const v58 = v57.slice(1);
    return v58;
};
const v84 = async (filename, data) => {
    let bomFound = false;
    let bomPlaced = false;
    const v64 = function (chunk, _, callback) {
        let fileData = chunk;
        const v59 = !bomFound;
        if (v59) {
            bomFound = hasBOM(fileData);
            const v60 = hasBOM(fileData);
            const v61 = stripBOM(fileData);
            if (v60) {
                fileData = v61;
            } else {
                fileData = fileData;
            }
        }
        const v62 = Buffer.from(fileData);
        const v63 = callback(false, v62);
        v63;
    };
    const v65 = { transform: v64 };
    const checkStripBomTransformer = new Transform(v65);
    const v70 = function (chunk, _, callback) {
        let fileData = chunk.toString();
        const v66 = !bomPlaced;
        const v67 = bomFound && v66;
        if (v67) {
            fileData = prependBOM(fileData);
            bomPlaced = true;
        }
        const v68 = Buffer.from(fileData);
        const v69 = callback(false, v68);
        v69;
    };
    const v71 = { transform: v70 };
    const checkPrependBomTransformer = new Transform(v71);
    filename = path.resolve(filename);
    const temporaryFile = await tempWrite(data);
    try {
        const v72 = fs.createReadStream(filename);
        const v73 = { flags: 'a' };
        const v74 = fs.createWriteStream(temporaryFile, v73);
        await pipeline(v72, checkStripBomTransformer, v74);
    } catch (error) {
        const v75 = error.code;
        const v76 = v75 === 'ENOENT';
        const v77 = error.path;
        const v78 = v77 === filename;
        const v79 = v76 && v78;
        if (v79) {
            const v80 = fs.promises;
            await v80.writeFile(filename, data);
            return;
        }
        throw error;
    }
    const v81 = fs.createReadStream(temporaryFile);
    const v82 = fs.createWriteStream(filename);
    await pipeline(v81, checkPrependBomTransformer, v82);
    const v83 = fs.promises;
    await v83.unlink(temporaryFile);
};
module.exports = v84;
const v85 = module.exports;
const v98 = (filename, data) => {
    let fileData;
    try {
        fileData = fs.readFileSync(filename);
    } catch (error) {
        const v86 = error.code;
        const v87 = v86 === 'ENOENT';
        if (v87) {
            const v88 = fs.writeFileSync(filename, data);
            v88;
            return;
        }
        throw error;
    }
    const v89 = hasBOM(fileData);
    const v90 = prependBOM(data);
    if (v89) {
        data = v90;
    } else {
        data = data;
    }
    const v91 = hasBOM(fileData);
    const v92 = stripBOM(fileData);
    if (v91) {
        fileData = v92;
    } else {
        fileData = fileData;
    }
    const v93 = Buffer.from(data);
    const v94 = Buffer.from(fileData);
    const v95 = [
        v93,
        v94
    ];
    const v96 = Buffer.concat(v95);
    const v97 = fs.writeFileSync(filename, v96);
    v97;
};
v85.sync = v98;