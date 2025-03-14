'use strict';
const fs = require('fs');
const css = require('css');
const defaults = require('lodash.defaults');
const isFunction = require('lodash.isfunction');
const isRegExp = require('lodash.isregexp');
const reject = require('lodash.reject');
const result = require('lodash.result');
const _default = {};
_default.matchSelectors = true;
_default.matchTypes = true;
_default.matchDeclarationProperties = true;
_default.matchDeclarationValues = true;
_default.matchMedia = true;
const read = function (file) {
    const v87 = { encoding: 'utf8' };
    const v88 = fs.readFileSync(file, v87);
    return v88;
};
const getValue = function (element, pluck) {
    if (pluck) {
        const v89 = result(element, pluck);
        return v89;
    }
    return element;
};
const _matcher = function (ignores, identifier, node, pluck) {
    const v108 = element => {
        let i = 0;
        const v90 = ignores.length;
        let v91 = i < v90;
        while (v91) {
            const v93 = ignores[i];
            const v94 = isFunction(v93);
            const v95 = getValue(element, pluck);
            const v96 = node || element;
            const v97 = ignores[i](identifier, v95, v96);
            const v98 = v94 && v97;
            if (v98) {
                return true;
            }
            const v99 = ignores[i];
            const v100 = isRegExp(v99);
            const v101 = ignores[i];
            const v102 = getValue(element, pluck);
            const v103 = v101.test(v102);
            const v104 = v100 && v103;
            if (v104) {
                return true;
            }
            const v105 = ignores[i];
            const v106 = getValue(element, pluck);
            const v107 = v105 === v106;
            if (v107) {
                return true;
            }
            const v92 = ++i;
            v91 = i < v90;
        }
        return false;
    };
    return v108;
};
const reduceRules = function (ignore, opts) {
    const matcher = (...args) => {
        const v109 = _matcher(ignore, ...args);
        return v109;
    };
    const v160 = function reducer(rules, rule) {
        const v110 = opts.matchTypes;
        const v111 = matcher('type', rule);
        const v112 = rule.type;
        const v113 = `@${ v112 }`;
        const v114 = v111(v113);
        const v115 = v110 && v114;
        if (v115) {
            return rules;
        }
        const v116 = rule.type;
        const v117 = v116 === 'media';
        if (v117) {
            const v118 = opts.matchMedia;
            const v119 = matcher('media', rule);
            const v120 = rule.media;
            const v121 = v119(v120);
            const v122 = v118 && v121;
            if (v122) {
                return rules;
            }
            const v123 = rule.rules;
            const v124 = [];
            const v125 = v123 || v124;
            const v126 = [];
            const v127 = v125.reduce(reducer, v126);
            rule.rules = v127;
            const v128 = rule.rules;
            const v129 = v128.length;
            const v130 = v129 > 0;
            if (v130) {
                const v131 = rules.push(rule);
                v131;
            }
        } else {
            const v132 = rule.type;
            const v133 = v132 === 'rule';
            if (v133) {
                const v134 = opts.matchSelectors;
                if (v134) {
                    const v135 = rule.selectors;
                    const v136 = [];
                    const v137 = v135 || v136;
                    const v138 = matcher('selector', rule);
                    const v139 = reject(v137, v138);
                    rule.selectors = v139;
                }
                const v140 = rule.selectors;
                const v141 = v140.length;
                const v142 = v141 > 0;
                if (v142) {
                    const v143 = opts.matchDeclarationProperties;
                    if (v143) {
                        const v144 = rule.declarations;
                        const v145 = [];
                        const v146 = v144 || v145;
                        const v147 = matcher('declarationProperty', undefined, 'property');
                        const v148 = reject(v146, v147);
                        rule.declarations = v148;
                    }
                    const v149 = opts.matchDeclarationValues;
                    if (v149) {
                        const v150 = rule.declarations;
                        const v151 = [];
                        const v152 = v150 || v151;
                        const v153 = matcher('declarationValue', undefined, 'value');
                        const v154 = reject(v152, v153);
                        rule.declarations = v154;
                    }
                    const v155 = rule.declarations;
                    const v156 = v155.length;
                    const v157 = v156 > 0;
                    if (v157) {
                        const v158 = rules.push(rule);
                        v158;
                    }
                }
            } else {
                const v159 = rules.push(rule);
                v159;
            }
        }
        return rules;
    };
    return v160;
};
const api = function (stylesheet, ignore, opts) {
    const v161 = {};
    const v162 = opts || v161;
    opts = defaults(v162, _default);
    const v163 = Array.isArray(ignore);
    const v164 = !v163;
    if (v164) {
        ignore = [ignore];
    }
    let sheet;
    try {
        const v165 = read(stylesheet);
        sheet = css.parse(v165);
    } catch (error) {
        sheet = css.parse(stylesheet);
    }
    const v167 = sheet.stylesheet;
    const v168 = v167.rules;
    const v169 = reduceRules(ignore, opts);
    const v170 = [];
    const v171 = v168.reduce(v169, v170);
    v166.rules = v171;
    const v172 = css.stringify(sheet);
    return v172;
};
module.exports = api;