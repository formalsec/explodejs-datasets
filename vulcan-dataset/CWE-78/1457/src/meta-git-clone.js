// We don't have summary for meta-exec
const exec = require('child_process').exec;
const fs = require('fs');
const debug = require('debug')('meta-git-clone');
const getMetaFile = require('get-meta-file');
const path = require('path');
const program = require('commander');
const util = require('util');

if (!process.argv[2] || process.argv[2] === '--help')
  return console.log(`\n  usage:\n\n    meta git clone <metaRepoUrl>\n`);

const repoUrl = process.argv[2] === 'blank' ? process.argv[3] : process.argv[2];

const dirname = path.basename(repoUrl).replace('.git', '');

console.log(`meta git cloning into \'${repoUrl}\' at ${dirname}`);

exec(`git clone ${repoUrl} ${dirname}`, (err, result) => {
  if (err) throw err;

  const newDir = path.resolve(dirname);

  debug(`chdir to ${newDir}`);

  process.chdir(newDir);

  const meta = getMetaFile();

  const projects = meta.projects;
  const folders = Object.keys(projects);

  var folder = null;

  function child(err) {
    if (err) throw err;

    if (!folders.length) return 0;

    folder = folders.pop();

    const gitUrl = projects[folder];

    exec(`git clone ${gitUrl} ${folder}`,
      err => {
        if (err) throw err;

        child();
      }
    );
  }

  child();
});
