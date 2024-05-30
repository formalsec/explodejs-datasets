const GitHubApi = require('github');
const Menu = require('terminal-menu');
const v69 = require('child_process');
const execSync = v69.execSync;
const parse = require('parse-github-repo-url');
const Pullit = function Pullit() {
    const v70 = this.init();
    v70;
    const v71 = {};
    this.github = new GitHubApi(v71);
};
const init = function init() {
    const v72 = `git config --get remote.origin.url`;
    const v73 = { encoding: 'utf8' };
    const v74 = execSync(v72, v73);
    const url = v74.trim();
    const v75 = this.parsedGithubUrl(url);
    return v75;
};
Pullit.init = init;
const parsedGithubUrl = function parsedGithubUrl(url) {
    const parsedUrl = parse(url);
    const v76 = parsedUrl[0];
    const v77 = parsedUrl[1];
    this.owner = v76, this.repo = v77;
};
Pullit.parsedGithubUrl = parsedGithubUrl;
const fetch = function fetch(id) {
    const v78 = this.github;
    const v79 = v78.pullRequests;
    const v80 = this.owner;
    const v81 = this.repo;
    const v82 = {
        owner: v80,
        repo: v81,
        number: id
    };
    const v83 = v79.get(v82);
    const v88 = res => {
        const v84 = res.data;
        const v85 = v84.head;
        const branch = v85.ref;
        const v86 = `git fetch origin pull/${ id }/head:${ branch } && git checkout ${ branch }`;
        const v87 = execSync(v86);
        v87;
    };
    const v89 = v83.then(v88);
    const v91 = err => {
        const v90 = console.log('Error: Could not find the specified pull request.');
        v90;
    };
    const v92 = v89.catch(v91);
    return v92;
};
Pullit.fetch = fetch;
const fetchRequests = function fetchRequests() {
    const v93 = this.github;
    const v94 = v93.pullRequests;
    const v95 = this.owner;
    const v96 = this.repo;
    const v97 = {
        owner: v95,
        repo: v96
    };
    const v98 = v94.getAll(v97);
    return v98;
};
Pullit.fetchRequests = fetchRequests;
const display = function display() {
    const v99 = this.fetchRequests();
    const v132 = results => {
        const v100 = {
            width: 100,
            x: 4,
            y: 2
        };
        const menu = Menu(v100);
        const v101 = menu.reset();
        v101;
        const v102 = menu.write('Currently open pull requests:\n');
        v102;
        const v103 = menu.write('-------------------------\n');
        v103;
        const v104 = results.data;
        const v109 = element => {
            const v105 = element.number;
            const v106 = element.title;
            const v107 = `${ v105 } - ${ v106 }`;
            const v108 = menu.add(v107);
            v108;
        };
        const v110 = v104.forEach(v109);
        v110;
        const v111 = `Exit`;
        const v112 = menu.add(v111);
        v112;
        const v117 = label => {
            const v113 = menu.close();
            v113;
            const v114 = label.split(' ');
            const v115 = v114[0];
            const v116 = this.fetch(v115);
            v116;
        };
        const v118 = menu.on('select', v117);
        v118;
        const v119 = process.stdin;
        const v120 = menu.createStream();
        const v121 = v119.pipe(v120);
        const v122 = process.stdout;
        const v123 = v121.pipe(v122);
        v123;
        const v124 = process.stdin;
        const v125 = v124.setRawMode(true);
        v125;
        const v130 = () => {
            const v126 = process.stdin;
            const v127 = v126.setRawMode(false);
            v127;
            const v128 = process.stdin;
            const v129 = v128.end();
            v129;
        };
        const v131 = menu.on('close', v130);
        v131;
    };
    const v133 = v99.then(v132);
    const v135 = err => {
        const v134 = console.log('Error: could not display pull requests. Please make sure this is a valid repository.');
        v134;
    };
    const v136 = v133.catch(v135);
    v136;
};
Pullit.display = display;
module.exports = Pullit;