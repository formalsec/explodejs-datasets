const v262 = require('child_process');
var exec = v262.exec;
var _ = require('underscore');
var utils = require('util');
const v307 = function () {
    var _items = [];
    var _name = 'AlfredWfNodeJs';
    var handlers = {};
    var clearItems = function () {
        _items = [];
        const v263 = clearItemsData();
        v263;
    };
    var addItem = function (item) {
        const v264 = saveItemData(item);
        v264;
        const v265 = item.hasSubItems;
        if (v265) {
            const v266 = item.title;
            const v267 = Utils.SUB_ACTION_SEPARATOR;
            item.autocomplete = v266 + v267;
        }
        const v268 = item.feedback();
        const v269 = _items.push(v268);
        v269;
    };
    var feedback = function () {
        var usage = Storage.get('usage');
        const v270 = {};
        usage = usage || v270;
        const v275 = function (item) {
            var title = item.title;
            const v271 = usage[title];
            const v272 = usage[title];
            const v273 = 0 - v272;
            let v274;
            if (v271) {
                v274 = v273;
            } else {
                v274 = 0;
            }
            item.count = v274;
        };
        const v276 = _.each(_items, v275);
        v276;
        var sortedItems = _.sortBy(_items, 'count');
        const v279 = function (item) {
            const v277 = item.count;
            const v278 = delete v277;
            v278;
        };
        const v280 = _.each(sortedItems, v279);
        v280;
        const v281 = { items: sortedItems };
        var ret = JSON.stringify(v281);
        const v282 = console.log(ret);
        v282;
        return ret;
    };
    const v283 = function (name) {
        _name = name;
    };
    const v284 = function () {
        return _name;
    };
    const v291 = function (title, subtitle) {
        const v285 = clearItems();
        v285;
        const v286 = ICONS.INFO;
        const v287 = {
            title: title,
            subtitle: subtitle,
            icon: v286
        };
        const v288 = new Item(v287);
        const v289 = addItem(v288);
        v289;
        const v290 = feedback();
        return v290;
    };
    const v298 = function (title, subtitle) {
        const v292 = clearItems();
        v292;
        const v293 = ICONS.WARNING;
        const v294 = {
            title: title,
            subtitle: subtitle,
            icon: v293
        };
        const v295 = new Item(v294);
        const v296 = addItem(v295);
        v296;
        const v297 = feedback();
        return v297;
    };
    const v305 = function (title, subtitle) {
        const v299 = clearItems();
        v299;
        const v300 = ICONS.ERROR;
        const v301 = {
            title: title,
            subtitle: subtitle,
            icon: v300
        };
        const v302 = new Item(v301);
        const v303 = addItem(v302);
        v303;
        const v304 = feedback();
        return v304;
    };
    const v306 = {};
    v306.setName = v283;
    v306.getName = v284;
    v306.addItem = addItem;
    v306.clearItems = clearItems;
    v306.feedback = feedback;
    v306.info = v291;
    v306.warning = v298;
    v306.error = v305;
    return v306;
};
var Workflow = v307();
const v339 = function () {
    var events = require('events');
    var eventEmitter = new events.EventEmitter();
    const v313 = function (action, handler) {
        const v308 = !action;
        const v309 = !handler;
        const v310 = v308 || v309;
        if (v310) {
            return;
        }
        const v311 = 'action-' + action;
        const v312 = eventEmitter.on(v311, handler);
        v312;
    };
    const v319 = function (action, handler) {
        const v314 = !action;
        const v315 = !handler;
        const v316 = v314 || v315;
        if (v316) {
            return;
        }
        const v317 = 'menuItemSelected-' + action;
        const v318 = eventEmitter.on(v317, handler);
        v318;
    };
    const v335 = function (action, query) {
        const v320 = !query;
        const v321 = Utils.SUB_ACTION_SEPARATOR;
        const v322 = query.indexOf(v321);
        const v323 = -1;
        const v324 = v322 === v323;
        const v325 = v320 || v324;
        if (v325) {
            const v326 = 'action-' + action;
            const v327 = eventEmitter.emit(v326, query);
            v327;
        } else {
            const v328 = Utils.SUB_ACTION_SEPARATOR;
            var tmp = query.split(v328);
            const v329 = tmp[0];
            var selectedItemTitle = v329.trim();
            const v330 = tmp[1];
            query = v330.trim();
            const v331 = saveUsage(query, selectedItemTitle);
            v331;
            const v332 = 'menuItemSelected-' + action;
            const v333 = getItemData(selectedItemTitle);
            const v334 = eventEmitter.emit(v332, query, selectedItemTitle, v333);
            v334;
        }
    };
    const v337 = function () {
        const v336 = eventEmitter.removeAllListeners();
        v336;
    };
    const v338 = {};
    v338.onAction = v313;
    v338.onMenuItemSelected = v319;
    v338.handle = v335;
    v338.clear = v337;
    return v338;
};
var ActionHandler = v339();
const Item = function (data) {
    data = _removeEmptyProperties(data);
    let key;
    for (key in data) {
        const v340 = data[key];
        this[key] = v340;
    }
};
const v341 = Item.prototype;
const v359 = function () {
    const v342 = this.arg;
    const v343 = _updateArg(v342);
    this.arg = v343;
    const v344 = this.uid;
    const v345 = this.arg;
    const v346 = this.valid;
    const v347 = v346 === true;
    let v348;
    if (v347) {
        v348 = 'YES';
    } else {
        v348 = 'NO';
    }
    const v349 = this.autocomplete;
    const v350 = this.title;
    const v351 = this.subtitle;
    const v352 = this.type;
    const v353 = this.icon;
    const v354 = {};
    v354['path'] = v353;
    const v355 = this.quicklookurl;
    const v356 = this.text;
    const v357 = this.mods;
    const v358 = {
        'uid': v344,
        'arg': v345,
        'valid': v348,
        'autocomplete': v349,
        'title': v350,
        'subtitle': v351,
        'type': v352,
        'icon': v354,
        'quicklookurl': v355,
        'text': v356,
        'mods': v357
    };
    var item = _removeEmptyProperties(v358);
    return item;
};
v341.feedback = v359;
const v384 = function () {
    var storage = require('node-persist');
    const v360 = storage.initSync();
    v360;
    const v366 = function (key, value, ttl) {
        const v361 = new Date();
        const v362 = v361.getTime();
        const v363 = -1;
        const v364 = ttl || v363;
        var obj = {};
        obj.data = value;
        obj.timestamp = v362;
        obj.ttl = v364;
        const v365 = storage.setItemSync(key, obj);
        v365;
    };
    const v376 = function (key) {
        var obj = storage.getItemSync(key);
        if (obj) {
            var ttl = obj.ttl;
            var timestamp = obj.timestamp;
            const v367 = -1;
            const v368 = ttl === v367;
            if (v368) {
                const v369 = obj.data;
                return v369;
            } else {
                const v370 = new Date();
                var now = v370.getTime();
                const v371 = now - timestamp;
                const v372 = v371 < ttl;
                if (v372) {
                    const v373 = obj.data;
                    return v373;
                } else {
                    const v374 = function () {
                    };
                    const v375 = storage.removeItemSync(key, v374);
                    v375;
                }
            }
        }
    };
    const v380 = function (key) {
        const v377 = storage.getItem(key);
        if (v377) {
            const v378 = function () {
            };
            const v379 = storage.removeItemSync(key, v378);
            v379;
        }
    };
    const v382 = function () {
        const v381 = storage.clearSync();
        v381;
    };
    const v383 = {};
    v383.set = v366;
    v383.get = v376;
    v383.remove = v380;
    v383.clear = v382;
    return v383;
};
var Storage = v384();
const v406 = function () {
    var keychain = require('keychain');
    const v387 = function (key, value) {
        var settings = Storage.get('settings');
        const v385 = {};
        settings = settings || v385;
        settings[key] = value;
        const v386 = Storage.set('settings', settings);
        v386;
    };
    const v389 = function (key) {
        var settings = Storage.get('settings');
        if (settings) {
            const v388 = settings[key];
            return v388;
        }
    };
    const v392 = function (key) {
        var settings = Storage.get('settings');
        if (settings) {
            const v390 = settings[key];
            const v391 = delete v390;
            v391;
        }
    };
    const v394 = function () {
        const v393 = Storage.remove('settings');
        v393;
    };
    const v400 = function (username, password) {
        const v395 = Workflow.getName();
        const v396 = {
            account: username,
            service: v395,
            password: password
        };
        const v398 = function (err) {
            const v397 = console.log(err);
            v397;
        };
        const v399 = keychain.setPassword(v396, v398);
        v399;
    };
    const v404 = function (username, callback) {
        const v401 = Workflow.getName();
        const v402 = {
            account: username,
            service: v401
        };
        const v403 = keychain.getPassword(v402, callback);
        v403;
    };
    const v405 = {};
    v405.set = v387;
    v405.get = v389;
    v405.remove = v392;
    v405.clear = v394;
    v405.setPassword = v400;
    v405.getPassword = v404;
    return v405;
};
var Settings = v406();
const v463 = function () {
    var fuzzy = require('fuzzy');
    var applescript = require('node-osascript');
    const v412 = function (query, list, keyBuilder) {
        const v407 = !query;
        if (v407) {
            return list;
        }
        var options = {};
        options.extract = keyBuilder;
        const v408 = fuzzy.filter(query, list, options);
        const v410 = function (item) {
            const v409 = item.original;
            return v409;
        };
        const v411 = v408.map(v410);
        return v411;
    };
    const v414 = function (script, handler) {
        const v413 = applescript.execute(script, handler);
        v413;
    };
    const v417 = function (path, varibale, handler) {
        const v415 = applescript.executeFile;
        const v416 = v415.apply(this, arguments);
        v416;
    };
    const v418 = {};
    v418.execute = v414;
    v418.executeFile = v417;
    const v420 = function (data) {
        var ret = _updateArg(data);
        const v419 = console.log(ret);
        v419;
        return ret;
    };
    const v429 = function (key, value) {
        const v421 = key !== undefined;
        const v422 = value !== undefined;
        const v423 = v421 && v422;
        if (v423) {
            const v424 = typeof value;
            const v425 = v424 === 'object';
            if (v425) {
                const v427 = JSON.stringify(value);
                v426.key = v427;
            } else {
                const v428 = process.env;
                v428.key = value;
            }
        }
    };
    const v433 = function (key) {
        const v430 = process.env;
        const v431 = v430[key];
        const v432 = _toObjectIfJSONString(v431);
        return v432;
    };
    const v434 = {};
    v434.set = v429;
    v434.get = v433;
    const v445 = function (key, value, callback) {
        const v435 = key !== undefined;
        const v436 = value !== undefined;
        const v437 = v435 && v436;
        if (v437) {
            var setCommand = utils.format('/usr/libexec/PlistBuddy -c "Set :variables:%s "%s"" info.plist', key, value);
            const v443 = function (err, stdout, stderr) {
                if (err) {
                    var addCommand = utils.format('/usr/libexec/PlistBuddy -c "Add :variables:%s string "%s"" info.plist', key, value);
                    const v440 = function (err, stdout, stderr) {
                        if (callback) {
                            const v438 = _toUndefinedIfNull(err);
                            const v439 = callback(v438);
                            v439;
                        }
                        ;
                    };
                    const v441 = exec(addCommand, v440);
                    v441;
                } else {
                    if (callback) {
                        const v442 = callback(undefined);
                        v442;
                    }
                    ;
                }
            };
            const v444 = exec(setCommand, v443);
            v444;
        }
    };
    const v450 = function (key, callback) {
        var getCommand = utils.format('/usr/libexec/PlistBuddy -c "Print :variables:%s" info.plist', key);
        const v448 = function (err, stdout, stderr) {
            if (err) {
                const v446 = callback(err);
                v446;
            } else {
                var value = stdout.trim();
                const v447 = callback(undefined, value);
                v447;
            }
        };
        const v449 = exec(getCommand, v448);
        v449;
    };
    const v455 = function (key, callback) {
        var getCommand = utils.format('/usr/libexec/PlistBuddy -c "Delete :variables:%s" info.plist', key);
        const v453 = function (err, stdout, stderr) {
            if (callback) {
                const v451 = _toUndefinedIfNull(err);
                const v452 = callback(v451);
                v452;
            }
            ;
        };
        const v454 = exec(getCommand, v453);
        v454;
    };
    const v460 = function (callback) {
        var clearCommand = '/usr/libexec/PlistBuddy -c "Delete :variables" info.plist';
        const v458 = function (err, stdout, stderr) {
            if (callback) {
                const v456 = _toUndefinedIfNull(err);
                const v457 = callback(v456);
                v457;
            }
            ;
        };
        const v459 = exec(clearCommand, v458);
        v459;
    };
    const v461 = {};
    v461.set = v445;
    v461.get = v450;
    v461.remove = v455;
    v461.clear = v460;
    const v462 = {};
    v462.SUB_ACTION_SEPARATOR = ' $>';
    v462.filter = v412;
    v462.applescript = v418;
    v462.generateVars = v420;
    v462.envVars = v434;
    v462.wfVars = v461;
    return v462;
};
var Utils = v463();
const v486 = function () {
    var ICON_ROOT = '/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/';
    const v464 = ICON_ROOT + 'Accounts.icns';
    const v465 = ICON_ROOT + 'BurningIcon.icns';
    const v466 = ICON_ROOT + 'Clock.icns';
    const v467 = ICON_ROOT + 'ProfileBackgroundColor.icns';
    const v468 = ICON_ROOT + 'EjectMediaIcon.icns';
    const v469 = ICON_ROOT + 'AlertStopIcon.icns';
    const v470 = ICON_ROOT + 'ToolbarFavoritesIcon.icns';
    const v471 = ICON_ROOT + 'GroupIcon.icns';
    const v472 = ICON_ROOT + 'HelpIcon.icns';
    const v473 = ICON_ROOT + 'HomeFolderIcon.icns';
    const v474 = ICON_ROOT + 'ToolbarInfo.icns';
    const v475 = ICON_ROOT + 'GenericNetworkIcon.icns';
    const v476 = ICON_ROOT + 'AlertNoteIcon.icns';
    const v477 = ICON_ROOT + 'ToolbarAdvanced.icns';
    const v478 = ICON_ROOT + 'ErasingIcon.icns';
    const v479 = ICON_ROOT + 'General.icns';
    const v480 = ICON_ROOT + 'Sync.icns';
    const v481 = ICON_ROOT + 'TrashIcon.icns';
    const v482 = ICON_ROOT + 'UserIcon.icns';
    const v483 = ICON_ROOT + 'AlertCautionIcon.icns';
    const v484 = ICON_ROOT + 'BookmarkIcon.icns';
    const v485 = {};
    v485.ACCOUNT = v464;
    v485.BURN = v465;
    v485.CLOCK = v466;
    v485.COLOR = v467;
    v485.EJECT = v468;
    v485.ERROR = v469;
    v485.FAVORITE = v470;
    v485.GROUP = v471;
    v485.HELP = v472;
    v485.HOME = v473;
    v485.INFO = v474;
    v485.NETWORK = v475;
    v485.NOTE = v476;
    v485.SETTINGS = v477;
    v485.SWIRL = v478;
    v485.SWITCH = v479;
    v485.SYNC = v480;
    v485.TRASH = v481;
    v485.USER = v482;
    v485.WARNING = v483;
    v485.WEB = v484;
    return v485;
};
var ICONS = v486();
const _removeEmptyProperties = function (data) {
    let key;
    for (key in data) {
        var value = data[key];
        const v487 = typeof value;
        const v488 = v487 === 'object';
        if (v488) {
            value = _removeEmptyProperties(value);
            const v489 = Object.keys(value);
            const v490 = v489.length;
            const v491 = !v490;
            if (v491) {
                value = null;
            }
        }
        const v492 = value === undefined;
        const v493 = value === null;
        const v494 = v492 || v493;
        if (v494) {
            const v495 = data[key];
            const v496 = delete v495;
            v496;
        }
    }
    return data;
};
const saveItemData = function (item) {
    const v497 = item.data;
    if (v497) {
        var wfData = Storage.get('wfData');
        const v498 = {};
        wfData = wfData || v498;
        const v499 = item.title;
        const v500 = item.data;
        wfData[v499] = v500;
        const v501 = Storage.set('wfData', wfData);
        v501;
    }
};
const clearItemsData = function (item) {
    const v502 = Storage.remove('wfData');
    v502;
};
const getItemData = function (itemTitle) {
    const v503 = typeof itemTitle;
    const v504 = v503 === 'string';
    const v505 = itemTitle.normalize();
    if (v504) {
        itemTitle = v505;
    } else {
        itemTitle = itemTitle;
    }
    var wfData = Storage.get('wfData');
    const v506 = wfData[itemTitle];
    let v507;
    if (wfData) {
        v507 = v506;
    } else {
        v507 = undefined;
    }
    return v507;
};
const saveUsage = function (query, itemTitle) {
    const v508 = !query;
    if (v508) {
        var usage = Storage.get('usage');
        const v509 = {};
        usage = usage || v509;
        var count = usage[itemTitle];
        count = count || 0;
        usage[itemTitle] = count + 1;
        const v510 = Storage.set('usage', usage);
        v510;
    }
};
const _updateArg = function (data) {
    const v511 = typeof data;
    const v512 = v511 === 'object';
    if (v512) {
        var _arg = data.arg;
        var _variables = data.variables;
        const v513 = {};
        v513.arg = _arg;
        v513.variables = _variables;
        const v514 = { alfredworkflow: v513 };
        const v515 = JSON.stringify(v514);
        return v515;
    }
    return data;
};
const _toUndefinedIfNull = function (x) {
    const v516 = x === null;
    let v517;
    if (v516) {
        v517 = undefined;
    } else {
        v517 = x;
    }
    return v517;
};
const _toObjectIfJSONString = function (str) {
    try {
        str = JSON.parse(str);
    } catch (err) {
    }
    return str;
};
const v521 = function () {
    const v518 = process.argv;
    var action = v518[2];
    const v519 = process.argv;
    var query = v519[3];
    const v520 = ActionHandler.handle(action, query);
    v520;
};
const v522 = {};
v522.storage = Storage;
v522.workflow = Workflow;
v522.actionHandler = ActionHandler;
v522.settings = Settings;
v522.Item = Item;
v522.utils = Utils;
v522.ICONS = ICONS;
v522.run = v521;
module.exports = v522;