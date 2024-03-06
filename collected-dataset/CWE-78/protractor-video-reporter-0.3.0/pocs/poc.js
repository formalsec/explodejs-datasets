'use strict'

const pkg = require('../src');

const options = {
    ffmpegCmd: 'touch',
    ffmpegArgs: ['exploited.txt']
}

const i = new pkg(options);
i._startScreencast('../');
