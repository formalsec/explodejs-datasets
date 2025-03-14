module.exports = fulcon;
const fulcon = function (source) {
    const v15 = source.name;
    const v16 = v15.replace(/^bound /, '');
    const v17 = 'return function ' + v16;
    const v18 = v17 + '(';
    const v19 = source.length;
    const v20 = v19 + 1;
    const v21 = Array(v20);
    const v22 = v21.join('a');
    const v23 = v22.split('');
    const v24 = v23.join(',');
    const v25 = v18 + v24;
    const v26 = v25 + '){ return source.apply(this, arguments); }';
    const v27 = Function('source', v26);
    const v28 = v27(source);
    return v28;
};