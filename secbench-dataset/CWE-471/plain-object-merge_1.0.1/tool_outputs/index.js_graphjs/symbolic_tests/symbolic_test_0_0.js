"use strict";
/* IMPORT */
var plain_object_clone_1 = require("plain-object-clone");
var isPrimitive = require("is-primitive");
/* MERGE */
function merge(objects) {
    var target = plain_object_clone_1.default(objects[0]);
    for (var i = 1, l = objects.length; i < l; i++) {
        mergeObjects(target, objects[i]);
    }
    return target;
}
function mergeObjects(target, source) {
    for (var key in source) {
        var value = source[key];
        if (isPrimitive(value)) {
            if (value !== undefined || !(key in target)) {
                target[key] = value;
            }
        }
        else if (!target[key] || Array.isArray(value)) {
            target[key] = plain_object_clone_1.default(value);
        }
        else {
            target[key] = mergeObjects(target[key], value);
        }
    }
    return target;
}
/* EXPORT */
module.exports = merge;
module.exports.default = merge;
Object.defineProperty(module.exports, "__esModule", { value: true });

let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: prototype-pollution
let objects = [ esl_symbolic.any("objects0") ];
module.exports(objects);
console.log(({}).toString);
