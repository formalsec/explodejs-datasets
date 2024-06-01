var http = require('http');
var fs = require('fs');
var child = require('child_process');
var util = require('util');
var path = require('path');
var chokidar = require('chokidar');
var program = require('commander');
const v89 = program.usage('[options] <entries> -- [bundler options]');
v89;
const v90 = process.cwd();
const v91 = program.option('-C, --directory <path>', 'change the working directory', v90);
v91;
const v92 = program.option('-W, --watch <glob>', 'specify the file watcher glob pattern', '*/**');
v92;
const v93 = program.option('-b, --bundler <cmd>', 'specify the bundle command', 'browserify');
v93;
const v94 = program.option('-p, --port <port>', 'specify the http port', 4000);
v94;
const v95 = program.option('-h, --host <host>', 'specify the http hostname', undefined);
v95;
var pkg = require('./package.json');
const v96 = pkg.version;
const v97 = program.version(v96);
v97;
const v98 = process.argv;
var sub = v98.indexOf('--');
const v99 = -1;
const v100 = index > v99;
if (v100) {
    const v101 = process.argv;
    const v102 = v101.slice(0, sub);
    const v103 = program.parse(v102);
    v103;
    const v104 = program.bundler;
    const v105 = process.argv;
    const v106 = sub + 1;
    const v107 = v105.slice(v106);
    const v108 = v104.concat(v107);
    v108;
} else {
    const v109 = process.argv;
    const v110 = program.parse(v109);
    v110;
}
const v111 = program.bundler;
const v112 = program.args;
const v113 = v112.join(' ');
const v114 = v111.concat(' ', v113);
program.bundler = v114;
const file = function (req, res) {
    const v115 = program.directory;
    const v116 = req.url;
    var filepath = path.join(v115, v116);
    const v128 = function (exists) {
        if (exists) {
            const v123 = function (error, buffer) {
                if (error) {
                    const v117 = res.writeHead(500);
                    v117;
                    const v118 = res.write('500');
                    v118;
                    const v119 = res.end();
                    v119;
                }
                const v120 = res.writeHead(200);
                v120;
                const v121 = res.write(buffer);
                v121;
                const v122 = res.end();
                v122;
            };
            const v124 = fs.readFile(filepath, v123);
            v124;
        } else {
            const v125 = res.writeHead(404);
            v125;
            const v126 = res.write('404');
            v126;
            const v127 = res.end();
            v127;
        }
    };
    const v129 = fs.exists(filepath, v128);
    v129;
};
const bundle = function (req, res) {
    const v130 = res.setHeader('content-type', 'text/javascript');
    v130;
    const v131 = program.bundler;
    const v132 = console.log(v131);
    v132;
    const v133 = program.bundler;
    const v138 = function (error, stdout, stderr) {
        if (error) {
            const v134 = error.toString();
            const v135 = res.write(v134);
            v135;
        }
        if (stderr) {
            const v136 = console.error(stderr);
            v136;
        }
        const v137 = res.end(stdout);
        v137;
    };
    var bundler = child.exec(v133, v138);
};
const index = function (req, res) {
    const v142 = function (exists) {
        if (exists) {
            const v139 = file(req, res);
            return v139;
        } else {
            const v140 = res.setHeader('content-type', 'text/html');
            v140;
            const v141 = res.end('<!doctype html><head><meta charset="utf-8"></head><body><script src="index.js"></script></body></html>');
            v141;
        }
    };
    const v143 = fs.exists('index.html', v142);
    v143;
};
const watch = function (req, res) {
    const v144 = req.setTimeout(Infinity);
    v144;
    const v145 = {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    };
    const v146 = res.writeHead(200, v145);
    v146;
    const v147 = res.write('\n');
    v147;
    var listener = function (filename) {
        const v148 = filename[0];
        const v149 = v148 == '.';
        if (v149) {
            return;
        }
        const v150 = path.extname(filename);
        const v151 = v150 == '.js';
        if (v151) {
            filename = 'index.js';
        }
        const v152 = 'data: ' + filename;
        const v153 = v152 + '\n\n';
        const v154 = res.write(v153);
        v154;
    };
    const v155 = watcher.on('change', listener);
    v155;
    const v157 = function () {
        const v156 = watcher.removeListener('change', listener);
        v156;
    };
    const v158 = res.on('close', v157);
    v158;
};
const v159 = program.watch;
var watcher = chokidar.watch(v159);
const v161 = function (event, filename) {
    const v160 = console.log(event, filename);
    v160;
};
const v162 = watcher.on('change', v161);
v162;
var server = http.createServer();
const v168 = function (req, res) {
    const v163 = req.url;
    switch (v163) {
    case '/watch':
        const v164 = watch(req, res);
        return v164;
    case '/index.js':
        const v165 = bundle(req, res);
        return v165;
    case '/':
        const v166 = index(req, res);
        return v166;
    default:
        const v167 = file(req, res);
        return v167;
    }
};
const v169 = server.on('request', v168);
v169;
const v170 = program.port;
const v171 = program.host;
const v175 = function () {
    var address = server.address();
    const v172 = address.address;
    const v173 = address.port;
    const v174 = console.log('serving on http://%s:%d', v172, v173);
    v174;
};
const v176 = server.listen(v170, v171, v175);
v176;