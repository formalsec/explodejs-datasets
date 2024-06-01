'use strict';
const v47 = {};
v47.evaluatePath = evaluatePath;
v47.setPath = setPath;
module.exports = v47;
const evaluatePath = function (document, keyPath) {
    const v48 = !document;
    if (v48) {
        return null;
    }
    let v49 = computeStateInformation(keyPath);
    let indexOfDot = v49.indexOfDot;
    let currentKey = v49.currentKey;
    let remainingKeyPath = v49.remainingKeyPath;
    const v50 = indexOfDot >= 0;
    const v51 = document[keyPath];
    const v52 = !v51;
    const v53 = v50 && v52;
    if (v53) {
        const v54 = document[currentKey];
        const v55 = Array.isArray(v54);
        if (v55) {
            const v56 = document[currentKey];
            const v58 = doc => {
                const v57 = evaluatePath(doc, remainingKeyPath);
                return v57;
            };
            const v59 = v56.map(v58);
            return v59;
        }
        const v60 = document[currentKey];
        const v61 = evaluatePath(v60, remainingKeyPath);
        return v61;
    } else {
        const v62 = Array.isArray(document);
        if (v62) {
            const v64 = doc => {
                const v63 = evaluatePath(doc, keyPath);
                return v63;
            };
            const v65 = document.map(v64);
            return v65;
        }
    }
    const v66 = document[keyPath];
    return v66;
};
const setPath = function (document, keyPath, value) {
    const v67 = !document;
    if (v67) {
        const v68 = new Error('No document was provided.');
        throw v68;
    }
    let v69 = computeStateInformation(keyPath);
    let indexOfDot = v69.indexOfDot;
    let currentKey = v69.currentKey;
    let remainingKeyPath = v69.remainingKeyPath;
    const v70 = indexOfDot >= 0;
    if (v70) {
        const v71 = document[currentKey];
        const v72 = !v71;
        const v73 = Array.isArray(document);
        const v74 = v72 && v73;
        if (v74) {
            const v76 = doc => {
                const v75 = setPath(doc, keyPath, value);
                return v75;
            };
            const v77 = document.forEach(v76);
            return v77;
        } else {
            const v78 = document[currentKey];
            const v79 = !v78;
            if (v79) {
                const v80 = {};
                document[currentKey] = v80;
            }
        }
        const v81 = document[currentKey];
        const v82 = setPath(v81, remainingKeyPath, value);
        v82;
    } else {
        const v83 = Array.isArray(document);
        if (v83) {
            const v85 = doc => {
                const v84 = setPath(doc, remainingKeyPath, value);
                return v84;
            };
            const v86 = document.forEach(v85);
            return v86;
        } else {
            document[keyPath] = value;
        }
    }
    return document;
};
const computeStateInformation = function (keyPath) {
    let indexOfDot = keyPath.indexOf('.');
    const v87 = indexOfDot >= 0;
    let v88;
    if (v87) {
        v88 = indexOfDot;
    } else {
        v88 = undefined;
    }
    const v89 = keyPath.slice(0, v88);
    const v90 = indexOfDot + 1;
    const v91 = keyPath.slice(v90);
    const v92 = {};
    v92.indexOfDot = indexOfDot;
    v92.currentKey = v89;
    v92.remainingKeyPath = v91;
    return v92;
};