'use strict';
const template = function (literal, data) {
    var tmpl = literal.replace(/(\$\{)/gm, '$1data.');
    const v10 = '`' + tmpl;
    const v11 = v10 + '`';
    const v12 = eval(v11);
    return v12;
};
const encodeStatements = function (statements, data) {
    const v13 = !statements;
    if (v13) {
        const v14 = new SyntaxError('Must include statements to encode');
        throw v14;
    }
    const v15 = !data;
    if (v15) {
        return statements;
    }
    const v16 = JSON.stringify(statements);
    var output = template(v16, data);
    output = JSON.parse(output);
    const v17 = {
        __proto__: null,
        value: true
    };
    const v18 = Object.defineProperty(output, 'encoded', v17);
    v18;
    return output;
};
module.exports = encodeStatements;