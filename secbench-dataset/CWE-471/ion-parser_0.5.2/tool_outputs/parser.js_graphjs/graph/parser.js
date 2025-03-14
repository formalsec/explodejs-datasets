'use strict';
let source;
let position;
let fs;
const parse = function (src) {
    const v363 = typeof src;
    const v364 = v363 != 'string';
    if (v364) {
        src = String(src);
    }
    const scope = new Scope();
    const inlineTypes = [];
    source = src;
    position = 0;
    let key = '';
    let val = '';
    let start;
    let end;
    let stop;
    let c = source[0];
    let defineKey = true;
    let data = {};
    let mustAssign = false;
    const addKey = () => {
        if (defineKey) {
            if (key) {
                const v365 = key.trimEnd();
                const v366 = trueValue(v365);
                const v367 = scope.push(v366);
                v367;
            }
        } else {
            const v368 = !val;
            if (v368) {
                const v369 = error('Expecting value after =');
                throw v369;
            }
            const v370 = key.trimEnd();
            const v371 = val.trimEnd();
            const v372 = trueValue(v371);
            const v373 = scope.set(v370, v372);
            v373;
        }
        key = '';
        val = '';
        defineKey = true;
    };
    let v375 = true;
    while (v375) {
        switch (c) {
        case ' ':
            if (defineKey) {
                if (key) {
                    key += c;
                }
            } else {
                if (val) {
                    val += c;
                }
            }
        case '\t':
        case '\r':
            continue;
        case '#':
            const v376 = position + 1;
            const v377 = source.indexOf('\n', v376);
            position = v377 - 1;
            const v378 = -2;
            const v379 = position == v378;
            if (v379) {
                position = Infinity;
            }
            continue;
        case '"':
        case '\'':
            const v380 = !defineKey;
            const v381 = v380 && val;
            if (v381) {
                val += c;
                continue;
            }
            const v382 = position + 1;
            const v383 = source[v382];
            const v384 = v383 == c;
            const v385 = position + 2;
            const v386 = source[v385];
            const v387 = v386 == c;
            let triple = v384 && v387;
            end = fragment(source, position, true);
            if (defineKey) {
                if (key) {
                    const v388 = 'Unexpected ' + c;
                    const v389 = error(v388);
                    throw v389;
                }
                if (triple) {
                    const v390 = position + 2;
                    const v391 = end - 2;
                    key += source.slice(v390, v391);
                } else {
                    key += source.slice(position, end);
                }
                position = end;
            } else {
                val = source.slice(position, end);
                position = end;
                if (triple) {
                    const v392 = -2;
                    val = val.slice(2, v392);
                    const v393 = val[1];
                    const v394 = v393 == '\n';
                    if (v394) {
                        const v395 = val[0];
                        const v396 = val.slice(2);
                        val = v395 + v396;
                    } else {
                        const v397 = val[1];
                        const v398 = v397 == '\r';
                        const v399 = val[2];
                        const v400 = v399 == '\n';
                        const v401 = v398 && v400;
                        if (v401) {
                            const v402 = val[0];
                            const v403 = val.slice(3);
                            val = v402 + v403;
                        }
                    }
                }
            }
            position = skipWhiteSpaces(source, position);
            c = source[position];
            const v404 = c != ',';
            const v405 = c && v404;
            const v406 = c != '\n';
            const v407 = v405 && v406;
            const v408 = c != '#';
            const v409 = v407 && v408;
            const v410 = c != '}';
            const v411 = v409 && v410;
            const v412 = c != ']';
            const v413 = v411 && v412;
            const v414 = c != '=';
            const v415 = v413 && v414;
            if (v415) {
                const v416 = error('Unexpected character after end of string');
                throw v416;
            }
            const v417 = position--;
            v417;
            continue;
        case '\n':
        case ',':
        case undefined:
            const v418 = addKey();
            v418;
            continue;
        case '[':
        case '{':
            const v419 = c == '[';
            if (v419) {
                stop = ']';
            } else {
                stop = '}';
            }
            const v420 = inlineTypes.length;
            const v421 = !v420;
            const v422 = defineKey && v421;
            if (v422) {
                if (key) {
                    const v423 = 'Unexpected ' + c;
                    const v424 = error(v423);
                    throw v424;
                }
                end = fragment(source, position);
                const v425 = position + 1;
                const v426 = source[v425];
                const v427 = v426 == c;
                if (v427) {
                    const v428 = end - 2;
                    const v429 = source[v428];
                    const v430 = v429 != stop;
                    if (v430) {
                        const v431 = 'Missing ' + stop;
                        const v432 = v431 + stop;
                        const v433 = error(v432);
                        throw v433;
                    }
                    const v434 = position + 2;
                    const v435 = end - 2;
                    const v436 = source.slice(v434, v435);
                    const v437 = scope.useArray(v436);
                    v437;
                } else {
                    const v438 = position + 1;
                    const v439 = end - 1;
                    const v440 = source.slice(v438, v439);
                    const v441 = scope.use(v440);
                    v441;
                }
                position = end;
            } else {
                if (defineKey) {
                    if (key) {
                        const v442 = 'Unexpected ' + c;
                        const v443 = error(v442);
                        throw v443;
                    }
                    const v444 = c == '[';
                    const v445 = scope.enterArray(v444);
                    v445;
                    const v446 = inlineTypes.push(stop);
                    v446;
                } else {
                    if (val) {
                        const v447 = 'Unexpected ' + c;
                        const v448 = error(v447);
                        throw v448;
                    }
                    const v449 = c == '[';
                    const v450 = scope.enter(key, v449);
                    v450;
                    const v451 = inlineTypes.push(stop);
                    v451;
                    key = '';
                    defineKey = true;
                }
            }
            continue;
        case ']':
        case '}':
            if (key) {
                const v452 = addKey();
                v452;
            }
            const v453 = inlineTypes.pop();
            const v454 = v453 != c;
            if (v454) {
                const v455 = 'Unexpected ' + c;
                const v456 = error(v455);
                throw v456;
            }
            const v457 = scope.exit();
            v457;
            const v458 = position + 1;
            position = skipWhiteSpaces(source, v458);
            c = source[position];
            const v459 = c != ',';
            const v460 = c && v459;
            const v461 = c != '\n';
            const v462 = v460 && v461;
            const v463 = c != '#';
            const v464 = v462 && v463;
            const v465 = c != '}';
            const v466 = v464 && v465;
            const v467 = c != ']';
            const v468 = v466 && v467;
            if (v468) {
                const v469 = error('Unexpected character after end of scope');
                throw v469;
            }
            const v470 = position--;
            v470;
            continue;
        case '=':
            if (defineKey) {
                const v471 = !key;
                if (v471) {
                    const v472 = 'Missing key before ' + c;
                    const v473 = error(v472);
                    throw v473;
                }
                defineKey = false;
            } else {
                const v474 = 'Unexpected ' + c;
                const v475 = error(v474);
                throw v475;
            }
            continue;
        default:
            if (defineKey) {
                key += c;
            } else {
                val += c;
            }
        }
        v375 = (c = source[v374]) || key;
    }
    const v476 = inlineTypes.length;
    if (v476) {
        const v477 = inlineTypes.pop();
        const v478 = 'Missing ' + v477;
        const v479 = error(v478);
        throw v479;
    }
    const v480 = scope.data;
    return v480;
};
const skipWhiteSpaces = function (str, x = 0) {
    let c;
    const v481 = x++;
    const v482 = c == ' ';
    const v483 = c == '\t';
    const v484 = v482 || v483;
    const v485 = c == '\r';
    const v486 = v484 || v485;
    let v487 = (c = str[v481]) && v486;
    while (v487) {
        ;
        v487 = (c = str[v481]) && v486;
    }
    const v488 = x - 1;
    return v488;
};
const fragment = function (str, x = 0, allowTriple = false) {
    let c = str[x];
    let end;
    let start = c;
    let stop = c;
    let swim = true;
    let errorOnLineBreak = false;
    switch (c) {
    case '"':
    case '\'':
        end = x + 1;
        const v489 = x + 1;
        const v490 = str[v489];
        const v491 = v490 == c;
        const v492 = allowTriple && v491;
        const v493 = x + 2;
        const v494 = str[v493];
        const v495 = v494 == c;
        const v496 = v492 && v495;
        if (v496) {
            const v497 = c + c;
            stop = v497 + c;
            end += 2;
        } else {
            errorOnLineBreak = true;
        }
        const v498 = c == '\'';
        if (v498) {
            const v499 = str.indexOf(stop, end);
            end = v499 + 1;
        } else {
            const v500 = str.indexOf(stop, end);
            while (end = v500 + 1) {
                let free = true;
                let s = end - 1;
                const v501 = --s;
                const v502 = str[v501];
                let v503 = v502 == '\\';
                while (v503) {
                    const v504 = !free;
                    free = v504;
                    v503 = v502 == '\\';
                }
                if (free) {
                    break;
                }
            }
        }
        const v505 = !end;
        if (v505) {
            const v506 = 'Missing ' + stop;
            const v507 = v506 + ' closer';
            const v508 = error(v507);
            throw v508;
        }
        const v509 = c != stop;
        if (v509) {
            end += 2;
        } else {
            if (errorOnLineBreak) {
                const v510 = x + 1;
                const v511 = str.indexOf('\n', v510);
                let nextLineBreak = v511 + 1;
                const v512 = nextLineBreak < end;
                const v513 = nextLineBreak && v512;
                if (v513) {
                    position = nextLineBreak - 2;
                    const v514 = error('Forbidden end-of-line character in single-line string');
                    throw v514;
                }
            }
        }
        return end;
    case '(':
        stop = ')';
        break;
    case '{':
        stop = '}';
        break;
    case '[':
        stop = ']';
        break;
    case '<':
        stop = '>';
        break;
    default:
        swim = false;
    }
    let depth = 0;
    const v515 = ++x;
    while (c = str[v515]) {
        const v516 = c == stop;
        if (v516) {
            const v517 = depth == 0;
            if (v517) {
                const v518 = x + 1;
                return v518;
            }
            const v519 = depth--;
            v519;
        } else {
            const v520 = c == '"';
            const v521 = c == '\'';
            const v522 = v520 || v521;
            if (v522) {
                let end = fragment(str, x, allowTriple);
                x = end - 1;
            } else {
                const v523 = c == start;
                const v524 = swim && v523;
                if (v524) {
                    const v525 = depth++;
                    v525;
                }
            }
        }
    }
    const v526 = 'Missing ' + stop;
    const v527 = error(v526);
    throw v527;
};
const Scope = function Scope(data = {}) {
    this.data = data;
    this.scopeList = [];
};
const getCurrentScope = function getCurrentScope() {
    const v528 = this.scopeList;
    const v529 = this.scopeList;
    const v530 = v529.length;
    const v531 = v530 - 1;
    const v532 = v528[v531];
    return v532;
};
Scope.getCurrentScope = getCurrentScope;
const getFullScope = function getFullScope(extra = null) {
    let result = [];
    let scope;
    const v533 = this.scopeList;
    for (scope of v533) {
        const v534 = scope.elements;
        result = result.concat(v534);
    }
    if (extra) {
        result = result.concat(extra);
    }
    return result;
};
Scope.getFullScope = getFullScope;
const set = function set(key, val) {
    let keyElements = splitElements(key);
    key = keyElements.pop();
    let elements = this.getFullScope(keyElements);
    const v535 = this.data;
    let data = getTable(v535, elements);
    const v536 = typeof data;
    const v537 = v536 == 'string';
    if (v537) {
        return data;
    }
    data[key] = val;
};
Scope.set = set;
const push = function push(val) {
    const v538 = this.scopeList;
    const v539 = v538.length;
    const v540 = !v539;
    if (v540) {
        const v541 = this.data;
        const v542 = Array.isArray(v541);
        const v543 = !v542;
        if (v543) {
            let data = this.data;
            this.data = [];
            const v544 = this.data;
            const v545 = Object.assign(v544, data);
            v545;
        }
        const v546 = this.data;
        const v547 = v546.push(val);
        v547;
        const v548 = this.data;
        return v548;
    }
    let elements = this.getFullScope();
    let momName = elements.pop();
    const v549 = this.data;
    let data = getTable(v549, elements);
    const v550 = typeof data;
    const v551 = v550 == 'string';
    if (v551) {
        return data;
    }
    let mom = data[momName];
    const v552 = typeof mom;
    switch (v552) {
    case 'object':
        const v553 = Array.isArray(mom);
        if (v553) {
            break;
        }
    case undefined:
        const v554 = Array();
        data[momName] = v554;
        const v555 = data[momName];
        const v556 = Object.assign(v555, mom);
        v556;
        mom = data[momName];
        break;
    default:
        const v557 = elements.join('"].["');
        const v558 = '["' + v557;
        const v559 = v558 + '"].["';
        const v560 = v559 + momName;
        const v561 = v560 + '"] must be an object';
        return v561;
    }
    const v562 = mom.push(val);
    v562;
    return mom;
};
Scope.push = push;
const use = function use(raw) {
    const scope = globalScope(raw);
    const currentScope = this.getCurrentScope();
    const v563 = currentScope.isGlobal;
    const v564 = currentScope && v563;
    if (v564) {
        const v565 = this.scopeList;
        const v566 = v565.pop();
        v566;
    }
    const v567 = this.scopeList;
    const v568 = v567.push(scope);
    v568;
    const v569 = this.data;
    const v570 = this.getFullScope();
    const v571 = getTable(v569, v570);
    v571;
};
Scope.use = use;
const useArray = function useArray(raw) {
    const v572 = this.use(raw);
    v572;
    const v573 = {};
    let mom = this.push(v573);
    const v574 = mom.length;
    let index = v574 - 1;
    const v575 = raw + '.';
    const v576 = v575 + index;
    const v577 = this.use(v576);
    v577;
};
Scope.useArray = useArray;
const enter = function enter(raw, isArray = false) {
    const v578 = this.scopeList;
    const v579 = raw.trimEnd();
    const v580 = inlineScope(v579);
    const v581 = v578.push(v580);
    v581;
    let elements = this.getFullScope();
    let baby = elements.pop();
    const v582 = this.data;
    let mom = getTable(v582, elements);
    const v583 = baby in mom;
    const v584 = !v583;
    if (v584) {
        const v585 = [];
        const v586 = {};
        let v587;
        if (isArray) {
            v587 = v585;
        } else {
            v587 = v586;
        }
        mom[baby] = v587;
    }
};
Scope.enter = enter;
const enterArray = function enterArray(isArray = false) {
    const v588 = [];
    const v589 = {};
    let v590;
    if (isArray) {
        v590 = v588;
    } else {
        v590 = v589;
    }
    let array = this.push(v590);
    const v591 = this.scopeList;
    const v592 = array.length;
    const v593 = v592 - 1;
    const v594 = inlineScope(v593);
    const v595 = v591.push(v594);
    v595;
};
Scope.enterArray = enterArray;
const exit = function exit() {
    let scope;
    const v596 = this.scopeList;
    const v597 = scope.isGlobal;
    let v598 = (scope = v596.pop()) && v597;
    while (v598) {
        ;
        v598 = (scope = v596.pop()) && v597;
    }
};
Scope.exit = exit;
Scope['is_class'] = true;
const globalScope = raw => {
    const v599 = splitElements(raw);
    const v600 = {};
    v600.isGlobal = true;
    v600.elements = v599;
    return v600;
};
const inlineScope = raw => {
    const v601 = splitElements(raw);
    const v602 = {};
    v602.isInline = true;
    v602.elements = v601;
    return v602;
};
const splitElements = function (raw) {
    const v603 = typeof raw;
    const v604 = v603 != 'string';
    if (v604) {
        raw = String(raw);
    }
    const v605 = -1;
    let x = v605;
    let elt = '';
    let elements = [];
    let end;
    let c;
    const v606 = ++x;
    while (c = raw[v606]) {
        switch (c) {
        case '.':
            const v607 = !elt;
            if (v607) {
                const v608 = error('Unexpected "."');
                throw v608;
            }
            const v609 = elements.push(elt);
            v609;
            elt = '';
            continue;
        case '"':
        case '\'':
            end = fragment(raw, x);
            const v610 = x + 2;
            const v611 = end == v610;
            if (v611) {
                const v612 = error('Empty string key');
                throw v612;
            }
            const v613 = x + 1;
            const v614 = end - 1;
            elt += raw.slice(v613, v614);
            x = end - 1;
            continue;
        default:
            elt += c;
        }
    }
    if (elt) {
        const v615 = elements.push(elt);
        v615;
    }
    return elements;
};
const getTable = function (data, elements = []) {
    let elt;
    for (elt of elements) {
        const v616 = elt in data;
        const v617 = !v616;
        if (v617) {
            const v618 = {};
            data[elt] = v618;
        } else {
            const v619 = data[elt];
            const v620 = typeof v619;
            const v621 = v620 != 'object';
            if (v621) {
                const v622 = elements.indexOf(elt);
                const v623 = v622 + 1;
                const v624 = elements.slice(0, v623);
                const v625 = v624.join('"].["');
                const v626 = '["' + v625;
                let path = v626 + '"]';
                const v627 = path + ' must be an object';
                const v628 = error(v627);
                throw v628;
            }
        }
        data = data[elt];
    }
    return data;
};
const trueValue = function (val) {
    const v629 = val[0];
    switch (v629) {
    case undefined:
        return '';
    case '"':
        const v630 = -1;
        const v631 = val.slice(1, v630);
        const v632 = escape(v631);
        return v632;
    case '\'':
        const v633 = -1;
        const v634 = val.slice(1, v633);
        return v634;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '+':
    case '-':
    case '.':
        let num = val;
        const v635 = num.indexOf('_');
        const v636 = -1;
        const v637 = v635 != v636;
        if (v637) {
            num = num.replace(/_/g, '');
        }
        const v638 = isNaN(num);
        const v639 = !v638;
        if (v639) {
            const v640 = +num;
            return v640;
        }
        const v641 = val[4];
        const v642 = v641 == '-';
        const v643 = val[7];
        const v644 = v643 == '-';
        const v645 = v642 && v644;
        if (v645) {
            let date = new Date(val);
            const v646 = date.toString();
            const v647 = v646 != 'Invalid Date';
            if (v647) {
                return date;
            }
        } else {
            const v648 = val[2];
            const v649 = v648 == ':';
            const v650 = val[5];
            const v651 = v650 == ':';
            const v652 = v649 && v651;
            const v653 = val.length;
            const v654 = v653 >= 7;
            const v655 = v652 && v654;
            if (v655) {
                const v656 = '0000-01-01T' + val;
                const v657 = v656 + 'Z';
                let date = new Date(v657);
                const v658 = date.toString();
                const v659 = v658 != 'Invalid Date';
                if (v659) {
                    return date;
                }
            }
        }
        return val;
    }
    switch (val) {
    case 'true':
        return true;
    case 'false':
        return false;
    case 'nan':
    case 'NaN':
        return false;
    case 'null':
        return null;
    case 'inf':
    case '+inf':
    case 'Infinity':
    case '+Infinity':
        return Infinity;
    case '-inf':
    case '-Infinity':
        const v660 = -Infinity;
        return v660;
    }
    return val;
};
const escape = function (str) {
    let i;
    let offset = 0;
    let result = '';
    let elt;
    const v661 = str.indexOf('\\', offset);
    while (i = v661 + 1) {
        const v662 = i - 1;
        result += str.slice(offset, v662);
        const v663 = str[i];
        switch (v663) {
        case '\\':
            result += '\\';
            break;
        case '"':
            result += '"';
            break;
        case '\r':
            const v664 = i + 1;
            const v665 = str[v664];
            const v666 = v665 == '\n';
            if (v666) {
                const v667 = i++;
                v667;
            }
        case '\n':
            break;
        case 'b':
            result += '\b';
            break;
        case 't':
            result += '\t';
            break;
        case 'n':
            result += '\n';
            break;
        case 'f':
            result += '\f';
            break;
        case 'r':
            result += '\r';
            break;
        case 'u':
            const v668 = i + 1;
            const v669 = str.substr(v668, 4);
            const v670 = parseInt(v669, 16);
            result += String.fromCharCode(v670);
            i += 4;
            break;
        case 'U':
            const v671 = i + 1;
            const v672 = str.substr(v671, 8);
            const v673 = parseInt(v672, 16);
            result += String.fromCharCode(v673);
            i += 8;
            break;
        default:
            const v674 = str[i];
            const v675 = error(v674);
            throw v675;
        }
        offset = i + 1;
    }
    const v676 = str.slice(offset);
    const v677 = result + v676;
    return v677;
};
const getLocation = function () {
    let c = source[position];
    let offset = position;
    const v678 = c == '\n';
    if (v678) {
        const v679 = offset--;
        v679;
    }
    let line = 1;
    let i = source.lastIndexOf('\n', offset);
    let stop = source.indexOf('\n', offset);
    const v680 = -1;
    const v681 = stop == v680;
    if (v681) {
        stop = Infinity;
    }
    const v682 = c == ',';
    const v683 = c == '\n';
    const v684 = v682 || v683;
    if (v684) {
        offset = i + 1;
    }
    const v685 = -1;
    const v686 = i == v685;
    if (v686) {
        const v687 = offset + 1;
        const v688 = source.slice(0, stop);
        const v689 = v688.trim();
        const v690 = {};
        v690.line = line;
        v690.column = v687;
        v690.position = offset;
        v690.lineContent = v689;
        return v690;
    }
    const v691 = offset - i;
    const column = v691 + 1;
    const v692 = i + 1;
    const v693 = source.slice(v692, stop);
    const lineContent = v693.trim();
    const v694 = line++;
    v694;
    const v695 = i - 1;
    const v696 = -1;
    let v697 = (i = source.lastIndexOf('\n', v695)) != v696;
    while (v697) {
        const v698 = line++;
        v698;
        v697 = (i = source.lastIndexOf('\n', v695)) != v696;
    }
    const v699 = {};
    v699.line = line;
    v699.column = column;
    v699.position = offset;
    v699.lineContent = lineContent;
    return v699;
};
const error = function (msg) {
    let loc = getLocation();
    const v700 = loc.line;
    let lineString = String(v700);
    const v701 = '\n' + lineString;
    const v702 = v701 + ' |  ';
    const v703 = loc.lineContent;
    const v704 = v702 + v703;
    msg += v704 + '\n';
    const v705 = lineString.length;
    const v706 = loc.column;
    const v707 = v705 + v706;
    const v708 = v707 + 2;
    const v709 = ' '.repeat(v708);
    msg += v709 + '^';
    const v710 = SyntaxError(msg);
    return v710;
};
const ION = function () {
    let result = '';
    let arg;
    for (arg of arguments) {
        const v711 = typeof arg;
        const v712 = v711 == 'string';
        const v713 = arg[0];
        if (v712) {
            result = arg;
        } else {
            result = v713;
        }
    }
    const v714 = HUML.parse(result);
    return v714;
};
ION.parse = parse;
const v724 = function (file, cb = null) {
    const v715 = !fs;
    if (v715) {
        fs = require('fs');
    }
    if (cb) {
        const v720 = (err, data) => {
            if (err) {
                const v716 = cb(err, null);
                v716;
            } else {
                try {
                    const v717 = parse(data);
                    const v718 = cb(null, v717);
                    v718;
                } catch (err) {
                    const v719 = cb(err, null);
                    v719;
                }
            }
        };
        const v721 = fs.readFile(file, v720);
        v721;
    } else {
        const v722 = fs.readFileSync(file);
        const v723 = parse(v722);
        return v723;
    }
};
ION.parseFile = v724;
module.exports = ION;