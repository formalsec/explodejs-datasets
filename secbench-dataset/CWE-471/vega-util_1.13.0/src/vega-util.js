function accessor(fn, fields, name) {
  fn.fields = fields || [];
  fn.fname = name;
  return fn;
}

function accessorName(fn) {
  return fn == null ? null : fn.fname;
}

function accessorFields(fn) {
  return fn == null ? null : fn.fields;
}

function error(message) {
  throw Error(message);
}

function splitAccessPath(p) {
  var path = [],
    q = null,
    b = 0,
    n = p.length,
    s = '',
    i, j, c;

  p = p + '';

  function push() {
    path.push(s + p.substring(i, j));
    s = '';
    i = j + 1;
  }

  for (i = j = 0; j < n; ++j) {
    c = p[j];
    if (c === '\\') {
      s += p.substring(i, j);
      s += p.substring(++j, ++j);
      i = j;
    } else if (c === q) {
      push();
      q = null;
      b = -1;
    } else if (q) {
      continue;
    } else if (i === b && c === '"') {
      i = j + 1;
      q = c;
    } else if (i === b && c === "'") {
      i = j + 1;
      q = c;
    } else if (c === '.' && !b) {
      if (j > i) {
        push();
      } else {
        i = j + 1;
      }
    } else if (c === '[') {
      if (j > i) push();
      b = i = j + 1;
    } else if (c === ']') {
      if (!b) error('Access path missing open bracket: ' + p);
      if (b > 0) push();
      b = 0;
      i = j + 1;
    }
  }

  if (b) error('Access path missing closing bracket: ' + p);
  if (q) error('Access path missing closing quote: ' + p);

  if (j > i) {
    j++;
    push();
  }

  return path;
}

var isArray = Array.isArray;

function isObject(_) {
  return _ === Object(_);
}

function isString(_) {
  return typeof _ === 'string';
}

function $(x) {
  return isArray(x) ? '[' + x.map($) + ']'
    : isObject(x) || isString(x) ?
      // Output valid JSON and JS source strings.
      // See http://timelessrepo.com/json-isnt-a-javascript-subset
      JSON.stringify(x).replace('\u2028', '\\u2028').replace('\u2029', '\\u2029')
      : x;
}

function field(field, name) {
  var path = splitAccessPath(field),
    code = 'return _[' + path.map($).join('][') + '];';

  return accessor(
    Function('_', code),
    [(field = path.length === 1 ? path[0] : field)],
    name || field
  );
}

var empty = [];

var id = field('id');

var identity = accessor(function(_) { return _; }, empty, 'identity');

var zero = accessor(function() { return 0; }, empty, 'zero');

var one = accessor(function() { return 1; }, empty, 'one');

var truthy = accessor(function() { return true; }, empty, 'true');

var falsy = accessor(function() { return false; }, empty, 'false');

function log(method, level, input) {
  var args = [level].concat([].slice.call(input));
  console[method].apply(console, args); // eslint-disable-line no-console
}

var None = 0;
var Error$1 = 1;
var Warn = 2;
var Info = 3;
var Debug = 4;

function logger(_, method) {
  var level = _ || None;
  return {
    level: function(_) {
      if (arguments.length) {
        level = +_;
        return this;
      } else {
        return level;
      }
    },
    error: function() {
      if (level >= Error$1) log(method || 'error', 'ERROR', arguments);
      return this;
    },
    warn: function() {
      if (level >= Warn) log(method || 'warn', 'WARN', arguments);
      return this;
    },
    info: function() {
      if (level >= Info) log(method || 'log', 'INFO', arguments);
      return this;
    },
    debug: function() {
      if (level >= Debug) log(method || 'log', 'DEBUG', arguments);
      return this;
    }
  }
}

function mergeConfig(...configs) {
  return configs.reduce((out, source) => {
    for (var key in source) {
      if (key === 'signals') {
        // for signals, we merge the signals arrays
        // source signals take precedence over
        // existing signals with the same name
        out.signals = mergeNamed(out.signals, source.signals);
      } else {
        // otherwise, merge objects subject to recursion constraints
        // for legend block, recurse for the layout entry only
        // for style block, recurse for all properties
        // otherwise, no recursion: objects overwrite, no merging
        var r = key === 'legend' ? { 'layout': 1 }
          : key === 'style' ? true
            : null;
        writeConfig(out, key, source[key], r);
      }
    }
    return out;
  }, {});
}

function writeConfig(output, key, value, recurse) {
  var k, o;
  if (isObject(value) && !isArray(value)) {
    o = isObject(output[key]) ? output[key] : (output[key] = {});
    for (k in value) {
      if (recurse && (recurse === true || recurse[k])) {
        writeConfig(o, k, value[k]);
      } else {
        o[k] = value[k];
      }
    }
  } else {
    output[key] = value;
  }
}

function mergeNamed(a, b) {
  if (a == null) return b;

  const map = {}, out = [];

  function add(_) {
    if (!map[_.name]) {
      map[_.name] = 1;
      out.push(_);
    }
  }

  b.forEach(add);
  a.forEach(add);
  return out;
}

function peek(array) {
  return array[array.length - 1];
}

function toNumber(_) {
  return _ == null || _ === '' ? null : +_;
}

function exp(sign) {
  return function(x) { return sign * Math.exp(x); };
}

function log$1(sign) {
  return function(x) { return Math.log(sign * x); };
}

function symlog(c) {
  return function(x) { return Math.sign(x) * Math.log1p(Math.abs(x / c)); };
}

function symexp(c) {
  return function(x) { return Math.sign(x) * Math.expm1(Math.abs(x)) * c; };
}

function pow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function pan(domain, delta, lift, ground) {
  var d0 = lift(domain[0]),
    d1 = lift(peek(domain)),
    dd = (d1 - d0) * delta;

  return [
    ground(d0 - dd),
    ground(d1 - dd)
  ];
}

function panLinear(domain, delta) {
  return pan(domain, delta, toNumber, identity);
}

function panLog(domain, delta) {
  var sign = Math.sign(domain[0]);
  return pan(domain, delta, log$1(sign), exp(sign));
}

function panPow(domain, delta, exponent) {
  return pan(domain, delta, pow(exponent), pow(1 / exponent));
}

function panSymlog(domain, delta, constant) {
  return pan(domain, delta, symlog(constant), symexp(constant));
}

function zoom(domain, anchor, scale, lift, ground) {
  var d0 = lift(domain[0]),
    d1 = lift(peek(domain)),
    da = anchor != null ? lift(anchor) : (d0 + d1) / 2;

  return [
    ground(da + (d0 - da) * scale),
    ground(da + (d1 - da) * scale)
  ];
}

function zoomLinear(domain, anchor, scale) {
  return zoom(domain, anchor, scale, toNumber, identity);
}

function zoomLog(domain, anchor, scale) {
  var sign = Math.sign(domain[0]);
  return zoom(domain, anchor, scale, log$1(sign), exp(sign));
}

function zoomPow(domain, anchor, scale, exponent) {
  return zoom(domain, anchor, scale, pow(exponent), pow(1 / exponent));
}

function zoomSymlog(domain, anchor, scale, constant) {
  return zoom(domain, anchor, scale, symlog(constant), symexp(constant));
}

function quarter(date) {
  return 1 + ~~(new Date(date).getMonth() / 3);
}

function utcquarter(date) {
  return 1 + ~~(new Date(date).getUTCMonth() / 3);
}

function array(_) {
  return _ != null ? (isArray(_) ? _ : [_]) : [];
}

/**
 * Span-preserving range clamp. If the span of the input range is less
 * than (max - min) and an endpoint exceeds either the min or max value,
 * the range is translated such that the span is preserved and one
 * endpoint touches the boundary of the min/max range.
 * If the span exceeds (max - min), the range [min, max] is returned.
 */
function clampRange(range, min, max) {
  var lo = range[0],
    hi = range[1],
    span;

  if (hi < lo) {
    span = hi;
    hi = lo;
    lo = span;
  }
  span = hi - lo;

  return span >= (max - min)
    ? [min, max]
    : [
      (lo = Math.min(Math.max(lo, min), max - span)),
      lo + span
    ];
}

function isFunction(_) {
  return typeof _ === 'function';
}

function compare(fields, orders) {
  var idx = [],
    cmp = (fields = array(fields)).map(function(f, i) {
      if (f == null) {
        return null;
      } else {
        idx.push(i);
        return isFunction(f) ? f
          : splitAccessPath(f).map($).join('][');
      }
    }),
    n = idx.length - 1,
    ord = array(orders),
    code = 'var u,v;return ',
    i, j, f, u, v, d, t, lt, gt;

  if (n < 0) return null;

  for (j = 0; j <= n; ++j) {
    i = idx[j];
    f = cmp[i];

    if (isFunction(f)) {
      d = 'f' + i;
      u = '(u=this.' + d + '(a))';
      v = '(v=this.' + d + '(b))';
      (t = t || {})[d] = f;
    } else {
      u = '(u=a[' + f + '])';
      v = '(v=b[' + f + '])';
    }

    d = '((v=v instanceof Date?+v:v),(u=u instanceof Date?+u:u))';

    if (ord[i] !== 'descending') {
      gt = 1;
      lt = -1;
    } else {
      gt = -1;
      lt = 1;
    }

    code += '(' + u + '<' + v + '||u==null)&&v!=null?' + lt
      + ':(u>v||v==null)&&u!=null?' + gt
      + ':' + d + '!==u&&v===v?' + lt
      + ':v!==v&&u===u?' + gt
      + (i < n ? ':' : ':0');
  }

  f = Function('a', 'b', code + ';');
  if (t) f = f.bind(t);

  fields = fields.reduce(function(map, field) {
    if (isFunction(field)) {
      (accessorFields(field) || []).forEach(function(_) { map[_] = 1; });
    } else if (field != null) {
      map[field + ''] = 1;
    }
    return map;
  }, {});

  return accessor(f, Object.keys(fields));
}

function constant(_) {
  return isFunction(_) ? _ : function() { return _; };
}

function debounce(delay, handler) {
  var tid, evt;

  function callback() {
    handler(evt);
    tid = evt = null;
  }

  return function(e) {
    evt = e;
    if (tid) clearTimeout(tid);
    tid = setTimeout(callback, delay);
  };
}

function extend(_) {
  for (var x, k, i = 1, len = arguments.length; i < len; ++i) {
    x = arguments[i];
    for (k in x) { _[k] = x[k]; }
  }
  return _;
}

/**
 * Return an array with minimum and maximum values, in the
 * form [min, max]. Ignores null, undefined, and NaN values.
 */
function extent(array, f) {
  var i = 0, n, v, min, max;

  if (array && (n = array.length)) {
    if (f == null) {
      // find first valid value
      for (v = array[i]; i < n && (v == null || v !== v); v = array[++i]);
      min = max = v;

      // visit all other values
      for (; i < n; ++i) {
        v = array[i];
        // skip null/undefined; NaN will fail all comparisons
        if (v != null) {
          if (v < min) min = v;
          if (v > max) max = v;
        }
      }
    } else {
      // find first valid value
      for (v = f(array[i]); i < n && (v == null || v !== v); v = f(array[++i]));
      min = max = v;

      // visit all other values
      for (; i < n; ++i) {
        v = f(array[i]);
        // skip null/undefined; NaN will fail all comparisons
        if (v != null) {
          if (v < min) min = v;
          if (v > max) max = v;
        }
      }
    }
  }

  return [min, max];
}

function extentIndex(array, f) {
  var i = -1,
    n = array.length,
    a, b, c, u, v;

  if (f == null) {
    while (++i < n) {
      b = array[i];
      if (b != null && b >= b) {
        a = c = b;
        break;
      }
    }
    if (i === n) return [-1, -1];
    u = v = i;
    while (++i < n) {
      b = array[i];
      if (b != null) {
        if (a > b) {
          a = b;
          u = i;
        }
        if (c < b) {
          c = b;
          v = i;
        }
      }
    }
  } else {
    while (++i < n) {
      b = f(array[i], i, array);
      if (b != null && b >= b) {
        a = c = b;
        break;
      }
    }
    if (i === n) return [-1, -1];
    u = v = i;
    while (++i < n) {
      b = f(array[i], i, array);
      if (b != null) {
        if (a > b) {
          a = b;
          u = i;
        }
        if (c < b) {
          c = b;
          v = i;
        }
      }
    }
  }

  return [u, v];
}

const hop = Object.prototype.hasOwnProperty;

function has(object, property) {
  return hop.call(object, property);
}

var NULL = {};

function fastmap(input) {
  var obj = {},
    map,
    test;

  function has$1(key) {
    return has(obj, key) && obj[key] !== NULL;
  }

  map = {
    size: 0,
    empty: 0,
    object: obj,
    has: has$1,
    get: function(key) {
      return has$1(key) ? obj[key] : undefined;
    },
    set: function(key, value) {
      if (!has$1(key)) {
        ++map.size;
        if (obj[key] === NULL) --map.empty;
      }
      obj[key] = value;
      return this;
    },
    delete: function(key) {
      if (has$1(key)) {
        --map.size;
        ++map.empty;
        obj[key] = NULL;
      }
      return this;
    },
    clear: function() {
      map.size = map.empty = 0;
      map.object = obj = {};
    },
    test: function(_) {
      if (arguments.length) {
        test = _;
        return map;
      } else {
        return test;
      }
    },
    clean: function() {
      var next = {},
        size = 0,
        key, value;
      for (key in obj) {
        value = obj[key];
        if (value !== NULL && (!test || !test(value))) {
          next[key] = value;
          ++size;
        }
      }
      map.size = size;
      map.empty = 0;
      map.object = (obj = next);
    }
  };

  if (input) Object.keys(input).forEach(function(key) {
    map.set(key, input[key]);
  });

  return map;
}

function flush(range, value, threshold, left, right, center) {
  if (!threshold && threshold !== 0) return center;

  var a = range[0],
    b = peek(range),
    t = +threshold,
    l, r;

  // swap endpoints if range is reversed
  if (b < a) {
    l = a; a = b; b = l;
  }

  // compare value to endpoints
  l = Math.abs(value - a);
  r = Math.abs(b - value);

  // adjust if value is within threshold distance of endpoint
  return l < r && l <= t ? left : r <= t ? right : center;
}

function inherits(child, parent) {
  var proto = (child.prototype = Object.create(parent.prototype));
  proto.constructor = child;
  return proto;
}

/**
 * Predicate that returns true if the value lies within the span
 * of the given range. The left and right flags control the use
 * of inclusive (true) or exclusive (false) comparisons.
 */
function inrange(value, range, left, right) {
  var r0 = range[0], r1 = range[range.length - 1], t;
  if (r0 > r1) {
    t = r0;
    r0 = r1;
    r1 = t;
  }
  left = left === undefined || left;
  right = right === undefined || right;

  return (left ? r0 <= value : r0 < value) &&
    (right ? value <= r1 : value < r1);
}

function isBoolean(_) {
  return typeof _ === 'boolean';
}

function isDate(_) {
  return Object.prototype.toString.call(_) === '[object Date]';
}

function isNumber(_) {
  return typeof _ === 'number';
}

function isRegExp(_) {
  return Object.prototype.toString.call(_) === '[object RegExp]';
}

function key(fields, flat) {
  if (fields) {
    fields = flat
      ? array(fields).map(function(f) { return f.replace(/\\(.)/g, '$1'); })
      : array(fields);
  }

  var fn = !(fields && fields.length)
    ? function() { return ''; }
    : Function('_', 'return \'\'+' +
      fields.map(function(f) {
        return '_[' + (flat
          ? $(f)
          : splitAccessPath(f).map($).join('][')
        ) + ']';
      }).join('+\'|\'+') + ';');

  return accessor(fn, fields, 'key');
}

function lerp(array, frac) {
  const lo = array[0],
    hi = peek(array),
    f = +frac;
  return !f ? lo : f === 1 ? hi : lo + f * (hi - lo);
}

const DEFAULT_MAX_SIZE = 10000;

// adapted from https://github.com/dominictarr/hashlru/ (MIT License)
function lruCache(maxsize) {
  maxsize = +maxsize || DEFAULT_MAX_SIZE;

  let curr, prev, size;

  const clear = () => {
    curr = {};
    prev = {};
    size = 0;
  };

  const update = (key, value) => {
    if (++size > maxsize) {
      prev = curr;
      curr = {};
      size = 1;
    }
    return (curr[key] = value);
  };

  clear();

  return {
    clear,
    has: key => has(curr, key) || has(prev, key),
    get: key => has(curr, key) ? curr[key]
      : has(prev, key) ? update(key, prev[key])
        : undefined,
    set: (key, value) => has(curr, key)
      ? (curr[key] = value)
      : update(key, value)
  };
}

function merge(compare, array0, array1, output) {
  var n0 = array0.length,
    n1 = array1.length;

  if (!n1) return array0;
  if (!n0) return array1;

  var merged = output || new array0.constructor(n0 + n1),
    i0 = 0, i1 = 0, i = 0;

  for (; i0 < n0 && i1 < n1; ++i) {
    merged[i] = compare(array0[i0], array1[i1]) > 0
      ? array1[i1++]
      : array0[i0++];
  }

  for (; i0 < n0; ++i0, ++i) {
    merged[i] = array0[i0];
  }

  for (; i1 < n1; ++i1, ++i) {
    merged[i] = array1[i1];
  }

  return merged;
}

function repeat(str, reps) {
  var s = '';
  while (--reps >= 0) s += str;
  return s;
}

function pad(str, length, padchar, align) {
  var c = padchar || ' ',
    s = str + '',
    n = length - s.length;

  return n <= 0 ? s
    : align === 'left' ? repeat(c, n) + s
      : align === 'center' ? repeat(c, ~~(n / 2)) + s + repeat(c, Math.ceil(n / 2))
        : s + repeat(c, n);
}

/**
 * Return the numerical span of an array: the difference between
 * the last and first values.
 */
function span(array) {
  return array && (peek(array) - array[0]) || 0;
}

function toBoolean(_) {
  return _ == null || _ === '' ? null : !_ || _ === 'false' || _ === '0' ? false : !!_;
}

function defaultParser(_) {
  return isNumber(_) ? _ : isDate(_) ? _ : Date.parse(_);
}

function toDate(_, parser) {
  parser = parser || defaultParser;
  return _ == null || _ === '' ? null : parser(_);
}

function toString(_) {
  return _ == null || _ === '' ? null : _ + '';
}

function toSet(_) {
  for (var s = {}, i = 0, n = _.length; i < n; ++i) s[_[i]] = true;
  return s;
}

function truncate(str, length, align, ellipsis) {
  var e = ellipsis != null ? ellipsis : '\u2026',
    s = str + '',
    n = s.length,
    l = Math.max(0, length - e.length);

  return n <= length ? s
    : align === 'left' ? e + s.slice(n - l)
      : align === 'center' ? s.slice(0, Math.ceil(l / 2)) + e + s.slice(n - ~~(l / 2))
        : s.slice(0, l) + e;
}

function visitArray(array, filter, visitor) {
  if (array) {
    var i = 0, n = array.length, t;
    if (filter) {
      for (; i < n; ++i) {
        if (t = filter(array[i])) visitor(t, i, array);
      }
    } else {
      array.forEach(visitor);
    }
  }
}

module.exports.Debug = Debug;
module.exports.Error = Error$1;
module.exports.Info = Info;
module.exports.None = None;
module.exports.Warn = Warn;
module.exports.accessor = accessor;
module.exports.accessorFields = accessorFields;
module.exports.accessorName = accessorName;
module.exports.array = array;
module.exports.clampRange = clampRange;
module.exports.compare = compare;
module.exports.constant = constant;
module.exports.debounce = debounce;
module.exports.error = error;
module.exports.extend = extend;
module.exports.extent = extent;
module.exports.extentIndex = extentIndex;
module.exports.falsy = falsy;
module.exports.fastmap = fastmap;
module.exports.field = field;
module.exports.flush = flush;
module.exports.hasOwnProperty = has;
module.exports.id = id;
module.exports.identity = identity;
module.exports.inherits = inherits;
module.exports.inrange = inrange;
module.exports.isArray = isArray;
module.exports.isBoolean = isBoolean;
module.exports.isDate = isDate;
module.exports.isFunction = isFunction;
module.exports.isNumber = isNumber;
module.exports.isObject = isObject;
module.exports.isRegExp = isRegExp;
module.exports.isString = isString;
module.exports.key = key;
module.exports.lerp = lerp;
module.exports.logger = logger;
module.exports.lruCache = lruCache;
module.exports.merge = merge;
module.exports.mergeConfig = mergeConfig;
module.exports.one = one;
module.exports.pad = pad;
module.exports.panLinear = panLinear;
module.exports.panLog = panLog;
module.exports.panPow = panPow;
module.exports.panSymlog = panSymlog;
module.exports.peek = peek;
module.exports.quarter = quarter;
module.exports.repeat = repeat;
module.exports.span = span;
module.exports.splitAccessPath = splitAccessPath;
module.exports.stringValue = $;
module.exports.toBoolean = toBoolean;
module.exports.toDate = toDate;
module.exports.toNumber = toNumber;
module.exports.toSet = toSet;
module.exports.toString = toString;
module.exports.truncate = truncate;
module.exports.truthy = truthy;
module.exports.utcquarter = utcquarter;
module.exports.visitArray = visitArray;
module.exports.writeConfig = writeConfig;
module.exports.zero = zero;
module.exports.zoomLinear = zoomLinear;
module.exports.zoomLog = zoomLog;
module.exports.zoomPow = zoomPow;
module.exports.zoomSymlog = zoomSymlog;

