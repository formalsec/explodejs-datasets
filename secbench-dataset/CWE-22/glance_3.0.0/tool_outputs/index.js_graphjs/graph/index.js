const v99 = require('events');
var EE = v99.EventEmitter;
const v100 = require('url');
var parse = v100.parse;
var http = require('http');
var path = require('path');
var fs = require('fs');
var htmlls = require('html-ls');
var filed = require('filed');
var xtend = require('xtend');
var defaults = require('./lib/config');
module.exports = createGlance;
const Glance = function (options) {
    const v101 = EE.call(this);
    v101;
    const v102 = {};
    const v103 = options || v102;
    options = xtend(defaults, v103);
    const v104 = options.port;
    this.port = v104;
    const v105 = options.hideindex;
    this.hideindex = v105;
    const v106 = options.indices;
    this.indices = v106;
    const v107 = options.dir;
    const v108 = path.normalize(v107);
    this.dir = v108;
    const v109 = options.nodot;
    this.nodot = v109;
    return this;
};
const v110 = EE.prototype;
const v111 = Object.create(v110);
Glance.prototype = v111;
const v112 = Glance.prototype;
const Glance$start = function () {
    var self = this;
    const v114 = function (req, res) {
        const v113 = self.serveRequest(req, res);
        v113;
    };
    const v115 = http.createServer(v114);
    self.server = v115;
    const v116 = self.server;
    const v117 = self.port;
    const v118 = v116.listen(v117, emitStarted);
    v118;
    const v119 = self.server;
    const v121 = function (con) {
        const v120 = con.setTimeout(500);
        v120;
    };
    const v122 = v119.addListener('connection', v121);
    v122;
    const v123 = self.on('error', showError);
    v123;
    const emitStarted = function () {
        const v124 = self.server;
        const v125 = self.emit('started', v124);
        v125;
    };
};
v112.start = Glance$start;
const v126 = Glance.prototype;
const Glance$stop = function () {
    const v127 = this.server;
    if (v127) {
        const v128 = this.server;
        const v129 = v128.close();
        v129;
    }
};
v126.stop = Glance$stop;
const v130 = Glance.prototype;
const Glance$serveRequest = function (req, res) {
    var request = {};
    var self = this;
    const v131 = self.dir;
    const v132 = req.url;
    const v133 = parse(v132);
    const v134 = v133.pathname;
    const v135 = decodeURIComponent(v134);
    const v136 = path.join(v131, v135);
    request.fullPath = v136;
    const v137 = req.socket;
    const v138 = v137.remoteAddress;
    request.ip = v138;
    const v139 = req.method;
    const v140 = v139.toLowerCase();
    request.method = v140;
    request.response = res;
    const v141 = request.method;
    const v142 = v141 !== 'get';
    if (v142) {
        const v143 = self.emit('error', 405, request, res);
        return v143;
    }
    const v144 = self.nodot;
    const v145 = request.fullPath;
    const v146 = path.basename(v145);
    const v147 = /^\./.test(v146);
    const v148 = v144 && v147;
    if (v148) {
        const v149 = self.emit('error', 404, request, res);
        return v149;
    }
    const v150 = request.fullPath;
    const v151 = fs.stat(v150, statFile);
    v151;
    const statFile = function (err, stat) {
        if (err) {
            const v152 = self.emit('error', 404, request, res);
            return v152;
        }
        const v153 = stat.isDirectory();
        const v154 = !v153;
        if (v154) {
            const v155 = self.emit('read', request);
            v155;
            const v156 = request.fullPath;
            const v157 = filed(v156);
            const v158 = v157.pipe(res);
            return v158;
        }
        const v159 = self.hideindex;
        if (v159) {
            const v160 = self.emit('error', 403, request, res);
            return v160;
        }
        const v161 = self.indices;
        const v162 = !v161;
        const v163 = self.indices;
        const v164 = v163.length;
        const v165 = !v164;
        const v166 = v162 || v165;
        if (v166) {
            const v167 = listFiles();
            return v167;
        }
        const v168 = self.indices;
        var indices = v168.slice();
        const v169 = indices.shift();
        const v170 = findIndex(v169);
        v170;
        const findIndex = function (indexTest) {
            const v171 = request.fullPath;
            const v172 = path.join(v171, indexTest);
            const v173 = fs.exists(v172, check);
            v173;
            const check = function (hasIndex) {
                if (hasIndex) {
                    const v174 = req.url;
                    const v175 = v174 + '/';
                    req.url = v175 + indexTest;
                    const v176 = self.serveRequest(req, res);
                    return v176;
                }
                const v177 = indices.length;
                const v178 = !v177;
                if (v178) {
                    const v179 = listFiles();
                    return v179;
                }
                const v180 = indices.shift();
                const v181 = findIndex(v180);
                v181;
            };
        };
        const listFiles = function () {
            const v182 = request.fullPath;
            var listPath = v182.replace(/\/$/, '');
            const v183 = { 'content-type': 'text/html;charset=utf-8' };
            const v184 = res.writeHead(200, v183);
            v184;
            const v185 = self.nodot;
            const v186 = { hideDot: v185 };
            const v187 = htmlls(listPath, v186);
            const v188 = v187.pipe(res);
            v188;
            const v189 = self.emit('read', request);
            return v189;
        };
    };
};
v130.serveRequest = Glance$serveRequest;
const showError = function (errorCode, req, res) {
    const v190 = { 'content-type': 'text/html;charset=utf-8' };
    const v191 = res.writeHead(errorCode, v190);
    v191;
    const v192 = errorCode + '.html';
    const v193 = path.join(__dirname, 'errors', v192);
    const v194 = fs.createReadStream(v193);
    const v195 = v194.pipe(res);
    v195;
};
const createGlance = function (options) {
    const v196 = new Glance(options);
    return v196;
};