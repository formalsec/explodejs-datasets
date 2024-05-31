var LARGE_ARRAY_SIZE = 200;
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var MAX_SAFE_INTEGER = 9007199254740991;
var argsTag = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var promiseTag = '[object Promise]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag = '[object Symbol]';
var weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reFlags = /\w*$/;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var typedArrayTags = {};
typedArrayTags.uint32Tag = true;
typedArrayTags.uint16Tag = typedArrayTags[uint32Tag];
typedArrayTags.uint8ClampedTag = typedArrayTags[uint16Tag];
typedArrayTags.uint8Tag = typedArrayTags[uint8ClampedTag];
typedArrayTags.int32Tag = typedArrayTags[uint8Tag];
typedArrayTags.int16Tag = typedArrayTags[int32Tag];
typedArrayTags.int8Tag = typedArrayTags[int16Tag];
typedArrayTags.float64Tag = typedArrayTags[int8Tag];
typedArrayTags[float32Tag] = typedArrayTags[float64Tag];
typedArrayTags.weakMapTag = false;
typedArrayTags.stringTag = typedArrayTags[weakMapTag];
typedArrayTags.setTag = typedArrayTags[stringTag];
typedArrayTags.regexpTag = typedArrayTags[setTag];
typedArrayTags.objectTag = typedArrayTags[regexpTag];
typedArrayTags.numberTag = typedArrayTags[objectTag];
typedArrayTags.mapTag = typedArrayTags[numberTag];
typedArrayTags.funcTag = typedArrayTags[mapTag];
typedArrayTags.errorTag = typedArrayTags[funcTag];
typedArrayTags.dateTag = typedArrayTags[errorTag];
typedArrayTags.dataViewTag = typedArrayTags[dateTag];
typedArrayTags.boolTag = typedArrayTags[dataViewTag];
typedArrayTags.arrayBufferTag = typedArrayTags[boolTag];
typedArrayTags.arrayTag = typedArrayTags[arrayBufferTag];
typedArrayTags[argsTag] = typedArrayTags[arrayTag];
var cloneableTags = {};
cloneableTags.uint32Tag = true;
cloneableTags.uint16Tag = cloneableTags[uint32Tag];
cloneableTags.uint8ClampedTag = cloneableTags[uint16Tag];
cloneableTags.uint8Tag = cloneableTags[uint8ClampedTag];
cloneableTags.symbolTag = cloneableTags[uint8Tag];
cloneableTags.stringTag = cloneableTags[symbolTag];
cloneableTags.setTag = cloneableTags[stringTag];
cloneableTags.regexpTag = cloneableTags[setTag];
cloneableTags.objectTag = cloneableTags[regexpTag];
cloneableTags.numberTag = cloneableTags[objectTag];
cloneableTags.mapTag = cloneableTags[numberTag];
cloneableTags.int32Tag = cloneableTags[mapTag];
cloneableTags.int16Tag = cloneableTags[int32Tag];
cloneableTags.int8Tag = cloneableTags[int16Tag];
cloneableTags.float64Tag = cloneableTags[int8Tag];
cloneableTags.float32Tag = cloneableTags[float64Tag];
cloneableTags.dateTag = cloneableTags[float32Tag];
cloneableTags.boolTag = cloneableTags[dateTag];
cloneableTags.dataViewTag = cloneableTags[boolTag];
cloneableTags.arrayBufferTag = cloneableTags[dataViewTag];
cloneableTags.arrayTag = cloneableTags[arrayBufferTag];
cloneableTags[argsTag] = cloneableTags[arrayTag];
cloneableTags.weakMapTag = false;
cloneableTags.funcTag = cloneableTags[weakMapTag];
cloneableTags[errorTag] = cloneableTags[funcTag];
const v708 = typeof global;
const v709 = v708 == 'object';
const v710 = v709 && global;
const v711 = global.Object;
const v712 = v711 === Object;
const v713 = v710 && v712;
var freeGlobal = v713 && global;
const v714 = typeof self;
const v715 = v714 == 'object';
const v716 = v715 && self;
const v717 = self.Object;
const v718 = v717 === Object;
const v719 = v716 && v718;
var freeSelf = v719 && self;
const v720 = freeGlobal || freeSelf;
const v721 = Function('return this');
const v722 = v721();
var root = v720 || v722;
const v723 = typeof exports;
const v724 = v723 == 'object';
const v725 = v724 && exports;
const v726 = exports.nodeType;
const v727 = !v726;
const v728 = v725 && v727;
var freeExports = v728 && exports;
const v729 = typeof module;
const v730 = v729 == 'object';
const v731 = freeExports && v730;
const v732 = v731 && module;
const v733 = module.nodeType;
const v734 = !v733;
const v735 = v732 && v734;
var freeModule = v735 && module;
const v736 = freeModule.exports;
const v737 = v736 === freeExports;
var moduleExports = freeModule && v737;
const v738 = freeGlobal.process;
var freeProcess = moduleExports && v738;
const v741 = function () {
    try {
        const v739 = freeProcess.binding('util');
        const v740 = freeProcess && v739;
        return v740;
    } catch (e) {
    }
};
var nodeUtil = v741();
const v742 = nodeUtil.isTypedArray;
var nodeIsTypedArray = nodeUtil && v742;
const addMapEntry = function (map, pair) {
    const v743 = pair[0];
    const v744 = pair[1];
    const v745 = map.set(v743, v744);
    v745;
    return map;
};
const addSetEntry = function (set, value) {
    const v746 = set.add(value);
    v746;
    return set;
};
const apply = function (func, thisArg, args) {
    const v747 = args.length;
    switch (v747) {
    case 0:
        const v748 = func.call(thisArg);
        return v748;
    case 1:
        const v749 = args[0];
        const v750 = func.call(thisArg, v749);
        return v750;
    case 2:
        const v751 = args[0];
        const v752 = args[1];
        const v753 = func.call(thisArg, v751, v752);
        return v753;
    case 3:
        const v754 = args[0];
        const v755 = args[1];
        const v756 = args[2];
        const v757 = func.call(thisArg, v754, v755, v756);
        return v757;
    }
    const v758 = func.apply(thisArg, args);
    return v758;
};
const arrayEach = function (array, iteratee) {
    const v759 = -1;
    var index = v759;
    let length;
    const v760 = array.length;
    if (array) {
        length = v760;
    } else {
        length = 0;
    }
    const v761 = ++index;
    let v762 = v761 < length;
    while (v762) {
        const v763 = array[index];
        const v764 = iteratee(v763, index, array);
        const v765 = v764 === false;
        if (v765) {
            break;
        }
        v762 = v761 < length;
    }
    return array;
};
const arrayPush = function (array, values) {
    const v766 = -1;
    var index = v766;
    var length = values.length;
    var offset = array.length;
    const v767 = ++index;
    let v768 = v767 < length;
    while (v768) {
        const v769 = offset + index;
        const v770 = values[index];
        array[v769] = v770;
        v768 = v767 < length;
    }
    return array;
};
const arrayReduce = function (array, iteratee, accumulator, initAccum) {
    const v771 = -1;
    var index = v771;
    let length;
    const v772 = array.length;
    if (array) {
        length = v772;
    } else {
        length = 0;
    }
    const v773 = initAccum && length;
    if (v773) {
        const v774 = ++index;
        accumulator = array[v774];
    }
    const v775 = ++index;
    let v776 = v775 < length;
    while (v776) {
        const v777 = array[index];
        accumulator = iteratee(accumulator, v777, index, array);
        v776 = v775 < length;
    }
    return accumulator;
};
const baseTimes = function (n, iteratee) {
    const v778 = -1;
    var index = v778;
    var result = Array(n);
    const v779 = ++index;
    let v780 = v779 < n;
    while (v780) {
        const v781 = iteratee(index);
        result[index] = v781;
        v780 = v779 < n;
    }
    return result;
};
const baseUnary = function (func) {
    const v783 = function (value) {
        const v782 = func(value);
        return v782;
    };
    return v783;
};
const getValue = function (object, key) {
    const v784 = object == null;
    const v785 = object[key];
    let v786;
    if (v784) {
        v786 = undefined;
    } else {
        v786 = v785;
    }
    return v786;
};
const isHostObject = function (value) {
    var result = false;
    const v787 = value != null;
    const v788 = value.toString;
    const v789 = typeof v788;
    const v790 = v789 != 'function';
    const v791 = v787 && v790;
    if (v791) {
        try {
            const v792 = value + '';
            const v793 = !v792;
            const v794 = !v793;
            result = v794;
        } catch (e) {
        }
    }
    return result;
};
const mapToArray = function (map) {
    const v795 = -1;
    var index = v795;
    const v796 = map.size;
    var result = Array(v796);
    const v798 = function (value, key) {
        const v797 = ++index;
        result[v797] = [
            key,
            value
        ];
    };
    const v799 = map.forEach(v798);
    v799;
    return result;
};
const overArg = function (func, transform) {
    const v802 = function (arg) {
        const v800 = transform(arg);
        const v801 = func(v800);
        return v801;
    };
    return v802;
};
const setToArray = function (set) {
    const v803 = -1;
    var index = v803;
    const v804 = set.size;
    var result = Array(v804);
    const v806 = function (value) {
        const v805 = ++index;
        result[v805] = value;
    };
    const v807 = set.forEach(v806);
    v807;
    return result;
};
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var coreJsData = root['__core-js_shared__'];
const v816 = function () {
    const v808 = coreJsData.keys;
    const v809 = coreJsData && v808;
    const v810 = coreJsData.keys;
    const v811 = v810.IE_PROTO;
    const v812 = v809 && v811;
    const v813 = v812 || '';
    var uid = /[^.]+$/.exec(v813);
    const v814 = 'Symbol(src)_1.' + uid;
    let v815;
    if (uid) {
        v815 = v814;
    } else {
        v815 = '';
    }
    return v815;
};
var maskSrcKey = v816();
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
var objectToString = objectProto.toString;
const v817 = funcToString.call(hasOwnProperty);
const v818 = v817.replace(reRegExpChar, '\\$&');
const v819 = v818.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?');
const v820 = '^' + v819;
const v821 = v820 + '$';
var reIsNative = RegExp(v821);
let Buffer;
const v822 = root.Buffer;
if (moduleExports) {
    Buffer = v822;
} else {
    Buffer = undefined;
}
var Symbol = root.Symbol;
var Uint8Array = root.Uint8Array;
const v823 = Object.getPrototypeOf;
var getPrototype = overArg(v823, Object);
var objectCreate = Object.create;
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
var nativeGetSymbols = Object.getOwnPropertySymbols;
let nativeIsBuffer;
const v824 = Buffer.isBuffer;
if (Buffer) {
    nativeIsBuffer = v824;
} else {
    nativeIsBuffer = undefined;
}
const v825 = Object.keys;
var nativeKeys = overArg(v825, Object);
var nativeMax = Math.max;
var DataView = getNative(root, 'DataView');
var Map = getNative(root, 'Map');
var Promise = getNative(root, 'Promise');
var Set = getNative(root, 'Set');
var WeakMap = getNative(root, 'WeakMap');
var nativeCreate = getNative(Object, 'create');
var dataViewCtorString = toSource(DataView);
var mapCtorString = toSource(Map);
var promiseCtorString = toSource(Promise);
var setCtorString = toSource(Set);
var weakMapCtorString = toSource(WeakMap);
let symbolProto;
const v826 = Symbol.prototype;
if (Symbol) {
    symbolProto = v826;
} else {
    symbolProto = undefined;
}
let symbolValueOf;
const v827 = symbolProto.valueOf;
if (symbolProto) {
    symbolValueOf = v827;
} else {
    symbolValueOf = undefined;
}
const Hash = function (entries) {
    const v828 = -1;
    var index = v828;
    let length;
    const v829 = entries.length;
    if (entries) {
        length = v829;
    } else {
        length = 0;
    }
    const v830 = this.clear();
    v830;
    const v831 = ++index;
    let v832 = v831 < length;
    while (v832) {
        var entry = entries[index];
        const v833 = entry[0];
        const v834 = entry[1];
        const v835 = this.set(v833, v834);
        v835;
        v832 = v831 < length;
    }
};
const hashClear = function () {
    const v836 = nativeCreate(null);
    const v837 = {};
    let v838;
    if (nativeCreate) {
        v838 = v836;
    } else {
        v838 = v837;
    }
    this.__data__ = v838;
};
const hashDelete = function (key) {
    const v839 = this.has(key);
    const v840 = this.__data__;
    const v841 = v840[key];
    const v842 = delete v841;
    const v843 = v839 && v842;
    return v843;
};
const hashGet = function (key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        const v844 = result === HASH_UNDEFINED;
        let v845;
        if (v844) {
            v845 = undefined;
        } else {
            v845 = result;
        }
        return v845;
    }
    const v846 = hasOwnProperty.call(data, key);
    const v847 = data[key];
    let v848;
    if (v846) {
        v848 = v847;
    } else {
        v848 = undefined;
    }
    return v848;
};
const hashHas = function (key) {
    var data = this.__data__;
    const v849 = data[key];
    const v850 = v849 !== undefined;
    const v851 = hasOwnProperty.call(data, key);
    let v852;
    if (nativeCreate) {
        v852 = v850;
    } else {
        v852 = v851;
    }
    return v852;
};
const hashSet = function (key, value) {
    var data = this.__data__;
    const v853 = value === undefined;
    const v854 = nativeCreate && v853;
    let v855;
    if (v854) {
        v855 = HASH_UNDEFINED;
    } else {
        v855 = value;
    }
    data[key] = v855;
    return this;
};
const v856 = Hash.prototype;
v856.clear = hashClear;
const v857 = Hash.prototype;
v857['delete'] = hashDelete;
const v858 = Hash.prototype;
v858.get = hashGet;
const v859 = Hash.prototype;
v859.has = hashHas;
const v860 = Hash.prototype;
v860.set = hashSet;
const ListCache = function (entries) {
    const v861 = -1;
    var index = v861;
    let length;
    const v862 = entries.length;
    if (entries) {
        length = v862;
    } else {
        length = 0;
    }
    const v863 = this.clear();
    v863;
    const v864 = ++index;
    let v865 = v864 < length;
    while (v865) {
        var entry = entries[index];
        const v866 = entry[0];
        const v867 = entry[1];
        const v868 = this.set(v866, v867);
        v868;
        v865 = v864 < length;
    }
};
const listCacheClear = function () {
    this.__data__ = [];
};
const listCacheDelete = function (key) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v869 = index < 0;
    if (v869) {
        return false;
    }
    const v870 = data.length;
    var lastIndex = v870 - 1;
    const v871 = index == lastIndex;
    if (v871) {
        const v872 = data.pop();
        v872;
    } else {
        const v873 = splice.call(data, index, 1);
        v873;
    }
    return true;
};
const listCacheGet = function (key) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v874 = index < 0;
    const v875 = data[index];
    const v876 = v875[1];
    let v877;
    if (v874) {
        v877 = undefined;
    } else {
        v877 = v876;
    }
    return v877;
};
const listCacheHas = function (key) {
    const v878 = this.__data__;
    const v879 = assocIndexOf(v878, key);
    const v880 = -1;
    const v881 = v879 > v880;
    return v881;
};
const listCacheSet = function (key, value) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v882 = index < 0;
    if (v882) {
        const v883 = [
            key,
            value
        ];
        const v884 = data.push(v883);
        v884;
    } else {
        const v885 = data[index];
        v885[1] = value;
    }
    return this;
};
const v886 = ListCache.prototype;
v886.clear = listCacheClear;
const v887 = ListCache.prototype;
v887['delete'] = listCacheDelete;
const v888 = ListCache.prototype;
v888.get = listCacheGet;
const v889 = ListCache.prototype;
v889.has = listCacheHas;
const v890 = ListCache.prototype;
v890.set = listCacheSet;
const MapCache = function (entries) {
    const v891 = -1;
    var index = v891;
    let length;
    const v892 = entries.length;
    if (entries) {
        length = v892;
    } else {
        length = 0;
    }
    const v893 = this.clear();
    v893;
    const v894 = ++index;
    let v895 = v894 < length;
    while (v895) {
        var entry = entries[index];
        const v896 = entry[0];
        const v897 = entry[1];
        const v898 = this.set(v896, v897);
        v898;
        v895 = v894 < length;
    }
};
const mapCacheClear = function () {
    const v899 = new Hash();
    const v900 = Map || ListCache;
    const v901 = new v900();
    const v902 = new Hash();
    const v903 = {};
    v903['hash'] = v899;
    v903['map'] = v901;
    v903['string'] = v902;
    this.__data__ = v903;
};
const mapCacheDelete = function (key) {
    const v904 = getMapData(this, key);
    const v905 = v904['delete'](key);
    return v905;
};
const mapCacheGet = function (key) {
    const v906 = getMapData(this, key);
    const v907 = v906.get(key);
    return v907;
};
const mapCacheHas = function (key) {
    const v908 = getMapData(this, key);
    const v909 = v908.has(key);
    return v909;
};
const mapCacheSet = function (key, value) {
    const v910 = getMapData(this, key);
    const v911 = v910.set(key, value);
    v911;
    return this;
};
const v912 = MapCache.prototype;
v912.clear = mapCacheClear;
const v913 = MapCache.prototype;
v913['delete'] = mapCacheDelete;
const v914 = MapCache.prototype;
v914.get = mapCacheGet;
const v915 = MapCache.prototype;
v915.has = mapCacheHas;
const v916 = MapCache.prototype;
v916.set = mapCacheSet;
const Stack = function (entries) {
    this.__data__ = new ListCache(entries);
};
const stackClear = function () {
    this.__data__ = new ListCache();
};
const stackDelete = function (key) {
    const v917 = this.__data__;
    const v918 = v917['delete'](key);
    return v918;
};
const stackGet = function (key) {
    const v919 = this.__data__;
    const v920 = v919.get(key);
    return v920;
};
const stackHas = function (key) {
    const v921 = this.__data__;
    const v922 = v921.has(key);
    return v922;
};
const stackSet = function (key, value) {
    var cache = this.__data__;
    const v923 = cache instanceof ListCache;
    if (v923) {
        var pairs = cache.__data__;
        const v924 = !Map;
        const v925 = pairs.length;
        const v926 = LARGE_ARRAY_SIZE - 1;
        const v927 = v925 < v926;
        const v928 = v924 || v927;
        if (v928) {
            const v929 = [
                key,
                value
            ];
            const v930 = pairs.push(v929);
            v930;
            return this;
        }
        cache = this.__data__ = new MapCache(pairs);
    }
    const v931 = cache.set(key, value);
    v931;
    return this;
};
const v932 = Stack.prototype;
v932.clear = stackClear;
const v933 = Stack.prototype;
v933['delete'] = stackDelete;
const v934 = Stack.prototype;
v934.get = stackGet;
const v935 = Stack.prototype;
v935.has = stackHas;
const v936 = Stack.prototype;
v936.set = stackSet;
const arrayLikeKeys = function (value, inherited) {
    let result;
    const v937 = isArray(value);
    const v938 = isArguments(value);
    const v939 = v937 || v938;
    const v940 = value.length;
    const v941 = baseTimes(v940, String);
    const v942 = [];
    if (v939) {
        result = v941;
    } else {
        result = v942;
    }
    var length = result.length;
    const v943 = !length;
    const v944 = !v943;
    var skipIndexes = v944;
    let key;
    for (key in value) {
        const v945 = hasOwnProperty.call(value, key);
        const v946 = inherited || v945;
        const v947 = key == 'length';
        const v948 = isIndex(key, length);
        const v949 = v947 || v948;
        const v950 = skipIndexes && v949;
        const v951 = !v950;
        const v952 = v946 && v951;
        if (v952) {
            const v953 = result.push(key);
            v953;
        }
    }
    return result;
};
const assignMergeValue = function (object, key, value) {
    const v954 = value !== undefined;
    const v955 = object[key];
    const v956 = eq(v955, value);
    const v957 = !v956;
    const v958 = v954 && v957;
    const v959 = typeof key;
    const v960 = v959 == 'number';
    const v961 = value === undefined;
    const v962 = v960 && v961;
    const v963 = key in object;
    const v964 = !v963;
    const v965 = v962 && v964;
    const v966 = v958 || v965;
    if (v966) {
        object[key] = value;
    }
};
const assignValue = function (object, key, value) {
    var objValue = object[key];
    const v967 = hasOwnProperty.call(object, key);
    const v968 = eq(objValue, value);
    const v969 = v967 && v968;
    const v970 = !v969;
    const v971 = value === undefined;
    const v972 = key in object;
    const v973 = !v972;
    const v974 = v971 && v973;
    const v975 = v970 || v974;
    if (v975) {
        object[key] = value;
    }
};
const assocIndexOf = function (array, key) {
    var length = array.length;
    let v976 = length--;
    while (v976) {
        const v977 = array[length];
        const v978 = v977[0];
        const v979 = eq(v978, key);
        if (v979) {
            return length;
        }
        v976 = length--;
    }
    const v980 = -1;
    return v980;
};
const baseAssign = function (object, source) {
    const v981 = keys(source);
    const v982 = copyObject(source, v981, object);
    const v983 = object && v982;
    return v983;
};
const baseClone = function (value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
        const v984 = customizer(value, key, object, stack);
        const v985 = customizer(value);
        if (object) {
            result = v984;
        } else {
            result = v985;
        }
    }
    const v986 = result !== undefined;
    if (v986) {
        return result;
    }
    const v987 = isObject(value);
    const v988 = !v987;
    if (v988) {
        return value;
    }
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        const v989 = !isDeep;
        if (v989) {
            const v990 = copyArray(value, result);
            return v990;
        }
    } else {
        var tag = getTag(value);
        const v991 = tag == funcTag;
        const v992 = tag == genTag;
        var isFunc = v991 || v992;
        const v993 = isBuffer(value);
        if (v993) {
            const v994 = cloneBuffer(value, isDeep);
            return v994;
        }
        const v995 = tag == objectTag;
        const v996 = tag == argsTag;
        const v997 = v995 || v996;
        const v998 = !object;
        const v999 = isFunc && v998;
        const v1000 = v997 || v999;
        if (v1000) {
            const v1001 = isHostObject(value);
            if (v1001) {
                const v1002 = {};
                let v1003;
                if (object) {
                    v1003 = value;
                } else {
                    v1003 = v1002;
                }
                return v1003;
            }
            const v1004 = {};
            let v1005;
            if (isFunc) {
                v1005 = v1004;
            } else {
                v1005 = value;
            }
            result = initCloneObject(v1005);
            const v1006 = !isDeep;
            if (v1006) {
                const v1007 = baseAssign(result, value);
                const v1008 = copySymbols(value, v1007);
                return v1008;
            }
        } else {
            const v1009 = cloneableTags[tag];
            const v1010 = !v1009;
            if (v1010) {
                const v1011 = {};
                let v1012;
                if (object) {
                    v1012 = value;
                } else {
                    v1012 = v1011;
                }
                return v1012;
            }
            result = initCloneByTag(value, tag, baseClone, isDeep);
        }
    }
    const v1013 = stack || (stack = new Stack());
    v1013;
    var stacked = stack.get(value);
    if (stacked) {
        return stacked;
    }
    const v1014 = stack.set(value, result);
    v1014;
    const v1015 = !isArr;
    if (v1015) {
        let props;
        const v1016 = getAllKeys(value);
        const v1017 = keys(value);
        if (isFull) {
            props = v1016;
        } else {
            props = v1017;
        }
    }
    const v1018 = props || value;
    const v1021 = function (subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        const v1019 = baseClone(subValue, isDeep, isFull, customizer, key, value, stack);
        const v1020 = assignValue(result, key, v1019);
        v1020;
    };
    const v1022 = arrayEach(v1018, v1021);
    v1022;
    return result;
};
const baseCreate = function (proto) {
    const v1023 = isObject(proto);
    const v1024 = objectCreate(proto);
    const v1025 = {};
    let v1026;
    if (v1023) {
        v1026 = v1024;
    } else {
        v1026 = v1025;
    }
    return v1026;
};
const baseGetAllKeys = function (object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    const v1027 = isArray(object);
    const v1028 = symbolsFunc(object);
    const v1029 = arrayPush(result, v1028);
    let v1030;
    if (v1027) {
        v1030 = result;
    } else {
        v1030 = v1029;
    }
    return v1030;
};
const baseGetTag = function (value) {
    const v1031 = objectToString.call(value);
    return v1031;
};
const baseIsNative = function (value) {
    const v1032 = isObject(value);
    const v1033 = !v1032;
    const v1034 = isMasked(value);
    const v1035 = v1033 || v1034;
    if (v1035) {
        return false;
    }
    let pattern;
    const v1036 = isFunction(value);
    const v1037 = isHostObject(value);
    const v1038 = v1036 || v1037;
    if (v1038) {
        pattern = reIsNative;
    } else {
        pattern = reIsHostCtor;
    }
    const v1039 = toSource(value);
    const v1040 = pattern.test(v1039);
    return v1040;
};
const baseIsTypedArray = function (value) {
    const v1041 = isObjectLike(value);
    const v1042 = value.length;
    const v1043 = isLength(v1042);
    const v1044 = v1041 && v1043;
    const v1045 = objectToString.call(value);
    const v1046 = typedArrayTags[v1045];
    const v1047 = !v1046;
    const v1048 = !v1047;
    const v1049 = v1044 && v1048;
    return v1049;
};
const baseKeys = function (object) {
    const v1050 = isPrototype(object);
    const v1051 = !v1050;
    if (v1051) {
        const v1052 = nativeKeys(object);
        return v1052;
    }
    var result = [];
    let key;
    const v1053 = Object(object);
    for (key in v1053) {
        const v1054 = hasOwnProperty.call(object, key);
        const v1055 = key != 'constructor';
        const v1056 = v1054 && v1055;
        if (v1056) {
            const v1057 = result.push(key);
            v1057;
        }
    }
    return result;
};
const baseKeysIn = function (object) {
    const v1058 = isObject(object);
    const v1059 = !v1058;
    if (v1059) {
        const v1060 = nativeKeysIn(object);
        return v1060;
    }
    var isProto = isPrototype(object);
    var result = [];
    let key;
    for (key in object) {
        const v1061 = key == 'constructor';
        const v1062 = hasOwnProperty.call(object, key);
        const v1063 = !v1062;
        const v1064 = isProto || v1063;
        const v1065 = v1061 && v1064;
        const v1066 = !v1065;
        if (v1066) {
            const v1067 = result.push(key);
            v1067;
        }
    }
    return result;
};
const baseMerge = function (object, source, srcIndex, customizer, stack) {
    const v1068 = object === source;
    if (v1068) {
        return;
    }
    const v1069 = isArray(source);
    const v1070 = isTypedArray(source);
    const v1071 = v1069 || v1070;
    const v1072 = !v1071;
    if (v1072) {
        var props = baseKeysIn(source);
    }
    const v1073 = props || source;
    const v1082 = function (srcValue, key) {
        if (props) {
            key = srcValue;
            srcValue = source[key];
        }
        const v1074 = isObject(srcValue);
        if (v1074) {
            const v1075 = stack || (stack = new Stack());
            v1075;
            const v1076 = baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            v1076;
        } else {
            let newValue;
            const v1077 = object[key];
            const v1078 = key + '';
            const v1079 = customizer(v1077, srcValue, v1078, object, source, stack);
            if (customizer) {
                newValue = v1079;
            } else {
                newValue = undefined;
            }
            const v1080 = newValue === undefined;
            if (v1080) {
                newValue = srcValue;
            }
            const v1081 = assignMergeValue(object, key, newValue);
            v1081;
        }
    };
    const v1083 = arrayEach(v1073, v1082);
    v1083;
};
const baseMergeDeep = function (object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = object[key];
    var srcValue = source[key];
    var stacked = stack.get(srcValue);
    if (stacked) {
        const v1084 = assignMergeValue(object, key, stacked);
        v1084;
        return;
    }
    let newValue;
    const v1085 = key + '';
    const v1086 = customizer(objValue, srcValue, v1085, object, source, stack);
    if (customizer) {
        newValue = v1086;
    } else {
        newValue = undefined;
    }
    var isCommon = newValue === undefined;
    if (isCommon) {
        newValue = srcValue;
        const v1087 = isArray(srcValue);
        const v1088 = isTypedArray(srcValue);
        const v1089 = v1087 || v1088;
        if (v1089) {
            const v1090 = isArray(objValue);
            if (v1090) {
                newValue = objValue;
            } else {
                const v1091 = isArrayLikeObject(objValue);
                if (v1091) {
                    newValue = copyArray(objValue);
                } else {
                    isCommon = false;
                    newValue = baseClone(srcValue, true);
                }
            }
        } else {
            const v1092 = isPlainObject(srcValue);
            const v1093 = isArguments(srcValue);
            const v1094 = v1092 || v1093;
            if (v1094) {
                const v1095 = isArguments(objValue);
                if (v1095) {
                    newValue = toPlainObject(objValue);
                } else {
                    const v1096 = isObject(objValue);
                    const v1097 = !v1096;
                    const v1098 = isFunction(objValue);
                    const v1099 = srcIndex && v1098;
                    const v1100 = v1097 || v1099;
                    if (v1100) {
                        isCommon = false;
                        newValue = baseClone(srcValue, true);
                    } else {
                        newValue = objValue;
                    }
                }
            } else {
                isCommon = false;
            }
        }
    }
    if (isCommon) {
        const v1101 = stack.set(srcValue, newValue);
        v1101;
        const v1102 = mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        v1102;
        const v1103 = stack['delete'](srcValue);
        v1103;
    }
    const v1104 = assignMergeValue(object, key, newValue);
    v1104;
};
const baseRest = function (func, start) {
    const v1105 = start === undefined;
    const v1106 = func.length;
    const v1107 = v1106 - 1;
    let v1108;
    if (v1105) {
        v1108 = v1107;
    } else {
        v1108 = start;
    }
    start = nativeMax(v1108, 0);
    const v1122 = function () {
        var args = arguments;
        const v1109 = -1;
        var index = v1109;
        const v1110 = args.length;
        const v1111 = v1110 - start;
        var length = nativeMax(v1111, 0);
        var array = Array(length);
        const v1112 = ++index;
        let v1113 = v1112 < length;
        while (v1113) {
            const v1114 = start + index;
            const v1115 = args[v1114];
            array[index] = v1115;
            v1113 = v1112 < length;
        }
        const v1116 = -1;
        index = v1116;
        const v1117 = start + 1;
        var otherArgs = Array(v1117);
        const v1118 = ++index;
        let v1119 = v1118 < start;
        while (v1119) {
            const v1120 = args[index];
            otherArgs[index] = v1120;
            v1119 = v1118 < start;
        }
        otherArgs[start] = array;
        const v1121 = apply(func, this, otherArgs);
        return v1121;
    };
    return v1122;
};
const cloneBuffer = function (buffer, isDeep) {
    if (isDeep) {
        const v1123 = buffer.slice();
        return v1123;
    }
    const v1124 = buffer.length;
    var result = new buffer.constructor(v1124);
    const v1125 = buffer.copy(result);
    v1125;
    return result;
};
const cloneArrayBuffer = function (arrayBuffer) {
    const v1126 = arrayBuffer.byteLength;
    var result = new arrayBuffer.constructor(v1126);
    const v1127 = new Uint8Array(result);
    const v1128 = new Uint8Array(arrayBuffer);
    const v1129 = v1127.set(v1128);
    v1129;
    return result;
};
const cloneDataView = function (dataView, isDeep) {
    let buffer;
    const v1130 = dataView.buffer;
    const v1131 = cloneArrayBuffer(v1130);
    const v1132 = dataView.buffer;
    if (isDeep) {
        buffer = v1131;
    } else {
        buffer = v1132;
    }
    const v1133 = dataView.byteOffset;
    const v1134 = dataView.byteLength;
    const v1135 = new dataView.constructor(buffer, v1133, v1134);
    return v1135;
};
const cloneMap = function (map, isDeep, cloneFunc) {
    let array;
    const v1136 = mapToArray(map);
    const v1137 = cloneFunc(v1136, true);
    const v1138 = mapToArray(map);
    if (isDeep) {
        array = v1137;
    } else {
        array = v1138;
    }
    const v1139 = new map.constructor();
    const v1140 = arrayReduce(array, addMapEntry, v1139);
    return v1140;
};
const cloneRegExp = function (regexp) {
    const v1141 = regexp.source;
    const v1142 = reFlags.exec(regexp);
    var result = new regexp.constructor(v1141, v1142);
    const v1143 = regexp.lastIndex;
    result.lastIndex = v1143;
    return result;
};
const cloneSet = function (set, isDeep, cloneFunc) {
    let array;
    const v1144 = setToArray(set);
    const v1145 = cloneFunc(v1144, true);
    const v1146 = setToArray(set);
    if (isDeep) {
        array = v1145;
    } else {
        array = v1146;
    }
    const v1147 = new set.constructor();
    const v1148 = arrayReduce(array, addSetEntry, v1147);
    return v1148;
};
const cloneSymbol = function (symbol) {
    const v1149 = symbolValueOf.call(symbol);
    const v1150 = Object(v1149);
    const v1151 = {};
    let v1152;
    if (symbolValueOf) {
        v1152 = v1150;
    } else {
        v1152 = v1151;
    }
    return v1152;
};
const cloneTypedArray = function (typedArray, isDeep) {
    let buffer;
    const v1153 = typedArray.buffer;
    const v1154 = cloneArrayBuffer(v1153);
    const v1155 = typedArray.buffer;
    if (isDeep) {
        buffer = v1154;
    } else {
        buffer = v1155;
    }
    const v1156 = typedArray.byteOffset;
    const v1157 = typedArray.length;
    const v1158 = new typedArray.constructor(buffer, v1156, v1157);
    return v1158;
};
const copyArray = function (source, array) {
    const v1159 = -1;
    var index = v1159;
    var length = source.length;
    const v1160 = array || (array = Array(length));
    v1160;
    const v1161 = ++index;
    let v1162 = v1161 < length;
    while (v1162) {
        const v1163 = source[index];
        array[index] = v1163;
        v1162 = v1161 < length;
    }
    return array;
};
const copyObject = function (source, props, object, customizer) {
    const v1164 = object || (object = {});
    v1164;
    const v1165 = -1;
    var index = v1165;
    var length = props.length;
    const v1166 = ++index;
    let v1167 = v1166 < length;
    while (v1167) {
        var key = props[index];
        let newValue;
        const v1168 = object[key];
        const v1169 = source[key];
        const v1170 = customizer(v1168, v1169, key, object, source);
        if (customizer) {
            newValue = v1170;
        } else {
            newValue = undefined;
        }
        const v1171 = newValue === undefined;
        const v1172 = source[key];
        let v1173;
        if (v1171) {
            v1173 = v1172;
        } else {
            v1173 = newValue;
        }
        const v1174 = assignValue(object, key, v1173);
        v1174;
        v1167 = v1166 < length;
    }
    return object;
};
const copySymbols = function (source, object) {
    const v1175 = getSymbols(source);
    const v1176 = copyObject(source, v1175, object);
    return v1176;
};
const createAssigner = function (assigner) {
    const v1197 = function (object, sources) {
        const v1177 = -1;
        var index = v1177;
        var length = sources.length;
        let customizer;
        const v1178 = length > 1;
        const v1179 = length - 1;
        const v1180 = sources[v1179];
        if (v1178) {
            customizer = v1180;
        } else {
            customizer = undefined;
        }
        let guard;
        const v1181 = length > 2;
        const v1182 = sources[2];
        if (v1181) {
            guard = v1182;
        } else {
            guard = undefined;
        }
        const v1183 = assigner.length;
        const v1184 = v1183 > 3;
        const v1185 = typeof customizer;
        const v1186 = v1185 == 'function';
        const v1187 = v1184 && v1186;
        const v1188 = length--;
        if (v1187) {
            customizer = (v1188, customizer);
        } else {
            customizer = undefined;
        }
        const v1189 = sources[0];
        const v1190 = sources[1];
        const v1191 = isIterateeCall(v1189, v1190, guard);
        const v1192 = guard && v1191;
        if (v1192) {
            const v1193 = length < 3;
            if (v1193) {
                customizer = undefined;
            } else {
                customizer = customizer;
            }
            length = 1;
        }
        object = Object(object);
        const v1194 = ++index;
        let v1195 = v1194 < length;
        while (v1195) {
            var source = sources[index];
            if (source) {
                const v1196 = assigner(object, source, index, customizer);
                v1196;
            }
            v1195 = v1194 < length;
        }
        return object;
    };
    const v1198 = baseRest(v1197);
    return v1198;
};
const getAllKeys = function (object) {
    const v1199 = baseGetAllKeys(object, keys, getSymbols);
    return v1199;
};
const getMapData = function (map, key) {
    var data = map.__data__;
    const v1200 = isKeyable(key);
    const v1201 = typeof key;
    const v1202 = v1201 == 'string';
    let v1203;
    if (v1202) {
        v1203 = 'string';
    } else {
        v1203 = 'hash';
    }
    const v1204 = data[v1203];
    const v1205 = data.map;
    let v1206;
    if (v1200) {
        v1206 = v1204;
    } else {
        v1206 = v1205;
    }
    return v1206;
};
const getNative = function (object, key) {
    var value = getValue(object, key);
    const v1207 = baseIsNative(value);
    let v1208;
    if (v1207) {
        v1208 = value;
    } else {
        v1208 = undefined;
    }
    return v1208;
};
let getSymbols;
const v1209 = overArg(nativeGetSymbols, Object);
if (nativeGetSymbols) {
    getSymbols = v1209;
} else {
    getSymbols = stubArray;
}
var getTag = baseGetTag;
const v1210 = new ArrayBuffer(1);
const v1211 = new DataView(v1210);
const v1212 = getTag(v1211);
const v1213 = v1212 != dataViewTag;
const v1214 = DataView && v1213;
const v1215 = new Map();
const v1216 = getTag(v1215);
const v1217 = v1216 != mapTag;
const v1218 = Map && v1217;
const v1219 = v1214 || v1218;
const v1220 = Promise.resolve();
const v1221 = getTag(v1220);
const v1222 = v1221 != promiseTag;
const v1223 = Promise && v1222;
const v1224 = v1219 || v1223;
const v1225 = new Set();
const v1226 = getTag(v1225);
const v1227 = v1226 != setTag;
const v1228 = Set && v1227;
const v1229 = v1224 || v1228;
const v1230 = new WeakMap();
const v1231 = getTag(v1230);
const v1232 = v1231 != weakMapTag;
const v1233 = WeakMap && v1232;
const v1234 = v1229 || v1233;
if (v1234) {
    const v1238 = function (value) {
        var result = objectToString.call(value);
        let Ctor;
        const v1235 = result == objectTag;
        const v1236 = value.constructor;
        if (v1235) {
            Ctor = v1236;
        } else {
            Ctor = undefined;
        }
        let ctorString;
        const v1237 = toSource(Ctor);
        if (Ctor) {
            ctorString = v1237;
        } else {
            ctorString = undefined;
        }
        if (ctorString) {
            switch (ctorString) {
            case dataViewCtorString:
                return dataViewTag;
            case mapCtorString:
                return mapTag;
            case promiseCtorString:
                return promiseTag;
            case setCtorString:
                return setTag;
            case weakMapCtorString:
                return weakMapTag;
            }
        }
        return result;
    };
    getTag = v1238;
}
const initCloneArray = function (array) {
    var length = array.length;
    var result = array.constructor(length);
    const v1239 = array[0];
    const v1240 = typeof v1239;
    const v1241 = v1240 == 'string';
    const v1242 = length && v1241;
    const v1243 = hasOwnProperty.call(array, 'index');
    const v1244 = v1242 && v1243;
    if (v1244) {
        const v1245 = array.index;
        result.index = v1245;
        const v1246 = array.input;
        result.input = v1246;
    }
    return result;
};
const initCloneObject = function (object) {
    const v1247 = object.constructor;
    const v1248 = typeof v1247;
    const v1249 = v1248 == 'function';
    const v1250 = isPrototype(object);
    const v1251 = !v1250;
    const v1252 = v1249 && v1251;
    const v1253 = getPrototype(object);
    const v1254 = baseCreate(v1253);
    const v1255 = {};
    let v1256;
    if (v1252) {
        v1256 = v1254;
    } else {
        v1256 = v1255;
    }
    return v1256;
};
const initCloneByTag = function (object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
    case arrayBufferTag:
        const v1257 = cloneArrayBuffer(object);
        return v1257;
    case boolTag:
    case dateTag:
        const v1258 = +object;
        const v1259 = new Ctor(v1258);
        return v1259;
    case dataViewTag:
        const v1260 = cloneDataView(object, isDeep);
        return v1260;
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
        const v1261 = cloneTypedArray(object, isDeep);
        return v1261;
    case mapTag:
        const v1262 = cloneMap(object, isDeep, cloneFunc);
        return v1262;
    case numberTag:
    case stringTag:
        const v1263 = new Ctor(object);
        return v1263;
    case regexpTag:
        const v1264 = cloneRegExp(object);
        return v1264;
    case setTag:
        const v1265 = cloneSet(object, isDeep, cloneFunc);
        return v1265;
    case symbolTag:
        const v1266 = cloneSymbol(object);
        return v1266;
    }
};
const isIndex = function (value, length) {
    const v1267 = length == null;
    if (v1267) {
        length = MAX_SAFE_INTEGER;
    } else {
        length = length;
    }
    const v1268 = !length;
    const v1269 = !v1268;
    const v1270 = typeof value;
    const v1271 = v1270 == 'number';
    const v1272 = reIsUint.test(value);
    const v1273 = v1271 || v1272;
    const v1274 = v1269 && v1273;
    const v1275 = -1;
    const v1276 = value > v1275;
    const v1277 = value % 1;
    const v1278 = v1277 == 0;
    const v1279 = v1276 && v1278;
    const v1280 = value < length;
    const v1281 = v1279 && v1280;
    const v1282 = v1274 && v1281;
    return v1282;
};
const isIterateeCall = function (value, index, object) {
    const v1283 = isObject(object);
    const v1284 = !v1283;
    if (v1284) {
        return false;
    }
    const v1285 = typeof index;
    var type = v1285;
    const v1286 = type == 'number';
    const v1287 = isArrayLike(object);
    const v1288 = object.length;
    const v1289 = isIndex(index, v1288);
    const v1290 = v1287 && v1289;
    const v1291 = type == 'string';
    const v1292 = index in object;
    const v1293 = v1291 && v1292;
    let v1294;
    if (v1286) {
        v1294 = v1290;
    } else {
        v1294 = v1293;
    }
    if (v1294) {
        const v1295 = object[index];
        const v1296 = eq(v1295, value);
        return v1296;
    }
    return false;
};
const isKeyable = function (value) {
    const v1297 = typeof value;
    var type = v1297;
    const v1298 = type == 'string';
    const v1299 = type == 'number';
    const v1300 = v1298 || v1299;
    const v1301 = type == 'symbol';
    const v1302 = v1300 || v1301;
    const v1303 = type == 'boolean';
    const v1304 = v1302 || v1303;
    const v1305 = value !== '__proto__';
    const v1306 = value === null;
    let v1307;
    if (v1304) {
        v1307 = v1305;
    } else {
        v1307 = v1306;
    }
    return v1307;
};
const isMasked = function (func) {
    const v1308 = !maskSrcKey;
    const v1309 = !v1308;
    const v1310 = maskSrcKey in func;
    const v1311 = v1309 && v1310;
    return v1311;
};
const isPrototype = function (value) {
    const v1312 = value.constructor;
    var Ctor = value && v1312;
    const v1313 = typeof Ctor;
    const v1314 = v1313 == 'function';
    const v1315 = Ctor.prototype;
    const v1316 = v1314 && v1315;
    var proto = v1316 || objectProto;
    const v1317 = value === proto;
    return v1317;
};
const mergeDefaults = function (objValue, srcValue, key, object, source, stack) {
    const v1318 = isObject(objValue);
    const v1319 = isObject(srcValue);
    const v1320 = v1318 && v1319;
    if (v1320) {
        const v1321 = stack.set(srcValue, objValue);
        v1321;
        const v1322 = baseMerge(objValue, srcValue, undefined, mergeDefaults, stack);
        v1322;
        const v1323 = stack['delete'](srcValue);
        v1323;
    }
    return objValue;
};
const nativeKeysIn = function (object) {
    var result = [];
    const v1324 = object != null;
    if (v1324) {
        let key;
        const v1325 = Object(object);
        for (key in v1325) {
            const v1326 = result.push(key);
            v1326;
        }
    }
    return result;
};
const toSource = function (func) {
    const v1327 = func != null;
    if (v1327) {
        try {
            const v1328 = funcToString.call(func);
            return v1328;
        } catch (e) {
        }
        try {
            const v1329 = func + '';
            return v1329;
        } catch (e) {
        }
    }
    return '';
};
const eq = function (value, other) {
    const v1330 = value === other;
    const v1331 = value !== value;
    const v1332 = other !== other;
    const v1333 = v1331 && v1332;
    const v1334 = v1330 || v1333;
    return v1334;
};
const isArguments = function (value) {
    const v1335 = isArrayLikeObject(value);
    const v1336 = hasOwnProperty.call(value, 'callee');
    const v1337 = v1335 && v1336;
    const v1338 = propertyIsEnumerable.call(value, 'callee');
    const v1339 = !v1338;
    const v1340 = objectToString.call(value);
    const v1341 = v1340 == argsTag;
    const v1342 = v1339 || v1341;
    const v1343 = v1337 && v1342;
    return v1343;
};
var isArray = Array.isArray;
const isArrayLike = function (value) {
    const v1344 = value != null;
    const v1345 = value.length;
    const v1346 = isLength(v1345);
    const v1347 = v1344 && v1346;
    const v1348 = isFunction(value);
    const v1349 = !v1348;
    const v1350 = v1347 && v1349;
    return v1350;
};
const isArrayLikeObject = function (value) {
    const v1351 = isObjectLike(value);
    const v1352 = isArrayLike(value);
    const v1353 = v1351 && v1352;
    return v1353;
};
var isBuffer = nativeIsBuffer || stubFalse;
const isFunction = function (value) {
    let tag;
    const v1354 = isObject(value);
    const v1355 = objectToString.call(value);
    if (v1354) {
        tag = v1355;
    } else {
        tag = '';
    }
    const v1356 = tag == funcTag;
    const v1357 = tag == genTag;
    const v1358 = v1356 || v1357;
    return v1358;
};
const isLength = function (value) {
    const v1359 = typeof value;
    const v1360 = v1359 == 'number';
    const v1361 = -1;
    const v1362 = value > v1361;
    const v1363 = v1360 && v1362;
    const v1364 = value % 1;
    const v1365 = v1364 == 0;
    const v1366 = v1363 && v1365;
    const v1367 = value <= MAX_SAFE_INTEGER;
    const v1368 = v1366 && v1367;
    return v1368;
};
const isObject = function (value) {
    const v1369 = typeof value;
    var type = v1369;
    const v1370 = !value;
    const v1371 = !v1370;
    const v1372 = type == 'object';
    const v1373 = type == 'function';
    const v1374 = v1372 || v1373;
    const v1375 = v1371 && v1374;
    return v1375;
};
const isObjectLike = function (value) {
    const v1376 = !value;
    const v1377 = !v1376;
    const v1378 = typeof value;
    const v1379 = v1378 == 'object';
    const v1380 = v1377 && v1379;
    return v1380;
};
const isPlainObject = function (value) {
    const v1381 = isObjectLike(value);
    const v1382 = !v1381;
    const v1383 = objectToString.call(value);
    const v1384 = v1383 != objectTag;
    const v1385 = v1382 || v1384;
    const v1386 = isHostObject(value);
    const v1387 = v1385 || v1386;
    if (v1387) {
        return false;
    }
    var proto = getPrototype(value);
    const v1388 = proto === null;
    if (v1388) {
        return true;
    }
    const v1389 = hasOwnProperty.call(proto, 'constructor');
    const v1390 = proto.constructor;
    var Ctor = v1389 && v1390;
    const v1391 = typeof Ctor;
    const v1392 = v1391 == 'function';
    const v1393 = Ctor instanceof Ctor;
    const v1394 = v1392 && v1393;
    const v1395 = funcToString.call(Ctor);
    const v1396 = v1395 == objectCtorString;
    const v1397 = v1394 && v1396;
    return v1397;
};
let isTypedArray;
const v1398 = baseUnary(nodeIsTypedArray);
if (nodeIsTypedArray) {
    isTypedArray = v1398;
} else {
    isTypedArray = baseIsTypedArray;
}
const toPlainObject = function (value) {
    const v1399 = keysIn(value);
    const v1400 = copyObject(value, v1399);
    return v1400;
};
const v1403 = function (args) {
    const v1401 = args.push(undefined, mergeDefaults);
    v1401;
    const v1402 = apply(mergeWith, undefined, args);
    return v1402;
};
var defaultsDeep = baseRest(v1403);
const keys = function (object) {
    const v1404 = isArrayLike(object);
    const v1405 = arrayLikeKeys(object);
    const v1406 = baseKeys(object);
    let v1407;
    if (v1404) {
        v1407 = v1405;
    } else {
        v1407 = v1406;
    }
    return v1407;
};
const keysIn = function (object) {
    const v1408 = isArrayLike(object);
    const v1409 = arrayLikeKeys(object, true);
    const v1410 = baseKeysIn(object);
    let v1411;
    if (v1408) {
        v1411 = v1409;
    } else {
        v1411 = v1410;
    }
    return v1411;
};
const v1413 = function (object, source, srcIndex, customizer) {
    const v1412 = baseMerge(object, source, srcIndex, customizer);
    v1412;
};
var mergeWith = createAssigner(v1413);
const stubArray = function () {
    const v1414 = [];
    return v1414;
};
const stubFalse = function () {
    return false;
};
module.exports = defaultsDeep;