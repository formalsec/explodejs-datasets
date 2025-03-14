'use strict';
const path = require('path');
const spawn = require('cross-spawn');
const readPkg = require('read-pkg');
const validatePkgName = require('validate-npm-package-name');
const v106 = require('extract-first-json');
const extractJSONObject = v106.extractJSONObject;
const readPkgWithPath = filePathOrDirPath => {
    if (filePathOrDirPath) {
        const v107 = path.extname(filePathOrDirPath);
        const isJSON = v107 === '.json';
        if (isJSON) {
            const v108 = require(filePathOrDirPath);
            const v109 = Promise.resolve(v108);
            return v109;
        }
        const v110 = { cwd: filePathOrDirPath };
        const v111 = readPkg(v110);
        return v111;
    } else {
        const v112 = readPkg();
        return v112;
    }
};
const checkPkgName = (packagePath, options) => {
    const v113 = readPkgWithPath(packagePath);
    const v128 = pkg => {
        const name = pkg['name'];
        const result = validatePkgName(name);
        const v114 = result.validForNewPackages;
        const v115 = !v114;
        const isInvalidNamingInNewRule = v115;
        if (isInvalidNamingInNewRule) {
            const v116 = result.errors;
            const v117 = Array.isArray(v116);
            if (v117) {
                const v118 = result.errors;
                const v119 = v118.join('\n');
                const v120 = new Error(v119);
                const v121 = Promise.reject(v120);
                return v121;
            }
            const v122 = options.verbose;
            const v123 = result.warnings;
            const v124 = v122 && v123;
            if (v124) {
                const v125 = result.warnings;
                const v126 = v125.join('\n');
                const v127 = console.warn(v126);
                v127;
            }
        }
    };
    const v129 = v113.then(v128);
    return v129;
};
const checkPrivateField = packagePath => {
    const v130 = readPkgWithPath(packagePath);
    const v135 = pkg => {
        const v131 = pkg['private'];
        const v132 = v131 === true;
        if (v132) {
            const v133 = new Error('This package is private.');
            const v134 = Promise.reject(v133);
            return v134;
        }
    };
    const v136 = v130.then(v135);
    return v136;
};
const viewPackage = (packageName, registry, options) => {
    const v187 = (resolve, reject) => {
        let registryArgs;
        const v137 = [
            '--registry',
            registry
        ];
        const v138 = [];
        if (registry) {
            registryArgs = v137;
        } else {
            registryArgs = v138;
        }
        const v139 = [
            'view',
            packageName,
            'versions',
            '--json'
        ];
        const v140 = v139.concat(registryArgs);
        const view = spawn('npm', v140);
        let _stdoutResult = '';
        let _stderrResult = '';
        const getJsonOutputs = ({stdout, stderr}) => {
            let stdoutJSON = null;
            let stderrJSON = null;
            if (stdout) {
                try {
                    stdoutJSON = JSON.parse(stdout);
                } catch (error) {
                    const v141 = options.verbose;
                    if (v141) {
                        const v142 = console.error('stdoutJSON parse error', stdout);
                        v142;
                    }
                }
            }
            if (stderr) {
                try {
                    stderrJSON = JSON.parse(stderr);
                } catch (error) {
                    const v143 = options.verbose;
                    if (v143) {
                        const v144 = console.error('stderrJSON parse error', stdout);
                        v144;
                    }
                }
            }
            const v145 = {};
            v145.stdoutJSON = stdoutJSON;
            v145.stderrJSON = stderrJSON;
            return v145;
        };
        const isError = json => {
            const v146 = typeof json;
            const v147 = v146 !== 'string';
            const v148 = json && v147;
            const v149 = 'error' in json;
            const v150 = v148 && v149;
            return v150;
        };
        const is404Error = json => {
            const v151 = isError(json);
            const v152 = json.error;
            const v153 = v152.code;
            const v154 = v153 === 'E404';
            const v155 = v151 && v154;
            return v155;
        };
        const v156 = view.stdout;
        const v157 = data => {
            _stdoutResult += data.toString();
        };
        const v158 = v156.on('data', v157);
        v158;
        const v159 = view.stderr;
        const v160 = err => {
            const stdErrorStr = err.toString();
            const jsonObject = extractJSONObject(stdErrorStr);
            if (jsonObject) {
                _stderrResult = JSON.stringify(jsonObject, null, 4);
            }
        };
        const v161 = v159.on('data', v160);
        v161;
        const v185 = code => {
            const v163 = {
                stdout: _stdoutResult,
                stderr: _stderrResult
            };
            const v162 = getJsonOutputs(v163);
            const stdoutJSON = v162.stdoutJSON;
            const stderrJSON = v162.stderrJSON;
            const v164 = options.verbose;
            if (v164) {
                const v165 = console.log('`npm view` command\'s exit code:', code);
                v165;
                const v166 = console.log('`npm view` stdoutJSON', stdoutJSON);
                v166;
                const v167 = console.log('`npm view` stderrJSON', stderrJSON);
                v167;
            }
            const v168 = is404Error(stdoutJSON);
            if (v168) {
                const v169 = [];
                const v170 = resolve(v169);
                return v170;
            }
            const v171 = is404Error(stderrJSON);
            if (v171) {
                const v172 = [];
                const v173 = resolve(v172);
                return v173;
            }
            const v174 = isError(stdoutJSON);
            if (v174) {
                const v175 = new Error(_stdoutResult);
                const v176 = reject(v175);
                return v176;
            }
            const v177 = isError(stderrJSON);
            if (v177) {
                const v178 = new Error(_stderrResult);
                const v179 = reject(v178);
                return v179;
            }
            const v180 = code !== 0;
            if (v180) {
                const v181 = new Error(_stderrResult);
                const v182 = reject(v181);
                return v182;
            }
            if (stdoutJSON) {
                const v183 = resolve(stdoutJSON);
                return v183;
            } else {
                const v184 = reject(_stderrResult);
                return v184;
            }
        };
        const v186 = view.on('close', v185);
        v186;
    };
    const v188 = new Promise(v187);
    return v188;
};
const checkAlreadyPublish = (packagePath, options) => {
    const v189 = readPkgWithPath(packagePath);
    const v203 = pkg => {
        const name = pkg['name'];
        const version = pkg['version'];
        const publishConfig = pkg['publishConfig'];
        const v190 = publishConfig['registry'];
        const registry = publishConfig && v190;
        const v191 = name === undefined;
        if (v191) {
            const v192 = new Error('This package has no `name`.');
            const v193 = Promise.reject(v192);
            return v193;
        }
        const v194 = version === undefined;
        if (v194) {
            const v195 = new Error('This package has no `version`.');
            const v196 = Promise.reject(v195);
            return v196;
        }
        const v197 = viewPackage(name, registry, options);
        const v201 = versions => {
            const v198 = versions.includes(version);
            if (v198) {
                const v199 = new Error(`${ name }@${ version } is already published`);
                const v200 = Promise.reject(v199);
                return v200;
            }
            return;
        };
        const v202 = v197.then(v201);
        return v202;
    };
    const v204 = v189.then(v203);
    return v204;
};
const canNpmPublish = (packagePath, options = { verbose: false }) => {
    const v205 = checkPkgName(packagePath, options);
    const v206 = checkAlreadyPublish(packagePath, options);
    const v207 = checkPrivateField(packagePath);
    const v208 = [
        v205,
        v206,
        v207
    ];
    const v209 = Promise.all(v208);
    return v209;
};
const v210 = module.exports;
v210.canNpmPublish = canNpmPublish;