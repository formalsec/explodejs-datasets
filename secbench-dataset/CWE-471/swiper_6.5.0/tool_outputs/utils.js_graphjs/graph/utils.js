'use strict';
exports.__esModule = true;
exports.deleteProps = deleteProps;
exports.nextTick = nextTick;
exports.now = now;
exports.getTranslate = getTranslate;
exports.isObject = isObject;
exports.extend = extend;
exports.bindModuleMethods = bindModuleMethods;
var _ssrWindow = require('ssr-window');
const deleteProps = function (obj) {
    var object = obj;
    const v115 = Object.keys(object);
    const v118 = function (key) {
        try {
            object[key] = null;
        } catch (e) {
        }
        try {
            const v116 = object[key];
            const v117 = delete v116;
            v117;
        } catch (e) {
        }
    };
    const v119 = v115.forEach(v118);
    v119;
};
const nextTick = function (callback, delay) {
    const v120 = void 0;
    const v121 = delay === v120;
    if (v121) {
        delay = 0;
    }
    const v122 = setTimeout(callback, delay);
    return v122;
};
const now = function () {
    const v123 = Date.now();
    return v123;
};
const getTranslate = function (el, axis) {
    const v124 = void 0;
    const v125 = axis === v124;
    if (v125) {
        axis = 'x';
    }
    const v126 = _ssrWindow.getWindow;
    var window = (0, v126)();
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = window.getComputedStyle(el, null);
    const v127 = window.WebKitCSSMatrix;
    if (v127) {
        const v128 = curStyle.transform;
        const v129 = curStyle.webkitTransform;
        curTransform = v128 || v129;
        const v130 = curTransform.split(',');
        const v131 = v130.length;
        const v132 = v131 > 6;
        if (v132) {
            const v133 = curTransform.split(', ');
            const v135 = function (a) {
                const v134 = a.replace(',', '.');
                return v134;
            };
            const v136 = v133.map(v135);
            curTransform = v136.join(', ');
        }
        const v137 = curTransform === 'none';
        let v138;
        if (v137) {
            v138 = '';
        } else {
            v138 = curTransform;
        }
        transformMatrix = new window.WebKitCSSMatrix(v138);
    } else {
        const v139 = curStyle.MozTransform;
        const v140 = curStyle.OTransform;
        const v141 = v139 || v140;
        const v142 = curStyle.MsTransform;
        const v143 = v141 || v142;
        const v144 = curStyle.msTransform;
        const v145 = v143 || v144;
        const v146 = curStyle.transform;
        const v147 = v145 || v146;
        const v148 = curStyle.getPropertyValue('transform');
        const v149 = v148.replace('translate(', 'matrix(1, 0, 0, 1,');
        transformMatrix = v147 || v149;
        const v150 = transformMatrix.toString();
        matrix = v150.split(',');
    }
    const v151 = axis === 'x';
    if (v151) {
        const v152 = window.WebKitCSSMatrix;
        if (v152) {
            curTransform = transformMatrix.m41;
        } else {
            const v153 = matrix.length;
            const v154 = v153 === 16;
            if (v154) {
                const v155 = matrix[12];
                curTransform = parseFloat(v155);
            } else {
                const v156 = matrix[4];
                curTransform = parseFloat(v156);
            }
        }
    }
    const v157 = axis === 'y';
    if (v157) {
        const v158 = window.WebKitCSSMatrix;
        if (v158) {
            curTransform = transformMatrix.m42;
        } else {
            const v159 = matrix.length;
            const v160 = v159 === 16;
            if (v160) {
                const v161 = matrix[13];
                curTransform = parseFloat(v161);
            } else {
                const v162 = matrix[5];
                curTransform = parseFloat(v162);
            }
        }
    }
    const v163 = curTransform || 0;
    return v163;
};
const isObject = function (o) {
    const v164 = typeof o;
    const v165 = v164 === 'object';
    const v166 = o !== null;
    const v167 = v165 && v166;
    const v168 = o.constructor;
    const v169 = v167 && v168;
    const v170 = o.constructor;
    const v171 = v170 === Object;
    const v172 = v169 && v171;
    return v172;
};
const extend = function () {
    const v173 = arguments.length;
    const v174 = v173 <= 0;
    const v175 = arguments[0];
    let v176;
    if (v174) {
        v176 = undefined;
    } else {
        v176 = v175;
    }
    var to = Object(v176);
    var i = 1;
    const v177 = arguments.length;
    let v178 = i < v177;
    while (v178) {
        let nextSource;
        const v179 = i < 0;
        const v180 = arguments.length;
        const v181 = v180 <= i;
        const v182 = v179 || v181;
        const v183 = arguments[i];
        if (v182) {
            nextSource = undefined;
        } else {
            nextSource = v183;
        }
        const v184 = nextSource !== undefined;
        const v185 = nextSource !== null;
        const v186 = v184 && v185;
        if (v186) {
            const v187 = Object(nextSource);
            var keysArray = Object.keys(v187);
            var nextIndex = 0;
            var len = keysArray.length;
            let v188 = nextIndex < len;
            while (v188) {
                var nextKey = keysArray[nextIndex];
                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                const v189 = desc !== undefined;
                const v190 = desc.enumerable;
                const v191 = v189 && v190;
                if (v191) {
                    const v192 = to[nextKey];
                    const v193 = isObject(v192);
                    const v194 = nextSource[nextKey];
                    const v195 = isObject(v194);
                    const v196 = v193 && v195;
                    if (v196) {
                        const v197 = to[nextKey];
                        const v198 = nextSource[nextKey];
                        const v199 = extend(v197, v198);
                        v199;
                    } else {
                        const v200 = to[nextKey];
                        const v201 = isObject(v200);
                        const v202 = !v201;
                        const v203 = nextSource[nextKey];
                        const v204 = isObject(v203);
                        const v205 = v202 && v204;
                        if (v205) {
                            const v206 = {};
                            to[nextKey] = v206;
                            const v207 = to[nextKey];
                            const v208 = nextSource[nextKey];
                            const v209 = extend(v207, v208);
                            v209;
                        } else {
                            const v210 = nextSource[nextKey];
                            to[nextKey] = v210;
                        }
                    }
                }
                v188 = nextIndex < len;
            }
        }
        v178 = i < v177;
    }
    return to;
};
const bindModuleMethods = function (instance, obj) {
    const v211 = Object.keys(obj);
    const v227 = function (key) {
        const v212 = obj[key];
        const v213 = isObject(v212);
        if (v213) {
            const v214 = obj[key];
            const v215 = Object.keys(v214);
            const v224 = function (subKey) {
                const v216 = obj[key];
                const v217 = v216[subKey];
                const v218 = typeof v217;
                const v219 = v218 === 'function';
                if (v219) {
                    const v221 = obj[key];
                    const v222 = v221[subKey];
                    const v223 = v222.bind(instance);
                    v220[subKey] = v223;
                }
            };
            const v225 = v215.forEach(v224);
            v225;
        }
        const v226 = obj[key];
        instance[key] = v226;
    };
    const v228 = v211.forEach(v227);
    v228;
};