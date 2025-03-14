'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const codeFrame = require('babel-code-frame');
const STACK_REGEXP = /evalmachine\.<anonymous>:(\d+)(?::(\d+))?\n/;
const v26 = STACK_REGEXP.source;
const STACK_REGEXP_ALL = new RegExp(v26, 'g');
const read = function (filename) {
    try {
        const v27 = fs.readFileSync(filename, 'utf8');
        return v27;
    } catch (err) {
        const v28 = err.code;
        const v29 = v28 === 'ENOENT';
        if (v29) {
            const v30 = `Template file not found: ${ filename }`;
            const v31 = Error(v30);
            throw v31;
        } else {
            throw err;
        }
    }
};
const getErrorMessage = function (source, exception, filename) {
    const v32 = exception.stack;
    const positions = v32.match(STACK_REGEXP_ALL);
    const position = [filename];
    let line;
    let col;
    if (positions) {
        const v33 = positions.pop();
        const m = v33.match(STACK_REGEXP);
        if (m) {
            line = m[1];
            const v34 = position.push(line);
            v34;
            col = m[2];
            if (col) {
                const v35 = position.push(col);
                v35;
            }
        }
    }
    let code;
    const v36 = Number(line);
    const v37 = col || 1;
    const v38 = Number(v37);
    const v39 = codeFrame(source, v36, v38);
    if (line) {
        code = v39;
    } else {
        code = source;
    }
    const v40 = position.join(':');
    const v41 = exception.message;
    const v42 = `Error in template ${ v40 }\n${ v41 }\n\n${ code }`;
    return v42;
};
const template = function (tmpl, context, filename) {
    filename = filename || 'untitled';
    tmpl = tmpl.replace(/`/g, '\\`');
    try {
        const v43 = '`' + tmpl;
        const v44 = v43 + '`';
        const v45 = vm.runInNewContext(v44, context);
        return v45;
    } catch (exception) {
        const v46 = getErrorMessage(tmpl, exception, filename);
        const v47 = new Error(v46);
        throw v47;
    }
};
const templateFromFile = function (filename, context) {
    const tmpl = read(filename);
    const v48 = path.basename(filename);
    const v49 = template(tmpl, context, v48);
    return v49;
};
const v50 = {};
v50.template = template;
v50.templateFromFile = templateFromFile;
module.exports = v50;