var fs = require('fs');
var JSONC = require('jsonc-parser');
var rs = require('jsrsasign');
const readFileUTF8 = function (a) {
    const v14 = require('fs');
    const v15 = v14.readFileSync(a, 'utf8');
    return v15;
};
const readFileHexByBin = function (a) {
    const v16 = fs.readFileSync(a, 'binary');
    const v17 = rs.rstrtohex(v16);
    return v17;
};
const readFile = function (a) {
    const v18 = fs.readFileSync(a, 'binary');
    return v18;
};
const saveFile = function (c, b) {
    var a = require('fs');
    const v19 = a.writeFileSync(c, b, 'binary');
    v19;
};
const saveFileUTF8 = function (c, b) {
    var a = require('fs');
    const v20 = a.writeFileSync(c, b, 'utf8');
    v20;
};
const saveFileBinByHex = function (c, a) {
    var b = rs.hextorstr(a);
    const v21 = fs.writeFileSync(c, b, 'binary');
    v21;
};
const readJSON = function (b) {
    var a = fs.readFileSync(b, 'utf8');
    var c = JSON.parse(a);
    return c;
};
const readJSONC = function (b) {
    var a = fs.readFileSync(b, 'utf8');
    var c = JSONC.parse(a);
    return c;
};
const saveFileJSON = function (a, b) {
    var c = JSON.stringify(b, null, '  ');
    const v22 = saveFileUTF8(a, c);
    v22;
};
const printJSON = function (a, c) {
    var b = '';
    const v23 = c != undefined;
    if (v23) {
        b = c;
    }
    const v24 = JSON.stringify(a, null, '  ');
    const v25 = b + v24;
    const v26 = console.log(v25);
    v26;
};
;
exports.readFileUTF8 = readFileUTF8;
exports.readFileHexByBin = readFileHexByBin;
exports.readFile = readFile;
exports.saveFile = saveFile;
exports.saveFileUTF8 = saveFileUTF8;
exports.saveFileBinByHex = saveFileBinByHex;
exports.readJSON = readJSON;
exports.readJSONC = readJSONC;
exports.saveFileJSON = saveFileJSON;
exports.printJSON = printJSON;