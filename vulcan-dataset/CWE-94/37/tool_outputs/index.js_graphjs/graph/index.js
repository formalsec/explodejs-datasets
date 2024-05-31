var esprima = require('esprima-fb');
const v51 = function (src, file) {
    const v44 = typeof src;
    const v45 = v44 !== 'string';
    if (v45) {
        src = String(src);
    }
    try {
        const v46 = Function(src);
        v46;
        return;
    } catch (err) {
        const v47 = err.constructor;
        const v48 = v47.name;
        const v49 = v48 !== 'SyntaxError';
        if (v49) {
            throw err;
        }
        const v50 = errorInfo(src, file);
        return v50;
    }
};
module.exports = v51;
const errorInfo = function (src, file) {
    try {
        const v52 = esprima.parse(src);
        v52;
        return;
    } catch (err) {
        const v53 = new ParseError(err, src, file);
        return v53;
    }
};
const ParseError = function (err, src, file) {
    const v54 = SyntaxError.call(this);
    v54;
    const v55 = err.message;
    const v56 = v55.replace(/^Line \d+: /, '');
    this.message = v56;
    const v57 = err.lineNumber;
    this.line = v57;
    const v58 = err.column;
    this.column = v58;
    const v59 = file || '(anonymous file)';
    const v60 = '\n' + v59;
    const v61 = v60 + ':';
    const v62 = this.line;
    const v63 = v61 + v62;
    const v64 = v63 + '\n';
    const v65 = src.split('\n');
    const v66 = this.line;
    const v67 = v66 - 1;
    const v68 = v65[v67];
    const v69 = v64 + v68;
    const v70 = v69 + '\n';
    const v71 = this.column;
    const v72 = Array(v71);
    const v73 = v72.join(' ');
    const v74 = v70 + v73;
    const v75 = v74 + '^';
    const v76 = v75 + '\n';
    const v77 = v76 + 'ParseError: ';
    const v78 = this.message;
    this.annotated = v77 + v78;
};
const v79 = SyntaxError.prototype;
const v80 = Object.create(v79);
ParseError.prototype = v80;
const v81 = ParseError.prototype;
const v83 = function () {
    const v82 = this.annotated;
    return v82;
};
v81.toString = v83;
const v84 = ParseError.prototype;
const v86 = function () {
    const v85 = this.annotated;
    return v85;
};
v84.inspect = v86;