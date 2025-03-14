'use strict';
var nodeFs = require('fs');
var nodePath = require('path');
const v88 = {};
module.exports = v88;
var fs = module.exports;
fs.readFile = readFile;
fs.readChunk = readChunk;
fs.writeFile = writeFile;
fs.readDir = readDir;
fs.rename = rename;
const readFile = function (path, callback) {
    const v94 = function (err, binary) {
        if (err) {
            const v89 = err.code;
            const v90 = v89 === 'ENOENT';
            if (v90) {
                const v91 = callback();
                return v91;
            }
            const v92 = callback(err);
            return v92;
        }
        const v93 = callback(null, binary);
        return v93;
    };
    const v95 = nodeFs.readFile(path, v94);
    v95;
};
const readChunk = function (path, start, end, callback) {
    const v96 = end < 0;
    if (v96) {
        const v97 = readLastChunk(path, start, end, callback);
        return v97;
    }
    const v98 = end - 1;
    const v99 = {
        start: start,
        end: v98
    };
    var stream = nodeFs.createReadStream(path, v99);
    var chunks = [];
    const v104 = function () {
        var chunk = stream.read();
        const v100 = chunk === null;
        if (v100) {
            const v101 = Buffer.concat(chunks);
            const v102 = callback(null, v101);
            return v102;
        }
        const v103 = chunks.push(chunk);
        return v103;
    };
    const v105 = stream.on('readable', v104);
    v105;
    const v110 = function (err) {
        const v106 = err.code;
        const v107 = v106 === 'ENOENT';
        if (v107) {
            const v108 = callback();
            return v108;
        }
        const v109 = callback(err);
        return v109;
    };
    const v111 = stream.on('error', v110);
    v111;
};
const readLastChunk = function (path, start, end, callback) {
    const v134 = function (err, fd) {
        if (err) {
            const v112 = err.code;
            const v113 = v112 === 'EACCES';
            if (v113) {
                const v114 = callback();
                return v114;
            }
            const v115 = callback(err);
            return v115;
        }
        var buffer = new Buffer(4096);
        var length = 0;
        const v116 = read();
        v116;
        start = null;
        const read = function () {
            const v117 = buffer.length;
            const v118 = v117 - length;
            const v119 = v118 === 0;
            if (v119) {
                const v120 = grow();
                v120;
            }
            const v121 = buffer.length;
            const v122 = v121 - length;
            const v123 = nodeFs.read(fd, buffer, length, v122, start, onread);
            v123;
        };
        const onread = function (err, bytesRead) {
            if (err) {
                const v124 = callback(err);
                return v124;
            }
            length += bytesRead;
            const v125 = bytesRead === 0;
            if (v125) {
                const v126 = buffer.length;
                const v127 = v126 + end;
                const v128 = buffer.slice(0, v127);
                const v129 = callback(null, v128);
                return v129;
            }
            const v130 = read();
            v130;
        };
        const grow = function () {
            const v131 = buffer.length;
            const v132 = v131 * 2;
            var newBuffer = new Buffer(v132);
            const v133 = buffer.copy(newBuffer);
            v133;
            buffer = newBuffer;
        };
    };
    const v135 = nodeFs.open(path, 'r', v134);
    v135;
};
const writeFile = function (path, binary, callback) {
    const v136 = nodePath.dirname(path);
    const v139 = function (err) {
        if (err) {
            const v137 = callback(err);
            return v137;
        }
        const v138 = nodeFs.writeFile(path, binary, callback);
        v138;
    };
    const v140 = mkdirp(v136, v139);
    v140;
};
const rename = function (oldPath, newPath, callback) {
    var oldBase = nodePath.dirname(oldPath);
    var newBase = nodePath.dirname(newPath);
    const v141 = oldBase === newBase;
    if (v141) {
        const v142 = nodeFs.rename(oldPath, newPath, callback);
        return v142;
    }
    const v143 = nodePath.dirname(path);
    const v146 = function (err) {
        if (err) {
            const v144 = callback(err);
            return v144;
        }
        const v145 = nodeFs.rename(oldPath, newPath, callback);
        v145;
    };
    const v147 = mkdirp(v143, v146);
    v147;
};
const readDir = function (path, callback) {
    const v153 = function (err, names) {
        if (err) {
            const v148 = err.code;
            const v149 = v148 === 'ENOENT';
            if (v149) {
                const v150 = callback();
                return v150;
            }
            const v151 = callback(err);
            return v151;
        }
        const v152 = callback(null, names);
        return v152;
    };
    const v154 = nodeFs.readdir(path, v153);
    v154;
};
const mkdirp = function (path, callback) {
    const v173 = function (err) {
        if (err) {
            const v155 = err.code;
            const v156 = v155 === 'ENOENT';
            if (v156) {
                const v157 = nodePath.dirname(path);
                const v166 = function (err) {
                    if (err) {
                        const v158 = callback(err);
                        return v158;
                    }
                    const v164 = function (err) {
                        const v159 = err.code;
                        const v160 = v159 !== 'EEXIST';
                        const v161 = err && v160;
                        if (v161) {
                            const v162 = callback(err);
                            return v162;
                        }
                        const v163 = callback();
                        return v163;
                    };
                    const v165 = nodeFs.mkdir(path, v164);
                    v165;
                };
                const v167 = mkdirp(v157, v166);
                return v167;
            }
            const v168 = err.code;
            const v169 = v168 === 'EEXIST';
            if (v169) {
                const v170 = callback();
                return v170;
            }
            const v171 = callback(err);
            return v171;
        }
        const v172 = callback();
        v172;
    };
    const v174 = nodeFs.mkdir(path, v173);
    v174;
};