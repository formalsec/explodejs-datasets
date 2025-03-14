var childProcess = require('child_process');
var path = require('path');
const Spawn = function (stream, command, args, name, output) {
    var exited = false;
    var ended = false;
    var spawnedProcess;
    var options;
    const v14 = process.platform;
    const v15 = v14 === 'win32';
    if (v15) {
        const v16 = process.env;
        const v17 = v16.comspec;
        const v18 = v17 || 'cmd.exe';
        options.shell = v18;
        options = {};
        options = {};
    }
    spawnedProcess = childProcess.spawn(command, args, options);
    this.id = name;
    if (output) {
        const v19 = spawnedProcess.stdout;
        const v20 = output.stdin;
        const v21 = v19.pipe(v20);
        v21;
        const v22 = spawnedProcess.stderr;
        const v23 = output.stdin;
        const v24 = v22.pipe(v23);
        v24;
    }
    if (stream) {
        const v25 = spawnedProcess.stdout;
        const v26 = { end: false };
        const v27 = v25.pipe(stream, v26);
        v27;
        const v28 = spawnedProcess.stderr;
        const v29 = { end: false };
        const v30 = v28.pipe(stream, v29);
        v30;
        const v31 = spawnedProcess.stdout;
        const v34 = function () {
            ended = true;
            const v32 = exited !== false;
            if (v32) {
                const v33 = stream.exit(exited);
                v33;
            }
        };
        const v35 = v31.on('end', v34);
        v35;
        const v38 = function (code, signal) {
            exited = code;
            const v36 = ended !== false;
            if (v36) {
                const v37 = stream.exit(exited);
                v37;
            }
        };
        const v39 = spawnedProcess.on('exit', v38);
        v39;
        const v41 = function () {
            const v40 = stream.exit(1);
            v40;
        };
        const v42 = spawnedProcess.on('error', v41);
        v42;
    }
    const v48 = function (code) {
        const v43 = exited === false;
        if (v43) {
            var treeKillScriptPath = path.resolve(__dirname, 'standalone-treekill.js');
            var spawnOptions = {};
            spawnOptions.stdio = 'inherit';
            const v44 = process.execPath;
            const v45 = spawnedProcess.pid;
            const v46 = [
                treeKillScriptPath,
                v45
            ];
            const v47 = childProcess.spawnSync(v44, v46, spawnOptions);
            v47;
        }
    };
    const v49 = process.on('exit', v48);
    v49;
    return spawnedProcess;
};
module.exports = Spawn;