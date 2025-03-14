'use strict';
var fs = require('fs');
const v115 = require('child_process');
var exec = v115.exec;
const v117 = (opts, cb) => {
    const v116 = cb('', '');
    return v116;
};
var tmp = {};
tmp.file = v117;
const createExtensionsFile = function (opts, info, cb) {
    var s = '[v3_ca]\n';
    const v118 = info.subjectaltname;
    if (v118) {
        const v119 = s + 'subjectAltName = ';
        const v120 = info.subjectaltname;
        const v121 = v119 + v120;
        s = v121 + '\n';
    }
    const v126 = function tmpFileCb(err, path) {
        if (err) {
            const v122 = cb(err);
            return v122;
        }
        const v124 = function writeFileCb(err) {
            const v123 = cb(err, path);
            v123;
        };
        const v125 = fs.writeFile(path, s, v124);
        v125;
    };
    const v127 = tmp.file(opts, v126);
    v127;
};
exports.createExtensionsFile = createExtensionsFile;
var createExtensionsFile = exports.createExtensionsFile;
const createCertRequestConfig = function (opts, info, cb) {
    var hash = info.subject;
    const v128 = '[ req ]\n' + 'default_bits       = 2048\n';
    const v129 = v128 + 'default_keyfile    = keyfile.pem\n';
    const v130 = v129 + 'distinguished_name = req_distinguished_name\n';
    const v131 = v130 + 'prompt             = no\n\n';
    var s = v131 + '[ req_distinguished_name ]\n';
    var allowableKeys = {};
    allowableKeys.C = 1;
    allowableKeys.ST = 1;
    allowableKeys.L = 1;
    allowableKeys.O = 1;
    allowableKeys.OU = 1;
    allowableKeys.CN = 1;
    const v132 = Object.keys(hash);
    const v138 = function filterCertReqKeys(key) {
        const v133 = key in allowableKeys;
        if (v133) {
            var val = hash[key];
            const v134 = Array.isArray(val);
            if (v134) {
                val = val[0];
            }
            const v135 = s + key;
            const v136 = v135 + ' = ';
            const v137 = v136 + val;
            s = v137 + '\n';
        }
    };
    const v139 = v132.forEach(v138);
    v139;
    const v144 = function tmpFileCb(err, path) {
        if (err) {
            const v140 = cb(err);
            return v140;
        }
        const v142 = function writeFileCb(err) {
            const v141 = cb(err, path);
            v141;
        };
        const v143 = fs.writeFile(path, s, v142);
        v143;
    };
    const v145 = tmp.file(opts, v144);
    v145;
};
exports.createCertRequestConfig = createCertRequestConfig;
var createCertRequestConfig = exports.createCertRequestConfig;
const createKeypair = function (opts, cb) {
    const v151 = function tmpFileCb(err, path) {
        if (err) {
            const v146 = cb(err);
            return v146;
        }
        const v147 = 'openssl genrsa -out ' + path;
        var cmd = v147 + ' 2048';
        const v149 = function execCb(err) {
            const v148 = cb(err, path);
            v148;
        };
        const v150 = exec(cmd, v149);
        v150;
    };
    const v152 = tmp.file(opts, v151);
    v152;
};
exports.createKeypair = createKeypair;
var createKeypair = exports.createKeypair;
const createCertRequest = function (opts, keyPath, cfgPath, cb) {
    const v161 = function tmpFileCb(err, path) {
        if (err) {
            const v153 = cb(err);
            return v153;
        }
        const v154 = 'openssl req -new -key ' + keyPath;
        const v155 = v154 + ' -config ';
        const v156 = v155 + cfgPath;
        const v157 = v156 + ' -out ';
        var cmd = v157 + path;
        const v159 = function execCb(err) {
            const v158 = cb(err, path);
            v158;
        };
        const v160 = exec(cmd, v159);
        v160;
    };
    const v162 = tmp.file(opts, v161);
    v162;
};
exports.createCertRequest = createCertRequest;
var createCertRequest = exports.createCertRequest;
const createCert = function (opts, reqPath, caKeyPath, caCertPath, extPath, cb) {
    const v187 = function tmpFileCb(err, path) {
        if (err) {
            const v163 = cb(err);
            return v163;
        }
        var setDays = '';
        const v164 = parseInt(expiryDays, 10);
        const v165 = expiryDays === v164;
        const v166 = expiryDays && v165;
        if (v166) {
            setDays = ' -days ' + expiryDays;
        }
        const v167 = 'openssl x509 -req -in ' + reqPath;
        const v168 = v167 + ' -CAkey ';
        const v169 = v168 + caKeyPath;
        const v170 = v169 + ' -CA ';
        const v171 = v170 + caCertPath;
        const v172 = v171 + ' -out ';
        const v173 = v172 + path;
        const v174 = v173 + ' -CAcreateserial';
        const v175 = v174 + ' -extensions v3_ca -extfile ';
        const v176 = v175 + extPath;
        var cmd = v176 + setDays;
        const v185 = function execCb(err) {
            if (err) {
                const v177 = cb(err);
                return v177;
            }
            const v178 = 'openssl x509 -noout -in ' + path;
            var cmd2 = v178 + ' -fingerprint -hash';
            const v183 = function statsCb(err, stdout) {
                const v179 = stdout.toString();
                var output = v179.split(/\n/);
                const v180 = output[0];
                const v181 = output[1];
                const v182 = cb(err, path, v180, v181);
                v182;
            };
            const v184 = exec(cmd2, v183);
            v184;
        };
        const v186 = exec(cmd, v185);
        v186;
    };
    const v188 = tmp.file(opts, v187);
    v188;
};
exports.createCert = createCert;
var createCert = exports.createCert;
const generateCert = function (prefix, keepFiles, info, caKeyPath, caCertPath, cb) {
    var tmpFiles = [];
    prefix = prefix.replace(/\W/g, '');
    const v189 = prefix + '-';
    var opts = {};
    opts.prefix = v189;
    opts.postfix = '.pem';
    const v211 = function createKeypairCb(err, keyPath) {
        if (err) {
            const v190 = cb(err);
            return v190;
        }
        opts.postfix = '.cfg';
        const v209 = function requestConfigCb(err, cfgPath) {
            if (err) {
                const v191 = cb(err);
                return v191;
            }
            const v192 = tmpFiles.push(cfgPath);
            v192;
            opts.postfix = '.ext';
            opts.prefix = prefix + '-';
            const v207 = function extensionsFileCb(err, extPath) {
                if (err) {
                    const v193 = cb(err);
                    return v193;
                }
                const v194 = tmpFiles.push(extPath);
                v194;
                opts.postfix = '.pem';
                opts.prefix = prefix + '-csr-';
                const v205 = function certRequestCb(err, reqPath) {
                    if (err) {
                        const v195 = cb(err);
                        return v195;
                    }
                    const v196 = tmpFiles.push(reqPath);
                    v196;
                    opts.prefix = prefix + '-cert-';
                    const createCertCb = function (err, certPath, fingerprint, hash) {
                        const v197 = !keepFiles;
                        if (v197) {
                            const v201 = function deleteTmpFiles(path) {
                                const v199 = err => {
                                    if (err) {
                                        const v198 = cb(err);
                                        return v198;
                                    }
                                };
                                const v200 = fs.unlink(path, v199);
                                v200;
                            };
                            const v202 = tmpFiles.forEach(v201);
                            v202;
                        }
                        const v203 = cb(err, keyPath, certPath, fingerprint, hash);
                        v203;
                    };
                    const v204 = createCert(opts, reqPath, caKeyPath, caCertPath, extPath, createCertCb);
                    v204;
                };
                const v206 = createCertRequest(opts, keyPath, cfgPath, v205);
                v206;
            };
            const v208 = createExtensionsFile(opts, info, v207);
            v208;
        };
        const v210 = createCertRequestConfig(opts, info, v209);
        v210;
    };
    const v212 = createKeypair(opts, v211);
    v212;
};
exports.generateCert = generateCert;
var generateCert = exports.generateCert;
const generateCertBuf = function (prefix, keepFiles, info, caKeyPath, caCertPath, cb) {
    const generateCertCb = function (err, keyPath, certPath, fingerprint, hash) {
        if (err) {
            const v213 = cb(err);
            return v213;
        }
        const v225 = function readCertCb(err, certBuf) {
            if (err) {
                const v214 = cb(err);
                return v214;
            }
            const v223 = function readKeyCb(err, keyBuf) {
                const v215 = !keepFiles;
                if (v215) {
                    const v217 = err => {
                        if (err) {
                            const v216 = cb(err);
                            return v216;
                        }
                    };
                    const v218 = fs.unlink(certPath, v217);
                    v218;
                    const v220 = err => {
                        if (err) {
                            const v219 = cb(err);
                            return v219;
                        }
                    };
                    const v221 = fs.unlink(keyPath, v220);
                    v221;
                }
                const v222 = cb(err, keyBuf, certBuf, fingerprint, hash);
                v222;
            };
            const v224 = fs.readFile(keyPath, v223);
            v224;
        };
        const v226 = fs.readFile(certPath, v225);
        v226;
    };
    const v227 = generateCert(prefix, keepFiles, info, caKeyPath, caCertPath, generateCertCb);
    v227;
};
exports.generateCertBuffer = generateCertBuf;
var expiryDays;
const v228 = function (val) {
    expiryDays = val;
};
exports.setExpiryDays = v228;