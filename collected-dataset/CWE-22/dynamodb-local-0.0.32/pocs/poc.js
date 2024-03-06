'use strict'

const path = require('node:path');
const os = require('os');
const pkg = require('../src');

const downloadTarget = path.join(os.tmpdir(), 'exploit-dl-dir');
const conf = {
    installPath: downloadTarget,
    downloadUrl: 'https://dlcdn.apache.org/flink/flink-1.18.0/flink-1.18.0-bin-scala_2.12.tgz'
};

pkg.configureInstaller(conf);


const port = 10000;
const dbPath = '';
const additionalArgs = [];
const verbose = false;
const detached = false;
const javaOpts = '';

pkg.launch(port, dbPath, additionalArgs, verbose, detached, javaOpts);