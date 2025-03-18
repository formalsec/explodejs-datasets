var filters = new Map();
var limiters = new Map();

function filter(name, handler) {
  if (typeof name !== 'string') {
    throw new TypeError('First argument must be a string.');
  }
  if (typeof handler !== 'function') {
    throw new TypeError('Second argument must be a function.');
  }
  if (filters.has(name)) {
    throw new Error(("A filter named " + name + " is already registered."));
  }
  filters.set(name, handler);
}

function limiter(name, handler) {
  if (typeof name !== 'string') {
    throw new TypeError('First argument must be a string.');
  }
  if (typeof handler !== 'function') {
    throw new TypeError('Second argument must be a function.');
  }
  if (limiters.has(name)) {
    throw new Error(("A limiter named " + name + " is already registered."));
  }
  limiters.set(name, handler);
}

function compileRawExpression(src) {
  return new Function('context', 'tempVars', // eslint-disable-line
  ("const sandbox = $nxCompileToSandbox(context, tempVars)\n    try { with (sandbox) { return " + src + " } } catch (err) {\n      if (!(err instanceof TypeError)) throw err\n    }\n    $nxClearSandbox()"));
}

function compileRawCode(src) {
  return new Function('context', 'tempVars', // eslint-disable-line
  ("const sandbox = $nxCompileToSandbox(context, tempVars)\n    with (sandbox) { " + src + " }\n    $nxClearSandbox()"));
}

var filterRegex = /(?:[^\|]|\|\|)+/g;
var limiterRegex = /(?:[^&]|&&)+/g;
var argsRegex = /\S+/g;

function parseExpression(src) {
  var tokens = src.match(filterRegex);
  if (tokens.length === 1) {
    return compileRawExpression(tokens[0]);
  }

  var expression = {
    exec: compileRawExpression(tokens[0]),
    filters: []
  };
  for (var i = 1; i < tokens.length; i++) {
    var filterTokens = tokens[i].match(argsRegex);
    var filterName = filterTokens.shift();
    var effect = filters.get(filterName);
    if (!effect) {
      throw new Error(("There is no filter named: " + filterName + "."));
    }
    expression.filters.push({ effect: effect, argExpressions: filterTokens.map(compileRawExpression) });
  }
  return expression;
}

function parseCode(src) {
  var tokens = src.match(limiterRegex);
  if (tokens.length === 1) {
    return compileRawCode(tokens[0]);
  }

  var code = {
    exec: compileRawCode(tokens[0]),
    limiters: []
  };
  for (var i = 1; i < tokens.length; i++) {
    var limiterTokens = tokens[i].match(argsRegex);
    var limiterName = limiterTokens.shift();
    var effect = limiters.get(limiterName);
    if (!effect) {
      throw new Error(("There is no limiter named: " + limiterName + "."));
    }
    code.limiters.push({ effect: effect, argExpressions: limiterTokens.map(compileRawExpression) });
  }
  return code;
}

var expressionCache = new Map();
var codeCache = new Map();

function compileExpression(src) {
  if (typeof src !== 'string') {
    throw new TypeError('First argument must be a string.');
  }
  var expression = expressionCache.get(src);
  if (!expression) {
    expression = parseExpression(src);
    expressionCache.set(src, expression);
  }

  if (typeof expression === 'function') {
    return expression;
  }

  return function evaluateExpression(context, tempVars) {
    var value = expression.exec(context, tempVars);
    for (var i = 0, list = expression.filters; i < list.length; i += 1) {
      var filter = list[i];

      var args = filter.argExpressions.map(evaluateArgExpression, context);
      value = filter.effect.apply(filter, [ value ].concat( args ));
    }
    return value;
  };
}

function compileCode(src) {
  if (typeof src !== 'string') {
    throw new TypeError('First argument must be a string.');
  }
  var code = codeCache.get(src);
  if (!code) {
    code = parseCode(src);
    codeCache.set(src, code);
  }

  if (typeof code === 'function') {
    return code;
  }

  var context = {};
  return function evaluateCode(state, tempVars) {
    var i = 0;
    function next() {
      Object.assign(context, tempVars);
      if (i < code.limiters.length) {
        var limiter = code.limiters[i++];
        var args = limiter.argExpressions.map(evaluateArgExpression, state);
        limiter.effect.apply(limiter, [ next, context ].concat( args ));
      } else {
        code.exec(state, tempVars);
      }
    }
    next();
  };
}

function evaluateArgExpression(argExpression) {
  return argExpression(this);
}

var hasHandler = { has: has };
var allHandlers = { has: has, get: get };
var globals = new Set();
var temp;

var globalObj;
if (typeof window !== 'undefined') { globalObj = window; } // eslint-disable-line
else if (typeof global !== 'undefined') { globalObj = global; } // eslint-disable-line
  else if (typeof self !== 'undefined') { globalObj = self; } // eslint-disable-line
globalObj.$nxCompileToSandbox = toSandbox;
globalObj.$nxClearSandbox = clearSandbox;

function expose() {
  var globalNames = [], len = arguments.length;
  while ( len-- ) globalNames[ len ] = arguments[ len ];

  for (var i = 0, list = globalNames; i < list.length; i += 1) {
    var globalName = list[i];

    globals.add(globalName);
  }
}

function hide() {
  var globalNames = [], len = arguments.length;
  while ( len-- ) globalNames[ len ] = arguments[ len ];

  for (var i = 0, list = globalNames; i < list.length; i += 1) {
    var globalName = list[i];

    globals.delete(globalName);
  }
}

function hideAll() {
  globals.clear();
}

function has(target, key) {
  return globals.has(key) ? key in target : true;
}

function get(target, key) {
  return key in temp ? temp[key] : target[key];
}

function toSandbox(obj, tempVars) {
  if (tempVars) {
    temp = tempVars;
    return new Proxy(obj, allHandlers);
  }
  return new Proxy(obj, hasHandler);
}

function clearSandbox() {
  temp = undefined;
}

export { compileExpression, compileCode, compileRawExpression, compileRawCode, expose, hide, hideAll, filters, limiters, filter, limiter };
