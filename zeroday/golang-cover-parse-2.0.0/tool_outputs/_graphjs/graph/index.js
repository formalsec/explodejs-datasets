'use strict';
var fs = require('fs');
var parse = {};
const v147 = function (text, cb) {
    var files = [];
    var modes = text.split('mode:');
    const v77 = modes.length;
    const v78 = !v77;
    if (v78) {
        const v79 = new Error('No coverage found');
        const v80 = cb(v79);
        return v80;
    }
    const v133 = function (mode) {
        const v81 = mode.length;
        const v82 = !v81;
        if (v82) {
            return;
        }
        const v83 = mode.replace('\r\n', '\n');
        var lines = v83.split(/[\n\r]/g);
        lines = lines.slice(1);
        const v131 = function (line) {
            var parts = line.split(':');
            const v84 = parts.length;
            const v85 = !v84;
            if (v85) {
                return;
            }
            var path = parts[0];
            var values = parts[1];
            const v86 = !path;
            const v87 = !values;
            const v88 = v86 || v87;
            if (v88) {
                return;
            }
            const v89 = files.length;
            const v90 = v89 - 1;
            const v91 = files[v90];
            const v92 = !v91;
            const v93 = files.length;
            const v94 = v93 - 1;
            const v95 = files[v94];
            const v96 = v95.file;
            const v97 = v96 !== path;
            const v98 = v92 || v97;
            if (v98) {
                var name = path.split('/');
                const v99 = name.length;
                const v100 = v99 - 1;
                name = name[v100];
                const v101 = [];
                const v102 = {};
                v102.found = 0;
                v102.hit = 0;
                v102.details = v101;
                const v103 = {
                    title: name,
                    file: path,
                    lines: v102
                };
                const v104 = files.push(v103);
                v104;
            }
            const v105 = files.length;
            const v106 = v105 - 1;
            var file = files[v106];
            const v107 = values.split(',');
            const v108 = v107[0];
            const v109 = v108.split('.');
            const v110 = v109[0];
            var startLine = Number(v110);
            const v111 = values.split(',');
            const v112 = v111[1];
            const v113 = v112.split('.');
            const v114 = v113[0];
            var endLine = Number(v114);
            const v115 = values.split(' ');
            const v116 = v115[2];
            var hit = Number(v116);
            const v117 = file.lines;
            const v118 = endLine - startLine;
            v117.found += v118 + 1;
            var lineNumber = startLine;
            let v119 = lineNumber <= endLine;
            while (v119) {
                const v121 = file.lines;
                const v122 = v121.details;
                const v125 = function (ex) {
                    const v123 = ex.line;
                    const v124 = v123 === lineNumber;
                    return v124;
                };
                const v126 = v122.filter(v125);
                var existingLine = v126[0];
                if (existingLine) {
                    existingLine.hit += hit;
                } else {
                    const v127 = file.lines;
                    const v128 = v127.details;
                    const v129 = {
                        line: lineNumber,
                        hit: hit
                    };
                    const v130 = v128.push(v129);
                    v130;
                }
                const v120 = lineNumber++;
                v119 = lineNumber <= endLine;
            }
        };
        const v132 = lines.forEach(v131);
        v132;
    };
    const v134 = modes.forEach(v133);
    v134;
    const v144 = function (file) {
        const v136 = file.lines;
        const v137 = v136.details;
        const v142 = function (acc, val) {
            const v138 = val.hit;
            const v139 = v138 > 0;
            let v140;
            if (v139) {
                v140 = 1;
            } else {
                v140 = 0;
            }
            const v141 = acc + v140;
            return v141;
        };
        const v143 = v137.reduce(v142, 0);
        v135.hit = v143;
    };
    const v145 = files.forEach(v144);
    v145;
    const v146 = cb(null, files);
    v146;
};
parse.parseContent = v147;
const v152 = function (file, cb) {
    const v150 = function (err, content) {
        if (err) {
            const v148 = cb(err);
            return v148;
        }
        const v149 = parse.parseContent(content, cb);
        v149;
    };
    const v151 = fs.readFile(file, 'utf8', v150);
    v151;
};
parse.parseFile = v152;
module.exports = parse;