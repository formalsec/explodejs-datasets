const v35 = require('child_process');
const exec = v35.exec;
const fs = require('fs');
const v36 = require('debug');
const debug = v36('meta-git-clone');
const getMetaFile = require('get-meta-file');
const path = require('path');
const program = require('commander');
const util = require('util');
const v37 = process.argv;
const v38 = v37[2];
const v39 = !v38;
const v40 = process.argv;
const v41 = v40[2];
const v42 = v41 === '--help';
const v43 = v39 || v42;
if (v43) {
    const v44 = `\n  usage:\n\n    meta git clone <metaRepoUrl>\n`;
    const v45 = console.log(v44);
    return v45;
}
let repoUrl;
const v46 = process.argv;
const v47 = v46[2];
const v48 = v47 === 'blank';
const v49 = process.argv;
const v50 = v49[3];
const v51 = process.argv;
const v52 = v51[2];
if (v48) {
    repoUrl = v50;
} else {
    repoUrl = v52;
}
const v53 = path.basename(repoUrl);
const dirname = v53.replace('.git', '');
const v54 = `meta git cloning into \'${ repoUrl }\' at ${ dirname }`;
const v55 = console.log(v54);
v55;
const v56 = `git clone ${ repoUrl } ${ dirname }`;
const v67 = (err, result) => {
    if (err) {
        throw err;
    }
    const newDir = path.resolve(dirname);
    const v57 = `chdir to ${ newDir }`;
    const v58 = debug(v57);
    v58;
    const v59 = process.chdir(newDir);
    v59;
    const meta = getMetaFile();
    const projects = meta.projects;
    const folders = Object.keys(projects);
    var folder = null;
    const child = function (err) {
        if (err) {
            throw err;
        }
        const v60 = folders.length;
        const v61 = !v60;
        if (v61) {
            return 0;
        }
        folder = folders.pop();
        const gitUrl = projects[folder];
        const v62 = `git clone ${ gitUrl } ${ folder }`;
        const v64 = err => {
            if (err) {
                throw err;
            }
            const v63 = child();
            v63;
        };
        const v65 = exec(v62, v64);
        v65;
    };
    const v66 = child();
    v66;
};
const v68 = exec(v56, v67);
v68;