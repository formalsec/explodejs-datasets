const v37 = require('child_process');
const exec = v37.exec;
const os = require('os');
const pidFromPort = require('pid-from-port');
const v41 = async (input, opts = {}) => {
    try {
        const v38 = validateInput(input);
        v38;
        const defaultOpts = {};
        opts = Object.assign(defaultOpts, opts);
        const inputArray = arrayifyInput(input);
        const v39 = os.platform();
        const v40 = v39 === 'win32';
        if (v40) {
            await win32Kill(inputArray, opts);
        } else {
            await defaultKill(inputArray, opts);
        }
    } catch (error) {
        throw error;
    }
};
module.exports = v41;
const validateInput = function (input) {
    const v42 = input === undefined;
    const v43 = input === null;
    const v44 = v42 || v43;
    if (v44) {
        const v45 = console.log('throwing');
        v45;
        const v46 = new Error('Received undefined or null input');
        throw v46;
    }
};
const arrayifyInput = function (input) {
    const v47 = Array.isArray(input);
    const v48 = [input];
    let v49;
    if (v47) {
        v49 = input;
    } else {
        v49 = v48;
    }
    return v49;
};
const defaultKill = async function (input, opts) {
    const promises = input.map(killPortProcess);
    const v50 = Promise.all(promises);
    const v51 = v50.catch();
    v51;
    const killPortProcess = async function (input) {
        const v58 = (resolve, reject) => {
            const command = `lsof -i tcp:${ input } | grep LISTEN | awk '{print $2}' | xargs kill -9`;
            const v56 = (err, stdout, stderr) => {
                if (err) {
                    const v52 = reject(err);
                    v52;
                }
                const v53 = `Successfully terminated process running on port ${ input }`;
                const v54 = log(v53);
                v54;
                const v55 = resolve();
                v55;
            };
            const v57 = exec(command, v56);
            v57;
        };
        const v59 = new Promise(v58);
        return v59;
    };
};
const win32Kill = async function (input, opts) {
    const inputs = input.map(parseInput);
    const promises = inputs.map(killPortProcess);
    const v60 = Promise.all(promises);
    await v60.catch();
    const killPortProcess = async function (input) {
        const v61 = await input;
        const port = v61.port;
        const pid = v61.pid;
        const v70 = (resolve, reject) => {
            const v62 = `taskkill /PID ${ pid } /F`;
            const v68 = (err, stdout, stderr) => {
                if (err) {
                    const v63 = `Failed to terminate proccess on port ${ port } with pid ${ pid }`;
                    const v64 = reject(v63);
                    v64;
                }
                const v65 = `Successfully terminated process running on port ${ port } with pid ${ pid }`;
                const v66 = console.log(v65);
                v66;
                const v67 = resolve(stdout);
                v67;
            };
            const v69 = exec(v62, v68);
            v69;
        };
        const v71 = new Promise(v70);
        return v71;
    };
};
const parseInput = async function (input) {
    const pid = await pidFromPort(input);
    const v72 = {};
    v72.pid = pid;
    v72.port = input;
    return v72;
};