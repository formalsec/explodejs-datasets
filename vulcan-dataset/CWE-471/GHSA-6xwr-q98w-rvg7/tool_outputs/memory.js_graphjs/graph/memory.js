var common = require('../common');
const v114 = function (options) {
    const v105 = {};
    options = options || v105;
    this.type = 'memory';
    const v106 = {};
    this.store = v106;
    const v107 = {};
    this.mtimes = v107;
    this.readOnly = false;
    const v108 = options.loadFrom;
    this.loadFrom = v108 || null;
    const v109 = options.logicalSeparator;
    this.logicalSeparator = v109 || ':';
    const v110 = options.parseValues;
    this.parseValues = v110 || false;
    const v111 = this.loadFrom;
    if (v111) {
        const v112 = this.loadFrom;
        const v113 = common.loadFilesSync(v112);
        this.store = v113;
    }
};
exports.Memory = v114;
var Memory = exports.Memory;
const v115 = Memory.prototype;
const v125 = function (key) {
    var target = this.store;
    const v116 = this.logicalSeparator;
    var path = common.path(key, v116);
    const v117 = path.length;
    let v118 = v117 > 0;
    while (v118) {
        key = path.shift();
        const v119 = typeof target;
        const v120 = v119 !== 'string';
        const v121 = target && v120;
        const v122 = Object.hasOwnProperty;
        const v123 = v122.call(target, key);
        const v124 = v121 && v123;
        if (v124) {
            target = target[key];
            continue;
        }
        return undefined;
        v118 = v117 > 0;
    }
    return target;
};
v115.get = v125;
const v126 = Memory.prototype;
const v149 = function (key, value) {
    const v127 = this.readOnly;
    if (v127) {
        return false;
    }
    var target = this.store;
    const v128 = this.logicalSeparator;
    var path = common.path(key, v128);
    const v129 = path.length;
    const v130 = v129 === 0;
    if (v130) {
        const v131 = !value;
        const v132 = typeof value;
        const v133 = v132 !== 'object';
        const v134 = v131 || v133;
        if (v134) {
            return false;
        } else {
            const v135 = this.reset();
            v135;
            this.store = value;
            return true;
        }
    }
    const v137 = Date.now();
    v136[key] = v137;
    const v138 = path.length;
    let v139 = v138 > 1;
    while (v139) {
        key = path.shift();
        const v140 = target[key];
        const v141 = !v140;
        const v142 = target[key];
        const v143 = typeof v142;
        const v144 = v143 !== 'object';
        const v145 = v141 || v144;
        if (v145) {
            const v146 = {};
            target[key] = v146;
        }
        target = target[key];
        v139 = v138 > 1;
    }
    key = path.shift();
    const v147 = this.parseValues;
    if (v147) {
        const v148 = common.parseValues;
        value = v148.call(common, value);
    }
    target[key] = value;
    return true;
};
v126.set = v149;
const v150 = Memory.prototype;
const v167 = function (key) {
    const v151 = this.readOnly;
    if (v151) {
        return false;
    }
    var target = this.store;
    var value = target;
    const v152 = this.logicalSeparator;
    var path = common.path(key, v152);
    const v153 = this.mtimes;
    const v154 = v153[key];
    const v155 = delete v154;
    v155;
    var i = 0;
    const v156 = path.length;
    const v157 = v156 - 1;
    let v158 = i < v157;
    while (v158) {
        key = path[i];
        value = target[key];
        const v160 = typeof value;
        const v161 = v160 !== 'function';
        const v162 = typeof value;
        const v163 = v162 !== 'object';
        const v164 = v161 && v163;
        if (v164) {
            return false;
        }
        target = value;
        const v159 = i++;
        v158 = i < v157;
    }
    key = path[i];
    const v165 = target[key];
    const v166 = delete v165;
    v166;
    return true;
};
v150.clear = v167;
const v168 = Memory.prototype;
const v198 = function (key, value) {
    const v169 = this.readOnly;
    if (v169) {
        return false;
    }
    const v170 = typeof value;
    const v171 = v170 !== 'object';
    const v172 = Array.isArray(value);
    const v173 = v171 || v172;
    const v174 = value === null;
    const v175 = v173 || v174;
    if (v175) {
        const v176 = this.set(key, value);
        return v176;
    }
    var self = this;
    var target = this.store;
    const v177 = this.logicalSeparator;
    var path = common.path(key, v177);
    var fullKey = key;
    const v179 = Date.now();
    v178[key] = v179;
    const v180 = path.length;
    let v181 = v180 > 1;
    while (v181) {
        key = path.shift();
        const v182 = target[key];
        const v183 = !v182;
        if (v183) {
            const v184 = {};
            target[key] = v184;
        }
        target = target[key];
        v181 = v180 > 1;
    }
    key = path.shift();
    const v185 = target[key];
    const v186 = typeof v185;
    const v187 = v186 !== 'object';
    const v188 = target[key];
    const v189 = Array.isArray(v188);
    const v190 = v187 || v189;
    if (v190) {
        target[key] = value;
        return true;
    }
    const v191 = Object.keys(value);
    const v196 = function (nested) {
        const v192 = self.logicalSeparator;
        const v193 = common.keyed(v192, fullKey, nested);
        const v194 = value[nested];
        const v195 = self.merge(v193, v194);
        return v195;
    };
    const v197 = v191.every(v196);
    return v197;
};
v168.merge = v198;
const v199 = Memory.prototype;
const v203 = function () {
    const v200 = this.readOnly;
    if (v200) {
        return false;
    }
    const v201 = {};
    this.mtimes = v201;
    const v202 = {};
    this.store = v202;
    return true;
};
v199.reset = v203;
const v204 = Memory.prototype;
const v208 = function () {
    const v205 = this.store;
    const v206 = {};
    const v207 = v205 || v206;
    return v207;
};
v204.loadSync = v208;