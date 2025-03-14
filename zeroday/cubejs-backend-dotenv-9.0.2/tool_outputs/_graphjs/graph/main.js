const fs = require('fs');
const path = require('path');
const log = function (message) {
    const v74 = `[dotenv][DEBUG] ${ message }`;
    const v75 = console.log(v74);
    v75;
};
const NEWLINE = '\n';
const RE_INI_KEY_VAL = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/;
const RE_NEWLINES = /\\n/g;
const NEWLINES_MATCH = /\n|\r|\r\n/;
const parse = function (src, options) {
    const v76 = options.debug;
    const v77 = options && v76;
    const debug = Boolean(v77);
    const v78 = options.multiline;
    const v79 = v78 === 'line-breaks';
    const v80 = options && v79;
    const multilineLineBreaks = Boolean(v80);
    const obj = {};
    const v81 = src.toString();
    const lines = v81.split(NEWLINES_MATCH);
    let idx = 0;
    const v82 = lines.length;
    let v83 = idx < v82;
    while (v83) {
        let line = lines[idx];
        const keyValueArr = line.match(RE_INI_KEY_VAL);
        const v85 = keyValueArr != null;
        if (v85) {
            const key = keyValueArr[1];
            const v86 = keyValueArr[2];
            let val = v86 || '';
            const v87 = val.length;
            let end = v87 - 1;
            const v88 = val[0];
            const v89 = v88 === '"';
            const v90 = val[end];
            const v91 = v90 === '"';
            const isDoubleQuoted = v89 && v91;
            const v92 = val[0];
            const v93 = v92 === '\'';
            const v94 = val[end];
            const v95 = v94 === '\'';
            const isSingleQuoted = v93 && v95;
            const v96 = val[0];
            const v97 = v96 === '"';
            const v98 = val[end];
            const v99 = v98 !== '"';
            const isMultilineDoubleQuoted = v97 && v99;
            const v100 = val[0];
            const v101 = v100 === '\'';
            const v102 = val[end];
            const v103 = v102 !== '\'';
            const isMultilineSingleQuoted = v101 && v103;
            const v104 = isMultilineDoubleQuoted || isMultilineSingleQuoted;
            const v105 = multilineLineBreaks && v104;
            if (v105) {
                let quoteChar;
                if (isMultilineDoubleQuoted) {
                    quoteChar = '"';
                } else {
                    quoteChar = '\'';
                }
                val = val.substring(1);
                const v106 = idx++;
                const v107 = lines.length;
                const v108 = v107 - 1;
                let v109 = v106 < v108;
                while (v109) {
                    line = lines[idx];
                    const v110 = line.length;
                    end = v110 - 1;
                    const v111 = line[end];
                    const v112 = v111 === quoteChar;
                    if (v112) {
                        const v113 = line.substring(0, end);
                        val += NEWLINE + v113;
                        break;
                    }
                    val += NEWLINE + line;
                    v109 = v106 < v108;
                }
            } else {
                const v114 = isSingleQuoted || isDoubleQuoted;
                if (v114) {
                    val = val.substring(1, end);
                    if (isDoubleQuoted) {
                        val = val.replace(RE_NEWLINES, NEWLINE);
                    }
                } else {
                    val = val.trim();
                }
            }
            obj[key] = val;
        } else {
            if (debug) {
                const v115 = idx + 1;
                const v116 = `did not match key and value when parsing line ${ v115 }: ${ line }`;
                const v117 = log(v116);
                v117;
            }
        }
        const v84 = idx++;
        v83 = idx < v82;
    }
    return obj;
};
const config = function (options) {
    const v118 = process.cwd();
    let dotenvPath = path.resolve(v118, '.env');
    let override = false;
    let encoding = 'utf8';
    let debug = false;
    let multiline = 'default';
    if (options) {
        const v119 = options.path;
        const v120 = v119 != null;
        if (v120) {
            dotenvPath = options.path;
        }
        const v121 = options.override;
        const v122 = v121 != null;
        if (v122) {
            override = options.override;
        }
        const v123 = options.encoding;
        const v124 = v123 != null;
        if (v124) {
            encoding = options.encoding;
        }
        const v125 = options.debug;
        const v126 = v125 != null;
        if (v126) {
            debug = true;
        }
        const v127 = options.multiline;
        const v128 = v127 != null;
        if (v128) {
            multiline = options.multiline;
        }
    }
    try {
        const v129 = { encoding };
        const v130 = fs.readFileSync(dotenvPath, v129);
        const v131 = {
            debug,
            multiline
        };
        const parsed = DotEnvModule.parse(v130, v131);
        const v132 = Object.keys(parsed);
        const v143 = function (key) {
            const v133 = Object.prototype;
            const v134 = v133.hasOwnProperty;
            const v135 = process.env;
            const v136 = v134.call(v135, key);
            const v137 = !v136;
            const v138 = v137 || override;
            if (v138) {
                const v139 = process.env;
                const v140 = parsed[key];
                v139[key] = v140;
            } else {
                if (debug) {
                    const v141 = `"${ key }" is already defined in \`process.env\` and will not be overwritten`;
                    const v142 = log(v141);
                    v142;
                }
            }
        };
        const v144 = v132.forEach(v143);
        v144;
        const v145 = {};
        v145.parsed = parsed;
        return v145;
    } catch (e) {
        const v146 = {};
        v146.error = e;
        return v146;
    }
};
const DotEnvModule = {};
DotEnvModule.config = config;
DotEnvModule.parse = parse;
module.exports = DotEnvModule;