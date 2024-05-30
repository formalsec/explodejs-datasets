var loopback = require('loopback');
var boot = require('loopback-boot');
var childProcess = require('child_process');
var async = require('async');
var path = require('path');
const v87 = require('debug');
var debug = v87('strong-nginx-controller:server');
var nginxConf = require('./nginx-conf');
const setup = function (baseDir, nginxPath, controlEndpoint, listenEndpoint, nginxRoot) {
    var app = loopback();
    const v88 = app.set('nginxPath', nginxPath);
    v88;
    const v89 = controlEndpoint.hostname;
    const v90 = app.set('host', v89);
    v90;
    const v91 = controlEndpoint.port;
    const v92 = app.set('port', v91);
    v92;
    const v93 = listenEndpoint.hostname;
    const v94 = app.set('nginxHost', v93);
    v94;
    const v95 = listenEndpoint.port;
    const v96 = app.set('nginxPort', v95);
    v96;
    const v97 = app.set('nginxRoot', nginxRoot);
    v97;
    const v98 = app.set('baseDir', baseDir);
    v98;
    const _reloadNginx = function (next) {
        const v99 = nginxConf.bind(null, app);
        const v100 = app._nginxCmd;
        const v101 = v100.bind(app, 'reload');
        const v102 = [
            v99,
            v101
        ];
        const v109 = function (err) {
            if (err) {
                const v103 = next(err);
                return v103;
            }
            const v104 = app.emit('reloaded');
            v104;
            const v105 = app.get('host');
            const v106 = app.get('port');
            const v107 = console.log('StrongLoop Nginx Controller listening at: http://%s:%s', v105, v106);
            v107;
            const v108 = next();
            v108;
        };
        const v110 = async.series(v102, v109);
        v110;
    };
    app._reloadNginx = _reloadNginx;
    const _configureNginx = function (next) {
        const v111 = nginxConf(app, next);
        v111;
    };
    app._configureNginx = _configureNginx;
    const _nginxCmd = function (action, cb) {
        const v112 = app.get('baseDir');
        var nginxConfdir = path.join(v112, 'nginx');
        var configFile = path.join(nginxConfdir, 'nginx.conf');
        const v113 = app.get('nginxPath');
        var cmd = [
            v113,
            '-p',
            nginxConfdir,
            '-c',
            configFile
        ];
        const v114 = action !== 'start';
        if (v114) {
            const v115 = cmd.push('-s', action);
            v115;
        }
        const v116 = cmd.join(' ');
        const v117 = debug('CMD: %s', v116);
        v117;
        const v118 = cmd.join(' ');
        const v123 = function (err, stdout, stderr) {
            if (err) {
                const v119 = debug('error', err);
                v119;
            }
            const v120 = debug('stdout: <\n%s>', stdout);
            v120;
            const v121 = debug('stderr: <\n%s>', stderr);
            v121;
            const v122 = cb(err);
            v122;
        };
        const v124 = childProcess.exec(v118, v123);
        v124;
    };
    app._nginxCmd = _nginxCmd;
    const start = function (cb) {
        var controlAddr;
        const v130 = function (done) {
            const v128 = function () {
                controlAddr = this.address();
                const v125 = this.address();
                const v126 = debug('control listened on:', v125);
                v126;
                const v127 = done();
                return v127;
            };
            const v129 = app.listen(v128);
            v129;
        };
        const v131 = app._configureNginx;
        const v132 = v131.bind(app);
        const v133 = app._nginxCmd;
        const v134 = v133.bind(app, 'start');
        const v135 = [
            v130,
            v132,
            v134
        ];
        const v142 = function (err) {
            if (err) {
                const v136 = err.message;
                const v137 = console.log('Error starting: ', v136);
                v137;
                throw err;
            }
            const v138 = debug.enabled;
            if (v138) {
                const v139 = app.emit('started');
                v139;
            }
            const v140 = app.emit('listening', controlAddr);
            v140;
            if (cb) {
                const v141 = cb();
                return v141;
            }
        };
        const v143 = async.series(v135, v142);
        v143;
    };
    app.start = start;
    const stop = function (cb) {
        const v144 = app._nginxCmd('stop', cb);
        v144;
    };
    app.stop = stop;
    const v145 = stopWhenDone(app);
    v145;
    const v146 = loopback.favicon();
    const v147 = app.use(v146);
    v147;
    const v148 = loopback.compress();
    const v149 = app.use(v148);
    v149;
    const v150 = boot(app, __dirname);
    v150;
    const v151 = loopback.urlNotFound();
    const v152 = app.use(v151);
    v152;
    const v153 = loopback.errorHandler();
    const v154 = app.use(v153);
    v154;
    return app;
};
const stopWhenDone = function (app) {
    const dieBy = function (signal) {
        const v155 = console.log('stopped with %s', signal);
        v155;
        const v161 = function (err) {
            if (err) {
                const v156 = debug('Error while exiting: ', err);
                v156;
                const v157 = 'An error occurred while stopping. ' + 'There may be a stale nginx process.';
                const v158 = console.log(v157);
                v158;
            }
            const v159 = process.pid;
            const v160 = process.kill(v159, signal);
            v160;
        };
        const v162 = app.stop(v161);
        v162;
    };
    const dieOn = function (signal) {
        const v163 = dieBy.bind(null, signal);
        const v164 = process.once(signal, v163);
        v164;
    };
    const v165 = dieOn('SIGINT');
    v165;
    const v166 = dieOn('SIGTERM');
    v166;
    const v168 = function () {
        const v167 = app.stop();
        v167;
    };
    const v169 = process.on('exit', v168);
    v169;
    const v170 = app._reloadNginx;
    const v171 = v170.bind(app);
    const v172 = process.once('SIGHUP', v171);
    v172;
};
module.exports = setup;