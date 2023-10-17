/**
 * Set given `path`
 *
 * @param {Object} obj
 * @param {String} path
 * @param {Mixed} val
 * @api public
 */

/*exports.set = function (obj, path, val) {
  var segs = path.split('.');
  var attr = segs.pop();
  
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i];
    obj[seg] = obj[seg] || {};
    obj = obj[seg];
  }
  
  obj[attr] = val;
};*/

function setValue(obj, path, value) {
  var dotPath = path.split(".")
  for (let i = 0; i < dotPath; i++) {
    if (i === dotPath.length -1) {
      obj[key] = value
    }
    obj = obj[key]
  }
}
