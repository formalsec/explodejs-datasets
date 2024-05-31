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
const v699 = typeof global;
const v700 = v699 == 'object';
const v701 = v700 && global;
const v702 = global.Object;
const v703 = v702 === Object;
const v704 = v701 && v703;
var freeGlobal = v704 && global;
const v705 = typeof self;
const v706 = v705 == 'object';
const v707 = v706 && self;
const v708 = self.Object;
const v709 = v708 === Object;
const v710 = v707 && v709;
var freeSelf = v710 && self;
const v711 = freeGlobal || freeSelf;
const v712 = Function('return this');
const v713 = v712();
var root = v711 || v713;
const v714 = typeof exports;
const v715 = v714 == 'object';
const v716 = v715 && exports;
const v717 = exports.nodeType;
const v718 = !v717;
const v719 = v716 && v718;
var freeExports = v719 && exports;
const v720 = typeof module;
const v721 = v720 == 'object';
const v722 = freeExports && v721;
const v723 = v722 && module;
const v724 = module.nodeType;
const v725 = !v724;
const v726 = v723 && v725;
var freeModule = v726 && module;
const v727 = freeModule.exports;
const v728 = v727 === freeExports;
var moduleExports = freeModule && v728;
const v729 = freeGlobal.process;
var freeProcess = moduleExports && v729;
const v732 = function () {
    try {
        const v730 = freeProcess.binding('util');
        const v731 = freeProcess && v730;
        return v731;
    } catch (e) {
    }
};
var nodeUtil = v732();
const v733 = nodeUtil.isTypedArray;
var nodeIsTypedArray = nodeUtil && v733;
const addMapEntry = function (map, pair) {
    const v734 = pair[0];
    const v735 = pair[1];
    const v736 = map.set(v734, v735);
    v736;
    return map;
};
const addSetEntry = function (set, value) {
    const v737 = set.add(value);
    v737;
    return set;
};
const apply = function (func, thisArg, args) {
    const v738 = args.length;
    switch (v738) {
    case 0:
        const v739 = func.call(thisArg);
        return v739;
    case 1:
        const v740 = args[0];
        const v741 = func.call(thisArg, v740);
        return v741;
    case 2:
        const v742 = args[0];
        const v743 = args[1];
        const v744 = func.call(thisArg, v742, v743);
        return v744;
    case 3:
        const v745 = args[0];
        const v746 = args[1];
        const v747 = args[2];
        const v748 = func.call(thisArg, v745, v746, v747);
        return v748;
    }
    const v749 = func.apply(thisArg, args);
    return v749;
};
const arrayEach = function (array, iteratee) {
    const v750 = -1;
    var index = v750;
    let length;
    const v751 = array.length;
    if (array) {
        length = v751;
    } else {
        length = 0;
    }
    const v752 = ++index;
    let v753 = v752 < length;
    while (v753) {
        const v754 = array[index];
        const v755 = iteratee(v754, index, array);
        const v756 = v755 === false;
        if (v756) {
            break;
        }
        v753 = v752 < length;
    }
    return array;
};
const arrayPush = function (array, values) {
    const v757 = -1;
    var index = v757;
    var length = values.length;
    var offset = array.length;
    const v758 = ++index;
    let v759 = v758 < length;
    while (v759) {
        const v760 = offset + index;
        const v761 = values[index];
        array[v760] = v761;
        v759 = v758 < length;
    }
    return array;
};
const arrayReduce = function (array, iteratee, accumulator, initAccum) {
    const v762 = -1;
    var index = v762;
    let length;
    const v763 = array.length;
    if (array) {
        length = v763;
    } else {
        length = 0;
    }
    const v764 = initAccum && length;
    if (v764) {
        const v765 = ++index;
        accumulator = array[v765];
    }
    const v766 = ++index;
    let v767 = v766 < length;
    while (v767) {
        const v768 = array[index];
        accumulator = iteratee(accumulator, v768, index, array);
        v767 = v766 < length;
    }
    return accumulator;
};
const baseTimes = function (n, iteratee) {
    const v769 = -1;
    var index = v769;
    var result = Array(n);
    const v770 = ++index;
    let v771 = v770 < n;
    while (v771) {
        const v772 = iteratee(index);
        result[index] = v772;
        v771 = v770 < n;
    }
    return result;
};
const baseUnary = function (func) {
    const v774 = function (value) {
        const v773 = func(value);
        return v773;
    };
    return v774;
};
const getValue = function (object, key) {
    const v775 = object == null;
    const v776 = object[key];
    let v777;
    if (v775) {
        v777 = undefined;
    } else {
        v777 = v776;
    }
    return v777;
};
const isHostObject = function (value) {
    var result = false;
    const v778 = value != null;
    const v779 = value.toString;
    const v780 = typeof v779;
    const v781 = v780 != 'function';
    const v782 = v778 && v781;
    if (v782) {
        try {
            const v783 = value + '';
            const v784 = !v783;
            const v785 = !v784;
            result = v785;
        } catch (e) {
        }
    }
    return result;
};
const mapToArray = function (map) {
    const v786 = -1;
    var index = v786;
    const v787 = map.size;
    var result = Array(v787);
    const v789 = function (value, key) {
        const v788 = ++index;
        result[v788] = [
            key,
            value
        ];
    };
    const v790 = map.forEach(v789);
    v790;
    return result;
};
const overArg = function (func, transform) {
    const v793 = function (arg) {
        const v791 = transform(arg);
        const v792 = func(v791);
        return v792;
    };
    return v793;
};
const setToArray = function (set) {
    const v794 = -1;
    var index = v794;
    const v795 = set.size;
    var result = Array(v795);
    const v797 = function (value) {
        const v796 = ++index;
        result[v796] = value;
    };
    const v798 = set.forEach(v797);
    v798;
    return result;
};
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var coreJsData = root['__core-js_shared__'];
const v807 = function () {
    const v799 = coreJsData.keys;
    const v800 = coreJsData && v799;
    const v801 = coreJsData.keys;
    const v802 = v801.IE_PROTO;
    const v803 = v800 && v802;
    const v804 = v803 || '';
    var uid = /[^.]+$/.exec(v804);
    const v805 = 'Symbol(src)_1.' + uid;
    let v806;
    if (uid) {
        v806 = v805;
    } else {
        v806 = '';
    }
    return v806;
};
var maskSrcKey = v807();
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
var objectToString = objectProto.toString;
const v808 = funcToString.call(hasOwnProperty);
const v809 = v808.replace(reRegExpChar, '\\$&');
const v810 = v809.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?');
const v811 = '^' + v810;
const v812 = v811 + '$';
var reIsNative = RegExp(v812);
let Buffer;
const v813 = root.Buffer;
if (moduleExports) {
    Buffer = v813;
} else {
    Buffer = undefined;
}
var Symbol = root.Symbol;
var Uint8Array = root.Uint8Array;
const v814 = Object.getPrototypeOf;
var getPrototype = overArg(v814, Object);
var objectCreate = Object.create;
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
var nativeGetSymbols = Object.getOwnPropertySymbols;
let nativeIsBuffer;
const v815 = Buffer.isBuffer;
if (Buffer) {
    nativeIsBuffer = v815;
} else {
    nativeIsBuffer = undefined;
}
const v816 = Object.keys;
var nativeKeys = overArg(v816, Object);
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
const v817 = Symbol.prototype;
if (Symbol) {
    symbolProto = v817;
} else {
    symbolProto = undefined;
}
let symbolValueOf;
const v818 = symbolProto.valueOf;
if (symbolProto) {
    symbolValueOf = v818;
} else {
    symbolValueOf = undefined;
}
const Hash = function (entries) {
    const v819 = -1;
    var index = v819;
    let length;
    const v820 = entries.length;
    if (entries) {
        length = v820;
    } else {
        length = 0;
    }
    const v821 = this.clear();
    v821;
    const v822 = ++index;
    let v823 = v822 < length;
    while (v823) {
        var entry = entries[index];
        const v824 = entry[0];
        const v825 = entry[1];
        const v826 = this.set(v824, v825);
        v826;
        v823 = v822 < length;
    }
};
const hashClear = function () {
    const v827 = nativeCreate(null);
    const v828 = {};
    let v829;
    if (nativeCreate) {
        v829 = v827;
    } else {
        v829 = v828;
    }
    this.__data__ = v829;
};
const hashDelete = function (key) {
    const v830 = this.has(key);
    const v831 = this.__data__;
    const v832 = v831[key];
    const v833 = delete v832;
    const v834 = v830 && v833;
    return v834;
};
const hashGet = function (key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        const v835 = result === HASH_UNDEFINED;
        let v836;
        if (v835) {
            v836 = undefined;
        } else {
            v836 = result;
        }
        return v836;
    }
    const v837 = hasOwnProperty.call(data, key);
    const v838 = data[key];
    let v839;
    if (v837) {
        v839 = v838;
    } else {
        v839 = undefined;
    }
    return v839;
};
const hashHas = function (key) {
    var data = this.__data__;
    const v840 = data[key];
    const v841 = v840 !== undefined;
    const v842 = hasOwnProperty.call(data, key);
    let v843;
    if (nativeCreate) {
        v843 = v841;
    } else {
        v843 = v842;
    }
    return v843;
};
const hashSet = function (key, value) {
    var data = this.__data__;
    const v844 = value === undefined;
    const v845 = nativeCreate && v844;
    let v846;
    if (v845) {
        v846 = HASH_UNDEFINED;
    } else {
        v846 = value;
    }
    data[key] = v846;
    return this;
};
const v847 = Hash.prototype;
v847.clear = hashClear;
const v848 = Hash.prototype;
v848['delete'] = hashDelete;
const v849 = Hash.prototype;
v849.get = hashGet;
const v850 = Hash.prototype;
v850.has = hashHas;
const v851 = Hash.prototype;
v851.set = hashSet;
const ListCache = function (entries) {
    const v852 = -1;
    var index = v852;
    let length;
    const v853 = entries.length;
    if (entries) {
        length = v853;
    } else {
        length = 0;
    }
    const v854 = this.clear();
    v854;
    const v855 = ++index;
    let v856 = v855 < length;
    while (v856) {
        var entry = entries[index];
        const v857 = entry[0];
        const v858 = entry[1];
        const v859 = this.set(v857, v858);
        v859;
        v856 = v855 < length;
    }
};
const listCacheClear = function () {
    this.__data__ = [];
};
const listCacheDelete = function (key) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v860 = index < 0;
    if (v860) {
        return false;
    }
    const v861 = data.length;
    var lastIndex = v861 - 1;
    const v862 = index == lastIndex;
    if (v862) {
        const v863 = data.pop();
        v863;
    } else {
        const v864 = splice.call(data, index, 1);
        v864;
    }
    return true;
};
const listCacheGet = function (key) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v865 = index < 0;
    const v866 = data[index];
    const v867 = v866[1];
    let v868;
    if (v865) {
        v868 = undefined;
    } else {
        v868 = v867;
    }
    return v868;
};
const listCacheHas = function (key) {
    const v869 = this.__data__;
    const v870 = assocIndexOf(v869, key);
    const v871 = -1;
    const v872 = v870 > v871;
    return v872;
};
const listCacheSet = function (key, value) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v873 = index < 0;
    if (v873) {
        const v874 = [
            key,
            value
        ];
        const v875 = data.push(v874);
        v875;
    } else {
        const v876 = data[index];
        v876[1] = value;
    }
    return this;
};
const v877 = ListCache.prototype;
v877.clear = listCacheClear;
const v878 = ListCache.prototype;
v878['delete'] = listCacheDelete;
const v879 = ListCache.prototype;
v879.get = listCacheGet;
const v880 = ListCache.prototype;
v880.has = listCacheHas;
const v881 = ListCache.prototype;
v881.set = listCacheSet;
const MapCache = function (entries) {
    const v882 = -1;
    var index = v882;
    let length;
    const v883 = entries.length;
    if (entries) {
        length = v883;
    } else {
        length = 0;
    }
    const v884 = this.clear();
    v884;
    const v885 = ++index;
    let v886 = v885 < length;
    while (v886) {
        var entry = entries[index];
        const v887 = entry[0];
        const v888 = entry[1];
        const v889 = this.set(v887, v888);
        v889;
        v886 = v885 < length;
    }
};
const mapCacheClear = function () {
    const v890 = new Hash();
    const v891 = Map || ListCache;
    const v892 = new v891();
    const v893 = new Hash();
    const v894 = {};
    v894['hash'] = v890;
    v894['map'] = v892;
    v894['string'] = v893;
    this.__data__ = v894;
};
const mapCacheDelete = function (key) {
    const v895 = getMapData(this, key);
    const v896 = v895['delete'](key);
    return v896;
};
const mapCacheGet = function (key) {
    const v897 = getMapData(this, key);
    const v898 = v897.get(key);
    return v898;
};
const mapCacheHas = function (key) {
    const v899 = getMapData(this, key);
    const v900 = v899.has(key);
    return v900;
};
const mapCacheSet = function (key, value) {
    const v901 = getMapData(this, key);
    const v902 = v901.set(key, value);
    v902;
    return this;
};
const v903 = MapCache.prototype;
v903.clear = mapCacheClear;
const v904 = MapCache.prototype;
v904['delete'] = mapCacheDelete;
const v905 = MapCache.prototype;
v905.get = mapCacheGet;
const v906 = MapCache.prototype;
v906.has = mapCacheHas;
const v907 = MapCache.prototype;
v907.set = mapCacheSet;
const Stack = function (entries) {
    this.__data__ = new ListCache(entries);
};
const stackClear = function () {
    this.__data__ = new ListCache();
};
const stackDelete = function (key) {
    const v908 = this.__data__;
    const v909 = v908['delete'](key);
    return v909;
};
const stackGet = function (key) {
    const v910 = this.__data__;
    const v911 = v910.get(key);
    return v911;
};
const stackHas = function (key) {
    const v912 = this.__data__;
    const v913 = v912.has(key);
    return v913;
};
const stackSet = function (key, value) {
    var cache = this.__data__;
    const v914 = cache instanceof ListCache;
    if (v914) {
        var pairs = cache.__data__;
        const v915 = !Map;
        const v916 = pairs.length;
        const v917 = LARGE_ARRAY_SIZE - 1;
        const v918 = v916 < v917;
        const v919 = v915 || v918;
        if (v919) {
            const v920 = [
                key,
                value
            ];
            const v921 = pairs.push(v920);
            v921;
            return this;
        }
        cache = this.__data__ = new MapCache(pairs);
    }
    const v922 = cache.set(key, value);
    v922;
    return this;
};
const v923 = Stack.prototype;
v923.clear = stackClear;
const v924 = Stack.prototype;
v924['delete'] = stackDelete;
const v925 = Stack.prototype;
v925.get = stackGet;
const v926 = Stack.prototype;
v926.has = stackHas;
const v927 = Stack.prototype;
v927.set = stackSet;
const arrayLikeKeys = function (value, inherited) {
    let result;
    const v928 = isArray(value);
    const v929 = isArguments(value);
    const v930 = v928 || v929;
    const v931 = value.length;
    const v932 = baseTimes(v931, String);
    const v933 = [];
    if (v930) {
        result = v932;
    } else {
        result = v933;
    }
    var length = result.length;
    const v934 = !length;
    const v935 = !v934;
    var skipIndexes = v935;
    let key;
    for (key in value) {
        const v936 = hasOwnProperty.call(value, key);
        const v937 = inherited || v936;
        const v938 = key == 'length';
        const v939 = isIndex(key, length);
        const v940 = v938 || v939;
        const v941 = skipIndexes && v940;
        const v942 = !v941;
        const v943 = v937 && v942;
        if (v943) {
            const v944 = result.push(key);
            v944;
        }
    }
    return result;
};
const assignMergeValue = function (object, key, value) {
    const v945 = value !== undefined;
    const v946 = object[key];
    const v947 = eq(v946, value);
    const v948 = !v947;
    const v949 = v945 && v948;
    const v950 = typeof key;
    const v951 = v950 == 'number';
    const v952 = value === undefined;
    const v953 = v951 && v952;
    const v954 = key in object;
    const v955 = !v954;
    const v956 = v953 && v955;
    const v957 = v949 || v956;
    if (v957) {
        object[key] = value;
    }
};
const assignValue = function (object, key, value) {
    var objValue = object[key];
    const v958 = hasOwnProperty.call(object, key);
    const v959 = eq(objValue, value);
    const v960 = v958 && v959;
    const v961 = !v960;
    const v962 = value === undefined;
    const v963 = key in object;
    const v964 = !v963;
    const v965 = v962 && v964;
    const v966 = v961 || v965;
    if (v966) {
        object[key] = value;
    }
};
const assocIndexOf = function (array, key) {
    var length = array.length;
    let v967 = length--;
    while (v967) {
        const v968 = array[length];
        const v969 = v968[0];
        const v970 = eq(v969, key);
        if (v970) {
            return length;
        }
        v967 = length--;
    }
    const v971 = -1;
    return v971;
};
const baseAssign = function (object, source) {
    const v972 = keys(source);
    const v973 = copyObject(source, v972, object);
    const v974 = object && v973;
    return v974;
};
const baseClone = function (value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
        const v975 = customizer(value, key, object, stack);
        const v976 = customizer(value);
        if (object) {
            result = v975;
        } else {
            result = v976;
        }
    }
    const v977 = result !== undefined;
    if (v977) {
        return result;
    }
    const v978 = isObject(value);
    const v979 = !v978;
    if (v979) {
        return value;
    }
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        const v980 = !isDeep;
        if (v980) {
            const v981 = copyArray(value, result);
            return v981;
        }
    } else {
        var tag = getTag(value);
        const v982 = tag == funcTag;
        const v983 = tag == genTag;
        var isFunc = v982 || v983;
        const v984 = isBuffer(value);
        if (v984) {
            const v985 = cloneBuffer(value, isDeep);
            return v985;
        }
        const v986 = tag == objectTag;
        const v987 = tag == argsTag;
        const v988 = v986 || v987;
        const v989 = !object;
        const v990 = isFunc && v989;
        const v991 = v988 || v990;
        if (v991) {
            const v992 = isHostObject(value);
            if (v992) {
                const v993 = {};
                let v994;
                if (object) {
                    v994 = value;
                } else {
                    v994 = v993;
                }
                return v994;
            }
            const v995 = {};
            let v996;
            if (isFunc) {
                v996 = v995;
            } else {
                v996 = value;
            }
            result = initCloneObject(v996);
            const v997 = !isDeep;
            if (v997) {
                const v998 = baseAssign(result, value);
                const v999 = copySymbols(value, v998);
                return v999;
            }
        } else {
            const v1000 = cloneableTags[tag];
            const v1001 = !v1000;
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
            result = initCloneByTag(value, tag, baseClone, isDeep);
        }
    }
    const v1004 = stack || (stack = new Stack());
    v1004;
    var stacked = stack.get(value);
    if (stacked) {
        return stacked;
    }
    const v1005 = stack.set(value, result);
    v1005;
    const v1006 = !isArr;
    if (v1006) {
        let props;
        const v1007 = getAllKeys(value);
        const v1008 = keys(value);
        if (isFull) {
            props = v1007;
        } else {
            props = v1008;
        }
    }
    const v1009 = props || value;
    const v1012 = function (subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        const v1010 = baseClone(subValue, isDeep, isFull, customizer, key, value, stack);
        const v1011 = assignValue(result, key, v1010);
        v1011;
    };
    const v1013 = arrayEach(v1009, v1012);
    v1013;
    return result;
};
const baseCreate = function (proto) {
    const v1014 = isObject(proto);
    const v1015 = objectCreate(proto);
    const v1016 = {};
    let v1017;
    if (v1014) {
        v1017 = v1015;
    } else {
        v1017 = v1016;
    }
    return v1017;
};
const baseGetAllKeys = function (object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    const v1018 = isArray(object);
    const v1019 = symbolsFunc(object);
    const v1020 = arrayPush(result, v1019);
    let v1021;
    if (v1018) {
        v1021 = result;
    } else {
        v1021 = v1020;
    }
    return v1021;
};
const baseGetTag = function (value) {
    const v1022 = objectToString.call(value);
    return v1022;
};
const baseIsNative = function (value) {
    const v1023 = isObject(value);
    const v1024 = !v1023;
    const v1025 = isMasked(value);
    const v1026 = v1024 || v1025;
    if (v1026) {
        return false;
    }
    let pattern;
    const v1027 = isFunction(value);
    const v1028 = isHostObject(value);
    const v1029 = v1027 || v1028;
    if (v1029) {
        pattern = reIsNative;
    } else {
        pattern = reIsHostCtor;
    }
    const v1030 = toSource(value);
    const v1031 = pattern.test(v1030);
    return v1031;
};
const baseIsTypedArray = function (value) {
    const v1032 = isObjectLike(value);
    const v1033 = value.length;
    const v1034 = isLength(v1033);
    const v1035 = v1032 && v1034;
    const v1036 = objectToString.call(value);
    const v1037 = typedArrayTags[v1036];
    const v1038 = !v1037;
    const v1039 = !v1038;
    const v1040 = v1035 && v1039;
    return v1040;
};
const baseKeys = function (object) {
    const v1041 = isPrototype(object);
    const v1042 = !v1041;
    if (v1042) {
        const v1043 = nativeKeys(object);
        return v1043;
    }
    var result = [];
    let key;
    const v1044 = Object(object);
    for (key in v1044) {
        const v1045 = hasOwnProperty.call(object, key);
        const v1046 = key != 'constructor';
        const v1047 = v1045 && v1046;
        if (v1047) {
            const v1048 = result.push(key);
            v1048;
        }
    }
    return result;
};
const baseKeysIn = function (object) {
    const v1049 = isObject(object);
    const v1050 = !v1049;
    if (v1050) {
        const v1051 = nativeKeysIn(object);
        return v1051;
    }
    var isProto = isPrototype(object);
    var result = [];
    let key;
    for (key in object) {
        const v1052 = key == 'constructor';
        const v1053 = hasOwnProperty.call(object, key);
        const v1054 = !v1053;
        const v1055 = isProto || v1054;
        const v1056 = v1052 && v1055;
        const v1057 = !v1056;
        if (v1057) {
            const v1058 = result.push(key);
            v1058;
        }
    }
    return result;
};
const baseMerge = function (object, source, srcIndex, customizer, stack) {
    const v1059 = object === source;
    if (v1059) {
        return;
    }
    const v1060 = isArray(source);
    const v1061 = isTypedArray(source);
    const v1062 = v1060 || v1061;
    const v1063 = !v1062;
    if (v1063) {
        var props = baseKeysIn(source);
    }
    const v1064 = props || source;
    const v1073 = function (srcValue, key) {
        if (props) {
            key = srcValue;
            srcValue = source[key];
        }
        const v1065 = isObject(srcValue);
        if (v1065) {
            const v1066 = stack || (stack = new Stack());
            v1066;
            const v1067 = baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            v1067;
        } else {
            let newValue;
            const v1068 = object[key];
            const v1069 = key + '';
            const v1070 = customizer(v1068, srcValue, v1069, object, source, stack);
            if (customizer) {
                newValue = v1070;
            } else {
                newValue = undefined;
            }
            const v1071 = newValue === undefined;
            if (v1071) {
                newValue = srcValue;
            }
            const v1072 = assignMergeValue(object, key, newValue);
            v1072;
        }
    };
    const v1074 = arrayEach(v1064, v1073);
    v1074;
};
const baseMergeDeep = function (object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = object[key];
    var srcValue = source[key];
    var stacked = stack.get(srcValue);
    if (stacked) {
        const v1075 = assignMergeValue(object, key, stacked);
        v1075;
        return;
    }
    let newValue;
    const v1076 = key + '';
    const v1077 = customizer(objValue, srcValue, v1076, object, source, stack);
    if (customizer) {
        newValue = v1077;
    } else {
        newValue = undefined;
    }
    var isCommon = newValue === undefined;
    if (isCommon) {
        newValue = srcValue;
        const v1078 = isArray(srcValue);
        const v1079 = isTypedArray(srcValue);
        const v1080 = v1078 || v1079;
        if (v1080) {
            const v1081 = isArray(objValue);
            if (v1081) {
                newValue = objValue;
            } else {
                const v1082 = isArrayLikeObject(objValue);
                if (v1082) {
                    newValue = copyArray(objValue);
                } else {
                    isCommon = false;
                    newValue = baseClone(srcValue, true);
                }
            }
        } else {
            const v1083 = isPlainObject(srcValue);
            const v1084 = isArguments(srcValue);
            const v1085 = v1083 || v1084;
            if (v1085) {
                const v1086 = isArguments(objValue);
                if (v1086) {
                    newValue = toPlainObject(objValue);
                } else {
                    const v1087 = isObject(objValue);
                    const v1088 = !v1087;
                    const v1089 = isFunction(objValue);
                    const v1090 = srcIndex && v1089;
                    const v1091 = v1088 || v1090;
                    if (v1091) {
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
        const v1092 = stack.set(srcValue, newValue);
        v1092;
        const v1093 = mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        v1093;
        const v1094 = stack['delete'](srcValue);
        v1094;
    }
    const v1095 = assignMergeValue(object, key, newValue);
    v1095;
};
const baseRest = function (func, start) {
    const v1096 = start === undefined;
    const v1097 = func.length;
    const v1098 = v1097 - 1;
    let v1099;
    if (v1096) {
        v1099 = v1098;
    } else {
        v1099 = start;
    }
    start = nativeMax(v1099, 0);
    const v1113 = function () {
        var args = arguments;
        const v1100 = -1;
        var index = v1100;
        const v1101 = args.length;
        const v1102 = v1101 - start;
        var length = nativeMax(v1102, 0);
        var array = Array(length);
        const v1103 = ++index;
        let v1104 = v1103 < length;
        while (v1104) {
            const v1105 = start + index;
            const v1106 = args[v1105];
            array[index] = v1106;
            v1104 = v1103 < length;
        }
        const v1107 = -1;
        index = v1107;
        const v1108 = start + 1;
        var otherArgs = Array(v1108);
        const v1109 = ++index;
        let v1110 = v1109 < start;
        while (v1110) {
            const v1111 = args[index];
            otherArgs[index] = v1111;
            v1110 = v1109 < start;
        }
        otherArgs[start] = array;
        const v1112 = apply(func, this, otherArgs);
        return v1112;
    };
    return v1113;
};
const cloneBuffer = function (buffer, isDeep) {
    if (isDeep) {
        const v1114 = buffer.slice();
        return v1114;
    }
    const v1115 = buffer.length;
    var result = new buffer.constructor(v1115);
    const v1116 = buffer.copy(result);
    v1116;
    return result;
};
const cloneArrayBuffer = function (arrayBuffer) {
    const v1117 = arrayBuffer.byteLength;
    var result = new arrayBuffer.constructor(v1117);
    const v1118 = new Uint8Array(result);
    const v1119 = new Uint8Array(arrayBuffer);
    const v1120 = v1118.set(v1119);
    v1120;
    return result;
};
const cloneDataView = function (dataView, isDeep) {
    let buffer;
    const v1121 = dataView.buffer;
    const v1122 = cloneArrayBuffer(v1121);
    const v1123 = dataView.buffer;
    if (isDeep) {
        buffer = v1122;
    } else {
        buffer = v1123;
    }
    const v1124 = dataView.byteOffset;
    const v1125 = dataView.byteLength;
    const v1126 = new dataView.constructor(buffer, v1124, v1125);
    return v1126;
};
const cloneMap = function (map, isDeep, cloneFunc) {
    let array;
    const v1127 = mapToArray(map);
    const v1128 = cloneFunc(v1127, true);
    const v1129 = mapToArray(map);
    if (isDeep) {
        array = v1128;
    } else {
        array = v1129;
    }
    const v1130 = new map.constructor();
    const v1131 = arrayReduce(array, addMapEntry, v1130);
    return v1131;
};
const cloneRegExp = function (regexp) {
    const v1132 = regexp.source;
    const v1133 = reFlags.exec(regexp);
    var result = new regexp.constructor(v1132, v1133);
    const v1134 = regexp.lastIndex;
    result.lastIndex = v1134;
    return result;
};
const cloneSet = function (set, isDeep, cloneFunc) {
    let array;
    const v1135 = setToArray(set);
    const v1136 = cloneFunc(v1135, true);
    const v1137 = setToArray(set);
    if (isDeep) {
        array = v1136;
    } else {
        array = v1137;
    }
    const v1138 = new set.constructor();
    const v1139 = arrayReduce(array, addSetEntry, v1138);
    return v1139;
};
const cloneSymbol = function (symbol) {
    const v1140 = symbolValueOf.call(symbol);
    const v1141 = Object(v1140);
    const v1142 = {};
    let v1143;
    if (symbolValueOf) {
        v1143 = v1141;
    } else {
        v1143 = v1142;
    }
    return v1143;
};
const cloneTypedArray = function (typedArray, isDeep) {
    let buffer;
    const v1144 = typedArray.buffer;
    const v1145 = cloneArrayBuffer(v1144);
    const v1146 = typedArray.buffer;
    if (isDeep) {
        buffer = v1145;
    } else {
        buffer = v1146;
    }
    const v1147 = typedArray.byteOffset;
    const v1148 = typedArray.length;
    const v1149 = new typedArray.constructor(buffer, v1147, v1148);
    return v1149;
};
const copyArray = function (source, array) {
    const v1150 = -1;
    var index = v1150;
    var length = source.length;
    const v1151 = array || (array = Array(length));
    v1151;
    const v1152 = ++index;
    let v1153 = v1152 < length;
    while (v1153) {
        const v1154 = source[index];
        array[index] = v1154;
        v1153 = v1152 < length;
    }
    return array;
};
const copyObject = function (source, props, object, customizer) {
    const v1155 = object || (object = {});
    v1155;
    const v1156 = -1;
    var index = v1156;
    var length = props.length;
    const v1157 = ++index;
    let v1158 = v1157 < length;
    while (v1158) {
        var key = props[index];
        let newValue;
        const v1159 = object[key];
        const v1160 = source[key];
        const v1161 = customizer(v1159, v1160, key, object, source);
        if (customizer) {
            newValue = v1161;
        } else {
            newValue = undefined;
        }
        const v1162 = newValue === undefined;
        const v1163 = source[key];
        let v1164;
        if (v1162) {
            v1164 = v1163;
        } else {
            v1164 = newValue;
        }
        const v1165 = assignValue(object, key, v1164);
        v1165;
        v1158 = v1157 < length;
    }
    return object;
};
const copySymbols = function (source, object) {
    const v1166 = getSymbols(source);
    const v1167 = copyObject(source, v1166, object);
    return v1167;
};
const createAssigner = function (assigner) {
    const v1188 = function (object, sources) {
        const v1168 = -1;
        var index = v1168;
        var length = sources.length;
        let customizer;
        const v1169 = length > 1;
        const v1170 = length - 1;
        const v1171 = sources[v1170];
        if (v1169) {
            customizer = v1171;
        } else {
            customizer = undefined;
        }
        let guard;
        const v1172 = length > 2;
        const v1173 = sources[2];
        if (v1172) {
            guard = v1173;
        } else {
            guard = undefined;
        }
        const v1174 = assigner.length;
        const v1175 = v1174 > 3;
        const v1176 = typeof customizer;
        const v1177 = v1176 == 'function';
        const v1178 = v1175 && v1177;
        const v1179 = length--;
        if (v1178) {
            customizer = (v1179, customizer);
        } else {
            customizer = undefined;
        }
        const v1180 = sources[0];
        const v1181 = sources[1];
        const v1182 = isIterateeCall(v1180, v1181, guard);
        const v1183 = guard && v1182;
        if (v1183) {
            const v1184 = length < 3;
            if (v1184) {
                customizer = undefined;
            } else {
                customizer = customizer;
            }
            length = 1;
        }
        object = Object(object);
        const v1185 = ++index;
        let v1186 = v1185 < length;
        while (v1186) {
            var source = sources[index];
            if (source) {
                const v1187 = assigner(object, source, index, customizer);
                v1187;
            }
            v1186 = v1185 < length;
        }
        return object;
    };
    const v1189 = baseRest(v1188);
    return v1189;
};
const getAllKeys = function (object) {
    const v1190 = baseGetAllKeys(object, keys, getSymbols);
    return v1190;
};
const getMapData = function (map, key) {
    var data = map.__data__;
    const v1191 = isKeyable(key);
    const v1192 = typeof key;
    const v1193 = v1192 == 'string';
    let v1194;
    if (v1193) {
        v1194 = 'string';
    } else {
        v1194 = 'hash';
    }
    const v1195 = data[v1194];
    const v1196 = data.map;
    let v1197;
    if (v1191) {
        v1197 = v1195;
    } else {
        v1197 = v1196;
    }
    return v1197;
};
const getNative = function (object, key) {
    var value = getValue(object, key);
    const v1198 = baseIsNative(value);
    let v1199;
    if (v1198) {
        v1199 = value;
    } else {
        v1199 = undefined;
    }
    return v1199;
};
let getSymbols;
const v1200 = overArg(nativeGetSymbols, Object);
if (nativeGetSymbols) {
    getSymbols = v1200;
} else {
    getSymbols = stubArray;
}
var getTag = baseGetTag;
const v1201 = new ArrayBuffer(1);
const v1202 = new DataView(v1201);
const v1203 = getTag(v1202);
const v1204 = v1203 != dataViewTag;
const v1205 = DataView && v1204;
const v1206 = new Map();
const v1207 = getTag(v1206);
const v1208 = v1207 != mapTag;
const v1209 = Map && v1208;
const v1210 = v1205 || v1209;
const v1211 = Promise.resolve();
const v1212 = getTag(v1211);
const v1213 = v1212 != promiseTag;
const v1214 = Promise && v1213;
const v1215 = v1210 || v1214;
const v1216 = new Set();
const v1217 = getTag(v1216);
const v1218 = v1217 != setTag;
const v1219 = Set && v1218;
const v1220 = v1215 || v1219;
const v1221 = new WeakMap();
const v1222 = getTag(v1221);
const v1223 = v1222 != weakMapTag;
const v1224 = WeakMap && v1223;
const v1225 = v1220 || v1224;
if (v1225) {
    const v1229 = function (value) {
        var result = objectToString.call(value);
        let Ctor;
        const v1226 = result == objectTag;
        const v1227 = value.constructor;
        if (v1226) {
            Ctor = v1227;
        } else {
            Ctor = undefined;
        }
        let ctorString;
        const v1228 = toSource(Ctor);
        if (Ctor) {
            ctorString = v1228;
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
    getTag = v1229;
}
const initCloneArray = function (array) {
    var length = array.length;
    var result = array.constructor(length);
    const v1230 = array[0];
    const v1231 = typeof v1230;
    const v1232 = v1231 == 'string';
    const v1233 = length && v1232;
    const v1234 = hasOwnProperty.call(array, 'index');
    const v1235 = v1233 && v1234;
    if (v1235) {
        const v1236 = array.index;
        result.index = v1236;
        const v1237 = array.input;
        result.input = v1237;
    }
    return result;
};
const initCloneObject = function (object) {
    const v1238 = object.constructor;
    const v1239 = typeof v1238;
    const v1240 = v1239 == 'function';
    const v1241 = isPrototype(object);
    const v1242 = !v1241;
    const v1243 = v1240 && v1242;
    const v1244 = getPrototype(object);
    const v1245 = baseCreate(v1244);
    const v1246 = {};
    let v1247;
    if (v1243) {
        v1247 = v1245;
    } else {
        v1247 = v1246;
    }
    return v1247;
};
const initCloneByTag = function (object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
    case arrayBufferTag:
        const v1248 = cloneArrayBuffer(object);
        return v1248;
    case boolTag:
    case dateTag:
        const v1249 = +object;
        const v1250 = new Ctor(v1249);
        return v1250;
    case dataViewTag:
        const v1251 = cloneDataView(object, isDeep);
        return v1251;
    case float32Tag:
    case float64Tag:
    case int8Tag:
    case int16Tag:
    case int32Tag:
    case uint8Tag:
    case uint8ClampedTag:
    case uint16Tag:
    case uint32Tag:
        const v1252 = cloneTypedArray(object, isDeep);
        return v1252;
    case mapTag:
        const v1253 = cloneMap(object, isDeep, cloneFunc);
        return v1253;
    case numberTag:
    case stringTag:
        const v1254 = new Ctor(object);
        return v1254;
    case regexpTag:
        const v1255 = cloneRegExp(object);
        return v1255;
    case setTag:
        const v1256 = cloneSet(object, isDeep, cloneFunc);
        return v1256;
    case symbolTag:
        const v1257 = cloneSymbol(object);
        return v1257;
    }
};
const isIndex = function (value, length) {
    const v1258 = length == null;
    if (v1258) {
        length = MAX_SAFE_INTEGER;
    } else {
        length = length;
    }
    const v1259 = !length;
    const v1260 = !v1259;
    const v1261 = typeof value;
    const v1262 = v1261 == 'number';
    const v1263 = reIsUint.test(value);
    const v1264 = v1262 || v1263;
    const v1265 = v1260 && v1264;
    const v1266 = -1;
    const v1267 = value > v1266;
    const v1268 = value % 1;
    const v1269 = v1268 == 0;
    const v1270 = v1267 && v1269;
    const v1271 = value < length;
    const v1272 = v1270 && v1271;
    const v1273 = v1265 && v1272;
    return v1273;
};
const isIterateeCall = function (value, index, object) {
    const v1274 = isObject(object);
    const v1275 = !v1274;
    if (v1275) {
        return false;
    }
    const v1276 = typeof index;
    var type = v1276;
    const v1277 = type == 'number';
    const v1278 = isArrayLike(object);
    const v1279 = object.length;
    const v1280 = isIndex(index, v1279);
    const v1281 = v1278 && v1280;
    const v1282 = type == 'string';
    const v1283 = index in object;
    const v1284 = v1282 && v1283;
    let v1285;
    if (v1277) {
        v1285 = v1281;
    } else {
        v1285 = v1284;
    }
    if (v1285) {
        const v1286 = object[index];
        const v1287 = eq(v1286, value);
        return v1287;
    }
    return false;
};
const isKeyable = function (value) {
    const v1288 = typeof value;
    var type = v1288;
    const v1289 = type == 'string';
    const v1290 = type == 'number';
    const v1291 = v1289 || v1290;
    const v1292 = type == 'symbol';
    const v1293 = v1291 || v1292;
    const v1294 = type == 'boolean';
    const v1295 = v1293 || v1294;
    const v1296 = value !== '__proto__';
    const v1297 = value === null;
    let v1298;
    if (v1295) {
        v1298 = v1296;
    } else {
        v1298 = v1297;
    }
    return v1298;
};
const isMasked = function (func) {
    const v1299 = !maskSrcKey;
    const v1300 = !v1299;
    const v1301 = maskSrcKey in func;
    const v1302 = v1300 && v1301;
    return v1302;
};
const isPrototype = function (value) {
    const v1303 = value.constructor;
    var Ctor = value && v1303;
    const v1304 = typeof Ctor;
    const v1305 = v1304 == 'function';
    const v1306 = Ctor.prototype;
    const v1307 = v1305 && v1306;
    var proto = v1307 || objectProto;
    const v1308 = value === proto;
    return v1308;
};
const nativeKeysIn = function (object) {
    var result = [];
    const v1309 = object != null;
    if (v1309) {
        let key;
        const v1310 = Object(object);
        for (key in v1310) {
            const v1311 = result.push(key);
            v1311;
        }
    }
    return result;
};
const toSource = function (func) {
    const v1312 = func != null;
    if (v1312) {
        try {
            const v1313 = funcToString.call(func);
            return v1313;
        } catch (e) {
        }
        try {
            const v1314 = func + '';
            return v1314;
        } catch (e) {
        }
    }
    return '';
};
const eq = function (value, other) {
    const v1315 = value === other;
    const v1316 = value !== value;
    const v1317 = other !== other;
    const v1318 = v1316 && v1317;
    const v1319 = v1315 || v1318;
    return v1319;
};
const isArguments = function (value) {
    const v1320 = isArrayLikeObject(value);
    const v1321 = hasOwnProperty.call(value, 'callee');
    const v1322 = v1320 && v1321;
    const v1323 = propertyIsEnumerable.call(value, 'callee');
    const v1324 = !v1323;
    const v1325 = objectToString.call(value);
    const v1326 = v1325 == argsTag;
    const v1327 = v1324 || v1326;
    const v1328 = v1322 && v1327;
    return v1328;
};
var isArray = Array.isArray;
const isArrayLike = function (value) {
    const v1329 = value != null;
    const v1330 = value.length;
    const v1331 = isLength(v1330);
    const v1332 = v1329 && v1331;
    const v1333 = isFunction(value);
    const v1334 = !v1333;
    const v1335 = v1332 && v1334;
    return v1335;
};
const isArrayLikeObject = function (value) {
    const v1336 = isObjectLike(value);
    const v1337 = isArrayLike(value);
    const v1338 = v1336 && v1337;
    return v1338;
};
var isBuffer = nativeIsBuffer || stubFalse;
const isFunction = function (value) {
    let tag;
    const v1339 = isObject(value);
    const v1340 = objectToString.call(value);
    if (v1339) {
        tag = v1340;
    } else {
        tag = '';
    }
    const v1341 = tag == funcTag;
    const v1342 = tag == genTag;
    const v1343 = v1341 || v1342;
    return v1343;
};
const isLength = function (value) {
    const v1344 = typeof value;
    const v1345 = v1344 == 'number';
    const v1346 = -1;
    const v1347 = value > v1346;
    const v1348 = v1345 && v1347;
    const v1349 = value % 1;
    const v1350 = v1349 == 0;
    const v1351 = v1348 && v1350;
    const v1352 = value <= MAX_SAFE_INTEGER;
    const v1353 = v1351 && v1352;
    return v1353;
};
const isObject = function (value) {
    const v1354 = typeof value;
    var type = v1354;
    const v1355 = !value;
    const v1356 = !v1355;
    const v1357 = type == 'object';
    const v1358 = type == 'function';
    const v1359 = v1357 || v1358;
    const v1360 = v1356 && v1359;
    return v1360;
};
const isObjectLike = function (value) {
    const v1361 = !value;
    const v1362 = !v1361;
    const v1363 = typeof value;
    const v1364 = v1363 == 'object';
    const v1365 = v1362 && v1364;
    return v1365;
};
const isPlainObject = function (value) {
    const v1366 = isObjectLike(value);
    const v1367 = !v1366;
    const v1368 = objectToString.call(value);
    const v1369 = v1368 != objectTag;
    const v1370 = v1367 || v1369;
    const v1371 = isHostObject(value);
    const v1372 = v1370 || v1371;
    if (v1372) {
        return false;
    }
    var proto = getPrototype(value);
    const v1373 = proto === null;
    if (v1373) {
        return true;
    }
    const v1374 = hasOwnProperty.call(proto, 'constructor');
    const v1375 = proto.constructor;
    var Ctor = v1374 && v1375;
    const v1376 = typeof Ctor;
    const v1377 = v1376 == 'function';
    const v1378 = Ctor instanceof Ctor;
    const v1379 = v1377 && v1378;
    const v1380 = funcToString.call(Ctor);
    const v1381 = v1380 == objectCtorString;
    const v1382 = v1379 && v1381;
    return v1382;
};
let isTypedArray;
const v1383 = baseUnary(nodeIsTypedArray);
if (nodeIsTypedArray) {
    isTypedArray = v1383;
} else {
    isTypedArray = baseIsTypedArray;
}
const toPlainObject = function (value) {
    const v1384 = keysIn(value);
    const v1385 = copyObject(value, v1384);
    return v1385;
};
const keys = function (object) {
    const v1386 = isArrayLike(object);
    const v1387 = arrayLikeKeys(object);
    const v1388 = baseKeys(object);
    let v1389;
    if (v1386) {
        v1389 = v1387;
    } else {
        v1389 = v1388;
    }
    return v1389;
};
const keysIn = function (object) {
    const v1390 = isArrayLike(object);
    const v1391 = arrayLikeKeys(object, true);
    const v1392 = baseKeysIn(object);
    let v1393;
    if (v1390) {
        v1393 = v1391;
    } else {
        v1393 = v1392;
    }
    return v1393;
};
const v1395 = function (object, source, srcIndex, customizer) {
    const v1394 = baseMerge(object, source, srcIndex, customizer);
    v1394;
};
var mergeWith = createAssigner(v1395);
const stubArray = function () {
    const v1396 = [];
    return v1396;
};
const stubFalse = function () {
    return false;
};
module.exports = mergeWith;