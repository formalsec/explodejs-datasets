var LARGE_ARRAY_SIZE = 200;
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var MAX_SAFE_INTEGER = 9007199254740991;
var argsTag = '[object Arguments]';
var arrayTag = '[object Array]';
var asyncTag = '[object AsyncFunction]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var nullTag = '[object Null]';
var objectTag = '[object Object]';
var proxyTag = '[object Proxy]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var undefinedTag = '[object Undefined]';
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
const v615 = typeof global;
const v616 = v615 == 'object';
const v617 = v616 && global;
const v618 = global.Object;
const v619 = v618 === Object;
const v620 = v617 && v619;
var freeGlobal = v620 && global;
const v621 = typeof self;
const v622 = v621 == 'object';
const v623 = v622 && self;
const v624 = self.Object;
const v625 = v624 === Object;
const v626 = v623 && v625;
var freeSelf = v626 && self;
const v627 = freeGlobal || freeSelf;
const v628 = Function('return this');
const v629 = v628();
var root = v627 || v629;
const v630 = typeof exports;
const v631 = v630 == 'object';
const v632 = v631 && exports;
const v633 = exports.nodeType;
const v634 = !v633;
const v635 = v632 && v634;
var freeExports = v635 && exports;
const v636 = typeof module;
const v637 = v636 == 'object';
const v638 = freeExports && v637;
const v639 = v638 && module;
const v640 = module.nodeType;
const v641 = !v640;
const v642 = v639 && v641;
var freeModule = v642 && module;
const v643 = freeModule.exports;
const v644 = v643 === freeExports;
var moduleExports = freeModule && v644;
const v645 = freeGlobal.process;
var freeProcess = moduleExports && v645;
const v650 = function () {
    try {
        const v646 = freeProcess.binding;
        const v647 = freeProcess && v646;
        const v648 = freeProcess.binding('util');
        const v649 = v647 && v648;
        return v649;
    } catch (e) {
    }
};
var nodeUtil = v650();
const v651 = nodeUtil.isTypedArray;
var nodeIsTypedArray = nodeUtil && v651;
const apply = function (func, thisArg, args) {
    const v652 = args.length;
    switch (v652) {
    case 0:
        const v653 = func.call(thisArg);
        return v653;
    case 1:
        const v654 = args[0];
        const v655 = func.call(thisArg, v654);
        return v655;
    case 2:
        const v656 = args[0];
        const v657 = args[1];
        const v658 = func.call(thisArg, v656, v657);
        return v658;
    case 3:
        const v659 = args[0];
        const v660 = args[1];
        const v661 = args[2];
        const v662 = func.call(thisArg, v659, v660, v661);
        return v662;
    }
    const v663 = func.apply(thisArg, args);
    return v663;
};
const baseTimes = function (n, iteratee) {
    const v664 = -1;
    var index = v664;
    var result = Array(n);
    const v665 = ++index;
    let v666 = v665 < n;
    while (v666) {
        const v667 = iteratee(index);
        result[index] = v667;
        v666 = v665 < n;
    }
    return result;
};
const baseUnary = function (func) {
    const v669 = function (value) {
        const v668 = func(value);
        return v668;
    };
    return v669;
};
const getValue = function (object, key) {
    const v670 = object == null;
    const v671 = object[key];
    let v672;
    if (v670) {
        v672 = undefined;
    } else {
        v672 = v671;
    }
    return v672;
};
const overArg = function (func, transform) {
    const v675 = function (arg) {
        const v673 = transform(arg);
        const v674 = func(v673);
        return v674;
    };
    return v675;
};
const safeGet = function (object, key) {
    const v676 = key == '__proto__';
    const v677 = object[key];
    let v678;
    if (v676) {
        v678 = undefined;
    } else {
        v678 = v677;
    }
    return v678;
};
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var coreJsData = root['__core-js_shared__'];
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
const v687 = function () {
    const v679 = coreJsData.keys;
    const v680 = coreJsData && v679;
    const v681 = coreJsData.keys;
    const v682 = v681.IE_PROTO;
    const v683 = v680 && v682;
    const v684 = v683 || '';
    var uid = /[^.]+$/.exec(v684);
    const v685 = 'Symbol(src)_1.' + uid;
    let v686;
    if (uid) {
        v686 = v685;
    } else {
        v686 = '';
    }
    return v686;
};
var maskSrcKey = v687();
var nativeObjectToString = objectProto.toString;
var objectCtorString = funcToString.call(Object);
const v688 = funcToString.call(hasOwnProperty);
const v689 = v688.replace(reRegExpChar, '\\$&');
const v690 = v689.replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?');
const v691 = '^' + v690;
const v692 = v691 + '$';
var reIsNative = RegExp(v692);
let Buffer;
const v693 = root.Buffer;
if (moduleExports) {
    Buffer = v693;
} else {
    Buffer = undefined;
}
var Symbol = root.Symbol;
var Uint8Array = root.Uint8Array;
let allocUnsafe;
const v694 = Buffer.allocUnsafe;
if (Buffer) {
    allocUnsafe = v694;
} else {
    allocUnsafe = undefined;
}
const v695 = Object.getPrototypeOf;
var getPrototype = overArg(v695, Object);
var objectCreate = Object.create;
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
let symToStringTag;
const v696 = Symbol.toStringTag;
if (Symbol) {
    symToStringTag = v696;
} else {
    symToStringTag = undefined;
}
const v700 = function () {
    try {
        var func = getNative(Object, 'defineProperty');
        const v697 = {};
        const v698 = {};
        const v699 = func(v697, '', v698);
        v699;
        return func;
    } catch (e) {
    }
};
var defineProperty = v700();
let nativeIsBuffer;
const v701 = Buffer.isBuffer;
if (Buffer) {
    nativeIsBuffer = v701;
} else {
    nativeIsBuffer = undefined;
}
var nativeMax = Math.max;
var nativeNow = Date.now;
var Map = getNative(root, 'Map');
var nativeCreate = getNative(Object, 'create');
const v707 = function () {
    const object = function () {
    };
    const v706 = function (proto) {
        const v702 = isObject(proto);
        const v703 = !v702;
        if (v703) {
            const v704 = {};
            return v704;
        }
        if (objectCreate) {
            const v705 = objectCreate(proto);
            return v705;
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = undefined;
        return result;
    };
    return v706;
};
var baseCreate = v707();
const Hash = function (entries) {
    const v708 = -1;
    var index = v708;
    let length;
    const v709 = entries == null;
    const v710 = entries.length;
    if (v709) {
        length = 0;
    } else {
        length = v710;
    }
    const v711 = this.clear();
    v711;
    const v712 = ++index;
    let v713 = v712 < length;
    while (v713) {
        var entry = entries[index];
        const v714 = entry[0];
        const v715 = entry[1];
        const v716 = this.set(v714, v715);
        v716;
        v713 = v712 < length;
    }
};
const hashClear = function () {
    const v717 = nativeCreate(null);
    const v718 = {};
    let v719;
    if (nativeCreate) {
        v719 = v717;
    } else {
        v719 = v718;
    }
    this.__data__ = v719;
    this.size = 0;
};
const hashDelete = function (key) {
    const v720 = this.has(key);
    const v721 = this.__data__;
    const v722 = v721[key];
    const v723 = delete v722;
    var result = v720 && v723;
    let v724;
    if (result) {
        v724 = 1;
    } else {
        v724 = 0;
    }
    this.size -= v724;
    return result;
};
const hashGet = function (key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        const v725 = result === HASH_UNDEFINED;
        let v726;
        if (v725) {
            v726 = undefined;
        } else {
            v726 = result;
        }
        return v726;
    }
    const v727 = hasOwnProperty.call(data, key);
    const v728 = data[key];
    let v729;
    if (v727) {
        v729 = v728;
    } else {
        v729 = undefined;
    }
    return v729;
};
const hashHas = function (key) {
    var data = this.__data__;
    const v730 = data[key];
    const v731 = v730 !== undefined;
    const v732 = hasOwnProperty.call(data, key);
    let v733;
    if (nativeCreate) {
        v733 = v731;
    } else {
        v733 = v732;
    }
    return v733;
};
const hashSet = function (key, value) {
    var data = this.__data__;
    const v734 = this.has(key);
    let v735;
    if (v734) {
        v735 = 0;
    } else {
        v735 = 1;
    }
    this.size += v735;
    const v736 = value === undefined;
    const v737 = nativeCreate && v736;
    let v738;
    if (v737) {
        v738 = HASH_UNDEFINED;
    } else {
        v738 = value;
    }
    data[key] = v738;
    return this;
};
const v739 = Hash.prototype;
v739.clear = hashClear;
const v740 = Hash.prototype;
v740['delete'] = hashDelete;
const v741 = Hash.prototype;
v741.get = hashGet;
const v742 = Hash.prototype;
v742.has = hashHas;
const v743 = Hash.prototype;
v743.set = hashSet;
const ListCache = function (entries) {
    const v744 = -1;
    var index = v744;
    let length;
    const v745 = entries == null;
    const v746 = entries.length;
    if (v745) {
        length = 0;
    } else {
        length = v746;
    }
    const v747 = this.clear();
    v747;
    const v748 = ++index;
    let v749 = v748 < length;
    while (v749) {
        var entry = entries[index];
        const v750 = entry[0];
        const v751 = entry[1];
        const v752 = this.set(v750, v751);
        v752;
        v749 = v748 < length;
    }
};
const listCacheClear = function () {
    this.__data__ = [];
    this.size = 0;
};
const listCacheDelete = function (key) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v753 = index < 0;
    if (v753) {
        return false;
    }
    const v754 = data.length;
    var lastIndex = v754 - 1;
    const v755 = index == lastIndex;
    if (v755) {
        const v756 = data.pop();
        v756;
    } else {
        const v757 = splice.call(data, index, 1);
        v757;
    }
    const v758 = this.size;
    const v759 = --v758;
    v759;
    return true;
};
const listCacheGet = function (key) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v760 = index < 0;
    const v761 = data[index];
    const v762 = v761[1];
    let v763;
    if (v760) {
        v763 = undefined;
    } else {
        v763 = v762;
    }
    return v763;
};
const listCacheHas = function (key) {
    const v764 = this.__data__;
    const v765 = assocIndexOf(v764, key);
    const v766 = -1;
    const v767 = v765 > v766;
    return v767;
};
const listCacheSet = function (key, value) {
    var data = this.__data__;
    var index = assocIndexOf(data, key);
    const v768 = index < 0;
    if (v768) {
        const v769 = this.size;
        const v770 = ++v769;
        v770;
        const v771 = [
            key,
            value
        ];
        const v772 = data.push(v771);
        v772;
    } else {
        const v773 = data[index];
        v773[1] = value;
    }
    return this;
};
const v774 = ListCache.prototype;
v774.clear = listCacheClear;
const v775 = ListCache.prototype;
v775['delete'] = listCacheDelete;
const v776 = ListCache.prototype;
v776.get = listCacheGet;
const v777 = ListCache.prototype;
v777.has = listCacheHas;
const v778 = ListCache.prototype;
v778.set = listCacheSet;
const MapCache = function (entries) {
    const v779 = -1;
    var index = v779;
    let length;
    const v780 = entries == null;
    const v781 = entries.length;
    if (v780) {
        length = 0;
    } else {
        length = v781;
    }
    const v782 = this.clear();
    v782;
    const v783 = ++index;
    let v784 = v783 < length;
    while (v784) {
        var entry = entries[index];
        const v785 = entry[0];
        const v786 = entry[1];
        const v787 = this.set(v785, v786);
        v787;
        v784 = v783 < length;
    }
};
const mapCacheClear = function () {
    this.size = 0;
    const v788 = new Hash();
    const v789 = Map || ListCache;
    const v790 = new v789();
    const v791 = new Hash();
    const v792 = {};
    v792['hash'] = v788;
    v792['map'] = v790;
    v792['string'] = v791;
    this.__data__ = v792;
};
const mapCacheDelete = function (key) {
    const v793 = getMapData(this, key);
    var result = v793['delete'](key);
    let v794;
    if (result) {
        v794 = 1;
    } else {
        v794 = 0;
    }
    this.size -= v794;
    return result;
};
const mapCacheGet = function (key) {
    const v795 = getMapData(this, key);
    const v796 = v795.get(key);
    return v796;
};
const mapCacheHas = function (key) {
    const v797 = getMapData(this, key);
    const v798 = v797.has(key);
    return v798;
};
const mapCacheSet = function (key, value) {
    var data = getMapData(this, key);
    var size = data.size;
    const v799 = data.set(key, value);
    v799;
    const v800 = data.size;
    const v801 = v800 == size;
    let v802;
    if (v801) {
        v802 = 0;
    } else {
        v802 = 1;
    }
    this.size += v802;
    return this;
};
const v803 = MapCache.prototype;
v803.clear = mapCacheClear;
const v804 = MapCache.prototype;
v804['delete'] = mapCacheDelete;
const v805 = MapCache.prototype;
v805.get = mapCacheGet;
const v806 = MapCache.prototype;
v806.has = mapCacheHas;
const v807 = MapCache.prototype;
v807.set = mapCacheSet;
const Stack = function (entries) {
    this.__data__ = new ListCache(entries);
    var data = this.__data__;
    const v808 = data.size;
    this.size = v808;
};
const stackClear = function () {
    this.__data__ = new ListCache();
    this.size = 0;
};
const stackDelete = function (key) {
    var data = this.__data__;
    var result = data['delete'](key);
    const v809 = data.size;
    this.size = v809;
    return result;
};
const stackGet = function (key) {
    const v810 = this.__data__;
    const v811 = v810.get(key);
    return v811;
};
const stackHas = function (key) {
    const v812 = this.__data__;
    const v813 = v812.has(key);
    return v813;
};
const stackSet = function (key, value) {
    var data = this.__data__;
    const v814 = data instanceof ListCache;
    if (v814) {
        var pairs = data.__data__;
        const v815 = !Map;
        const v816 = pairs.length;
        const v817 = LARGE_ARRAY_SIZE - 1;
        const v818 = v816 < v817;
        const v819 = v815 || v818;
        if (v819) {
            const v820 = [
                key,
                value
            ];
            const v821 = pairs.push(v820);
            v821;
            const v822 = data.size;
            const v823 = ++v822;
            this.size = v823;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    const v824 = data.set(key, value);
    v824;
    const v825 = data.size;
    this.size = v825;
    return this;
};
const v826 = Stack.prototype;
v826.clear = stackClear;
const v827 = Stack.prototype;
v827['delete'] = stackDelete;
const v828 = Stack.prototype;
v828.get = stackGet;
const v829 = Stack.prototype;
v829.has = stackHas;
const v830 = Stack.prototype;
v830.set = stackSet;
const arrayLikeKeys = function (value, inherited) {
    var isArr = isArray(value);
    const v831 = !isArr;
    const v832 = isArguments(value);
    var isArg = v831 && v832;
    const v833 = !isArr;
    const v834 = !isArg;
    const v835 = v833 && v834;
    const v836 = isBuffer(value);
    var isBuff = v835 && v836;
    const v837 = !isArr;
    const v838 = !isArg;
    const v839 = v837 && v838;
    const v840 = !isBuff;
    const v841 = v839 && v840;
    const v842 = isTypedArray(value);
    var isType = v841 && v842;
    const v843 = isArr || isArg;
    const v844 = v843 || isBuff;
    var skipIndexes = v844 || isType;
    let result;
    const v845 = value.length;
    const v846 = baseTimes(v845, String);
    const v847 = [];
    if (skipIndexes) {
        result = v846;
    } else {
        result = v847;
    }
    var length = result.length;
    let key;
    for (key in value) {
        const v848 = hasOwnProperty.call(value, key);
        const v849 = inherited || v848;
        const v850 = key == 'length';
        const v851 = key == 'offset';
        const v852 = key == 'parent';
        const v853 = v851 || v852;
        const v854 = isBuff && v853;
        const v855 = v850 || v854;
        const v856 = key == 'buffer';
        const v857 = key == 'byteLength';
        const v858 = v856 || v857;
        const v859 = key == 'byteOffset';
        const v860 = v858 || v859;
        const v861 = isType && v860;
        const v862 = v855 || v861;
        const v863 = isIndex(key, length);
        const v864 = v862 || v863;
        const v865 = skipIndexes && v864;
        const v866 = !v865;
        const v867 = v849 && v866;
        if (v867) {
            const v868 = result.push(key);
            v868;
        }
    }
    return result;
};
const assignMergeValue = function (object, key, value) {
    const v869 = value !== undefined;
    const v870 = object[key];
    const v871 = eq(v870, value);
    const v872 = !v871;
    const v873 = v869 && v872;
    const v874 = value === undefined;
    const v875 = key in object;
    const v876 = !v875;
    const v877 = v874 && v876;
    const v878 = v873 || v877;
    if (v878) {
        const v879 = baseAssignValue(object, key, value);
        v879;
    }
};
const assignValue = function (object, key, value) {
    var objValue = object[key];
    const v880 = hasOwnProperty.call(object, key);
    const v881 = eq(objValue, value);
    const v882 = v880 && v881;
    const v883 = !v882;
    const v884 = value === undefined;
    const v885 = key in object;
    const v886 = !v885;
    const v887 = v884 && v886;
    const v888 = v883 || v887;
    if (v888) {
        const v889 = baseAssignValue(object, key, value);
        v889;
    }
};
const assocIndexOf = function (array, key) {
    var length = array.length;
    let v890 = length--;
    while (v890) {
        const v891 = array[length];
        const v892 = v891[0];
        const v893 = eq(v892, key);
        if (v893) {
            return length;
        }
        v890 = length--;
    }
    const v894 = -1;
    return v894;
};
const baseAssignValue = function (object, key, value) {
    const v895 = key == '__proto__';
    const v896 = v895 && defineProperty;
    if (v896) {
        const v897 = {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
        };
        const v898 = defineProperty(object, key, v897);
        v898;
    } else {
        object[key] = value;
    }
};
var baseFor = createBaseFor();
const baseGetTag = function (value) {
    const v899 = value == null;
    if (v899) {
        const v900 = value === undefined;
        let v901;
        if (v900) {
            v901 = undefinedTag;
        } else {
            v901 = nullTag;
        }
        return v901;
    }
    const v902 = Object(value);
    const v903 = symToStringTag in v902;
    const v904 = symToStringTag && v903;
    const v905 = getRawTag(value);
    const v906 = objectToString(value);
    let v907;
    if (v904) {
        v907 = v905;
    } else {
        v907 = v906;
    }
    return v907;
};
const baseIsArguments = function (value) {
    const v908 = isObjectLike(value);
    const v909 = baseGetTag(value);
    const v910 = v909 == argsTag;
    const v911 = v908 && v910;
    return v911;
};
const baseIsNative = function (value) {
    const v912 = isObject(value);
    const v913 = !v912;
    const v914 = isMasked(value);
    const v915 = v913 || v914;
    if (v915) {
        return false;
    }
    let pattern;
    const v916 = isFunction(value);
    if (v916) {
        pattern = reIsNative;
    } else {
        pattern = reIsHostCtor;
    }
    const v917 = toSource(value);
    const v918 = pattern.test(v917);
    return v918;
};
const baseIsTypedArray = function (value) {
    const v919 = isObjectLike(value);
    const v920 = value.length;
    const v921 = isLength(v920);
    const v922 = v919 && v921;
    const v923 = baseGetTag(value);
    const v924 = typedArrayTags[v923];
    const v925 = !v924;
    const v926 = !v925;
    const v927 = v922 && v926;
    return v927;
};
const baseKeysIn = function (object) {
    const v928 = isObject(object);
    const v929 = !v928;
    if (v929) {
        const v930 = nativeKeysIn(object);
        return v930;
    }
    var isProto = isPrototype(object);
    var result = [];
    let key;
    for (key in object) {
        const v931 = key == 'constructor';
        const v932 = hasOwnProperty.call(object, key);
        const v933 = !v932;
        const v934 = isProto || v933;
        const v935 = v931 && v934;
        const v936 = !v935;
        if (v936) {
            const v937 = result.push(key);
            v937;
        }
    }
    return result;
};
const baseMerge = function (object, source, srcIndex, customizer, stack) {
    const v938 = object === source;
    if (v938) {
        return;
    }
    const v947 = function (srcValue, key) {
        const v939 = isObject(srcValue);
        if (v939) {
            const v940 = stack || (stack = new Stack());
            v940;
            const v941 = baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            v941;
        } else {
            let newValue;
            const v942 = safeGet(object, key);
            const v943 = key + '';
            const v944 = customizer(v942, srcValue, v943, object, source, stack);
            if (customizer) {
                newValue = v944;
            } else {
                newValue = undefined;
            }
            const v945 = newValue === undefined;
            if (v945) {
                newValue = srcValue;
            }
            const v946 = assignMergeValue(object, key, newValue);
            v946;
        }
    };
    const v948 = baseFor(source, v947, keysIn);
    v948;
};
const baseMergeDeep = function (object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet(object, key);
    var srcValue = safeGet(source, key);
    var stacked = stack.get(srcValue);
    if (stacked) {
        const v949 = assignMergeValue(object, key, stacked);
        v949;
        return;
    }
    let newValue;
    const v950 = key + '';
    const v951 = customizer(objValue, srcValue, v950, object, source, stack);
    if (customizer) {
        newValue = v951;
    } else {
        newValue = undefined;
    }
    var isCommon = newValue === undefined;
    if (isCommon) {
        var isArr = isArray(srcValue);
        const v952 = !isArr;
        const v953 = isBuffer(srcValue);
        var isBuff = v952 && v953;
        const v954 = !isArr;
        const v955 = !isBuff;
        const v956 = v954 && v955;
        const v957 = isTypedArray(srcValue);
        var isTyped = v956 && v957;
        newValue = srcValue;
        const v958 = isArr || isBuff;
        const v959 = v958 || isTyped;
        if (v959) {
            const v960 = isArray(objValue);
            if (v960) {
                newValue = objValue;
            } else {
                const v961 = isArrayLikeObject(objValue);
                if (v961) {
                    newValue = copyArray(objValue);
                } else {
                    if (isBuff) {
                        isCommon = false;
                        newValue = cloneBuffer(srcValue, true);
                    } else {
                        if (isTyped) {
                            isCommon = false;
                            newValue = cloneTypedArray(srcValue, true);
                        } else {
                            newValue = [];
                        }
                    }
                }
            }
        } else {
            const v962 = isPlainObject(srcValue);
            const v963 = isArguments(srcValue);
            const v964 = v962 || v963;
            if (v964) {
                newValue = objValue;
                const v965 = isArguments(objValue);
                if (v965) {
                    newValue = toPlainObject(objValue);
                } else {
                    const v966 = isObject(objValue);
                    const v967 = !v966;
                    const v968 = isFunction(objValue);
                    const v969 = srcIndex && v968;
                    const v970 = v967 || v969;
                    if (v970) {
                        newValue = initCloneObject(srcValue);
                    }
                }
            } else {
                isCommon = false;
            }
        }
    }
    if (isCommon) {
        const v971 = stack.set(srcValue, newValue);
        v971;
        const v972 = mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        v972;
        const v973 = stack['delete'](srcValue);
        v973;
    }
    const v974 = assignMergeValue(object, key, newValue);
    v974;
};
const baseRest = function (func, start) {
    const v975 = overRest(func, start, identity);
    const v976 = func + '';
    const v977 = setToString(v975, v976);
    return v977;
};
let baseSetToString;
const v978 = !defineProperty;
const v982 = function (func, string) {
    const v979 = constant(string);
    const v980 = {
        'configurable': true,
        'enumerable': false,
        'value': v979,
        'writable': true
    };
    const v981 = defineProperty(func, 'toString', v980);
    return v981;
};
if (v978) {
    baseSetToString = identity;
} else {
    baseSetToString = v982;
}
const cloneBuffer = function (buffer, isDeep) {
    if (isDeep) {
        const v983 = buffer.slice();
        return v983;
    }
    var length = buffer.length;
    let result;
    const v984 = allocUnsafe(length);
    const v985 = new buffer.constructor(length);
    if (allocUnsafe) {
        result = v984;
    } else {
        result = v985;
    }
    const v986 = buffer.copy(result);
    v986;
    return result;
};
const cloneArrayBuffer = function (arrayBuffer) {
    const v987 = arrayBuffer.byteLength;
    var result = new arrayBuffer.constructor(v987);
    const v988 = new Uint8Array(result);
    const v989 = new Uint8Array(arrayBuffer);
    const v990 = v988.set(v989);
    v990;
    return result;
};
const cloneTypedArray = function (typedArray, isDeep) {
    let buffer;
    const v991 = typedArray.buffer;
    const v992 = cloneArrayBuffer(v991);
    const v993 = typedArray.buffer;
    if (isDeep) {
        buffer = v992;
    } else {
        buffer = v993;
    }
    const v994 = typedArray.byteOffset;
    const v995 = typedArray.length;
    const v996 = new typedArray.constructor(buffer, v994, v995);
    return v996;
};
const copyArray = function (source, array) {
    const v997 = -1;
    var index = v997;
    var length = source.length;
    const v998 = array || (array = Array(length));
    v998;
    const v999 = ++index;
    let v1000 = v999 < length;
    while (v1000) {
        const v1001 = source[index];
        array[index] = v1001;
        v1000 = v999 < length;
    }
    return array;
};
const copyObject = function (source, props, object, customizer) {
    const v1002 = !object;
    var isNew = v1002;
    const v1003 = object || (object = {});
    v1003;
    const v1004 = -1;
    var index = v1004;
    var length = props.length;
    const v1005 = ++index;
    let v1006 = v1005 < length;
    while (v1006) {
        var key = props[index];
        let newValue;
        const v1007 = object[key];
        const v1008 = source[key];
        const v1009 = customizer(v1007, v1008, key, object, source);
        if (customizer) {
            newValue = v1009;
        } else {
            newValue = undefined;
        }
        const v1010 = newValue === undefined;
        if (v1010) {
            newValue = source[key];
        }
        if (isNew) {
            const v1011 = baseAssignValue(object, key, newValue);
            v1011;
        } else {
            const v1012 = assignValue(object, key, newValue);
            v1012;
        }
        v1006 = v1005 < length;
    }
    return object;
};
const createAssigner = function (assigner) {
    const v1033 = function (object, sources) {
        const v1013 = -1;
        var index = v1013;
        var length = sources.length;
        let customizer;
        const v1014 = length > 1;
        const v1015 = length - 1;
        const v1016 = sources[v1015];
        if (v1014) {
            customizer = v1016;
        } else {
            customizer = undefined;
        }
        let guard;
        const v1017 = length > 2;
        const v1018 = sources[2];
        if (v1017) {
            guard = v1018;
        } else {
            guard = undefined;
        }
        const v1019 = assigner.length;
        const v1020 = v1019 > 3;
        const v1021 = typeof customizer;
        const v1022 = v1021 == 'function';
        const v1023 = v1020 && v1022;
        const v1024 = length--;
        if (v1023) {
            customizer = (v1024, customizer);
        } else {
            customizer = undefined;
        }
        const v1025 = sources[0];
        const v1026 = sources[1];
        const v1027 = isIterateeCall(v1025, v1026, guard);
        const v1028 = guard && v1027;
        if (v1028) {
            const v1029 = length < 3;
            if (v1029) {
                customizer = undefined;
            } else {
                customizer = customizer;
            }
            length = 1;
        }
        object = Object(object);
        const v1030 = ++index;
        let v1031 = v1030 < length;
        while (v1031) {
            var source = sources[index];
            if (source) {
                const v1032 = assigner(object, source, index, customizer);
                v1032;
            }
            v1031 = v1030 < length;
        }
        return object;
    };
    const v1034 = baseRest(v1033);
    return v1034;
};
const createBaseFor = function (fromRight) {
    const v1042 = function (object, iteratee, keysFunc) {
        const v1035 = -1;
        var index = v1035;
        var iterable = Object(object);
        var props = keysFunc(object);
        var length = props.length;
        let v1036 = length--;
        while (v1036) {
            const v1037 = ++index;
            let v1038;
            if (fromRight) {
                v1038 = length;
            } else {
                v1038 = v1037;
            }
            var key = props[v1038];
            const v1039 = iterable[key];
            const v1040 = iteratee(v1039, key, iterable);
            const v1041 = v1040 === false;
            if (v1041) {
                break;
            }
            v1036 = length--;
        }
        return object;
    };
    return v1042;
};
const getMapData = function (map, key) {
    var data = map.__data__;
    const v1043 = isKeyable(key);
    const v1044 = typeof key;
    const v1045 = v1044 == 'string';
    let v1046;
    if (v1045) {
        v1046 = 'string';
    } else {
        v1046 = 'hash';
    }
    const v1047 = data[v1046];
    const v1048 = data.map;
    let v1049;
    if (v1043) {
        v1049 = v1047;
    } else {
        v1049 = v1048;
    }
    return v1049;
};
const getNative = function (object, key) {
    var value = getValue(object, key);
    const v1050 = baseIsNative(value);
    let v1051;
    if (v1050) {
        v1051 = value;
    } else {
        v1051 = undefined;
    }
    return v1051;
};
const getRawTag = function (value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag);
    var tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            const v1052 = value[symToStringTag];
            const v1053 = delete v1052;
            v1053;
        }
    }
    return result;
};
const initCloneObject = function (object) {
    const v1054 = object.constructor;
    const v1055 = typeof v1054;
    const v1056 = v1055 == 'function';
    const v1057 = isPrototype(object);
    const v1058 = !v1057;
    const v1059 = v1056 && v1058;
    const v1060 = getPrototype(object);
    const v1061 = baseCreate(v1060);
    const v1062 = {};
    let v1063;
    if (v1059) {
        v1063 = v1061;
    } else {
        v1063 = v1062;
    }
    return v1063;
};
const isIndex = function (value, length) {
    const v1064 = typeof value;
    var type = v1064;
    const v1065 = length == null;
    if (v1065) {
        length = MAX_SAFE_INTEGER;
    } else {
        length = length;
    }
    const v1066 = !length;
    const v1067 = !v1066;
    const v1068 = type == 'number';
    const v1069 = type != 'symbol';
    const v1070 = reIsUint.test(value);
    const v1071 = v1069 && v1070;
    const v1072 = v1068 || v1071;
    const v1073 = v1067 && v1072;
    const v1074 = -1;
    const v1075 = value > v1074;
    const v1076 = value % 1;
    const v1077 = v1076 == 0;
    const v1078 = v1075 && v1077;
    const v1079 = value < length;
    const v1080 = v1078 && v1079;
    const v1081 = v1073 && v1080;
    return v1081;
};
const isIterateeCall = function (value, index, object) {
    const v1082 = isObject(object);
    const v1083 = !v1082;
    if (v1083) {
        return false;
    }
    const v1084 = typeof index;
    var type = v1084;
    const v1085 = type == 'number';
    const v1086 = isArrayLike(object);
    const v1087 = object.length;
    const v1088 = isIndex(index, v1087);
    const v1089 = v1086 && v1088;
    const v1090 = type == 'string';
    const v1091 = index in object;
    const v1092 = v1090 && v1091;
    let v1093;
    if (v1085) {
        v1093 = v1089;
    } else {
        v1093 = v1092;
    }
    if (v1093) {
        const v1094 = object[index];
        const v1095 = eq(v1094, value);
        return v1095;
    }
    return false;
};
const isKeyable = function (value) {
    const v1096 = typeof value;
    var type = v1096;
    const v1097 = type == 'string';
    const v1098 = type == 'number';
    const v1099 = v1097 || v1098;
    const v1100 = type == 'symbol';
    const v1101 = v1099 || v1100;
    const v1102 = type == 'boolean';
    const v1103 = v1101 || v1102;
    const v1104 = value !== '__proto__';
    const v1105 = value === null;
    let v1106;
    if (v1103) {
        v1106 = v1104;
    } else {
        v1106 = v1105;
    }
    return v1106;
};
const isMasked = function (func) {
    const v1107 = !maskSrcKey;
    const v1108 = !v1107;
    const v1109 = maskSrcKey in func;
    const v1110 = v1108 && v1109;
    return v1110;
};
const isPrototype = function (value) {
    const v1111 = value.constructor;
    var Ctor = value && v1111;
    const v1112 = typeof Ctor;
    const v1113 = v1112 == 'function';
    const v1114 = Ctor.prototype;
    const v1115 = v1113 && v1114;
    var proto = v1115 || objectProto;
    const v1116 = value === proto;
    return v1116;
};
const nativeKeysIn = function (object) {
    var result = [];
    const v1117 = object != null;
    if (v1117) {
        let key;
        const v1118 = Object(object);
        for (key in v1118) {
            const v1119 = result.push(key);
            v1119;
        }
    }
    return result;
};
const objectToString = function (value) {
    const v1120 = nativeObjectToString.call(value);
    return v1120;
};
const overRest = function (func, start, transform) {
    const v1121 = start === undefined;
    const v1122 = func.length;
    const v1123 = v1122 - 1;
    let v1124;
    if (v1121) {
        v1124 = v1123;
    } else {
        v1124 = start;
    }
    start = nativeMax(v1124, 0);
    const v1139 = function () {
        var args = arguments;
        const v1125 = -1;
        var index = v1125;
        const v1126 = args.length;
        const v1127 = v1126 - start;
        var length = nativeMax(v1127, 0);
        var array = Array(length);
        const v1128 = ++index;
        let v1129 = v1128 < length;
        while (v1129) {
            const v1130 = start + index;
            const v1131 = args[v1130];
            array[index] = v1131;
            v1129 = v1128 < length;
        }
        const v1132 = -1;
        index = v1132;
        const v1133 = start + 1;
        var otherArgs = Array(v1133);
        const v1134 = ++index;
        let v1135 = v1134 < start;
        while (v1135) {
            const v1136 = args[index];
            otherArgs[index] = v1136;
            v1135 = v1134 < start;
        }
        const v1137 = transform(array);
        otherArgs[start] = v1137;
        const v1138 = apply(func, this, otherArgs);
        return v1138;
    };
    return v1139;
};
var setToString = shortOut(baseSetToString);
const shortOut = function (func) {
    var count = 0;
    var lastCalled = 0;
    const v1146 = function () {
        var stamp = nativeNow();
        const v1140 = stamp - lastCalled;
        var remaining = HOT_SPAN - v1140;
        lastCalled = stamp;
        const v1141 = remaining > 0;
        if (v1141) {
            const v1142 = ++count;
            const v1143 = v1142 >= HOT_COUNT;
            if (v1143) {
                const v1144 = arguments[0];
                return v1144;
            }
        } else {
            count = 0;
        }
        const v1145 = func.apply(undefined, arguments);
        return v1145;
    };
    return v1146;
};
const toSource = function (func) {
    const v1147 = func != null;
    if (v1147) {
        try {
            const v1148 = funcToString.call(func);
            return v1148;
        } catch (e) {
        }
        try {
            const v1149 = func + '';
            return v1149;
        } catch (e) {
        }
    }
    return '';
};
const eq = function (value, other) {
    const v1150 = value === other;
    const v1151 = value !== value;
    const v1152 = other !== other;
    const v1153 = v1151 && v1152;
    const v1154 = v1150 || v1153;
    return v1154;
};
let isArguments;
const v1155 = function () {
    return arguments;
};
const v1156 = v1155();
const v1157 = baseIsArguments(v1156);
const v1164 = function (value) {
    const v1158 = isObjectLike(value);
    const v1159 = hasOwnProperty.call(value, 'callee');
    const v1160 = v1158 && v1159;
    const v1161 = propertyIsEnumerable.call(value, 'callee');
    const v1162 = !v1161;
    const v1163 = v1160 && v1162;
    return v1163;
};
if (v1157) {
    isArguments = baseIsArguments;
} else {
    isArguments = v1164;
}
var isArray = Array.isArray;
const isArrayLike = function (value) {
    const v1165 = value != null;
    const v1166 = value.length;
    const v1167 = isLength(v1166);
    const v1168 = v1165 && v1167;
    const v1169 = isFunction(value);
    const v1170 = !v1169;
    const v1171 = v1168 && v1170;
    return v1171;
};
const isArrayLikeObject = function (value) {
    const v1172 = isObjectLike(value);
    const v1173 = isArrayLike(value);
    const v1174 = v1172 && v1173;
    return v1174;
};
var isBuffer = nativeIsBuffer || stubFalse;
const isFunction = function (value) {
    const v1175 = isObject(value);
    const v1176 = !v1175;
    if (v1176) {
        return false;
    }
    var tag = baseGetTag(value);
    const v1177 = tag == funcTag;
    const v1178 = tag == genTag;
    const v1179 = v1177 || v1178;
    const v1180 = tag == asyncTag;
    const v1181 = v1179 || v1180;
    const v1182 = tag == proxyTag;
    const v1183 = v1181 || v1182;
    return v1183;
};
const isLength = function (value) {
    const v1184 = typeof value;
    const v1185 = v1184 == 'number';
    const v1186 = -1;
    const v1187 = value > v1186;
    const v1188 = v1185 && v1187;
    const v1189 = value % 1;
    const v1190 = v1189 == 0;
    const v1191 = v1188 && v1190;
    const v1192 = value <= MAX_SAFE_INTEGER;
    const v1193 = v1191 && v1192;
    return v1193;
};
const isObject = function (value) {
    const v1194 = typeof value;
    var type = v1194;
    const v1195 = value != null;
    const v1196 = type == 'object';
    const v1197 = type == 'function';
    const v1198 = v1196 || v1197;
    const v1199 = v1195 && v1198;
    return v1199;
};
const isObjectLike = function (value) {
    const v1200 = value != null;
    const v1201 = typeof value;
    const v1202 = v1201 == 'object';
    const v1203 = v1200 && v1202;
    return v1203;
};
const isPlainObject = function (value) {
    const v1204 = isObjectLike(value);
    const v1205 = !v1204;
    const v1206 = baseGetTag(value);
    const v1207 = v1206 != objectTag;
    const v1208 = v1205 || v1207;
    if (v1208) {
        return false;
    }
    var proto = getPrototype(value);
    const v1209 = proto === null;
    if (v1209) {
        return true;
    }
    const v1210 = hasOwnProperty.call(proto, 'constructor');
    const v1211 = proto.constructor;
    var Ctor = v1210 && v1211;
    const v1212 = typeof Ctor;
    const v1213 = v1212 == 'function';
    const v1214 = Ctor instanceof Ctor;
    const v1215 = v1213 && v1214;
    const v1216 = funcToString.call(Ctor);
    const v1217 = v1216 == objectCtorString;
    const v1218 = v1215 && v1217;
    return v1218;
};
let isTypedArray;
const v1219 = baseUnary(nodeIsTypedArray);
if (nodeIsTypedArray) {
    isTypedArray = v1219;
} else {
    isTypedArray = baseIsTypedArray;
}
const toPlainObject = function (value) {
    const v1220 = keysIn(value);
    const v1221 = copyObject(value, v1220);
    return v1221;
};
const keysIn = function (object) {
    const v1222 = isArrayLike(object);
    const v1223 = arrayLikeKeys(object, true);
    const v1224 = baseKeysIn(object);
    let v1225;
    if (v1222) {
        v1225 = v1223;
    } else {
        v1225 = v1224;
    }
    return v1225;
};
const v1227 = function (object, source, srcIndex, customizer) {
    const v1226 = baseMerge(object, source, srcIndex, customizer);
    v1226;
};
var mergeWith = createAssigner(v1227);
const constant = function (value) {
    const v1228 = function () {
        return value;
    };
    return v1228;
};
const identity = function (value) {
    return value;
};
const stubFalse = function () {
    return false;
};
module.exports = mergeWith;