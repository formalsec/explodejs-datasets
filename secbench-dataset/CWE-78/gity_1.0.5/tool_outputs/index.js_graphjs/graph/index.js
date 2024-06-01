const v62 = require('child_process');
var exec = v62.exec;
module.exports = Git;
const Git = function (opts) {
    const v63 = this instanceof Git;
    const v64 = !v63;
    if (v64) {
        const v65 = new Git(opts);
        return v65;
    }
    const v66 = {};
    opts = opts || v66;
    this.queue = [];
    const v67 = opts.base;
    const v68 = process.cwd();
    this.base = v67 || v68;
    const v69 = opts.pretty;
    const v70 = typeof v69;
    const v71 = v70 !== 'undefined';
    const v72 = opts.pretty;
    let v73;
    if (v71) {
        v73 = v72;
    } else {
        v73 = true;
    }
    this.pretty = v73;
};
var commands = [
    'add',
    'bisect',
    'branch',
    'checkout',
    'clone',
    'commit',
    'diff',
    'fetch',
    'grep',
    'init',
    'log',
    'merge',
    'mv',
    'pull',
    'push',
    'rebase',
    'reset',
    'rm',
    'show',
    'status',
    'tag'
];
const v74 = Git.prototype;
const v83 = function (cb) {
    var self = this;
    const next = function (err, res) {
        if (err) {
            const v75 = cb(err);
            const v76 = cb && v75;
            return v76;
        }
        const v77 = self.queue;
        var fn = v77.shift();
        const v78 = !fn;
        if (v78) {
            const v79 = cb(err, res);
            const v80 = cb && v79;
            return v80;
        }
        const v81 = fn.call(self, next);
        v81;
    };
    const v82 = next();
    v82;
};
v74.run = v83;
const v96 = function (command) {
    const v84 = Git.prototype;
    const v95 = function (opts) {
        var base = this.base;
        var pretty = this.pretty;
        var cmd = 'git ' + command;
        if (opts) {
            cmd += ' ' + opts;
        }
        if (pretty) {
            cmd += before(command);
        }
        const v85 = this.queue;
        const v93 = function (cb) {
            const v86 = { cwd: base };
            const v91 = function (err, stdout) {
                const v87 = !pretty;
                if (v87) {
                    const v88 = cb(err, stdout);
                    return v88;
                }
                const v89 = after(command, stdout);
                const v90 = cb(err, v89);
                v90;
            };
            const v92 = exec(cmd, v86, v91);
            v92;
        };
        const v94 = v85.push(v93);
        v94;
        return this;
    };
    v84[command] = v95;
};
const v97 = commands.forEach(v96);
v97;
const before = function (command) {
    switch (command) {
    case 'status':
        return ' --porcelain';
        break;
    case 'log':
        return ' --pretty="format:%Creset %H - %an - %s"';
    default:
        return '';
        break;
    }
};
const after = function (command, output) {
    var ret = {};
    switch (command) {
    case 'status':
        var statuses = {};
        statuses['??'] = 'untracked';
        statuses.M = 'modified';
        statuses.AM = 'created';
        statuses.D = 'deleted';
        let status;
        for (status in statuses) {
            var type = statuses[status];
            ret[type] = [];
        }
        const v105 = function (line) {
            const v98 = line.trim();
            line = v98.split(/\s+/);
            var type = line.shift();
            var name = statuses[type];
            const v99 = ret[name];
            const v100 = name && v99;
            const v101 = ret[name];
            const v102 = line.join();
            const v103 = v101.push(v102);
            const v104 = v100 && v103;
            v104;
        };
        const v106 = lines(output, v105);
        v106;
        break;
    case 'branch':
        const v110 = function (line) {
            const v107 = line.indexOf('*');
            const v108 = -1;
            const v109 = v107 !== v108;
            if (v109) {
                ret = line.slice(2);
            }
        };
        const v111 = lines(output, v110);
        v111;
        break;
    case 'log':
        const v116 = function (line) {
            const v112 = line.trim();
            var parts = v112.split('-');
            var hash = parts[0];
            var author = parts[1];
            var message = parts[2];
            const v113 = author.trim();
            const v114 = message.trim();
            const v115 = {};
            v115.author = v113;
            v115.message = v114;
            ret[hash] = v115;
        };
        const v117 = lines(output, v116);
        v117;
        break;
    default:
        return output;
    }
    return ret;
};
const lines = function (output, cb) {
    const v118 = output.trim();
    const v119 = v118.split('\n');
    const v121 = function (line) {
        const v120 = cb(line);
        v120;
    };
    const v122 = v119.forEach(v121);
    v122;
};