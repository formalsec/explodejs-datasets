var INTERPOLATE = /{([^{]+?)}/g;
const v30 = function (str, data) {
    const v16 = 'var __p=[],print=function(){__p.push.apply(__p,arguments);};' + 'with(obj||{}){__p.push(\'';
    const v17 = str.replace(/\\/g, '\\\\');
    const v18 = v17.replace(/'/g, '\\\'');
    const v22 = function (match, code) {
        const v19 = code.replace(/\\'/g, '\'');
        const v20 = '\',' + v19;
        const v21 = v20 + ',\'';
        return v21;
    };
    const v23 = v18.replace(INTERPOLATE, v22);
    const v24 = v23.replace(/\r/g, '\\r');
    const v25 = v24.replace(/\n/g, '\\n');
    const v26 = v25.replace(/\t/g, '\\t');
    const v27 = v16 + v26;
    var tmpl = v27 + '\');}return __p.join(\'\');';
    var func = new Function('obj', tmpl);
    const v28 = func(data);
    let v29;
    if (data) {
        v29 = v28;
    } else {
        v29 = func;
    }
    return v29;
};
module.exports = v30;