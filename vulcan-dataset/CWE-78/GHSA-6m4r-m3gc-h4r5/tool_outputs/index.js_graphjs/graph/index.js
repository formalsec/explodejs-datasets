'use strict';
const v43 = require('child_process');
const exec = v43.exec;
const isArray = function (value) {
    const v44 = Array.isArray(value);
    return v44;
};
const isObject = function (value) {
    const v45 = Array.isArray(value);
    const v46 = !v45;
    const v47 = typeof value;
    const v48 = v47 === 'object';
    const v49 = v46 && v48;
    return v49;
};
const isString = function (value) {
    const v50 = typeof value;
    const v51 = v50 === 'string';
    return v51;
};
const isTrue = function (value) {
    const v52 = value === true;
    return v52;
};
const normalizePackages = function (args) {
    let pkgs = [];
    const v53 = isArray(args);
    if (v53) {
        let pkg;
        for (pkg of args) {
            const v54 = isString(pkg);
            if (v54) {
                const v55 = pkgs.push(pkg);
                v55;
            }
        }
    } else {
        const v56 = isString(args);
        if (v56) {
            const v57 = pkgs.push(args);
            v57;
        }
    }
    return pkgs;
};
const normalizeOptions = function (args) {
    let opts = [];
    const v58 = isArray(args);
    if (v58) {
        let opt;
        for (opt of args) {
            const v59 = isString(opt);
            if (v59) {
                const v60 = opts.push(opt);
                v60;
            }
        }
    } else {
        const v61 = isObject(args);
        if (v61) {
            let keys = Object.keys(args);
            let key;
            for (key of keys) {
                let value = args[key];
                const v62 = isTrue(value);
                if (v62) {
                    const v63 = opts.push(key);
                    v63;
                } else {
                    const v64 = isString(value);
                    if (v64) {
                        const v65 = `${ key }=${ value }`;
                        const v66 = opts.push(v65);
                        v66;
                    }
                }
            }
        } else {
            const v67 = isString(args);
            if (v67) {
                const v68 = opts.push(args);
                v68;
            }
        }
    }
    return opts;
};
const v84 = function (packages, options, execOptions) {
    let args = [
        'npm',
        'install'
    ];
    let pkgs = normalizePackages(packages);
    let opts = normalizeOptions(options);
    const v69 = {};
    let execOpts = execOptions || v69;
    const v70 = pkgs.length;
    const v71 = v70 === 0;
    if (v71) {
        const v72 = new Error('Invalid package names');
        throw v72;
    }
    let pkg;
    for (pkg of pkgs) {
        const v73 = args.push(pkg);
        v73;
    }
    let opt;
    for (opt of opts) {
        const v74 = args.push(opt);
        v74;
    }
    const v82 = (resolve, reject) => {
        const v75 = args.join(' ');
        const v80 = (error, stdout, stderr) => {
            if (error) {
                const v76 = {
                    error,
                    stdout,
                    stderr
                };
                const v77 = reject(v76);
                return v77;
            }
            const v78 = {
                error,
                stdout,
                stderr
            };
            const v79 = resolve(v78);
            return v79;
        };
        const v81 = exec(v75, execOpts, v80);
        v81;
    };
    const v83 = new Promise(v82);
    return v83;
};
module.exports = v84;