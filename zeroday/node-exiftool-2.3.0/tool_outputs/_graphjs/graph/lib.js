'use strict';
const cp = require('child_process');
const v1 = require('os');
const EOL = v1.EOL;
const isStream = require('is-stream');
const writeStdIn = function (proc, data, encoding) {
    const v2 = proc.stdin;
    const v3 = v2.write(data, encoding);
    v3;
    const v4 = proc.stdin;
    const v5 = v4.write(EOL, encoding);
    v5;
};
const close = function (proc) {
    let errHandler;
    const v15 = (resolve, reject) => {
        const v9 = err => {
            const v6 = err.message;
            const v7 = new Error(`Could not write to stdin: ${ v6 }`);
            const v8 = reject(v7);
            v8;
        };
        errHandler = v9;
        const v10 = proc.once('close', resolve);
        v10;
        const v11 = proc.stdin;
        const v12 = v11.once('error', errHandler);
        v12;
        const v13 = writeStdIn(proc, '-stay_open');
        v13;
        const v14 = writeStdIn(proc, 'false');
        v14;
    };
    const v16 = new Promise(v15);
    const v19 = () => {
        const v17 = proc.stdin;
        const v18 = v17.removeListener('error', errHandler);
        v18;
    };
    const v20 = v16.then(v19);
    return v20;
};
const isString = function (s) {
    const v21 = typeof s;
    const v22 = v21.toLowerCase();
    const v23 = v22 === 'string';
    return v23;
};
const isObject = function (o) {
    const v24 = typeof o;
    const v25 = v24.toLowerCase();
    const v26 = v25 === 'object';
    const v27 = o !== null;
    const v28 = v26 && v27;
    return v28;
};
const getArgs = function (args, noSplit) {
    const v29 = Array.isArray(args);
    const v30 = args.length;
    const v31 = v29 && v30;
    const v32 = !v31;
    if (v32) {
        const v33 = [];
        return v33;
    }
    const v34 = args.filter(isString);
    const v36 = arg => {
        const v35 = `-${ arg }`;
        return v35;
    };
    const v37 = v34.map(v36);
    const v43 = (acc, arg) => {
        const v38 = [];
        const v39 = [arg];
        const v40 = arg.split(/\s+/);
        let v41;
        if (noSplit) {
            v41 = v39;
        } else {
            v41 = v40;
        }
        const v42 = v38.concat(acc, v41);
        return v42;
    };
    const v44 = [];
    const v45 = v37.reduce(v43, v44);
    return v45;
};
const execute = function (proc, command, commandNumber, args, noSplitArgs, encoding) {
    const extendedArgs = getArgs(args);
    const extendedArgsNoSplit = getArgs(noSplitArgs, true);
    const v46 = command !== undefined;
    if (v46) {
        command = command;
    } else {
        command = '';
    }
    const v47 = [];
    const v48 = [
        '-json',
        '-s'
    ];
    const v49 = [
        command,
        '-echo1',
        `{begin${ commandNumber }}`,
        '-echo2',
        `{begin${ commandNumber }}`,
        '-echo4',
        `{ready${ commandNumber }}`,
        `-execute${ commandNumber }`
    ];
    const allArgs = v47.concat(extendedArgsNoSplit, extendedArgs, v48, v49);
    const v50 = process.env;
    const v51 = v50.DEBUG;
    if (v51) {
        const v52 = JSON.stringify(allArgs, null, 2);
        const v53 = console.log(v52);
        v53;
    }
    const v55 = arg => {
        const v54 = writeStdIn(proc, arg, encoding);
        return v54;
    };
    const v56 = allArgs.forEach(v55);
    v56;
};
let currentCommand = 0;
const genCommandNumber = function () {
    const v57 = ++currentCommand;
    const v58 = String(v57);
    return v58;
};
const executeCommand = function (proc, stdoutRws, stderrRws, command, args, noSplitArgs, encoding) {
    const commandNumber = genCommandNumber();
    const v59 = proc === process;
    if (v59) {
        const v60 = execute(proc, command, commandNumber, args, noSplitArgs, encoding);
        v60;
        const v61 = {
            data: 'debug',
            error: null
        };
        const v62 = Promise.resolve(v61);
        return v62;
    }
    let dataFinishHandler;
    let errFinishHandler;
    let dataErr;
    let errErr;
    const v68 = (resolve, reject) => {
        const v65 = () => {
            const v63 = new Error('stdout stream finished before operation was complete');
            const v64 = reject(v63);
            v64;
        };
        dataFinishHandler = v65;
        const v66 = stdoutRws.once('finish', dataFinishHandler);
        v66;
        const v67 = stdoutRws.addToResolveMap(commandNumber, resolve);
        v67;
    };
    const v69 = new Promise(v68);
    const v70 = error => {
        dataErr = error;
    };
    const dataPromise = v69.catch(v70);
    const v76 = (resolve, reject) => {
        const v73 = () => {
            const v71 = new Error('stderr stream finished before operation was complete');
            const v72 = reject(v71);
            v72;
        };
        errFinishHandler = v73;
        const v74 = stderrRws.once('finish', errFinishHandler);
        v74;
        const v75 = stderrRws.addToResolveMap(commandNumber, resolve);
        v75;
    };
    const v77 = new Promise(v76);
    const v78 = error => {
        errErr = error;
    };
    const errPromise = v77.catch(v78);
    const v79 = execute(proc, command, commandNumber, args, noSplitArgs, encoding);
    v79;
    const v80 = [
        dataPromise,
        errPromise
    ];
    const v81 = Promise.all(v80);
    const v97 = res => {
        const v82 = stderrRws.removeListener('finish', errFinishHandler);
        v82;
        const v83 = stdoutRws.removeListener('finish', dataFinishHandler);
        v83;
        const v84 = !errErr;
        const v85 = dataErr && v84;
        if (v85) {
            throw dataErr;
        } else {
            const v86 = !dataErr;
            const v87 = errErr && v86;
            if (v87) {
                throw errErr;
            } else {
                const v88 = dataErr && errErr;
                if (v88) {
                    const v89 = new Error('stdout and stderr finished before operation was complete');
                    throw v89;
                }
            }
        }
        const v90 = res[0];
        const v91 = res[0];
        const v92 = JSON.parse(v91);
        let v93;
        if (v90) {
            v93 = v92;
        } else {
            v93 = null;
        }
        const v94 = res[1];
        const v95 = v94 || null;
        const v96 = {};
        v96.data = v93;
        v96.error = v95;
        return v96;
    };
    const v98 = v81.then(v97);
    return v98;
};
const isReadable = function (stream) {
    const v99 = isStream.readable(stream);
    return v99;
};
const isWritable = function (stream) {
    const v100 = isStream.writable(stream);
    return v100;
};
const spawn = function (bin, options) {
    const v101 = Date.now();
    const echoString = v101.toString();
    const v102 = [
        '-echo2',
        echoString,
        '-stay_open',
        'True',
        '-@',
        '-'
    ];
    const proc = cp.spawn(bin, v102, options);
    const v103 = proc.stderr;
    const v104 = isReadable(v103);
    const v105 = !v104;
    if (v105) {
        const v106 = killProcess(proc);
        v106;
        const v107 = new Error('Process was not spawned with a readable stderr, check stdio options.');
        const v108 = Promise.reject(v107);
        return v108;
    }
    const v117 = (resolve, reject) => {
        const echoHandler = data => {
            const v109 = data.toString();
            const d = v109.trim();
            const v110 = d === echoString;
            if (v110) {
                const v111 = resolve(proc);
                v111;
            } else {
                const v112 = new Error(`Unexpected string on start: ${ d }`);
                const v113 = reject(v112);
                v113;
            }
        };
        const v114 = proc.stderr;
        const v115 = v114.once('data', echoHandler);
        v115;
        const v116 = proc.once('error', reject);
        v116;
    };
    const v118 = new Promise(v117);
    return v118;
};
const checkDataObject = function (data) {
    const v119 = Object(data);
    const v120 = data === v119;
    const v121 = Array.isArray(data);
    const v122 = !v121;
    const v123 = v120 && v122;
    return v123;
};
const mapDataToTagArray = function (data, array) {
    let res;
    const v124 = Array.isArray(array);
    const v125 = [];
    if (v124) {
        res = array;
    } else {
        res = v125;
    }
    const v126 = Object.keys(data);
    const v133 = tag => {
        const value = data[tag];
        const v127 = Array.isArray(value);
        if (v127) {
            const v129 = v => {
                const arg = `${ tag }=${ v }`;
                const v128 = res.push(arg);
                v128;
            };
            const v130 = value.forEach(v129);
            v130;
        } else {
            const v131 = `${ tag }=${ value }`;
            const v132 = res.push(v131);
            v132;
        }
    };
    const v134 = v126.forEach(v133);
    v134;
    return res;
};
const killProcess = function (proc) {
    const v135 = process.platform;
    const v136 = v135 === 'win32';
    if (v136) {
        const v137 = proc.pid;
        const v138 = `taskkill /t /F /PID ${ v137 }`;
        const v139 = cp.exec(v138);
        v139;
    } else {
        const v140 = proc.kill();
        v140;
    }
};
const v141 = {};
v141.spawn = spawn;
v141.close = close;
v141.executeCommand = executeCommand;
v141.checkDataObject = checkDataObject;
v141.mapDataToTagArray = mapDataToTagArray;
v141.getArgs = getArgs;
v141.execute = execute;
v141.isString = isString;
v141.isObject = isObject;
v141.isReadable = isReadable;
v141.isWritable = isWritable;
v141.killProcess = killProcess;
module.exports = v141;