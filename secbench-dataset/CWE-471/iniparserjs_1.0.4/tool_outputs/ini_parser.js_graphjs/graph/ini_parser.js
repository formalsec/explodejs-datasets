var fs = require('fs');
var sectionNameRegex = /\[(.*)]$/;
var comments = [
    ';',
    '#'
];
var delimiter = [
    '=',
    ':'
];
const IniParser = function (path, encoding) {
    this.path = path;
    this.encoding = encoding || 'UTF8';
    const v119 = {};
    this.configs = v119;
    const v120 = this.path;
    if (v120) {
        const v121 = fs.existsSync(path);
        const v122 = !v121;
        if (v122) {
            const v123 = this.path;
            const v124 = new Error(`file dons't exit: ${ v123 }`);
            throw v124;
        }
        try {
            const v125 = fs.readFileSync(path, encoding);
            this.input = v125;
        } catch (ex) {
            const v126 = new Error(`open file failed: \n ex.toString()`);
            throw v126;
        }
        const v127 = this.input;
        const v128 = v127.toString();
        var configLines = v128.split(/\r?\n/g);
        var curSection = 'global';
        const v129 = this.configs;
        const v130 = {};
        v129[curSection] = v130;
        var globalCount = 0;
        var i = 0;
        const v131 = configLines.length;
        let v132 = i < v131;
        while (v132) {
            const v134 = configLines[i];
            var line = v134.trim();
            const v135 = line.length;
            const v136 = v135 <= 2;
            const v137 = line.charAt(0);
            const v138 = comments.includes(v137);
            const v139 = v136 || v138;
            if (v139) {
                continue;
            }
            const v141 = function (com) {
                const v140 = line.split(com);
                line = v140[0];
            };
            const v142 = comments.forEach(v141);
            v142;
            line = line.trim();
            const v143 = line.length;
            const v144 = v143 <= 2;
            if (v144) {
                continue;
            }
            var matchArr = line.match(sectionNameRegex);
            const v145 = line.startsWith('[');
            const v146 = matchArr != null;
            const v147 = v145 && v146;
            if (v147) {
                curSection = matchArr[1];
                const v148 = this.configs;
                const v149 = curSection in v148;
                const v150 = !v149;
                if (v150) {
                    const v151 = this.configs;
                    const v152 = {};
                    v151[curSection] = v152;
                }
                continue;
            }
            var j = 0;
            const v153 = delimiter.length;
            let v154 = j < v153;
            while (v154) {
                var curDelimiter = delimiter[j];
                const v156 = line.includes(curDelimiter);
                const v157 = !v156;
                if (v157) {
                    continue;
                }
                var index = line.indexOf(curDelimiter);
                const v158 = line.length;
                const v159 = v158 - 1;
                const v160 = index == v159;
                if (v160) {
                    const v161 = line.slice(0, index);
                    const v162 = this.path;
                    const v163 = new Error(`there is no value with key ${ v161 } in ${ v162 } line ${ i }`);
                    throw v163;
                }
                const v164 = index == 0;
                if (v164) {
                    const v165 = this.path;
                    const v166 = new Error(`there is no key in ${ v165 } line ${ i }`);
                    throw v166;
                }
                const v167 = line.slice(0, index);
                var curKey = v167.trim();
                const v168 = index + 1;
                const v169 = line.length;
                const v170 = line.slice(v168, v169);
                var curValue = v170.trim();
                const v171 = this.configs;
                const v172 = v171[curSection];
                v172[curKey] = curValue;
                const v173 = curSection == 'global';
                if (v173) {
                    const v174 = globalCount++;
                    v174;
                }
                break;
                const v155 = j++;
                v154 = j < v153;
            }
            const v133 = i++;
            v132 = i < v131;
        }
        const v175 = globalCount == 0;
        if (v175) {
            const v176 = this.configs;
            const v177 = v176.global;
            const v178 = delete v177;
            v178;
        }
    }
    const v181 = function () {
        const v179 = this.configs;
        const v180 = Object.keys(v179);
        return v180;
    };
    this.sections = v181;
    const v196 = function (section, key) {
        const v182 = key == null;
        if (v182) {
            key = section;
            section = 'global';
        }
        const v183 = this.sections();
        const v184 = v183.includes(section);
        const v185 = !v184;
        if (v185) {
            const v186 = new Error(`there is no section: ${ section }`);
            throw v186;
        }
        const v187 = this.configs;
        const v188 = v187[section];
        const v189 = Object.keys(v188);
        const v190 = v189.includes(key);
        const v191 = !v190;
        if (v191) {
            const v192 = new Error(`there is no key: ${ key } in section: ${ section }`);
            throw v192;
        }
        const v193 = this.configs;
        const v194 = v193[section];
        const v195 = v194[key];
        return v195;
    };
    this.get = v196;
    const v205 = function (section, key, value) {
        const v197 = value == null;
        if (v197) {
            value = key;
            key = section;
            section = 'global';
        }
        const v198 = this.sections();
        const v199 = v198.includes(section);
        const v200 = !v199;
        if (v200) {
            const v201 = this.configs;
            const v202 = {};
            v201[section] = v202;
        }
        const v203 = this.configs;
        const v204 = v203[section];
        v204[key] = value;
    };
    this.set = v205;
    const v213 = function (section) {
        const v206 = section == null;
        if (v206) {
            section = 'global';
        }
        const v207 = this.sections();
        const v208 = v207.includes(section);
        if (v208) {
            const v209 = this.configs;
            const v210 = v209[section];
            const v211 = Object.keys(v210);
            return v211;
        } else {
            const v212 = [];
            return v212;
        }
    };
    this.keysOfSection = v213;
    const v225 = function (delimiter) {
        const v214 = delimiter == null;
        if (v214) {
            delimiter = '=';
        }
        var result = '';
        let section;
        const v215 = this.configs;
        const v216 = Object.keys(v215);
        for (section of v216) {
            const v217 = section.toString();
            const v218 = '[' + v217;
            result += v218 + ']\n';
            const v219 = this.configs;
            var curConfig = v219[section];
            let key;
            const v220 = Object.keys(curConfig);
            for (key of v220) {
                const v221 = key.toString();
                const v222 = v221 + delimiter;
                const v223 = curConfig[key];
                const v224 = v222 + v223;
                result += v224 + '\n';
            }
            result += '\n';
        }
        return result;
    };
    this.stringfy = v225;
    const v235 = function (opt) {
        const v226 = opt.path;
        const v227 = this.path;
        var toPath = v226 || v227;
        const v228 = opt.encoding;
        const v229 = this.encoding;
        var toEncoding = v228 || v229;
        const v230 = opt.delimiter;
        var toDelimiter = v230 || '=';
        var result = this.stringfy(toDelimiter);
        try {
            const v231 = { encoding: toEncoding };
            const v232 = fs.writeFileSync(toPath, result, v231);
            v232;
        } catch (ex) {
            const v233 = ex.toString();
            const v234 = new Error(v233);
            throw v234;
        }
    };
    this.save = v235;
};
var rowContent = function (type, section, key, value) {
    const v236 = {};
    v236.type = type;
    v236.section = section;
    v236.key = key;
    v236.value = value;
    return v236;
};
module.exports = IniParser;