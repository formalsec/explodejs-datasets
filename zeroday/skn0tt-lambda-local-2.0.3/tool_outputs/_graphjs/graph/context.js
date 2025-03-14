'use strict';
var utils = require('./utils.js');
var mute = require('./mute.js');
const Context = function () {
    this.logger = null;
    this.unmute = null;
    this.verboseLevel = null;
    this.finalCallback = null;
    this.doneStatus = false;
    const v137 = function (error, message) {
    };
    this.postDone = v137;
    const v138 = this.startTime;
    v138;
    const v139 = this.timeout;
    v139;
    const v140 = this._timeout;
    v140;
    this.callbackWaitsForEmptyEventLoop = false;
    this.functionName = '';
    const v141 = process.env;
    const v142 = v141.AWS_LAMBDA_FUNCTION_VERSION;
    this.functionVersion = v142;
    this.invokedFunctionArn = null;
    const v143 = process.env;
    const v144 = v143.AWS_LAMBDA_FUNCTION_MEMORY_SIZE;
    this.memoryLimitInMB = v144;
    this.awsRequestId = null;
    this.logGroupName = 'Group name';
    this.logStreamName = 'Stream name';
    this.identity = null;
    this.clientContext = null;
    const v145 = function (result) {
        return result;
    };
    this.callback = v145;
};
var createInvokeId = function () {
    const v146 = utils.generateRandomHex(8);
    const v147 = utils.generateRandomHex(4);
    const v148 = utils.generateRandomHex(4);
    const v149 = utils.generateRandomHex(4);
    const v150 = utils.generateRandomHex(12);
    const v151 = [
        v146,
        v147,
        v148,
        v149,
        v150
    ];
    const v152 = v151.join('-');
    return v152;
};
const v153 = Context.prototype;
const v167 = function () {
    const v154 = process.env;
    const v155 = v154.AWS_REGION;
    const v156 = process.env;
    const v157 = v156.AWS_ACCOUNT_ID;
    const v158 = Math.random();
    const v159 = v158 * 1000000000000;
    const v160 = Math.round(v159);
    const v161 = v160.toString();
    const v162 = v157 || v161;
    const v163 = this.functionName;
    const v164 = this.functionVersion;
    const v165 = [
        'arn',
        'aws',
        'lambda',
        v155,
        v162,
        'function',
        v163,
        v164
    ];
    const v166 = v165.join(':');
    return v166;
};
v153.createInvokeFunctionArn = v167;
const v168 = Context.prototype;
const v189 = function (options) {
    const v169 = new Date();
    const v170 = v169.getTime();
    this.startTime = v170;
    const v171 = options.timeoutMs;
    this.timeout = v171;
    const v172 = options.logger;
    this.logger = v172;
    const v173 = options.verboseLevel;
    this.verboseLevel = v173;
    const v174 = options.finalCallback;
    this.finalCallback = v174;
    const v175 = options.functionName;
    this.functionName = v175;
    const v176 = createInvokeId();
    this.awsRequestId = v176;
    const v177 = this.createInvokeFunctionArn();
    this.invokedFunctionArn = v177;
    const v178 = options.callbackWaitsForEmptyEventLoop;
    this.callbackWaitsForEmptyEventLoop = v178;
    const v179 = this.verboseLevel;
    const v180 = v179 > 1;
    if (v180) {
        const v181 = this.logger;
        const v182 = this.awsRequestId;
        const v183 = 'START RequestId: ' + v182;
        const v184 = v181.log('info', v183);
        v184;
    }
    const v185 = this.verboseLevel;
    const v186 = v185 < 3;
    if (v186) {
        const v187 = mute();
        this.unmute = v187;
    }
    const v188 = options.clientContext;
    this.clientContext = v188;
    return;
};
v168._initialize = v189;
const v190 = Context.prototype;
const v202 = function () {
    const v198 = function () {
        const v191 = this.timeout;
        const v192 = v191 / 1000;
        const v193 = v192.toFixed(2);
        const v194 = 'Task timed out after ' + v193;
        const v195 = v194 + ' seconds';
        const v196 = new utils.TimeoutError(v195);
        const v197 = this.fail(v196);
        v197;
    };
    const v199 = v198.bind(this);
    const v200 = this.timeout;
    const v201 = setTimeout(v199, v200);
    this._timeout = v201;
};
v190._init_timeout = v202;
const v203 = Context.prototype;
const v222 = function () {
    const v204 = this.done;
    const v205 = v204.bind(this);
    const v206 = this.fail;
    const v207 = v206.bind(this);
    const v208 = this.succeed;
    const v209 = v208.bind(this);
    const v210 = this.getRemainingTimeInMillis;
    const v211 = v210.bind(this);
    const v212 = this.callbackWaitsForEmptyEventLoop;
    const v213 = this.functionName;
    const v214 = this.functionVersion;
    const v215 = this.invokedFunctionArn;
    const v216 = this.memoryLimitInMB;
    const v217 = this.awsRequestId;
    const v218 = this.logGroupName;
    const v219 = this.logStreamName;
    const v220 = this.identity;
    const v221 = this.clientContext;
    var ctx = {};
    ctx.done = v205;
    ctx.fail = v207;
    ctx.succeed = v209;
    ctx.getRemainingTimeInMillis = v211;
    ctx.callbackWaitsForEmptyEventLoop = v212;
    ctx.functionName = v213;
    ctx.functionVersion = v214;
    ctx.invokedFunctionArn = v215;
    ctx.memoryLimitInMB = v216;
    ctx.awsRequestId = v217;
    ctx.logGroupName = v218;
    ctx.logStreamName = v219;
    ctx.identity = v220;
    ctx.clientContext = v221;
    ctx._stopped = false;
    return ctx;
};
v203.generate_context = v222;
const v223 = Context.prototype;
const v270 = function (err, message) {
    const v224 = this._stopped;
    if (v224) {
        return;
    }
    this._stopped = true;
    const v225 = this._timeout;
    const v226 = clearTimeout(v225);
    v226;
    const v227 = this.unmute;
    const v228 = v227 != null;
    if (v228) {
        const v229 = this.unmute();
        v229;
        this.unmute = null;
    }
    const v230 = err instanceof Error;
    if (v230) {
        var _stack;
        const v231 = err.stack;
        if (v231) {
            const v232 = err.stack;
            _stack = v232.split('\n');
            const v233 = _stack.shift();
            v233;
            var i = 0;
            const v234 = _stack.length;
            let v235 = i < v234;
            while (v235) {
                const v237 = _stack[i];
                const v238 = v237.trim();
                const v239 = v238.substr(3);
                _stack[i] = v239;
                const v236 = i++;
                v235 = i < v234;
            }
            const v240 = err.message;
            const v241 = err.name;
            err['errorMessage'] = v240;
            err['errorType'] = v241;
            err['stackTrace'] = _stack;
            err = {};
            err = {};
        } else {
            const v242 = err.message;
            const v243 = err.name;
            err['errorMessage'] = v242;
            err['errorType'] = v243;
            err = {};
            err = {};
        }
    }
    const v244 = err !== null;
    const v245 = typeof err;
    const v246 = v245 !== 'undefined';
    const v247 = v244 && v246;
    if (v247) {
        const v248 = this.verboseLevel;
        const v249 = v248 > 1;
        if (v249) {
            const v250 = this.logger;
            const v251 = v250.log('error', 'End - Error:');
            v251;
        }
        const v252 = this.verboseLevel;
        const v253 = v252 > 0;
        if (v253) {
            const v254 = this.logger;
            const v255 = v254.log('error', err);
            v255;
        }
    } else {
        const v256 = this.verboseLevel;
        const v257 = v256 > 1;
        if (v257) {
            const v258 = this.logger;
            const v259 = v258.log('info', 'End - Result:');
            v259;
        }
        const v260 = this.verboseLevel;
        const v261 = v260 > 0;
        if (v261) {
            const v262 = this.logger;
            const v263 = v262.log('info', message);
            v263;
        }
    }
    const v264 = this.finalCallback();
    v264;
    const v265 = this.callbackWaitsForEmptyEventLoop;
    if (v265) {
        var that = this;
        const v267 = function () {
            const v266 = that.callback(err, message);
            v266;
        };
        const v268 = utils.waitForNodeJS(v267);
        v268;
    } else {
        const v269 = this.callback(err, message);
        v269;
    }
};
v223.done = v270;
const v271 = Context.prototype;
const v273 = function (err) {
    const v272 = this.done(err);
    v272;
};
v271.fail = v273;
const v274 = Context.prototype;
const v276 = function (message) {
    const v275 = this.done(null, message);
    v275;
};
v274.succeed = v276;
const v277 = Context.prototype;
const v283 = function () {
    const v278 = new Date();
    var now = v278.getTime();
    const v279 = this.timeout;
    const v280 = this.startTime;
    const v281 = v279 + v280;
    const v282 = v281 - now;
    return v282;
};
v277.getRemainingTimeInMillis = v283;
module.exports = Context;