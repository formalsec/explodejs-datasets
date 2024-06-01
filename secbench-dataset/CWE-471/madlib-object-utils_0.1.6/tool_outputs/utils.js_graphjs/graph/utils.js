const v93 = function () {
    const v57 = function (factory) {
        const v48 = typeof exports;
        const v49 = v48 === 'object';
        if (v49) {
            const v50 = factory();
            return module.exports = v50;
        } else {
            const v51 = typeof define;
            const v52 = v51 === 'function';
            const v53 = define.amd;
            const v54 = v52 && v53;
            if (v54) {
                const v55 = [];
                const v56 = define(v55, factory);
                return v56;
            }
        }
    };
    const v91 = function () {
        var getAndCreate;
        var getValue;
        var isArray;
        var objectUtils;
        var setValue;
        const v65 = function (object) {
            const v58 = Array.isArray;
            const v59 = v58 != null;
            if (v59) {
                const v60 = Array.isArray(object);
                return v60;
            } else {
                const v61 = Object.prototype;
                const v62 = v61.toString;
                const v63 = v62.call(object);
                const v64 = v63 === '[object Array]';
                return v64;
            }
        };
        isArray = v65;
        const v79 = function (path, object, valueIfMissing) {
            var aPath;
            var key;
            var value;
            const v66 = valueIfMissing == null;
            if (v66) {
                const v67 = void 0;
                valueIfMissing = v67;
            }
            const v68 = object == null;
            if (v68) {
                return valueIfMissing;
            }
            const v69 = '' + path;
            aPath = v69.split('.');
            value = object;
            key = aPath.shift();
            const v70 = aPath.length;
            const v71 = v70 === 0;
            if (v71) {
                const v72 = key.replace('%2E', '.');
                value = value[v72];
                const v73 = value == null;
                if (v73) {
                    value = valueIfMissing;
                }
            } else {
                let v74 = value && key;
                while (v74) {
                    const v75 = key.replace('%2E', '.');
                    value = value[v75];
                    const v76 = value == null;
                    if (v76) {
                        value = valueIfMissing;
                    }
                    key = aPath.shift();
                    v74 = value && key;
                }
                const v77 = aPath.length;
                const v78 = 0 === v77;
                if (v78) {
                    value = value;
                } else {
                    value = valueIfMissing;
                }
            }
            return value;
        };
        getValue = v79;
        const v88 = function (path, object, defaultValue) {
            var aPath;
            var key;
            var value;
            const v80 = object == null;
            if (v80) {
                return;
            }
            const v81 = '' + path;
            aPath = v81.split('.');
            value = object;
            key = aPath.shift();
            while (key) {
                key = key.replace('%2E', '.');
                const v82 = value[key];
                const v83 = v82 == null;
                if (v83) {
                    const v84 = {};
                    value[key] = v84;
                }
                const v85 = aPath.length;
                const v86 = v85 === 0;
                if (v86) {
                    const v87 = defaultValue != null;
                    if (v87) {
                        value[key] = defaultValue;
                    }
                }
                value = value[key];
                key = aPath.shift();
            }
            return value;
        };
        getAndCreate = v88;
        const v90 = function (path, object, value) {
            const v89 = getAndCreate(path, object, value);
            v89;
            return object;
        };
        setValue = v90;
        objectUtils.isArray = isArray;
        objectUtils.getValue = getValue;
        objectUtils.getAndCreate = getAndCreate;
        objectUtils.setValue = setValue;
        return objectUtils = {
            isArray: isArray,
            getValue: getValue,
            getAndCreate: getAndCreate,
            setValue: setValue
        };
        return objectUtils = {};
    };
    const v92 = v57(v91);
    v92;
};
const v94 = v93.call(this);
v94;