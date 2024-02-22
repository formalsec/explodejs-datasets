'use strict'

const { compose, map, filter } = require('ramda')
const { commitSplit, lineSplit, trimText } = require('./utils')

module.exports = ({ run, version, command, formatOptions }) => {
  return function GitStory ({ path, format, date, tag }) {
    const git = run({ path })
    const formatters = formatOptions.parse(format)

    const logToCommits = compose(map(reduceToCommit), filter(item => !!item), commitSplit, git)
    const currentVersionTag = (date) ? 'v1.0.0' : git(command.latestTag()).replace('\n', '')
    const commits = logToCommits(command.log(formatters, currentVersionTag, date))

    function reduceToCommit (part) {
      const parts = lineSplit(part)

      return parts.reduce((memo, current, index) => {
        // Trim extraneous linebreaks
        current = (current[0] === '\n') ? current.substr(1) : current

        // Sanitize the body text
        if (formatOptions.table[formatters[index]] === 'body') {
          current = trimText(current)
        }

        // formatters.length >= index
        return Object.assign(memo, {
          [formatOptions.table[formatters[index]]]: current
        })
      }, {})
    }

    return {
      commits,
      version: version({ commits, currentVersion: currentVersionTag }).version
    }
  }
}
