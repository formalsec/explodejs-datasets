'use strict';
const net = require('net');
const util = require('util');
const path = require('path');
const shell = require('child_process');
let SOCKET_TIMEOUT = 1000;
const testSync = function (host, port, connectTimeout) {
    const nodeBinary = process.execPath;
    const scriptPath = path.join(__dirname, './scripts/connection-tester');
    const cmd = util.format('"%s" "%s" %s %s %s', nodeBinary, scriptPath, host, port, connectTimeout);
    const v36 = shell.execSync(cmd);
    const shellOut = v36.toString();
    const output = {};
    output.success = false;
    output.error = null;
    if (shellOut) {
        const v37 = shellOut.match(/true/);
        if (v37) {
            output.success = true;
        } else {
            output.error = shellOut;
        }
    } else {
        output.error = 'No output from connection test';
    }
    return output;
};
const testAsync = function (host, port, connectTimeout, callback) {
    const socket = new net.Socket();
    const output = {};
    output.success = false;
    output.error = null;
    const v38 = socket.connect(port, host);
    v38;
    const v39 = socket.setTimeout(connectTimeout);
    v39;
    const v42 = function () {
        const v40 = socket.destroy();
        v40;
        output.success = true;
        const v41 = callback(null, output);
        return v41;
    };
    const v43 = socket.on('connect', v42);
    v43;
    const v48 = function (err) {
        const v44 = socket.destroy();
        v44;
        const v45 = err.message;
        const v46 = err && v45;
        output.error = v46 || err;
        const v47 = callback(err, output);
        return v47;
    };
    const v49 = socket.on('error', v48);
    v49;
    const v55 = function (err) {
        const v50 = socket.destroy();
        v50;
        const v51 = err.message;
        const v52 = err && v51;
        const v53 = v52 || err;
        output.error = v53 || 'socket TIMEOUT';
        const v54 = callback(err, output);
        return v54;
    };
    const v56 = socket.on('timeout', v55);
    v56;
};
const v59 = function (socketTimeout) {
    const v57 = !socketTimeout;
    const v58 = !v57;
    if (v58) {
        SOCKET_TIMEOUT = socketTimeout;
    }
    return SOCKET_TIMEOUT;
};
const v69 = function ConnectionTester(host, port, callbackOrConnectTimeout, callback) {
    const v60 = typeof callbackOrConnectTimeout;
    const v61 = v60 === 'function';
    if (v61) {
        const v62 = console.log('deprecated: Please migrate to the new interface ConnectionTester(host, port, timeout, callback)');
        v62;
        const v63 = testAsync(host, port, SOCKET_TIMEOUT, callbackOrConnectTimeout);
        return v63;
    }
    const v64 = typeof callbackOrConnectTimeout;
    const v65 = v64 === 'number';
    if (v65) {
        const v66 = testSync(host, port, callbackOrConnectTimeout);
        return v66;
    }
    const v67 = callbackOrConnectTimeout === undefined;
    if (v67) {
        const v68 = testSync(host, port, SOCKET_TIMEOUT);
        return v68;
    }
};
const v70 = {};
v70.timeout = v59;
v70.test = v69;
module.exports = v70;