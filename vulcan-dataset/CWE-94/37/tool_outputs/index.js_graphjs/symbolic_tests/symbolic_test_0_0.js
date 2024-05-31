var esprima = require('esprima-fb');

module.exports = function (src, file) {
    if (typeof src !== 'string') src = String(src);
    
    try {
        Function(src);
        return;
    }
    catch (err) {
        if (err.constructor.name !== 'SyntaxError') throw err;
        return errorInfo(src, file);
    }
};

function errorInfo (src, file) {
    try {
        esprima.parse(src);
        return;
    }
    catch (err) {
        return new ParseError(err, src, file);
    }
}

function ParseError (err, src, file) {
    SyntaxError.call(this);
    
    this.message = err.message.replace(/^Line \d+: /, '');
    
    this.line = err.lineNumber;
    this.column = err.column;
    
    this.annotated = '\n'
        + (file || '(anonymous file)')
        + ':' + this.line
        + '\n'
        + src.split('\n')[this.line - 1]
        + '\n'
        + Array(this.column).join(' ') + '^'
        + '\n'
        + 'ParseError: ' + this.message
    ;
}

ParseError.prototype = Object.create(SyntaxError.prototype);

ParseError.prototype.toString = function () {
    return this.annotated;
};

ParseError.prototype.inspect = function () {
    return this.annotated;
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: code-injection
let src = esl_symbolic.string("src");
let file = esl_symbolic.any("file");
module.exports(src, file);
