'use strict';
const path = require('path');
const v74 = require('child_process');
const exec = v74.exec;
const promisify = require('util.promisify');
const inspect = require('object-inspect');
const chalk = require('chalk');
const copyFileCB = require('fs-copy-file');
const copyFile = promisify(copyFileCB);
const v75 = require('fs');
const v76 = v75.readFile;
const readFile = promisify(v76);
const getProjectTempDir = require('./getProjectTempDir');
const getLockfile = function (packageFile, date, {npmNeeded, only, logger = () => {
    }} = {}) {
    const v77 = typeof packageFile;
    const v78 = v77 !== 'string';
    const v79 = packageFile.length;
    const v80 = v79 === 0;
    const v81 = v78 || v80;
    if (v81) {
        const v82 = inspect(packageFile);
        const v83 = `\`packageFile\` must be a non-empty string; got ${ v82 }`;
        const v84 = chalk.red(v83);
        const v85 = Promise.reject(v84);
        return v85;
    }
    const v86 = typeof date;
    const v87 = v86 !== 'undefined';
    const v88 = new Date(date);
    const v89 = v88.getTime();
    const v90 = !v89;
    const v91 = v87 && v90;
    if (v91) {
        const v92 = inspect(date);
        const v93 = `\`date\` must be a valid Date format if provided; got ${ v92 }`;
        const v94 = chalk.red(v93);
        const v95 = Promise.reject(v94);
        return v95;
    }
    const v96 = {
        npmNeeded,
        logger
    };
    const tmpDirP = getProjectTempDir(v96);
    const v97 = path.dirname(packageFile);
    const npmRC = path.join(v97, '.npmrc');
    const v115 = tmpDir => {
        const v98 = date || '\u201Cnow\u201D';
        const v99 = `Creating \`package.json\` in temp dir for ${ v98 } lockfile`;
        const v100 = chalk.blue(v99);
        const v101 = logger(v100);
        v101;
        const v102 = path.join(tmpDir, 'package.json');
        const v103 = copyFile(packageFile, v102);
        const v104 = path.join(tmpDir, '.npmrc');
        const v105 = copyFile(npmRC, v104);
        const v111 = err => {
            const v106 = !err;
            const v107 = err.message;
            const v108 = /^ENOENT: no such file or directory/.test(v107);
            const v109 = !v108;
            const v110 = v106 || v109;
            if (v110) {
                throw err;
            }
        };
        const v112 = v105.catch(v111);
        const v113 = [
            v103,
            v112
        ];
        const v114 = Promise.all(v113);
        return v114;
    };
    const copyPkg = tmpDirP.then(v115);
    const v116 = [
        tmpDirP,
        copyPkg
    ];
    const v117 = Promise.all(v116);
    const v137 = ([tmpDir]) => {
        const v135 = (resolve, reject) => {
            const PATH = path.join(tmpDir, '../node_modules/.bin');
            const v118 = date || '\u201Cnow\u201D';
            const v119 = `Running npm install to create lockfile for ${ v118 }...`;
            const v120 = chalk.blue(v119);
            const v121 = logger(v120);
            v121;
            let v122;
            if (date) {
                v122 = ` --before=${ date }`;
            } else {
                v122 = '';
            }
            let v123;
            if (only) {
                v123 = ` --only=${ only }`;
            } else {
                v123 = '';
            }
            const v124 = `npm install --package-lock --package-lock-only${ v122 }${ v123 }`;
            const v125 = process.env;
            const v126 = v125.PATH;
            const v127 = process.env;
            const v128 = v127.NODE_ENV;
            const v129 = {};
            v129.PATH = `${ PATH }:${ v126 }`;
            v129.NODE_ENV = v128;
            const v130 = {
                cwd: tmpDir,
                env: v129
            };
            const v133 = err => {
                if (err) {
                    const v131 = reject(err);
                    v131;
                } else {
                    const v132 = resolve(tmpDir);
                    v132;
                }
            };
            const v134 = exec(v124, v130, v133);
            v134;
        };
        const v136 = new Promise(v135);
        return v136;
    };
    const v138 = v117.then(v137);
    const v145 = tmpDir => {
        const v139 = date || '\u201Cnow\u201D';
        const v140 = `Reading lockfile contents for ${ v139 }...`;
        const v141 = chalk.blue(v140);
        const v142 = logger(v141);
        v142;
        const lockfile = path.join(tmpDir, 'package-lock.json');
        const v143 = { encoding: 'utf-8' };
        const v144 = readFile(lockfile, v143);
        return v144;
    };
    const v146 = v138.then(v145);
    return v146;
};
module.exports = getLockfile;