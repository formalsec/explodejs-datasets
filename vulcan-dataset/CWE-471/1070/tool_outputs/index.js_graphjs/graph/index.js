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
const v703 = typeof global;
const v704 = v703 == 'object';
const v705 = v704 && global;
const v706 = global.Object;
const v707 = v706 === Object;
const v708 = v705 && v707;
var freeGlobal = v708 && global;
const v709 = typeof self;
const v710 = v709 == 'object';
const v711 = v710 && self;
const v712 = self.Object;
const v713 = v712 === Object;
const v714 = v711 && v713;
var freeSelf = v714 && self;
const v715 = freeGlobal || freeSelf;
const v716 = Function('return this');
const v717 = v716();
var root = v715 || v717;
const v718 = typeof exports;
const v719 = v718 == 'object';
const v720 = v719 && exports;
const v721 = exports.nodeType;
const v722 = !v721;
const v723 = v720 && v722;
var freeExports = v723 && exports;
const v724 = typeof module;
const v725 = v724 == 'object';
const v726 = freeExports && v725;
const v727 = v726 && module;
const v728 = module.nodeType;
const v729 = !v728;
const v730 = v727 && v729;
var freeModule = v730 && module;
const v731 = freeModule.exports;
const v732 = v731 === freeExports;
var moduleExports = freeModule && v732;
const v733 = freeGlobal.process;
var freeProcess = moduleExports && v733;
const v736 = function () {
    try {
        const v734 = freeProcess.binding('util');
        const v735 = freeProcess && v734;
        return v735;
    } catch (e) {
    }
};
var nodeUtil = v736();
const v737 = nodeUtil.isTypedArray;
var nodeIsTypedArray = nodeUtil && v737;
const addMapEntry = function (map, pair) {
    const v738 = pair[0];
    const v739 = pair[1];
    const v740 = map.set(v738, v739);
    v740;
    return map;
};
const addSetEntry = function (set, value) {
    const v741 = set.add(value);
    v741;
    return set;
};
const apply = function (func, thisArg, args) {
    const v742 = args.length;
    switch (v742) {
    case 0:
        const v743 = func.call(thisArg);
        return v743;
    case 1:
        const v744 = args[0];
        const v745 = func.call(thisArg, v744);
        return v745;
    case 2:
        const v746 = args[0];
        const v747 = args[1];
        const v748 = func.call(thisArg, v746, v747);
        return v748;
    case 3:
        const v749 = args[0];
        const v750 = args[1];
        const v751 = args[2];
        const v752 = func.call(thisArg, v749, v750, v751);
        return v752;
    }
    const v753 = func.apply(thisArg, args);
    return v753;
};
const arrayEach = function (array, iteratee) {
    const v754 = -1;
    var index = v754;
    let length;
    const v755 = array.length;
    if (array) {
        length = v755;
    } else {
        length = 0;
    }
    const v756 = ++index;
    let v757 = v756 < length;
    while (v757) {
        const v758 = array[index];
        const v759 = iteratee(v758, index, array);
        const v760 = v759 === false;
        if (v760) {
            break;
        }
        v757 = v756 < length;
    }
    return array;
};
const arrayPush = function (array, values) {
    const v761 = -1;
    var index = v761;
    var length = values.length;
    var offset = array.length;
    const v762 = ++index;
    let v763 = v762 < length;
    while (v763) {
        const v764 = offset + index;
        const v765 = values[index];
        array[v764] = v765;
        v763 = v762 < length;
    }
    return array;
};
const arrayReduce = function (array, iteratee, accumulator, initAccum) {
    const v766 = -1;
    var index = v766;
    let length;
    const v767 = array.length;
    if (array) {
        length = v767;
    } else {
        length = 0;
    }
    const v768 = initAccum && length;
    if (v768) {
        const v769 = ++index;
        accumulator = array[v769];
    }
    const v770 = ++index;
    let v771 = v770 < length;
    while (v771) {
        const v772 = array[index];
        accumulator = iteratee(accumulator, v772, index, array);
        v771 = v770 < length;
    }
    return accumulator;
};
const baseTimes = function (n, iteratee) {
    const v773 = -1;
    var index = v773;
    var result = Array(n);
    const v774 = ++index;
    let v775 = v774 < n;
    while (v775) {
        const v776 = iteratee(index);
        result[index] = v776;
        v775 = v774 < n;
    }
    return result;
};
const baseUnary = function (func) {
    const v778 = function (value) {
        const v777 = func(value);
        return v777;
    };
    return v778;
};
const getValue = function (object, key) {
    const v779 = object == null;
    const v780 = object[key];
    let v781;
    if (v779) {
        v781 = undefined;
    } else {
        v781 = v780;
    }
    return v781;
};
const isHostObject = function (value) {
    var result = false;
    const v782 = value != null;
    const v783 = value.toString;
    const v784 = typeof v783;
    const v785 = v784 != 'function';
    const v786 = v782 && v785;
    if (v786) {
        try {
            const v787 = value + '';
            const v788 = !v787;
            const v789 = !v788;
            result = v789;
        } catch (e) {
        }
    }
    return result;
};
const mapToArray = function (map) {
    const v790 = -1;
    var index = v790;
    const v791 = map.size;
    var result = Array(v791);
    const v793 = function (value, key) {
        const v792 = ++index;
        result[v792] = [
            key,
            value
        ];
    };
    const v794 = map.forEach(v793);
    v794;
    return result;
};
const overArg = function (func, transform) {
    const v797 = function (arg) {
        const v795 = transform(arg);
        const v796 = func(v795);
        return v796;
    };
    return v797;
};
const setToArray = function (set) {
    const v798 = -1;
    var index = v798;
    const v799 = set.size;
    var result = Array(v799);
    const v801 = function (value) {
        const v800 = ++index;
        result[v800] = value;
    };
    const v802 = set.forEach(v801);
    v802;
    return result;
};
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var coreJsData = root['__core-js_shared__'];
const v811 = function () {
    const v803 = coreJsData.keys;
    const v804 = coreJsData && v803;
    const v805 = coreJsData.keys;
    const v806 = v805.IE_PROTO;
    const v807 = v804 && v806;
    const v808 = v807 || '';
    var uid = /[^.]+$/.exec(v808);
    const v809 = 'Symbol(src)_1.' + uid;
    let v810;
    if (uid) {
        v810 = v809;
    } else {
        v810 = '';
    }
    return v810;
};
var maskSrcKey = v811();
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
var objectToString = objectProto.toString;
const v812 = funcToString.call(hasOwnProperty);
const v813 = v812.replace(reRegExpChar, '\\$&');
const v814 = v813.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?');
const v815 = '^' + v814;
const v816 = v815 + '$';
var reIsNative = RegExp(v816);
let Buffer;
const v817 = root.Buffer;
if (moduleExports) {
    Buffer = v817;
} else {
    Buffer = undefined;
}
var Symbol = root.Symbol;
var Uint8Array = root.Uint8Array;
const v818 = Object.getPrototypeOf;
var getPrototype = overArg(v818, Object);
var objectCreate = Object.create;
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
var nativeGetSymbols = Object.getOwnPropertySymbols;
let nativeIsBuffer;
const v819 = Buffer.isBuffer;
if (Buffer) {
    nativeIsBuffer = v819;
} else {
    nativeIsBuffer = undefined;
}
const v820 = Object.keys;
var nativeKeys = overArg(v820, Object);
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
const v821 = Symbol.prototype;
if (Symbol) {
    symbolProto = v821;
} else {
    symbolProto = undefined;
}
let symbolValueOf;
const v822 = symbolProto.valueOf;
if (symbolProto) {
    symbolValueOf = v822;
} else {
    symbolValueOf = undefined;
}
const Hash = function (entries) {
    const v823 = -1;
    var index = v823;
    let length;
    const v824 = entries.length;
    if (entries) {
        length = v824;
    } else {
        length = 0;
    }
    const v825 = this.clear();
    v825;
    const v826 = ++index;
    let v827 = v826 < length;
    while (v827) {
        var entry = entries[index];
        const v828 = entry[0];
        const v829 = entry[1];
        const v830 = this.set(v828, v829);
        v830;
        v827 = v826 < length;
    }
};
const hashClear = function () {
    const v831 = nativeCreate(null);
    const v832 = {};
    let v833;
    if (nativeCreate) {
        v833 = v831;
    } else {
        v833 = v832;
    }
    this.__data__ = v833;
};
const hashDelete = function (key) {
    const v834 = this.has(key);
    const v835 = this.__data__;
    const v836 = v835[key];
    const v837 = delete v836;
    const v838 = v834 && v837;
    return v838;
};
const hashGet = function (key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        const v839 = result === HASH_UNDEFINED;
        let v840;
        if (v839) {
            v840 = undefined;
        } else {
            v840 = result;
        }
        return v840;
    }
    const v841 = hasOwnProperty.call(data, key);
    const v842 = data[key];
    let v843;
    if (v841) {
        v843 = v842;
    } else {
        v843 = undefined;
    }
    return v843;
};
const hashHas = function (key) {
    var data = this.__data__;
    const v844 = data[key];
    const v845 = v844 !== undefined;
    const v846 = hasOwnProperty.call(data, key);
    let v847;
    if (nativeCreate) {
        v847 = v845;
    } else {
        v847 = v846;
    }
    return v847;
};
const hashSet = function (key, value) {
    var data = this.__data__;
    const v848 = value === undefined;
    const v849 = nativeCreate && v848;
    let v850;
    if (v849) {
        v850 = HASH_UNDEFINED;
    } else {
        v850 = value;
    }
    data[key] = v850;
    return this;
};
const v851 = Hash.prototype;
v851.clear = hashClear;
const v852 = Hash.prototype;
v852['delete'] = hashDelete;
const v853 = Hash.prototype;
v853.get = hashGet;
const v854 = Hash.prototype;
v854.has = hashHas;
const v855 = Hash.prototype;
v855.set = hashSet;
const ListCache = function (entries) {
    const v856 = -1;
    var index = v856;
    let length;
    const v857 = entries.length;
    if (entries) {
        length = v857;
    } else {
        length = 0;
    }
    const v858 = this.clear();
    v858;
    const v859 = ++index;
    let v860 = v859 < length;
    while (v860) {
        var entry = entries[index];
        const v861 = entry[0];
        const v862 = entry[1];
        const v863 = this.set(v861, v862);
        v863;
        v860 = v859 < length;
    }
};
const listCacheClear = function () {
    this.__data__ = [];
};
const listCacheDelete = function (key) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v864 = index < 0;
    if (v864) {
        return false;
    }
    const v865 = data.length;
    var lastIndex = v865 - 1;
    const v866 = index == lastIndex;
    if (v866) {
        const v867 = data.pop();
        v867;
    } else {
        const v868 = splice.call(data, index, 1);
        v868;
    }
    return true;
};
const listCacheGet = function (key) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v869 = index < 0;
    const v870 = data[index];
    const v871 = v870[1];
    let v872;
    if (v869) {
        v872 = undefined;
    } else {
        v872 = v871;
    }
    return v872;
};
const listCacheHas = function (key) {
    const v873 = this.__data__;
    const v874 = assocIndexOf(v873, key);
    const v875 = -1;
    const v876 = v874 > v875;
    return v876;
};
const listCacheSet = function (key, value) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v877 = index < 0;
    if (v877) {
        const v878 = [
            key,
            value
        ];
        const v879 = data.push(v878);
        v879;
    } else {
        const v880 = data[index];
        v880[1] = value;
    }
    return this;
};
const v881 = ListCache.prototype;
v881.clear = listCacheClear;
const v882 = ListCache.prototype;
v882['delete'] = listCacheDelete;
const v883 = ListCache.prototype;
v883.get = listCacheGet;
const v884 = ListCache.prototype;
v884.has = listCacheHas;
const v885 = ListCache.prototype;
v885.set = listCacheSet;
const MapCache = function (entries) {
    const v886 = -1;
    var index = v886;
    let length;
    const v887 = entries.length;
    if (entries) {
        length = v887;
    } else {
        length = 0;
    }
    const v888 = this.clear();
    v888;
    const v889 = ++index;
    let v890 = v889 < length;
    while (v890) {
        var entry = entries[index];
        const v891 = entry[0];
        const v892 = entry[1];
        const v893 = this.set(v891, v892);
        v893;
        v890 = v889 < length;
    }
};
const mapCacheClear = function () {
    const v894 = new Hash();
    const v895 = Map || ListCache;
    const v896 = new v895();
    const v897 = new Hash();
    const v898 = {};
    v898['hash'] = v894;
    v898['map'] = v896;
    v898['string'] = v897;
    this.__data__ = v898;
};
const mapCacheDelete = function (key) {
    const v899 = getMapData(this, key);
    const v900 = v899['delete'](key);
    return v900;
};
const mapCacheGet = function (key) {
    const v901 = getMapData(this, key);
    const v902 = v901.get(key);
    return v902;
};
const mapCacheHas = function (key) {
    const v903 = getMapData(this, key);
    const v904 = v903.has(key);
    return v904;
};
const mapCacheSet = function (key, value) {
    const v905 = getMapData(this, key);
    const v906 = v905.set(key, value);
    v906;
    return this;
};
const v907 = MapCache.prototype;
v907.clear = mapCacheClear;
const v908 = MapCache.prototype;
v908['delete'] = mapCacheDelete;
const v909 = MapCache.prototype;
v909.get = mapCacheGet;
const v910 = MapCache.prototype;
v910.has = mapCacheHas;
const v911 = MapCache.prototype;
v911.set = mapCacheSet;
const Stack = function (entries) {
    this.__data__ = new ListCache(entries);
};
const stackClear = function () {
    this.__data__ = new ListCache();
};
const stackDelete = function (key) {
    const v912 = this.__data__;
    const v913 = v912['delete'](key);
    return v913;
};
const stackGet = function (key) {
    const v914 = this.__data__;
    const v915 = v914.get(key);
    return v915;
};
const stackHas = function (key) {
    const v916 = this.__data__;
    const v917 = v916.has(key);
    return v917;
};
const stackSet = function (key, value) {
    var cache = this.__data__;
    const v918 = cache instanceof ListCache;
    if (v918) {
        var pairs = cache.__data__;
        const v919 = !Map;
        const v920 = pairs.length;
        const v921 = LARGE_ARRAY_SIZE - 1;
        const v922 = v920 < v921;
        const v923 = v919 || v922;
        if (v923) {
            const v924 = [
                key,
                value
            ];
            const v925 = pairs.push(v924);
            v925;
            return this;
        }
        cache = this.__data__ = new MapCache(pairs);
    }
    const v926 = cache.set(key, value);
    v926;
    return this;
};
const v927 = Stack.prototype;
v927.clear = stackClear;
const v928 = Stack.prototype;
v928['delete'] = stackDelete;
const v929 = Stack.prototype;
v929.get = stackGet;
const v930 = Stack.prototype;
v930.has = stackHas;
const v931 = Stack.prototype;
v931.set = stackSet;
const arrayLikeKeys = function (value, inherited) {
    let result;
    const v932 = isArray(value);
    const v933 = isArguments(value);
    const v934 = v932 || v933;
    const v935 = value.length;
    const v936 = baseTimes(v935, String);
    const v937 = [];
    if (v934) {
        result = v936;
    } else {
        result = v937;
    }
    var length = result.length;
    const v938 = !length;
    const v939 = !v938;
    var skipIndexes = v939;
    let key;
    for (key in value) {
        const v940 = hasOwnProperty.call(value, key);
        const v941 = inherited || v940;
        const v942 = key == 'length';
        const v943 = isIndex(key, length);
        const v944 = v942 || v943;
        const v945 = skipIndexes && v944;
        const v946 = !v945;
        const v947 = v941 && v946;
        if (v947) {
            const v948 = result.push(key);
            v948;
        }
    }
    return result;
};
const assignMergeValue = function (object, key, value) {
    const v949 = value !== undefined;
    const v950 = object[key];
    const v951 = eq(v950, value);
    const v952 = !v951;
    const v953 = v949 && v952;
    const v954 = typeof key;
    const v955 = v954 == 'number';
    const v956 = value === undefined;
    const v957 = v955 && v956;
    const v958 = key in object;
    const v959 = !v958;
    const v960 = v957 && v959;
    const v961 = v953 || v960;
    if (v961) {
        object[key] = value;
    }
};
const assignValue = function (object, key, value) {
    var objValue = object[key];
    const v962 = hasOwnProperty.call(object, key);
    const v963 = eq(objValue, value);
    const v964 = v962 && v963;
    const v965 = !v964;
    const v966 = value === undefined;
    const v967 = key in object;
    const v968 = !v967;
    const v969 = v966 && v968;
    const v970 = v965 || v969;
    if (v970) {
        object[key] = value;
    }
};
const assocIndexOf = function (array, key) {
    var length = array.length;
    let v971 = length--;
    while (v971) {
        const v972 = array[length];
        const v973 = v972[0];
        const v974 = eq(v973, key);
        if (v974) {
            return length;
        }
        v971 = length--;
    }
    const v975 = -1;
    return v975;
};
const baseAssign = function (object, source) {
    const v976 = keys(source);
    const v977 = copyObject(source, v976, object);
    const v978 = object && v977;
    return v978;
};
const baseClone = function (value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
        const v979 = customizer(value, key, object, stack);
        const v980 = customizer(value);
        if (object) {
            result = v979;
        } else {
            result = v980;
        }
    }
    const v981 = result !== undefined;
    if (v981) {
        return result;
    }
    const v982 = isObject(value);
    const v983 = !v982;
    if (v983) {
        return value;
    }
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        const v984 = !isDeep;
        if (v984) {
            const v985 = copyArray(value, result);
            return v985;
        }
    } else {
        var tag = getTag(value);
        const v986 = tag == funcTag;
        const v987 = tag == genTag;
        var isFunc = v986 || v987;
        const v988 = isBuffer(value);
        if (v988) {
            const v989 = cloneBuffer(value, isDeep);
            return v989;
        }
        const v990 = tag == objectTag;
        const v991 = tag == argsTag;
        const v992 = v990 || v991;
        const v993 = !object;
        const v994 = isFunc && v993;
        const v995 = v992 || v994;
        if (v995) {
            const v996 = isHostObject(value);
            if (v996) {
                const v997 = {};
                let v998;
                if (object) {
                    v998 = value;
                } else {
                    v998 = v997;
                }
                return v998;
            }
            const v999 = {};
            let v1000;
            if (isFunc) {
                v1000 = v999;
            } else {
                v1000 = value;
            }
            result = initCloneObject(v1000);
            const v1001 = !isDeep;
            if (v1001) {
                const v1002 = baseAssign(result, value);
                const v1003 = copySymbols(value, v1002);
                return v1003;
            }
        } else {
            const v1004 = cloneableTags[tag];
            const v1005 = !v1004;
            if (v1005) {
                const v1006 = {};
                let v1007;
                if (object) {
                    v1007 = value;
                } else {
                    v1007 = v1006;
                }
                return v1007;
            }
            result = initCloneByTag(value, tag, baseClone, isDeep);
        }
    }
    const v1008 = stack || (stack = new Stack());
    v1008;
    var stacked = stack.get(value);
    if (stacked) {
        return stacked;
    }
    const v1009 = stack.set(value, result);
    v1009;
    const v1010 = !isArr;
    if (v1010) {
        let props;
        const v1011 = getAllKeys(value);
        const v1012 = keys(value);
        if (isFull) {
            props = v1011;
        } else {
            props = v1012;
        }
    }
    const v1013 = props || value;
    const v1016 = function (subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        const v1014 = baseClone(subValue, isDeep, isFull, customizer, key, value, stack);
        const v1015 = assignValue(result, key, v1014);
        v1015;
    };
    const v1017 = arrayEach(v1013, v1016);
    v1017;
    return result;
};
const baseCreate = function (proto) {
    const v1018 = isObject(proto);
    const v1019 = objectCreate(proto);
    const v1020 = {};
    let v1021;
    if (v1018) {
        v1021 = v1019;
    } else {
        v1021 = v1020;
    }
    return v1021;
};
const baseGetAllKeys = function (object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    const v1022 = isArray(object);
    const v1023 = symbolsFunc(object);
    const v1024 = arrayPush(result, v1023);
    let v1025;
    if (v1022) {
        v1025 = result;
    } else {
        v1025 = v1024;
    }
    return v1025;
};
const baseGetTag = function (value) {
    const v1026 = objectToString.call(value);
    return v1026;
};
const baseIsNative = function (value) {
    const v1027 = isObject(value);
    const v1028 = !v1027;
    const v1029 = isMasked(value);
    const v1030 = v1028 || v1029;
    if (v1030) {
        return false;
    }
    let pattern;
    const v1031 = isFunction(value);
    const v1032 = isHostObject(value);
    const v1033 = v1031 || v1032;
    if (v1033) {
        pattern = reIsNative;
    } else {
        pattern = reIsHostCtor;
    }
    const v1034 = toSource(value);
    const v1035 = pattern.test(v1034);
    return v1035;
};
const baseIsTypedArray = function (value) {
    const v1036 = isObjectLike(value);
    const v1037 = value.length;
    const v1038 = isLength(v1037);
    const v1039 = v1036 && v1038;
    const v1040 = objectToString.call(value);
    const v1041 = typedArrayTags[v1040];
    const v1042 = !v1041;
    const v1043 = !v1042;
    const v1044 = v1039 && v1043;
    return v1044;
};
const baseKeys = function (object) {
    const v1045 = isPrototype(object);
    const v1046 = !v1045;
    if (v1046) {
        const v1047 = nativeKeys(object);
        return v1047;
    }
    var result = [];
    let key;
    const v1048 = Object(object);
    for (key in v1048) {
        const v1049 = hasOwnProperty.call(object, key);
        const v1050 = key != 'constructor';
        const v1051 = v1049 && v1050;
        if (v1051) {
            const v1052 = result.push(key);
            v1052;
        }
    }
    return result;
};
const baseKeysIn = function (object) {
    const v1053 = isObject(object);
    const v1054 = !v1053;
    if (v1054) {
        const v1055 = nativeKeysIn(object);
        return v1055;
    }
    var isProto = isPrototype(object);
    var result = [];
    let key;
    for (key in object) {
        const v1056 = key == 'constructor';
        const v1057 = hasOwnProperty.call(object, key);
        const v1058 = !v1057;
        const v1059 = isProto || v1058;
        const v1060 = v1056 && v1059;
        const v1061 = !v1060;
        if (v1061) {
            const v1062 = result.push(key);
            v1062;
        }
    }
    return result;
};
const baseMerge = function (object, source, srcIndex, customizer, stack) {
    const v1063 = object === source;
    if (v1063) {
        return;
    }
    const v1064 = isArray(source);
    const v1065 = isTypedArray(source);
    const v1066 = v1064 || v1065;
    const v1067 = !v1066;
    if (v1067) {
        var props = baseKeysIn(source);
    }
    const v1068 = props || source;
    const v1077 = function (srcValue, key) {
        if (props) {
            key = srcValue;
            srcValue = source[key];
        }
        const v1069 = isObject(srcValue);
        if (v1069) {
            const v1070 = stack || (stack = new Stack());
            v1070;
            const v1071 = baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            v1071;
        } else {
            let newValue;
            const v1072 = object[key];
            const v1073 = key + '';
            const v1074 = customizer(v1072, srcValue, v1073, object, source, stack);
            if (customizer) {
                newValue = v1074;
            } else {
                newValue = undefined;
            }
            const v1075 = newValue === undefined;
            if (v1075) {
                newValue = srcValue;
            }
            const v1076 = assignMergeValue(object, key, newValue);
            v1076;
        }
    };
    const v1078 = arrayEach(v1068, v1077);
    v1078;
};
const baseMergeDeep = function (object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = object[key];
    var srcValue = source[key];
    var stacked = stack.get(srcValue);
    if (stacked) {
        const v1079 = assignMergeValue(object, key, stacked);
        v1079;
        return;
    }
    let newValue;
    const v1080 = key + '';
    const v1081 = customizer(objValue, srcValue, v1080, object, source, stack);
    if (customizer) {
        newValue = v1081;
    } else {
        newValue = undefined;
    }
    var isCommon = newValue === undefined;
    if (isCommon) {
        newValue = srcValue;
        const v1082 = isArray(srcValue);
        const v1083 = isTypedArray(srcValue);
        const v1084 = v1082 || v1083;
        if (v1084) {
            const v1085 = isArray(objValue);
            if (v1085) {
                newValue = objValue;
            } else {
                const v1086 = isArrayLikeObject(objValue);
                if (v1086) {
                    newValue = copyArray(objValue);
                } else {
                    isCommon = false;
                    newValue = baseClone(srcValue, true);
                }
            }
        } else {
            const v1087 = isPlainObject(srcValue);
            const v1088 = isArguments(srcValue);
            const v1089 = v1087 || v1088;
            if (v1089) {
                const v1090 = isArguments(objValue);
                if (v1090) {
                    newValue = toPlainObject(objValue);
                } else {
                    const v1091 = isObject(objValue);
                    const v1092 = !v1091;
                    const v1093 = isFunction(objValue);
                    const v1094 = srcIndex && v1093;
                    const v1095 = v1092 || v1094;
                    if (v1095) {
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
        const v1096 = stack.set(srcValue, newValue);
        v1096;
        const v1097 = mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        v1097;
        const v1098 = stack['delete'](srcValue);
        v1098;
    }
    const v1099 = assignMergeValue(object, key, newValue);
    v1099;
};
const baseRest = function (func, start) {
    const v1100 = start === undefined;
    const v1101 = func.length;
    const v1102 = v1101 - 1;
    let v1103;
    if (v1100) {
        v1103 = v1102;
    } else {
        v1103 = start;
    }
    start = nativeMax(v1103, 0);
    const v1117 = function () {
        var args = arguments;
        const v1104 = -1;
        var index = v1104;
        const v1105 = args.length;
        const v1106 = v1105 - start;
        var length = nativeMax(v1106, 0);
        var array = new Array(length);
        const v1107 = ++index;
        let v1108 = v1107 < length;
        while (v1108) {
            const v1109 = start + index;
            const v1110 = args[v1109];
            array[index] = v1110;
            v1108 = v1107 < length;
        }
        const v1111 = -1;
        index = v1111;
        const v1112 = start + 1;
        var otherArgs = new Array(v1112);
        const v1113 = ++index;
        let v1114 = v1113 < start;
        while (v1114) {
            const v1115 = args[index];
            otherArgs[index] = v1115;
            v1114 = v1113 < start;
        }
        otherArgs[start] = array;
        const v1116 = func(this, otherArgs);
        return v1116;
    };
    return v1117;
};
const cloneBuffer = function (buffer, isDeep) {
    if (isDeep) {
        const v1118 = buffer.slice();
        return v1118;
    }
    const v1119 = buffer.length;
    var result = new buffer.constructor(v1119);
    const v1120 = buffer.copy(result);
    v1120;
    return result;
};
const cloneArrayBuffer = function (arrayBuffer) {
    const v1121 = arrayBuffer.byteLength;
    var result = new arrayBuffer.constructor(v1121);
    const v1122 = new Uint8Array(result);
    const v1123 = new Uint8Array(arrayBuffer);
    const v1124 = v1122.set(v1123);
    v1124;
    return result;
};
const cloneDataView = function (dataView, isDeep) {
    let buffer;
    const v1125 = dataView.buffer;
    const v1126 = cloneArrayBuffer(v1125);
    const v1127 = dataView.buffer;
    if (isDeep) {
        buffer = v1126;
    } else {
        buffer = v1127;
    }
    const v1128 = dataView.byteOffset;
    const v1129 = dataView.byteLength;
    const v1130 = new dataView.constructor(buffer, v1128, v1129);
    return v1130;
};
const cloneMap = function (map, isDeep, cloneFunc) {
    let array;
    const v1131 = mapToArray(map);
    const v1132 = cloneFunc(v1131, true);
    const v1133 = mapToArray(map);
    if (isDeep) {
        array = v1132;
    } else {
        array = v1133;
    }
    const v1134 = new map.constructor();
    const v1135 = arrayReduce(array, addMapEntry, v1134);
    return v1135;
};
const cloneRegExp = function (regexp) {
    const v1136 = regexp.source;
    const v1137 = reFlags.exec(regexp);
    var result = new regexp.constructor(v1136, v1137);
    const v1138 = regexp.lastIndex;
    result.lastIndex = v1138;
    return result;
};
const cloneSet = function (set, isDeep, cloneFunc) {
    let array;
    const v1139 = setToArray(set);
    const v1140 = cloneFunc(v1139, true);
    const v1141 = setToArray(set);
    if (isDeep) {
        array = v1140;
    } else {
        array = v1141;
    }
    const v1142 = new set.constructor();
    const v1143 = arrayReduce(array, addSetEntry, v1142);
    return v1143;
};
const cloneSymbol = function (symbol) {
    const v1144 = symbolValueOf.call(symbol);
    const v1145 = Object(v1144);
    const v1146 = {};
    let v1147;
    if (symbolValueOf) {
        v1147 = v1145;
    } else {
        v1147 = v1146;
    }
    return v1147;
};
const cloneTypedArray = function (typedArray, isDeep) {
    let buffer;
    const v1148 = typedArray.buffer;
    const v1149 = cloneArrayBuffer(v1148);
    const v1150 = typedArray.buffer;
    if (isDeep) {
        buffer = v1149;
    } else {
        buffer = v1150;
    }
    const v1151 = typedArray.byteOffset;
    const v1152 = typedArray.length;
    const v1153 = new typedArray.constructor(buffer, v1151, v1152);
    return v1153;
};
const copyArray = function (source, array) {
    const v1154 = -1;
    var index = v1154;
    var length = source.length;
    const v1155 = array || (array = Array(length));
    v1155;
    const v1156 = ++index;
    let v1157 = v1156 < length;
    while (v1157) {
        const v1158 = source[index];
        array[index] = v1158;
        v1157 = v1156 < length;
    }
    return array;
};
const copyObject = function (source, props, object, customizer) {
    const v1159 = object || (object = {});
    v1159;
    const v1160 = -1;
    var index = v1160;
    var length = props.length;
    const v1161 = ++index;
    let v1162 = v1161 < length;
    while (v1162) {
        var key = props[index];
        let newValue;
        const v1163 = object[key];
        const v1164 = source[key];
        const v1165 = customizer(v1163, v1164, key, object, source);
        if (customizer) {
            newValue = v1165;
        } else {
            newValue = undefined;
        }
        const v1166 = newValue === undefined;
        const v1167 = source[key];
        let v1168;
        if (v1166) {
            v1168 = v1167;
        } else {
            v1168 = newValue;
        }
        const v1169 = assignValue(object, key, v1168);
        v1169;
        v1162 = v1161 < length;
    }
    return object;
};
const copySymbols = function (source, object) {
    const v1170 = getSymbols(source);
    const v1171 = copyObject(source, v1170, object);
    return v1171;
};
const createAssigner = function (assigner) {
    const v1192 = function (object, sources) {
        const v1172 = -1;
        var index = v1172;
        var length = sources.length;
        let customizer;
        const v1173 = length > 1;
        const v1174 = length - 1;
        const v1175 = sources[v1174];
        if (v1173) {
            customizer = v1175;
        } else {
            customizer = undefined;
        }
        let guard;
        const v1176 = length > 2;
        const v1177 = sources[2];
        if (v1176) {
            guard = v1177;
        } else {
            guard = undefined;
        }
        const v1178 = assigner.length;
        const v1179 = v1178 > 3;
        const v1180 = typeof customizer;
        const v1181 = v1180 == 'function';
        const v1182 = v1179 && v1181;
        const v1183 = length--;
        if (v1182) {
            customizer = (v1183, customizer);
        } else {
            customizer = undefined;
        }
        const v1184 = sources[0];
        const v1185 = sources[1];
        const v1186 = isIterateeCall(v1184, v1185, guard);
        const v1187 = guard && v1186;
        if (v1187) {
            const v1188 = length < 3;
            if (v1188) {
                customizer = undefined;
            } else {
                customizer = customizer;
            }
            length = 1;
        }
        object = Object(object);
        const v1189 = ++index;
        let v1190 = v1189 < length;
        while (v1190) {
            var source = sources[index];
            if (source) {
                const v1191 = assigner(object, source, index, customizer);
                v1191;
            }
            v1190 = v1189 < length;
        }
        return object;
    };
    const v1193 = baseRest(v1192);
    return v1193;
};
const getAllKeys = function (object) {
    const v1194 = baseGetAllKeys(object, keys, getSymbols);
    return v1194;
};
const getMapData = function (map, key) {
    var data = map.__data__;
    const v1195 = isKeyable(key);
    const v1196 = typeof key;
    const v1197 = v1196 == 'string';
    let v1198;
    if (v1197) {
        v1198 = 'string';
    } else {
        v1198 = 'hash';
    }
    const v1199 = data[v1198];
    const v1200 = data.map;
    let v1201;
    if (v1195) {
        v1201 = v1199;
    } else {
        v1201 = v1200;
    }
    return v1201;
};
const getNative = function (object, key) {
    var value = getValue(object, key);
    const v1202 = baseIsNative(value);
    let v1203;
    if (v1202) {
        v1203 = value;
    } else {
        v1203 = undefined;
    }
    return v1203;
};
let getSymbols;
const v1204 = overArg(nativeGetSymbols, Object);
if (nativeGetSymbols) {
    getSymbols = v1204;
} else {
    getSymbols = stubArray;
}
var getTag = baseGetTag;
const v1205 = new ArrayBuffer(1);
const v1206 = new DataView(v1205);
const v1207 = getTag(v1206);
const v1208 = v1207 != dataViewTag;
const v1209 = DataView && v1208;
const v1210 = new Map();
const v1211 = getTag(v1210);
const v1212 = v1211 != mapTag;
const v1213 = Map && v1212;
const v1214 = v1209 || v1213;
const v1215 = new Set();
const v1216 = getTag(v1215);
const v1217 = v1216 != setTag;
const v1218 = Set && v1217;
const v1219 = v1214 || v1218;
const v1220 = new WeakMap();
const v1221 = getTag(v1220);
const v1222 = v1221 != weakMapTag;
const v1223 = WeakMap && v1222;
const v1224 = v1219 || v1223;
if (v1224) {
    const v1228 = function (value) {
        var result = objectToString.call(value);
        let Ctor;
        const v1225 = result == objectTag;
        const v1226 = value.constructor;
        if (v1225) {
            Ctor = v1226;
        } else {
            Ctor = undefined;
        }
        let ctorString;
        const v1227 = toSource(Ctor);
        if (Ctor) {
            ctorString = v1227;
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
    getTag = v1228;
}
const initCloneArray = function (array) {
    var length = array.length;
    var result = array.constructor(length);
    const v1229 = array[0];
    const v1230 = typeof v1229;
    const v1231 = v1230 == 'string';
    const v1232 = length && v1231;
    const v1233 = hasOwnProperty.call(array, 'index');
    const v1234 = v1232 && v1233;
    if (v1234) {
        const v1235 = array.index;
        result.index = v1235;
        const v1236 = array.input;
        result.input = v1236;
    }
    return result;
};
const initCloneObject = function (object) {
    const v1237 = object.constructor;
    const v1238 = typeof v1237;
    const v1239 = v1238 == 'function';
    const v1240 = isPrototype(object);
    const v1241 = !v1240;
    const v1242 = v1239 && v1241;
    const v1243 = getPrototype(object);
    const v1244 = baseCreate(v1243);
    const v1245 = {};
    let v1246;
    if (v1242) {
        v1246 = v1244;
    } else {
        v1246 = v1245;
    }
    return v1246;
};
const initCloneByTag = function (object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
    case arrayBufferTag:
        const v1247 = cloneArrayBuffer(object);
        return v1247;
    case boolTag:
    case dateTag:
        const v1248 = +object;
        const v1249 = new Ctor(v1248);
        return v1249;
    case dataViewTag:
        const v1250 = cloneDataView(object, isDeep);
        return v1250;
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
        const v1251 = cloneTypedArray(object, isDeep);
        return v1251;
    case mapTag:
        const v1252 = cloneMap(object, isDeep, cloneFunc);
        return v1252;
    case numberTag:
    case stringTag:
        const v1253 = new Ctor(object);
        return v1253;
    case regexpTag:
        const v1254 = cloneRegExp(object);
        return v1254;
    case setTag:
        const v1255 = cloneSet(object, isDeep, cloneFunc);
        return v1255;
    case symbolTag:
        const v1256 = cloneSymbol(object);
        return v1256;
    }
};
const isIndex = function (value, length) {
    const v1257 = length == null;
    if (v1257) {
        length = MAX_SAFE_INTEGER;
    } else {
        length = length;
    }
    const v1258 = !length;
    const v1259 = !v1258;
    const v1260 = typeof value;
    const v1261 = v1260 == 'number';
    const v1262 = reIsUint.test(value);
    const v1263 = v1261 || v1262;
    const v1264 = v1259 && v1263;
    const v1265 = -1;
    const v1266 = value > v1265;
    const v1267 = value % 1;
    const v1268 = v1267 == 0;
    const v1269 = v1266 && v1268;
    const v1270 = value < length;
    const v1271 = v1269 && v1270;
    const v1272 = v1264 && v1271;
    return v1272;
};
const isIterateeCall = function (value, index, object) {
    const v1273 = isObject(object);
    const v1274 = !v1273;
    if (v1274) {
        return false;
    }
    const v1275 = typeof index;
    var type = v1275;
    const v1276 = type == 'number';
    const v1277 = isArrayLike(object);
    const v1278 = object.length;
    const v1279 = isIndex(index, v1278);
    const v1280 = v1277 && v1279;
    const v1281 = type == 'string';
    const v1282 = index in object;
    const v1283 = v1281 && v1282;
    let v1284;
    if (v1276) {
        v1284 = v1280;
    } else {
        v1284 = v1283;
    }
    if (v1284) {
        const v1285 = object[index];
        const v1286 = eq(v1285, value);
        return v1286;
    }
    return false;
};
const isKeyable = function (value) {
    const v1287 = typeof value;
    var type = v1287;
    const v1288 = type == 'string';
    const v1289 = type == 'number';
    const v1290 = v1288 || v1289;
    const v1291 = type == 'symbol';
    const v1292 = v1290 || v1291;
    const v1293 = type == 'boolean';
    const v1294 = v1292 || v1293;
    const v1295 = value !== '__proto__';
    const v1296 = value === null;
    let v1297;
    if (v1294) {
        v1297 = v1295;
    } else {
        v1297 = v1296;
    }
    return v1297;
};
const isMasked = function (func) {
    const v1298 = !maskSrcKey;
    const v1299 = !v1298;
    const v1300 = maskSrcKey in func;
    const v1301 = v1299 && v1300;
    return v1301;
};
const isPrototype = function (value) {
    const v1302 = value.constructor;
    var Ctor = value && v1302;
    const v1303 = typeof Ctor;
    const v1304 = v1303 == 'function';
    const v1305 = Ctor.prototype;
    const v1306 = v1304 && v1305;
    var proto = v1306 || objectProto;
    const v1307 = value === proto;
    return v1307;
};
const mergeDefaults = function (objValue, srcValue, key, object, source, stack) {
    const v1308 = isObject(objValue);
    const v1309 = isObject(srcValue);
    const v1310 = v1308 && v1309;
    if (v1310) {
        const v1311 = stack.set(srcValue, objValue);
        v1311;
        const v1312 = baseMerge(objValue, srcValue, undefined, mergeDefaults, stack);
        v1312;
        const v1313 = stack['delete'](srcValue);
        v1313;
    }
    return objValue;
};
const nativeKeysIn = function (object) {
    var result = [];
    const v1314 = object != null;
    if (v1314) {
        let key;
        const v1315 = Object(object);
        for (key in v1315) {
            const v1316 = result.push(key);
            v1316;
        }
    }
    return result;
};
const toSource = function (func) {
    const v1317 = func != null;
    if (v1317) {
        try {
            const v1318 = funcToString.call(func);
            return v1318;
        } catch (e) {
        }
        try {
            const v1319 = func + '';
            return v1319;
        } catch (e) {
        }
    }
    return '';
};
const eq = function (value, other) {
    const v1320 = value === other;
    const v1321 = value !== value;
    const v1322 = other !== other;
    const v1323 = v1321 && v1322;
    const v1324 = v1320 || v1323;
    return v1324;
};
const isArguments = function (value) {
    const v1325 = isArrayLikeObject(value);
    const v1326 = hasOwnProperty.call(value, 'callee');
    const v1327 = v1325 && v1326;
    const v1328 = propertyIsEnumerable.call(value, 'callee');
    const v1329 = !v1328;
    const v1330 = objectToString.call(value);
    const v1331 = v1330 == argsTag;
    const v1332 = v1329 || v1331;
    const v1333 = v1327 && v1332;
    return v1333;
};
var isArray = Array.isArray;
const isArrayLike = function (value) {
    const v1334 = value != null;
    const v1335 = value.length;
    const v1336 = isLength(v1335);
    const v1337 = v1334 && v1336;
    const v1338 = isFunction(value);
    const v1339 = !v1338;
    const v1340 = v1337 && v1339;
    return v1340;
};
const isArrayLikeObject = function (value) {
    const v1341 = isObjectLike(value);
    const v1342 = isArrayLike(value);
    const v1343 = v1341 && v1342;
    return v1343;
};
var isBuffer = nativeIsBuffer || stubFalse;
const isFunction = function (value) {
    let tag;
    const v1344 = isObject(value);
    const v1345 = objectToString.call(value);
    if (v1344) {
        tag = v1345;
    } else {
        tag = '';
    }
    const v1346 = tag == funcTag;
    const v1347 = tag == genTag;
    const v1348 = v1346 || v1347;
    return v1348;
};
const isLength = function (value) {
    const v1349 = typeof value;
    const v1350 = v1349 == 'number';
    const v1351 = -1;
    const v1352 = value > v1351;
    const v1353 = v1350 && v1352;
    const v1354 = value % 1;
    const v1355 = v1354 == 0;
    const v1356 = v1353 && v1355;
    const v1357 = value <= MAX_SAFE_INTEGER;
    const v1358 = v1356 && v1357;
    return v1358;
};
const isObject = function (value) {
    const v1359 = typeof value;
    var type = v1359;
    const v1360 = !value;
    const v1361 = !v1360;
    const v1362 = type == 'object';
    const v1363 = type == 'function';
    const v1364 = v1362 || v1363;
    const v1365 = v1361 && v1364;
    return v1365;
};
const isObjectLike = function (value) {
    const v1366 = !value;
    const v1367 = !v1366;
    const v1368 = typeof value;
    const v1369 = v1368 == 'object';
    const v1370 = v1367 && v1369;
    return v1370;
};
const isPlainObject = function (value) {
    const v1371 = isObjectLike(value);
    const v1372 = !v1371;
    const v1373 = objectToString.call(value);
    const v1374 = v1373 != objectTag;
    const v1375 = v1372 || v1374;
    const v1376 = isHostObject(value);
    const v1377 = v1375 || v1376;
    if (v1377) {
        return false;
    }
    var proto = getPrototype(value);
    const v1378 = proto === null;
    if (v1378) {
        return true;
    }
    const v1379 = hasOwnProperty.call(proto, 'constructor');
    const v1380 = proto.constructor;
    var Ctor = v1379 && v1380;
    const v1381 = typeof Ctor;
    const v1382 = v1381 == 'function';
    const v1383 = Ctor instanceof Ctor;
    const v1384 = v1382 && v1383;
    const v1385 = funcToString.call(Ctor);
    const v1386 = v1385 == objectCtorString;
    const v1387 = v1384 && v1386;
    return v1387;
};
let isTypedArray;
const v1388 = baseUnary(nodeIsTypedArray);
if (nodeIsTypedArray) {
    isTypedArray = v1388;
} else {
    isTypedArray = baseIsTypedArray;
}
const toPlainObject = function (value) {
    const v1389 = keysIn(value);
    const v1390 = copyObject(value, v1389);
    return v1390;
};
const v1393 = function (args) {
    const v1391 = args.push(undefined, mergeDefaults);
    v1391;
    const v1392 = mergeWith(undefined, args);
    return v1392;
};
var defaultsDeep = baseRest(v1393);
const keys = function (object) {
    const v1394 = isArrayLike(object);
    const v1395 = arrayLikeKeys(object);
    const v1396 = baseKeys(object);
    let v1397;
    if (v1394) {
        v1397 = v1395;
    } else {
        v1397 = v1396;
    }
    return v1397;
};
const keysIn = function (object) {
    const v1398 = isArrayLike(object);
    const v1399 = arrayLikeKeys(object, true);
    const v1400 = baseKeysIn(object);
    let v1401;
    if (v1398) {
        v1401 = v1399;
    } else {
        v1401 = v1400;
    }
    return v1401;
};
const v1403 = function (object, source, srcIndex, customizer) {
    const v1402 = baseMerge(object, source, srcIndex, customizer);
    v1402;
};
var mergeWith = createAssigner(v1403);
const stubArray = function () {
    const v1404 = [];
    return v1404;
};
const stubFalse = function () {
    return false;
};
module.exports = defaultsDeep;