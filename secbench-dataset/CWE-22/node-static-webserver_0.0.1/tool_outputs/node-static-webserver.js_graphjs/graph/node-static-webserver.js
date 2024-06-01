var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var NodeStaticWebServer = function (contentPath, port, address) {
    this._contentPath = contentPath;
    this._port = port || 80;
    this._address = address;
    var self = this;
    const v83 = function (req, res) {
        const v82 = self._onCreateServer(req, res);
        v82;
    };
    const v84 = http.createServer(v83);
    const v85 = v84.listen(port, address);
    this._server = v85;
    const v86 = this._server;
    return v86;
};
const v87 = NodeStaticWebServer.prototype;
const v105 = function (request, response) {
    const v88 = request.headers;
    var host = v88.host;
    var self = this;
    const v89 = !host;
    if (v89) {
        const v90 = this._badHost(response);
        v90;
        return;
    }
    const v91 = request.url;
    const v92 = url.parse(v91);
    var uri = v92.pathname;
    const v93 = this._contentPath;
    var filename = path.join(v93, host, uri);
    const v94 = host.substr(0, 4);
    const v95 = v94.toLowerCase();
    const v96 = v95 === 'www.';
    if (v96) {
        const v97 = host.substr(4);
        const v98 = 'http://' + v97;
        const v99 = this._httpRedirect(response, v98);
        v99;
        return;
    }
    const v103 = function (filename, stats) {
        const v100 = request.headers;
        const v101 = v100['if-modified-since'];
        const v102 = self._responseFile(response, filename, stats, v101);
        v102;
    };
    const v104 = this._checkFile(filename, v103);
    v104;
};
v87._onCreateServer = v105;
const v106 = NodeStaticWebServer.prototype;
const v118 = function (filename, callback) {
    const v116 = function (err, stats) {
        const v107 = !stats;
        if (v107) {
            const v108 = callback();
            v108;
        } else {
            const v109 = stats.isDirectory();
            if (v109) {
                filename = path.join(filename, 'index.html');
                const v113 = function (err, stats) {
                    const v110 = !stats;
                    if (v110) {
                        const v111 = callback();
                        v111;
                    } else {
                        const v112 = callback(filename, stats);
                        v112;
                    }
                };
                const v114 = fs.stat(filename, v113);
                v114;
            } else {
                const v115 = callback(filename, stats);
                v115;
            }
        }
    };
    const v117 = fs.stat(filename, v116);
    v117;
};
v106._checkFile = v118;
const v119 = NodeStaticWebServer.prototype;
const v143 = function (response, filename, stats, lastModifiedSince) {
    const v120 = !filename;
    if (v120) {
        const v121 = this._httpNotFound(response);
        v121;
        return;
    }
    const v122 = stats.mtime;
    var lastModified = v122.toUTCString();
    const v123 = lastModifiedSince === lastModified;
    if (v123) {
        const v124 = { 'Last-Modified': lastModified };
        const v125 = response.writeHead(304, v124);
        v125;
        const v126 = response.end();
        v126;
        return;
    }
    var self = this;
    var readStream = fs.createReadStream(filename);
    const v134 = function () {
        const v127 = self.mime;
        const v128 = path.extname(filename);
        const v129 = v127[v128];
        const v130 = v129 || 'application/octet-stream';
        const v131 = stats.size;
        var headers = {};
        headers['Content-Type'] = v130;
        headers['Last-Modified'] = lastModified;
        headers['Content-Length'] = v131;
        const v132 = response.writeHead(200, headers);
        v132;
        const v133 = readStream.pipe(response);
        v133;
    };
    const v135 = readStream.on('open', v134);
    v135;
    const v141 = function (err) {
        const v136 = { 'Content-Type': 'text/plain' };
        const v137 = response.writeHead(500, v136);
        v137;
        const v138 = err + '\n';
        const v139 = response.write(v138);
        v139;
        const v140 = response.end();
        v140;
    };
    const v142 = readStream.on('error', v141);
    v142;
};
v119._responseFile = v143;
const v144 = NodeStaticWebServer.prototype;
const v149 = function (response) {
    const v145 = { 'Content-Type': 'text/plain' };
    const v146 = response.writeHead(434, v145);
    v146;
    const v147 = response.write('Requested host unavailable\n');
    v147;
    const v148 = response.end();
    v148;
};
v144._httpBadHost = v149;
const v150 = NodeStaticWebServer.prototype;
const v155 = function (response) {
    const v151 = { 'Content-Type': 'text/plain' };
    const v152 = response.writeHead(404, v151);
    v152;
    const v153 = response.write('Not found\n');
    v153;
    const v154 = response.end();
    v154;
};
v150._httpNotFound = v155;
const v156 = NodeStaticWebServer.prototype;
const v160 = function (response, location) {
    const v157 = { 'Location': location };
    const v158 = response.writeHead(301, v157);
    v158;
    const v159 = response.end();
    v159;
};
v156._httpRedirect = v160;
const v161 = NodeStaticWebServer.prototype;
const v162 = {};
v162['.html'] = 'text/html';
v162['.jpeg'] = 'image/jpeg';
v162['.jpg'] = 'image/jpeg';
v162['.png'] = 'image/png';
v162['.gif'] = 'image/gif';
v162['.css'] = 'text/css';
v162['.js'] = 'text/javascript';
v161.mime = v162;
module.exports = NodeStaticWebServer;