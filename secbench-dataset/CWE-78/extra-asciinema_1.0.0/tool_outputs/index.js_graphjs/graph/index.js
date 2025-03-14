const cp = require('child_process');
const cat = function (f, fn = null) {
    const v91 = (fres, frej) => {
        const v85 = `asciinema cat ${ f }`;
        const v86 = { encoding: 'utf8' };
        const v89 = (err, stdout) => {
            if (err) {
                const v87 = frej(err);
                return v87;
            }
            const v88 = fres(stdout);
            v88;
        };
        const v90 = cp.exec(v85, v86, v89);
        v90;
    };
    var p = new Promise(v91);
    const v93 = a => {
        const v92 = fn(null, a);
        return v92;
    };
    const v94 = p.then(v93, fn);
    let v95;
    if (fn) {
        v95 = v94;
    } else {
        v95 = p;
    }
    return v95;
};
const cp1 = require('child_process');
const catSync = function (f) {
    const v96 = `asciinema cat ${ f }`;
    const v97 = { encoding: 'utf8' };
    const v98 = cp1.execSync(v96, v97);
    return v98;
};
const recCmd = function (f, o) {
    const v99 = {};
    var o = o || v99;
    const v100 = o.input;
    if (v100) {
        const v101 = o.input;
        o.command = `cat "${ v101 }" | node -i`;
    }
    o.overwrite = true;
    o.yes = true;
    var cmd = 'asciinema rec';
    if (f) {
        cmd += ` "${ f }"`;
    }
    const v102 = o.stdin;
    if (v102) {
        cmd += ' --stdin';
    }
    const v103 = o.append;
    if (v103) {
        cmd += ' --append';
    }
    const v104 = o.raw;
    if (v104) {
        cmd += ' --raw';
    }
    const v105 = o.overwrite;
    if (v105) {
        cmd += ' --overwrite';
    }
    const v106 = o.command;
    if (v106) {
        const v107 = o.command;
        cmd += ` -c "${ v107 }"`;
    }
    const v108 = o.env;
    if (v108) {
        const v109 = o.env;
        cmd += ` -e "${ v109 }"`;
    }
    const v110 = o.title;
    if (v110) {
        const v111 = o.title;
        cmd += ` -t "${ v111 }"`;
    }
    const v112 = o.idleTimeLimit;
    if (v112) {
        const v113 = o.idleTimeLimit;
        cmd += ` -e "${ v113 }"`;
    }
    const v114 = o.yes;
    if (v114) {
        const v115 = o.yes;
        cmd += ` -e "${ v115 }"`;
    }
    const v116 = o.quiet;
    if (v116) {
        const v117 = o.quiet;
        cmd += ` -e "${ v117 }"`;
    }
    return cmd;
};
const cp3 = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const rec = function (f, o, fn = null) {
    const v118 = os.tmpdir();
    const v119 = path.join(v118, 'asciinema-');
    const v120 = fs.mkdtempSync(v119);
    const v121 = path.join(v120, '0.cast');
    var f = f || v121;
    const v128 = (fres, frej) => {
        const v122 = recCmd(f, o);
        const v123 = { encoding: 'utf8' };
        const v126 = err => {
            if (err) {
                const v124 = frej(err);
                return v124;
            }
            const v125 = fres(f);
            v125;
        };
        const v127 = cp3.exec(v122, v123, v126);
        v127;
    };
    var p = new Promise(v128);
    const v130 = a => {
        const v129 = fn(null, a);
        return v129;
    };
    const v131 = p.then(v130, fn);
    let v132;
    if (p) {
        v132 = v131;
    } else {
        v132 = p;
    }
    return v132;
};
const cp4 = require('child_process');
const fs4 = require('fs');
const os4 = require('os');
const path4 = require('path');
const recSync = function (f, o) {
    const v133 = os4.tmpdir();
    const v134 = path4.join(v133, 'asciinema-');
    const v135 = fs4.mkdtempSync(v134);
    const v136 = path4.join(v135, '0.cast');
    var f = f || v136;
    const v137 = recCmd(f, o);
    const v138 = { encoding: 'utf8' };
    const v139 = cp4.execSync(v137, v138);
    v139;
    return f;
};
const retimeData = function (d, o) {
    const v140 = {};
    var o = o || v140;
    var v141 = o;
    var input = v141.input;
    var i = 0;
    var output = '';
    const v142 = o.delay;
    var t = v142 || 0;
    const v143 = o.outputRate;
    const v144 = v143 || 0.1;
    const v145 = o.inputRate;
    const v146 = v145 || 0.1;
    var rate = [
        v144,
        v146
    ];
    const v147 = o.outputDelay;
    const v148 = v147 || 0.1;
    const v149 = o.inputDelay;
    const v150 = v149 || 1;
    var delay = [
        v148,
        v150
    ];
    var oldState = 0;
    var state = 0;
    return output;
};
const fs6 = require('fs');
const retime = async function (f, o) {
    const v151 = fs6.promises;
    var d = await v151.readFile(f, 'utf8');
    d = retimeData(d, o);
    const v152 = fs6.promises;
    await v152.writeFile(f, d);
};
const fs7 = require('fs');
const retimeSync = function (f, o) {
    var d = fs7.readFileSync(f, 'utf8');
    d = retimeData(d, o);
    const v153 = fs7.writeFileSync(f, d);
    v153;
};
const cp8 = require('child_process');
const upload = function (f, fn = null) {
    const v161 = (fres, frej) => {
        const v154 = `asciinema upload ${ f }`;
        const v155 = { encoding: 'utf8' };
        const v159 = (err, stdout) => {
            if (err) {
                const v156 = frej(err);
                return v156;
            }
            const v157 = stdout.replace(/.*?(https?:\S+).*/s, '$1');
            const v158 = fres(v157);
            v158;
        };
        const v160 = cp8.exec(v154, v155, v159);
        v160;
    };
    var p = new Promise(v161);
    const v163 = a => {
        const v162 = fn(null, a);
        return v162;
    };
    const v164 = p.then(v163, fn);
    let v165;
    if (fn) {
        v165 = v164;
    } else {
        v165 = p;
    }
    return v165;
};
const cp9 = require('child_process');
const uploadSync = function (f) {
    const v166 = `asciinema upload ${ f }`;
    const v167 = { encoding: 'utf8' };
    var stdout = cp9.execSync(v166, v167);
    const v168 = stdout.replace(/.*?(https?:\S+).*/s, '$1');
    return v168;
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