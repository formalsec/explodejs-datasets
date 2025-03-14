'use strict';
const v12 = { value: true };
const v13 = Object.defineProperty(exports, '__esModule', v12);
v13;
const path = require('path');
const v14 = require('child_process');
const exec = v14.exec;
const appRoot = path.resolve(__dirname);
const buildCredential = function (credStr) {
    const v15 = credStr.split(':');
    const username = v15[0];
    const password = v15[1];
    const v16 = {};
    v16.username = username;
    v16.password = password;
    return v16;
};
const getCredential = function (target, pythonLancher = 'python') {
    const script = `${ pythonLancher } ${ appRoot }\\wincred.py ${ target }`;
    const v17 = exec(script);
    const v20 = result => {
        const v18 = result.stdout;
        const v19 = v18.trim();
        return v19;
    };
    const v21 = v17.then(v20);
    const v22 = v21.then(buildCredential);
    return v22;
};
exports.getCredential = getCredential;
exports.default = getCredential;