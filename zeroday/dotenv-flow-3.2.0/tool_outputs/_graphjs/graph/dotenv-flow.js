'use strict';
const fs = require('fs');
const v74 = require('path');
const resolve = v74.resolve;
const dotenv = require('dotenv');
const listDotenvFiles = function (dirname, options = {}) {
    const v75 = options;
    const node_env = v75.node_env;
    const v76 = resolve(dirname, '.env.defaults');
    const v77 = resolve(dirname, '.env');
    const v78 = node_env !== 'test';
    const v79 = resolve(dirname, '.env.local');
    const v80 = v78 && v79;
    const v81 = `.env.${ node_env }`;
    const v82 = resolve(dirname, v81);
    const v83 = node_env && v82;
    const v84 = `.env.${ node_env }.local`;
    const v85 = resolve(dirname, v84);
    const v86 = node_env && v85;
    const v87 = [
        v76,
        v77,
        v80,
        v83,
        v86
    ];
    const v89 = filename => {
        const v88 = Boolean(filename);
        return v88;
    };
    const v90 = v87.filter(v89);
    return v90;
};
const parse = function (filenames, options = {}) {
    const v91 = typeof filenames;
    const v92 = v91 === 'string';
    if (v92) {
        const v93 = fs.readFileSync(filenames, options);
        const v94 = dotenv.parse(v93);
        return v94;
    }
    const v98 = (parsed, filename) => {
        const v95 = fs.readFileSync(filename, options);
        const v96 = dotenv.parse(v95);
        const v97 = Object.assign(parsed, v96);
        return v97;
    };
    const v99 = {};
    const v100 = filenames.reduce(v98, v99);
    return v100;
};
const load = function (filenames, options = {}) {
    try {
        const v101 = options.encoding;
        const v102 = { encoding: v101 };
        const parsed = parse(filenames, v102);
        const v103 = Object.keys(parsed);
        const v112 = key => {
            const v104 = process.env;
            const v105 = v104.hasOwnProperty(key);
            const v106 = !v105;
            if (v106) {
                const v107 = process.env;
                const v108 = parsed[key];
                v107[key] = v108;
            } else {
                const v109 = options.silent;
                const v110 = !v109;
                if (v110) {
                    const v111 = console.warn('dotenv-flow: "%s" is already defined in `process.env` and will not be overwritten', key);
                    v111;
                }
            }
        };
        const v113 = v103.forEach(v112);
        v113;
        const v114 = {};
        v114.parsed = parsed;
        return v114;
    } catch (error) {
        const v115 = {};
        v115.error = error;
        return v115;
    }
};
const unload = function (filenames, options = {}) {
    const parsed = parse(filenames, options);
    const v116 = Object.keys(parsed);
    const v124 = key => {
        const v117 = process.env;
        const v118 = v117[key];
        const v119 = parsed[key];
        const v120 = v118 === v119;
        if (v120) {
            const v121 = process.env;
            const v122 = v121[key];
            const v123 = delete v122;
            v123;
        }
    };
    const v125 = v116.forEach(v124);
    v125;
};
const config = function (options = {}) {
    const v126 = options.node_env;
    const v127 = process.env;
    const v128 = v127.NODE_ENV;
    const v129 = v126 || v128;
    const v130 = options.default_node_env;
    const node_env = v129 || v130;
    let path;
    const v131 = options.path;
    if (v131) {
        path = options.path;
    } else {
        const v132 = options.cwd;
        if (v132) {
            const v133 = console.warn('dotenv-flow: `options.cwd` is deprecated, please use `options.path` instead');
            v133;
            path = options.cwd;
        } else {
            path = process.cwd();
        }
    }
    const v134 = options;
    const encoding = v134.undefined;
    const silent = v134.undefined;
    try {
        const v135 = options.purge_dotenv;
        if (v135) {
            const v136 = resolve(path, '.env');
            const v137 = { encoding };
            const v138 = unload(v136, v137);
            v138;
        }
        const v139 = { node_env };
        const v140 = listDotenvFiles(path, v139);
        const v142 = filename => {
            const v141 = fs.existsSync(filename);
            return v141;
        };
        const existingFiles = v140.filter(v142);
        const v143 = {
            encoding,
            silent
        };
        const v144 = load(existingFiles, v143);
        return v144;
    } catch (error) {
        const v145 = {};
        v145.error = error;
        return v145;
    }
};
const v146 = {};
v146.listDotenvFiles = listDotenvFiles;
v146.parse = parse;
v146.load = load;
v146.unload = unload;
v146.config = config;
module.exports = v146;