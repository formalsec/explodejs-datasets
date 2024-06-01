'use strict';
const v7 = { value: true };
const v8 = Object.defineProperty(exports, '__esModule', v7);
v8;
const child_process_1 = require('child_process');
const v12 = (cwd, command) => {
    const v9 = process.env;
    const v10 = {
        cwd,
        env: v9
    };
    const v11 = child_process_1.execSync(command, v10);
    return v11;
};
exports.execSync = v12;