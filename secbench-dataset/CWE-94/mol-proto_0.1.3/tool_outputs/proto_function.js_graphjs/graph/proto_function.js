'use strict';
const v92 = require('./utils');
var makeProtoFunction = v92.makeProtoFunction;
const v93 = require('./proto_util');
var repeat = v93.repeat;
const v94 = {};
v94.makeFunction = makeFunction;
v94.partial = partial;
v94.partialRight = partialRight;
v94.memoize = memoize;
v94.delay = delay;
v94.defer = defer;
v94.delayed = delayed;
v94.deferred = deferred;
v94.deferTicks = deferTicks;
v94.delayMethod = delayMethod;
v94.deferMethod = deferMethod;
v94.debounce = debounce;
v94.throttle = throttle;
v94.once = once;
v94.waitFor = waitFor;
v94.not = not;
module.exports = v94;
var functionMethods = module.exports;
const v95 = Array.prototype;
var slice = v95.slice;
const makeFunction = function (arg1, arg2, funcBody) {
    var name = this;
    const v96 = arguments.length;
    var count = v96 - 1;
    var funcBody = arguments[count];
    var func;
    var code = '';
    var i = 0;
    let v97 = i < count;
    while (v97) {
        const v99 = arguments[i];
        code += ', ' + v99;
        const v98 = i++;
        v97 = i < count;
    }
    const v100 = code.slice(2);
    const v101 = [
        'func = function ',
        name,
        '(',
        v100,
        ') {\n',
        funcBody,
        '\n}'
    ];
    code = v101.join('');
    const v102 = eval(code);
    v102;
    return func;
};
const partial = function () {
    var func = this;
    var args = slice.call(arguments);
    const v106 = function () {
        const v103 = slice.call(arguments);
        const v104 = args.concat(v103);
        const v105 = func.apply(this, v104);
        return v105;
    };
    return v106;
};
const partialRight = function () {
    var func = this;
    var args = slice.call(arguments);
    const v110 = function () {
        const v107 = slice.call(arguments);
        const v108 = v107.concat(args);
        const v109 = func.apply(this, v108);
        return v109;
    };
    return v110;
};
const memoize = function (hashFunc, limit) {
    var func = this;
    var cache = {};
    var keysList = [];
    limit = limit || 1000;
    const v122 = function () {
        let key;
        const v111 = hashFunc.apply(this, arguments);
        const v112 = arguments[0];
        if (hashFunc) {
            key = v111;
        } else {
            key = v112;
        }
        const v113 = cache.hasOwnProperty(key);
        if (v113) {
            const v114 = cache[key];
            return v114;
        }
        const v115 = func.apply(this, arguments);
        cache[key] = v115;
        var result = cache[key];
        const v116 = keysList.push(key);
        v116;
        const v117 = keysList.length;
        const v118 = v117 > limit;
        if (v118) {
            const v119 = keysList.shift();
            const v120 = cache[v119];
            const v121 = delete v120;
            v121;
        }
        return result;
    };
    return v122;
};
const delay = function (wait) {
    var args = slice.call(arguments, 1);
    const v123 = _delay(this, wait, args);
    return v123;
};
const defer = function () {
    const v124 = _delay(this, 1, arguments);
    return v124;
};
const _delay = function (func, wait, args, context) {
    const v125 = func.apply;
    const v126 = context || null;
    const v127 = v125.bind(func, v126, args);
    const v128 = setTimeout(v127, wait);
    return v128;
};
var deferFunc = makeProtoFunction(defer);
const deferTicks = function (ticks) {
    const v129 = ticks < 2;
    if (v129) {
        const v130 = defer.apply(this, arguments);
        return v130;
    }
    const v131 = ticks - 1;
    var args = repeat.call(deferFunc, v131);
    const v132 = slice.call(arguments, 1);
    args = args.concat(this, v132);
    const v133 = deferFunc.apply(null, args);
    return v133;
};
const delayMethod = function (funcOrMethodName, wait) {
    var args = slice.call(arguments, 2);
    const v134 = _delayMethod(this, funcOrMethodName, wait, args);
    return v134;
};
const deferMethod = function (funcOrMethodName) {
    var args = slice.call(arguments, 1);
    const v135 = _delayMethod(this, funcOrMethodName, 1, args);
    return v135;
};
const _delayMethod = function (object, funcOrMethodName, wait, args) {
    const v140 = function () {
        let func;
        const v136 = typeof funcOrMethodName;
        const v137 = v136 == 'string';
        const v138 = object[funcOrMethodName];
        if (v137) {
            func = v138;
        } else {
            func = funcOrMethodName;
        }
        const v139 = func.apply(object, args);
        v139;
    };
    const v141 = setTimeout(v140, wait);
    return v141;
};
const delayed = function (wait) {
    var func = this;
    var args = slice.call(arguments, 1);
    const v144 = function () {
        const v142 = slice.call(arguments);
        var passArgs = args.concat(v142);
        const v143 = _delay(func, wait, passArgs, this);
        return v143;
    };
    return v144;
};
const deferred = function () {
    var func = this;
    var args = slice.call(arguments);
    const v147 = function () {
        const v145 = slice.call(arguments);
        var passArgs = args.concat(v145);
        const v146 = _delay(func, 1, passArgs, this);
        return v146;
    };
    return v147;
};
const debounce = function (wait, immediate) {
    var func = this;
    var timeout;
    var args;
    var context;
    var timestamp;
    var result;
    const v154 = function () {
        context = this;
        args = arguments;
        timestamp = Date.now();
        const v148 = !timeout;
        var callNow = immediate && v148;
        const v149 = !timeout;
        if (v149) {
            timeout = setTimeout(later, wait);
        }
        if (callNow) {
            result = func.apply(context, args);
        }
        return result;
        const later = function () {
            const v150 = Date.now();
            var last = v150 - timestamp;
            const v151 = last < wait;
            if (v151) {
                const v152 = wait - last;
                timeout = setTimeout(later, v152);
            } else {
                timeout = null;
                const v153 = !immediate;
                if (v153) {
                    result = func.apply(context, args);
                }
            }
        };
    };
    return v154;
};
const throttle = function (wait, options) {
    var func = this;
    var context;
    var args;
    var result;
    var timeout = null;
    var previous = 0;
    const v155 = options || (options = {});
    v155;
    const v167 = function () {
        var now = Date.now();
        const v156 = !previous;
        const v157 = options.leading;
        const v158 = v157 === false;
        const v159 = v156 && v158;
        if (v159) {
            previous = now;
        }
        const v160 = now - previous;
        var remaining = wait - v160;
        context = this;
        args = arguments;
        const v161 = remaining <= 0;
        if (v161) {
            const v162 = clearTimeout(timeout);
            v162;
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        } else {
            const v163 = !timeout;
            const v164 = options.trailing;
            const v165 = v164 !== false;
            const v166 = v163 && v165;
            if (v166) {
                timeout = setTimeout(later, remaining);
            }
        }
        return result;
    };
    return v167;
    const later = function () {
        const v168 = options.leading;
        const v169 = v168 === false;
        const v170 = Date.now();
        if (v169) {
            previous = 0;
        } else {
            previous = v170;
        }
        timeout = null;
        result = func.apply(context, args);
    };
};
const once = function () {
    var func = this;
    var ran = false;
    var memo;
    const v171 = function () {
        if (ran) {
            return memo;
        }
        ran = true;
        memo = func.apply(this, arguments);
        func = null;
        return memo;
    };
    return v171;
};
const waitFor = function (callback, maxTimeout, timedOutFunc, checkInterval) {
    var start = Date.now();
    var condition = this;
    checkInterval = checkInterval || 50;
    var interval = setInterval(testCondition, checkInterval);
    const testCondition = function () {
        const v172 = condition();
        if (v172) {
            const v173 = callback();
            v173;
        } else {
            const v174 = Date.now();
            const v175 = v174 - start;
            const v176 = v175 >= maxTimeout;
            if (v176) {
                const v177 = timedOutFunc();
                const v178 = timedOutFunc && v177;
                v178;
            } else {
                return;
            }
        }
        const v179 = clearInterval(interval);
        v179;
    };
    ;
};
const not = function () {
    var func = this;
    const v182 = function () {
        const v180 = func.apply(this, arguments);
        const v181 = !v180;
        return v181;
    };
    return v182;
};