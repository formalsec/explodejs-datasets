'use strict';
const v114 = require('debug');
var debug = v114('strider-git');
const v115 = require('child_process');
var exec = v115.exec;
var shellescape = require('shell-escape');
const v116 = {};
v116.gitUrl = gitUrl;
v116.sshUrl = sshUrl;
v116.httpUrl = httpUrl;
v116.gitCmd = gitCmd;
v116.gitaneCmd = gitaneCmd;
v116.processBranches = processBranches;
v116.getBranches = getBranches;
v116.shellEscape = shellEscape;
module.exports = v116;
const gitane = function (context) {
    const v117 = context.runnerId;
    const v118 = v117 == 'docker';
    const v119 = context && v118;
    if (v119) {
        const v120 = require('strider-docker-gitane-camo');
        return v120;
    } else {
        const v121 = require('gitane');
        return v121;
    }
};
const shellEscape = function (one) {
    const v122 = !one;
    if (v122) {
        const v123 = new Error('trying to escape nothing', one);
        throw v123;
    }
    const v124 = [one];
    const v125 = shellescape(v124);
    return v125;
};
const gitUrl = function (config) {
    const v126 = config.auth;
    const v127 = v126.type;
    const v128 = v127 === 'ssh';
    let v129;
    if (v128) {
        v129 = sshUrl;
    } else {
        v129 = httpUrl;
    }
    const v130 = v129(config);
    return v130;
};
const sshUrl = function (config) {
    var base = config.url;
    const v131 = base.indexOf('ssh://');
    const v132 = v131 === 0;
    if (v132) {
        const v133 = [
            base,
            base
        ];
        return v133;
    }
    const v134 = base.indexOf('//');
    const v135 = -1;
    const v136 = v134 !== v135;
    if (v136) {
        const v137 = base.split('//');
        base = v137[1];
    }
    const v138 = base.indexOf('@');
    const v139 = -1;
    const v140 = v138 === v139;
    if (v140) {
        base = `git@${ base }`;
    }
    const v141 = base.indexOf(':');
    const v142 = -1;
    const v143 = v141 === v142;
    if (v143) {
        base = base.replace('/', ':');
    }
    var url = shellEscape(base);
    const v144 = [
        url,
        url
    ];
    return v144;
};
const httpUrl = function (config) {
    var base = config.url;
    const v145 = base.indexOf('//');
    const v146 = -1;
    const v147 = v145 !== v146;
    if (v147) {
        const v148 = base.split('//');
        base = v148[1];
    }
    const v149 = config.auth;
    const v150 = v149.type;
    const v151 = config.auth;
    const v152 = v151.username;
    const v153 = encodeURIComponent(v152);
    const v154 = config.auth;
    const v155 = v154.password;
    var url = `${ v150 }://${ v153 }:${ v155 }@${ base }`;
    const v156 = config.auth;
    const v157 = v156.type;
    var safe = `${ v157 }://[username]:[password]@${ base }`;
    const v158 = [
        url,
        safe
    ];
    return v158;
};
const gitCmd = function (cmd, cwd, auth, context, done) {
    const v159 = auth.type;
    const v160 = v159 === 'ssh';
    if (v160) {
        const v161 = auth.privkey;
        const v162 = gitaneCmd(cmd, cwd, v161, context, done);
        return v162;
    }
    const v163 = {
        cmd: cmd,
        cwd: cwd
    };
    const v164 = context.cmd(v163, done);
    v164;
};
const gitaneCmd = function (cmd, dest, privkey, context, done) {
    var start = new Date();
    const v165 = context.plugin;
    const v166 = {
        command: cmd,
        time: start,
        plugin: v165
    };
    const v167 = context.status('command.start', v166);
    v167;
    const v168 = gitane(context);
    const v169 = context.status;
    const v170 = {};
    v170.emit = v169;
    const v171 = context.runCmd;
    const v172 = context.cmd;
    const v173 = {
        emitter: v170,
        cmd: cmd,
        spawn: v171,
        baseDir: dest,
        privKey: privkey,
        detached: true,
        contextCmd: v172
    };
    const v189 = function (err, stdout, stderr, exitCode) {
        var end = new Date();
        const v174 = end.getTime();
        const v175 = start.getTime();
        var elapsed = v174 - v175;
        if (err) {
            const v176 = err.stack;
            const v177 = err.message;
            const v178 = v176 || v177;
            const v179 = v178 || err;
            const v180 = `Gitane error: ${ v179 }`;
            const v181 = debug(v180);
            v181;
        }
        const v182 = `gitane command done ${ cmd }; exit code ${ exitCode }; duration ${ elapsed }`;
        const v183 = debug(v182);
        v183;
        const v184 = {
            exitCode: exitCode,
            time: end,
            elapsed: elapsed
        };
        const v185 = context.status('command.done', v184);
        v185;
        let v186;
        if (err) {
            v186 = 500;
        } else {
            v186 = exitCode;
        }
        const v187 = stdout + stderr;
        const v188 = done(v186, v187);
        v188;
    };
    const v190 = v168.run(v173, v189);
    v190;
};
const processBranches = function (data, done) {
    const v191 = data.trim();
    const v192 = v191.split(/\n+/);
    const v199 = function (line) {
        const v193 = line.split(/\s+/);
        const v194 = v193[1];
        const v195 = v194.split('/');
        const v196 = -1;
        const v197 = v195.slice(v196);
        const v198 = v197[0];
        return v198;
    };
    const v200 = v192.map(v199);
    const v201 = done(null, v200);
    v201;
};
const getBranches = function (config, privkey, done) {
    const v202 = config.auth;
    const v203 = v202.type;
    const v204 = v203 === 'ssh';
    if (v204) {
        const v205 = gitane();
        const v206 = gitUrl(config);
        const v207 = v206[0];
        const v208 = config.auth;
        const v209 = v208.privkey;
        const v210 = v209 || privkey;
        const v211 = {
            cmd: `git ls-remote -h ${ v207 }`,
            baseDir: '/',
            privKey: v210,
            detached: true
        };
        const v218 = function (err, stdout, stderr, exitCode) {
            const v212 = exitCode !== 0;
            const v213 = err || v212;
            if (v213) {
                const v214 = new Error(stderr);
                const v215 = err || v214;
                const v216 = done(v215);
                return v216;
            }
            const v217 = processBranches(stdout, done);
            v217;
        };
        const v219 = v205.run(v211, v218);
        v219;
    } else {
        const v220 = httpUrl(config);
        const v221 = v220[0];
        const v222 = `git ls-remote -h ${ v221 }`;
        const v225 = function (err, stdout) {
            if (err) {
                const v223 = done(err);
                return v223;
            }
            const v224 = processBranches(stdout, done);
            v224;
        };
        const v226 = exec(v222, v225);
        v226;
    }
};