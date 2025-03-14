'use strict';
var stream = require('stream');
var fs = require('fs');
var deepAssign = require('lodash.merge');
const v381 = {};
module.exports = v381;
var exports = module.exports;
var CHAR_TAB = 9;
var CHAR_NEWLINE = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_LEFT_PARENTHESIS = 40;
var CHAR_RIGHT_PARENTHESIS = 41;
var CHAR_PERIOD = 46;
var CHAR_SLASH = 47;
var CHAR_EQUALS = 61;
var CHAR_ARRAY_START = 91;
var CHAR_ARRAY_END = 93;
var CHAR_BLOCK_START = 123;
var CHAR_BLOCK_END = 125;
var KEYWORD_DEF = 'def';
var KEYWORD_IF = 'if';
var WHITESPACE_CHARACTERS = {};
WHITESPACE_CHARACTERS[CHAR_TAB] = true;
WHITESPACE_CHARACTERS[CHAR_NEWLINE] = true;
WHITESPACE_CHARACTERS[CHAR_CARRIAGE_RETURN] = true;
WHITESPACE_CHARACTERS[CHAR_SPACE] = true;
var SINGLE_LINE_COMMENT_START = '//';
var BLOCK_COMMENT_START = '/*';
var BLOCK_COMMENT_END = '*/';
var SPECIAL_KEYS = {};
SPECIAL_KEYS.repositories = parseRepositoryClosure;
SPECIAL_KEYS.dependencies = parseDependencyClosure;
SPECIAL_KEYS.plugins = parsePluginsClosure;
var DEPS_KEYWORD_STRING_PATTERN = '[ \\t]*([A-Za-z0-9_-]+)[ \\t]*';
var DEPS_KEYWORD_STRING_REGEX = RegExp(DEPS_KEYWORD_STRING_PATTERN);
var DEPS_EASY_GAV_STRING_REGEX = RegExp('(["\']?)([\\w.-]+):([\\w.-]+):([\\w\\[\\]\\(\\),+.-]+)\\1');
const v382 = DEPS_KEYWORD_STRING_PATTERN + '(?:\\((.*)\\)|(.*))';
var DEPS_HARD_GAV_STRING_REGEX = RegExp(v382);
const v383 = DEPS_KEYWORD_STRING_PATTERN + '\\(((["\']?)(.*)\\3)\\)[ \\t]*\\{';
var DEPS_ITEM_BLOCK_REGEX = RegExp(v383);
var DEPS_EXCLUDE_LINE_REGEX = RegExp('exclude[ \\t]+([^\\n]+)', 'g');
var PLUGINS_LINE_PATTERN = RegExp('(id|version)[ \\t]*\\(?(["\']?)([A-Za-z0-9._-]+)\\2\\)?', 'g');
const deepParse = function (chunk, state, keepFunctionCalls, skipEmptyValues) {
    var out = {};
    var chunkLength = chunk.length;
    var character = 0;
    var tempString = '';
    var commentText = '';
    var currentKey = '';
    var parsingKey = true;
    var isBeginningOfLine = true;
    const v384 = typeof skipEmptyValues;
    const v385 = v384 === 'undefined';
    if (v385) {
        skipEmptyValues = true;
    }
    const v386 = state.index;
    let v387 = v386 < chunkLength;
    while (v387) {
        const v390 = state.index;
        character = chunk[v390];
        const v391 = isWhitespace(character);
        const v392 = isBeginningOfLine && v391;
        if (v392) {
            continue;
        }
        const v393 = state.comment;
        const v394 = v393.parsing;
        const v395 = !v394;
        const v396 = v395 && isBeginningOfLine;
        const v397 = isStartOfComment(tempString);
        const v398 = v396 && v397;
        if (v398) {
            isBeginningOfLine = false;
            const v399 = isSingleLineComment(tempString);
            if (v399) {
                const v400 = state.comment;
                const v401 = v400.setSingleLine();
                v401;
            } else {
                const v402 = state.comment;
                const v403 = v402.setMultiLine();
                v403;
            }
            continue;
        }
        const v404 = state.comment;
        const v405 = v404.multiLine;
        const v406 = isEndOfMultiLineComment(commentText);
        const v407 = v405 && v406;
        if (v407) {
            const v408 = state.comment;
            const v409 = v408.reset();
            v409;
            isBeginningOfLine = true;
            tempString = '';
            commentText = '';
            continue;
        }
        const v410 = state.comment;
        const v411 = v410.parsing;
        const v412 = character != CHAR_NEWLINE;
        const v413 = v411 && v412;
        if (v413) {
            commentText += String.fromCharCode(character);
            continue;
        }
        const v414 = state.comment;
        const v415 = v414.parsing;
        const v416 = isLineBreakCharacter(character);
        const v417 = v415 && v416;
        if (v417) {
            const v418 = state.comment;
            const v419 = v418.singleLine;
            if (v419) {
                const v420 = state.comment;
                const v421 = v420.reset();
                v421;
                isBeginningOfLine = true;
                currentKey = '';
                tempString = '';
                commentText = '';
                continue;
            } else {
                continue;
            }
        }
        const v422 = !keepFunctionCalls;
        const v423 = parsingKey && v422;
        const v424 = character === CHAR_LEFT_PARENTHESIS;
        const v425 = v423 && v424;
        if (v425) {
            const v426 = skipFunctionCall(chunk, state);
            v426;
            currentKey = '';
            tempString = '';
            isBeginningOfLine = true;
            continue;
        }
        const v427 = isLineBreakCharacter(character);
        if (v427) {
            const v428 = !currentKey;
            const v429 = v428 && tempString;
            if (v429) {
                if (parsingKey) {
                    const v430 = isFunctionCall(tempString);
                    const v431 = !keepFunctionCalls;
                    const v432 = v430 && v431;
                    if (v432) {
                        continue;
                    } else {
                        currentKey = tempString.trim();
                        tempString = '';
                    }
                }
            }
            const v433 = !skipEmptyValues;
            const v434 = currentKey && v433;
            const v435 = tempString || v434;
            if (v435) {
                const v436 = trimWrappingQuotes(tempString);
                const v437 = addValueToStructure(out, currentKey, v436);
                v437;
                currentKey = '';
                tempString = '';
            }
            parsingKey = true;
            isBeginningOfLine = true;
            const v438 = state.comment;
            const v439 = v438.reset();
            v439;
            continue;
        }
        const v440 = !parsingKey;
        const v441 = !tempString;
        const v442 = v440 && v441;
        const v443 = character === CHAR_ARRAY_START;
        const v444 = v442 && v443;
        if (v444) {
            const v445 = parseArray(chunk, state);
            out[currentKey] = v445;
            currentKey = '';
            tempString = '';
            continue;
        }
        const v446 = character === CHAR_BLOCK_START;
        if (v446) {
            const v447 = state.index;
            const v448 = v447++;
            v448;
            const v449 = SPECIAL_KEYS.hasOwnProperty(currentKey);
            if (v449) {
                const v450 = SPECIAL_KEYS[currentKey](chunk, state);
                out[currentKey] = v450;
            } else {
                const v451 = out[currentKey];
                if (v451) {
                    const v452 = {};
                    const v453 = out[currentKey];
                    const v454 = deepParse(chunk, state, keepFunctionCalls, skipEmptyValues);
                    const v455 = deepAssign(v452, v453, v454);
                    out[currentKey] = v455;
                } else {
                    const v456 = deepParse(chunk, state, keepFunctionCalls, skipEmptyValues);
                    out[currentKey] = v456;
                }
            }
            currentKey = '';
        } else {
            const v457 = character === CHAR_BLOCK_END;
            if (v457) {
                currentKey = '';
                tempString = '';
                break;
            } else {
                const v458 = isDelimiter(character);
                const v459 = v458 && parsingKey;
                if (v459) {
                    const v460 = isKeyword(tempString);
                    if (v460) {
                        const v461 = tempString === KEYWORD_DEF;
                        if (v461) {
                            tempString = fetchDefinedNameOrSkipFunctionDefinition(chunk, state);
                        } else {
                            const v462 = tempString === KEYWORD_IF;
                            if (v462) {
                                const v463 = skipIfStatement(chunk, state);
                                v463;
                                currentKey = '';
                                tempString = '';
                                continue;
                            }
                        }
                    }
                    currentKey = tempString;
                    tempString = '';
                    parsingKey = false;
                    const v464 = !currentKey;
                    if (v464) {
                        continue;
                    }
                } else {
                    const v465 = !tempString;
                    const v466 = isDelimiter(character);
                    const v467 = v465 && v466;
                    if (v467) {
                        continue;
                    }
                    tempString += String.fromCharCode(character);
                    const v468 = character === CHAR_SLASH;
                    const v469 = isStartOfComment(tempString);
                    const v470 = v468 || v469;
                    isBeginningOfLine = isBeginningOfLine && v470;
                }
            }
        }
        const v388 = state.index;
        const v389 = v388++;
        v387 = v386 < chunkLength;
    }
    const v471 = trimWrappingQuotes(tempString);
    const v472 = addValueToStructure(out, currentKey, v471);
    v472;
    return out;
};
const skipIfStatement = function (chunk, state) {
    const v473 = skipFunctionCall(chunk, state);
    v473;
    var character = '';
    var hasFoundTheCurlyBraces = false;
    var hasFoundAStatementWithoutBraces = false;
    var curlyBraceCount = 0;
    var max = chunk.length;
    const v474 = state.index;
    let v475 = v474 < max;
    while (v475) {
        const v478 = state.index;
        character = chunk[v478];
        if (hasFoundAStatementWithoutBraces) {
            const v479 = isLineBreakCharacter(character);
            if (v479) {
                break;
            }
        } else {
            const v480 = character === CHAR_BLOCK_START;
            if (v480) {
                hasFoundTheCurlyBraces = true;
                const v481 = curlyBraceCount++;
                v481;
            } else {
                const v482 = character === CHAR_BLOCK_END;
                if (v482) {
                    const v483 = curlyBraceCount--;
                    v483;
                } else {
                    const v484 = !hasFoundTheCurlyBraces;
                    const v485 = isWhitespace(character);
                    const v486 = !v485;
                    const v487 = v484 && v486;
                    if (v487) {
                        hasFoundAStatementWithoutBraces = true;
                    }
                }
            }
            const v488 = curlyBraceCount === 0;
            const v489 = hasFoundTheCurlyBraces && v488;
            if (v489) {
                break;
            }
        }
        const v476 = state.index;
        const v477 = v476++;
        v475 = v474 < max;
    }
    const v490 = curlyBraceCount === 0;
    return v490;
};
const skipFunctionDefinition = function (chunk, state) {
    var start = state.index;
    var parenthesisNest = 1;
    const v491 = state.index;
    const v492 = ++v491;
    var character = chunk[v492];
    const v493 = character !== undefined;
    let v494 = v493 && parenthesisNest;
    while (v494) {
        const v495 = character === CHAR_LEFT_PARENTHESIS;
        if (v495) {
            const v496 = parenthesisNest++;
            v496;
        } else {
            const v497 = character === CHAR_RIGHT_PARENTHESIS;
            if (v497) {
                const v498 = parenthesisNest--;
                v498;
            }
        }
        const v499 = state.index;
        const v500 = ++v499;
        character = chunk[v500];
        v494 = v493 && parenthesisNest;
    }
    const v501 = character !== CHAR_BLOCK_START;
    let v502 = character && v501;
    while (v502) {
        const v503 = state.index;
        const v504 = ++v503;
        character = chunk[v504];
        v502 = character && v501;
    }
    const v505 = state.index;
    const v506 = ++v505;
    character = chunk[v506];
    var blockNest = 1;
    const v507 = character !== undefined;
    let v508 = v507 && blockNest;
    while (v508) {
        const v509 = character === CHAR_BLOCK_START;
        if (v509) {
            const v510 = blockNest++;
            v510;
        } else {
            const v511 = character === CHAR_BLOCK_END;
            if (v511) {
                const v512 = blockNest--;
                v512;
            }
        }
        const v513 = state.index;
        const v514 = ++v513;
        character = chunk[v514];
        v508 = v507 && blockNest;
    }
    const v515 = state.index;
    const v516 = v515--;
    v516;
};
const parseDependencyClosure = function (chunk, state) {
    const v517 = parseSpecialClosure(chunk, state, createStructureForDependencyItem);
    return v517;
};
const createStructureForDependencyItem = function (data) {
    var out = {};
    out.group = '';
    out.name = '';
    out.version = '';
    out.type = '';
    var compileBlockInfo = findDependencyItemBlock(data);
    const v518 = compileBlockInfo['gav'];
    if (v518) {
        const v519 = compileBlockInfo['gav'];
        out = parseGavString(v519);
        const v520 = compileBlockInfo['type'];
        out['type'] = v520;
        const v521 = compileBlockInfo['excludes'];
        out['excludes'] = v521;
    } else {
        out = parseGavString(data);
        var parsed = DEPS_KEYWORD_STRING_REGEX.exec(data);
        const v522 = parsed[1];
        const v523 = parsed && v522;
        out['type'] = v523 || '';
        out['excludes'] = [];
    }
    return out;
};
const parsePluginsClosure = function (chunk, state) {
    const v524 = parseSpecialClosure(chunk, state, createStructureForPlugin);
    return v524;
};
const createStructureForPlugin = function (pluginRow) {
    var out = {};
    var match;
    while (match = PLUGINS_LINE_PATTERN.exec(pluginRow)) {
        const v525 = match[1];
        const v526 = match && v525;
        if (v526) {
            const v527 = match[1];
            const v528 = match[3];
            out[v527] = v528;
        }
    }
    return out;
};
const findFirstSpaceOrTabPosition = function (input) {
    var position = input.indexOf(' ');
    const v529 = -1;
    const v530 = position === v529;
    if (v530) {
        position = input.indexOf('\t');
    }
    return position;
};
const findDependencyItemBlock = function (data) {
    var matches = DEPS_ITEM_BLOCK_REGEX.exec(data);
    const v531 = matches[2];
    const v532 = matches && v531;
    if (v532) {
        var excludes = [];
        var match;
        while (match = DEPS_EXCLUDE_LINE_REGEX.exec(data)) {
            const v533 = match[0];
            const v534 = match[0];
            const v535 = findFirstSpaceOrTabPosition(v534);
            const v536 = v533.substring(v535);
            const v537 = parseMapNotation(v536);
            const v538 = excludes.push(v537);
            v538;
        }
        const v539 = matches[2];
        const v540 = matches[1];
        const v541 = {};
        v541.gav = v539;
        v541.type = v540;
        v541.excludes = excludes;
        return v541;
    }
    const v542 = [];
    return v542;
};
const parseGavString = function (gavString) {
    var out = {};
    out.group = '';
    out.name = '';
    out.version = '';
    var easyGavStringMatches = DEPS_EASY_GAV_STRING_REGEX.exec(gavString);
    if (easyGavStringMatches) {
        const v543 = easyGavStringMatches[2];
        out['group'] = v543;
        const v544 = easyGavStringMatches[3];
        out['name'] = v544;
        const v545 = easyGavStringMatches[4];
        out['version'] = v545;
    } else {
        const v546 = gavString.indexOf('project(');
        const v547 = -1;
        const v548 = v546 !== v547;
        if (v548) {
            const v549 = gavString.match(/(project\([^\)]+\))/g);
            const v550 = v549[0];
            out['name'] = v550;
        } else {
            var hardGavMatches = DEPS_HARD_GAV_STRING_REGEX.exec(gavString);
            const v551 = hardGavMatches[3];
            const v552 = hardGavMatches[2];
            const v553 = v551 || v552;
            const v554 = hardGavMatches && v553;
            if (v554) {
                const v555 = hardGavMatches[3];
                const v556 = hardGavMatches[2];
                const v557 = v555 || v556;
                out = parseMapNotationWithFallback(out, v557);
            } else {
                const v558 = findFirstSpaceOrTabPosition(gavString);
                const v559 = gavString.slice(v558);
                out = parseMapNotationWithFallback(out, gavString, v559);
            }
        }
    }
    return out;
};
const parseMapNotationWithFallback = function (out, string, name) {
    var outFromMapNotation = parseMapNotation(string);
    const v560 = outFromMapNotation['name'];
    if (v560) {
        out = outFromMapNotation;
    } else {
        let v561;
        if (name) {
            v561 = name;
        } else {
            v561 = string;
        }
        out['name'] = v561;
    }
    return out;
};
const parseMapNotation = function (input) {
    var out = {};
    var currentKey = '';
    var quotation = '';
    var i = 0;
    var max = input.length;
    let v562 = i < max;
    while (v562) {
        const v564 = input[i];
        const v565 = v564 === ':';
        if (v565) {
            currentKey = currentKey.trim();
            out[currentKey] = '';
            var innerLoop = 0;
            var i = i + 1;
            let v566 = i < max;
            while (v566) {
                const v568 = innerLoop === 0;
                if (v568) {
                    const v569 = input[i];
                    const v570 = isWhitespaceLiteral(v569);
                    if (v570) {
                        continue;
                    }
                }
                const v571 = input[i];
                const v572 = v571 === '"';
                const v573 = input[i];
                const v574 = v573 === '\'';
                const v575 = v572 || v574;
                if (v575) {
                    quotation = input[i];
                    continue;
                }
                const v576 = input[i];
                const v577 = v576 === ',';
                if (v577) {
                    const v578 = out[currentKey];
                    const v579 = v578.trim();
                    out[currentKey] = v579;
                    currentKey = '';
                    break;
                }
                const v580 = input[i];
                out[currentKey] += v580;
                const v581 = innerLoop++;
                v581;
                const v567 = i++;
                v566 = i < max;
            }
        } else {
            currentKey += input[i];
        }
        const v563 = i++;
        v562 = i < max;
    }
    const v582 = out[currentKey];
    if (v582) {
        const v583 = out[currentKey];
        const v584 = v583.trim();
        out[currentKey] = v584;
        const v585 = out[currentKey];
        const v586 = -1;
        const v587 = v585.slice(v586);
        const v588 = v587 === quotation;
        if (v588) {
            const v589 = out[currentKey];
            const v590 = -1;
            const v591 = v589.slice(0, v590);
            out[currentKey] = v591;
        }
    }
    return out;
};
const parseRepositoryClosure = function (chunk, state) {
    var out = [];
    var repository = deepParse(chunk, state, true, false);
    const v592 = Object.keys(repository);
    const v600 = function (item) {
        const v593 = repository[item];
        if (v593) {
            const v594 = repository[item];
            const v595 = {
                type: item,
                data: v594
            };
            const v596 = out.push(v595);
            v596;
        } else {
            const v597 = {};
            v597.name = item;
            const v598 = {
                type: 'unknown',
                data: v597
            };
            const v599 = out.push(v598);
            v599;
        }
    };
    const v601 = v592.map(v600);
    v601;
    return out;
};
const parseSpecialClosure = function (chunk, state, mapFunction) {
    var out = [];
    var openBlockCount = 1;
    var currentKey = '';
    var currentValue = '';
    var isInItemBlock = false;
    const v602 = state.index;
    const v603 = chunk.length;
    let v604 = v602 < v603;
    while (v604) {
        const v607 = state.index;
        const v608 = chunk[v607];
        const v609 = v608 === CHAR_BLOCK_START;
        if (v609) {
            const v610 = openBlockCount++;
            v610;
        } else {
            const v611 = state.index;
            const v612 = chunk[v611];
            const v613 = v612 === CHAR_BLOCK_END;
            if (v613) {
                const v614 = openBlockCount--;
                v614;
            } else {
                const v615 = state.index;
                const v616 = chunk[v615];
                currentKey += String.fromCharCode(v616);
            }
        }
        currentKey = currentKey.trim();
        const v617 = isStartOfComment(currentKey);
        if (v617) {
            var commentText = currentKey;
            const v618 = state.index;
            const v619 = state.index;
            const v620 = chunk.length;
            let v621 = v619 < v620;
            while (v621) {
                const v624 = state.index;
                const v625 = chunk[v624];
                const v626 = isCommentComplete(commentText, v625);
                if (v626) {
                    currentKey = '';
                    break;
                }
                const v627 = state.index;
                const v628 = chunk[v627];
                commentText += String.fromCharCode(v628);
                const v622 = state.index;
                const v623 = v622++;
                v621 = v619 < v620;
            }
        }
        const v629 = state.index;
        const v630 = chunk[v629];
        const v631 = isWhitespace(v630);
        const v632 = currentKey && v631;
        if (v632) {
            var character = '';
            const v633 = state.index;
            const v634 = state.index;
            const v635 = chunk.length;
            let v636 = v634 < v635;
            while (v636) {
                const v639 = state.index;
                character = chunk[v639];
                currentValue += String.fromCharCode(character);
                const v640 = character === CHAR_BLOCK_START;
                if (v640) {
                    isInItemBlock = true;
                } else {
                    const v641 = character === CHAR_BLOCK_END;
                    const v642 = isInItemBlock && v641;
                    if (v642) {
                        isInItemBlock = false;
                    } else {
                        const v643 = !isInItemBlock;
                        if (v643) {
                            const v644 = isLineBreakCharacter(character);
                            const v645 = v644 && currentValue;
                            if (v645) {
                                break;
                            }
                        }
                    }
                }
                const v637 = state.index;
                const v638 = v637++;
                v636 = v634 < v635;
            }
            const v646 = currentKey + ' ';
            const v647 = v646 + currentValue;
            const v648 = mapFunction(v647);
            const v649 = out.push(v648);
            v649;
            currentKey = '';
            currentValue = '';
        }
        const v650 = openBlockCount == 0;
        if (v650) {
            break;
        }
        const v605 = state.index;
        const v606 = v605++;
        v604 = v602 < v603;
    }
    return out;
};
const fetchDefinedNameOrSkipFunctionDefinition = function (chunk, state) {
    var character = 0;
    var temp = '';
    var isVariableDefinition = true;
    var max = chunk.length;
    const v651 = state.index;
    let v652 = v651 < max;
    while (v652) {
        const v655 = state.index;
        character = chunk[v655];
        const v656 = character === CHAR_EQUALS;
        if (v656) {
            break;
        } else {
            const v657 = character === CHAR_LEFT_PARENTHESIS;
            if (v657) {
                isVariableDefinition = false;
                const v658 = skipFunctionDefinition(chunk, state);
                v658;
                break;
            }
        }
        temp += String.fromCharCode(character);
        const v653 = state.index;
        const v654 = v653++;
        v652 = v651 < max;
    }
    if (isVariableDefinition) {
        const v659 = temp.trim();
        var values = v659.split(' ');
        const v660 = values.length;
        const v661 = v660 - 1;
        const v662 = values[v661];
        return v662;
    } else {
        return '';
    }
};
const parseArray = function (chunk, state) {
    var character = 0;
    var temp = '';
    var max = chunk.length;
    const v663 = state.index;
    let v664 = v663 < max;
    while (v664) {
        const v667 = state.index;
        character = chunk[v667];
        const v668 = character === CHAR_ARRAY_START;
        if (v668) {
            continue;
        } else {
            const v669 = character === CHAR_ARRAY_END;
            if (v669) {
                break;
            }
        }
        temp += String.fromCharCode(character);
        const v665 = state.index;
        const v666 = v665++;
        v664 = v663 < max;
    }
    const v670 = temp.split(',');
    const v673 = function (item) {
        const v671 = item.trim();
        const v672 = trimWrappingQuotes(v671);
        return v672;
    };
    const v674 = v670.map(v673);
    return v674;
};
const skipFunctionCall = function (chunk, state) {
    var openParenthesisCount = 0;
    var character = '';
    var max = chunk.length;
    const v675 = state.index;
    let v676 = v675 < max;
    while (v676) {
        const v679 = state.index;
        character = chunk[v679];
        const v680 = character === CHAR_LEFT_PARENTHESIS;
        if (v680) {
            const v681 = openParenthesisCount++;
            v681;
        } else {
            const v682 = character === CHAR_RIGHT_PARENTHESIS;
            if (v682) {
                const v683 = openParenthesisCount--;
                v683;
            }
        }
        const v684 = openParenthesisCount === 0;
        const v685 = isWhitespace(character);
        const v686 = !v685;
        const v687 = v684 && v686;
        if (v687) {
            const v688 = state.index;
            const v689 = v688++;
            v689;
            break;
        }
        const v677 = state.index;
        const v678 = v677++;
        v676 = v675 < max;
    }
    const v690 = openParenthesisCount === 0;
    return v690;
};
const addValueToStructure = function (structure, currentKey, value) {
    if (currentKey) {
        const v691 = structure.hasOwnProperty(currentKey);
        if (v691) {
            const v692 = structure[currentKey];
            const v693 = v692.constructor;
            const v694 = v693 === Array;
            if (v694) {
                const v695 = structure[currentKey];
                const v696 = getRealValue(value);
                const v697 = v695.push(v696);
                v697;
            } else {
                var oldValue = structure[currentKey];
                const v698 = getRealValue(value);
                structure[currentKey] = [
                    oldValue,
                    v698
                ];
            }
        } else {
            const v699 = getRealValue(value);
            structure[currentKey] = v699;
        }
    }
};
const getRealValue = function (value) {
    const v700 = value === 'true';
    const v701 = value === 'false';
    const v702 = v700 || v701;
    if (v702) {
        const v703 = value === 'true';
        return v703;
    }
    return value;
};
const trimWrappingQuotes = function (string) {
    var firstCharacter = string.slice(0, 1);
    const v704 = firstCharacter === '"';
    if (v704) {
        const v705 = string.replace(/^"([^"]+)"$/g, '$1');
        return v705;
    } else {
        const v706 = firstCharacter === '\'';
        if (v706) {
            const v707 = string.replace(/^'([^']+)'$/g, '$1');
            return v707;
        }
    }
    return string;
};
const isDelimiter = function (character) {
    const v708 = character === CHAR_SPACE;
    const v709 = character === CHAR_EQUALS;
    const v710 = v708 || v709;
    return v710;
};
const isWhitespace = function (character) {
    const v711 = WHITESPACE_CHARACTERS.hasOwnProperty(character);
    return v711;
};
const isWhitespaceLiteral = function (character) {
    const v712 = character.charCodeAt(0);
    const v713 = isWhitespace(v712);
    return v713;
};
const isLineBreakCharacter = function (character) {
    const v714 = character == CHAR_CARRIAGE_RETURN;
    const v715 = character == CHAR_NEWLINE;
    const v716 = v714 || v715;
    return v716;
};
const isKeyword = function (string) {
    const v717 = string === KEYWORD_DEF;
    const v718 = string === KEYWORD_IF;
    const v719 = v717 || v718;
    return v719;
};
const isSingleLineComment = function (comment) {
    const v720 = comment.slice(0, 2);
    const v721 = v720 === SINGLE_LINE_COMMENT_START;
    return v721;
};
const isStartOfComment = function (snippet) {
    const v722 = snippet === BLOCK_COMMENT_START;
    const v723 = snippet === SINGLE_LINE_COMMENT_START;
    const v724 = v722 || v723;
    return v724;
};
const isCommentComplete = function (text, next) {
    const v725 = isLineBreakCharacter(next);
    const v726 = isSingleLineComment(text);
    const v727 = v725 && v726;
    const v728 = isWhitespace(next);
    const v729 = isEndOfMultiLineComment(text);
    const v730 = v728 && v729;
    const v731 = v727 || v730;
    return v731;
};
const isEndOfMultiLineComment = function (comment) {
    const v732 = -2;
    const v733 = comment.slice(v732);
    const v734 = v733 === BLOCK_COMMENT_END;
    return v734;
};
const isFunctionCall = function (string) {
    const v735 = string.match(/\w+\(.*\);?$/);
    const v736 = v735 !== null;
    return v736;
};
const parse = function (readableStream) {
    const v754 = function (resolve, reject) {
        var out = {};
        const v745 = function (chunk) {
            const v738 = function () {
                const v737 = this._setCommentState(true, false);
                v737;
            };
            const v740 = function () {
                const v739 = this._setCommentState(false, true);
                v739;
            };
            const v742 = function () {
                const v741 = this._setCommentState(false, false);
                v741;
            };
            const v743 = function (singleLine, multiLine) {
                this.singleLine = singleLine;
                this.multiLine = multiLine;
                this.parsing = singleLine || multiLine;
            };
            const v744 = {};
            v744.parsing = false;
            v744.singleLine = false;
            v744.multiLine = false;
            v744.setSingleLine = v738;
            v744.setMultiLine = v740;
            v744.reset = v742;
            v744._setCommentState = v743;
            var state = {};
            state.index = 0;
            state.comment = v744;
            out = deepParse(chunk, state, false, undefined);
        };
        const v746 = readableStream.on('data', v745);
        v746;
        const v748 = function () {
            const v747 = resolve(out);
            v747;
        };
        const v749 = readableStream.on('end', v748);
        v749;
        const v752 = function (error) {
            const v750 = 'Error parsing stream: ' + error;
            const v751 = reject(v750);
            v751;
        };
        const v753 = readableStream.on('error', v752);
        v753;
    };
    const v755 = new Promise(v754);
    return v755;
};
const parseText = function (text) {
    var textAsStream = new stream.Readable();
    const noop = function () {
    };
    textAsStream._read = noop;
    const v756 = textAsStream.push(text);
    v756;
    const v757 = textAsStream.push(null);
    v757;
    const v758 = parse(textAsStream);
    return v758;
};
const parseFile = function (path) {
    var stream = fs.createReadStream(path);
    const v759 = parse(stream);
    return v759;
};
const v760 = {};
v760.parseText = parseText;
v760.parseFile = parseFile;
module.exports = v760;