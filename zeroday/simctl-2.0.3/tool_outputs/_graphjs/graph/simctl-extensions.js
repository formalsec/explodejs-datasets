const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const util = require('util');
const v1 = require('tail');
const Tail = v1.Tail;
const v39 = function (deviceid) {
    let isAtLeastXcode9 = false;
    let command = 'xcodebuild -version';
    const v2 = { silent: true };
    const res = shell.exec(command, v2);
    const v3 = res.stdout;
    const versionMatch = /Xcode (.*)/.exec(v3);
    const v4 = res.code;
    const v5 = v4 !== 0;
    const v6 = !versionMatch;
    const v7 = v5 || v6;
    if (v7) {
        const v8 = console.error('Unable to parse xcodebuild version.');
        v8;
        return;
    } else {
        const v9 = versionMatch[1];
        const v10 = parseInt(v9);
        isAtLeastXcode9 = v10 >= 9;
    }
    if (isAtLeastXcode9) {
        command = util.format('xcrun simctl list -j');
        const v11 = { silent: true };
        let res = shell.exec(command, v11);
        const v12 = res.code;
        const v13 = v12 !== 0;
        if (v13) {
            const v14 = console.error('Could not get device list.');
            v14;
            return;
        }
        const v15 = res.stdout;
        const listOutput = JSON.parse(v15);
        const v16 = listOutput.devices;
        const v17 = Object.keys(v16);
        const v21 = function (acc, key) {
            const v18 = listOutput.devices;
            const v19 = v18[key];
            const v20 = acc.concat(v19);
            return v20;
        };
        const v22 = [];
        const v23 = v17.reduce(v21, v22);
        const v26 = function (el) {
            const v24 = el.udid;
            const v25 = v24 === deviceid;
            return v25;
        };
        const device = v23.find(v26);
        const v27 = device.state;
        const v28 = v27 === 'Booted';
        if (v28) {
            const v29 = console.error('Simulator already running.');
            v29;
            return;
        }
        command = util.format('xcrun simctl boot "%s"', deviceid);
        const v30 = { silent: true };
        res = shell.exec(command, v30);
        const v31 = res.code;
        const v32 = v31 !== 0;
        if (v32) {
            const v33 = `Could not boot simulator ${ deviceid }`;
            const v34 = console.error(v33);
            v34;
            return;
        }
        command = 'open `xcode-select -p`/Applications/Simulator.app';
        const v35 = { silent: true };
        const v36 = shell.exec(command, v35);
        return v36;
    } else {
        command = util.format('xcrun instruments -w "%s"', deviceid);
        const v37 = { silent: true };
        const v38 = shell.exec(command, v37);
        return v38;
    }
};
const v53 = function (deviceid, filepath) {
    const v40 = process.env;
    const v41 = v40.HOME;
    const v42 = path.join(v41, 'Library/Logs/CoreSimulator', deviceid, 'system.log');
    const tail = new Tail(v42);
    const v48 = function (data) {
        if (filepath) {
            const v43 = data + '\n';
            const v45 = function (error) {
                if (error) {
                    const v44 = console.error('ERROR: ', error);
                    v44;
                    throw error;
                }
            };
            const v46 = fs.appendFile(filepath, v43, v45);
            v46;
        } else {
            const v47 = console.log(data);
            v47;
        }
    };
    const v49 = tail.on('line', v48);
    v49;
    const v51 = function (error) {
        const v50 = console.error('ERROR: ', error);
        v50;
    };
    const v52 = tail.on('error', v51);
    v52;
    return tail;
};
const extensions = {};
extensions.start = v39;
extensions.log = v53;
module.exports = extensions;
exports = module.exports;