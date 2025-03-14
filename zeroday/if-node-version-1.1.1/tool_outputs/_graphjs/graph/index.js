'use strict';
var semver = require('semver');
var spawn = require('cross-spawn');
const isNodeVersionSatisfies = function (range) {
    const v10 = process.versions;
    const v11 = v10.node;
    const v12 = semver.satisfies(v11, range);
    return v12;
};
const spawnIfNodeVersionSatisfies = function (versionRange, command, args, options) {
    const v13 = isNodeVersionSatisfies(versionRange);
    if (v13) {
        const v14 = spawn(command, args, options);
        return v14;
    }
    return null;
};
const spawnIfNodeVersionSatisfiesSync = function (versionRange, command, args, options) {
    const v15 = isNodeVersionSatisfies(versionRange);
    if (v15) {
        const v16 = spawn.sync(command, args, options);
        return v16;
    }
    return null;
};
module.exports = spawnIfNodeVersionSatisfies;
const v17 = module.exports;
v17.sync = spawnIfNodeVersionSatisfiesSync;
const v18 = module.exports;
v18.isNodeVersionSatisfies = isNodeVersionSatisfies;