'use strict';
const v9 = require('child_process');
var exec = v9.exec;
var kill = function (pid, callback) {
    const v10 = [
        'kill',
        '-9',
        pid
    ];
    var cmd = v10.join(' ');
    const v14 = function (error) {
        const v11 = typeof callback;
        const v12 = v11 === 'function';
        if (v12) {
            const v13 = callback(error);
            v13;
        }
    };
    const v15 = exec(cmd, v14);
    v15;
};
const v16 = module.exports;
v16.kill = kill;