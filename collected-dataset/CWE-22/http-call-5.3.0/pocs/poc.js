'use strict'

const pkg = require('../src');
const httpInstance = new pkg.HTTP('localhost', {});

process.env.HTTPS_PROXY = true;
process.env.NO_PROXY = false;
process.env.SSL_CERT_DIR = '/tmp';
process.env.SSL_CERT_FILE = '/etc/passwd';
httpInstance.url = 'localhost';

process.stdout.write(httpInstance.options.agent.options.ca[0]);