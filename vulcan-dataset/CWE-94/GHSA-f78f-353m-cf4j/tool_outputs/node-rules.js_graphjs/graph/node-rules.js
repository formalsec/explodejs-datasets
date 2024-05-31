const v270 = function () {
    'use strict';
    var _ = require('underscore');
    exports.version = '3.0.0';
    const RuleEngine = function (rules) {
        const v137 = this.init();
        v137;
        const v138 = typeof rules;
        const v139 = v138 != 'undefined';
        if (v139) {
            const v140 = this.register(rules);
            v140;
        }
        return this;
    };
    const v141 = RuleEngine.prototype;
    const v142 = function (rules) {
        this.rules = [];
        this.activeRules = [];
    };
    v141.init = v142;
    const v143 = RuleEngine.prototype;
    const v154 = function (rules) {
        const v144 = rules instanceof Array;
        if (v144) {
            const v145 = this.rules;
            const v146 = v145.concat(rules);
            this.rules = v146;
        } else {
            const v147 = rules !== null;
            const v148 = typeof rules;
            const v149 = v148 == 'object';
            const v150 = v147 && v149;
            if (v150) {
                const v151 = this.rules;
                const v152 = v151.push(rules);
                v152;
            }
        }
        const v153 = this.sync();
        v153;
    };
    v143.register = v154;
    const v155 = RuleEngine.prototype;
    const v173 = function () {
        const v156 = this.rules;
        const v162 = function (a) {
            const v157 = a.on;
            const v158 = typeof v157;
            const v159 = v158 === 'undefined';
            if (v159) {
                a.on = true;
            }
            const v160 = a.on;
            const v161 = v160 === true;
            if (v161) {
                return a;
            }
        };
        const v163 = v156.filter(v162);
        this.activeRules = v163;
        const v164 = this.activeRules;
        const v171 = function (a, b) {
            const v165 = a.priority;
            const v166 = b.priority;
            const v167 = v165 && v166;
            if (v167) {
                const v168 = b.priority;
                const v169 = a.priority;
                const v170 = v168 - v169;
                return v170;
            } else {
                return 0;
            }
        };
        const v172 = v164.sort(v171);
        v172;
    };
    v155.sync = v173;
    const v174 = RuleEngine.prototype;
    const v208 = function (fact, callback) {
        var complete = false;
        fact.result = true;
        var session = _.clone(fact);
        var lastSession = _.clone(fact);
        var _rules = this.activeRules;
        const v206 = function FnRuleLoop(x) {
            const v182 = function (outcome) {
                if (outcome) {
                    const v175 = _rules[x];
                    var _consequence = v175.consequence;
                    const v177 = function () {
                        const v176 = _consequence.call(session, API);
                        v176;
                    };
                    const v178 = process.nextTick(v177);
                    v178;
                } else {
                    const v180 = function () {
                        const v179 = API.next();
                        v179;
                    };
                    const v181 = process.nextTick(v180);
                    v181;
                }
            };
            const v184 = function () {
                const v183 = FnRuleLoop(0);
                return v183;
            };
            const v186 = function () {
                complete = true;
                const v185 = FnRuleLoop(0);
                return v185;
            };
            const v196 = function () {
                const v187 = _.isEqual(lastSession, session);
                const v188 = !v187;
                if (v188) {
                    lastSession = _.clone(session);
                    const v190 = function () {
                        const v189 = API.restart();
                        v189;
                    };
                    const v191 = process.nextTick(v190);
                    v191;
                } else {
                    const v194 = function () {
                        const v192 = x + 1;
                        const v193 = FnRuleLoop(v192);
                        return v193;
                    };
                    const v195 = process.nextTick(v194);
                    v195;
                }
            };
            var API = {};
            API['when'] = v182;
            API['restart'] = v184;
            API['stop'] = v186;
            API['next'] = v196;
            const v197 = _rules.length;
            const v198 = x < v197;
            const v199 = complete === false;
            const v200 = v198 && v199;
            if (v200) {
                const v201 = _rules[x];
                var _rule = v201.condition;
                const v202 = _rule.call(session, API);
                v202;
            } else {
                const v204 = function () {
                    const v203 = callback(session);
                    return v203;
                };
                const v205 = process.nextTick(v204);
                v205;
            }
        };
        const v207 = v206(0);
        v207;
    };
    v174.execute = v208;
    const v209 = RuleEngine.prototype;
    const v212 = function (filter) {
        var find = _.matches(filter);
        const v210 = this.rules;
        const v211 = _.filter(v210, find);
        return v211;
    };
    v209.findRules = v212;
    const v213 = RuleEngine.prototype;
    const v221 = function (state, filter) {
        let state;
        const v214 = state === 'on';
        const v215 = state === 'ON';
        const v216 = v214 || v215;
        if (v216) {
            state = true;
        } else {
            state = false;
        }
        var rules = this.findRules(filter);
        var i = 0;
        var j = rules.length;
        let v217 = i < j;
        while (v217) {
            const v219 = rules[i];
            v219.on = state;
            const v218 = i++;
            v217 = i < j;
        }
        const v220 = this.sync();
        v220;
    };
    v213.turn = v221;
    const v222 = RuleEngine.prototype;
    const v227 = function (priority, filter) {
        priority = parseInt(priority, 10);
        var rules = this.findRules(filter);
        var i = 0;
        var j = rules.length;
        let v223 = i < j;
        while (v223) {
            const v225 = rules[i];
            v225.priority = priority;
            const v224 = i++;
            v223 = i < j;
        }
        const v226 = this.sync();
        v226;
    };
    v222.prioritize = v227;
    const v228 = RuleEngine.prototype;
    const v241 = function () {
        var rules = this.rules;
        const v229 = rules instanceof Array;
        if (v229) {
            const v234 = function (rule) {
                const v230 = rule.condition;
                const v231 = v230.toString();
                rule.condition = v231;
                const v232 = rule.consequence;
                const v233 = v232.toString();
                rule.consequence = v233;
                return rule;
            };
            rules = rules.map(v234);
        } else {
            const v235 = typeof rules;
            const v236 = v235 != 'undefined';
            if (v236) {
                const v237 = rules.condition;
                const v238 = v237.toString();
                rules.condition = v238;
                const v239 = rules.consequence;
                const v240 = v239.toString();
                rules.consequence = v240;
            }
        }
        return rules;
    };
    v228.toJSON = v241;
    const v242 = RuleEngine.prototype;
    const v269 = function (rules) {
        const v243 = this.init();
        v243;
        const v244 = typeof rules;
        const v245 = v244 == 'string';
        if (v245) {
            rules = JSON.parse(rules);
        }
        const v246 = rules instanceof Array;
        if (v246) {
            const v255 = function (rule) {
                const v247 = rule.condition;
                const v248 = '(' + v247;
                const v249 = v248 + ')';
                const v250 = eval(v249);
                rule.condition = v250;
                const v251 = rule.consequence;
                const v252 = '(' + v251;
                const v253 = v252 + ')';
                const v254 = eval(v253);
                rule.consequence = v254;
                return rule;
            };
            rules = rules.map(v255);
        } else {
            const v256 = rules !== null;
            const v257 = typeof rules;
            const v258 = v257 == 'object';
            const v259 = v256 && v258;
            if (v259) {
                const v260 = rules.condition;
                const v261 = '(' + v260;
                const v262 = v261 + ')';
                const v263 = eval(v262);
                rules.condition = v263;
                const v264 = rules.consequence;
                const v265 = '(' + v264;
                const v266 = v265 + ')';
                const v267 = eval(v266);
                rules.consequence = v267;
            }
        }
        const v268 = this.register(rules);
        v268;
    };
    v242.fromJSON = v269;
    module.exports = RuleEngine;
};
const v271 = module.exports;
const v272 = v270(v271);
v272;