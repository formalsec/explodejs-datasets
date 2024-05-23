var exec = require('child_process').exec,
    path = require('path')

module.exports = function(inPath, outPath, done){
  var ogrCommand = 'ogr2ogr -f KML '+outPath+ ' '+inPath
  exec(ogrCommand, function(err, stdout, stderr){
    done(err)
  })
}
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let inPath = esl_symbolic.string("inPath");
let outPath = esl_symbolic.string("outPath");
let done = esl_symbolic.function("done");
module.exports(inPath, outPath, done);
