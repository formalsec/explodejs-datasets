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
const execAsync = exec;
const getLatestVersions = function (name) {
    const v95 = `npm view ${ name } versions --json`;
    const v94 = execAsync(v95);
    const stdout = v94.stdout;
    try {
        const v96 = JSON.parse(stdout);
        return v96;
    } catch (err) {
        const v97 = err.toString();
        const v98 = new Error(`Failed to parse output from NPM view - ${ v97 }`);
        throw v98;
    }
};
const getLatestVersion = function (name, wanted) {
    const versions = getLatestVersions(name);
    const v100 = i => {
        const v99 = semver.satisfies(i, wanted);
        return v99;
    };
    const applicableVersions = versions.filter(v100);
    const v102 = (a, b) => {
        const v101 = semver.rcompare(a, b);
        return v101;
    };
    const v103 = applicableVersions.sort(v102);
    v103;
    const v104 = applicableVersions[0];
    return v104;
};
const getInstalledVersion = function (currentDir, name) {
    try {
        const v105 = path.join(currentDir, 'node_modules', name, 'package.json');
        const v106 = require(v105);
        const v107 = v106.version;
        return v107;
    } catch (err) {
        return null;
    }
};
const pushPkgs = function ({dir, logger, deps = {}, type, pkgs}) {
    const v108 = Object.keys(deps);
    const v126 = name => {
        let wanted = deps[name];
        const v109 = wanted.startsWith('^');
        const v110 = !v109;
        if (v110) {
            wanted = `^${ wanted }`;
        }
        const installed = getInstalledVersion(dir, name);
        const latest = getLatestVersion(name, wanted);
        const wantedFixed = wanted.slice(1);
        const v111 = installed === null;
        const v112 = wantedFixed !== installed;
        const v113 = v111 || v112;
        const v114 = installed !== latest;
        const shouldBeInstalled = v113 || v114;
        if (shouldBeInstalled) {
            let warning;
            const v115 = installed !== null;
            const v116 = wantedFixed !== installed;
            let v117;
            if (v116) {
                v117 = wantedFixed;
            } else {
                v117 = installed;
            }
            const v118 = red(v117);
            const v119 = green(latest);
            const v120 = red('not installed');
            if (v115) {
                warning = `outdated: ${ v118 } → ${ v119 }`;
            } else {
                warning = v120;
            }
            const v121 = red(name);
            const v122 = `${ v121 } is ${ warning }`;
            const v123 = logger.info(v122);
            v123;
        }
        const v124 = {
            installed,
            latest,
            name,
            shouldBeInstalled,
            type,
            wanted
        };
        const v125 = pkgs.push(v124);
        v125;
    };
    const v127 = v108.map(v126);
    return v127;
};
const getPkgIds = function (filteredPkgs) {
    const v129 = ({latest, name}) => {
        const v128 = `${ name }@${ latest }`;
        return v128;
    };
    const v130 = filteredPkgs.map(v129);
    const v131 = v130.join(' ');
    return v131;
};
const verifyDeps = function ({autoUpgrade = false, dir, logger = console} = {}) {
    const v133 = dir + '/package.json';
    const v132 = require(v133);
    const dependencies = v132.dependencies;
    const devDependencies = v132.devDependencies;
    const v134 = blue('Verifying dependencies\u2026\n');
    const v135 = logger.info(v134);
    v135;
    const pkgs = [];
    const v136 = {
        deps: dependencies,
        dir,
        logger,
        pkgs,
        type: 'prod'
    };
    const v137 = pushPkgs(v136);
    const v138 = {
        deps: devDependencies,
        dir,
        logger,
        pkgs,
        type: 'dev'
    };
    const v139 = pushPkgs(v138);
    const v140 = [
        ...v137,
        ...v139
    ];
    const v141 = Promise.all(v140);
    v141;
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
            const prodResult = execAsync(v160);
            const v161 = getPkgIds(devPkgs);
            const v162 = `npm i -D ${ v161 }`;
            const devResult = execAsync(v162);
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