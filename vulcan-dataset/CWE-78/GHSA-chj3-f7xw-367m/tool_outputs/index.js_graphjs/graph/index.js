const util = require('util');
const v27 = require('child_process');
const v28 = v27.execFile;
const execFile = util.promisify(v28);
const defaultCallback = stdout => {
    return stdout;
};
const defaultOptions = {};
const isString = _ => {
    const v29 = typeof _;
    const v30 = v29 === 'string';
    return v30;
};
const isObject = _ => {
    const v31 = typeof _;
    const v32 = v31 === 'object';
    return v32;
};
const isFunction = _ => {
    const v33 = typeof _;
    const v34 = v33 === 'function';
    return v34;
};
const v52 = function (commandOrArgs, optionsOrCallback, callbackMaybe) {
    const v35 = [
        optionsOrCallback,
        callbackMaybe,
        defaultCallback
    ];
    const callback = v35.find(isFunction);
    const v36 = [
        optionsOrCallback,
        callbackMaybe,
        defaultOptions
    ];
    const options = v36.find(isObject);
    const v37 = isString(commandOrArgs);
    const v38 = commandOrArgs.startsWith('git ');
    const v39 = v37 && v38;
    if (v39) {
        commandOrArgs = commandOrArgs.substring(4);
    }
    const v40 = options.gitExec;
    const execBinary = v40 || 'git';
    const v41 = options.cwd;
    const execOptions = {};
    execOptions.cwd = v41;
    execOptions.windowsHide = true;
    let execArguments;
    const v42 = isString(commandOrArgs);
    const v43 = commandOrArgs.split(' ');
    if (v42) {
        execArguments = v43;
    } else {
        execArguments = commandOrArgs;
    }
    const v44 = execFile(execBinary, execArguments, execOptions);
    const v46 = ({stdout}) => {
        const v45 = callback(stdout, null);
        return v45;
    };
    const v50 = error => {
        const v47 = callback.length;
        const v48 = v47 === 1;
        if (v48) {
            throw error;
        } else {
            const v49 = callback('', error);
            return v49;
        }
    };
    const v51 = v44.then(v46, v50);
    return v51;
};
module.exports = v52;