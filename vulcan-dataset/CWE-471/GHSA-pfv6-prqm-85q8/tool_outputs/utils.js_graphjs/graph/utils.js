const v135 = function () {
    const v78 = function (factory) {
        const v69 = typeof exports;
        const v70 = v69 === 'object';
        if (v70) {
            const v71 = factory();
            return module.exports = v71;
        } else {
            const v72 = typeof define;
            const v73 = v72 === 'function';
            const v74 = define.amd;
            const v75 = v73 && v74;
            if (v75) {
                const v76 = [];
                const v77 = define(v76, factory);
                return v77;
            }
        }
    };
    const v133 = function () {
        var getAndCreate;
        var getValue;
        var isArray;
        var isObject;
        var objectUtils;
        var setValue;
        const v85 = function (value) {
            var type;
            const v79 = typeof value;
            type = v79;
            const v80 = value !== null;
            const v81 = type === 'object';
            const v82 = type === 'function';
            const v83 = v81 || v82;
            const v84 = v80 && v83;
            return v84;
        };
        isObject = v85;
        const v93 = function (object) {
            const v86 = Array.isArray;
            const v87 = v86 != null;
            if (v87) {
                const v88 = Array.isArray(object);
                return v88;
            } else {
                const v89 = Object.prototype;
                const v90 = v89.toString;
                const v91 = v90.call(object);
                const v92 = v91 === '[object Array]';
                return v92;
            }
        };
        isArray = v93;
        const v113 = function (path, object, valueIfMissing) {
            var aPath;
            var key;
            var value;
            const v94 = valueIfMissing == null;
            if (v94) {
                const v95 = void 0;
                valueIfMissing = v95;
            }
            const v96 = object == null;
            if (v96) {
                return valueIfMissing;
            }
            const v97 = '' + path;
            aPath = v97.split('.');
            value = object;
            key = aPath.shift();
            const v98 = key === 'constructor';
            const v99 = object[key];
            const v100 = typeof v99;
            const v101 = v100 === 'function';
            const v102 = v98 && v101;
            if (v102) {
                return;
            }
            const v103 = key === '__proto__';
            if (v103) {
                return;
            }
            const v104 = aPath.length;
            const v105 = v104 === 0;
            if (v105) {
                const v106 = key.replace('%2E', '.');
                value = value[v106];
                const v107 = value == null;
                if (v107) {
                    value = valueIfMissing;
                }
            } else {
                let v108 = value && key;
                while (v108) {
                    const v109 = key.replace('%2E', '.');
                    value = value[v109];
                    const v110 = value == null;
                    if (v110) {
                        value = valueIfMissing;
                    }
                    key = aPath.shift();
                    v108 = value && key;
                }
                const v111 = aPath.length;
                const v112 = 0 === v111;
                if (v112) {
                    value = value;
                } else {
                    value = valueIfMissing;
                }
            }
            return value;
        };
        getValue = v113;
        const v130 = function (path, object, defaultValue) {
            var aPath;
            var key;
            var value;
            const v114 = object == null;
            if (v114) {
                return;
            }
            const v115 = isObject(object);
            const v116 = !v115;
            if (v116) {
                return;
            }
            const v117 = '' + path;
            aPath = v117.split('.');
            value = object;
            key = aPath.shift();
            const v118 = key === 'constructor';
            const v119 = object[key];
            const v120 = typeof v119;
            const v121 = v120 === 'function';
            const v122 = v118 && v121;
            if (v122) {
                return object;
            }
            const v123 = key === '__proto__';
            if (v123) {
                return object;
            }
            while (key) {
                key = key.replace('%2E', '.');
                const v124 = value[key];
                const v125 = v124 == null;
                if (v125) {
                    const v126 = {};
                    value[key] = v126;
                }
                const v127 = aPath.length;
                const v128 = v127 === 0;
                if (v128) {
                    const v129 = defaultValue != null;
                    if (v129) {
                        value[key] = defaultValue;
                    }
                }
                value = value[key];
                key = aPath.shift();
            }
            return value;
        };
        getAndCreate = v130;
        const v132 = function (path, object, value) {
            const v131 = getAndCreate(path, object, value);
            v131;
            return object;
        };
        setValue = v132;
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
    const v134 = v78(v133);
    v134;
};
const v136 = v135.call(this);
v136;