'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const fs = _interopDefault(require('fs'));
const xmlParser = _interopDefault(require('fast-xml-parser'));

function distribute(reports, jobs) {
    const sortedFilesWithStats = reports.sort((a, b) => {
        return b.time - a.time;
    });
    function createBuckets(totalGroups) {
        const buckets = [];
        for (let i = 0; i < totalGroups; i++) {
            buckets.push({ time: 0, files: [] });
        }
        return buckets;
    }
    function nextBucketBy(buckets) {
        const mininumPropertyValue = Math.min(...buckets.map((b) => b.time));
        return buckets.find((bucket) => bucket.time === mininumPropertyValue);
    }
    const buckets = createBuckets(jobs);
    for (let i = 0; i < sortedFilesWithStats.length; i++) {
        const bucket = nextBucketBy(buckets);
        const { path, time } = sortedFilesWithStats[i];
        bucket.time += time;
        bucket.files.push(path);
    }
    return buckets;
}

function loadXML(file) {
    const junitRaw = fs.readFileSync(file, "utf-8");
    return xmlParser.parse(junitRaw, {
        ignoreAttributes: false,
        attributeNamePrefix: "",
    }, true);
}
function addNewFiles(reports, tests) {
    let averageFileTime = 0;
    if (reports.length) {
        for (const report of reports) {
            averageFileTime += report.time;
        }
        averageFileTime /= reports.length;
    }
    else {
        averageFileTime = 1;
    }
    return tests.map((t) => {
        const existing = reports.find((r) => r.path === t.path);
        return existing || { path: t.path, time: averageFileTime };
    });
}
function removeDeletedFiles(reports, tests) {
    return reports.filter((r) => tests.some((t) => t.path === r.path));
}
function findFilenameInJUnit(testsuite, prop = "file") {
    if (!testsuite) {
        throw new Error(`Can't find file`);
    }
    if (Array.isArray(testsuite)) {
        for (const t of testsuite) {
            const file = findFilenameInJUnit(t, prop);
            if (file) {
                return file;
            }
        }
    }
    else if (typeof testsuite === "object") {
        if (testsuite[prop]) {
            return testsuite[prop];
        }
        if (testsuite.testsuite) {
            return findFilenameInJUnit(testsuite.testsuite, prop);
        }
        if (testsuite.testcase) {
            return findFilenameInJUnit(testsuite.testcase, prop);
        }
    }
    throw new Error(`Can't find file`);
}

exports.addNewFiles = addNewFiles;
exports.distribute = distribute;
exports.findFilenameInJUnit = findFilenameInJUnit;
exports.loadXML = loadXML;
exports.removeDeletedFiles = removeDeletedFiles;
//# sourceMappingURL=index.cjs.js.map
