var Url = require('url');
var Async = require('async');
var Boom = require('boom');
var internals = {};
const v127 = module.exports;
const v159 = function (settings) {
    const v155 = function (request, reply) {
        const v128 = [];
        const v129 = [];
        var resultsData = {};
        resultsData.results = v128;
        resultsData.resultsMap = v129;
        var requests = [];
        var requestRegex = /(?:\/)(?:\$(\d)+\.)?([^\/\$]*)/g;
        var errorMessage = null;
        var parseRequest = function ($0, $1, $2) {
            if ($1) {
                const v130 = $1 < i;
                if (v130) {
                    const v131 = {
                        type: 'ref',
                        index: $1,
                        value: $2
                    };
                    const v132 = parts.push(v131);
                    v132;
                    return '';
                } else {
                    errorMessage = 'Request reference is beyond array size: ' + i;
                    return $0;
                }
            } else {
                const v133 = {
                    type: 'text',
                    value: $2
                };
                const v134 = parts.push(v133);
                v134;
                return '';
            }
        };
        const v135 = request.payload;
        const v136 = v135.requests;
        const v137 = !v136;
        if (v137) {
            const v138 = Boom.badRequest('Request missing requests array');
            const v139 = reply(v138);
            return v139;
        }
        var i = 0;
        const v140 = request.payload;
        const v141 = v140.requests;
        var il = v141.length;
        let v142 = i < il;
        while (v142) {
            var parts = [];
            const v144 = request.payload;
            const v145 = v144.requests;
            const v146 = v145[i];
            const v147 = v146.path;
            var result = v147.replace(requestRegex, parseRequest);
            const v148 = result === '';
            if (v148) {
                const v149 = requests.push(parts);
                v149;
            } else {
                const v150 = 'Invalid request format in item: ' + i;
                errorMessage = errorMessage || v150;
                break;
            }
            const v143 = ++i;
            v142 = i < il;
        }
        const v151 = errorMessage === null;
        if (v151) {
            const v152 = internals.process(request, requests, resultsData, reply);
            v152;
        } else {
            const v153 = Boom.badRequest(errorMessage);
            const v154 = reply(v153);
            v154;
        }
    };
    const v156 = settings.description;
    const v157 = settings.tags;
    const v158 = {};
    v158.handler = v155;
    v158.description = v156;
    v158.tags = v157;
    return v158;
};
v127.config = v159;
const v179 = function (request, requests, resultsData, reply) {
    var fnsParallel = [];
    var fnsSerial = [];
    var callBatch = function (pos, parts) {
        const v161 = function (callback) {
            const v160 = internals.batch(request, resultsData, pos, parts, callback);
            v160;
        };
        return v161;
    };
    var i = 0;
    var il = requests.length;
    let v162 = i < il;
    while (v162) {
        var parts = requests[i];
        const v164 = internals.hasRefPart(parts);
        if (v164) {
            const v165 = callBatch(i, parts);
            const v166 = fnsSerial.push(v165);
            v166;
        } else {
            const v167 = callBatch(i, parts);
            const v168 = fnsParallel.push(v167);
            v168;
        }
        const v163 = ++i;
        v162 = i < il;
    }
    const v170 = function (callback) {
        const v169 = Async.parallel(fnsParallel, callback);
        v169;
    };
    const v172 = function (callback) {
        const v171 = Async.series(fnsSerial, callback);
        v171;
    };
    const v173 = [
        v170,
        v172
    ];
    const v177 = function (err) {
        if (err) {
            const v174 = reply(err);
            v174;
        } else {
            const v175 = resultsData.results;
            const v176 = reply(v175);
            v176;
        }
    };
    const v178 = Async.series(v173, v177);
    v178;
};
internals.process = v179;
const v185 = function (parts) {
    var i = 0;
    var il = parts.length;
    let v180 = i < il;
    while (v180) {
        const v182 = parts[i];
        const v183 = v182.type;
        const v184 = v183 === 'ref';
        if (v184) {
            return true;
        }
        const v181 = ++i;
        v180 = i < il;
    }
    return false;
};
internals.hasRefPart = v185;
const v236 = function (batchRequest, resultsData, pos, parts, callback) {
    var path = '';
    var error = null;
    var i = 0;
    var il = parts.length;
    let v186 = i < il;
    while (v186) {
        path += '/';
        const v188 = parts[i];
        const v189 = v188.type;
        const v190 = v189 === 'ref';
        if (v190) {
            const v191 = resultsData.resultsMap;
            const v192 = parts[i];
            const v193 = v192.index;
            var ref = v191[v193];
            if (ref) {
                var value = null;
                try {
                    const v194 = parts[i];
                    const v195 = v194.value;
                    const v196 = 'value = ref.' + v195;
                    const v197 = v196 + ';';
                    const v198 = eval(v197);
                    v198;
                } catch (e) {
                    const v199 = e.message;
                    error = new Error(v199);
                }
                if (value) {
                    const v200 = value.match;
                    const v201 = value.match(/^[\w:]+$/);
                    const v202 = v200 && v201;
                    if (v202) {
                        path += value;
                    } else {
                        error = new Error('Reference value includes illegal characters');
                        break;
                    }
                } else {
                    const v203 = new Error('Reference not found');
                    error = error || v203;
                    break;
                }
            } else {
                error = new Error('Missing reference response');
                break;
            }
        } else {
            const v204 = parts[i];
            path += v204.value;
        }
        const v187 = ++i;
        v186 = i < il;
    }
    const v205 = error === null;
    if (v205) {
        const v206 = batchRequest.payload;
        const v207 = v206.requests;
        const v208 = v207[pos];
        v208.path = path;
        const v209 = batchRequest.payload;
        const v210 = v209.requests;
        const v211 = v210[pos];
        const v232 = function (data) {
            const v212 = data.statusCode;
            const v213 = '' + v212;
            const v214 = v213.indexOf('3');
            const v215 = v214 === 0;
            if (v215) {
                const v216 = batchRequest.payload;
                const v217 = v216.requests;
                const v218 = v217[pos];
                const v219 = data.headers;
                const v220 = v219.location;
                v218.path = v220;
                const v221 = batchRequest.payload;
                const v222 = v221.requests;
                const v223 = v222[pos];
                const v227 = function (data) {
                    var result = data.result;
                    const v224 = resultsData.results;
                    v224[pos] = result;
                    const v225 = resultsData.resultsMap;
                    v225[pos] = result;
                    const v226 = callback(null, result);
                    v226;
                };
                const v228 = internals.dispatch(batchRequest, v223, v227);
                v228;
                return;
            }
            var result = data.result;
            const v229 = resultsData.results;
            v229[pos] = result;
            const v230 = resultsData.resultsMap;
            v230[pos] = result;
            const v231 = callback(null, result);
            v231;
        };
        const v233 = internals.dispatch(batchRequest, v211, v232);
        v233;
    } else {
        const v234 = resultsData.results;
        v234[pos] = error;
        const v235 = callback(error);
        return v235;
    }
};
internals.batch = v236;
const v252 = function (batchRequest, request, callback) {
    var path = request.path;
    const v237 = request.query;
    if (v237) {
        const v238 = request.path;
        const v239 = request.query;
        var urlObject = {};
        urlObject.pathname = v238;
        urlObject.query = v239;
        path = Url.format(urlObject);
    }
    let body;
    const v240 = request.payload;
    const v241 = v240 !== null;
    const v242 = request.payload;
    const v243 = v242 !== undefined;
    const v244 = v241 && v243;
    const v245 = request.payload;
    const v246 = JSON.stringify(v245);
    if (v244) {
        body = v246;
    } else {
        body = null;
    }
    const v247 = request.method;
    const v248 = batchRequest.headers;
    const v249 = batchRequest.session;
    var injectOptions = {};
    injectOptions.url = path;
    injectOptions.method = v247;
    injectOptions.headers = v248;
    injectOptions.payload = body;
    injectOptions.session = v249;
    const v250 = batchRequest.server;
    const v251 = v250.inject(injectOptions, callback);
    v251;
};
internals.dispatch = v252;