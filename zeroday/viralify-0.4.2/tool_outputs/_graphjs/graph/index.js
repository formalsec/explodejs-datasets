'use strict';
var glob = require('glob');
var path = require('path');
var fs = require('fs');
var runnel = require('runnel');
const arraysEqual = function (a, b) {
    const v106 = !a;
    const v107 = !b;
    const v108 = v106 && v107;
    if (v108) {
        return true;
    }
    const v109 = !a;
    const v110 = !b;
    const v111 = v109 || v110;
    if (v111) {
        return false;
    }
    const v112 = a.length;
    const v113 = b.length;
    const v114 = v112 !== v113;
    if (v114) {
        return false;
    }
    var i = 0;
    const v115 = a.length;
    let v116 = i < v115;
    while (v116) {
        const v118 = a[i];
        const v119 = b[i];
        const v120 = v118 !== v119;
        if (v120) {
            return false;
        }
        const v117 = i++;
        v116 = i < v115;
    }
    return true;
};
const addTransform = function (front, transform, packfile) {
    var pack = require(packfile);
    const v121 = pack.browserify;
    const v122 = !v121;
    if (v122) {
        const v123 = {};
        pack.browserify = v123;
    }
    const v124 = pack.browserify;
    const v125 = typeof v124;
    const v126 = v125 === 'string';
    if (v126) {
        var k = pack.browserify;
        const v127 = {};
        pack.browserify = v127;
        const v128 = pack.browserify;
        v128[k] = k;
    }
    const v129 = pack.browserify;
    const v130 = v129.transform;
    const v131 = !v130;
    if (v131) {
        const v132 = pack.browserify;
        v132.transform = [];
    }
    const v133 = [];
    const v134 = pack.browserify;
    const v135 = v134.transform;
    var before = v133.concat(v135);
    const v142 = function (tx) {
        const v136 = pack.browserify;
        const v137 = v136.transform;
        var idx = v137.indexOf(tx);
        const v138 = ~idx;
        if (v138) {
            const v139 = pack.browserify;
            const v140 = v139.transform;
            const v141 = v140.splice(idx, 1);
            v141;
        }
    };
    const v143 = transform.forEach(v142);
    v143;
    if (front) {
        const v145 = pack.browserify;
        const v146 = v145.transform;
        const v147 = transform.concat(v146);
        v144.transform = v147;
    } else {
        const v149 = pack.browserify;
        const v150 = v149.transform;
        const v151 = v150.concat(transform);
        v148.transform = v151;
    }
    const v152 = pack.browserify;
    const v153 = v152.transform;
    const v154 = arraysEqual(before, v153);
    const v155 = !v154;
    var changed = v155;
    const v156 = {};
    v156.file = packfile;
    v156.pack = pack;
    v156.changed = changed;
    return v156;
};
const packsWithTransforms = function (root, transform, front, relPaths) {
    const v158 = function (x) {
        const v157 = path.resolve(root, x);
        return v157;
    };
    const v159 = relPaths.map(v158);
    const v160 = addTransform.bind(null, front, transform);
    const v161 = v159.map(v160);
    const v163 = function (p) {
        const v162 = p.changed;
        return v162;
    };
    const v164 = v161.filter(v163);
    return v164;
};
const globify = function (packnames) {
    let extra;
    const v165 = packnames.length;
    const v166 = v165 === 1;
    if (v166) {
        extra = ',';
    } else {
        extra = '';
    }
    const v167 = packnames.join(',');
    const v168 = '{' + v167;
    const v169 = v168 + extra;
    const v170 = v169 + '}';
    return v170;
};
const viralify = function (root, packages, transform, front, cb) {
    const v171 = Array.isArray(packages);
    const v172 = !v171;
    if (v172) {
        packages = [packages];
    }
    const v173 = Array.isArray(transform);
    const v174 = !v173;
    if (v174) {
        transform = [transform];
    }
    const v175 = typeof front;
    const v176 = v175 === 'function';
    if (v176) {
        cb = front;
        front = false;
    }
    const v177 = globify(packages);
    const v178 = '**/node_modules/' + v177;
    var globString = v178 + '/package.json';
    const v179 = { cwd: root };
    const v195 = function (err, relPaths) {
        if (err) {
            const v180 = cb(err);
            return v180;
        }
        const v181 = relPaths.length;
        const v182 = !v181;
        if (v182) {
            const v183 = cb();
            return v183;
        }
        var packs = packsWithTransforms(root, transform, front, relPaths);
        const v184 = packs.length;
        const v185 = !v184;
        if (v185) {
            const v186 = cb();
            return v186;
        }
        const v192 = function (p) {
            const v191 = function (cb) {
                const v187 = p.file;
                const v188 = p.pack;
                const v189 = JSON.stringify(v188, null, 2);
                const v190 = fs.writeFile(v187, v189, 'utf8', cb);
                v190;
            };
            return v191;
        };
        const v193 = packs.map(v192);
        var tasks = v193.concat(cb);
        const v194 = runnel(tasks);
        v194;
    };
    const v196 = glob(globString, v179, v195);
    v196;
};
module.exports = viralify;
var go = module.exports;
const v197 = module.exports;
const sync = function (root, packages, transform, front) {
    const v198 = Array.isArray(packages);
    const v199 = !v198;
    if (v199) {
        packages = [packages];
    }
    const v200 = Array.isArray(transform);
    const v201 = !v200;
    if (v201) {
        transform = [transform];
    }
    const v202 = globify(packages);
    const v203 = '**/node_modules/' + v202;
    var globString = v203 + '/package.json';
    const v204 = { cwd: root };
    var relPaths = glob.sync(globString, v204);
    var packs = packsWithTransforms(root, transform, front, relPaths);
    const v209 = function (p) {
        const v205 = p.file;
        const v206 = p.pack;
        const v207 = JSON.stringify(v206, null, 2);
        const v208 = fs.writeFileSync(v205, v207, 'utf8');
        v208;
    };
    const v210 = packs.forEach(v209);
    v210;
};
v197.sync = sync;