var fs = require('fs');
var path = require('path');
var http = require('http');
var url = require('url');
var mime = require('mime');
var utily = require('utily');
var colors = require('colors/safe');
const v114 = process.cwd();
var options = {};
options.folder = v114;
options.port = 5000;
options.cors = false;
options.index = 'index.html';
const v115 = path.resolve(__dirname, './assets/error.html');
options.error = v115;
const v116 = module.exports;
const v130 = function (key, value) {
    const v117 = options[key];
    const v118 = typeof v117;
    const v119 = v118 === 'undefined';
    if (v119) {
        const v120 = 'Unknown key "' + key;
        const v121 = v120 + '"';
        const v122 = new Error(v121);
        throw v122;
    }
    const v123 = options[key];
    const v124 = typeof v123;
    const v125 = typeof value;
    const v126 = v124 !== v125;
    if (v126) {
        const v127 = 'Invalid key type "' + key;
        const v128 = v127 + '"';
        const v129 = new Error(v128);
        throw v129;
    }
    options[key] = value;
};
v116.set = v130;
const v131 = module.exports;
const v133 = function (key) {
    const v132 = options[key];
    return v132;
};
v131.get = v133;
const v134 = module.exports;
const v215 = function (port, cb) {
    const v135 = typeof port;
    const v136 = v135 === 'function';
    if (v136) {
        cb = port;
    } else {
        cb = cb;
    }
    const v137 = typeof port;
    const v138 = v137 === 'number';
    const v139 = parseInt(port);
    const v140 = options.port;
    if (v138) {
        port = v139;
    } else {
        port = v140;
    }
    const v141 = process.cwd();
    const v142 = options.folder;
    const v143 = path.resolve(v141, v142);
    options.folder = v143;
    const v144 = process.cwd();
    const v145 = options.error;
    const v146 = path.resolve(v144, v145);
    options.error = v146;
    const v196 = function (req, res) {
        var time_start = Date.now();
        const v147 = options.cors;
        const v148 = v147 === true;
        if (v148) {
            const v149 = res.setHeader('Access-Control-Allow-Origin', '*');
            v149;
            const v150 = res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            v150;
            const v151 = res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            v151;
        }
        const v152 = req.url;
        const v153 = url.parse(v152);
        var pathname = v153.pathname;
        const v154 = options.folder;
        var local_path = path.join(v154, pathname);
        const v155 = path.extname(local_path);
        const v156 = v155 === '';
        if (v156) {
            const v157 = options.index;
            const v158 = path.basename(v157);
            const v159 = './' + v158;
            local_path = path.join(local_path, v159);
        }
        const v176 = function () {
            var message = [];
            const v160 = res.statusCode;
            const v161 = v160 >= 300;
            const v162 = res.statusCode;
            const v163 = colors.red(v162);
            const v164 = res.statusCode;
            const v165 = colors.green(v164);
            let v166;
            if (v161) {
                v166 = v163;
            } else {
                v166 = v165;
            }
            message[0] = v166;
            const v167 = colors.blue(pathname);
            message[1] = v167;
            const v168 = Date.now();
            const v169 = v168 - time_start;
            const v170 = v169 + ' ms';
            const v171 = colors.white(v170);
            message[2] = v171;
            const v172 = message.join('  ');
            const v173 = '' + v172;
            const v174 = v173 + '';
            const v175 = console.log(v174);
            v175;
        };
        const v177 = res.on('finish', v176);
        v177;
        const v178 = utily.fs;
        const v194 = function (error, exists) {
            if (error) {
                const v179 = error_page(res, 500, 'Error processing your request.');
                return v179;
            }
            const v180 = exists === false;
            if (v180) {
                const v181 = error_page(res, 404, 'File not found.');
                return v181;
            }
            const v182 = mime.getType(local_path);
            const v183 = { 'Content-Type': v182 };
            const v184 = res.writeHead(200, v183);
            v184;
            var reader = fs.createReadStream(local_path);
            const v186 = function (data) {
                const v185 = res.write(data);
                v185;
            };
            const v187 = reader.on('data', v186);
            v187;
            const v189 = function () {
                const v188 = res.end('');
                v188;
            };
            const v190 = reader.on('end', v189);
            v190;
            const v192 = function (error) {
                const v191 = error_page(res, 500, 'Something went wrong...');
                return v191;
            };
            const v193 = reader.on('error', v192);
            v193;
        };
        const v195 = v178.isFile(local_path, v194);
        return v195;
    };
    var server = http.createServer(v196);
    const v213 = function () {
        const v197 = typeof cb;
        const v198 = v197 === 'function';
        if (v198) {
            const v199 = cb.call(null);
            v199;
        } else {
            const v200 = console.log('');
            v200;
            const v201 = options.port;
            const v202 = 'http://localhost:' + v201;
            const v203 = colors.blue(v202);
            const v204 = 'Static server listening on: ' + v203;
            const v205 = v204 + '';
            const v206 = console.log(v205);
            v206;
            const v207 = options.folder;
            const v208 = colors.blue(v207);
            const v209 = 'Reading files from: ' + v208;
            const v210 = v209 + '';
            const v211 = console.log(v210);
            v211;
            const v212 = console.log('');
            v212;
        }
    };
    const v214 = server.listen(port, v213);
    v214;
};
v134.listen = v215;
var error_page = function (res, error_code, error_message) {
    const v216 = { 'Content-Type': 'text/html' };
    const v217 = res.writeHead(error_code, v216);
    v217;
    const v218 = options.error;
    const v225 = function (error, data) {
        if (error) {
            const v219 = '<h1>Error</h1><p>' + error_message;
            const v220 = v219 + '</p>';
            const v221 = res.end(v220);
            return v221;
        }
        const v222 = utily.string;
        const v223 = {
            code: error_code,
            message: error_message
        };
        data = v222.format(data, v223);
        const v224 = res.end(data);
        return v224;
    };
    const v226 = fs.readFile(v218, 'utf8', v225);
    return v226;
};