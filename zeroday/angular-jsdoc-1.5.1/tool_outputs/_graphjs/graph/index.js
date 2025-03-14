'use strict';
const v56 = require('child_process');
var spawn = v56.spawn;
const v57 = require('util');
var extend = v57._extend;
var path = require('path');
var Q = require('q');
var util = require('util');
var runCommand = function (cmd, args) {
    var deferred = Q.defer();
    const v58 = 'cwd is: ' + __dirname;
    const v59 = console.log(v58);
    v59;
    const v60 = args.join(' ');
    const v61 = console.log('angularJsdoc Running command\n', cmd, v60);
    v61;
    let child;
    const v62 = process.platform;
    const v63 = v62 === 'win32';
    const v64 = cmd + ' ';
    const v65 = args.join(' ');
    const v66 = v64 + v65;
    const v67 = [
        '/C',
        v66
    ];
    const v68 = process.env;
    const v69 = v68.PWD;
    const v70 = process.env;
    const v71 = {
        cwd: v69,
        env: v70
    };
    const v72 = spawn('cmd', v67, v71);
    const v73 = spawn(cmd, args);
    if (v63) {
        child = v72;
    } else {
        child = v73;
    }
    var result = '';
    const v74 = child.stdout;
    const v75 = function (data) {
        result += data;
    };
    const v76 = v74.on('data', v75);
    v76;
    const v77 = child.stderr;
    const v78 = function (data) {
        result += data;
    };
    const v79 = v77.on('data', v78);
    v79;
    const v80 = child.stdout;
    const v82 = function () {
        const v81 = deferred.resolve(result);
        v81;
    };
    const v83 = v80.on('end', v82);
    v83;
    const v84 = deferred.promise;
    return v84;
};
var angularJsdoc = function (dirs, optionsArg, callback) {
    const v85 = {};
    optionsArg = optionsArg || v85;
    const v86 = Array.isArray(dirs);
    const v87 = dirs.split(' ');
    if (v86) {
        dirs = dirs;
    } else {
        dirs = v87;
    }
    const v88 = optionsArg.command;
    const v89 = path.join('node_modules', 'jsdoc', 'jsdoc.js');
    const v90 = util.format('node %s', v89);
    var command = v88 || v90;
    const v91 = path.join(__dirname, 'common', 'conf.json');
    const v92 = path.join(__dirname, 'default');
    const v93 = {
        configure: v91,
        template: v92,
        destination: 'docs',
        readme: 'README.md'
    };
    var options = extend(v93, optionsArg);
    const v94 = optionsArg.template;
    const v95 = optionsArg.template;
    const v96 = v95.match(/^[\w-]+$/i);
    const v97 = v94 && v96;
    if (v97) {
        const v98 = optionsArg.template;
        const v99 = path.join(__dirname, v98);
        options.template = v99;
    }
    ;
    const v100 = options.configure;
    const v101 = options.template;
    const v102 = options.destination;
    const v103 = options.readme;
    var args = [
        '--configure',
        v100,
        '--template',
        v101,
        '--destination',
        v102,
        '--readme',
        v103
    ];
    const v104 = ['--recurse'];
    const v105 = args.concat(v104);
    args = v105.concat(dirs);
    const v106 = runCommand(command, args);
    const v109 = function (output) {
        const v107 = callback(output);
        const v108 = callback && v107;
        v108;
    };
    const v110 = v106.then(v109);
    v110;
};
module.exports = angularJsdoc;