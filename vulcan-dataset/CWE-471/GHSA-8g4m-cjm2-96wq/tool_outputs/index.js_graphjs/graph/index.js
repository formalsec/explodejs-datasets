const v353 = require('esprima');
var parse = v353.parse;
var hoist = require('hoister');
var InfiniteChecker = require('./lib/infinite-checker');
var Primitives = require('./lib/primitives');
module.exports = safeEval;
const v354 = module.exports;
v354.eval = safeEval;
const v355 = module.exports;
v355.FunctionFactory = FunctionFactory;
const v357 = FunctionFactory();
v356.Function = v357;
var maxIterations = 1000000;
const safeEval = function (src, parentContext) {
    var tree = prepareAst(src);
    const v358 = {};
    const v359 = parentContext || v358;
    var context = Object.create(v359);
    const v360 = evaluateAst(tree, context);
    const v361 = finalValue(v360);
    return v361;
};
const FunctionFactory = function (parentContext) {
    const v362 = {};
    const v363 = parentContext || v362;
    var context = Object.create(v363);
    const v377 = function Function() {
        const v364 = Array.prototype;
        const v365 = v364.slice;
        var args = v365.call(arguments);
        const v366 = -1;
        const v367 = args.slice(v366);
        var src = v367[0];
        const v368 = -1;
        args = args.slice(0, v368);
        const v369 = typeof src;
        const v370 = v369 === 'string';
        if (v370) {
            const v371 = 'function a(){' + src;
            const v372 = v371 + '}';
            const v373 = parse(v372);
            const v374 = v373.body;
            const v375 = v374[0];
            src = v375.body;
        }
        var tree = prepareAst(src);
        const v376 = getFunction(tree, args, context);
        return v376;
    };
    return v377;
};
const prepareAst = function (src) {
    let tree;
    const v378 = typeof src;
    const v379 = v378 === 'string';
    const v380 = { loc: true };
    const v381 = parse(src, v380);
    if (v379) {
        tree = v381;
    } else {
        tree = src;
    }
    const v382 = hoist(tree);
    return v382;
};
const evaluateAst = function (tree, context) {
    var safeFunction = FunctionFactory(context);
    var primitives = Primitives(context);
    var blockContext = context;
    const v383 = walk(tree);
    return v383;
    const walkAll = function (nodes) {
        var result = undefined;
        var i = 0;
        const v384 = nodes.length;
        let v385 = i < v384;
        while (v385) {
            var childNode = nodes[i];
            const v387 = childNode.type;
            const v388 = v387 === 'EmptyStatement';
            if (v388) {
                continue;
            }
            result = walk(childNode);
            const v389 = result instanceof ReturnValue;
            if (v389) {
                return result;
            }
            const v386 = i++;
            v385 = i < v384;
        }
        return result;
    };
    const walk = function (node, traceNode) {
        try {
            const v390 = !node;
            if (v390) {
                return;
            }
            const v391 = node.type;
            switch (v391) {
            case 'Program':
                const v392 = node.body;
                const v393 = walkAll(v392);
                return v393;
            case 'BlockStatement':
                const v394 = enterBlock();
                v394;
                const v395 = node.body;
                var result = walkAll(v395);
                const v396 = leaveBlock();
                v396;
                return result;
            case 'FunctionDeclaration':
                const v397 = node.params;
                var params = v397.map(getName);
                const v398 = node.body;
                var value = getFunction(v398, params, blockContext, node);
                const v399 = node.id;
                const v400 = v399.name;
                return context[v400] = value;
            case 'FunctionExpression':
                const v401 = node.params;
                var params = v401.map(getName);
                const v402 = node.id;
                const v403 = !v402;
                const v404 = v403 && traceNode;
                const v405 = traceNode.key;
                const v406 = v404 && v405;
                const v407 = traceNode.key;
                const v408 = v407.type;
                const v409 = v408 === 'Identifier';
                const v410 = v406 && v409;
                if (v410) {
                    const v411 = traceNode.key;
                    node.id = v411;
                }
                const v412 = node.body;
                const v413 = getFunction(v412, params, blockContext, node);
                return v413;
            case 'ReturnStatement':
                const v414 = node.argument;
                var value = walk(v414);
                const v415 = new ReturnValue('return', value);
                return v415;
            case 'BreakStatement':
                const v416 = new ReturnValue('break');
                return v416;
            case 'ContinueStatement':
                const v417 = new ReturnValue('continue');
                return v417;
            case 'ExpressionStatement':
                const v418 = node.expression;
                const v419 = walk(v418);
                return v419;
            case 'AssignmentExpression':
                const v420 = node.left;
                const v421 = node.right;
                const v422 = node.operator;
                const v423 = setValue(blockContext, v420, v421, v422);
                return v423;
            case 'UpdateExpression':
                const v424 = node.argument;
                const v425 = node.operator;
                const v426 = setValue(blockContext, v424, null, v425);
                return v426;
            case 'VariableDeclaration':
                const v427 = node.declarations;
                const v437 = function (declaration) {
                    let target;
                    const v428 = node.kind;
                    const v429 = v428 === 'let';
                    if (v429) {
                        target = blockContext;
                    } else {
                        target = context;
                    }
                    const v430 = declaration.init;
                    if (v430) {
                        const v433 = declaration.init;
                        const v434 = walk(v433);
                        target[v432] = v434;
                    } else {
                        const v435 = declaration.id;
                        const v436 = v435.name;
                        target[v436] = undefined;
                    }
                };
                const v438 = v427.forEach(v437);
                v438;
                break;
            case 'SwitchStatement':
                var defaultHandler = null;
                var matched = false;
                const v439 = node.discriminant;
                var value = walk(v439);
                var result = undefined;
                const v440 = enterBlock();
                v440;
                var i = 0;
                let v441 = result == null;
                while (v441) {
                    const v442 = node.cases;
                    const v443 = v442.length;
                    const v444 = i < v443;
                    if (v444) {
                        const v445 = node.cases;
                        const v446 = v445[i];
                        const v447 = v446.test;
                        if (v447) {
                            const v448 = node.cases;
                            const v449 = v448[i];
                            const v450 = v449.test;
                            const v451 = walk(v450);
                            const v452 = v451 === value;
                            matched = matched || v452;
                        } else {
                            const v453 = defaultHandler == null;
                            if (v453) {
                                defaultHandler = i;
                            }
                        }
                        if (matched) {
                            const v454 = node.cases;
                            const v455 = v454[i];
                            const v456 = v455.consequent;
                            var r = walkAll(v456);
                            const v457 = r instanceof ReturnValue;
                            if (v457) {
                                const v458 = r.type;
                                const v459 = v458 == 'break';
                                if (v459) {
                                    break;
                                }
                                result = r;
                            }
                        }
                        i += 1;
                    } else {
                        const v460 = !matched;
                        const v461 = defaultHandler != null;
                        const v462 = v460 && v461;
                        if (v462) {
                            i = defaultHandler;
                            matched = true;
                        } else {
                            break;
                        }
                    }
                    v441 = result == null;
                }
                const v463 = leaveBlock();
                v463;
                return result;
            case 'IfStatement':
                const v464 = node.test;
                const v465 = walk(v464);
                if (v465) {
                    const v466 = node.consequent;
                    const v467 = walk(v466);
                    return v467;
                } else {
                    const v468 = node.alternate;
                    if (v468) {
                        const v469 = node.alternate;
                        const v470 = walk(v469);
                        return v470;
                    }
                }
            case 'ForStatement':
                var infinite = InfiniteChecker(maxIterations);
                var result = undefined;
                const v471 = enterBlock();
                v471;
                const v472 = node.init;
                const v473 = walk(v472);
                const v474 = node.test;
                let v475 = walk(v474);
                while (v475) {
                    const v478 = node.body;
                    var r = walk(v478);
                    const v479 = r instanceof ReturnValue;
                    if (v479) {
                        const v480 = r.type;
                        const v481 = v480 == 'continue';
                        if (v481) {
                            continue;
                        }
                        const v482 = r.type;
                        const v483 = v482 == 'break';
                        if (v483) {
                            break;
                        }
                        result = r;
                        break;
                    }
                    const v484 = infinite.check();
                    v484;
                    const v476 = node.update;
                    const v477 = walk(v476);
                    v475 = walk(v474);
                }
                const v485 = leaveBlock();
                v485;
                return result;
            case 'ForInStatement':
                var infinite = InfiniteChecker(maxIterations);
                var result = undefined;
                const v486 = node.right;
                var value = walk(v486);
                var property = node.left;
                var target = context;
                const v487 = enterBlock();
                v487;
                const v488 = property.type;
                const v489 = v488 == 'VariableDeclaration';
                if (v489) {
                    const v490 = walk(property);
                    v490;
                    const v491 = property.declarations;
                    const v492 = v491[0];
                    property = v492.id;
                    const v493 = property.kind;
                    const v494 = v493 === 'let';
                    if (v494) {
                        target = blockContext;
                    }
                }
                let key;
                for (key in value) {
                    const v495 = {
                        type: 'Literal',
                        value: key
                    };
                    const v496 = setValue(target, property, v495);
                    v496;
                    const v497 = node.body;
                    var r = walk(v497);
                    const v498 = r instanceof ReturnValue;
                    if (v498) {
                        const v499 = r.type;
                        const v500 = v499 == 'continue';
                        if (v500) {
                            continue;
                        }
                        const v501 = r.type;
                        const v502 = v501 == 'break';
                        if (v502) {
                            break;
                        }
                        result = r;
                        break;
                    }
                    const v503 = infinite.check();
                    v503;
                }
                const v504 = leaveBlock();
                v504;
                return result;
            case 'WhileStatement':
                var infinite = InfiniteChecker(maxIterations);
                const v505 = node.test;
                let v506 = walk(v505);
                while (v506) {
                    const v507 = node.body;
                    const v508 = walk(v507);
                    v508;
                    const v509 = infinite.check();
                    v509;
                    v506 = walk(v505);
                }
                break;
            case 'TryStatement':
                try {
                    const v510 = node.block;
                    const v511 = walk(v510);
                    v511;
                } catch (error) {
                    const v512 = enterBlock();
                    v512;
                    const v513 = node.handlers;
                    var catchClause = v513[0];
                    if (catchClause) {
                        const v514 = catchClause.param;
                        const v515 = v514.name;
                        blockContext[v515] = error;
                        const v516 = catchClause.body;
                        const v517 = walk(v516);
                        v517;
                    }
                    const v518 = leaveBlock();
                    v518;
                } finally {
                    const v519 = node.finalizer;
                    if (v519) {
                        const v520 = node.finalizer;
                        const v521 = walk(v520);
                        v521;
                    }
                }
                break;
            case 'Literal':
                const v522 = node.value;
                return v522;
            case 'UnaryExpression':
                const v523 = node.operator;
                const v524 = v523 === 'delete';
                const v525 = node.argument;
                const v526 = v525.type;
                const v527 = v526 === 'MemberExpression';
                const v528 = v524 && v527;
                if (v528) {
                    var arg = node.argument;
                    const v529 = arg.object;
                    var parent = walk(v529);
                    let prop;
                    const v530 = arg.computed;
                    const v531 = arg.property;
                    const v532 = walk(v531);
                    const v533 = arg.property;
                    const v534 = v533.name;
                    if (v530) {
                        prop = v532;
                    } else {
                        prop = v534;
                    }
                    const v535 = parent[prop];
                    const v536 = delete v535;
                    v536;
                    return true;
                } else {
                    const v537 = node.argument;
                    var val = walk(v537);
                    const v538 = node.operator;
                    switch (v538) {
                    case '+':
                        const v539 = +val;
                        return v539;
                    case '-':
                        const v540 = -val;
                        return v540;
                    case '~':
                        const v541 = ~val;
                        return v541;
                    case '!':
                        const v542 = !val;
                        return v542;
                    case 'typeof':
                        const v543 = typeof val;
                        return v543;
                    default:
                        const v544 = unsupportedExpression(node);
                        return v544;
                    }
                }
            case 'ArrayExpression':
                var obj = blockContext['Array']();
                var i = 0;
                const v545 = node.elements;
                const v546 = v545.length;
                let v547 = i < v546;
                while (v547) {
                    const v549 = node.elements;
                    const v550 = v549[i];
                    const v551 = walk(v550);
                    const v552 = obj.push(v551);
                    v552;
                    const v548 = i++;
                    v547 = i < v546;
                }
                return obj;
            case 'ObjectExpression':
                var obj = blockContext['Object']();
                var i = 0;
                const v553 = node.properties;
                const v554 = v553.length;
                let v555 = i < v554;
                while (v555) {
                    const v557 = node.properties;
                    var prop = v557[i];
                    let value;
                    const v558 = prop.value;
                    const v559 = v558 === null;
                    const v560 = prop.value;
                    const v561 = prop.value;
                    const v562 = walk(v561, prop);
                    if (v559) {
                        value = v560;
                    } else {
                        value = v562;
                    }
                    const v563 = prop.key;
                    const v564 = v563.value;
                    const v565 = prop.key;
                    const v566 = v565.name;
                    const v567 = v564 || v566;
                    obj[v567] = value;
                    const v556 = i++;
                    v555 = i < v554;
                }
                return obj;
            case 'NewExpression':
                const v568 = node.arguments;
                const v570 = function (arg) {
                    const v569 = walk(arg);
                    return v569;
                };
                var args = v568.map(v570);
                const v571 = node.callee;
                var target = walk(v571);
                const v572 = primitives.applyNew(target, args);
                return v572;
            case 'BinaryExpression':
                const v573 = node.left;
                var l = walk(v573);
                const v574 = node.right;
                var r = walk(v574);
                const v575 = node.operator;
                switch (v575) {
                case '==':
                    const v576 = l == r;
                    return v576;
                case '===':
                    const v577 = l === r;
                    return v577;
                case '!=':
                    const v578 = l != r;
                    return v578;
                case '!==':
                    const v579 = l !== r;
                    return v579;
                case '+':
                    const v580 = l + r;
                    return v580;
                case '-':
                    const v581 = l - r;
                    return v581;
                case '*':
                    const v582 = l * r;
                    return v582;
                case '/':
                    const v583 = l / r;
                    return v583;
                case '%':
                    const v584 = l % r;
                    return v584;
                case '<':
                    const v585 = l < r;
                    return v585;
                case '<=':
                    const v586 = l <= r;
                    return v586;
                case '>':
                    const v587 = l > r;
                    return v587;
                case '>=':
                    const v588 = l >= r;
                    return v588;
                case '|':
                    const v589 = l | r;
                    return v589;
                case '&':
                    const v590 = l & r;
                    return v590;
                case '^':
                    const v591 = l ^ r;
                    return v591;
                case 'instanceof':
                    const v592 = l instanceof r;
                    return v592;
                default:
                    const v593 = unsupportedExpression(node);
                    return v593;
                }
            case 'LogicalExpression':
                const v594 = node.operator;
                switch (v594) {
                case '&&':
                    const v595 = node.left;
                    const v596 = walk(v595);
                    const v597 = node.right;
                    const v598 = walk(v597);
                    const v599 = v596 && v598;
                    return v599;
                case '||':
                    const v600 = node.left;
                    const v601 = walk(v600);
                    const v602 = node.right;
                    const v603 = walk(v602);
                    const v604 = v601 || v603;
                    return v604;
                default:
                    const v605 = unsupportedExpression(node);
                    return v605;
                }
            case 'ThisExpression':
                const v606 = blockContext['this'];
                return v606;
            case 'Identifier':
                const v607 = node.name;
                const v608 = v607 === 'undefined';
                if (v608) {
                    return undefined;
                } else {
                    const v609 = node.name;
                    const v610 = hasProperty(blockContext, v609, primitives);
                    if (v610) {
                        const v611 = node.name;
                        const v612 = blockContext[v611];
                        const v613 = checkValue(v612);
                        return v613;
                    } else {
                        const v614 = node.name;
                        const v615 = v614 + ' is not defined';
                        const v616 = new ReferenceError(v615);
                        throw v616;
                    }
                }
            case 'CallExpression':
                const v617 = node.arguments;
                const v619 = function (arg) {
                    const v618 = walk(arg);
                    return v618;
                };
                var args = v617.map(v619);
                var object = null;
                const v620 = node.callee;
                var target = walk(v620);
                const v621 = node.callee;
                const v622 = v621.type;
                const v623 = v622 === 'MemberExpression';
                if (v623) {
                    const v624 = node.callee;
                    const v625 = v624.object;
                    object = walk(v625);
                }
                const v626 = target.apply(object, args);
                const v627 = checkValue(v626);
                return v627;
            case 'MemberExpression':
                const v628 = node.object;
                var obj = walk(v628);
                const v629 = node.computed;
                if (v629) {
                    const v630 = node.property;
                    var prop = walk(v630);
                } else {
                    const v631 = node.property;
                    var prop = v631.name;
                }
                obj = primitives.getPropertyObject(obj, prop);
                const v632 = obj[prop];
                const v633 = checkValue(v632);
                return v633;
            case 'ConditionalExpression':
                const v634 = node.test;
                var val = walk(v634);
                const v635 = node.consequent;
                const v636 = walk(v635);
                const v637 = node.alternate;
                const v638 = walk(v637);
                let v639;
                if (val) {
                    v639 = v636;
                } else {
                    v639 = v638;
                }
                return v639;
            case 'EmptyStatement':
                return;
            default:
                const v640 = unsupportedExpression(node);
                return v640;
            }
        } catch (ex) {
            const v641 = ex.trace;
            const v642 = [];
            ex.trace = v641 || v642;
            const v643 = ex.trace;
            const v644 = v643.push(node);
            v644;
            throw ex;
        }
    };
    const checkValue = function (value) {
        const v645 = value === Function;
        if (v645) {
            value = safeFunction;
        }
        const v646 = finalValue(value);
        return v646;
    };
    const enterBlock = function () {
        blockContext = Object.create(blockContext);
    };
    const leaveBlock = function () {
        blockContext = Object.getPrototypeOf(blockContext);
    };
    const setValue = function (object, left, right, operator) {
        var name = null;
        const v647 = left.type;
        const v648 = v647 === 'Identifier';
        if (v648) {
            name = left.name;
            object = objectForKey(object, name, primitives);
        } else {
            const v649 = left.type;
            const v650 = v649 === 'MemberExpression';
            if (v650) {
                const v651 = left.computed;
                if (v651) {
                    const v652 = left.property;
                    name = walk(v652);
                } else {
                    const v653 = left.property;
                    name = v653.name;
                }
                const v654 = left.object;
                object = walk(v654);
            }
        }
        const v655 = canSetProperty(object, name, primitives);
        if (v655) {
            switch (operator) {
            case undefined:
                const v656 = walk(right);
                return object[name] = v656;
            case '=':
                const v657 = walk(right);
                return object[name] = v657;
            case '+=':
                const v658 = walk(right);
                return object[name] += v658;
            case '-=':
                const v659 = walk(right);
                return object[name] -= v659;
            case '++':
                const v660 = object[name];
                const v661 = v660++;
                return v661;
            case '--':
                const v662 = object[name];
                const v663 = v662--;
                return v663;
            }
        }
    };
};
const unsupportedExpression = function (node) {
    const v664 = console.error(node);
    v664;
    const v665 = node.type;
    const v666 = 'Unsupported expression: ' + v665;
    var err = new Error(v666);
    err.node = node;
    throw err;
};
const objectForKey = function (object, key, primitives) {
    var proto = primitives.getPrototypeOf(object);
    const v667 = !proto;
    const v668 = hasOwnProperty(object, key);
    const v669 = v667 || v668;
    if (v669) {
        return object;
    } else {
        const v670 = objectForKey(proto, key, primitives);
        return v670;
    }
};
const hasProperty = function (object, key, primitives) {
    var proto = primitives.getPrototypeOf(object);
    var hasOwn = hasOwnProperty(object, key);
    const v671 = object[key];
    const v672 = v671 !== undefined;
    if (v672) {
        return true;
    } else {
        const v673 = !proto;
        const v674 = v673 || hasOwn;
        if (v674) {
            return hasOwn;
        } else {
            const v675 = hasProperty(proto, key, primitives);
            return v675;
        }
    }
};
const hasOwnProperty = function (object, key) {
    const v676 = Object.prototype;
    const v677 = v676.hasOwnProperty;
    const v678 = v677.call(object, key);
    return v678;
};
const propertyIsEnumerable = function (object, key) {
    const v679 = Object.prototype;
    const v680 = v679.propertyIsEnumerable;
    const v681 = v680.call(object, key);
    return v681;
};
const canSetProperty = function (object, property, primitives) {
    const v682 = property === '__proto__';
    const v683 = primitives.isPrimitive(object);
    const v684 = v682 || v683;
    if (v684) {
        return false;
    } else {
        const v685 = object != null;
        if (v685) {
            const v686 = hasOwnProperty(object, property);
            if (v686) {
                const v687 = propertyIsEnumerable(object, property);
                if (v687) {
                    return true;
                } else {
                    return false;
                }
            } else {
                const v688 = primitives.getPrototypeOf(object);
                const v689 = canSetProperty(v688, property, primitives);
                return v689;
            }
        } else {
            return true;
        }
    }
};
const getFunction = function (body, params, parentContext, traceNode) {
    const v701 = function () {
        try {
            var context = Object.create(parentContext);
            const v690 = this == global;
            if (v690) {
                context['this'] = null;
            } else {
                context['this'] = this;
            }
            const v691 = Array.prototype;
            const v692 = v691.slice;
            var args = v692.call(arguments);
            context['arguments'] = arguments;
            const v693 = function (arg, idx) {
                var param = params[idx];
                if (param) {
                    context[param] = arg;
                }
            };
            const v694 = args.forEach(v693);
            v694;
            var result = evaluateAst(body, context);
            const v695 = result instanceof ReturnValue;
            if (v695) {
                const v696 = result.value;
                return v696;
            }
        } catch (ex) {
            const v697 = ex.trace;
            const v698 = [];
            ex.trace = v697 || v698;
            const v699 = ex.trace;
            const v700 = v699.push(traceNode);
            v700;
            throw ex;
        }
    };
    return v701;
};
const finalValue = function (value) {
    const v702 = value instanceof ReturnValue;
    if (v702) {
        const v703 = value.value;
        return v703;
    }
    return value;
};
const getName = function (identifier) {
    const v704 = identifier.name;
    return v704;
};
const ReturnValue = function (type, value) {
    this.type = type;
    this.value = value;
};