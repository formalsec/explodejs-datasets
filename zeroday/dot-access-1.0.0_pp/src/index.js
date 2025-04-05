exports.set = function (obj, path, value) {
  var segs = path.split('.');
  let deep = obj;
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];
    if (i === segs.length - 1) {
      deep[seg] = value;
    } else {
      deep = deep[seg] = deep[seg] || {};
    }
  }

  return obj;
};

// exports.get = function (obj, path) {
//   try {
//     return new Function('_', 'return _.' + path)(obj);
//   } catch (e) {
//     return obj[path];
//   }
// };
