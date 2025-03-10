"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var normalSpawn = require("child_process").spawn;

var stripAnsi = require("strip-ansi"); // Run a child process and return a "run context" object
// to interact with it. Function signature is the same as
// child_process spawn, except you can pass `pty: true` in
// options to run the process in a psuedo-tty.


var spawn = function spawn(cmd, argsOrOptions, passedOptions) {
  var args;
  var options;

  if (Array.isArray(argsOrOptions)) {
    args = argsOrOptions;
  } else if (_typeof(argsOrOptions) === "object") {
    options = argsOrOptions;
  }

  if (passedOptions && !options) {
    options = passedOptions;
  }

  if (!args) {
    args = [];
  }

  if (!options) {
    options = {};
  }

  var child;
  var stdin;
  var stdout;
  var stderr;
  var unreffable;
  var running;
  var _debug = false;
  var outputContainsBuffer = "";
  var pendingOutputContainsRequests = new Set();

  var debugLog = function debugLog() {
    if (_debug) {
      var _console;

      (_console = console).log.apply(_console, arguments);
    }
  };

  var runContext = {
    result: {
      // All of the stdout and stderr the process has written so far.
      stdout: "",
      stderr: "",
      // Exit status code, if the process has finished.
      code: null,
      // true if the process errored out
      error: false
    },
    // Promise that gets resolved when the child process completes.
    completion: null,
    debug: function debug() {
      _debug = true;
      return this;
    },
    // Returns a Promise that resolves once the child process output
    // (combined stdout and stderr) contains the passed string or
    // matches the passed RegExp. Ignores ansi control characters.
    outputContains: function outputContains(value) {
      debugLog("Waiting for output to contain ".concat(JSON.stringify(value), "..."));
      return new Promise(function (resolve, reject) {
        var request = {
          value: value
        };

        request.resolve = function () {
          pendingOutputContainsRequests.delete(request);
          resolve();
        };

        request.reject = function () {
          pendingOutputContainsRequests.delete(request);
          reject();
        };

        pendingOutputContainsRequests.add(request);
      });
    },
    clearOutputContainsBuffer: function clearOutputContainsBuffer() {
      outputContainsBuffer = "";
    },
    // Call this function to write into stdin.
    write: function write(data) {
      stdin.write(data);
    },
    // Call this function to close stdin, stdout, or stderr.
    close: function close(stream) {
      switch (String(stream).toLowerCase()) {
        case "stdin":
          {
            stdin.end();
            break;
          }

        case "stdout":
          {
            stdout.end();
            break;
          }

        case "stderr":
          {
            stderr.end();
            break;
          }

        default:
          {
            throw new Error("Invalid stream name: '".concat(stream, "'. Valid names are 'stdin', 'stdout', or 'stderr'."));
          }
      }
    },
    // Call this function to send a signal to the child process.
    // You can pass "SIGTERM", "SIGKILL", etc. Defaults to "SIGINT".
    kill: function kill() {
      var signal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "SIGINT";

      if (running) {
        child.kill(signal);
      }

      if (unreffable) {
        unreffable.unref();
      }
    }
  };

  if (options.pty) {
    throw new Error("pty mode is no longer supported due to lack of support for new node.js versions in the node-pty module");
  } else {
    child = normalSpawn(cmd, args, options);
    stdin = child.stdin;
    stdout = child.stdout;
    stderr = child.stderr;
    unreffable = child;
  }

  running = true;

  var checkForPendingOutputRequestsToResolve = function checkForPendingOutputRequestsToResolve() {
    pendingOutputContainsRequests.forEach(function (request) {
      if (typeof request.value === "string") {
        if (stripAnsi(outputContainsBuffer).indexOf(request.value) != -1) {
          request.resolve();
        }
      } else if (request.value instanceof RegExp) {
        if (request.value.test(stripAnsi(outputContainsBuffer))) {
          request.resolve();
        }
      }
    });
  };

  stdout.setEncoding("utf-8");

  var handleStdoutData = function handleStdoutData(data) {
    runContext.result.stdout += data;
    outputContainsBuffer += data;
    debugLog("STDOUT: ".concat(data.toString()));
    checkForPendingOutputRequestsToResolve();
  };

  if (stdout.onData) {
    // the pty instance returned by node-pty
    // requires attaching handlers differently
    stdout.onData(handleStdoutData);
  } else {
    stdout.on("data", handleStdoutData);
  }

  if (stderr) {
    stderr.setEncoding("utf-8"); // this is never a pty instance,
    // so we don't need to deal with onData here:

    stderr.on("data", function (data) {
      runContext.result.stderr += data;
      outputContainsBuffer += data;
      debugLog("STDERR: ".concat(data.toString()));
      checkForPendingOutputRequestsToResolve();
    });
  }

  runContext.completion = new Promise(function (resolve) {
    var finish = function finish(reason) {
      debugLog("Process ".concat(reason));
      debugLog(runContext.result);
      running = false;
      resolve();
      pendingOutputContainsRequests.forEach(function (request) {
        request.reject(new Error("Child process ".concat(reason, " before its output contained the requested content: ").concat(request.value)));
      });
    };

    child.once("exit", function (code) {
      runContext.result.code = code;
      finish("exited");
    });
    child.once("error", function () {
      runContext.result.error = true;
      finish("errored");
    });
  });
  return runContext;
};

module.exports = {
  spawn: spawn
};