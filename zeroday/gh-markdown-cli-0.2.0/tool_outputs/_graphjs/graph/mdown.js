var _fs = require('fs');
var _path = require('path');
var _glob = require('glob');
var _minimatch = require('minimatch');
var _wrench = require('wrench');
var _showdown = require('github-flavored-markdown');
var DEFAULT_ENCODING = 'utf-8';
const v65 = function (opts) {
    const v52 = opts.encoding;
    opts.encoding = v52 || DEFAULT_ENCODING;
    const v53 = opts.input;
    const v63 = function (er, files) {
        const v54 = opts.exclude;
        if (v54) {
            const v55 = opts.exclude;
            files = filterFiles(files, v55);
        }
        const v61 = function (filePath) {
            const v56 = opts.encoding;
            const v57 = _fs.readFileSync(filePath, v56);
            var content = exports.toHTML(v57, opts);
            const v58 = opts.output;
            if (v58) {
                const v59 = outputToFile(filePath, content, opts);
                v59;
            } else {
                const v60 = console.log(content);
                v60;
            }
        };
        const v62 = files.forEach(v61);
        v62;
    };
    const v64 = _glob(v53, null, v63);
    v64;
};
exports.batchProcess = v65;
const filterFiles = function (files, exclude) {
    var excludes = exclude.split(',');
    const v70 = function (filePath) {
        const v67 = function (glob) {
            const v66 = _minimatch(filePath, glob);
            return v66;
        };
        const v68 = excludes.some(v67);
        const v69 = !v68;
        return v69;
    };
    const v71 = files.filter(v70);
    return v71;
};
const outputToFile = function (filePath, content, opts) {
    const v72 = opts.input;
    var inputDir = v72.replace(/^([^\*]*).*/, '$1');
    const v73 = '^' + inputDir;
    const v74 = v73 + '(.+)';
    var rPathReplace = new RegExp(v74);
    const v78 = function (str, p1) {
        const v75 = opts.output;
        const v76 = _path.join(v75, p1);
        const v77 = v76.replace(/\.[^\.]+$/, '.html');
        return v77;
    };
    var distPath = filePath.replace(rPathReplace, v78);
    var distFolder = _path.dirname(distPath);
    if (distFolder) {
        const v79 = _wrench.mkdirSyncRecursive(distFolder);
        v79;
    }
    const v80 = opts.encoding;
    const v81 = _fs.writeFileSync(distPath, content, v80);
    v81;
};
const v93 = function (content, opts) {
    var header;
    var footer;
    if (opts) {
        const v82 = opts.header;
        const v83 = opts.header;
        const v84 = opts.encoding;
        const v85 = _fs.readFileSync(v83, v84);
        if (v82) {
            header = v85;
        } else {
            header = '';
        }
        const v86 = opts.footer;
        const v87 = opts.footer;
        const v88 = opts.encoding;
        const v89 = _fs.readFileSync(v87, v88);
        if (v86) {
            footer = v89;
        } else {
            footer = '';
        }
    }
    content = normalizeLineBreaks(content);
    content = convertCodeBlocks(content);
    const v90 = _showdown.parse(content);
    const v91 = [
        header,
        v90,
        footer
    ];
    const v92 = concat(v91);
    return v92;
};
exports.toHTML = v93;
const concat = function (arr) {
    const v96 = function (val) {
        const v94 = !val;
        const v95 = !v94;
        return v95;
    };
    const v97 = arr.filter(v96);
    const v98 = v97.join('\n');
    return v98;
};
const normalizeLineBreaks = function (str, lineEnd) {
    lineEnd = lineEnd || '\n';
    const v99 = str.replace(/\r\n/g, lineEnd);
    const v100 = v99.replace(/\r/g, lineEnd);
    const v101 = v100.replace(/\n/g, lineEnd);
    return v101;
};
var _rCodeBlocks = /^```\s*(\w+)\s*$([\s\S]*?)^```$/gm;
const convertCodeBlocks = function (mdown) {
    const v102 = mdown.replace(_rCodeBlocks, '<pre><code>$2</code></pre>');
    return v102;
};