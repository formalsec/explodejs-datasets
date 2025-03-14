const v42 = require('child_process');
var exec = v42.exec;
var oledExecutable = '/usr/sbin/oled-exp';
const v45 = function () {
    const v43 = oledExecutable + ' -i';
    const v44 = exec(v43);
    return v44;
};
const v48 = function () {
    const v46 = oledExecutable + ' -c';
    const v47 = exec(v46);
    return v47;
};
const v52 = function (mode) {
    const v49 = oledExecutable + ' power ';
    const v50 = v49 + mode;
    const v51 = exec(v50);
    return v51;
};
const v54 = function () {
    const v53 = OLEDExpr.power('on');
    return v53;
};
const v56 = function () {
    const v55 = OLEDExpr.power('off');
    return v55;
};
const v62 = function (row, col) {
    const v57 = oledExecutable + ' cursor ';
    const v58 = v57 + row;
    const v59 = v58 + ',';
    const v60 = v59 + col;
    const v61 = exec(v60);
    return v61;
};
const v66 = function (mode) {
    const v63 = oledExecutable + ' invert ';
    const v64 = v63 + mode;
    const v65 = exec(v64);
    return v65;
};
const v78 = function (string, row, col) {
    let cursor;
    const v67 = row !== undefined;
    const v68 = col !== undefined;
    const v69 = v67 && v68;
    const v70 = ' cursor ' + row;
    const v71 = v70 + ',';
    const v72 = v71 + col;
    if (v69) {
        cursor = v72;
    } else {
        cursor = '';
    }
    const v73 = oledExecutable + cursor;
    const v74 = v73 + ' write "';
    const v75 = v74 + string;
    const v76 = v75 + '"';
    const v77 = exec(v76);
    return v77;
};
const v82 = function (direction) {
    const v79 = oledExecutable + ' write ';
    const v80 = v79 + direction;
    const v81 = exec(v80);
    return v81;
};
var OLEDExpr = {};
OLEDExpr.initialize = v45;
OLEDExpr.clear = v48;
OLEDExpr.power = v52;
OLEDExpr.powerOn = v54;
OLEDExpr.powerOff = v56;
OLEDExpr.cursor = v62;
OLEDExpr.invert = v66;
OLEDExpr.write = v78;
OLEDExpr.scroll = v82;
module.exports = OLEDExpr;