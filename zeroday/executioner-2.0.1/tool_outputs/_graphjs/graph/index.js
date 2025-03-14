var extend = require('mixly/immutable');
var run = require('./lib/run.js');
var terminate = require('./lib/terminate.js');
module.exports = executioner;
const v95 = module.exports;
v95.terminate = terminate;
const v96 = {};
executioner.options = v96;
const executioner = function (commands, params, options, callback) {
    var keys;
    var execOptions;
    var collector = [];
    const v97 = typeof options;
    const v98 = v97 == 'function';
    if (v98) {
        callback = options;
        options = {};
    }
    params = extend(params);
    const v99 = executioner.options;
    const v100 = {};
    const v101 = v99 || v100;
    const v102 = {};
    const v103 = options || v102;
    execOptions = extend(v101, v103);
    const v104 = typeof commands;
    const v105 = v104 == 'string';
    if (v105) {
        commands = [commands];
    }
    const v106 = Array.isArray(commands);
    const v107 = !v106;
    if (v107) {
        keys = Object.keys(commands);
    }
    const v114 = function (err, results) {
        const v108 = results.length;
        const v109 = v108 == 1;
        const v110 = results && v109;
        const v111 = results[0];
        let v112;
        if (v110) {
            v112 = v111;
        } else {
            v112 = results;
        }
        const v113 = callback(err, v112);
        v113;
    };
    const v115 = run(collector, commands, keys, params, execOptions, v114);
    v115;
    return collector;
};