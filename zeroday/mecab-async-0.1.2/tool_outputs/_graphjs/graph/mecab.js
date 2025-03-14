const v87 = require('child_process');
const exec = v87.exec;
const v88 = require('child_process');
const execSync = v88.execSync;
const sq = require('shell-quote');
var MeCab = function () {
};
const v89 = {};
const v105 = data => {
    const v90 = data.length;
    const v91 = v90 <= 8;
    const v92 = data[0];
    const v93 = data[1];
    const v94 = data[2];
    const v95 = data[3];
    const v96 = data[4];
    const v97 = data[5];
    const v98 = data[6];
    const v99 = data[7];
    const v100 = data[8];
    const v101 = data[9];
    const v102 = v101 || '';
    const v103 = {
        kanji: v92,
        lexical: v93,
        compound: v94,
        compound2: v95,
        compound3: v96,
        conjugation: v97,
        inflection: v98,
        original: v99,
        reading: v100,
        pronunciation: v102
    };
    let v104;
    if (v91) {
        v104 = null;
    } else {
        v104 = v103;
    }
    return v104;
};
const v110 = function (arr) {
    const results = [];
    const v106 = !arr;
    if (v106) {
        return results;
    }
    const v108 = data => {
        var result = this.parser(data);
        if (result) {
            const v107 = results.push(result);
            v107;
        }
    };
    const v109 = arr.forEach(v108);
    v109;
    return results;
};
const v116 = function (str) {
    const v111 = [
        'echo',
        str
    ];
    const v112 = sq.quote(v111);
    const v113 = v112 + ' | ';
    const v114 = this.command;
    const v115 = v113 + v114;
    return v115;
};
const v128 = function (result) {
    const v117 = result.split('\n');
    const v126 = line => {
        const arr = line.split('\t');
        const v118 = arr.length;
        const v119 = v118 === 1;
        if (v119) {
            const v120 = [line];
            return v120;
        }
        const v121 = arr[0];
        const v122 = [v121];
        const v123 = arr[1];
        const v124 = v123.split(',');
        const v125 = v122.concat(v124);
        return v125;
    };
    const v127 = v117.map(v126);
    return v127;
};
const v140 = function (str, callback) {
    const v138 = () => {
        const v129 = this._shellCommand(str);
        const v130 = this.options;
        const v136 = (err, result) => {
            if (err) {
                const v131 = callback(err);
                return v131;
            }
            const v132 = this._parseMeCabResult(result);
            const v133 = -2;
            const v134 = v132.slice(0, v133);
            const v135 = callback(err, v134);
            v135;
        };
        const v137 = exec(v129, v130, v136);
        v137;
    };
    const v139 = process.nextTick(v138);
    v139;
};
const v147 = function (str) {
    const v141 = this._shellCommand(str);
    const v142 = this.options;
    const result = execSync(v141, v142);
    const v143 = String(result);
    const v144 = this._parseMeCabResult(v143);
    const v145 = -2;
    const v146 = v144.slice(0, v145);
    return v146;
};
const v153 = function (str, callback) {
    const v151 = (err, result) => {
        if (err) {
            const v148 = callback(err);
            return v148;
        }
        const v149 = this._format(result);
        const v150 = callback(err, v149);
        v150;
    };
    const v152 = this.parse(str, v151);
    v152;
};
const v156 = function (str) {
    const v154 = this.parseSync(str);
    const v155 = this._format(v154);
    return v155;
};
const v160 = function (arr) {
    const v158 = data => {
        const v157 = data[0];
        return v157;
    };
    const v159 = arr.map(v158);
    return v159;
};
const v166 = function (str, callback) {
    const v164 = (err, arr) => {
        if (err) {
            const v161 = callback(err);
            return v161;
        }
        const v162 = this._wakatsu(arr);
        const v163 = callback(null, v162);
        v163;
    };
    const v165 = this.parse(str, v164);
    v165;
};
const v168 = function (str) {
    const arr = this.parseSync(str);
    const v167 = this._wakatsu(arr);
    return v167;
};
const v169 = {};
v169.command = 'mecab';
v169.options = v89;
v169.parser = v105;
v169._format = v110;
v169._shellCommand = v116;
v169._parseMeCabResult = v128;
v169.parse = v140;
v169.parseSync = v147;
v169.parseFormat = v153;
v169.parseSyncFormat = v156;
v169._wakatsu = v160;
v169.wakachi = v166;
v169.wakachiSync = v168;
MeCab.prototype = v169;
let x;
const v170 = MeCab.prototype;
for (x in v170) {
    const v171 = MeCab.prototype;
    const v172 = v171[x];
    MeCab[x] = v172;
}
module.exports = MeCab;