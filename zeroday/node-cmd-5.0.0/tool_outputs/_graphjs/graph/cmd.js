const v16 = require('child_process');
const exec = v16.exec;
const execSync = v16.execSync;
const commandline = {};
commandline.run = runCommand;
commandline.runSync = runSync;
const runCommand = function (command, callback) {
    const v20 = function () {
        const v19 = function (err, data, stderr) {
            const v17 = !callback;
            if (v17) {
                return;
            }
            const v18 = callback(err, data, stderr);
            v18;
        };
        return v19;
    };
    const v21 = v20(callback);
    const v22 = exec(command, v21);
    return v22;
};
const runSync = function (command) {
    try {
        const v23 = execSync(command);
        const v24 = v23.toString();
        const v25 = {};
        v25.data = v24;
        v25.err = null;
        v25.stderr = null;
        return v25;
    } catch (error) {
        const v26 = error.stderr;
        const v27 = v26.toString();
        const v28 = error.stderr;
        const v29 = v28.toString();
        const v30 = {};
        v30.data = null;
        v30.err = v27;
        v30.stderr = v29;
        return v30;
    }
};
module.exports = commandline;