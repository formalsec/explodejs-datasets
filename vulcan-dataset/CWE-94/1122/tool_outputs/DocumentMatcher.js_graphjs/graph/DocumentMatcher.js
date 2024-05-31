'use strict';
let _typeof;
const v667 = typeof Symbol;
const v668 = v667 === 'function';
const v669 = Symbol.iterator;
const v670 = typeof v669;
const v671 = v670 === 'symbol';
const v672 = v668 && v671;
const v674 = function (obj) {
    const v673 = typeof obj;
    return v673;
};
const v683 = function (obj) {
    const v675 = typeof Symbol;
    const v676 = v675 === 'function';
    const v677 = obj && v676;
    const v678 = obj.constructor;
    const v679 = v678 === Symbol;
    const v680 = v677 && v679;
    const v681 = typeof obj;
    let v682;
    if (v680) {
        v682 = 'symbol';
    } else {
        v682 = v681;
    }
    return v682;
};
if (v672) {
    _typeof = v674;
} else {
    _typeof = v683;
}
const v695 = function () {
    const defineProperties = function (target, props) {
        var i = 0;
        const v684 = props.length;
        let v685 = i < v684;
        while (v685) {
            var descriptor = props[i];
            const v687 = descriptor.enumerable;
            descriptor.enumerable = v687 || false;
            descriptor.configurable = true;
            const v688 = 'value' in descriptor;
            if (v688) {
                descriptor.writable = true;
            }
            const v689 = descriptor.key;
            const v690 = Object.defineProperty(target, v689, descriptor);
            v690;
            const v686 = i++;
            v685 = i < v684;
        }
    };
    const v694 = function (Constructor, protoProps, staticProps) {
        if (protoProps) {
            const v691 = Constructor.prototype;
            const v692 = defineProperties(v691, protoProps);
            v692;
        }
        if (staticProps) {
            const v693 = defineProperties(Constructor, staticProps);
            v693;
        }
        return Constructor;
    };
    return v694;
};
var _createClass = v695();
const v696 = { value: true };
const v697 = Object.defineProperty(exports, '__esModule', v696);
v697;
exports.DocumentMatcher = undefined;
exports.ELEMENT_OPERATORS = exports.DocumentMatcher;
exports.regexpElementMatcher = regexpElementMatcher;
exports.equalityElementMatcher = equalityElementMatcher;
exports.makeLookupFunction = makeLookupFunction;
exports.expandArraysInBranches = expandArraysInBranches;
var _checkTypes = require('check-types');
var _checkTypes2 = _interopRequireDefault(_checkTypes);
var _forEach = require('fast.js/forEach');
var _forEach2 = _interopRequireDefault(_forEach);
var _keys2 = require('fast.js/object/keys');
var _keys3 = _interopRequireDefault(_keys2);
var _map2 = require('fast.js/map');
var _map3 = _interopRequireDefault(_map2);
var _some2 = require('fast.js/array/some');
var _some3 = _interopRequireDefault(_some2);
var _every2 = require('fast.js/array/every');
var _every3 = _interopRequireDefault(_every2);
var _indexOf2 = require('fast.js/array/indexOf');
var _indexOf3 = _interopRequireDefault(_indexOf2);
var _geojsonUtils = require('geojson-utils');
var _geojsonUtils2 = _interopRequireDefault(_geojsonUtils);
var _EJSON = require('./EJSON');
var _EJSON2 = _interopRequireDefault(_EJSON);
var _Document = require('./Document');
const _interopRequireDefault = function (obj) {
    const v698 = obj.__esModule;
    const v699 = obj && v698;
    const v700 = { default: obj };
    let v701;
    if (v699) {
        v701 = obj;
    } else {
        v701 = v700;
    }
    return v701;
};
const _classCallCheck = function (instance, Constructor) {
    const v702 = instance instanceof Constructor;
    const v703 = !v702;
    if (v703) {
        const v704 = new TypeError('Cannot call a class as a function');
        throw v704;
    }
};
const v780 = function () {
    const DocumentMatcher = function (selector) {
        const v705 = _classCallCheck(this, DocumentMatcher);
        v705;
        const v706 = {};
        this._paths = v706;
        this._hasGeoQuery = false;
        this._hasWhere = false;
        this._isSimple = true;
        this._matchingDocument = undefined;
        this._selector = null;
        const v707 = this._compileSelector(selector);
        this._docMatcher = v707;
    };
    const v717 = function documentMatches(doc) {
        const v708 = !doc;
        const v709 = typeof doc;
        const v710 = v709 === 'undefined';
        const v711 = _typeof(doc);
        let v712;
        if (v710) {
            v712 = 'undefined';
        } else {
            v712 = v711;
        }
        const v713 = v712 !== 'object';
        const v714 = v708 || v713;
        if (v714) {
            const v715 = Error('documentMatches needs a document');
            throw v715;
        }
        const v716 = this._docMatcher(doc);
        return v716;
    };
    const v718 = {
        key: 'documentMatches',
        value: v717
    };
    const v755 = function _compileSelector(selector) {
        const v719 = selector instanceof Function;
        if (v719) {
            this._isSimple = false;
            this._selector = selector;
            const v720 = this._recordPathUsed('');
            v720;
            const v725 = function (doc) {
                const v721 = selector.call(doc);
                const v722 = !v721;
                const v723 = !v722;
                const v724 = {};
                v724.result = v723;
                return v724;
            };
            return v725;
        }
        const v726 = _Document.selectorIsId;
        const v727 = (0, v726)(selector);
        if (v727) {
            const v728 = {};
            v728._id = selector;
            this._selector = v728;
            const v729 = this._recordPathUsed('_id');
            v729;
            const v734 = function (doc) {
                const v730 = _EJSON2.default;
                const v731 = doc._id;
                const v732 = v730.equals(v731, selector);
                const v733 = {};
                v733.result = v732;
                return v733;
            };
            return v734;
        }
        const v735 = !selector;
        const v736 = '_id' in selector;
        const v737 = selector._id;
        const v738 = !v737;
        const v739 = v736 && v738;
        const v740 = v735 || v739;
        if (v740) {
            this._isSimple = false;
            return nothingMatcher;
        }
        const v741 = typeof selector;
        const v742 = v741 === 'boolean';
        const v743 = _Document.isArray;
        const v744 = (0, v743)(selector);
        const v745 = v742 || v744;
        const v746 = _EJSON2.default;
        const v747 = v746.isBinary(selector);
        const v748 = v745 || v747;
        if (v748) {
            const v749 = 'Invalid selector: ' + selector;
            const v750 = new Error(v749);
            throw v750;
        }
        const v751 = _EJSON2.default;
        const v752 = v751.clone(selector);
        this._selector = v752;
        const v753 = { isRoot: true };
        const v754 = compileDocumentSelector(selector, this, v753);
        return v754;
    };
    const v756 = {
        key: '_compileSelector',
        value: v755
    };
    const v758 = function _recordPathUsed(path) {
        const v757 = this._paths;
        v757[path] = true;
    };
    const v759 = {
        key: '_recordPathUsed',
        value: v758
    };
    const v767 = function _getPaths() {
        const v760 = _checkTypes2.default;
        const v761 = this._paths;
        const v762 = v760.object(v761);
        const v763 = _keys3.default;
        const v764 = this._paths;
        const v765 = (0, v763)(v764);
        let v766;
        if (v762) {
            v766 = v765;
        } else {
            v766 = null;
        }
        return v766;
    };
    const v768 = {
        key: '_getPaths',
        value: v767
    };
    const v770 = function get() {
        const v769 = this._hasGeoQuery;
        return v769;
    };
    const v771 = {
        key: 'hasGeoQuery',
        get: v770
    };
    const v773 = function get() {
        const v772 = this._hasWhere;
        return v772;
    };
    const v774 = {
        key: 'hasWhere',
        get: v773
    };
    const v776 = function get() {
        const v775 = this._isSimple;
        return v775;
    };
    const v777 = {
        key: 'isSimple',
        get: v776
    };
    const v778 = [
        v718,
        v756,
        v759,
        v768,
        v771,
        v774,
        v777
    ];
    const v779 = _createClass(DocumentMatcher, v778);
    v779;
    return DocumentMatcher;
};
const v781 = v780();
exports.DocumentMatcher = v781;
var DocumentMatcher = exports.DocumentMatcher;
exports.default = DocumentMatcher;
var compileDocumentSelector = function compileDocumentSelector(docSelector, matcher) {
    let options;
    const v782 = arguments.length;
    const v783 = v782 <= 2;
    const v784 = arguments[2];
    const v785 = v784 === undefined;
    const v786 = v783 || v785;
    const v787 = {};
    const v788 = arguments[2];
    if (v786) {
        options = v787;
    } else {
        options = v788;
    }
    var docMatchers = [];
    const v789 = _forEach2.default;
    const v806 = function (subSelector, key) {
        const v790 = key.substr(0, 1);
        const v791 = v790 === '$';
        if (v791) {
            const v792 = LOGICAL_OPERATORS.hasOwnProperty(key);
            const v793 = !v792;
            if (v793) {
                const v794 = 'Unrecognized logical operator: ' + key;
                const v795 = new Error(v794);
                throw v795;
            }
            matcher._isSimple = false;
            const v796 = options.inElemMatch;
            const v797 = LOGICAL_OPERATORS[key](subSelector, matcher, v796);
            const v798 = docMatchers.push(v797);
            v798;
        } else {
            const v799 = options.inElemMatch;
            const v800 = !v799;
            if (v800) {
                const v801 = matcher._recordPathUsed(key);
                v801;
            }
            var lookUpByIndex = makeLookupFunction(key);
            const v802 = options.isRoot;
            var valueMatcher = compileValueSelector(subSelector, matcher, v802);
            const v804 = function (doc) {
                var branchValues = lookUpByIndex(doc);
                const v803 = valueMatcher(branchValues);
                return v803;
            };
            const v805 = docMatchers.push(v804);
            v805;
        }
    };
    const v807 = (0, v789)(docSelector, v806);
    v807;
    const v808 = andDocumentMatchers(docMatchers);
    return v808;
};
var compileValueSelector = function compileValueSelector(valueSelector, matcher, isRoot) {
    const v809 = valueSelector instanceof RegExp;
    if (v809) {
        matcher._isSimple = false;
        const v810 = regexpElementMatcher(valueSelector);
        const v811 = convertElementMatcherToBranchedMatcher(v810);
        return v811;
    } else {
        const v812 = _Document.isOperatorObject;
        const v813 = (0, v812)(valueSelector);
        if (v813) {
            const v814 = operatorBranchedMatcher(valueSelector, matcher, isRoot);
            return v814;
        } else {
            const v815 = equalityElementMatcher(valueSelector);
            const v816 = convertElementMatcherToBranchedMatcher(v815);
            return v816;
        }
    }
};
var convertElementMatcherToBranchedMatcher = function convertElementMatcherToBranchedMatcher(elementMatcher) {
    let options;
    const v817 = arguments.length;
    const v818 = v817 <= 1;
    const v819 = arguments[1];
    const v820 = v819 === undefined;
    const v821 = v818 || v820;
    const v822 = {};
    const v823 = arguments[1];
    if (v821) {
        options = v822;
    } else {
        options = v823;
    }
    const v838 = function (branches) {
        var expanded = branches;
        const v824 = options.dontExpandLeafArrays;
        const v825 = !v824;
        if (v825) {
            const v826 = options.dontIncludeLeafArrays;
            expanded = expandArraysInBranches(branches, v826);
        }
        var ret = {};
        const v827 = _some3.default;
        const v836 = function (element) {
            const v828 = element.value;
            var matched = elementMatcher(v828);
            const v829 = typeof matched;
            const v830 = v829 === 'number';
            if (v830) {
                const v831 = element.arrayIndices;
                const v832 = !v831;
                if (v832) {
                    element.arrayIndices = [matched];
                }
                matched = true;
            }
            const v833 = element.arrayIndices;
            const v834 = matched && v833;
            if (v834) {
                const v835 = element.arrayIndices;
                ret.arrayIndices = v835;
            }
            return matched;
        };
        const v837 = (0, v827)(expanded, v836);
        ret.result = v837;
        return ret;
    };
    return v838;
};
const regexpElementMatcher = function (regexp) {
    const v846 = function (value) {
        const v839 = value instanceof RegExp;
        if (v839) {
            const v840 = String(value);
            const v841 = String(regexp);
            const v842 = v840 === v841;
            return v842;
        }
        const v843 = typeof value;
        const v844 = v843 !== 'string';
        if (v844) {
            return false;
        }
        regexp.lastIndex = 0;
        const v845 = regexp.test(value);
        return v845;
    };
    return v846;
};
const equalityElementMatcher = function (elementSelector) {
    const v847 = _Document.isOperatorObject;
    const v848 = (0, v847)(elementSelector);
    if (v848) {
        const v849 = Error('Can\'t create equalityValueSelector for operator object');
        throw v849;
    }
    const v850 = elementSelector == null;
    if (v850) {
        const v852 = function (value) {
            const v851 = value == null;
            return v851;
        };
        return v852;
    }
    const v855 = function (value) {
        const v853 = _Document.MongoTypeComp;
        const v854 = v853._equal(elementSelector, value);
        return v854;
    };
    return v855;
};
var operatorBranchedMatcher = function operatorBranchedMatcher(valueSelector, matcher, isRoot) {
    var operatorMatchers = [];
    const v856 = _forEach2.default;
    const v893 = function (operand, operator) {
        const v857 = _indexOf3.default;
        const v858 = [
            '$lt',
            '$lte',
            '$gt',
            '$gte'
        ];
        const v859 = (0, v857)(v858, operator);
        const v860 = v859 >= 0;
        const v861 = _checkTypes2.default;
        const v862 = v861.number(operand);
        var simpleRange = v860 && v862;
        const v863 = operator === '$ne';
        const v864 = _checkTypes2.default;
        const v865 = v864.object(operand);
        const v866 = !v865;
        var simpleInequality = v863 && v866;
        const v867 = _indexOf3.default;
        const v868 = [
            '$in',
            '$nin'
        ];
        const v869 = (0, v867)(v868, operator);
        const v870 = v869 >= 0;
        const v871 = _checkTypes2.default;
        const v872 = v871.array(operand);
        const v873 = v870 && v872;
        const v874 = _some3.default;
        const v875 = _checkTypes2.default;
        const v876 = v875.object;
        const v877 = (0, v874)(operand, v876);
        const v878 = !v877;
        var simpleInclusion = v873 && v878;
        const v879 = operator === '$eq';
        const v880 = v879 || simpleRange;
        const v881 = v880 || simpleInclusion;
        const v882 = v881 || simpleInequality;
        const v883 = !v882;
        if (v883) {
            matcher._isSimple = false;
        }
        const v884 = VALUE_OPERATORS.hasOwnProperty(operator);
        if (v884) {
            const v885 = VALUE_OPERATORS[operator](operand, valueSelector, matcher, isRoot);
            const v886 = operatorMatchers.push(v885);
            v886;
        } else {
            const v887 = ELEMENT_OPERATORS.hasOwnProperty(operator);
            if (v887) {
                var options = ELEMENT_OPERATORS[operator];
                const v888 = options.compileElementSelector(operand, valueSelector, matcher);
                const v889 = convertElementMatcherToBranchedMatcher(v888, options);
                const v890 = operatorMatchers.push(v889);
                v890;
            } else {
                const v891 = 'Unrecognized operator: ' + operator;
                const v892 = new Error(v891);
                throw v892;
            }
        }
    };
    const v894 = (0, v856)(valueSelector, v893);
    v894;
    const v895 = andBranchedMatchers(operatorMatchers);
    return v895;
};
var compileArrayOfDocumentSelectors = function compileArrayOfDocumentSelectors(selectors, matcher, inElemMatch) {
    const v896 = _Document.isArray;
    const v897 = (0, v896)(selectors);
    const v898 = !v897;
    const v899 = _checkTypes2.default;
    const v900 = v899.emptyArray(selectors);
    const v901 = v898 || v900;
    if (v901) {
        const v902 = Error('$and/$or/$nor must be nonempty array');
        throw v902;
    }
    const v903 = _map3.default;
    const v910 = function (subSelector) {
        const v904 = _Document.isPlainObject;
        const v905 = (0, v904)(subSelector);
        const v906 = !v905;
        if (v906) {
            const v907 = Error('$or/$and/$nor entries need to be full objects');
            throw v907;
        }
        const v908 = { inElemMatch: inElemMatch };
        const v909 = compileDocumentSelector(subSelector, matcher, v908);
        return v909;
    };
    const v911 = (0, v903)(selectors, v910);
    return v911;
};
const v913 = function $and(subSelector, matcher, inElemMatch) {
    var matchers = compileArrayOfDocumentSelectors(subSelector, matcher, inElemMatch);
    const v912 = andDocumentMatchers(matchers);
    return v912;
};
const v923 = function $or(subSelector, matcher, inElemMatch) {
    var matchers = compileArrayOfDocumentSelectors(subSelector, matcher, inElemMatch);
    const v914 = matchers.length;
    const v915 = v914 === 1;
    if (v915) {
        const v916 = matchers[0];
        return v916;
    }
    const v922 = function (doc) {
        const v917 = _some3.default;
        const v920 = function (f) {
            const v918 = f(doc);
            const v919 = v918.result;
            return v919;
        };
        var result = (0, v917)(matchers, v920);
        const v921 = {};
        v921.result = result;
        return v921;
    };
    return v922;
};
const v931 = function $nor(subSelector, matcher, inElemMatch) {
    var matchers = compileArrayOfDocumentSelectors(subSelector, matcher, inElemMatch);
    const v930 = function (doc) {
        const v924 = _every3.default;
        const v928 = function (f) {
            const v925 = f(doc);
            const v926 = v925.result;
            const v927 = !v926;
            return v927;
        };
        var result = (0, v924)(matchers, v928);
        const v929 = {};
        v929.result = result;
        return v929;
    };
    return v930;
};
const v939 = function $where(selectorValue, matcher) {
    const v932 = matcher._recordPathUsed('');
    v932;
    matcher._hasWhere = true;
    const v933 = selectorValue instanceof Function;
    const v934 = !v933;
    if (v934) {
        const v935 = 'return ' + selectorValue;
        selectorValue = Function('obj', v935);
    }
    const v938 = function (doc) {
        const v936 = selectorValue.call(doc, doc);
        const v937 = {};
        v937.result = v936;
        return v937;
    };
    return v938;
};
const v942 = function $comment() {
    const v941 = function () {
        const v940 = {};
        v940.result = true;
        return v940;
    };
    return v941;
};
var LOGICAL_OPERATORS = {};
LOGICAL_OPERATORS.$and = v913;
LOGICAL_OPERATORS.$or = v923;
LOGICAL_OPERATORS.$nor = v931;
LOGICAL_OPERATORS.$where = v939;
LOGICAL_OPERATORS.$comment = v942;
var invertBranchedMatcher = function invertBranchedMatcher(branchedMatcher) {
    const v946 = function (branchValues) {
        var invertMe = branchedMatcher(branchValues);
        const v943 = invertMe.result;
        const v944 = !v943;
        const v945 = {};
        v945.result = v944;
        return v945;
    };
    return v946;
};
const v949 = function $not(operand, valueSelector, matcher) {
    const v947 = compileValueSelector(operand, matcher);
    const v948 = invertBranchedMatcher(v947);
    return v948;
};
const v953 = function $ne(operand) {
    const v950 = equalityElementMatcher(operand);
    const v951 = convertElementMatcherToBranchedMatcher(v950);
    const v952 = invertBranchedMatcher(v951);
    return v952;
};
const v958 = function $nin(operand) {
    const v954 = ELEMENT_OPERATORS.$in;
    const v955 = v954.compileElementSelector(operand);
    const v956 = convertElementMatcherToBranchedMatcher(v955);
    const v957 = invertBranchedMatcher(v956);
    return v957;
};
const v963 = function $exists(operand) {
    const v960 = function (value) {
        const v959 = value !== undefined;
        return v959;
    };
    var exists = convertElementMatcherToBranchedMatcher(v960);
    const v961 = invertBranchedMatcher(exists);
    let v962;
    if (operand) {
        v962 = exists;
    } else {
        v962 = v961;
    }
    return v962;
};
const v971 = function $options(operand, valueSelector) {
    const v964 = _checkTypes2.default;
    const v965 = v964.object(valueSelector);
    const v966 = !v965;
    const v967 = valueSelector.hasOwnProperty('$regex');
    const v968 = !v967;
    const v969 = v966 || v968;
    if (v969) {
        const v970 = Error('$options needs a $regex');
        throw v970;
    }
    return everythingMatcher;
};
const v975 = function $maxDistance(operand, valueSelector) {
    const v972 = valueSelector.$near;
    const v973 = !v972;
    if (v973) {
        const v974 = Error('$maxDistance needs a $near');
        throw v974;
    }
    return everythingMatcher;
};
const v991 = function $all(operand, valueSelector, matcher) {
    const v976 = _Document.isArray;
    const v977 = (0, v976)(operand);
    const v978 = !v977;
    if (v978) {
        const v979 = Error('$all requires array');
        throw v979;
    }
    const v980 = _checkTypes2.default;
    const v981 = v980.emptyArray(operand);
    if (v981) {
        return nothingMatcher;
    }
    var branchedMatchers = [];
    const v982 = _forEach2.default;
    const v988 = function (criterion) {
        const v983 = _Document.isOperatorObject;
        const v984 = (0, v983)(criterion);
        if (v984) {
            const v985 = Error('no $ expressions in $all');
            throw v985;
        }
        const v986 = compileValueSelector(criterion, matcher);
        const v987 = branchedMatchers.push(v986);
        v987;
    };
    const v989 = (0, v982)(operand, v988);
    v989;
    const v990 = andBranchedMatchers(branchedMatchers);
    return v990;
};
const v1044 = function $near(operand, valueSelector, matcher, isRoot) {
    const v992 = !isRoot;
    if (v992) {
        const v993 = Error('$near can\'t be inside another $ operator');
        throw v993;
    }
    matcher._hasGeoQuery = true;
    var maxDistance;
    var point;
    var distance;
    const v994 = _Document.isPlainObject;
    const v995 = (0, v994)(operand);
    const v996 = operand.hasOwnProperty('$geometry');
    const v997 = v995 && v996;
    if (v997) {
        maxDistance = operand.$maxDistance;
        point = operand.$geometry;
        const distance = function (value) {
            const v998 = !value;
            const v999 = value.type;
            const v1000 = !v999;
            const v1001 = v998 || v1000;
            if (v1001) {
                return null;
            }
            const v1002 = value.type;
            const v1003 = v1002 === 'Point';
            if (v1003) {
                const v1004 = _geojsonUtils2.default;
                const v1005 = v1004.pointDistance(point, value);
                return v1005;
            } else {
                const v1006 = _geojsonUtils2.default;
                const v1007 = v1006.geometryWithinRadius(value, point, maxDistance);
                const v1008 = maxDistance + 1;
                let v1009;
                if (v1007) {
                    v1009 = 0;
                } else {
                    v1009 = v1008;
                }
                return v1009;
            }
        };
        distance = distance;
    } else {
        maxDistance = valueSelector.$maxDistance;
        const v1010 = _Document.isArray;
        const v1011 = (0, v1010)(operand);
        const v1012 = !v1011;
        const v1013 = _Document.isPlainObject;
        const v1014 = (0, v1013)(operand);
        const v1015 = !v1014;
        const v1016 = v1012 && v1015;
        if (v1016) {
            const v1017 = Error('$near argument must be coordinate pair or GeoJSON');
            throw v1017;
        }
        point = pointToArray(operand);
        const distance = function (value) {
            const v1018 = _Document.isArray;
            const v1019 = (0, v1018)(value);
            const v1020 = !v1019;
            const v1021 = _Document.isPlainObject;
            const v1022 = (0, v1021)(value);
            const v1023 = !v1022;
            const v1024 = v1020 && v1023;
            if (v1024) {
                return null;
            }
            const v1025 = distanceCoordinatePairs(point, value);
            return v1025;
        };
        distance = distance;
    }
    const v1043 = function (branchedValues) {
        branchedValues = expandArraysInBranches(branchedValues);
        var result = {};
        result.result = false;
        const v1026 = _forEach2.default;
        const v1041 = function (branch) {
            const v1027 = branch.value;
            var curDistance = distance(v1027);
            const v1028 = curDistance === null;
            const v1029 = curDistance > maxDistance;
            const v1030 = v1028 || v1029;
            if (v1030) {
                return;
            }
            const v1031 = result.distance;
            const v1032 = v1031 !== undefined;
            const v1033 = result.distance;
            const v1034 = v1033 <= curDistance;
            const v1035 = v1032 && v1034;
            if (v1035) {
                return;
            }
            result.result = true;
            result.distance = curDistance;
            const v1036 = branch.arrayIndices;
            const v1037 = !v1036;
            if (v1037) {
                const v1038 = result.arrayIndices;
                const v1039 = delete v1038;
                v1039;
            } else {
                const v1040 = branch.arrayIndices;
                result.arrayIndices = v1040;
            }
        };
        const v1042 = (0, v1026)(branchedValues, v1041);
        v1042;
        return result;
    };
    return v1043;
};
var VALUE_OPERATORS = {};
VALUE_OPERATORS.$not = v949;
VALUE_OPERATORS.$ne = v953;
VALUE_OPERATORS.$nin = v958;
VALUE_OPERATORS.$exists = v963;
VALUE_OPERATORS.$options = v971;
VALUE_OPERATORS.$maxDistance = v975;
VALUE_OPERATORS.$all = v991;
VALUE_OPERATORS.$near = v1044;
var distanceCoordinatePairs = function distanceCoordinatePairs(a, b) {
    a = pointToArray(a);
    b = pointToArray(b);
    const v1045 = a[0];
    const v1046 = b[0];
    var x = v1045 - v1046;
    const v1047 = a[1];
    const v1048 = b[1];
    var y = v1047 - v1048;
    const v1049 = _checkTypes2.default;
    const v1050 = v1049.number(x);
    const v1051 = !v1050;
    const v1052 = _checkTypes2.default;
    const v1053 = v1052.number(y);
    const v1054 = !v1053;
    const v1055 = v1051 || v1054;
    if (v1055) {
        return null;
    }
    const v1056 = x * x;
    const v1057 = y * y;
    const v1058 = v1056 + v1057;
    const v1059 = Math.sqrt(v1058);
    return v1059;
};
var pointToArray = function pointToArray(point) {
    const v1060 = _map3.default;
    const v1061 = function (x) {
        return x;
    };
    const v1062 = (0, v1060)(point, v1061);
    return v1062;
};
var makeInequality = function makeInequality(cmpValueComparator) {
    const v1076 = function compileElementSelector(operand) {
        const v1063 = _Document.isArray;
        const v1064 = (0, v1063)(operand);
        if (v1064) {
            const v1065 = function () {
                return false;
            };
            return v1065;
        }
        const v1066 = operand === undefined;
        if (v1066) {
            operand = null;
        }
        const v1067 = _Document.MongoTypeComp;
        var operandType = v1067._type(operand);
        const v1075 = function (value) {
            const v1068 = value === undefined;
            if (v1068) {
                value = null;
            }
            const v1069 = _Document.MongoTypeComp;
            const v1070 = v1069._type(value);
            const v1071 = v1070 !== operandType;
            if (v1071) {
                return false;
            }
            const v1072 = _Document.MongoTypeComp;
            const v1073 = v1072._cmp(value, operand);
            const v1074 = cmpValueComparator(v1073);
            return v1074;
        };
        return v1075;
    };
    const v1077 = {};
    v1077.compileElementSelector = v1076;
    return v1077;
};
const v1079 = function (cmpValue) {
    const v1078 = cmpValue < 0;
    return v1078;
};
const v1080 = makeInequality(v1079);
const v1082 = function (cmpValue) {
    const v1081 = cmpValue > 0;
    return v1081;
};
const v1083 = makeInequality(v1082);
const v1085 = function (cmpValue) {
    const v1084 = cmpValue <= 0;
    return v1084;
};
const v1086 = makeInequality(v1085);
const v1088 = function (cmpValue) {
    const v1087 = cmpValue >= 0;
    return v1087;
};
const v1089 = makeInequality(v1088);
const v1111 = function compileElementSelector(operand) {
    const v1090 = _Document.isArray;
    const v1091 = (0, v1090)(operand);
    const v1092 = operand.length;
    const v1093 = v1092 === 2;
    const v1094 = v1091 && v1093;
    const v1095 = operand[0];
    const v1096 = typeof v1095;
    const v1097 = v1096 === 'number';
    const v1098 = v1094 && v1097;
    const v1099 = operand[1];
    const v1100 = typeof v1099;
    const v1101 = v1100 === 'number';
    const v1102 = v1098 && v1101;
    const v1103 = !v1102;
    if (v1103) {
        const v1104 = Error('argument to $mod must be an array of two numbers');
        throw v1104;
    }
    var divisor = operand[0];
    var remainder = operand[1];
    const v1110 = function (value) {
        const v1105 = typeof value;
        const v1106 = v1105 === 'number';
        const v1107 = value % divisor;
        const v1108 = v1107 === remainder;
        const v1109 = v1106 && v1108;
        return v1109;
    };
    return v1110;
};
const v1112 = {};
v1112.compileElementSelector = v1111;
const v1134 = function compileElementSelector(operand) {
    const v1113 = _Document.isArray;
    const v1114 = (0, v1113)(operand);
    const v1115 = !v1114;
    if (v1115) {
        const v1116 = Error('$in needs an array');
        throw v1116;
    }
    var elementMatchers = [];
    const v1117 = _forEach2.default;
    const v1126 = function (option) {
        const v1118 = option instanceof RegExp;
        if (v1118) {
            const v1119 = regexpElementMatcher(option);
            const v1120 = elementMatchers.push(v1119);
            v1120;
        } else {
            const v1121 = _Document.isOperatorObject;
            const v1122 = (0, v1121)(option);
            if (v1122) {
                const v1123 = Error('cannot nest $ under $in');
                throw v1123;
            } else {
                const v1124 = equalityElementMatcher(option);
                const v1125 = elementMatchers.push(v1124);
                v1125;
            }
        }
    };
    const v1127 = (0, v1117)(operand, v1126);
    v1127;
    const v1133 = function (value) {
        const v1128 = value === undefined;
        if (v1128) {
            value = null;
        }
        const v1129 = _some3.default;
        const v1131 = function (e) {
            const v1130 = e(value);
            return v1130;
        };
        const v1132 = (0, v1129)(elementMatchers, v1131);
        return v1132;
    };
    return v1133;
};
const v1135 = {};
v1135.compileElementSelector = v1134;
const v1147 = function compileElementSelector(operand) {
    const v1136 = typeof operand;
    const v1137 = v1136 === 'string';
    if (v1137) {
        operand = 0;
    } else {
        const v1138 = typeof operand;
        const v1139 = v1138 !== 'number';
        if (v1139) {
            const v1140 = Error('$size needs a number');
            throw v1140;
        }
    }
    const v1146 = function (value) {
        const v1141 = _Document.isArray;
        const v1142 = (0, v1141)(value);
        const v1143 = value.length;
        const v1144 = v1143 === operand;
        const v1145 = v1142 && v1144;
        return v1145;
    };
    return v1146;
};
const v1148 = {};
v1148.dontExpandLeafArrays = true;
v1148.compileElementSelector = v1147;
const v1158 = function compileElementSelector(operand) {
    const v1149 = typeof operand;
    const v1150 = v1149 !== 'number';
    if (v1150) {
        const v1151 = Error('$type needs a number');
        throw v1151;
    }
    const v1157 = function (value) {
        const v1152 = value !== undefined;
        const v1153 = _Document.MongoTypeComp;
        const v1154 = v1153._type(value);
        const v1155 = v1154 === operand;
        const v1156 = v1152 && v1155;
        return v1156;
    };
    return v1157;
};
const v1159 = {};
v1159.dontIncludeLeafArrays = true;
v1159.compileElementSelector = v1158;
const v1176 = function compileElementSelector(operand, valueSelector) {
    const v1160 = typeof operand;
    const v1161 = v1160 === 'string';
    const v1162 = operand instanceof RegExp;
    const v1163 = v1161 || v1162;
    const v1164 = !v1163;
    if (v1164) {
        const v1165 = Error('$regex has to be a string or RegExp');
        throw v1165;
    }
    var regexp;
    const v1166 = valueSelector.$options;
    const v1167 = v1166 !== undefined;
    if (v1167) {
        const v1168 = valueSelector.$options;
        const v1169 = /[^gim]/.test(v1168);
        if (v1169) {
            const v1170 = new Error('Only the i, m, and g regexp options are supported');
            throw v1170;
        }
        let regexSource;
        const v1171 = operand instanceof RegExp;
        const v1172 = operand.source;
        if (v1171) {
            regexSource = v1172;
        } else {
            regexSource = operand;
        }
        const v1173 = valueSelector.$options;
        regexp = new RegExp(regexSource, v1173);
    } else {
        const v1174 = operand instanceof RegExp;
        if (v1174) {
            regexp = operand;
        } else {
            regexp = new RegExp(operand);
        }
    }
    const v1175 = regexpElementMatcher(regexp);
    return v1175;
};
const v1177 = {};
v1177.compileElementSelector = v1176;
const v1202 = function compileElementSelector(operand, valueSelector, matcher) {
    const v1178 = _Document.isPlainObject;
    const v1179 = (0, v1178)(operand);
    const v1180 = !v1179;
    if (v1180) {
        const v1181 = Error('$elemMatch need an object');
        throw v1181;
    }
    var subMatcher;
    var isDocMatcher;
    const v1182 = _Document.isOperatorObject;
    const v1183 = (0, v1182)(operand, true);
    if (v1183) {
        subMatcher = compileValueSelector(operand, matcher);
        isDocMatcher = false;
    } else {
        const v1184 = { inElemMatch: true };
        subMatcher = compileDocumentSelector(operand, matcher, v1184);
        isDocMatcher = true;
    }
    const v1201 = function (value) {
        const v1185 = _Document.isArray;
        const v1186 = (0, v1185)(value);
        const v1187 = !v1186;
        if (v1187) {
            return false;
        }
        var i = 0;
        const v1188 = value.length;
        let v1189 = i < v1188;
        while (v1189) {
            var arrayElement = value[i];
            var arg;
            if (isDocMatcher) {
                const v1191 = _Document.isPlainObject;
                const v1192 = (0, v1191)(arrayElement);
                const v1193 = !v1192;
                const v1194 = _Document.isArray;
                const v1195 = (0, v1194)(arrayElement);
                const v1196 = !v1195;
                const v1197 = v1193 && v1196;
                if (v1197) {
                    return false;
                }
                arg = arrayElement;
            } else {
                const v1198 = {
                    value: arrayElement,
                    dontIterate: true
                };
                arg = [v1198];
            }
            const v1199 = subMatcher(arg);
            const v1200 = v1199.result;
            if (v1200) {
                return i;
            }
            const v1190 = ++i;
            v1189 = i < v1188;
        }
        return false;
    };
    return v1201;
};
const v1203 = {};
v1203.dontExpandLeafArrays = true;
v1203.compileElementSelector = v1202;
const v1204 = {};
v1204.$lt = v1080;
v1204.$gt = v1083;
v1204.$lte = v1086;
v1204.$gte = v1089;
v1204.$mod = v1112;
v1204.$in = v1135;
v1204.$size = v1148;
v1204.$type = v1159;
v1204.$regex = v1177;
v1204.$elemMatch = v1203;
exports.ELEMENT_OPERATORS = v1204;
var ELEMENT_OPERATORS = exports.ELEMENT_OPERATORS;
const makeLookupFunction = function (key, options) {
    const v1205 = {};
    options = options || v1205;
    var parts = key.split('.');
    let firstPart;
    const v1206 = parts.length;
    const v1207 = parts[0];
    if (v1206) {
        firstPart = v1207;
    } else {
        firstPart = '';
    }
    const v1208 = _Document.isNumericKey;
    var firstPartIsNumeric = (0, v1208)(firstPart);
    const v1209 = parts.length;
    const v1210 = v1209 >= 2;
    const v1211 = _Document.isNumericKey;
    const v1212 = parts[1];
    const v1213 = (0, v1211)(v1212);
    var nextPartIsNumeric = v1210 && v1213;
    var lookupRest;
    const v1214 = parts.length;
    const v1215 = v1214 > 1;
    if (v1215) {
        const v1216 = parts.slice(1);
        const v1217 = v1216.join('.');
        lookupRest = makeLookupFunction(v1217);
    }
    var omitUnnecessaryFields = function omitUnnecessaryFields(retVal) {
        const v1218 = retVal.dontIterate;
        const v1219 = !v1218;
        if (v1219) {
            const v1220 = retVal.dontIterate;
            const v1221 = delete v1220;
            v1221;
        }
        const v1222 = retVal.arrayIndices;
        const v1223 = retVal.arrayIndices;
        const v1224 = v1223.length;
        const v1225 = !v1224;
        const v1226 = v1222 && v1225;
        if (v1226) {
            const v1227 = retVal.arrayIndices;
            const v1228 = delete v1227;
            v1228;
        }
        return retVal;
    };
    const v1275 = function (doc, arrayIndices) {
        const v1229 = !arrayIndices;
        if (v1229) {
            arrayIndices = [];
        }
        const v1230 = _Document.isArray;
        const v1231 = (0, v1230)(doc);
        if (v1231) {
            const v1232 = doc.length;
            const v1233 = firstPart < v1232;
            const v1234 = firstPartIsNumeric && v1233;
            const v1235 = !v1234;
            if (v1235) {
                const v1236 = [];
                return v1236;
            }
            const v1237 = +firstPart;
            arrayIndices = arrayIndices.concat(v1237, 'x');
        }
        var firstLevel = doc[firstPart];
        const v1238 = !lookupRest;
        if (v1238) {
            const v1239 = _Document.isArray;
            const v1240 = (0, v1239)(doc);
            const v1241 = _Document.isArray;
            const v1242 = (0, v1241)(firstLevel);
            const v1243 = v1240 && v1242;
            const v1244 = {
                value: firstLevel,
                dontIterate: v1243,
                arrayIndices: arrayIndices
            };
            const v1245 = omitUnnecessaryFields(v1244);
            const v1246 = [v1245];
            return v1246;
        }
        const v1247 = _Document.isIndexable;
        const v1248 = (0, v1247)(firstLevel);
        const v1249 = !v1248;
        if (v1249) {
            const v1250 = _Document.isArray;
            const v1251 = (0, v1250)(doc);
            if (v1251) {
                const v1252 = [];
                return v1252;
            }
            const v1253 = {
                value: undefined,
                arrayIndices: arrayIndices
            };
            const v1254 = omitUnnecessaryFields(v1253);
            const v1255 = [v1254];
            return v1255;
        }
        var result = [];
        var appendToResult = function appendToResult(more) {
            const v1256 = Array.prototype;
            const v1257 = v1256.push;
            const v1258 = v1257.apply(result, more);
            v1258;
        };
        const v1259 = lookupRest(firstLevel, arrayIndices);
        const v1260 = appendToResult(v1259);
        v1260;
        const v1261 = _Document.isArray;
        const v1262 = (0, v1261)(firstLevel);
        const v1263 = options.forSort;
        const v1264 = nextPartIsNumeric && v1263;
        const v1265 = !v1264;
        const v1266 = v1262 && v1265;
        if (v1266) {
            const v1267 = _forEach2.default;
            const v1273 = function (branch, arrayIndex) {
                const v1268 = _Document.isPlainObject;
                const v1269 = (0, v1268)(branch);
                if (v1269) {
                    const v1270 = arrayIndices.concat(arrayIndex);
                    const v1271 = lookupRest(branch, v1270);
                    const v1272 = appendToResult(v1271);
                    v1272;
                }
            };
            const v1274 = (0, v1267)(firstLevel, v1273);
            v1274;
        }
        return result;
    };
    return v1275;
};
const expandArraysInBranches = function (branches, skipTheArrays) {
    var branchesOut = [];
    const v1276 = _forEach2.default;
    const v1301 = function (branch) {
        const v1277 = _Document.isArray;
        const v1278 = branch.value;
        var thisIsArray = (0, v1277)(v1278);
        const v1279 = skipTheArrays && thisIsArray;
        const v1280 = branch.dontIterate;
        const v1281 = !v1280;
        const v1282 = v1279 && v1281;
        const v1283 = !v1282;
        if (v1283) {
            const v1284 = branch.value;
            const v1285 = branch.arrayIndices;
            const v1286 = {
                value: v1284,
                arrayIndices: v1285
            };
            const v1287 = branchesOut.push(v1286);
            v1287;
        }
        const v1288 = branch.dontIterate;
        const v1289 = !v1288;
        const v1290 = thisIsArray && v1289;
        if (v1290) {
            const v1291 = _forEach2.default;
            const v1292 = branch.value;
            const v1299 = function (leaf, i) {
                const v1293 = branch.arrayIndices;
                const v1294 = [];
                const v1295 = v1293 || v1294;
                const v1296 = v1295.concat(i);
                const v1297 = {
                    value: leaf,
                    arrayIndices: v1296
                };
                const v1298 = branchesOut.push(v1297);
                v1298;
            };
            const v1300 = (0, v1291)(v1292, v1299);
            v1300;
        }
    };
    const v1302 = (0, v1276)(branches, v1301);
    v1302;
    return branchesOut;
};
var nothingMatcher = function nothingMatcher(docOrBranchedValues) {
    const v1303 = {};
    v1303.result = false;
    return v1303;
};
var everythingMatcher = function everythingMatcher(docOrBranchedValues) {
    const v1304 = {};
    v1304.result = true;
    return v1304;
};
var andSomeMatchers = function andSomeMatchers(subMatchers) {
    const v1305 = subMatchers.length;
    const v1306 = v1305 === 0;
    if (v1306) {
        return everythingMatcher;
    }
    const v1307 = subMatchers.length;
    const v1308 = v1307 === 1;
    if (v1308) {
        const v1309 = subMatchers[0];
        return v1309;
    }
    const v1332 = function (docOrBranches) {
        var ret = {};
        const v1310 = _every3.default;
        const v1324 = function (f) {
            var subResult = f(docOrBranches);
            const v1311 = subResult.result;
            const v1312 = subResult.distance;
            const v1313 = v1312 !== undefined;
            const v1314 = v1311 && v1313;
            const v1315 = ret.distance;
            const v1316 = v1315 === undefined;
            const v1317 = v1314 && v1316;
            if (v1317) {
                const v1318 = subResult.distance;
                ret.distance = v1318;
            }
            const v1319 = subResult.result;
            const v1320 = subResult.arrayIndices;
            const v1321 = v1319 && v1320;
            if (v1321) {
                const v1322 = subResult.arrayIndices;
                ret.arrayIndices = v1322;
            }
            const v1323 = subResult.result;
            return v1323;
        };
        const v1325 = (0, v1310)(subMatchers, v1324);
        ret.result = v1325;
        const v1326 = ret.result;
        const v1327 = !v1326;
        if (v1327) {
            const v1328 = ret.distance;
            const v1329 = delete v1328;
            v1329;
            const v1330 = ret.arrayIndices;
            const v1331 = delete v1330;
            v1331;
        }
        return ret;
    };
    return v1332;
};
var andDocumentMatchers = andSomeMatchers;
var andBranchedMatchers = andSomeMatchers;