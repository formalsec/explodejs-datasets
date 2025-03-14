var fs = require('fs');
const v86 = function (repl, file) {
    try {
        var stat = fs.statSync(file);
        const v45 = fs.readFileSync(file, 'utf-8');
        const v46 = v45.split('\n');
        const v47 = v46.reverse();
        v44.history = v47;
        const v48 = repl.rli;
        const v49 = v48.history;
        const v50 = v49.shift();
        v50;
        const v51 = repl.rli;
        const v52 = -1;
        v51.historyIndex = v52;
    } catch (e) {
    }
    var fd = fs.openSync(file, 'a');
    var reval = repl.eval;
    const v53 = { fd: fd };
    var wstream = fs.createWriteStream(file, v53);
    const v54 = function (err) {
        throw err;
    };
    const v55 = wstream.on('error', v54);
    v55;
    const v56 = repl.rli;
    const v67 = function (code) {
        const v57 = code !== '.history';
        const v58 = code && v57;
        if (v58) {
            const v59 = code + '\n';
            const v60 = wstream.write(v59);
            v60;
        } else {
            const v61 = repl.rli;
            const v62 = v61.historyIndex;
            const v63 = v62++;
            v63;
            const v64 = repl.rli;
            const v65 = v64.history;
            const v66 = v65.pop();
            v66;
        }
    };
    const v68 = v56.addListener('line', v67);
    v68;
    const v70 = function () {
        const v69 = fs.closeSync(fd);
        v69;
    };
    const v71 = process.on('exit', v70);
    v71;
    const v72 = repl.commands;
    const v84 = function () {
        var out = [];
        const v73 = repl.rli;
        const v74 = v73.history;
        const v76 = function (v, k) {
            const v75 = out.push(v);
            v75;
        };
        const v77 = v74.forEach(v76);
        v77;
        const v78 = repl.outputStream;
        const v79 = out.reverse();
        const v80 = v79.join('\n');
        const v81 = v80 + '\n';
        const v82 = v78.write(v81);
        v82;
        const v83 = repl.displayPrompt();
        v83;
    };
    const v85 = {};
    v85.help = 'Show the history';
    v85.action = v84;
    v72['history'] = v85;
};
module.exports = v86;