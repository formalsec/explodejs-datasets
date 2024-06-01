const v100 = module.exports;
const exists = function (object, path) {
    const v101 = typeof path;
    const v102 = v101 === 'string';
    if (v102) {
        path = path.split('.');
    }
    const v103 = path instanceof Array;
    const v104 = !v103;
    const v105 = path.length;
    const v106 = v105 === 0;
    const v107 = v104 || v106;
    if (v107) {
        return false;
    }
    path = path.slice();
    var key = path.shift();
    const v108 = typeof object;
    const v109 = v108 !== 'object';
    const v110 = object === null;
    const v111 = v109 || v110;
    if (v111) {
        return false;
    }
    const v112 = path.length;
    const v113 = v112 === 0;
    if (v113) {
        const v114 = Object.hasOwnProperty;
        const v115 = [key];
        const v116 = v114.apply(object, v115);
        return v116;
    } else {
        const v117 = object[key];
        const v118 = exists(v117, path);
        return v118;
    }
};
v100.exists = exists;
var exists = v100.exists;
const v119 = module.exports;
const get = function (object, path) {
    const v120 = typeof path;
    const v121 = v120 === 'string';
    if (v121) {
        path = path.split('.');
    }
    const v122 = path instanceof Array;
    const v123 = !v122;
    const v124 = path.length;
    const v125 = v124 === 0;
    const v126 = v123 || v125;
    if (v126) {
        return;
    }
    path = path.slice();
    var key = path.shift();
    const v127 = typeof object;
    const v128 = v127 !== 'object';
    const v129 = object === null;
    const v130 = v128 || v129;
    if (v130) {
        return;
    }
    const v131 = path.length;
    const v132 = v131 === 0;
    if (v132) {
        const v133 = object[key];
        return v133;
    }
    const v134 = path.length;
    if (v134) {
        const v135 = object[key];
        const v136 = get(v135, path);
        return v136;
    }
};
v119.get = get;
var get = v119.get;
const v137 = module.exports;
const search = function (object, path) {
    const v138 = typeof path;
    const v139 = v138 === 'string';
    if (v139) {
        path = path.split('.');
    }
    const v140 = path instanceof Array;
    const v141 = !v140;
    const v142 = path.length;
    const v143 = v142 === 0;
    const v144 = v141 || v143;
    if (v144) {
        return;
    }
    path = path.slice();
    var key = path.shift();
    const v145 = typeof object;
    const v146 = v145 !== 'object';
    const v147 = object === null;
    const v148 = v146 || v147;
    if (v148) {
        return;
    }
    const v149 = key === '*';
    if (v149) {
        key = '.*';
    }
    const v150 = typeof key;
    const v151 = v150 === 'string';
    if (v151) {
        key = new RegExp(key);
    }
    const v152 = path.length;
    const v153 = v152 === 0;
    if (v153) {
        const v154 = Object.keys(object);
        const v155 = key.test;
        const v156 = v155.bind(key);
        const v157 = v154.filter(v156);
        const v159 = function (k) {
            const v158 = object[k];
            return v158;
        };
        const v160 = v157.map(v159);
        return v160;
    } else {
        const v161 = Array.prototype;
        const v162 = v161.concat;
        const v163 = [];
        const v164 = Object.keys(object);
        const v165 = key.test;
        const v166 = v165.bind(key);
        const v167 = v164.filter(v166);
        const v170 = function (k) {
            const v168 = object[k];
            const v169 = search(v168, path);
            return v169;
        };
        const v171 = v167.map(v170);
        const v172 = v162.apply(v163, v171);
        return v172;
    }
};
v137.search = search;
var search = v137.search;
const v173 = module.exports;
const put = function (object, path, value) {
    const v174 = typeof path;
    const v175 = v174 === 'string';
    if (v175) {
        path = path.split('.');
    }
    const v176 = path instanceof Array;
    const v177 = !v176;
    const v178 = path.length;
    const v179 = v178 === 0;
    const v180 = v177 || v179;
    if (v180) {
        return false;
    }
    path = path.slice();
    var key = path.shift();
    const v181 = typeof object;
    const v182 = v181 !== 'object';
    const v183 = object === null;
    const v184 = v182 || v183;
    if (v184) {
        return false;
    }
    const v185 = path.length;
    const v186 = v185 === 0;
    if (v186) {
        object[key] = value;
    } else {
        const v187 = object[key];
        const v188 = typeof v187;
        const v189 = v188 === 'undefined';
        if (v189) {
            const v190 = {};
            object[key] = v190;
        }
        const v191 = object[key];
        const v192 = typeof v191;
        const v193 = v192 !== 'object';
        const v194 = object[key];
        const v195 = v194 === null;
        const v196 = v193 || v195;
        if (v196) {
            return false;
        }
        const v197 = object[key];
        const v198 = put(v197, path, value);
        return v198;
    }
};
v173.put = put;
var put = v173.put;