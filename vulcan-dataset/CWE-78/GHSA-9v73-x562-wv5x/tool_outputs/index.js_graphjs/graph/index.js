'use strict';
const v34 = require('ramda');
const compose = v34.compose;
const map = v34.map;
const filter = v34.filter;
const v35 = require('./utils');
const commitSplit = v35.commitSplit;
const lineSplit = v35.lineSplit;
const trimText = v35.trimText;
const v66 = ({run, version, command, formatOptions}) => {
    const v65 = function GitStory({path, format, date, tag}) {
        const v36 = { path };
        const git = run(v36);
        const formatters = formatOptions.parse(format);
        const v37 = map(reduceToCommit);
        const v40 = item => {
            const v38 = !item;
            const v39 = !v38;
            return v39;
        };
        const v41 = filter(v40);
        const logToCommits = compose(v37, v41, commitSplit, git);
        let currentVersionTag;
        const v42 = command.latestTag();
        const v43 = git(v42);
        const v44 = v43.replace('\n', '');
        if (date) {
            currentVersionTag = 'v1.0.0';
        } else {
            currentVersionTag = v44;
        }
        const v45 = command.log(formatters, currentVersionTag, date);
        const commits = logToCommits(v45);
        const reduceToCommit = function (part) {
            const parts = lineSplit(part);
            const v58 = (memo, current, index) => {
                const v46 = current[0];
                const v47 = v46 === '\n';
                const v48 = current.substr(1);
                if (v47) {
                    current = v48;
                } else {
                    current = current;
                }
                const v49 = formatOptions.table;
                const v50 = formatters[index];
                const v51 = v49[v50];
                const v52 = v51 === 'body';
                if (v52) {
                    current = trimText(current);
                }
                const v53 = formatOptions.table;
                const v54 = formatters[index];
                const v55 = v53[v54];
                const v56 = { [v55]: current };
                const v57 = Object.assign(memo, v56);
                return v57;
            };
            const v59 = {};
            const v60 = parts.reduce(v58, v59);
            return v60;
        };
        const v61 = {
            commits,
            currentVersion: currentVersionTag
        };
        const v62 = version(v61);
        const v63 = v62.version;
        const v64 = {};
        v64.commits = commits;
        v64.version = v63;
        return v64;
    };
    return v65;
};
module.exports = v66;