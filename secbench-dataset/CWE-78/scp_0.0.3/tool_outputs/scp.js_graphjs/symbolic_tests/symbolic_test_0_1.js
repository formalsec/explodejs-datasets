/*
 * node-scp
 * <cam@onswipe.com>
 */
var exec = require('child_process').exec;

var scp = module.exports = {};

/*
 * Transfer a file to a remote host
 */
scp.send = function (options, cb) {
  var command = [
    'scp',
    '-r',
    '-P',
    (options.port == undefined ? '22' : options.port),
    options.file,
    (options.user == undefined ? '' : options.user+'@') + options.host + ':' + options.path,
  ];
  exec(command.join(' '), function (err, stdout, stderr) {
    if (cb) {
      cb(err, stdout, stderr);
    } else {
      if (err) throw new Error(err);
    }
  });
}

/*
 * Grab a file from a remote host
 */
scp.get = function (options, cb) {
  var command = [
    'scp',
    '-r',
    '-P',
    (options.port == undefined ? '22' : options.port),
    (options.user == undefined ? '' : options.user+'@') + options.host + ':' + options.file,
    options.path
  ];
  exec(command.join(' '), function (err, stdout, stderr) {
    if (cb) {
      cb(err, stdout, stderr);
    } else {
      if (err) throw new Error(err);
    }
  });
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let options =
  { port: esl_symbolic.string("port")
  , file: [ esl_symbolic.string("file0") ]
  , user: [ esl_symbolic.string("user0") ]
  , host: [ esl_symbolic.string("host0") ]
  , path: [ esl_symbolic.string("path0") ] };
let cb = esl_symbolic.function("cb");
module.exports.send(options, cb);
