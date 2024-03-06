"use strict";
// get
exports.__esModule = true;
function safeGet(x, k1) {
    if (x != null) {
        return x[k1];
    }
    return null;
}
exports.safeGet = safeGet;
function safeGet2(x, k1, k2) {
    if (x != null) {
        var target = x[k1];
        if (target != null) {
            return target[k2];
        }
    }
    return null;
}
exports.safeGet2 = safeGet2;
function safeGet3(x, k1, k2, k3) {
    if (x != null) {
        var target = x[k1];
        if (target != null) {
            var target2 = target[k2];
            if (target2 != null) {
                return target2[k3];
            }
        }
    }
    return null;
}
exports.safeGet3 = safeGet3;
function safeGet4(x, k1, k2, k3, k4) {
    if (x != null) {
        var target = x[k1];
        if (target != null) {
            var target2 = target[k2];
            if (target2 != null) {
                var target3 = target2[k3];
                if (target3 != null) {
                    return target3[k4];
                }
            }
        }
    }
    return null;
}
exports.safeGet4 = safeGet4;
// set
function safeSet(x, k1, v) {
    if (x == null) {
        throw new Error("Cannot set on null object");
    }
    x[k1] = v;
}
exports.safeSet = safeSet;
function safeSet2(x, k1, k2, v) {
    if (x == null) {
        throw new Error("Cannot set on null object");
    }
    if (x[k1] == null) {
        x[k1] = {};
    }
    x[k1][k2] = v;
}
exports.safeSet2 = safeSet2;
function safeSet3(x, k1, k2, k3, v) {
    if (x == null) {
        throw new Error("Cannot set on null object");
    }
    if (x[k1] == null) {
        x[k1] = {};
    }
    if (x[k1][k2] == null) {
        x[k1][k2] = {};
    }
    x[k1][k2][k3] = v;
}
exports.safeSet3 = safeSet3;
function safeSet4(x, k1, k2, k3, k4, v) {
    if (x == null) {
        throw new Error("Cannot set on null object");
    }
    if (x[k1] == null) {
        x[k1] = {};
    }
    if (x[k1][k2] == null) {
        x[k1][k2] = {};
    }
    if (x[k1][k2][k3] == null) {
        x[k1][k2][k3] = {};
    }
    x[k1][k2][k3][k4] = v;
}
exports.safeSet4 = safeSet4;
// alias
function safeProp(x, k1, k2, k3, k4) {
    if (x != null) {
        var target = x[k1];
        if (k2 == null) {
            return target;
        }
        if (target != null) {
            var target2 = target[k2];
            if (k3 == null) {
                return target2;
            }
            if (target2 != null) {
                var target3 = target2[k3];
                if (k4 == null) {
                    return target3;
                }
                if (target3 != null) {
                    return target3[k4];
                }
            }
        }
    }
    return null;
}
exports.safeProp = safeProp;
