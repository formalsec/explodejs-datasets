'use strict';
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const url = require('url');
const mime = require('mime');
const statFile = function (filePath, callback) {
    const v109 = function (err, stats) {
        const v97 = err.code;
        const v98 = v97 === 'ENOENT';
        const v99 = err.code;
        const v100 = v99 === 'ENOTDIR';
        const v101 = v98 || v100;
        const v102 = err && v101;
        if (v102) {
            const error = new Error('Resource does not exist');
            error.httpCode = 404;
            const v103 = callback(error);
            v103;
        } else {
            const v104 = stats.isFile();
            const v105 = !v104;
            if (v105) {
                const error = new Error('Resource is not a file');
                error.httpCode = 400;
                const v106 = callback(error);
                v106;
            } else {
                if (err) {
                    const error = new Error('Server error');
                    error.httpCode = 500;
                    const v107 = callback(error);
                    v107;
                } else {
                    const v108 = callback(null, stats);
                    v108;
                }
            }
        }
    };
    const v110 = fs.stat(filePath, v109);
    v110;
};
const checkCompress = function (basePath, callback) {
    const gPath = `${ basePath }.gz`;
    const v116 = function (err, stats) {
        const v111 = stats.isFile();
        const v112 = !v111;
        const v113 = err || v112;
        if (v113) {
            const v114 = callback(null, basePath);
            return v114;
        }
        const v115 = callback(null, gPath);
        v115;
    };
    const v117 = fs.stat(gPath, v116);
    v117;
};
const createServerEtag = function (inode, mTime) {
    const v118 = inode.toString();
    const v119 = mTime.getTime();
    const v120 = v119.toString();
    const str = v118 + v120;
    const v121 = crypto.createHash('md5');
    const v122 = v121.update(str);
    const v123 = v122.digest('hex');
    return v123;
};
const should304 = function (req, stats) {
    const v124 = req.headers;
    const clientEtag = v124['if-none-match'];
    const v125 = !clientEtag;
    if (v125) {
        return false;
    }
    const v126 = stats.ino;
    const v127 = stats.mtime;
    const serverEtag = createServerEtag(v126, v127);
    const v128 = serverEtag !== clientEtag;
    if (v128) {
        return false;
    }
    return true;
};
const serveFile = function (req, res, stats, filePath, cache) {
    const stream = fs.createReadStream(filePath);
    const v133 = function (err) {
        const error = new Error('Error reading file');
        const v129 = { 'Content-Type': 'application/json' };
        const v130 = res.writeHead(500, v129);
        v130;
        const v131 = JSON.stringify(error);
        const v132 = res.end(v131);
        v132;
    };
    const v134 = stream.on('error', v133);
    v134;
    const v135 = path.extname(filePath);
    const v136 = v135 === '.gz';
    if (v136) {
        const v137 = filePath.replace('.gz', '');
        const v138 = mime.getType(v137);
        const v139 = stats.ino;
        const v140 = stats.mtime;
        const v141 = createServerEtag(v139, v140);
        const v142 = stats.size;
        const v143 = {
            'Content-Type': v138,
            'ETag': v141,
            'Cache-Control': cache,
            'Content-Encoding': 'gzip',
            'Content-Length': v142
        };
        const v144 = res.writeHead(200, v143);
        v144;
    } else {
        const v145 = mime.getType(filePath);
        const v146 = stats.ino;
        const v147 = stats.mtime;
        const v148 = createServerEtag(v146, v147);
        const v149 = stats.size;
        const v150 = {
            'Content-Type': v145,
            'ETag': v148,
            'Cache-Control': cache,
            'Content-Length': v149
        };
        const v151 = res.writeHead(200, v150);
        v151;
    }
    const v152 = stream.pipe(res);
    v152;
};
const basicStatic = function (options) {
    const v192 = function serveStatic(req, res) {
        const v153 = !options;
        if (v153) {
            options = {};
        }
        let rootDir;
        const v154 = options.rootDir;
        const v155 = options.rootDir;
        const v156 = process.cwd();
        if (v154) {
            rootDir = v155;
        } else {
            rootDir = v156;
        }
        const v157 = req.url;
        const v158 = url.parse(v157);
        const v159 = v158.pathname;
        const basePath = path.join(rootDir, v159);
        let compress;
        const v160 = options.compress;
        const v161 = req.headers;
        const v162 = v161['accept-encoding'];
        const v163 = v160 && v162;
        if (v163) {
            compress = true;
        } else {
            compress = false;
        }
        if (compress) {
            const v177 = function (err, filePath) {
                const v175 = function (err, stats) {
                    if (err) {
                        const v164 = err.httpCode;
                        const v165 = { 'Content-Type': 'application/json' };
                        const v166 = res.writeHead(v164, v165);
                        v166;
                        const v167 = JSON.stringify(err);
                        const v168 = res.end(v167);
                        v168;
                    } else {
                        const v169 = should304(req, stats);
                        if (v169) {
                            const v170 = res.writeHead(304);
                            v170;
                            const v171 = res.end();
                            v171;
                        } else {
                            let cache;
                            const v172 = options.cache;
                            const v173 = options.cache;
                            if (v172) {
                                cache = v173;
                            } else {
                                cache = 'max-age=86400';
                            }
                            const v174 = serveFile(req, res, stats, filePath, cache);
                            v174;
                        }
                    }
                };
                const v176 = statFile(filePath, v175);
                v176;
            };
            const v178 = checkCompress(basePath, v177);
            v178;
        } else {
            const v190 = function (err, stats) {
                if (err) {
                    const v179 = err.httpCode;
                    const v180 = { 'Content-Type': 'application/json' };
                    const v181 = res.writeHead(v179, v180);
                    v181;
                    const v182 = JSON.stringify(err);
                    const v183 = res.end(v182);
                    v183;
                } else {
                    const v184 = should304(req, stats);
                    if (v184) {
                        const v185 = res.writeHead(304);
                        v185;
                        const v186 = res.end();
                        v186;
                    } else {
                        let cache;
                        const v187 = options.cache;
                        const v188 = options.cache;
                        if (v187) {
                            cache = v188;
                        } else {
                            cache = 'max-age=86400';
                        }
                        const v189 = serveFile(req, res, stats, basePath, cache);
                        v189;
                    }
                }
            };
            const v191 = statFile(basePath, v190);
            v191;
        }
    };
    return v192;
};
module.exports = basicStatic;