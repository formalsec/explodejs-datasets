const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const createSri = require('sri-create');
const empty = '';
const slash = '/';
const packageJson = 'package.json';
const paramsRegex = /:([a-z]+)/gi;
const assetEmptyPrefix = /^\.\//;
const backSlashes = /\\/g;
const nodeModulesRegex = /[\\/]node_modules[\\/].+?[\\/](.*)/;
const DEFAULT_MODULE_KEY = 'defaultCdnModuleKey____';
const WebpackCdnPlugin = function WebpackCdnPlugin({modules, prod, prodUrl = 'https://unpkg.com/:name@:version/:path', devUrl = ':name/:path', publicPath, optimize = false, crossOrigin = false, sri = false, pathToNodeModules = process.cwd()}) {
    const v263 = Array.isArray(modules);
    const v264 = { [DEFAULT_MODULE_KEY]: modules };
    let v265;
    if (v263) {
        v265 = v264;
    } else {
        v265 = modules;
    }
    this.modules = v265;
    this.prod = prod !== false;
    this.prefix = publicPath;
    const v266 = this.prod;
    let v267;
    if (v266) {
        v267 = prodUrl;
    } else {
        v267 = devUrl;
    }
    this.url = v267;
    this.optimize = optimize;
    this.crossOrigin = crossOrigin;
    this.sri = sri;
    this.pathToNodeModules = pathToNodeModules;
};
const apply = function apply(compiler) {
    const v268 = compiler.options;
    const output = v268.output;
    const v269 = this.prefix;
    const v270 = v269 === empty;
    if (v270) {
        output.publicPath = './';
    } else {
        const v271 = output.publicPath;
        output.publicPath = v271 || '/';
        const v272 = output.publicPath;
        const v273 = -1;
        const v274 = v272.slice(v273);
        const v275 = v274 !== slash;
        if (v275) {
            output.publicPath += slash;
        }
        const v276 = this.prod;
        const v277 = this.prefix;
        const v278 = output.publicPath;
        const v279 = v277 || v278;
        let v280;
        if (v276) {
            v280 = empty;
        } else {
            v280 = v279;
        }
        this.prefix = v280;
        const v281 = this.prod;
        const v282 = !v281;
        const v283 = this.prefix;
        const v284 = -1;
        const v285 = v283.slice(v284);
        const v286 = v285 !== slash;
        const v287 = v282 && v286;
        if (v287) {
            this.prefix += slash;
        }
    }
    const v288 = this.url;
    const v289 = this.prefix;
    const v290 = this.prod;
    const v291 = output.publicPath;
    const getArgs = [
        v288,
        v289,
        v290,
        v291
    ];
    const v292 = compiler.hooks;
    const v293 = v292.compilation;
    const v332 = compilation => {
        const v294 = WebpackCdnPlugin._getHtmlHook(compilation, 'beforeAssetTagGeneration', 'htmlWebpackPluginBeforeHtmlGeneration');
        const v330 = (data, callback) => {
            const v295 = data.plugin;
            const v296 = v295.options;
            const moduleId = v296.cdnModule;
            const v297 = moduleId !== false;
            if (v297) {
                const v298 = this.modules;
                const v299 = this.modules;
                const v300 = Reflect.ownKeys(v299);
                const v301 = v300[0];
                const v302 = moduleId || v301;
                let modules = v298[v302];
                if (modules) {
                    const v303 = this.optimize;
                    if (v303) {
                        const usedModules = WebpackCdnPlugin._getUsedModules(compilation);
                        const v306 = p => {
                            const v304 = p.name;
                            const v305 = usedModules[v304];
                            return v305;
                        };
                        modules = modules.filter(v306);
                    }
                    const v307 = this.pathToNodeModules;
                    const v308 = WebpackCdnPlugin._cleanModules(modules, v307);
                    v308;
                    const v310 = module => {
                        const v309 = module.version;
                        return v309;
                    };
                    modules = modules.filter(v310);
                    const v312 = WebpackCdnPlugin._getJs(modules, ...getArgs);
                    const v313 = data.assets;
                    const v314 = v313.js;
                    const v315 = v312.concat(v314);
                    v311.js = v315;
                    const v317 = WebpackCdnPlugin._getCss(modules, ...getArgs);
                    const v318 = data.assets;
                    const v319 = v318.css;
                    const v320 = v317.concat(v319);
                    v316.css = v320;
                    const v321 = this.prefix;
                    const v322 = v321 === empty;
                    if (v322) {
                        const v323 = data.assets;
                        const v324 = v323.js;
                        const v325 = WebpackCdnPlugin._assetNormalize(v324);
                        v325;
                        const v326 = data.assets;
                        const v327 = v326.css;
                        const v328 = WebpackCdnPlugin._assetNormalize(v327);
                        v328;
                    }
                }
            }
            const v329 = callback(null, data);
            v329;
        };
        const v331 = v294.tapAsync('WebpackCdnPlugin', v330);
        v331;
    };
    const v333 = v293.tap('WebpackCdnPlugin', v332);
    v333;
    const v334 = compiler.options;
    const v335 = v334.externals;
    const v336 = {};
    const externals = v335 || v336;
    const v337 = this.modules;
    const v338 = Reflect.ownKeys(v337);
    const v349 = key => {
        const v339 = this.modules;
        const mods = v339[key];
        const v342 = m => {
            const v340 = m.cssOnly;
            const v341 = !v340;
            return v341;
        };
        const v343 = mods.filter(v342);
        const v347 = p => {
            const v344 = p.name;
            const v345 = p.var;
            const v346 = p.name;
            externals[v344] = v345 || v346;
        };
        const v348 = v343.forEach(v347);
        v348;
    };
    const v350 = v338.forEach(v349);
    v350;
    const v351 = compiler.options;
    v351.externals = externals;
    const v352 = this.prod;
    const v353 = this.crossOrigin;
    const v354 = this.sri;
    const v355 = v353 || v354;
    const v356 = v352 && v355;
    if (v356) {
        const v357 = compiler.hooks;
        const v358 = v357.afterPlugins;
        const v371 = () => {
            const v359 = compiler.hooks;
            const v360 = v359.thisCompilation;
            const v369 = () => {
                const v361 = compiler.hooks;
                const v362 = v361.compilation;
                const v367 = compilation => {
                    const v363 = WebpackCdnPlugin._getHtmlHook(compilation, 'alterAssetTags', 'htmlWebpackPluginAlterAssetTags');
                    const v364 = this.alterAssetTags;
                    const v365 = v364.bind(this);
                    const v366 = v363.tapPromise('WebpackCdnPlugin', v365);
                    v366;
                };
                const v368 = v362.tap('HtmlWebpackPluginHooks', v367);
                v368;
            };
            const v370 = v360.tap('WebpackCdnPlugin', v369);
            v370;
        };
        const v372 = v358.tap('WebpackCdnPlugin', v371);
        v372;
    }
};
WebpackCdnPlugin.apply = apply;
const alterAssetTags = async function alterAssetTags(pluginArgs) {
    const getProdUrlPrefixes = () => {
        const v373 = this.modules;
        const v374 = this.modules;
        const v375 = Reflect.ownKeys(v374);
        const v376 = v375[0];
        const v377 = v373[v376];
        const v379 = m => {
            const v378 = m.prodUrl;
            return v378;
        };
        const v380 = v377.filter(v379);
        const v382 = m => {
            const v381 = m.prodUrl;
            return v381;
        };
        const urls = v380.map(v382);
        const v383 = this.url;
        const v384 = urls.push(v383);
        v384;
        const v385 = new Set(urls);
        const v386 = [...v385];
        const v389 = url => {
            const v387 = url.split('/:');
            const v388 = v387[0];
            return v388;
        };
        const v390 = v386.map(v389);
        return v390;
    };
    const prefixes = getProdUrlPrefixes();
    const filterTag = tag => {
        const v391 = tag.tagName;
        const v392 = v391 === 'script';
        const v393 = tag.attributes;
        const v394 = v393.src;
        const v395 = v392 && v394;
        const v396 = tag.tagName;
        const v397 = v396 === 'link';
        const v398 = tag.attributes;
        const v399 = v398.href;
        const v400 = v397 && v399;
        const url = v395 || v400;
        const v403 = prefix => {
            const v401 = url.indexOf(prefix);
            const v402 = v401 === 0;
            return v402;
        };
        const v404 = prefixes.filter(v403);
        const v405 = v404.length;
        const v406 = v405 !== 0;
        const v407 = url && v406;
        return v407;
    };
    const processTag = async tag => {
        const v408 = this.crossOrigin;
        if (v408) {
            const v409 = tag.attributes;
            const v410 = this.crossOrigin;
            v409.crossorigin = v410;
        }
        const v411 = this.sri;
        if (v411) {
            let url;
            const v412 = tag.tagName;
            const v413 = v412 === 'link';
            if (v413) {
                const v414 = tag.attributes;
                url = v414.href;
            }
            const v415 = tag.tagName;
            const v416 = v415 === 'script';
            if (v416) {
                const v417 = tag.attributes;
                url = v417.src;
            }
            try {
                const v418 = tag.attributes;
                v418.integrity = await createSri(url);
            } catch (e) {
                const v419 = new Error(`Failed to generate hash for resource ${ url }.\n${ e }`);
                throw v419;
            }
        }
    };
    const v420 = pluginArgs.assetTags;
    if (v420) {
        const v421 = pluginArgs.assetTags;
        const v422 = v421.scripts;
        const v423 = v422.filter(filterTag);
        const v424 = v423.map(processTag);
        await Promise.all(v424);
        const v425 = pluginArgs.assetTags;
        const v426 = v425.styles;
        const v427 = v426.filter(filterTag);
        const v428 = v427.map(processTag);
        await Promise.all(v428);
    } else {
        const v429 = pluginArgs.head;
        const v430 = v429.filter(filterTag);
        const v431 = v430.map(processTag);
        await Promise.all(v431);
        const v432 = pluginArgs.body;
        const v433 = v432.filter(filterTag);
        const v434 = v433.map(processTag);
        await Promise.all(v434);
    }
};
WebpackCdnPlugin.alterAssetTags = alterAssetTags;
const getVersionInNodeModules = function getVersionInNodeModules(name, pathToNodeModules = process.cwd()) {
    try {
        const v435 = path.join(pathToNodeModules, 'node_modules', name, packageJson);
        const v436 = require(v435);
        const v437 = v436.version;
        return v437;
    } catch (e) {
        return null;
    }
};
WebpackCdnPlugin.getVersionInNodeModules = getVersionInNodeModules;
const _getUsedModules = function _getUsedModules(compilation) {
    const usedModules = {};
    const v438 = compilation.getStats();
    const v439 = v438.toJson();
    const v440 = v439.chunks;
    const v448 = c => {
        const v441 = c.modules;
        const v446 = m => {
            const v442 = m.reasons;
            const v444 = r => {
                const v443 = r.userRequest;
                usedModules[v443] = true;
            };
            const v445 = v442.forEach(v444);
            v445;
        };
        const v447 = v441.forEach(v446);
        v447;
    };
    const v449 = v440.forEach(v448);
    v449;
    return usedModules;
};
WebpackCdnPlugin._getUsedModules = _getUsedModules;
const _cleanModules = function _cleanModules(modules, pathToNodeModules) {
    const v477 = p => {
        const v450 = p.name;
        const v451 = WebpackCdnPlugin.getVersionInNodeModules(v450, pathToNodeModules);
        p.version = v451;
        const v452 = p.paths;
        const v453 = !v452;
        if (v453) {
            p.paths = [];
        }
        const v454 = p.path;
        if (v454) {
            const v455 = p.paths;
            const v456 = p.path;
            const v457 = v455.unshift(v456);
            v457;
            p.path = undefined;
        }
        const v458 = p.paths;
        const v459 = v458.length;
        const v460 = v459 === 0;
        const v461 = p.cssOnly;
        const v462 = !v461;
        const v463 = v460 && v462;
        if (v463) {
            const v464 = p.paths;
            const v465 = p.name;
            const v466 = require.resolve(v465);
            const v467 = v466.match(nodeModulesRegex);
            const v468 = v467[1];
            const v469 = v468.replace(backSlashes, slash);
            const v470 = v464.push(v469);
            v470;
        }
        const v471 = p.styles;
        const v472 = !v471;
        if (v472) {
            p.styles = [];
        }
        const v473 = p.style;
        if (v473) {
            const v474 = p.styles;
            const v475 = p.style;
            const v476 = v474.unshift(v475);
            v476;
            p.style = undefined;
        }
    };
    const v478 = modules.forEach(v477);
    v478;
};
WebpackCdnPlugin._cleanModules = _cleanModules;
const _getCss = function _getCss(modules, url, prefix, prod, publicPath) {
    const v479 = WebpackCdnPlugin._get(modules, url, prefix, prod, publicPath, 'styles', 'localStyle');
    return v479;
};
WebpackCdnPlugin._getCss = _getCss;
const _getJs = function _getJs(modules, url, prefix, prod, publicPath) {
    const v480 = WebpackCdnPlugin._get(modules, url, prefix, prod, publicPath, 'paths', 'localScript');
    return v480;
};
WebpackCdnPlugin._getJs = _getJs;
const _get = function _get(modules, url, prefix, prod, publicPath, pathsKey, localKey) {
    prefix = prefix || empty;
    prod = prod !== false;
    const files = [];
    const v482 = p => {
        const v481 = p[localKey];
        return v481;
    };
    const v483 = modules.filter(v482);
    const v487 = p => {
        const v484 = p[localKey];
        const v485 = publicPath + v484;
        const v486 = files.push(v485);
        return v486;
    };
    const v488 = v483.forEach(v487);
    v488;
    const v492 = p => {
        const v489 = p[pathsKey];
        const v490 = v489.length;
        const v491 = v490 > 0;
        return v491;
    };
    const v493 = modules.filter(v492);
    const v512 = p => {
        let moduleSpecificUrl;
        const v494 = p.prodUrl;
        const v495 = p.devUrl;
        if (prod) {
            moduleSpecificUrl = v494;
        } else {
            moduleSpecificUrl = v495;
        }
        const v496 = p[pathsKey];
        const v510 = s => {
            const v497 = moduleSpecificUrl || url;
            const v506 = (m, p1) => {
                const v498 = p.cdn;
                const v499 = prod && v498;
                const v500 = p1 === 'name';
                const v501 = v499 && v500;
                if (v501) {
                    const v502 = p.cdn;
                    return v502;
                }
                const v503 = p1 === 'path';
                const v504 = p[p1];
                let v505;
                if (v503) {
                    v505 = s;
                } else {
                    v505 = v504;
                }
                return v505;
            };
            const v507 = v497.replace(paramsRegex, v506);
            const v508 = prefix + v507;
            const v509 = files.push(v508);
            return v509;
        };
        const v511 = v496.forEach(v510);
        v511;
    };
    const v513 = v493.forEach(v512);
    v513;
    return files;
};
WebpackCdnPlugin._get = _get;
const _assetNormalize = function _assetNormalize(assets) {
    const v516 = (item, i) => {
        const v514 = assets[i];
        const v515 = v514.replace(assetEmptyPrefix, empty);
        assets[i] = v515;
    };
    const v517 = assets.forEach(v516);
    v517;
};
WebpackCdnPlugin._assetNormalize = _assetNormalize;
const _getHtmlHook = function _getHtmlHook(compilation, v4Name, v3Name) {
    try {
        const v518 = HtmlWebpackPlugin.getHooks(compilation);
        const v519 = v518[v4Name];
        const v520 = compilation.hooks;
        const v521 = v520[v3Name];
        const v522 = v519 || v521;
        return v522;
    } catch (e) {
        const v523 = compilation.hooks;
        const v524 = v523[v3Name];
        return v524;
    }
};
WebpackCdnPlugin._getHtmlHook = _getHtmlHook;
WebpackCdnPlugin['is_class'] = true;
module.exports = WebpackCdnPlugin;