'use strict';
var fs = require('fs');
const v161 = require('xml2js');
var parseString = v161.parseString;
var parse = {};
var classesFromPackages = function (packages) {
    var classes = [];
    const v169 = function (packages) {
        const v162 = packages.package;
        const v167 = function (pack) {
            const v163 = pack.classes;
            const v165 = function (c) {
                const v164 = c.class;
                classes = classes.concat(v164);
            };
            const v166 = v163.forEach(v165);
            v166;
        };
        const v168 = v162.forEach(v167);
        v168;
    };
    const v170 = packages.forEach(v169);
    v170;
    return classes;
};
var extractLcovStyleBranches = function (c) {
    var branches = [];
    const v171 = c.lines;
    const v172 = c.lines;
    const v173 = v172[0];
    const v174 = v173.line;
    const v175 = v171 && v174;
    if (v175) {
        const v176 = c.lines;
        const v177 = v176[0];
        const v178 = v177.line;
        const v202 = function (l) {
            const v179 = l.$;
            const v180 = v179.branch;
            const v181 = v180 == 'true';
            if (v181) {
                const v182 = l.$;
                const v183 = v182['condition-coverage'];
                var branchStats = v183.match(/\d+/g);
                const v184 = branchStats[1];
                var coveredBranches = Number(v184);
                const v185 = branchStats[2];
                var totalBranches = Number(v185);
                var leftBranches = totalBranches - coveredBranches;
                var branchNumber = 0;
                let i = 0;
                let v186 = i < leftBranches;
                while (v186) {
                    const v188 = l.$;
                    const v189 = v188.number;
                    const v190 = Number(v189);
                    const v191 = {
                        line: v190,
                        branch: branchNumber,
                        taken: 0
                    };
                    const v192 = branches.push(v191);
                    v192;
                    const v193 = branchNumber++;
                    v193;
                    const v187 = i++;
                    v186 = i < leftBranches;
                }
                let i = 0;
                let v194 = i < coveredBranches;
                while (v194) {
                    const v196 = l.$;
                    const v197 = v196.number;
                    const v198 = Number(v197);
                    const v199 = {
                        line: v198,
                        branch: branchNumber,
                        taken: 1
                    };
                    const v200 = branches.push(v199);
                    v200;
                    const v201 = branchNumber++;
                    v201;
                    const v195 = i++;
                    v194 = i < coveredBranches;
                }
            }
        };
        const v203 = v178.forEach(v202);
        v203;
    }
    return branches;
};
var unpackage = function (packages) {
    var classes = classesFromPackages(packages);
    const v307 = function (c) {
        var branches = extractLcovStyleBranches(c);
        const v204 = c.$;
        const v205 = v204.name;
        const v206 = c.$;
        const v207 = v206.filename;
        const v208 = c.methods;
        const v209 = c.methods;
        const v210 = v209[0];
        const v211 = v210.method;
        const v212 = v208 && v211;
        const v213 = c.methods;
        const v214 = v213[0];
        const v215 = v214.method;
        const v216 = v215.length;
        let v217;
        if (v212) {
            v217 = v216;
        } else {
            v217 = 0;
        }
        const v218 = c.methods;
        const v219 = !v218;
        const v220 = c.methods;
        const v221 = v220[0];
        const v222 = v221.method;
        const v223 = !v222;
        const v224 = v219 || v223;
        const v225 = [];
        const v226 = c.methods;
        const v227 = v226[0];
        const v228 = v227.method;
        const v246 = function (m) {
            const v229 = m.$;
            const v230 = v229.name;
            const v231 = m.lines;
            const v232 = v231[0];
            const v233 = v232.line;
            const v234 = v233[0];
            const v235 = v234.$;
            const v236 = v235.number;
            const v237 = Number(v236);
            const v238 = m.lines;
            const v239 = v238[0];
            const v240 = v239.line;
            const v241 = v240[0];
            const v242 = v241.$;
            const v243 = v242.hits;
            const v244 = Number(v243);
            const v245 = {};
            v245.name = v230;
            v245.line = v237;
            v245.hit = v244;
            return v245;
        };
        const v247 = v228.map(v246);
        let v248;
        if (v224) {
            v248 = v225;
        } else {
            v248 = v247;
        }
        const v249 = {};
        v249.found = v217;
        v249.hit = 0;
        v249.details = v248;
        const v250 = c.lines;
        const v251 = c.lines;
        const v252 = v251[0];
        const v253 = v252.line;
        const v254 = v250 && v253;
        const v255 = c.lines;
        const v256 = v255[0];
        const v257 = v256.line;
        const v258 = v257.length;
        let v259;
        if (v254) {
            v259 = v258;
        } else {
            v259 = 0;
        }
        const v260 = c.lines;
        const v261 = !v260;
        const v262 = c.lines;
        const v263 = v262[0];
        const v264 = v263.line;
        const v265 = !v264;
        const v266 = v261 || v265;
        const v267 = [];
        const v268 = c.lines;
        const v269 = v268[0];
        const v270 = v269.line;
        const v278 = function (l) {
            const v271 = l.$;
            const v272 = v271.number;
            const v273 = Number(v272);
            const v274 = l.$;
            const v275 = v274.hits;
            const v276 = Number(v275);
            const v277 = {};
            v277.line = v273;
            v277.hit = v276;
            return v277;
        };
        const v279 = v270.map(v278);
        let v280;
        if (v266) {
            v280 = v267;
        } else {
            v280 = v279;
        }
        const v281 = {};
        v281.found = v259;
        v281.hit = 0;
        v281.details = v280;
        const v282 = branches.length;
        const v285 = function (br) {
            const v283 = br.taken;
            const v284 = v283 > 0;
            return v284;
        };
        const v286 = branches.filter(v285);
        const v287 = v286.length;
        const v288 = {};
        v288.found = v282;
        v288.hit = v287;
        v288.details = branches;
        var classCov = {};
        classCov.title = v205;
        classCov.file = v207;
        classCov.functions = v249;
        classCov.lines = v281;
        classCov.branches = v288;
        const v290 = classCov.functions;
        const v291 = v290.details;
        const v296 = function (acc, val) {
            const v292 = val.hit;
            const v293 = v292 > 0;
            let v294;
            if (v293) {
                v294 = 1;
            } else {
                v294 = 0;
            }
            const v295 = acc + v294;
            return v295;
        };
        const v297 = v291.reduce(v296, 0);
        v289.hit = v297;
        const v299 = classCov.lines;
        const v300 = v299.details;
        const v305 = function (acc, val) {
            const v301 = val.hit;
            const v302 = v301 > 0;
            let v303;
            if (v302) {
                v303 = 1;
            } else {
                v303 = 0;
            }
            const v304 = acc + v303;
            return v304;
        };
        const v306 = v300.reduce(v305, 0);
        v298.hit = v306;
        return classCov;
    };
    const v308 = classes.map(v307);
    return v308;
};
const v315 = function (xml, cb) {
    const v313 = function (err, parseResult) {
        if (err) {
            const v309 = cb(err);
            return v309;
        }
        const v310 = parseResult.coverage;
        const v311 = v310.packages;
        var result = unpackage(v311);
        const v312 = cb(err, result);
        v312;
    };
    const v314 = parseString(xml, v313);
    v314;
};
parse.parseContent = v315;
const v320 = function (file, cb) {
    const v318 = function (err, content) {
        if (err) {
            const v316 = cb(err);
            return v316;
        }
        const v317 = parse.parseContent(content, cb);
        v317;
    };
    const v319 = fs.readFile(file, 'utf8', v318);
    v319;
};
parse.parseFile = v320;
module.exports = parse;