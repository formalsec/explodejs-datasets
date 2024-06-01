'use strict';
const _interopDefault = function (ex) {
    const v126 = typeof ex;
    const v127 = v126 === 'object';
    const v128 = ex && v127;
    const v129 = 'default' in ex;
    const v130 = v128 && v129;
    const v131 = ex['default'];
    let v132;
    if (v130) {
        v132 = v131;
    } else {
        v132 = ex;
    }
    return v132;
};
var fs = require('fs');
var https = require('https');
var http = require('http');
var path = require('path');
const v133 = require('mime');
var mime = _interopDefault(v133);
const v134 = require('opener');
var opener = _interopDefault(v134);
const serve = function (options) {
    const v135 = void 0;
    const v136 = options === v135;
    if (v136) {
        options.contentBase = '';
        options = {};
        options = {};
    }
    const v137 = Array.isArray(options);
    const v138 = typeof options;
    const v139 = v138 === 'string';
    const v140 = v137 || v139;
    if (v140) {
        options.contentBase = options;
        options = {};
        options = {};
    }
    const v141 = options.contentBase;
    const v142 = Array.isArray(v141);
    const v143 = options.contentBase;
    const v144 = options.contentBase;
    const v145 = [v144];
    let v146;
    if (v142) {
        v146 = v143;
    } else {
        v146 = v145;
    }
    options.contentBase = v146;
    const v147 = options.host;
    options.host = v147 || 'localhost';
    const v148 = options.port;
    options.port = v148 || 10001;
    const v149 = options.headers;
    const v150 = {};
    options.headers = v149 || v150;
    const v151 = options.https;
    options.https = v151 || false;
    mime.default_type = 'text/plain';
    var requestListener = function (request, response) {
        const v152 = request.url;
        const v153 = v152.split('?');
        const v154 = v153[0];
        var urlPath = decodeURI(v154);
        const v155 = options.headers;
        const v156 = Object.keys(v155);
        const v160 = function (key) {
            const v157 = options.headers;
            const v158 = v157[key];
            const v159 = response.setHeader(key, v158);
            v159;
        };
        const v161 = v156.forEach(v160);
        v161;
        const v162 = options.contentBase;
        const v192 = function (error, content, filePath) {
            const v163 = !error;
            if (v163) {
                const v164 = found(response, filePath, content);
                return v164;
            }
            const v165 = error.code;
            const v166 = v165 !== 'ENOENT';
            if (v166) {
                const v167 = response.writeHead(500);
                v167;
                const v168 = '500 Internal Server Error' + '\n\n';
                const v169 = v168 + filePath;
                const v170 = v169 + '\n\n';
                const v171 = Object.keys(error);
                const v173 = function (k) {
                    const v172 = error[k];
                    return v172;
                };
                const v174 = v171.map(v173);
                const v175 = v174.join('\n');
                const v176 = v170 + v175;
                const v177 = v176 + '\n\n(rollup-plugin-serve)';
                const v178 = response.end(v177, 'utf-8');
                v178;
                return;
            }
            const v179 = request.url;
            const v180 = v179 === '/favicon.ico';
            if (v180) {
                filePath = path.resolve(__dirname, '../dist/favicon.ico');
                const v183 = function (error, content) {
                    if (error) {
                        const v181 = notFound(response, filePath);
                        v181;
                    } else {
                        const v182 = found(response, filePath, content);
                        v182;
                    }
                };
                const v184 = fs.readFile(filePath, v183);
                v184;
            } else {
                const v185 = options.historyApiFallback;
                if (v185) {
                    const v186 = options.contentBase;
                    const v189 = function (error, content, filePath) {
                        if (error) {
                            const v187 = notFound(response, filePath);
                            v187;
                        } else {
                            const v188 = found(response, filePath, content);
                            v188;
                        }
                    };
                    const v190 = readFileFromContentBase(v186, '/index.html', v189);
                    v190;
                } else {
                    const v191 = notFound(response, filePath);
                    v191;
                }
            }
        };
        const v193 = readFileFromContentBase(v162, urlPath, v192);
        v193;
    };
    var server;
    const v194 = options.https;
    if (v194) {
        const v195 = options.https;
        const v196 = https.createServer(v195, requestListener);
        const v197 = options.port;
        server = v196.listen(v197);
    } else {
        const v198 = http.createServer(requestListener);
        const v199 = options.port;
        server = v198.listen(v199);
    }
    const v200 = closeServerOnTermination(server);
    v200;
    const v201 = options.verbose;
    var running = v201 === false;
    const v220 = function ongenerate() {
        const v202 = !running;
        if (v202) {
            running = true;
            const v203 = options.https;
            let v204;
            if (v203) {
                v204 = 'https';
            } else {
                v204 = 'http';
            }
            const v205 = v204 + '://';
            const v206 = options.host;
            const v207 = v205 + v206;
            const v208 = v207 + ':';
            const v209 = options.port;
            var url = v208 + v209;
            const v210 = options.contentBase;
            const v216 = function (base) {
                const v211 = green(url);
                const v212 = v211 + ' -> ';
                const v213 = path.resolve(base);
                const v214 = v212 + v213;
                const v215 = console.log(v214);
                v215;
            };
            const v217 = v210.forEach(v216);
            v217;
            const v218 = options.open;
            if (v218) {
                const v219 = opener(url);
                v219;
            }
        }
    };
    const v221 = {};
    v221.name = 'serve';
    v221.ongenerate = v220;
    return v221;
};
const readFileFromContentBase = function (contentBase, urlPath, callback) {
    const v222 = contentBase[0];
    const v223 = v222 || '.';
    const v224 = '.' + urlPath;
    var filePath = path.resolve(v223, v224);
    const v225 = urlPath.endsWith('/');
    if (v225) {
        filePath = path.resolve(filePath, 'index.html');
    }
    const v232 = function (error, content) {
        const v226 = contentBase.length;
        const v227 = v226 > 1;
        const v228 = error && v227;
        if (v228) {
            const v229 = contentBase.slice(1);
            const v230 = readFileFromContentBase(v229, urlPath, callback);
            v230;
        } else {
            const v231 = callback(error, content, filePath);
            v231;
        }
    };
    const v233 = fs.readFile(filePath, v232);
    v233;
};
const notFound = function (response, filePath) {
    const v234 = response.writeHead(404);
    v234;
    const v235 = '404 Not Found' + '\n\n';
    const v236 = v235 + filePath;
    const v237 = v236 + '\n\n(rollup-plugin-serve)';
    const v238 = response.end(v237, 'utf-8');
    v238;
};
const found = function (response, filePath, content) {
    const v239 = mime.lookup(filePath);
    const v240 = { 'Content-Type': v239 };
    const v241 = response.writeHead(200, v240);
    v241;
    const v242 = response.end(content, 'utf-8');
    v242;
};
const green = function (text) {
    const v243 = '\x1B[1m\x1B[32m' + text;
    const v244 = v243 + '\x1B[39m\x1B[22m';
    return v244;
};
const closeServerOnTermination = function (server) {
    var terminationSignals = [
        'SIGINT',
        'SIGTERM'
    ];
    const v249 = function (signal) {
        const v247 = function () {
            const v245 = server.close();
            v245;
            const v246 = process.exit();
            v246;
        };
        const v248 = process.on(signal, v247);
        v248;
    };
    const v250 = terminationSignals.forEach(v249);
    v250;
};
module.exports = serve;