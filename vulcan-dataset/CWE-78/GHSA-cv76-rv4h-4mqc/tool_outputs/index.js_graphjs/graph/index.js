'use strict';
const v95 = require('child_process');
var execSync = v95.execSync;
const v96 = require('yargs');
const v97 = v96.argv;
const v98 = v97._;
var mainPid = v98[0];
const Process = function Process(pid, name, level = 0) {
    const v99 = this.pid;
    const v100 = this.name;
    const v101 = this.level;
    const v102 = this.children;
    const v103 = [];
    [v99, v100, v101, v102] = [
        pid,
        name,
        level,
        v103
    ];
};
Process['is_class'] = true;
const v125 = function (processObj) {
    const v104 = typeof processObj;
    const v105 = v104 === 'number';
    const v106 = v105 && (processObj = this.getProcessTree(processObj));
    v106;
    try {
        const v107 = processObj.pid;
        const v108 = `pgrep -lfP ${ v107 }`;
        const v109 = execSync(v108);
        const v110 = v109.toString();
        const v111 = v110.split('\n');
        const v112 = e => {
            return e;
        };
        let lines = v111.filter(v112);
        const v123 = line => {
            const v113 = line.match(/^(\d+) (.*)$/);
            const _ = v113[0];
            const pid = v113[1];
            const name = v113[2];
            const v114 = processObj.children;
            const v115 = processObj.level;
            const v116 = v115 + 1;
            const v117 = new Process(pid, name, v116);
            const v118 = v114.push(v117);
            v118;
            const v119 = processObj.children;
            const v121 = el => {
                const v120 = this._buildProcessTree(el);
                return v120;
            };
            const v122 = v119.forEach(v121);
            v122;
        };
        const v124 = lines.forEach(v123);
        v124;
    } catch (e) {
    }
    return processObj;
};
const v143 = function (processObj) {
    const v126 = typeof processObj;
    const v127 = v126 === 'number';
    const v128 = v127 && (processObj = this.getProcessTree(processObj));
    v128;
    const v129 = processObj.level;
    const v130 = Array(v129);
    const v131 = v130.fill('  ');
    let prefix = v131.join('');
    let name;
    const v132 = processObj.name;
    const v133 = v132.length;
    const v134 = v133 > 80;
    const v135 = processObj.name;
    const v136 = v135.substring(0, 77);
    const v137 = v136 + ' ...';
    const v138 = processObj.name;
    if (v134) {
        name = v137;
    } else {
        name = v138;
    }
    const v139 = processObj.pid;
    let output = `${ prefix } * ${ v139 } ${ name }\n`;
    const v140 = processObj.children;
    const v141 = child => {
        return output += this._txtProcessTree(child);
    };
    const v142 = v140.forEach(v141);
    v142;
    return output;
};
const v159 = function (processObj, pidsByLevel = []) {
    const v144 = typeof processObj;
    const v145 = v144 === 'number';
    const v146 = v145 && (processObj = this.getProcessTree(processObj));
    v146;
    const v147 = processObj.level;
    const v148 = processObj.level;
    const v149 = pidsByLevel[v148];
    const v150 = [];
    pidsByLevel[v147] = v149 || v150;
    const v151 = processObj.level;
    const v152 = pidsByLevel[v151];
    const v153 = processObj.pid;
    const v154 = v152.push(v153);
    v154;
    const v155 = processObj.children;
    const v157 = child => {
        const v156 = this.getPids(child, pidsByLevel);
        return v156;
    };
    const v158 = v155.forEach(v157);
    v158;
    return pidsByLevel;
};
const v168 = function (pid) {
    try {
        const v160 = `ps -p ${ pid } -o "pid=,command="`;
        const v161 = execSync(v160);
        const v162 = v161.toString();
        let psOutput = v162.trim();
        const v163 = psOutput.match(/^(\d+) (.*)$/);
        const _ = v163[0];
        const processId = v163[1];
        const processName = v163[2];
        let processObj = new Process(processId, processName);
        const v164 = this._buildProcessTree(processObj);
        v164;
        return processObj;
    } catch (e) {
        const v165 = e.message;
        const v166 = console.error('Invalid process id.', v165);
        v166;
        const v167 = process.exit(2);
        v167;
    }
};
const v178 = function (pid) {
    const v169 = this.getPids(pid);
    const v171 = (s, e) => {
        const v170 = s.concat(e);
        return v170;
    };
    const v172 = v169.reduce(v171);
    let pids = v172.reverse();
    const v173 = pids.join(' ');
    const v174 = `kill -9 ${ v173 }`;
    const v175 = execSync(v174);
    v175;
    const v176 = pids.join(' ');
    const v177 = `killed ${ v176 }`;
    return v177;
};
const v181 = function (pid) {
    const v179 = this._txtProcessTree(pid);
    const v180 = console.log(v179);
    v180;
};
let PsTree = {};
PsTree._buildProcessTree = v125;
PsTree._txtProcessTree = v143;
PsTree.getPids = v159;
PsTree.getProcessTree = v168;
PsTree.treeKill = v178;
PsTree.show = v181;
const v182 = require.main;
const v183 = v182 === module;
if (v183) {
    const v184 = PsTree.show(mainPid);
    const v185 = console.error('invalid process id');
    const v186 = process.exit(1);
    const v187 = v185 && v186;
    let v188;
    if (mainPid) {
        v188 = v184;
    } else {
        v188 = v187;
    }
    v188;
}
module.exports = PsTree;