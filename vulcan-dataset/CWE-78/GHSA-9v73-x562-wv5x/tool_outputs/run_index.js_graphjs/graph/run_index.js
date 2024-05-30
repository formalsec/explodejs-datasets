'use strict';
const v9 = require('child_process');
const exec = v9.execSync;
const RunModule = function ({path, encoding = 'utf8'}) {
    const v16 = function Run(params) {
        const v10 = !params;
        if (v10) {
            const v11 = new Error('No git command specified');
            throw v11;
        }
        const v12 = params.join(' ');
        const v13 = {
            encoding,
            cwd: path
        };
        const v14 = exec(v12, v13);
        const v15 = v14.toString(encoding);
        return v15;
    };
    return v16;
};
module.exports = RunModule;