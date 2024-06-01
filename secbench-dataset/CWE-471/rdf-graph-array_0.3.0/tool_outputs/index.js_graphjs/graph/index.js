var rdf = require('rdf-graph-abstract');
var util = require('util');
const v346 = function (iri) {
    this.interfaceName = 'NamedNode';
    this.nominalValue = iri;
};
rdf.NamedNode = v346;
const v347 = rdf.NamedNode;
const v348 = v347.prototype;
const v366 = function (other) {
    const v349 = typeof other;
    const v350 = v349 === 'string';
    if (v350) {
        const v351 = this.nominalValue;
        const v352 = v351 === other;
        return v352;
    }
    const v353 = typeof other;
    const v354 = v353 === 'object';
    if (v354) {
        const v355 = other.constructor;
        const v356 = v355.name;
        const v357 = v356 === 'RegExp';
        if (v357) {
            const v358 = this.nominalValue;
            const v359 = other.test(v358);
            return v359;
        }
        const v360 = other.interfaceName;
        const v361 = this.interfaceName;
        const v362 = v360 === v361;
        if (v362) {
            const v363 = this.nominalValue;
            const v364 = other.nominalValue;
            const v365 = v363 === v364;
            return v365;
        }
    }
    return false;
};
v348.equals = v366;
const v367 = rdf.NamedNode;
const v368 = v367.prototype;
const v373 = function () {
    const v369 = this.nominalValue;
    const v370 = rdf.encodeString(v369);
    const v371 = '<' + v370;
    const v372 = v371 + '>';
    return v372;
};
v368.toNT = v373;
const v374 = rdf.NamedNode;
const v375 = v374.prototype;
const v377 = function () {
    const v376 = this.nominalValue;
    return v376;
};
v375.toString = v377;
const v378 = rdf.NamedNode;
const v379 = v378.prototype;
const v381 = function () {
    const v380 = this.nominalValue;
    return v380;
};
v379.valueOf = v381;
const v385 = function () {
    this.interfaceName = 'BlankNode';
    const v382 = rdf.BlankNode;
    const v383 = v382.nextId;
    const v384 = ++v383;
    this.nominalValue = 'b' + v384;
};
rdf.BlankNode = v385;
const v386 = rdf.BlankNode;
const v387 = v386.prototype;
const v405 = function (other) {
    const v388 = typeof other;
    const v389 = v388 === 'string';
    if (v389) {
        const v390 = this.nominalValue;
        const v391 = v390 === other;
        return v391;
    }
    const v392 = typeof other;
    const v393 = v392 === 'object';
    if (v393) {
        const v394 = other.constructor;
        const v395 = v394.name;
        const v396 = v395 === 'RegExp';
        if (v396) {
            const v397 = this.nominalValue;
            const v398 = other.test(v397);
            return v398;
        }
        const v399 = other.interfaceName;
        const v400 = this.interfaceName;
        const v401 = v399 === v400;
        if (v401) {
            const v402 = this.nominalValue;
            const v403 = other.nominalValue;
            const v404 = v402 === v403;
            return v404;
        }
    }
    return false;
};
v387.equals = v405;
const v406 = rdf.BlankNode;
const v407 = v406.prototype;
const v411 = function () {
    const v408 = this.nominalValue;
    const v409 = rdf.encodeString(v408);
    const v410 = '_:' + v409;
    return v410;
};
v407.toNT = v411;
const v412 = rdf.BlankNode;
const v413 = v412.prototype;
const v416 = function () {
    const v414 = this.nominalValue;
    const v415 = '_:' + v414;
    return v415;
};
v413.toString = v416;
const v417 = rdf.BlankNode;
const v418 = v417.prototype;
const v420 = function () {
    const v419 = this.nominalValue;
    return v419;
};
v418.valueOf = v420;
const v421 = rdf.BlankNode;
v421.nextId = 0;
const v427 = function (value, language, datatype, native) {
    this.interfaceName = 'Literal';
    this.nominalValue = value;
    if (language) {
        this.language = language;
        const v422 = rdf.Literal;
        const v423 = v422.langString;
        this.datatype = v423;
    } else {
        this.language = null;
        if (datatype) {
            const v424 = datatype.toString();
            this.datatype = new rdf.NamedNode(v424);
        } else {
            const v425 = rdf.Literal;
            const v426 = v425.string;
            this.datatype = v426;
        }
    }
    this.native = native;
};
rdf.Literal = v427;
const v428 = rdf.Literal;
const v429 = v428.prototype;
const v458 = function (other) {
    const v430 = typeof other;
    const v431 = v430 === 'string';
    if (v431) {
        const v432 = this.nominalValue;
        const v433 = v432 === other;
        return v433;
    }
    const v434 = typeof other;
    const v435 = v434 === 'object';
    if (v435) {
        const v436 = other.constructor;
        const v437 = v436.name;
        const v438 = v437 === 'RegExp';
        if (v438) {
            const v439 = this.nominalValue;
            const v440 = other.test(v439);
            return v440;
        }
        const v441 = other.interfaceName;
        const v442 = this.interfaceName;
        const v443 = v441 === v442;
        if (v443) {
            const v444 = this.nominalValue;
            const v445 = v444.toString();
            const v446 = other.nominalValue;
            const v447 = v446.toString();
            const v448 = v445 !== v447;
            if (v448) {
                return false;
            }
            const v449 = this.language;
            const v450 = other.language;
            const v451 = v449 !== v450;
            if (v451) {
                return false;
            }
            const v452 = this.datatype;
            const v453 = this.datatype;
            const v454 = other.datatype;
            const v455 = v453.equals(v454);
            const v456 = !v455;
            const v457 = v452 && v456;
            if (v457) {
                return false;
            }
            return true;
        }
    }
    return false;
};
v429.equals = v458;
const v459 = rdf.Literal;
const v460 = v459.prototype;
const v482 = function () {
    const v461 = this.nominalValue;
    const v462 = v461.toString();
    const v463 = rdf.encodeString(v462);
    const v464 = '"' + v463;
    var string = v464 + '"';
    const v465 = this.language;
    if (v465) {
        const v466 = this.language;
        string += '@' + v466;
    }
    const v467 = this.datatype;
    const v468 = rdf.Literal;
    const v469 = v468.string;
    const v470 = this.datatype;
    const v471 = v469.equals(v470);
    const v472 = !v471;
    const v473 = v467 && v472;
    const v474 = rdf.Literal;
    const v475 = v474.langString;
    const v476 = this.datatype;
    const v477 = v475.equals(v476);
    const v478 = !v477;
    const v479 = v473 && v478;
    if (v479) {
        const v480 = this.datatype;
        const v481 = v480.toNT();
        string += '^^' + v481;
    }
    return string;
};
v460.toNT = v482;
const v483 = rdf.Literal;
const v484 = v483.prototype;
const v486 = function () {
    const v485 = this.nominalValue;
    return v485;
};
v484.toString = v486;
const v487 = rdf.Literal;
v487.langString = new rdf.NamedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#langString');
const v488 = rdf.Literal;
v488.string = new rdf.NamedNode('http://www.w3.org/2001/XMLSchema#string');
const v489 = function (subject, predicate, object) {
    this.subject = subject;
    this.predicate = predicate;
    this.object = object;
};
rdf.Triple = v489;
const v490 = rdf.Triple;
const v491 = v490.prototype;
const v503 = function (other) {
    const v492 = this.subject;
    const v493 = other.subject;
    const v494 = v492.equals(v493);
    const v495 = this.predicate;
    const v496 = other.predicate;
    const v497 = v495.equals(v496);
    const v498 = v494 && v497;
    const v499 = this.object;
    const v500 = other.object;
    const v501 = v499.equals(v500);
    const v502 = v498 && v501;
    return v502;
};
v491.equals = v503;
const v504 = rdf.Triple;
const v505 = v504.prototype;
const v507 = function () {
    const v506 = this.toString();
    return v506;
};
v505.toNT = v507;
const v508 = rdf.Triple;
const v509 = v508.prototype;
const v514 = function (graph) {
    const v510 = this.subject;
    const v511 = this.predicate;
    const v512 = this.object;
    const v513 = new rdf.Quad(v510, v511, v512, graph);
    return v513;
};
v509.toQuad = v514;
const v515 = rdf.Triple;
const v516 = v515.prototype;
const v528 = function () {
    const v517 = this.subject;
    const v518 = v517.toNT();
    const v519 = v518 + ' ';
    const v520 = this.predicate;
    const v521 = v520.toNT();
    const v522 = v519 + v521;
    const v523 = v522 + ' ';
    const v524 = this.object;
    const v525 = v524.toNT();
    const v526 = v523 + v525;
    const v527 = v526 + ' .';
    return v527;
};
v516.toString = v528;
const v529 = function (subject, predicate, object, graph) {
    this.subject = subject;
    this.predicate = predicate;
    this.object = object;
    this.graph = graph;
};
rdf.Quad = v529;
const v530 = rdf.Quad;
const v531 = v530.prototype;
const v547 = function (other) {
    const v532 = this.subject;
    const v533 = other.subject;
    const v534 = v532.equals(v533);
    const v535 = this.predicate;
    const v536 = other.predicate;
    const v537 = v535.equals(v536);
    const v538 = v534 && v537;
    const v539 = this.object;
    const v540 = other.object;
    const v541 = v539.equals(v540);
    const v542 = v538 && v541;
    const v543 = this.graph;
    const v544 = other.graph;
    const v545 = v543.equals(v544);
    const v546 = v542 && v545;
    return v546;
};
v531.equals = v547;
const v548 = rdf.Quad;
const v549 = v548.prototype;
const v551 = function () {
    const v550 = this.toString();
    return v550;
};
v549.toNT = v551;
const v552 = rdf.Quad;
const v553 = v552.prototype;
const v569 = function () {
    const v554 = this.subject;
    const v555 = v554.toNT();
    const v556 = v555 + ' ';
    const v557 = this.predicate;
    const v558 = v557.toNT();
    const v559 = v556 + v558;
    const v560 = v559 + ' ';
    const v561 = this.object;
    const v562 = v561.toNT();
    const v563 = v560 + v562;
    const v564 = v563 + ' ';
    const v565 = this.graph;
    const v566 = v565.toNT();
    const v567 = v564 + v566;
    const v568 = v567 + ' .';
    return v568;
};
v553.toString = v569;
const v570 = rdf.Quad;
const v571 = v570.prototype;
const v576 = function () {
    const v572 = this.subject;
    const v573 = this.predicate;
    const v574 = this.object;
    const v575 = new rdf.Triple(v572, v573, v574);
    return v575;
};
v571.toTriple = v576;
const v581 = function (other) {
    this.actions = [];
    this._graph = [];
    const v577 = {};
    this._gspo = v577;
    const v578 = rdf.AbstractGraph;
    const v579 = rdf.Graph;
    const v580 = v578.call(this, v579, other);
    v580;
};
rdf.Graph = v581;
const v582 = rdf.Graph;
const v583 = rdf.AbstractGraph;
const v584 = util.inherits(v582, v583);
v584;
const v585 = rdf.Graph;
const v586 = v585.prototype;
const v642 = function (quad) {
    const v587 = rdf.Graph;
    var i = v587.index(quad);
    const v588 = this._gspo;
    const v589 = i.g;
    const v590 = this._gspo;
    const v591 = i.g;
    const v592 = v590[v591];
    const v593 = {};
    v588[v589] = v592 || v593;
    const v594 = this._gspo;
    const v595 = i.g;
    const v596 = v594[v595];
    const v597 = i.s;
    const v598 = this._gspo;
    const v599 = i.g;
    const v600 = v598[v599];
    const v601 = i.s;
    const v602 = v600[v601];
    const v603 = {};
    v596[v597] = v602 || v603;
    const v604 = this._gspo;
    const v605 = i.g;
    const v606 = v604[v605];
    const v607 = i.s;
    const v608 = v606[v607];
    const v609 = i.p;
    const v610 = this._gspo;
    const v611 = i.g;
    const v612 = v610[v611];
    const v613 = i.s;
    const v614 = v612[v613];
    const v615 = i.p;
    const v616 = v614[v615];
    const v617 = {};
    v608[v609] = v616 || v617;
    const v618 = this._gspo;
    const v619 = i.g;
    const v620 = v618[v619];
    const v621 = i.s;
    const v622 = v620[v621];
    const v623 = i.p;
    const v624 = v622[v623];
    const v625 = i.o;
    const v626 = v624[v625];
    const v627 = !v626;
    if (v627) {
        const v628 = this._gspo;
        const v629 = i.g;
        const v630 = v628[v629];
        const v631 = i.s;
        const v632 = v630[v631];
        const v633 = i.p;
        const v634 = v632[v633];
        const v635 = i.o;
        v634[v635] = quad;
        const v636 = this._graph;
        const v637 = v636.push(quad);
        v637;
        const v638 = this.actions;
        const v640 = function (action) {
            const v639 = action.run(quad);
            v639;
        };
        const v641 = v638.forEach(v640);
        v641;
    }
    return this;
};
v586.add = v642;
const v643 = rdf.Graph;
const v644 = v643.prototype;
const v645 = function (action) {
};
v644.addAction = v645;
const v646 = rdf.Graph;
const v647 = v646.prototype;
const v672 = function (quad) {
    const v648 = rdf.Graph;
    var i = v648.index(quad);
    const v649 = this._gspo;
    const v650 = i.g;
    const v651 = v649[v650];
    const v652 = i.s;
    const v653 = v651[v652];
    const v654 = i.p;
    const v655 = v653[v654];
    const v656 = i.o;
    const v657 = v655[v656];
    if (v657) {
        const v658 = this._gspo;
        const v659 = i.g;
        const v660 = v658[v659];
        const v661 = i.s;
        const v662 = v660[v661];
        const v663 = i.p;
        const v664 = v662[v663];
        const v665 = i.o;
        const v666 = v664[v665];
        const v667 = delete v666;
        v667;
        const v668 = this._graph;
        const v669 = this._graph;
        const v670 = v669.indexOf(quad);
        const v671 = v668.splice(v670, 1);
        v671;
    }
};
v647.remove = v672;
const v673 = rdf.Graph;
const v674 = v673.prototype;
const v677 = function () {
    const v675 = this._graph;
    const v676 = v675.slice(0);
    return v676;
};
v674.toArray = v677;
const v678 = rdf.Graph;
const v690 = function (quad) {
    const v679 = quad.graph;
    const v680 = quad.graph;
    const v681 = v680.toString();
    let v682;
    if (v679) {
        v682 = v681;
    } else {
        v682 = null;
    }
    const v683 = quad.subject;
    const v684 = v683.toString();
    const v685 = quad.predicate;
    const v686 = v685.toString();
    const v687 = quad.object;
    const v688 = v687.toString();
    const v689 = {};
    v689.g = v682;
    v689.s = v684;
    v689.p = v686;
    v689.o = v688;
    return v689;
};
v678.index = v690;
module.exports = rdf;