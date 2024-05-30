const Promise = require('bluebird');
const exec = require('child_process').exec;

module.exports = {
	install: function(packages, opts){
		if(packages.length == 0 || !packages || !packages.length){return Promise.reject("No packages found");}
		if(typeof packages == "string") packages = [packages];
		if(!opts) opts = {};
		var cmdString = "npm install " + packages.join(" ") + " "
		+ (opts.global ? " -g":"")
		+ (opts.save   ? " --save":" --no-save")
		+ (opts.saveDev? " --save-dev":"")
		+ (opts.legacyBundling? " --legacy-bundling":"")
		+ (opts.noOptional? " --no-optional":"")
		+ (opts.ignoreScripts? " --ignore-scripts":"");

		return new Promise(function(resolve, reject){
			var cmd = exec(cmdString, {cwd: opts.cwd?opts.cwd:"/", maxBuffer: opts.maxBuffer?opts.maxBuffer:200 * 1024},(error, stdout, stderr) => {
				if (error) {
					reject(error);
				} else {
					resolve(true);
				}
			});

			if(opts.output) {
				var consoleOutput = function(msg) {
					console.log('npm: ' + msg);
				};

				cmd.stdout.on('data', consoleOutput);
				cmd.stderr.on('data', consoleOutput);
			}
		});
	},

	uninstall: function(packages, opts){
		if(packages.length == 0 || !packages || !packages.length){return Promise.reject(new Error("No packages found"));}
		if(typeof packages == "string") packages = [packages];
		if(!opts) opts = {};
		var cmdString = "npm uninstall " + packages.join(" ") + " "
		+ (opts.global ? " -g":"")
		+ (opts.save   ? " --save":" --no-save")
		+ (opts.saveDev? " --saveDev":"");

		return new Promise(function(resolve, reject){
			var cmd = exec(cmdString, {cwd: opts.cwd?opts.cwd:"/"},(error, stdout, stderr) => {
				if (error) {
					reject(error);
				} else {
					resolve(true);
				}
			});

			if(opts.output) {
				var consoleOutput = function(msg) {
					console.log('npm: ' + msg);
				};

				cmd.stdout.on('data', consoleOutput);
				cmd.stderr.on('data', consoleOutput);
			}
		});
	},

	list:function(path){
		var global = false;
		if(!path) global = true;
		var cmdString = "npm ls --depth=0 " + (global?"-g ":" ");
		return new Promise(function(resolve, reject){
			exec(cmdString, {cwd: path?path:"/"},(error, stdout, stderr) => {
				if(stderr !== ""){
					if (stderr.indexOf("missing")== -1 && stderr.indexOf("required") == -1) {
						return reject(error);
					}
				}
				var packages = [];
				packages = stdout.split('\n');
				packages = packages.filter(function(item){
					if(item.match(/^├──.+/g) != null){
						return true
					}
					if(item.match(/^└──.+/g) != null){
						return true
					}
					return undefined;
				});
				packages = packages.map(function(item){
					if(item.match(/^├──.+/g) != null){
						return item.replace(/^├──\s/g, "");
					}
					if(item.match(/^└──.+/g) != null){
						return item.replace(/^└──\s/g, "");
					}
				})
				resolve(packages);

			});
		});
	}
}

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: command-injection
let packages =
  { length: esl_symbolic.any("length")
  , 0: esl_symbolic.any("0") };
let opts =
  { global: esl_symbolic.any("global")
  , save: esl_symbolic.any("save")
  , saveDev: esl_symbolic.any("saveDev")
  , cwd: esl_symbolic.any("cwd")
  , output: esl_symbolic.any("output") };
module.exports.uninstall(packages, opts);
