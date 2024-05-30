'use strict';
var fs = require('fs');
const v113 = require('child_process');
var exec = v113.exec;
var tmp = require('tmp');
const createExtensionsFile = function (opts, info, cb) {
    var s = '[v3_ca]\n';
    const v114 = info.subjectaltname;
    if (v114) {
        const v115 = s + 'subjectAltName = ';
        const v116 = info.subjectaltname;
        const v117 = v115 + v116;
        s = v117 + '\n';
    }
    const v122 = function tmpFileCb(err, path) {
        if (err) {
            const v118 = cb(err);
            return v118;
        }
        const v120 = function writeFileCb(err) {
            const v119 = cb(err, path);
            v119;
        };
        const v121 = fs.writeFile(path, s, v120);
        v121;
    };
    const v123 = tmp.file(opts, v122);
    v123;
};
exports.createExtensionsFile = createExtensionsFile;
var createExtensionsFile = exports.createExtensionsFile;
const createCertRequestConfig = function (opts, info, cb) {
    var hash = info.subject;
    const v124 = '[ req ]\n' + 'default_bits       = 2048\n';
    const v125 = v124 + 'default_keyfile    = keyfile.pem\n';
    const v126 = v125 + 'distinguished_name = req_distinguished_name\n';
    const v127 = v126 + 'prompt             = no\n\n';
    var s = v127 + '[ req_distinguished_name ]\n';
    var allowableKeys = {};
    allowableKeys.C = 1;
    allowableKeys.ST = 1;
    allowableKeys.L = 1;
    allowableKeys.O = 1;
    allowableKeys.OU = 1;
    allowableKeys.CN = 1;
    const v128 = Object.keys(hash);
    const v134 = function filterCertReqKeys(key) {
        const v129 = key in allowableKeys;
        if (v129) {
            var val = hash[key];
            const v130 = Array.isArray(val);
            if (v130) {
                val = val[0];
            }
            const v131 = s + key;
            const v132 = v131 + ' = ';
            const v133 = v132 + val;
            s = v133 + '\n';
        }
    };
    const v135 = v128.forEach(v134);
    v135;
    const v140 = function tmpFileCb(err, path) {
        if (err) {
            const v136 = cb(err);
            return v136;
        }
        const v138 = function writeFileCb(err) {
            const v137 = cb(err, path);
            v137;
        };
        const v139 = fs.writeFile(path, s, v138);
        v139;
    };
    const v141 = tmp.file(opts, v140);
    v141;
};
exports.createCertRequestConfig = createCertRequestConfig;
var createCertRequestConfig = exports.createCertRequestConfig;
const createKeypair = function (opts, cb) {
    const v147 = function tmpFileCb(err, path) {
        if (err) {
            const v142 = cb(err);
            return v142;
        }
        const v143 = 'openssl genrsa -out ' + path;
        var cmd = v143 + ' 2048';
        const v145 = function execCb(err) {
            const v144 = cb(err, path);
            v144;
        };
        const v146 = exec(cmd, v145);
        v146;
    };
    const v148 = tmp.file(opts, v147);
    v148;
};
exports.createKeypair = createKeypair;
var createKeypair = exports.createKeypair;
const createCertRequest = function (opts, keyPath, cfgPath, cb) {
    const v157 = function tmpFileCb(err, path) {
        if (err) {
            const v149 = cb(err);
            return v149;
        }
        const v150 = 'openssl req -new -key ' + keyPath;
        const v151 = v150 + ' -config ';
        const v152 = v151 + cfgPath;
        const v153 = v152 + ' -out ';
        var cmd = v153 + path;
        const v155 = function execCb(err) {
            const v154 = cb(err, path);
            v154;
        };
        const v156 = exec(cmd, v155);
        v156;
    };
    const v158 = tmp.file(opts, v157);
    v158;
};
exports.createCertRequest = createCertRequest;
var createCertRequest = exports.createCertRequest;
const createCert = function (opts, reqPath, caKeyPath, caCertPath, extPath, cb) {
    const v183 = function tmpFileCb(err, path) {
        if (err) {
            const v159 = cb(err);
            return v159;
        }
        var setDays = '';
        const v160 = parseInt(expiryDays, 10);
        const v161 = expiryDays === v160;
        const v162 = expiryDays && v161;
        if (v162) {
            setDays = ' -days ' + expiryDays;
        }
        const v163 = 'openssl x509 -req -in ' + reqPath;
        const v164 = v163 + ' -CAkey ';
        const v165 = v164 + caKeyPath;
        const v166 = v165 + ' -CA ';
        const v167 = v166 + caCertPath;
        const v168 = v167 + ' -out ';
        const v169 = v168 + path;
        const v170 = v169 + ' -CAcreateserial';
        const v171 = v170 + ' -extensions v3_ca -extfile ';
        const v172 = v171 + extPath;
        var cmd = v172 + setDays;
        const v181 = function execCb(err) {
            if (err) {
                const v173 = cb(err);
                return v173;
            }
            const v174 = 'openssl x509 -noout -in ' + path;
            var cmd2 = v174 + ' -fingerprint -hash';
            const v179 = function statsCb(err, stdout) {
                const v175 = stdout.toString();
                var output = v175.split(/\n/);
                const v176 = output[0];
                const v177 = output[1];
                const v178 = cb(err, path, v176, v177);
                v178;
            };
            const v180 = exec(cmd2, v179);
            v180;
        };
        const v182 = exec(cmd, v181);
        v182;
    };
    const v184 = tmp.file(opts, v183);
    v184;
};
exports.createCert = createCert;
var createCert = exports.createCert;
const generateCert = function (prefix, keepFiles, info, caKeyPath, caCertPath, cb) {
    var tmpFiles = [];
    prefix = prefix.replace(/\W/g, '');
    const v185 = prefix + '-';
    var opts = {};
    opts.prefix = v185;
    opts.postfix = '.pem';
    const v207 = function createKeypairCb(err, keyPath) {
        if (err) {
            const v186 = cb(err);
            return v186;
        }
        opts.postfix = '.cfg';
        const v205 = function requestConfigCb(err, cfgPath) {
            if (err) {
                const v187 = cb(err);
                return v187;
            }
            const v188 = tmpFiles.push(cfgPath);
            v188;
            opts.postfix = '.ext';
            opts.prefix = prefix + '-';
            const v203 = function extensionsFileCb(err, extPath) {
                if (err) {
                    const v189 = cb(err);
                    return v189;
                }
                const v190 = tmpFiles.push(extPath);
                v190;
                opts.postfix = '.pem';
                opts.prefix = prefix + '-csr-';
                const v201 = function certRequestCb(err, reqPath) {
                    if (err) {
                        const v191 = cb(err);
                        return v191;
                    }
                    const v192 = tmpFiles.push(reqPath);
                    v192;
                    opts.prefix = prefix + '-cert-';
                    const createCertCb = function (err, certPath, fingerprint, hash) {
                        const v193 = !keepFiles;
                        if (v193) {
                            const v197 = function deleteTmpFiles(path) {
                                const v195 = err => {
                                    if (err) {
                                        const v194 = cb(err);
                                        return v194;
                                    }
                                };
                                const v196 = fs.unlink(path, v195);
                                v196;
                            };
                            const v198 = tmpFiles.forEach(v197);
                            v198;
                        }
                        const v199 = cb(err, keyPath, certPath, fingerprint, hash);
                        v199;
                    };
                    const v200 = createCert(opts, reqPath, caKeyPath, caCertPath, extPath, createCertCb);
                    v200;
                };
                const v202 = createCertRequest(opts, keyPath, cfgPath, v201);
                v202;
            };
            const v204 = createExtensionsFile(opts, info, v203);
            v204;
        };
        const v206 = createCertRequestConfig(opts, info, v205);
        v206;
    };
    const v208 = createKeypair(opts, v207);
    v208;
};
exports.generateCert = generateCert;
var generateCert = exports.generateCert;
const generateCertBuf = function (prefix, keepFiles, info, caKeyPath, caCertPath, cb) {
    const generateCertCb = function (err, keyPath, certPath, fingerprint, hash) {
        if (err) {
            const v209 = cb(err);
            return v209;
        }
        const v221 = function readCertCb(err, certBuf) {
            if (err) {
                const v210 = cb(err);
                return v210;
            }
            const v219 = function readKeyCb(err, keyBuf) {
                const v211 = !keepFiles;
                if (v211) {
                    const v213 = err => {
                        if (err) {
                            const v212 = cb(err);
                            return v212;
                        }
                    };
                    const v214 = fs.unlink(certPath, v213);
                    v214;
                    const v216 = err => {
                        if (err) {
                            const v215 = cb(err);
                            return v215;
                        }
                    };
                    const v217 = fs.unlink(keyPath, v216);
                    v217;
                }
                const v218 = cb(err, keyBuf, certBuf, fingerprint, hash);
                v218;
            };
            const v220 = fs.readFile(keyPath, v219);
            v220;
        };
        const v222 = fs.readFile(certPath, v221);
        v222;
    };
    const v223 = generateCert(prefix, keepFiles, info, caKeyPath, caCertPath, generateCertCb);
    v223;
};
exports.generateCertBuffer = generateCertBuf;
var expiryDays;
const v224 = function (val) {
    expiryDays = val;
};
exports.setExpiryDays = v224;