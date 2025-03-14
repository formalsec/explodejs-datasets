`use strict`;
const fs = require('fs');
const v20 = file => {
    var bitmap = fs.readFileSync(file);
    const v18 = new Buffer(bitmap);
    const v19 = v18.toString('base64');
    return v19;
};
const v22 = (base64str, file) => {
    var bitmap = new Buffer(base64str, 'base64');
    const v21 = fs.writeFileSync(file, bitmap);
    v21;
};
const v24 = rtfStr => {
    let convertedText = rtfStr.replace(/\\par[d]?/g, '');
    const v23 = convertedText.replace(/\{\*?\\[^{}]+}|[{}]|\\\n?[A-Za-z]+\n?(?:-?\d+)?[ ]?/g, '');
    convertedText = v23.trim();
    return convertedText;
};
const v27 = textStr => {
    textStr = textStr.replace(/\n/g, '\\par\n');
    const v25 = '{\\rtf1\\ansi\\ansicpg1252\\deff0\\deflang2057{\\fonttbl{\\f0\\fnil\\fcharset0 Microsoft Sans Serif;}}\n\\viewkind4\\uc1\\pard\\f0\\fs17 ' + textStr;
    const v26 = v25 + '\\par\n}';
    return v26;
};
const v30 = str => {
    const v28 = new Buffer(str);
    const v29 = v28.toString('base64');
    return v29;
};
const v33 = base64Str => {
    const v31 = new Buffer(base64Str, 'base64');
    const v32 = v31.toString('ascii');
    return v32;
};
const v34 = {};
v34.base64Encode = v20;
v34.base64Decode = v22;
v34.rtfToText = v24;
v34.textToRtf = v27;
v34.strToBase64 = v30;
v34.base64ToStr = v33;
module.exports = v34;