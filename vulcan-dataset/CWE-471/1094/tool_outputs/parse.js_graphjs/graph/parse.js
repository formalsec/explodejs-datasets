'use strict';
const v92 = function (string) {
    const v47 = string === '';
    const v48 = string == null;
    const v49 = v47 || v48;
    if (v49) {
        const v50 = {};
        return v50;
    }
    const v51 = string.charAt(0);
    const v52 = v51 === '?';
    if (v52) {
        string = string.slice(1);
    }
    var entries = string.split('&');
    var counters = {};
    var data = {};
    var i = 0;
    const v53 = entries.length;
    let v54 = i < v53;
    while (v54) {
        const v56 = entries[i];
        var entry = v56.split('=');
        const v57 = entry[0];
        var key = decodeURIComponent(v57);
        let value;
        const v58 = entry.length;
        const v59 = v58 === 2;
        const v60 = entry[1];
        const v61 = decodeURIComponent(v60);
        if (v59) {
            value = v61;
        } else {
            value = '';
        }
        const v62 = value === 'true';
        if (v62) {
            value = true;
        } else {
            const v63 = value === 'false';
            if (v63) {
                value = false;
            }
        }
        var levels = key.split(/\]\[?|\[/);
        var cursor = data;
        const v64 = key.indexOf('[');
        const v65 = -1;
        const v66 = v64 > v65;
        if (v66) {
            const v67 = levels.pop();
            v67;
        }
        var j = 0;
        const v68 = levels.length;
        let v69 = j < v68;
        while (v69) {
            var level = levels[j];
            const v71 = j + 1;
            var nextLevel = levels[v71];
            const v72 = nextLevel == '';
            const v73 = parseInt(nextLevel, 10);
            const v74 = isNaN(v73);
            const v75 = !v74;
            var isNumber = v72 || v75;
            const v76 = levels.length;
            const v77 = v76 - 1;
            var isValue = j === v77;
            const v78 = level === '';
            if (v78) {
                const v79 = levels.slice(0, j);
                var key = v79.join();
                const v80 = counters[key];
                const v81 = v80 == null;
                if (v81) {
                    const v82 = Array.isArray(cursor);
                    const v83 = cursor.length;
                    let v84;
                    if (v82) {
                        v84 = v83;
                    } else {
                        v84 = 0;
                    }
                    counters[key] = v84;
                }
                const v85 = counters[key];
                const v86 = v85++;
                level = v86;
            }
            if (isValue) {
                cursor[level] = value;
            } else {
                const v87 = cursor[level];
                const v88 = v87 == null;
                if (v88) {
                    const v89 = [];
                    const v90 = {};
                    let v91;
                    if (isNumber) {
                        v91 = v89;
                    } else {
                        v91 = v90;
                    }
                    cursor[level] = v91;
                }
            }
            cursor = cursor[level];
            const v70 = j++;
            v69 = j < v68;
        }
        const v55 = i++;
        v54 = i < v53;
    }
    return data;
};
module.exports = v92;