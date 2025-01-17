const GitHubApi = require('github');
const Menu = require('terminal-menu');
const {
  execSync
} = require('child_process');
const parse = require('parse-github-repo-url');

class Pullit {
  constructor() {
    this.init();
    this.github = new GitHubApi({});
  }

  init() {
    const url = execSync(`git config --get remote.origin.url`, {
      encoding: 'utf8'
    }).trim();

    return this.parsedGithubUrl(url);
  }

  parsedGithubUrl(url) {
    const parsedUrl = parse(url);

    (this.owner = parsedUrl[0]), (this.repo = parsedUrl[1]);
  }

  fetch(id) {
    return this.github.pullRequests
      .get({
        owner: this.owner,
        repo: this.repo,
        number: id
      })
      .then(res => {
        const branch = res.data.head.ref;
        execSync(
          `git fetch origin pull/${id}/head:${branch} && git checkout ${branch}`
        );
      })
      .catch(err => {
        console.log('Error: Could not find the specified pull request.');
      });
  }

  fetchRequests() {
    return this.github.pullRequests.getAll({
      owner: this.owner,
      repo: this.repo
    });
  }

  display() {
    this.fetchRequests().then(results => {
      const menu = Menu({
        width: 100,
        x: 4,
        y: 2
      });
      menu.reset();
      menu.write('Currently open pull requests:\n');
      menu.write('-------------------------\n');

      results.data.forEach(element => {
        menu.add(`${element.number} - ${element.title}`);
      });

      menu.add(`Exit`);

      menu.on('select', label => {
        menu.close();
        this.fetch(label.split(' ')[0]);
      });
      process.stdin.pipe(menu.createStream()).pipe(process.stdout);

      process.stdin.setRawMode(true);
      menu.on('close', () => {
        process.stdin.setRawMode(false);
        process.stdin.end();
      });
    }).catch(err => {
      console.log('Error: could not display pull requests. Please make sure this is a valid repository.')
    });
  }
}

module.exports = Pullit;
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
var ret_new_module_exports = new module.exports();
let id = esl_symbolic.string("id");
ret_new_module_exports.fetch(id);
