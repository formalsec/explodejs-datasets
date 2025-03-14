const v161 = function () {
    var child_process;
    var create_pipes;
    var proxy;
    var read_pipes;
    var timeout;
    child_process = require('child_process');
    create_pipes = require('./lib/create-pipes');
    proxy = require('./lib/proxy');
    read_pipes = require('./lib/read-pipes');
    timeout = require('./lib/timeout');
    const v160 = function (cmd, max_wait, options) {
        var dir;
        var ref;
        const v113 = typeof max_wait;
        const v114 = v113 === 'object';
        const v115 = max_wait && v114;
        if (v115) {
            ref = [
                max_wait,
                null
            ], options = ref[0], max_wait = ref[1];
        }
        const v116 = options == null;
        if (v116) {
            options = {};
        }
        const v117 = options.hasOwnProperty('encoding');
        const v118 = !v117;
        if (v118) {
            options.encoding = 'utf8';
        }
        const v119 = typeof options;
        const v120 = v119 === 'object';
        const v121 = v120 && options;
        const v122 = !v121;
        if (v122) {
            const v123 = new Error('options must be an object');
            throw v123;
        }
        const v124 = max_wait == null;
        if (v124) {
            const v125 = options.timeout;
            const v126 = options.max_wait;
            const v127 = v125 || v126;
            max_wait = v127 || 3600000;
        }
        const v128 = max_wait == null;
        const v129 = max_wait >= 1;
        const v130 = v128 || v129;
        const v131 = !v130;
        if (v131) {
            const v132 = new Error('`options.timeout` must be >=1 millisecond');
            throw v132;
        }
        const v133 = options.max_wait;
        const v134 = delete v133;
        v134;
        const v135 = options.forceEmulation;
        if (v135) {
            const v136 = options.forceEmulation;
            const v137 = delete v136;
            v137;
        } else {
            const v138 = child_process.execSync;
            if (v138) {
                const v139 = proxy(cmd, max_wait, options);
                return v139;
            }
        }
        const v140 = options.timeout;
        const v141 = delete v140;
        v141;
        dir = create_pipes();
        const v142 = '((((' + cmd;
        const v143 = v142 + ' > ';
        const v144 = v143 + dir;
        const v145 = v144 + '/stdout 2> ';
        const v146 = v145 + dir;
        const v147 = v146 + '/stderr ) ';
        const v148 = v147 + '&& echo $? > ';
        const v149 = v148 + dir;
        const v150 = v149 + '/status) || echo $? > ';
        const v151 = v150 + dir;
        const v152 = v151 + '/status) &&';
        const v153 = v152 + ' echo 1 > ';
        const v154 = v153 + dir;
        const v155 = v154 + '/done) || echo 1 > ';
        const v156 = v155 + dir;
        cmd = v156 + '/done';
        const v157 = function () {
        };
        const v158 = child_process.exec(cmd, options, v157);
        v158;
        const v159 = read_pipes(dir, max_wait);
        return v159;
    };
    module.exports = v160;
};
const v162 = v161.call(this);
v162;