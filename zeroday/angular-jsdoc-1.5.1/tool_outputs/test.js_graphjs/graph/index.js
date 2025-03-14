'use strict';
const v1 = require('child_process');
var spawn = v1.spawn;
const v2 = require('util');
var extend = v2._extend;
var path = require('path');
var Q = require('q');
var util = require('util');
var runCommand = function (cmd, args) {
    var deferred = Q.defer();
    const v3 = 'cwd is: ' + __dirname;
    const v4 = console.log(v3);
    v4;
    const v5 = args.join(' ');
    const v6 = console.log('angularJsdoc Running command\n', cmd, v5);
    v6;
    let child;
    const v7 = process.platform;
    const v8 = v7 === 'win32';
    const v9 = cmd + ' ';
    const v10 = args.join(' ');
    const v11 = v9 + v10;
    const v12 = [
        '/C',
        v11
    ];
    const v13 = process.env;
    const v14 = v13.PWD;
    const v15 = process.env;
    const v16 = {
        cwd: v14,
        env: v15
    };
    const v17 = spawn('cmd', v12, v16);
    const v18 = spawn(cmd, args);
    if (v8) {
        child = v17;
    } else {
        child = v18;
    }
    var result = '';
    const v19 = child.stdout;
    const v20 = function (data) {
        result += data;
    };
    const v21 = v19.on('data', v20);
    v21;
    const v22 = child.stderr;
    const v23 = function (data) {
        result += data;
    };
    const v24 = v22.on('data', v23);
    v24;
    const v25 = child.stdout;
    const v27 = function () {
        const v26 = deferred.resolve(result);
        v26;
    };
    const v28 = v25.on('end', v27);
    v28;
    const v29 = deferred.promise;
    return v29;
};
var angularJsdoc = function (dirs, optionsArg, callback) {
    const v30 = {};
    optionsArg = optionsArg || v30;
    const v31 = Array.isArray(dirs);
    const v32 = dirs.split(' ');
    if (v31) {
        dirs = dirs;
    } else {
        dirs = v32;
    }
    const v33 = optionsArg.command;
    const v34 = path.join('node_modules', 'jsdoc', 'jsdoc.js');
    const v35 = util.format('node %s', v34);
    var command = v33 || v35;
    const v36 = path.join(__dirname, 'common', 'conf.json');
    const v37 = path.join(__dirname, 'default');
    const v38 = {
        configure: v36,
        template: v37,
        destination: 'docs',
        readme: 'README.md'
    };
    var options = extend(v38, optionsArg);
    const v39 = optionsArg.template;
    const v40 = optionsArg.template;
    const v41 = v40.match(/^[\w-]+$/i);
    const v42 = v39 && v41;
    if (v42) {
        const v43 = optionsArg.template;
        const v44 = path.join(__dirname, v43);
        options.template = v44;
    }
    ;
    const v45 = options.configure;
    const v46 = options.template;
    const v47 = options.destination;
    const v48 = options.readme;
    var args = [
        '--configure',
        v45,
        '--template',
        v46,
        '--destination',
        v47,
        '--readme',
        v48
    ];
    const v49 = ['--recurse'];
    const v50 = args.concat(v49);
    args = v50.concat(dirs);
    const v51 = runCommand(command, args);
    const v54 = function (output) {
        const v52 = callback(output);
        const v53 = callback && v52;
        v53;
    };
    const v55 = v51.then(v54);
    v55;
};
module.exports = angularJsdoc;