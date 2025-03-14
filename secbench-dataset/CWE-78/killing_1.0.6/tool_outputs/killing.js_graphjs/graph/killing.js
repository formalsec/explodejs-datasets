'use strict';
const v40 = require('os');
var EOL = v40.EOL;
var retry = function (f) {
    const v41 = f();
    return v41;
};
const v42 = require('child_process');
var exec = v42.exec;
const filter = function (list) {
    var a = [];
    const v46 = function (i) {
        const v43 = !i;
        const v44 = !v43;
        if (v44) {
            const v45 = a.push(i);
            v45;
        }
    };
    const v47 = list.forEach(v46);
    v47;
    return a;
};
const v78 = function (name, callback) {
    var res = [];
    const v73 = function () {
        const v71 = function (resolve, reject) {
            const v48 = 'ps -ef | grep ' + name;
            const v69 = function (error, stdout) {
                if (error) {
                    const v49 = reject(error);
                    v49;
                }
                ;
                var items = stdout.split(EOL);
                var list = [];
                const v59 = function (i) {
                    var content = i.split(' ');
                    content = filter(content);
                    content = content.reverse();
                    const v50 = content[0];
                    const v51 = !v50;
                    const v52 = !v51;
                    if (v52) {
                        const v53 = new RegExp('grep|kill');
                        const v54 = content[1];
                        const v55 = v53.test(v54);
                        const v56 = !v55;
                        if (v56) {
                            content = content.reverse();
                            const v57 = content[1];
                            const v58 = list.push(v57);
                            v58;
                        }
                    }
                };
                const v60 = items.forEach(v59);
                v60;
                const v61 = list.length;
                const v62 = !v61;
                if (v62) {
                    const v63 = resolve(res);
                    v63;
                }
                res = res.concat(list);
                const v64 = list.join(' ');
                const v65 = 'sudo kill -SIGKILL ' + v64;
                const v67 = function (error) {
                    const v66 = reject();
                    v66;
                };
                const v68 = exec(v65, v67);
                v68;
            };
            const v70 = exec(v48, v69);
            v70;
        };
        const v72 = new Promise(v71);
        return v72;
    };
    const v74 = retry(v73, 1000, 100);
    const v76 = function (list) {
        const v75 = callback(list);
        v75;
    };
    const v77 = v74.then(v76);
    v77;
};
module.exports = v78;