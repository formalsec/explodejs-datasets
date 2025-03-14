var parse = require('./parse.js');
var execute = require('./execute.js');
module.exports = run;
const run = function (collector, commands, keys, params, options, callback) {
    var prefix;
    var key;
    const v45 = keys || commands;
    var cmd = v45.shift();
    const v46 = !cmd;
    if (v46) {
        const v47 = callback(null, collector);
        return v47;
    }
    if (keys) {
        key = cmd;
        cmd = commands[key];
    }
    cmd = parse(cmd, params);
    const v48 = !cmd;
    if (v48) {
        const v49 = new Error('Parameters should be a primitive value.');
        const v50 = callback(v49);
        v50;
        return;
    }
    const v51 = options.cmdPrefix;
    const v52 = v51 || '';
    prefix = parse(v52, params);
    if (prefix) {
        const v53 = prefix + ' ';
        cmd = v53 + cmd;
    }
    const v62 = function (error, output) {
        if (output) {
            const v54 = key + ': ';
            let v55;
            if (key) {
                v55 = v54;
            } else {
                v55 = '';
            }
            const v56 = v55 + output;
            const v57 = collector.push(v56);
            v57;
        }
        if (error) {
            const v58 = error.terminated;
            let v59;
            if (v58) {
                v59 = collector;
            } else {
                v59 = undefined;
            }
            const v60 = callback(error, v59);
            v60;
            return;
        }
        const v61 = run(collector, commands, keys, params, options, callback);
        v61;
    };
    const v63 = execute(collector, cmd, options, v62);
    v63;
};