// koffee 0.56.0

/*
 0000000  00000000  000000000
000       000          000   
0000000   0000000      000   
     000  000          000   
0000000   00000000     000
 */
var set;

set = function(object, keypath, value) {
    var k, kp, o;
    if (typeof keypath === 'string') {
        keypath = keypath.split('.');
    }
    if (!(keypath instanceof Array)) {
        throw "invalid keypath: " + (JSON.stringify(keypath));
    }
    kp = [].concat(keypath);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6Ii4iLCJzb3VyY2VzIjpbIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7O0FBQUEsSUFBQTs7QUFXQSxHQUFBLEdBQU0sU0FBQyxNQUFELEVBQVMsT0FBVCxFQUFrQixLQUFsQjtBQUVGLFFBQUE7SUFBQSxJQUErQixPQUFPLE9BQVAsS0FBbUIsUUFBbEQ7UUFBQSxPQUFBLEdBQVUsT0FBTyxDQUFDLEtBQVIsQ0FBYyxHQUFkLEVBQVY7O0lBQ0EsSUFBc0QsQ0FBSSxDQUFDLE9BQUEsWUFBbUIsS0FBcEIsQ0FBMUQ7QUFBQSxjQUFNLG1CQUFBLEdBQW1CLENBQUMsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmLENBQUQsRUFBekI7O0lBRUEsRUFBQSxHQUFLLEVBQUUsQ0FBQyxNQUFILENBQVUsT0FBVjtJQUNMLENBQUEsR0FBSTtBQUVKLFdBQU0sRUFBRSxDQUFDLE1BQUgsR0FBWSxDQUFsQjtRQUNJLENBQUEsR0FBSSxFQUFFLENBQUMsS0FBSCxDQUFBO1FBQ0osSUFBTyxZQUFQO1lBQ0ksSUFBRyxDQUFJLE1BQU0sQ0FBQyxLQUFQLENBQWEsUUFBQSxDQUFTLENBQVQsQ0FBYixDQUFQO2dCQUNJLENBQUEsR0FBSSxDQUFFLENBQUEsQ0FBQSxDQUFGLEdBQU8sR0FEZjthQUFBLE1BQUE7Z0JBR0ksQ0FBQSxHQUFJLENBQUUsQ0FBQSxDQUFBLENBQUYsR0FBTyxHQUhmO2FBREo7U0FBQSxNQUFBO1lBTUksQ0FBQSxHQUFJLENBQUUsQ0FBQSxDQUFBLEVBTlY7O0lBRko7SUFVQSxJQUFHLEVBQUUsQ0FBQyxNQUFILEtBQWEsQ0FBYixJQUFtQixXQUF0QjtRQUNJLElBQUcsS0FBQSxLQUFTLE1BQVo7WUFDSSxPQUFPLENBQUUsQ0FBQSxFQUFHLENBQUEsQ0FBQSxDQUFILEVBRGI7U0FBQSxNQUFBO1lBR0ksQ0FBRSxDQUFBLEVBQUcsQ0FBQSxDQUFBLENBQUgsQ0FBRixHQUFXO1lBQ1gsSUFBRyxDQUFFLENBQUEsRUFBRyxDQUFBLENBQUEsQ0FBSCxDQUFGLEtBQVksS0FBZjtBQUNJLHNCQUFNLHFCQUFBLEdBQXFCLENBQUMsSUFBSSxDQUFDLFNBQUwsQ0FBZSxLQUFmLENBQUQsQ0FBckIsR0FBMkMsZUFBM0MsR0FBeUQsQ0FBQyxPQUFPLENBQUMsSUFBUixDQUFhLEdBQWIsQ0FBRCxDQUF6RCxHQUEyRSxNQUEzRSxHQUFnRixDQUFDLElBQUksQ0FBQyxTQUFMLENBQWUsTUFBZixDQUFELEVBRDFGO2FBSko7U0FESjs7V0FPQTtBQXpCRTs7QUEyQk4sTUFBTSxDQUFDLE9BQVAsR0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIjIyNcbiAwMDAwMDAwICAwMDAwMDAwMCAgMDAwMDAwMDAwXG4wMDAgICAgICAgMDAwICAgICAgICAgIDAwMCAgIFxuMDAwMDAwMCAgIDAwMDAwMDAgICAgICAwMDAgICBcbiAgICAgMDAwICAwMDAgICAgICAgICAgMDAwICAgXG4wMDAwMDAwICAgMDAwMDAwMDAgICAgIDAwMCAgIFxuIyMjXG5cbiMgYWNjZXB0cyBhbiBvYmplY3QsIGEga2V5cGF0aCBhcyBhbiBhcnJheSBvciBzdHJpbmcgYW5kIGEgdmFsdWVcbiMgcmV0dXJucyB0aGUgb2JqZWN0IHdpdGggdmFsdWUgc2V0IGF0IGtleXBhdGhcblxuc2V0ID0gKG9iamVjdCwga2V5cGF0aCwgdmFsdWUpIC0+XG4gICAgXG4gICAga2V5cGF0aCA9IGtleXBhdGguc3BsaXQgJy4nIGlmIHR5cGVvZihrZXlwYXRoKSA9PSAnc3RyaW5nJ1xuICAgIHRocm93IFwiaW52YWxpZCBrZXlwYXRoOiAje0pTT04uc3RyaW5naWZ5IGtleXBhdGh9XCIgaWYgbm90IChrZXlwYXRoIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgXG4gICAga3AgPSBbXS5jb25jYXQga2V5cGF0aFxuICAgIG8gPSBvYmplY3RcbiAgICBcbiAgICB3aGlsZSBrcC5sZW5ndGggPiAxXG4gICAgICAgIGsgPSBrcC5zaGlmdCgpXG4gICAgICAgIGlmIG5vdCBvW2tdP1xuICAgICAgICAgICAgaWYgbm90IE51bWJlci5pc05hTiBwYXJzZUludCBrXG4gICAgICAgICAgICAgICAgbyA9IG9ba10gPSBbXVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG8gPSBvW2tdID0ge31cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgbyA9IG9ba11cbiAgICAgICAgICAgIFxuICAgIGlmIGtwLmxlbmd0aCA9PSAxIGFuZCBvP1xuICAgICAgICBpZiB2YWx1ZSA9PSB1bmRlZmluZWRcbiAgICAgICAgICAgIGRlbGV0ZSBvW2twWzBdXVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICBvW2twWzBdXSA9IHZhbHVlXG4gICAgICAgICAgICBpZiBvW2twWzBdXSAhPSB2YWx1ZVxuICAgICAgICAgICAgICAgIHRocm93IFwiY291bGRuJ3Qgc2V0IHZhbHVlICN7SlNPTi5zdHJpbmdpZnkgdmFsdWV9IGZvciBrZXlwYXRoICN7a2V5cGF0aC5qb2luICcuJ30gaW4gI3tKU09OLnN0cmluZ2lmeSBvYmplY3R9XCJcbiAgICBvYmplY3RcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRcbiJdfQ==
//# sourceURL=../coffee/set.coffee
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let object = [ esl_symbolic.string("object0") ];
let keypath = esl_symbolic.string("keypath");
let value = esl_symbolic.any("value");
module.exports(object, keypath, value);
console.log(({}).toString);