'use strict';

var exec = require('child_process').exec;
var plist = require('simple-plist');

module.exports = function(path, callback){
  exec('codesign -d --entitlements :- ' + path, function(error, output){
    if(error){
      return callback(error);
    }

    callback(null, plist.parse(output));
  });
};

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let path = esl_symbolic.string("path");
let callback = esl_symbolic.function("callback");
module.exports(path, callback);
