const cp = require('child_process');
const cat = function (f, fn = null) {
    const v108 = (fres, frej) => {
        const v102 = `asciinema cat ${ f }`;
        const v103 = { encoding: 'utf8' };
        const v106 = (err, stdout) => {
            if (err) {
                const v104 = frej(err);
                return v104;
            }
            const v105 = fres(stdout);
            v105;
        };
        const v107 = cp.exec(v102, v103, v106);
        v107;
    };
    var p = new Promise(v108);
    const v110 = a => {
        const v109 = fn(null, a);
        return v109;
    };
    const v111 = p.then(v110, fn);
    let v112;
    if (fn) {
        v112 = v111;
    } else {
        v112 = p;
    }
    return v112;
};
const cp1 = require('child_process');
const catSync = function (f) {
    const v113 = `asciinema cat ${ f }`;
    const v114 = { encoding: 'utf8' };
    const v115 = cp1.execSync(v113, v114);
    return v115;
};
const recCmd = function (f, o) {
    const v116 = {};
    var o = o || v116;
    const v117 = o.input;
    if (v117) {
        const v118 = o.input;
        o.command = `cat "${ v118 }" | node -i`;
    }
    o.overwrite = true;
    o.yes = true;
    var cmd = 'asciinema rec';
    if (f) {
        cmd += ` "${ f }"`;
    }
    const v119 = o.stdin;
    if (v119) {
        cmd += ' --stdin';
    }
    const v120 = o.append;
    if (v120) {
        cmd += ' --append';
    }
    const v121 = o.raw;
    if (v121) {
        cmd += ' --raw';
    }
    const v122 = o.overwrite;
    if (v122) {
        cmd += ' --overwrite';
    }
    const v123 = o.command;
    if (v123) {
        const v124 = o.command;
        cmd += ` -c "${ v124 }"`;
    }
    const v125 = o.env;
    if (v125) {
        const v126 = o.env;
        cmd += ` -e "${ v126 }"`;
    }
    const v127 = o.title;
    if (v127) {
        const v128 = o.title;
        cmd += ` -t "${ v128 }"`;
    }
    const v129 = o.idleTimeLimit;
    if (v129) {
        const v130 = o.idleTimeLimit;
        cmd += ` -e "${ v130 }"`;
    }
    const v131 = o.yes;
    if (v131) {
        const v132 = o.yes;
        cmd += ` -e "${ v132 }"`;
    }
    const v133 = o.quiet;
    if (v133) {
        const v134 = o.quiet;
        cmd += ` -e "${ v134 }"`;
    }
    return cmd;
};
const cp3 = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const rec = function (f, o, fn = null) {
    const v135 = os.tmpdir();
    const v136 = path.join(v135, 'asciinema-');
    const v137 = fs.mkdtempSync(v136);
    const v138 = path.join(v137, '0.cast');
    var f = f || v138;
    const v145 = (fres, frej) => {
        const v139 = recCmd(f, o);
        const v140 = { encoding: 'utf8' };
        const v143 = err => {
            if (err) {
                const v141 = frej(err);
                return v141;
            }
            const v142 = fres(f);
            v142;
        };
        const v144 = cp3.exec(v139, v140, v143);
        v144;
    };
    var p = new Promise(v145);
    const v147 = a => {
        const v146 = fn(null, a);
        return v146;
    };
    const v148 = p.then(v147, fn);
    let v149;
    if (p) {
        v149 = v148;
    } else {
        v149 = p;
    }
    return v149;
};
const cp4 = require('child_process');
const fs4 = require('fs');
const os4 = require('os');
const path4 = require('path');
const recSync = function (f, o) {
    const v150 = os4.tmpdir();
    const v151 = path4.join(v150, 'asciinema-');
    const v152 = fs4.mkdtempSync(v151);
    const v153 = path4.join(v152, '0.cast');
    var f = f || v153;
    const v154 = recCmd(f, o);
    const v155 = { encoding: 'utf8' };
    const v156 = cp4.execSync(v154, v155);
    v156;
    return f;
};
const retimeData = function (d, o) {
    const v157 = {};
    var o = o || v157;
    var v158 = o;
    var input = v158.input;
    var i = 0;
    var output = '';
    const v159 = o.delay;
    var t = v159 || 0;
    const v160 = o.outputRate;
    const v161 = v160 || 0.1;
    const v162 = o.inputRate;
    const v163 = v162 || 0.1;
    var rate = [
        v161,
        v163
    ];
    const v164 = o.outputDelay;
    const v165 = v164 || 0.1;
    const v166 = o.inputDelay;
    const v167 = v166 || 1;
    var delay = [
        v165,
        v167
    ];
    var oldState = 0;
    var state = 0;
    let l;
    const v168 = d.split(/\r?\n/g);
    for (l of v168) {
        const v169 = l.startsWith('{');
        const v170 = l.trim();
        const v171 = v170 === '';
        const v172 = v169 || v171;
        if (v172) {
            output += l + '\n';
            continue;
        }
        const v173 = JSON.parse(l);
        const x = v173[2];
        var x1 = x.replace(/\r*\n/g, '\n');
        if (input) {
            const v174 = x1.length;
            const v175 = i + v174;
            var i1 = input.substring(i, v175);
            const v176 = x1 === i1;
            const v177 = x1.length;
            if (v176) {
                i = v177;
            } else {
                i = 0;
            }
            const v178 = x1 === i1;
            if (v178) {
                state = 1;
            } else {
                state = 0;
            }
        }
        const v179 = state !== oldState;
        if (v179) {
            t += delay[state];
        }
        const v180 = [
            t,
            'o',
            x
        ];
        const v181 = JSON.stringify(v180);
        output += v181 + '\n';
        t += rate[state];
        oldState = state;
        const v182 = !input;
        if (v182) {
            const v183 = x.endsWith('\x1B[3G');
            if (v183) {
                state = 1;
            } else {
                const v184 = x === '\r\r\n';
                if (v184) {
                    state = 0;
                }
            }
        }
    }
    return output;
};
const fs6 = require('fs');
const retime = async function (f, o) {
    const v185 = fs6.promises;
    var d = await v185.readFile(f, 'utf8');
    d = retimeData(d, o);
    const v186 = fs6.promises;
    await v186.writeFile(f, d);
};
const fs7 = require('fs');
const retimeSync = function (f, o) {
    var d = fs7.readFileSync(f, 'utf8');
    d = retimeData(d, o);
    const v187 = fs7.writeFileSync(f, d);
    v187;
};
const cp8 = require('child_process');
const upload = function (f, fn = null) {
    const v195 = (fres, frej) => {
        const v188 = `asciinema upload ${ f }`;
        const v189 = { encoding: 'utf8' };
        const v193 = (err, stdout) => {
            if (err) {
                const v190 = frej(err);
                return v190;
            }
            const v191 = stdout.replace(/.*?(https?:\S+).*/s, '$1');
            const v192 = fres(v191);
            v192;
        };
        const v194 = cp8.exec(v188, v189, v193);
        v194;
    };
    var p = new Promise(v195);
    const v197 = a => {
        const v196 = fn(null, a);
        return v196;
    };
    const v198 = p.then(v197, fn);
    let v199;
    if (fn) {
        v199 = v198;
    } else {
        v199 = p;
    }
    return v199;
};
const cp9 = require('child_process');
const uploadSync = function (f) {
    const v200 = `asciinema upload ${ f }`;
    const v201 = { encoding: 'utf8' };
    var stdout = cp9.execSync(v200, v201);
    const v202 = stdout.replace(/.*?(https?:\S+).*/s, '$1');
    return v202;
};
exports.cat = cat;
exports.catSync = catSync;
exports.rec = rec;
exports.recSync = recSync;
exports.retime = retime;
exports.retimeData = retimeData;
exports.retimeSync = retimeSync;
exports.upload = upload;
exports.uploadSync = uploadSync;