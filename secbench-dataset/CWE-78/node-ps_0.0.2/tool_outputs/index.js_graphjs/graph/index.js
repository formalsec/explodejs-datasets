var childProcess = require('child_process');
const _getTitles = function (titleLine) {
    var titles = [];
    const v65 = titleLine.split(/\s+/);
    const v70 = function (title) {
        const v66 = title.trim();
        const v67 = v66 === '';
        if (v67) {
            return;
        }
        const v68 = title.trim();
        const v69 = titles.push(v68);
        v69;
    };
    const v71 = v65.forEach(v70);
    v71;
    return titles;
};
const _parse = function (input) {
    var lines = input.split('\n');
    const v72 = lines.shift();
    var titles = _getTitles(v72);
    const v75 = function (line) {
        const v73 = line.trim();
        const v74 = v73 !== '';
        return v74;
    };
    const v76 = lines.filter(v75);
    const v91 = function (line) {
        const v77 = line.trim();
        var columns = v77.split(/\s+/);
        var obj = {};
        var i = 0;
        const v78 = titles.length;
        let v79 = i < v78;
        while (v79) {
            const v81 = titles.length;
            const v82 = v81 - 1;
            const v83 = i === v82;
            const v84 = columns.length;
            const v85 = v84 > 1;
            const v86 = v83 && v85;
            if (v86) {
                const v88 = columns.join(' ');
                obj[v87] = v88;
            } else {
                const v90 = columns.shift();
                obj[v89] = v90;
            }
            const v80 = i++;
            v79 = i < v78;
        }
        return obj;
    };
    var objs = v76.map(v91);
    return objs;
};
const _filter = function (query, processes) {
    const v107 = function (proc) {
        var res = true;
        const v92 = query.pid;
        if (v92) {
            var pids = Object.create(null);
            const v93 = query.pid;
            const v94 = Array.isArray(v93);
            if (v94) {
                const v95 = query.pid;
                const v96 = function (pid) {
                    pids[pid] = true;
                };
                const v97 = v95.forEach(v96);
                v97;
            } else {
                const v98 = query.pid;
                pids[v98] = true;
            }
            const v99 = proc.PID;
            const v100 = v99 in pids;
            res = res && v100;
        }
        const v101 = query.command;
        if (v101) {
            const v102 = proc.CMD;
            const v103 = query.command;
            const v104 = v102.search(v103);
            const v105 = -1;
            const v106 = v104 !== v105;
            res = res && v106;
        }
        return res;
    };
    const v108 = processes.filter(v107);
    return v108;
};
const _ps = function (args, cb) {
    const v109 = process.platform;
    const v110 = v109 === 'win32';
    if (v110) {
        const v111 = cb('Windows support not implemented yet.');
        return v111;
    } else {
        var cmd = 'ps';
        if (args) {
            const v112 = args.join(' ');
            cmd += ' ' + v112;
        }
        const v120 = function (err, stdout, stderr) {
            const v113 = err || stderr;
            if (v113) {
                const v114 = stderr.toString();
                const v115 = err || v114;
                const v116 = cb(v115);
                return v116;
            }
            const v117 = stdout.toString();
            const v118 = _parse(v117);
            const v119 = cb(null, v118);
            return v119;
        };
        const v121 = childProcess.exec(cmd, v120);
        v121;
    }
};
const lookup = function (query, cb) {
    const v122 = query.psargs;
    const v126 = function (err, results) {
        if (err) {
            const v123 = cb(err);
            return v123;
        }
        const v124 = _filter(query, results);
        const v125 = cb(null, v124);
        return v125;
    };
    const v127 = _ps(v122, v126);
    v127;
};
const v128 = {};
v128._getTitles = _getTitles;
v128._parse = _parse;
v128._filter = _filter;
v128._ps = _ps;
v128.lookup = lookup;
module.exports = v128;