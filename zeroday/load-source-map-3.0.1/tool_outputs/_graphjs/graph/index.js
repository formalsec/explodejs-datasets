'use strict';
const fs = require('fs');
const path = require('path');
const v43 = require('source-map');
const SourceMapConsumer = v43.SourceMapConsumer;
const INLINE_SOURCEMAP_REGEX = /^data:application\/json[^,]+base64,/;
const SOURCEMAP_REGEX = /(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^*]+?)[ \t]*(?:\*\/)[ \t]*$)/;
const READ_FILE_OPTS = {};
READ_FILE_OPTS.encoding = 'utf8';
const readSourceMap = function (filename, cb) {
    const v65 = function (err, sourceFile) {
        if (err) {
            const v44 = cb(err);
            return v44;
        }
        const v45 = path.dirname(filename);
        const sourceMapUrl = resolveSourceMapUrl(sourceFile, v45);
        const v46 = !sourceMapUrl;
        if (v46) {
            const v47 = cb();
            return v47;
        }
        const v48 = isInlineMap(sourceMapUrl);
        if (v48) {
            const v49 = decodeInlineMap(sourceMapUrl);
            const v50 = onMapRead(null, v49);
            return v50;
        }
        const v51 = fs.readFile(sourceMapUrl, READ_FILE_OPTS, onMapRead);
        v51;
        const onMapRead = function (readErr, sourceMap) {
            if (readErr) {
                const v52 = 'Error reading sourcemap for file "' + filename;
                const v53 = v52 + '":\n';
                const v54 = readErr.message;
                readErr.message = v53 + v54;
                const v55 = cb(readErr);
                return v55;
            }
            try {
                const v56 = new SourceMapConsumer(sourceMap);
                const v58 = function onConsumerReady(consumer) {
                    const v57 = cb(null, consumer);
                    return v57;
                };
                const v59 = v56.then(v58, onConsumerError);
                v59;
            } catch (parseErr) {
                const v60 = onConsumerError(parseErr);
                v60;
            }
        };
        const onConsumerError = function (parseErr) {
            const v61 = 'Error parsing sourcemap for file "' + filename;
            const v62 = v61 + '":\n';
            const v63 = parseErr.message;
            parseErr.message = v62 + v63;
            const v64 = cb(parseErr);
            return v64;
        };
    };
    const v66 = fs.readFile(filename, READ_FILE_OPTS, v65);
    v66;
};
module.exports = readSourceMap;
const resolveSourceMapUrl = function (sourceFile, sourcePath) {
    const lines = sourceFile.split(/\r?\n/);
    let sourceMapUrl = null;
    const v67 = lines.length;
    let i = v67 - 1;
    const v68 = i >= 0;
    const v69 = !sourceMapUrl;
    let v70 = v68 && v69;
    while (v70) {
        const v72 = lines[i];
        sourceMapUrl = v72.match(SOURCEMAP_REGEX);
        const v71 = i--;
        v70 = v68 && v69;
    }
    const v73 = !sourceMapUrl;
    if (v73) {
        return null;
    }
    const v74 = sourceMapUrl[1];
    const v75 = isInlineMap(v74);
    const v76 = sourceMapUrl[1];
    const v77 = sourceMapUrl[1];
    const v78 = path.resolve(sourcePath, v77);
    let v79;
    if (v75) {
        v79 = v76;
    } else {
        v79 = v78;
    }
    return v79;
};
const isInlineMap = function (url) {
    const v80 = INLINE_SOURCEMAP_REGEX.test(url);
    return v80;
};
const decodeInlineMap = function (data) {
    const v81 = data.indexOf(',');
    const v82 = v81 + 1;
    const rawData = data.slice(v82);
    const v83 = Buffer.from(rawData, 'base64');
    const v84 = v83.toString();
    return v84;
};