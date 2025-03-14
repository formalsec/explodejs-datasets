'use strict';
var fs = require('fs');
const v118 = require('xml2js');
var parseString = v118.parseString;
var parse = {};
var classDetailsFromProjects = function (projects) {
    var classDetails = [];
    var packageName = null;
    var parseFile = function (fileObj, packageName) {
        const v119 = fileObj.hasOwnProperty('class');
        if (v119) {
            const v120 = fileObj['class'];
            const v131 = function (classObj) {
                const v121 = classObj.$;
                const v122 = v121.name;
                const v123 = classObj.metrics;
                const v124 = v123[0];
                const v125 = fileObj.$;
                const v126 = v125.name;
                const v127 = fileObj.metrics;
                const v128 = v127[0];
                const v129 = fileObj.line;
                const v130 = {
                    name: v122,
                    metrics: v124,
                    fileName: v126,
                    fileMetrics: v128,
                    lines: v129,
                    packageName: packageName
                };
                classDetails = classDetails.concat(v130);
            };
            const v132 = v120.forEach(v131);
            v132;
        } else {
            const v133 = fileObj.$;
            const v134 = v133.name;
            const v135 = fileObj.metrics;
            const v136 = v135[0];
            const v137 = fileObj.line;
            const v138 = {
                name: null,
                metrics: null,
                fileName: v134,
                fileMetrics: v136,
                lines: v137,
                packageName: packageName
            };
            classDetails = classDetails.concat(v138);
        }
    };
    const v153 = function (projectObj) {
        const v139 = projectObj.hasOwnProperty('package');
        if (v139) {
            const v140 = projectObj.package;
            const v148 = function (data) {
                const v141 = data.hasOwnProperty('$');
                const v142 = data.$;
                const v143 = v142.hasOwnProperty('name');
                const v144 = v141 && v143;
                if (v144) {
                    const v145 = data.$;
                    packageName = v145.name;
                } else {
                    packageName = null;
                }
                const v146 = data.file;
                const v147 = v146.forEach(parseFile);
                v147;
            };
            const v149 = v140.forEach(v148);
            v149;
        }
        const v150 = projectObj.hasOwnProperty('file');
        if (v150) {
            packageName = null;
            const v151 = projectObj.file;
            const v152 = v151.forEach(parseFile);
            v152;
        }
    };
    const v154 = projects.forEach(v153);
    v154;
    return classDetails;
};
var unpackage = function (projects) {
    var classDetails = classDetailsFromProjects(projects);
    const v211 = function (c) {
        var methodStats = [];
        var lineStats = [];
        const v155 = c.lines;
        const v156 = v155 !== undefined;
        if (v156) {
            const v157 = c.lines;
            const v171 = function (l) {
                const v158 = l.$;
                const v159 = v158.type;
                const v160 = v159 === 'method';
                if (v160) {
                    const v161 = l.$;
                    const v162 = v161.name;
                    const v163 = l.$;
                    const v164 = v163.num;
                    const v165 = Number(v164);
                    const v166 = l.$;
                    const v167 = v166.count;
                    const v168 = Number(v167);
                    const v169 = {
                        name: v162,
                        line: v165,
                        hit: v168
                    };
                    const v170 = methodStats.push(v169);
                    v170;
                }
            };
            const v172 = v157.forEach(v171);
            v172;
            const v173 = c.lines;
            const v185 = function (l) {
                const v174 = l.$;
                const v175 = v174.type;
                const v176 = v175 !== 'method';
                if (v176) {
                    const v177 = l.$;
                    const v178 = v177.num;
                    const v179 = Number(v178);
                    const v180 = l.$;
                    const v181 = v180.count;
                    const v182 = Number(v181);
                    const v183 = {
                        line: v179,
                        hit: v182
                    };
                    const v184 = lineStats.push(v183);
                    v184;
                }
            };
            const v186 = v173.forEach(v185);
            v186;
        }
        const v187 = c.name;
        const v188 = c.fileName;
        const v189 = methodStats.length;
        const v190 = {};
        v190.found = v189;
        v190.hit = 0;
        v190.details = methodStats;
        const v191 = lineStats.length;
        const v192 = {};
        v192.found = v191;
        v192.hit = 0;
        v192.details = lineStats;
        var classCov = {};
        classCov.title = v187;
        classCov.file = v188;
        classCov.functions = v190;
        classCov.lines = v192;
        const v194 = classCov.functions;
        const v195 = v194.details;
        const v200 = function (acc, val) {
            const v196 = val.hit;
            const v197 = v196 > 0;
            let v198;
            if (v197) {
                v198 = 1;
            } else {
                v198 = 0;
            }
            const v199 = acc + v198;
            return v199;
        };
        const v201 = v195.reduce(v200, 0);
        v193.hit = v201;
        const v203 = classCov.lines;
        const v204 = v203.details;
        const v209 = function (acc, val) {
            const v205 = val.hit;
            const v206 = v205 > 0;
            let v207;
            if (v206) {
                v207 = 1;
            } else {
                v207 = 0;
            }
            const v208 = acc + v207;
            return v208;
        };
        const v210 = v204.reduce(v209, 0);
        v202.hit = v210;
        return classCov;
    };
    const v212 = classDetails.map(v211);
    return v212;
};
const v221 = function (xml) {
    const v219 = function (resolve, reject) {
        const v217 = function (err, parseResult) {
            if (err) {
                const v213 = reject(err);
                v213;
            }
            const v214 = parseResult.coverage;
            const v215 = v214.project;
            var result = unpackage(v215);
            const v216 = resolve(result);
            v216;
        };
        const v218 = parseString(xml, v217);
        v218;
    };
    const v220 = new Promise(v219);
    return v220;
};
parse.parseContent = v221;
const v234 = function (filePath) {
    const v232 = function (resolve, reject) {
        const v230 = function (err, content) {
            if (err) {
                const v222 = reject(err);
                v222;
            }
            const v223 = parse.parseContent(content);
            const v225 = function (result) {
                const v224 = resolve(result);
                v224;
            };
            const v226 = v223.then(v225);
            const v228 = function (err) {
                const v227 = reject(err);
                v227;
            };
            const v229 = v226.catch(v228);
            v229;
        };
        const v231 = fs.readFile(filePath, 'utf8', v230);
        v231;
    };
    const v233 = new Promise(v232);
    return v233;
};
parse.parseFile = v234;
module.exports = parse;