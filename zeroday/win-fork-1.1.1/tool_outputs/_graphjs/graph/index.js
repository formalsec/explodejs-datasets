const v65 = require('child_process');
var cSpawn = v65.spawn;
const v66 = require('os');
var os = v66.type();
module.exports = spawn;
exports = module.exports;
const spawn = function (command, args, options) {
    const v67 = os === 'Windows_NT';
    if (v67) {
        const v68 = command === 'rm';
        if (v68) {
            command = 'rmdir';
            const v69 = args[0];
            const v70 = v69 === '-rf';
            const v71 = args[0];
            const v72 = v71 == '-fr';
            const v73 = v70 || v72;
            if (v73) {
                args[0] = '/q';
                const v74 = args.unshift('/s');
                v74;
            }
            const v75 = args[0];
            const v76 = v75 === '-f';
            if (v76) {
                args[0] = '/q';
            }
            const v77 = args[0];
            const v78 = v77 === '-r';
            if (v78) {
                args[0] = '/s';
            }
        }
        const v79 = [];
        args = args || v79;
        const v80 = {};
        options = options || v80;
        var match;
        var matchA;
        if (matchA = /((?:[A-Z_]+\=[^ \=]+ )+)?([^\r\n]+)/.exec(command)) {
            try {
                const v81 = require('fs');
                const v82 = matchA[2];
                var file = v81.readFileSync(v82, 'utf8');
                if (match = /\#\!\/usr\/bin\/env ([^\r\n]+)/.exec(file)) {
                    const v83 = matchA[2];
                    const v84 = args.unshift(v83);
                    v84;
                    const v85 = matchA[1];
                    const v86 = v85 || '';
                    const v87 = match[1];
                    command = v86 + v87;
                }
            } catch (ex) {
            }
        }
        if (match = /((?:[A-Z_]+\=[^ \=]+ )+)([^\r\n]+)/.exec(command)) {
            command = match[2];
            const v88 = options.env;
            const v89 = process.env;
            const v90 = shallowClone(v89);
            options.env = v88 || v90;
            const v91 = match[1];
            var env = v91.split(' ');
            const v97 = function (v) {
                v = v.split('=');
                const v92 = v.length;
                const v93 = v92 === 2;
                if (v93) {
                    const v94 = options.env;
                    const v95 = v[0];
                    const v96 = v[1];
                    v94[v95] = v96;
                }
            };
            const v98 = env.forEach(v97);
            v98;
        }
        const v99 = args.unshift(command);
        v99;
        const v100 = args.unshift('/c');
        v100;
        command = 'cmd';
    }
    const v101 = cSpawn(command, args, options);
    return v101;
};
const shallowClone = function (obj) {
    var out = {};
    const v102 = Object.keys(obj);
    const v104 = function (key) {
        const v103 = obj[key];
        out[key] = v103;
    };
    const v105 = v102.forEach(v104);
    v105;
    return out;
};
var fs = require('fs');
const v106 = require('path');
var join = v106.join;
exports.transformDir = transformDir;
const transformDir = function (dirname, options) {
    const v107 = {};
    options = options || v107;
    var dir = fs.readdirSync(dirname);
    const v118 = function (child) {
        const v108 = join(dirname, child);
        const v109 = fs.statSync(v108);
        const v110 = v109.isDirectory();
        if (v110) {
            const v111 = child !== 'node_modules';
            const v112 = child !== '.git';
            const v113 = v111 && v112;
            if (v113) {
                const v114 = join(dirname, child);
                const v115 = transformDir(v114, options);
                v115;
            }
        } else {
            const v116 = join(dirname, child);
            const v117 = transform(v116, options);
            v117;
        }
    };
    const v119 = dir.forEach(v118);
    v119;
};
exports.transform = transform;
const transform = function (file, options) {
    const v120 = {};
    options = options || v120;
    const v121 = fs.readFileSync(file, 'utf8');
    var content = v121.toString();
    const v122 = /\r\n/g.test(content);
    if (v122) {
        const v123 = 'converting ' + file;
        const v124 = console.warn(v123);
        v124;
        const v125 = options.preview;
        const v126 = !v125;
        if (v126) {
            const v127 = content.replace(/\r\n/g, '\n');
            const v128 = fs.writeFileSync(file, v127, 'utf8');
            v128;
        }
    }
};