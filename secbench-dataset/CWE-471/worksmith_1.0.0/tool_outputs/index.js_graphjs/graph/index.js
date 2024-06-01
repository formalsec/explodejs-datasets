const v199 = require('debug');
var debug = v199('workflow:common');
var _ = require('lodash');
var path = require('path');
var handlebars = require('handlebars');
var fs = require('fs');
var async = require('async');
var util = require('util');
var taskTypeCache = {};
var DEFAULT_TASK_PATH = '/src/tasks/';
var taskPath;
var resolvers = {};
var settings = {};
settings.logger = console;
const v200 = require('./src/interpolation');
var interpolate = v200.interpolate;
var worksmith;
const wfLoader = function (wf) {
    const v201 = typeof wf;
    const v202 = 'string' === v201;
    if (v202) {
        wf = path.resolve(wf);
        const v203 = debug('loading workflow file: %s', wf);
        v203;
        wf = require(wf);
    }
    const v204 = Array.isArray(wf);
    if (v204) {
        wf.task = 'sequence';
        wf.items = wf;
        wf = {};
        wf = {};
    }
    const v205 = worksmith.define(wf);
    return v205;
};
worksmith = wfLoader;
const getStepName = function (step) {
    const v206 = step.name;
    if (v206) {
        const v207 = step.name;
        return v207;
    }
    const v208 = step.name;
    const v209 = step.task;
    var name = v208 || v209;
    const v210 = typeof name;
    const v211 = 'function' === v210;
    if (v211) {
        const v212 = name.name;
        name = '<Anonymous>' + v212;
    }
    return step.name = name;
};
const v213 = function (ns, taskLibrary) {
    resolvers[ns] = taskLibrary;
};
const v222 = function (object) {
    const v221 = function getType(name) {
        var method = object[name];
        const v220 = function define(step) {
            const v219 = function build(context) {
                const v218 = function execute(done) {
                    const v214 = step.arguments;
                    const v215 = context.get(v214);
                    const v216 = [];
                    var args = v215 || v216;
                    var result = method.apply(object, args);
                    const v217 = done(undefined, result);
                    v217;
                };
                return v218;
            };
            return v219;
        };
        return v220;
    };
    return v221;
};
const v224 = function (options) {
    const v223 = _.assignIn(settings, options);
    v223;
};
const v228 = function (level) {
    const v225 = settings.logger;
    const v226 = v225[level];
    const v227 = v226 !== undefined;
    return v227;
};
const v236 = function () {
    var level = arguments[0];
    const v229 = settings.logger;
    const v230 = v229[level];
    const v231 = settings.logger;
    const v232 = Array.prototype;
    const v233 = v232.slice;
    const v234 = v233.call(arguments, 1);
    const v235 = v230.apply(v231, v234);
    v235;
};
const v243 = function (taskType) {
    const v237 = process.cwd();
    const v238 = taskType + '.js';
    var processRelativePath = path.join(v237, taskPath, v238);
    const v239 = fs.existsSync(processRelativePath);
    const v240 = './tasks/' + taskType;
    const v241 = v240 + '.js';
    let v242;
    if (v239) {
        v242 = processRelativePath;
    } else {
        v242 = v241;
    }
    return v242;
};
const v253 = function (taskType) {
    const v244 = taskType.indexOf('/');
    const v245 = -1;
    const v246 = v244 > v245;
    if (v246) {
        var taskSpec = taskType.split('/');
        var ns = taskSpec[0];
        const v247 = resolvers[ns];
        if (v247) {
            const v248 = taskSpec[1];
            const v249 = resolvers[ns](v248);
            return v249;
        }
    }
    const v250 = taskTypeCache[taskType];
    const v251 = workflow.discoverTaskType(taskType);
    var taskFile = v250 || (taskTypeCache[taskType] = v251);
    const v252 = require(taskFile);
    return v252;
};
const v257 = function (task) {
    const v254 = typeof task;
    const v255 = 'string' === v254;
    if (v255) {
        const v256 = workflow.getTaskType(task);
        return v256;
    }
    return task;
};
const v388 = function (workflowDefinition) {
    const v258 = getStepName(workflowDefinition);
    const v259 = debug('defining: %s', v258);
    v259;
    const v260 = workflowDefinition.taskPath;
    taskPath = v260 || DEFAULT_TASK_PATH;
    const v261 = workflowDefinition.task;
    var WorkflowType = workflow.getWorkflow(v261);
    var wfInstance = WorkflowType.call(wfLoader, workflowDefinition);
    const checkCondition = function (context) {
        const v262 = 'condition' in workflowDefinition;
        const v263 = !v262;
        if (v263) {
            return true;
        }
        with (context) {
            const v264 = workflowDefinition.condition;
            const v265 = eval(v264);
            if (v265) {
                return true;
            }
            return false;
        }
    };
    const initializeContext = function (context) {
        const v266 = context.initialized;
        const v267 = !v266;
        if (v267) {
            const v269 = function (name, interpolate) {
                const v268 = workflow.readValue(name, this, interpolate);
                return v268;
            };
            const v271 = function (name, value) {
                const v270 = workflow.setValue(this, name, value);
                return v270;
            };
            context.get = v269, context.set = v271;
            context.initialized = true;
        }
    };
    const getArgumentsFromAnnotations = function (context, execute, build) {
        var args = [];
        const v272 = execute.annotations;
        const v273 = build.annotations;
        const v274 = v272 || v273;
        const v275 = WorkflowType.annotations;
        var annotations = v274 || v275;
        const v276 = {};
        annotations = annotations || v276;
        const v277 = execute.inject;
        const v278 = execute.inject;
        const v279 = v277 && (annotations.inject = v278);
        v279;
        const v280 = annotations.inject;
        const v281 = annotations.inject;
        const v291 = function (injectable) {
            const v282 = typeof injectable;
            const v283 = 'string' === v282;
            if (v283) {
                injectable.name = injectable;
                injectable.interpolationPolicy = true;
                injectable = {};
                injectable = {};
            }
            var arg;
            const v284 = injectable.name;
            const v285 = v284[0];
            switch (v285) {
            case '@':
                const v286 = injectable.name;
                arg = context.get(v286);
                break;
            default:
                const v287 = injectable.name;
                const v288 = workflowDefinition[v287];
                const v289 = injectable.interpolationPolicy;
                arg = context.get(v288, v289);
                break;
            }
            const v290 = args.push(arg);
            v290;
        };
        const v292 = v281.forEach(v291);
        const v293 = v280 && v292;
        v293;
        return args;
    };
    const v387 = function build(context) {
        const v294 = arguments.length;
        const v295 = v294 == 2;
        if (v295) {
            const v296 = arguments[0];
            const v297 = build(v296);
            const v298 = arguments[1];
            const v299 = v297(v298);
            return v299;
        }
        const v300 = initializeContext(context);
        v300;
        var decorated = wfInstance(context);
        const v301 = getStepName(workflowDefinition);
        const v302 = debug('preparing: %s', v301);
        v302;
        var markWorkflowTerminate = function (done) {
            const v303 = context.completionStack;
            const v304 = [];
            context.completionStack = v303 || v304;
            const v305 = context.completionStack;
            const v306 = v305.push(done);
            v306;
            const v307 = context.workflowTerminate;
            const v308 = !v307;
            if (v308) {
                context.workflowTerminate = done;
            }
        };
        const v386 = function execute(done) {
            const v309 = new Date();
            var wfStartTime = v309.getTime();
            const v310 = checkCondition(context);
            const v311 = !v310;
            if (v311) {
                const v312 = done();
                return v312;
            }
            const v313 = markWorkflowTerminate(done);
            v313;
            const invokeDecorated = function (err, res, next) {
                const createExecutionThisContext = function () {
                    const v315 = function (err, res, next) {
                        context.originalTerminate = done;
                        done = context.workflowTerminate;
                        const v314 = next(err, res);
                        v314;
                    };
                    const v322 = function (err, res, next, step) {
                        context.originalTerminate = done;
                        const v316 = context.completionStack;
                        const v317 = context.completionStack;
                        const v318 = v317.length;
                        const v319 = step || 2;
                        const v320 = v318 - v319;
                        done = v316[v320];
                        const v321 = next(err, res);
                        v321;
                    };
                    const v323 = {};
                    v323.terminate = v315;
                    v323.terminateParent = v322;
                    const v324 = {};
                    v324.workflow = v323;
                    return v324;
                };
                var args = getArgumentsFromAnnotations(context, decorated, wfInstance);
                const v325 = args.push(next);
                v325;
                try {
                    const v326 = createExecutionThisContext();
                    const v327 = decorated.apply(v326, args);
                    v327;
                } catch (ex) {
                    const v328 = next(ex);
                    v328;
                }
            };
            const onError = function (err, res, next) {
                const v329 = !err;
                if (v329) {
                    const v330 = next(err, res);
                    return v330;
                }
                const v331 = workflowDefinition.onError;
                var errorWfDef = context.get(v331);
                var errorWf = workflow.define(errorWfDef);
                context.error = err;
                const v334 = function (errHandlerErr, errRes) {
                    const v332 = errorWfDef.handleError;
                    if (v332) {
                        err = errHandlerErr;
                    }
                    const v333 = next(err, res);
                    v333;
                };
                const v335 = errorWf(context, v334);
                v335;
            };
            const onComplete = function (err, res, next) {
                const v336 = workflowDefinition.finally;
                var finallyDef = context.get(v336);
                var finallyWf = workflow.define(finallyDef);
                const v338 = function (finErr, finRes) {
                    const v337 = next(err, res);
                    v337;
                };
                const v339 = finallyWf(context, v338);
                v339;
            };
            const logErrors = function (err, result, next) {
                if (err) {
                    const v340 = getStepName(workflowDefinition);
                    const v341 = err.message;
                    const v342 = v341 || err;
                    const v343 = debug('error in workflow %s, error is %o', v340, v342);
                    v343;
                }
                const v344 = next(err, result);
                v344;
            };
            const setWorkflowResultTo = function (err, result, next) {
                if (err) {
                    const v345 = next(err, result);
                    return v345;
                }
                const v346 = process.env;
                const v347 = v346.WSDEBUGPARAMS;
                const v348 = debug('...result is', result);
                const v349 = v347 && v348;
                v349;
                const v350 = workflowDefinition.resultTo;
                const v351 = context.set(v350, result);
                v351;
                const v352 = next(err, result);
                v352;
            };
            const buildUpMicroworkflow = function () {
                var tasks = [invokeDecorated];
                const v353 = workflowDefinition.onError;
                const v354 = tasks.push(onError);
                const v355 = v353 && v354;
                v355;
                const v356 = workflowDefinition.finally;
                const v357 = tasks.push(onComplete);
                const v358 = v356 && v357;
                v358;
                const v359 = workflowDefinition.resultTo;
                const v360 = tasks.push(setWorkflowResultTo);
                const v361 = v359 && v360;
                v361;
                const v362 = tasks.push(logErrors);
                v362;
                return tasks;
            };
            var tasks = buildUpMicroworkflow();
            const executeNextThunkOrComplete = function (err, res) {
                var thunk = tasks.shift();
                if (thunk) {
                    const v363 = thunk(err, res, executeNextThunkOrComplete);
                    return v363;
                }
                const v364 = getStepName(workflowDefinition);
                const v365 = debug('Finished executing WF %s', v364);
                v365;
                const v366 = context.$$$stats;
                if (v366) {
                    const v367 = context.$$$stats;
                    const v368 = getStepName(workflowDefinition);
                    const v369 = v368 + ' execution time: ';
                    const v370 = new Date();
                    const v371 = v370.getTime();
                    const v372 = v371 - wfStartTime;
                    const v373 = v369 + v372;
                    const v374 = v373 + 'ms';
                    const v375 = v367.push(v374);
                    v375;
                }
                const v376 = context.originalTerminate;
                var originalDone = v376 || done;
                const v377 = context.completionStack;
                var donePosition = v377.indexOf(originalDone);
                const v378 = context.completionStack;
                const v379 = v378.splice(donePosition, 1);
                v379;
                const v381 = function () {
                    const v380 = done(err, res, context);
                    v380;
                };
                const v382 = setImmediate(v381);
                v382;
            };
            const v383 = getStepName(workflowDefinition);
            const v384 = debug('Executing WF %s', v383);
            v384;
            const v385 = executeNextThunkOrComplete();
            return v385;
        };
        return v386;
    };
    return v387;
};
const v390 = function (pathOrValue, context, interpolationPolicy) {
    const v389 = interpolate(context, pathOrValue, interpolationPolicy);
    return v389;
};
const v395 = function (object, path, value) {
    var parts = path.split('.');
    const v391 = path.replace(/\[/g, '.');
    path = v391.replace(/\]/g, '');
    var part;
    while (part = parts.shift()) {
        const v392 = parts.length;
        if (v392) {
            const v393 = object[part];
            const v394 = {};
            object[part] = v393 || v394;
            object = object[part];
        } else {
            object[part] = value;
        }
    }
};
var workflow = {};
workflow.use = v213;
workflow.createAdapter = v222;
workflow.configure = v224;
workflow.hasLogLevel = v228;
workflow.log = v236;
workflow.discoverTaskType = v243;
workflow.getTaskType = v253;
workflow.getWorkflow = v257;
workflow.define = v388;
workflow.readValue = v390;
workflow.setValue = v395;
const v396 = _.assignIn(wfLoader, workflow);
v396;
module.exports = wfLoader;