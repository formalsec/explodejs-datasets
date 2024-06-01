var semver = require('semver');
const v90 = function (tree) {
    var resolved = [];
    var deps = {};
    var dependencies = [];
    var locals = [];
    var duplicates = {};
    const v46 = traverse(tree);
    v46;
    const v47 = Object.keys(deps);
    const v61 = function (name) {
        var branches = deps[name];
        var releases = Object.keys(branches);
        const v48 = releases.length;
        const v49 = v48 > 1;
        if (v49) {
            duplicates[name] = branches;
        }
        const v53 = function (release) {
            const v50 = semver.valid(release);
            if (v50) {
                return true;
            }
            const v51 = branches[release];
            const v52 = dependencies.push(v51);
            v52;
            return false;
        };
        const v54 = releases.filter(v53);
        const v55 = semver.compare;
        const v56 = v54.sort(v55);
        const v59 = function (release) {
            const v57 = branches[release];
            const v58 = dependencies.push(v57);
            v58;
        };
        const v60 = v56.forEach(v59);
        v60;
    };
    const v62 = v47.forEach(v61);
    v62;
    var out = dependencies.concat(locals);
    out.duplicates = duplicates;
    return out;
    const traverse = function (branch) {
        const v63 = resolved.indexOf(branch);
        const v64 = ~v63;
        if (v64) {
            return;
        }
        const v65 = resolved.push(branch);
        v65;
        const v66 = traverseDeps(branch);
        v66;
        const v67 = traverseLocals(branch);
        v67;
        const v68 = branch.type;
        const v69 = v68 === 'local';
        if (v69) {
            const v70 = locals.push(branch);
            return v70;
        }
        const v71 = branch.name;
        const v72 = branch.name;
        const v73 = deps[v72];
        const v74 = {};
        deps[v71] = v73 || v74;
        var releases = deps[v71];
        const v75 = branch.ref;
        releases[v75] = branch;
    };
    const traverseDeps = function (branch) {
        var deps = branch.dependencies;
        const v76 = !deps;
        if (v76) {
            return;
        }
        var names = Object.keys(deps);
        var i = 0;
        const v77 = names.length;
        let v78 = i < v77;
        while (v78) {
            const v80 = names[i];
            const v81 = deps[v80];
            const v82 = traverse(v81);
            v82;
            const v79 = i++;
            v78 = i < v77;
        }
    };
    const traverseLocals = function (branch) {
        var locals = branch.locals;
        const v83 = !locals;
        if (v83) {
            return;
        }
        var names = Object.keys(locals);
        var i = 0;
        const v84 = names.length;
        let v85 = i < v84;
        while (v85) {
            const v87 = names[i];
            const v88 = locals[v87];
            const v89 = traverse(v88);
            v89;
            const v86 = i++;
            v85 = i < v84;
        }
    };
};
module.exports = v90;