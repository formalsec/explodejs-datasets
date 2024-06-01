'use strict';
var fs = require('fs');
var url = require('url');
var crypto = require('crypto');
const v74 = require('../debug');
const v75 = process.env;
const v76 = v75.QUIET;
const v77 = v76 === 'true';
var debug = v74(v77);
const v146 = function (options) {
    const v78 = {};
    options = options || v78;
    var _expirationTime = 10;
    const v145 = function (req, res, next) {
        const v79 = req.url;
        var resource = url.parse(v79);
        const v80 = process.cwd();
        const v81 = resource.pathname;
        const v82 = v81 || '/';
        var filePath = v80 + v82;
        const v83 = filePath.length;
        const v84 = v83 - 1;
        const v85 = filePath[v84];
        const v86 = v85 === '/';
        if (v86) {
            filePath += 'index.html';
        }
        var startTime = process.hrtime();
        const v128 = function (err, stat) {
            if (err) {
                const v87 = next(err);
                return v87;
            }
            const v88 = crypto.createHash('md5');
            const v89 = stat.ctime;
            const v90 = stat.ctime;
            const v91 = v90.getTime();
            const v92 = v89 && v91;
            const v93 = [
                filePath,
                v92
            ];
            const v94 = v93.join('');
            const v95 = new Buffer(v94);
            const v96 = v88.update(v95);
            var eTag = v96.digest('hex');
            const v97 = '"' + eTag;
            eTag = v97 + '"';
            const v98 = req.headers;
            const v99 = {};
            var headers = v98 || v99;
            const v100 = headers['if-none-match'];
            var matchETag = v100 === eTag;
            const v101 = headers['if-modified-since'];
            const v102 = new Date(v101);
            const v103 = v102.getTime();
            const v104 = Date.now();
            const v105 = v103 - v104;
            var matchExpiration = v105 >= 0;
            const v106 = res.setHeader('ETag', eTag);
            v106;
            const v107 = matchExpiration && matchETag;
            if (v107) {
                const v108 = res.writeHead(304);
                v108;
                const v109 = res.end();
                v109;
                return;
            }
            const v110 = Date.now();
            const v111 = _expirationTime * 1000;
            const v112 = v110 + v111;
            const v113 = new Date(v112);
            const v114 = res.setHeader('Last-Modified', v113);
            v114;
            const v115 = 'max-age=' + _expirationTime;
            const v116 = res.setHeader('Cache-Control', v115);
            v116;
            var readStream = fs.createReadStream(filePath);
            const v118 = function () {
                const v117 = readStream.pipe(res);
                v117;
            };
            const v119 = readStream.on('open', v118);
            v119;
            const v126 = function (err) {
                const v120 = err.code;
                const v121 = v120 === 'ENOENT';
                const v122 = err && v121;
                if (v122) {
                    const v123 = next();
                    return v123;
                } else {
                    const v124 = res.writeHead(500);
                    v124;
                    const v125 = res.end();
                    v125;
                }
            };
            const v127 = readStream.on('error', v126);
            v127;
        };
        const v129 = fs.stat(filePath, v128);
        v129;
        const v143 = function () {
            var deltaTime = process.hrtime(startTime);
            const v130 = res.statusCode;
            const v131 = req.method;
            const v132 = req.url;
            const v133 = deltaTime[0];
            const v134 = v133 * 1000000000;
            const v135 = deltaTime[1];
            const v136 = v134 + v135;
            const v137 = v136 / 1000000;
            const v138 = Math.ceil(v137);
            const v139 = v138 + 'ms';
            const v140 = [
                v130,
                v131,
                v132,
                v139
            ];
            const v141 = v140.join(' ');
            const v142 = debug.log(v141);
            v142;
        };
        const v144 = res.on('finish', v143);
        v144;
    };
    return v145;
};
module.exports = v146;