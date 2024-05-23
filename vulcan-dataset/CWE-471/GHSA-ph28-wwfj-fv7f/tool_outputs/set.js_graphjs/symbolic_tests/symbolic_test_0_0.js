// koffee 1.14.0

/*
 0000000  00000000  000000000
000       000          000   
0000000   0000000      000   
     000  000          000   
0000000   00000000     000
 */
var set,
    indexOf = [].indexOf;

set = function(object, keypath, value) {
    var k, kp, o;
    if (typeof keypath === 'string') {
        keypath = keypath.split('.');
    }
    if (!(keypath instanceof Array)) {
        throw "invalid keypath: " + (JSON.stringify(keypath));
    }
    kp = [].concat(keypath);
    if (indexOf.call(keypath, '__proto__') >= 0) {
        throw "__proto__ in keypath: " + (JSON.stringify(keypath));
    }
    o = object;
    while (kp.length > 1) {
        k = kp.shift();
        if (o[k] == null) {
            if (!Number.isNaN(parseInt(k))) {
                o = o[k] = [];
            } else {
                o = o[k] = {};
            }
        } else {
            o = o[k];
        }
    }
    if (kp.length === 1 && (o != null)) {
        if (value === void 0) {
            delete o[kp[0]];
        } else {
            o[kp[0]] = value;
            if (o[kp[0]] !== value) {
                throw "couldn't set value " + (JSON.stringify(value)) + " for keypath " + (keypath.join('.')) + " in " + (JSON.stringify(object));
            }
        }
    }
    return object;
};

module.exports = set;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6Ii4uL2NvZmZlZSIsInNvdXJjZXMiOlsic2V0LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7O0FBQUEsSUFBQSxHQUFBO0lBQUE7O0FBV0EsR0FBQSxHQUFNLFNBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsS0FBbEI7QUFFRixRQUFBO0lBQUEsSUFBK0IsT0FBTyxPQUFQLEtBQW1CLFFBQWxEO1FBQUEsT0FBQSxHQUFVLE9BQU8sQ0FBQyxLQUFSLENBQWMsR0FBZCxFQUFWOztJQUNBLElBQXNELENBQUksQ0FBQyxPQUFBLFlBQW1CLEtBQXBCLENBQTFEO0FBQUEsY0FBTSxtQkFBQSxHQUFtQixDQUFDLElBQUksQ0FBQyxTQUFMLENBQWUsT0FBZixDQUFELEVBQXpCOztJQUVBLEVBQUEsR0FBSyxFQUFFLENBQUMsTUFBSCxDQUFVLE9BQVY7SUFFTCxJQUFHLGFBQWUsT0FBZixFQUFBLFdBQUEsTUFBSDtBQUNJLGNBQU0sd0JBQUEsR0FBd0IsQ0FBQyxJQUFJLENBQUMsU0FBTCxDQUFlLE9BQWYsQ0FBRCxFQURsQzs7SUFHQSxDQUFBLEdBQUk7QUFFSixXQUFNLEVBQUUsQ0FBQyxNQUFILEdBQVksQ0FBbEI7UUFDSSxDQUFBLEdBQUksRUFBRSxDQUFDLEtBQUgsQ0FBQTtRQUNKLElBQU8sWUFBUDtZQUNJLElBQUcsQ0FBSSxNQUFNLENBQUMsS0FBUCxDQUFhLFFBQUEsQ0FBUyxDQUFULENBQWIsQ0FBUDtnQkFDSSxDQUFBLEdBQUksQ0FBRSxDQUFBLENBQUEsQ0FBRixHQUFPLEdBRGY7YUFBQSxNQUFBO2dCQUdJLENBQUEsR0FBSSxDQUFFLENBQUEsQ0FBQSxDQUFGLEdBQU8sR0FIZjthQURKO1NBQUEsTUFBQTtZQU1JLENBQUEsR0FBSSxDQUFFLENBQUEsQ0FBQSxFQU5WOztJQUZKO0lBVUEsSUFBRyxFQUFFLENBQUMsTUFBSCxLQUFhLENBQWIsSUFBbUIsV0FBdEI7UUFDSSxJQUFHLEtBQUEsS0FBUyxNQUFaO1lBQ0ksT0FBTyxDQUFFLENBQUEsRUFBRyxDQUFBLENBQUEsQ0FBSCxFQURiO1NBQUEsTUFBQTtZQUdJLENBQUUsQ0FBQSxFQUFHLENBQUEsQ0FBQSxDQUFILENBQUYsR0FBVztZQUNYLElBQUcsQ0FBRSxDQUFBLEVBQUcsQ0FBQSxDQUFBLENBQUgsQ0FBRixLQUFZLEtBQWY7QUFDSSxzQkFBTSxxQkFBQSxHQUFxQixDQUFDLElBQUksQ0FBQyxTQUFMLENBQWUsS0FBZixDQUFELENBQXJCLEdBQTJDLGVBQTNDLEdBQXlELENBQUMsT0FBTyxDQUFDLElBQVIsQ0FBYSxHQUFiLENBQUQsQ0FBekQsR0FBMkUsTUFBM0UsR0FBZ0YsQ0FBQyxJQUFJLENBQUMsU0FBTCxDQUFlLE1BQWYsQ0FBRCxFQUQxRjthQUpKO1NBREo7O1dBT0E7QUE3QkU7O0FBK0JOLE1BQU0sQ0FBQyxPQUFQLEdBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiIyMjXG4gMDAwMDAwMCAgMDAwMDAwMDAgIDAwMDAwMDAwMFxuMDAwICAgICAgIDAwMCAgICAgICAgICAwMDAgICBcbjAwMDAwMDAgICAwMDAwMDAwICAgICAgMDAwICAgXG4gICAgIDAwMCAgMDAwICAgICAgICAgIDAwMCAgIFxuMDAwMDAwMCAgIDAwMDAwMDAwICAgICAwMDAgICBcbiMjI1xuXG4jIGFjY2VwdHMgYW4gb2JqZWN0LCBhIGtleXBhdGggYXMgYW4gYXJyYXkgb3Igc3RyaW5nIGFuZCBhIHZhbHVlXG4jIHJldHVybnMgdGhlIG9iamVjdCB3aXRoIHZhbHVlIHNldCBhdCBrZXlwYXRoXG5cbnNldCA9IChvYmplY3QsIGtleXBhdGgsIHZhbHVlKSAtPlxuICAgIFxuICAgIGtleXBhdGggPSBrZXlwYXRoLnNwbGl0ICcuJyBpZiB0eXBlb2Yoa2V5cGF0aCkgPT0gJ3N0cmluZydcbiAgICB0aHJvdyBcImludmFsaWQga2V5cGF0aDogI3tKU09OLnN0cmluZ2lmeSBrZXlwYXRofVwiIGlmIG5vdCAoa2V5cGF0aCBpbnN0YW5jZW9mIEFycmF5KVxuICAgIFxuICAgIGtwID0gW10uY29uY2F0IGtleXBhdGhcbiAgICBcbiAgICBpZiAnX19wcm90b19fJyBpbiBrZXlwYXRoICMgbGV0J3MgdHJ5IHRvIG1ha2UgdGhvc2Ugc2VjdXJpdHkgYm90cyBoYXBweSAuLi5cbiAgICAgICAgdGhyb3cgXCJfX3Byb3RvX18gaW4ga2V5cGF0aDogI3tKU09OLnN0cmluZ2lmeSBrZXlwYXRofVwiXG4gICAgXG4gICAgbyA9IG9iamVjdFxuICAgICAgICBcbiAgICB3aGlsZSBrcC5sZW5ndGggPiAxXG4gICAgICAgIGsgPSBrcC5zaGlmdCgpXG4gICAgICAgIGlmIG5vdCBvW2tdP1xuICAgICAgICAgICAgaWYgbm90IE51bWJlci5pc05hTiBwYXJzZUludCBrXG4gICAgICAgICAgICAgICAgbyA9IG9ba10gPSBbXVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG8gPSBvW2tdID0ge31cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbyA9IG9ba11cbiAgICAgICAgICAgIFxuICAgIGlmIGtwLmxlbmd0aCA9PSAxIGFuZCBvP1xuICAgICAgICBpZiB2YWx1ZSA9PSB1bmRlZmluZWRcbiAgICAgICAgICAgIGRlbGV0ZSBvW2twWzBdXVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBvW2twWzBdXSA9IHZhbHVlXG4gICAgICAgICAgICBpZiBvW2twWzBdXSAhPSB2YWx1ZVxuICAgICAgICAgICAgICAgIHRocm93IFwiY291bGRuJ3Qgc2V0IHZhbHVlICN7SlNPTi5zdHJpbmdpZnkgdmFsdWV9IGZvciBrZXlwYXRoICN7a2V5cGF0aC5qb2luICcuJ30gaW4gI3tKU09OLnN0cmluZ2lmeSBvYmplY3R9XCJcbiAgICBvYmplY3RcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRcbiJdfQ==
//# sourceURL=../coffee/set.coffee
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let object =
  { *:
      { *:
          { *:
              { *:
                  { *:
                      { *:
                          { *: esl_symbolic.any("*")
                          , k: esl_symbolic.string("k") }
                      , k: esl_symbolic.string("k") }
                  , k: esl_symbolic.string("k") }
              , k: esl_symbolic.string("k") }
          , k: esl_symbolic.string("k") }
      , k: esl_symbolic.string("k") }
  , k: esl_symbolic.string("k") };
let keypath = [ esl_symbolic.string("keypath0") ];
let value = esl_symbolic.string("value");
module.exports(object, keypath, value);
console.log(({}).toString);
