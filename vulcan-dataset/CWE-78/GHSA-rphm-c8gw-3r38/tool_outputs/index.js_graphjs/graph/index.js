'use strict';
const v92 = require('chalk');
const blue = v92.blue;
const bold = v92.bold;
const green = v92.green;
const red = v92.red;
const path = require('path');
const semver = require('semver');
const v93 = require('child_process');
const exec = v93.exec;
const v94 = require('util');
const promisify = v94.promisify;
const execAsync = promisify(exec);
const getLatestVersions = async function (name) {
    const v96 = `npm view ${ name } versions --json`;
    const v95 = await execAsync(v96);
    const stdout = v95.stdout;
    try {
        const v97 = JSON.parse(stdout);
        return v97;
    } catch (err) {
        const v98 = err.toString();
        const v99 = new Error(`Failed to parse output from NPM view - ${ v98 }`);
        throw v99;
    }
};
const getLatestVersion = async function (name, wanted) {
    const versions = await getLatestVersions(name);
    const v101 = i => {
        const v100 = semver.satisfies(i, wanted);
        return v100;
    };
    const applicableVersions = versions.filter(v101);
    const v103 = (a, b) => {
        const v102 = semver.rcompare(a, b);
        return v102;
    };
    const v104 = applicableVersions.sort(v103);
    v104;
    const v105 = applicableVersions[0];
    return v105;
};
const getInstalledVersion = function (currentDir, name) {
    try {
        const v106 = path.join(currentDir, 'node_modules', name, 'package.json');
        const v107 = require(v106);
        const v108 = v107.version;
        return v108;
    } catch (err) {
        return null;
    }
};
const pushPkgs = function ({dir, logger, deps = {}, type, pkgs}) {
    const v109 = Object.keys(deps);
    const v127 = async name => {
        let wanted = deps[name];
        const v110 = wanted.startsWith('^');
        const v111 = !v110;
        if (v111) {
            wanted = `^${ wanted }`;
        }
        const installed = getInstalledVersion(dir, name);
        const latest = await getLatestVersion(name, wanted);
        const wantedFixed = wanted.slice(1);
        const v112 = installed === null;
        const v113 = wantedFixed !== installed;
        const v114 = v112 || v113;
        const v115 = installed !== latest;
        const shouldBeInstalled = v114 || v115;
        if (shouldBeInstalled) {
            let warning;
            const v116 = installed !== null;
            const v117 = wantedFixed !== installed;
            let v118;
            if (v117) {
                v118 = wantedFixed;
            } else {
                v118 = installed;
            }
            const v119 = red(v118);
            const v120 = green(latest);
            const v121 = red('not installed');
            if (v116) {
                warning = `outdated: ${ v119 } → ${ v120 }`;
            } else {
                warning = v121;
            }
            const v122 = red(name);
            const v123 = `${ v122 } is ${ warning }`;
            const v124 = logger.info(v123);
            v124;
        }
        const v125 = {
            installed,
            latest,
            name,
            shouldBeInstalled,
            type,
            wanted
        };
        const v126 = pkgs.push(v125);
        v126;
    };
    const v128 = v109.map(v127);
    return v128;
};
const getPkgIds = function (filteredPkgs) {
    const v130 = ({latest, name}) => {
        const v129 = `${ name }@${ latest }`;
        return v129;
    };
    const v131 = filteredPkgs.map(v130);
    const v132 = v131.join(' ');
    return v132;
};
const verifyDeps = async function ({autoUpgrade = false, dir, logger = console} = {}) {
    const v134 = path.join(dir, 'package.json');
    const v133 = require(v134);
    const dependencies = v133.dependencies;
    const devDependencies = v133.devDependencies;
    const v135 = blue('Verifying dependencies\u2026\n');
    const v136 = logger.info(v135);
    v136;
    const pkgs = [];
    const v137 = {
        deps: dependencies,
        dir,
        logger,
        pkgs,
        type: 'prod'
    };
    const v138 = pushPkgs(v137);
    const v139 = {
        deps: devDependencies,
        dir,
        logger,
        pkgs,
        type: 'dev'
    };
    const v140 = pushPkgs(v139);
    const v141 = [
        ...v138,
        ...v140
    ];
    await Promise.all(v141);
    const v142 = ({shouldBeInstalled}) => {
        return shouldBeInstalled;
    };
    const toInstall = pkgs.filter(v142);
    const v143 = toInstall.length;
    const v144 = v143 > 0;
    if (v144) {
        const v146 = ({type}) => {
            const v145 = type === 'prod';
            return v145;
        };
        const prodPkgs = toInstall.filter(v146);
        let upgradePackages = '';
        const v147 = prodPkgs.length;
        const v148 = v147 > 0;
        if (v148) {
            const v149 = getPkgIds(prodPkgs);
            const v150 = `npm i ${ v149 } `;
            upgradePackages = upgradePackages.concat(v150);
        }
        const v152 = ({type}) => {
            const v151 = type === 'dev';
            return v151;
        };
        const devPkgs = toInstall.filter(v152);
        const v153 = devPkgs.length;
        const v154 = v153 > 0;
        if (v154) {
            const v155 = getPkgIds(devPkgs);
            const v156 = `\nnpm i -D ${ v155 } `;
            upgradePackages = upgradePackages.concat(v156);
        }
        if (autoUpgrade) {
            const v157 = logger.info('UPGRADING\u2026');
            v157;
            const v158 = logger.info(upgradePackages);
            v158;
            const v159 = getPkgIds(prodPkgs);
            const v160 = `npm i ${ v159 }`;
            const prodResult = await execAsync(v160);
            const v161 = getPkgIds(devPkgs);
            const v162 = `npm i -D ${ v161 }`;
            const devResult = await execAsync(v162);
            const v163 = bold('Upgraded dependencies:\n');
            const v164 = prodResult.stdout;
            const v165 = `${ v163 }${ v164 }`;
            const v166 = green(v165);
            const v167 = `${ v166 }`;
            const v168 = logger.info(v167);
            v168;
            const v169 = bold('Upgraded development dependencies:\n');
            const v170 = devResult.stdout;
            const v171 = `${ v169 }${ v170 }`;
            const v172 = green(v171);
            const v173 = `${ v172 }`;
            const v174 = logger.info(v173);
            v174;
        } else {
            const v175 = bold('To resolve this, run:');
            const v176 = `\n${ v175 }`;
            const v177 = logger.info(v176);
            v177;
            const v178 = logger.info(upgradePackages);
            v178;
            const v179 = red('Please update your installed modules.');
            const v180 = new Error(v179);
            throw v180;
        }
    } else {
        const v181 = green('All NPM modules are up to date.');
        const v182 = logger.info(v181);
        v182;
    }
};
module.exports = verifyDeps;