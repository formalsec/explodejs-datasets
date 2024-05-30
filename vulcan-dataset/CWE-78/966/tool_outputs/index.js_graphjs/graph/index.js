'use strict';
const v13 = require('execa');
const sh = v13.shell;
const v24 = function (port) {
    const v14 = Number.parseInt(port);
    const v15 = !v14;
    if (v15) {
        const v16 = new Error('Invalid argument provided for port');
        const v17 = Promise.reject(v16);
        return v17;
    }
    const v18 = process.platform;
    const v19 = v18 === 'win32';
    if (v19) {
        const v20 = `Stop-Process -Id (Get-NetTCPConnection -LocalPort ${ port }).OwningProcess -Force`;
        const v21 = sh(v20);
        return v21;
    }
    const v22 = `lsof -i tcp:${ port } | grep LISTEN | awk '{print $2}' | xargs kill -9`;
    const v23 = sh(v22);
    return v23;
};
module.exports = v24;