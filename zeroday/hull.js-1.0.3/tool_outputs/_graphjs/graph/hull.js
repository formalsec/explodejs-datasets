'use strict';
const intersect = require('./intersect.js');
const grid = require('./grid.js');
const formatUtil = require('./format.js');
const convexHull = require('./convex.js');
const _filterDuplicates = function (pointset) {
    const v433 = pointset[0];
    const unique = [v433];
    let lastPoint = pointset[0];
    let i = 1;
    const v434 = pointset.length;
    let v435 = i < v434;
    while (v435) {
        const currentPoint = pointset[i];
        const v437 = lastPoint[0];
        const v438 = currentPoint[0];
        const v439 = v437 !== v438;
        const v440 = lastPoint[1];
        const v441 = currentPoint[1];
        const v442 = v440 !== v441;
        const v443 = v439 || v442;
        if (v443) {
            const v444 = unique.push(currentPoint);
            v444;
        }
        lastPoint = currentPoint;
        const v436 = i++;
        v435 = i < v434;
    }
    return unique;
};
const _sortByX = function (pointset) {
    const v452 = function (a, b) {
        const v445 = a[0];
        const v446 = b[0];
        const v447 = v445 - v446;
        const v448 = a[1];
        const v449 = b[1];
        const v450 = v448 - v449;
        const v451 = v447 || v450;
        return v451;
    };
    const v453 = pointset.sort(v452);
    return v453;
};
const _sqLength = function (a, b) {
    const v454 = b[0];
    const v455 = a[0];
    const v456 = v454 - v455;
    const v457 = Math.pow(v456, 2);
    const v458 = b[1];
    const v459 = a[1];
    const v460 = v458 - v459;
    const v461 = Math.pow(v460, 2);
    const v462 = v457 + v461;
    return v462;
};
const _cos = function (o, a, b) {
    const v463 = a[0];
    const v464 = o[0];
    const v465 = v463 - v464;
    const v466 = a[1];
    const v467 = o[1];
    const v468 = v466 - v467;
    const aShifted = [
        v465,
        v468
    ];
    const v469 = b[0];
    const v470 = o[0];
    const v471 = v469 - v470;
    const v472 = b[1];
    const v473 = o[1];
    const v474 = v472 - v473;
    const bShifted = [
        v471,
        v474
    ];
    const sqALen = _sqLength(o, a);
    const sqBLen = _sqLength(o, b);
    const v475 = aShifted[0];
    const v476 = bShifted[0];
    const v477 = v475 * v476;
    const v478 = aShifted[1];
    const v479 = bShifted[1];
    const v480 = v478 * v479;
    const dot = v477 + v480;
    const v481 = sqALen * sqBLen;
    const v482 = Math.sqrt(v481);
    const v483 = dot / v482;
    return v483;
};
const _intersect = function (segment, pointset) {
    let i = 0;
    const v484 = pointset.length;
    const v485 = v484 - 1;
    let v486 = i < v485;
    while (v486) {
        const v488 = pointset[i];
        const v489 = i + 1;
        const v490 = pointset[v489];
        const seg = [
            v488,
            v490
        ];
        const v491 = segment[0];
        const v492 = v491[0];
        const v493 = seg[0];
        const v494 = v493[0];
        const v495 = v492 === v494;
        const v496 = segment[0];
        const v497 = v496[1];
        const v498 = seg[0];
        const v499 = v498[1];
        const v500 = v497 === v499;
        const v501 = v495 && v500;
        const v502 = segment[0];
        const v503 = v502[0];
        const v504 = seg[1];
        const v505 = v504[0];
        const v506 = v503 === v505;
        const v507 = segment[0];
        const v508 = v507[1];
        const v509 = seg[1];
        const v510 = v509[1];
        const v511 = v508 === v510;
        const v512 = v506 && v511;
        const v513 = v501 || v512;
        if (v513) {
            continue;
        }
        const v514 = intersect(segment, seg);
        if (v514) {
            return true;
        }
        const v487 = i++;
        v486 = i < v485;
    }
    return false;
};
const _occupiedArea = function (pointset) {
    let minX = Infinity;
    let minY = Infinity;
    const v515 = -Infinity;
    let maxX = v515;
    const v516 = -Infinity;
    let maxY = v516;
    const v517 = pointset.length;
    let i = v517 - 1;
    let v518 = i >= 0;
    while (v518) {
        const v520 = pointset[i];
        const v521 = v520[0];
        const v522 = v521 < minX;
        if (v522) {
            const v523 = pointset[i];
            minX = v523[0];
        }
        const v524 = pointset[i];
        const v525 = v524[1];
        const v526 = v525 < minY;
        if (v526) {
            const v527 = pointset[i];
            minY = v527[1];
        }
        const v528 = pointset[i];
        const v529 = v528[0];
        const v530 = v529 > maxX;
        if (v530) {
            const v531 = pointset[i];
            maxX = v531[0];
        }
        const v532 = pointset[i];
        const v533 = v532[1];
        const v534 = v533 > maxY;
        if (v534) {
            const v535 = pointset[i];
            maxY = v535[1];
        }
        const v519 = i--;
        v518 = i >= 0;
    }
    const v536 = maxX - minX;
    const v537 = maxY - minY;
    const v538 = [
        v536,
        v537
    ];
    return v538;
};
const _bBoxAround = function (edge) {
    const v539 = edge[0];
    const v540 = v539[0];
    const v541 = edge[1];
    const v542 = v541[0];
    const v543 = Math.min(v540, v542);
    const v544 = edge[0];
    const v545 = v544[1];
    const v546 = edge[1];
    const v547 = v546[1];
    const v548 = Math.min(v545, v547);
    const v549 = edge[0];
    const v550 = v549[0];
    const v551 = edge[1];
    const v552 = v551[0];
    const v553 = Math.max(v550, v552);
    const v554 = edge[0];
    const v555 = v554[1];
    const v556 = edge[1];
    const v557 = v556[1];
    const v558 = Math.max(v555, v557);
    const v559 = [
        v543,
        v548,
        v553,
        v558
    ];
    return v559;
};
const _midPoint = function (edge, innerPoints, convex) {
    let point = null;
    let angle1Cos = MAX_CONCAVE_ANGLE_COS;
    let angle2Cos = MAX_CONCAVE_ANGLE_COS;
    let a1Cos;
    let a2Cos;
    let i = 0;
    const v560 = innerPoints.length;
    let v561 = i < v560;
    while (v561) {
        const v563 = edge[0];
        const v564 = edge[1];
        const v565 = innerPoints[i];
        a1Cos = _cos(v563, v564, v565);
        const v566 = edge[1];
        const v567 = edge[0];
        const v568 = innerPoints[i];
        a2Cos = _cos(v566, v567, v568);
        const v569 = a1Cos > angle1Cos;
        const v570 = a2Cos > angle2Cos;
        const v571 = v569 && v570;
        const v572 = edge[0];
        const v573 = innerPoints[i];
        const v574 = [
            v572,
            v573
        ];
        const v575 = _intersect(v574, convex);
        const v576 = !v575;
        const v577 = v571 && v576;
        const v578 = edge[1];
        const v579 = innerPoints[i];
        const v580 = [
            v578,
            v579
        ];
        const v581 = _intersect(v580, convex);
        const v582 = !v581;
        const v583 = v577 && v582;
        if (v583) {
            angle1Cos = a1Cos;
            angle2Cos = a2Cos;
            point = innerPoints[i];
        }
        const v562 = i++;
        v561 = i < v560;
    }
    return point;
};
const _concave = function (convex, maxSqEdgeLen, maxSearchArea, grid, edgeSkipList) {
    let midPointInserted = false;
    let i = 0;
    const v584 = convex.length;
    const v585 = v584 - 1;
    let v586 = i < v585;
    while (v586) {
        const v588 = convex[i];
        const v589 = i + 1;
        const v590 = convex[v589];
        const edge = [
            v588,
            v590
        ];
        const v591 = edge[0];
        const v592 = v591[0];
        const v593 = v592 + ',';
        const v594 = edge[0];
        const v595 = v594[1];
        const v596 = v593 + v595;
        const v597 = v596 + ',';
        const v598 = edge[1];
        const v599 = v598[0];
        const v600 = v597 + v599;
        const v601 = v600 + ',';
        const v602 = edge[1];
        const v603 = v602[1];
        const keyInSkipList = v601 + v603;
        const v604 = edge[0];
        const v605 = edge[1];
        const v606 = _sqLength(v604, v605);
        const v607 = v606 < maxSqEdgeLen;
        const v608 = edgeSkipList.has(keyInSkipList);
        const v609 = v607 || v608;
        if (v609) {
            continue;
        }
        let scaleFactor = 0;
        let bBoxAround = _bBoxAround(edge);
        let bBoxWidth;
        let bBoxHeight;
        let midPoint;
        let v616 = true;
        while (v616) {
            bBoxAround = grid.extendBbox(bBoxAround, scaleFactor);
            const v617 = bBoxAround[2];
            const v618 = bBoxAround[0];
            bBoxWidth = v617 - v618;
            const v619 = bBoxAround[3];
            const v620 = bBoxAround[1];
            bBoxHeight = v619 - v620;
            const v621 = grid.rangePoints(bBoxAround);
            midPoint = _midPoint(edge, v621, convex);
            const v622 = scaleFactor++;
            v622;
            v616 = v610 && v615;
        }
        const v623 = maxSearchArea[0];
        const v624 = bBoxWidth >= v623;
        const v625 = maxSearchArea[1];
        const v626 = bBoxHeight >= v625;
        const v627 = v624 && v626;
        if (v627) {
            const v628 = edgeSkipList.add(keyInSkipList);
            v628;
        }
        const v629 = midPoint !== null;
        if (v629) {
            const v630 = i + 1;
            const v631 = convex.splice(v630, 0, midPoint);
            v631;
            const v632 = grid.removePoint(midPoint);
            v632;
            midPointInserted = true;
        }
        const v587 = i++;
        v586 = i < v585;
    }
    if (midPointInserted) {
        const v633 = _concave(convex, maxSqEdgeLen, maxSearchArea, grid, edgeSkipList);
        return v633;
    }
    return convex;
};
const hull = function (pointset, concavity, format) {
    let maxEdgeLen = concavity || 20;
    const v634 = formatUtil.toXy(pointset, format);
    const v635 = _sortByX(v634);
    const points = _filterDuplicates(v635);
    const v636 = points.length;
    const v637 = v636 < 4;
    if (v637) {
        const v638 = points[0];
        const v639 = [v638];
        const concave = points.concat(v639);
        const v640 = formatUtil.fromXy(concave, format);
        let v641;
        if (format) {
            v641 = v640;
        } else {
            v641 = concave;
        }
        return v641;
    }
    const occupiedArea = _occupiedArea(points);
    const v642 = occupiedArea[0];
    const v643 = v642 * MAX_SEARCH_BBOX_SIZE_PERCENT;
    const v644 = occupiedArea[1];
    const v645 = v644 * MAX_SEARCH_BBOX_SIZE_PERCENT;
    const maxSearchArea = [
        v643,
        v645
    ];
    const convex = convexHull(points);
    const v648 = function (pt) {
        const v646 = convex.indexOf(pt);
        const v647 = v646 < 0;
        return v647;
    };
    const innerPoints = points.filter(v648);
    const v649 = points.length;
    const v650 = occupiedArea[0];
    const v651 = occupiedArea[1];
    const v652 = v650 * v651;
    const v653 = v649 / v652;
    const v654 = 1 / v653;
    const cellSize = Math.ceil(v654);
    const v655 = Math.pow(maxEdgeLen, 2);
    const v656 = grid(innerPoints, cellSize);
    const v657 = new Set();
    const concave = _concave(convex, v655, maxSearchArea, v656, v657);
    const v658 = formatUtil.fromXy(concave, format);
    let v659;
    if (format) {
        v659 = v658;
    } else {
        v659 = concave;
    }
    return v659;
};
const v660 = Math.PI;
const v661 = 180 / v660;
const v662 = 90 / v661;
const MAX_CONCAVE_ANGLE_COS = Math.cos(v662);
const MAX_SEARCH_BBOX_SIZE_PERCENT = 0.6;
module.exports = hull;