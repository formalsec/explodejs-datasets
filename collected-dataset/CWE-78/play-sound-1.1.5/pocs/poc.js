'use strict'

const pkg = require('../src');

const play = pkg({ player: 'touch' });
play.play('exploited.txt', {}, function(){});
