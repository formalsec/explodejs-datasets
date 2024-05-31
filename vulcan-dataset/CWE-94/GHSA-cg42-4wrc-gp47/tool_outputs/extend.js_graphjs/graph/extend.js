var util = require('util');
module.exports = extend;
const extend = function (A, B, as, isAargs) {
    var ___A___ = A;
    var ___B___ = B;
    const v17 = arguments.length;
    const v18 = v17 < 2;
    if (v18) {
        const v19 = new Error('arguments is error!');
        throw v19;
    }
    var args = '';
    const v20 = arguments.length;
    const v21 = v20 > 2;
    if (v21) {
        if (isAargs) {
        } else {
            const v22 = JSON.stringify(as);
            const v23 = 'var args = ' + v22;
            args = v23 + ';';
        }
    }
    var s = A.toString();
    var footer = '}';
    var header = s.match(/^(function)(.)*{/gi);
    var e = '';
    if (isAargs) {
        e += '___B___.apply(this,arguments);';
    } else {
        e += '___B___.apply(this);';
    }
    e += '___A___.apply(this,arguments)';
    const v24 = header + e;
    var ss = v24 + footer;
    const v25 = console.log(args);
    v25;
    const v26 = '(' + ss;
    const v27 = v26 + ')';
    var nn = eval(v27);
    var ap = A.prototype;
    const v28 = util.inherits(nn, B);
    v28;
    let k;
    for (k in B) {
        const v29 = B[k];
        nn[k] = v29;
    }
    let k;
    for (k in A) {
        const v30 = A[k];
        nn[k] = v30;
    }
    let k;
    for (k in ap) {
        const v31 = nn.prototype;
        const v32 = ap[k];
        v31[k] = v32;
    }
    return nn;
};