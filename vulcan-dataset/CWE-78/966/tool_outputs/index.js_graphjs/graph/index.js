'use strict';
const v15 = require('execa');
const sh = v15.shell;
const skip = true;
const v28 = function (port) {
    const v16 = Number.parseInt(port);
    const v17 = !v16;
    if (v17) {
        const v18 = new Error('Invalid argument provided for port');
        const v19 = Promise.reject(v18);
        return v19;
    }
    const v20 = process.platform;
    const v21 = v20 === 'win32';
    const v22 = !skip;
    const v23 = v21 && v22;
    if (v23) {
        const v24 = `Stop-Process -Id (Get-NetTCPConnection -LocalPort ${ port }).OwningProcess -Force`;
        const v25 = sh(v24);
        return v25;
    }
    const v26 = `lsof -i tcp:${ port } | grep LISTEN | awk '{print $2}' | xargs kill -9`;
    const v27 = sh(v26);
    return v27;
};
module.exports = v28;