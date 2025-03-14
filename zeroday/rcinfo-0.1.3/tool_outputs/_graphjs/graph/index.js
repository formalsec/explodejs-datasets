const v39 = function () {
    var path;
    var execFile;
    path = require('path');
    const v21 = require('child_process');
    execFile = v21.execFile;
    const v38 = function (winfile, callback) {
        var args;
        var child;
        var executable;
        var options;
        executable = path.resolve(__dirname, '..', 'bin', 'ShowVer.exe');
        const v22 = path.resolve(__dirname, '..');
        options.cwd = v22;
        options = {};
        options = {};
        args = [winfile];
        const v23 = process.platform;
        const v24 = v23 !== 'win32';
        if (v24) {
            const v25 = args.unshift(executable);
            v25;
            executable = 'wine';
        }
        const v37 = function (error, stdout, stderr) {
            const v26 = error !== null;
            if (v26) {
                var map;
                var key;
                var value;
                var lines = stdout.split(/\r?\n/);
                var info = {};
                const v33 = function (line, index) {
                    const v27 = index > 0;
                    const v28 = v27 && line;
                    if (v28) {
                        map = line.split(/:(.+)/);
                        const v29 = map[0];
                        key = v29.trim();
                        const v30 = map[1];
                        value = v30.trim();
                        const v31 = info[key];
                        const v32 = !v31;
                        if (v32) {
                            info[key] = value;
                        }
                    }
                };
                const v34 = lines.forEach(v33);
                v34;
                const v35 = callback(null, info);
                return v35;
            } else {
                const v36 = callback(stdout);
                return v36;
            }
        };
        child = execFile(executable, args, options, v37);
    };
    module.exports = v38;
};
const v40 = v39.call(this);
v40;