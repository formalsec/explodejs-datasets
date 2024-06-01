var fs = require('fs');
var http = require('http');
var url = require('url');
var yaml = require('js-yaml');
var PostIdx;
var PutIdx;
const v173 = fs.existsSync('post');
const v174 = !v173;
if (v174) {
    const v175 = fs.mkdirSync('post', 511);
    v175;
}
;
const v176 = fs.existsSync('post/index.yaml');
if (v176) {
    const v177 = fs.readFileSync('post/index.yaml', 'utf8');
    PostIdx = yaml.safeLoad(v177);
} else {
    PostIdx = new Object();
    const v178 = new Date();
    const v179 = v178.toLocaleString();
    PostIdx.update = v179;
    const v180 = yaml.safeDump(PostIdx);
    const v181 = fs.writeFileSync('post/index.yaml', v180);
    v181;
}
;
const v182 = fs.existsSync('put');
const v183 = !v182;
if (v183) {
    const v184 = fs.mkdirSync('put', 511);
    v184;
}
;
const v185 = fs.existsSync('put/index.yaml');
if (v185) {
    const v186 = fs.readFileSync('put/index.yaml', 'utf8');
    PutIdx = yaml.safeLoad(v186);
} else {
    PutIdx = new Object();
    const v187 = new Date();
    const v188 = v187.toLocaleString();
    PutIdx.update = v188;
    const v189 = yaml.safeDump(PutIdx);
    const v190 = fs.writeFileSync('put/index.yaml', v189);
    v190;
}
;
const v343 = function (req, res) {
    var chunk = '';
    const v191 = function (data) {
        chunk += data;
    };
    const v192 = req.on('data', v191);
    v192;
    const v341 = function () {
        const v193 = req.method;
        const v194 = v193 == 'POST';
        if (v194) {
            const v195 = 'BODY: ' + chunk;
            const v196 = console.log(v195);
            v196;
            const v197 = chunk.length;
            const v198 = 'BODY length: ' + v197;
            const v199 = console.log(v198);
            v199;
            var body = yaml.load(chunk);
            const v200 = body.hasOwnProperty('cod');
            if (v200) {
                const v201 = body.cod;
                const v202 = v201 + '.';
                const v203 = body.tag;
                const v204 = v202 + v203;
                const v205 = v204 + '.';
                const v206 = body.author;
                key = v205 + v206;
            } else {
                const v207 = body.tag;
                const v208 = v207 + '.';
                const v209 = body.author;
                key = v208 + v209;
            }
            const v210 = PostIdx.hasOwnProperty(key);
            const v211 = !v210;
            if (v211) {
                PostIdx[key] = 0;
                const v212 = new Date();
                const v213 = v212.toLocaleString();
                PostIdx.update = v213;
                const v214 = yaml.safeDump(PostIdx);
                const v218 = function (err) {
                    const v215 = 'post notify: create a new key [' + key;
                    const v216 = v215 + '].\n';
                    const v217 = console.log(v216);
                    v217;
                };
                const v219 = fs.writeFile('post/index.yaml', v214, v218);
                v219;
            }
            var filename;
            const v220 = PostIdx[key];
            PostIdx[key] = v220 + 1;
            const v221 = body.hasOwnProperty('cod');
            if (v221) {
                const v222 = body.cod;
                const v223 = 'post/' + v222;
                const v224 = v223 + '.';
                const v225 = body.tag;
                const v226 = v224 + v225;
                const v227 = v226 + '.';
                const v228 = body.author;
                const v229 = v227 + v228;
                const v230 = v229 + '.';
                const v231 = PostIdx[key];
                const v232 = v230 + v231;
                filename = v232 + '.yaml';
            } else {
                const v233 = body.tag;
                const v234 = 'post/' + v233;
                const v235 = v234 + '.';
                const v236 = body.author;
                const v237 = v235 + v236;
                const v238 = v237 + '.';
                const v239 = PostIdx[key];
                const v240 = v238 + v239;
                filename = v240 + '.yaml';
            }
            const v270 = function (exists) {
                if (exists) {
                    const v241 = { 'Content-Type': 'text/plain' };
                    const v242 = res.writeHead(400, v241);
                    v242;
                    const v243 = 'post fail: file ' + filename;
                    const v244 = v243 + ' exist.';
                    const v245 = res.write(v244);
                    v245;
                    const v246 = res.end();
                    v246;
                    const v247 = 'post fail: file ' + filename;
                    const v248 = v247 + ' exist.';
                    const v249 = console.log(v248);
                    v249;
                } else {
                    const v250 = new Date();
                    const v251 = v250.getTime();
                    body.createat = v251;
                    const v252 = yaml.safeDump(body);
                    const v268 = function (err) {
                        if (err) {
                            throw err;
                        }
                        const v253 = { 'Content-Type': 'text/plain' };
                        const v254 = res.writeHead(201, v253);
                        v254;
                        const v255 = key + '.';
                        const v256 = PostIdx[key];
                        const v257 = v256 + 1;
                        const v258 = v255 + v257;
                        const v259 = res.write(v258);
                        v259;
                        const v260 = res.end();
                        v260;
                        const v261 = 'post: ' + filename;
                        const v262 = v261 + ' saved.';
                        const v263 = console.log(v262);
                        v263;
                        const v264 = new Date();
                        const v265 = v264.toLocaleString();
                        PostIdx.update = v265;
                        const v266 = yaml.safeDump(PostIdx);
                        const v267 = fs.writeFileSync('post/index.yaml', v266);
                        v267;
                    };
                    const v269 = fs.writeFile(filename, v252, v268);
                    v269;
                }
            };
            const v271 = fs.exists(filename, v270);
            v271;
        }
        const v272 = req.method;
        const v273 = v272 == 'PUT';
        if (v273) {
            const v274 = 'BODY: ' + chunk;
            const v275 = console.log(v274);
            v275;
            var body = yaml.load(chunk);
            var filename;
            const v276 = body.hasOwnProperty('cod');
            if (v276) {
                const v277 = body.cod;
                const v278 = v277 + '.';
                const v279 = body.tag;
                const v280 = v278 + v279;
                const v281 = v280 + '.';
                const v282 = body.author;
                filename = v281 + v282;
            } else {
                const v283 = body.tag;
                const v284 = v283 + '.';
                const v285 = body.author;
                filename = v284 + v285;
            }
            const v286 = body.hasOwnProperty('index');
            if (v286) {
                const v287 = filename + '.';
                const v288 = body.index;
                const v289 = v287 + v288;
                filename = v289 + '.yaml';
            } else {
                filename = filename + '.yaml';
            }
            const v308 = function (exists) {
                if (exists) {
                    const v290 = { 'Content-Type': 'text/plain' };
                    const v291 = res.writeHead(202, v290);
                    v291;
                    const v292 = 'put: ' + filename;
                    const v293 = v292 + ' updated.';
                    const v294 = res.write(v293);
                    v294;
                    const v295 = res.end();
                    v295;
                    const v296 = 'put: ' + filename;
                    const v297 = v296 + ' updated.';
                    const v298 = console.log(v297);
                    v298;
                } else {
                    const v299 = { 'Content-Type': 'text/plain' };
                    const v300 = res.writeHead(201, v299);
                    v300;
                    const v301 = 'put: ' + filename;
                    const v302 = v301 + ' saved.';
                    const v303 = res.write(v302);
                    v303;
                    const v304 = 'put: ' + filename;
                    const v305 = v304 + ' saved.';
                    const v306 = console.log(v305);
                    v306;
                    const v307 = res.end();
                    v307;
                }
            };
            const v309 = fs.exists(filename, v308);
            v309;
            const v310 = 'put/' + filename;
            const v311 = yaml.safeDump(body);
            const v318 = function (err) {
                if (err) {
                    throw err;
                }
                const v312 = new Date();
                const v313 = v312.toLocaleString();
                PutIdx[filename] = v313;
                const v314 = new Date();
                const v315 = v314.toLocaleString();
                PutIdx.update = v315;
                const v316 = yaml.safeDump(PutIdx);
                const v317 = fs.writeFileSync('put/index.yaml', v316);
                v317;
            };
            const v319 = fs.writeFile(v310, v311, v318);
            v319;
        }
        const v320 = req.method;
        const v321 = v320 == 'GET';
        if (v321) {
            const v322 = req.url;
            const v323 = url.parse(v322);
            var pathname = v323.pathname;
            var realPath = pathname.substring(1);
            const v324 = console.log(realPath);
            v324;
            const v339 = function (exists) {
                const v325 = !exists;
                if (v325) {
                    const v326 = { 'Content-Type': 'text/plain' };
                    const v327 = res.writeHead(404, v326);
                    v327;
                    const v328 = res.end();
                    v328;
                } else {
                    var options = {};
                    options.encoding = 'utf8';
                    const v337 = function (err, file) {
                        if (err) {
                            const v329 = { 'Content-Type': 'text/plain' };
                            const v330 = res.writeHead(500, v329);
                            v330;
                            const v331 = res.end();
                            v331;
                        } else {
                            const v332 = console.log(file);
                            v332;
                            const v333 = { 'Content-Type': 'text/plain' };
                            const v334 = res.writeHead(200, v333);
                            v334;
                            const v335 = res.write(file);
                            v335;
                            const v336 = res.end();
                            v336;
                        }
                    };
                    const v338 = fs.readFile(realPath, options, v337);
                    v338;
                }
            };
            const v340 = fs.exists(realPath, v339);
            v340;
        }
    };
    const v342 = req.on('end', v341);
    v342;
};
var server = http.createServer(v343);
const v344 = server.listen(46372);
v344;