const spawn = require('cross-spawn');
const spawnPlease = (command, args, stdin, options) => {
    const v36 = !options;
    const v37 = typeof stdin;
    const v38 = v37 === 'object';
    const v39 = v36 && v38;
    if (v39) {
        options = stdin;
        stdin = undefined;
    }
    const v40 = {};
    options = options || v40;
    const v41 = options.rejectOnError;
    const v42 = v41 === undefined;
    if (v42) {
        options.rejectOnError = true;
    }
    let stdout = '';
    let stderr = '';
    const child = spawn(command, args, options);
    const v69 = (resolve, reject) => {
        const v43 = stdin !== undefined;
        const v44 = stdin !== null;
        const v45 = v43 && v44;
        if (v45) {
            const v46 = child.stdin;
            const v47 = v46.write(stdin);
            v47;
        }
        const v48 = child.stdin;
        const v49 = v48.end();
        v49;
        const v50 = child.stdout;
        const v53 = data => {
            stdout += data;
            const v51 = options.stdout;
            if (v51) {
                const v52 = options.stdout(data);
                v52;
            }
        };
        const v54 = v50.on('data', v53);
        v54;
        const v55 = child.stderr;
        const v58 = data => {
            stderr += data;
            const v56 = options.stderr;
            if (v56) {
                const v57 = options.stderr(data);
                v57;
            }
        };
        const v59 = v55.on('data', v58);
        v59;
        const v60 = options.rejectOnError;
        if (v60) {
            const v61 = child.addListener('error', reject);
            v61;
        }
        const v67 = code => {
            const v62 = code !== 0;
            const v63 = options.rejectOnError;
            const v64 = v62 && v63;
            if (v64) {
                const v65 = reject(stderr);
                v65;
            } else {
                const v66 = resolve(stdout);
                v66;
            }
        };
        const v68 = child.on('close', v67);
        v68;
    };
    const v70 = new Promise(v69);
    return v70;
};
module.exports = spawnPlease;