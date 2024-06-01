const v6937 = function (global, factory) {
    const v6922 = typeof module;
    const v6923 = v6922 === 'object';
    const v6924 = module.exports;
    const v6925 = typeof v6924;
    const v6926 = v6925 === 'object';
    const v6927 = v6923 && v6926;
    if (v6927) {
        const v6928 = global.document;
        const v6929 = factory(global, true);
        const v6934 = function (w) {
            const v6930 = w.document;
            const v6931 = !v6930;
            if (v6931) {
                const v6932 = new Error('jQuery requires a window with a document');
                throw v6932;
            }
            const v6933 = factory(w);
            return v6933;
        };
        let v6935;
        if (v6928) {
            v6935 = v6929;
        } else {
            v6935 = v6934;
        }
        module.exports = v6935;
    } else {
        const v6936 = factory(global);
        v6936;
    }
};
const v6938 = typeof window;
const v6939 = v6938 !== 'undefined';
let v6940;
if (v6939) {
    v6940 = window;
} else {
    v6940 = this;
}
const v13841 = function (window, noGlobal) {
    var deletedIds = [];
    var slice = deletedIds.slice;
    var concat = deletedIds.concat;
    var push = deletedIds.push;
    var indexOf = deletedIds.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var trim = ''.trim;
    var support = {};
    var version = '1.11.0';
    var jQuery = function (selector, context) {
        const v6941 = jQuery.fn;
        const v6942 = new v6941.init(selector, context);
        return v6942;
    };
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    var rmsPrefix = /^-ms-/;
    var rdashAlpha = /-([\da-z])/gi;
    var fcamelCase = function (all, letter) {
        const v6943 = letter.toUpperCase();
        return v6943;
    };
    const v6945 = function () {
        const v6944 = slice.call(this);
        return v6944;
    };
    const v6955 = function (num) {
        const v6946 = num != null;
        const v6947 = num < 0;
        const v6948 = this.length;
        const v6949 = num + v6948;
        const v6950 = this[v6949];
        const v6951 = this[num];
        let v6952;
        if (v6947) {
            v6952 = v6950;
        } else {
            v6952 = v6951;
        }
        const v6953 = slice.call(this);
        let v6954;
        if (v6946) {
            v6954 = v6952;
        } else {
            v6954 = v6953;
        }
        return v6954;
    };
    const v6958 = function (elems) {
        const v6956 = this.constructor();
        var ret = jQuery.merge(v6956, elems);
        ret.prevObject = this;
        const v6957 = this.context;
        ret.context = v6957;
        return ret;
    };
    const v6960 = function (callback, args) {
        const v6959 = jQuery.each(this, callback, args);
        return v6959;
    };
    const v6965 = function (callback) {
        const v6962 = function (elem, i) {
            const v6961 = callback.call(elem, i, elem);
            return v6961;
        };
        const v6963 = jQuery.map(this, v6962);
        const v6964 = this.pushStack(v6963);
        return v6964;
    };
    const v6968 = function () {
        const v6966 = slice.apply(this, arguments);
        const v6967 = this.pushStack(v6966);
        return v6967;
    };
    const v6970 = function () {
        const v6969 = this.eq(0);
        return v6969;
    };
    const v6973 = function () {
        const v6971 = -1;
        const v6972 = this.eq(v6971);
        return v6972;
    };
    const v6985 = function (i) {
        var len = this.length;
        const v6974 = +i;
        const v6975 = i < 0;
        let v6976;
        if (v6975) {
            v6976 = len;
        } else {
            v6976 = 0;
        }
        var j = v6974 + v6976;
        const v6977 = j >= 0;
        const v6978 = j < len;
        const v6979 = v6977 && v6978;
        const v6980 = this[j];
        const v6981 = [v6980];
        const v6982 = [];
        let v6983;
        if (v6979) {
            v6983 = v6981;
        } else {
            v6983 = v6982;
        }
        const v6984 = this.pushStack(v6983);
        return v6984;
    };
    const v6989 = function () {
        const v6986 = this.prevObject;
        const v6987 = this.constructor(null);
        const v6988 = v6986 || v6987;
        return v6988;
    };
    const v6990 = deletedIds.sort;
    const v6991 = deletedIds.splice;
    const v6992 = {};
    v6992.jquery = version;
    v6992.constructor = jQuery;
    v6992.selector = '';
    v6992.length = 0;
    v6992.toArray = v6945;
    v6992.get = v6955;
    v6992.pushStack = v6958;
    v6992.each = v6960;
    v6992.map = v6965;
    v6992.slice = v6968;
    v6992.first = v6970;
    v6992.last = v6973;
    v6992.eq = v6985;
    v6992.end = v6989;
    v6992.push = push;
    v6992.sort = v6990;
    v6992.splice = v6991;
    jQuery.prototype = v6992;
    jQuery.fn = jQuery.prototype;
    const v6993 = jQuery.fn;
    const v7024 = function () {
        var src;
        var copyIsArray;
        var copy;
        var name;
        var options;
        var clone;
        const v6994 = arguments[0];
        const v6995 = {};
        var target = v6994 || v6995;
        var i = 1;
        var length = arguments.length;
        var deep = false;
        const v6996 = typeof target;
        const v6997 = v6996 === 'boolean';
        if (v6997) {
            deep = target;
            const v6998 = arguments[i];
            const v6999 = {};
            target = v6998 || v6999;
            const v7000 = i++;
            v7000;
        }
        const v7001 = typeof target;
        const v7002 = v7001 !== 'object';
        const v7003 = jQuery.isFunction(target);
        const v7004 = !v7003;
        const v7005 = v7002 && v7004;
        if (v7005) {
            target = {};
        }
        const v7006 = i === length;
        if (v7006) {
            target = this;
            const v7007 = i--;
            v7007;
        }
        let v7008 = i < length;
        while (v7008) {
            const v7010 = (options = arguments[i]) != null;
            if (v7010) {
                for (name in options) {
                    src = target[name];
                    copy = options[name];
                    const v7011 = target === copy;
                    if (v7011) {
                        continue;
                    }
                    const v7012 = deep && copy;
                    const v7013 = jQuery.isPlainObject(copy);
                    const v7014 = v7013 || (copyIsArray = jQuery.isArray(copy));
                    const v7015 = v7012 && v7014;
                    if (v7015) {
                        if (copyIsArray) {
                            copyIsArray = false;
                            const v7016 = jQuery.isArray(src);
                            const v7017 = src && v7016;
                            const v7018 = [];
                            if (v7017) {
                                clone = src;
                            } else {
                                clone = v7018;
                            }
                        } else {
                            const v7019 = jQuery.isPlainObject(src);
                            const v7020 = src && v7019;
                            const v7021 = {};
                            if (v7020) {
                                clone = src;
                            } else {
                                clone = v7021;
                            }
                        }
                        const v7022 = jQuery.extend(deep, clone, copy);
                        target[name] = v7022;
                    } else {
                        const v7023 = copy !== undefined;
                        if (v7023) {
                            target[name] = copy;
                        }
                    }
                }
            }
            const v7009 = i++;
            v7008 = i < length;
        }
        return target;
    };
    v6993.extend = v7024;
    jQuery.extend = v6993.extend;
    const v7025 = Math.random();
    const v7026 = version + v7025;
    const v7027 = v7026.replace(/\D/g, '');
    const v7028 = 'jQuery' + v7027;
    const v7030 = function (msg) {
        const v7029 = new Error(msg);
        throw v7029;
    };
    const v7031 = function () {
    };
    const v7034 = function (obj) {
        const v7032 = jQuery.type(obj);
        const v7033 = v7032 === 'function';
        return v7033;
    };
    const v7035 = Array.isArray;
    const v7038 = function (obj) {
        const v7036 = jQuery.type(obj);
        const v7037 = v7036 === 'array';
        return v7037;
    };
    const v7039 = v7035 || v7038;
    const v7044 = function (obj) {
        const v7040 = obj != null;
        const v7041 = obj.window;
        const v7042 = obj == v7041;
        const v7043 = v7040 && v7042;
        return v7043;
    };
    const v7048 = function (obj) {
        const v7045 = parseFloat(obj);
        const v7046 = obj - v7045;
        const v7047 = v7046 >= 0;
        return v7047;
    };
    const v7049 = function (obj) {
        var name;
        for (name in obj) {
            return false;
        }
        return true;
    };
    const v7072 = function (obj) {
        var key;
        const v7050 = !obj;
        const v7051 = jQuery.type(obj);
        const v7052 = v7051 !== 'object';
        const v7053 = v7050 || v7052;
        const v7054 = obj.nodeType;
        const v7055 = v7053 || v7054;
        const v7056 = jQuery.isWindow(obj);
        const v7057 = v7055 || v7056;
        if (v7057) {
            return false;
        }
        try {
            const v7058 = obj.constructor;
            const v7059 = hasOwn.call(obj, 'constructor');
            const v7060 = !v7059;
            const v7061 = v7058 && v7060;
            const v7062 = obj.constructor;
            const v7063 = v7062.prototype;
            const v7064 = hasOwn.call(v7063, 'isPrototypeOf');
            const v7065 = !v7064;
            const v7066 = v7061 && v7065;
            if (v7066) {
                return false;
            }
        } catch (e) {
            return false;
        }
        const v7067 = support.ownLast;
        if (v7067) {
            for (key in obj) {
                const v7068 = hasOwn.call(obj, key);
                return v7068;
            }
        }
        for (key in obj) {
        }
        const v7069 = key === undefined;
        const v7070 = hasOwn.call(obj, key);
        const v7071 = v7069 || v7070;
        return v7071;
    };
    const v7085 = function (obj) {
        const v7073 = obj == null;
        if (v7073) {
            const v7074 = obj + '';
            return v7074;
        }
        const v7075 = typeof obj;
        const v7076 = v7075 === 'object';
        const v7077 = typeof obj;
        const v7078 = v7077 === 'function';
        const v7079 = v7076 || v7078;
        const v7080 = toString.call(obj);
        const v7081 = class2type[v7080];
        const v7082 = v7081 || 'object';
        const v7083 = typeof obj;
        let v7084;
        if (v7079) {
            v7084 = v7082;
        } else {
            v7084 = v7083;
        }
        return v7084;
    };
    const v7094 = function (data) {
        const v7086 = jQuery.trim(data);
        const v7087 = data && v7086;
        if (v7087) {
            const v7088 = window.execScript;
            const v7091 = function (data) {
                const v7089 = window['eval'];
                const v7090 = v7089.call(window, data);
                v7090;
            };
            const v7092 = v7088 || v7091;
            const v7093 = v7092(data);
            v7093;
        }
    };
    const v7097 = function (string) {
        const v7095 = string.replace(rmsPrefix, 'ms-');
        const v7096 = v7095.replace(rdashAlpha, fcamelCase);
        return v7096;
    };
    const v7104 = function (elem, name) {
        const v7098 = elem.nodeName;
        const v7099 = elem.nodeName;
        const v7100 = v7099.toLowerCase();
        const v7101 = name.toLowerCase();
        const v7102 = v7100 === v7101;
        const v7103 = v7098 && v7102;
        return v7103;
    };
    const v7119 = function (obj, callback, args) {
        var value;
        var i = 0;
        var length = obj.length;
        var isArray = isArraylike(obj);
        if (args) {
            if (isArray) {
                let v7105 = i < length;
                while (v7105) {
                    const v7107 = obj[i];
                    value = callback.apply(v7107, args);
                    const v7108 = value === false;
                    if (v7108) {
                        break;
                    }
                    const v7106 = i++;
                    v7105 = i < length;
                }
            } else {
                for (i in obj) {
                    const v7109 = obj[i];
                    value = callback.apply(v7109, args);
                    const v7110 = value === false;
                    if (v7110) {
                        break;
                    }
                }
            }
        } else {
            if (isArray) {
                let v7111 = i < length;
                while (v7111) {
                    const v7113 = obj[i];
                    const v7114 = obj[i];
                    value = callback.call(v7113, i, v7114);
                    const v7115 = value === false;
                    if (v7115) {
                        break;
                    }
                    const v7112 = i++;
                    v7111 = i < length;
                }
            } else {
                for (i in obj) {
                    const v7116 = obj[i];
                    const v7117 = obj[i];
                    value = callback.call(v7116, i, v7117);
                    const v7118 = value === false;
                    if (v7118) {
                        break;
                    }
                }
            }
        }
        return obj;
    };
    const v7120 = trim.call('\uFEFF\xA0');
    const v7121 = !v7120;
    const v7122 = trim && v7121;
    const v7126 = function (text) {
        const v7123 = text == null;
        const v7124 = trim.call(text);
        let v7125;
        if (v7123) {
            v7125 = '';
        } else {
            v7125 = v7124;
        }
        return v7125;
    };
    const v7131 = function (text) {
        const v7127 = text == null;
        const v7128 = text + '';
        const v7129 = v7128.replace(rtrim, '');
        let v7130;
        if (v7127) {
            v7130 = '';
        } else {
            v7130 = v7129;
        }
        return v7130;
    };
    let v7132;
    if (v7122) {
        v7132 = v7126;
    } else {
        v7132 = v7131;
    }
    const v7143 = function (arr, results) {
        const v7133 = [];
        var ret = results || v7133;
        const v7134 = arr != null;
        if (v7134) {
            const v7135 = Object(arr);
            const v7136 = isArraylike(v7135);
            if (v7136) {
                const v7137 = typeof arr;
                const v7138 = v7137 === 'string';
                const v7139 = [arr];
                let v7140;
                if (v7138) {
                    v7140 = v7139;
                } else {
                    v7140 = arr;
                }
                const v7141 = jQuery.merge(ret, v7140);
                v7141;
            } else {
                const v7142 = push.call(ret, arr);
                v7142;
            }
        }
        return ret;
    };
    const v7156 = function (elem, arr, i) {
        var len;
        if (arr) {
            if (indexOf) {
                const v7144 = indexOf.call(arr, elem, i);
                return v7144;
            }
            len = arr.length;
            const v7145 = i < 0;
            const v7146 = len + i;
            const v7147 = Math.max(0, v7146);
            let v7148;
            if (v7145) {
                v7148 = v7147;
            } else {
                v7148 = i;
            }
            if (i) {
                i = v7148;
            } else {
                i = 0;
            }
            let v7149 = i < len;
            while (v7149) {
                const v7151 = i in arr;
                const v7152 = arr[i];
                const v7153 = v7152 === elem;
                const v7154 = v7151 && v7153;
                if (v7154) {
                    return i;
                }
                const v7150 = i++;
                v7149 = i < len;
            }
        }
        const v7155 = -1;
        return v7155;
    };
    const v7169 = function (first, second) {
        const v7157 = second.length;
        const v7158 = +v7157;
        var len = v7158;
        var j = 0;
        var i = first.length;
        let v7159 = j < len;
        while (v7159) {
            const v7160 = i++;
            const v7161 = j++;
            const v7162 = second[v7161];
            first[v7160] = v7162;
            v7159 = j < len;
        }
        const v7163 = len !== len;
        if (v7163) {
            const v7164 = second[j];
            let v7165 = v7164 !== undefined;
            while (v7165) {
                const v7166 = i++;
                const v7167 = j++;
                const v7168 = second[v7167];
                first[v7166] = v7168;
                v7165 = v7164 !== undefined;
            }
        }
        first.length = i;
        return first;
    };
    const v7179 = function (elems, callback, invert) {
        var callbackInverse;
        var matches = [];
        var i = 0;
        var length = elems.length;
        const v7170 = !invert;
        var callbackExpect = v7170;
        let v7171 = i < length;
        while (v7171) {
            const v7173 = elems[i];
            const v7174 = callback(v7173, i);
            const v7175 = !v7174;
            callbackInverse = v7175;
            const v7176 = callbackInverse !== callbackExpect;
            if (v7176) {
                const v7177 = elems[i];
                const v7178 = matches.push(v7177);
                v7178;
            }
            const v7172 = i++;
            v7171 = i < length;
        }
        return matches;
    };
    const v7190 = function (elems, callback, arg) {
        var value;
        var i = 0;
        var length = elems.length;
        var isArray = isArraylike(elems);
        var ret = [];
        if (isArray) {
            let v7180 = i < length;
            while (v7180) {
                const v7182 = elems[i];
                value = callback(v7182, i, arg);
                const v7183 = value != null;
                if (v7183) {
                    const v7184 = ret.push(value);
                    v7184;
                }
                const v7181 = i++;
                v7180 = i < length;
            }
        } else {
            for (i in elems) {
                const v7185 = elems[i];
                value = callback(v7185, i, arg);
                const v7186 = value != null;
                if (v7186) {
                    const v7187 = ret.push(value);
                    v7187;
                }
            }
        }
        const v7188 = [];
        const v7189 = concat.apply(v7188, ret);
        return v7189;
    };
    const v7203 = function (fn, context) {
        var args;
        var proxy;
        var tmp;
        const v7191 = typeof context;
        const v7192 = v7191 === 'string';
        if (v7192) {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }
        const v7193 = jQuery.isFunction(fn);
        const v7194 = !v7193;
        if (v7194) {
            return undefined;
        }
        args = slice.call(arguments, 2);
        const v7199 = function () {
            const v7195 = context || this;
            const v7196 = slice.call(arguments);
            const v7197 = args.concat(v7196);
            const v7198 = fn.apply(v7195, v7197);
            return v7198;
        };
        proxy = v7199;
        const v7200 = fn.guid;
        const v7201 = jQuery.guid;
        const v7202 = v7201++;
        fn.guid = v7200 || v7202;
        proxy.guid = fn.guid;
        return proxy;
    };
    const v7206 = function () {
        const v7204 = new Date();
        const v7205 = +v7204;
        return v7205;
    };
    const v7207 = {
        expando: v7028,
        isReady: true,
        error: v7030,
        noop: v7031,
        isFunction: v7034,
        isArray: v7039,
        isWindow: v7044,
        isNumeric: v7048,
        isEmptyObject: v7049,
        isPlainObject: v7072,
        type: v7085,
        globalEval: v7094,
        camelCase: v7097,
        nodeName: v7104,
        each: v7119,
        trim: v7132,
        makeArray: v7143,
        inArray: v7156,
        merge: v7169,
        grep: v7179,
        map: v7190,
        guid: 1,
        proxy: v7203,
        now: v7206,
        support: support
    };
    const v7208 = jQuery.extend(v7207);
    v7208;
    const v7209 = 'Boolean Number String Function Array Date RegExp Object Error'.split(' ');
    const v7213 = function (i, name) {
        const v7212 = name.toLowerCase();
        class2type[v7211] = v7212;
    };
    const v7214 = jQuery.each(v7209, v7213);
    v7214;
    const isArraylike = function (obj) {
        var length = obj.length;
        var type = jQuery.type(obj);
        const v7215 = type === 'function';
        const v7216 = jQuery.isWindow(obj);
        const v7217 = v7215 || v7216;
        if (v7217) {
            return false;
        }
        const v7218 = obj.nodeType;
        const v7219 = v7218 === 1;
        const v7220 = v7219 && length;
        if (v7220) {
            return true;
        }
        const v7221 = type === 'array';
        const v7222 = length === 0;
        const v7223 = v7221 || v7222;
        const v7224 = typeof length;
        const v7225 = v7224 === 'number';
        const v7226 = length > 0;
        const v7227 = v7225 && v7226;
        const v7228 = length - 1;
        const v7229 = v7228 in obj;
        const v7230 = v7227 && v7229;
        const v7231 = v7223 || v7230;
        return v7231;
    };
    const v8664 = function (window) {
        var i;
        var support;
        var Expr;
        var getText;
        var isXML;
        var compile;
        var outermostContext;
        var sortInput;
        var hasDuplicate;
        var setDocument;
        var document;
        var docElem;
        var documentIsHTML;
        var rbuggyQSA;
        var rbuggyMatches;
        var matches;
        var contains;
        const v7232 = new Date();
        const v7233 = -v7232;
        var expando = 'sizzle' + v7233;
        var preferredDoc = window.document;
        var dirruns = 0;
        var done = 0;
        var classCache = createCache();
        var tokenCache = createCache();
        var compilerCache = createCache();
        var sortOrder = function (a, b) {
            const v7234 = a === b;
            if (v7234) {
                hasDuplicate = true;
            }
            return 0;
        };
        const v7235 = typeof undefined;
        var strundefined = v7235;
        var MAX_NEGATIVE = 1 << 31;
        const v7236 = {};
        var hasOwn = v7236.hasOwnProperty;
        var arr = [];
        var pop = arr.pop;
        var push_native = arr.push;
        var push = arr.push;
        var slice = arr.slice;
        const v7237 = arr.indexOf;
        const v7243 = function (elem) {
            var i = 0;
            var len = this.length;
            let v7238 = i < len;
            while (v7238) {
                const v7240 = this[i];
                const v7241 = v7240 === elem;
                if (v7241) {
                    return i;
                }
                const v7239 = i++;
                v7238 = i < len;
            }
            const v7242 = -1;
            return v7242;
        };
        var indexOf = v7237 || v7243;
        var booleans = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped';
        var whitespace = '[\\x20\\t\\r\\n\\f]';
        var characterEncoding = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+';
        var identifier = characterEncoding.replace('w', 'w#');
        const v7244 = '\\[' + whitespace;
        const v7245 = v7244 + '*(';
        const v7246 = v7245 + characterEncoding;
        const v7247 = v7246 + ')';
        const v7248 = v7247 + whitespace;
        const v7249 = v7248 + '*(?:([*^$|!~]?=)';
        const v7250 = v7249 + whitespace;
        const v7251 = v7250 + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(';
        const v7252 = v7251 + identifier;
        const v7253 = v7252 + ')|)|)';
        const v7254 = v7253 + whitespace;
        var attributes = v7254 + '*\\]';
        const v7255 = ':(' + characterEncoding;
        const v7256 = v7255 + ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|';
        const v7257 = attributes.replace(3, 8);
        const v7258 = v7256 + v7257;
        var pseudos = v7258 + ')*)|.*)\\)|)';
        const v7259 = '^' + whitespace;
        const v7260 = v7259 + '+|((?:^|[^\\\\])(?:\\\\.)*)';
        const v7261 = v7260 + whitespace;
        const v7262 = v7261 + '+$';
        var rtrim = new RegExp(v7262, 'g');
        const v7263 = '^' + whitespace;
        const v7264 = v7263 + '*,';
        const v7265 = v7264 + whitespace;
        const v7266 = v7265 + '*';
        var rcomma = new RegExp(v7266);
        const v7267 = '^' + whitespace;
        const v7268 = v7267 + '*([>+~]|';
        const v7269 = v7268 + whitespace;
        const v7270 = v7269 + ')';
        const v7271 = v7270 + whitespace;
        const v7272 = v7271 + '*';
        var rcombinators = new RegExp(v7272);
        const v7273 = '=' + whitespace;
        const v7274 = v7273 + '*([^\\]\'"]*?)';
        const v7275 = v7274 + whitespace;
        const v7276 = v7275 + '*\\]';
        var rattributeQuotes = new RegExp(v7276, 'g');
        var rpseudo = new RegExp(pseudos);
        const v7277 = '^' + identifier;
        const v7278 = v7277 + '$';
        var ridentifier = new RegExp(v7278);
        const v7279 = '^#(' + characterEncoding;
        const v7280 = v7279 + ')';
        const v7281 = new RegExp(v7280);
        const v7282 = '^\\.(' + characterEncoding;
        const v7283 = v7282 + ')';
        const v7284 = new RegExp(v7283);
        const v7285 = characterEncoding.replace('w', 'w*');
        const v7286 = '^(' + v7285;
        const v7287 = v7286 + ')';
        const v7288 = new RegExp(v7287);
        const v7289 = '^' + attributes;
        const v7290 = new RegExp(v7289);
        const v7291 = '^' + pseudos;
        const v7292 = new RegExp(v7291);
        const v7293 = '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + whitespace;
        const v7294 = v7293 + '*(even|odd|(([+-]|)(\\d*)n|)';
        const v7295 = v7294 + whitespace;
        const v7296 = v7295 + '*(?:([+-]|)';
        const v7297 = v7296 + whitespace;
        const v7298 = v7297 + '*(\\d+)|))';
        const v7299 = v7298 + whitespace;
        const v7300 = v7299 + '*\\)|)';
        const v7301 = new RegExp(v7300, 'i');
        const v7302 = '^(?:' + booleans;
        const v7303 = v7302 + ')$';
        const v7304 = new RegExp(v7303, 'i');
        const v7305 = '^' + whitespace;
        const v7306 = v7305 + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(';
        const v7307 = v7306 + whitespace;
        const v7308 = v7307 + '*((?:-\\d)?\\d*)';
        const v7309 = v7308 + whitespace;
        const v7310 = v7309 + '*\\)|)(?=[^-]|$)';
        const v7311 = new RegExp(v7310, 'i');
        var matchExpr = {};
        matchExpr['ID'] = v7281;
        matchExpr['CLASS'] = v7284;
        matchExpr['TAG'] = v7288;
        matchExpr['ATTR'] = v7290;
        matchExpr['PSEUDO'] = v7292;
        matchExpr['CHILD'] = v7301;
        matchExpr['bool'] = v7304;
        matchExpr['needsContext'] = v7311;
        var rinputs = /^(?:input|select|textarea|button)$/i;
        var rheader = /^h\d$/i;
        var rnative = /^[^{]+\{\s*\[native \w/;
        var rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/;
        var rsibling = /[+~]/;
        var rescape = /'|\\/g;
        const v7312 = '\\\\([\\da-f]{1,6}' + whitespace;
        const v7313 = v7312 + '?|(';
        const v7314 = v7313 + whitespace;
        const v7315 = v7314 + ')|.)';
        var runescape = new RegExp(v7315, 'ig');
        var funescape = function (_, escaped, escapedWhitespace) {
            const v7316 = '0x' + escaped;
            var high = v7316 - 65536;
            const v7317 = high !== high;
            const v7318 = v7317 || escapedWhitespace;
            const v7319 = high < 0;
            const v7320 = high + 65536;
            const v7321 = String.fromCharCode(v7320);
            const v7322 = high >> 10;
            const v7323 = v7322 | 55296;
            const v7324 = high & 1023;
            const v7325 = v7324 | 56320;
            const v7326 = String.fromCharCode(v7323, v7325);
            let v7327;
            if (v7319) {
                v7327 = v7321;
            } else {
                v7327 = v7326;
            }
            let v7328;
            if (v7318) {
                v7328 = escaped;
            } else {
                v7328 = v7327;
            }
            return v7328;
        };
        try {
            const v7329 = preferredDoc.childNodes;
            const v7330 = preferredDoc.childNodes;
            const v7331 = push.apply(arr = slice.call(v7329), v7330);
            v7331;
            const v7332 = preferredDoc.childNodes;
            const v7333 = v7332.length;
            const v7334 = arr[v7333];
            const v7335 = v7334.nodeType;
            v7335;
        } catch (e) {
            const v7336 = arr.length;
            const v7339 = function (target, els) {
                const v7337 = slice.call(els);
                const v7338 = push_native.apply(target, v7337);
                v7338;
            };
            const v7343 = function (target, els) {
                var j = target.length;
                var i = 0;
                const v7340 = j++;
                const v7341 = i++;
                const v7342 = els[v7341];
                while (target[v7340] = v7342) {
                }
                target.length = j - 1;
            };
            let v7344;
            if (v7336) {
                v7344 = v7339;
            } else {
                v7344 = v7343;
            }
            push.apply = v7344;
            push = {};
            push = {};
        }
        const Sizzle = function (selector, context, results, seed) {
            var match;
            var elem;
            var m;
            var nodeType;
            var i;
            var groups;
            var old;
            var nid;
            var newContext;
            var newSelector;
            const v7345 = context.ownerDocument;
            const v7346 = v7345 || context;
            let v7347;
            if (context) {
                v7347 = v7346;
            } else {
                v7347 = preferredDoc;
            }
            const v7348 = v7347 !== document;
            if (v7348) {
                const v7349 = setDocument(context);
                v7349;
            }
            context = context || document;
            const v7350 = [];
            results = results || v7350;
            const v7351 = !selector;
            const v7352 = typeof selector;
            const v7353 = v7352 !== 'string';
            const v7354 = v7351 || v7353;
            if (v7354) {
                return results;
            }
            const v7355 = (nodeType = context.nodeType) !== 1;
            const v7356 = nodeType !== 9;
            const v7357 = v7355 && v7356;
            if (v7357) {
                const v7358 = [];
                return v7358;
            }
            const v7359 = !seed;
            const v7360 = documentIsHTML && v7359;
            if (v7360) {
                if (match = rquickExpr.exec(selector)) {
                    if (m = match[1]) {
                        const v7361 = nodeType === 9;
                        if (v7361) {
                            elem = context.getElementById(m);
                            const v7362 = elem.parentNode;
                            const v7363 = elem && v7362;
                            if (v7363) {
                                const v7364 = elem.id;
                                const v7365 = v7364 === m;
                                if (v7365) {
                                    const v7366 = results.push(elem);
                                    v7366;
                                    return results;
                                }
                            } else {
                                return results;
                            }
                        } else {
                            const v7367 = context.ownerDocument;
                            const v7368 = context.ownerDocument;
                            const v7369 = v7367 && (elem = v7368.getElementById(m));
                            const v7370 = contains(context, elem);
                            const v7371 = v7369 && v7370;
                            const v7372 = elem.id;
                            const v7373 = v7372 === m;
                            const v7374 = v7371 && v7373;
                            if (v7374) {
                                const v7375 = results.push(elem);
                                v7375;
                                return results;
                            }
                        }
                    } else {
                        const v7376 = match[2];
                        if (v7376) {
                            const v7377 = context.getElementsByTagName(selector);
                            const v7378 = push.apply(results, v7377);
                            v7378;
                            return results;
                        } else {
                            const v7379 = support.getElementsByClassName;
                            const v7380 = (m = match[3]) && v7379;
                            const v7381 = context.getElementsByClassName;
                            const v7382 = v7380 && v7381;
                            if (v7382) {
                                const v7383 = context.getElementsByClassName(m);
                                const v7384 = push.apply(results, v7383);
                                v7384;
                                return results;
                            }
                        }
                    }
                }
                const v7385 = support.qsa;
                const v7386 = !rbuggyQSA;
                const v7387 = rbuggyQSA.test(selector);
                const v7388 = !v7387;
                const v7389 = v7386 || v7388;
                const v7390 = v7385 && v7389;
                if (v7390) {
                    old = expando;
                    nid = old;
                    newContext = context;
                    const v7391 = nodeType === 9;
                    newSelector = v7391 && selector;
                    const v7392 = nodeType === 1;
                    const v7393 = context.nodeName;
                    const v7394 = v7393.toLowerCase();
                    const v7395 = v7394 !== 'object';
                    const v7396 = v7392 && v7395;
                    if (v7396) {
                        groups = tokenize(selector);
                        if (old = context.getAttribute('id')) {
                            nid = old.replace(rescape, '\\$&');
                        } else {
                            const v7397 = context.setAttribute('id', nid);
                            v7397;
                        }
                        const v7398 = '[id=\'' + nid;
                        nid = v7398 + '\'] ';
                        i = groups.length;
                        let v7399 = i--;
                        while (v7399) {
                            const v7400 = groups[i];
                            const v7401 = toSelector(v7400);
                            groups[i] = nid + v7401;
                            v7399 = i--;
                        }
                        const v7402 = rsibling.test(selector);
                        const v7403 = context.parentNode;
                        const v7404 = testContext(v7403);
                        const v7405 = v7402 && v7404;
                        newContext = v7405 || context;
                        newSelector = groups.join(',');
                    }
                    if (newSelector) {
                        try {
                            const v7406 = newContext.querySelectorAll(newSelector);
                            const v7407 = push.apply(results, v7406);
                            v7407;
                            return results;
                        } catch (qsaError) {
                        } finally {
                            const v7408 = !old;
                            if (v7408) {
                                const v7409 = context.removeAttribute('id');
                                v7409;
                            }
                        }
                    }
                }
            }
            const v7410 = selector.replace(rtrim, '$1');
            const v7411 = select(v7410, context, results, seed);
            return v7411;
        };
        const createCache = function () {
            var keys = [];
            const cache = function (key, value) {
                const v7412 = key + ' ';
                const v7413 = keys.push(v7412);
                const v7414 = Expr.cacheLength;
                const v7415 = v7413 > v7414;
                if (v7415) {
                    const v7416 = keys.shift();
                    const v7417 = cache[v7416];
                    const v7418 = delete v7417;
                    v7418;
                }
                const v7419 = key + ' ';
                return cache[v7419] = value;
            };
            return cache;
        };
        const markFunction = function (fn) {
            fn[expando] = true;
            return fn;
        };
        const assert = function (fn) {
            var div = document.createElement('div');
            try {
                const v7420 = fn(div);
                const v7421 = !v7420;
                const v7422 = !v7421;
                return v7422;
            } catch (e) {
                return false;
            } finally {
                const v7423 = div.parentNode;
                if (v7423) {
                    const v7424 = div.parentNode;
                    const v7425 = v7424.removeChild(div);
                    v7425;
                }
                div = null;
            }
        };
        const addHandle = function (attrs, handler) {
            var arr = attrs.split('|');
            var i = attrs.length;
            let v7426 = i--;
            while (v7426) {
                const v7427 = Expr.attrHandle;
                const v7428 = arr[i];
                v7427[v7428] = handler;
                v7426 = i--;
            }
        };
        const siblingCheck = function (a, b) {
            var cur = b && a;
            const v7429 = a.nodeType;
            const v7430 = v7429 === 1;
            const v7431 = cur && v7430;
            const v7432 = b.nodeType;
            const v7433 = v7432 === 1;
            const v7434 = v7431 && v7433;
            const v7435 = b.sourceIndex;
            const v7436 = ~v7435;
            const v7437 = v7436 || MAX_NEGATIVE;
            const v7438 = a.sourceIndex;
            const v7439 = ~v7438;
            const v7440 = v7439 || MAX_NEGATIVE;
            const v7441 = v7437 - v7440;
            var diff = v7434 && v7441;
            if (diff) {
                return diff;
            }
            if (cur) {
                while (cur = cur.nextSibling) {
                    const v7442 = cur === b;
                    if (v7442) {
                        const v7443 = -1;
                        return v7443;
                    }
                }
            }
            const v7444 = -1;
            let v7445;
            if (a) {
                v7445 = 1;
            } else {
                v7445 = v7444;
            }
            return v7445;
        };
        const createInputPseudo = function (type) {
            const v7451 = function (elem) {
                const v7446 = elem.nodeName;
                var name = v7446.toLowerCase();
                const v7447 = name === 'input';
                const v7448 = elem.type;
                const v7449 = v7448 === type;
                const v7450 = v7447 && v7449;
                return v7450;
            };
            return v7451;
        };
        const createButtonPseudo = function (type) {
            const v7459 = function (elem) {
                const v7452 = elem.nodeName;
                var name = v7452.toLowerCase();
                const v7453 = name === 'input';
                const v7454 = name === 'button';
                const v7455 = v7453 || v7454;
                const v7456 = elem.type;
                const v7457 = v7456 === type;
                const v7458 = v7455 && v7457;
                return v7458;
            };
            return v7459;
        };
        const createPositionalPseudo = function (fn) {
            const v7469 = function (argument) {
                const v7460 = +argument;
                argument = v7460;
                const v7467 = function (seed, matches) {
                    var j;
                    const v7461 = [];
                    const v7462 = seed.length;
                    var matchIndexes = fn(v7461, v7462, argument);
                    var i = matchIndexes.length;
                    let v7463 = i--;
                    while (v7463) {
                        const v7464 = seed[j = matchIndexes[i]];
                        if (v7464) {
                            const v7465 = seed[j];
                            const v7466 = !(matches[j] = v7465);
                            seed[j] = v7466;
                        }
                        v7463 = i--;
                    }
                };
                const v7468 = markFunction(v7467);
                return v7468;
            };
            const v7470 = markFunction(v7469);
            return v7470;
        };
        const testContext = function (context) {
            const v7471 = context.getElementsByTagName;
            const v7472 = typeof v7471;
            const v7473 = v7472 !== strundefined;
            const v7474 = context && v7473;
            const v7475 = v7474 && context;
            return v7475;
        };
        const v7476 = {};
        Sizzle.support = v7476;
        support = Sizzle.support;
        const v7483 = function (elem) {
            const v7477 = elem.ownerDocument;
            const v7478 = v7477 || elem;
            const v7479 = v7478.documentElement;
            var documentElement = elem && v7479;
            const v7480 = documentElement.nodeName;
            const v7481 = v7480 !== 'HTML';
            let v7482;
            if (documentElement) {
                v7482 = v7481;
            } else {
                v7482 = false;
            }
            return v7482;
        };
        Sizzle.isXML = v7483;
        isXML = Sizzle.isXML;
        const v7742 = function (node) {
            var hasCompare;
            let doc;
            const v7484 = node.ownerDocument;
            const v7485 = v7484 || node;
            if (node) {
                doc = v7485;
            } else {
                doc = preferredDoc;
            }
            var parent = doc.defaultView;
            const v7486 = doc === document;
            const v7487 = doc.nodeType;
            const v7488 = v7487 !== 9;
            const v7489 = v7486 || v7488;
            const v7490 = doc.documentElement;
            const v7491 = !v7490;
            const v7492 = v7489 || v7491;
            if (v7492) {
                return document;
            }
            document = doc;
            docElem = doc.documentElement;
            const v7493 = isXML(doc);
            const v7494 = !v7493;
            documentIsHTML = v7494;
            const v7495 = parent.top;
            const v7496 = parent !== v7495;
            const v7497 = parent && v7496;
            if (v7497) {
                const v7498 = parent.addEventListener;
                if (v7498) {
                    const v7500 = function () {
                        const v7499 = setDocument();
                        v7499;
                    };
                    const v7501 = parent.addEventListener('unload', v7500, false);
                    v7501;
                } else {
                    const v7502 = parent.attachEvent;
                    if (v7502) {
                        const v7504 = function () {
                            const v7503 = setDocument();
                            v7503;
                        };
                        const v7505 = parent.attachEvent('onunload', v7504);
                        v7505;
                    }
                }
            }
            const v7508 = function (div) {
                div.className = 'i';
                const v7506 = div.getAttribute('className');
                const v7507 = !v7506;
                return v7507;
            };
            const v7509 = assert(v7508);
            support.attributes = v7509;
            const v7515 = function (div) {
                const v7510 = doc.createComment('');
                const v7511 = div.appendChild(v7510);
                v7511;
                const v7512 = div.getElementsByTagName('*');
                const v7513 = v7512.length;
                const v7514 = !v7513;
                return v7514;
            };
            const v7516 = assert(v7515);
            support.getElementsByTagName = v7516;
            const v7517 = doc.getElementsByClassName;
            const v7518 = rnative.test(v7517);
            const v7523 = function (div) {
                div.innerHTML = '<div class=\'a\'></div><div class=\'a i\'></div>';
                const v7519 = div.firstChild;
                v7519.className = 'i';
                const v7520 = div.getElementsByClassName('i');
                const v7521 = v7520.length;
                const v7522 = v7521 === 2;
                return v7522;
            };
            const v7524 = assert(v7523);
            support.getElementsByClassName = v7518 && v7524;
            const v7532 = function (div) {
                const v7525 = docElem.appendChild(div);
                v7525.id = expando;
                const v7526 = doc.getElementsByName;
                const v7527 = !v7526;
                const v7528 = doc.getElementsByName(expando);
                const v7529 = v7528.length;
                const v7530 = !v7529;
                const v7531 = v7527 || v7530;
                return v7531;
            };
            const v7533 = assert(v7532);
            support.getById = v7533;
            const v7534 = support.getById;
            if (v7534) {
                const v7535 = Expr.find;
                const v7545 = function (id, context) {
                    const v7536 = context.getElementById;
                    const v7537 = typeof v7536;
                    const v7538 = v7537 !== strundefined;
                    const v7539 = v7538 && documentIsHTML;
                    if (v7539) {
                        var m = context.getElementById(id);
                        const v7540 = m.parentNode;
                        const v7541 = m && v7540;
                        const v7542 = [m];
                        const v7543 = [];
                        let v7544;
                        if (v7541) {
                            v7544 = v7542;
                        } else {
                            v7544 = v7543;
                        }
                        return v7544;
                    }
                };
                v7535['ID'] = v7545;
                const v7546 = Expr.filter;
                const v7550 = function (id) {
                    var attrId = id.replace(runescape, funescape);
                    const v7549 = function (elem) {
                        const v7547 = elem.getAttribute('id');
                        const v7548 = v7547 === attrId;
                        return v7548;
                    };
                    return v7549;
                };
                v7546['ID'] = v7550;
            } else {
                const v7551 = Expr.find;
                const v7552 = v7551['ID'];
                const v7553 = delete v7552;
                v7553;
                const v7554 = Expr.filter;
                const v7563 = function (id) {
                    var attrId = id.replace(runescape, funescape);
                    const v7562 = function (elem) {
                        const v7555 = elem.getAttributeNode;
                        const v7556 = typeof v7555;
                        const v7557 = v7556 !== strundefined;
                        const v7558 = elem.getAttributeNode('id');
                        var node = v7557 && v7558;
                        const v7559 = node.value;
                        const v7560 = v7559 === attrId;
                        const v7561 = node && v7560;
                        return v7561;
                    };
                    return v7562;
                };
                v7554['ID'] = v7563;
            }
            const v7564 = Expr.find;
            const v7565 = support.getElementsByTagName;
            const v7570 = function (tag, context) {
                const v7566 = context.getElementsByTagName;
                const v7567 = typeof v7566;
                const v7568 = v7567 !== strundefined;
                if (v7568) {
                    const v7569 = context.getElementsByTagName(tag);
                    return v7569;
                }
            };
            const v7576 = function (tag, context) {
                var elem;
                var tmp = [];
                var i = 0;
                var results = context.getElementsByTagName(tag);
                const v7571 = tag === '*';
                if (v7571) {
                    const v7572 = i++;
                    while (elem = results[v7572]) {
                        const v7573 = elem.nodeType;
                        const v7574 = v7573 === 1;
                        if (v7574) {
                            const v7575 = tmp.push(elem);
                            v7575;
                        }
                    }
                    return tmp;
                }
                return results;
            };
            let v7577;
            if (v7565) {
                v7577 = v7570;
            } else {
                v7577 = v7576;
            }
            v7564['TAG'] = v7577;
            const v7578 = Expr.find;
            const v7579 = support.getElementsByClassName;
            const v7585 = function (className, context) {
                const v7580 = context.getElementsByClassName;
                const v7581 = typeof v7580;
                const v7582 = v7581 !== strundefined;
                const v7583 = v7582 && documentIsHTML;
                if (v7583) {
                    const v7584 = context.getElementsByClassName(className);
                    return v7584;
                }
            };
            v7578['CLASS'] = v7579 && v7585;
            rbuggyMatches = [];
            rbuggyQSA = [];
            const v7586 = doc.querySelectorAll;
            const v7587 = rnative.test(v7586);
            if (support.qsa = v7587) {
                const v7605 = function (div) {
                    div.innerHTML = '<select t=\'\'><option selected=\'\'></option></select>';
                    const v7588 = div.querySelectorAll('[t^=\'\']');
                    const v7589 = v7588.length;
                    if (v7589) {
                        const v7590 = '[*^$]=' + whitespace;
                        const v7591 = v7590 + '*(?:\'\'|"")';
                        const v7592 = rbuggyQSA.push(v7591);
                        v7592;
                    }
                    const v7593 = div.querySelectorAll('[selected]');
                    const v7594 = v7593.length;
                    const v7595 = !v7594;
                    if (v7595) {
                        const v7596 = '\\[' + whitespace;
                        const v7597 = v7596 + '*(?:value|';
                        const v7598 = v7597 + booleans;
                        const v7599 = v7598 + ')';
                        const v7600 = rbuggyQSA.push(v7599);
                        v7600;
                    }
                    const v7601 = div.querySelectorAll(':checked');
                    const v7602 = v7601.length;
                    const v7603 = !v7602;
                    if (v7603) {
                        const v7604 = rbuggyQSA.push(':checked');
                        v7604;
                    }
                };
                const v7606 = assert(v7605);
                v7606;
                const v7621 = function (div) {
                    var input = doc.createElement('input');
                    const v7607 = input.setAttribute('type', 'hidden');
                    v7607;
                    const v7608 = div.appendChild(input);
                    const v7609 = v7608.setAttribute('name', 'D');
                    v7609;
                    const v7610 = div.querySelectorAll('[name=d]');
                    const v7611 = v7610.length;
                    if (v7611) {
                        const v7612 = 'name' + whitespace;
                        const v7613 = v7612 + '*[*^$|!~]?=';
                        const v7614 = rbuggyQSA.push(v7613);
                        v7614;
                    }
                    const v7615 = div.querySelectorAll(':enabled');
                    const v7616 = v7615.length;
                    const v7617 = !v7616;
                    if (v7617) {
                        const v7618 = rbuggyQSA.push(':enabled', ':disabled');
                        v7618;
                    }
                    const v7619 = div.querySelectorAll('*,:x');
                    v7619;
                    const v7620 = rbuggyQSA.push(',.*:');
                    v7620;
                };
                const v7622 = assert(v7621);
                v7622;
            }
            const v7623 = docElem.webkitMatchesSelector;
            const v7624 = docElem.mozMatchesSelector;
            const v7625 = v7623 || v7624;
            const v7626 = docElem.oMatchesSelector;
            const v7627 = v7625 || v7626;
            const v7628 = docElem.msMatchesSelector;
            matches = docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector;
            const v7629 = rnative.test(matches);
            if (support.matchesSelector = v7629) {
                const v7633 = function (div) {
                    const v7630 = matches.call(div, 'div');
                    support.disconnectedMatch = v7630;
                    const v7631 = matches.call(div, '[s!=\'\']:x');
                    v7631;
                    const v7632 = rbuggyMatches.push('!=', pseudos);
                    v7632;
                };
                const v7634 = assert(v7633);
                v7634;
            }
            const v7635 = rbuggyQSA.length;
            const v7636 = rbuggyQSA.join('|');
            const v7637 = new RegExp(v7636);
            rbuggyQSA = v7635 && v7637;
            const v7638 = rbuggyMatches.length;
            const v7639 = rbuggyMatches.join('|');
            const v7640 = new RegExp(v7639);
            rbuggyMatches = v7638 && v7640;
            const v7641 = docElem.compareDocumentPosition;
            hasCompare = rnative.test(v7641);
            const v7642 = docElem.contains;
            const v7643 = rnative.test(v7642);
            const v7644 = hasCompare || v7643;
            const v7664 = function (a, b) {
                let adown;
                const v7645 = a.nodeType;
                const v7646 = v7645 === 9;
                const v7647 = a.documentElement;
                if (v7646) {
                    adown = v7647;
                } else {
                    adown = a;
                }
                const v7648 = b.parentNode;
                var bup = b && v7648;
                const v7649 = a === bup;
                const v7650 = bup.nodeType;
                const v7651 = v7650 === 1;
                const v7652 = bup && v7651;
                const v7653 = adown.contains;
                const v7654 = adown.contains(bup);
                const v7655 = a.compareDocumentPosition;
                const v7656 = a.compareDocumentPosition(bup);
                const v7657 = v7656 & 16;
                const v7658 = v7655 && v7657;
                let v7659;
                if (v7653) {
                    v7659 = v7654;
                } else {
                    v7659 = v7658;
                }
                const v7660 = v7652 && v7659;
                const v7661 = !v7660;
                const v7662 = !v7661;
                const v7663 = v7649 || v7662;
                return v7663;
            };
            const v7666 = function (a, b) {
                if (b) {
                    while (b = b.parentNode) {
                        const v7665 = b === a;
                        if (v7665) {
                            return true;
                        }
                    }
                }
                return false;
            };
            if (v7644) {
                contains = v7664;
            } else {
                contains = v7666;
            }
            const v7705 = function (a, b) {
                const v7667 = a === b;
                if (v7667) {
                    hasDuplicate = true;
                    return 0;
                }
                const v7668 = a.compareDocumentPosition;
                const v7669 = !v7668;
                const v7670 = b.compareDocumentPosition;
                const v7671 = !v7670;
                var compare = v7669 - v7671;
                if (compare) {
                    return compare;
                }
                const v7672 = a.ownerDocument;
                const v7673 = v7672 || a;
                const v7674 = b.ownerDocument;
                const v7675 = v7674 || b;
                const v7676 = v7673 === v7675;
                const v7677 = a.compareDocumentPosition(b);
                if (v7676) {
                    compare = v7677;
                } else {
                    compare = 1;
                }
                const v7678 = compare & 1;
                const v7679 = support.sortDetached;
                const v7680 = !v7679;
                const v7681 = b.compareDocumentPosition(a);
                const v7682 = v7681 === compare;
                const v7683 = v7680 && v7682;
                const v7684 = v7678 || v7683;
                if (v7684) {
                    const v7685 = a === doc;
                    const v7686 = a.ownerDocument;
                    const v7687 = v7686 === preferredDoc;
                    const v7688 = contains(preferredDoc, a);
                    const v7689 = v7687 && v7688;
                    const v7690 = v7685 || v7689;
                    if (v7690) {
                        const v7691 = -1;
                        return v7691;
                    }
                    const v7692 = b === doc;
                    const v7693 = b.ownerDocument;
                    const v7694 = v7693 === preferredDoc;
                    const v7695 = contains(preferredDoc, b);
                    const v7696 = v7694 && v7695;
                    const v7697 = v7692 || v7696;
                    if (v7697) {
                        return 1;
                    }
                    const v7698 = indexOf.call(sortInput, a);
                    const v7699 = indexOf.call(sortInput, b);
                    const v7700 = v7698 - v7699;
                    let v7701;
                    if (sortInput) {
                        v7701 = v7700;
                    } else {
                        v7701 = 0;
                    }
                    return v7701;
                }
                const v7702 = compare & 4;
                const v7703 = -1;
                let v7704;
                if (v7702) {
                    v7704 = v7703;
                } else {
                    v7704 = 1;
                }
                return v7704;
            };
            const v7741 = function (a, b) {
                const v7706 = a === b;
                if (v7706) {
                    hasDuplicate = true;
                    return 0;
                }
                var cur;
                var i = 0;
                var aup = a.parentNode;
                var bup = b.parentNode;
                var ap = [a];
                var bp = [b];
                const v7707 = !aup;
                const v7708 = !bup;
                const v7709 = v7707 || v7708;
                if (v7709) {
                    const v7710 = a === doc;
                    const v7711 = -1;
                    const v7712 = b === doc;
                    const v7713 = -1;
                    const v7714 = indexOf.call(sortInput, a);
                    const v7715 = indexOf.call(sortInput, b);
                    const v7716 = v7714 - v7715;
                    let v7717;
                    if (sortInput) {
                        v7717 = v7716;
                    } else {
                        v7717 = 0;
                    }
                    let v7718;
                    if (bup) {
                        v7718 = 1;
                    } else {
                        v7718 = v7717;
                    }
                    let v7719;
                    if (aup) {
                        v7719 = v7713;
                    } else {
                        v7719 = v7718;
                    }
                    let v7720;
                    if (v7712) {
                        v7720 = 1;
                    } else {
                        v7720 = v7719;
                    }
                    let v7721;
                    if (v7710) {
                        v7721 = v7711;
                    } else {
                        v7721 = v7720;
                    }
                    return v7721;
                } else {
                    const v7722 = aup === bup;
                    if (v7722) {
                        const v7723 = siblingCheck(a, b);
                        return v7723;
                    }
                }
                cur = a;
                while (cur = cur.parentNode) {
                    const v7724 = ap.unshift(cur);
                    v7724;
                }
                cur = b;
                while (cur = cur.parentNode) {
                    const v7725 = bp.unshift(cur);
                    v7725;
                }
                const v7726 = ap[i];
                const v7727 = bp[i];
                let v7728 = v7726 === v7727;
                while (v7728) {
                    const v7729 = i++;
                    v7729;
                    v7728 = v7726 === v7727;
                }
                const v7730 = ap[i];
                const v7731 = bp[i];
                const v7732 = siblingCheck(v7730, v7731);
                const v7733 = ap[i];
                const v7734 = v7733 === preferredDoc;
                const v7735 = -1;
                const v7736 = bp[i];
                const v7737 = v7736 === preferredDoc;
                let v7738;
                if (v7737) {
                    v7738 = 1;
                } else {
                    v7738 = 0;
                }
                let v7739;
                if (v7734) {
                    v7739 = v7735;
                } else {
                    v7739 = v7738;
                }
                let v7740;
                if (i) {
                    v7740 = v7732;
                } else {
                    v7740 = v7739;
                }
                return v7740;
            };
            if (hasCompare) {
                sortOrder = v7705;
            } else {
                sortOrder = v7741;
            }
            return doc;
        };
        Sizzle.setDocument = v7742;
        setDocument = Sizzle.setDocument;
        const v7744 = function (expr, elements) {
            const v7743 = Sizzle(expr, null, null, elements);
            return v7743;
        };
        Sizzle.matches = v7744;
        const v7773 = function (elem, expr) {
            const v7745 = elem.ownerDocument;
            const v7746 = v7745 || elem;
            const v7747 = v7746 !== document;
            if (v7747) {
                const v7748 = setDocument(elem);
                v7748;
            }
            expr = expr.replace(rattributeQuotes, '=\'$1\']');
            const v7749 = support.matchesSelector;
            const v7750 = v7749 && documentIsHTML;
            const v7751 = !rbuggyMatches;
            const v7752 = rbuggyMatches.test(expr);
            const v7753 = !v7752;
            const v7754 = v7751 || v7753;
            const v7755 = v7750 && v7754;
            const v7756 = !rbuggyQSA;
            const v7757 = rbuggyQSA.test(expr);
            const v7758 = !v7757;
            const v7759 = v7756 || v7758;
            const v7760 = v7755 && v7759;
            if (v7760) {
                try {
                    var ret = matches.call(elem, expr);
                    const v7761 = support.disconnectedMatch;
                    const v7762 = ret || v7761;
                    const v7763 = elem.document;
                    const v7764 = elem.document;
                    const v7765 = v7764.nodeType;
                    const v7766 = v7765 !== 11;
                    const v7767 = v7763 && v7766;
                    const v7768 = v7762 || v7767;
                    if (v7768) {
                        return ret;
                    }
                } catch (e) {
                }
            }
            const v7769 = [elem];
            const v7770 = Sizzle(expr, document, null, v7769);
            const v7771 = v7770.length;
            const v7772 = v7771 > 0;
            return v7772;
        };
        Sizzle.matchesSelector = v7773;
        const v7779 = function (context, elem) {
            const v7774 = context.ownerDocument;
            const v7775 = v7774 || context;
            const v7776 = v7775 !== document;
            if (v7776) {
                const v7777 = setDocument(context);
                v7777;
            }
            const v7778 = contains(context, elem);
            return v7778;
        };
        Sizzle.contains = v7779;
        const v7803 = function (elem, name) {
            const v7780 = elem.ownerDocument;
            const v7781 = v7780 || elem;
            const v7782 = v7781 !== document;
            if (v7782) {
                const v7783 = setDocument(elem);
                v7783;
            }
            const v7784 = Expr.attrHandle;
            const v7785 = name.toLowerCase();
            var fn = v7784[v7785];
            let val;
            const v7786 = Expr.attrHandle;
            const v7787 = name.toLowerCase();
            const v7788 = hasOwn.call(v7786, v7787);
            const v7789 = fn && v7788;
            const v7790 = !documentIsHTML;
            const v7791 = fn(elem, name, v7790);
            if (v7789) {
                val = v7791;
            } else {
                val = undefined;
            }
            const v7792 = val !== undefined;
            const v7793 = support.attributes;
            const v7794 = !documentIsHTML;
            const v7795 = v7793 || v7794;
            const v7796 = elem.getAttribute(name);
            const v7797 = val.specified;
            const v7798 = (val = elem.getAttributeNode(name)) && v7797;
            const v7799 = val.value;
            let v7800;
            if (v7798) {
                v7800 = v7799;
            } else {
                v7800 = null;
            }
            let v7801;
            if (v7795) {
                v7801 = v7796;
            } else {
                v7801 = v7800;
            }
            let v7802;
            if (v7792) {
                v7802 = val;
            } else {
                v7802 = v7801;
            }
            return v7802;
        };
        Sizzle.attr = v7803;
        const v7806 = function (msg) {
            const v7804 = 'Syntax error, unrecognized expression: ' + msg;
            const v7805 = new Error(v7804);
            throw v7805;
        };
        Sizzle.error = v7806;
        const v7819 = function (results) {
            var elem;
            var duplicates = [];
            var j = 0;
            var i = 0;
            const v7807 = support.detectDuplicates;
            const v7808 = !v7807;
            hasDuplicate = v7808;
            const v7809 = support.sortStable;
            const v7810 = !v7809;
            const v7811 = results.slice(0);
            sortInput = v7810 && v7811;
            const v7812 = results.sort(sortOrder);
            v7812;
            if (hasDuplicate) {
                const v7813 = i++;
                while (elem = results[v7813]) {
                    const v7814 = results[i];
                    const v7815 = elem === v7814;
                    if (v7815) {
                        j = duplicates.push(i);
                    }
                }
                let v7816 = j--;
                while (v7816) {
                    const v7817 = duplicates[j];
                    const v7818 = results.splice(v7817, 1);
                    v7818;
                    v7816 = j--;
                }
            }
            sortInput = null;
            return results;
        };
        Sizzle.uniqueSort = v7819;
        const v7835 = function (elem) {
            var node;
            var ret = '';
            var i = 0;
            var nodeType = elem.nodeType;
            const v7820 = !nodeType;
            if (v7820) {
                const v7821 = i++;
                while (node = elem[v7821]) {
                    ret += getText(node);
                }
            } else {
                const v7822 = nodeType === 1;
                const v7823 = nodeType === 9;
                const v7824 = v7822 || v7823;
                const v7825 = nodeType === 11;
                const v7826 = v7824 || v7825;
                if (v7826) {
                    const v7827 = elem.textContent;
                    const v7828 = typeof v7827;
                    const v7829 = v7828 === 'string';
                    if (v7829) {
                        const v7830 = elem.textContent;
                        return v7830;
                    } else {
                        elem = elem.firstChild
                        while (elem) {
                            ret += getText(elem);
                        }
                    }
                } else {
                    const v7831 = nodeType === 3;
                    const v7832 = nodeType === 4;
                    const v7833 = v7831 || v7832;
                    if (v7833) {
                        const v7834 = elem.nodeValue;
                        return v7834;
                    }
                }
            }
            return ret;
        };
        Sizzle.getText = v7835;
        getText = Sizzle.getText;
        const v7836 = {};
        const v7837 = {};
        const v7838 = {};
        v7838.dir = 'parentNode';
        v7838.first = true;
        const v7839 = {};
        v7839.dir = 'parentNode';
        const v7840 = {};
        v7840.dir = 'previousSibling';
        v7840.first = true;
        const v7841 = {};
        v7841.dir = 'previousSibling';
        const v7842 = {};
        v7842['>'] = v7838;
        v7842[' '] = v7839;
        v7842['+'] = v7840;
        v7842['~'] = v7841;
        const v7855 = function (match) {
            const v7843 = match[1];
            const v7844 = v7843.replace(runescape, funescape);
            match[1] = v7844;
            const v7845 = match[4];
            const v7846 = match[5];
            const v7847 = v7845 || v7846;
            const v7848 = v7847 || '';
            const v7849 = v7848.replace(runescape, funescape);
            match[3] = v7849;
            const v7850 = match[2];
            const v7851 = v7850 === '~=';
            if (v7851) {
                const v7852 = match[3];
                const v7853 = ' ' + v7852;
                match[3] = v7853 + ' ';
            }
            const v7854 = match.slice(0, 4);
            return v7854;
        };
        const v7888 = function (match) {
            const v7856 = match[1];
            const v7857 = v7856.toLowerCase();
            match[1] = v7857;
            const v7858 = match[1];
            const v7859 = v7858.slice(0, 3);
            const v7860 = v7859 === 'nth';
            if (v7860) {
                const v7861 = match[3];
                const v7862 = !v7861;
                if (v7862) {
                    const v7863 = match[0];
                    const v7864 = Sizzle.error(v7863);
                    v7864;
                }
                const v7865 = match[4];
                const v7866 = match[5];
                const v7867 = match[6];
                const v7868 = v7867 || 1;
                const v7869 = v7866 + v7868;
                const v7870 = match[3];
                const v7871 = v7870 === 'even';
                const v7872 = match[3];
                const v7873 = v7872 === 'odd';
                const v7874 = v7871 || v7873;
                const v7875 = 2 * v7874;
                let v7876;
                if (v7865) {
                    v7876 = v7869;
                } else {
                    v7876 = v7875;
                }
                const v7877 = +v7876;
                match[4] = v7877;
                const v7878 = match[7];
                const v7879 = match[8];
                const v7880 = v7878 + v7879;
                const v7881 = match[3];
                const v7882 = v7881 === 'odd';
                const v7883 = v7880 || v7882;
                const v7884 = +v7883;
                match[5] = v7884;
            } else {
                const v7885 = match[3];
                if (v7885) {
                    const v7886 = match[0];
                    const v7887 = Sizzle.error(v7886);
                    v7887;
                }
            }
            return match;
        };
        const v7912 = function (match) {
            var excess;
            const v7889 = match[5];
            const v7890 = !v7889;
            const v7891 = match[2];
            var unquoted = v7890 && v7891;
            const v7892 = matchExpr['CHILD'];
            const v7893 = match[0];
            const v7894 = v7892.test(v7893);
            if (v7894) {
                return null;
            }
            const v7895 = match[3];
            const v7896 = match[4];
            const v7897 = v7896 !== undefined;
            const v7898 = v7895 && v7897;
            if (v7898) {
                const v7899 = match[4];
                match[2] = v7899;
            } else {
                const v7900 = rpseudo.test(unquoted);
                const v7901 = unquoted && v7900;
                const v7902 = v7901 && (excess = tokenize(unquoted, true));
                const v7903 = unquoted.length;
                const v7904 = v7903 - excess;
                const v7905 = unquoted.indexOf(')', v7904);
                const v7906 = unquoted.length;
                const v7907 = v7902 && (excess = v7905 - v7906);
                if (v7907) {
                    const v7908 = match[0];
                    const v7909 = v7908.slice(0, excess);
                    match[0] = v7909;
                    const v7910 = unquoted.slice(0, excess);
                    match[2] = v7910;
                }
            }
            const v7911 = match.slice(0, 3);
            return v7911;
        };
        const v7913 = {};
        v7913['ATTR'] = v7855;
        v7913['CHILD'] = v7888;
        v7913['PSEUDO'] = v7912;
        const v7924 = function (nodeNameSelector) {
            const v7914 = nodeNameSelector.replace(runescape, funescape);
            var nodeName = v7914.toLowerCase();
            const v7915 = nodeNameSelector === '*';
            const v7916 = function () {
                return true;
            };
            const v7922 = function (elem) {
                const v7917 = elem.nodeName;
                const v7918 = elem.nodeName;
                const v7919 = v7918.toLowerCase();
                const v7920 = v7919 === nodeName;
                const v7921 = v7917 && v7920;
                return v7921;
            };
            let v7923;
            if (v7915) {
                v7923 = v7916;
            } else {
                v7923 = v7922;
            }
            return v7923;
        };
        const v7949 = function (className) {
            const v7925 = className + ' ';
            var pattern = classCache[v7925];
            const v7926 = '(^|' + whitespace;
            const v7927 = v7926 + ')';
            const v7928 = v7927 + className;
            const v7929 = v7928 + '(';
            const v7930 = v7929 + whitespace;
            const v7931 = v7930 + '|$)';
            const v7945 = function (elem) {
                const v7932 = elem.className;
                const v7933 = typeof v7932;
                const v7934 = v7933 === 'string';
                const v7935 = elem.className;
                const v7936 = v7934 && v7935;
                const v7937 = elem.getAttribute;
                const v7938 = typeof v7937;
                const v7939 = v7938 !== strundefined;
                const v7940 = elem.getAttribute('class');
                const v7941 = v7939 && v7940;
                const v7942 = v7936 || v7941;
                const v7943 = v7942 || '';
                const v7944 = pattern.test(v7943);
                return v7944;
            };
            const v7946 = classCache(className, v7945);
            const v7947 = (pattern = new RegExp(v7931)) && v7946;
            const v7948 = pattern || v7947;
            return v7948;
        };
        const v7994 = function (name, operator, check) {
            const v7993 = function (elem) {
                var result = Sizzle.attr(elem, name);
                const v7950 = result == null;
                if (v7950) {
                    const v7951 = operator === '!=';
                    return v7951;
                }
                const v7952 = !operator;
                if (v7952) {
                    return true;
                }
                result += '';
                const v7953 = operator === '=';
                const v7954 = result === check;
                const v7955 = operator === '!=';
                const v7956 = result !== check;
                const v7957 = operator === '^=';
                const v7958 = result.indexOf(check);
                const v7959 = v7958 === 0;
                const v7960 = check && v7959;
                const v7961 = operator === '*=';
                const v7962 = result.indexOf(check);
                const v7963 = -1;
                const v7964 = v7962 > v7963;
                const v7965 = check && v7964;
                const v7966 = operator === '$=';
                const v7967 = check.length;
                const v7968 = -v7967;
                const v7969 = result.slice(v7968);
                const v7970 = v7969 === check;
                const v7971 = check && v7970;
                const v7972 = operator === '~=';
                const v7973 = ' ' + result;
                const v7974 = v7973 + ' ';
                const v7975 = v7974.indexOf(check);
                const v7976 = -1;
                const v7977 = v7975 > v7976;
                const v7978 = operator === '|=';
                const v7979 = result === check;
                const v7980 = check.length;
                const v7981 = v7980 + 1;
                const v7982 = result.slice(0, v7981);
                const v7983 = check + '-';
                const v7984 = v7982 === v7983;
                const v7985 = v7979 || v7984;
                let v7986;
                if (v7978) {
                    v7986 = v7985;
                } else {
                    v7986 = false;
                }
                let v7987;
                if (v7972) {
                    v7987 = v7977;
                } else {
                    v7987 = v7986;
                }
                let v7988;
                if (v7966) {
                    v7988 = v7971;
                } else {
                    v7988 = v7987;
                }
                let v7989;
                if (v7961) {
                    v7989 = v7965;
                } else {
                    v7989 = v7988;
                }
                let v7990;
                if (v7957) {
                    v7990 = v7960;
                } else {
                    v7990 = v7989;
                }
                let v7991;
                if (v7955) {
                    v7991 = v7956;
                } else {
                    v7991 = v7990;
                }
                let v7992;
                if (v7953) {
                    v7992 = v7954;
                } else {
                    v7992 = v7991;
                }
                return v7992;
            };
            return v7993;
        };
        const v8081 = function (type, what, argument, first, last) {
            const v7995 = type.slice(0, 3);
            var simple = v7995 !== 'nth';
            const v7996 = -4;
            const v7997 = type.slice(v7996);
            var forward = v7997 !== 'last';
            var ofType = what === 'of-type';
            const v7998 = first === 1;
            const v7999 = last === 0;
            const v8000 = v7998 && v7999;
            const v8004 = function (elem) {
                const v8001 = elem.parentNode;
                const v8002 = !v8001;
                const v8003 = !v8002;
                return v8003;
            };
            const v8079 = function (elem, context, xml) {
                var cache;
                var outerCache;
                var node;
                var diff;
                var nodeIndex;
                var start;
                let dir;
                const v8005 = simple !== forward;
                if (v8005) {
                    dir = 'nextSibling';
                } else {
                    dir = 'previousSibling';
                }
                var parent = elem.parentNode;
                const v8006 = elem.nodeName;
                const v8007 = v8006.toLowerCase();
                var name = ofType && v8007;
                const v8008 = !xml;
                const v8009 = !ofType;
                var useCache = v8008 && v8009;
                if (parent) {
                    if (simple) {
                        while (dir) {
                            node = elem;
                            while (node = node[dir]) {
                                const v8010 = node.nodeName;
                                const v8011 = v8010.toLowerCase();
                                const v8012 = v8011 === name;
                                const v8013 = node.nodeType;
                                const v8014 = v8013 === 1;
                                let v8015;
                                if (ofType) {
                                    v8015 = v8012;
                                } else {
                                    v8015 = v8014;
                                }
                                if (v8015) {
                                    return false;
                                }
                            }
                            const v8016 = type === 'only';
                            const v8017 = !start;
                            const v8018 = v8016 && v8017;
                            dir = v8018 && 'nextSibling';
                            start = dir;
                        }
                        return true;
                    }
                    const v8019 = parent.firstChild;
                    const v8020 = parent.lastChild;
                    let v8021;
                    if (forward) {
                        v8021 = v8019;
                    } else {
                        v8021 = v8020;
                    }
                    start = [v8021];
                    const v8022 = forward && useCache;
                    if (v8022) {
                        const v8023 = parent[expando];
                        const v8024 = {};
                        outerCache = v8023 || (parent[expando] = v8024);
                        const v8025 = outerCache[type];
                        const v8026 = [];
                        cache = v8025 || v8026;
                        const v8027 = cache[0];
                        const v8028 = v8027 === dirruns;
                        const v8029 = cache[1];
                        nodeIndex = v8028 && v8029;
                        const v8030 = cache[0];
                        const v8031 = v8030 === dirruns;
                        const v8032 = cache[2];
                        diff = v8031 && v8032;
                        const v8033 = parent.childNodes;
                        const v8034 = v8033[nodeIndex];
                        node = nodeIndex && v8034;
                        const v8035 = ++nodeIndex;
                        const v8036 = v8035 && node;
                        const v8037 = node[dir];
                        const v8038 = v8036 && v8037;
                        nodeIndex = 0;
                        const v8039 = v8038 || (diff = nodeIndex);
                        const v8040 = start.pop();
                        while (node = v8039 || v8040) {
                            const v8041 = node.nodeType;
                            const v8042 = v8041 === 1;
                            const v8043 = ++diff;
                            const v8044 = v8042 && v8043;
                            const v8045 = node === elem;
                            const v8046 = v8044 && v8045;
                            if (v8046) {
                                outerCache[type] = [
                                    dirruns,
                                    nodeIndex,
                                    diff
                                ];
                                break;
                            }
                        }
                    } else {
                        const v8047 = elem[expando];
                        const v8048 = {};
                        const v8049 = v8047 || (elem[expando] = v8048);
                        const v8050 = useCache && (cache = v8049[type]);
                        const v8051 = cache[0];
                        const v8052 = v8051 === dirruns;
                        const v8053 = v8050 && v8052;
                        if (v8053) {
                            diff = cache[1];
                        } else {
                            const v8054 = ++nodeIndex;
                            const v8055 = v8054 && node;
                            const v8056 = node[dir];
                            const v8057 = v8055 && v8056;
                            nodeIndex = 0;
                            const v8058 = v8057 || (diff = nodeIndex);
                            const v8059 = start.pop();
                            while (node = v8058 || v8059) {
                                const v8060 = node.nodeName;
                                const v8061 = v8060.toLowerCase();
                                const v8062 = v8061 === name;
                                const v8063 = node.nodeType;
                                const v8064 = v8063 === 1;
                                let v8065;
                                if (ofType) {
                                    v8065 = v8062;
                                } else {
                                    v8065 = v8064;
                                }
                                const v8066 = ++diff;
                                const v8067 = v8065 && v8066;
                                if (v8067) {
                                    if (useCache) {
                                        const v8068 = node[expando];
                                        const v8069 = {};
                                        const v8070 = v8068 || (node[expando] = v8069);
                                        v8070[type] = [
                                            dirruns,
                                            diff
                                        ];
                                    }
                                    const v8071 = node === elem;
                                    if (v8071) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    diff -= last;
                    const v8072 = diff === first;
                    const v8073 = diff % first;
                    const v8074 = v8073 === 0;
                    const v8075 = diff / first;
                    const v8076 = v8075 >= 0;
                    const v8077 = v8074 && v8076;
                    const v8078 = v8072 || v8077;
                    return v8078;
                }
            };
            let v8080;
            if (v8000) {
                v8080 = v8004;
            } else {
                v8080 = v8079;
            }
            return v8080;
        };
        const v8106 = function (pseudo, argument) {
            var args;
            const v8082 = Expr.pseudos;
            const v8083 = v8082[pseudo];
            const v8084 = Expr.setFilters;
            const v8085 = pseudo.toLowerCase();
            const v8086 = v8084[v8085];
            const v8087 = v8083 || v8086;
            const v8088 = 'unsupported pseudo: ' + pseudo;
            const v8089 = Sizzle.error(v8088);
            var fn = v8087 || v8089;
            const v8090 = fn[expando];
            if (v8090) {
                const v8091 = fn(argument);
                return v8091;
            }
            const v8092 = fn.length;
            const v8093 = v8092 > 1;
            if (v8093) {
                args = [
                    pseudo,
                    pseudo,
                    '',
                    argument
                ];
                const v8094 = Expr.setFilters;
                const v8095 = pseudo.toLowerCase();
                const v8096 = v8094.hasOwnProperty(v8095);
                const v8101 = function (seed, matches) {
                    var idx;
                    var matched = fn(seed, argument);
                    var i = matched.length;
                    let v8097 = i--;
                    while (v8097) {
                        const v8098 = matched[i];
                        idx = indexOf.call(seed, v8098);
                        const v8099 = matched[i];
                        const v8100 = !(matches[idx] = v8099);
                        seed[idx] = v8100;
                        v8097 = i--;
                    }
                };
                const v8102 = markFunction(v8101);
                const v8104 = function (elem) {
                    const v8103 = fn(elem, 0, args);
                    return v8103;
                };
                let v8105;
                if (v8096) {
                    v8105 = v8102;
                } else {
                    v8105 = v8104;
                }
                return v8105;
            }
            return fn;
        };
        const v8107 = {};
        v8107['TAG'] = v7924;
        v8107['CLASS'] = v7949;
        v8107['ATTR'] = v7994;
        v8107['CHILD'] = v8081;
        v8107['PSEUDO'] = v8106;
        const v8120 = function (selector) {
            var input = [];
            var results = [];
            const v8108 = selector.replace(rtrim, '$1');
            var matcher = compile(v8108);
            const v8109 = matcher[expando];
            const v8113 = function (seed, matches, context, xml) {
                var elem;
                const v8110 = [];
                var unmatched = matcher(seed, null, xml, v8110);
                var i = seed.length;
                let v8111 = i--;
                while (v8111) {
                    if (elem = unmatched[i]) {
                        const v8112 = !(matches[i] = elem);
                        seed[i] = v8112;
                    }
                    v8111 = i--;
                }
            };
            const v8114 = markFunction(v8113);
            const v8118 = function (elem, context, xml) {
                input[0] = elem;
                const v8115 = matcher(input, null, xml, results);
                v8115;
                const v8116 = results.pop();
                const v8117 = !v8116;
                return v8117;
            };
            let v8119;
            if (v8109) {
                v8119 = v8114;
            } else {
                v8119 = v8118;
            }
            return v8119;
        };
        const v8121 = markFunction(v8120);
        const v8126 = function (selector) {
            const v8125 = function (elem) {
                const v8122 = Sizzle(selector, elem);
                const v8123 = v8122.length;
                const v8124 = v8123 > 0;
                return v8124;
            };
            return v8125;
        };
        const v8127 = markFunction(v8126);
        const v8137 = function (text) {
            const v8136 = function (elem) {
                const v8128 = elem.textContent;
                const v8129 = elem.innerText;
                const v8130 = v8128 || v8129;
                const v8131 = getText(elem);
                const v8132 = v8130 || v8131;
                const v8133 = v8132.indexOf(text);
                const v8134 = -1;
                const v8135 = v8133 > v8134;
                return v8135;
            };
            return v8136;
        };
        const v8138 = markFunction(v8137);
        const v8158 = function (lang) {
            const v8139 = lang || '';
            const v8140 = ridentifier.test(v8139);
            const v8141 = !v8140;
            if (v8141) {
                const v8142 = 'unsupported lang: ' + lang;
                const v8143 = Sizzle.error(v8142);
                v8143;
            }
            const v8144 = lang.replace(runescape, funescape);
            lang = v8144.toLowerCase();
            const v8157 = function (elem) {
                var elemLang;
                let v8147 = true;
                while (v8147) {
                    const v8148 = elem.lang;
                    const v8149 = elem.getAttribute('xml:lang');
                    const v8150 = elem.getAttribute('lang');
                    const v8151 = v8149 || v8150;
                    if (documentIsHTML) {
                        elemLang = v8148;
                    } else {
                        elemLang = v8151;
                    }
                    if (elemLang) {
                        elemLang = elemLang.toLowerCase();
                        const v8152 = elemLang === lang;
                        const v8153 = lang + '-';
                        const v8154 = elemLang.indexOf(v8153);
                        const v8155 = v8154 === 0;
                        const v8156 = v8152 || v8155;
                        return v8156;
                    }
                    v8147 = (elem = elem.parentNode) && v8146;
                }
                return false;
            };
            return v8157;
        };
        const v8159 = markFunction(v8158);
        const v8167 = function (elem) {
            const v8160 = window.location;
            const v8161 = window.location;
            const v8162 = v8161.hash;
            var hash = v8160 && v8162;
            const v8163 = hash.slice(1);
            const v8164 = elem.id;
            const v8165 = v8163 === v8164;
            const v8166 = hash && v8165;
            return v8166;
        };
        const v8169 = function (elem) {
            const v8168 = elem === docElem;
            return v8168;
        };
        const v8186 = function (elem) {
            const v8170 = document.activeElement;
            const v8171 = elem === v8170;
            const v8172 = document.hasFocus;
            const v8173 = !v8172;
            const v8174 = document.hasFocus();
            const v8175 = v8173 || v8174;
            const v8176 = v8171 && v8175;
            const v8177 = elem.type;
            const v8178 = elem.href;
            const v8179 = v8177 || v8178;
            const v8180 = elem.tabIndex;
            const v8181 = ~v8180;
            const v8182 = v8179 || v8181;
            const v8183 = !v8182;
            const v8184 = !v8183;
            const v8185 = v8176 && v8184;
            return v8185;
        };
        const v8189 = function (elem) {
            const v8187 = elem.disabled;
            const v8188 = v8187 === false;
            return v8188;
        };
        const v8192 = function (elem) {
            const v8190 = elem.disabled;
            const v8191 = v8190 === true;
            return v8191;
        };
        const v8205 = function (elem) {
            const v8193 = elem.nodeName;
            var nodeName = v8193.toLowerCase();
            const v8194 = nodeName === 'input';
            const v8195 = elem.checked;
            const v8196 = !v8195;
            const v8197 = !v8196;
            const v8198 = v8194 && v8197;
            const v8199 = nodeName === 'option';
            const v8200 = elem.selected;
            const v8201 = !v8200;
            const v8202 = !v8201;
            const v8203 = v8199 && v8202;
            const v8204 = v8198 || v8203;
            return v8204;
        };
        const v8211 = function (elem) {
            const v8206 = elem.parentNode;
            if (v8206) {
                const v8207 = elem.parentNode;
                const v8208 = v8207.selectedIndex;
                v8208;
            }
            const v8209 = elem.selected;
            const v8210 = v8209 === true;
            return v8210;
        };
        const v8214 = function (elem) {
            (elem = elem.firstChild)
            while (elem) {
                const v8212 = elem.nodeType;
                const v8213 = v8212 < 6;
                if (v8213) {
                    return false;
                }
            }
            return true;
        };
        const v8218 = function (elem) {
            const v8215 = Expr.pseudos;
            const v8216 = v8215['empty'](elem);
            const v8217 = !v8216;
            return v8217;
        };
        const v8221 = function (elem) {
            const v8219 = elem.nodeName;
            const v8220 = rheader.test(v8219);
            return v8220;
        };
        const v8224 = function (elem) {
            const v8222 = elem.nodeName;
            const v8223 = rinputs.test(v8222);
            return v8223;
        };
        const v8232 = function (elem) {
            const v8225 = elem.nodeName;
            var name = v8225.toLowerCase();
            const v8226 = name === 'input';
            const v8227 = elem.type;
            const v8228 = v8227 === 'button';
            const v8229 = v8226 && v8228;
            const v8230 = name === 'button';
            const v8231 = v8229 || v8230;
            return v8231;
        };
        const v8244 = function (elem) {
            var attr;
            const v8233 = elem.nodeName;
            const v8234 = v8233.toLowerCase();
            const v8235 = v8234 === 'input';
            const v8236 = elem.type;
            const v8237 = v8236 === 'text';
            const v8238 = v8235 && v8237;
            const v8239 = (attr = elem.getAttribute('type')) == null;
            const v8240 = attr.toLowerCase();
            const v8241 = v8240 === 'text';
            const v8242 = v8239 || v8241;
            const v8243 = v8238 && v8242;
            return v8243;
        };
        const v8246 = function () {
            const v8245 = [0];
            return v8245;
        };
        const v8247 = createPositionalPseudo(v8246);
        const v8250 = function (matchIndexes, length) {
            const v8248 = length - 1;
            const v8249 = [v8248];
            return v8249;
        };
        const v8251 = createPositionalPseudo(v8250);
        const v8256 = function (matchIndexes, length, argument) {
            const v8252 = argument < 0;
            const v8253 = argument + length;
            let v8254;
            if (v8252) {
                v8254 = v8253;
            } else {
                v8254 = argument;
            }
            const v8255 = [v8254];
            return v8255;
        };
        const v8257 = createPositionalPseudo(v8256);
        const v8260 = function (matchIndexes, length) {
            var i = 0;
            let v8258 = i < length;
            while (v8258) {
                const v8259 = matchIndexes.push(i);
                v8259;
                v8258 = i < length;
            }
            return matchIndexes;
        };
        const v8261 = createPositionalPseudo(v8260);
        const v8264 = function (matchIndexes, length) {
            var i = 1;
            let v8262 = i < length;
            while (v8262) {
                const v8263 = matchIndexes.push(i);
                v8263;
                v8262 = i < length;
            }
            return matchIndexes;
        };
        const v8265 = createPositionalPseudo(v8264);
        const v8271 = function (matchIndexes, length, argument) {
            let i;
            const v8266 = argument < 0;
            const v8267 = argument + length;
            if (v8266) {
                i = v8267;
            } else {
                i = argument;
            }
            const v8268 = --i;
            let v8269 = v8268 >= 0;
            while (v8269) {
                const v8270 = matchIndexes.push(i);
                v8270;
                v8269 = v8268 >= 0;
            }
            return matchIndexes;
        };
        const v8272 = createPositionalPseudo(v8271);
        const v8278 = function (matchIndexes, length, argument) {
            let i;
            const v8273 = argument < 0;
            const v8274 = argument + length;
            if (v8273) {
                i = v8274;
            } else {
                i = argument;
            }
            const v8275 = ++i;
            let v8276 = v8275 < length;
            while (v8276) {
                const v8277 = matchIndexes.push(i);
                v8277;
                v8276 = v8275 < length;
            }
            return matchIndexes;
        };
        const v8279 = createPositionalPseudo(v8278);
        const v8280 = {};
        v8280['not'] = v8121;
        v8280['has'] = v8127;
        v8280['contains'] = v8138;
        v8280['lang'] = v8159;
        v8280['target'] = v8167;
        v8280['root'] = v8169;
        v8280['focus'] = v8186;
        v8280['enabled'] = v8189;
        v8280['disabled'] = v8192;
        v8280['checked'] = v8205;
        v8280['selected'] = v8211;
        v8280['empty'] = v8214;
        v8280['parent'] = v8218;
        v8280['header'] = v8221;
        v8280['input'] = v8224;
        v8280['button'] = v8232;
        v8280['text'] = v8244;
        v8280['first'] = v8247;
        v8280['last'] = v8251;
        v8280['eq'] = v8257;
        v8280['even'] = v8261;
        v8280['odd'] = v8265;
        v8280['lt'] = v8272;
        v8280['gt'] = v8279;
        const v8281 = {};
        v8281.cacheLength = 50;
        v8281.createPseudo = markFunction;
        v8281.match = matchExpr;
        v8281.attrHandle = v7836;
        v8281.find = v7837;
        v8281.relative = v7842;
        v8281.preFilter = v7913;
        v8281.filter = v8107;
        v8281.pseudos = v8280;
        Sizzle.selectors = v8281;
        Expr = Sizzle.selectors;
        const v8282 = Expr.pseudos;
        const v8283 = Expr.pseudos;
        const v8284 = v8283['eq'];
        v8282['nth'] = v8284;
        const v8285 = {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        };
        for (i in v8285) {
            const v8287 = createInputPseudo(i);
            v8286[i] = v8287;
        }
        const v8288 = {
            submit: true,
            reset: true
        };
        for (i in v8288) {
            const v8290 = createButtonPseudo(i);
            v8289[i] = v8290;
        }
        const setFilters = function () {
        };
        const v8291 = Expr.pseudos;
        Expr.filters = v8291;
        setFilters.prototype = Expr.filters;
        Expr.setFilters = new setFilters();
        const tokenize = function (selector, parseOnly) {
            var matched;
            var match;
            var tokens;
            var type;
            var soFar;
            var groups;
            var preFilters;
            const v8292 = selector + ' ';
            var cached = tokenCache[v8292];
            if (cached) {
                const v8293 = cached.slice(0);
                let v8294;
                if (parseOnly) {
                    v8294 = 0;
                } else {
                    v8294 = v8293;
                }
                return v8294;
            }
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while (soFar) {
                const v8295 = !matched;
                const v8296 = v8295 || (match = rcomma.exec(soFar));
                if (v8296) {
                    if (match) {
                        const v8297 = match[0];
                        const v8298 = v8297.length;
                        const v8299 = soFar.slice(v8298);
                        soFar = v8299 || soFar;
                    }
                    tokens = [];
                    const v8300 = groups.push(tokens);
                    v8300;
                }
                matched = false;
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    const v8301 = match[0];
                    const v8302 = v8301.replace(rtrim, ' ');
                    const v8303 = {
                        value: matched,
                        type: v8302
                    };
                    const v8304 = tokens.push(v8303);
                    v8304;
                    const v8305 = matched.length;
                    soFar = soFar.slice(v8305);
                }
                const v8306 = Expr.filter;
                for (type in v8306) {
                    const v8307 = matchExpr[type];
                    const v8308 = preFilters[type];
                    const v8309 = !v8308;
                    const v8310 = v8309 || (match = preFilters[type](match));
                    const v8311 = (match = v8307.exec(soFar)) && v8310;
                    if (v8311) {
                        matched = match.shift();
                        const v8312 = {
                            value: matched,
                            type: type,
                            matches: match
                        };
                        const v8313 = tokens.push(v8312);
                        v8313;
                        const v8314 = matched.length;
                        soFar = soFar.slice(v8314);
                    }
                }
                const v8315 = !matched;
                if (v8315) {
                    break;
                }
            }
            const v8316 = soFar.length;
            const v8317 = Sizzle.error(selector);
            const v8318 = tokenCache(selector, groups);
            const v8319 = v8318.slice(0);
            let v8320;
            if (soFar) {
                v8320 = v8317;
            } else {
                v8320 = v8319;
            }
            let v8321;
            if (parseOnly) {
                v8321 = v8316;
            } else {
                v8321 = v8320;
            }
            return v8321;
        };
        const toSelector = function (tokens) {
            var i = 0;
            var len = tokens.length;
            var selector = '';
            let v8322 = i < len;
            while (v8322) {
                const v8324 = tokens[i];
                selector += v8324.value;
                const v8323 = i++;
                v8322 = i < len;
            }
            return selector;
        };
        const addCombinator = function (matcher, combinator, base) {
            var dir = combinator.dir;
            const v8325 = dir === 'parentNode';
            var checkNonElements = base && v8325;
            const v8326 = done++;
            var doneName = v8326;
            const v8327 = combinator.first;
            const v8332 = function (elem, context, xml) {
                while (elem = elem[dir]) {
                    const v8328 = elem.nodeType;
                    const v8329 = v8328 === 1;
                    const v8330 = v8329 || checkNonElements;
                    if (v8330) {
                        const v8331 = matcher(elem, context, xml);
                        return v8331;
                    }
                }
            };
            const v8350 = function (elem, context, xml) {
                var oldCache;
                var outerCache;
                var newCache = [
                    dirruns,
                    doneName
                ];
                if (xml) {
                    while (elem = elem[dir]) {
                        const v8333 = elem.nodeType;
                        const v8334 = v8333 === 1;
                        const v8335 = v8334 || checkNonElements;
                        if (v8335) {
                            const v8336 = matcher(elem, context, xml);
                            if (v8336) {
                                return true;
                            }
                        }
                    }
                } else {
                    while (elem = elem[dir]) {
                        const v8337 = elem.nodeType;
                        const v8338 = v8337 === 1;
                        const v8339 = v8338 || checkNonElements;
                        if (v8339) {
                            const v8340 = elem[expando];
                            const v8341 = {};
                            outerCache = v8340 || (elem[expando] = v8341);
                            const v8342 = oldCache[0];
                            const v8343 = v8342 === dirruns;
                            const v8344 = (oldCache = outerCache[dir]) && v8343;
                            const v8345 = oldCache[1];
                            const v8346 = v8345 === doneName;
                            const v8347 = v8344 && v8346;
                            if (v8347) {
                                const v8348 = oldCache[2];
                                return newCache[2] = v8348;
                            } else {
                                outerCache[dir] = newCache;
                                const v8349 = matcher(elem, context, xml);
                                if (newCache[2] = v8349) {
                                    return true;
                                }
                            }
                        }
                    }
                }
            };
            let v8351;
            if (v8327) {
                v8351 = v8332;
            } else {
                v8351 = v8350;
            }
            return v8351;
        };
        const elementMatcher = function (matchers) {
            const v8352 = matchers.length;
            const v8353 = v8352 > 1;
            const v8357 = function (elem, context, xml) {
                var i = matchers.length;
                let v8354 = i--;
                while (v8354) {
                    const v8355 = matchers[i](elem, context, xml);
                    const v8356 = !v8355;
                    if (v8356) {
                        return false;
                    }
                    v8354 = i--;
                }
                return true;
            };
            const v8358 = matchers[0];
            let v8359;
            if (v8353) {
                v8359 = v8357;
            } else {
                v8359 = v8358;
            }
            return v8359;
        };
        const condense = function (unmatched, map, filter, context, xml) {
            var elem;
            var newUnmatched = [];
            var i = 0;
            var len = unmatched.length;
            var mapped = map != null;
            let v8360 = i < len;
            while (v8360) {
                if (elem = unmatched[i]) {
                    const v8362 = !filter;
                    const v8363 = filter(elem, context, xml);
                    const v8364 = v8362 || v8363;
                    if (v8364) {
                        const v8365 = newUnmatched.push(elem);
                        v8365;
                        if (mapped) {
                            const v8366 = map.push(i);
                            v8366;
                        }
                    }
                }
                const v8361 = i++;
                v8360 = i < len;
            }
            return newUnmatched;
        };
        const setMatcher = function (preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            const v8367 = postFilter[expando];
            const v8368 = !v8367;
            const v8369 = postFilter && v8368;
            if (v8369) {
                postFilter = setMatcher(postFilter);
            }
            const v8370 = postFinder[expando];
            const v8371 = !v8370;
            const v8372 = postFinder && v8371;
            if (v8372) {
                postFinder = setMatcher(postFinder, postSelector);
            }
            const v8411 = function (seed, results, context, xml) {
                var temp;
                var i;
                var elem;
                var preMap = [];
                var postMap = [];
                var preexisting = results.length;
                const v8373 = selector || '*';
                const v8374 = context.nodeType;
                const v8375 = [context];
                let v8376;
                if (v8374) {
                    v8376 = v8375;
                } else {
                    v8376 = context;
                }
                const v8377 = [];
                const v8378 = multipleContexts(v8373, v8376, v8377);
                var elems = seed || v8378;
                let matcherIn;
                const v8379 = !selector;
                const v8380 = seed || v8379;
                const v8381 = preFilter && v8380;
                const v8382 = condense(elems, preMap, preFilter, context, xml);
                if (v8381) {
                    matcherIn = v8382;
                } else {
                    matcherIn = elems;
                }
                let matcherOut;
                const v8383 = preexisting || postFilter;
                let v8384;
                if (seed) {
                    v8384 = preFilter;
                } else {
                    v8384 = v8383;
                }
                const v8385 = postFinder || v8384;
                const v8386 = [];
                let v8387;
                if (v8385) {
                    v8387 = v8386;
                } else {
                    v8387 = results;
                }
                if (matcher) {
                    matcherOut = v8387;
                } else {
                    matcherOut = matcherIn;
                }
                if (matcher) {
                    const v8388 = matcher(matcherIn, matcherOut, context, xml);
                    v8388;
                }
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    const v8389 = [];
                    const v8390 = postFilter(temp, v8389, context, xml);
                    v8390;
                    i = temp.length;
                    let v8391 = i--;
                    while (v8391) {
                        if (elem = temp[i]) {
                            const v8392 = postMap[i];
                            const v8393 = postMap[i];
                            const v8394 = !(matcherIn[v8393] = elem);
                            matcherOut[v8392] = v8394;
                        }
                        v8391 = i--;
                    }
                }
                if (seed) {
                    const v8395 = postFinder || preFilter;
                    if (v8395) {
                        if (postFinder) {
                            temp = [];
                            i = matcherOut.length;
                            let v8396 = i--;
                            while (v8396) {
                                if (elem = matcherOut[i]) {
                                    undefined = elem;
                                    const v8397 = temp.push(matcherIn[i]);
                                    v8397;
                                }
                                v8396 = i--;
                            }
                            matcherOut = [];
                            const v8398 = postFinder(null, matcherOut, temp, xml);
                            v8398;
                        }
                        i = matcherOut.length;
                        let v8399 = i--;
                        while (v8399) {
                            const v8403 = (elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1;
                            if (v8403) {
                                const v8404 = !(results[temp] = elem);
                                seed[temp] = v8404;
                            }
                            v8399 = i--;
                        }
                    }
                } else {
                    const v8405 = matcherOut === results;
                    const v8406 = matcherOut.length;
                    const v8407 = matcherOut.splice(preexisting, v8406);
                    let v8408;
                    if (v8405) {
                        v8408 = v8407;
                    } else {
                        v8408 = matcherOut;
                    }
                    matcherOut = condense(v8408);
                    if (postFinder) {
                        const v8409 = postFinder(null, results, matcherOut, xml);
                        v8409;
                    } else {
                        const v8410 = push.apply(results, matcherOut);
                        v8410;
                    }
                }
            };
            const v8412 = markFunction(v8411);
            return v8412;
        };
        const matcherFromTokens = function (tokens) {
            var checkContext;
            var matcher;
            var j;
            var len = tokens.length;
            const v8413 = Expr.relative;
            const v8414 = tokens[0];
            const v8415 = v8414.type;
            var leadingRelative = v8413[v8415];
            const v8416 = Expr.relative;
            const v8417 = v8416[' '];
            var implicitRelative = leadingRelative || v8417;
            let i;
            if (leadingRelative) {
                i = 1;
            } else {
                i = 0;
            }
            const v8419 = function (elem) {
                const v8418 = elem === checkContext;
                return v8418;
            };
            var matchContext = addCombinator(v8419, implicitRelative, true);
            const v8423 = function (elem) {
                const v8420 = indexOf.call(checkContext, elem);
                const v8421 = -1;
                const v8422 = v8420 > v8421;
                return v8422;
            };
            var matchAnyContext = addCombinator(v8423, implicitRelative, true);
            const v8433 = function (elem, context, xml) {
                const v8424 = !leadingRelative;
                const v8425 = context !== outermostContext;
                const v8426 = xml || v8425;
                const v8427 = v8424 && v8426;
                const v8428 = (checkContext = context).nodeType;
                const v8429 = matchContext(elem, context, xml);
                const v8430 = matchAnyContext(elem, context, xml);
                let v8431;
                if (v8428) {
                    v8431 = v8429;
                } else {
                    v8431 = v8430;
                }
                const v8432 = v8427 || v8431;
                return v8432;
            };
            var matchers = [v8433];
            let v8434 = i < len;
            while (v8434) {
                const v8436 = Expr.relative;
                const v8437 = tokens[i];
                const v8438 = v8437.type;
                if (matcher = v8436[v8438]) {
                    const v8439 = elementMatcher(matchers);
                    const v8440 = addCombinator(v8439, matcher);
                    matchers = [v8440];
                } else {
                    const v8441 = Expr.filter;
                    const v8442 = tokens[i];
                    const v8443 = v8442.type;
                    const v8444 = v8441[v8443];
                    const v8445 = tokens[i];
                    const v8446 = v8445.matches;
                    matcher = v8444.apply(null, v8446);
                    const v8447 = matcher[expando];
                    if (v8447) {
                        const v8448 = ++i;
                        j = v8448;
                        let v8449 = j < len;
                        while (v8449) {
                            const v8451 = Expr.relative;
                            const v8452 = tokens[j];
                            const v8453 = v8452.type;
                            const v8454 = v8451[v8453];
                            if (v8454) {
                                break;
                            }
                            const v8450 = j++;
                            v8449 = j < len;
                        }
                        const v8455 = i > 1;
                        const v8456 = elementMatcher(matchers);
                        const v8457 = v8455 && v8456;
                        const v8458 = i > 1;
                        const v8459 = i - 1;
                        const v8460 = tokens.slice(0, v8459);
                        const v8461 = i - 2;
                        const v8462 = tokens[v8461];
                        const v8463 = v8462.type;
                        const v8464 = v8463 === ' ';
                        let v8465;
                        if (v8464) {
                            v8465 = '*';
                        } else {
                            v8465 = '';
                        }
                        const v8466 = { value: v8465 };
                        const v8467 = v8460.concat(v8466);
                        const v8468 = toSelector(v8467);
                        const v8469 = v8468.replace(rtrim, '$1');
                        const v8470 = v8458 && v8469;
                        const v8471 = i < j;
                        const v8472 = tokens.slice(i, j);
                        const v8473 = matcherFromTokens(v8472);
                        const v8474 = v8471 && v8473;
                        const v8475 = j < len;
                        const v8476 = matcherFromTokens(tokens = tokens.slice(j));
                        const v8477 = v8475 && v8476;
                        const v8478 = j < len;
                        const v8479 = toSelector(tokens);
                        const v8480 = v8478 && v8479;
                        const v8481 = setMatcher(v8457, v8470, matcher, v8474, v8477, v8480);
                        return v8481;
                    }
                    const v8482 = matchers.push(matcher);
                    v8482;
                }
                const v8435 = i++;
                v8434 = i < len;
            }
            const v8483 = elementMatcher(matchers);
            return v8483;
        };
        const matcherFromGroupMatchers = function (elementMatchers, setMatchers) {
            const v8484 = setMatchers.length;
            var bySet = v8484 > 0;
            const v8485 = elementMatchers.length;
            var byElement = v8485 > 0;
            var superMatcher = function (seed, context, xml, results, outermost) {
                var elem;
                var j;
                var matcher;
                var matchedCount = 0;
                var i = '0';
                const v8486 = [];
                var unmatched = seed && v8486;
                var setMatched = [];
                var contextBackup = outermostContext;
                const v8487 = Expr.find;
                const v8488 = v8487['TAG']('*', outermost);
                const v8489 = byElement && v8488;
                var elems = seed || v8489;
                const v8490 = contextBackup == null;
                const v8491 = Math.random();
                const v8492 = v8491 || 0.1;
                if (v8490) {
                    dirruns = 1;
                } else {
                    dirruns = v8492;
                }
                var dirrunsUnique;
                var len = elems.length;
                if (outermost) {
                    const v8493 = context !== document;
                    outermostContext = v8493 && context;
                }
                const v8494 = i !== len;
                const v8495 = (elem = elems[i]) != null;
                let v8496 = v8494 && v8495;
                while (v8496) {
                    const v8498 = byElement && elem;
                    if (v8498) {
                        j = 0;
                        const v8499 = j++;
                        while (matcher = elementMatchers[v8499]) {
                            const v8500 = matcher(elem, context, xml);
                            if (v8500) {
                                const v8501 = results.push(elem);
                                v8501;
                                break;
                            }
                        }
                        if (outermost) {
                            dirruns = dirrunsUnique;
                        }
                    }
                    if (bySet) {
                        const v8502 = !matcher;
                        if (elem = v8502 && elem) {
                            const v8503 = matchedCount--;
                            v8503;
                        }
                        if (seed) {
                            const v8504 = unmatched.push(elem);
                            v8504;
                        }
                    }
                    const v8497 = i++;
                    v8496 = v8494 && v8495;
                }
                matchedCount += i;
                const v8505 = i !== matchedCount;
                const v8506 = bySet && v8505;
                if (v8506) {
                    j = 0;
                    const v8507 = j++;
                    while (matcher = setMatchers[v8507]) {
                        const v8508 = matcher(unmatched, setMatched, context, xml);
                        v8508;
                    }
                    if (seed) {
                        const v8509 = matchedCount > 0;
                        if (v8509) {
                            let v8510 = i--;
                            while (v8510) {
                                const v8511 = unmatched[i];
                                const v8512 = setMatched[i];
                                const v8513 = v8511 || v8512;
                                const v8514 = !v8513;
                                if (v8514) {
                                    const v8515 = pop.call(results);
                                    setMatched[i] = v8515;
                                }
                                v8510 = i--;
                            }
                        }
                        setMatched = condense(setMatched);
                    }
                    const v8516 = push.apply(results, setMatched);
                    v8516;
                    const v8517 = !seed;
                    const v8518 = outermost && v8517;
                    const v8519 = setMatched.length;
                    const v8520 = v8519 > 0;
                    const v8521 = v8518 && v8520;
                    const v8522 = setMatchers.length;
                    const v8523 = matchedCount + v8522;
                    const v8524 = v8523 > 1;
                    const v8525 = v8521 && v8524;
                    if (v8525) {
                        const v8526 = Sizzle.uniqueSort(results);
                        v8526;
                    }
                }
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            const v8527 = markFunction(superMatcher);
            let v8528;
            if (bySet) {
                v8528 = v8527;
            } else {
                v8528 = superMatcher;
            }
            return v8528;
        };
        const v8538 = function (selector, group) {
            var i;
            var setMatchers = [];
            var elementMatchers = [];
            const v8529 = selector + ' ';
            var cached = compilerCache[v8529];
            const v8530 = !cached;
            if (v8530) {
                const v8531 = !group;
                if (v8531) {
                    group = tokenize(selector);
                }
                i = group.length;
                let v8532 = i--;
                while (v8532) {
                    const v8533 = group[i];
                    cached = matcherFromTokens(v8533);
                    const v8534 = cached[expando];
                    if (v8534) {
                        const v8535 = setMatchers.push(cached);
                        v8535;
                    } else {
                        const v8536 = elementMatchers.push(cached);
                        v8536;
                    }
                    v8532 = i--;
                }
                const v8537 = matcherFromGroupMatchers(elementMatchers, setMatchers);
                cached = compilerCache(selector, v8537);
            }
            return cached;
        };
        Sizzle.compile = v8538;
        compile = Sizzle.compile;
        const multipleContexts = function (selector, contexts, results) {
            var i = 0;
            var len = contexts.length;
            let v8539 = i < len;
            while (v8539) {
                const v8541 = contexts[i];
                const v8542 = Sizzle(selector, v8541, results);
                v8542;
                const v8540 = i++;
                v8539 = i < len;
            }
            return results;
        };
        const select = function (selector, context, results, seed) {
            var i;
            var tokens;
            var token;
            var type;
            var find;
            var match = tokenize(selector);
            const v8543 = !seed;
            if (v8543) {
                const v8544 = match.length;
                const v8545 = v8544 === 1;
                if (v8545) {
                    const v8546 = match[0];
                    const v8547 = v8546.slice(0);
                    tokens = match[0] = v8547;
                    const v8548 = tokens.length;
                    const v8549 = v8548 > 2;
                    const v8550 = (token = tokens[0]).type;
                    const v8551 = v8550 === 'ID';
                    const v8552 = v8549 && v8551;
                    const v8553 = support.getById;
                    const v8554 = v8552 && v8553;
                    const v8555 = context.nodeType;
                    const v8556 = v8555 === 9;
                    const v8557 = v8554 && v8556;
                    const v8558 = v8557 && documentIsHTML;
                    const v8559 = Expr.relative;
                    const v8560 = tokens[1];
                    const v8561 = v8560.type;
                    const v8562 = v8559[v8561];
                    const v8563 = v8558 && v8562;
                    if (v8563) {
                        const v8564 = Expr.find;
                        const v8565 = token.matches;
                        const v8566 = v8565[0];
                        const v8567 = v8566.replace(runescape, funescape);
                        const v8568 = v8564['ID'](v8567, context);
                        const v8569 = [];
                        const v8570 = v8568 || v8569;
                        context = v8570[0];
                        const v8571 = !context;
                        if (v8571) {
                            return results;
                        }
                        const v8572 = tokens.shift();
                        const v8573 = v8572.value;
                        const v8574 = v8573.length;
                        selector = selector.slice(v8574);
                    }
                    const v8575 = matchExpr['needsContext'];
                    const v8576 = v8575.test(selector);
                    const v8577 = tokens.length;
                    if (v8576) {
                        i = 0;
                    } else {
                        i = v8577;
                    }
                    let v8578 = i--;
                    while (v8578) {
                        token = tokens[i];
                        const v8579 = Expr.relative;
                        const v8580 = v8579[type = token.type];
                        if (v8580) {
                            break;
                        }
                        const v8581 = Expr.find;
                        if (find = v8581[type]) {
                            const v8582 = token.matches;
                            const v8583 = v8582[0];
                            const v8584 = v8583.replace(runescape, funescape);
                            const v8585 = tokens[0];
                            const v8586 = v8585.type;
                            const v8587 = rsibling.test(v8586);
                            const v8588 = context.parentNode;
                            const v8589 = testContext(v8588);
                            const v8590 = v8587 && v8589;
                            const v8591 = v8590 || context;
                            if (seed = find(v8584, v8591)) {
                                const v8592 = tokens.splice(i, 1);
                                v8592;
                                const v8593 = seed.length;
                                const v8594 = toSelector(tokens);
                                selector = v8593 && v8594;
                                const v8595 = !selector;
                                if (v8595) {
                                    const v8596 = push.apply(results, seed);
                                    v8596;
                                    return results;
                                }
                                break;
                            }
                        }
                        v8578 = i--;
                    }
                }
            }
            const v8597 = compile(selector, match);
            const v8598 = !documentIsHTML;
            const v8599 = rsibling.test(selector);
            const v8600 = context.parentNode;
            const v8601 = testContext(v8600);
            const v8602 = v8599 && v8601;
            const v8603 = v8602 || context;
            const v8604 = v8597(seed, context, v8598, results, v8603);
            v8604;
            return results;
        };
        const v8605 = expando.split('');
        const v8606 = v8605.sort(sortOrder);
        const v8607 = v8606.join('');
        support.sortStable = v8607 === expando;
        const v8608 = !hasDuplicate;
        const v8609 = !v8608;
        support.detectDuplicates = v8609;
        const v8610 = setDocument();
        v8610;
        const v8614 = function (div1) {
            const v8611 = document.createElement('div');
            const v8612 = div1.compareDocumentPosition(v8611);
            const v8613 = v8612 & 1;
            return v8613;
        };
        const v8615 = assert(v8614);
        support.sortDetached = v8615;
        const v8619 = function (div) {
            div.innerHTML = '<a href=\'#\'></a>';
            const v8616 = div.firstChild;
            const v8617 = v8616.getAttribute('href');
            const v8618 = v8617 === '#';
            return v8618;
        };
        const v8620 = assert(v8619);
        const v8621 = !v8620;
        if (v8621) {
            const v8627 = function (elem, name, isXML) {
                const v8622 = !isXML;
                if (v8622) {
                    const v8623 = name.toLowerCase();
                    const v8624 = v8623 === 'type';
                    let v8625;
                    if (v8624) {
                        v8625 = 1;
                    } else {
                        v8625 = 2;
                    }
                    const v8626 = elem.getAttribute(name, v8625);
                    return v8626;
                }
            };
            const v8628 = addHandle('type|href|height|width', v8627);
            v8628;
        }
        const v8629 = support.attributes;
        const v8630 = !v8629;
        const v8636 = function (div) {
            div.innerHTML = '<input/>';
            const v8631 = div.firstChild;
            const v8632 = v8631.setAttribute('value', '');
            v8632;
            const v8633 = div.firstChild;
            const v8634 = v8633.getAttribute('value');
            const v8635 = v8634 === '';
            return v8635;
        };
        const v8637 = assert(v8636);
        const v8638 = !v8637;
        const v8639 = v8630 || v8638;
        if (v8639) {
            const v8646 = function (elem, name, isXML) {
                const v8640 = !isXML;
                const v8641 = elem.nodeName;
                const v8642 = v8641.toLowerCase();
                const v8643 = v8642 === 'input';
                const v8644 = v8640 && v8643;
                if (v8644) {
                    const v8645 = elem.defaultValue;
                    return v8645;
                }
            };
            const v8647 = addHandle('value', v8646);
            v8647;
        }
        const v8650 = function (div) {
            const v8648 = div.getAttribute('disabled');
            const v8649 = v8648 == null;
            return v8649;
        };
        const v8651 = assert(v8650);
        const v8652 = !v8651;
        if (v8652) {
            const v8662 = function (elem, name, isXML) {
                var val;
                const v8653 = !isXML;
                if (v8653) {
                    const v8654 = elem[name];
                    const v8655 = v8654 === true;
                    const v8656 = name.toLowerCase();
                    const v8657 = val.specified;
                    const v8658 = (val = elem.getAttributeNode(name)) && v8657;
                    const v8659 = val.value;
                    let v8660;
                    if (v8658) {
                        v8660 = v8659;
                    } else {
                        v8660 = null;
                    }
                    let v8661;
                    if (v8655) {
                        v8661 = v8656;
                    } else {
                        v8661 = v8660;
                    }
                    return v8661;
                }
            };
            const v8663 = addHandle(booleans, v8662);
            v8663;
        }
        return Sizzle;
    };
    var Sizzle = v8664(window);
    jQuery.find = Sizzle;
    const v8665 = Sizzle.selectors;
    jQuery.expr = v8665;
    const v8666 = jQuery.expr;
    const v8667 = jQuery.expr;
    const v8668 = v8667.pseudos;
    v8666[':'] = v8668;
    const v8669 = Sizzle.uniqueSort;
    jQuery.unique = v8669;
    const v8670 = Sizzle.getText;
    jQuery.text = v8670;
    const v8671 = Sizzle.isXML;
    jQuery.isXMLDoc = v8671;
    const v8672 = Sizzle.contains;
    jQuery.contains = v8672;
    const v8673 = jQuery.expr;
    const v8674 = v8673.match;
    var rneedsContext = v8674.needsContext;
    var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
    var risSimple = /^.[^:#\[\.,]*$/;
    const winnow = function (elements, qualifier, not) {
        const v8675 = jQuery.isFunction(qualifier);
        if (v8675) {
            const v8680 = function (elem, i) {
                const v8676 = qualifier.call(elem, i, elem);
                const v8677 = !v8676;
                const v8678 = !v8677;
                const v8679 = v8678 !== not;
                return v8679;
            };
            const v8681 = jQuery.grep(elements, v8680);
            return v8681;
        }
        const v8682 = qualifier.nodeType;
        if (v8682) {
            const v8685 = function (elem) {
                const v8683 = elem === qualifier;
                const v8684 = v8683 !== not;
                return v8684;
            };
            const v8686 = jQuery.grep(elements, v8685);
            return v8686;
        }
        const v8687 = typeof qualifier;
        const v8688 = v8687 === 'string';
        if (v8688) {
            const v8689 = risSimple.test(qualifier);
            if (v8689) {
                const v8690 = jQuery.filter(qualifier, elements, not);
                return v8690;
            }
            qualifier = jQuery.filter(qualifier, elements);
        }
        const v8694 = function (elem) {
            const v8691 = jQuery.inArray(elem, qualifier);
            const v8692 = v8691 >= 0;
            const v8693 = v8692 !== not;
            return v8693;
        };
        const v8695 = jQuery.grep(elements, v8694);
        return v8695;
    };
    const v8714 = function (expr, elems, not) {
        var elem = elems[0];
        if (not) {
            const v8696 = ':not(' + expr;
            expr = v8696 + ')';
        }
        const v8697 = elems.length;
        const v8698 = v8697 === 1;
        const v8699 = elem.nodeType;
        const v8700 = v8699 === 1;
        const v8701 = v8698 && v8700;
        const v8702 = jQuery.find;
        const v8703 = v8702.matchesSelector(elem, expr);
        const v8704 = [elem];
        const v8705 = [];
        let v8706;
        if (v8703) {
            v8706 = v8704;
        } else {
            v8706 = v8705;
        }
        const v8707 = jQuery.find;
        const v8710 = function (elem) {
            const v8708 = elem.nodeType;
            const v8709 = v8708 === 1;
            return v8709;
        };
        const v8711 = jQuery.grep(elems, v8710);
        const v8712 = v8707.matches(expr, v8711);
        let v8713;
        if (v8701) {
            v8713 = v8706;
        } else {
            v8713 = v8712;
        }
        return v8713;
    };
    jQuery.filter = v8714;
    const v8715 = jQuery.fn;
    const v8738 = function (selector) {
        var i;
        var ret = [];
        var self = this;
        var len = self.length;
        const v8716 = typeof selector;
        const v8717 = v8716 !== 'string';
        if (v8717) {
            const v8718 = jQuery(selector);
            const v8723 = function () {
                (i = 0)
                let v8719 = i < len;
                while (v8719) {
                    const v8721 = self[i];
                    const v8722 = jQuery.contains(v8721, this);
                    if (v8722) {
                        return true;
                    }
                    const v8720 = i++;
                    v8719 = i < len;
                }
            };
            const v8724 = v8718.filter(v8723);
            const v8725 = this.pushStack(v8724);
            return v8725;
        }
        (i = 0)
        let v8726 = i < len;
        while (v8726) {
            const v8728 = self[i];
            const v8729 = jQuery.find(selector, v8728, ret);
            v8729;
            const v8727 = i++;
            v8726 = i < len;
        }
        const v8730 = len > 1;
        const v8731 = jQuery.unique(ret);
        let v8732;
        if (v8730) {
            v8732 = v8731;
        } else {
            v8732 = ret;
        }
        ret = this.pushStack(v8732);
        const v8733 = this.selector;
        const v8734 = this.selector;
        const v8735 = v8734 + ' ';
        const v8736 = v8735 + selector;
        let v8737;
        if (v8733) {
            v8737 = v8736;
        } else {
            v8737 = selector;
        }
        ret.selector = v8737;
        return ret;
    };
    const v8743 = function (selector) {
        const v8739 = [];
        const v8740 = selector || v8739;
        const v8741 = winnow(this, v8740, false);
        const v8742 = this.pushStack(v8741);
        return v8742;
    };
    const v8748 = function (selector) {
        const v8744 = [];
        const v8745 = selector || v8744;
        const v8746 = winnow(this, v8745, true);
        const v8747 = this.pushStack(v8746);
        return v8747;
    };
    const v8761 = function (selector) {
        const v8749 = typeof selector;
        const v8750 = v8749 === 'string';
        const v8751 = rneedsContext.test(selector);
        const v8752 = v8750 && v8751;
        const v8753 = jQuery(selector);
        const v8754 = [];
        const v8755 = selector || v8754;
        let v8756;
        if (v8752) {
            v8756 = v8753;
        } else {
            v8756 = v8755;
        }
        const v8757 = winnow(this, v8756, false);
        const v8758 = v8757.length;
        const v8759 = !v8758;
        const v8760 = !v8759;
        return v8760;
    };
    const v8762 = {
        find: v8738,
        filter: v8743,
        not: v8748,
        is: v8761
    };
    const v8763 = v8715.extend(v8762);
    v8763;
    var rootjQuery;
    var document = window.document;
    var rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    const v8764 = jQuery.fn;
    const v8830 = function (selector, context) {
        var match;
        var elem;
        const v8765 = !selector;
        if (v8765) {
            return this;
        }
        const v8766 = typeof selector;
        const v8767 = v8766 === 'string';
        if (v8767) {
            const v8768 = selector.charAt(0);
            const v8769 = v8768 === '<';
            const v8770 = selector.length;
            const v8771 = v8770 - 1;
            const v8772 = selector.charAt(v8771);
            const v8773 = v8772 === '>';
            const v8774 = v8769 && v8773;
            const v8775 = selector.length;
            const v8776 = v8775 >= 3;
            const v8777 = v8774 && v8776;
            if (v8777) {
                match = [
                    null,
                    selector,
                    null
                ];
            } else {
                match = rquickExpr.exec(selector);
            }
            const v8778 = match[1];
            const v8779 = !context;
            const v8780 = v8778 || v8779;
            const v8781 = match && v8780;
            if (v8781) {
                const v8782 = match[1];
                if (v8782) {
                    const v8783 = context instanceof jQuery;
                    const v8784 = context[0];
                    if (v8783) {
                        context = v8784;
                    } else {
                        context = context;
                    }
                    const v8785 = match[1];
                    const v8786 = context.nodeType;
                    const v8787 = context && v8786;
                    const v8788 = context.ownerDocument;
                    const v8789 = v8788 || context;
                    let v8790;
                    if (v8787) {
                        v8790 = v8789;
                    } else {
                        v8790 = document;
                    }
                    const v8791 = jQuery.parseHTML(v8785, v8790, true);
                    const v8792 = jQuery.merge(this, v8791);
                    v8792;
                    const v8793 = match[1];
                    const v8794 = rsingleTag.test(v8793);
                    const v8795 = jQuery.isPlainObject(context);
                    const v8796 = v8794 && v8795;
                    if (v8796) {
                        for (match in context) {
                            const v8797 = this[match];
                            const v8798 = jQuery.isFunction(v8797);
                            if (v8798) {
                                const v8799 = context[match];
                                const v8800 = this[match](v8799);
                                v8800;
                            } else {
                                const v8801 = context[match];
                                const v8802 = this.attr(match, v8801);
                                v8802;
                            }
                        }
                    }
                    return this;
                } else {
                    const v8803 = match[2];
                    elem = document.getElementById(v8803);
                    const v8804 = elem.parentNode;
                    const v8805 = elem && v8804;
                    if (v8805) {
                        const v8806 = elem.id;
                        const v8807 = match[2];
                        const v8808 = v8806 !== v8807;
                        if (v8808) {
                            const v8809 = rootjQuery.find(selector);
                            return v8809;
                        }
                        this.length = 1;
                        this[0] = elem;
                    }
                    this.context = document;
                    this.selector = selector;
                    return this;
                }
            } else {
                const v8810 = !context;
                const v8811 = context.jquery;
                const v8812 = v8810 || v8811;
                if (v8812) {
                    const v8813 = context || rootjQuery;
                    const v8814 = v8813.find(selector);
                    return v8814;
                } else {
                    const v8815 = this.constructor(context);
                    const v8816 = v8815.find(selector);
                    return v8816;
                }
            }
        } else {
            const v8817 = selector.nodeType;
            if (v8817) {
                this.context = this[0] = selector;
                this.length = 1;
                return this;
            } else {
                const v8818 = jQuery.isFunction(selector);
                if (v8818) {
                    const v8819 = rootjQuery.ready;
                    const v8820 = typeof v8819;
                    const v8821 = v8820 !== 'undefined';
                    const v8822 = rootjQuery.ready(selector);
                    const v8823 = selector(jQuery);
                    let v8824;
                    if (v8821) {
                        v8824 = v8822;
                    } else {
                        v8824 = v8823;
                    }
                    return v8824;
                }
            }
        }
        const v8825 = selector.selector;
        const v8826 = v8825 !== undefined;
        if (v8826) {
            const v8827 = selector.selector;
            this.selector = v8827;
            const v8828 = selector.context;
            this.context = v8828;
        }
        const v8829 = jQuery.makeArray(selector, this);
        return v8829;
    };
    v8764.init = v8830;
    var init = v8764.init;
    const v8831 = jQuery.fn;
    init.prototype = v8831;
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/;
    var guaranteedUnique = {};
    guaranteedUnique.children = true;
    guaranteedUnique.contents = true;
    guaranteedUnique.next = true;
    guaranteedUnique.prev = true;
    const v8847 = function (elem, dir, until) {
        var matched = [];
        var cur = elem[dir];
        const v8832 = cur.nodeType;
        const v8833 = v8832 !== 9;
        const v8834 = cur && v8833;
        const v8835 = until === undefined;
        const v8836 = cur.nodeType;
        const v8837 = v8836 !== 1;
        const v8838 = v8835 || v8837;
        const v8839 = jQuery(cur);
        const v8840 = v8839.is(until);
        const v8841 = !v8840;
        const v8842 = v8838 || v8841;
        let v8843 = v8834 && v8842;
        while (v8843) {
            const v8844 = cur.nodeType;
            const v8845 = v8844 === 1;
            if (v8845) {
                const v8846 = matched.push(cur);
                v8846;
            }
            cur = cur[dir];
            v8843 = v8834 && v8842;
        }
        return matched;
    };
    const v8853 = function (n, elem) {
        var r = [];
        while (n) {
            const v8848 = n.nodeType;
            const v8849 = v8848 === 1;
            const v8850 = n !== elem;
            const v8851 = v8849 && v8850;
            if (v8851) {
                const v8852 = r.push(n);
                v8852;
            }
        }
        return r;
    };
    const v8854 = {
        dir: v8847,
        sibling: v8853
    };
    const v8855 = jQuery.extend(v8854);
    v8855;
    const v8856 = jQuery.fn;
    const v8863 = function (target) {
        var i;
        var targets = jQuery(target, this);
        var len = targets.length;
        const v8861 = function () {
            (i = 0)
            let v8857 = i < len;
            while (v8857) {
                const v8859 = targets[i];
                const v8860 = jQuery.contains(this, v8859);
                if (v8860) {
                    return true;
                }
                const v8858 = i++;
                v8857 = i < len;
            }
        };
        const v8862 = this.filter(v8861);
        return v8862;
    };
    const v8893 = function (selectors, context) {
        var cur;
        var i = 0;
        var l = this.length;
        var matched = [];
        let pos;
        const v8864 = rneedsContext.test(selectors);
        const v8865 = typeof selectors;
        const v8866 = v8865 !== 'string';
        const v8867 = v8864 || v8866;
        const v8868 = this.context;
        const v8869 = context || v8868;
        const v8870 = jQuery(selectors, v8869);
        if (v8867) {
            pos = v8870;
        } else {
            pos = 0;
        }
        let v8871 = i < l;
        while (v8871) {
            cur = this[i]
            const v8873 = cur !== context;
            let v8874 = cur && v8873;
            while (v8874) {
                const v8875 = cur.nodeType;
                const v8876 = v8875 < 11;
                const v8877 = pos.index(cur);
                const v8878 = -1;
                const v8879 = v8877 > v8878;
                const v8880 = cur.nodeType;
                const v8881 = v8880 === 1;
                const v8882 = jQuery.find;
                const v8883 = v8882.matchesSelector(cur, selectors);
                const v8884 = v8881 && v8883;
                let v8885;
                if (pos) {
                    v8885 = v8879;
                } else {
                    v8885 = v8884;
                }
                const v8886 = v8876 && v8885;
                if (v8886) {
                    const v8887 = matched.push(cur);
                    v8887;
                    break;
                }
                v8874 = cur && v8873;
            }
            const v8872 = i++;
            v8871 = i < l;
        }
        const v8888 = matched.length;
        const v8889 = v8888 > 1;
        const v8890 = jQuery.unique(matched);
        let v8891;
        if (v8889) {
            v8891 = v8890;
        } else {
            v8891 = matched;
        }
        const v8892 = this.pushStack(v8891);
        return v8892;
    };
    const v8913 = function (elem) {
        const v8894 = !elem;
        if (v8894) {
            const v8895 = this[0];
            const v8896 = this[0];
            const v8897 = v8896.parentNode;
            const v8898 = v8895 && v8897;
            const v8899 = this.first();
            const v8900 = v8899.prevAll();
            const v8901 = v8900.length;
            const v8902 = -1;
            let v8903;
            if (v8898) {
                v8903 = v8901;
            } else {
                v8903 = v8902;
            }
            return v8903;
        }
        const v8904 = typeof elem;
        const v8905 = v8904 === 'string';
        if (v8905) {
            const v8906 = this[0];
            const v8907 = jQuery(elem);
            const v8908 = jQuery.inArray(v8906, v8907);
            return v8908;
        }
        const v8909 = elem.jquery;
        const v8910 = elem[0];
        let v8911;
        if (v8909) {
            v8911 = v8910;
        } else {
            v8911 = elem;
        }
        const v8912 = jQuery.inArray(v8911, this);
        return v8912;
    };
    const v8919 = function (selector, context) {
        const v8914 = this.get();
        const v8915 = jQuery(selector, context);
        const v8916 = jQuery.merge(v8914, v8915);
        const v8917 = jQuery.unique(v8916);
        const v8918 = this.pushStack(v8917);
        return v8918;
    };
    const v8926 = function (selector) {
        const v8920 = selector == null;
        const v8921 = this.prevObject;
        const v8922 = this.prevObject;
        const v8923 = v8922.filter(selector);
        let v8924;
        if (v8920) {
            v8924 = v8921;
        } else {
            v8924 = v8923;
        }
        const v8925 = this.add(v8924);
        return v8925;
    };
    const v8927 = {
        has: v8863,
        closest: v8893,
        index: v8913,
        add: v8919,
        addBack: v8926
    };
    const v8928 = v8856.extend(v8927);
    v8928;
    const sibling = function (cur, dir) {
        let v8931 = true;
        while (v8931) {
            cur = cur[dir];
            v8931 = cur && v8930;
        }
        return cur;
    };
    const v8936 = function (elem) {
        var parent = elem.parentNode;
        const v8932 = parent.nodeType;
        const v8933 = v8932 !== 11;
        const v8934 = parent && v8933;
        let v8935;
        if (v8934) {
            v8935 = parent;
        } else {
            v8935 = null;
        }
        return v8935;
    };
    const v8938 = function (elem) {
        const v8937 = jQuery.dir(elem, 'parentNode');
        return v8937;
    };
    const v8940 = function (elem, i, until) {
        const v8939 = jQuery.dir(elem, 'parentNode', until);
        return v8939;
    };
    const v8942 = function (elem) {
        const v8941 = sibling(elem, 'nextSibling');
        return v8941;
    };
    const v8944 = function (elem) {
        const v8943 = sibling(elem, 'previousSibling');
        return v8943;
    };
    const v8946 = function (elem) {
        const v8945 = jQuery.dir(elem, 'nextSibling');
        return v8945;
    };
    const v8948 = function (elem) {
        const v8947 = jQuery.dir(elem, 'previousSibling');
        return v8947;
    };
    const v8950 = function (elem, i, until) {
        const v8949 = jQuery.dir(elem, 'nextSibling', until);
        return v8949;
    };
    const v8952 = function (elem, i, until) {
        const v8951 = jQuery.dir(elem, 'previousSibling', until);
        return v8951;
    };
    const v8958 = function (elem) {
        const v8953 = elem.parentNode;
        const v8954 = {};
        const v8955 = v8953 || v8954;
        const v8956 = v8955.firstChild;
        const v8957 = jQuery.sibling(v8956, elem);
        return v8957;
    };
    const v8961 = function (elem) {
        const v8959 = elem.firstChild;
        const v8960 = jQuery.sibling(v8959);
        return v8960;
    };
    const v8971 = function (elem) {
        const v8962 = jQuery.nodeName(elem, 'iframe');
        const v8963 = elem.contentDocument;
        const v8964 = elem.contentWindow;
        const v8965 = v8964.document;
        const v8966 = v8963 || v8965;
        const v8967 = [];
        const v8968 = elem.childNodes;
        const v8969 = jQuery.merge(v8967, v8968);
        let v8970;
        if (v8962) {
            v8970 = v8966;
        } else {
            v8970 = v8969;
        }
        return v8970;
    };
    const v8972 = {
        parent: v8936,
        parents: v8938,
        parentsUntil: v8940,
        next: v8942,
        prev: v8944,
        nextAll: v8946,
        prevAll: v8948,
        nextUntil: v8950,
        prevUntil: v8952,
        siblings: v8958,
        children: v8961,
        contents: v8971
    };
    const v8987 = function (name, fn) {
        const v8973 = jQuery.fn;
        const v8986 = function (until, selector) {
            var ret = jQuery.map(this, fn, until);
            const v8974 = -5;
            const v8975 = name.slice(v8974);
            const v8976 = v8975 !== 'Until';
            if (v8976) {
                selector = until;
            }
            const v8977 = typeof selector;
            const v8978 = v8977 === 'string';
            const v8979 = selector && v8978;
            if (v8979) {
                ret = jQuery.filter(selector, ret);
            }
            const v8980 = this.length;
            const v8981 = v8980 > 1;
            if (v8981) {
                const v8982 = guaranteedUnique[name];
                const v8983 = !v8982;
                if (v8983) {
                    ret = jQuery.unique(ret);
                }
                const v8984 = rparentsprev.test(name);
                if (v8984) {
                    ret = ret.reverse();
                }
            }
            const v8985 = this.pushStack(ret);
            return v8985;
        };
        v8973[name] = v8986;
    };
    const v8988 = jQuery.each(v8972, v8987);
    v8988;
    var rnotwhite = /\S+/g;
    var optionsCache = {};
    const createOptions = function (options) {
        const v8989 = {};
        optionsCache[options] = v8989;
        var object = optionsCache[options];
        const v8990 = options.match(rnotwhite);
        const v8991 = [];
        const v8992 = v8990 || v8991;
        const v8993 = function (_, flag) {
            object[flag] = true;
        };
        const v8994 = jQuery.each(v8992, v8993);
        v8994;
        return object;
    };
    const v9081 = function (options) {
        const v8995 = typeof options;
        const v8996 = v8995 === 'string';
        const v8997 = optionsCache[options];
        const v8998 = createOptions(options);
        const v8999 = v8997 || v8998;
        const v9000 = {};
        const v9001 = jQuery.extend(v9000, options);
        if (v8996) {
            options = v8999;
        } else {
            options = v9001;
        }
        var firing;
        var memory;
        var fired;
        var firingLength;
        var firingIndex;
        var firingStart;
        var list = [];
        const v9002 = options.once;
        const v9003 = !v9002;
        const v9004 = [];
        var stack = v9003 && v9004;
        var fire = function (data) {
            const v9005 = options.memory;
            memory = v9005 && data;
            fired = true;
            firingIndex = firingStart || 0;
            firingStart = 0;
            firingLength = list.length;
            firing = true;
            const v9006 = firingIndex < firingLength;
            let v9007 = list && v9006;
            while (v9007) {
                const v9009 = list[firingIndex];
                const v9010 = data[0];
                const v9011 = data[1];
                const v9012 = v9009.apply(v9010, v9011);
                const v9013 = v9012 === false;
                const v9014 = options.stopOnFalse;
                const v9015 = v9013 && v9014;
                if (v9015) {
                    memory = false;
                    break;
                }
                const v9008 = firingIndex++;
                v9007 = list && v9006;
            }
            firing = false;
            if (list) {
                if (stack) {
                    const v9016 = stack.length;
                    if (v9016) {
                        const v9017 = stack.shift();
                        const v9018 = fire(v9017);
                        v9018;
                    }
                } else {
                    if (memory) {
                        list = [];
                    } else {
                        const v9019 = self.disable();
                        v9019;
                    }
                }
            }
        };
        const v9037 = function () {
            if (list) {
                var start = list.length;
                const v9034 = function add(args) {
                    const v9032 = function (_, arg) {
                        var type = jQuery.type(arg);
                        const v9020 = type === 'function';
                        if (v9020) {
                            const v9021 = options.unique;
                            const v9022 = !v9021;
                            const v9023 = self.has(arg);
                            const v9024 = !v9023;
                            const v9025 = v9022 || v9024;
                            if (v9025) {
                                const v9026 = list.push(arg);
                                v9026;
                            }
                        } else {
                            const v9027 = arg.length;
                            const v9028 = arg && v9027;
                            const v9029 = type !== 'string';
                            const v9030 = v9028 && v9029;
                            if (v9030) {
                                const v9031 = add(arg);
                                v9031;
                            }
                        }
                    };
                    const v9033 = jQuery.each(args, v9032);
                    v9033;
                };
                const v9035 = v9034(arguments);
                v9035;
                if (firing) {
                    firingLength = list.length;
                } else {
                    if (memory) {
                        firingStart = start;
                        const v9036 = fire(memory);
                        v9036;
                    }
                }
            }
            return this;
        };
        const v9047 = function () {
            if (list) {
                const v9045 = function (_, arg) {
                    var index;
                    const v9038 = -1;
                    let v9039 = (index = jQuery.inArray(arg, list, index)) > v9038;
                    while (v9039) {
                        const v9040 = list.splice(index, 1);
                        v9040;
                        if (firing) {
                            const v9041 = index <= firingLength;
                            if (v9041) {
                                const v9042 = firingLength--;
                                v9042;
                            }
                            const v9043 = index <= firingIndex;
                            if (v9043) {
                                const v9044 = firingIndex--;
                                v9044;
                            }
                        }
                        v9039 = (index = jQuery.inArray(arg, list, index)) > v9038;
                    }
                };
                const v9046 = jQuery.each(arguments, v9045);
                v9046;
            }
            return this;
        };
        const v9056 = function (fn) {
            const v9048 = jQuery.inArray(fn, list);
            const v9049 = -1;
            const v9050 = v9048 > v9049;
            const v9051 = list.length;
            const v9052 = list && v9051;
            const v9053 = !v9052;
            const v9054 = !v9053;
            let v9055;
            if (fn) {
                v9055 = v9050;
            } else {
                v9055 = v9054;
            }
            return v9055;
        };
        const v9057 = function () {
            list = [];
            firingLength = 0;
            return this;
        };
        const v9058 = function () {
            memory = undefined;
            stack = memory;
            list = stack;
            return this;
        };
        const v9060 = function () {
            const v9059 = !list;
            return v9059;
        };
        const v9063 = function () {
            stack = undefined;
            const v9061 = !memory;
            if (v9061) {
                const v9062 = self.disable();
                v9062;
            }
            return this;
        };
        const v9065 = function () {
            const v9064 = !stack;
            return v9064;
        };
        const v9075 = function (context, args) {
            const v9066 = !fired;
            const v9067 = v9066 || stack;
            const v9068 = list && v9067;
            if (v9068) {
                const v9069 = [];
                args = args || v9069;
                const v9070 = args.slice;
                const v9071 = args.slice();
                let v9072;
                if (v9070) {
                    v9072 = v9071;
                } else {
                    v9072 = args;
                }
                args = [
                    context,
                    v9072
                ];
                if (firing) {
                    const v9073 = stack.push(args);
                    v9073;
                } else {
                    const v9074 = fire(args);
                    v9074;
                }
            }
            return this;
        };
        const v9077 = function () {
            const v9076 = self.fireWith(this, arguments);
            v9076;
            return this;
        };
        const v9080 = function () {
            const v9078 = !fired;
            const v9079 = !v9078;
            return v9079;
        };
        var self = {};
        self.add = v9037;
        self.remove = v9047;
        self.has = v9056;
        self.empty = v9057;
        self.disable = v9058;
        self.disabled = v9060;
        self.lock = v9063;
        self.locked = v9065;
        self.fireWith = v9075;
        self.fire = v9077;
        self.fired = v9080;
        return self;
    };
    jQuery.Callbacks = v9081;
    const v9153 = function (func) {
        const v9082 = jQuery.Callbacks('once memory');
        const v9083 = [
            'resolve',
            'done',
            v9082,
            'resolved'
        ];
        const v9084 = jQuery.Callbacks('once memory');
        const v9085 = [
            'reject',
            'fail',
            v9084,
            'rejected'
        ];
        const v9086 = jQuery.Callbacks('memory');
        const v9087 = [
            'notify',
            'progress',
            v9086
        ];
        var tuples = [
            v9083,
            v9085,
            v9087
        ];
        var state = 'pending';
        const v9088 = function () {
            return state;
        };
        const v9091 = function () {
            const v9089 = deferred.done(arguments);
            const v9090 = v9089.fail(arguments);
            v9090;
            return this;
        };
        const v9122 = function () {
            var fns = arguments;
            const v9119 = function (newDefer) {
                const v9117 = function (i, tuple) {
                    const v9092 = fns[i];
                    const v9093 = jQuery.isFunction(v9092);
                    const v9094 = fns[i];
                    var fn = v9093 && v9094;
                    const v9095 = tuple[1];
                    const v9115 = function () {
                        const v9096 = fn.apply(this, arguments);
                        var returned = fn && v9096;
                        const v9097 = returned.promise;
                        const v9098 = jQuery.isFunction(v9097);
                        const v9099 = returned && v9098;
                        if (v9099) {
                            const v9100 = returned.promise();
                            const v9101 = newDefer.resolve;
                            const v9102 = v9100.done(v9101);
                            const v9103 = newDefer.reject;
                            const v9104 = v9102.fail(v9103);
                            const v9105 = newDefer.notify;
                            const v9106 = v9104.progress(v9105);
                            v9106;
                        } else {
                            const v9107 = tuple[0];
                            const v9108 = v9107 + 'With';
                            const v9109 = this === promise;
                            const v9110 = newDefer.promise();
                            let v9111;
                            if (v9109) {
                                v9111 = v9110;
                            } else {
                                v9111 = this;
                            }
                            const v9112 = [returned];
                            let v9113;
                            if (fn) {
                                v9113 = v9112;
                            } else {
                                v9113 = arguments;
                            }
                            const v9114 = newDefer[v9108](v9111, v9113);
                            v9114;
                        }
                    };
                    const v9116 = deferred[v9095](v9115);
                    v9116;
                };
                const v9118 = jQuery.each(tuples, v9117);
                v9118;
                fns = null;
            };
            const v9120 = jQuery.Deferred(v9119);
            const v9121 = v9120.promise();
            return v9121;
        };
        const v9126 = function (obj) {
            const v9123 = obj != null;
            const v9124 = jQuery.extend(obj, promise);
            let v9125;
            if (v9123) {
                v9125 = v9124;
            } else {
                v9125 = promise;
            }
            return v9125;
        };
        var promise = {};
        promise.state = v9088;
        promise.always = v9091;
        promise.then = v9122;
        promise.promise = v9126;
        var deferred = {};
        const v9127 = promise.then;
        promise.pipe = v9127;
        const v9149 = function (i, tuple) {
            var list = tuple[2];
            var stateString = tuple[3];
            const v9128 = tuple[1];
            const v9129 = list.add;
            promise[v9128] = v9129;
            if (stateString) {
                const v9130 = function () {
                    state = stateString;
                };
                const v9131 = i ^ 1;
                const v9132 = tuples[v9131];
                const v9133 = v9132[2];
                const v9134 = v9133.disable;
                const v9135 = tuples[2];
                const v9136 = v9135[2];
                const v9137 = v9136.lock;
                const v9138 = list.add(v9130, v9134, v9137);
                v9138;
            }
            const v9139 = tuple[0];
            const v9145 = function () {
                const v9140 = tuple[0];
                const v9141 = v9140 + 'With';
                const v9142 = this === deferred;
                let v9143;
                if (v9142) {
                    v9143 = promise;
                } else {
                    v9143 = this;
                }
                const v9144 = deferred[v9141](v9143, arguments);
                v9144;
                return this;
            };
            deferred[v9139] = v9145;
            const v9146 = tuple[0];
            const v9147 = v9146 + 'With';
            const v9148 = list.fireWith;
            deferred[v9147] = v9148;
        };
        const v9150 = jQuery.each(tuples, v9149);
        v9150;
        const v9151 = promise.promise(deferred);
        v9151;
        if (func) {
            const v9152 = func.call(deferred, deferred);
            v9152;
        }
        return deferred;
    };
    const v9191 = function (subordinate) {
        var i = 0;
        var resolveValues = slice.call(arguments);
        var length = resolveValues.length;
        let remaining;
        const v9154 = length !== 1;
        const v9155 = subordinate.promise;
        const v9156 = jQuery.isFunction(v9155);
        const v9157 = subordinate && v9156;
        const v9158 = v9154 || v9157;
        if (v9158) {
            remaining = length;
        } else {
            remaining = 0;
        }
        let deferred;
        const v9159 = remaining === 1;
        const v9160 = jQuery.Deferred();
        if (v9159) {
            deferred = subordinate;
        } else {
            deferred = v9160;
        }
        var updateFunc = function (i, contexts, values) {
            const v9170 = function (value) {
                contexts[i] = this;
                const v9161 = arguments.length;
                const v9162 = v9161 > 1;
                const v9163 = slice.call(arguments);
                let v9164;
                if (v9162) {
                    v9164 = v9163;
                } else {
                    v9164 = value;
                }
                values[i] = v9164;
                const v9165 = values === progressValues;
                if (v9165) {
                    const v9166 = deferred.notifyWith(contexts, values);
                    v9166;
                } else {
                    const v9167 = --remaining;
                    const v9168 = !v9167;
                    if (v9168) {
                        const v9169 = deferred.resolveWith(contexts, values);
                        v9169;
                    }
                }
            };
            return v9170;
        };
        var progressValues;
        var progressContexts;
        var resolveContexts;
        const v9171 = length > 1;
        if (v9171) {
            progressValues = new Array(length);
            progressContexts = new Array(length);
            resolveContexts = new Array(length);
            let v9172 = i < length;
            while (v9172) {
                const v9174 = resolveValues[i];
                const v9175 = resolveValues[i];
                const v9176 = v9175.promise;
                const v9177 = jQuery.isFunction(v9176);
                const v9178 = v9174 && v9177;
                if (v9178) {
                    const v9179 = resolveValues[i];
                    const v9180 = v9179.promise();
                    const v9181 = updateFunc(i, resolveContexts, resolveValues);
                    const v9182 = v9180.done(v9181);
                    const v9183 = deferred.reject;
                    const v9184 = v9182.fail(v9183);
                    const v9185 = updateFunc(i, progressContexts, progressValues);
                    const v9186 = v9184.progress(v9185);
                    v9186;
                } else {
                    const v9187 = --remaining;
                    v9187;
                }
                const v9173 = i++;
                v9172 = i < length;
            }
        }
        const v9188 = !remaining;
        if (v9188) {
            const v9189 = deferred.resolveWith(resolveContexts, resolveValues);
            v9189;
        }
        const v9190 = deferred.promise();
        return v9190;
    };
    const v9192 = {
        Deferred: v9153,
        when: v9191
    };
    const v9193 = jQuery.extend(v9192);
    v9193;
    var readyList;
    const v9194 = jQuery.fn;
    const v9198 = function (fn) {
        const v9195 = jQuery.ready;
        const v9196 = v9195.promise();
        const v9197 = v9196.done(fn);
        v9197;
        return this;
    };
    v9194.ready = v9198;
    const v9202 = function (hold) {
        if (hold) {
            const v9199 = jQuery.readyWait;
            const v9200 = v9199++;
            v9200;
        } else {
            const v9201 = jQuery.ready(true);
            v9201;
        }
    };
    const v9224 = function (wait) {
        const v9203 = wait === true;
        const v9204 = jQuery.readyWait;
        const v9205 = --v9204;
        const v9206 = jQuery.isReady;
        let v9207;
        if (v9203) {
            v9207 = v9205;
        } else {
            v9207 = v9206;
        }
        if (v9207) {
            return;
        }
        const v9208 = document.body;
        const v9209 = !v9208;
        if (v9209) {
            const v9210 = jQuery.ready;
            const v9211 = setTimeout(v9210);
            return v9211;
        }
        jQuery.isReady = true;
        const v9212 = wait !== true;
        const v9213 = jQuery.readyWait;
        const v9214 = --v9213;
        const v9215 = v9214 > 0;
        const v9216 = v9212 && v9215;
        if (v9216) {
            return;
        }
        const v9217 = [jQuery];
        const v9218 = readyList.resolveWith(document, v9217);
        v9218;
        const v9219 = jQuery.fn;
        const v9220 = v9219.trigger;
        if (v9220) {
            const v9221 = jQuery(document);
            const v9222 = v9221.trigger('ready');
            const v9223 = v9222.off('ready');
            v9223;
        }
    };
    const v9225 = {
        isReady: false,
        readyWait: 1,
        holdReady: v9202,
        ready: v9224
    };
    const v9226 = jQuery.extend(v9225);
    v9226;
    const detach = function () {
        const v9227 = document.addEventListener;
        if (v9227) {
            const v9228 = document.removeEventListener('DOMContentLoaded', completed, false);
            v9228;
            const v9229 = window.removeEventListener('load', completed, false);
            v9229;
        } else {
            const v9230 = document.detachEvent('onreadystatechange', completed);
            v9230;
            const v9231 = window.detachEvent('onload', completed);
            v9231;
        }
    };
    const completed = function () {
        const v9232 = document.addEventListener;
        const v9233 = event.type;
        const v9234 = v9233 === 'load';
        const v9235 = v9232 || v9234;
        const v9236 = document.readyState;
        const v9237 = v9236 === 'complete';
        const v9238 = v9235 || v9237;
        if (v9238) {
            const v9239 = detach();
            v9239;
            const v9240 = jQuery.ready();
            v9240;
        }
    };
    const v9241 = jQuery.ready;
    const v9266 = function (obj) {
        const v9242 = !readyList;
        if (v9242) {
            readyList = jQuery.Deferred();
            const v9243 = document.readyState;
            const v9244 = v9243 === 'complete';
            if (v9244) {
                const v9245 = jQuery.ready;
                const v9246 = setTimeout(v9245);
                v9246;
            } else {
                const v9247 = document.addEventListener;
                if (v9247) {
                    const v9248 = document.addEventListener('DOMContentLoaded', completed, false);
                    v9248;
                    const v9249 = window.addEventListener('load', completed, false);
                    v9249;
                } else {
                    const v9250 = document.attachEvent('onreadystatechange', completed);
                    v9250;
                    const v9251 = window.attachEvent('onload', completed);
                    v9251;
                    var top = false;
                    try {
                        const v9252 = window.frameElement;
                        const v9253 = v9252 == null;
                        const v9254 = document.documentElement;
                        top = v9253 && v9254;
                    } catch (e) {
                    }
                    const v9255 = top.doScroll;
                    const v9256 = top && v9255;
                    if (v9256) {
                        const v9263 = function doScrollCheck() {
                            const v9257 = jQuery.isReady;
                            const v9258 = !v9257;
                            if (v9258) {
                                try {
                                    const v9259 = top.doScroll('left');
                                    v9259;
                                } catch (e) {
                                    const v9260 = setTimeout(doScrollCheck, 50);
                                    return v9260;
                                }
                                const v9261 = detach();
                                v9261;
                                const v9262 = jQuery.ready();
                                v9262;
                            }
                        };
                        const v9264 = v9263();
                        v9264;
                    }
                }
            }
        }
        const v9265 = readyList.promise(obj);
        return v9265;
    };
    v9241.promise = v9266;
    const v9267 = typeof undefined;
    var strundefined = v9267;
    var i;
    const v9268 = jQuery(support);
    for (i in v9268) {
        break;
    }
    support.ownLast = i !== '0';
    support.inlineBlockNeedsLayout = false;
    const v9282 = function () {
        var container;
        var div;
        const v9269 = document.getElementsByTagName('body');
        var body = v9269[0];
        const v9270 = !body;
        if (v9270) {
            return;
        }
        container = document.createElement('div');
        const v9271 = container.style;
        v9271.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px';
        div = document.createElement('div');
        const v9272 = body.appendChild(container);
        const v9273 = v9272.appendChild(div);
        v9273;
        const v9274 = div.style;
        const v9275 = v9274.zoom;
        const v9276 = typeof v9275;
        const v9277 = v9276 !== strundefined;
        if (v9277) {
            const v9278 = div.style;
            v9278.cssText = 'border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1';
            const v9279 = div.offsetWidth;
            if (support.inlineBlockNeedsLayout = v9279 === 3) {
                const v9280 = body.style;
                v9280.zoom = 1;
            }
        }
        const v9281 = body.removeChild(container);
        v9281;
        div = null;
        container = div;
    };
    const v9283 = jQuery(v9282);
    v9283;
    const v9288 = function () {
        var div = document.createElement('div');
        const v9284 = support.deleteExpando;
        const v9285 = v9284 == null;
        if (v9285) {
            support.deleteExpando = true;
            try {
                const v9286 = div.test;
                const v9287 = delete v9286;
                v9287;
            } catch (e) {
                support.deleteExpando = false;
            }
        }
        div = null;
    };
    const v9289 = v9288();
    v9289;
    const v9306 = function (elem) {
        const v9290 = jQuery.noData;
        const v9291 = elem.nodeName;
        const v9292 = v9291 + ' ';
        const v9293 = v9292.toLowerCase();
        var noData = v9290[v9293];
        const v9294 = elem.nodeType;
        const v9295 = +v9294;
        var nodeType = v9295 || 1;
        const v9296 = nodeType !== 1;
        const v9297 = nodeType !== 9;
        const v9298 = v9296 && v9297;
        const v9299 = !noData;
        const v9300 = noData !== true;
        const v9301 = elem.getAttribute('classid');
        const v9302 = v9301 === noData;
        const v9303 = v9300 && v9302;
        const v9304 = v9299 || v9303;
        let v9305;
        if (v9298) {
            v9305 = false;
        } else {
            v9305 = v9304;
        }
        return v9305;
    };
    jQuery.acceptData = v9306;
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;
    var rmultiDash = /([A-Z])/g;
    const dataAttr = function (elem, key, data) {
        const v9307 = data === undefined;
        const v9308 = elem.nodeType;
        const v9309 = v9308 === 1;
        const v9310 = v9307 && v9309;
        if (v9310) {
            const v9311 = key.replace(rmultiDash, '-$1');
            const v9312 = v9311.toLowerCase();
            var name = 'data-' + v9312;
            data = elem.getAttribute(name);
            const v9313 = typeof data;
            const v9314 = v9313 === 'string';
            if (v9314) {
                try {
                    const v9315 = data === 'true';
                    const v9316 = data === 'false';
                    const v9317 = data === 'null';
                    const v9318 = +data;
                    const v9319 = v9318 + '';
                    const v9320 = v9319 === data;
                    const v9321 = +data;
                    const v9322 = rbrace.test(data);
                    const v9323 = jQuery.parseJSON(data);
                    let v9324;
                    if (v9322) {
                        v9324 = v9323;
                    } else {
                        v9324 = data;
                    }
                    let v9325;
                    if (v9320) {
                        v9325 = v9321;
                    } else {
                        v9325 = v9324;
                    }
                    let v9326;
                    if (v9317) {
                        v9326 = null;
                    } else {
                        v9326 = v9325;
                    }
                    let v9327;
                    if (v9316) {
                        v9327 = false;
                    } else {
                        v9327 = v9326;
                    }
                    if (v9315) {
                        data = true;
                    } else {
                        data = v9327;
                    }
                } catch (e) {
                }
                const v9328 = jQuery.data(elem, key, data);
                v9328;
            } else {
                data = undefined;
            }
        }
        return data;
    };
    const isEmptyDataObject = function (obj) {
        var name;
        for (name in obj) {
            const v9329 = name === 'data';
            const v9330 = obj[name];
            const v9331 = jQuery.isEmptyObject(v9330);
            const v9332 = v9329 && v9331;
            if (v9332) {
                continue;
            }
            const v9333 = name !== 'toJSON';
            if (v9333) {
                return false;
            }
        }
        return true;
    };
    const internalData = function (elem, name, data, pvt) {
        const v9334 = jQuery.acceptData(elem);
        const v9335 = !v9334;
        if (v9335) {
            return;
        }
        var ret;
        var thisCache;
        var internalKey = jQuery.expando;
        var isNode = elem.nodeType;
        let cache;
        const v9336 = jQuery.cache;
        if (isNode) {
            cache = v9336;
        } else {
            cache = elem;
        }
        let id;
        const v9337 = elem[internalKey];
        const v9338 = elem[internalKey];
        const v9339 = v9338 && internalKey;
        if (isNode) {
            id = v9337;
        } else {
            id = v9339;
        }
        const v9340 = !id;
        const v9341 = cache[id];
        const v9342 = !v9341;
        const v9343 = v9340 || v9342;
        const v9344 = !pvt;
        const v9345 = cache[id];
        const v9346 = v9345.data;
        const v9347 = !v9346;
        const v9348 = v9344 && v9347;
        const v9349 = v9343 || v9348;
        const v9350 = data === undefined;
        const v9351 = v9349 && v9350;
        const v9352 = typeof name;
        const v9353 = v9352 === 'string';
        const v9354 = v9351 && v9353;
        if (v9354) {
            return;
        }
        const v9355 = !id;
        if (v9355) {
            if (isNode) {
                const v9356 = deletedIds.pop();
                const v9357 = jQuery.guid;
                const v9358 = v9357++;
                elem.internalKey = v9356 || v9358;
                id = elem[internalKey];
            } else {
                id = internalKey;
            }
        }
        const v9359 = cache[id];
        const v9360 = !v9359;
        if (v9360) {
            const v9361 = {};
            const v9362 = jQuery.noop;
            const v9363 = { toJSON: v9362 };
            let v9364;
            if (isNode) {
                v9364 = v9361;
            } else {
                v9364 = v9363;
            }
            cache[id] = v9364;
        }
        const v9365 = typeof name;
        const v9366 = v9365 === 'object';
        const v9367 = typeof name;
        const v9368 = v9367 === 'function';
        const v9369 = v9366 || v9368;
        if (v9369) {
            if (pvt) {
                const v9370 = cache[id];
                const v9371 = jQuery.extend(v9370, name);
                cache[id] = v9371;
            } else {
                const v9373 = cache[id];
                const v9374 = v9373.data;
                const v9375 = jQuery.extend(v9374, name);
                v9372.data = v9375;
            }
        }
        thisCache = cache[id];
        const v9376 = !pvt;
        if (v9376) {
            const v9377 = thisCache.data;
            const v9378 = !v9377;
            if (v9378) {
                const v9379 = {};
                thisCache.data = v9379;
            }
            thisCache = thisCache.data;
        }
        const v9380 = data !== undefined;
        if (v9380) {
            const v9381 = jQuery.camelCase(name);
            thisCache[v9381] = data;
        }
        const v9382 = typeof name;
        const v9383 = v9382 === 'string';
        if (v9383) {
            ret = thisCache[name];
            const v9384 = ret == null;
            if (v9384) {
                const v9385 = jQuery.camelCase(name);
                ret = thisCache[v9385];
            }
        } else {
            ret = thisCache;
        }
        return ret;
    };
    const internalRemoveData = function (elem, name, pvt) {
        const v9386 = jQuery.acceptData(elem);
        const v9387 = !v9386;
        if (v9387) {
            return;
        }
        var thisCache;
        var i;
        var isNode = elem.nodeType;
        let cache;
        const v9388 = jQuery.cache;
        if (isNode) {
            cache = v9388;
        } else {
            cache = elem;
        }
        let id;
        const v9389 = jQuery.expando;
        const v9390 = elem[v9389];
        const v9391 = jQuery.expando;
        if (isNode) {
            id = v9390;
        } else {
            id = v9391;
        }
        const v9392 = cache[id];
        const v9393 = !v9392;
        if (v9393) {
            return;
        }
        if (name) {
            const v9394 = cache[id];
            const v9395 = cache[id];
            const v9396 = v9395.data;
            if (pvt) {
                thisCache = v9394;
            } else {
                thisCache = v9396;
            }
            if (thisCache) {
                const v9397 = jQuery.isArray(name);
                const v9398 = !v9397;
                if (v9398) {
                    const v9399 = name in thisCache;
                    if (v9399) {
                        name = [name];
                    } else {
                        name = jQuery.camelCase(name);
                        const v9400 = name in thisCache;
                        if (v9400) {
                            name = [name];
                        } else {
                            name = name.split(' ');
                        }
                    }
                } else {
                    const v9401 = jQuery.camelCase;
                    const v9402 = jQuery.map(name, v9401);
                    name = name.concat(v9402);
                }
                i = name.length;
                let v9403 = i--;
                while (v9403) {
                    const v9404 = name[i];
                    const v9405 = thisCache[v9404];
                    const v9406 = delete v9405;
                    v9406;
                    v9403 = i--;
                }
                const v9407 = isEmptyDataObject(thisCache);
                const v9408 = !v9407;
                const v9409 = jQuery.isEmptyObject(thisCache);
                const v9410 = !v9409;
                let v9411;
                if (pvt) {
                    v9411 = v9408;
                } else {
                    v9411 = v9410;
                }
                if (v9411) {
                    return;
                }
            }
        }
        const v9412 = !pvt;
        if (v9412) {
            const v9413 = cache[id];
            const v9414 = v9413.data;
            const v9415 = delete v9414;
            v9415;
            const v9416 = cache[id];
            const v9417 = isEmptyDataObject(v9416);
            const v9418 = !v9417;
            if (v9418) {
                return;
            }
        }
        if (isNode) {
            const v9419 = [elem];
            const v9420 = jQuery.cleanData(v9419, true);
            v9420;
        } else {
            const v9421 = support.deleteExpando;
            const v9422 = cache.window;
            const v9423 = cache != v9422;
            const v9424 = v9421 || v9423;
            if (v9424) {
                const v9425 = cache[id];
                const v9426 = delete v9425;
                v9426;
            } else {
                cache[id] = null;
            }
        }
    };
    const v9427 = {};
    const v9428 = {};
    v9428['applet '] = true;
    v9428['embed '] = true;
    v9428['object '] = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
    const v9441 = function (elem) {
        const v9429 = elem.nodeType;
        const v9430 = jQuery.cache;
        const v9431 = jQuery.expando;
        const v9432 = elem[v9431];
        const v9433 = v9430[v9432];
        const v9434 = jQuery.expando;
        const v9435 = elem[v9434];
        if (v9429) {
            elem = v9433;
        } else {
            elem = v9435;
        }
        const v9436 = !elem;
        const v9437 = !v9436;
        const v9438 = isEmptyDataObject(elem);
        const v9439 = !v9438;
        const v9440 = v9437 && v9439;
        return v9440;
    };
    const v9443 = function (elem, name, data) {
        const v9442 = internalData(elem, name, data);
        return v9442;
    };
    const v9445 = function (elem, name) {
        const v9444 = internalRemoveData(elem, name);
        return v9444;
    };
    const v9447 = function (elem, name, data) {
        const v9446 = internalData(elem, name, data, true);
        return v9446;
    };
    const v9449 = function (elem, name) {
        const v9448 = internalRemoveData(elem, name, true);
        return v9448;
    };
    const v9450 = {
        cache: v9427,
        noData: v9428,
        hasData: v9441,
        data: v9443,
        removeData: v9445,
        _data: v9447,
        _removeData: v9449
    };
    const v9451 = jQuery.extend(v9450);
    v9451;
    const v9452 = jQuery.fn;
    const v9483 = function (key, value) {
        var i;
        var name;
        var data;
        var elem = this[0];
        const v9453 = elem.attributes;
        var attrs = elem && v9453;
        const v9454 = key === undefined;
        if (v9454) {
            const v9455 = this.length;
            if (v9455) {
                data = jQuery.data(elem);
                const v9456 = elem.nodeType;
                const v9457 = v9456 === 1;
                const v9458 = jQuery._data(elem, 'parsedAttrs');
                const v9459 = !v9458;
                const v9460 = v9457 && v9459;
                if (v9460) {
                    i = attrs.length;
                    let v9461 = i--;
                    while (v9461) {
                        const v9462 = attrs[i];
                        name = v9462.name;
                        const v9463 = name.indexOf('data-');
                        const v9464 = v9463 === 0;
                        if (v9464) {
                            const v9465 = name.slice(5);
                            name = jQuery.camelCase(v9465);
                            const v9466 = data[name];
                            const v9467 = dataAttr(elem, name, v9466);
                            v9467;
                        }
                        v9461 = i--;
                    }
                    const v9468 = jQuery._data(elem, 'parsedAttrs', true);
                    v9468;
                }
            }
            return data;
        }
        const v9469 = typeof key;
        const v9470 = v9469 === 'object';
        if (v9470) {
            const v9472 = function () {
                const v9471 = jQuery.data(this, key);
                v9471;
            };
            const v9473 = this.each(v9472);
            return v9473;
        }
        const v9474 = arguments.length;
        const v9475 = v9474 > 1;
        const v9477 = function () {
            const v9476 = jQuery.data(this, key, value);
            v9476;
        };
        const v9478 = this.each(v9477);
        const v9479 = jQuery.data(elem, key);
        const v9480 = dataAttr(elem, key, v9479);
        let v9481;
        if (elem) {
            v9481 = v9480;
        } else {
            v9481 = undefined;
        }
        let v9482;
        if (v9475) {
            v9482 = v9478;
        } else {
            v9482 = v9481;
        }
        return v9482;
    };
    const v9487 = function (key) {
        const v9485 = function () {
            const v9484 = jQuery.removeData(this, key);
            v9484;
        };
        const v9486 = this.each(v9485);
        return v9486;
    };
    const v9488 = {
        data: v9483,
        removeData: v9487
    };
    const v9489 = v9452.extend(v9488);
    v9489;
    const v9498 = function (elem, type, data) {
        var queue;
        if (elem) {
            const v9490 = type || 'fx';
            type = v9490 + 'queue';
            queue = jQuery._data(elem, type);
            if (data) {
                const v9491 = !queue;
                const v9492 = jQuery.isArray(data);
                const v9493 = v9491 || v9492;
                if (v9493) {
                    const v9494 = jQuery.makeArray(data);
                    queue = jQuery._data(elem, type, v9494);
                } else {
                    const v9495 = queue.push(data);
                    v9495;
                }
            }
            const v9496 = [];
            const v9497 = queue || v9496;
            return v9497;
        }
    };
    const v9511 = function (elem, type) {
        type = type || 'fx';
        var queue = jQuery.queue(elem, type);
        var startLength = queue.length;
        var fn = queue.shift();
        var hooks = jQuery._queueHooks(elem, type);
        var next = function () {
            const v9499 = jQuery.dequeue(elem, type);
            v9499;
        };
        const v9500 = fn === 'inprogress';
        if (v9500) {
            fn = queue.shift();
            const v9501 = startLength--;
            v9501;
        }
        if (fn) {
            const v9502 = type === 'fx';
            if (v9502) {
                const v9503 = queue.unshift('inprogress');
                v9503;
            }
            const v9504 = hooks.stop;
            const v9505 = delete v9504;
            v9505;
            const v9506 = fn.call(elem, next, hooks);
            v9506;
        }
        const v9507 = !startLength;
        const v9508 = v9507 && hooks;
        if (v9508) {
            const v9509 = hooks.empty;
            const v9510 = v9509.fire();
            v9510;
        }
    };
    const v9522 = function (elem, type) {
        var key = type + 'queueHooks';
        const v9512 = jQuery._data(elem, key);
        const v9513 = jQuery.Callbacks('once memory');
        const v9517 = function () {
            const v9514 = type + 'queue';
            const v9515 = jQuery._removeData(elem, v9514);
            v9515;
            const v9516 = jQuery._removeData(elem, key);
            v9516;
        };
        const v9518 = v9513.add(v9517);
        const v9519 = { empty: v9518 };
        const v9520 = jQuery._data(elem, key, v9519);
        const v9521 = v9512 || v9520;
        return v9521;
    };
    const v9523 = {
        queue: v9498,
        dequeue: v9511,
        _queueHooks: v9522
    };
    const v9524 = jQuery.extend(v9523);
    v9524;
    const v9525 = jQuery.fn;
    const v9543 = function (type, data) {
        var setter = 2;
        const v9526 = typeof type;
        const v9527 = v9526 !== 'string';
        if (v9527) {
            data = type;
            type = 'fx';
            const v9528 = setter--;
            v9528;
        }
        const v9529 = arguments.length;
        const v9530 = v9529 < setter;
        if (v9530) {
            const v9531 = this[0];
            const v9532 = jQuery.queue(v9531, type);
            return v9532;
        }
        const v9533 = data === undefined;
        const v9540 = function () {
            var queue = jQuery.queue(this, type, data);
            const v9534 = jQuery._queueHooks(this, type);
            v9534;
            const v9535 = type === 'fx';
            const v9536 = queue[0];
            const v9537 = v9536 !== 'inprogress';
            const v9538 = v9535 && v9537;
            if (v9538) {
                const v9539 = jQuery.dequeue(this, type);
                v9539;
            }
        };
        const v9541 = this.each(v9540);
        let v9542;
        if (v9533) {
            v9542 = this;
        } else {
            v9542 = v9541;
        }
        return v9542;
    };
    const v9547 = function (type) {
        const v9545 = function () {
            const v9544 = jQuery.dequeue(this, type);
            v9544;
        };
        const v9546 = this.each(v9545);
        return v9546;
    };
    const v9551 = function (type) {
        const v9548 = type || 'fx';
        const v9549 = [];
        const v9550 = this.queue(v9548, v9549);
        return v9550;
    };
    const v9568 = function (type, obj) {
        var tmp;
        var count = 1;
        var defer = jQuery.Deferred();
        var elements = this;
        var i = this.length;
        var resolve = function () {
            const v9552 = --count;
            const v9553 = !v9552;
            if (v9553) {
                const v9554 = [elements];
                const v9555 = defer.resolveWith(elements, v9554);
                v9555;
            }
        };
        const v9556 = typeof type;
        const v9557 = v9556 !== 'string';
        if (v9557) {
            obj = type;
            type = undefined;
        }
        type = type || 'fx';
        let v9558 = i--;
        while (v9558) {
            const v9559 = elements[i];
            const v9560 = type + 'queueHooks';
            tmp = jQuery._data(v9559, v9560);
            const v9561 = tmp.empty;
            const v9562 = tmp && v9561;
            if (v9562) {
                const v9563 = count++;
                v9563;
                const v9564 = tmp.empty;
                const v9565 = v9564.add(resolve);
                v9565;
            }
            v9558 = i--;
        }
        const v9566 = resolve();
        v9566;
        const v9567 = defer.promise(obj);
        return v9567;
    };
    const v9569 = {
        queue: v9543,
        dequeue: v9547,
        clearQueue: v9551,
        promise: v9568
    };
    const v9570 = v9525.extend(v9569);
    v9570;
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var cssExpand = [
        'Top',
        'Right',
        'Bottom',
        'Left'
    ];
    var isHidden = function (elem, el) {
        elem = el || elem;
        const v9571 = jQuery.css(elem, 'display');
        const v9572 = v9571 === 'none';
        const v9573 = elem.ownerDocument;
        const v9574 = jQuery.contains(v9573, elem);
        const v9575 = !v9574;
        const v9576 = v9572 || v9575;
        return v9576;
    };
    const v9603 = function (elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0;
        var length = elems.length;
        var bulk = key == null;
        const v9577 = jQuery.type(key);
        const v9578 = v9577 === 'object';
        if (v9578) {
            chainable = true;
            for (i in key) {
                const v9579 = key[i];
                const v9580 = jQuery.access(elems, fn, i, v9579, true, emptyGet, raw);
                v9580;
            }
        } else {
            const v9581 = value !== undefined;
            if (v9581) {
                chainable = true;
                const v9582 = jQuery.isFunction(value);
                const v9583 = !v9582;
                if (v9583) {
                    raw = true;
                }
                if (bulk) {
                    if (raw) {
                        const v9584 = fn.call(elems, value);
                        v9584;
                        fn = null;
                    } else {
                        bulk = fn;
                        const v9587 = function (elem, key, value) {
                            const v9585 = jQuery(elem);
                            const v9586 = bulk.call(v9585, value);
                            return v9586;
                        };
                        fn = v9587;
                    }
                }
                if (fn) {
                    let v9588 = i < length;
                    while (v9588) {
                        const v9590 = elems[i];
                        const v9591 = elems[i];
                        const v9592 = elems[i];
                        const v9593 = fn(v9592, key);
                        const v9594 = value.call(v9591, i, v9593);
                        let v9595;
                        if (raw) {
                            v9595 = value;
                        } else {
                            v9595 = v9594;
                        }
                        const v9596 = fn(v9590, key, v9595);
                        v9596;
                        const v9589 = i++;
                        v9588 = i < length;
                    }
                }
            }
        }
        const v9597 = fn.call(elems);
        const v9598 = elems[0];
        const v9599 = fn(v9598, key);
        let v9600;
        if (length) {
            v9600 = v9599;
        } else {
            v9600 = emptyGet;
        }
        let v9601;
        if (bulk) {
            v9601 = v9597;
        } else {
            v9601 = v9600;
        }
        let v9602;
        if (chainable) {
            v9602 = elems;
        } else {
            v9602 = v9601;
        }
        return v9602;
    };
    jQuery.access = v9603;
    var access = jQuery.access;
    var rcheckableType = /^(?:checkbox|radio)$/i;
    const v9638 = function () {
        var fragment = document.createDocumentFragment();
        var div = document.createElement('div');
        var input = document.createElement('input');
        const v9604 = div.setAttribute('className', 't');
        v9604;
        div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a>';
        const v9605 = div.firstChild;
        const v9606 = v9605.nodeType;
        support.leadingWhitespace = v9606 === 3;
        const v9607 = div.getElementsByTagName('tbody');
        const v9608 = v9607.length;
        const v9609 = !v9608;
        support.tbody = v9609;
        const v9610 = div.getElementsByTagName('link');
        const v9611 = v9610.length;
        const v9612 = !v9611;
        const v9613 = !v9612;
        support.htmlSerialize = v9613;
        const v9614 = document.createElement('nav');
        const v9615 = v9614.cloneNode(true);
        const v9616 = v9615.outerHTML;
        support.html5Clone = v9616 !== '<:nav></:nav>';
        input.type = 'checkbox';
        input.checked = true;
        const v9617 = fragment.appendChild(input);
        v9617;
        const v9618 = input.checked;
        support.appendChecked = v9618;
        div.innerHTML = '<textarea>x</textarea>';
        const v9619 = div.cloneNode(true);
        const v9620 = v9619.lastChild;
        const v9621 = v9620.defaultValue;
        const v9622 = !v9621;
        const v9623 = !v9622;
        support.noCloneChecked = v9623;
        const v9624 = fragment.appendChild(div);
        v9624;
        div.innerHTML = '<input type=\'radio\' checked=\'checked\' name=\'t\'/>';
        const v9625 = div.cloneNode(true);
        const v9626 = v9625.cloneNode(true);
        const v9627 = v9626.lastChild;
        const v9628 = v9627.checked;
        support.checkClone = v9628;
        support.noCloneEvent = true;
        const v9629 = div.attachEvent;
        if (v9629) {
            const v9630 = function () {
                support.noCloneEvent = false;
            };
            const v9631 = div.attachEvent('onclick', v9630);
            v9631;
            const v9632 = div.cloneNode(true);
            const v9633 = v9632.click();
            v9633;
        }
        const v9634 = support.deleteExpando;
        const v9635 = v9634 == null;
        if (v9635) {
            support.deleteExpando = true;
            try {
                const v9636 = div.test;
                const v9637 = delete v9636;
                v9637;
            } catch (e) {
                support.deleteExpando = false;
            }
        }
        input = null;
        div = input;
        fragment = div;
    };
    const v9639 = v9638();
    v9639;
    const v9648 = function () {
        var i;
        var eventName;
        var div = document.createElement('div');
        const v9640 = {
            submit: true,
            change: true,
            focusin: true
        };
        for (i in v9640) {
            eventName = 'on' + i;
            const v9641 = i + 'Bubbles';
            const v9642 = !(support[v9641] = eventName in window);
            if (v9642) {
                const v9643 = div.setAttribute(eventName, 't');
                v9643;
                const v9644 = i + 'Bubbles';
                const v9645 = div.attributes;
                const v9646 = v9645[eventName];
                const v9647 = v9646.expando;
                support[v9644] = v9647 === false;
            }
        }
        div = null;
    };
    const v9649 = v9648();
    v9649;
    var rformElems = /^(?:input|select|textarea)$/i;
    var rkeyEvent = /^key/;
    var rmouseEvent = /^(?:mouse|contextmenu)|click/;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    const returnTrue = function () {
        return true;
    };
    const returnFalse = function () {
        return false;
    };
    const safeActiveElement = function () {
        try {
            const v9650 = document.activeElement;
            return v9650;
        } catch (err) {
        }
    };
    const v9651 = {};
    const v9732 = function (elem, types, handler, data, selector) {
        var tmp;
        var events;
        var t;
        var handleObjIn;
        var special;
        var eventHandle;
        var handleObj;
        var handlers;
        var type;
        var namespaces;
        var origType;
        var elemData = jQuery._data(elem);
        const v9652 = !elemData;
        if (v9652) {
            return;
        }
        const v9653 = handler.handler;
        if (v9653) {
            handleObjIn = handler;
            handler = handleObjIn.handler;
            selector = handleObjIn.selector;
        }
        const v9654 = handler.guid;
        const v9655 = !v9654;
        if (v9655) {
            const v9656 = jQuery.guid;
            const v9657 = v9656++;
            handler.guid = v9657;
        }
        const v9658 = !(events = elemData.events);
        if (v9658) {
            const v9659 = {};
            elemData.events = v9659;
            events = elemData.events;
        }
        const v9660 = !(eventHandle = elemData.handle);
        if (v9660) {
            const v9675 = function (e) {
                const v9661 = typeof jQuery;
                const v9662 = v9661 !== strundefined;
                const v9663 = !e;
                const v9664 = jQuery.event;
                const v9665 = v9664.triggered;
                const v9666 = e.type;
                const v9667 = v9665 !== v9666;
                const v9668 = v9663 || v9667;
                const v9669 = v9662 && v9668;
                const v9670 = jQuery.event;
                const v9671 = v9670.dispatch;
                const v9672 = eventHandle.elem;
                const v9673 = v9671.apply(v9672, arguments);
                let v9674;
                if (v9669) {
                    v9674 = v9673;
                } else {
                    v9674 = undefined;
                }
                return v9674;
            };
            elemData.handle = v9675;
            eventHandle = elemData.handle;
            eventHandle.elem = elem;
        }
        const v9676 = types || '';
        const v9677 = v9676.match(rnotwhite);
        const v9678 = [''];
        types = v9677 || v9678;
        t = types.length;
        let v9679 = t--;
        while (v9679) {
            const v9680 = types[t];
            const v9681 = rtypenamespace.exec(v9680);
            const v9682 = [];
            tmp = v9681 || v9682;
            origType = tmp[1];
            type = origType;
            const v9683 = tmp[2];
            const v9684 = v9683 || '';
            const v9685 = v9684.split('.');
            namespaces = v9685.sort();
            const v9686 = !type;
            if (v9686) {
                continue;
            }
            const v9687 = jQuery.event;
            const v9688 = v9687.special;
            const v9689 = v9688[type];
            const v9690 = {};
            special = v9689 || v9690;
            const v9691 = special.delegateType;
            const v9692 = special.bindType;
            let v9693;
            if (selector) {
                v9693 = v9691;
            } else {
                v9693 = v9692;
            }
            type = v9693 || type;
            const v9694 = jQuery.event;
            const v9695 = v9694.special;
            const v9696 = v9695[type];
            const v9697 = {};
            special = v9696 || v9697;
            const v9698 = handler.guid;
            const v9699 = jQuery.expr;
            const v9700 = v9699.match;
            const v9701 = v9700.needsContext;
            const v9702 = v9701.test(selector);
            const v9703 = selector && v9702;
            const v9704 = namespaces.join('.');
            const v9705 = {
                type: type,
                origType: origType,
                data: data,
                handler: handler,
                guid: v9698,
                selector: selector,
                needsContext: v9703,
                namespace: v9704
            };
            handleObj = jQuery.extend(v9705, handleObjIn);
            const v9706 = !(handlers = events[type]);
            if (v9706) {
                events.type = [];
                handlers = events[type];
                handlers.delegateCount = 0;
                const v9707 = special.setup;
                const v9708 = !v9707;
                const v9709 = special.setup;
                const v9710 = v9709.call(elem, data, namespaces, eventHandle);
                const v9711 = v9710 === false;
                const v9712 = v9708 || v9711;
                if (v9712) {
                    const v9713 = elem.addEventListener;
                    if (v9713) {
                        const v9714 = elem.addEventListener(type, eventHandle, false);
                        v9714;
                    } else {
                        const v9715 = elem.attachEvent;
                        if (v9715) {
                            const v9716 = 'on' + type;
                            const v9717 = elem.attachEvent(v9716, eventHandle);
                            v9717;
                        }
                    }
                }
            }
            const v9718 = special.add;
            if (v9718) {
                const v9719 = special.add;
                const v9720 = v9719.call(elem, handleObj);
                v9720;
                const v9721 = handleObj.handler;
                const v9722 = v9721.guid;
                const v9723 = !v9722;
                if (v9723) {
                    const v9724 = handleObj.handler;
                    const v9725 = handler.guid;
                    v9724.guid = v9725;
                }
            }
            if (selector) {
                const v9726 = handlers.delegateCount;
                const v9727 = v9726++;
                const v9728 = handlers.splice(v9727, 0, handleObj);
                v9728;
            } else {
                const v9729 = handlers.push(handleObj);
                v9729;
            }
            const v9730 = jQuery.event;
            const v9731 = v9730.global;
            v9731[type] = true;
            v9679 = t--;
        }
        elem = null;
    };
    const v9816 = function (elem, types, handler, selector, mappedTypes) {
        var j;
        var handleObj;
        var tmp;
        var origCount;
        var t;
        var events;
        var special;
        var handlers;
        var type;
        var namespaces;
        var origType;
        const v9733 = jQuery.hasData(elem);
        const v9734 = jQuery._data(elem);
        var elemData = v9733 && v9734;
        const v9735 = !elemData;
        const v9736 = !(events = elemData.events);
        const v9737 = v9735 || v9736;
        if (v9737) {
            return;
        }
        const v9738 = types || '';
        const v9739 = v9738.match(rnotwhite);
        const v9740 = [''];
        types = v9739 || v9740;
        t = types.length;
        let v9741 = t--;
        while (v9741) {
            const v9742 = types[t];
            const v9743 = rtypenamespace.exec(v9742);
            const v9744 = [];
            tmp = v9743 || v9744;
            origType = tmp[1];
            type = origType;
            const v9745 = tmp[2];
            const v9746 = v9745 || '';
            const v9747 = v9746.split('.');
            namespaces = v9747.sort();
            const v9748 = !type;
            if (v9748) {
                for (type in events) {
                    const v9749 = jQuery.event;
                    const v9750 = types[t];
                    const v9751 = type + v9750;
                    const v9752 = v9749.remove(elem, v9751, handler, selector, true);
                    v9752;
                }
                continue;
            }
            const v9753 = jQuery.event;
            const v9754 = v9753.special;
            const v9755 = v9754[type];
            const v9756 = {};
            special = v9755 || v9756;
            const v9757 = special.delegateType;
            const v9758 = special.bindType;
            let v9759;
            if (selector) {
                v9759 = v9757;
            } else {
                v9759 = v9758;
            }
            type = v9759 || type;
            const v9760 = events[type];
            const v9761 = [];
            handlers = v9760 || v9761;
            const v9762 = tmp[2];
            const v9763 = namespaces.join('\\.(?:.*\\.|)');
            const v9764 = '(^|\\.)' + v9763;
            const v9765 = v9764 + '(\\.|$)';
            const v9766 = new RegExp(v9765);
            tmp = v9762 && v9766;
            j = handlers.length;
            origCount = j;
            let v9767 = j--;
            while (v9767) {
                handleObj = handlers[j];
                const v9768 = handleObj.origType;
                const v9769 = origType === v9768;
                const v9770 = mappedTypes || v9769;
                const v9771 = !handler;
                const v9772 = handler.guid;
                const v9773 = handleObj.guid;
                const v9774 = v9772 === v9773;
                const v9775 = v9771 || v9774;
                const v9776 = v9770 && v9775;
                const v9777 = !tmp;
                const v9778 = handleObj.namespace;
                const v9779 = tmp.test(v9778);
                const v9780 = v9777 || v9779;
                const v9781 = v9776 && v9780;
                const v9782 = !selector;
                const v9783 = handleObj.selector;
                const v9784 = selector === v9783;
                const v9785 = v9782 || v9784;
                const v9786 = selector === '**';
                const v9787 = handleObj.selector;
                const v9788 = v9786 && v9787;
                const v9789 = v9785 || v9788;
                const v9790 = v9781 && v9789;
                if (v9790) {
                    const v9791 = handlers.splice(j, 1);
                    v9791;
                    const v9792 = handleObj.selector;
                    if (v9792) {
                        const v9793 = handlers.delegateCount;
                        const v9794 = v9793--;
                        v9794;
                    }
                    const v9795 = special.remove;
                    if (v9795) {
                        const v9796 = special.remove;
                        const v9797 = v9796.call(elem, handleObj);
                        v9797;
                    }
                }
                v9767 = j--;
            }
            const v9798 = handlers.length;
            const v9799 = !v9798;
            const v9800 = origCount && v9799;
            if (v9800) {
                const v9801 = special.teardown;
                const v9802 = !v9801;
                const v9803 = special.teardown;
                const v9804 = elemData.handle;
                const v9805 = v9803.call(elem, namespaces, v9804);
                const v9806 = v9805 === false;
                const v9807 = v9802 || v9806;
                if (v9807) {
                    const v9808 = elemData.handle;
                    const v9809 = jQuery.removeEvent(elem, type, v9808);
                    v9809;
                }
                const v9810 = events[type];
                const v9811 = delete v9810;
                v9811;
            }
            v9741 = t--;
        }
        const v9812 = jQuery.isEmptyObject(events);
        if (v9812) {
            const v9813 = elemData.handle;
            const v9814 = delete v9813;
            v9814;
            const v9815 = jQuery._removeData(elem, 'events');
            v9815;
        }
    };
    const v9936 = function (event, data, elem, onlyHandlers) {
        var handle;
        var ontype;
        var cur;
        var bubbleType;
        var special;
        var tmp;
        var i;
        const v9817 = elem || document;
        var eventPath = [v9817];
        let type;
        const v9818 = hasOwn.call(event, 'type');
        const v9819 = event.type;
        if (v9818) {
            type = v9819;
        } else {
            type = event;
        }
        let namespaces;
        const v9820 = hasOwn.call(event, 'namespace');
        const v9821 = event.namespace;
        const v9822 = v9821.split('.');
        const v9823 = [];
        if (v9820) {
            namespaces = v9822;
        } else {
            namespaces = v9823;
        }
        elem = elem || document;
        tmp = elem;
        cur = tmp;
        const v9824 = elem.nodeType;
        const v9825 = v9824 === 3;
        const v9826 = elem.nodeType;
        const v9827 = v9826 === 8;
        const v9828 = v9825 || v9827;
        if (v9828) {
            return;
        }
        const v9829 = jQuery.event;
        const v9830 = v9829.triggered;
        const v9831 = type + v9830;
        const v9832 = rfocusMorph.test(v9831);
        if (v9832) {
            return;
        }
        const v9833 = type.indexOf('.');
        const v9834 = v9833 >= 0;
        if (v9834) {
            namespaces = type.split('.');
            type = namespaces.shift();
            const v9835 = namespaces.sort();
            v9835;
        }
        const v9836 = type.indexOf(':');
        const v9837 = v9836 < 0;
        const v9838 = 'on' + type;
        ontype = v9837 && v9838;
        const v9839 = jQuery.expando;
        const v9840 = event[v9839];
        const v9841 = typeof event;
        const v9842 = v9841 === 'object';
        const v9843 = v9842 && event;
        const v9844 = new jQuery.Event(type, v9843);
        if (v9840) {
            event = event;
        } else {
            event = v9844;
        }
        let v9845;
        if (onlyHandlers) {
            v9845 = 2;
        } else {
            v9845 = 3;
        }
        event.isTrigger = v9845;
        const v9846 = namespaces.join('.');
        event.namespace = v9846;
        const v9847 = event.namespace;
        const v9848 = namespaces.join('\\.(?:.*\\.|)');
        const v9849 = '(^|\\.)' + v9848;
        const v9850 = v9849 + '(\\.|$)';
        const v9851 = new RegExp(v9850);
        let v9852;
        if (v9847) {
            v9852 = v9851;
        } else {
            v9852 = null;
        }
        event.namespace_re = v9852;
        event.result = undefined;
        const v9853 = event.target;
        const v9854 = !v9853;
        if (v9854) {
            event.target = elem;
        }
        const v9855 = data == null;
        const v9856 = [event];
        const v9857 = [event];
        const v9858 = jQuery.makeArray(data, v9857);
        if (v9855) {
            data = v9856;
        } else {
            data = v9858;
        }
        const v9859 = jQuery.event;
        const v9860 = v9859.special;
        const v9861 = v9860[type];
        const v9862 = {};
        special = v9861 || v9862;
        const v9863 = !onlyHandlers;
        const v9864 = special.trigger;
        const v9865 = v9863 && v9864;
        const v9866 = special.trigger;
        const v9867 = v9866.apply(elem, data);
        const v9868 = v9867 === false;
        const v9869 = v9865 && v9868;
        if (v9869) {
            return;
        }
        const v9870 = !onlyHandlers;
        const v9871 = special.noBubble;
        const v9872 = !v9871;
        const v9873 = v9870 && v9872;
        const v9874 = jQuery.isWindow(elem);
        const v9875 = !v9874;
        const v9876 = v9873 && v9875;
        if (v9876) {
            const v9877 = special.delegateType;
            bubbleType = v9877 || type;
            const v9878 = bubbleType + type;
            const v9879 = rfocusMorph.test(v9878);
            const v9880 = !v9879;
            if (v9880) {
                cur = cur.parentNode;
            }
            while (cur) {
                const v9881 = eventPath.push(cur);
                v9881;
                tmp = cur;
            }
            const v9882 = elem.ownerDocument;
            const v9883 = v9882 || document;
            const v9884 = tmp === v9883;
            if (v9884) {
                const v9885 = tmp.defaultView;
                const v9886 = tmp.parentWindow;
                const v9887 = v9885 || v9886;
                const v9888 = v9887 || window;
                const v9889 = eventPath.push(v9888);
                v9889;
            }
        }
        i = 0;
        const v9890 = i++;
        const v9891 = event.isPropagationStopped();
        const v9892 = !v9891;
        let v9893 = (cur = eventPath[v9890]) && v9892;
        while (v9893) {
            const v9894 = i > 1;
            const v9895 = special.bindType;
            const v9896 = v9895 || type;
            let v9897;
            if (v9894) {
                v9897 = bubbleType;
            } else {
                v9897 = v9896;
            }
            event.type = v9897;
            const v9898 = jQuery._data(cur, 'events');
            const v9899 = {};
            const v9900 = v9898 || v9899;
            const v9901 = event.type;
            const v9902 = v9900[v9901];
            const v9903 = jQuery._data(cur, 'handle');
            handle = v9902 && v9903;
            if (handle) {
                const v9904 = handle.apply(cur, data);
                v9904;
            }
            const v9905 = cur[ontype];
            handle = ontype && v9905;
            const v9906 = handle.apply;
            const v9907 = handle && v9906;
            const v9908 = jQuery.acceptData(cur);
            const v9909 = v9907 && v9908;
            if (v9909) {
                const v9910 = handle.apply(cur, data);
                event.result = v9910;
                const v9911 = event.result;
                const v9912 = v9911 === false;
                if (v9912) {
                    const v9913 = event.preventDefault();
                    v9913;
                }
            }
            v9893 = (cur = eventPath[v9890]) && v9892;
        }
        event.type = type;
        const v9914 = !onlyHandlers;
        const v9915 = event.isDefaultPrevented();
        const v9916 = !v9915;
        const v9917 = v9914 && v9916;
        if (v9917) {
            const v9918 = special._default;
            const v9919 = !v9918;
            const v9920 = special._default;
            const v9921 = eventPath.pop();
            const v9922 = v9920.apply(v9921, data);
            const v9923 = v9922 === false;
            const v9924 = v9919 || v9923;
            const v9925 = jQuery.acceptData(elem);
            const v9926 = v9924 && v9925;
            if (v9926) {
                const v9927 = elem[type];
                const v9928 = ontype && v9927;
                const v9929 = jQuery.isWindow(elem);
                const v9930 = !v9929;
                const v9931 = v9928 && v9930;
                if (v9931) {
                    tmp = elem[ontype];
                    if (tmp) {
                        elem[ontype] = null;
                    }
                    const v9932 = jQuery.event;
                    v9932.triggered = type;
                    try {
                        const v9933 = elem[type]();
                        v9933;
                    } catch (e) {
                    }
                    const v9934 = jQuery.event;
                    v9934.triggered = undefined;
                    if (tmp) {
                        elem[ontype] = tmp;
                    }
                }
            }
        }
        const v9935 = event.result;
        return v9935;
    };
    const v9991 = function (event) {
        const v9937 = jQuery.event;
        event = v9937.fix(event);
        var i;
        var ret;
        var handleObj;
        var matched;
        var j;
        var handlerQueue = [];
        var args = slice.call(arguments);
        const v9938 = jQuery._data(this, 'events');
        const v9939 = {};
        const v9940 = v9938 || v9939;
        const v9941 = event.type;
        const v9942 = v9940[v9941];
        const v9943 = [];
        var handlers = v9942 || v9943;
        const v9944 = jQuery.event;
        const v9945 = v9944.special;
        const v9946 = event.type;
        const v9947 = v9945[v9946];
        const v9948 = {};
        var special = v9947 || v9948;
        args[0] = event;
        event.delegateTarget = this;
        const v9949 = special.preDispatch;
        const v9950 = special.preDispatch;
        const v9951 = v9950.call(this, event);
        const v9952 = v9951 === false;
        const v9953 = v9949 && v9952;
        if (v9953) {
            return;
        }
        const v9954 = jQuery.event;
        const v9955 = v9954.handlers;
        handlerQueue = v9955.call(this, event, handlers);
        i = 0;
        const v9956 = i++;
        const v9957 = event.isPropagationStopped();
        const v9958 = !v9957;
        let v9959 = (matched = handlerQueue[v9956]) && v9958;
        while (v9959) {
            const v9960 = matched.elem;
            event.currentTarget = v9960;
            j = 0;
            const v9961 = matched.handlers;
            const v9962 = j++;
            const v9963 = event.isImmediatePropagationStopped();
            const v9964 = !v9963;
            let v9965 = (handleObj = v9961[v9962]) && v9964;
            while (v9965) {
                const v9966 = event.namespace_re;
                const v9967 = !v9966;
                const v9968 = event.namespace_re;
                const v9969 = handleObj.namespace;
                const v9970 = v9968.test(v9969);
                const v9971 = v9967 || v9970;
                if (v9971) {
                    event.handleObj = handleObj;
                    const v9972 = handleObj.data;
                    event.data = v9972;
                    const v9973 = jQuery.event;
                    const v9974 = v9973.special;
                    const v9975 = handleObj.origType;
                    const v9976 = v9974[v9975];
                    const v9977 = {};
                    const v9978 = v9976 || v9977;
                    const v9979 = v9978.handle;
                    const v9980 = handleObj.handler;
                    const v9981 = v9979 || v9980;
                    const v9982 = matched.elem;
                    ret = v9981.apply(v9982, args);
                    const v9983 = ret !== undefined;
                    if (v9983) {
                        const v9984 = (event.result = ret) === false;
                        if (v9984) {
                            const v9985 = event.preventDefault();
                            v9985;
                            const v9986 = event.stopPropagation();
                            v9986;
                        }
                    }
                }
                v9965 = (handleObj = v9961[v9962]) && v9964;
            }
            v9959 = (matched = handlerQueue[v9956]) && v9958;
        }
        const v9987 = special.postDispatch;
        if (v9987) {
            const v9988 = special.postDispatch;
            const v9989 = v9988.call(this, event);
            v9989;
        }
        const v9990 = event.result;
        return v9990;
    };
    const v10033 = function (event, handlers) {
        var sel;
        var handleObj;
        var matches;
        var i;
        var handlerQueue = [];
        var delegateCount = handlers.delegateCount;
        var cur = event.target;
        const v9992 = cur.nodeType;
        const v9993 = delegateCount && v9992;
        const v9994 = event.button;
        const v9995 = !v9994;
        const v9996 = event.type;
        const v9997 = v9996 !== 'click';
        const v9998 = v9995 || v9997;
        const v9999 = v9993 && v9998;
        if (v9999) {
            let v10000 = cur != this;
            while (v10000) {
                const v10002 = cur.nodeType;
                const v10003 = v10002 === 1;
                const v10004 = cur.disabled;
                const v10005 = v10004 !== true;
                const v10006 = event.type;
                const v10007 = v10006 !== 'click';
                const v10008 = v10005 || v10007;
                const v10009 = v10003 && v10008;
                if (v10009) {
                    matches = [];
                    i = 0
                    let v10010 = i < delegateCount;
                    while (v10010) {
                        handleObj = handlers[i];
                        const v10012 = handleObj.selector;
                        sel = v10012 + ' ';
                        const v10013 = matches[sel];
                        const v10014 = v10013 === undefined;
                        if (v10014) {
                            const v10015 = handleObj.needsContext;
                            const v10016 = jQuery(sel, this);
                            const v10017 = v10016.index(cur);
                            const v10018 = v10017 >= 0;
                            const v10019 = [cur];
                            const v10020 = jQuery.find(sel, this, null, v10019);
                            const v10021 = v10020.length;
                            let v10022;
                            if (v10015) {
                                v10022 = v10018;
                            } else {
                                v10022 = v10021;
                            }
                            matches[sel] = v10022;
                        }
                        const v10023 = matches[sel];
                        if (v10023) {
                            const v10024 = matches.push(handleObj);
                            v10024;
                        }
                        const v10011 = i++;
                        v10010 = i < delegateCount;
                    }
                    const v10025 = matches.length;
                    if (v10025) {
                        const v10026 = {
                            elem: cur,
                            handlers: matches
                        };
                        const v10027 = handlerQueue.push(v10026);
                        v10027;
                    }
                }
                const v10001 = cur.parentNode;
                v10000 = cur != this;
            }
        }
        const v10028 = handlers.length;
        const v10029 = delegateCount < v10028;
        if (v10029) {
            const v10030 = handlers.slice(delegateCount);
            const v10031 = {
                elem: this,
                handlers: v10030
            };
            const v10032 = handlerQueue.push(v10031);
            v10032;
        }
        return handlerQueue;
    };
    const v10066 = function (event) {
        const v10034 = jQuery.expando;
        const v10035 = event[v10034];
        if (v10035) {
            return event;
        }
        var i;
        var prop;
        var copy;
        var type = event.type;
        var originalEvent = event;
        const v10036 = this.fixHooks;
        var fixHook = v10036[type];
        const v10037 = !fixHook;
        if (v10037) {
            this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
        }
        const v10045 = fixHook.props;
        const v10046 = this.props;
        const v10047 = fixHook.props;
        const v10048 = v10046.concat(v10047);
        const v10049 = this.props;
        if (v10045) {
            copy = v10048;
        } else {
            copy = v10049;
        }
        event = new jQuery.Event(originalEvent);
        i = copy.length;
        let v10050 = i--;
        while (v10050) {
            prop = copy[i];
            const v10051 = originalEvent[prop];
            event[prop] = v10051;
            v10050 = i--;
        }
        const v10052 = event.target;
        const v10053 = !v10052;
        if (v10053) {
            const v10054 = originalEvent.srcElement;
            event.target = v10054 || document;
        }
        const v10055 = event.target;
        const v10056 = v10055.nodeType;
        const v10057 = v10056 === 3;
        if (v10057) {
            const v10058 = event.target;
            const v10059 = v10058.parentNode;
            event.target = v10059;
        }
        const v10060 = event.metaKey;
        const v10061 = !v10060;
        const v10062 = !v10061;
        event.metaKey = v10062;
        const v10063 = fixHook.filter;
        const v10064 = fixHook.filter(event, originalEvent);
        let v10065;
        if (v10063) {
            v10065 = v10064;
        } else {
            v10065 = event;
        }
        return v10065;
    };
    const v10067 = 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' ');
    const v10068 = {};
    const v10069 = 'char charCode key keyCode'.split(' ');
    const v10077 = function (event, original) {
        const v10070 = event.which;
        const v10071 = v10070 == null;
        if (v10071) {
            const v10072 = original.charCode;
            const v10073 = v10072 != null;
            const v10074 = original.charCode;
            const v10075 = original.keyCode;
            let v10076;
            if (v10073) {
                v10076 = v10074;
            } else {
                v10076 = v10075;
            }
            event.which = v10076;
        }
        return event;
    };
    const v10078 = {};
    v10078.props = v10069;
    v10078.filter = v10077;
    const v10079 = 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' ');
    const v10132 = function (event, original) {
        var body;
        var eventDoc;
        var doc;
        var button = original.button;
        var fromElement = original.fromElement;
        const v10080 = event.pageX;
        const v10081 = v10080 == null;
        const v10082 = original.clientX;
        const v10083 = v10082 != null;
        const v10084 = v10081 && v10083;
        if (v10084) {
            const v10085 = event.target;
            const v10086 = v10085.ownerDocument;
            eventDoc = v10086 || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;
            const v10087 = original.clientX;
            const v10088 = doc.scrollLeft;
            const v10089 = doc && v10088;
            const v10090 = body.scrollLeft;
            const v10091 = body && v10090;
            const v10092 = v10089 || v10091;
            const v10093 = v10092 || 0;
            const v10094 = v10087 + v10093;
            const v10095 = doc.clientLeft;
            const v10096 = doc && v10095;
            const v10097 = body.clientLeft;
            const v10098 = body && v10097;
            const v10099 = v10096 || v10098;
            const v10100 = v10099 || 0;
            event.pageX = v10094 - v10100;
            const v10101 = original.clientY;
            const v10102 = doc.scrollTop;
            const v10103 = doc && v10102;
            const v10104 = body.scrollTop;
            const v10105 = body && v10104;
            const v10106 = v10103 || v10105;
            const v10107 = v10106 || 0;
            const v10108 = v10101 + v10107;
            const v10109 = doc.clientTop;
            const v10110 = doc && v10109;
            const v10111 = body.clientTop;
            const v10112 = body && v10111;
            const v10113 = v10110 || v10112;
            const v10114 = v10113 || 0;
            event.pageY = v10108 - v10114;
        }
        const v10115 = event.relatedTarget;
        const v10116 = !v10115;
        const v10117 = v10116 && fromElement;
        if (v10117) {
            const v10118 = event.target;
            const v10119 = fromElement === v10118;
            const v10120 = original.toElement;
            let v10121;
            if (v10119) {
                v10121 = v10120;
            } else {
                v10121 = fromElement;
            }
            event.relatedTarget = v10121;
        }
        const v10122 = event.which;
        const v10123 = !v10122;
        const v10124 = button !== undefined;
        const v10125 = v10123 && v10124;
        if (v10125) {
            const v10126 = button & 1;
            const v10127 = button & 2;
            const v10128 = button & 4;
            let v10129;
            if (v10128) {
                v10129 = 2;
            } else {
                v10129 = 0;
            }
            let v10130;
            if (v10127) {
                v10130 = 3;
            } else {
                v10130 = v10129;
            }
            let v10131;
            if (v10126) {
                v10131 = 1;
            } else {
                v10131 = v10130;
            }
            event.which = v10131;
        }
        return event;
    };
    const v10133 = {};
    v10133.props = v10079;
    v10133.filter = v10132;
    const v10134 = {};
    v10134.noBubble = true;
    const v10140 = function () {
        const v10135 = safeActiveElement();
        const v10136 = this !== v10135;
        const v10137 = this.focus;
        const v10138 = v10136 && v10137;
        if (v10138) {
            try {
                const v10139 = this.focus();
                v10139;
                return false;
            } catch (e) {
            }
        }
    };
    const v10141 = {};
    v10141.trigger = v10140;
    v10141.delegateType = 'focusin';
    const v10147 = function () {
        const v10142 = safeActiveElement();
        const v10143 = this === v10142;
        const v10144 = this.blur;
        const v10145 = v10143 && v10144;
        if (v10145) {
            const v10146 = this.blur();
            v10146;
            return false;
        }
    };
    const v10148 = {};
    v10148.trigger = v10147;
    v10148.delegateType = 'focusout';
    const v10156 = function () {
        const v10149 = jQuery.nodeName(this, 'input');
        const v10150 = this.type;
        const v10151 = v10150 === 'checkbox';
        const v10152 = v10149 && v10151;
        const v10153 = this.click;
        const v10154 = v10152 && v10153;
        if (v10154) {
            const v10155 = this.click();
            v10155;
            return false;
        }
    };
    const v10159 = function (event) {
        const v10157 = event.target;
        const v10158 = jQuery.nodeName(v10157, 'a');
        return v10158;
    };
    const v10160 = {};
    v10160.trigger = v10156;
    v10160._default = v10159;
    const v10165 = function (event) {
        const v10161 = event.result;
        const v10162 = v10161 !== undefined;
        if (v10162) {
            const v10163 = event.originalEvent;
            const v10164 = event.result;
            v10163.returnValue = v10164;
        }
    };
    const v10166 = {};
    v10166.postDispatch = v10165;
    const v10167 = {};
    v10167.load = v10134;
    v10167.focus = v10141;
    v10167.blur = v10148;
    v10167.click = v10160;
    v10167.beforeunload = v10166;
    const v10178 = function (type, elem, event, bubble) {
        const v10168 = new jQuery.Event();
        const v10169 = {};
        const v10170 = {
            type: type,
            isSimulated: true,
            originalEvent: v10169
        };
        var e = jQuery.extend(v10168, event, v10170);
        if (bubble) {
            const v10171 = jQuery.event;
            const v10172 = v10171.trigger(e, null, elem);
            v10172;
        } else {
            const v10173 = jQuery.event;
            const v10174 = v10173.dispatch;
            const v10175 = v10174.call(elem, e);
            v10175;
        }
        const v10176 = e.isDefaultPrevented();
        if (v10176) {
            const v10177 = event.preventDefault();
            v10177;
        }
    };
    const v10179 = {};
    v10179.global = v9651;
    v10179.add = v9732;
    v10179.remove = v9816;
    v10179.trigger = v9936;
    v10179.dispatch = v9991;
    v10179.handlers = v10033;
    v10179.fix = v10066;
    v10179.props = v10067;
    v10179.fixHooks = v10068;
    v10179.keyHooks = v10078;
    v10179.mouseHooks = v10133;
    v10179.special = v10167;
    v10179.simulate = v10178;
    jQuery.event = v10179;
    const v10180 = document.removeEventListener;
    const v10183 = function (elem, type, handle) {
        const v10181 = elem.removeEventListener;
        if (v10181) {
            const v10182 = elem.removeEventListener(type, handle, false);
            v10182;
        }
    };
    const v10189 = function (elem, type, handle) {
        var name = 'on' + type;
        const v10184 = elem.detachEvent;
        if (v10184) {
            const v10185 = elem[name];
            const v10186 = typeof v10185;
            const v10187 = v10186 === strundefined;
            if (v10187) {
                elem[name] = null;
            }
            const v10188 = elem.detachEvent(name, handle);
            v10188;
        }
    };
    let v10190;
    if (v10180) {
        v10190 = v10183;
    } else {
        v10190 = v10189;
    }
    jQuery.removeEvent = v10190;
    const v10215 = function (src, props) {
        const v10191 = jQuery.Event;
        const v10192 = this instanceof v10191;
        const v10193 = !v10192;
        if (v10193) {
            const v10194 = new jQuery.Event(src, props);
            return v10194;
        }
        const v10195 = src.type;
        const v10196 = src && v10195;
        if (v10196) {
            this.originalEvent = src;
            const v10197 = src.type;
            this.type = v10197;
            const v10198 = src.defaultPrevented;
            const v10199 = src.defaultPrevented;
            const v10200 = v10199 === undefined;
            const v10201 = src.returnValue;
            const v10202 = v10201 === false;
            const v10203 = src.getPreventDefault;
            const v10204 = src.getPreventDefault();
            const v10205 = v10203 && v10204;
            const v10206 = v10202 || v10205;
            const v10207 = v10200 && v10206;
            const v10208 = v10198 || v10207;
            let v10209;
            if (v10208) {
                v10209 = returnTrue;
            } else {
                v10209 = returnFalse;
            }
            this.isDefaultPrevented = v10209;
        } else {
            this.type = src;
        }
        if (props) {
            const v10210 = jQuery.extend(this, props);
            v10210;
        }
        const v10211 = src.timeStamp;
        const v10212 = src && v10211;
        const v10213 = jQuery.now();
        this.timeStamp = v10212 || v10213;
        const v10214 = jQuery.expando;
        this[v10214] = true;
    };
    jQuery.Event = v10215;
    const v10216 = jQuery.Event;
    const v10220 = function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = returnTrue;
        const v10217 = !e;
        if (v10217) {
            return;
        }
        const v10218 = e.preventDefault;
        if (v10218) {
            const v10219 = e.preventDefault();
            v10219;
        } else {
            e.returnValue = false;
        }
    };
    const v10224 = function () {
        var e = this.originalEvent;
        this.isPropagationStopped = returnTrue;
        const v10221 = !e;
        if (v10221) {
            return;
        }
        const v10222 = e.stopPropagation;
        if (v10222) {
            const v10223 = e.stopPropagation();
            v10223;
        }
        e.cancelBubble = true;
    };
    const v10226 = function () {
        this.isImmediatePropagationStopped = returnTrue;
        const v10225 = this.stopPropagation();
        v10225;
    };
    const v10227 = {};
    v10227.isDefaultPrevented = returnFalse;
    v10227.isPropagationStopped = returnFalse;
    v10227.isImmediatePropagationStopped = returnFalse;
    v10227.preventDefault = v10220;
    v10227.stopPropagation = v10224;
    v10227.stopImmediatePropagation = v10226;
    v10216.prototype = v10227;
    const v10228 = {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout'
    };
    const v10241 = function (orig, fix) {
        const v10229 = jQuery.event;
        const v10230 = v10229.special;
        const v10239 = function (event) {
            var ret;
            var target = this;
            var related = event.relatedTarget;
            var handleObj = event.handleObj;
            const v10231 = !related;
            const v10232 = related !== target;
            const v10233 = jQuery.contains(target, related);
            const v10234 = !v10233;
            const v10235 = v10232 && v10234;
            const v10236 = v10231 || v10235;
            if (v10236) {
                const v10237 = handleObj.origType;
                event.type = v10237;
                const v10238 = handleObj.handler;
                ret = v10238.apply(this, arguments);
                event.type = fix;
            }
            return ret;
        };
        const v10240 = {};
        v10240.delegateType = fix;
        v10240.bindType = fix;
        v10240.handle = v10239;
        v10230[orig] = v10240;
    };
    const v10242 = jQuery.each(v10228, v10241);
    v10242;
    const v10243 = support.submitBubbles;
    const v10244 = !v10243;
    if (v10244) {
        const v10245 = jQuery.event;
        const v10246 = v10245.special;
        const v10262 = function () {
            const v10247 = jQuery.nodeName(this, 'form');
            if (v10247) {
                return false;
            }
            const v10248 = jQuery.event;
            const v10260 = function (e) {
                var elem = e.target;
                let form;
                const v10249 = jQuery.nodeName(elem, 'input');
                const v10250 = jQuery.nodeName(elem, 'button');
                const v10251 = v10249 || v10250;
                const v10252 = elem.form;
                if (v10251) {
                    form = v10252;
                } else {
                    form = undefined;
                }
                const v10253 = jQuery._data(form, 'submitBubbles');
                const v10254 = !v10253;
                const v10255 = form && v10254;
                if (v10255) {
                    const v10256 = jQuery.event;
                    const v10257 = function (event) {
                        event._submit_bubble = true;
                    };
                    const v10258 = v10256.add(form, 'submit._submit', v10257);
                    v10258;
                    const v10259 = jQuery._data(form, 'submitBubbles', true);
                    v10259;
                }
            };
            const v10261 = v10248.add(this, 'click._submit keypress._submit', v10260);
            v10261;
        };
        const v10273 = function (event) {
            const v10263 = event._submit_bubble;
            if (v10263) {
                const v10264 = event._submit_bubble;
                const v10265 = delete v10264;
                v10265;
                const v10266 = this.parentNode;
                const v10267 = event.isTrigger;
                const v10268 = !v10267;
                const v10269 = v10266 && v10268;
                if (v10269) {
                    const v10270 = jQuery.event;
                    const v10271 = this.parentNode;
                    const v10272 = v10270.simulate('submit', v10271, event, true);
                    v10272;
                }
            }
        };
        const v10277 = function () {
            const v10274 = jQuery.nodeName(this, 'form');
            if (v10274) {
                return false;
            }
            const v10275 = jQuery.event;
            const v10276 = v10275.remove(this, '._submit');
            v10276;
        };
        const v10278 = {};
        v10278.setup = v10262;
        v10278.postDispatch = v10273;
        v10278.teardown = v10277;
        v10246.submit = v10278;
    }
    const v10279 = support.changeBubbles;
    const v10280 = !v10279;
    if (v10280) {
        const v10281 = jQuery.event;
        const v10282 = v10281.special;
        const v10327 = function () {
            const v10283 = this.nodeName;
            const v10284 = rformElems.test(v10283);
            if (v10284) {
                const v10285 = this.type;
                const v10286 = v10285 === 'checkbox';
                const v10287 = this.type;
                const v10288 = v10287 === 'radio';
                const v10289 = v10286 || v10288;
                if (v10289) {
                    const v10290 = jQuery.event;
                    const v10294 = function (event) {
                        const v10291 = event.originalEvent;
                        const v10292 = v10291.propertyName;
                        const v10293 = v10292 === 'checked';
                        if (v10293) {
                            this._just_changed = true;
                        }
                    };
                    const v10295 = v10290.add(this, 'propertychange._change', v10294);
                    v10295;
                    const v10296 = jQuery.event;
                    const v10303 = function (event) {
                        const v10297 = this._just_changed;
                        const v10298 = event.isTrigger;
                        const v10299 = !v10298;
                        const v10300 = v10297 && v10299;
                        if (v10300) {
                            this._just_changed = false;
                        }
                        const v10301 = jQuery.event;
                        const v10302 = v10301.simulate('change', this, event, true);
                        v10302;
                    };
                    const v10304 = v10296.add(this, 'click._change', v10303);
                    v10304;
                }
                return false;
            }
            const v10305 = jQuery.event;
            const v10325 = function (e) {
                var elem = e.target;
                const v10306 = elem.nodeName;
                const v10307 = rformElems.test(v10306);
                const v10308 = jQuery._data(elem, 'changeBubbles');
                const v10309 = !v10308;
                const v10310 = v10307 && v10309;
                if (v10310) {
                    const v10311 = jQuery.event;
                    const v10322 = function (event) {
                        const v10312 = this.parentNode;
                        const v10313 = event.isSimulated;
                        const v10314 = !v10313;
                        const v10315 = v10312 && v10314;
                        const v10316 = event.isTrigger;
                        const v10317 = !v10316;
                        const v10318 = v10315 && v10317;
                        if (v10318) {
                            const v10319 = jQuery.event;
                            const v10320 = this.parentNode;
                            const v10321 = v10319.simulate('change', v10320, event, true);
                            v10321;
                        }
                    };
                    const v10323 = v10311.add(elem, 'change._change', v10322);
                    v10323;
                    const v10324 = jQuery._data(elem, 'changeBubbles', true);
                    v10324;
                }
            };
            const v10326 = v10305.add(this, 'beforeactivate._change', v10325);
            v10326;
        };
        const v10342 = function (event) {
            var elem = event.target;
            const v10328 = this !== elem;
            const v10329 = event.isSimulated;
            const v10330 = v10328 || v10329;
            const v10331 = event.isTrigger;
            const v10332 = v10330 || v10331;
            const v10333 = elem.type;
            const v10334 = v10333 !== 'radio';
            const v10335 = elem.type;
            const v10336 = v10335 !== 'checkbox';
            const v10337 = v10334 && v10336;
            const v10338 = v10332 || v10337;
            if (v10338) {
                const v10339 = event.handleObj;
                const v10340 = v10339.handler;
                const v10341 = v10340.apply(this, arguments);
                return v10341;
            }
        };
        const v10348 = function () {
            const v10343 = jQuery.event;
            const v10344 = v10343.remove(this, '._change');
            v10344;
            const v10345 = this.nodeName;
            const v10346 = rformElems.test(v10345);
            const v10347 = !v10346;
            return v10347;
        };
        const v10349 = {};
        v10349.setup = v10327;
        v10349.handle = v10342;
        v10349.teardown = v10348;
        v10282.change = v10349;
    }
    const v10350 = support.focusinBubbles;
    const v10351 = !v10350;
    if (v10351) {
        const v10352 = {
            focus: 'focusin',
            blur: 'focusout'
        };
        const v10375 = function (orig, fix) {
            var handler = function (event) {
                const v10353 = jQuery.event;
                const v10354 = event.target;
                const v10355 = jQuery.event;
                const v10356 = v10355.fix(event);
                const v10357 = v10353.simulate(fix, v10354, v10356, true);
                v10357;
            };
            const v10358 = jQuery.event;
            const v10359 = v10358.special;
            const v10366 = function () {
                const v10360 = this.ownerDocument;
                var doc = v10360 || this;
                var attaches = jQuery._data(doc, fix);
                const v10361 = !attaches;
                if (v10361) {
                    const v10362 = doc.addEventListener(orig, handler, true);
                    v10362;
                }
                const v10363 = attaches || 0;
                const v10364 = v10363 + 1;
                const v10365 = jQuery._data(doc, fix, v10364);
                v10365;
            };
            const v10373 = function () {
                const v10367 = this.ownerDocument;
                var doc = v10367 || this;
                const v10368 = jQuery._data(doc, fix);
                var attaches = v10368 - 1;
                const v10369 = !attaches;
                if (v10369) {
                    const v10370 = doc.removeEventListener(orig, handler, true);
                    v10370;
                    const v10371 = jQuery._removeData(doc, fix);
                    v10371;
                } else {
                    const v10372 = jQuery._data(doc, fix, attaches);
                    v10372;
                }
            };
            const v10374 = {};
            v10374.setup = v10366;
            v10374.teardown = v10373;
            v10359[fix] = v10374;
        };
        const v10376 = jQuery.each(v10352, v10375);
        v10376;
    }
    const v10377 = jQuery.fn;
    const v10404 = function (types, selector, data, fn, one) {
        var type;
        var origFn;
        const v10378 = typeof types;
        const v10379 = v10378 === 'object';
        if (v10379) {
            const v10380 = typeof selector;
            const v10381 = v10380 !== 'string';
            if (v10381) {
                data = data || selector;
                selector = undefined;
            }
            for (type in types) {
                const v10382 = types[type];
                const v10383 = this.on(type, selector, data, v10382, one);
                v10383;
            }
            return this;
        }
        const v10384 = data == null;
        const v10385 = fn == null;
        const v10386 = v10384 && v10385;
        if (v10386) {
            fn = selector;
            selector = undefined;
            data = selector;
        } else {
            const v10387 = fn == null;
            if (v10387) {
                const v10388 = typeof selector;
                const v10389 = v10388 === 'string';
                if (v10389) {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
        }
        const v10390 = fn === false;
        if (v10390) {
            fn = returnFalse;
        } else {
            const v10391 = !fn;
            if (v10391) {
                return this;
            }
        }
        const v10392 = one === 1;
        if (v10392) {
            origFn = fn;
            const v10396 = function (event) {
                const v10393 = jQuery();
                const v10394 = v10393.off(event);
                v10394;
                const v10395 = origFn.apply(this, arguments);
                return v10395;
            };
            fn = v10396;
            const v10397 = origFn.guid;
            const v10398 = jQuery.guid;
            const v10399 = v10398++;
            fn.guid = v10397 || (origFn.guid = v10399);
        }
        const v10402 = function () {
            const v10400 = jQuery.event;
            const v10401 = v10400.add(this, types, fn, data, selector);
            v10401;
        };
        const v10403 = this.each(v10402);
        return v10403;
    };
    const v10406 = function (types, selector, data, fn) {
        const v10405 = this.on(types, selector, data, fn, 1);
        return v10405;
    };
    const v10436 = function (types, selector, fn) {
        var handleObj;
        var type;
        const v10407 = types.preventDefault;
        const v10408 = types && v10407;
        const v10409 = types.handleObj;
        const v10410 = v10408 && v10409;
        if (v10410) {
            handleObj = types.handleObj;
            const v10411 = types.delegateTarget;
            const v10412 = jQuery(v10411);
            const v10413 = handleObj.namespace;
            const v10414 = handleObj.origType;
            const v10415 = v10414 + '.';
            const v10416 = handleObj.namespace;
            const v10417 = v10415 + v10416;
            const v10418 = handleObj.origType;
            let v10419;
            if (v10413) {
                v10419 = v10417;
            } else {
                v10419 = v10418;
            }
            const v10420 = handleObj.selector;
            const v10421 = handleObj.handler;
            const v10422 = v10412.off(v10419, v10420, v10421);
            v10422;
            return this;
        }
        const v10423 = typeof types;
        const v10424 = v10423 === 'object';
        if (v10424) {
            for (type in types) {
                const v10425 = types[type];
                const v10426 = this.off(type, selector, v10425);
                v10426;
            }
            return this;
        }
        const v10427 = selector === false;
        const v10428 = typeof selector;
        const v10429 = v10428 === 'function';
        const v10430 = v10427 || v10429;
        if (v10430) {
            fn = selector;
            selector = undefined;
        }
        const v10431 = fn === false;
        if (v10431) {
            fn = returnFalse;
        }
        const v10434 = function () {
            const v10432 = jQuery.event;
            const v10433 = v10432.remove(this, types, fn, selector);
            v10433;
        };
        const v10435 = this.each(v10434);
        return v10435;
    };
    const v10441 = function (type, data) {
        const v10439 = function () {
            const v10437 = jQuery.event;
            const v10438 = v10437.trigger(type, data, this);
            v10438;
        };
        const v10440 = this.each(v10439);
        return v10440;
    };
    const v10444 = function (type, data) {
        var elem = this[0];
        if (elem) {
            const v10442 = jQuery.event;
            const v10443 = v10442.trigger(type, data, elem, true);
            return v10443;
        }
    };
    const v10445 = {
        on: v10404,
        one: v10406,
        off: v10436,
        trigger: v10441,
        triggerHandler: v10444
    };
    const v10446 = v10377.extend(v10445);
    v10446;
    const createSafeFragment = function (document) {
        var list = nodeNames.split('|');
        var safeFrag = document.createDocumentFragment();
        const v10447 = safeFrag.createElement;
        if (v10447) {
            let v10448 = list.length;
            while (v10448) {
                const v10449 = list.pop();
                const v10450 = safeFrag.createElement(v10449);
                v10450;
                v10448 = list.length;
            }
        }
        return safeFrag;
    };
    var nodeNames = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|' + 'header|hgroup|mark|meter|nav|output|progress|section|summary|time|video';
    var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g;
    const v10451 = '<(?:' + nodeNames;
    const v10452 = v10451 + ')[\\s/>]';
    var rnoshimcache = new RegExp(v10452, 'i');
    var rleadingWhitespace = /^\s+/;
    var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
    var rtagName = /<([\w:]+)/;
    var rtbody = /<tbody/i;
    var rhtml = /<|&#?\w+;/;
    var rnoInnerhtml = /<(?:script|style|link)/i;
    var rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i;
    var rscriptType = /^$|\/(?:java|ecma)script/i;
    var rscriptTypeMasked = /^true\/(.*)/;
    var rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    const v10453 = [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
    ];
    const v10454 = [
        1,
        '<fieldset>',
        '</fieldset>'
    ];
    const v10455 = [
        1,
        '<map>',
        '</map>'
    ];
    const v10456 = [
        1,
        '<object>',
        '</object>'
    ];
    const v10457 = [
        1,
        '<table>',
        '</table>'
    ];
    const v10458 = [
        2,
        '<table><tbody>',
        '</tbody></table>'
    ];
    const v10459 = [
        2,
        '<table><tbody></tbody><colgroup>',
        '</colgroup></table>'
    ];
    const v10460 = [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
    ];
    const v10461 = support.htmlSerialize;
    const v10462 = [
        0,
        '',
        ''
    ];
    const v10463 = [
        1,
        'X<div>',
        '</div>'
    ];
    let v10464;
    if (v10461) {
        v10464 = v10462;
    } else {
        v10464 = v10463;
    }
    var wrapMap = {};
    wrapMap.option = v10453;
    wrapMap.legend = v10454;
    wrapMap.area = v10455;
    wrapMap.param = v10456;
    wrapMap.thead = v10457;
    wrapMap.tr = v10458;
    wrapMap.col = v10459;
    wrapMap.td = v10460;
    wrapMap._default = v10464;
    var safeFragment = createSafeFragment(document);
    const v10465 = document.createElement('div');
    var fragmentDiv = safeFragment.appendChild(v10465);
    const v10466 = wrapMap.option;
    wrapMap.optgroup = v10466;
    const v10467 = wrapMap.thead;
    wrapMap.caption = v10467;
    wrapMap.colgroup = wrapMap.caption;
    wrapMap.tfoot = wrapMap.colgroup;
    wrapMap.tbody = wrapMap.tfoot;
    const v10468 = wrapMap.td;
    wrapMap.th = v10468;
    const getAll = function (context, tag) {
        var elems;
        var elem;
        var i = 0;
        let found;
        const v10469 = context.getElementsByTagName;
        const v10470 = typeof v10469;
        const v10471 = v10470 !== strundefined;
        const v10472 = tag || '*';
        const v10473 = context.getElementsByTagName(v10472);
        const v10474 = context.querySelectorAll;
        const v10475 = typeof v10474;
        const v10476 = v10475 !== strundefined;
        const v10477 = tag || '*';
        const v10478 = context.querySelectorAll(v10477);
        let v10479;
        if (v10476) {
            v10479 = v10478;
        } else {
            v10479 = undefined;
        }
        if (v10471) {
            found = v10473;
        } else {
            found = v10479;
        }
        const v10480 = !found;
        if (v10480) {
            const v10481 = context.childNodes;
            let v10482 = (elem = elems[i]) != null;
            while (v10482) {
                const v10484 = !tag;
                const v10485 = jQuery.nodeName(elem, tag);
                const v10486 = v10484 || v10485;
                if (v10486) {
                    const v10487 = found.push(elem);
                    v10487;
                } else {
                    const v10488 = getAll(elem, tag);
                    const v10489 = jQuery.merge(found, v10488);
                    v10489;
                }
                const v10483 = i++;
                v10482 = (elem = elems[i]) != null;
            }
        }
        const v10490 = tag === undefined;
        const v10491 = jQuery.nodeName(context, tag);
        const v10492 = tag && v10491;
        const v10493 = v10490 || v10492;
        const v10494 = [context];
        const v10495 = jQuery.merge(v10494, found);
        let v10496;
        if (v10493) {
            v10496 = v10495;
        } else {
            v10496 = found;
        }
        return v10496;
    };
    const fixDefaultChecked = function (elem) {
        const v10497 = elem.type;
        const v10498 = rcheckableType.test(v10497);
        if (v10498) {
            const v10499 = elem.checked;
            elem.defaultChecked = v10499;
        }
    };
    const manipulationTarget = function (elem, content) {
        const v10500 = jQuery.nodeName(elem, 'table');
        const v10501 = content.nodeType;
        const v10502 = v10501 !== 11;
        const v10503 = content.firstChild;
        let v10504;
        if (v10502) {
            v10504 = content;
        } else {
            v10504 = v10503;
        }
        const v10505 = jQuery.nodeName(v10504, 'tr');
        const v10506 = v10500 && v10505;
        const v10507 = elem.getElementsByTagName('tbody');
        const v10508 = v10507[0];
        const v10509 = elem.ownerDocument;
        const v10510 = v10509.createElement('tbody');
        const v10511 = elem.appendChild(v10510);
        const v10512 = v10508 || v10511;
        let v10513;
        if (v10506) {
            v10513 = v10512;
        } else {
            v10513 = elem;
        }
        return v10513;
    };
    const disableScript = function (elem) {
        const v10514 = jQuery.find;
        const v10515 = v10514.attr(elem, 'type');
        const v10516 = v10515 !== null;
        const v10517 = v10516 + '/';
        const v10518 = elem.type;
        elem.type = v10517 + v10518;
        return elem;
    };
    const restoreScript = function (elem) {
        const v10519 = elem.type;
        var match = rscriptTypeMasked.exec(v10519);
        if (match) {
            const v10520 = match[1];
            elem.type = v10520;
        } else {
            const v10521 = elem.removeAttribute('type');
            v10521;
        }
        return elem;
    };
    const setGlobalEval = function (elems, refElements) {
        var elem;
        var i = 0;
        let v10522 = (elem = elems[i]) != null;
        while (v10522) {
            const v10524 = !refElements;
            const v10525 = refElements[i];
            const v10526 = jQuery._data(v10525, 'globalEval');
            const v10527 = v10524 || v10526;
            const v10528 = jQuery._data(elem, 'globalEval', v10527);
            v10528;
            const v10523 = i++;
            v10522 = (elem = elems[i]) != null;
        }
    };
    const cloneCopyEvent = function (src, dest) {
        const v10529 = dest.nodeType;
        const v10530 = v10529 !== 1;
        const v10531 = jQuery.hasData(src);
        const v10532 = !v10531;
        const v10533 = v10530 || v10532;
        if (v10533) {
            return;
        }
        var type;
        var i;
        var l;
        var oldData = jQuery._data(src);
        var curData = jQuery._data(dest, oldData);
        var events = oldData.events;
        if (events) {
            const v10534 = curData.handle;
            const v10535 = delete v10534;
            v10535;
            const v10536 = {};
            curData.events = v10536;
            for (type in events) {
                const v10537 = events[type];
                let v10538 = i < l;
                while (v10538) {
                    const v10540 = jQuery.event;
                    const v10541 = events[type];
                    const v10542 = v10541[i];
                    const v10543 = v10540.add(dest, type, v10542);
                    v10543;
                    const v10539 = i++;
                    v10538 = i < l;
                }
            }
        }
        const v10544 = curData.data;
        if (v10544) {
            const v10545 = {};
            const v10546 = curData.data;
            const v10547 = jQuery.extend(v10545, v10546);
            curData.data = v10547;
        }
    };
    const fixCloneNodeIssues = function (src, dest) {
        var nodeName;
        var e;
        var data;
        const v10548 = dest.nodeType;
        const v10549 = v10548 !== 1;
        if (v10549) {
            return;
        }
        const v10550 = dest.nodeName;
        nodeName = v10550.toLowerCase();
        const v10551 = support.noCloneEvent;
        const v10552 = !v10551;
        const v10553 = jQuery.expando;
        const v10554 = dest[v10553];
        const v10555 = v10552 && v10554;
        if (v10555) {
            data = jQuery._data(dest);
            const v10556 = data.events;
            for (e in v10556) {
                const v10557 = data.handle;
                const v10558 = jQuery.removeEvent(dest, e, v10557);
                v10558;
            }
            const v10559 = jQuery.expando;
            const v10560 = dest.removeAttribute(v10559);
            v10560;
        }
        const v10561 = nodeName === 'script';
        const v10562 = dest.text;
        const v10563 = src.text;
        const v10564 = v10562 !== v10563;
        const v10565 = v10561 && v10564;
        if (v10565) {
            const v10566 = disableScript(dest);
            const v10567 = src.text;
            v10566.text = v10567;
            const v10568 = restoreScript(dest);
            v10568;
        } else {
            const v10569 = nodeName === 'object';
            if (v10569) {
                const v10570 = dest.parentNode;
                if (v10570) {
                    const v10571 = src.outerHTML;
                    dest.outerHTML = v10571;
                }
                const v10572 = support.html5Clone;
                const v10573 = src.innerHTML;
                const v10574 = dest.innerHTML;
                const v10575 = jQuery.trim(v10574);
                const v10576 = !v10575;
                const v10577 = v10573 && v10576;
                const v10578 = v10572 && v10577;
                if (v10578) {
                    const v10579 = src.innerHTML;
                    dest.innerHTML = v10579;
                }
            } else {
                const v10580 = nodeName === 'input';
                const v10581 = src.type;
                const v10582 = rcheckableType.test(v10581);
                const v10583 = v10580 && v10582;
                if (v10583) {
                    const v10584 = src.checked;
                    dest.checked = v10584;
                    dest.defaultChecked = dest.checked;
                    const v10585 = dest.value;
                    const v10586 = src.value;
                    const v10587 = v10585 !== v10586;
                    if (v10587) {
                        const v10588 = src.value;
                        dest.value = v10588;
                    }
                } else {
                    const v10589 = nodeName === 'option';
                    if (v10589) {
                        const v10590 = src.defaultSelected;
                        dest.selected = v10590;
                        dest.defaultSelected = dest.selected;
                    } else {
                        const v10591 = nodeName === 'input';
                        const v10592 = nodeName === 'textarea';
                        const v10593 = v10591 || v10592;
                        if (v10593) {
                            const v10594 = src.defaultValue;
                            dest.defaultValue = v10594;
                        }
                    }
                }
            }
        }
    };
    const v10639 = function (elem, dataAndEvents, deepDataAndEvents) {
        var destElements;
        var node;
        var clone;
        var i;
        var srcElements;
        const v10595 = elem.ownerDocument;
        var inPage = jQuery.contains(v10595, elem);
        const v10596 = support.html5Clone;
        const v10597 = jQuery.isXMLDoc(elem);
        const v10598 = v10596 || v10597;
        const v10599 = elem.nodeName;
        const v10600 = '<' + v10599;
        const v10601 = v10600 + '>';
        const v10602 = rnoshimcache.test(v10601);
        const v10603 = !v10602;
        const v10604 = v10598 || v10603;
        if (v10604) {
            clone = elem.cloneNode(true);
        } else {
            const v10605 = elem.outerHTML;
            fragmentDiv.innerHTML = v10605;
            clone = fragmentDiv.firstChild;
            const v10606 = fragmentDiv.removeChild(clone);
            v10606;
        }
        const v10607 = support.noCloneEvent;
        const v10608 = !v10607;
        const v10609 = support.noCloneChecked;
        const v10610 = !v10609;
        const v10611 = v10608 || v10610;
        const v10612 = elem.nodeType;
        const v10613 = v10612 === 1;
        const v10614 = elem.nodeType;
        const v10615 = v10614 === 11;
        const v10616 = v10613 || v10615;
        const v10617 = v10611 && v10616;
        const v10618 = jQuery.isXMLDoc(elem);
        const v10619 = !v10618;
        const v10620 = v10617 && v10619;
        if (v10620) {
            destElements = getAll(clone);
            srcElements = getAll(elem);
            i = 0
            let v10621 = (node = srcElements[i]) != null;
            while (v10621) {
                const v10623 = destElements[i];
                if (v10623) {
                    const v10624 = destElements[i];
                    const v10625 = fixCloneNodeIssues(node, v10624);
                    v10625;
                }
                const v10622 = ++i;
                v10621 = (node = srcElements[i]) != null;
            }
        }
        if (dataAndEvents) {
            if (deepDataAndEvents) {
                const v10626 = getAll(elem);
                srcElements = srcElements || v10626;
                const v10627 = getAll(clone);
                destElements = destElements || v10627;
                i = 0
                let v10628 = (node = srcElements[i]) != null;
                while (v10628) {
                    const v10630 = destElements[i];
                    const v10631 = cloneCopyEvent(node, v10630);
                    v10631;
                    const v10629 = i++;
                    v10628 = (node = srcElements[i]) != null;
                }
            } else {
                const v10632 = cloneCopyEvent(elem, clone);
                v10632;
            }
        }
        destElements = getAll(clone, 'script');
        const v10633 = destElements.length;
        const v10634 = v10633 > 0;
        if (v10634) {
            const v10635 = !inPage;
            const v10636 = getAll(elem, 'script');
            const v10637 = v10635 && v10636;
            const v10638 = setGlobalEval(destElements, v10637);
            v10638;
        }
        node = null;
        srcElements = node;
        destElements = srcElements;
        return clone;
    };
    const v10721 = function (elems, context, scripts, selection) {
        var j;
        var elem;
        var contains;
        var tmp;
        var tag;
        var tbody;
        var wrap;
        var l = elems.length;
        var safe = createSafeFragment(context);
        var nodes = [];
        var i = 0;
        let v10640 = i < l;
        while (v10640) {
            elem = elems[i];
            const v10642 = elem === 0;
            const v10643 = elem || v10642;
            if (v10643) {
                const v10644 = jQuery.type(elem);
                const v10645 = v10644 === 'object';
                if (v10645) {
                    const v10646 = elem.nodeType;
                    const v10647 = [elem];
                    let v10648;
                    if (v10646) {
                        v10648 = v10647;
                    } else {
                        v10648 = elem;
                    }
                    const v10649 = jQuery.merge(nodes, v10648);
                    v10649;
                } else {
                    const v10650 = rhtml.test(elem);
                    const v10651 = !v10650;
                    if (v10651) {
                        const v10652 = context.createTextNode(elem);
                        const v10653 = nodes.push(v10652);
                        v10653;
                    } else {
                        const v10654 = context.createElement('div');
                        const v10655 = safe.appendChild(v10654);
                        tmp = tmp || v10655;
                        const v10656 = rtagName.exec(elem);
                        const v10657 = [
                            '',
                            ''
                        ];
                        const v10658 = v10656 || v10657;
                        const v10659 = v10658[1];
                        tag = v10659.toLowerCase();
                        const v10660 = wrapMap[tag];
                        const v10661 = wrapMap._default;
                        wrap = v10660 || v10661;
                        const v10662 = wrap[1];
                        const v10663 = elem.replace(rxhtmlTag, '<$1></$2>');
                        const v10664 = v10662 + v10663;
                        const v10665 = wrap[2];
                        tmp.innerHTML = v10664 + v10665;
                        j = wrap[0];
                        let v10666 = j--;
                        while (v10666) {
                            tmp = tmp.lastChild;
                            v10666 = j--;
                        }
                        const v10667 = support.leadingWhitespace;
                        const v10668 = !v10667;
                        const v10669 = rleadingWhitespace.test(elem);
                        const v10670 = v10668 && v10669;
                        if (v10670) {
                            const v10671 = rleadingWhitespace.exec(elem);
                            const v10672 = v10671[0];
                            const v10673 = context.createTextNode(v10672);
                            const v10674 = nodes.push(v10673);
                            v10674;
                        }
                        const v10675 = support.tbody;
                        const v10676 = !v10675;
                        if (v10676) {
                            const v10677 = tag === 'table';
                            const v10678 = rtbody.test(elem);
                            const v10679 = !v10678;
                            const v10680 = v10677 && v10679;
                            const v10681 = tmp.firstChild;
                            const v10682 = wrap[1];
                            const v10683 = v10682 === '<table>';
                            const v10684 = rtbody.test(elem);
                            const v10685 = !v10684;
                            const v10686 = v10683 && v10685;
                            let v10687;
                            if (v10686) {
                                v10687 = tmp;
                            } else {
                                v10687 = 0;
                            }
                            if (v10680) {
                                elem = v10681;
                            } else {
                                elem = v10687;
                            }
                            const v10688 = elem.childNodes;
                            const v10689 = v10688.length;
                            j = elem && v10689;
                            let v10690 = j--;
                            while (v10690) {
                                const v10691 = elem.childNodes;
                                tbody = elem.childNodes[j];
                                const v10692 = jQuery.nodeName(tbody, 'tbody');
                                const v10693 = tbody.childNodes;
                                const v10694 = v10693.length;
                                const v10695 = !v10694;
                                const v10696 = v10692 && v10695;
                                if (v10696) {
                                    const v10697 = elem.removeChild(tbody);
                                    v10697;
                                }
                                v10690 = j--;
                            }
                        }
                        const v10698 = tmp.childNodes;
                        const v10699 = jQuery.merge(nodes, v10698);
                        v10699;
                        tmp.textContent = '';
                        let v10700 = tmp.firstChild;
                        while (v10700) {
                            const v10701 = tmp.firstChild;
                            const v10702 = tmp.removeChild(v10701);
                            v10702;
                            v10700 = tmp.firstChild;
                        }
                        tmp = safe.lastChild;
                    }
                }
            }
            const v10641 = i++;
            v10640 = i < l;
        }
        if (tmp) {
            const v10703 = safe.removeChild(tmp);
            v10703;
        }
        const v10704 = support.appendChecked;
        const v10705 = !v10704;
        if (v10705) {
            const v10706 = getAll(nodes, 'input');
            const v10707 = jQuery.grep(v10706, fixDefaultChecked);
            v10707;
        }
        i = 0;
        const v10708 = i++;
        while (elem = nodes[v10708]) {
            const v10709 = jQuery.inArray(elem, selection);
            const v10710 = -1;
            const v10711 = v10709 !== v10710;
            const v10712 = selection && v10711;
            if (v10712) {
                continue;
            }
            const v10713 = elem.ownerDocument;
            contains = jQuery.contains(v10713, elem);
            const v10714 = safe.appendChild(elem);
            tmp = getAll(v10714, 'script');
            if (contains) {
                const v10715 = setGlobalEval(tmp);
                v10715;
            }
            if (scripts) {
                j = 0;
                const v10716 = j++;
                while (elem = tmp[v10716]) {
                    const v10717 = elem.type;
                    const v10718 = v10717 || '';
                    const v10719 = rscriptType.test(v10718);
                    if (v10719) {
                        const v10720 = scripts.push(elem);
                        v10720;
                    }
                }
            }
        }
        tmp = null;
        return safe;
    };
    const v10745 = function (elems, acceptData) {
        var elem;
        var type;
        var id;
        var data;
        var i = 0;
        var internalKey = jQuery.expando;
        var cache = jQuery.cache;
        var deleteExpando = support.deleteExpando;
        const v10722 = jQuery.event;
        var special = v10722.special;
        let v10723 = (elem = elems[i]) != null;
        while (v10723) {
            const v10725 = jQuery.acceptData(elem);
            const v10726 = acceptData || v10725;
            if (v10726) {
                id = elem[internalKey];
                const v10727 = cache[id];
                data = id && v10727;
                if (data) {
                    const v10728 = data.events;
                    if (v10728) {
                        const v10729 = data.events;
                        for (type in v10729) {
                            const v10730 = special[type];
                            if (v10730) {
                                const v10731 = jQuery.event;
                                const v10732 = v10731.remove(elem, type);
                                v10732;
                            } else {
                                const v10733 = data.handle;
                                const v10734 = jQuery.removeEvent(elem, type, v10733);
                                v10734;
                            }
                        }
                    }
                    const v10735 = cache[id];
                    if (v10735) {
                        const v10736 = cache[id];
                        const v10737 = delete v10736;
                        v10737;
                        if (deleteExpando) {
                            const v10738 = elem[internalKey];
                            const v10739 = delete v10738;
                            v10739;
                        } else {
                            const v10740 = elem.removeAttribute;
                            const v10741 = typeof v10740;
                            const v10742 = v10741 !== strundefined;
                            if (v10742) {
                                const v10743 = elem.removeAttribute(internalKey);
                                v10743;
                            } else {
                                elem[internalKey] = null;
                            }
                        }
                        const v10744 = deletedIds.push(id);
                        v10744;
                    }
                }
            }
            const v10724 = i++;
            v10723 = (elem = elems[i]) != null;
        }
    };
    const v10746 = {
        clone: v10639,
        buildFragment: v10721,
        cleanData: v10745
    };
    const v10747 = jQuery.extend(v10746);
    v10747;
    const v10748 = jQuery.fn;
    const v10763 = function (value) {
        const v10760 = function (value) {
            const v10749 = value === undefined;
            const v10750 = jQuery.text(this);
            const v10751 = this.empty();
            const v10752 = this[0];
            const v10753 = this[0];
            const v10754 = v10753.ownerDocument;
            const v10755 = v10752 && v10754;
            const v10756 = v10755 || document;
            const v10757 = v10756.createTextNode(value);
            const v10758 = v10751.append(v10757);
            let v10759;
            if (v10749) {
                v10759 = v10750;
            } else {
                v10759 = v10758;
            }
            return v10759;
        };
        const v10761 = arguments.length;
        const v10762 = access(this, v10760, null, value, v10761);
        return v10762;
    };
    const v10775 = function () {
        const v10773 = function (elem) {
            const v10764 = this.nodeType;
            const v10765 = v10764 === 1;
            const v10766 = this.nodeType;
            const v10767 = v10766 === 11;
            const v10768 = v10765 || v10767;
            const v10769 = this.nodeType;
            const v10770 = v10769 === 9;
            const v10771 = v10768 || v10770;
            if (v10771) {
                var target = manipulationTarget(this, elem);
                const v10772 = target.appendChild(elem);
                v10772;
            }
        };
        const v10774 = this.domManip(arguments, v10773);
        return v10774;
    };
    const v10788 = function () {
        const v10786 = function (elem) {
            const v10776 = this.nodeType;
            const v10777 = v10776 === 1;
            const v10778 = this.nodeType;
            const v10779 = v10778 === 11;
            const v10780 = v10777 || v10779;
            const v10781 = this.nodeType;
            const v10782 = v10781 === 9;
            const v10783 = v10780 || v10782;
            if (v10783) {
                var target = manipulationTarget(this, elem);
                const v10784 = target.firstChild;
                const v10785 = target.insertBefore(elem, v10784);
                v10785;
            }
        };
        const v10787 = this.domManip(arguments, v10786);
        return v10787;
    };
    const v10794 = function () {
        const v10792 = function (elem) {
            const v10789 = this.parentNode;
            if (v10789) {
                const v10790 = this.parentNode;
                const v10791 = v10790.insertBefore(elem, this);
                v10791;
            }
        };
        const v10793 = this.domManip(arguments, v10792);
        return v10793;
    };
    const v10801 = function () {
        const v10799 = function (elem) {
            const v10795 = this.parentNode;
            if (v10795) {
                const v10796 = this.parentNode;
                const v10797 = this.nextSibling;
                const v10798 = v10796.insertBefore(elem, v10797);
                v10798;
            }
        };
        const v10800 = this.domManip(arguments, v10799);
        return v10800;
    };
    const v10819 = function (selector, keepData) {
        var elem;
        let elems;
        const v10802 = jQuery.filter(selector, this);
        if (selector) {
            elems = v10802;
        } else {
            elems = this;
        }
        var i = 0;
        let v10803 = (elem = elems[i]) != null;
        while (v10803) {
            const v10805 = !keepData;
            const v10806 = elem.nodeType;
            const v10807 = v10806 === 1;
            const v10808 = v10805 && v10807;
            if (v10808) {
                const v10809 = getAll(elem);
                const v10810 = jQuery.cleanData(v10809);
                v10810;
            }
            const v10811 = elem.parentNode;
            if (v10811) {
                const v10812 = elem.ownerDocument;
                const v10813 = jQuery.contains(v10812, elem);
                const v10814 = keepData && v10813;
                if (v10814) {
                    const v10815 = getAll(elem, 'script');
                    const v10816 = setGlobalEval(v10815);
                    v10816;
                }
                const v10817 = elem.parentNode;
                const v10818 = v10817.removeChild(elem);
                v10818;
            }
            const v10804 = i++;
            v10803 = (elem = elems[i]) != null;
        }
        return this;
    };
    const v10833 = function () {
        var elem;
        var i = 0;
        let v10820 = (elem = this[i]) != null;
        while (v10820) {
            const v10822 = elem.nodeType;
            const v10823 = v10822 === 1;
            if (v10823) {
                const v10824 = getAll(elem, false);
                const v10825 = jQuery.cleanData(v10824);
                v10825;
            }
            let v10826 = elem.firstChild;
            while (v10826) {
                const v10827 = elem.firstChild;
                const v10828 = elem.removeChild(v10827);
                v10828;
                v10826 = elem.firstChild;
            }
            const v10829 = elem.options;
            const v10830 = jQuery.nodeName(elem, 'select');
            const v10831 = v10829 && v10830;
            if (v10831) {
                const v10832 = elem.options;
                v10832.length = 0;
            }
            const v10821 = i++;
            v10820 = (elem = this[i]) != null;
        }
        return this;
    };
    const v10839 = function (dataAndEvents, deepDataAndEvents) {
        const v10834 = dataAndEvents == null;
        if (v10834) {
            dataAndEvents = false;
        } else {
            dataAndEvents = dataAndEvents;
        }
        const v10835 = deepDataAndEvents == null;
        if (v10835) {
            deepDataAndEvents = dataAndEvents;
        } else {
            deepDataAndEvents = deepDataAndEvents;
        }
        const v10837 = function () {
            const v10836 = jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            return v10836;
        };
        const v10838 = this.map(v10837);
        return v10838;
    };
    const v10884 = function (value) {
        const v10881 = function (value) {
            const v10840 = this[0];
            const v10841 = {};
            var elem = v10840 || v10841;
            var i = 0;
            var l = this.length;
            const v10842 = value === undefined;
            if (v10842) {
                const v10843 = elem.nodeType;
                const v10844 = v10843 === 1;
                const v10845 = elem.innerHTML;
                const v10846 = v10845.replace(rinlinejQuery, '');
                let v10847;
                if (v10844) {
                    v10847 = v10846;
                } else {
                    v10847 = undefined;
                }
                return v10847;
            }
            const v10848 = typeof value;
            const v10849 = v10848 === 'string';
            const v10850 = rnoInnerhtml.test(value);
            const v10851 = !v10850;
            const v10852 = v10849 && v10851;
            const v10853 = support.htmlSerialize;
            const v10854 = rnoshimcache.test(value);
            const v10855 = !v10854;
            const v10856 = v10853 || v10855;
            const v10857 = v10852 && v10856;
            const v10858 = support.leadingWhitespace;
            const v10859 = rleadingWhitespace.test(value);
            const v10860 = !v10859;
            const v10861 = v10858 || v10860;
            const v10862 = v10857 && v10861;
            const v10863 = rtagName.exec(value);
            const v10864 = [
                '',
                ''
            ];
            const v10865 = v10863 || v10864;
            const v10866 = v10865[1];
            const v10867 = v10866.toLowerCase();
            const v10868 = wrapMap[v10867];
            const v10869 = !v10868;
            const v10870 = v10862 && v10869;
            if (v10870) {
                value = value.replace(rxhtmlTag, '<$1></$2>');
                try {
                    let v10871 = i < l;
                    while (v10871) {
                        const v10873 = this[i];
                        const v10874 = {};
                        elem = v10873 || v10874;
                        const v10875 = elem.nodeType;
                        const v10876 = v10875 === 1;
                        if (v10876) {
                            const v10877 = getAll(elem, false);
                            const v10878 = jQuery.cleanData(v10877);
                            v10878;
                            elem.innerHTML = value;
                        }
                        const v10872 = i++;
                        v10871 = i < l;
                    }
                    elem = 0;
                } catch (e) {
                }
            }
            if (elem) {
                const v10879 = this.empty();
                const v10880 = v10879.append(value);
                v10880;
            }
        };
        const v10882 = arguments.length;
        const v10883 = access(this, v10881, null, value, v10882);
        return v10883;
    };
    const v10896 = function () {
        var arg = arguments[0];
        const v10888 = function (elem) {
            arg = this.parentNode;
            const v10885 = getAll(this);
            const v10886 = jQuery.cleanData(v10885);
            v10886;
            if (arg) {
                const v10887 = arg.replaceChild(elem, this);
                v10887;
            }
        };
        const v10889 = this.domManip(arguments, v10888);
        v10889;
        const v10890 = arg.length;
        const v10891 = arg.nodeType;
        const v10892 = v10890 || v10891;
        const v10893 = arg && v10892;
        const v10894 = this.remove();
        let v10895;
        if (v10893) {
            v10895 = this;
        } else {
            v10895 = v10894;
        }
        return v10895;
    };
    const v10898 = function (selector) {
        const v10897 = this.remove(selector, true);
        return v10897;
    };
    const v10954 = function (args, callback) {
        const v10899 = [];
        args = concat.apply(v10899, args);
        var first;
        var node;
        var hasScripts;
        var scripts;
        var doc;
        var fragment;
        var i = 0;
        var l = this.length;
        var set = this;
        var iNoClone = l - 1;
        var value = args[0];
        var isFunction = jQuery.isFunction(value);
        const v10900 = l > 1;
        const v10901 = typeof value;
        const v10902 = v10901 === 'string';
        const v10903 = v10900 && v10902;
        const v10904 = support.checkClone;
        const v10905 = !v10904;
        const v10906 = v10903 && v10905;
        const v10907 = rchecked.test(value);
        const v10908 = v10906 && v10907;
        const v10909 = isFunction || v10908;
        if (v10909) {
            const v10913 = function (index) {
                var self = set.eq(index);
                if (isFunction) {
                    const v10910 = self.html();
                    const v10911 = value.call(this, index, v10910);
                    args[0] = v10911;
                }
                const v10912 = self.domManip(args, callback);
                v10912;
            };
            const v10914 = this.each(v10913);
            return v10914;
        }
        if (l) {
            const v10915 = this[0];
            const v10916 = v10915.ownerDocument;
            fragment = jQuery.buildFragment(args, v10916, false, this);
            first = fragment.firstChild;
            const v10917 = fragment.childNodes;
            const v10918 = v10917.length;
            const v10919 = v10918 === 1;
            if (v10919) {
                fragment = first;
            }
            if (first) {
                const v10920 = getAll(fragment, 'script');
                scripts = jQuery.map(v10920, disableScript);
                hasScripts = scripts.length;
                let v10921 = i < l;
                while (v10921) {
                    node = fragment;
                    const v10923 = i !== iNoClone;
                    if (v10923) {
                        node = jQuery.clone(node, true, true);
                        if (hasScripts) {
                            const v10924 = getAll(node, 'script');
                            const v10925 = jQuery.merge(scripts, v10924);
                            v10925;
                        }
                    }
                    const v10926 = this[i];
                    const v10927 = callback.call(v10926, node, i);
                    v10927;
                    const v10922 = i++;
                    v10921 = i < l;
                }
                if (hasScripts) {
                    const v10928 = scripts.length;
                    const v10929 = v10928 - 1;
                    const v10930 = scripts[v10929];
                    doc = v10930.ownerDocument;
                    const v10931 = jQuery.map(scripts, restoreScript);
                    v10931;
                    i = 0
                    let v10932 = i < hasScripts;
                    while (v10932) {
                        node = scripts[i];
                        const v10934 = node.type;
                        const v10935 = v10934 || '';
                        const v10936 = rscriptType.test(v10935);
                        const v10937 = jQuery._data(node, 'globalEval');
                        const v10938 = !v10937;
                        const v10939 = v10936 && v10938;
                        const v10940 = jQuery.contains(doc, node);
                        const v10941 = v10939 && v10940;
                        if (v10941) {
                            const v10942 = node.src;
                            if (v10942) {
                                const v10943 = jQuery._evalUrl;
                                if (v10943) {
                                    const v10944 = node.src;
                                    const v10945 = jQuery._evalUrl(v10944);
                                    v10945;
                                }
                            } else {
                                const v10946 = node.text;
                                const v10947 = node.textContent;
                                const v10948 = v10946 || v10947;
                                const v10949 = node.innerHTML;
                                const v10950 = v10948 || v10949;
                                const v10951 = v10950 || '';
                                const v10952 = v10951.replace(rcleanScript, '');
                                const v10953 = jQuery.globalEval(v10952);
                                v10953;
                            }
                        }
                        const v10933 = i++;
                        v10932 = i < hasScripts;
                    }
                }
                first = null;
                fragment = first;
            }
        }
        return this;
    };
    const v10955 = {
        text: v10763,
        append: v10775,
        prepend: v10788,
        before: v10794,
        after: v10801,
        remove: v10819,
        empty: v10833,
        clone: v10839,
        html: v10884,
        replaceWith: v10896,
        detach: v10898,
        domManip: v10954
    };
    const v10956 = v10748.extend(v10955);
    v10956;
    const v10957 = {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
    };
    const v10971 = function (name, original) {
        const v10958 = jQuery.fn;
        const v10970 = function (selector) {
            var elems;
            var i = 0;
            var ret = [];
            var insert = jQuery(selector);
            const v10959 = insert.length;
            var last = v10959 - 1;
            let v10960 = i <= last;
            while (v10960) {
                const v10962 = i === last;
                const v10963 = this.clone(true);
                if (v10962) {
                    elems = this;
                } else {
                    elems = v10963;
                }
                const v10964 = insert[i];
                const v10965 = jQuery(v10964);
                const v10966 = v10965[original](elems);
                v10966;
                const v10967 = elems.get();
                const v10968 = push.apply(ret, v10967);
                v10968;
                const v10961 = i++;
                v10960 = i <= last;
            }
            const v10969 = this.pushStack(ret);
            return v10969;
        };
        v10958[name] = v10970;
    };
    const v10972 = jQuery.each(v10957, v10971);
    v10972;
    var iframe;
    var elemdisplay = {};
    const actualDisplay = function (name, doc) {
        const v10973 = doc.createElement(name);
        const v10974 = jQuery(v10973);
        const v10975 = doc.body;
        var elem = v10974.appendTo(v10975);
        let display;
        const v10976 = window.getDefaultComputedStyle;
        const v10977 = elem[0];
        const v10978 = window.getDefaultComputedStyle(v10977);
        const v10979 = v10978.display;
        const v10980 = elem[0];
        const v10981 = jQuery.css(v10980, 'display');
        if (v10976) {
            display = v10979;
        } else {
            display = v10981;
        }
        const v10982 = elem.detach();
        v10982;
        return display;
    };
    const defaultDisplay = function (nodeName) {
        var doc = document;
        var display = elemdisplay[nodeName];
        const v10983 = !display;
        if (v10983) {
            display = actualDisplay(nodeName, doc);
            const v10984 = display === 'none';
            const v10985 = !display;
            const v10986 = v10984 || v10985;
            if (v10986) {
                const v10987 = jQuery('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>');
                const v10988 = iframe || v10987;
                const v10989 = doc.documentElement;
                iframe = v10988.appendTo(v10989);
                const v10990 = iframe[0];
                const v10991 = v10990.contentWindow;
                const v10992 = iframe[0];
                const v10993 = v10992.contentDocument;
                const v10994 = v10991 || v10993;
                doc = v10994.document;
                const v10995 = doc.write();
                v10995;
                const v10996 = doc.close();
                v10996;
                display = actualDisplay(nodeName, doc);
                const v10997 = iframe.detach();
                v10997;
            }
            elemdisplay[nodeName] = display;
        }
        return display;
    };
    const v11027 = function () {
        var a;
        var shrinkWrapBlocksVal;
        var div = document.createElement('div');
        var divReset = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;' + 'display:block;padding:0;margin:0;border:0';
        div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>';
        const v10998 = div.getElementsByTagName('a');
        a = v10998[0];
        const v10999 = a.style;
        v10999.cssText = 'float:left;opacity:.5';
        const v11000 = a.style;
        const v11001 = v11000.opacity;
        const v11002 = /^0.5/.test(v11001);
        support.opacity = v11002;
        const v11003 = a.style;
        const v11004 = v11003.cssFloat;
        const v11005 = !v11004;
        const v11006 = !v11005;
        support.cssFloat = v11006;
        const v11007 = div.style;
        v11007.backgroundClip = 'content-box';
        const v11008 = div.cloneNode(true);
        const v11009 = v11008.style;
        v11009.backgroundClip = '';
        const v11010 = div.style;
        const v11011 = v11010.backgroundClip;
        support.clearCloneStyle = v11011 === 'content-box';
        div = null;
        a = div;
        const v11026 = function () {
            var body;
            var container;
            var div;
            var containerStyles;
            const v11012 = shrinkWrapBlocksVal == null;
            if (v11012) {
                const v11013 = document.getElementsByTagName('body');
                body = v11013[0];
                const v11014 = !body;
                if (v11014) {
                    return;
                }
                containerStyles = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px';
                container = document.createElement('div');
                div = document.createElement('div');
                const v11015 = body.appendChild(container);
                const v11016 = v11015.appendChild(div);
                v11016;
                shrinkWrapBlocksVal = false;
                const v11017 = div.style;
                const v11018 = v11017.zoom;
                const v11019 = typeof v11018;
                const v11020 = v11019 !== strundefined;
                if (v11020) {
                    const v11021 = div.style;
                    v11021.cssText = divReset + ';width:1px;padding:1px;zoom:1';
                    div.innerHTML = '<div></div>';
                    const v11022 = div.firstChild;
                    const v11023 = v11022.style;
                    v11023.width = '5px';
                    const v11024 = div.offsetWidth;
                    shrinkWrapBlocksVal = v11024 !== 3;
                }
                const v11025 = body.removeChild(container);
                v11025;
                div = null;
                container = div;
                body = container;
            }
            return shrinkWrapBlocksVal;
        };
        support.shrinkWrapBlocks = v11026;
    };
    const v11028 = v11027();
    v11028;
    var rmargin = /^margin/;
    const v11029 = '^(' + pnum;
    const v11030 = v11029 + ')(?!px)[a-z%]+$';
    var rnumnonpx = new RegExp(v11030, 'i');
    var getStyles;
    var curCSS;
    var rposition = /^(top|right|bottom|left)$/;
    const v11031 = window.getComputedStyle;
    if (v11031) {
        const v11035 = function (elem) {
            const v11032 = elem.ownerDocument;
            const v11033 = v11032.defaultView;
            const v11034 = v11033.getComputedStyle(elem, null);
            return v11034;
        };
        getStyles = v11035;
        const v11051 = function (elem, name, computed) {
            var width;
            var minWidth;
            var maxWidth;
            var ret;
            var style = elem.style;
            const v11036 = getStyles(elem);
            computed = computed || v11036;
            const v11037 = computed.getPropertyValue(name);
            const v11038 = computed[name];
            const v11039 = v11037 || v11038;
            if (computed) {
                ret = v11039;
            } else {
                ret = undefined;
            }
            if (computed) {
                const v11040 = ret === '';
                const v11041 = elem.ownerDocument;
                const v11042 = jQuery.contains(v11041, elem);
                const v11043 = !v11042;
                const v11044 = v11040 && v11043;
                if (v11044) {
                    ret = jQuery.style(elem, name);
                }
                const v11045 = rnumnonpx.test(ret);
                const v11046 = rmargin.test(name);
                const v11047 = v11045 && v11046;
                if (v11047) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.width = ret;
                    style.maxWidth = style.width;
                    style.minWidth = style.maxWidth;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            const v11048 = ret === undefined;
            const v11049 = ret + '';
            let v11050;
            if (v11048) {
                v11050 = ret;
            } else {
                v11050 = v11049;
            }
            return v11050;
        };
        curCSS = v11051;
    } else {
        const v11052 = document.documentElement;
        const v11053 = v11052.currentStyle;
        if (v11053) {
            const v11055 = function (elem) {
                const v11054 = elem.currentStyle;
                return v11054;
            };
            getStyles = v11055;
            const v11076 = function (elem, name, computed) {
                var left;
                var rs;
                var rsLeft;
                var ret;
                var style = elem.style;
                const v11056 = getStyles(elem);
                computed = computed || v11056;
                const v11057 = computed[name];
                if (computed) {
                    ret = v11057;
                } else {
                    ret = undefined;
                }
                const v11058 = ret == null;
                const v11059 = v11058 && style;
                const v11060 = style[name];
                const v11061 = v11059 && v11060;
                if (v11061) {
                    ret = style[name];
                }
                const v11062 = rnumnonpx.test(ret);
                const v11063 = rposition.test(name);
                const v11064 = !v11063;
                const v11065 = v11062 && v11064;
                if (v11065) {
                    left = style.left;
                    rs = elem.runtimeStyle;
                    const v11066 = rs.left;
                    rsLeft = rs && v11066;
                    if (rsLeft) {
                        const v11067 = elem.currentStyle;
                        const v11068 = v11067.left;
                        rs.left = v11068;
                    }
                    const v11069 = name === 'fontSize';
                    let v11070;
                    if (v11069) {
                        v11070 = '1em';
                    } else {
                        v11070 = ret;
                    }
                    style.left = v11070;
                    const v11071 = style.pixelLeft;
                    ret = v11071 + 'px';
                    style.left = left;
                    if (rsLeft) {
                        rs.left = rsLeft;
                    }
                }
                const v11072 = ret === undefined;
                const v11073 = ret + '';
                const v11074 = v11073 || 'auto';
                let v11075;
                if (v11072) {
                    v11075 = ret;
                } else {
                    v11075 = v11074;
                }
                return v11075;
            };
            curCSS = v11076;
        }
    }
    const addGetHookIf = function (conditionFn, hookFn) {
        const v11081 = function () {
            var condition = conditionFn();
            const v11077 = condition == null;
            if (v11077) {
                return;
            }
            if (condition) {
                const v11078 = this.get;
                const v11079 = delete v11078;
                v11079;
                return;
            }
            const v11080 = (this.get = hookFn).apply(this, arguments);
            return v11080;
        };
        const v11082 = {};
        v11082.get = v11081;
        return v11082;
    };
    const v11176 = function () {
        var a;
        var reliableHiddenOffsetsVal;
        var boxSizingVal;
        var boxSizingReliableVal;
        var pixelPositionVal;
        var reliableMarginRightVal;
        var div = document.createElement('div');
        var containerStyles = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px';
        var divReset = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;' + 'display:block;padding:0;margin:0;border:0';
        div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>';
        const v11083 = div.getElementsByTagName('a');
        a = v11083[0];
        const v11084 = a.style;
        v11084.cssText = 'float:left;opacity:.5';
        const v11085 = a.style;
        const v11086 = v11085.opacity;
        const v11087 = /^0.5/.test(v11086);
        support.opacity = v11087;
        const v11088 = a.style;
        const v11089 = v11088.cssFloat;
        const v11090 = !v11089;
        const v11091 = !v11090;
        support.cssFloat = v11091;
        const v11092 = div.style;
        v11092.backgroundClip = 'content-box';
        const v11093 = div.cloneNode(true);
        const v11094 = v11093.style;
        v11094.backgroundClip = '';
        const v11095 = div.style;
        const v11096 = v11095.backgroundClip;
        support.clearCloneStyle = v11096 === 'content-box';
        div = null;
        a = div;
        const v11116 = function () {
            const v11097 = reliableHiddenOffsetsVal != null;
            if (v11097) {
                return reliableHiddenOffsetsVal;
            }
            var container;
            var tds;
            var isSupported;
            var div = document.createElement('div');
            const v11098 = document.getElementsByTagName('body');
            var body = v11098[0];
            const v11099 = !body;
            if (v11099) {
                return;
            }
            const v11100 = div.setAttribute('className', 't');
            v11100;
            div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>';
            container = document.createElement('div');
            const v11101 = container.style;
            v11101.cssText = containerStyles;
            const v11102 = body.appendChild(container);
            const v11103 = v11102.appendChild(div);
            v11103;
            div.innerHTML = '<table><tr><td></td><td>t</td></tr></table>';
            tds = div.getElementsByTagName('td');
            const v11104 = tds[0];
            const v11105 = v11104.style;
            v11105.cssText = 'padding:0;margin:0;border:0;display:none';
            const v11106 = tds[0];
            const v11107 = v11106.offsetHeight;
            isSupported = v11107 === 0;
            const v11108 = tds[0];
            const v11109 = v11108.style;
            v11109.display = '';
            const v11110 = tds[1];
            const v11111 = v11110.style;
            v11111.display = 'none';
            const v11112 = tds[0];
            const v11113 = v11112.offsetHeight;
            const v11114 = v11113 === 0;
            reliableHiddenOffsetsVal = isSupported && v11114;
            const v11115 = body.removeChild(container);
            v11115;
            body = null;
            div = body;
            return reliableHiddenOffsetsVal;
        };
        const v11119 = function () {
            const v11117 = boxSizingVal == null;
            if (v11117) {
                const v11118 = computeStyleTests();
                v11118;
            }
            return boxSizingVal;
        };
        const v11122 = function () {
            const v11120 = boxSizingReliableVal == null;
            if (v11120) {
                const v11121 = computeStyleTests();
                v11121;
            }
            return boxSizingReliableVal;
        };
        const v11125 = function () {
            const v11123 = pixelPositionVal == null;
            if (v11123) {
                const v11124 = computeStyleTests();
                v11124;
            }
            return pixelPositionVal;
        };
        const v11147 = function () {
            var body;
            var container;
            var div;
            var marginDiv;
            const v11126 = reliableMarginRightVal == null;
            const v11127 = window.getComputedStyle;
            const v11128 = v11126 && v11127;
            if (v11128) {
                const v11129 = document.getElementsByTagName('body');
                body = v11129[0];
                const v11130 = !body;
                if (v11130) {
                    return;
                }
                container = document.createElement('div');
                div = document.createElement('div');
                const v11131 = container.style;
                v11131.cssText = containerStyles;
                const v11132 = body.appendChild(container);
                const v11133 = v11132.appendChild(div);
                v11133;
                const v11134 = document.createElement('div');
                marginDiv = div.appendChild(v11134);
                const v11135 = marginDiv.style;
                const v11136 = div.style;
                v11136.cssText = divReset;
                v11135.cssText = v11136.cssText;
                const v11137 = marginDiv.style;
                const v11138 = marginDiv.style;
                v11138.width = '0';
                v11137.marginRight = v11138.width;
                const v11139 = div.style;
                v11139.width = '1px';
                const v11140 = window.getComputedStyle(marginDiv, null);
                const v11141 = {};
                const v11142 = v11140 || v11141;
                const v11143 = v11142.marginRight;
                const v11144 = parseFloat(v11143);
                const v11145 = !v11144;
                reliableMarginRightVal = v11145;
                const v11146 = body.removeChild(container);
                v11146;
            }
            return reliableMarginRightVal;
        };
        const v11148 = {
            reliableHiddenOffsets: v11116,
            boxSizing: v11119,
            boxSizingReliable: v11122,
            pixelPosition: v11125,
            reliableMarginRight: v11147
        };
        const v11149 = jQuery.extend(support, v11148);
        v11149;
        const computeStyleTests = function () {
            var container;
            var div;
            const v11150 = document.getElementsByTagName('body');
            var body = v11150[0];
            const v11151 = !body;
            if (v11151) {
                return;
            }
            container = document.createElement('div');
            div = document.createElement('div');
            const v11152 = container.style;
            v11152.cssText = containerStyles;
            const v11153 = body.appendChild(container);
            const v11154 = v11153.appendChild(div);
            v11154;
            const v11155 = div.style;
            const v11156 = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;' + 'position:absolute;display:block;padding:1px;border:1px;width:4px;';
            v11155.cssText = v11156 + 'margin-top:1%;top:1%';
            const v11157 = body.style;
            const v11158 = v11157.zoom;
            const v11159 = v11158 != null;
            const v11160 = { zoom: 1 };
            const v11161 = {};
            let v11162;
            if (v11159) {
                v11162 = v11160;
            } else {
                v11162 = v11161;
            }
            const v11164 = function () {
                const v11163 = div.offsetWidth;
                boxSizingVal = v11163 === 4;
            };
            const v11165 = jQuery.swap(body, v11162, v11164);
            v11165;
            boxSizingReliableVal = true;
            pixelPositionVal = false;
            reliableMarginRightVal = true;
            const v11166 = window.getComputedStyle;
            if (v11166) {
                const v11167 = window.getComputedStyle(div, null);
                const v11168 = {};
                const v11169 = v11167 || v11168;
                const v11170 = v11169.top;
                pixelPositionVal = v11170 !== '1%';
                const v11171 = window.getComputedStyle(div, null);
                const v11172 = { width: '4px' };
                const v11173 = v11171 || v11172;
                const v11174 = v11173.width;
                boxSizingReliableVal = v11174 === '4px';
            }
            const v11175 = body.removeChild(container);
            v11175;
            body = null;
            div = body;
        };
    };
    const v11177 = v11176();
    v11177;
    const v11186 = function (elem, options, callback, args) {
        var ret;
        var name;
        var old = {};
        for (name in options) {
            const v11178 = elem.style;
            const v11179 = v11178[name];
            old[name] = v11179;
            const v11180 = elem.style;
            const v11181 = options[name];
            v11180[name] = v11181;
        }
        const v11182 = [];
        const v11183 = args || v11182;
        ret = callback.apply(elem, v11183);
        for (name in options) {
            const v11184 = elem.style;
            const v11185 = old[name];
            v11184[name] = v11185;
        }
        return ret;
    };
    jQuery.swap = v11186;
    var ralpha = /alpha\([^)]*\)/i;
    var ropacity = /opacity\s*=\s*([^)]*)/;
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/;
    const v11187 = '^(' + pnum;
    const v11188 = v11187 + ')(.*)$';
    var rnumsplit = new RegExp(v11188, 'i');
    const v11189 = '^([+-])=(' + pnum;
    const v11190 = v11189 + ')';
    var rrelNum = new RegExp(v11190, 'i');
    var cssShow = {};
    cssShow.position = 'absolute';
    cssShow.visibility = 'hidden';
    cssShow.display = 'block';
    var cssNormalTransform = {};
    cssNormalTransform.letterSpacing = 0;
    cssNormalTransform.fontWeight = 400;
    var cssPrefixes = [
        'Webkit',
        'O',
        'Moz',
        'ms'
    ];
    const vendorPropName = function (style, name) {
        const v11191 = name in style;
        if (v11191) {
            return name;
        }
        const v11192 = name.charAt(0);
        const v11193 = v11192.toUpperCase();
        const v11194 = name.slice(1);
        var capName = v11193 + v11194;
        var origName = name;
        var i = cssPrefixes.length;
        let v11195 = i--;
        while (v11195) {
            const v11196 = cssPrefixes[i];
            name = v11196 + capName;
            const v11197 = name in style;
            if (v11197) {
                return name;
            }
            v11195 = i--;
        }
        return origName;
    };
    const showHide = function (elements, show) {
        var display;
        var elem;
        var hidden;
        var values = [];
        var index = 0;
        var length = elements.length;
        let v11198 = index < length;
        while (v11198) {
            elem = elements[index];
            const v11200 = elem.style;
            const v11201 = !v11200;
            if (v11201) {
                continue;
            }
            const v11202 = jQuery._data(elem, 'olddisplay');
            values[index] = v11202;
            const v11203 = elem.style;
            display = v11203.display;
            if (show) {
                const v11204 = values[index];
                const v11205 = !v11204;
                const v11206 = display === 'none';
                const v11207 = v11205 && v11206;
                if (v11207) {
                    const v11208 = elem.style;
                    v11208.display = '';
                }
                const v11209 = elem.style;
                const v11210 = v11209.display;
                const v11211 = v11210 === '';
                const v11212 = isHidden(elem);
                const v11213 = v11211 && v11212;
                if (v11213) {
                    const v11214 = elem.nodeName;
                    const v11215 = defaultDisplay(v11214);
                    const v11216 = jQuery._data(elem, 'olddisplay', v11215);
                    values[index] = v11216;
                }
            } else {
                const v11217 = values[index];
                const v11218 = !v11217;
                if (v11218) {
                    hidden = isHidden(elem);
                    const v11219 = display !== 'none';
                    const v11220 = display && v11219;
                    const v11221 = !hidden;
                    const v11222 = v11220 || v11221;
                    if (v11222) {
                        const v11223 = jQuery.css(elem, 'display');
                        let v11224;
                        if (hidden) {
                            v11224 = display;
                        } else {
                            v11224 = v11223;
                        }
                        const v11225 = jQuery._data(elem, 'olddisplay', v11224);
                        v11225;
                    }
                }
            }
            const v11199 = index++;
            v11198 = index < length;
        }
        (index = 0)
        let v11226 = index < length;
        while (v11226) {
            elem = elements[index];
            const v11228 = elem.style;
            const v11229 = !v11228;
            if (v11229) {
                continue;
            }
            const v11230 = !show;
            const v11231 = elem.style;
            const v11232 = v11231.display;
            const v11233 = v11232 === 'none';
            const v11234 = v11230 || v11233;
            const v11235 = elem.style;
            const v11236 = v11235.display;
            const v11237 = v11236 === '';
            const v11238 = v11234 || v11237;
            if (v11238) {
                const v11239 = elem.style;
                const v11240 = values[index];
                const v11241 = v11240 || '';
                let v11242;
                if (show) {
                    v11242 = v11241;
                } else {
                    v11242 = 'none';
                }
                v11239.display = v11242;
            }
            const v11227 = index++;
            v11226 = index < length;
        }
        return elements;
    };
    const setPositiveNumber = function (elem, value, subtract) {
        var matches = rnumsplit.exec(value);
        const v11243 = matches[1];
        const v11244 = subtract || 0;
        const v11245 = v11243 - v11244;
        const v11246 = Math.max(0, v11245);
        const v11247 = matches[2];
        const v11248 = v11247 || 'px';
        const v11249 = v11246 + v11248;
        let v11250;
        if (matches) {
            v11250 = v11249;
        } else {
            v11250 = value;
        }
        return v11250;
    };
    const augmentWidthOrHeight = function (elem, name, extra, isBorderBox, styles) {
        let i;
        let v11251;
        if (isBorderBox) {
            v11251 = 'border';
        } else {
            v11251 = 'content';
        }
        const v11252 = extra === v11251;
        const v11253 = name === 'width';
        let v11254;
        if (v11253) {
            v11254 = 1;
        } else {
            v11254 = 0;
        }
        if (v11252) {
            i = 4;
        } else {
            i = v11254;
        }
        var val = 0;
        let v11255 = i < 4;
        while (v11255) {
            const v11256 = extra === 'margin';
            if (v11256) {
                const v11257 = cssExpand[i];
                const v11258 = extra + v11257;
                val += jQuery.css(elem, v11258, true, styles);
            }
            if (isBorderBox) {
                const v11259 = extra === 'content';
                if (v11259) {
                    const v11260 = cssExpand[i];
                    const v11261 = 'padding' + v11260;
                    val -= jQuery.css(elem, v11261, true, styles);
                }
                const v11262 = extra !== 'margin';
                if (v11262) {
                    const v11263 = cssExpand[i];
                    const v11264 = 'border' + v11263;
                    const v11265 = v11264 + 'Width';
                    val -= jQuery.css(elem, v11265, true, styles);
                }
            } else {
                const v11266 = cssExpand[i];
                const v11267 = 'padding' + v11266;
                val += jQuery.css(elem, v11267, true, styles);
                const v11268 = extra !== 'padding';
                if (v11268) {
                    const v11269 = cssExpand[i];
                    const v11270 = 'border' + v11269;
                    const v11271 = v11270 + 'Width';
                    val += jQuery.css(elem, v11271, true, styles);
                }
            }
            v11255 = i < 4;
        }
        return val;
    };
    const getWidthOrHeight = function (elem, name, extra) {
        var valueIsBorderBox = true;
        let val;
        const v11272 = name === 'width';
        const v11273 = elem.offsetWidth;
        const v11274 = elem.offsetHeight;
        if (v11272) {
            val = v11273;
        } else {
            val = v11274;
        }
        var styles = getStyles(elem);
        const v11275 = support.boxSizing();
        const v11276 = jQuery.css(elem, 'boxSizing', false, styles);
        const v11277 = v11276 === 'border-box';
        var isBorderBox = v11275 && v11277;
        const v11278 = val <= 0;
        const v11279 = val == null;
        const v11280 = v11278 || v11279;
        if (v11280) {
            val = curCSS(elem, name, styles);
            const v11281 = val < 0;
            const v11282 = val == null;
            const v11283 = v11281 || v11282;
            if (v11283) {
                const v11284 = elem.style;
                val = v11284[name];
            }
            const v11285 = rnumnonpx.test(val);
            if (v11285) {
                return val;
            }
            const v11286 = support.boxSizingReliable();
            const v11287 = elem.style;
            const v11288 = v11287[name];
            const v11289 = val === v11288;
            const v11290 = v11286 || v11289;
            valueIsBorderBox = isBorderBox && v11290;
            const v11291 = parseFloat(val);
            val = v11291 || 0;
        }
        let v11292;
        if (isBorderBox) {
            v11292 = 'border';
        } else {
            v11292 = 'content';
        }
        const v11293 = extra || v11292;
        const v11294 = augmentWidthOrHeight(elem, name, v11293, valueIsBorderBox, styles);
        const v11295 = val + v11294;
        const v11296 = v11295 + 'px';
        return v11296;
    };
    const v11299 = function (elem, computed) {
        if (computed) {
            var ret = curCSS(elem, 'opacity');
            const v11297 = ret === '';
            let v11298;
            if (v11297) {
                v11298 = '1';
            } else {
                v11298 = ret;
            }
            return v11298;
        }
    };
    const v11300 = {};
    v11300.get = v11299;
    const v11301 = {};
    v11301.opacity = v11300;
    const v11302 = {};
    v11302['columnCount'] = true;
    v11302['fillOpacity'] = true;
    v11302['fontWeight'] = true;
    v11302['lineHeight'] = true;
    v11302['opacity'] = true;
    v11302['order'] = true;
    v11302['orphans'] = true;
    v11302['widows'] = true;
    v11302['zIndex'] = true;
    v11302['zoom'] = true;
    const v11303 = support.cssFloat;
    let v11304;
    if (v11303) {
        v11304 = 'cssFloat';
    } else {
        v11304 = 'styleFloat';
    }
    const v11305 = {};
    v11305['float'] = v11304;
    const v11360 = function (elem, name, value, extra) {
        const v11306 = !elem;
        const v11307 = elem.nodeType;
        const v11308 = v11307 === 3;
        const v11309 = v11306 || v11308;
        const v11310 = elem.nodeType;
        const v11311 = v11310 === 8;
        const v11312 = v11309 || v11311;
        const v11313 = elem.style;
        const v11314 = !v11313;
        const v11315 = v11312 || v11314;
        if (v11315) {
            return;
        }
        var ret;
        var type;
        var hooks;
        var origName = jQuery.camelCase(name);
        var style = elem.style;
        const v11316 = jQuery.cssProps;
        const v11317 = v11316[origName];
        const v11319 = vendorPropName(style, origName);
        name = v11317 || (v11318[origName] = v11319);
        const v11320 = jQuery.cssHooks;
        const v11321 = v11320[name];
        const v11322 = jQuery.cssHooks;
        const v11323 = v11322[origName];
        hooks = v11321 || v11323;
        const v11324 = value !== undefined;
        if (v11324) {
            const v11325 = typeof value;
            type = v11325;
            const v11326 = type === 'string';
            const v11327 = v11326 && (ret = rrelNum.exec(value));
            if (v11327) {
                const v11328 = ret[1];
                const v11329 = v11328 + 1;
                const v11330 = ret[2];
                const v11331 = v11329 * v11330;
                const v11332 = jQuery.css(elem, name);
                const v11333 = parseFloat(v11332);
                value = v11331 + v11333;
                type = 'number';
            }
            const v11334 = value == null;
            const v11335 = value !== value;
            const v11336 = v11334 || v11335;
            if (v11336) {
                return;
            }
            const v11337 = type === 'number';
            const v11338 = jQuery.cssNumber;
            const v11339 = v11338[origName];
            const v11340 = !v11339;
            const v11341 = v11337 && v11340;
            if (v11341) {
                value += 'px';
            }
            const v11342 = support.clearCloneStyle;
            const v11343 = !v11342;
            const v11344 = value === '';
            const v11345 = v11343 && v11344;
            const v11346 = name.indexOf('background');
            const v11347 = v11346 === 0;
            const v11348 = v11345 && v11347;
            if (v11348) {
                style[name] = 'inherit';
            }
            const v11349 = !hooks;
            const v11350 = 'set' in hooks;
            const v11351 = !v11350;
            const v11352 = v11349 || v11351;
            const v11353 = (value = hooks.set(elem, value, extra)) !== undefined;
            const v11354 = v11352 || v11353;
            if (v11354) {
                try {
                    style[name] = '';
                    style[name] = value;
                } catch (e) {
                }
            }
        } else {
            const v11355 = 'get' in hooks;
            const v11356 = hooks && v11355;
            const v11357 = (ret = hooks.get(elem, false, extra)) !== undefined;
            const v11358 = v11356 && v11357;
            if (v11358) {
                return ret;
            }
            const v11359 = style[name];
            return v11359;
        }
    };
    const v11383 = function (elem, name, extra, styles) {
        var num;
        var val;
        var hooks;
        var origName = jQuery.camelCase(name);
        const v11361 = jQuery.cssProps;
        const v11362 = v11361[origName];
        const v11364 = elem.style;
        const v11365 = vendorPropName(v11364, origName);
        name = v11362 || (v11363[origName] = v11365);
        const v11366 = jQuery.cssHooks;
        const v11367 = v11366[name];
        const v11368 = jQuery.cssHooks;
        const v11369 = v11368[origName];
        hooks = v11367 || v11369;
        const v11370 = 'get' in hooks;
        const v11371 = hooks && v11370;
        if (v11371) {
            val = hooks.get(elem, true, extra);
        }
        const v11372 = val === undefined;
        if (v11372) {
            val = curCSS(elem, name, styles);
        }
        const v11373 = val === 'normal';
        const v11374 = name in cssNormalTransform;
        const v11375 = v11373 && v11374;
        if (v11375) {
            val = cssNormalTransform[name];
        }
        const v11376 = extra === '';
        const v11377 = v11376 || extra;
        if (v11377) {
            num = parseFloat(val);
            const v11378 = extra === true;
            const v11379 = jQuery.isNumeric(num);
            const v11380 = v11378 || v11379;
            const v11381 = num || 0;
            let v11382;
            if (v11380) {
                v11382 = v11381;
            } else {
                v11382 = val;
            }
            return v11382;
        }
        return val;
    };
    const v11384 = {
        cssHooks: v11301,
        cssNumber: v11302,
        cssProps: v11305,
        style: v11360,
        css: v11383
    };
    const v11385 = jQuery.extend(v11384);
    v11385;
    const v11386 = [
        'height',
        'width'
    ];
    const v11409 = function (i, name) {
        const v11387 = jQuery.cssHooks;
        const v11398 = function (elem, computed, extra) {
            if (computed) {
                const v11388 = elem.offsetWidth;
                const v11389 = v11388 === 0;
                const v11390 = jQuery.css(elem, 'display');
                const v11391 = rdisplayswap.test(v11390);
                const v11392 = v11389 && v11391;
                const v11394 = function () {
                    const v11393 = getWidthOrHeight(elem, name, extra);
                    return v11393;
                };
                const v11395 = jQuery.swap(elem, cssShow, v11394);
                const v11396 = getWidthOrHeight(elem, name, extra);
                let v11397;
                if (v11392) {
                    v11397 = v11395;
                } else {
                    v11397 = v11396;
                }
                return v11397;
            }
        };
        const v11407 = function (elem, value, extra) {
            const v11399 = getStyles(elem);
            var styles = extra && v11399;
            const v11400 = support.boxSizing();
            const v11401 = jQuery.css(elem, 'boxSizing', false, styles);
            const v11402 = v11401 === 'border-box';
            const v11403 = v11400 && v11402;
            const v11404 = augmentWidthOrHeight(elem, name, extra, v11403, styles);
            let v11405;
            if (extra) {
                v11405 = v11404;
            } else {
                v11405 = 0;
            }
            const v11406 = setPositiveNumber(elem, value, v11405);
            return v11406;
        };
        const v11408 = {};
        v11408.get = v11398;
        v11408.set = v11407;
        v11387[name] = v11408;
    };
    const v11410 = jQuery.each(v11386, v11409);
    v11410;
    const v11411 = support.opacity;
    const v11412 = !v11411;
    if (v11412) {
        const v11413 = jQuery.cssHooks;
        const v11429 = function (elem, computed) {
            const v11414 = elem.currentStyle;
            const v11415 = computed && v11414;
            const v11416 = elem.currentStyle;
            const v11417 = v11416.filter;
            const v11418 = elem.style;
            const v11419 = v11418.filter;
            let v11420;
            if (v11415) {
                v11420 = v11417;
            } else {
                v11420 = v11419;
            }
            const v11421 = v11420 || '';
            const v11422 = ropacity.test(v11421);
            const v11423 = RegExp.$1;
            const v11424 = parseFloat(v11423);
            const v11425 = 0.01 * v11424;
            const v11426 = v11425 + '';
            let v11427;
            if (computed) {
                v11427 = '1';
            } else {
                v11427 = '';
            }
            let v11428;
            if (v11422) {
                v11428 = v11426;
            } else {
                v11428 = v11427;
            }
            return v11428;
        };
        const v11458 = function (elem, value) {
            var style = elem.style;
            var currentStyle = elem.currentStyle;
            let opacity;
            const v11430 = jQuery.isNumeric(value);
            const v11431 = value * 100;
            const v11432 = 'alpha(opacity=' + v11431;
            const v11433 = v11432 + ')';
            if (v11430) {
                opacity = v11433;
            } else {
                opacity = '';
            }
            const v11434 = currentStyle.filter;
            const v11435 = currentStyle && v11434;
            const v11436 = style.filter;
            const v11437 = v11435 || v11436;
            var filter = v11437 || '';
            style.zoom = 1;
            const v11438 = value >= 1;
            const v11439 = value === '';
            const v11440 = v11438 || v11439;
            const v11441 = filter.replace(ralpha, '');
            const v11442 = jQuery.trim(v11441);
            const v11443 = v11442 === '';
            const v11444 = v11440 && v11443;
            const v11445 = style.removeAttribute;
            const v11446 = v11444 && v11445;
            if (v11446) {
                const v11447 = style.removeAttribute('filter');
                v11447;
                const v11448 = value === '';
                const v11449 = currentStyle.filter;
                const v11450 = !v11449;
                const v11451 = currentStyle && v11450;
                const v11452 = v11448 || v11451;
                if (v11452) {
                    return;
                }
            }
            const v11453 = ralpha.test(filter);
            const v11454 = filter.replace(ralpha, opacity);
            const v11455 = filter + ' ';
            const v11456 = v11455 + opacity;
            let v11457;
            if (v11453) {
                v11457 = v11454;
            } else {
                v11457 = v11456;
            }
            style.filter = v11457;
        };
        const v11459 = {};
        v11459.get = v11429;
        v11459.set = v11458;
        v11413.opacity = v11459;
    }
    const v11461 = support.reliableMarginRight;
    const v11465 = function (elem, computed) {
        if (computed) {
            const v11462 = { 'display': 'inline-block' };
            const v11463 = [
                elem,
                'marginRight'
            ];
            const v11464 = jQuery.swap(elem, v11462, curCSS, v11463);
            return v11464;
        }
    };
    const v11466 = addGetHookIf(v11461, v11465);
    v11460.marginRight = v11466;
    const v11467 = {
        margin: '',
        padding: '',
        border: 'Width'
    };
    const v11491 = function (prefix, suffix) {
        const v11468 = jQuery.cssHooks;
        const v11469 = prefix + suffix;
        const v11484 = function (value) {
            var i = 0;
            var expanded = {};
            let parts;
            const v11470 = typeof value;
            const v11471 = v11470 === 'string';
            const v11472 = value.split(' ');
            const v11473 = [value];
            if (v11471) {
                parts = v11472;
            } else {
                parts = v11473;
            }
            let v11474 = i < 4;
            while (v11474) {
                const v11476 = cssExpand[i];
                const v11477 = prefix + v11476;
                const v11478 = v11477 + suffix;
                const v11479 = parts[i];
                const v11480 = i - 2;
                const v11481 = parts[v11480];
                const v11482 = v11479 || v11481;
                const v11483 = parts[0];
                expanded[v11478] = v11482 || v11483;
                const v11475 = i++;
                v11474 = i < 4;
            }
            return expanded;
        };
        const v11485 = {};
        v11485.expand = v11484;
        v11468[v11469] = v11485;
        const v11486 = rmargin.test(prefix);
        const v11487 = !v11486;
        if (v11487) {
            const v11488 = jQuery.cssHooks;
            const v11489 = prefix + suffix;
            const v11490 = v11488[v11489];
            v11490.set = setPositiveNumber;
        }
    };
    const v11492 = jQuery.each(v11467, v11491);
    v11492;
    const v11493 = jQuery.fn;
    const v11508 = function (name, value) {
        const v11504 = function (elem, name, value) {
            var styles;
            var len;
            var map = {};
            var i = 0;
            const v11494 = jQuery.isArray(name);
            if (v11494) {
                styles = getStyles(elem);
                len = name.length;
                let v11495 = i < len;
                while (v11495) {
                    const v11498 = name[i];
                    const v11499 = jQuery.css(elem, v11498, false, styles);
                    map[v11497] = v11499;
                    const v11496 = i++;
                    v11495 = i < len;
                }
                return map;
            }
            const v11500 = value !== undefined;
            const v11501 = jQuery.style(elem, name, value);
            const v11502 = jQuery.css(elem, name);
            let v11503;
            if (v11500) {
                v11503 = v11501;
            } else {
                v11503 = v11502;
            }
            return v11503;
        };
        const v11505 = arguments.length;
        const v11506 = v11505 > 1;
        const v11507 = access(this, v11504, name, value, v11506);
        return v11507;
    };
    const v11510 = function () {
        const v11509 = showHide(this, true);
        return v11509;
    };
    const v11512 = function () {
        const v11511 = showHide(this);
        return v11511;
    };
    const v11525 = function (state) {
        const v11513 = typeof state;
        const v11514 = v11513 === 'boolean';
        if (v11514) {
            const v11515 = this.show();
            const v11516 = this.hide();
            let v11517;
            if (state) {
                v11517 = v11515;
            } else {
                v11517 = v11516;
            }
            return v11517;
        }
        const v11523 = function () {
            const v11518 = isHidden(this);
            if (v11518) {
                const v11519 = jQuery(this);
                const v11520 = v11519.show();
                v11520;
            } else {
                const v11521 = jQuery(this);
                const v11522 = v11521.hide();
                v11522;
            }
        };
        const v11524 = this.each(v11523);
        return v11524;
    };
    const v11526 = {
        css: v11508,
        show: v11510,
        hide: v11512,
        toggle: v11525
    };
    const v11527 = v11493.extend(v11526);
    v11527;
    const Tween = function (elem, options, prop, end, easing) {
        const v11528 = Tween.prototype;
        const v11529 = new v11528.init(elem, options, prop, end, easing);
        return v11529;
    };
    jQuery.Tween = Tween;
    const v11534 = function (elem, options, prop, end, easing, unit) {
        this.elem = elem;
        this.prop = prop;
        this.easing = easing || 'swing';
        this.options = options;
        const v11530 = this.cur();
        this.start = this.now = v11530;
        this.end = end;
        const v11531 = jQuery.cssNumber;
        const v11532 = v11531[prop];
        let v11533;
        if (v11532) {
            v11533 = '';
        } else {
            v11533 = 'px';
        }
        this.unit = unit || v11533;
    };
    const v11544 = function () {
        const v11535 = Tween.propHooks;
        const v11536 = this.prop;
        var hooks = v11535[v11536];
        const v11537 = hooks.get;
        const v11538 = hooks && v11537;
        const v11539 = hooks.get(this);
        const v11540 = Tween.propHooks;
        const v11541 = v11540._default;
        const v11542 = v11541.get(this);
        let v11543;
        if (v11538) {
            v11543 = v11539;
        } else {
            v11543 = v11542;
        }
        return v11543;
    };
    const v11574 = function (percent) {
        var eased;
        const v11545 = Tween.propHooks;
        const v11546 = this.prop;
        var hooks = v11545[v11546];
        const v11547 = this.options;
        const v11548 = v11547.duration;
        if (v11548) {
            const v11549 = jQuery.easing;
            const v11550 = this.easing;
            const v11551 = this.options;
            const v11552 = v11551.duration;
            const v11553 = v11552 * percent;
            const v11554 = this.options;
            const v11555 = v11554.duration;
            eased = v11549[v11550](percent, v11553, 0, 1, v11555);
            this.pos = eased;
        } else {
            eased = percent;
            this.pos = eased;
        }
        const v11556 = this.end;
        const v11557 = this.start;
        const v11558 = v11556 - v11557;
        const v11559 = v11558 * eased;
        const v11560 = this.start;
        this.now = v11559 + v11560;
        const v11561 = this.options;
        const v11562 = v11561.step;
        if (v11562) {
            const v11563 = this.options;
            const v11564 = v11563.step;
            const v11565 = this.elem;
            const v11566 = this.now;
            const v11567 = v11564.call(v11565, v11566, this);
            v11567;
        }
        const v11568 = hooks.set;
        const v11569 = hooks && v11568;
        if (v11569) {
            const v11570 = hooks.set(this);
            v11570;
        } else {
            const v11571 = Tween.propHooks;
            const v11572 = v11571._default;
            const v11573 = v11572.set(this);
            v11573;
        }
        return this;
    };
    const v11575 = {};
    v11575.constructor = Tween;
    v11575.init = v11534;
    v11575.cur = v11544;
    v11575.run = v11574;
    Tween.prototype = v11575;
    const v11576 = Tween.prototype;
    const v11577 = v11576.init;
    const v11578 = Tween.prototype;
    v11577.prototype = v11578;
    const v11602 = function (tween) {
        var result;
        const v11579 = tween.elem;
        const v11580 = tween.prop;
        const v11581 = v11579[v11580];
        const v11582 = v11581 != null;
        const v11583 = tween.elem;
        const v11584 = v11583.style;
        const v11585 = !v11584;
        const v11586 = tween.elem;
        const v11587 = v11586.style;
        const v11588 = tween.prop;
        const v11589 = v11587[v11588];
        const v11590 = v11589 == null;
        const v11591 = v11585 || v11590;
        const v11592 = v11582 && v11591;
        if (v11592) {
            const v11593 = tween.elem;
            const v11594 = tween.prop;
            const v11595 = v11593[v11594];
            return v11595;
        }
        const v11596 = tween.elem;
        const v11597 = tween.prop;
        result = jQuery.css(v11596, v11597, '');
        const v11598 = !result;
        const v11599 = result === 'auto';
        const v11600 = v11598 || v11599;
        let v11601;
        if (v11600) {
            v11601 = 0;
        } else {
            v11601 = result;
        }
        return v11601;
    };
    const v11634 = function (tween) {
        const v11603 = jQuery.fx;
        const v11604 = v11603.step;
        const v11605 = tween.prop;
        const v11606 = v11604[v11605];
        if (v11606) {
            const v11607 = jQuery.fx;
            const v11608 = v11607.step;
            const v11609 = tween.prop;
            const v11610 = v11608[v11609](tween);
            v11610;
        } else {
            const v11611 = tween.elem;
            const v11612 = v11611.style;
            const v11613 = tween.elem;
            const v11614 = v11613.style;
            const v11615 = jQuery.cssProps;
            const v11616 = tween.prop;
            const v11617 = v11615[v11616];
            const v11618 = v11614[v11617];
            const v11619 = v11618 != null;
            const v11620 = jQuery.cssHooks;
            const v11621 = tween.prop;
            const v11622 = v11620[v11621];
            const v11623 = v11619 || v11622;
            const v11624 = v11612 && v11623;
            if (v11624) {
                const v11625 = tween.elem;
                const v11626 = tween.prop;
                const v11627 = tween.now;
                const v11628 = tween.unit;
                const v11629 = v11627 + v11628;
                const v11630 = jQuery.style(v11625, v11626, v11629);
                v11630;
            } else {
                const v11631 = tween.elem;
                const v11632 = tween.prop;
                const v11633 = tween.now;
                v11631[v11632] = v11633;
            }
        }
    };
    const v11635 = {};
    v11635.get = v11602;
    v11635.set = v11634;
    const v11636 = {};
    v11636._default = v11635;
    Tween.propHooks = v11636;
    const v11637 = Tween.propHooks;
    const v11638 = Tween.propHooks;
    const v11647 = function (tween) {
        const v11639 = tween.elem;
        const v11640 = v11639.nodeType;
        const v11641 = tween.elem;
        const v11642 = v11641.parentNode;
        const v11643 = v11640 && v11642;
        if (v11643) {
            const v11644 = tween.elem;
            const v11645 = tween.prop;
            const v11646 = tween.now;
            v11644[v11645] = v11646;
        }
    };
    const v11648 = {};
    v11648.set = v11647;
    v11638.scrollLeft = v11648;
    v11637.scrollTop = v11638.scrollLeft;
    const v11649 = function (p) {
        return p;
    };
    const v11655 = function (p) {
        const v11650 = Math.PI;
        const v11651 = p * v11650;
        const v11652 = Math.cos(v11651);
        const v11653 = v11652 / 2;
        const v11654 = 0.5 - v11653;
        return v11654;
    };
    const v11656 = {};
    v11656.linear = v11649;
    v11656.swing = v11655;
    jQuery.easing = v11656;
    const v11657 = Tween.prototype;
    const v11658 = v11657.init;
    jQuery.fx = v11658;
    const v11659 = jQuery.fx;
    const v11660 = {};
    v11659.step = v11660;
    var fxNow;
    var timerId;
    var rfxtypes = /^(?:toggle|show|hide)$/;
    const v11661 = '^(?:([+-])=|)(' + pnum;
    const v11662 = v11661 + ')([a-z%]*)$';
    var rfxnum = new RegExp(v11662, 'i');
    var rrun = /queueHooks$/;
    var animationPrefilters = [defaultPrefilter];
    const v11704 = function (prop, value) {
        var tween = this.createTween(prop, value);
        var target = tween.cur();
        var parts = rfxnum.exec(value);
        const v11663 = parts[3];
        const v11664 = parts && v11663;
        const v11665 = jQuery.cssNumber;
        const v11666 = v11665[prop];
        let v11667;
        if (v11666) {
            v11667 = '';
        } else {
            v11667 = 'px';
        }
        var unit = v11664 || v11667;
        const v11668 = jQuery.cssNumber;
        const v11669 = v11668[prop];
        const v11670 = unit !== 'px';
        const v11671 = +target;
        const v11672 = v11670 && v11671;
        const v11673 = v11669 || v11672;
        const v11674 = tween.elem;
        const v11675 = jQuery.css(v11674, prop);
        const v11676 = rfxnum.exec(v11675);
        var start = v11673 && v11676;
        var scale = 1;
        var maxIterations = 20;
        const v11677 = start[3];
        const v11678 = v11677 !== unit;
        const v11679 = start && v11678;
        if (v11679) {
            const v11680 = start[3];
            unit = unit || v11680;
            const v11681 = [];
            parts = parts || v11681;
            const v11682 = +target;
            start = v11682 || 1;
            let v11688 = true;
            while (v11688) {
                scale = scale || '.5';
                start = start / scale;
                const v11689 = tween.elem;
                const v11690 = start + unit;
                const v11691 = jQuery.style(v11689, prop, v11690);
                v11691;
                v11688 = v11686 && v11687;
            }
        }
        if (parts) {
            const v11692 = +start;
            const v11693 = +target;
            const v11694 = v11692 || v11693;
            tween.start = v11694 || 0;
            start = tween.start;
            tween.unit = unit;
            const v11695 = parts[1];
            const v11696 = parts[1];
            const v11697 = v11696 + 1;
            const v11698 = parts[2];
            const v11699 = v11697 * v11698;
            const v11700 = start + v11699;
            const v11701 = parts[2];
            const v11702 = +v11701;
            let v11703;
            if (v11695) {
                v11703 = v11700;
            } else {
                v11703 = v11702;
            }
            tween.end = v11703;
        }
        return tween;
    };
    const v11705 = [v11704];
    var tweeners = {};
    tweeners['*'] = v11705;
    const createFxNow = function () {
        const v11706 = function () {
            fxNow = undefined;
        };
        const v11707 = setTimeout(v11706);
        v11707;
        return fxNow = jQuery.now();
    };
    const genFx = function (type, includeWidth) {
        var which;
        var attrs = {};
        attrs.height = type;
        var i = 0;
        if (includeWidth) {
            includeWidth = 1;
        } else {
            includeWidth = 0;
        }
        let v11708 = i < 4;
        while (v11708) {
            which = cssExpand[i];
            const v11709 = 'margin' + which;
            const v11710 = 'padding' + which;
            attrs.v11710 = type;
            attrs[v11709] = attrs[v11710];
            v11708 = i < 4;
        }
        if (includeWidth) {
            attrs.width = type;
            attrs.opacity = attrs.width;
        }
        return attrs;
    };
    const createTween = function (value, prop, animation) {
        var tween;
        const v11711 = tweeners[prop];
        const v11712 = [];
        const v11713 = v11711 || v11712;
        const v11714 = tweeners['*'];
        var collection = v11713.concat(v11714);
        var index = 0;
        var length = collection.length;
        let v11715 = index < length;
        while (v11715) {
            const v11717 = collection[index];
            if (tween = v11717.call(animation, prop, value)) {
                return tween;
            }
            const v11716 = index++;
            v11715 = index < length;
        }
    };
    const defaultPrefilter = function (elem, props, opts) {
        var prop;
        var value;
        var toggle;
        var tween;
        var hooks;
        var oldfire;
        var display;
        var dDisplay;
        var anim = this;
        var orig = {};
        var style = elem.style;
        const v11718 = elem.nodeType;
        const v11719 = isHidden(elem);
        var hidden = v11718 && v11719;
        var dataShow = jQuery._data(elem, 'fxshow');
        const v11720 = opts.queue;
        const v11721 = !v11720;
        if (v11721) {
            hooks = jQuery._queueHooks(elem, 'fx');
            const v11722 = hooks.unqueued;
            const v11723 = v11722 == null;
            if (v11723) {
                hooks.unqueued = 0;
                const v11724 = hooks.empty;
                oldfire = v11724.fire;
                const v11725 = hooks.empty;
                const v11729 = function () {
                    const v11726 = hooks.unqueued;
                    const v11727 = !v11726;
                    if (v11727) {
                        const v11728 = oldfire();
                        v11728;
                    }
                };
                v11725.fire = v11729;
            }
            const v11730 = hooks.unqueued;
            const v11731 = v11730++;
            v11731;
            const v11741 = function () {
                const v11739 = function () {
                    const v11732 = hooks.unqueued;
                    const v11733 = v11732--;
                    v11733;
                    const v11734 = jQuery.queue(elem, 'fx');
                    const v11735 = v11734.length;
                    const v11736 = !v11735;
                    if (v11736) {
                        const v11737 = hooks.empty;
                        const v11738 = v11737.fire();
                        v11738;
                    }
                };
                const v11740 = anim.always(v11739);
                v11740;
            };
            const v11742 = anim.always(v11741);
            v11742;
        }
        const v11743 = elem.nodeType;
        const v11744 = v11743 === 1;
        const v11745 = 'height' in props;
        const v11746 = 'width' in props;
        const v11747 = v11745 || v11746;
        const v11748 = v11744 && v11747;
        if (v11748) {
            const v11749 = style.overflow;
            const v11750 = style.overflowX;
            const v11751 = style.overflowY;
            opts.overflow = [
                v11749,
                v11750,
                v11751
            ];
            display = jQuery.css(elem, 'display');
            const v11752 = elem.nodeName;
            dDisplay = defaultDisplay(v11752);
            const v11753 = display === 'none';
            if (v11753) {
                display = dDisplay;
            }
            const v11754 = display === 'inline';
            const v11755 = jQuery.css(elem, 'float');
            const v11756 = v11755 === 'none';
            const v11757 = v11754 && v11756;
            if (v11757) {
                const v11758 = support.inlineBlockNeedsLayout;
                const v11759 = !v11758;
                const v11760 = dDisplay === 'inline';
                const v11761 = v11759 || v11760;
                if (v11761) {
                    style.display = 'inline-block';
                } else {
                    style.zoom = 1;
                }
            }
        }
        const v11762 = opts.overflow;
        if (v11762) {
            style.overflow = 'hidden';
            const v11763 = support.shrinkWrapBlocks();
            const v11764 = !v11763;
            if (v11764) {
                const v11771 = function () {
                    const v11765 = opts.overflow;
                    const v11766 = v11765[0];
                    style.overflow = v11766;
                    const v11767 = opts.overflow;
                    const v11768 = v11767[1];
                    style.overflowX = v11768;
                    const v11769 = opts.overflow;
                    const v11770 = v11769[2];
                    style.overflowY = v11770;
                };
                const v11772 = anim.always(v11771);
                v11772;
            }
        }
        for (prop in props) {
            value = props[prop];
            const v11773 = rfxtypes.exec(value);
            if (v11773) {
                const v11774 = props[prop];
                const v11775 = delete v11774;
                v11775;
                const v11776 = value === 'toggle';
                toggle = toggle || v11776;
                let v11777;
                if (hidden) {
                    v11777 = 'hide';
                } else {
                    v11777 = 'show';
                }
                const v11778 = value === v11777;
                if (v11778) {
                    const v11779 = value === 'show';
                    const v11780 = v11779 && dataShow;
                    const v11781 = dataShow[prop];
                    const v11782 = v11781 !== undefined;
                    const v11783 = v11780 && v11782;
                    if (v11783) {
                        hidden = true;
                    } else {
                        continue;
                    }
                }
                const v11784 = dataShow[prop];
                const v11785 = dataShow && v11784;
                const v11786 = jQuery.style(elem, prop);
                orig[prop] = v11785 || v11786;
            }
        }
        const v11787 = jQuery.isEmptyObject(orig);
        const v11788 = !v11787;
        if (v11788) {
            if (dataShow) {
                const v11789 = 'hidden' in dataShow;
                if (v11789) {
                    hidden = dataShow.hidden;
                }
            } else {
                const v11790 = {};
                dataShow = jQuery._data(elem, 'fxshow', v11790);
            }
            if (toggle) {
                const v11791 = !hidden;
                dataShow.hidden = v11791;
            }
            if (hidden) {
                const v11792 = jQuery(elem);
                const v11793 = v11792.show();
                v11793;
            } else {
                const v11796 = function () {
                    const v11794 = jQuery(elem);
                    const v11795 = v11794.hide();
                    v11795;
                };
                const v11797 = anim.done(v11796);
                v11797;
            }
            const v11801 = function () {
                var prop;
                const v11798 = jQuery._removeData(elem, 'fxshow');
                v11798;
                for (prop in orig) {
                    const v11799 = orig[prop];
                    const v11800 = jQuery.style(elem, prop, v11799);
                    v11800;
                }
            };
            const v11802 = anim.done(v11801);
            v11802;
            for (prop in orig) {
                const v11803 = dataShow[prop];
                let v11804;
                if (hidden) {
                    v11804 = v11803;
                } else {
                    v11804 = 0;
                }
                tween = createTween(v11804, prop, anim);
                const v11805 = prop in dataShow;
                const v11806 = !v11805;
                if (v11806) {
                    const v11807 = tween.start;
                    dataShow[prop] = v11807;
                    if (hidden) {
                        const v11808 = tween.start;
                        tween.end = v11808;
                        const v11809 = prop === 'width';
                        const v11810 = prop === 'height';
                        const v11811 = v11809 || v11810;
                        let v11812;
                        if (v11811) {
                            v11812 = 1;
                        } else {
                            v11812 = 0;
                        }
                        tween.start = v11812;
                    }
                }
            }
        }
    };
    const propFilter = function (props, specialEasing) {
        var index;
        var name;
        var easing;
        var value;
        var hooks;
        for (index in props) {
            name = jQuery.camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            const v11813 = jQuery.isArray(value);
            if (v11813) {
                easing = value[1];
                const v11814 = value[0];
                props.index = v11814;
                value = props[index];
            }
            const v11815 = index !== name;
            if (v11815) {
                props[name] = value;
                const v11816 = props[index];
                const v11817 = delete v11816;
                v11817;
            }
            const v11818 = jQuery.cssHooks;
            hooks = v11818[name];
            const v11819 = 'expand' in hooks;
            const v11820 = hooks && v11819;
            if (v11820) {
                value = hooks.expand(value);
                const v11821 = props[name];
                const v11822 = delete v11821;
                v11822;
                for (index in value) {
                    const v11823 = index in props;
                    const v11824 = !v11823;
                    if (v11824) {
                        const v11825 = value[index];
                        props[index] = v11825;
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    };
    const Animation = function (elem, properties, options) {
        var result;
        var stopped;
        var index = 0;
        var length = animationPrefilters.length;
        const v11826 = jQuery.Deferred();
        const v11829 = function () {
            const v11827 = tick.elem;
            const v11828 = delete v11827;
            v11828;
        };
        var deferred = v11826.always(v11829);
        var tick = function () {
            if (stopped) {
                return false;
            }
            const v11830 = createFxNow();
            var currentTime = fxNow || v11830;
            const v11831 = animation.startTime;
            const v11832 = animation.duration;
            const v11833 = v11831 + v11832;
            const v11834 = v11833 - currentTime;
            var remaining = Math.max(0, v11834);
            const v11835 = animation.duration;
            const v11836 = remaining / v11835;
            var temp = v11836 || 0;
            var percent = 1 - temp;
            var index = 0;
            const v11837 = animation.tweens;
            var length = v11837.length;
            let v11838 = index < length;
            while (v11838) {
                const v11840 = animation.tweens;
                const v11841 = v11840[index];
                const v11842 = v11841.run(percent);
                v11842;
                const v11839 = index++;
                v11838 = index < length;
            }
            const v11843 = [
                animation,
                percent,
                remaining
            ];
            const v11844 = deferred.notifyWith(elem, v11843);
            v11844;
            const v11845 = percent < 1;
            const v11846 = v11845 && length;
            if (v11846) {
                return remaining;
            } else {
                const v11847 = [animation];
                const v11848 = deferred.resolveWith(elem, v11847);
                v11848;
                return false;
            }
        };
        const v11849 = {};
        const v11850 = jQuery.extend(v11849, properties);
        const v11851 = {};
        const v11852 = { specialEasing: v11851 };
        const v11853 = jQuery.extend(true, v11852, options);
        const v11854 = createFxNow();
        const v11855 = fxNow || v11854;
        const v11856 = options.duration;
        const v11857 = [];
        const v11867 = function (prop, end) {
            const v11858 = animation.opts;
            const v11859 = animation.opts;
            const v11860 = v11859.specialEasing;
            const v11861 = v11860[prop];
            const v11862 = animation.opts;
            const v11863 = v11862.easing;
            const v11864 = v11861 || v11863;
            var tween = jQuery.Tween(elem, v11858, prop, end, v11864);
            const v11865 = animation.tweens;
            const v11866 = v11865.push(tween);
            v11866;
            return tween;
        };
        const v11879 = function (gotoEnd) {
            var index = 0;
            let length;
            const v11868 = animation.tweens;
            const v11869 = v11868.length;
            if (gotoEnd) {
                length = v11869;
            } else {
                length = 0;
            }
            if (stopped) {
                return this;
            }
            stopped = true;
            let v11870 = index < length;
            while (v11870) {
                const v11872 = animation.tweens;
                const v11873 = v11872[index];
                const v11874 = v11873.run(1);
                v11874;
                const v11871 = index++;
                v11870 = index < length;
            }
            if (gotoEnd) {
                const v11875 = [
                    animation,
                    gotoEnd
                ];
                const v11876 = deferred.resolveWith(elem, v11875);
                v11876;
            } else {
                const v11877 = [
                    animation,
                    gotoEnd
                ];
                const v11878 = deferred.rejectWith(elem, v11877);
                v11878;
            }
            return this;
        };
        const v11880 = {
            elem: elem,
            props: v11850,
            opts: v11853,
            originalProperties: properties,
            originalOptions: options,
            startTime: v11855,
            duration: v11856,
            tweens: v11857,
            createTween: v11867,
            stop: v11879
        };
        var animation = deferred.promise(v11880);
        var props = animation.props;
        const v11881 = animation.opts;
        const v11882 = v11881.specialEasing;
        const v11883 = propFilter(props, v11882);
        v11883;
        let v11884 = index < length;
        while (v11884) {
            const v11886 = animationPrefilters[index];
            const v11887 = animation.opts;
            result = v11886.call(animation, elem, props, v11887);
            if (result) {
                return result;
            }
            const v11885 = index++;
            v11884 = index < length;
        }
        const v11888 = jQuery.map(props, createTween, animation);
        v11888;
        const v11889 = animation.opts;
        const v11890 = v11889.start;
        const v11891 = jQuery.isFunction(v11890);
        if (v11891) {
            const v11892 = animation.opts;
            const v11893 = v11892.start;
            const v11894 = v11893.call(elem, animation);
            v11894;
        }
        const v11895 = jQuery.fx;
        const v11896 = animation.opts;
        const v11897 = v11896.queue;
        const v11898 = {
            elem: elem,
            anim: animation,
            queue: v11897
        };
        const v11899 = jQuery.extend(tick, v11898);
        const v11900 = v11895.timer(v11899);
        v11900;
        const v11901 = animation.opts;
        const v11902 = v11901.progress;
        const v11903 = animation.progress(v11902);
        const v11904 = animation.opts;
        const v11905 = v11904.done;
        const v11906 = animation.opts;
        const v11907 = v11906.complete;
        const v11908 = v11903.done(v11905, v11907);
        const v11909 = animation.opts;
        const v11910 = v11909.fail;
        const v11911 = v11908.fail(v11910);
        const v11912 = animation.opts;
        const v11913 = v11912.always;
        const v11914 = v11911.always(v11913);
        return v11914;
    };
    const v11922 = function (props, callback) {
        const v11915 = jQuery.isFunction(props);
        if (v11915) {
            callback = props;
            props = ['*'];
        } else {
            props = props.split(' ');
        }
        var prop;
        var index = 0;
        var length = props.length;
        let v11916 = index < length;
        while (v11916) {
            prop = props[index];
            const v11918 = tweeners[prop];
            const v11919 = [];
            tweeners[prop] = v11918 || v11919;
            const v11920 = tweeners[prop];
            const v11921 = v11920.unshift(callback);
            v11921;
            const v11917 = index++;
            v11916 = index < length;
        }
    };
    const v11925 = function (callback, prepend) {
        if (prepend) {
            const v11923 = animationPrefilters.unshift(callback);
            v11923;
        } else {
            const v11924 = animationPrefilters.push(callback);
            v11924;
        }
    };
    const v11926 = {
        tweener: v11922,
        prefilter: v11925
    };
    const v11927 = jQuery.extend(Animation, v11926);
    jQuery.Animation = v11927;
    const v11980 = function (speed, easing, fn) {
        let opt;
        const v11928 = typeof speed;
        const v11929 = v11928 === 'object';
        const v11930 = speed && v11929;
        const v11931 = {};
        const v11932 = jQuery.extend(v11931, speed);
        const v11933 = !fn;
        const v11934 = v11933 && easing;
        const v11935 = fn || v11934;
        const v11936 = jQuery.isFunction(speed);
        const v11937 = v11936 && speed;
        const v11938 = v11935 || v11937;
        const v11939 = fn && easing;
        const v11940 = jQuery.isFunction(easing);
        const v11941 = !v11940;
        const v11942 = easing && v11941;
        const v11943 = v11942 && easing;
        const v11944 = v11939 || v11943;
        const v11945 = {
            complete: v11938,
            duration: speed,
            easing: v11944
        };
        if (v11930) {
            opt = v11932;
        } else {
            opt = v11945;
        }
        const v11946 = jQuery.fx;
        const v11947 = v11946.off;
        const v11948 = opt.duration;
        const v11949 = typeof v11948;
        const v11950 = v11949 === 'number';
        const v11951 = opt.duration;
        const v11952 = opt.duration;
        const v11953 = jQuery.fx;
        const v11954 = v11953.speeds;
        const v11955 = v11952 in v11954;
        const v11956 = jQuery.fx;
        const v11957 = v11956.speeds;
        const v11958 = opt.duration;
        const v11959 = v11957[v11958];
        const v11960 = jQuery.fx;
        const v11961 = v11960.speeds;
        const v11962 = v11961._default;
        let v11963;
        if (v11955) {
            v11963 = v11959;
        } else {
            v11963 = v11962;
        }
        let v11964;
        if (v11950) {
            v11964 = v11951;
        } else {
            v11964 = v11963;
        }
        let v11965;
        if (v11947) {
            v11965 = 0;
        } else {
            v11965 = v11964;
        }
        opt.duration = v11965;
        const v11966 = opt.queue;
        const v11967 = v11966 == null;
        const v11968 = opt.queue;
        const v11969 = v11968 === true;
        const v11970 = v11967 || v11969;
        if (v11970) {
            opt.queue = 'fx';
        }
        const v11971 = opt.complete;
        opt.old = v11971;
        const v11979 = function () {
            const v11972 = opt.old;
            const v11973 = jQuery.isFunction(v11972);
            if (v11973) {
                const v11974 = opt.old;
                const v11975 = v11974.call(this);
                v11975;
            }
            const v11976 = opt.queue;
            if (v11976) {
                const v11977 = opt.queue;
                const v11978 = jQuery.dequeue(this, v11977);
                v11978;
            }
        };
        opt.complete = v11979;
        return opt;
    };
    jQuery.speed = v11980;
    const v11981 = jQuery.fn;
    const v11988 = function (speed, to, easing, callback) {
        const v11982 = this.filter(isHidden);
        const v11983 = v11982.css('opacity', 0);
        const v11984 = v11983.show();
        const v11985 = v11984.end();
        const v11986 = { opacity: to };
        const v11987 = v11985.animate(v11986, speed, easing, callback);
        return v11987;
    };
    const v12001 = function (prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop);
        var optall = jQuery.speed(speed, easing, callback);
        var doAnimation = function () {
            const v11989 = {};
            const v11990 = jQuery.extend(v11989, prop);
            var anim = Animation(this, v11990, optall);
            const v11991 = jQuery._data(this, 'finish');
            const v11992 = empty || v11991;
            if (v11992) {
                const v11993 = anim.stop(true);
                v11993;
            }
        };
        doAnimation.finish = doAnimation;
        const v11994 = optall.queue;
        const v11995 = v11994 === false;
        const v11996 = empty || v11995;
        const v11997 = this.each(doAnimation);
        const v11998 = optall.queue;
        const v11999 = this.queue(v11998, doAnimation);
        let v12000;
        if (v11996) {
            v12000 = v11997;
        } else {
            v12000 = v11999;
        }
        return v12000;
    };
    const v12047 = function (type, clearQueue, gotoEnd) {
        var stopQueue = function (hooks) {
            var stop = hooks.stop;
            const v12002 = hooks.stop;
            const v12003 = delete v12002;
            v12003;
            const v12004 = stop(gotoEnd);
            v12004;
        };
        const v12005 = typeof type;
        const v12006 = v12005 !== 'string';
        if (v12006) {
            gotoEnd = clearQueue;
            clearQueue = type;
            type = undefined;
        }
        const v12007 = type !== false;
        const v12008 = clearQueue && v12007;
        if (v12008) {
            const v12009 = type || 'fx';
            const v12010 = [];
            const v12011 = this.queue(v12009, v12010);
            v12011;
        }
        const v12045 = function () {
            var dequeue = true;
            const v12012 = type != null;
            const v12013 = type + 'queueHooks';
            var index = v12012 && v12013;
            var timers = jQuery.timers;
            var data = jQuery._data(this);
            if (index) {
                const v12014 = data[index];
                const v12015 = data[index];
                const v12016 = v12015.stop;
                const v12017 = v12014 && v12016;
                if (v12017) {
                    const v12018 = data[index];
                    const v12019 = stopQueue(v12018);
                    v12019;
                }
            } else {
                for (index in data) {
                    const v12020 = data[index];
                    const v12021 = data[index];
                    const v12022 = v12021.stop;
                    const v12023 = v12020 && v12022;
                    const v12024 = rrun.test(index);
                    const v12025 = v12023 && v12024;
                    if (v12025) {
                        const v12026 = data[index];
                        const v12027 = stopQueue(v12026);
                        v12027;
                    }
                }
            }
            (index = timers.length)
            let v12028 = index--;
            while (v12028) {
                const v12029 = timers[index];
                const v12030 = v12029.elem;
                const v12031 = v12030 === this;
                const v12032 = type == null;
                const v12033 = timers[index];
                const v12034 = v12033.queue;
                const v12035 = v12034 === type;
                const v12036 = v12032 || v12035;
                const v12037 = v12031 && v12036;
                if (v12037) {
                    const v12038 = timers[index];
                    const v12039 = v12038.anim;
                    const v12040 = v12039.stop(gotoEnd);
                    v12040;
                    dequeue = false;
                    const v12041 = timers.splice(index, 1);
                    v12041;
                }
                v12028 = index--;
            }
            const v12042 = !gotoEnd;
            const v12043 = dequeue || v12042;
            if (v12043) {
                const v12044 = jQuery.dequeue(this, type);
                v12044;
            }
        };
        const v12046 = this.each(v12045);
        return v12046;
    };
    const v12083 = function (type) {
        const v12048 = type !== false;
        if (v12048) {
            type = type || 'fx';
        }
        const v12081 = function () {
            var index;
            var data = jQuery._data(this);
            const v12049 = type + 'queue';
            var queue = data[v12049];
            const v12050 = type + 'queueHooks';
            var hooks = data[v12050];
            var timers = jQuery.timers;
            let length;
            const v12051 = queue.length;
            if (queue) {
                length = v12051;
            } else {
                length = 0;
            }
            data.finish = true;
            const v12052 = [];
            const v12053 = jQuery.queue(this, type, v12052);
            v12053;
            const v12054 = hooks.stop;
            const v12055 = hooks && v12054;
            if (v12055) {
                const v12056 = hooks.stop;
                const v12057 = v12056.call(this, true);
                v12057;
            }
            (index = timers.length)
            let v12058 = index--;
            while (v12058) {
                const v12059 = timers[index];
                const v12060 = v12059.elem;
                const v12061 = v12060 === this;
                const v12062 = timers[index];
                const v12063 = v12062.queue;
                const v12064 = v12063 === type;
                const v12065 = v12061 && v12064;
                if (v12065) {
                    const v12066 = timers[index];
                    const v12067 = v12066.anim;
                    const v12068 = v12067.stop(true);
                    v12068;
                    const v12069 = timers.splice(index, 1);
                    v12069;
                }
                v12058 = index--;
            }
            (index = 0)
            let v12070 = index < length;
            while (v12070) {
                const v12072 = queue[index];
                const v12073 = queue[index];
                const v12074 = v12073.finish;
                const v12075 = v12072 && v12074;
                if (v12075) {
                    const v12076 = queue[index];
                    const v12077 = v12076.finish;
                    const v12078 = v12077.call(this);
                    v12078;
                }
                const v12071 = index++;
                v12070 = index < length;
            }
            const v12079 = data.finish;
            const v12080 = delete v12079;
            v12080;
        };
        const v12082 = this.each(v12081);
        return v12082;
    };
    const v12084 = {
        fadeTo: v11988,
        animate: v12001,
        stop: v12047,
        finish: v12083
    };
    const v12085 = v11981.extend(v12084);
    v12085;
    const v12086 = [
        'toggle',
        'show',
        'hide'
    ];
    const v12098 = function (i, name) {
        const v12087 = jQuery.fn;
        var cssFn = v12087[name];
        const v12088 = jQuery.fn;
        const v12097 = function (speed, easing, callback) {
            const v12089 = speed == null;
            const v12090 = typeof speed;
            const v12091 = v12090 === 'boolean';
            const v12092 = v12089 || v12091;
            const v12093 = cssFn.apply(this, arguments);
            const v12094 = genFx(name, true);
            const v12095 = this.animate(v12094, speed, easing, callback);
            let v12096;
            if (v12092) {
                v12096 = v12093;
            } else {
                v12096 = v12095;
            }
            return v12096;
        };
        v12088[name] = v12097;
    };
    const v12099 = jQuery.each(v12086, v12098);
    v12099;
    const v12100 = genFx('show');
    const v12101 = genFx('hide');
    const v12102 = genFx('toggle');
    const v12103 = {};
    v12103.opacity = 'show';
    const v12104 = {};
    v12104.opacity = 'hide';
    const v12105 = {};
    v12105.opacity = 'toggle';
    const v12106 = {
        slideDown: v12100,
        slideUp: v12101,
        slideToggle: v12102,
        fadeIn: v12103,
        fadeOut: v12104,
        fadeToggle: v12105
    };
    const v12110 = function (name, props) {
        const v12107 = jQuery.fn;
        const v12109 = function (speed, easing, callback) {
            const v12108 = this.animate(props, speed, easing, callback);
            return v12108;
        };
        v12107[name] = v12109;
    };
    const v12111 = jQuery.each(v12106, v12110);
    v12111;
    jQuery.timers = [];
    const v12112 = jQuery.fx;
    const v12127 = function () {
        var timer;
        var timers = jQuery.timers;
        var i = 0;
        fxNow = jQuery.now();
        const v12113 = timers.length;
        let v12114 = i < v12113;
        while (v12114) {
            timer = timers[i];
            const v12116 = timer();
            const v12117 = !v12116;
            const v12118 = timers[i];
            const v12119 = v12118 === timer;
            const v12120 = v12117 && v12119;
            if (v12120) {
                const v12121 = i--;
                const v12122 = timers.splice(v12121, 1);
                v12122;
            }
            const v12115 = i++;
            v12114 = i < v12113;
        }
        const v12123 = timers.length;
        const v12124 = !v12123;
        if (v12124) {
            const v12125 = jQuery.fx;
            const v12126 = v12125.stop();
            v12126;
        }
        fxNow = undefined;
    };
    v12112.tick = v12127;
    const v12128 = jQuery.fx;
    const v12136 = function (timer) {
        const v12129 = jQuery.timers;
        const v12130 = v12129.push(timer);
        v12130;
        const v12131 = timer();
        if (v12131) {
            const v12132 = jQuery.fx;
            const v12133 = v12132.start();
            v12133;
        } else {
            const v12134 = jQuery.timers;
            const v12135 = v12134.pop();
            v12135;
        }
    };
    v12128.timer = v12136;
    const v12137 = jQuery.fx;
    v12137.interval = 13;
    const v12138 = jQuery.fx;
    const v12144 = function () {
        const v12139 = !timerId;
        if (v12139) {
            const v12140 = jQuery.fx;
            const v12141 = v12140.tick;
            const v12142 = jQuery.fx;
            const v12143 = v12142.interval;
            timerId = setInterval(v12141, v12143);
        }
    };
    v12138.start = v12144;
    const v12145 = jQuery.fx;
    const v12147 = function () {
        const v12146 = clearInterval(timerId);
        v12146;
        timerId = null;
    };
    v12145.stop = v12147;
    const v12148 = jQuery.fx;
    const v12149 = {};
    v12149.slow = 600;
    v12149.fast = 200;
    v12149._default = 400;
    v12148.speeds = v12149;
    const v12150 = jQuery.fn;
    const v12160 = function (time, type) {
        const v12151 = jQuery.fx;
        const v12152 = jQuery.fx;
        const v12153 = v12152.speeds;
        const v12154 = v12153[time];
        const v12155 = v12154 || time;
        if (v12151) {
            time = v12155;
        } else {
            time = time;
        }
        type = type || 'fx';
        const v12158 = function (next, hooks) {
            var timeout = setTimeout(next, time);
            const v12157 = function () {
                const v12156 = clearTimeout(timeout);
                v12156;
            };
            hooks.stop = v12157;
        };
        const v12159 = this.queue(type, v12158);
        return v12159;
    };
    v12150.delay = v12160;
    const v12184 = function () {
        var a;
        var input;
        var select;
        var opt;
        var div = document.createElement('div');
        const v12161 = div.setAttribute('className', 't');
        v12161;
        div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>';
        const v12162 = div.getElementsByTagName('a');
        a = v12162[0];
        select = document.createElement('select');
        const v12163 = document.createElement('option');
        opt = select.appendChild(v12163);
        const v12164 = div.getElementsByTagName('input');
        input = v12164[0];
        const v12165 = a.style;
        v12165.cssText = 'top:1px';
        const v12166 = div.className;
        support.getSetAttribute = v12166 !== 't';
        const v12167 = a.getAttribute('style');
        const v12168 = /top/.test(v12167);
        support.style = v12168;
        const v12169 = a.getAttribute('href');
        support.hrefNormalized = v12169 === '/a';
        const v12170 = input.value;
        const v12171 = !v12170;
        const v12172 = !v12171;
        support.checkOn = v12172;
        const v12173 = opt.selected;
        support.optSelected = v12173;
        const v12174 = document.createElement('form');
        const v12175 = v12174.enctype;
        const v12176 = !v12175;
        const v12177 = !v12176;
        support.enctype = v12177;
        select.disabled = true;
        const v12178 = opt.disabled;
        const v12179 = !v12178;
        support.optDisabled = v12179;
        input = document.createElement('input');
        const v12180 = input.setAttribute('value', '');
        v12180;
        const v12181 = input.getAttribute('value');
        support.input = v12181 === '';
        input.value = 't';
        const v12182 = input.setAttribute('type', 'radio');
        v12182;
        const v12183 = input.value;
        support.radioValue = v12183 === 't';
        div = null;
        opt = div;
        select = opt;
        input = select;
        a = input;
    };
    const v12185 = v12184();
    v12185;
    var rreturn = /\r/g;
    const v12186 = jQuery.fn;
    const v12234 = function (value) {
        var hooks;
        var ret;
        var isFunction;
        var elem = this[0];
        const v12187 = arguments.length;
        const v12188 = !v12187;
        if (v12188) {
            if (elem) {
                const v12189 = jQuery.valHooks;
                const v12190 = elem.type;
                const v12191 = v12189[v12190];
                const v12192 = jQuery.valHooks;
                const v12193 = elem.nodeName;
                const v12194 = v12193.toLowerCase();
                const v12195 = v12192[v12194];
                hooks = v12191 || v12195;
                const v12196 = 'get' in hooks;
                const v12197 = hooks && v12196;
                const v12198 = (ret = hooks.get(elem, 'value')) !== undefined;
                const v12199 = v12197 && v12198;
                if (v12199) {
                    return ret;
                }
                ret = elem.value;
                const v12200 = typeof ret;
                const v12201 = v12200 === 'string';
                const v12202 = ret.replace(rreturn, '');
                const v12203 = ret == null;
                let v12204;
                if (v12203) {
                    v12204 = '';
                } else {
                    v12204 = ret;
                }
                let v12205;
                if (v12201) {
                    v12205 = v12202;
                } else {
                    v12205 = v12204;
                }
                return v12205;
            }
            return;
        }
        isFunction = jQuery.isFunction(value);
        const v12232 = function (i) {
            var val;
            const v12206 = this.nodeType;
            const v12207 = v12206 !== 1;
            if (v12207) {
                return;
            }
            if (isFunction) {
                const v12208 = jQuery(this);
                const v12209 = v12208.val();
                val = value.call(this, i, v12209);
            } else {
                val = value;
            }
            const v12210 = val == null;
            if (v12210) {
                val = '';
            } else {
                const v12211 = typeof val;
                const v12212 = v12211 === 'number';
                if (v12212) {
                    val += '';
                } else {
                    const v12213 = jQuery.isArray(val);
                    if (v12213) {
                        const v12217 = function (value) {
                            const v12214 = value == null;
                            const v12215 = value + '';
                            let v12216;
                            if (v12214) {
                                v12216 = '';
                            } else {
                                v12216 = v12215;
                            }
                            return v12216;
                        };
                        val = jQuery.map(val, v12217);
                    }
                }
            }
            const v12218 = jQuery.valHooks;
            const v12219 = this.type;
            const v12220 = v12218[v12219];
            const v12221 = jQuery.valHooks;
            const v12222 = this.nodeName;
            const v12223 = v12222.toLowerCase();
            const v12224 = v12221[v12223];
            hooks = v12220 || v12224;
            const v12225 = !hooks;
            const v12226 = 'set' in hooks;
            const v12227 = !v12226;
            const v12228 = v12225 || v12227;
            const v12229 = hooks.set(this, val, 'value');
            const v12230 = v12229 === undefined;
            const v12231 = v12228 || v12230;
            if (v12231) {
                this.value = val;
            }
        };
        const v12233 = this.each(v12232);
        return v12233;
    };
    const v12235 = { val: v12234 };
    const v12236 = v12186.extend(v12235);
    v12236;
    const v12241 = function (elem) {
        const v12237 = jQuery.find;
        var val = v12237.attr(elem, 'value');
        const v12238 = val != null;
        const v12239 = jQuery.text(elem);
        let v12240;
        if (v12238) {
            v12240 = val;
        } else {
            v12240 = v12239;
        }
        return v12240;
    };
    const v12242 = {};
    v12242.get = v12241;
    const v12273 = function (elem) {
        var value;
        var option;
        var options = elem.options;
        var index = elem.selectedIndex;
        const v12243 = elem.type;
        const v12244 = v12243 === 'select-one';
        const v12245 = index < 0;
        var one = v12244 || v12245;
        let values;
        const v12246 = [];
        if (one) {
            values = null;
        } else {
            values = v12246;
        }
        let max;
        const v12247 = index + 1;
        const v12248 = options.length;
        if (one) {
            max = v12247;
        } else {
            max = v12248;
        }
        let i;
        const v12249 = index < 0;
        let v12250;
        if (one) {
            v12250 = index;
        } else {
            v12250 = 0;
        }
        if (v12249) {
            i = max;
        } else {
            i = v12250;
        }
        let v12251 = i < max;
        while (v12251) {
            option = options[i];
            const v12253 = option.selected;
            const v12254 = i === index;
            const v12255 = v12253 || v12254;
            const v12256 = support.optDisabled;
            const v12257 = option.disabled;
            const v12258 = !v12257;
            const v12259 = option.getAttribute('disabled');
            const v12260 = v12259 === null;
            let v12261;
            if (v12256) {
                v12261 = v12258;
            } else {
                v12261 = v12260;
            }
            const v12262 = v12255 && v12261;
            const v12263 = option.parentNode;
            const v12264 = v12263.disabled;
            const v12265 = !v12264;
            const v12266 = option.parentNode;
            const v12267 = jQuery.nodeName(v12266, 'optgroup');
            const v12268 = !v12267;
            const v12269 = v12265 || v12268;
            const v12270 = v12262 && v12269;
            if (v12270) {
                const v12271 = jQuery(option);
                value = v12271.val();
                if (one) {
                    return value;
                }
                const v12272 = values.push(value);
                v12272;
            }
            const v12252 = i++;
            v12251 = i < max;
        }
        return values;
    };
    const v12283 = function (elem, value) {
        var optionSet;
        var option;
        var options = elem.options;
        var values = jQuery.makeArray(value);
        var i = options.length;
        let v12274 = i--;
        while (v12274) {
            option = options[i];
            const v12275 = jQuery.valHooks;
            const v12276 = v12275.option;
            const v12277 = v12276.get(option);
            const v12278 = jQuery.inArray(v12277, values);
            const v12279 = v12278 >= 0;
            if (v12279) {
                try {
                    optionSet = true;
                    option.selected = optionSet;
                } catch (_) {
                    const v12280 = option.scrollHeight;
                    v12280;
                }
            } else {
                option.selected = false;
            }
            v12274 = i--;
        }
        const v12281 = !optionSet;
        if (v12281) {
            const v12282 = -1;
            elem.selectedIndex = v12282;
        }
        return options;
    };
    const v12284 = {};
    v12284.get = v12273;
    v12284.set = v12283;
    const v12285 = {};
    v12285.option = v12242;
    v12285.select = v12284;
    const v12286 = { valHooks: v12285 };
    const v12287 = jQuery.extend(v12286);
    v12287;
    const v12288 = [
        'radio',
        'checkbox'
    ];
    const v12305 = function () {
        const v12289 = jQuery.valHooks;
        const v12294 = function (elem, value) {
            const v12290 = jQuery.isArray(value);
            if (v12290) {
                const v12291 = jQuery(elem);
                const v12292 = v12291.val();
                const v12293 = jQuery.inArray(v12292, value);
                return elem.checked = v12293 >= 0;
            }
        };
        const v12295 = {};
        v12295.set = v12294;
        v12289[this] = v12295;
        const v12296 = support.checkOn;
        const v12297 = !v12296;
        if (v12297) {
            const v12298 = jQuery.valHooks;
            const v12299 = v12298[this];
            const v12304 = function (elem) {
                const v12300 = elem.getAttribute('value');
                const v12301 = v12300 === null;
                const v12302 = elem.value;
                let v12303;
                if (v12301) {
                    v12303 = 'on';
                } else {
                    v12303 = v12302;
                }
                return v12303;
            };
            v12299.get = v12304;
        }
    };
    const v12306 = jQuery.each(v12288, v12305);
    v12306;
    var nodeHook;
    var boolHook;
    const v12307 = jQuery.expr;
    var attrHandle = v12307.attrHandle;
    var ruseDefault = /^(?:checked|selected)$/i;
    var getSetAttribute = support.getSetAttribute;
    var getSetInput = support.input;
    const v12308 = jQuery.fn;
    const v12313 = function (name, value) {
        const v12309 = jQuery.attr;
        const v12310 = arguments.length;
        const v12311 = v12310 > 1;
        const v12312 = access(this, v12309, name, value, v12311);
        return v12312;
    };
    const v12317 = function (name) {
        const v12315 = function () {
            const v12314 = jQuery.removeAttr(this, name);
            v12314;
        };
        const v12316 = this.each(v12315);
        return v12316;
    };
    const v12318 = {
        attr: v12313,
        removeAttr: v12317
    };
    const v12319 = v12308.extend(v12318);
    v12319;
    const v12358 = function (elem, name, value) {
        var hooks;
        var ret;
        var nType = elem.nodeType;
        const v12320 = !elem;
        const v12321 = nType === 3;
        const v12322 = v12320 || v12321;
        const v12323 = nType === 8;
        const v12324 = v12322 || v12323;
        const v12325 = nType === 2;
        const v12326 = v12324 || v12325;
        if (v12326) {
            return;
        }
        const v12327 = elem.getAttribute;
        const v12328 = typeof v12327;
        const v12329 = v12328 === strundefined;
        if (v12329) {
            const v12330 = jQuery.prop(elem, name, value);
            return v12330;
        }
        const v12331 = nType !== 1;
        const v12332 = jQuery.isXMLDoc(elem);
        const v12333 = !v12332;
        const v12334 = v12331 || v12333;
        if (v12334) {
            name = name.toLowerCase();
            const v12335 = jQuery.attrHooks;
            const v12336 = v12335[name];
            const v12337 = jQuery.expr;
            const v12338 = v12337.match;
            const v12339 = v12338.bool;
            const v12340 = v12339.test(name);
            let v12341;
            if (v12340) {
                v12341 = boolHook;
            } else {
                v12341 = nodeHook;
            }
            hooks = v12336 || v12341;
        }
        const v12342 = value !== undefined;
        if (v12342) {
            const v12343 = value === null;
            if (v12343) {
                const v12344 = jQuery.removeAttr(elem, name);
                v12344;
            } else {
                const v12345 = 'set' in hooks;
                const v12346 = hooks && v12345;
                const v12347 = (ret = hooks.set(elem, value, name)) !== undefined;
                const v12348 = v12346 && v12347;
                if (v12348) {
                    return ret;
                } else {
                    const v12349 = value + '';
                    const v12350 = elem.setAttribute(name, v12349);
                    v12350;
                    return value;
                }
            }
        } else {
            const v12351 = 'get' in hooks;
            const v12352 = hooks && v12351;
            const v12353 = (ret = hooks.get(elem, name)) !== null;
            const v12354 = v12352 && v12353;
            if (v12354) {
                return ret;
            } else {
                const v12355 = jQuery.find;
                ret = v12355.attr(elem, name);
                const v12356 = ret == null;
                let v12357;
                if (v12356) {
                    v12357 = undefined;
                } else {
                    v12357 = ret;
                }
                return v12357;
            }
        }
    };
    const v12379 = function (elem, value) {
        var name;
        var propName;
        var i = 0;
        const v12359 = value.match(rnotwhite);
        var attrNames = value && v12359;
        const v12360 = elem.nodeType;
        const v12361 = v12360 === 1;
        const v12362 = attrNames && v12361;
        if (v12362) {
            const v12363 = i++;
            while (name = attrNames[v12363]) {
                const v12364 = jQuery.propFix;
                const v12365 = v12364[name];
                propName = v12365 || name;
                const v12366 = jQuery.expr;
                const v12367 = v12366.match;
                const v12368 = v12367.bool;
                const v12369 = v12368.test(name);
                if (v12369) {
                    const v12370 = getSetInput && getSetAttribute;
                    const v12371 = ruseDefault.test(name);
                    const v12372 = !v12371;
                    const v12373 = v12370 || v12372;
                    if (v12373) {
                        elem[propName] = false;
                    } else {
                        const v12374 = 'default-' + name;
                        const v12375 = jQuery.camelCase(v12374);
                        elem.propName = false;
                        elem[v12375] = elem[propName];
                    }
                } else {
                    const v12376 = jQuery.attr(elem, name, '');
                    v12376;
                }
                let v12377;
                if (getSetAttribute) {
                    v12377 = name;
                } else {
                    v12377 = propName;
                }
                const v12378 = elem.removeAttribute(v12377);
                v12378;
            }
        }
    };
    const v12387 = function (elem, value) {
        const v12380 = support.radioValue;
        const v12381 = !v12380;
        const v12382 = value === 'radio';
        const v12383 = v12381 && v12382;
        const v12384 = jQuery.nodeName(elem, 'input');
        const v12385 = v12383 && v12384;
        if (v12385) {
            var val = elem.value;
            const v12386 = elem.setAttribute('type', value);
            v12386;
            if (val) {
                elem.value = val;
            }
            return value;
        }
    };
    const v12388 = {};
    v12388.set = v12387;
    const v12389 = {};
    v12389.type = v12388;
    const v12390 = {
        attr: v12358,
        removeAttr: v12379,
        attrHooks: v12389
    };
    const v12391 = jQuery.extend(v12390);
    v12391;
    const v12406 = function (elem, value, name) {
        const v12392 = value === false;
        if (v12392) {
            const v12393 = jQuery.removeAttr(elem, name);
            v12393;
        } else {
            const v12394 = getSetInput && getSetAttribute;
            const v12395 = ruseDefault.test(name);
            const v12396 = !v12395;
            const v12397 = v12394 || v12396;
            if (v12397) {
                const v12398 = !getSetAttribute;
                const v12399 = jQuery.propFix;
                const v12400 = v12399[name];
                const v12401 = v12398 && v12400;
                const v12402 = v12401 || name;
                const v12403 = elem.setAttribute(v12402, name);
                v12403;
            } else {
                const v12404 = 'default-' + name;
                const v12405 = jQuery.camelCase(v12404);
                elem.name = true;
                elem[v12405] = elem[name];
            }
        }
        return name;
    };
    boolHook.set = v12406;
    boolHook = {};
    boolHook = {};
    const v12407 = jQuery.expr;
    const v12408 = v12407.match;
    const v12409 = v12408.bool;
    const v12410 = v12409.source;
    const v12411 = v12410.match(/\w+/g);
    const v12432 = function (i, name) {
        const v12412 = attrHandle[name];
        const v12413 = jQuery.find;
        const v12414 = v12413.attr;
        var getter = v12412 || v12414;
        const v12415 = getSetInput && getSetAttribute;
        const v12416 = ruseDefault.test(name);
        const v12417 = !v12416;
        const v12418 = v12415 || v12417;
        const v12423 = function (elem, name, isXML) {
            var ret;
            var handle;
            const v12419 = !isXML;
            if (v12419) {
                handle = attrHandle[name];
                attrHandle[name] = ret;
                const v12420 = getter(elem, name, isXML);
                const v12421 = v12420 != null;
                const v12422 = name.toLowerCase();
                if (v12421) {
                    ret = v12422;
                } else {
                    ret = null;
                }
                attrHandle[name] = handle;
            }
            return ret;
        };
        const v12430 = function (elem, name, isXML) {
            const v12424 = !isXML;
            if (v12424) {
                const v12425 = 'default-' + name;
                const v12426 = jQuery.camelCase(v12425);
                const v12427 = elem[v12426];
                const v12428 = name.toLowerCase();
                let v12429;
                if (v12427) {
                    v12429 = v12428;
                } else {
                    v12429 = null;
                }
                return v12429;
            }
        };
        let v12431;
        if (v12418) {
            v12431 = v12423;
        } else {
            v12431 = v12430;
        }
        attrHandle[name] = v12431;
    };
    const v12433 = jQuery.each(v12411, v12432);
    v12433;
    const v12434 = !getSetInput;
    const v12435 = !getSetAttribute;
    const v12436 = v12434 || v12435;
    if (v12436) {
        const v12437 = jQuery.attrHooks;
        const v12441 = function (elem, value, name) {
            const v12438 = jQuery.nodeName(elem, 'input');
            if (v12438) {
                elem.defaultValue = value;
            } else {
                const v12439 = nodeHook.set(elem, value, name);
                const v12440 = nodeHook && v12439;
                return v12440;
            }
        };
        const v12442 = {};
        v12442.set = v12441;
        v12437.value = v12442;
    }
    const v12443 = !getSetAttribute;
    if (v12443) {
        const v12451 = function (elem, value, name) {
            var ret = elem.getAttributeNode(name);
            const v12444 = !ret;
            if (v12444) {
                const v12445 = elem.ownerDocument;
                const v12446 = elem.setAttributeNode(ret = v12445.createAttribute(name));
                v12446;
            }
            value = '';
            ret.value = value;
            const v12447 = name === 'value';
            const v12448 = elem.getAttribute(name);
            const v12449 = value === v12448;
            const v12450 = v12447 || v12449;
            if (v12450) {
                return value;
            }
        };
        nodeHook.set = v12451;
        nodeHook = {};
        nodeHook = {};
        const v12458 = function (elem, name, isXML) {
            var ret;
            const v12452 = !isXML;
            if (v12452) {
                const v12453 = ret.value;
                const v12454 = v12453 !== '';
                const v12455 = (ret = elem.getAttributeNode(name)) && v12454;
                const v12456 = ret.value;
                let v12457;
                if (v12455) {
                    v12457 = v12456;
                } else {
                    v12457 = null;
                }
                return v12457;
            }
        };
        attrHandle.coords = v12458;
        attrHandle.name = attrHandle.coords;
        attrHandle.id = attrHandle.name;
        const v12459 = jQuery.valHooks;
        const v12463 = function (elem, name) {
            var ret = elem.getAttributeNode(name);
            const v12460 = ret.specified;
            const v12461 = ret && v12460;
            if (v12461) {
                const v12462 = ret.value;
                return v12462;
            }
        };
        const v12464 = nodeHook.set;
        const v12465 = {};
        v12465.get = v12463;
        v12465.set = v12464;
        v12459.button = v12465;
        const v12466 = jQuery.attrHooks;
        const v12470 = function (elem, value, name) {
            const v12467 = value === '';
            let v12468;
            if (v12467) {
                v12468 = false;
            } else {
                v12468 = value;
            }
            const v12469 = nodeHook.set(elem, v12468, name);
            v12469;
        };
        const v12471 = {};
        v12471.set = v12470;
        v12466.contenteditable = v12471;
        const v12472 = [
            'width',
            'height'
        ];
        const v12478 = function (i, name) {
            const v12473 = jQuery.attrHooks;
            const v12476 = function (elem, value) {
                const v12474 = value === '';
                if (v12474) {
                    const v12475 = elem.setAttribute(name, 'auto');
                    v12475;
                    return value;
                }
            };
            const v12477 = {};
            v12477.set = v12476;
            v12473[name] = v12477;
        };
        const v12479 = jQuery.each(v12472, v12478);
        v12479;
    }
    const v12480 = support.style;
    const v12481 = !v12480;
    if (v12481) {
        const v12482 = jQuery.attrHooks;
        const v12486 = function (elem) {
            const v12483 = elem.style;
            const v12484 = v12483.cssText;
            const v12485 = v12484 || undefined;
            return v12485;
        };
        const v12488 = function (elem, value) {
            const v12487 = elem.style;
            return v12487.cssText = value + '';
        };
        const v12489 = {};
        v12489.get = v12486;
        v12489.set = v12488;
        v12482.style = v12489;
    }
    var rfocusable = /^(?:input|select|textarea|button|object)$/i;
    var rclickable = /^(?:a|area)$/i;
    const v12490 = jQuery.fn;
    const v12495 = function (name, value) {
        const v12491 = jQuery.prop;
        const v12492 = arguments.length;
        const v12493 = v12492 > 1;
        const v12494 = access(this, v12491, name, value, v12493);
        return v12494;
    };
    const v12502 = function (name) {
        const v12496 = jQuery.propFix;
        const v12497 = v12496[name];
        name = v12497 || name;
        const v12500 = function () {
            try {
                this[name] = undefined;
                const v12498 = this[name];
                const v12499 = delete v12498;
                v12499;
            } catch (e) {
            }
        };
        const v12501 = this.each(v12500);
        return v12501;
    };
    const v12503 = {
        prop: v12495,
        removeProp: v12502
    };
    const v12504 = v12490.extend(v12503);
    v12504;
    const v12505 = {};
    v12505['for'] = 'htmlFor';
    v12505['class'] = 'className';
    const v12531 = function (elem, name, value) {
        var ret;
        var hooks;
        var notxml;
        var nType = elem.nodeType;
        const v12506 = !elem;
        const v12507 = nType === 3;
        const v12508 = v12506 || v12507;
        const v12509 = nType === 8;
        const v12510 = v12508 || v12509;
        const v12511 = nType === 2;
        const v12512 = v12510 || v12511;
        if (v12512) {
            return;
        }
        const v12513 = nType !== 1;
        const v12514 = jQuery.isXMLDoc(elem);
        const v12515 = !v12514;
        notxml = v12513 || v12515;
        if (notxml) {
            const v12516 = jQuery.propFix;
            const v12517 = v12516[name];
            name = v12517 || name;
            const v12518 = jQuery.propHooks;
            hooks = v12518[name];
        }
        const v12519 = value !== undefined;
        if (v12519) {
            const v12520 = 'set' in hooks;
            const v12521 = hooks && v12520;
            const v12522 = (ret = hooks.set(elem, value, name)) !== undefined;
            const v12523 = v12521 && v12522;
            let v12524;
            if (v12523) {
                v12524 = ret;
            } else {
                v12524 = elem[name] = value;
            }
            return v12524;
        } else {
            const v12525 = 'get' in hooks;
            const v12526 = hooks && v12525;
            const v12527 = (ret = hooks.get(elem, name)) !== null;
            const v12528 = v12526 && v12527;
            const v12529 = elem[name];
            let v12530;
            if (v12528) {
                v12530 = ret;
            } else {
                v12530 = v12529;
            }
            return v12530;
        }
    };
    const v12544 = function (elem) {
        const v12532 = jQuery.find;
        var tabindex = v12532.attr(elem, 'tabindex');
        const v12533 = parseInt(tabindex, 10);
        const v12534 = elem.nodeName;
        const v12535 = rfocusable.test(v12534);
        const v12536 = elem.nodeName;
        const v12537 = rclickable.test(v12536);
        const v12538 = elem.href;
        const v12539 = v12537 && v12538;
        const v12540 = v12535 || v12539;
        const v12541 = -1;
        let v12542;
        if (v12540) {
            v12542 = 0;
        } else {
            v12542 = v12541;
        }
        let v12543;
        if (tabindex) {
            v12543 = v12533;
        } else {
            v12543 = v12542;
        }
        return v12543;
    };
    const v12545 = {};
    v12545.get = v12544;
    const v12546 = {};
    v12546.tabIndex = v12545;
    const v12547 = {
        propFix: v12505,
        prop: v12531,
        propHooks: v12546
    };
    const v12548 = jQuery.extend(v12547);
    v12548;
    const v12549 = support.hrefNormalized;
    const v12550 = !v12549;
    if (v12550) {
        const v12551 = [
            'href',
            'src'
        ];
        const v12556 = function (i, name) {
            const v12552 = jQuery.propHooks;
            const v12554 = function (elem) {
                const v12553 = elem.getAttribute(name, 4);
                return v12553;
            };
            const v12555 = {};
            v12555.get = v12554;
            v12552[name] = v12555;
        };
        const v12557 = jQuery.each(v12551, v12556);
        v12557;
    }
    const v12558 = support.optSelected;
    const v12559 = !v12558;
    if (v12559) {
        const v12560 = jQuery.propHooks;
        const v12565 = function (elem) {
            var parent = elem.parentNode;
            if (parent) {
                const v12561 = parent.selectedIndex;
                v12561;
                const v12562 = parent.parentNode;
                if (v12562) {
                    const v12563 = parent.parentNode;
                    const v12564 = v12563.selectedIndex;
                    v12564;
                }
            }
            return null;
        };
        const v12566 = {};
        v12566.get = v12565;
        v12560.selected = v12566;
    }
    const v12567 = [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
    ];
    const v12570 = function () {
        const v12568 = jQuery.propFix;
        const v12569 = this.toLowerCase();
        v12568[v12569] = this;
    };
    const v12571 = jQuery.each(v12567, v12570);
    v12571;
    const v12572 = support.enctype;
    const v12573 = !v12572;
    if (v12573) {
        const v12574 = jQuery.propFix;
        v12574.enctype = 'encoding';
    }
    var rclass = /[\t\r\n\f]/g;
    const v12575 = jQuery.fn;
    const v12605 = function (value) {
        var classes;
        var elem;
        var cur;
        var clazz;
        var j;
        var finalValue;
        var i = 0;
        var len = this.length;
        const v12576 = typeof value;
        const v12577 = v12576 === 'string';
        var proceed = v12577 && value;
        const v12578 = jQuery.isFunction(value);
        if (v12578) {
            const v12583 = function (j) {
                const v12579 = jQuery(this);
                const v12580 = this.className;
                const v12581 = value.call(this, j, v12580);
                const v12582 = v12579.addClass(v12581);
                v12582;
            };
            const v12584 = this.each(v12583);
            return v12584;
        }
        if (proceed) {
            const v12585 = value || '';
            const v12586 = v12585.match(rnotwhite);
            const v12587 = [];
            classes = v12586 || v12587;
            let v12588 = i < len;
            while (v12588) {
                elem = this[i];
                const v12590 = elem.nodeType;
                const v12591 = v12590 === 1;
                const v12592 = elem.className;
                const v12593 = elem.className;
                const v12594 = ' ' + v12593;
                const v12595 = v12594 + ' ';
                const v12596 = v12595.replace(rclass, ' ');
                let v12597;
                if (v12592) {
                    v12597 = v12596;
                } else {
                    v12597 = ' ';
                }
                cur = v12591 && v12597;
                if (cur) {
                    j = 0;
                    const v12598 = j++;
                    while (clazz = classes[v12598]) {
                        const v12599 = ' ' + clazz;
                        const v12600 = v12599 + ' ';
                        const v12601 = cur.indexOf(v12600);
                        const v12602 = v12601 < 0;
                        if (v12602) {
                            cur += clazz + ' ';
                        }
                    }
                    finalValue = jQuery.trim(cur);
                    const v12603 = elem.className;
                    const v12604 = v12603 !== finalValue;
                    if (v12604) {
                        elem.className = finalValue;
                    }
                }
                const v12589 = i++;
                v12588 = i < len;
            }
        }
        return this;
    };
    const v12641 = function (value) {
        var classes;
        var elem;
        var cur;
        var clazz;
        var j;
        var finalValue;
        var i = 0;
        var len = this.length;
        const v12606 = arguments.length;
        const v12607 = v12606 === 0;
        const v12608 = typeof value;
        const v12609 = v12608 === 'string';
        const v12610 = v12609 && value;
        var proceed = v12607 || v12610;
        const v12611 = jQuery.isFunction(value);
        if (v12611) {
            const v12616 = function (j) {
                const v12612 = jQuery(this);
                const v12613 = this.className;
                const v12614 = value.call(this, j, v12613);
                const v12615 = v12612.removeClass(v12614);
                v12615;
            };
            const v12617 = this.each(v12616);
            return v12617;
        }
        if (proceed) {
            const v12618 = value || '';
            const v12619 = v12618.match(rnotwhite);
            const v12620 = [];
            classes = v12619 || v12620;
            let v12621 = i < len;
            while (v12621) {
                elem = this[i];
                const v12623 = elem.nodeType;
                const v12624 = v12623 === 1;
                const v12625 = elem.className;
                const v12626 = elem.className;
                const v12627 = ' ' + v12626;
                const v12628 = v12627 + ' ';
                const v12629 = v12628.replace(rclass, ' ');
                let v12630;
                if (v12625) {
                    v12630 = v12629;
                } else {
                    v12630 = '';
                }
                cur = v12624 && v12630;
                if (cur) {
                    j = 0;
                    const v12631 = j++;
                    while (clazz = classes[v12631]) {
                        const v12632 = ' ' + clazz;
                        const v12633 = v12632 + ' ';
                        const v12634 = cur.indexOf(v12633);
                        let v12635 = v12634 >= 0;
                        while (v12635) {
                            const v12636 = ' ' + clazz;
                            const v12637 = v12636 + ' ';
                            cur = cur.replace(v12637, ' ');
                            v12635 = v12634 >= 0;
                        }
                    }
                    const v12638 = jQuery.trim(cur);
                    if (value) {
                        finalValue = v12638;
                    } else {
                        finalValue = '';
                    }
                    const v12639 = elem.className;
                    const v12640 = v12639 !== finalValue;
                    if (v12640) {
                        elem.className = finalValue;
                    }
                }
                const v12622 = i++;
                v12621 = i < len;
            }
        }
        return this;
    };
    const v12678 = function (value, stateVal) {
        const v12642 = typeof value;
        var type = v12642;
        const v12643 = typeof stateVal;
        const v12644 = v12643 === 'boolean';
        const v12645 = type === 'string';
        const v12646 = v12644 && v12645;
        if (v12646) {
            const v12647 = this.addClass(value);
            const v12648 = this.removeClass(value);
            let v12649;
            if (stateVal) {
                v12649 = v12647;
            } else {
                v12649 = v12648;
            }
            return v12649;
        }
        const v12650 = jQuery.isFunction(value);
        if (v12650) {
            const v12655 = function (i) {
                const v12651 = jQuery(this);
                const v12652 = this.className;
                const v12653 = value.call(this, i, v12652, stateVal);
                const v12654 = v12651.toggleClass(v12653, stateVal);
                v12654;
            };
            const v12656 = this.each(v12655);
            return v12656;
        }
        const v12676 = function () {
            const v12657 = type === 'string';
            if (v12657) {
                var className;
                var i = 0;
                var self = jQuery(this);
                const v12658 = value.match(rnotwhite);
                const v12659 = [];
                var classNames = v12658 || v12659;
                const v12660 = i++;
                while (className = classNames[v12660]) {
                    const v12661 = self.hasClass(className);
                    if (v12661) {
                        const v12662 = self.removeClass(className);
                        v12662;
                    } else {
                        const v12663 = self.addClass(className);
                        v12663;
                    }
                }
            } else {
                const v12664 = type === strundefined;
                const v12665 = type === 'boolean';
                const v12666 = v12664 || v12665;
                if (v12666) {
                    const v12667 = this.className;
                    if (v12667) {
                        const v12668 = this.className;
                        const v12669 = jQuery._data(this, '__className__', v12668);
                        v12669;
                    }
                    const v12670 = this.className;
                    const v12671 = value === false;
                    const v12672 = v12670 || v12671;
                    const v12673 = jQuery._data(this, '__className__');
                    const v12674 = v12673 || '';
                    let v12675;
                    if (v12672) {
                        v12675 = '';
                    } else {
                        v12675 = v12674;
                    }
                    this.className = v12675;
                }
            }
        };
        const v12677 = this.each(v12676);
        return v12677;
    };
    const v12693 = function (selector) {
        const v12679 = ' ' + selector;
        var className = v12679 + ' ';
        var i = 0;
        var l = this.length;
        let v12680 = i < l;
        while (v12680) {
            const v12682 = this[i];
            const v12683 = v12682.nodeType;
            const v12684 = v12683 === 1;
            const v12685 = this[i];
            const v12686 = v12685.className;
            const v12687 = ' ' + v12686;
            const v12688 = v12687 + ' ';
            const v12689 = v12688.replace(rclass, ' ');
            const v12690 = v12689.indexOf(className);
            const v12691 = v12690 >= 0;
            const v12692 = v12684 && v12691;
            if (v12692) {
                return true;
            }
            const v12681 = i++;
            v12680 = i < l;
        }
        return false;
    };
    const v12694 = {
        addClass: v12605,
        removeClass: v12641,
        toggleClass: v12678,
        hasClass: v12693
    };
    const v12695 = v12575.extend(v12694);
    v12695;
    const v12696 = 'blur focus focusin focusout load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ';
    const v12697 = v12696 + 'change select submit keydown keypress keyup error contextmenu';
    const v12698 = v12697.split(' ');
    const v12706 = function (i, name) {
        const v12699 = jQuery.fn;
        const v12705 = function (data, fn) {
            const v12700 = arguments.length;
            const v12701 = v12700 > 0;
            const v12702 = this.on(name, null, data, fn);
            const v12703 = this.trigger(name);
            let v12704;
            if (v12701) {
                v12704 = v12702;
            } else {
                v12704 = v12703;
            }
            return v12704;
        };
        v12699[name] = v12705;
    };
    const v12707 = jQuery.each(v12698, v12706);
    v12707;
    const v12708 = jQuery.fn;
    const v12712 = function (fnOver, fnOut) {
        const v12709 = this.mouseenter(fnOver);
        const v12710 = fnOut || fnOver;
        const v12711 = v12709.mouseleave(v12710);
        return v12711;
    };
    const v12714 = function (types, data, fn) {
        const v12713 = this.on(types, null, data, fn);
        return v12713;
    };
    const v12716 = function (types, fn) {
        const v12715 = this.off(types, null, fn);
        return v12715;
    };
    const v12718 = function (selector, types, data, fn) {
        const v12717 = this.on(types, selector, data, fn);
        return v12717;
    };
    const v12725 = function (selector, types, fn) {
        const v12719 = arguments.length;
        const v12720 = v12719 === 1;
        const v12721 = this.off(selector, '**');
        const v12722 = selector || '**';
        const v12723 = this.off(types, v12722, fn);
        let v12724;
        if (v12720) {
            v12724 = v12721;
        } else {
            v12724 = v12723;
        }
        return v12724;
    };
    const v12726 = {
        hover: v12712,
        bind: v12714,
        unbind: v12716,
        delegate: v12718,
        undelegate: v12725
    };
    const v12727 = v12708.extend(v12726);
    v12727;
    var nonce = jQuery.now();
    var rquery = /\?/;
    var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    const v12751 = function (data) {
        const v12728 = window.JSON;
        const v12729 = window.JSON;
        const v12730 = v12729.parse;
        const v12731 = v12728 && v12730;
        if (v12731) {
            const v12732 = window.JSON;
            const v12733 = data + '';
            const v12734 = v12732.parse(v12733);
            return v12734;
        }
        var requireNonComma;
        var depth = null;
        const v12735 = data + '';
        var str = jQuery.trim(v12735);
        const v12740 = function (token, comma, open, close) {
            const v12736 = requireNonComma && comma;
            if (v12736) {
                depth = 0;
            }
            const v12737 = depth === 0;
            if (v12737) {
                return token;
            }
            requireNonComma = open || comma;
            const v12738 = !close;
            const v12739 = !open;
            depth += v12738 - v12739;
            return '';
        };
        const v12741 = str.replace(rvalidtokens, v12740);
        const v12742 = jQuery.trim(v12741);
        const v12743 = !v12742;
        const v12744 = str && v12743;
        const v12745 = 'return ' + str;
        const v12746 = Function(v12745);
        const v12747 = v12746();
        const v12748 = 'Invalid JSON: ' + data;
        const v12749 = jQuery.error(v12748);
        let v12750;
        if (v12744) {
            v12750 = v12747;
        } else {
            v12750 = v12749;
        }
        return v12750;
    };
    jQuery.parseJSON = v12751;
    const v12767 = function (data) {
        var xml;
        var tmp;
        const v12752 = !data;
        const v12753 = typeof data;
        const v12754 = v12753 !== 'string';
        const v12755 = v12752 || v12754;
        if (v12755) {
            return null;
        }
        try {
            const v12756 = window.DOMParser;
            if (v12756) {
                tmp = new DOMParser();
                xml = tmp.parseFromString(data, 'text/xml');
            } else {
                xml = new ActiveXObject('Microsoft.XMLDOM');
                xml.async = 'false';
                const v12757 = xml.loadXML(data);
                v12757;
            }
        } catch (e) {
            xml = undefined;
        }
        const v12758 = !xml;
        const v12759 = xml.documentElement;
        const v12760 = !v12759;
        const v12761 = v12758 || v12760;
        const v12762 = xml.getElementsByTagName('parsererror');
        const v12763 = v12762.length;
        const v12764 = v12761 || v12763;
        if (v12764) {
            const v12765 = 'Invalid XML: ' + data;
            const v12766 = jQuery.error(v12765);
            v12766;
        }
        return xml;
    };
    jQuery.parseXML = v12767;
    var ajaxLocParts;
    var ajaxLocation;
    var rhash = /#.*$/;
    var rts = /([?&])_=[^&]*/;
    var rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg;
    var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/;
    var rnoContent = /^(?:GET|HEAD)$/;
    var rprotocol = /^\/\//;
    var rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/;
    var prefilters = {};
    var transports = {};
    var allTypes = '*/'.concat('*');
    try {
        ajaxLocation = location.href;
    } catch (e) {
        ajaxLocation = document.createElement('a');
        ajaxLocation.href = '';
        ajaxLocation = ajaxLocation.href;
    }
    const v12768 = ajaxLocation.toLowerCase();
    const v12769 = rurl.exec(v12768);
    const v12770 = [];
    ajaxLocParts = v12769 || v12770;
    const addToPrefiltersOrTransports = function (structure) {
        const v12787 = function (dataTypeExpression, func) {
            const v12771 = typeof dataTypeExpression;
            const v12772 = v12771 !== 'string';
            if (v12772) {
                func = dataTypeExpression;
                dataTypeExpression = '*';
            }
            var dataType;
            var i = 0;
            const v12773 = dataTypeExpression.toLowerCase();
            const v12774 = v12773.match(rnotwhite);
            const v12775 = [];
            var dataTypes = v12774 || v12775;
            const v12776 = jQuery.isFunction(func);
            if (v12776) {
                const v12777 = i++;
                while (dataType = dataTypes[v12777]) {
                    const v12778 = dataType.charAt(0);
                    const v12779 = v12778 === '+';
                    if (v12779) {
                        const v12780 = dataType.slice(1);
                        dataType = v12780 || '*';
                        const v12781 = structure[dataType];
                        const v12782 = [];
                        const v12783 = (structure[dataType] = v12781 || v12782).unshift(func);
                        v12783;
                    } else {
                        const v12784 = structure[dataType];
                        const v12785 = [];
                        const v12786 = (structure[dataType] = v12784 || v12785).push(func);
                        v12786;
                    }
                }
            }
        };
        return v12787;
    };
    const inspectPrefiltersOrTransports = function (structure, options, originalOptions, jqXHR) {
        var inspected = {};
        var seekingTransport = structure === transports;
        const inspect = function (dataType) {
            var selected;
            inspected[dataType] = true;
            const v12788 = structure[dataType];
            const v12789 = [];
            const v12790 = v12788 || v12789;
            const v12802 = function (_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                const v12791 = typeof dataTypeOrTransport;
                const v12792 = v12791 === 'string';
                const v12793 = !seekingTransport;
                const v12794 = v12792 && v12793;
                const v12795 = inspected[dataTypeOrTransport];
                const v12796 = !v12795;
                const v12797 = v12794 && v12796;
                if (v12797) {
                    const v12798 = options.dataTypes;
                    const v12799 = v12798.unshift(dataTypeOrTransport);
                    v12799;
                    const v12800 = inspect(dataTypeOrTransport);
                    v12800;
                    return false;
                } else {
                    if (seekingTransport) {
                        const v12801 = !(selected = dataTypeOrTransport);
                        return v12801;
                    }
                }
            };
            const v12803 = jQuery.each(v12790, v12802);
            v12803;
            return selected;
        };
        const v12804 = options.dataTypes;
        const v12805 = v12804[0];
        const v12806 = inspect(v12805);
        const v12807 = inspected['*'];
        const v12808 = !v12807;
        const v12809 = inspect('*');
        const v12810 = v12808 && v12809;
        const v12811 = v12806 || v12810;
        return v12811;
    };
    const ajaxExtend = function (target, src) {
        var deep;
        var key;
        const v12812 = jQuery.ajaxSettings;
        const v12813 = v12812.flatOptions;
        const v12814 = {};
        var flatOptions = v12813 || v12814;
        for (key in src) {
            const v12815 = src[key];
            const v12816 = v12815 !== undefined;
            if (v12816) {
                const v12817 = flatOptions[key];
                const v12818 = deep || (deep = {});
                let v12819;
                if (v12817) {
                    v12819 = target;
                } else {
                    v12819 = v12818;
                }
                const v12820 = src[key];
                v12819[key] = v12820;
            }
        }
        if (deep) {
            const v12821 = jQuery.extend(true, target, deep);
            v12821;
        }
        return target;
    };
    const ajaxHandleResponses = function (s, jqXHR, responses) {
        var firstDataType;
        var ct;
        var finalDataType;
        var type;
        var contents = s.contents;
        var dataTypes = s.dataTypes;
        const v12822 = dataTypes[0];
        let v12823 = v12822 === '*';
        while (v12823) {
            const v12824 = dataTypes.shift();
            v12824;
            const v12825 = ct === undefined;
            if (v12825) {
                const v12826 = s.mimeType;
                const v12827 = jqXHR.getResponseHeader('Content-Type');
                ct = v12826 || v12827;
            }
            v12823 = v12822 === '*';
        }
        if (ct) {
            for (type in contents) {
                const v12828 = contents[type];
                const v12829 = contents[type];
                const v12830 = v12829.test(ct);
                const v12831 = v12828 && v12830;
                if (v12831) {
                    const v12832 = dataTypes.unshift(type);
                    v12832;
                    break;
                }
            }
        }
        const v12833 = dataTypes[0];
        const v12834 = v12833 in responses;
        if (v12834) {
            finalDataType = dataTypes[0];
        } else {
            for (type in responses) {
                const v12835 = dataTypes[0];
                const v12836 = !v12835;
                const v12837 = s.converters;
                const v12838 = type + ' ';
                const v12839 = dataTypes[0];
                const v12840 = v12838 + v12839;
                const v12841 = v12837[v12840];
                const v12842 = v12836 || v12841;
                if (v12842) {
                    finalDataType = type;
                    break;
                }
                const v12843 = !firstDataType;
                if (v12843) {
                    firstDataType = type;
                }
            }
            finalDataType = finalDataType || firstDataType;
        }
        if (finalDataType) {
            const v12844 = dataTypes[0];
            const v12845 = finalDataType !== v12844;
            if (v12845) {
                const v12846 = dataTypes.unshift(finalDataType);
                v12846;
            }
            const v12847 = responses[finalDataType];
            return v12847;
        }
    };
    const ajaxConvert = function (s, response, jqXHR, isSuccess) {
        var conv2;
        var current;
        var conv;
        var tmp;
        var prev;
        var converters = {};
        const v12848 = s.dataTypes;
        var dataTypes = v12848.slice();
        const v12849 = dataTypes[1];
        if (v12849) {
            const v12850 = s.converters;
            for (conv in v12850) {
                const v12851 = conv.toLowerCase();
                const v12852 = s.converters;
                const v12853 = v12852[conv];
                converters[v12851] = v12853;
            }
        }
        current = dataTypes.shift();
        while (current) {
            const v12854 = s.responseFields;
            const v12855 = v12854[current];
            if (v12855) {
                const v12856 = s.responseFields;
                const v12857 = v12856[current];
                jqXHR[v12857] = response;
            }
            const v12858 = !prev;
            const v12859 = v12858 && isSuccess;
            const v12860 = s.dataFilter;
            const v12861 = v12859 && v12860;
            if (v12861) {
                const v12862 = s.dataType;
                response = s.dataFilter(response, v12862);
            }
            prev = current;
            current = dataTypes.shift();
            if (current) {
                const v12863 = current === '*';
                if (v12863) {
                    current = prev;
                } else {
                    const v12864 = prev !== '*';
                    const v12865 = prev !== current;
                    const v12866 = v12864 && v12865;
                    if (v12866) {
                        const v12867 = prev + ' ';
                        const v12868 = v12867 + current;
                        const v12869 = converters[v12868];
                        const v12870 = '* ' + current;
                        const v12871 = converters[v12870];
                        conv = v12869 || v12871;
                        const v12872 = !conv;
                        if (v12872) {
                            for (conv2 in converters) {
                                tmp = conv2.split(' ');
                                const v12873 = tmp[1];
                                const v12874 = v12873 === current;
                                if (v12874) {
                                    const v12875 = prev + ' ';
                                    const v12876 = tmp[0];
                                    const v12877 = v12875 + v12876;
                                    const v12878 = converters[v12877];
                                    const v12879 = tmp[0];
                                    const v12880 = '* ' + v12879;
                                    const v12881 = converters[v12880];
                                    conv = v12878 || v12881;
                                    if (conv) {
                                        const v12882 = conv === true;
                                        if (v12882) {
                                            conv = converters[conv2];
                                        } else {
                                            const v12883 = converters[conv2];
                                            const v12884 = v12883 !== true;
                                            if (v12884) {
                                                current = tmp[0];
                                                const v12885 = tmp[1];
                                                const v12886 = dataTypes.unshift(v12885);
                                                v12886;
                                            }
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        const v12887 = conv !== true;
                        if (v12887) {
                            const v12888 = s['throws'];
                            const v12889 = conv && v12888;
                            if (v12889) {
                                response = conv(response);
                            } else {
                                try {
                                    response = conv(response);
                                } catch (e) {
                                    const v12890 = 'No conversion from ' + prev;
                                    const v12891 = v12890 + ' to ';
                                    const v12892 = v12891 + current;
                                    let v12893;
                                    if (conv) {
                                        v12893 = e;
                                    } else {
                                        v12893 = v12892;
                                    }
                                    const v12894 = {};
                                    v12894.state = 'parsererror';
                                    v12894.error = v12893;
                                    return v12894;
                                }
                            }
                        }
                    }
                }
            }
        }
        const v12895 = {};
        v12895.state = 'success';
        v12895.data = response;
        return v12895;
    };
    const v12896 = {};
    const v12897 = {};
    const v12898 = ajaxLocParts[1];
    const v12899 = rlocalProtocol.test(v12898);
    const v12900 = {};
    v12900['*'] = allTypes;
    v12900.text = 'text/plain';
    v12900.html = 'text/html';
    v12900.xml = 'application/xml, text/xml';
    v12900.json = 'application/json, text/javascript';
    const v12901 = {};
    v12901.xml = /xml/;
    v12901.html = /html/;
    v12901.json = /json/;
    const v12902 = {};
    v12902.xml = 'responseXML';
    v12902.text = 'responseText';
    v12902.json = 'responseJSON';
    const v12903 = jQuery.parseJSON;
    const v12904 = jQuery.parseXML;
    const v12905 = {};
    v12905['* text'] = String;
    v12905['text html'] = true;
    v12905['text json'] = v12903;
    v12905['text xml'] = v12904;
    const v12906 = {};
    v12906.url = true;
    v12906.context = true;
    const v12907 = {};
    v12907.url = ajaxLocation;
    v12907.type = 'GET';
    v12907.isLocal = v12899;
    v12907.global = true;
    v12907.processData = true;
    v12907.async = true;
    v12907.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
    v12907.accepts = v12900;
    v12907.contents = v12901;
    v12907.responseFields = v12902;
    v12907.converters = v12905;
    v12907.flatOptions = v12906;
    const v12914 = function (target, settings) {
        const v12908 = jQuery.ajaxSettings;
        const v12909 = ajaxExtend(target, v12908);
        const v12910 = ajaxExtend(v12909, settings);
        const v12911 = jQuery.ajaxSettings;
        const v12912 = ajaxExtend(v12911, target);
        let v12913;
        if (settings) {
            v12913 = v12910;
        } else {
            v12913 = v12912;
        }
        return v12913;
    };
    const v12915 = addToPrefiltersOrTransports(prefilters);
    const v12916 = addToPrefiltersOrTransports(transports);
    const v13165 = function (url, options) {
        const v12917 = typeof url;
        const v12918 = v12917 === 'object';
        if (v12918) {
            options = url;
            url = undefined;
        }
        const v12919 = {};
        options = options || v12919;
        var parts;
        var i;
        var cacheURL;
        var responseHeadersString;
        var timeoutTimer;
        var fireGlobals;
        var transport;
        var responseHeaders;
        const v12920 = {};
        var s = jQuery.ajaxSetup(v12920, options);
        const v12921 = s.context;
        var callbackContext = v12921 || s;
        let globalEventContext;
        const v12922 = s.context;
        const v12923 = callbackContext.nodeType;
        const v12924 = callbackContext.jquery;
        const v12925 = v12923 || v12924;
        const v12926 = v12922 && v12925;
        const v12927 = jQuery(callbackContext);
        const v12928 = jQuery.event;
        if (v12926) {
            globalEventContext = v12927;
        } else {
            globalEventContext = v12928;
        }
        var deferred = jQuery.Deferred();
        var completeDeferred = jQuery.Callbacks('once memory');
        const v12929 = s.statusCode;
        const v12930 = {};
        var statusCode = v12929 || v12930;
        var requestHeaders = {};
        var requestHeadersNames = {};
        var state = 0;
        var strAbort = 'canceled';
        const v12939 = function (key) {
            var match;
            const v12931 = state === 2;
            if (v12931) {
                const v12932 = !responseHeaders;
                if (v12932) {
                    responseHeaders = {};
                    while (match = rheaders.exec(responseHeadersString)) {
                        const v12933 = match[1];
                        const v12934 = v12933.toLowerCase();
                        const v12935 = match[2];
                        responseHeaders[v12934] = v12935;
                    }
                }
                const v12936 = key.toLowerCase();
                match = responseHeaders[v12936];
            }
            const v12937 = match == null;
            let v12938;
            if (v12937) {
                v12938 = null;
            } else {
                v12938 = match;
            }
            return v12938;
        };
        const v12942 = function () {
            const v12940 = state === 2;
            let v12941;
            if (v12940) {
                v12941 = responseHeadersString;
            } else {
                v12941 = null;
            }
            return v12941;
        };
        const v12945 = function (name, value) {
            var lname = name.toLowerCase();
            const v12943 = !state;
            if (v12943) {
                const v12944 = requestHeadersNames[lname];
                requestHeadersNames.lname = v12944 || name;
                name = requestHeadersNames[lname];
                requestHeaders[name] = value;
            }
            return this;
        };
        const v12947 = function (type) {
            const v12946 = !state;
            if (v12946) {
                s.mimeType = type;
            }
            return this;
        };
        const v12954 = function (map) {
            var code;
            if (map) {
                const v12948 = state < 2;
                if (v12948) {
                    for (code in map) {
                        const v12949 = statusCode[code];
                        const v12950 = map[code];
                        statusCode[code] = [
                            v12949,
                            v12950
                        ];
                    }
                } else {
                    const v12951 = jqXHR.status;
                    const v12952 = map[v12951];
                    const v12953 = jqXHR.always(v12952);
                    v12953;
                }
            }
            return this;
        };
        const v12957 = function (statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
                const v12955 = transport.abort(finalText);
                v12955;
            }
            const v12956 = done(0, finalText);
            v12956;
            return this;
        };
        var jqXHR = {};
        jqXHR.readyState = 0;
        jqXHR.getResponseHeader = v12939;
        jqXHR.getAllResponseHeaders = v12942;
        jqXHR.setRequestHeader = v12945;
        jqXHR.overrideMimeType = v12947;
        jqXHR.statusCode = v12954;
        jqXHR.abort = v12957;
        const v12958 = deferred.promise(jqXHR);
        const v12959 = completeDeferred.add;
        v12958.complete = v12959;
        const v12960 = jqXHR.done;
        jqXHR.success = v12960;
        const v12961 = jqXHR.fail;
        jqXHR.error = v12961;
        const v12962 = s.url;
        const v12963 = url || v12962;
        const v12964 = v12963 || ajaxLocation;
        const v12965 = v12964 + '';
        const v12966 = v12965.replace(rhash, '');
        const v12967 = ajaxLocParts[1];
        const v12968 = v12967 + '//';
        const v12969 = v12966.replace(rprotocol, v12968);
        s.url = v12969;
        const v12970 = options.method;
        const v12971 = options.type;
        const v12972 = v12970 || v12971;
        const v12973 = s.method;
        const v12974 = v12972 || v12973;
        const v12975 = s.type;
        s.type = v12974 || v12975;
        const v12976 = s.dataType;
        const v12977 = v12976 || '*';
        const v12978 = jQuery.trim(v12977);
        const v12979 = v12978.toLowerCase();
        const v12980 = v12979.match(rnotwhite);
        const v12981 = [''];
        s.dataTypes = v12980 || v12981;
        const v12982 = s.crossDomain;
        const v12983 = v12982 == null;
        if (v12983) {
            const v12984 = s.url;
            const v12985 = v12984.toLowerCase();
            parts = rurl.exec(v12985);
            const v12986 = parts[1];
            const v12987 = ajaxLocParts[1];
            const v12988 = v12986 !== v12987;
            const v12989 = parts[2];
            const v12990 = ajaxLocParts[2];
            const v12991 = v12989 !== v12990;
            const v12992 = v12988 || v12991;
            const v12993 = parts[3];
            const v12994 = parts[1];
            const v12995 = v12994 === 'http:';
            let v12996;
            if (v12995) {
                v12996 = '80';
            } else {
                v12996 = '443';
            }
            const v12997 = v12993 || v12996;
            const v12998 = ajaxLocParts[3];
            const v12999 = ajaxLocParts[1];
            const v13000 = v12999 === 'http:';
            let v13001;
            if (v13000) {
                v13001 = '80';
            } else {
                v13001 = '443';
            }
            const v13002 = v12998 || v13001;
            const v13003 = v12997 !== v13002;
            const v13004 = v12992 || v13003;
            const v13005 = parts && v13004;
            const v13006 = !v13005;
            const v13007 = !v13006;
            s.crossDomain = v13007;
        }
        const v13008 = s.data;
        const v13009 = s.processData;
        const v13010 = v13008 && v13009;
        const v13011 = s.data;
        const v13012 = typeof v13011;
        const v13013 = v13012 !== 'string';
        const v13014 = v13010 && v13013;
        if (v13014) {
            const v13015 = s.data;
            const v13016 = s.traditional;
            const v13017 = jQuery.param(v13015, v13016);
            s.data = v13017;
        }
        const v13018 = inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
        v13018;
        const v13019 = state === 2;
        if (v13019) {
            return jqXHR;
        }
        fireGlobals = s.global;
        const v13020 = jQuery.active;
        const v13021 = v13020++;
        const v13022 = v13021 === 0;
        const v13023 = fireGlobals && v13022;
        if (v13023) {
            const v13024 = jQuery.event;
            const v13025 = v13024.trigger('ajaxStart');
            v13025;
        }
        const v13026 = s.type;
        const v13027 = v13026.toUpperCase();
        s.type = v13027;
        const v13028 = s.type;
        const v13029 = rnoContent.test(v13028);
        const v13030 = !v13029;
        s.hasContent = v13030;
        cacheURL = s.url;
        const v13031 = s.hasContent;
        const v13032 = !v13031;
        if (v13032) {
            const v13033 = s.data;
            if (v13033) {
                const v13034 = rquery.test(cacheURL);
                let v13035;
                if (v13034) {
                    v13035 = '&';
                } else {
                    v13035 = '?';
                }
                const v13036 = s.data;
                s.url = v13035 + v13036;
                cacheURL = s.url;
                const v13037 = s.data;
                const v13038 = delete v13037;
                v13038;
            }
            const v13039 = s.cache;
            const v13040 = v13039 === false;
            if (v13040) {
                const v13041 = rts.test(cacheURL);
                const v13042 = nonce++;
                const v13043 = '$1_=' + v13042;
                const v13044 = cacheURL.replace(rts, v13043);
                const v13045 = rquery.test(cacheURL);
                let v13046;
                if (v13045) {
                    v13046 = '&';
                } else {
                    v13046 = '?';
                }
                const v13047 = cacheURL + v13046;
                const v13048 = v13047 + '_=';
                const v13049 = nonce++;
                const v13050 = v13048 + v13049;
                let v13051;
                if (v13041) {
                    v13051 = v13044;
                } else {
                    v13051 = v13050;
                }
                s.url = v13051;
            }
        }
        const v13052 = s.ifModified;
        if (v13052) {
            const v13053 = jQuery.lastModified;
            const v13054 = v13053[cacheURL];
            if (v13054) {
                const v13055 = jQuery.lastModified;
                const v13056 = v13055[cacheURL];
                const v13057 = jqXHR.setRequestHeader('If-Modified-Since', v13056);
                v13057;
            }
            const v13058 = jQuery.etag;
            const v13059 = v13058[cacheURL];
            if (v13059) {
                const v13060 = jQuery.etag;
                const v13061 = v13060[cacheURL];
                const v13062 = jqXHR.setRequestHeader('If-None-Match', v13061);
                v13062;
            }
        }
        const v13063 = s.data;
        const v13064 = s.hasContent;
        const v13065 = v13063 && v13064;
        const v13066 = s.contentType;
        const v13067 = v13066 !== false;
        const v13068 = v13065 && v13067;
        const v13069 = options.contentType;
        const v13070 = v13068 || v13069;
        if (v13070) {
            const v13071 = s.contentType;
            const v13072 = jqXHR.setRequestHeader('Content-Type', v13071);
            v13072;
        }
        const v13073 = s.dataTypes;
        const v13074 = v13073[0];
        const v13075 = s.accepts;
        const v13076 = s.dataTypes;
        const v13077 = v13076[0];
        const v13078 = v13075[v13077];
        const v13079 = v13074 && v13078;
        const v13080 = s.accepts;
        const v13081 = s.dataTypes;
        const v13082 = v13081[0];
        const v13083 = v13080[v13082];
        const v13084 = s.dataTypes;
        const v13085 = v13084[0];
        const v13086 = v13085 !== '*';
        const v13087 = ', ' + allTypes;
        const v13088 = v13087 + '; q=0.01';
        let v13089;
        if (v13086) {
            v13089 = v13088;
        } else {
            v13089 = '';
        }
        const v13090 = v13083 + v13089;
        const v13091 = s.accepts;
        const v13092 = v13091['*'];
        let v13093;
        if (v13079) {
            v13093 = v13090;
        } else {
            v13093 = v13092;
        }
        const v13094 = jqXHR.setRequestHeader('Accept', v13093);
        v13094;
        const v13095 = s.headers;
        for (i in v13095) {
            const v13096 = s.headers;
            const v13097 = v13096[i];
            const v13098 = jqXHR.setRequestHeader(i, v13097);
            v13098;
        }
        const v13099 = s.beforeSend;
        const v13100 = s.beforeSend;
        const v13101 = v13100.call(callbackContext, jqXHR, s);
        const v13102 = v13101 === false;
        const v13103 = state === 2;
        const v13104 = v13102 || v13103;
        const v13105 = v13099 && v13104;
        if (v13105) {
            const v13106 = jqXHR.abort();
            return v13106;
        }
        strAbort = 'abort';
        const v13107 = {
            success: 1,
            error: 1,
            complete: 1
        };
        for (i in v13107) {
            const v13108 = s[i];
            const v13109 = jqXHR[i](v13108);
            v13109;
        }
        transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
        const v13110 = !transport;
        if (v13110) {
            const v13111 = -1;
            const v13112 = done(v13111, 'No Transport');
            v13112;
        } else {
            jqXHR.readyState = 1;
            if (fireGlobals) {
                const v13113 = [
                    jqXHR,
                    s
                ];
                const v13114 = globalEventContext.trigger('ajaxSend', v13113);
                v13114;
            }
            const v13115 = s.async;
            const v13116 = s.timeout;
            const v13117 = v13116 > 0;
            const v13118 = v13115 && v13117;
            if (v13118) {
                const v13120 = function () {
                    const v13119 = jqXHR.abort('timeout');
                    v13119;
                };
                const v13121 = s.timeout;
                timeoutTimer = setTimeout(v13120, v13121);
            }
            try {
                state = 1;
                const v13122 = transport.send(requestHeaders, done);
                v13122;
            } catch (e) {
                const v13123 = state < 2;
                if (v13123) {
                    const v13124 = -1;
                    const v13125 = done(v13124, e);
                    v13125;
                } else {
                    throw e;
                }
            }
        }
        const done = function (status, nativeStatusText, responses, headers) {
            var isSuccess;
            var success;
            var error;
            var response;
            var modified;
            var statusText = nativeStatusText;
            const v13126 = state === 2;
            if (v13126) {
                return;
            }
            state = 2;
            if (timeoutTimer) {
                const v13127 = clearTimeout(timeoutTimer);
                v13127;
            }
            transport = undefined;
            responseHeadersString = headers || '';
            const v13128 = status > 0;
            let v13129;
            if (v13128) {
                v13129 = 4;
            } else {
                v13129 = 0;
            }
            jqXHR.readyState = v13129;
            const v13130 = status >= 200;
            const v13131 = status < 300;
            const v13132 = v13130 && v13131;
            const v13133 = status === 304;
            isSuccess = v13132 || v13133;
            if (responses) {
                response = ajaxHandleResponses(s, jqXHR, responses);
            }
            response = ajaxConvert(s, response, jqXHR, isSuccess);
            if (isSuccess) {
                const v13134 = s.ifModified;
                if (v13134) {
                    modified = jqXHR.getResponseHeader('Last-Modified');
                    if (modified) {
                        const v13135 = jQuery.lastModified;
                        v13135[cacheURL] = modified;
                    }
                    modified = jqXHR.getResponseHeader('etag');
                    if (modified) {
                        const v13136 = jQuery.etag;
                        v13136[cacheURL] = modified;
                    }
                }
                const v13137 = status === 204;
                const v13138 = s.type;
                const v13139 = v13138 === 'HEAD';
                const v13140 = v13137 || v13139;
                if (v13140) {
                    statusText = 'nocontent';
                } else {
                    const v13141 = status === 304;
                    if (v13141) {
                        statusText = 'notmodified';
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        const v13142 = !error;
                        isSuccess = v13142;
                    }
                }
            } else {
                error = statusText;
                const v13143 = !statusText;
                const v13144 = status || v13143;
                if (v13144) {
                    statusText = 'error';
                    const v13145 = status < 0;
                    if (v13145) {
                        status = 0;
                    }
                }
            }
            jqXHR.status = status;
            const v13146 = nativeStatusText || statusText;
            jqXHR.statusText = v13146 + '';
            if (isSuccess) {
                const v13147 = [
                    success,
                    statusText,
                    jqXHR
                ];
                const v13148 = deferred.resolveWith(callbackContext, v13147);
                v13148;
            } else {
                const v13149 = [
                    jqXHR,
                    statusText,
                    error
                ];
                const v13150 = deferred.rejectWith(callbackContext, v13149);
                v13150;
            }
            const v13151 = jqXHR.statusCode(statusCode);
            v13151;
            statusCode = undefined;
            if (fireGlobals) {
                let v13152;
                if (isSuccess) {
                    v13152 = 'ajaxSuccess';
                } else {
                    v13152 = 'ajaxError';
                }
                let v13153;
                if (isSuccess) {
                    v13153 = success;
                } else {
                    v13153 = error;
                }
                const v13154 = [
                    jqXHR,
                    s,
                    v13153
                ];
                const v13155 = globalEventContext.trigger(v13152, v13154);
                v13155;
            }
            const v13156 = [
                jqXHR,
                statusText
            ];
            const v13157 = completeDeferred.fireWith(callbackContext, v13156);
            v13157;
            if (fireGlobals) {
                const v13158 = [
                    jqXHR,
                    s
                ];
                const v13159 = globalEventContext.trigger('ajaxComplete', v13158);
                v13159;
                const v13160 = jQuery.active;
                const v13161 = --v13160;
                const v13162 = !v13161;
                if (v13162) {
                    const v13163 = jQuery.event;
                    const v13164 = v13163.trigger('ajaxStop');
                    v13164;
                }
            }
        };
        return jqXHR;
    };
    const v13167 = function (url, data, callback) {
        const v13166 = jQuery.get(url, data, callback, 'json');
        return v13166;
    };
    const v13169 = function (url, callback) {
        const v13168 = jQuery.get(url, undefined, callback, 'script');
        return v13168;
    };
    const v13170 = {
        active: 0,
        lastModified: v12896,
        etag: v12897,
        ajaxSettings: v12907,
        ajaxSetup: v12914,
        ajaxPrefilter: v12915,
        ajaxTransport: v12916,
        ajax: v13165,
        getJSON: v13167,
        getScript: v13169
    };
    const v13171 = jQuery.extend(v13170);
    v13171;
    const v13172 = [
        'get',
        'post'
    ];
    const v13177 = function (i, method) {
        const v13176 = function (url, data, callback, type) {
            const v13173 = jQuery.isFunction(data);
            if (v13173) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            const v13174 = {
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            };
            const v13175 = jQuery.ajax(v13174);
            return v13175;
        };
        jQuery[method] = v13176;
    };
    const v13178 = jQuery.each(v13172, v13177);
    v13178;
    const v13179 = [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
    ];
    const v13183 = function (i, type) {
        const v13180 = jQuery.fn;
        const v13182 = function (fn) {
            const v13181 = this.on(type, fn);
            return v13181;
        };
        v13180[type] = v13182;
    };
    const v13184 = jQuery.each(v13179, v13183);
    v13184;
    const v13187 = function (url) {
        const v13185 = {
            url: url,
            type: 'GET',
            dataType: 'script',
            async: false,
            global: false,
            'throws': true
        };
        const v13186 = jQuery.ajax(v13185);
        return v13186;
    };
    jQuery._evalUrl = v13187;
    const v13188 = jQuery.fn;
    const v13212 = function (html) {
        const v13189 = jQuery.isFunction(html);
        if (v13189) {
            const v13193 = function (i) {
                const v13190 = jQuery(this);
                const v13191 = html.call(this, i);
                const v13192 = v13190.wrapAll(v13191);
                v13192;
            };
            const v13194 = this.each(v13193);
            return v13194;
        }
        const v13195 = this[0];
        if (v13195) {
            const v13196 = this[0];
            const v13197 = v13196.ownerDocument;
            const v13198 = jQuery(html, v13197);
            const v13199 = v13198.eq(0);
            var wrap = v13199.clone(true);
            const v13200 = this[0];
            const v13201 = v13200.parentNode;
            if (v13201) {
                const v13202 = this[0];
                const v13203 = wrap.insertBefore(v13202);
                v13203;
            }
            const v13209 = function () {
                var elem = this;
                const v13204 = elem.firstChild;
                const v13205 = elem.firstChild;
                const v13206 = v13205.nodeType;
                const v13207 = v13206 === 1;
                let v13208 = v13204 && v13207;
                while (v13208) {
                    elem = elem.firstChild;
                    v13208 = v13204 && v13207;
                }
                return elem;
            };
            const v13210 = wrap.map(v13209);
            const v13211 = v13210.append(this);
            v13211;
        }
        return this;
    };
    const v13224 = function (html) {
        const v13213 = jQuery.isFunction(html);
        if (v13213) {
            const v13217 = function (i) {
                const v13214 = jQuery(this);
                const v13215 = html.call(this, i);
                const v13216 = v13214.wrapInner(v13215);
                v13216;
            };
            const v13218 = this.each(v13217);
            return v13218;
        }
        const v13222 = function () {
            var self = jQuery(this);
            var contents = self.contents();
            const v13219 = contents.length;
            if (v13219) {
                const v13220 = contents.wrapAll(html);
                v13220;
            } else {
                const v13221 = self.append(html);
                v13221;
            }
        };
        const v13223 = this.each(v13222);
        return v13223;
    };
    const v13231 = function (html) {
        var isFunction = jQuery.isFunction(html);
        const v13229 = function (i) {
            const v13225 = jQuery(this);
            const v13226 = html.call(this, i);
            let v13227;
            if (isFunction) {
                v13227 = v13226;
            } else {
                v13227 = html;
            }
            const v13228 = v13225.wrapAll(v13227);
            v13228;
        };
        const v13230 = this.each(v13229);
        return v13230;
    };
    const v13241 = function () {
        const v13232 = this.parent();
        const v13238 = function () {
            const v13233 = jQuery.nodeName(this, 'body');
            const v13234 = !v13233;
            if (v13234) {
                const v13235 = jQuery(this);
                const v13236 = this.childNodes;
                const v13237 = v13235.replaceWith(v13236);
                v13237;
            }
        };
        const v13239 = v13232.each(v13238);
        const v13240 = v13239.end();
        return v13240;
    };
    const v13242 = {
        wrapAll: v13212,
        wrapInner: v13224,
        wrap: v13231,
        unwrap: v13241
    };
    const v13243 = v13188.extend(v13242);
    v13243;
    const v13244 = jQuery.expr;
    const v13245 = v13244.filters;
    const v13262 = function (elem) {
        const v13246 = elem.offsetWidth;
        const v13247 = v13246 <= 0;
        const v13248 = elem.offsetHeight;
        const v13249 = v13248 <= 0;
        const v13250 = v13247 && v13249;
        const v13251 = support.reliableHiddenOffsets();
        const v13252 = !v13251;
        const v13253 = elem.style;
        const v13254 = elem.style;
        const v13255 = v13254.display;
        const v13256 = v13253 && v13255;
        const v13257 = jQuery.css(elem, 'display');
        const v13258 = v13256 || v13257;
        const v13259 = v13258 === 'none';
        const v13260 = v13252 && v13259;
        const v13261 = v13250 || v13260;
        return v13261;
    };
    v13245.hidden = v13262;
    const v13263 = jQuery.expr;
    const v13264 = v13263.filters;
    const v13269 = function (elem) {
        const v13265 = jQuery.expr;
        const v13266 = v13265.filters;
        const v13267 = v13266.hidden(elem);
        const v13268 = !v13267;
        return v13268;
    };
    v13264.visible = v13269;
    var r20 = /%20/g;
    var rbracket = /\[\]$/;
    var rCRLF = /\r?\n/g;
    var rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i;
    var rsubmittable = /^(?:input|select|textarea|keygen)/i;
    const buildParams = function (prefix, obj, traditional, add) {
        var name;
        const v13270 = jQuery.isArray(obj);
        if (v13270) {
            const v13281 = function (i, v) {
                const v13271 = rbracket.test(prefix);
                const v13272 = traditional || v13271;
                if (v13272) {
                    const v13273 = add(prefix, v);
                    v13273;
                } else {
                    const v13274 = prefix + '[';
                    const v13275 = typeof v;
                    const v13276 = v13275 === 'object';
                    let v13277;
                    if (v13276) {
                        v13277 = i;
                    } else {
                        v13277 = '';
                    }
                    const v13278 = v13274 + v13277;
                    const v13279 = v13278 + ']';
                    const v13280 = buildParams(v13279, v, traditional, add);
                    v13280;
                }
            };
            const v13282 = jQuery.each(obj, v13281);
            v13282;
        } else {
            const v13283 = !traditional;
            const v13284 = jQuery.type(obj);
            const v13285 = v13284 === 'object';
            const v13286 = v13283 && v13285;
            if (v13286) {
                for (name in obj) {
                    const v13287 = prefix + '[';
                    const v13288 = v13287 + name;
                    const v13289 = v13288 + ']';
                    const v13290 = obj[name];
                    const v13291 = buildParams(v13289, v13290, traditional, add);
                    v13291;
                }
            } else {
                const v13292 = add(prefix, obj);
                v13292;
            }
        }
    };
    const v13320 = function (a, traditional) {
        var prefix;
        var s = [];
        var add = function (key, value) {
            const v13293 = jQuery.isFunction(value);
            const v13294 = value();
            const v13295 = value == null;
            let v13296;
            if (v13295) {
                v13296 = '';
            } else {
                v13296 = value;
            }
            if (v13293) {
                value = v13294;
            } else {
                value = v13296;
            }
            const v13297 = s.length;
            const v13298 = encodeURIComponent(key);
            const v13299 = v13298 + '=';
            const v13300 = encodeURIComponent(value);
            s[v13297] = v13299 + v13300;
        };
        const v13301 = traditional === undefined;
        if (v13301) {
            const v13302 = jQuery.ajaxSettings;
            const v13303 = jQuery.ajaxSettings;
            const v13304 = v13303.traditional;
            traditional = v13302 && v13304;
        }
        const v13305 = jQuery.isArray(a);
        const v13306 = a.jquery;
        const v13307 = jQuery.isPlainObject(a);
        const v13308 = !v13307;
        const v13309 = v13306 && v13308;
        const v13310 = v13305 || v13309;
        if (v13310) {
            const v13314 = function () {
                const v13311 = this.name;
                const v13312 = this.value;
                const v13313 = add(v13311, v13312);
                v13313;
            };
            const v13315 = jQuery.each(a, v13314);
            v13315;
        } else {
            for (prefix in a) {
                const v13316 = a[prefix];
                const v13317 = buildParams(prefix, v13316, traditional, add);
                v13317;
            }
        }
        const v13318 = s.join('&');
        const v13319 = v13318.replace(r20, '+');
        return v13319;
    };
    jQuery.param = v13320;
    const v13321 = jQuery.fn;
    const v13324 = function () {
        const v13322 = this.serializeArray();
        const v13323 = jQuery.param(v13322);
        return v13323;
    };
    const v13363 = function () {
        const v13327 = function () {
            var elements = jQuery.prop(this, 'elements');
            const v13325 = jQuery.makeArray(elements);
            let v13326;
            if (elements) {
                v13326 = v13325;
            } else {
                v13326 = this;
            }
            return v13326;
        };
        const v13328 = this.map(v13327);
        const v13345 = function () {
            var type = this.type;
            const v13329 = this.name;
            const v13330 = jQuery(this);
            const v13331 = v13330.is(':disabled');
            const v13332 = !v13331;
            const v13333 = v13329 && v13332;
            const v13334 = this.nodeName;
            const v13335 = rsubmittable.test(v13334);
            const v13336 = v13333 && v13335;
            const v13337 = rsubmitterTypes.test(type);
            const v13338 = !v13337;
            const v13339 = v13336 && v13338;
            const v13340 = this.checked;
            const v13341 = rcheckableType.test(type);
            const v13342 = !v13341;
            const v13343 = v13340 || v13342;
            const v13344 = v13339 && v13343;
            return v13344;
        };
        const v13346 = v13328.filter(v13345);
        const v13360 = function (i, elem) {
            const v13347 = jQuery(this);
            var val = v13347.val();
            const v13348 = val == null;
            const v13349 = jQuery.isArray(val);
            const v13353 = function (val) {
                const v13350 = elem.name;
                const v13351 = val.replace(rCRLF, '\r\n');
                const v13352 = {};
                v13352.name = v13350;
                v13352.value = v13351;
                return v13352;
            };
            const v13354 = jQuery.map(val, v13353);
            const v13355 = elem.name;
            const v13356 = val.replace(rCRLF, '\r\n');
            const v13357 = {
                name: v13355,
                value: v13356
            };
            let v13358;
            if (v13349) {
                v13358 = v13354;
            } else {
                v13358 = v13357;
            }
            let v13359;
            if (v13348) {
                v13359 = null;
            } else {
                v13359 = v13358;
            }
            return v13359;
        };
        const v13361 = v13346.map(v13360);
        const v13362 = v13361.get();
        return v13362;
    };
    const v13364 = {
        serialize: v13324,
        serializeArray: v13363
    };
    const v13365 = v13321.extend(v13364);
    v13365;
    const v13366 = jQuery.ajaxSettings;
    const v13367 = window.ActiveXObject;
    const v13368 = v13367 !== undefined;
    const v13378 = function () {
        const v13369 = this.isLocal;
        const v13370 = !v13369;
        const v13371 = this.type;
        const v13372 = /^(get|post|head|put|delete|options)$/i.test(v13371);
        const v13373 = v13370 && v13372;
        const v13374 = createStandardXHR();
        const v13375 = v13373 && v13374;
        const v13376 = createActiveXHR();
        const v13377 = v13375 || v13376;
        return v13377;
    };
    let v13379;
    if (v13368) {
        v13379 = v13378;
    } else {
        v13379 = createStandardXHR;
    }
    v13366.xhr = v13379;
    var xhrId = 0;
    var xhrCallbacks = {};
    const v13380 = jQuery.ajaxSettings;
    var xhrSupported = v13380.xhr();
    const v13381 = window.ActiveXObject;
    if (v13381) {
        const v13382 = jQuery(window);
        const v13384 = function () {
            let key;
            for (key in xhrCallbacks) {
                const v13383 = xhrCallbacks[key](undefined, true);
                v13383;
            }
        };
        const v13385 = v13382.on('unload', v13384);
        v13385;
    }
    const v13386 = !xhrSupported;
    const v13387 = !v13386;
    const v13388 = 'withCredentials' in xhrSupported;
    support.cors = v13387 && v13388;
    const v13389 = !xhrSupported;
    const v13390 = !v13389;
    support.ajax = v13390;
    xhrSupported = support.ajax;
    if (xhrSupported) {
        const v13461 = function (options) {
            const v13391 = options.crossDomain;
            const v13392 = !v13391;
            const v13393 = support.cors;
            const v13394 = v13392 || v13393;
            if (v13394) {
                var callback;
                const v13457 = function (headers, complete) {
                    var i;
                    var xhr = options.xhr();
                    const v13395 = ++xhrId;
                    var id = v13395;
                    const v13396 = options.type;
                    const v13397 = options.url;
                    const v13398 = options.async;
                    const v13399 = options.username;
                    const v13400 = options.password;
                    const v13401 = xhr.open(v13396, v13397, v13398, v13399, v13400);
                    v13401;
                    const v13402 = options.xhrFields;
                    if (v13402) {
                        const v13403 = options.xhrFields;
                        for (i in v13403) {
                            const v13404 = options.xhrFields;
                            const v13405 = v13404[i];
                            xhr[i] = v13405;
                        }
                    }
                    const v13406 = options.mimeType;
                    const v13407 = xhr.overrideMimeType;
                    const v13408 = v13406 && v13407;
                    if (v13408) {
                        const v13409 = options.mimeType;
                        const v13410 = xhr.overrideMimeType(v13409);
                        v13410;
                    }
                    const v13411 = options.crossDomain;
                    const v13412 = !v13411;
                    const v13413 = headers['X-Requested-With'];
                    const v13414 = !v13413;
                    const v13415 = v13412 && v13414;
                    if (v13415) {
                        headers['X-Requested-With'] = 'XMLHttpRequest';
                    }
                    for (i in headers) {
                        const v13416 = headers[i];
                        const v13417 = v13416 !== undefined;
                        if (v13417) {
                            const v13418 = headers[i];
                            const v13419 = v13418 + '';
                            const v13420 = xhr.setRequestHeader(i, v13419);
                            v13420;
                        }
                    }
                    const v13421 = options.hasContent;
                    const v13422 = options.data;
                    const v13423 = v13421 && v13422;
                    const v13424 = v13423 || null;
                    const v13425 = xhr.send(v13424);
                    v13425;
                    const v13450 = function (_, isAbort) {
                        var status;
                        var statusText;
                        var responses;
                        const v13426 = xhr.readyState;
                        const v13427 = v13426 === 4;
                        const v13428 = isAbort || v13427;
                        const v13429 = callback && v13428;
                        if (v13429) {
                            const v13430 = xhrCallbacks[id];
                            const v13431 = delete v13430;
                            v13431;
                            callback = undefined;
                            const v13432 = jQuery.noop;
                            xhr.onreadystatechange = v13432;
                            if (isAbort) {
                                const v13433 = xhr.readyState;
                                const v13434 = v13433 !== 4;
                                if (v13434) {
                                    const v13435 = xhr.abort();
                                    v13435;
                                }
                            } else {
                                responses = {};
                                status = xhr.status;
                                const v13436 = xhr.responseText;
                                const v13437 = typeof v13436;
                                const v13438 = v13437 === 'string';
                                if (v13438) {
                                    const v13439 = xhr.responseText;
                                    responses.text = v13439;
                                }
                                try {
                                    statusText = xhr.statusText;
                                } catch (e) {
                                    statusText = '';
                                }
                                const v13440 = !status;
                                const v13441 = options.isLocal;
                                const v13442 = v13440 && v13441;
                                const v13443 = options.crossDomain;
                                const v13444 = !v13443;
                                const v13445 = v13442 && v13444;
                                if (v13445) {
                                    const v13446 = responses.text;
                                    if (v13446) {
                                        status = 200;
                                    } else {
                                        status = 404;
                                    }
                                } else {
                                    const v13447 = status === 1223;
                                    if (v13447) {
                                        status = 204;
                                    }
                                }
                            }
                        }
                        if (responses) {
                            const v13448 = xhr.getAllResponseHeaders();
                            const v13449 = complete(status, statusText, responses, v13448);
                            v13449;
                        }
                    };
                    callback = v13450;
                    const v13451 = options.async;
                    const v13452 = !v13451;
                    if (v13452) {
                        const v13453 = callback();
                        v13453;
                    } else {
                        const v13454 = xhr.readyState;
                        const v13455 = v13454 === 4;
                        if (v13455) {
                            const v13456 = setTimeout(callback);
                            v13456;
                        } else {
                            xhrCallbacks.id = callback;
                            xhr.onreadystatechange = xhrCallbacks[id];
                        }
                    }
                };
                const v13459 = function () {
                    if (callback) {
                        const v13458 = callback(undefined, true);
                        v13458;
                    }
                };
                const v13460 = {};
                v13460.send = v13457;
                v13460.abort = v13459;
                return v13460;
            }
        };
        const v13462 = jQuery.ajaxTransport(v13461);
        v13462;
    }
    const createStandardXHR = function () {
        try {
            const v13463 = new window.XMLHttpRequest();
            return v13463;
        } catch (e) {
        }
    };
    const createActiveXHR = function () {
        try {
            const v13464 = new window.ActiveXObject('Microsoft.XMLHTTP');
            return v13464;
        } catch (e) {
        }
    };
    const v13465 = {};
    v13465.script = 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript';
    const v13466 = {};
    v13466.script = /(?:java|ecma)script/;
    const v13468 = function (text) {
        const v13467 = jQuery.globalEval(text);
        v13467;
        return text;
    };
    const v13469 = {};
    v13469['text script'] = v13468;
    const v13470 = {
        accepts: v13465,
        contents: v13466,
        converters: v13469
    };
    const v13471 = jQuery.ajaxSetup(v13470);
    v13471;
    const v13475 = function (s) {
        const v13472 = s.cache;
        const v13473 = v13472 === undefined;
        if (v13473) {
            s.cache = false;
        }
        const v13474 = s.crossDomain;
        if (v13474) {
            s.type = 'GET';
            s.global = false;
        }
    };
    const v13476 = jQuery.ajaxPrefilter('script', v13475);
    v13476;
    const v13504 = function (s) {
        const v13477 = s.crossDomain;
        if (v13477) {
            var script;
            const v13478 = document.head;
            const v13479 = jQuery('head');
            const v13480 = v13479[0];
            const v13481 = v13478 || v13480;
            const v13482 = document.documentElement;
            var head = v13481 || v13482;
            const v13500 = function (_, callback) {
                script = document.createElement('script');
                script.async = true;
                const v13483 = s.scriptCharset;
                if (v13483) {
                    const v13484 = s.scriptCharset;
                    script.charset = v13484;
                }
                const v13485 = s.url;
                script.src = v13485;
                const v13497 = function (_, isAbort) {
                    const v13486 = script.readyState;
                    const v13487 = !v13486;
                    const v13488 = isAbort || v13487;
                    const v13489 = script.readyState;
                    const v13490 = /loaded|complete/.test(v13489);
                    const v13491 = v13488 || v13490;
                    if (v13491) {
                        script.onreadystatechange = null;
                        script.onload = script.onreadystatechange;
                        const v13492 = script.parentNode;
                        if (v13492) {
                            const v13493 = script.parentNode;
                            const v13494 = v13493.removeChild(script);
                            v13494;
                        }
                        script = null;
                        const v13495 = !isAbort;
                        if (v13495) {
                            const v13496 = callback(200, 'success');
                            v13496;
                        }
                    }
                };
                script.onreadystatechange = v13497;
                script.onload = script.onreadystatechange;
                const v13498 = head.firstChild;
                const v13499 = head.insertBefore(script, v13498);
                v13499;
            };
            const v13502 = function () {
                if (script) {
                    const v13501 = script.onload(undefined, true);
                    v13501;
                }
            };
            const v13503 = {};
            v13503.send = v13500;
            v13503.abort = v13502;
            return v13503;
        }
    };
    const v13505 = jQuery.ajaxTransport('script', v13504);
    v13505;
    var oldCallbacks = [];
    var rjsonp = /(=)\?(?=&|$)|\?\?/;
    const v13511 = function () {
        const v13506 = oldCallbacks.pop();
        const v13507 = jQuery.expando;
        const v13508 = v13507 + '_';
        const v13509 = nonce++;
        const v13510 = v13508 + v13509;
        var callback = v13506 || v13510;
        this[callback] = true;
        return callback;
    };
    const v13512 = {
        jsonp: 'callback',
        jsonpCallback: v13511
    };
    const v13513 = jQuery.ajaxSetup(v13512);
    v13513;
    const v13568 = function (s, originalSettings, jqXHR) {
        var callbackName;
        var overwritten;
        var responseContainer;
        const v13514 = s.jsonp;
        const v13515 = v13514 !== false;
        const v13516 = s.url;
        const v13517 = rjsonp.test(v13516);
        const v13518 = s.data;
        const v13519 = typeof v13518;
        const v13520 = v13519 === 'string';
        const v13521 = s.contentType;
        const v13522 = v13521 || '';
        const v13523 = v13522.indexOf('application/x-www-form-urlencoded');
        const v13524 = !v13523;
        const v13525 = v13520 && v13524;
        const v13526 = s.data;
        const v13527 = rjsonp.test(v13526);
        const v13528 = v13525 && v13527;
        const v13529 = v13528 && 'data';
        let v13530;
        if (v13517) {
            v13530 = 'url';
        } else {
            v13530 = v13529;
        }
        var jsonProp = v13515 && v13530;
        const v13531 = s.dataTypes;
        const v13532 = v13531[0];
        const v13533 = v13532 === 'jsonp';
        const v13534 = jsonProp || v13533;
        if (v13534) {
            const v13535 = s.jsonpCallback;
            const v13536 = jQuery.isFunction(v13535);
            const v13537 = s.jsonpCallback();
            const v13538 = s.jsonpCallback;
            let v13539;
            if (v13536) {
                v13539 = v13537;
            } else {
                v13539 = v13538;
            }
            s.jsonpCallback = v13539;
            callbackName = s.jsonpCallback;
            if (jsonProp) {
                const v13540 = s[jsonProp];
                const v13541 = '$1' + callbackName;
                const v13542 = v13540.replace(rjsonp, v13541);
                s[jsonProp] = v13542;
            } else {
                const v13543 = s.jsonp;
                const v13544 = v13543 !== false;
                if (v13544) {
                    const v13545 = s.url;
                    const v13546 = rquery.test(v13545);
                    let v13547;
                    if (v13546) {
                        v13547 = '&';
                    } else {
                        v13547 = '?';
                    }
                    const v13548 = s.jsonp;
                    const v13549 = v13547 + v13548;
                    const v13550 = v13549 + '=';
                    s.url += v13550 + callbackName;
                }
            }
            const v13551 = s.converters;
            const v13556 = function () {
                const v13552 = !responseContainer;
                if (v13552) {
                    const v13553 = callbackName + ' was not called';
                    const v13554 = jQuery.error(v13553);
                    v13554;
                }
                const v13555 = responseContainer[0];
                return v13555;
            };
            v13551['script json'] = v13556;
            const v13557 = s.dataTypes;
            v13557[0] = 'json';
            overwritten = window[callbackName];
            const v13558 = function () {
                responseContainer = arguments;
            };
            window[callbackName] = v13558;
            const v13566 = function () {
                window[callbackName] = overwritten;
                const v13559 = s[callbackName];
                if (v13559) {
                    const v13560 = originalSettings.jsonpCallback;
                    s.jsonpCallback = v13560;
                    const v13561 = oldCallbacks.push(callbackName);
                    v13561;
                }
                const v13562 = jQuery.isFunction(overwritten);
                const v13563 = responseContainer && v13562;
                if (v13563) {
                    const v13564 = responseContainer[0];
                    const v13565 = overwritten(v13564);
                    v13565;
                }
                overwritten = undefined;
                responseContainer = overwritten;
            };
            const v13567 = jqXHR.always(v13566);
            v13567;
            return 'script';
        }
    };
    const v13569 = jQuery.ajaxPrefilter('json jsonp', v13568);
    v13569;
    const v13589 = function (data, context, keepScripts) {
        const v13570 = !data;
        const v13571 = typeof data;
        const v13572 = v13571 !== 'string';
        const v13573 = v13570 || v13572;
        if (v13573) {
            return null;
        }
        const v13574 = typeof context;
        const v13575 = v13574 === 'boolean';
        if (v13575) {
            keepScripts = context;
            context = false;
        }
        context = context || document;
        var parsed = rsingleTag.exec(data);
        const v13576 = !keepScripts;
        const v13577 = [];
        var scripts = v13576 && v13577;
        if (parsed) {
            const v13578 = parsed[1];
            const v13579 = context.createElement(v13578);
            const v13580 = [v13579];
            return v13580;
        }
        const v13581 = [data];
        parsed = jQuery.buildFragment(v13581, context, scripts);
        const v13582 = scripts.length;
        const v13583 = scripts && v13582;
        if (v13583) {
            const v13584 = jQuery(scripts);
            const v13585 = v13584.remove();
            v13585;
        }
        const v13586 = [];
        const v13587 = parsed.childNodes;
        const v13588 = jQuery.merge(v13586, v13587);
        return v13588;
    };
    jQuery.parseHTML = v13589;
    const v13590 = jQuery.fn;
    var _load = v13590.load;
    const v13591 = jQuery.fn;
    const v13621 = function (url, params, callback) {
        const v13592 = typeof url;
        const v13593 = v13592 !== 'string';
        const v13594 = v13593 && _load;
        if (v13594) {
            const v13595 = _load.apply(this, arguments);
            return v13595;
        }
        var selector;
        var response;
        var type;
        var self = this;
        var off = url.indexOf(' ');
        const v13596 = off >= 0;
        if (v13596) {
            const v13597 = url.length;
            selector = url.slice(off, v13597);
            url = url.slice(0, off);
        }
        const v13598 = jQuery.isFunction(params);
        if (v13598) {
            callback = params;
            params = undefined;
        } else {
            const v13599 = typeof params;
            const v13600 = v13599 === 'object';
            const v13601 = params && v13600;
            if (v13601) {
                type = 'POST';
            }
        }
        const v13602 = self.length;
        const v13603 = v13602 > 0;
        if (v13603) {
            const v13604 = {
                url: url,
                type: type,
                dataType: 'html',
                data: params
            };
            const v13605 = jQuery.ajax(v13604);
            const v13612 = function (responseText) {
                response = arguments;
                const v13606 = jQuery('<div>');
                const v13607 = jQuery.parseHTML(responseText);
                const v13608 = v13606.append(v13607);
                const v13609 = v13608.find(selector);
                let v13610;
                if (selector) {
                    v13610 = v13609;
                } else {
                    v13610 = responseText;
                }
                const v13611 = self.html(v13610);
                v13611;
            };
            const v13613 = v13605.done(v13612);
            const v13618 = function (jqXHR, status) {
                const v13614 = jqXHR.responseText;
                const v13615 = [
                    v13614,
                    status,
                    jqXHR
                ];
                const v13616 = response || v13615;
                const v13617 = self.each(callback, v13616);
                v13617;
            };
            const v13619 = callback && v13618;
            const v13620 = v13613.complete(v13619);
            v13620;
        }
        return this;
    };
    v13591.load = v13621;
    const v13622 = jQuery.expr;
    const v13623 = v13622.filters;
    const v13630 = function (elem) {
        const v13624 = jQuery.timers;
        const v13627 = function (fn) {
            const v13625 = fn.elem;
            const v13626 = elem === v13625;
            return v13626;
        };
        const v13628 = jQuery.grep(v13624, v13627);
        const v13629 = v13628.length;
        return v13629;
    };
    v13623.animated = v13630;
    const v13631 = window.document;
    var docElem = v13631.documentElement;
    const getWindow = function (elem) {
        const v13632 = jQuery.isWindow(elem);
        const v13633 = elem.nodeType;
        const v13634 = v13633 === 9;
        const v13635 = elem.defaultView;
        const v13636 = elem.parentWindow;
        const v13637 = v13635 || v13636;
        let v13638;
        if (v13634) {
            v13638 = v13637;
        } else {
            v13638 = false;
        }
        let v13639;
        if (v13632) {
            v13639 = elem;
        } else {
            v13639 = v13638;
        }
        return v13639;
    };
    const v13666 = function (elem, options, i) {
        var curPosition;
        var curLeft;
        var curCSSTop;
        var curTop;
        var curOffset;
        var curCSSLeft;
        var calculatePosition;
        var position = jQuery.css(elem, 'position');
        var curElem = jQuery(elem);
        var props = {};
        const v13640 = position === 'static';
        if (v13640) {
            const v13641 = elem.style;
            v13641.position = 'relative';
        }
        curOffset = curElem.offset();
        curCSSTop = jQuery.css(elem, 'top');
        curCSSLeft = jQuery.css(elem, 'left');
        const v13642 = position === 'absolute';
        const v13643 = position === 'fixed';
        const v13644 = v13642 || v13643;
        const v13645 = [
            curCSSTop,
            curCSSLeft
        ];
        const v13646 = jQuery.inArray('auto', v13645);
        const v13647 = -1;
        const v13648 = v13646 > v13647;
        calculatePosition = v13644 && v13648;
        if (calculatePosition) {
            curPosition = curElem.position();
            curTop = curPosition.top;
            curLeft = curPosition.left;
        } else {
            const v13649 = parseFloat(curCSSTop);
            curTop = v13649 || 0;
            const v13650 = parseFloat(curCSSLeft);
            curLeft = v13650 || 0;
        }
        const v13651 = jQuery.isFunction(options);
        if (v13651) {
            options = options.call(elem, i, curOffset);
        }
        const v13652 = options.top;
        const v13653 = v13652 != null;
        if (v13653) {
            const v13654 = options.top;
            const v13655 = curOffset.top;
            const v13656 = v13654 - v13655;
            props.top = v13656 + curTop;
        }
        const v13657 = options.left;
        const v13658 = v13657 != null;
        if (v13658) {
            const v13659 = options.left;
            const v13660 = curOffset.left;
            const v13661 = v13659 - v13660;
            props.left = v13661 + curLeft;
        }
        const v13662 = 'using' in options;
        if (v13662) {
            const v13663 = options.using;
            const v13664 = v13663.call(elem, props);
            v13664;
        } else {
            const v13665 = curElem.css(props);
            v13665;
        }
    };
    const v13667 = {};
    v13667.setOffset = v13666;
    jQuery.offset = v13667;
    const v13668 = jQuery.fn;
    const v13700 = function (options) {
        const v13669 = arguments.length;
        if (v13669) {
            const v13670 = options === undefined;
            const v13673 = function (i) {
                const v13671 = jQuery.offset;
                const v13672 = v13671.setOffset(this, options, i);
                v13672;
            };
            const v13674 = this.each(v13673);
            let v13675;
            if (v13670) {
                v13675 = this;
            } else {
                v13675 = v13674;
            }
            return v13675;
        }
        var docElem;
        var win;
        var box = {};
        box.top = 0;
        box.left = 0;
        var elem = this[0];
        const v13676 = elem.ownerDocument;
        var doc = elem && v13676;
        const v13677 = !doc;
        if (v13677) {
            return;
        }
        docElem = doc.documentElement;
        const v13678 = jQuery.contains(docElem, elem);
        const v13679 = !v13678;
        if (v13679) {
            return box;
        }
        const v13680 = elem.getBoundingClientRect;
        const v13681 = typeof v13680;
        const v13682 = v13681 !== strundefined;
        if (v13682) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        const v13683 = box.top;
        const v13684 = win.pageYOffset;
        const v13685 = docElem.scrollTop;
        const v13686 = v13684 || v13685;
        const v13687 = v13683 + v13686;
        const v13688 = docElem.clientTop;
        const v13689 = v13688 || 0;
        const v13690 = v13687 - v13689;
        const v13691 = box.left;
        const v13692 = win.pageXOffset;
        const v13693 = docElem.scrollLeft;
        const v13694 = v13692 || v13693;
        const v13695 = v13691 + v13694;
        const v13696 = docElem.clientLeft;
        const v13697 = v13696 || 0;
        const v13698 = v13695 - v13697;
        const v13699 = {};
        v13699.top = v13690;
        v13699.left = v13698;
        return v13699;
    };
    const v13723 = function () {
        const v13701 = this[0];
        const v13702 = !v13701;
        if (v13702) {
            return;
        }
        var offsetParent;
        var offset;
        var parentOffset = {};
        parentOffset.top = 0;
        parentOffset.left = 0;
        var elem = this[0];
        const v13703 = jQuery.css(elem, 'position');
        const v13704 = v13703 === 'fixed';
        if (v13704) {
            offset = elem.getBoundingClientRect();
        } else {
            offsetParent = this.offsetParent();
            offset = this.offset();
            const v13705 = offsetParent[0];
            const v13706 = jQuery.nodeName(v13705, 'html');
            const v13707 = !v13706;
            if (v13707) {
                parentOffset = offsetParent.offset();
            }
            const v13708 = offsetParent[0];
            const v13709 = jQuery.css(v13708, 'borderTopWidth', true);
            parentOffset.top += v13709;
            const v13710 = offsetParent[0];
            const v13711 = jQuery.css(v13710, 'borderLeftWidth', true);
            parentOffset.left += v13711;
        }
        const v13712 = offset.top;
        const v13713 = parentOffset.top;
        const v13714 = v13712 - v13713;
        const v13715 = jQuery.css(elem, 'marginTop', true);
        const v13716 = v13714 - v13715;
        const v13717 = offset.left;
        const v13718 = parentOffset.left;
        const v13719 = v13717 - v13718;
        const v13720 = jQuery.css(elem, 'marginLeft', true);
        const v13721 = v13719 - v13720;
        const v13722 = {};
        v13722.top = v13716;
        v13722.left = v13721;
        return v13722;
    };
    const v13734 = function () {
        const v13732 = function () {
            const v13724 = this.offsetParent;
            var offsetParent = v13724 || docElem;
            const v13725 = jQuery.nodeName(offsetParent, 'html');
            const v13726 = !v13725;
            const v13727 = jQuery.css(offsetParent, 'position');
            const v13728 = v13727 === 'static';
            const v13729 = v13726 && v13728;
            let v13730 = offsetParent && v13729;
            while (v13730) {
                offsetParent = offsetParent.offsetParent;
                v13730 = offsetParent && v13729;
            }
            const v13731 = offsetParent || docElem;
            return v13731;
        };
        const v13733 = this.map(v13732);
        return v13733;
    };
    const v13735 = {
        offset: v13700,
        position: v13723,
        offsetParent: v13734
    };
    const v13736 = v13668.extend(v13735);
    v13736;
    const v13737 = {
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset'
    };
    const v13760 = function (method, prop) {
        var top = /Y/.test(prop);
        const v13738 = jQuery.fn;
        const v13759 = function (val) {
            const v13756 = function (elem, method, val) {
                var win = getWindow(elem);
                const v13739 = val === undefined;
                if (v13739) {
                    const v13740 = prop in win;
                    const v13741 = win[prop];
                    const v13742 = win.document;
                    const v13743 = v13742.documentElement;
                    const v13744 = v13743[method];
                    let v13745;
                    if (v13740) {
                        v13745 = v13741;
                    } else {
                        v13745 = v13744;
                    }
                    const v13746 = elem[method];
                    let v13747;
                    if (win) {
                        v13747 = v13745;
                    } else {
                        v13747 = v13746;
                    }
                    return v13747;
                }
                if (win) {
                    const v13748 = !top;
                    const v13749 = jQuery(win);
                    const v13750 = v13749.scrollLeft();
                    let v13751;
                    if (v13748) {
                        v13751 = val;
                    } else {
                        v13751 = v13750;
                    }
                    const v13752 = jQuery(win);
                    const v13753 = v13752.scrollTop();
                    let v13754;
                    if (top) {
                        v13754 = val;
                    } else {
                        v13754 = v13753;
                    }
                    const v13755 = win.scrollTo(v13751, v13754);
                    v13755;
                } else {
                    elem[method] = val;
                }
            };
            const v13757 = arguments.length;
            const v13758 = access(this, v13756, method, val, v13757, null);
            return v13758;
        };
        v13738[method] = v13759;
    };
    const v13761 = jQuery.each(v13737, v13760);
    v13761;
    const v13762 = [
        'top',
        'left'
    ];
    const v13773 = function (i, prop) {
        const v13764 = support.pixelPosition;
        const v13771 = function (elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                const v13765 = rnumnonpx.test(computed);
                const v13766 = jQuery(elem);
                const v13767 = v13766.position();
                const v13768 = v13767[prop];
                const v13769 = v13768 + 'px';
                let v13770;
                if (v13765) {
                    v13770 = v13769;
                } else {
                    v13770 = computed;
                }
                return v13770;
            }
        };
        const v13772 = addGetHookIf(v13764, v13771);
        v13763[prop] = v13772;
    };
    const v13774 = jQuery.each(v13762, v13773);
    v13774;
    const v13775 = {
        Height: 'height',
        Width: 'width'
    };
    const v13818 = function (name, type) {
        const v13776 = 'inner' + name;
        const v13777 = 'outer' + name;
        const v13778 = {
            padding: v13776,
            content: type,
            '': v13777
        };
        const v13816 = function (defaultExtra, funcName) {
            const v13779 = jQuery.fn;
            const v13815 = function (margin, value) {
                const v13780 = arguments.length;
                const v13781 = typeof margin;
                const v13782 = v13781 !== 'boolean';
                const v13783 = defaultExtra || v13782;
                var chainable = v13780 && v13783;
                const v13784 = margin === true;
                const v13785 = value === true;
                const v13786 = v13784 || v13785;
                let v13787;
                if (v13786) {
                    v13787 = 'margin';
                } else {
                    v13787 = 'border';
                }
                var extra = defaultExtra || v13787;
                const v13812 = function (elem, type, value) {
                    var doc;
                    const v13788 = jQuery.isWindow(elem);
                    if (v13788) {
                        const v13789 = elem.document;
                        const v13790 = v13789.documentElement;
                        const v13791 = 'client' + name;
                        const v13792 = v13790[v13791];
                        return v13792;
                    }
                    const v13793 = elem.nodeType;
                    const v13794 = v13793 === 9;
                    if (v13794) {
                        doc = elem.documentElement;
                        const v13795 = elem.body;
                        const v13796 = 'scroll' + name;
                        const v13797 = v13795[v13796];
                        const v13798 = 'scroll' + name;
                        const v13799 = doc[v13798];
                        const v13800 = elem.body;
                        const v13801 = 'offset' + name;
                        const v13802 = v13800[v13801];
                        const v13803 = 'offset' + name;
                        const v13804 = doc[v13803];
                        const v13805 = 'client' + name;
                        const v13806 = doc[v13805];
                        const v13807 = Math.max(v13797, v13799, v13802, v13804, v13806);
                        return v13807;
                    }
                    const v13808 = value === undefined;
                    const v13809 = jQuery.css(elem, type, extra);
                    const v13810 = jQuery.style(elem, type, value, extra);
                    let v13811;
                    if (v13808) {
                        v13811 = v13809;
                    } else {
                        v13811 = v13810;
                    }
                    return v13811;
                };
                let v13813;
                if (chainable) {
                    v13813 = margin;
                } else {
                    v13813 = undefined;
                }
                const v13814 = access(this, v13812, type, v13813, chainable, null);
                return v13814;
            };
            v13779[funcName] = v13815;
        };
        const v13817 = jQuery.each(v13778, v13816);
        v13817;
    };
    const v13819 = jQuery.each(v13775, v13818);
    v13819;
    const v13820 = jQuery.fn;
    const v13822 = function () {
        const v13821 = this.length;
        return v13821;
    };
    v13820.size = v13822;
    const v13823 = jQuery.fn;
    const v13824 = jQuery.fn;
    const v13825 = v13824.addBack;
    v13823.andSelf = v13825;
    const v13826 = typeof define;
    const v13827 = v13826 === 'function';
    const v13828 = define.amd;
    const v13829 = v13827 && v13828;
    if (v13829) {
        const v13830 = [];
        const v13831 = function () {
            return jQuery;
        };
        const v13832 = define('jquery', v13830, v13831);
        v13832;
    }
    var _jQuery = window.jQuery;
    var _$ = window.$;
    const v13838 = function (deep) {
        const v13833 = window.$;
        const v13834 = v13833 === jQuery;
        if (v13834) {
            window.$ = _$;
        }
        const v13835 = window.jQuery;
        const v13836 = v13835 === jQuery;
        const v13837 = deep && v13836;
        if (v13837) {
            window.jQuery = _jQuery;
        }
        return jQuery;
    };
    jQuery.noConflict = v13838;
    const v13839 = typeof noGlobal;
    const v13840 = v13839 === strundefined;
    if (v13840) {
        window.$ = jQuery;
        window.jQuery = window.$;
    }
    return jQuery;
};
const v13842 = v6937(v6940, v13841);
v13842;