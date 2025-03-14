const Grid = function (points, cellSize) {
    this._cells = [];
    this._cellSize = cellSize;
    this._reverseCellSize = 1 / cellSize;
    let i = 0;
    const v26 = points.length;
    let v27 = i < v26;
    while (v27) {
        const point = points[i];
        const v29 = point[0];
        const x = this.coordToCellNum(v29);
        const v30 = point[1];
        const y = this.coordToCellNum(v30);
        const v31 = this._cells;
        const v32 = v31[x];
        const v33 = !v32;
        if (v33) {
            const array = [];
            array[y] = [point];
            const v34 = this._cells;
            v34[x] = array;
        } else {
            const v35 = this._cells;
            const v36 = v35[x];
            const v37 = v36[y];
            const v38 = !v37;
            if (v38) {
                const v39 = this._cells;
                const v40 = v39[x];
                v40[y] = [point];
            } else {
                const v41 = this._cells;
                const v42 = v41[x];
                const v43 = v42[y];
                const v44 = v43.push(point);
                v44;
            }
        }
        const v28 = i++;
        v27 = i < v26;
    }
};
const v58 = function (x, y) {
    const v45 = this._cells;
    const v46 = v45[x];
    const v47 = v46 !== undefined;
    const v48 = this._cells;
    const v49 = v48[x];
    const v50 = v49[y];
    const v51 = v50 !== undefined;
    const v52 = v47 && v51;
    const v53 = this._cells;
    const v54 = v53[x];
    const v55 = v54[y];
    const v56 = [];
    let v57;
    if (v52) {
        v57 = v55;
    } else {
        v57 = v56;
    }
    return v57;
};
const v74 = function (bbox) {
    const v59 = bbox[0];
    const tlCellX = this.coordToCellNum(v59);
    const v60 = bbox[1];
    const tlCellY = this.coordToCellNum(v60);
    const v61 = bbox[2];
    const brCellX = this.coordToCellNum(v61);
    const v62 = bbox[3];
    const brCellY = this.coordToCellNum(v62);
    const points = [];
    let x = tlCellX;
    let v63 = x <= brCellX;
    while (v63) {
        let y = tlCellY;
        let v65 = y <= brCellY;
        while (v65) {
            let i = 0;
            const v67 = this.cellPoints(x, y);
            const v68 = v67.length;
            let v69 = i < v68;
            while (v69) {
                const v71 = this.cellPoints(x, y);
                const v72 = v71[i];
                const v73 = points.push(v72);
                v73;
                const v70 = i++;
                v69 = i < v68;
            }
            const v66 = y++;
            v65 = y <= brCellY;
        }
        const v64 = x++;
        v63 = x <= brCellX;
    }
    return points;
};
const v92 = function (point) {
    const v75 = point[0];
    const cellX = this.coordToCellNum(v75);
    const v76 = point[1];
    const cellY = this.coordToCellNum(v76);
    const v77 = this._cells;
    const v78 = v77[cellX];
    const cell = v78[cellY];
    let pointIdxInCell;
    let i = 0;
    const v79 = cell.length;
    let v80 = i < v79;
    while (v80) {
        const v82 = cell[i];
        const v83 = v82[0];
        const v84 = point[0];
        const v85 = v83 === v84;
        const v86 = cell[i];
        const v87 = v86[1];
        const v88 = point[1];
        const v89 = v87 === v88;
        const v90 = v85 && v89;
        if (v90) {
            pointIdxInCell = i;
            break;
        }
        const v81 = i++;
        v80 = i < v79;
    }
    const v91 = cell.splice(pointIdxInCell, 1);
    v91;
    return cell;
};
const v93 = Math.trunc;
const v96 = function (val) {
    const v94 = val % 1;
    const v95 = val - v94;
    return v95;
};
const v97 = v93 || v96;
const v101 = function (x) {
    const v98 = this._reverseCellSize;
    const v99 = x * v98;
    const v100 = this.trunc(v99);
    return v100;
};
const v119 = function (bbox, scaleFactor) {
    const v102 = bbox[0];
    const v103 = this._cellSize;
    const v104 = scaleFactor * v103;
    const v105 = v102 - v104;
    const v106 = bbox[1];
    const v107 = this._cellSize;
    const v108 = scaleFactor * v107;
    const v109 = v106 - v108;
    const v110 = bbox[2];
    const v111 = this._cellSize;
    const v112 = scaleFactor * v111;
    const v113 = v110 + v112;
    const v114 = bbox[3];
    const v115 = this._cellSize;
    const v116 = scaleFactor * v115;
    const v117 = v114 + v116;
    const v118 = [
        v105,
        v109,
        v113,
        v117
    ];
    return v118;
};
const v120 = {};
v120.cellPoints = v58;
v120.rangePoints = v74;
v120.removePoint = v92;
v120.trunc = v97;
v120.coordToCellNum = v101;
v120.extendBbox = v119;
Grid.prototype = v120;
const grid = function (points, cellSize) {
    const v121 = new Grid(points, cellSize);
    return v121;
};
module.exports = grid;