var columns = require('columns');
const Receiver = function (opts) {
    const v1 = {};
    opts = opts || v1;
    const v2 = opts.efficient;
    let v3;
    if (v2) {
        v3 = 'reset';
    } else {
        v3 = 'push';
    }
    const v4 = opts.print;
    const v5 = opts.buffer;
    const v6 = v5 || 2000;
    const v7 = {
        column_separator: '  ',
        flow_mode: v3,
        print: v4,
        maximum_buffer: v6
    };
    const v8 = columns.create(v7);
    this.view = v8;
};
const v9 = Receiver.prototype;
const v13 = function (stream) {
    const v10 = this.view;
    const v11 = stream.id;
    const v12 = { header: v11 };
    var column = v10.addColumn(v12);
    return column;
};
v9.newStream = v13;
exports = Receiver;
module.exports = exports;