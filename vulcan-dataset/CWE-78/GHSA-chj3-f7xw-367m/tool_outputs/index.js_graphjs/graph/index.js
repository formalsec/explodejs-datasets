const v26 = require('child_process');
const execFile = v26.execFile;
const defaultCallback = stdout => {
    return stdout;
};
const defaultOptions = {};
const isString = _ => {
    const v27 = typeof _;
    const v28 = v27 === 'string';
    return v28;
};
const isObject = _ => {
    const v29 = typeof _;
    const v30 = v29 === 'object';
    return v30;
};
const isFunction = _ => {
    const v31 = typeof _;
    const v32 = v31 === 'function';
    return v32;
};
const v50 = function (commandOrArgs, optionsOrCallback, callbackMaybe) {
    const v33 = [
        optionsOrCallback,
        callbackMaybe,
        defaultCallback
    ];
    const callback = v33.find(isFunction);
    const v34 = [
        optionsOrCallback,
        callbackMaybe,
        defaultOptions
    ];
    const options = v34.find(isObject);
    const v35 = isString(commandOrArgs);
    const v36 = commandOrArgs.startsWith('git ');
    const v37 = v35 && v36;
    if (v37) {
        commandOrArgs = commandOrArgs.substring(4);
    }
    const v38 = options.gitExec;
    const execBinary = v38 || 'git';
    const v39 = options.cwd;
    const execOptions = {};
    execOptions.cwd = v39;
    execOptions.windowsHide = true;
    let execArguments;
    const v40 = isString(commandOrArgs);
    const v41 = commandOrArgs.split(' ');
    if (v40) {
        execArguments = v41;
    } else {
        execArguments = commandOrArgs;
    }
    const v42 = execFile(execBinary, execArguments, execOptions);
    const v44 = ({stdout}) => {
        const v43 = callback(stdout, null);
        return v43;
    };
    const v48 = error => {
        const v45 = callback.length;
        const v46 = v45 === 1;
        if (v46) {
            throw error;
        } else {
            const v47 = callback('', error);
            return v47;
        }
    };
    const v49 = v42.then(v44, v48);
    return v49;
};
module.exports = v50;