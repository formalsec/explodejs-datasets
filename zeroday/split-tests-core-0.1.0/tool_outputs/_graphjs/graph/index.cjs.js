'use strict';
const v67 = { value: true };
const v68 = Object.defineProperty(exports, '__esModule', v67);
v68;
const _interopDefault = function (ex) {
    const v69 = typeof ex;
    const v70 = v69 === 'object';
    const v71 = ex && v70;
    const v72 = 'default' in ex;
    const v73 = v71 && v72;
    const v74 = ex['default'];
    let v75;
    if (v73) {
        v75 = v74;
    } else {
        v75 = ex;
    }
    return v75;
};
const v76 = require('fs');
const fs = _interopDefault(v76);
const v77 = require('fast-xml-parser');
const xmlParser = _interopDefault(v77);
const distribute = function (reports, jobs) {
    const v81 = (a, b) => {
        const v78 = b.time;
        const v79 = a.time;
        const v80 = v78 - v79;
        return v80;
    };
    const sortedFilesWithStats = reports.sort(v81);
    const createBuckets = function (totalGroups) {
        const buckets = [];
        let i = 0;
        let v82 = i < totalGroups;
        while (v82) {
            const v84 = [];
            const v85 = {
                time: 0,
                files: v84
            };
            const v86 = buckets.push(v85);
            v86;
            const v83 = i++;
            v82 = i < totalGroups;
        }
        return buckets;
    };
    const nextBucketBy = function (buckets) {
        const v88 = b => {
            const v87 = b.time;
            return v87;
        };
        const v89 = buckets.map(v88);
        const mininumPropertyValue = Math.min(...v89);
        const v92 = bucket => {
            const v90 = bucket.time;
            const v91 = v90 === mininumPropertyValue;
            return v91;
        };
        const v93 = buckets.find(v92);
        return v93;
    };
    const buckets = createBuckets(jobs);
    let i = 0;
    const v94 = sortedFilesWithStats.length;
    let v95 = i < v94;
    while (v95) {
        const bucket = nextBucketBy(buckets);
        const v97 = sortedFilesWithStats[i];
        const path = v97.path;
        const time = v97.time;
        bucket.time += time;
        const v98 = bucket.files;
        const v99 = v98.push(path);
        v99;
        const v96 = i++;
        v95 = i < v94;
    }
    return buckets;
};
const loadXML = function (file) {
    const junitRaw = fs.readFileSync(file, 'utf-8');
    const v100 = {
        ignoreAttributes: false,
        attributeNamePrefix: ''
    };
    const v101 = xmlParser.parse(junitRaw, v100, true);
    return v101;
};
const addNewFiles = function (reports, tests) {
    let averageFileTime = 0;
    const v102 = reports.length;
    if (v102) {
        let report;
        for (report of reports) {
            averageFileTime += report.time;
        }
        averageFileTime /= reports.length;
    } else {
        averageFileTime = 1;
    }
    const v110 = t => {
        const v106 = r => {
            const v103 = r.path;
            const v104 = t.path;
            const v105 = v103 === v104;
            return v105;
        };
        const existing = reports.find(v106);
        const v107 = t.path;
        const v108 = {
            path: v107,
            time: averageFileTime
        };
        const v109 = existing || v108;
        return v109;
    };
    const v111 = tests.map(v110);
    return v111;
};
const removeDeletedFiles = function (reports, tests) {
    const v117 = r => {
        const v115 = t => {
            const v112 = t.path;
            const v113 = r.path;
            const v114 = v112 === v113;
            return v114;
        };
        const v116 = tests.some(v115);
        return v116;
    };
    const v118 = reports.filter(v117);
    return v118;
};
const findFilenameInJUnit = function (testsuite, prop = 'file') {
    const v119 = !testsuite;
    if (v119) {
        const v120 = new Error(`Can't find file`);
        throw v120;
    }
    const v121 = Array.isArray(testsuite);
    if (v121) {
        let t;
        for (t of testsuite) {
            const file = findFilenameInJUnit(t, prop);
            if (file) {
                return file;
            }
        }
    } else {
        const v122 = typeof testsuite;
        const v123 = v122 === 'object';
        if (v123) {
            const v124 = testsuite[prop];
            if (v124) {
                const v125 = testsuite[prop];
                return v125;
            }
            const v126 = testsuite.testsuite;
            if (v126) {
                const v127 = testsuite.testsuite;
                const v128 = findFilenameInJUnit(v127, prop);
                return v128;
            }
            const v129 = testsuite.testcase;
            if (v129) {
                const v130 = testsuite.testcase;
                const v131 = findFilenameInJUnit(v130, prop);
                return v131;
            }
        }
    }
    const v132 = new Error(`Can't find file`);
    throw v132;
};
exports.addNewFiles = addNewFiles;
exports.distribute = distribute;
exports.findFilenameInJUnit = findFilenameInJUnit;
exports.loadXML = loadXML;
exports.removeDeletedFiles = removeDeletedFiles;