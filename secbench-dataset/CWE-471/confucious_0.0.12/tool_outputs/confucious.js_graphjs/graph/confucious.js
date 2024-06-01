'use strict';
const v152 = function () {
    var fs = require('fs');
    const v77 = require('yargs');
    var argv = v77.argv;
    var extend = require('extend');
    var globalValues = {};
    var baseValues = {};
    var valuesStack = [];
    const v78 = valuesStack.push(globalValues);
    v78;
    const v79 = valuesStack.push(baseValues);
    v79;
    const v82 = function () {
        const v80 = [];
        const v81 = extend(true, v80, valuesStack);
        return v81;
    };
    this.getValueStackCopy = v82;
    const v96 = function (key, value) {
        var keyParts = key.split(':');
        const v83 = valuesStack.length;
        const v84 = v83 - 1;
        var hash = valuesStack[v84];
        var i = 0;
        const v85 = keyParts.length;
        const v86 = v85 - 1;
        let v87 = i < v86;
        while (v87) {
            var subKey = keyParts[i];
            hash = hash[subKey];
            const v89 = typeof hash;
            const v90 = v89 === 'undefined';
            if (v90) {
                hash = {};
                hash[subKey] = hash;
            }
            const v88 = ++i;
            v87 = i < v86;
        }
        const v91 = keyParts.length;
        var lastKeyPartIndex = v91 - 1;
        var lastSubKey = keyParts[lastKeyPartIndex];
        const v92 = typeof value;
        const v93 = v92 === 'object';
        if (v93) {
            const v94 = {};
            const v95 = extend(true, v94, value);
            hash[lastSubKey] = v95;
        } else {
            hash[lastSubKey] = value;
        }
    };
    this.set = v96;
    const v108 = function (key) {
        var keyParts = key.split(':');
        const v97 = valuesStack.length;
        const v98 = v97 - 1;
        var hash = valuesStack[v98];
        var i = 0;
        const v99 = keyParts.length;
        const v100 = v99 - 1;
        let v101 = i < v100;
        while (v101) {
            var subKey = keyParts[i];
            hash = hash[subKey];
            const v103 = typeof hash;
            const v104 = v103 === 'undefined';
            if (v104) {
                return;
            }
            const v102 = ++i;
            v101 = i < v100;
        }
        const v105 = keyParts.length;
        var lastKeyPartIndex = v105 - 1;
        var lastSubKey = keyParts[lastKeyPartIndex];
        const v106 = hash[lastSubKey];
        const v107 = delete v106;
        v107;
    };
    this.clear = v108;
    const v109 = function (key, value) {
        globalValues[key] = value;
    };
    this.setGlobal = v109;
    const v112 = function (key) {
        const v110 = globalValues[key];
        const v111 = delete v110;
        v111;
    };
    this.clearGlobal = v112;
    var getValue = function (key, hash) {
        var value = hash[key];
        const v113 = typeof value;
        const v114 = v113 !== 'undefined';
        if (v114) {
            return value;
        }
        return undefined;
    };
    var getNestedValue = function (keyParts, hash) {
        var i = 0;
        const v115 = keyParts.length;
        const v116 = v115 - 1;
        let v117 = i < v116;
        while (v117) {
            const v119 = keyParts[i];
            hash = getValue(v119, hash);
            const v120 = typeof hash;
            const v121 = v120 === 'undefined';
            if (v121) {
                return undefined;
            }
            const v118 = ++i;
            v117 = i < v116;
        }
        const v122 = keyParts.length;
        var lastKeyPartIndex = v122 - 1;
        const v123 = keyParts[lastKeyPartIndex];
        const v124 = getValue(v123, hash);
        return v124;
    };
    const v131 = function (key) {
        var keyParts = key.split(':');
        const v125 = valuesStack.length;
        var i = v125 - 1;
        let v126 = i >= 0;
        while (v126) {
            const v128 = valuesStack[i];
            var value = getNestedValue(keyParts, v128);
            const v129 = typeof value;
            const v130 = v129 !== 'undefined';
            if (v130) {
                return value;
            }
            const v127 = --i;
            v126 = i >= 0;
        }
        return undefined;
    };
    this.get = v131;
    const v135 = function (values) {
        const v132 = {};
        const v133 = extend(true, v132, values);
        const v134 = valuesStack.push(v133);
        v134;
    };
    this.push = v135;
    const v139 = function () {
        const v136 = valuesStack.length;
        const v137 = v136 > 2;
        if (v137) {
            const v138 = valuesStack.pop();
            v138;
        } else {
        }
    };
    this.pop = v139;
    const v143 = function (filePath) {
        const v140 = fs.readFileSync(filePath, 'utf8');
        const v141 = JSON.parse(v140);
        const v142 = this.push(v141);
        v142;
    };
    this.pushJsonFile = v143;
    const v145 = function () {
        const v144 = this.push(argv);
        v144;
    };
    this.pushArgv = v145;
    const v148 = function () {
        const v146 = process.env;
        const v147 = this.push(v146);
        v147;
    };
    this.pushEnv = v148;
    const v151 = function () {
        var base = {};
        const v149 = function (value) {
            base = extend(base, value);
        };
        const v150 = valuesStack.forEach(v149);
        v150;
        return base;
    };
    this.toObject = v151;
};
module.exports = v152;