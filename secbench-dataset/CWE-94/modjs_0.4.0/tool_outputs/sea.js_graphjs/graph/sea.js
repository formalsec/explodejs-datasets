var esprima = require('esprima');
var path = require('path');
const v217 = require('cmd-util');
var ast = v217.ast;
const v218 = require('cmd-util');
var iduri = v218.iduri;
var file = require('./file');
var _ = require('underscore');
var logger = require('./logger');
exports.build = build;
const build = function (inputFile, options) {
    build.mainId = null;
    transport.records = [];
    var pluginContents;
    var configContents;
    var mainFileContents;
    var useContents;
    const v219 = options.mainConfigFile;
    if (v219) {
        const v220 = options.mainConfigFile;
        const v221 = file.read(v220);
        var config = exports.findSeajsConfig(v221);
        var configData = config.data;
        const v222 = JSON.stringify(configData);
        var originConfigData = JSON.parse(v222);
        const v223 = configData.alias;
        const v228 = function (val, key) {
            const v224 = _.isObject(val);
            if (v224) {
                const v225 = configData.alias;
                const v226 = v225[key];
                const v227 = delete v226;
                v227;
            }
        };
        const v229 = _.forEach(v223, v228);
        v229;
        var plugins = [];
        const v230 = configData.plugins;
        const v243 = function (pluginName) {
            var pluginPath;
            const v231 = options.plugins;
            if (v231) {
                const v232 = options.plugins;
                pluginPath = v232[pluginName];
            }
            const v233 = '../../asset/seajs/plugin-' + pluginName;
            const v234 = v233 + '.js';
            const v235 = path.resolve(__dirname, v234);
            pluginPath = pluginPath || v235;
            const v236 = file.exists(pluginPath);
            if (v236) {
                const v237 = '// plugin-' + pluginName;
                const v238 = plugins.push(v237);
                v238;
                const v239 = file.read(pluginPath);
                const v240 = plugins.push(v239);
                v240;
            } else {
                const v241 = pluginName + ' plugin not found...';
                const v242 = logger.warn(v241);
                v242;
            }
        };
        const v244 = v230.forEach(v243);
        v244;
        pluginContents = plugins.join('\n');
        const v245 = configData.alias;
        options.alias = v245;
        const v246 = config.sourceWithoutPlugins;
        const v247 = [
            'seajs.config(',
            v246,
            ');'
        ];
        configContents = v247.join('');
    }
    mainFileContents = transport(inputFile, options);
    const v248 = build.mainId;
    const v249 = [
        'seajs.use("',
        v248,
        '");'
    ];
    useContents = v249.join('');
    const v250 = [
        pluginContents,
        configContents,
        mainFileContents,
        useContents
    ];
    var contents = v250.join('\n');
    return contents;
};
;
const transport = function (inputFile, options) {
    var inputFileName = inputFile;
    const v251 = inputFileName.charAt(0);
    const v252 = v251 === '.';
    if (v252) {
        inputFileName = iduri.absolute('', inputFileName);
    }
    var contents = file.read(inputFile);
    var astCache = ast.getAst(contents);
    var meta = ast.parseFirst(astCache);
    const v253 = !meta;
    if (v253) {
        const v254 = 'Found non cmd module "' + inputFile;
        const v255 = v254 + '"';
        const v256 = logger.warn(v255);
        return v256;
    }
    const v257 = meta.id;
    if (v257) {
        const v258 = 'Found id in "' + inputFile;
        const v259 = v258 + '"';
        const v260 = logger.warn(v259);
        v260;
        return contents;
    }
    var deps = parseDependencies(inputFile, options);
    const v261 = deps.length;
    if (v261) {
        const v262 = 'Found dependencies ' + deps;
        const v263 = logger.debug(v262);
        v263;
    } else {
        const v264 = logger.debug('Found no dependencies');
        v264;
    }
    const v265 = options.idleading;
    const v266 = inputFileName.replace(/\.js$/, '');
    const v267 = v265 + v266;
    var id = v267.replace(/\\/g, '/');
    const v268 = build.mainId;
    const v269 = !v268;
    if (v269) {
        build.mainId = id;
    }
    const v274 = function (v) {
        const v270 = v.charAt(0);
        const v271 = v270 === '.';
        if (v271) {
            const v272 = iduri.absolute(id, v);
            return v272;
        }
        const v273 = iduri.parseAlias(options, v);
        return v273;
    };
    const v275 = {
        id: id,
        dependencies: deps,
        require: v274
    };
    astCache = ast.modify(astCache, v275);
    const v276 = options.uglify;
    contents = astCache.print_to_string(v276);
    meta = ast.parseFirst(contents);
    const v277 = meta.dependencies;
    const v294 = function (dep) {
        const v278 = dep.charAt(0);
        const v279 = v278 === '.';
        if (v279) {
            const v280 = meta.id;
            var id = iduri.absolute(v280, dep);
            const v281 = transport.records;
            const v282 = _.contains(v281, id);
            if (v282) {
                return;
            }
            const v283 = transport.records;
            const v284 = v283.push(id);
            v284;
            const v285 = path.dirname(inputFile);
            var fpath = path.join(v285, dep);
            const v286 = /\.js$/.test(fpath);
            const v287 = !v286;
            if (v287) {
                fpath += '.js';
            }
            const v288 = file.exists(fpath);
            const v289 = !v288;
            if (v289) {
                const v290 = 'File ' + fpath;
                const v291 = v290 + ' not found';
                const v292 = logger.warn(v291);
                v292;
                return '';
            }
            const v293 = transport(fpath, options);
            return v293;
        }
    };
    const v295 = v277.map(v294);
    const v296 = function (v) {
        return v;
    };
    const v297 = v295.filter(v296);
    var depContents = v297.join('\n');
    const v298 = [
        depContents,
        contents
    ];
    const v299 = v298.join('\n');
    return v299;
};
const parseDependencies = function (fpath, options) {
    var rootpath = fpath;
    const relativeDependencies = function (fpath, options, basefile) {
        if (basefile) {
            const v300 = path.dirname(basefile);
            fpath = path.join(v300, fpath);
        }
        fpath = iduri.appendext(fpath);
        var deps = [];
        var moduleDeps = {};
        const v301 = file.exists(fpath);
        const v302 = !v301;
        if (v302) {
            const v303 = 'Can\'t find ' + fpath;
            const v304 = logger.warn(v303);
            v304;
            const v305 = [];
            return v305;
        }
        var data = file.read(fpath);
        var parsed = ast.parseFirst(data);
        const v306 = parsed.dependencies;
        const v323 = function (id) {
            const v307 = id.charAt(0);
            const v308 = v307 === '.';
            if (v308) {
                if (basefile) {
                    const v309 = path.dirname(fpath);
                    var altId = path.join(v309, id);
                    const v310 = path.dirname(rootpath);
                    altId = path.relative(v310, altId);
                    altId = altId.replace(/\\/g, '/');
                    const v311 = altId.charAt(0);
                    const v312 = v311 !== '.';
                    if (v312) {
                        altId = './' + altId;
                    }
                    const v313 = deps.push(altId);
                    v313;
                } else {
                    const v314 = deps.push(id);
                    v314;
                }
                const v315 = iduri.appendext(id);
                const v316 = /\.js$/.test(v315);
                if (v316) {
                    const v317 = relativeDependencies(id, options, fpath);
                    deps = _.union(deps, v317);
                }
            } else {
                const v318 = moduleDeps[id];
                const v319 = !v318;
                if (v319) {
                    var alias = iduri.parseAlias(options, id);
                    const v320 = deps.push(alias);
                    v320;
                    var ext = path.extname(alias);
                    const v321 = ext !== '.js';
                    const v322 = ext && v321;
                    if (v322) {
                        return;
                    }
                    var mdeps = moduleDependencies(id, fpath, options);
                    moduleDeps[id] = mdeps;
                    deps = _.union(deps, mdeps);
                }
            }
        };
        const v324 = v306.forEach(v323);
        v324;
        return deps;
    };
    const v325 = relativeDependencies(fpath, options);
    return v325;
};
const moduleDependencies = function (id, parentPath, options) {
    var alias = iduri.parseAlias(options, id);
    const v326 = iduri.isAlias(options, id);
    const v327 = alias === id;
    const v328 = v326 && v327;
    if (v328) {
        const v329 = [];
        return v329;
    }
    var fpath = iduri.appendext(alias);
    const v330 = /\.js$/.test(fpath);
    const v331 = !v330;
    if (v331) {
        const v332 = [];
        return v332;
    }
    const v333 = options.paths;
    const v338 = function (base) {
        var filepath = path.join(base, fpath);
        const v334 = file.exists(filepath);
        if (v334) {
            const v335 = 'Find module "' + filepath;
            const v336 = v335 + '"';
            const v337 = logger.debug(v336);
            v337;
            fpath = filepath;
            return true;
        }
    };
    const v339 = v333.some(v338);
    v339;
    const v340 = !fpath;
    if (v340) {
        const v341 = 'Can\'t find module ' + alias;
        const v342 = v341 + ' in ';
        const v343 = v342 + parentPath;
        const v344 = logger.warn(v343);
        v344;
        const v345 = [];
        return v345;
    }
    const v346 = file.exists(fpath);
    const v347 = !v346;
    if (v347) {
        const v348 = 'Can\'t find ' + fpath;
        const v349 = v348 + ' in ';
        const v350 = v349 + parentPath;
        const v351 = logger.warn(v350);
        v351;
        const v352 = [];
        return v352;
    }
    var data = file.read(fpath);
    var parsed = ast.parse(data);
    var deps = [];
    const v354 = function (meta) {
        const v353 = meta.id;
        return v353;
    };
    var ids = parsed.map(v354);
    const v368 = function (meta) {
        const v355 = meta.dependencies;
        const v366 = function (dep) {
            dep = iduri.absolute(alias, dep);
            const v356 = _.contains(deps, dep);
            const v357 = !v356;
            const v358 = _.contains(ids, dep);
            const v359 = !v358;
            const v360 = v357 && v359;
            const v361 = dep.replace(/\.js$/, '');
            const v362 = _.contains(ids, v361);
            const v363 = !v362;
            const v364 = v360 && v363;
            if (v364) {
                const v365 = deps.push(dep);
                v365;
            }
        };
        const v367 = v355.forEach(v366);
        v367;
    };
    const v369 = parsed.forEach(v368);
    v369;
    return deps;
};
const findSeajsConfig = function (fileContents) {
    var configSource;
    var configData;
    var configSourceWithoutPlugins;
    const v370 = { range: true };
    var astRoot = esprima.parse(fileContents, v370);
    const v389 = function (node) {
        const v371 = hasSeajsConfig(node);
        if (v371) {
            const v372 = node['arguments'];
            const v373 = node['arguments'];
            const v374 = v373[0];
            var arg = v372 && v374;
            const v375 = !configSource;
            const v376 = v375 && arg;
            const v377 = arg.type;
            const v378 = v377 === 'ObjectExpression';
            const v379 = v376 && v378;
            if (v379) {
                configSource = nodeToString(fileContents, arg);
            }
        }
        const v380 = node.type;
        const v381 = v380 === 'Property';
        const v382 = node && v381;
        const v383 = node.key;
        const v384 = v382 && v383;
        const v385 = node.key;
        const v386 = v385.name;
        const v387 = v386 === 'plugins';
        const v388 = v384 && v387;
        if (v388) {
            var configPluginsSource = nodeToString(fileContents, node);
            configSourceWithoutPlugins = configSource.replace(configPluginsSource, 'plugins:[]');
            return false;
        }
    };
    const v390 = traverse(astRoot, v389);
    v390;
    if (configSource) {
        const v391 = '(' + configSource;
        const v392 = v391 + ')';
        configData = eval(v392);
    }
    const v393 = {};
    v393.data = configData;
    v393.source = configSource;
    v393.sourceWithoutPlugins = configSourceWithoutPlugins;
    return v393;
};
exports.findSeajsConfig = findSeajsConfig;
const traverse = function (object, visitor) {
    var key;
    var child;
    const v394 = !object;
    if (v394) {
        return;
    }
    const v395 = visitor.call(null, object);
    const v396 = v395 === false;
    if (v396) {
        return false;
    }
    for (key in object) {
        const v397 = object.hasOwnProperty(key);
        if (v397) {
            child = object[key];
            const v398 = typeof child;
            const v399 = v398 === 'object';
            const v400 = child !== null;
            const v401 = v399 && v400;
            if (v401) {
                const v402 = traverse(child, visitor);
                const v403 = v402 === false;
                if (v403) {
                    return false;
                }
            }
        }
    }
};
const hasSeajsConfig = function (node) {
    var callName;
    const v404 = node.callee;
    var c = node && v404;
    const v405 = node.type;
    const v406 = v405 === 'CallExpression';
    const v407 = node && v406;
    const v408 = v407 && c;
    const v409 = c.type;
    const v410 = v409 === 'MemberExpression';
    const v411 = v408 && v410;
    const v412 = c.object;
    const v413 = v411 && v412;
    const v414 = c.object;
    const v415 = v414.type;
    const v416 = v415 === 'Identifier';
    const v417 = v413 && v416;
    const v418 = c.object;
    const v419 = v418.name;
    const v420 = v419 === 'seajs';
    const v421 = v417 && v420;
    const v422 = c.property;
    const v423 = v421 && v422;
    const v424 = c.property;
    const v425 = v424.name;
    const v426 = v425 === 'config';
    const v427 = v423 && v426;
    if (v427) {
        const v428 = c.object;
        const v429 = v428.name;
        callName = v429 + 'Config';
    }
    return callName;
};
const nodeToString = function (contents, node) {
    var range = node.range;
    const v430 = range[0];
    const v431 = range[1];
    const v432 = contents.substring(v430, v431);
    return v432;
};