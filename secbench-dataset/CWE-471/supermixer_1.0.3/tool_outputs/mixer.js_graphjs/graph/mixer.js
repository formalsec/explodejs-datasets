'use strict';
const v71 = { value: true };
const v72 = Object.defineProperty(exports, '__esModule', v71);
v72;
exports['default'] = mixer;
const _interopRequireDefault = function (obj) {
    const v73 = obj.__esModule;
    const v74 = obj && v73;
    const v75 = { 'default': obj };
    let v76;
    if (v74) {
        v76 = obj;
    } else {
        v76 = v75;
    }
    return v76;
};
var _lodashObjectForOwn = require('lodash/object/forOwn');
var _lodashObjectForOwn2 = _interopRequireDefault(_lodashObjectForOwn);
var _lodashObjectForIn = require('lodash/object/forIn');
var _lodashObjectForIn2 = _interopRequireDefault(_lodashObjectForIn);
var _lodashLangCloneDeep = require('lodash/lang/cloneDeep');
var _lodashLangCloneDeep2 = _interopRequireDefault(_lodashLangCloneDeep);
var _lodashLangIsObject = require('lodash/lang/isObject');
var _lodashLangIsObject2 = _interopRequireDefault(_lodashLangIsObject);
var _lodashLangIsUndefined = require('lodash/lang/isUndefined');
var _lodashLangIsUndefined2 = _interopRequireDefault(_lodashLangIsUndefined);
const mixer = function () {
    let opts;
    const v77 = arguments.length;
    const v78 = v77 <= 0;
    const v79 = arguments[0];
    const v80 = v79 === undefined;
    const v81 = v78 || v80;
    const v82 = {};
    const v83 = arguments[0];
    if (v81) {
        opts = v82;
    } else {
        opts = v83;
    }
    const v84 = opts.deep;
    const v85 = opts._innerMixer;
    const v86 = !v85;
    const v87 = v84 && v86;
    if (v87) {
        opts._innerMixer = true;
        const v88 = mixer(opts);
        opts._innerMixer = v88;
    }
    const v139 = function mix(target) {
        var _len = arguments.length;
        const v89 = _len > 1;
        const v90 = _len - 1;
        let v91;
        if (v89) {
            v91 = v90;
        } else {
            v91 = 0;
        }
        var sources = Array(v91);
        var _key = 1;
        let v92 = _key < _len;
        while (v92) {
            const v94 = _key - 1;
            const v95 = arguments[_key];
            sources[v94] = v95;
            const v93 = _key++;
            v92 = _key < _len;
        }
        const v96 = _lodashLangIsUndefined2['default'];
        const v97 = (0, v96)(target);
        const v98 = opts.noOverwrite;
        const v99 = !v98;
        const v100 = _lodashLangIsObject2['default'];
        const v101 = (0, v100)(target);
        const v102 = !v101;
        const v103 = v99 && v102;
        const v104 = v97 || v103;
        if (v104) {
            const v105 = sources.length;
            const v106 = v105 > 1;
            if (v106) {
                const v107 = opts._innerMixer;
                const v108 = {};
                const v109 = [v108];
                const v110 = v109.concat(sources);
                const v111 = v107.apply(opts, v110);
                return v111;
            }
            const v112 = _lodashLangCloneDeep2['default'];
            const v113 = sources[0];
            const v114 = (0, v112)(v113);
            return v114;
        }
        const v115 = opts.noOverwrite;
        if (v115) {
            const v116 = _lodashLangIsObject2['default'];
            const v117 = (0, v116)(target);
            const v118 = !v117;
            const v119 = _lodashLangIsObject2['default'];
            const v120 = sources[0];
            const v121 = (0, v119)(v120);
            const v122 = !v121;
            const v123 = v118 || v122;
            if (v123) {
                return target;
            }
        }
        const iteratee = function (sourceValue, key) {
            var targetValue = target[key];
            const v124 = opts.filter;
            const v125 = opts.filter(sourceValue, targetValue, key);
            const v126 = !v125;
            const v127 = v124 && v126;
            if (v127) {
                return;
            }
            let result;
            const v128 = opts.deep;
            const v129 = opts._innerMixer(targetValue, sourceValue);
            if (v128) {
                result = v129;
            } else {
                result = sourceValue;
            }
            const v130 = opts.transform;
            const v131 = opts.transform(result, targetValue, key);
            let v132;
            if (v130) {
                v132 = v131;
            } else {
                v132 = result;
            }
            target[key] = v132;
        };
        let loop;
        const v133 = opts.chain;
        const v134 = _lodashObjectForIn2['default'];
        const v135 = _lodashObjectForOwn2['default'];
        if (v133) {
            loop = v134;
        } else {
            loop = v135;
        }
        const v137 = function (obj) {
            const v136 = loop(obj, iteratee);
            v136;
        };
        const v138 = sources.forEach(v137);
        v138;
        return target;
    };
    return v139;
};
const v140 = exports['default'];
module.exports = v140;