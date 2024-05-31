const v5524 = function (global, factory) {
    const v5507 = typeof exports;
    const v5508 = v5507 === 'object';
    const v5509 = typeof module;
    const v5510 = v5509 !== 'undefined';
    const v5511 = v5508 && v5510;
    const v5512 = factory();
    const v5513 = typeof define;
    const v5514 = v5513 === 'function';
    const v5515 = define.amd;
    const v5516 = v5514 && v5515;
    const v5517 = define(factory);
    const v5518 = typeof globalThis;
    const v5519 = v5518 !== 'undefined';
    const v5520 = global || self;
    if (v5519) {
        global = globalThis;
    } else {
        global = v5520;
    }
    const v5521 = factory();
    let v5522;
    if (v5516) {
        v5522 = v5517;
    } else {
        v5522 = (global, global.Dexie = v5521);
    }
    let v5523;
    if (v5511) {
        module.exports = v5512;
        v5523 = module.exports;
    } else {
        v5523 = v5522;
    }
    v5523;
};
const v11011 = function () {
    'use strict';
    var __assign = function () {
        const v5525 = Object.assign;
        const v5532 = function __assign(t) {
            var s;
            var i = 1;
            var n = arguments.length;
            let v5526 = i < n;
            while (v5526) {
                s = arguments[i];
                let p;
                for (p in s) {
                    const v5528 = Object.prototype;
                    const v5529 = v5528.hasOwnProperty;
                    const v5530 = v5529.call(s, p);
                    if (v5530) {
                        const v5531 = s[p];
                        t[p] = v5531;
                    }
                }
                const v5527 = i++;
                v5526 = i < n;
            }
            return t;
        };
        __assign = v5525 || v5532;
        const v5533 = __assign.apply(this, arguments);
        return v5533;
    };
    const __spreadArray = function (to, from, pack) {
        const v5534 = arguments.length;
        const v5535 = v5534 === 2;
        const v5536 = pack || v5535;
        if (v5536) {
            var i = 0;
            var l = from.length;
            var ar;
            let v5537 = i < l;
            while (v5537) {
                const v5539 = i in from;
                const v5540 = !v5539;
                const v5541 = ar || v5540;
                if (v5541) {
                    const v5542 = !ar;
                    if (v5542) {
                        const v5543 = Array.prototype;
                        const v5544 = v5543.slice;
                        ar = v5544.call(from, 0, i);
                    }
                    const v5545 = from[i];
                    ar[i] = v5545;
                }
                const v5538 = i++;
                v5537 = i < l;
            }
        }
        const v5546 = Array.prototype;
        const v5547 = v5546.slice;
        const v5548 = v5547.call(from);
        const v5549 = ar || v5548;
        const v5550 = to.concat(v5549);
        return v5550;
    };
    let _global;
    const v5551 = typeof globalThis;
    const v5552 = v5551 !== 'undefined';
    const v5553 = typeof self;
    const v5554 = v5553 !== 'undefined';
    const v5555 = typeof window;
    const v5556 = v5555 !== 'undefined';
    let v5557;
    if (v5556) {
        v5557 = window;
    } else {
        v5557 = global;
    }
    let v5558;
    if (v5554) {
        v5558 = self;
    } else {
        v5558 = v5557;
    }
    if (v5552) {
        _global = globalThis;
    } else {
        _global = v5558;
    }
    var keys = Object.keys;
    var isArray = Array.isArray;
    const v5559 = typeof Promise;
    const v5560 = v5559 !== 'undefined';
    const v5561 = _global.Promise;
    const v5562 = !v5561;
    const v5563 = v5560 && v5562;
    if (v5563) {
        _global.Promise = Promise;
    }
    const extend = function (obj, extension) {
        const v5564 = typeof extension;
        const v5565 = v5564 !== 'object';
        if (v5565) {
            return obj;
        }
        const v5566 = keys(extension);
        const v5568 = function (key) {
            const v5567 = extension[key];
            obj[key] = v5567;
        };
        const v5569 = v5566.forEach(v5568);
        v5569;
        return obj;
    };
    var getProto = Object.getPrototypeOf;
    const v5570 = {};
    var _hasOwn = v5570.hasOwnProperty;
    const hasOwn = function (obj, prop) {
        const v5571 = _hasOwn.call(obj, prop);
        return v5571;
    };
    const props = function (proto, extension) {
        const v5572 = typeof extension;
        const v5573 = v5572 === 'function';
        if (v5573) {
            const v5574 = getProto(proto);
            extension = extension(v5574);
        }
        const v5575 = typeof Reflect;
        const v5576 = v5575 === 'undefined';
        const v5577 = Reflect.ownKeys;
        let v5578;
        if (v5576) {
            v5578 = keys;
        } else {
            v5578 = v5577;
        }
        const v5579 = v5578(extension);
        const v5582 = function (key) {
            const v5580 = extension[key];
            const v5581 = setProp(proto, key, v5580);
            v5581;
        };
        const v5583 = v5579.forEach(v5582);
        v5583;
    };
    var defineProperty = Object.defineProperty;
    const setProp = function (obj, prop, functionOrGetSet, options) {
        const v5584 = hasOwn(functionOrGetSet, 'get');
        const v5585 = functionOrGetSet && v5584;
        const v5586 = functionOrGetSet.get;
        const v5587 = typeof v5586;
        const v5588 = v5587 === 'function';
        const v5589 = v5585 && v5588;
        const v5590 = functionOrGetSet.get;
        const v5591 = functionOrGetSet.set;
        const v5592 = {
            get: v5590,
            set: v5591,
            configurable: true
        };
        const v5593 = {
            value: functionOrGetSet,
            configurable: true,
            writable: true
        };
        let v5594;
        if (v5589) {
            v5594 = v5592;
        } else {
            v5594 = v5593;
        }
        const v5595 = extend(v5594, options);
        const v5596 = defineProperty(obj, prop, v5595);
        v5596;
    };
    const derive = function (Child) {
        const v5604 = function (Parent) {
            const v5597 = Parent.prototype;
            const v5598 = Object.create(v5597);
            Child.prototype = v5598;
            const v5599 = Child.prototype;
            const v5600 = setProp(v5599, 'constructor', Child);
            v5600;
            const v5601 = Child.prototype;
            const v5602 = props.bind(null, v5601);
            const v5603 = {};
            v5603.extend = v5602;
            return v5603;
        };
        const v5605 = {};
        v5605.from = v5604;
        return v5605;
    };
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const getPropertyDescriptor = function (obj, prop) {
        var pd = getOwnPropertyDescriptor(obj, prop);
        var proto;
        const v5606 = getPropertyDescriptor(proto, prop);
        const v5607 = (proto = getProto(obj)) && v5606;
        const v5608 = pd || v5607;
        return v5608;
    };
    const v5609 = [];
    var _slice = v5609.slice;
    const slice = function (args, start, end) {
        const v5610 = _slice.call(args, start, end);
        return v5610;
    };
    const override = function (origFunc, overridedFactory) {
        const v5611 = overridedFactory(origFunc);
        return v5611;
    };
    const assert = function (b) {
        const v5612 = !b;
        if (v5612) {
            const v5613 = new Error('Assertion Failed');
            throw v5613;
        }
    };
    const asap$1 = function (fn) {
        const v5614 = _global.setImmediate;
        if (v5614) {
            const v5615 = setImmediate(fn);
            v5615;
        } else {
            const v5616 = setTimeout(fn, 0);
            v5616;
        }
    };
    const arrayToObject = function (array, extractor) {
        const v5619 = function (result, item, i) {
            var nameAndValue = extractor(item, i);
            if (nameAndValue) {
                const v5617 = nameAndValue[0];
                const v5618 = nameAndValue[1];
                result[v5617] = v5618;
            }
            return result;
        };
        const v5620 = {};
        const v5621 = array.reduce(v5619, v5620);
        return v5621;
    };
    const tryCatch = function (fn, onerror, args) {
        try {
            const v5622 = fn.apply(null, args);
            v5622;
        } catch (ex) {
            const v5623 = onerror(ex);
            const v5624 = onerror && v5623;
            v5624;
        }
    };
    const getByKeyPath = function (obj, keyPath) {
        const v5625 = hasOwn(obj, keyPath);
        if (v5625) {
            const v5626 = obj[keyPath];
            return v5626;
        }
        const v5627 = !keyPath;
        if (v5627) {
            return obj;
        }
        const v5628 = typeof keyPath;
        const v5629 = v5628 !== 'string';
        if (v5629) {
            var rv = [];
            var i = 0;
            var l = keyPath.length;
            let v5630 = i < l;
            while (v5630) {
                const v5632 = keyPath[i];
                var val = getByKeyPath(obj, v5632);
                const v5633 = rv.push(val);
                v5633;
                const v5631 = ++i;
                v5630 = i < l;
            }
            return rv;
        }
        var period = keyPath.indexOf('.');
        const v5634 = -1;
        const v5635 = period !== v5634;
        if (v5635) {
            const v5636 = keyPath.substr(0, period);
            var innerObj = obj[v5636];
            const v5637 = innerObj === undefined;
            const v5638 = period + 1;
            const v5639 = keyPath.substr(v5638);
            const v5640 = getByKeyPath(innerObj, v5639);
            let v5641;
            if (v5637) {
                v5641 = undefined;
            } else {
                v5641 = v5640;
            }
            return v5641;
        }
        return undefined;
    };
    const setByKeyPath = function (obj, keyPath, value) {
        const v5642 = !obj;
        const v5643 = keyPath === undefined;
        const v5644 = v5642 || v5643;
        if (v5644) {
            return;
        }
        const v5645 = 'isFrozen' in Object;
        const v5646 = Object.isFrozen(obj);
        const v5647 = v5645 && v5646;
        if (v5647) {
            return;
        }
        const v5648 = typeof keyPath;
        const v5649 = v5648 !== 'string';
        const v5650 = 'length' in keyPath;
        const v5651 = v5649 && v5650;
        if (v5651) {
            const v5652 = typeof value;
            const v5653 = v5652 !== 'string';
            const v5654 = 'length' in value;
            const v5655 = v5653 && v5654;
            const v5656 = assert(v5655);
            v5656;
            var i = 0;
            var l = keyPath.length;
            let v5657 = i < l;
            while (v5657) {
                const v5659 = keyPath[i];
                const v5660 = value[i];
                const v5661 = setByKeyPath(obj, v5659, v5660);
                v5661;
                const v5658 = ++i;
                v5657 = i < l;
            }
        } else {
            var period = keyPath.indexOf('.');
            const v5662 = -1;
            const v5663 = period !== v5662;
            if (v5663) {
                var currentKeyPath = keyPath.substr(0, period);
                const v5664 = period + 1;
                var remainingKeyPath = keyPath.substr(v5664);
                const v5665 = remainingKeyPath === '';
                if (v5665) {
                    const v5666 = value === undefined;
                    if (v5666) {
                        const v5667 = isArray(obj);
                        const v5668 = parseInt(currentKeyPath);
                        const v5669 = isNaN(v5668);
                        const v5670 = !v5669;
                        const v5671 = v5667 && v5670;
                        if (v5671) {
                            const v5672 = obj.splice(currentKeyPath, 1);
                            v5672;
                        } else {
                            const v5673 = obj[currentKeyPath];
                            const v5674 = delete v5673;
                            v5674;
                        }
                    } else {
                        obj[currentKeyPath] = value;
                    }
                } else {
                    var innerObj = obj[currentKeyPath];
                    const v5675 = !innerObj;
                    if (v5675) {
                        const v5676 = {};
                        obj.currentKeyPath = v5676;
                        innerObj = obj[currentKeyPath];
                    }
                    const v5677 = setByKeyPath(innerObj, remainingKeyPath, value);
                    v5677;
                }
            } else {
                const v5678 = value === undefined;
                if (v5678) {
                    const v5679 = isArray(obj);
                    const v5680 = parseInt(keyPath);
                    const v5681 = isNaN(v5680);
                    const v5682 = !v5681;
                    const v5683 = v5679 && v5682;
                    if (v5683) {
                        const v5684 = obj.splice(keyPath, 1);
                        v5684;
                    } else {
                        const v5685 = obj[keyPath];
                        const v5686 = delete v5685;
                        v5686;
                    }
                } else {
                    obj[keyPath] = value;
                }
            }
        }
    };
    const delByKeyPath = function (obj, keyPath) {
        const v5687 = typeof keyPath;
        const v5688 = v5687 === 'string';
        if (v5688) {
            const v5689 = setByKeyPath(obj, keyPath, undefined);
            v5689;
        } else {
            const v5690 = 'length' in keyPath;
            if (v5690) {
                const v5691 = [];
                const v5692 = v5691.map;
                const v5694 = function (kp) {
                    const v5693 = setByKeyPath(obj, kp, undefined);
                    v5693;
                };
                const v5695 = v5692.call(keyPath, v5694);
                v5695;
            }
        }
    };
    const shallowClone = function (obj) {
        var rv = {};
        let m;
        for (m in obj) {
            const v5696 = hasOwn(obj, m);
            if (v5696) {
                const v5697 = obj[m];
                rv[m] = v5697;
            }
        }
        return rv;
    };
    const v5698 = [];
    var concat = v5698.concat;
    const flatten = function (a) {
        const v5699 = [];
        const v5700 = concat.apply(v5699, a);
        return v5700;
    };
    const v5701 = 'Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey'.split(',');
    const v5702 = [
        8,
        16,
        32,
        64
    ];
    const v5708 = function (num) {
        const v5703 = [
            'Int',
            'Uint',
            'Float'
        ];
        const v5706 = function (t) {
            const v5704 = t + num;
            const v5705 = v5704 + 'Array';
            return v5705;
        };
        const v5707 = v5703.map(v5706);
        return v5707;
    };
    const v5709 = v5702.map(v5708);
    const v5710 = flatten(v5709);
    const v5711 = v5701.concat(v5710);
    const v5713 = function (t) {
        const v5712 = _global[t];
        return v5712;
    };
    var intrinsicTypeNames = v5711.filter(v5713);
    const v5715 = function (t) {
        const v5714 = _global[t];
        return v5714;
    };
    var intrinsicTypes = intrinsicTypeNames.map(v5715);
    const v5717 = function (x) {
        const v5716 = [
            x,
            true
        ];
        return v5716;
    };
    const v5718 = arrayToObject(intrinsicTypeNames, v5717);
    v5718;
    var circularRefs = null;
    const deepClone = function (any) {
        const v5719 = typeof WeakMap;
        const v5720 = v5719 !== 'undefined';
        const v5721 = new WeakMap();
        circularRefs = v5720 && v5721;
        var rv = innerDeepClone(any);
        circularRefs = null;
        return rv;
    };
    const innerDeepClone = function (any) {
        const v5722 = !any;
        const v5723 = typeof any;
        const v5724 = v5723 !== 'object';
        const v5725 = v5722 || v5724;
        if (v5725) {
            return any;
        }
        const v5726 = circularRefs.get(any);
        var rv = circularRefs && v5726;
        if (rv) {
            return rv;
        }
        const v5727 = isArray(any);
        if (v5727) {
            rv = [];
            const v5728 = circularRefs.set(any, rv);
            const v5729 = circularRefs && v5728;
            v5729;
            var i = 0;
            var l = any.length;
            let v5730 = i < l;
            while (v5730) {
                const v5732 = any[i];
                const v5733 = innerDeepClone(v5732);
                const v5734 = rv.push(v5733);
                v5734;
                const v5731 = ++i;
                v5730 = i < l;
            }
        } else {
            const v5735 = any.constructor;
            const v5736 = intrinsicTypes.indexOf(v5735);
            const v5737 = v5736 >= 0;
            if (v5737) {
                rv = any;
            } else {
                var proto = getProto(any);
                const v5738 = Object.prototype;
                const v5739 = proto === v5738;
                const v5740 = {};
                const v5741 = Object.create(proto);
                if (v5739) {
                    rv = v5740;
                } else {
                    rv = v5741;
                }
                const v5742 = circularRefs.set(any, rv);
                const v5743 = circularRefs && v5742;
                v5743;
                let prop;
                for (prop in any) {
                    const v5744 = hasOwn(any, prop);
                    if (v5744) {
                        const v5745 = any[prop];
                        const v5746 = innerDeepClone(v5745);
                        rv[prop] = v5746;
                    }
                }
            }
        }
        return rv;
    };
    const v5747 = {};
    var toString = v5747.toString;
    const toStringTag = function (o) {
        const v5748 = toString.call(o);
        const v5749 = -1;
        const v5750 = v5748.slice(8, v5749);
        return v5750;
    };
    let iteratorSymbol;
    const v5751 = typeof Symbol;
    const v5752 = v5751 !== 'undefined';
    const v5753 = Symbol.iterator;
    if (v5752) {
        iteratorSymbol = v5753;
    } else {
        iteratorSymbol = '@@iterator';
    }
    let getIteratorOf;
    const v5754 = typeof iteratorSymbol;
    const v5755 = v5754 === 'symbol';
    const v5760 = function (x) {
        var i;
        const v5756 = x != null;
        const v5757 = v5756 && (i = x[iteratorSymbol]);
        const v5758 = i.apply(x);
        const v5759 = v5757 && v5758;
        return v5759;
    };
    const v5761 = function () {
        return null;
    };
    if (v5755) {
        getIteratorOf = v5760;
    } else {
        getIteratorOf = v5761;
    }
    var NO_CHAR_ARRAY = {};
    const getArrayOf = function (arrayLike) {
        var i;
        var a;
        var x;
        var it;
        const v5762 = arguments.length;
        const v5763 = v5762 === 1;
        if (v5763) {
            const v5764 = isArray(arrayLike);
            if (v5764) {
                const v5765 = arrayLike.slice();
                return v5765;
            }
            const v5766 = this === NO_CHAR_ARRAY;
            const v5767 = typeof arrayLike;
            const v5768 = v5767 === 'string';
            const v5769 = v5766 && v5768;
            if (v5769) {
                const v5770 = [arrayLike];
                return v5770;
            }
            if (it = getIteratorOf(arrayLike)) {
                a = [];
                const v5771 = x.done;
                const v5772 = !v5771;
                while (x = it.next(), v5772) {
                    const v5773 = x.value;
                    const v5774 = a.push(v5773);
                    v5774;
                }
                return a;
            }
            const v5775 = arrayLike == null;
            if (v5775) {
                const v5776 = [arrayLike];
                return v5776;
            }
            i = arrayLike.length;
            const v5777 = typeof i;
            const v5778 = v5777 === 'number';
            if (v5778) {
                a = new Array(i);
                let v5779 = i--;
                while (v5779) {
                    const v5780 = arrayLike[i];
                    a[i] = v5780;
                    v5779 = i--;
                }
                return a;
            }
            const v5781 = [arrayLike];
            return v5781;
        }
        i = arguments.length;
        a = new Array(i);
        let v5782 = i--;
        while (v5782) {
            const v5783 = arguments[i];
            a[i] = v5783;
            v5782 = i--;
        }
        return a;
    };
    let isAsyncFunction;
    const v5784 = typeof Symbol;
    const v5785 = v5784 !== 'undefined';
    const v5789 = function (fn) {
        const v5786 = Symbol.toStringTag;
        const v5787 = fn[v5786];
        const v5788 = v5787 === 'AsyncFunction';
        return v5788;
    };
    const v5790 = function () {
        return false;
    };
    if (v5785) {
        isAsyncFunction = v5789;
    } else {
        isAsyncFunction = v5790;
    }
    const v5791 = typeof location;
    const v5792 = v5791 !== 'undefined';
    const v5793 = location.href;
    const v5794 = /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(v5793);
    var debug = v5792 && v5794;
    const setDebug = function (value, filter) {
        debug = value;
        libraryFilter = filter;
    };
    var libraryFilter = function () {
        return true;
    };
    const v5795 = new Error('');
    const v5796 = v5795.stack;
    const v5797 = !v5796;
    var NEEDS_THROW_FOR_STACK = v5797;
    const getErrorWithStack = function () {
        if (NEEDS_THROW_FOR_STACK) {
            try {
                const v5798 = getErrorWithStack.arguments;
                v5798;
                const v5799 = new Error();
                throw v5799;
            } catch (e) {
                return e;
            }
        }
        const v5800 = new Error();
        return v5800;
    };
    const prettyStack = function (exception, numIgnoredFrames) {
        var stack = exception.stack;
        const v5801 = !stack;
        if (v5801) {
            return '';
        }
        numIgnoredFrames = numIgnoredFrames || 0;
        const v5802 = exception.name;
        const v5803 = stack.indexOf(v5802);
        const v5804 = v5803 === 0;
        if (v5804) {
            const v5805 = exception.name;
            const v5806 = exception.message;
            const v5807 = v5805 + v5806;
            const v5808 = v5807.split('\n');
            numIgnoredFrames += v5808.length;
        }
        const v5809 = stack.split('\n');
        const v5810 = v5809.slice(numIgnoredFrames);
        const v5811 = v5810.filter(libraryFilter);
        const v5813 = function (frame) {
            const v5812 = '\n' + frame;
            return v5812;
        };
        const v5814 = v5811.map(v5813);
        const v5815 = v5814.join('');
        return v5815;
    };
    var dexieErrorNames = [
        'Modify',
        'Bulk',
        'OpenFailed',
        'VersionChange',
        'Schema',
        'Upgrade',
        'InvalidTable',
        'MissingAPI',
        'NoSuchDatabase',
        'InvalidArgument',
        'SubTransaction',
        'Unsupported',
        'Internal',
        'DatabaseClosed',
        'PrematureCommit',
        'ForeignAwait'
    ];
    var idbDomErrorNames = [
        'Unknown',
        'Constraint',
        'Data',
        'TransactionInactive',
        'ReadOnly',
        'Version',
        'NotFound',
        'InvalidState',
        'InvalidAccess',
        'Abort',
        'Timeout',
        'QuotaExceeded',
        'Syntax',
        'DataClone'
    ];
    var errorList = dexieErrorNames.concat(idbDomErrorNames);
    var defaultTexts = {};
    defaultTexts.VersionChanged = 'Database version changed by other database connection';
    defaultTexts.DatabaseClosed = 'Database has been closed';
    defaultTexts.Abort = 'Transaction aborted';
    defaultTexts.TransactionInactive = 'Transaction has already completed or failed';
    defaultTexts.MissingAPI = 'IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb';
    const DexieError = function (name, msg) {
        const v5816 = getErrorWithStack();
        this._e = v5816;
        this.name = name;
        this.message = msg;
    };
    const v5817 = derive(DexieError);
    const v5818 = v5817.from(Error);
    const v5827 = function () {
        const v5819 = this._stack;
        const v5820 = this.name;
        const v5821 = v5820 + ': ';
        const v5822 = this.message;
        const v5823 = v5821 + v5822;
        const v5824 = this._e;
        const v5825 = prettyStack(v5824, 2);
        const v5826 = v5819 || (this._stack = v5823 + v5825);
        return v5826;
    };
    const v5828 = {};
    v5828.get = v5827;
    const v5833 = function () {
        const v5829 = this.name;
        const v5830 = v5829 + ': ';
        const v5831 = this.message;
        const v5832 = v5830 + v5831;
        return v5832;
    };
    const v5834 = {
        stack: v5828,
        toString: v5833
    };
    const v5835 = v5818.extend(v5834);
    v5835;
    const getMultiErrorMessage = function (msg, failures) {
        const v5836 = msg + '. Errors: ';
        const v5837 = Object.keys(failures);
        const v5840 = function (key) {
            const v5838 = failures[key];
            const v5839 = v5838.toString();
            return v5839;
        };
        const v5841 = v5837.map(v5840);
        const v5844 = function (v, i, s) {
            const v5842 = s.indexOf(v);
            const v5843 = v5842 === i;
            return v5843;
        };
        const v5845 = v5841.filter(v5844);
        const v5846 = v5845.join('\n');
        const v5847 = v5836 + v5846;
        return v5847;
    };
    const ModifyError = function (msg, failures, successCount, failedKeys) {
        const v5848 = getErrorWithStack();
        this._e = v5848;
        this.failures = failures;
        this.failedKeys = failedKeys;
        this.successCount = successCount;
        const v5849 = getMultiErrorMessage(msg, failures);
        this.message = v5849;
    };
    const v5850 = derive(ModifyError);
    const v5851 = v5850.from(DexieError);
    v5851;
    const BulkError = function (msg, failures) {
        const v5852 = getErrorWithStack();
        this._e = v5852;
        this.name = 'BulkError';
        const v5853 = Object.keys(failures);
        const v5855 = function (pos) {
            const v5854 = failures[pos];
            return v5854;
        };
        const v5856 = v5853.map(v5855);
        this.failures = v5856;
        this.failuresByPos = failures;
        const v5857 = getMultiErrorMessage(msg, failures);
        this.message = v5857;
    };
    const v5858 = derive(BulkError);
    const v5859 = v5858.from(DexieError);
    v5859;
    const v5860 = function (obj, name) {
        return obj[name] = name + 'Error', obj;
    };
    const v5861 = {};
    var errnames = errorList.reduce(v5860, v5861);
    var BaseException = DexieError;
    const v5878 = function (obj, name) {
        var fullName = name + 'Error';
        const DexieError = function (msgOrInner, inner) {
            const v5862 = getErrorWithStack();
            this._e = v5862;
            this.name = fullName;
            const v5863 = !msgOrInner;
            if (v5863) {
                const v5864 = defaultTexts[name];
                this.message = v5864 || fullName;
                this.inner = null;
            } else {
                const v5865 = typeof msgOrInner;
                const v5866 = v5865 === 'string';
                if (v5866) {
                    const v5867 = '' + msgOrInner;
                    const v5868 = !inner;
                    const v5869 = '\n ' + inner;
                    let v5870;
                    if (v5868) {
                        v5870 = '';
                    } else {
                        v5870 = v5869;
                    }
                    this.message = v5867 + v5870;
                    this.inner = inner || null;
                } else {
                    const v5871 = typeof msgOrInner;
                    const v5872 = v5871 === 'object';
                    if (v5872) {
                        const v5873 = msgOrInner.name;
                        const v5874 = v5873 + ' ';
                        const v5875 = msgOrInner.message;
                        this.message = v5874 + v5875;
                        this.inner = msgOrInner;
                    }
                }
            }
        };
        const v5876 = derive(DexieError);
        const v5877 = v5876.from(BaseException);
        v5877;
        obj[name] = DexieError;
        return obj;
    };
    const v5879 = {};
    var exceptions = errorList.reduce(v5878, v5879);
    exceptions.Syntax = SyntaxError;
    exceptions.Type = TypeError;
    exceptions.Range = RangeError;
    const v5882 = function (obj, name) {
        const v5880 = name + 'Error';
        const v5881 = exceptions[name];
        obj[v5880] = v5881;
        return obj;
    };
    const v5883 = {};
    var exceptionMap = idbDomErrorNames.reduce(v5882, v5883);
    const mapError = function (domError, message) {
        const v5884 = !domError;
        const v5885 = domError instanceof DexieError;
        const v5886 = v5884 || v5885;
        const v5887 = domError instanceof TypeError;
        const v5888 = v5886 || v5887;
        const v5889 = domError instanceof SyntaxError;
        const v5890 = v5888 || v5889;
        const v5891 = domError.name;
        const v5892 = !v5891;
        const v5893 = v5890 || v5892;
        const v5894 = domError.name;
        const v5895 = exceptionMap[v5894];
        const v5896 = !v5895;
        const v5897 = v5893 || v5896;
        if (v5897) {
            return domError;
        }
        const v5898 = domError.name;
        const v5899 = domError.message;
        const v5900 = message || v5899;
        var rv = new exceptionMap[v5898](v5900, domError);
        const v5901 = 'stack' in domError;
        if (v5901) {
            const v5904 = function () {
                const v5902 = this.inner;
                const v5903 = v5902.stack;
                return v5903;
            };
            const v5905 = { get: v5904 };
            const v5906 = setProp(rv, 'stack', v5905);
            v5906;
        }
        return rv;
    };
    const v5913 = function (obj, name) {
        const v5907 = [
            'Syntax',
            'Type',
            'Range'
        ];
        const v5908 = v5907.indexOf(name);
        const v5909 = -1;
        const v5910 = v5908 === v5909;
        if (v5910) {
            const v5911 = name + 'Error';
            const v5912 = exceptions[name];
            obj[v5911] = v5912;
        }
        return obj;
    };
    const v5914 = {};
    var fullNameExceptions = errorList.reduce(v5913, v5914);
    fullNameExceptions.ModifyError = ModifyError;
    fullNameExceptions.DexieError = DexieError;
    fullNameExceptions.BulkError = BulkError;
    const nop = function () {
    };
    const mirror = function (val) {
        return val;
    };
    const pureFunctionChain = function (f1, f2) {
        const v5915 = f1 == null;
        const v5916 = f1 === mirror;
        const v5917 = v5915 || v5916;
        if (v5917) {
            return f2;
        }
        const v5920 = function (val) {
            const v5918 = f1(val);
            const v5919 = f2(v5918);
            return v5919;
        };
        return v5920;
    };
    const callBoth = function (on1, on2) {
        const v5923 = function () {
            const v5921 = on1.apply(this, arguments);
            v5921;
            const v5922 = on2.apply(this, arguments);
            v5922;
        };
        return v5923;
    };
    const hookCreatingChain = function (f1, f2) {
        const v5924 = f1 === nop;
        if (v5924) {
            return f2;
        }
        const v5936 = function () {
            var res = f1.apply(this, arguments);
            const v5925 = res !== undefined;
            if (v5925) {
                arguments[0] = res;
            }
            var onsuccess = this.onsuccess;
            var onerror = this.onerror;
            this.onsuccess = null;
            this.onerror = null;
            var res2 = f2.apply(this, arguments);
            if (onsuccess) {
                const v5926 = this.onsuccess;
                const v5927 = this.onsuccess;
                const v5928 = callBoth(onsuccess, v5927);
                let v5929;
                if (v5926) {
                    v5929 = v5928;
                } else {
                    v5929 = onsuccess;
                }
                this.onsuccess = v5929;
            }
            if (onerror) {
                const v5930 = this.onerror;
                const v5931 = this.onerror;
                const v5932 = callBoth(onerror, v5931);
                let v5933;
                if (v5930) {
                    v5933 = v5932;
                } else {
                    v5933 = onerror;
                }
                this.onerror = v5933;
            }
            const v5934 = res2 !== undefined;
            let v5935;
            if (v5934) {
                v5935 = res2;
            } else {
                v5935 = res;
            }
            return v5935;
        };
        return v5936;
    };
    const hookDeletingChain = function (f1, f2) {
        const v5937 = f1 === nop;
        if (v5937) {
            return f2;
        }
        const v5948 = function () {
            const v5938 = f1.apply(this, arguments);
            v5938;
            var onsuccess = this.onsuccess;
            var onerror = this.onerror;
            this.onsuccess = this.onerror = null;
            const v5939 = f2.apply(this, arguments);
            v5939;
            if (onsuccess) {
                const v5940 = this.onsuccess;
                const v5941 = this.onsuccess;
                const v5942 = callBoth(onsuccess, v5941);
                let v5943;
                if (v5940) {
                    v5943 = v5942;
                } else {
                    v5943 = onsuccess;
                }
                this.onsuccess = v5943;
            }
            if (onerror) {
                const v5944 = this.onerror;
                const v5945 = this.onerror;
                const v5946 = callBoth(onerror, v5945);
                let v5947;
                if (v5944) {
                    v5947 = v5946;
                } else {
                    v5947 = onerror;
                }
                this.onerror = v5947;
            }
        };
        return v5948;
    };
    const hookUpdatingChain = function (f1, f2) {
        const v5949 = f1 === nop;
        if (v5949) {
            return f2;
        }
        const v5964 = function (modifications) {
            var res = f1.apply(this, arguments);
            const v5950 = extend(modifications, res);
            v5950;
            var onsuccess = this.onsuccess;
            var onerror = this.onerror;
            this.onsuccess = null;
            this.onerror = null;
            var res2 = f2.apply(this, arguments);
            if (onsuccess) {
                const v5951 = this.onsuccess;
                const v5952 = this.onsuccess;
                const v5953 = callBoth(onsuccess, v5952);
                let v5954;
                if (v5951) {
                    v5954 = v5953;
                } else {
                    v5954 = onsuccess;
                }
                this.onsuccess = v5954;
            }
            if (onerror) {
                const v5955 = this.onerror;
                const v5956 = this.onerror;
                const v5957 = callBoth(onerror, v5956);
                let v5958;
                if (v5955) {
                    v5958 = v5957;
                } else {
                    v5958 = onerror;
                }
                this.onerror = v5958;
            }
            const v5959 = res === undefined;
            const v5960 = res2 === undefined;
            let v5961;
            if (v5960) {
                v5961 = undefined;
            } else {
                v5961 = res2;
            }
            const v5962 = extend(res, res2);
            let v5963;
            if (v5959) {
                v5963 = v5961;
            } else {
                v5963 = v5962;
            }
            return v5963;
        };
        return v5964;
    };
    const reverseStoppableEventChain = function (f1, f2) {
        const v5965 = f1 === nop;
        if (v5965) {
            return f2;
        }
        const v5969 = function () {
            const v5966 = f2.apply(this, arguments);
            const v5967 = v5966 === false;
            if (v5967) {
                return false;
            }
            const v5968 = f1.apply(this, arguments);
            return v5968;
        };
        return v5969;
    };
    const promisableChain = function (f1, f2) {
        const v5970 = f1 === nop;
        if (v5970) {
            return f2;
        }
        const v5981 = function () {
            var res = f1.apply(this, arguments);
            const v5971 = res.then;
            const v5972 = typeof v5971;
            const v5973 = v5972 === 'function';
            const v5974 = res && v5973;
            if (v5974) {
                var thiz = this;
                var i = arguments.length;
                var args = new Array(i);
                let v5975 = i--;
                while (v5975) {
                    const v5976 = arguments[i];
                    args[i] = v5976;
                    v5975 = i--;
                }
                const v5978 = function () {
                    const v5977 = f2.apply(thiz, args);
                    return v5977;
                };
                const v5979 = res.then(v5978);
                return v5979;
            }
            const v5980 = f2.apply(this, arguments);
            return v5980;
        };
        return v5981;
    };
    var INTERNAL = {};
    var LONG_STACKS_CLIP_LIMIT = 100;
    var MAX_LONG_STACKS = 20;
    var ZONE_ECHO_LIMIT = 100;
    let _a$1;
    const v5982 = typeof Promise;
    const v5983 = v5982 === 'undefined';
    const v5984 = [];
    const v5997 = function () {
        var globalP = Promise.resolve();
        const v5985 = typeof crypto;
        const v5986 = v5985 === 'undefined';
        const v5987 = crypto.subtle;
        const v5988 = !v5987;
        const v5989 = v5986 || v5988;
        if (v5989) {
            const v5990 = getProto(globalP);
            const v5991 = [
                globalP,
                v5990,
                globalP
            ];
            return v5991;
        }
        const v5992 = crypto.subtle;
        const v5993 = [0];
        const v5994 = new Uint8Array(v5993);
        var nativeP = v5992.digest('SHA-512', v5994);
        const v5995 = getProto(nativeP);
        const v5996 = [
            nativeP,
            v5995,
            globalP
        ];
        return v5996;
    };
    const v5998 = v5997();
    if (v5983) {
        _a$1 = v5984;
    } else {
        _a$1 = v5998;
    }
    var resolvedNativePromise = _a$1[0];
    var nativePromiseProto = _a$1[1];
    var resolvedGlobalPromise = _a$1[2];
    const v5999 = nativePromiseProto.then;
    var nativePromiseThen = nativePromiseProto && v5999;
    const v6000 = resolvedNativePromise.constructor;
    var NativePromise = resolvedNativePromise && v6000;
    const v6001 = !resolvedGlobalPromise;
    const v6002 = !v6001;
    var patchGlobalPromise = v6002;
    var stack_being_generated = false;
    let schedulePhysicalTick;
    const v6004 = function () {
        const v6003 = resolvedGlobalPromise.then(physicalTick);
        v6003;
    };
    const v6005 = _global.setImmediate;
    const v6006 = setImmediate.bind(null, physicalTick);
    const v6007 = _global.MutationObserver;
    const v6014 = function () {
        var hiddenDiv = document.createElement('div');
        const v6009 = function () {
            const v6008 = physicalTick();
            v6008;
            hiddenDiv = null;
        };
        const v6010 = new MutationObserver(v6009);
        const v6011 = { attributes: true };
        const v6012 = v6010.observe(hiddenDiv, v6011);
        v6012;
        const v6013 = hiddenDiv.setAttribute('i', '1');
        v6013;
    };
    const v6016 = function () {
        const v6015 = setTimeout(physicalTick, 0);
        v6015;
    };
    let v6017;
    if (v6007) {
        v6017 = v6014;
    } else {
        v6017 = v6016;
    }
    let v6018;
    if (v6005) {
        v6018 = v6006;
    } else {
        v6018 = v6017;
    }
    if (resolvedGlobalPromise) {
        schedulePhysicalTick = v6004;
    } else {
        schedulePhysicalTick = v6018;
    }
    var asap = function (callback, args) {
        const v6019 = [
            callback,
            args
        ];
        const v6020 = microtickQueue.push(v6019);
        v6020;
        if (needsNewPhysicalTick) {
            const v6021 = schedulePhysicalTick();
            v6021;
            needsNewPhysicalTick = false;
        }
    };
    var isOutsideMicroTick = true;
    var needsNewPhysicalTick = true;
    var unhandledErrors = [];
    var rejectingErrors = [];
    var currentFulfiller = null;
    var rejectionMapper = mirror;
    const v6022 = [];
    const v6023 = {};
    const v6030 = function () {
        const v6024 = this.unhandleds;
        const v6028 = function (uh) {
            try {
                const v6025 = uh[0];
                const v6026 = uh[1];
                const v6027 = globalError(v6025, v6026);
                v6027;
            } catch (e) {
            }
        };
        const v6029 = v6024.forEach(v6028);
        v6029;
    };
    var globalPSD = {};
    globalPSD.id = 'global';
    globalPSD.global = true;
    globalPSD.ref = 0;
    globalPSD.unhandleds = v6022;
    globalPSD.onunhandled = globalError;
    globalPSD.pgp = false;
    globalPSD.env = v6023;
    globalPSD.finalize = v6030;
    var PSD = globalPSD;
    var microtickQueue = [];
    var numScheduledCalls = 0;
    var tickFinalizers = [];
    const DexiePromise = function (fn) {
        const v6031 = typeof this;
        const v6032 = v6031 !== 'object';
        if (v6032) {
            const v6033 = new TypeError('Promises must be constructed via new');
            throw v6033;
        }
        this._listeners = [];
        this.onuncatched = nop;
        this._lib = false;
        this._PSD = PSD;
        var psd = this._PSD;
        if (debug) {
            const v6034 = getErrorWithStack();
            this._stackHolder = v6034;
            this._prev = null;
            this._numPrev = 0;
        }
        const v6035 = typeof fn;
        const v6036 = v6035 !== 'function';
        if (v6036) {
            const v6037 = fn !== INTERNAL;
            if (v6037) {
                const v6038 = new TypeError('Not a function');
                throw v6038;
            }
            const v6039 = arguments[1];
            this._state = v6039;
            const v6040 = arguments[2];
            this._value = v6040;
            const v6041 = this._state;
            const v6042 = v6041 === false;
            if (v6042) {
                const v6043 = this._value;
                const v6044 = handleRejection(this, v6043);
                v6044;
            }
            return;
        }
        this._state = null;
        this._value = null;
        const v6045 = psd.ref;
        const v6046 = ++v6045;
        v6046;
        const v6047 = executePromiseTask(this, fn);
        v6047;
    };
    const v6062 = function () {
        var psd = PSD;
        var microTaskId = totalEchoes;
        const then = function (onFulfilled, onRejected) {
            var _this = this;
            const v6048 = psd.global;
            const v6049 = !v6048;
            const v6050 = psd !== PSD;
            const v6051 = microTaskId !== totalEchoes;
            const v6052 = v6050 || v6051;
            var possibleAwait = v6049 && v6052;
            const v6053 = decrementExpectedAwaits();
            const v6054 = !v6053;
            var cleanup = possibleAwait && v6054;
            const v6059 = function (resolve, reject) {
                const v6055 = nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait, cleanup);
                const v6056 = nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait, cleanup);
                const v6057 = new Listener(v6055, v6056, resolve, reject, psd);
                const v6058 = propagateToListener(_this, v6057);
                v6058;
            };
            var rv = new DexiePromise(v6059);
            const v6060 = linkToPreviousPromise(rv, this);
            const v6061 = debug && v6060;
            v6061;
            return rv;
        };
        then.prototype = INTERNAL;
        return then;
    };
    const v6071 = function (value) {
        const v6063 = value.prototype;
        const v6064 = v6063 === INTERNAL;
        const v6065 = value && v6064;
        const v6066 = function () {
            return value;
        };
        const v6067 = thenProp.set;
        const v6068 = {
            get: v6066,
            set: v6067
        };
        let v6069;
        if (v6065) {
            v6069 = thenProp;
        } else {
            v6069 = v6068;
        }
        const v6070 = setProp(this, 'then', v6069);
        v6070;
    };
    var thenProp = {};
    thenProp.get = v6062;
    thenProp.set = v6071;
    const v6072 = DexiePromise.prototype;
    const v6075 = function (onFulfilled, onRejected) {
        const v6073 = new Listener(null, null, onFulfilled, onRejected, PSD);
        const v6074 = propagateToListener(this, v6073);
        v6074;
    };
    const v6096 = function (onRejected) {
        const v6076 = arguments.length;
        const v6077 = v6076 === 1;
        if (v6077) {
            const v6078 = this.then(null, onRejected);
            return v6078;
        }
        var type = arguments[0];
        var handler = arguments[1];
        const v6079 = typeof type;
        const v6080 = v6079 === 'function';
        const v6085 = function (err) {
            const v6081 = err instanceof type;
            const v6082 = handler(err);
            const v6083 = PromiseReject(err);
            let v6084;
            if (v6081) {
                v6084 = v6082;
            } else {
                v6084 = v6083;
            }
            return v6084;
        };
        const v6086 = this.then(null, v6085);
        const v6093 = function (err) {
            const v6087 = err.name;
            const v6088 = v6087 === type;
            const v6089 = err && v6088;
            const v6090 = handler(err);
            const v6091 = PromiseReject(err);
            let v6092;
            if (v6089) {
                v6092 = v6090;
            } else {
                v6092 = v6091;
            }
            return v6092;
        };
        const v6094 = this.then(null, v6093);
        let v6095;
        if (v6080) {
            v6095 = v6086;
        } else {
            v6095 = v6094;
        }
        return v6095;
    };
    const v6103 = function (onFinally) {
        const v6098 = function (value) {
            const v6097 = onFinally();
            v6097;
            return value;
        };
        const v6101 = function (err) {
            const v6099 = onFinally();
            v6099;
            const v6100 = PromiseReject(err);
            return v6100;
        };
        const v6102 = this.then(v6098, v6101);
        return v6102;
    };
    const v6109 = function () {
        const v6104 = this._stack;
        if (v6104) {
            const v6105 = this._stack;
            return v6105;
        }
        try {
            stack_being_generated = true;
            const v6106 = [];
            var stacks = getStack(this, v6106, MAX_LONG_STACKS);
            var stack = stacks.join('\nFrom previous: ');
            const v6107 = this._state;
            const v6108 = v6107 !== null;
            if (v6108) {
                this._stack = stack;
            }
            return stack;
        } finally {
            stack_being_generated = false;
        }
    };
    const v6110 = {};
    v6110.get = v6109;
    const v6121 = function (ms, msg) {
        var _this = this;
        const v6111 = ms < Infinity;
        const v6118 = function (resolve, reject) {
            const v6114 = function () {
                const v6112 = new exceptions.Timeout(msg);
                const v6113 = reject(v6112);
                return v6113;
            };
            var handle = setTimeout(v6114, ms);
            const v6115 = _this.then(resolve, reject);
            const v6116 = clearTimeout.bind(null, handle);
            const v6117 = v6115.finally(v6116);
            v6117;
        };
        const v6119 = new DexiePromise(v6118);
        let v6120;
        if (v6111) {
            v6120 = v6119;
        } else {
            v6120 = this;
        }
        return v6120;
    };
    const v6122 = {
        then: thenProp,
        _then: v6075,
        catch: v6096,
        finally: v6103,
        stack: v6110,
        timeout: v6121
    };
    const v6123 = props(v6072, v6122);
    v6123;
    const v6124 = typeof Symbol;
    const v6125 = v6124 !== 'undefined';
    const v6126 = Symbol.toStringTag;
    const v6127 = v6125 && v6126;
    if (v6127) {
        const v6128 = DexiePromise.prototype;
        const v6129 = Symbol.toStringTag;
        const v6130 = setProp(v6128, v6129, 'Dexie.Promise');
        v6130;
    }
    const v6131 = snapShot();
    globalPSD.env = v6131;
    const Listener = function (onFulfilled, onRejected, resolve, reject, zone) {
        const v6132 = typeof onFulfilled;
        const v6133 = v6132 === 'function';
        let v6134;
        if (v6133) {
            v6134 = onFulfilled;
        } else {
            v6134 = null;
        }
        this.onFulfilled = v6134;
        const v6135 = typeof onRejected;
        const v6136 = v6135 === 'function';
        let v6137;
        if (v6136) {
            v6137 = onRejected;
        } else {
            v6137 = null;
        }
        this.onRejected = v6137;
        this.resolve = resolve;
        this.reject = reject;
        this.psd = zone;
    };
    const v6153 = function () {
        const v6138 = getArrayOf.apply(null, arguments);
        var values = v6138.map(onPossibleParallellAsync);
        const v6151 = function (resolve, reject) {
            const v6139 = values.length;
            const v6140 = v6139 === 0;
            if (v6140) {
                const v6141 = [];
                const v6142 = resolve(v6141);
                v6142;
            }
            var remaining = values.length;
            const v6149 = function (a, i) {
                const v6143 = DexiePromise.resolve(a);
                const v6147 = function (x) {
                    values[i] = x;
                    const v6144 = --remaining;
                    const v6145 = !v6144;
                    if (v6145) {
                        const v6146 = resolve(values);
                        v6146;
                    }
                };
                const v6148 = v6143.then(v6147, reject);
                return v6148;
            };
            const v6150 = values.forEach(v6149);
            v6150;
        };
        const v6152 = new DexiePromise(v6151);
        return v6152;
    };
    const v6163 = function (value) {
        const v6154 = value instanceof DexiePromise;
        if (v6154) {
            return value;
        }
        const v6155 = value.then;
        const v6156 = typeof v6155;
        const v6157 = v6156 === 'function';
        const v6158 = value && v6157;
        if (v6158) {
            const v6160 = function (resolve, reject) {
                const v6159 = value.then(resolve, reject);
                v6159;
            };
            const v6161 = new DexiePromise(v6160);
            return v6161;
        }
        var rv = new DexiePromise(INTERNAL, true, value);
        const v6162 = linkToPreviousPromise(rv, currentFulfiller);
        v6162;
        return rv;
    };
    const v6171 = function () {
        const v6164 = getArrayOf.apply(null, arguments);
        var values = v6164.map(onPossibleParallellAsync);
        const v6169 = function (resolve, reject) {
            const v6167 = function (value) {
                const v6165 = DexiePromise.resolve(value);
                const v6166 = v6165.then(resolve, reject);
                return v6166;
            };
            const v6168 = values.map(v6167);
            v6168;
        };
        const v6170 = new DexiePromise(v6169);
        return v6170;
    };
    const v6172 = function () {
        return PSD;
    };
    const v6173 = function (value) {
        return PSD = value;
    };
    const v6174 = {};
    v6174.get = v6172;
    v6174.set = v6173;
    const v6175 = function () {
        return totalEchoes;
    };
    const v6176 = {};
    v6176.get = v6175;
    const v6177 = function () {
        return asap;
    };
    const v6178 = function (value) {
        asap = value;
    };
    const v6179 = {};
    v6179.get = v6177;
    v6179.set = v6178;
    const v6180 = function () {
        return rejectionMapper;
    };
    const v6181 = function (value) {
        rejectionMapper = value;
    };
    const v6182 = {};
    v6182.get = v6180;
    v6182.set = v6181;
    const v6201 = function (fn, zoneProps) {
        const v6199 = function (resolve, reject) {
            const v6197 = function (resolve, reject) {
                var psd = PSD;
                psd.unhandleds = [];
                psd.onunhandled = reject;
                const v6193 = function () {
                    var _this = this;
                    const v6191 = function () {
                        const v6183 = _this.unhandleds;
                        const v6184 = v6183.length;
                        const v6185 = v6184 === 0;
                        const v6186 = resolve();
                        const v6187 = _this.unhandleds;
                        const v6188 = v6187[0];
                        const v6189 = reject(v6188);
                        let v6190;
                        if (v6185) {
                            v6190 = v6186;
                        } else {
                            v6190 = v6189;
                        }
                        v6190;
                    };
                    const v6192 = run_at_end_of_this_or_next_physical_tick(v6191);
                    v6192;
                };
                const v6194 = psd.finalize;
                const v6195 = callBoth(v6193, v6194);
                psd.finalize = v6195;
                const v6196 = fn();
                v6196;
            };
            const v6198 = newScope(v6197, zoneProps, resolve, reject);
            return v6198;
        };
        const v6200 = new DexiePromise(v6199);
        return v6200;
    };
    const v6202 = {
        all: v6153,
        resolve: v6163,
        reject: PromiseReject,
        race: v6171,
        PSD: v6174,
        totalEchoes: v6176,
        newPSD: newScope,
        usePSD: usePSD,
        scheduler: v6179,
        rejectionMapper: v6182,
        follow: v6201
    };
    const v6203 = props(DexiePromise, v6202);
    v6203;
    if (NativePromise) {
        const v6204 = NativePromise.allSettled;
        if (v6204) {
            const v6225 = function () {
                const v6205 = getArrayOf.apply(null, arguments);
                var possiblePromises = v6205.map(onPossibleParallellAsync);
                const v6223 = function (resolve) {
                    const v6206 = possiblePromises.length;
                    const v6207 = v6206 === 0;
                    if (v6207) {
                        const v6208 = [];
                        const v6209 = resolve(v6208);
                        v6209;
                    }
                    var remaining = possiblePromises.length;
                    var results = new Array(remaining);
                    const v6221 = function (p, i) {
                        const v6210 = DexiePromise.resolve(p);
                        const v6212 = function (value) {
                            const v6211 = {};
                            v6211.status = 'fulfilled';
                            v6211.value = value;
                            return results[i] = v6211;
                        };
                        const v6214 = function (reason) {
                            const v6213 = {};
                            v6213.status = 'rejected';
                            v6213.reason = reason;
                            return results[i] = v6213;
                        };
                        const v6215 = v6210.then(v6212, v6214);
                        const v6219 = function () {
                            const v6216 = --remaining;
                            const v6217 = resolve(results);
                            const v6218 = v6216 || v6217;
                            return v6218;
                        };
                        const v6220 = v6215.then(v6219);
                        return v6220;
                    };
                    const v6222 = possiblePromises.forEach(v6221);
                    v6222;
                };
                const v6224 = new DexiePromise(v6223);
                return v6224;
            };
            const v6226 = setProp(DexiePromise, 'allSettled', v6225);
            v6226;
        }
        const v6227 = NativePromise.any;
        const v6228 = typeof AggregateError;
        const v6229 = v6228 !== 'undefined';
        const v6230 = v6227 && v6229;
        if (v6230) {
            const v6250 = function () {
                const v6231 = getArrayOf.apply(null, arguments);
                var possiblePromises = v6231.map(onPossibleParallellAsync);
                const v6248 = function (resolve, reject) {
                    const v6232 = possiblePromises.length;
                    const v6233 = v6232 === 0;
                    if (v6233) {
                        const v6234 = [];
                        const v6235 = new AggregateError(v6234);
                        const v6236 = reject(v6235);
                        v6236;
                    }
                    var remaining = possiblePromises.length;
                    var failures = new Array(remaining);
                    const v6246 = function (p, i) {
                        const v6237 = DexiePromise.resolve(p);
                        const v6239 = function (value) {
                            const v6238 = resolve(value);
                            return v6238;
                        };
                        const v6244 = function (failure) {
                            failures[i] = failure;
                            const v6240 = --remaining;
                            const v6241 = !v6240;
                            if (v6241) {
                                const v6242 = new AggregateError(failures);
                                const v6243 = reject(v6242);
                                v6243;
                            }
                        };
                        const v6245 = v6237.then(v6239, v6244);
                        return v6245;
                    };
                    const v6247 = possiblePromises.forEach(v6246);
                    v6247;
                };
                const v6249 = new DexiePromise(v6248);
                return v6249;
            };
            const v6251 = setProp(DexiePromise, 'any', v6250);
            v6251;
        }
    }
    const executePromiseTask = function (promise, fn) {
        try {
            const v6270 = function (value) {
                const v6252 = promise._state;
                const v6253 = v6252 !== null;
                if (v6253) {
                    return;
                }
                const v6254 = value === promise;
                if (v6254) {
                    const v6255 = new TypeError('A promise cannot be resolved with itself.');
                    throw v6255;
                }
                const v6256 = promise._lib;
                const v6257 = beginMicroTickScope();
                var shouldExecuteTick = v6256 && v6257;
                const v6258 = value.then;
                const v6259 = typeof v6258;
                const v6260 = v6259 === 'function';
                const v6261 = value && v6260;
                if (v6261) {
                    const v6266 = function (resolve, reject) {
                        const v6262 = value instanceof DexiePromise;
                        const v6263 = value._then(resolve, reject);
                        const v6264 = value.then(resolve, reject);
                        let v6265;
                        if (v6262) {
                            v6265 = v6263;
                        } else {
                            v6265 = v6264;
                        }
                        v6265;
                    };
                    const v6267 = executePromiseTask(promise, v6266);
                    v6267;
                } else {
                    promise._state = true;
                    promise._value = value;
                    const v6268 = propagateAllListeners(promise);
                    v6268;
                }
                if (shouldExecuteTick) {
                    const v6269 = endMicroTickScope();
                    v6269;
                }
            };
            const v6271 = handleRejection.bind(null, promise);
            const v6272 = fn(v6270, v6271);
            v6272;
        } catch (ex) {
            const v6273 = handleRejection(promise, ex);
            v6273;
        }
    };
    const handleRejection = function (promise, reason) {
        const v6274 = rejectingErrors.push(reason);
        v6274;
        const v6275 = promise._state;
        const v6276 = v6275 !== null;
        if (v6276) {
            return;
        }
        const v6277 = promise._lib;
        const v6278 = beginMicroTickScope();
        var shouldExecuteTick = v6277 && v6278;
        reason = rejectionMapper(reason);
        promise._state = false;
        promise._value = reason;
        const v6279 = reason !== null;
        const v6280 = debug && v6279;
        const v6281 = typeof reason;
        const v6282 = v6281 === 'object';
        const v6283 = v6280 && v6282;
        const v6284 = reason._promise;
        const v6285 = !v6284;
        const v6286 = v6283 && v6285;
        const v6298 = function () {
            var origProp = getPropertyDescriptor(reason, 'stack');
            reason._promise = promise;
            const v6295 = function () {
                const v6287 = origProp.get;
                const v6288 = origProp.get;
                const v6289 = v6288.apply(reason);
                const v6290 = origProp.value;
                let v6291;
                if (v6287) {
                    v6291 = v6289;
                } else {
                    v6291 = v6290;
                }
                const v6292 = origProp && v6291;
                const v6293 = promise.stack;
                let v6294;
                if (stack_being_generated) {
                    v6294 = v6292;
                } else {
                    v6294 = v6293;
                }
                return v6294;
            };
            const v6296 = { get: v6295 };
            const v6297 = setProp(reason, 'stack', v6296);
            v6297;
        };
        const v6299 = tryCatch(v6298);
        const v6300 = v6286 && v6299;
        v6300;
        const v6301 = addPossiblyUnhandledError(promise);
        v6301;
        const v6302 = propagateAllListeners(promise);
        v6302;
        if (shouldExecuteTick) {
            const v6303 = endMicroTickScope();
            v6303;
        }
    };
    const propagateAllListeners = function (promise) {
        var listeners = promise._listeners;
        promise._listeners = [];
        var i = 0;
        var len = listeners.length;
        let v6304 = i < len;
        while (v6304) {
            const v6306 = listeners[i];
            const v6307 = propagateToListener(promise, v6306);
            v6307;
            const v6305 = ++i;
            v6304 = i < len;
        }
        var psd = promise._PSD;
        const v6308 = psd.ref;
        const v6309 = --v6308;
        const v6310 = psd.finalize();
        const v6311 = v6309 || v6310;
        v6311;
        const v6312 = numScheduledCalls === 0;
        if (v6312) {
            const v6313 = ++numScheduledCalls;
            v6313;
            const v6317 = function () {
                const v6314 = --numScheduledCalls;
                const v6315 = v6314 === 0;
                if (v6315) {
                    const v6316 = finalizePhysicalTick();
                    v6316;
                }
            };
            const v6318 = [];
            const v6319 = asap(v6317, v6318);
            v6319;
        }
    };
    const propagateToListener = function (promise, listener) {
        const v6320 = promise._state;
        const v6321 = v6320 === null;
        if (v6321) {
            const v6322 = promise._listeners;
            const v6323 = v6322.push(listener);
            v6323;
            return;
        }
        let cb;
        const v6324 = promise._state;
        const v6325 = listener.onFulfilled;
        const v6326 = listener.onRejected;
        if (v6324) {
            cb = v6325;
        } else {
            cb = v6326;
        }
        const v6327 = cb === null;
        if (v6327) {
            const v6328 = promise._state;
            const v6329 = listener.resolve;
            const v6330 = listener.reject;
            let v6331;
            if (v6328) {
                v6331 = v6329;
            } else {
                v6331 = v6330;
            }
            const v6332 = promise._value;
            const v6333 = v6331(v6332);
            return v6333;
        }
        const v6334 = listener.psd;
        const v6335 = v6334.ref;
        const v6336 = ++v6335;
        v6336;
        const v6337 = ++numScheduledCalls;
        v6337;
        const v6338 = [
            cb,
            promise,
            listener
        ];
        const v6339 = asap(callListener, v6338);
        v6339;
    };
    const callListener = function (cb, promise, listener) {
        try {
            currentFulfiller = promise;
            var ret;
            var value = promise._value;
            const v6340 = promise._state;
            if (v6340) {
                ret = cb(value);
            } else {
                const v6341 = rejectingErrors.length;
                if (v6341) {
                    rejectingErrors = [];
                }
                ret = cb(value);
                const v6342 = rejectingErrors.indexOf(value);
                const v6343 = -1;
                const v6344 = v6342 === v6343;
                if (v6344) {
                    const v6345 = markErrorAsHandled(promise);
                    v6345;
                }
            }
            const v6346 = listener.resolve(ret);
            v6346;
        } catch (e) {
            const v6347 = listener.reject(e);
            v6347;
        } finally {
            currentFulfiller = null;
            const v6348 = --numScheduledCalls;
            const v6349 = v6348 === 0;
            if (v6349) {
                const v6350 = finalizePhysicalTick();
                v6350;
            }
            const v6351 = listener.psd;
            const v6352 = v6351.ref;
            const v6353 = --v6352;
            const v6354 = listener.psd;
            const v6355 = v6354.finalize();
            const v6356 = v6353 || v6355;
            v6356;
        }
    };
    const getStack = function (promise, stacks, limit) {
        const v6357 = stacks.length;
        const v6358 = v6357 === limit;
        if (v6358) {
            return stacks;
        }
        var stack = '';
        const v6359 = promise._state;
        const v6360 = v6359 === false;
        if (v6360) {
            var failure = promise._value;
            var errorName;
            var message;
            const v6361 = failure != null;
            if (v6361) {
                const v6362 = failure.name;
                errorName = v6362 || 'Error';
                const v6363 = failure.message;
                message = v6363 || failure;
                stack = prettyStack(failure, 0);
            } else {
                errorName = failure;
                message = '';
            }
            const v6364 = ': ' + message;
            let v6365;
            if (message) {
                v6365 = v6364;
            } else {
                v6365 = '';
            }
            const v6366 = errorName + v6365;
            const v6367 = v6366 + stack;
            const v6368 = stacks.push(v6367);
            v6368;
        }
        if (debug) {
            const v6369 = promise._stackHolder;
            stack = prettyStack(v6369, 2);
            const v6370 = stacks.indexOf(stack);
            const v6371 = -1;
            const v6372 = v6370 === v6371;
            const v6373 = stack && v6372;
            if (v6373) {
                const v6374 = stacks.push(stack);
                v6374;
            }
            const v6375 = promise._prev;
            if (v6375) {
                const v6376 = promise._prev;
                const v6377 = getStack(v6376, stacks, limit);
                v6377;
            }
        }
        return stacks;
    };
    const linkToPreviousPromise = function (promise, prev) {
        let numPrev;
        const v6378 = prev._numPrev;
        const v6379 = v6378 + 1;
        if (prev) {
            numPrev = v6379;
        } else {
            numPrev = 0;
        }
        const v6380 = numPrev < LONG_STACKS_CLIP_LIMIT;
        if (v6380) {
            promise._prev = prev;
            promise._numPrev = numPrev;
        }
    };
    const physicalTick = function () {
        const v6381 = beginMicroTickScope();
        const v6382 = endMicroTickScope();
        const v6383 = v6381 && v6382;
        v6383;
    };
    const beginMicroTickScope = function () {
        var wasRootExec = isOutsideMicroTick;
        isOutsideMicroTick = false;
        needsNewPhysicalTick = false;
        return wasRootExec;
    };
    const endMicroTickScope = function () {
        var callbacks;
        var i;
        var l;
        let v6385 = true;
        while (v6385) {
            const v6386 = microtickQueue.length;
            let v6387 = v6386 > 0;
            while (v6387) {
                callbacks = microtickQueue;
                microtickQueue = [];
                l = callbacks.length;
                i = 0
                let v6388 = i < l;
                while (v6388) {
                    var item = callbacks[i];
                    const v6390 = item[0];
                    const v6391 = item[1];
                    const v6392 = v6390.apply(null, v6391);
                    v6392;
                    const v6389 = ++i;
                    v6388 = i < l;
                }
                v6387 = v6386 > 0;
            }
            v6385 = v6384 > 0;
        }
        isOutsideMicroTick = true;
        needsNewPhysicalTick = true;
    };
    const finalizePhysicalTick = function () {
        var unhandledErrs = unhandledErrors;
        unhandledErrors = [];
        const v6397 = function (p) {
            const v6393 = p._PSD;
            const v6394 = v6393.onunhandled;
            const v6395 = p._value;
            const v6396 = v6394.call(null, v6395, p);
            v6396;
        };
        const v6398 = unhandledErrs.forEach(v6397);
        v6398;
        var finalizers = tickFinalizers.slice(0);
        var i = finalizers.length;
        while (i) {
            const v6399 = --i;
            const v6400 = finalizers[v6399]();
            v6400;
        }
    };
    const run_at_end_of_this_or_next_physical_tick = function (fn) {
        const finalizer = function () {
            const v6401 = fn();
            v6401;
            const v6402 = tickFinalizers.indexOf(finalizer);
            const v6403 = tickFinalizers.splice(v6402, 1);
            v6403;
        };
        const v6404 = tickFinalizers.push(finalizer);
        v6404;
        const v6405 = ++numScheduledCalls;
        v6405;
        const v6409 = function () {
            const v6406 = --numScheduledCalls;
            const v6407 = v6406 === 0;
            if (v6407) {
                const v6408 = finalizePhysicalTick();
                v6408;
            }
        };
        const v6410 = [];
        const v6411 = asap(v6409, v6410);
        v6411;
    };
    const addPossiblyUnhandledError = function (promise) {
        const v6415 = function (p) {
            const v6412 = p._value;
            const v6413 = promise._value;
            const v6414 = v6412 === v6413;
            return v6414;
        };
        const v6416 = unhandledErrors.some(v6415);
        const v6417 = !v6416;
        if (v6417) {
            const v6418 = unhandledErrors.push(promise);
            v6418;
        }
    };
    const markErrorAsHandled = function (promise) {
        var i = unhandledErrors.length;
        while (i) {
            const v6419 = --i;
            const v6420 = unhandledErrors[v6419];
            const v6421 = v6420._value;
            const v6422 = promise._value;
            const v6423 = v6421 === v6422;
            if (v6423) {
                const v6424 = unhandledErrors.splice(i, 1);
                v6424;
                return;
            }
        }
    };
    const PromiseReject = function (reason) {
        const v6425 = new DexiePromise(INTERNAL, false, reason);
        return v6425;
    };
    const wrap = function (fn, errorCatcher) {
        var psd = PSD;
        const v6432 = function () {
            var wasRootExec = beginMicroTickScope();
            var outerScope = PSD;
            try {
                const v6426 = switchToZone(psd, true);
                v6426;
                const v6427 = fn.apply(this, arguments);
                return v6427;
            } catch (e) {
                const v6428 = errorCatcher(e);
                const v6429 = errorCatcher && v6428;
                v6429;
            } finally {
                const v6430 = switchToZone(outerScope, false);
                v6430;
                if (wasRootExec) {
                    const v6431 = endMicroTickScope();
                    v6431;
                }
            }
        };
        return v6432;
    };
    var task = {};
    task.awaits = 0;
    task.echoes = 0;
    task.id = 0;
    var taskCounter = 0;
    var zoneStack = [];
    var zoneEchoes = 0;
    var totalEchoes = 0;
    var zone_id_counter = 0;
    const newScope = function (fn, props, a1, a2) {
        var parent = PSD;
        var psd = Object.create(parent);
        psd.parent = parent;
        psd.ref = 0;
        psd.global = false;
        const v6433 = ++zone_id_counter;
        psd.id = v6433;
        var globalEnv = globalPSD.env;
        const v6434 = {};
        v6434.value = DexiePromise;
        v6434.configurable = true;
        v6434.writable = true;
        const v6435 = DexiePromise.all;
        const v6436 = DexiePromise.race;
        const v6437 = DexiePromise.allSettled;
        const v6438 = DexiePromise.any;
        const v6439 = DexiePromise.resolve;
        const v6440 = DexiePromise.reject;
        const v6441 = globalEnv.nthen;
        const v6442 = getPatchedPromiseThen(v6441, psd);
        const v6443 = globalEnv.gthen;
        const v6444 = getPatchedPromiseThen(v6443, psd);
        const v6445 = {
            Promise: DexiePromise,
            PromiseProp: v6434,
            all: v6435,
            race: v6436,
            allSettled: v6437,
            any: v6438,
            resolve: v6439,
            reject: v6440,
            nthen: v6442,
            gthen: v6444
        };
        const v6446 = {};
        let v6447;
        if (patchGlobalPromise) {
            v6447 = v6445;
        } else {
            v6447 = v6446;
        }
        psd.env = v6447;
        if (props) {
            const v6448 = extend(psd, props);
            v6448;
        }
        const v6449 = parent.ref;
        const v6450 = ++v6449;
        v6450;
        const v6457 = function () {
            const v6451 = this.parent;
            const v6452 = v6451.ref;
            const v6453 = --v6452;
            const v6454 = this.parent;
            const v6455 = v6454.finalize();
            const v6456 = v6453 || v6455;
            v6456;
        };
        psd.finalize = v6457;
        var rv = usePSD(psd, fn, a1, a2);
        const v6458 = psd.ref;
        const v6459 = v6458 === 0;
        if (v6459) {
            const v6460 = psd.finalize();
            v6460;
        }
        return rv;
    };
    const incrementExpectedAwaits = function () {
        const v6461 = task.id;
        const v6462 = !v6461;
        if (v6462) {
            const v6463 = ++taskCounter;
            task.id = v6463;
        }
        const v6464 = task.awaits;
        const v6465 = ++v6464;
        v6465;
        task.echoes += ZONE_ECHO_LIMIT;
        const v6466 = task.id;
        return v6466;
    };
    const decrementExpectedAwaits = function () {
        const v6467 = task.awaits;
        const v6468 = !v6467;
        if (v6468) {
            return false;
        }
        const v6469 = task.awaits;
        const v6470 = --v6469;
        const v6471 = v6470 === 0;
        if (v6471) {
            task.id = 0;
        }
        const v6472 = task.awaits;
        task.echoes = v6472 * ZONE_ECHO_LIMIT;
        return true;
    };
    const v6473 = '' + nativePromiseThen;
    const v6474 = v6473.indexOf('[native code]');
    const v6475 = -1;
    const v6476 = v6474 === v6475;
    if (v6476) {
        decrementExpectedAwaits = nop;
        incrementExpectedAwaits = decrementExpectedAwaits;
    }
    const onPossibleParallellAsync = function (possiblePromise) {
        const v6477 = task.echoes;
        const v6478 = v6477 && possiblePromise;
        const v6479 = possiblePromise.constructor;
        const v6480 = v6479 === NativePromise;
        const v6481 = v6478 && v6480;
        if (v6481) {
            const v6482 = incrementExpectedAwaits();
            v6482;
            const v6484 = function (x) {
                const v6483 = decrementExpectedAwaits();
                v6483;
                return x;
            };
            const v6487 = function (e) {
                const v6485 = decrementExpectedAwaits();
                v6485;
                const v6486 = rejection(e);
                return v6486;
            };
            const v6488 = possiblePromise.then(v6484, v6487);
            return v6488;
        }
        return possiblePromise;
    };
    const zoneEnterEcho = function (targetZone) {
        const v6489 = ++totalEchoes;
        v6489;
        const v6490 = task.echoes;
        const v6491 = !v6490;
        const v6492 = task.echoes;
        const v6493 = --v6492;
        const v6494 = v6493 === 0;
        const v6495 = v6491 || v6494;
        if (v6495) {
            task.id = 0;
            task.echoes = task.id;
        }
        const v6496 = zoneStack.push(PSD);
        v6496;
        const v6497 = switchToZone(targetZone, true);
        v6497;
    };
    const zoneLeaveEcho = function () {
        const v6498 = zoneStack.length;
        const v6499 = v6498 - 1;
        var zone = zoneStack[v6499];
        const v6500 = zoneStack.pop();
        v6500;
        const v6501 = switchToZone(zone, false);
        v6501;
    };
    const switchToZone = function (targetZone, bEnteringZone) {
        var currentZone = PSD;
        const v6502 = task.echoes;
        const v6503 = zoneEchoes++;
        const v6504 = !v6503;
        const v6505 = targetZone !== PSD;
        const v6506 = v6504 || v6505;
        const v6507 = v6502 && v6506;
        const v6508 = --zoneEchoes;
        const v6509 = !v6508;
        const v6510 = targetZone !== PSD;
        const v6511 = v6509 || v6510;
        const v6512 = zoneEchoes && v6511;
        let v6513;
        if (bEnteringZone) {
            v6513 = v6507;
        } else {
            v6513 = v6512;
        }
        if (v6513) {
            const v6514 = zoneEnterEcho.bind(null, targetZone);
            let v6515;
            if (bEnteringZone) {
                v6515 = v6514;
            } else {
                v6515 = zoneLeaveEcho;
            }
            const v6516 = enqueueNativeMicroTask(v6515);
            v6516;
        }
        const v6517 = targetZone === PSD;
        if (v6517) {
            return;
        }
        PSD = targetZone;
        const v6518 = currentZone === globalPSD;
        if (v6518) {
            const v6519 = snapShot();
            globalPSD.env = v6519;
        }
        if (patchGlobalPromise) {
            const v6520 = globalPSD.env;
            var GlobalPromise_1 = v6520.Promise;
            var targetEnv = targetZone.env;
            const v6521 = targetEnv.nthen;
            nativePromiseProto.then = v6521;
            const v6522 = GlobalPromise_1.prototype;
            const v6523 = targetEnv.gthen;
            v6522.then = v6523;
            const v6524 = currentZone.global;
            const v6525 = targetZone.global;
            const v6526 = v6524 || v6525;
            if (v6526) {
                const v6527 = targetEnv.PromiseProp;
                const v6528 = Object.defineProperty(_global, 'Promise', v6527);
                v6528;
                const v6529 = targetEnv.all;
                GlobalPromise_1.all = v6529;
                const v6530 = targetEnv.race;
                GlobalPromise_1.race = v6530;
                const v6531 = targetEnv.resolve;
                GlobalPromise_1.resolve = v6531;
                const v6532 = targetEnv.reject;
                GlobalPromise_1.reject = v6532;
                const v6533 = targetEnv.allSettled;
                if (v6533) {
                    const v6534 = targetEnv.allSettled;
                    GlobalPromise_1.allSettled = v6534;
                }
                const v6535 = targetEnv.any;
                if (v6535) {
                    const v6536 = targetEnv.any;
                    GlobalPromise_1.any = v6536;
                }
            }
        }
    };
    const snapShot = function () {
        var GlobalPromise = _global.Promise;
        const v6537 = Object.getOwnPropertyDescriptor(_global, 'Promise');
        const v6538 = GlobalPromise.all;
        const v6539 = GlobalPromise.race;
        const v6540 = GlobalPromise.allSettled;
        const v6541 = GlobalPromise.any;
        const v6542 = GlobalPromise.resolve;
        const v6543 = GlobalPromise.reject;
        const v6544 = nativePromiseProto.then;
        const v6545 = GlobalPromise.prototype;
        const v6546 = v6545.then;
        const v6547 = {
            Promise: GlobalPromise,
            PromiseProp: v6537,
            all: v6538,
            race: v6539,
            allSettled: v6540,
            any: v6541,
            resolve: v6542,
            reject: v6543,
            nthen: v6544,
            gthen: v6546
        };
        const v6548 = {};
        let v6549;
        if (patchGlobalPromise) {
            v6549 = v6547;
        } else {
            v6549 = v6548;
        }
        return v6549;
    };
    const usePSD = function (psd, fn, a1, a2, a3) {
        var outerScope = PSD;
        try {
            const v6550 = switchToZone(psd, true);
            v6550;
            const v6551 = fn(a1, a2, a3);
            return v6551;
        } finally {
            const v6552 = switchToZone(outerScope, false);
            v6552;
        }
    };
    const enqueueNativeMicroTask = function (job) {
        const v6553 = nativePromiseThen.call(resolvedNativePromise, job);
        v6553;
    };
    const nativeAwaitCompatibleWrap = function (fn, zone, possibleAwait, cleanup) {
        const v6554 = typeof fn;
        const v6555 = v6554 !== 'function';
        const v6561 = function () {
            var outerZone = PSD;
            if (possibleAwait) {
                const v6556 = incrementExpectedAwaits();
                v6556;
            }
            const v6557 = switchToZone(zone, true);
            v6557;
            try {
                const v6558 = fn.apply(this, arguments);
                return v6558;
            } finally {
                const v6559 = switchToZone(outerZone, false);
                v6559;
                if (cleanup) {
                    const v6560 = enqueueNativeMicroTask(decrementExpectedAwaits);
                    v6560;
                }
            }
        };
        let v6562;
        if (v6555) {
            v6562 = fn;
        } else {
            v6562 = v6561;
        }
        return v6562;
    };
    const getPatchedPromiseThen = function (origThen, zone) {
        const v6566 = function (onResolved, onRejected) {
            const v6563 = nativeAwaitCompatibleWrap(onResolved, zone);
            const v6564 = nativeAwaitCompatibleWrap(onRejected, zone);
            const v6565 = origThen.call(this, v6563, v6564);
            return v6565;
        };
        return v6566;
    };
    var UNHANDLEDREJECTION = 'unhandledrejection';
    const globalError = function (err, promise) {
        var rv;
        try {
            rv = promise.onuncatched(err);
        } catch (e) {
        }
        const v6567 = rv !== false;
        if (v6567) {
            try {
                var event;
                var eventData = {};
                eventData.promise = promise;
                eventData.reason = err;
                const v6568 = _global.document;
                const v6569 = document.createEvent;
                const v6570 = v6568 && v6569;
                if (v6570) {
                    event = document.createEvent('Event');
                    const v6571 = event.initEvent(UNHANDLEDREJECTION, true, true);
                    v6571;
                    const v6572 = extend(event, eventData);
                    v6572;
                } else {
                    const v6573 = _global.CustomEvent;
                    if (v6573) {
                        const v6574 = { detail: eventData };
                        event = new CustomEvent(UNHANDLEDREJECTION, v6574);
                        const v6575 = extend(event, eventData);
                        v6575;
                    }
                }
                const v6576 = _global.dispatchEvent;
                const v6577 = event && v6576;
                if (v6577) {
                    const v6578 = dispatchEvent(event);
                    v6578;
                    const v6579 = _global.PromiseRejectionEvent;
                    const v6580 = !v6579;
                    const v6581 = _global.onunhandledrejection;
                    const v6582 = v6580 && v6581;
                    if (v6582) {
                        try {
                            const v6583 = _global.onunhandledrejection(event);
                            v6583;
                        } catch (_) {
                        }
                    }
                }
                const v6584 = debug && event;
                const v6585 = event.defaultPrevented;
                const v6586 = !v6585;
                const v6587 = v6584 && v6586;
                if (v6587) {
                    const v6588 = err.stack;
                    const v6589 = v6588 || err;
                    const v6590 = 'Unhandled rejection: ' + v6589;
                    const v6591 = console.warn(v6590);
                    v6591;
                }
            } catch (e) {
            }
        }
    };
    var rejection = DexiePromise.reject;
    const tempTransaction = function (db, mode, storeNames, fn) {
        const v6592 = db.idbdb;
        const v6593 = !v6592;
        const v6594 = db._state;
        const v6595 = v6594.openComplete;
        const v6596 = !v6595;
        const v6597 = PSD.letThrough;
        const v6598 = !v6597;
        const v6599 = db._vip;
        const v6600 = !v6599;
        const v6601 = v6598 && v6600;
        const v6602 = v6596 && v6601;
        const v6603 = v6593 || v6602;
        if (v6603) {
            const v6604 = db._state;
            const v6605 = v6604.openComplete;
            if (v6605) {
                const v6606 = db._state;
                const v6607 = v6606.dbOpenError;
                const v6608 = new exceptions.DatabaseClosed(v6607);
                const v6609 = rejection(v6608);
                return v6609;
            }
            const v6610 = db._state;
            const v6611 = v6610.isBeingOpened;
            const v6612 = !v6611;
            if (v6612) {
                const v6613 = db._options;
                const v6614 = v6613.autoOpen;
                const v6615 = !v6614;
                if (v6615) {
                    const v6616 = new exceptions.DatabaseClosed();
                    const v6617 = rejection(v6616);
                    return v6617;
                }
                const v6618 = db.open();
                const v6619 = v6618.catch(nop);
                v6619;
            }
            const v6620 = db._state;
            const v6621 = v6620.dbReadyPromise;
            const v6623 = function () {
                const v6622 = tempTransaction(db, mode, storeNames, fn);
                return v6622;
            };
            const v6624 = v6621.then(v6623);
            return v6624;
        } else {
            const v6625 = db._dbSchema;
            var trans = db._createTransaction(mode, storeNames, v6625);
            try {
                const v6626 = trans.create();
                v6626;
                const v6627 = db._state;
                v6627.PR1398_maxLoop = 3;
            } catch (ex) {
                const v6628 = ex.name;
                const v6629 = errnames.InvalidState;
                const v6630 = v6628 === v6629;
                const v6631 = db.isOpen();
                const v6632 = v6630 && v6631;
                const v6633 = db._state;
                const v6634 = v6633.PR1398_maxLoop;
                const v6635 = --v6634;
                const v6636 = v6635 > 0;
                const v6637 = v6632 && v6636;
                if (v6637) {
                    const v6638 = console.warn('Dexie: Need to reopen db');
                    v6638;
                    const v6639 = db._close();
                    v6639;
                    const v6640 = db.open();
                    const v6642 = function () {
                        const v6641 = tempTransaction(db, mode, storeNames, fn);
                        return v6641;
                    };
                    const v6643 = v6640.then(v6642);
                    return v6643;
                }
                const v6644 = rejection(ex);
                return v6644;
            }
            const v6648 = function (resolve, reject) {
                const v6646 = function () {
                    PSD.trans = trans;
                    const v6645 = fn(resolve, reject, trans);
                    return v6645;
                };
                const v6647 = newScope(v6646);
                return v6647;
            };
            const v6649 = trans._promise(mode, v6648);
            const v6653 = function (result) {
                const v6650 = trans._completion;
                const v6651 = function () {
                    return result;
                };
                const v6652 = v6650.then(v6651);
                return v6652;
            };
            const v6654 = v6649.then(v6653);
            return v6654;
        }
    };
    var DEXIE_VERSION = '3.2.1';
    var maxString = String.fromCharCode(65535);
    const v6655 = -Infinity;
    var minKey = v6655;
    var INVALID_KEY_ARGUMENT = 'Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.';
    var STRING_EXPECTED = 'String expected.';
    var connections = [];
    const v6656 = typeof navigator;
    const v6657 = v6656 !== 'undefined';
    const v6658 = navigator.userAgent;
    const v6659 = /(MSIE|Trident|Edge)/.test(v6658);
    var isIEOrEdge = v6657 && v6659;
    var hasIEDeleteObjectStoreBug = isIEOrEdge;
    var hangsOnDeleteLargeKeyRange = isIEOrEdge;
    var dexieStackFrameFilter = function (frame) {
        const v6660 = /(dexie\.js|dexie\.min\.js)/.test(frame);
        const v6661 = !v6660;
        return v6661;
    };
    var DBNAMES_DB = '__dbnames';
    var READONLY = 'readonly';
    var READWRITE = 'readwrite';
    const combine = function (filter1, filter2) {
        const v6665 = function () {
            const v6662 = filter1.apply(this, arguments);
            const v6663 = filter2.apply(this, arguments);
            const v6664 = v6662 && v6663;
            return v6664;
        };
        let v6666;
        if (filter2) {
            v6666 = v6665;
        } else {
            v6666 = filter1;
        }
        let v6667;
        if (filter1) {
            v6667 = v6666;
        } else {
            v6667 = filter2;
        }
        return v6667;
    };
    const v6668 = -Infinity;
    const v6669 = [];
    const v6670 = [v6669];
    var AnyRange = {};
    AnyRange.type = 3;
    AnyRange.lower = v6668;
    AnyRange.lowerOpen = false;
    AnyRange.upper = v6670;
    AnyRange.upperOpen = false;
    const workaroundForUndefinedPrimKey = function (keyPath) {
        const v6671 = typeof keyPath;
        const v6672 = v6671 === 'string';
        const v6673 = /\./.test(keyPath);
        const v6674 = !v6673;
        const v6675 = v6672 && v6674;
        const v6682 = function (obj) {
            const v6676 = obj[keyPath];
            const v6677 = v6676 === undefined;
            const v6678 = keyPath in obj;
            const v6679 = v6677 && v6678;
            if (v6679) {
                obj = deepClone(obj);
                const v6680 = obj[keyPath];
                const v6681 = delete v6680;
                v6681;
            }
            return obj;
        };
        const v6683 = function (obj) {
            return obj;
        };
        let v6684;
        if (v6675) {
            v6684 = v6682;
        } else {
            v6684 = v6683;
        }
        return v6684;
    };
    const v7099 = function () {
        const Table = function () {
        };
        const v6685 = Table.prototype;
        const v6716 = function (mode, fn, writeLocked) {
            const v6686 = this._tx;
            const v6687 = PSD.trans;
            var trans = v6686 || v6687;
            var tableName = this.name;
            const checkTableInTransaction = function (resolve, reject, trans) {
                const v6688 = trans.schema;
                const v6689 = v6688[tableName];
                const v6690 = !v6689;
                if (v6690) {
                    const v6691 = 'Table ' + tableName;
                    const v6692 = v6691 + ' not part of transaction';
                    const v6693 = new exceptions.NotFound(v6692);
                    throw v6693;
                }
                const v6694 = trans.idbtrans;
                const v6695 = fn(v6694, trans);
                return v6695;
            };
            var wasRootExec = beginMicroTickScope();
            try {
                const v6696 = trans.db;
                const v6697 = this.db;
                const v6698 = v6696 === v6697;
                const v6699 = trans && v6698;
                const v6700 = PSD.trans;
                const v6701 = trans === v6700;
                const v6702 = trans._promise(mode, checkTableInTransaction, writeLocked);
                const v6704 = function () {
                    const v6703 = trans._promise(mode, checkTableInTransaction, writeLocked);
                    return v6703;
                };
                const v6705 = PSD.transless;
                const v6706 = v6705 || PSD;
                const v6707 = {
                    trans: trans,
                    transless: v6706
                };
                const v6708 = newScope(v6704, v6707);
                let v6709;
                if (v6701) {
                    v6709 = v6702;
                } else {
                    v6709 = v6708;
                }
                const v6710 = this.db;
                const v6711 = this.name;
                const v6712 = [v6711];
                const v6713 = tempTransaction(v6710, mode, v6712, checkTableInTransaction);
                let v6714;
                if (v6699) {
                    v6714 = v6709;
                } else {
                    v6714 = v6713;
                }
                return v6714;
            } finally {
                if (wasRootExec) {
                    const v6715 = endMicroTickScope();
                    v6715;
                }
            }
        };
        v6685._trans = v6716;
        const v6717 = Table.prototype;
        const v6734 = function (keyOrCrit, cb) {
            var _this = this;
            const v6718 = keyOrCrit.constructor;
            const v6719 = v6718 === Object;
            const v6720 = keyOrCrit && v6719;
            if (v6720) {
                const v6721 = this.where(keyOrCrit);
                const v6722 = v6721.first(cb);
                return v6722;
            }
            const v6731 = function (trans) {
                const v6723 = _this.core;
                const v6724 = {
                    trans: trans,
                    key: keyOrCrit
                };
                const v6725 = v6723.get(v6724);
                const v6729 = function (res) {
                    const v6726 = _this.hook;
                    const v6727 = v6726.reading;
                    const v6728 = v6727.fire(res);
                    return v6728;
                };
                const v6730 = v6725.then(v6729);
                return v6730;
            };
            const v6732 = this._trans('readonly', v6731);
            const v6733 = v6732.then(cb);
            return v6733;
        };
        v6717.get = v6734;
        const v6735 = Table.prototype;
        const v6833 = function (indexOrCrit) {
            const v6736 = typeof indexOrCrit;
            const v6737 = v6736 === 'string';
            if (v6737) {
                const v6738 = this.db;
                const v6739 = new v6738.WhereClause(this, indexOrCrit);
                return v6739;
            }
            const v6740 = isArray(indexOrCrit);
            if (v6740) {
                const v6741 = this.db;
                const v6742 = indexOrCrit.join('+');
                const v6743 = '[' + v6742;
                const v6744 = v6743 + ']';
                const v6745 = new v6741.WhereClause(this, v6744);
                return v6745;
            }
            var keyPaths = keys(indexOrCrit);
            const v6746 = keyPaths.length;
            const v6747 = v6746 === 1;
            if (v6747) {
                const v6748 = keyPaths[0];
                const v6749 = this.where(v6748);
                const v6750 = keyPaths[0];
                const v6751 = indexOrCrit[v6750];
                const v6752 = v6749.equals(v6751);
                return v6752;
            }
            const v6753 = this.schema;
            const v6754 = v6753.indexes;
            const v6755 = this.schema;
            const v6756 = v6755.primKey;
            const v6757 = v6754.concat(v6756);
            const v6771 = function (ix) {
                const v6758 = ix.compound;
                const v6762 = function (keyPath) {
                    const v6759 = ix.keyPath;
                    const v6760 = v6759.indexOf(keyPath);
                    const v6761 = v6760 >= 0;
                    return v6761;
                };
                const v6763 = keyPaths.every(v6762);
                const v6764 = v6758 && v6763;
                const v6765 = ix.keyPath;
                const v6768 = function (keyPath) {
                    const v6766 = keyPaths.indexOf(keyPath);
                    const v6767 = v6766 >= 0;
                    return v6767;
                };
                const v6769 = v6765.every(v6768);
                const v6770 = v6764 && v6769;
                return v6770;
            };
            const v6772 = v6757.filter(v6771);
            var compoundIndex = v6772[0];
            const v6773 = this.db;
            const v6774 = v6773._maxKey;
            const v6775 = v6774 !== maxString;
            const v6776 = compoundIndex && v6775;
            if (v6776) {
                const v6777 = compoundIndex.name;
                const v6778 = this.where(v6777);
                const v6779 = compoundIndex.keyPath;
                const v6781 = function (kp) {
                    const v6780 = indexOrCrit[kp];
                    return v6780;
                };
                const v6782 = v6779.map(v6781);
                const v6783 = v6778.equals(v6782);
                return v6783;
            }
            const v6784 = !compoundIndex;
            const v6785 = v6784 && debug;
            if (v6785) {
                const v6786 = JSON.stringify(indexOrCrit);
                const v6787 = 'The query ' + v6786;
                const v6788 = v6787 + ' on ';
                const v6789 = this.name;
                const v6790 = v6788 + v6789;
                const v6791 = v6790 + ' would benefit of a ';
                const v6792 = keyPaths.join('+');
                const v6793 = 'compound index [' + v6792;
                const v6794 = v6793 + ']';
                const v6795 = v6791 + v6794;
                const v6796 = console.warn(v6795);
                v6796;
            }
            const v6797 = this.schema;
            var idxByName = v6797.idxByName;
            const v6798 = this.db;
            const v6799 = v6798._deps;
            var idb = v6799.indexedDB;
            const equals = function (a, b) {
                try {
                    const v6800 = idb.cmp(a, b);
                    const v6801 = v6800 === 0;
                    return v6801;
                } catch (e) {
                    return false;
                }
            };
            const v6820 = function (_a, keyPath) {
                var prevIndex = _a[0];
                var prevFilterFn = _a[1];
                var index = idxByName[keyPath];
                var value = indexOrCrit[keyPath];
                const v6802 = prevIndex || index;
                const v6803 = !index;
                const v6804 = prevIndex || v6803;
                const v6805 = index.multi;
                const v6806 = index && v6805;
                const v6812 = function (x) {
                    var prop = getByKeyPath(x, keyPath);
                    const v6807 = isArray(prop);
                    const v6809 = function (item) {
                        const v6808 = equals(value, item);
                        return v6808;
                    };
                    const v6810 = prop.some(v6809);
                    const v6811 = v6807 && v6810;
                    return v6811;
                };
                const v6815 = function (x) {
                    const v6813 = getByKeyPath(x, keyPath);
                    const v6814 = equals(value, v6813);
                    return v6814;
                };
                let v6816;
                if (v6806) {
                    v6816 = v6812;
                } else {
                    v6816 = v6815;
                }
                const v6817 = combine(prevFilterFn, v6816);
                let v6818;
                if (v6804) {
                    v6818 = v6817;
                } else {
                    v6818 = prevFilterFn;
                }
                const v6819 = [
                    v6802,
                    v6818
                ];
                return v6819;
            };
            const v6821 = [
                null,
                null
            ];
            var _a = keyPaths.reduce(v6820, v6821);
            var idx = _a[0];
            var filterFunction = _a[1];
            const v6822 = idx.name;
            const v6823 = this.where(v6822);
            const v6824 = idx.keyPath;
            const v6825 = indexOrCrit[v6824];
            const v6826 = v6823.equals(v6825);
            const v6827 = v6826.filter(filterFunction);
            const v6828 = this.filter(filterFunction);
            const v6829 = this.where(keyPaths);
            const v6830 = v6829.equals('');
            let v6831;
            if (compoundIndex) {
                v6831 = v6828;
            } else {
                v6831 = v6830;
            }
            let v6832;
            if (idx) {
                v6832 = v6827;
            } else {
                v6832 = v6831;
            }
            return v6832;
        };
        v6735.where = v6833;
        const v6834 = Table.prototype;
        const v6837 = function (filterFunction) {
            const v6835 = this.toCollection();
            const v6836 = v6835.and(filterFunction);
            return v6836;
        };
        v6834.filter = v6837;
        const v6838 = Table.prototype;
        const v6841 = function (thenShortcut) {
            const v6839 = this.toCollection();
            const v6840 = v6839.count(thenShortcut);
            return v6840;
        };
        v6838.count = v6841;
        const v6842 = Table.prototype;
        const v6845 = function (offset) {
            const v6843 = this.toCollection();
            const v6844 = v6843.offset(offset);
            return v6844;
        };
        v6842.offset = v6845;
        const v6846 = Table.prototype;
        const v6849 = function (numRows) {
            const v6847 = this.toCollection();
            const v6848 = v6847.limit(numRows);
            return v6848;
        };
        v6846.limit = v6849;
        const v6850 = Table.prototype;
        const v6853 = function (callback) {
            const v6851 = this.toCollection();
            const v6852 = v6851.each(callback);
            return v6852;
        };
        v6850.each = v6853;
        const v6854 = Table.prototype;
        const v6857 = function (thenShortcut) {
            const v6855 = this.toCollection();
            const v6856 = v6855.toArray(thenShortcut);
            return v6856;
        };
        v6854.toArray = v6857;
        const v6858 = Table.prototype;
        const v6863 = function () {
            const v6859 = this.db;
            const v6860 = this.db;
            const v6861 = new v6860.WhereClause(this);
            const v6862 = new v6859.Collection(v6861);
            return v6862;
        };
        v6858.toCollection = v6863;
        const v6864 = Table.prototype;
        const v6874 = function (index) {
            const v6865 = this.db;
            const v6866 = this.db;
            const v6867 = isArray(index);
            const v6868 = index.join('+');
            const v6869 = '[' + v6868;
            const v6870 = v6869 + ']';
            let v6871;
            if (v6867) {
                v6871 = v6870;
            } else {
                v6871 = index;
            }
            const v6872 = new v6866.WhereClause(this, v6871);
            const v6873 = new v6865.Collection(v6872);
            return v6873;
        };
        v6864.orderBy = v6874;
        const v6875 = Table.prototype;
        const v6878 = function () {
            const v6876 = this.toCollection();
            const v6877 = v6876.reverse();
            return v6877;
        };
        v6875.reverse = v6878;
        const v6879 = Table.prototype;
        const v6894 = function (constructor) {
            const v6880 = this.schema;
            v6880.mappedClass = constructor;
            var readHook = function (obj) {
                const v6881 = !obj;
                if (v6881) {
                    return obj;
                }
                const v6882 = constructor.prototype;
                var res = Object.create(v6882);
                let m;
                for (m in obj) {
                    const v6883 = hasOwn(obj, m);
                    if (v6883) {
                        try {
                            const v6884 = obj[m];
                            res[m] = v6884;
                        } catch (_) {
                        }
                    }
                }
                return res;
            };
            const v6885 = this.schema;
            const v6886 = v6885.readHook;
            if (v6886) {
                const v6887 = this.hook;
                const v6888 = v6887.reading;
                const v6889 = this.schema;
                const v6890 = v6889.readHook;
                const v6891 = v6888.unsubscribe(v6890);
                v6891;
            }
            const v6892 = this.schema;
            v6892.readHook = readHook;
            const v6893 = this.hook('reading', readHook);
            v6893;
            return constructor;
        };
        v6879.mapToClass = v6894;
        const v6895 = Table.prototype;
        const v6898 = function () {
            const Class = function (content) {
                const v6896 = extend(this, content);
                v6896;
            };
            const v6897 = this.mapToClass(Class);
            return v6897;
        };
        v6895.defineClass = v6898;
        const v6899 = Table.prototype;
        const v6923 = function (obj, key) {
            var _this = this;
            const v6900 = this.schema;
            var _a = v6900.primKey;
            var auto = _a.auto;
            var keyPath = _a.keyPath;
            var objToAdd = obj;
            const v6901 = keyPath && auto;
            if (v6901) {
                const v6902 = workaroundForUndefinedPrimKey(keyPath);
                objToAdd = v6902(obj);
            }
            const v6910 = function (trans) {
                const v6903 = _this.core;
                const v6904 = key != null;
                const v6905 = [key];
                let v6906;
                if (v6904) {
                    v6906 = v6905;
                } else {
                    v6906 = null;
                }
                const v6907 = [objToAdd];
                const v6908 = {
                    trans: trans,
                    type: 'add',
                    keys: v6906,
                    values: v6907
                };
                const v6909 = v6903.mutate(v6908);
                return v6909;
            };
            const v6911 = this._trans('readwrite', v6910);
            const v6918 = function (res) {
                const v6912 = res.numFailures;
                const v6913 = res.failures;
                const v6914 = v6913[0];
                const v6915 = DexiePromise.reject(v6914);
                const v6916 = res.lastResult;
                let v6917;
                if (v6912) {
                    v6917 = v6915;
                } else {
                    v6917 = v6916;
                }
                return v6917;
            };
            const v6919 = v6911.then(v6918);
            const v6921 = function (lastResult) {
                if (keyPath) {
                    try {
                        const v6920 = setByKeyPath(obj, keyPath, lastResult);
                        v6920;
                    } catch (_) {
                    }
                }
                return lastResult;
            };
            const v6922 = v6919.then(v6921);
            return v6922;
        };
        v6899.add = v6923;
        const v6924 = Table.prototype;
        const v6951 = function (keyOrObject, modifications) {
            const v6925 = typeof keyOrObject;
            const v6926 = v6925 === 'object';
            const v6927 = isArray(keyOrObject);
            const v6928 = !v6927;
            const v6929 = v6926 && v6928;
            if (v6929) {
                const v6930 = this.schema;
                const v6931 = v6930.primKey;
                const v6932 = v6931.keyPath;
                var key = getByKeyPath(keyOrObject, v6932);
                const v6933 = key === undefined;
                if (v6933) {
                    const v6934 = new exceptions.InvalidArgument('Given object does not contain its primary key');
                    const v6935 = rejection(v6934);
                    return v6935;
                }
                try {
                    const v6936 = typeof modifications;
                    const v6937 = v6936 !== 'function';
                    if (v6937) {
                        const v6938 = keys(modifications);
                        const v6941 = function (keyPath) {
                            const v6939 = modifications[keyPath];
                            const v6940 = setByKeyPath(keyOrObject, keyPath, v6939);
                            v6940;
                        };
                        const v6942 = v6938.forEach(v6941);
                        v6942;
                    } else {
                        const v6943 = {
                            value: keyOrObject,
                            primKey: key
                        };
                        const v6944 = modifications(keyOrObject, v6943);
                        v6944;
                    }
                } catch (_a) {
                }
                const v6945 = this.where(':id');
                const v6946 = v6945.equals(key);
                const v6947 = v6946.modify(modifications);
                return v6947;
            } else {
                const v6948 = this.where(':id');
                const v6949 = v6948.equals(keyOrObject);
                const v6950 = v6949.modify(modifications);
                return v6950;
            }
        };
        v6924.update = v6951;
        const v6952 = Table.prototype;
        const v6976 = function (obj, key) {
            var _this = this;
            const v6953 = this.schema;
            var _a = v6953.primKey;
            var auto = _a.auto;
            var keyPath = _a.keyPath;
            var objToAdd = obj;
            const v6954 = keyPath && auto;
            if (v6954) {
                const v6955 = workaroundForUndefinedPrimKey(keyPath);
                objToAdd = v6955(obj);
            }
            const v6963 = function (trans) {
                const v6956 = _this.core;
                const v6957 = [objToAdd];
                const v6958 = key != null;
                const v6959 = [key];
                let v6960;
                if (v6958) {
                    v6960 = v6959;
                } else {
                    v6960 = null;
                }
                const v6961 = {
                    trans: trans,
                    type: 'put',
                    values: v6957,
                    keys: v6960
                };
                const v6962 = v6956.mutate(v6961);
                return v6962;
            };
            const v6964 = this._trans('readwrite', v6963);
            const v6971 = function (res) {
                const v6965 = res.numFailures;
                const v6966 = res.failures;
                const v6967 = v6966[0];
                const v6968 = DexiePromise.reject(v6967);
                const v6969 = res.lastResult;
                let v6970;
                if (v6965) {
                    v6970 = v6968;
                } else {
                    v6970 = v6969;
                }
                return v6970;
            };
            const v6972 = v6964.then(v6971);
            const v6974 = function (lastResult) {
                if (keyPath) {
                    try {
                        const v6973 = setByKeyPath(obj, keyPath, lastResult);
                        v6973;
                    } catch (_) {
                    }
                }
                return lastResult;
            };
            const v6975 = v6972.then(v6974);
            return v6975;
        };
        v6952.put = v6976;
        const v6977 = Table.prototype;
        const v6991 = function (key) {
            var _this = this;
            const v6982 = function (trans) {
                const v6978 = _this.core;
                const v6979 = [key];
                const v6980 = {
                    trans: trans,
                    type: 'delete',
                    keys: v6979
                };
                const v6981 = v6978.mutate(v6980);
                return v6981;
            };
            const v6983 = this._trans('readwrite', v6982);
            const v6989 = function (res) {
                const v6984 = res.numFailures;
                const v6985 = res.failures;
                const v6986 = v6985[0];
                const v6987 = DexiePromise.reject(v6986);
                let v6988;
                if (v6984) {
                    v6988 = v6987;
                } else {
                    v6988 = undefined;
                }
                return v6988;
            };
            const v6990 = v6983.then(v6989);
            return v6990;
        };
        v6977.delete = v6991;
        const v6992 = Table.prototype;
        const v7005 = function () {
            var _this = this;
            const v6996 = function (trans) {
                const v6993 = _this.core;
                const v6994 = {
                    trans: trans,
                    type: 'deleteRange',
                    range: AnyRange
                };
                const v6995 = v6993.mutate(v6994);
                return v6995;
            };
            const v6997 = this._trans('readwrite', v6996);
            const v7003 = function (res) {
                const v6998 = res.numFailures;
                const v6999 = res.failures;
                const v7000 = v6999[0];
                const v7001 = DexiePromise.reject(v7000);
                let v7002;
                if (v6998) {
                    v7002 = v7001;
                } else {
                    v7002 = undefined;
                }
                return v7002;
            };
            const v7004 = v6997.then(v7003);
            return v7004;
        };
        v6992.clear = v7005;
        const v7006 = Table.prototype;
        const v7019 = function (keys) {
            var _this = this;
            const v7017 = function (trans) {
                const v7007 = _this.core;
                const v7008 = {
                    keys: keys,
                    trans: trans
                };
                const v7009 = v7007.getMany(v7008);
                const v7015 = function (result) {
                    const v7013 = function (res) {
                        const v7010 = _this.hook;
                        const v7011 = v7010.reading;
                        const v7012 = v7011.fire(res);
                        return v7012;
                    };
                    const v7014 = result.map(v7013);
                    return v7014;
                };
                const v7016 = v7009.then(v7015);
                return v7016;
            };
            const v7018 = this._trans('readonly', v7017);
            return v7018;
        };
        v7006.bulkGet = v7019;
        const v7020 = Table.prototype;
        const v7050 = function (objects, keysOrOptions, options) {
            var _this = this;
            let keys;
            const v7021 = Array.isArray(keysOrOptions);
            if (v7021) {
                keys = keysOrOptions;
            } else {
                keys = undefined;
            }
            let v7022;
            if (keys) {
                v7022 = undefined;
            } else {
                v7022 = keysOrOptions;
            }
            options = options || v7022;
            let wantResults;
            const v7023 = options.allKeys;
            if (options) {
                wantResults = v7023;
            } else {
                wantResults = undefined;
            }
            const v7048 = function (trans) {
                const v7024 = _this.schema;
                var _a = v7024.primKey;
                var auto = _a.auto;
                var keyPath = _a.keyPath;
                const v7025 = keyPath && keys;
                if (v7025) {
                    const v7026 = new exceptions.InvalidArgument('bulkAdd(): keys argument invalid on tables with inbound keys');
                    throw v7026;
                }
                const v7027 = keys.length;
                const v7028 = objects.length;
                const v7029 = v7027 !== v7028;
                const v7030 = keys && v7029;
                if (v7030) {
                    const v7031 = new exceptions.InvalidArgument('Arguments objects and keys must have the same length');
                    throw v7031;
                }
                var numObjects = objects.length;
                let objectsToAdd;
                const v7032 = keyPath && auto;
                const v7033 = workaroundForUndefinedPrimKey(keyPath);
                const v7034 = objects.map(v7033);
                if (v7032) {
                    objectsToAdd = v7034;
                } else {
                    objectsToAdd = objects;
                }
                const v7035 = _this.core;
                const v7036 = {
                    trans: trans,
                    type: 'add',
                    keys: keys,
                    values: objectsToAdd,
                    wantResults: wantResults
                };
                const v7037 = v7035.mutate(v7036);
                const v7046 = function (_a) {
                    var numFailures = _a.numFailures;
                    var results = _a.results;
                    var lastResult = _a.lastResult;
                    var failures = _a.failures;
                    let result;
                    if (wantResults) {
                        result = results;
                    } else {
                        result = lastResult;
                    }
                    const v7038 = numFailures === 0;
                    if (v7038) {
                        return result;
                    }
                    const v7039 = _this.name;
                    const v7040 = v7039 + '.bulkAdd(): ';
                    const v7041 = v7040 + numFailures;
                    const v7042 = v7041 + ' of ';
                    const v7043 = v7042 + numObjects;
                    const v7044 = v7043 + ' operations failed';
                    const v7045 = new BulkError(v7044, failures);
                    throw v7045;
                };
                const v7047 = v7037.then(v7046);
                return v7047;
            };
            const v7049 = this._trans('readwrite', v7048);
            return v7049;
        };
        v7020.bulkAdd = v7050;
        const v7051 = Table.prototype;
        const v7081 = function (objects, keysOrOptions, options) {
            var _this = this;
            let keys;
            const v7052 = Array.isArray(keysOrOptions);
            if (v7052) {
                keys = keysOrOptions;
            } else {
                keys = undefined;
            }
            let v7053;
            if (keys) {
                v7053 = undefined;
            } else {
                v7053 = keysOrOptions;
            }
            options = options || v7053;
            let wantResults;
            const v7054 = options.allKeys;
            if (options) {
                wantResults = v7054;
            } else {
                wantResults = undefined;
            }
            const v7079 = function (trans) {
                const v7055 = _this.schema;
                var _a = v7055.primKey;
                var auto = _a.auto;
                var keyPath = _a.keyPath;
                const v7056 = keyPath && keys;
                if (v7056) {
                    const v7057 = new exceptions.InvalidArgument('bulkPut(): keys argument invalid on tables with inbound keys');
                    throw v7057;
                }
                const v7058 = keys.length;
                const v7059 = objects.length;
                const v7060 = v7058 !== v7059;
                const v7061 = keys && v7060;
                if (v7061) {
                    const v7062 = new exceptions.InvalidArgument('Arguments objects and keys must have the same length');
                    throw v7062;
                }
                var numObjects = objects.length;
                let objectsToPut;
                const v7063 = keyPath && auto;
                const v7064 = workaroundForUndefinedPrimKey(keyPath);
                const v7065 = objects.map(v7064);
                if (v7063) {
                    objectsToPut = v7065;
                } else {
                    objectsToPut = objects;
                }
                const v7066 = _this.core;
                const v7067 = {
                    trans: trans,
                    type: 'put',
                    keys: keys,
                    values: objectsToPut,
                    wantResults: wantResults
                };
                const v7068 = v7066.mutate(v7067);
                const v7077 = function (_a) {
                    var numFailures = _a.numFailures;
                    var results = _a.results;
                    var lastResult = _a.lastResult;
                    var failures = _a.failures;
                    let result;
                    if (wantResults) {
                        result = results;
                    } else {
                        result = lastResult;
                    }
                    const v7069 = numFailures === 0;
                    if (v7069) {
                        return result;
                    }
                    const v7070 = _this.name;
                    const v7071 = v7070 + '.bulkPut(): ';
                    const v7072 = v7071 + numFailures;
                    const v7073 = v7072 + ' of ';
                    const v7074 = v7073 + numObjects;
                    const v7075 = v7074 + ' operations failed';
                    const v7076 = new BulkError(v7075, failures);
                    throw v7076;
                };
                const v7078 = v7068.then(v7077);
                return v7078;
            };
            const v7080 = this._trans('readwrite', v7079);
            return v7080;
        };
        v7051.bulkPut = v7081;
        const v7082 = Table.prototype;
        const v7098 = function (keys) {
            var _this = this;
            var numKeys = keys.length;
            const v7086 = function (trans) {
                const v7083 = _this.core;
                const v7084 = {
                    trans: trans,
                    type: 'delete',
                    keys: keys
                };
                const v7085 = v7083.mutate(v7084);
                return v7085;
            };
            const v7087 = this._trans('readwrite', v7086);
            const v7096 = function (_a) {
                var numFailures = _a.numFailures;
                var lastResult = _a.lastResult;
                var failures = _a.failures;
                const v7088 = numFailures === 0;
                if (v7088) {
                    return lastResult;
                }
                const v7089 = _this.name;
                const v7090 = v7089 + '.bulkDelete(): ';
                const v7091 = v7090 + numFailures;
                const v7092 = v7091 + ' of ';
                const v7093 = v7092 + numKeys;
                const v7094 = v7093 + ' operations failed';
                const v7095 = new BulkError(v7094, failures);
                throw v7095;
            };
            const v7097 = v7087.then(v7096);
            return v7097;
        };
        v7082.bulkDelete = v7098;
        return Table;
    };
    var Table = v7099();
    const Events = function (ctx) {
        var evs = {};
        var rv = function (eventName, subscriber) {
            if (subscriber) {
                var i = arguments.length;
                const v7100 = i - 1;
                var args = new Array(v7100);
                let v7101 = --i;
                while (v7101) {
                    const v7102 = i - 1;
                    const v7103 = arguments[i];
                    args[v7102] = v7103;
                    v7101 = --i;
                }
                const v7104 = evs[eventName];
                const v7105 = v7104.subscribe;
                const v7106 = v7105.apply(null, args);
                v7106;
                return ctx;
            } else {
                const v7107 = typeof eventName;
                const v7108 = v7107 === 'string';
                if (v7108) {
                    const v7109 = evs[eventName];
                    return v7109;
                }
            }
        };
        rv.addEventType = add;
        var i = 1;
        var l = arguments.length;
        let v7110 = i < l;
        while (v7110) {
            const v7112 = arguments[i];
            const v7113 = add(v7112);
            v7113;
            const v7111 = ++i;
            v7110 = i < l;
        }
        return rv;
        const add = function (eventName, chainFunction, defaultFunction) {
            const v7114 = typeof eventName;
            const v7115 = v7114 === 'object';
            if (v7115) {
                const v7116 = addConfiguredEvents(eventName);
                return v7116;
            }
            const v7117 = !chainFunction;
            if (v7117) {
                chainFunction = reverseStoppableEventChain;
            }
            const v7118 = !defaultFunction;
            if (v7118) {
                defaultFunction = nop;
            }
            const v7119 = [];
            const v7128 = function (cb) {
                const v7120 = context.subscribers;
                const v7121 = v7120.indexOf(cb);
                const v7122 = -1;
                const v7123 = v7121 === v7122;
                if (v7123) {
                    const v7124 = context.subscribers;
                    const v7125 = v7124.push(cb);
                    v7125;
                    const v7126 = context.fire;
                    const v7127 = chainFunction(v7126, cb);
                    context.fire = v7127;
                }
            };
            const v7135 = function (cb) {
                const v7129 = context.subscribers;
                const v7131 = function (fn) {
                    const v7130 = fn !== cb;
                    return v7130;
                };
                const v7132 = v7129.filter(v7131);
                context.subscribers = v7132;
                const v7133 = context.subscribers;
                const v7134 = v7133.reduce(chainFunction, defaultFunction);
                context.fire = v7134;
            };
            var context = {};
            context.subscribers = v7119;
            context.fire = defaultFunction;
            context.subscribe = v7128;
            context.unsubscribe = v7135;
            rv.eventName = context;
            evs[eventName] = rv[eventName];
            return context;
        };
        const addConfiguredEvents = function (cfg) {
            const v7136 = keys(cfg);
            const v7154 = function (eventName) {
                var args = cfg[eventName];
                const v7137 = isArray(args);
                if (v7137) {
                    const v7138 = cfg[eventName];
                    const v7139 = v7138[0];
                    const v7140 = cfg[eventName];
                    const v7141 = v7140[1];
                    const v7142 = add(eventName, v7139, v7141);
                    v7142;
                } else {
                    const v7143 = args === 'asap';
                    if (v7143) {
                        const v7152 = function fire() {
                            var i = arguments.length;
                            var args = new Array(i);
                            let v7144 = i--;
                            while (v7144) {
                                const v7145 = arguments[i];
                                args[i] = v7145;
                                v7144 = i--;
                            }
                            const v7146 = context.subscribers;
                            const v7150 = function (fn) {
                                const v7148 = function fireEvent() {
                                    const v7147 = fn.apply(null, args);
                                    v7147;
                                };
                                const v7149 = asap$1(v7148);
                                v7149;
                            };
                            const v7151 = v7146.forEach(v7150);
                            v7151;
                        };
                        var context = add(eventName, mirror, v7152);
                    } else {
                        const v7153 = new exceptions.InvalidArgument('Invalid event config');
                        throw v7153;
                    }
                }
            };
            const v7155 = v7136.forEach(v7154);
            v7155;
        };
    };
    const makeClassConstructor = function (prototype, constructor) {
        const v7156 = derive(constructor);
        const v7157 = { prototype: prototype };
        const v7158 = v7156.from(v7157);
        v7158;
        return constructor;
    };
    const createTableConstructor = function (db) {
        const v7159 = Table.prototype;
        const v7172 = function Table(name, tableSchema, trans) {
            this.db = db;
            this._tx = trans;
            this.name = name;
            this.schema = tableSchema;
            const v7160 = db._allTables;
            const v7161 = v7160[name];
            const v7162 = db._allTables;
            const v7163 = v7162[name];
            const v7164 = v7163.hook;
            const v7165 = [
                hookCreatingChain,
                nop
            ];
            const v7166 = [
                pureFunctionChain,
                mirror
            ];
            const v7167 = [
                hookUpdatingChain,
                nop
            ];
            const v7168 = [
                hookDeletingChain,
                nop
            ];
            const v7169 = {
                'creating': v7165,
                'reading': v7166,
                'updating': v7167,
                'deleting': v7168
            };
            const v7170 = Events(null, v7169);
            let v7171;
            if (v7161) {
                v7171 = v7164;
            } else {
                v7171 = v7170;
            }
            this.hook = v7171;
        };
        const v7173 = makeClassConstructor(v7159, v7172);
        return v7173;
    };
    const isPlainKeyRange = function (ctx, ignoreLimitFilter) {
        const v7174 = ctx.filter;
        const v7175 = ctx.algorithm;
        const v7176 = v7174 || v7175;
        const v7177 = ctx.or;
        const v7178 = v7176 || v7177;
        const v7179 = !v7178;
        const v7180 = ctx.justLimit;
        const v7181 = ctx.replayFilter;
        const v7182 = !v7181;
        let v7183;
        if (ignoreLimitFilter) {
            v7183 = v7180;
        } else {
            v7183 = v7182;
        }
        const v7184 = v7179 && v7183;
        return v7184;
    };
    const addFilter = function (ctx, fn) {
        const v7185 = ctx.filter;
        const v7186 = combine(v7185, fn);
        ctx.filter = v7186;
    };
    const addReplayFilter = function (ctx, factory, isLimitFilter) {
        var curr = ctx.replayFilter;
        const v7190 = function () {
            const v7187 = curr();
            const v7188 = factory();
            const v7189 = combine(v7187, v7188);
            return v7189;
        };
        let v7191;
        if (curr) {
            v7191 = v7190;
        } else {
            v7191 = factory;
        }
        ctx.replayFilter = v7191;
        const v7192 = !curr;
        ctx.justLimit = isLimitFilter && v7192;
    };
    const addMatchFilter = function (ctx, fn) {
        const v7193 = ctx.isMatch;
        const v7194 = combine(v7193, fn);
        ctx.isMatch = v7194;
    };
    const getIndexOrStore = function (ctx, coreSchema) {
        const v7195 = ctx.isPrimKey;
        if (v7195) {
            const v7196 = coreSchema.primaryKey;
            return v7196;
        }
        const v7197 = ctx.index;
        var index = coreSchema.getIndexByKeyPath(v7197);
        const v7198 = !index;
        if (v7198) {
            const v7199 = ctx.index;
            const v7200 = 'KeyPath ' + v7199;
            const v7201 = v7200 + ' on object store ';
            const v7202 = coreSchema.name;
            const v7203 = v7201 + v7202;
            const v7204 = v7203 + ' is not indexed';
            const v7205 = new exceptions.Schema(v7204);
            throw v7205;
        }
        return index;
    };
    const openCursor = function (ctx, coreTable, trans) {
        const v7206 = coreTable.schema;
        var index = getIndexOrStore(ctx, v7206);
        const v7207 = ctx.keysOnly;
        const v7208 = !v7207;
        const v7209 = ctx.dir;
        const v7210 = v7209 === 'prev';
        const v7211 = ctx.unique;
        const v7212 = !v7211;
        const v7213 = !v7212;
        const v7214 = ctx.range;
        const v7215 = {};
        v7215.index = index;
        v7215.range = v7214;
        const v7216 = {
            trans: trans,
            values: v7208,
            reverse: v7210,
            unique: v7213,
            query: v7215
        };
        const v7217 = coreTable.openCursor(v7216);
        return v7217;
    };
    const iter = function (ctx, fn, coreTrans, coreTable) {
        let filter;
        const v7218 = ctx.replayFilter;
        const v7219 = ctx.filter;
        const v7220 = ctx.replayFilter();
        const v7221 = combine(v7219, v7220);
        const v7222 = ctx.filter;
        if (v7218) {
            filter = v7221;
        } else {
            filter = v7222;
        }
        const v7223 = ctx.or;
        const v7224 = !v7223;
        if (v7224) {
            const v7225 = openCursor(ctx, coreTable, coreTrans);
            const v7226 = ctx.algorithm;
            const v7227 = combine(v7226, filter);
            const v7228 = ctx.keysOnly;
            const v7229 = !v7228;
            const v7230 = ctx.valueMapper;
            const v7231 = v7229 && v7230;
            const v7232 = iterate(v7225, v7227, fn, v7231);
            return v7232;
        } else {
            var set_1 = {};
            var union = function (item, cursor, advance) {
                const v7233 = !filter;
                const v7235 = function (result) {
                    const v7234 = cursor.stop(result);
                    return v7234;
                };
                const v7237 = function (err) {
                    const v7236 = cursor.fail(err);
                    return v7236;
                };
                const v7238 = filter(cursor, advance, v7235, v7237);
                const v7239 = v7233 || v7238;
                if (v7239) {
                    var primaryKey = cursor.primaryKey;
                    var key = '' + primaryKey;
                    const v7240 = key === '[object ArrayBuffer]';
                    if (v7240) {
                        const v7241 = new Uint8Array(primaryKey);
                        key = '' + v7241;
                    }
                    const v7242 = hasOwn(set_1, key);
                    const v7243 = !v7242;
                    if (v7243) {
                        set_1[key] = true;
                        const v7244 = fn(item, cursor, advance);
                        v7244;
                    }
                }
            };
            const v7245 = ctx.or;
            const v7246 = v7245._iterate(union, coreTrans);
            const v7247 = openCursor(ctx, coreTable, coreTrans);
            const v7248 = ctx.algorithm;
            const v7249 = ctx.keysOnly;
            const v7250 = !v7249;
            const v7251 = ctx.valueMapper;
            const v7252 = v7250 && v7251;
            const v7253 = iterate(v7247, v7248, union, v7252);
            const v7254 = [
                v7246,
                v7253
            ];
            const v7255 = Promise.all(v7254);
            return v7255;
        }
    };
    const iterate = function (cursorPromise, filter, fn, valueMapper) {
        let mappedFn;
        const v7258 = function (x, c, a) {
            const v7256 = valueMapper(x);
            const v7257 = fn(v7256, c, a);
            return v7257;
        };
        if (valueMapper) {
            mappedFn = v7258;
        } else {
            mappedFn = fn;
        }
        var wrappedFn = wrap(mappedFn);
        const v7274 = function (cursor) {
            if (cursor) {
                const v7272 = function () {
                    var c = function () {
                        const v7259 = cursor.continue();
                        return v7259;
                    };
                    const v7260 = !filter;
                    const v7261 = function (advancer) {
                        return c = advancer;
                    };
                    const v7263 = function (val) {
                        const v7262 = cursor.stop(val);
                        v7262;
                        c = nop;
                    };
                    const v7265 = function (e) {
                        const v7264 = cursor.fail(e);
                        v7264;
                        c = nop;
                    };
                    const v7266 = filter(cursor, v7261, v7263, v7265);
                    const v7267 = v7260 || v7266;
                    if (v7267) {
                        const v7268 = cursor.value;
                        const v7269 = function (advancer) {
                            return c = advancer;
                        };
                        const v7270 = wrappedFn(v7268, cursor, v7269);
                        v7270;
                    }
                    const v7271 = c();
                    v7271;
                };
                const v7273 = cursor.start(v7272);
                return v7273;
            }
        };
        const v7275 = cursorPromise.then(v7274);
        return v7275;
    };
    const cmp = function (a, b) {
        try {
            var ta = type(a);
            var tb = type(b);
            const v7276 = ta !== tb;
            if (v7276) {
                const v7277 = ta === 'Array';
                if (v7277) {
                    return 1;
                }
                const v7278 = tb === 'Array';
                if (v7278) {
                    const v7279 = -1;
                    return v7279;
                }
                const v7280 = ta === 'binary';
                if (v7280) {
                    return 1;
                }
                const v7281 = tb === 'binary';
                if (v7281) {
                    const v7282 = -1;
                    return v7282;
                }
                const v7283 = ta === 'string';
                if (v7283) {
                    return 1;
                }
                const v7284 = tb === 'string';
                if (v7284) {
                    const v7285 = -1;
                    return v7285;
                }
                const v7286 = ta === 'Date';
                if (v7286) {
                    return 1;
                }
                const v7287 = tb !== 'Date';
                if (v7287) {
                    return NaN;
                }
                const v7288 = -1;
                return v7288;
            }
            switch (ta) {
            case 'number':
            case 'Date':
            case 'string':
                const v7289 = a > b;
                const v7290 = a < b;
                const v7291 = -1;
                let v7292;
                if (v7290) {
                    v7292 = v7291;
                } else {
                    v7292 = 0;
                }
                let v7293;
                if (v7289) {
                    v7293 = 1;
                } else {
                    v7293 = v7292;
                }
                return v7293;
            case 'binary': {
                    const v7294 = getUint8Array(a);
                    const v7295 = getUint8Array(b);
                    const v7296 = compareUint8Arrays(v7294, v7295);
                    return v7296;
                }
            case 'Array':
                const v7297 = compareArrays(a, b);
                return v7297;
            }
        } catch (_a) {
        }
        return NaN;
    };
    const compareArrays = function (a, b) {
        var al = a.length;
        var bl = b.length;
        let l;
        const v7298 = al < bl;
        if (v7298) {
            l = al;
        } else {
            l = bl;
        }
        var i = 0;
        let v7299 = i < l;
        while (v7299) {
            const v7301 = a[i];
            const v7302 = b[i];
            var res = cmp(v7301, v7302);
            const v7303 = res !== 0;
            if (v7303) {
                return res;
            }
            const v7300 = ++i;
            v7299 = i < l;
        }
        const v7304 = al === bl;
        const v7305 = al < bl;
        const v7306 = -1;
        let v7307;
        if (v7305) {
            v7307 = v7306;
        } else {
            v7307 = 1;
        }
        let v7308;
        if (v7304) {
            v7308 = 0;
        } else {
            v7308 = v7307;
        }
        return v7308;
    };
    const compareUint8Arrays = function (a, b) {
        var al = a.length;
        var bl = b.length;
        let l;
        const v7309 = al < bl;
        if (v7309) {
            l = al;
        } else {
            l = bl;
        }
        var i = 0;
        let v7310 = i < l;
        while (v7310) {
            const v7312 = a[i];
            const v7313 = b[i];
            const v7314 = v7312 !== v7313;
            if (v7314) {
                const v7315 = a[i];
                const v7316 = b[i];
                const v7317 = v7315 < v7316;
                const v7318 = -1;
                let v7319;
                if (v7317) {
                    v7319 = v7318;
                } else {
                    v7319 = 1;
                }
                return v7319;
            }
            const v7311 = ++i;
            v7310 = i < l;
        }
        const v7320 = al === bl;
        const v7321 = al < bl;
        const v7322 = -1;
        let v7323;
        if (v7321) {
            v7323 = v7322;
        } else {
            v7323 = 1;
        }
        let v7324;
        if (v7320) {
            v7324 = 0;
        } else {
            v7324 = v7323;
        }
        return v7324;
    };
    const type = function (x) {
        const v7325 = typeof x;
        var t = v7325;
        const v7326 = t !== 'object';
        if (v7326) {
            return t;
        }
        const v7327 = ArrayBuffer.isView(x);
        if (v7327) {
            return 'binary';
        }
        var tsTag = toStringTag(x);
        const v7328 = tsTag === 'ArrayBuffer';
        let v7329;
        if (v7328) {
            v7329 = 'binary';
        } else {
            v7329 = tsTag;
        }
        return v7329;
    };
    const getUint8Array = function (a) {
        const v7330 = a instanceof Uint8Array;
        if (v7330) {
            return a;
        }
        const v7331 = ArrayBuffer.isView(a);
        if (v7331) {
            const v7332 = a.buffer;
            const v7333 = a.byteOffset;
            const v7334 = a.byteLength;
            const v7335 = new Uint8Array(v7332, v7333, v7334);
            return v7335;
        }
        const v7336 = new Uint8Array(a);
        return v7336;
    };
    const v7815 = function () {
        const Collection = function () {
        };
        const v7337 = Collection.prototype;
        const v7347 = function (fn, cb) {
            var ctx = this._ctx;
            const v7338 = ctx.error;
            const v7339 = ctx.table;
            const v7340 = ctx.error;
            const v7341 = rejection.bind(null, v7340);
            const v7342 = v7339._trans(null, v7341);
            const v7343 = ctx.table;
            const v7344 = v7343._trans('readonly', fn);
            const v7345 = v7344.then(cb);
            let v7346;
            if (v7338) {
                v7346 = v7342;
            } else {
                v7346 = v7345;
            }
            return v7346;
        };
        v7337._read = v7347;
        const v7348 = Collection.prototype;
        const v7357 = function (fn) {
            var ctx = this._ctx;
            const v7349 = ctx.error;
            const v7350 = ctx.table;
            const v7351 = ctx.error;
            const v7352 = rejection.bind(null, v7351);
            const v7353 = v7350._trans(null, v7352);
            const v7354 = ctx.table;
            const v7355 = v7354._trans('readwrite', fn, 'locked');
            let v7356;
            if (v7349) {
                v7356 = v7353;
            } else {
                v7356 = v7355;
            }
            return v7356;
        };
        v7348._write = v7357;
        const v7358 = Collection.prototype;
        const v7361 = function (fn) {
            var ctx = this._ctx;
            const v7359 = ctx.algorithm;
            const v7360 = combine(v7359, fn);
            ctx.algorithm = v7360;
        };
        v7358._addAlgorithm = v7361;
        const v7362 = Collection.prototype;
        const v7368 = function (fn, coreTrans) {
            const v7363 = this._ctx;
            const v7364 = this._ctx;
            const v7365 = v7364.table;
            const v7366 = v7365.core;
            const v7367 = iter(v7363, fn, coreTrans, v7366);
            return v7367;
        };
        v7362._iterate = v7368;
        const v7369 = Collection.prototype;
        const v7374 = function (props) {
            const v7370 = this.constructor;
            const v7371 = v7370.prototype;
            var rv = Object.create(v7371);
            const v7372 = this._ctx;
            var ctx = Object.create(v7372);
            if (props) {
                const v7373 = extend(ctx, props);
                v7373;
            }
            rv._ctx = ctx;
            return rv;
        };
        v7369.clone = v7374;
        const v7375 = Collection.prototype;
        const v7377 = function () {
            const v7376 = this._ctx;
            v7376.valueMapper = null;
            return this;
        };
        v7375.raw = v7377;
        const v7378 = Collection.prototype;
        const v7384 = function (fn) {
            var ctx = this._ctx;
            const v7382 = function (trans) {
                const v7379 = ctx.table;
                const v7380 = v7379.core;
                const v7381 = iter(ctx, fn, trans, v7380);
                return v7381;
            };
            const v7383 = this._read(v7382);
            return v7383;
        };
        v7378.each = v7384;
        const v7385 = Collection.prototype;
        const v7406 = function (cb) {
            var _this = this;
            const v7403 = function (trans) {
                var ctx = _this._ctx;
                const v7386 = ctx.table;
                var coreTable = v7386.core;
                const v7387 = isPlainKeyRange(ctx, true);
                if (v7387) {
                    const v7388 = coreTable.schema;
                    const v7389 = getIndexOrStore(ctx, v7388);
                    const v7390 = ctx.range;
                    const v7391 = {};
                    v7391.index = v7389;
                    v7391.range = v7390;
                    const v7392 = {
                        trans: trans,
                        query: v7391
                    };
                    const v7393 = coreTable.count(v7392);
                    const v7396 = function (count) {
                        const v7394 = ctx.limit;
                        const v7395 = Math.min(count, v7394);
                        return v7395;
                    };
                    const v7397 = v7393.then(v7396);
                    return v7397;
                } else {
                    var count = 0;
                    const v7399 = function () {
                        const v7398 = ++count;
                        v7398;
                        return false;
                    };
                    const v7400 = iter(ctx, v7399, trans, coreTable);
                    const v7401 = function () {
                        return count;
                    };
                    const v7402 = v7400.then(v7401);
                    return v7402;
                }
            };
            const v7404 = this._read(v7403);
            const v7405 = v7404.then(cb);
            return v7405;
        };
        v7385.count = v7406;
        const v7407 = Collection.prototype;
        const v7428 = function (keyPath, cb) {
            const v7408 = keyPath.split('.');
            var parts = v7408.reverse();
            var lastPart = parts[0];
            const v7409 = parts.length;
            var lastIndex = v7409 - 1;
            const getval = function (obj, i) {
                if (i) {
                    const v7410 = parts[i];
                    const v7411 = obj[v7410];
                    const v7412 = i - 1;
                    const v7413 = getval(v7411, v7412);
                    return v7413;
                }
                const v7414 = obj[lastPart];
                return v7414;
            };
            let order;
            const v7415 = this._ctx;
            const v7416 = v7415.dir;
            const v7417 = v7416 === 'next';
            const v7418 = -1;
            if (v7417) {
                order = 1;
            } else {
                order = v7418;
            }
            const sorter = function (a, b) {
                var aVal = getval(a, lastIndex);
                var bVal = getval(b, lastIndex);
                const v7419 = aVal < bVal;
                const v7420 = -order;
                const v7421 = aVal > bVal;
                let v7422;
                if (v7421) {
                    v7422 = order;
                } else {
                    v7422 = 0;
                }
                let v7423;
                if (v7419) {
                    v7423 = v7420;
                } else {
                    v7423 = v7422;
                }
                return v7423;
            };
            const v7425 = function (a) {
                const v7424 = a.sort(sorter);
                return v7424;
            };
            const v7426 = this.toArray(v7425);
            const v7427 = v7426.then(cb);
            return v7427;
        };
        v7407.sortBy = v7428;
        const v7429 = Collection.prototype;
        const v7460 = function (cb) {
            var _this = this;
            const v7458 = function (trans) {
                var ctx = _this._ctx;
                const v7430 = ctx.dir;
                const v7431 = v7430 === 'next';
                const v7432 = isPlainKeyRange(ctx, true);
                const v7433 = v7431 && v7432;
                const v7434 = ctx.limit;
                const v7435 = v7434 > 0;
                const v7436 = v7433 && v7435;
                if (v7436) {
                    var valueMapper_1 = ctx.valueMapper;
                    const v7437 = ctx.table;
                    const v7438 = v7437.core;
                    const v7439 = v7438.schema;
                    var index = getIndexOrStore(ctx, v7439);
                    const v7440 = ctx.table;
                    const v7441 = v7440.core;
                    const v7442 = ctx.limit;
                    const v7443 = ctx.range;
                    const v7444 = {};
                    v7444.index = index;
                    v7444.range = v7443;
                    const v7445 = {
                        trans: trans,
                        limit: v7442,
                        values: true,
                        query: v7444
                    };
                    const v7446 = v7441.query(v7445);
                    const v7449 = function (_a) {
                        var result = _a.result;
                        const v7447 = result.map(valueMapper_1);
                        let v7448;
                        if (valueMapper_1) {
                            v7448 = v7447;
                        } else {
                            v7448 = result;
                        }
                        return v7448;
                    };
                    const v7450 = v7446.then(v7449);
                    return v7450;
                } else {
                    var a_1 = [];
                    const v7452 = function (item) {
                        const v7451 = a_1.push(item);
                        return v7451;
                    };
                    const v7453 = ctx.table;
                    const v7454 = v7453.core;
                    const v7455 = iter(ctx, v7452, trans, v7454);
                    const v7456 = function () {
                        return a_1;
                    };
                    const v7457 = v7455.then(v7456);
                    return v7457;
                }
            };
            const v7459 = this._read(v7458, cb);
            return v7459;
        };
        v7429.toArray = v7460;
        const v7461 = Collection.prototype;
        const v7478 = function (offset) {
            var ctx = this._ctx;
            const v7462 = offset <= 0;
            if (v7462) {
                return this;
            }
            ctx.offset += offset;
            const v7463 = isPlainKeyRange(ctx);
            if (v7463) {
                const v7471 = function () {
                    var offsetLeft = offset;
                    const v7470 = function (cursor, advance) {
                        const v7464 = offsetLeft === 0;
                        if (v7464) {
                            return true;
                        }
                        const v7465 = offsetLeft === 1;
                        if (v7465) {
                            const v7466 = --offsetLeft;
                            v7466;
                            return false;
                        }
                        const v7468 = function () {
                            const v7467 = cursor.advance(offsetLeft);
                            v7467;
                            offsetLeft = 0;
                        };
                        const v7469 = advance(v7468);
                        v7469;
                        return false;
                    };
                    return v7470;
                };
                const v7472 = addReplayFilter(ctx, v7471);
                v7472;
            } else {
                const v7476 = function () {
                    var offsetLeft = offset;
                    const v7475 = function () {
                        const v7473 = --offsetLeft;
                        const v7474 = v7473 < 0;
                        return v7474;
                    };
                    return v7475;
                };
                const v7477 = addReplayFilter(ctx, v7476);
                v7477;
            }
            return this;
        };
        v7461.offset = v7478;
        const v7479 = Collection.prototype;
        const v7492 = function (numRows) {
            const v7481 = this._ctx;
            const v7482 = v7481.limit;
            const v7483 = Math.min(v7482, numRows);
            v7480.limit = v7483;
            const v7484 = this._ctx;
            const v7490 = function () {
                var rowsLeft = numRows;
                const v7489 = function (cursor, advance, resolve) {
                    const v7485 = --rowsLeft;
                    const v7486 = v7485 <= 0;
                    if (v7486) {
                        const v7487 = advance(resolve);
                        v7487;
                    }
                    const v7488 = rowsLeft >= 0;
                    return v7488;
                };
                return v7489;
            };
            const v7491 = addReplayFilter(v7484, v7490, true);
            v7491;
            return this;
        };
        v7479.limit = v7492;
        const v7493 = Collection.prototype;
        const v7500 = function (filterFunction, bIncludeStopEntry) {
            const v7494 = this._ctx;
            const v7498 = function (cursor, advance, resolve) {
                const v7495 = cursor.value;
                const v7496 = filterFunction(v7495);
                if (v7496) {
                    const v7497 = advance(resolve);
                    v7497;
                    return bIncludeStopEntry;
                } else {
                    return true;
                }
            };
            const v7499 = addFilter(v7494, v7498);
            v7499;
            return this;
        };
        v7493.until = v7500;
        const v7501 = Collection.prototype;
        const v7507 = function (cb) {
            const v7502 = this.limit(1);
            const v7504 = function (a) {
                const v7503 = a[0];
                return v7503;
            };
            const v7505 = v7502.toArray(v7504);
            const v7506 = v7505.then(cb);
            return v7506;
        };
        v7501.first = v7507;
        const v7508 = Collection.prototype;
        const v7511 = function (cb) {
            const v7509 = this.reverse();
            const v7510 = v7509.first(cb);
            return v7510;
        };
        v7508.last = v7511;
        const v7512 = Collection.prototype;
        const v7520 = function (filterFunction) {
            const v7513 = this._ctx;
            const v7516 = function (cursor) {
                const v7514 = cursor.value;
                const v7515 = filterFunction(v7514);
                return v7515;
            };
            const v7517 = addFilter(v7513, v7516);
            v7517;
            const v7518 = this._ctx;
            const v7519 = addMatchFilter(v7518, filterFunction);
            v7519;
            return this;
        };
        v7512.filter = v7520;
        const v7521 = Collection.prototype;
        const v7523 = function (filter) {
            const v7522 = this.filter(filter);
            return v7522;
        };
        v7521.and = v7523;
        const v7524 = Collection.prototype;
        const v7529 = function (indexName) {
            const v7525 = this.db;
            const v7526 = this._ctx;
            const v7527 = v7526.table;
            const v7528 = new v7525.WhereClause(v7527, indexName, this);
            return v7528;
        };
        v7524.or = v7529;
        const v7530 = Collection.prototype;
        const v7540 = function () {
            const v7531 = this._ctx;
            const v7532 = this._ctx;
            const v7533 = v7532.dir;
            const v7534 = v7533 === 'prev';
            let v7535;
            if (v7534) {
                v7535 = 'next';
            } else {
                v7535 = 'prev';
            }
            v7531.dir = v7535;
            const v7536 = this._ondirectionchange;
            if (v7536) {
                const v7537 = this._ctx;
                const v7538 = v7537.dir;
                const v7539 = this._ondirectionchange(v7538);
                v7539;
            }
            return this;
        };
        v7530.reverse = v7540;
        const v7541 = Collection.prototype;
        const v7543 = function () {
            const v7542 = this.reverse();
            return v7542;
        };
        v7541.desc = v7543;
        const v7544 = Collection.prototype;
        const v7551 = function (cb) {
            var ctx = this._ctx;
            const v7545 = ctx.isMatch;
            const v7546 = !v7545;
            ctx.keysOnly = v7546;
            const v7549 = function (val, cursor) {
                const v7547 = cursor.key;
                const v7548 = cb(v7547, cursor);
                v7548;
            };
            const v7550 = this.each(v7549);
            return v7550;
        };
        v7544.eachKey = v7551;
        const v7552 = Collection.prototype;
        const v7555 = function (cb) {
            const v7553 = this._ctx;
            v7553.unique = 'unique';
            const v7554 = this.eachKey(cb);
            return v7554;
        };
        v7552.eachUniqueKey = v7555;
        const v7556 = Collection.prototype;
        const v7563 = function (cb) {
            var ctx = this._ctx;
            const v7557 = ctx.isMatch;
            const v7558 = !v7557;
            ctx.keysOnly = v7558;
            const v7561 = function (val, cursor) {
                const v7559 = cursor.primaryKey;
                const v7560 = cb(v7559, cursor);
                v7560;
            };
            const v7562 = this.each(v7561);
            return v7562;
        };
        v7556.eachPrimaryKey = v7563;
        const v7564 = Collection.prototype;
        const v7574 = function (cb) {
            var ctx = this._ctx;
            const v7565 = ctx.isMatch;
            const v7566 = !v7565;
            ctx.keysOnly = v7566;
            var a = [];
            const v7569 = function (item, cursor) {
                const v7567 = cursor.key;
                const v7568 = a.push(v7567);
                v7568;
            };
            const v7570 = this.each(v7569);
            const v7571 = function () {
                return a;
            };
            const v7572 = v7570.then(v7571);
            const v7573 = v7572.then(cb);
            return v7573;
        };
        v7564.keys = v7574;
        const v7575 = Collection.prototype;
        const v7607 = function (cb) {
            var ctx = this._ctx;
            const v7576 = ctx.dir;
            const v7577 = v7576 === 'next';
            const v7578 = isPlainKeyRange(ctx, true);
            const v7579 = v7577 && v7578;
            const v7580 = ctx.limit;
            const v7581 = v7580 > 0;
            const v7582 = v7579 && v7581;
            if (v7582) {
                const v7593 = function (trans) {
                    const v7583 = ctx.table;
                    const v7584 = v7583.core;
                    const v7585 = v7584.schema;
                    var index = getIndexOrStore(ctx, v7585);
                    const v7586 = ctx.table;
                    const v7587 = v7586.core;
                    const v7588 = ctx.limit;
                    const v7589 = ctx.range;
                    const v7590 = {};
                    v7590.index = index;
                    v7590.range = v7589;
                    const v7591 = {
                        trans: trans,
                        values: false,
                        limit: v7588,
                        query: v7590
                    };
                    const v7592 = v7587.query(v7591);
                    return v7592;
                };
                const v7594 = this._read(v7593);
                const v7595 = function (_a) {
                    var result = _a.result;
                    return result;
                };
                const v7596 = v7594.then(v7595);
                const v7597 = v7596.then(cb);
                return v7597;
            }
            const v7598 = ctx.isMatch;
            const v7599 = !v7598;
            ctx.keysOnly = v7599;
            var a = [];
            const v7602 = function (item, cursor) {
                const v7600 = cursor.primaryKey;
                const v7601 = a.push(v7600);
                v7601;
            };
            const v7603 = this.each(v7602);
            const v7604 = function () {
                return a;
            };
            const v7605 = v7603.then(v7604);
            const v7606 = v7605.then(cb);
            return v7606;
        };
        v7575.primaryKeys = v7607;
        const v7608 = Collection.prototype;
        const v7611 = function (cb) {
            const v7609 = this._ctx;
            v7609.unique = 'unique';
            const v7610 = this.keys(cb);
            return v7610;
        };
        v7608.uniqueKeys = v7611;
        const v7612 = Collection.prototype;
        const v7618 = function (cb) {
            const v7613 = this.limit(1);
            const v7615 = function (a) {
                const v7614 = a[0];
                return v7614;
            };
            const v7616 = v7613.keys(v7615);
            const v7617 = v7616.then(cb);
            return v7617;
        };
        v7612.firstKey = v7618;
        const v7619 = Collection.prototype;
        const v7622 = function (cb) {
            const v7620 = this.reverse();
            const v7621 = v7620.firstKey(cb);
            return v7621;
        };
        v7619.lastKey = v7622;
        const v7623 = Collection.prototype;
        const v7639 = function () {
            var ctx = this._ctx;
            const v7624 = ctx.index;
            const v7625 = ctx.table;
            const v7626 = v7625.schema;
            const v7627 = v7626.idxByName;
            const v7628 = ctx.index;
            const v7629 = v7627[v7628];
            var idx = v7624 && v7629;
            const v7630 = !idx;
            const v7631 = idx.multi;
            const v7632 = !v7631;
            const v7633 = v7630 || v7632;
            if (v7633) {
                return this;
            }
            var set = {};
            const v7634 = this._ctx;
            const v7637 = function (cursor) {
                const v7635 = cursor.primaryKey;
                var strKey = v7635.toString();
                var found = hasOwn(set, strKey);
                set[strKey] = true;
                const v7636 = !found;
                return v7636;
            };
            const v7638 = addFilter(v7634, v7637);
            v7638;
            return this;
        };
        v7623.distinct = v7639;
        const v7640 = Collection.prototype;
        const v7776 = function (changes) {
            var _this = this;
            var ctx = this._ctx;
            const v7774 = function (trans) {
                var modifyer;
                const v7641 = typeof changes;
                const v7642 = v7641 === 'function';
                if (v7642) {
                    modifyer = changes;
                } else {
                    var keyPaths = keys(changes);
                    var numKeys = keyPaths.length;
                    const v7648 = function (item) {
                        var anythingModified = false;
                        var i = 0;
                        let v7643 = i < numKeys;
                        while (v7643) {
                            var keyPath = keyPaths[i];
                            var val = changes[keyPath];
                            const v7645 = getByKeyPath(item, keyPath);
                            const v7646 = v7645 !== val;
                            if (v7646) {
                                const v7647 = setByKeyPath(item, keyPath, val);
                                v7647;
                                anythingModified = true;
                            }
                            const v7644 = ++i;
                            v7643 = i < numKeys;
                        }
                        return anythingModified;
                    };
                    modifyer = v7648;
                }
                const v7649 = ctx.table;
                var coreTable = v7649.core;
                const v7650 = coreTable.schema;
                var _a = v7650.primaryKey;
                var outbound = _a.outbound;
                var extractKey = _a.extractKey;
                const v7651 = _this.db;
                const v7652 = v7651._options;
                const v7653 = v7652.modifyChunkSize;
                var limit = v7653 || 200;
                var totalFailures = [];
                var successCount = 0;
                var failedKeys = [];
                var applyMutateResult = function (expectedCount, res) {
                    var failures = res.failures;
                    var numFailures = res.numFailures;
                    successCount += expectedCount - numFailures;
                    var _i = 0;
                    var _a = keys(failures);
                    const v7654 = _a.length;
                    let v7655 = _i < v7654;
                    while (v7655) {
                        var pos = _a[_i];
                        const v7657 = failures[pos];
                        const v7658 = totalFailures.push(v7657);
                        v7658;
                        const v7656 = _i++;
                        v7655 = _i < v7654;
                    }
                };
                const v7659 = _this.clone();
                const v7660 = v7659.primaryKeys();
                const v7772 = function (keys) {
                    var nextChunk = function (offset) {
                        const v7661 = keys.length;
                        const v7662 = v7661 - offset;
                        var count = Math.min(limit, v7662);
                        const v7663 = offset + count;
                        const v7664 = keys.slice(offset, v7663);
                        const v7665 = {
                            trans: trans,
                            keys: v7664,
                            cache: 'immutable'
                        };
                        const v7666 = coreTable.getMany(v7665);
                        const v7763 = function (values) {
                            var addValues = [];
                            var putValues = [];
                            let putKeys;
                            const v7667 = [];
                            if (outbound) {
                                putKeys = v7667;
                            } else {
                                putKeys = null;
                            }
                            var deleteKeys = [];
                            var i = 0;
                            let v7668 = i < count;
                            while (v7668) {
                                var origValue = values[i];
                                const v7670 = deepClone(origValue);
                                const v7671 = offset + i;
                                const v7672 = keys[v7671];
                                var ctx_1 = {};
                                ctx_1.value = v7670;
                                ctx_1.primKey = v7672;
                                const v7673 = ctx_1.value;
                                const v7674 = modifyer.call(ctx_1, v7673, ctx_1);
                                const v7675 = v7674 !== false;
                                if (v7675) {
                                    const v7676 = ctx_1.value;
                                    const v7677 = v7676 == null;
                                    if (v7677) {
                                        const v7678 = offset + i;
                                        const v7679 = keys[v7678];
                                        const v7680 = deleteKeys.push(v7679);
                                        v7680;
                                    } else {
                                        const v7681 = !outbound;
                                        const v7682 = extractKey(origValue);
                                        const v7683 = ctx_1.value;
                                        const v7684 = extractKey(v7683);
                                        const v7685 = cmp(v7682, v7684);
                                        const v7686 = v7685 !== 0;
                                        const v7687 = v7681 && v7686;
                                        if (v7687) {
                                            const v7688 = offset + i;
                                            const v7689 = keys[v7688];
                                            const v7690 = deleteKeys.push(v7689);
                                            v7690;
                                            const v7691 = ctx_1.value;
                                            const v7692 = addValues.push(v7691);
                                            v7692;
                                        } else {
                                            const v7693 = ctx_1.value;
                                            const v7694 = putValues.push(v7693);
                                            v7694;
                                            if (outbound) {
                                                const v7695 = offset + i;
                                                const v7696 = keys[v7695];
                                                const v7697 = putKeys.push(v7696);
                                                v7697;
                                            }
                                        }
                                    }
                                }
                                const v7669 = ++i;
                                v7668 = i < count;
                            }
                            const v7698 = isPlainKeyRange(ctx);
                            const v7699 = ctx.limit;
                            const v7700 = v7699 === Infinity;
                            const v7701 = v7698 && v7700;
                            const v7702 = typeof changes;
                            const v7703 = v7702 !== 'function';
                            const v7704 = changes === deleteCallback;
                            const v7705 = v7703 || v7704;
                            const v7706 = v7701 && v7705;
                            const v7707 = ctx.index;
                            const v7708 = ctx.range;
                            const v7709 = {
                                index: v7707,
                                range: v7708
                            };
                            var criteria = v7706 && v7709;
                            const v7710 = addValues.length;
                            const v7711 = v7710 > 0;
                            const v7712 = {
                                trans: trans,
                                type: 'add',
                                values: addValues
                            };
                            const v7713 = coreTable.mutate(v7712);
                            const v7719 = function (res) {
                                let pos;
                                const v7714 = res.failures;
                                for (pos in v7714) {
                                    const v7715 = parseInt(pos);
                                    const v7716 = deleteKeys.splice(v7715, 1);
                                    v7716;
                                }
                                const v7717 = addValues.length;
                                const v7718 = applyMutateResult(v7717, res);
                                v7718;
                            };
                            const v7720 = v7713.then(v7719);
                            const v7721 = v7711 && v7720;
                            const v7722 = Promise.resolve(v7721);
                            const v7739 = function () {
                                const v7723 = putValues.length;
                                const v7724 = v7723 > 0;
                                const v7725 = typeof changes;
                                const v7726 = v7725 === 'object';
                                const v7727 = criteria && v7726;
                                const v7728 = v7724 || v7727;
                                const v7729 = typeof changes;
                                const v7730 = v7729 !== 'function';
                                const v7731 = v7730 && changes;
                                const v7732 = {
                                    trans: trans,
                                    type: 'put',
                                    keys: putKeys,
                                    values: putValues,
                                    criteria: criteria,
                                    changeSpec: v7731
                                };
                                const v7733 = coreTable.mutate(v7732);
                                const v7736 = function (res) {
                                    const v7734 = putValues.length;
                                    const v7735 = applyMutateResult(v7734, res);
                                    return v7735;
                                };
                                const v7737 = v7733.then(v7736);
                                const v7738 = v7728 && v7737;
                                return v7738;
                            };
                            const v7740 = v7722.then(v7739);
                            const v7753 = function () {
                                const v7741 = deleteKeys.length;
                                const v7742 = v7741 > 0;
                                const v7743 = changes === deleteCallback;
                                const v7744 = criteria && v7743;
                                const v7745 = v7742 || v7744;
                                const v7746 = {
                                    trans: trans,
                                    type: 'delete',
                                    keys: deleteKeys,
                                    criteria: criteria
                                };
                                const v7747 = coreTable.mutate(v7746);
                                const v7750 = function (res) {
                                    const v7748 = deleteKeys.length;
                                    const v7749 = applyMutateResult(v7748, res);
                                    return v7749;
                                };
                                const v7751 = v7747.then(v7750);
                                const v7752 = v7745 && v7751;
                                return v7752;
                            };
                            const v7754 = v7740.then(v7753);
                            const v7761 = function () {
                                const v7755 = keys.length;
                                const v7756 = offset + count;
                                const v7757 = v7755 > v7756;
                                const v7758 = offset + limit;
                                const v7759 = nextChunk(v7758);
                                const v7760 = v7757 && v7759;
                                return v7760;
                            };
                            const v7762 = v7754.then(v7761);
                            return v7762;
                        };
                        const v7764 = v7666.then(v7763);
                        return v7764;
                    };
                    const v7765 = nextChunk(0);
                    const v7770 = function () {
                        const v7766 = totalFailures.length;
                        const v7767 = v7766 > 0;
                        if (v7767) {
                            const v7768 = new ModifyError('Error modifying one or more objects', totalFailures, successCount, failedKeys);
                            throw v7768;
                        }
                        const v7769 = keys.length;
                        return v7769;
                    };
                    const v7771 = v7765.then(v7770);
                    return v7771;
                };
                const v7773 = v7660.then(v7772);
                return v7773;
            };
            const v7775 = this._write(v7774);
            return v7775;
        };
        v7640.modify = v7776;
        const v7777 = Collection.prototype;
        const v7814 = function () {
            var ctx = this._ctx;
            var range = ctx.range;
            const v7778 = isPlainKeyRange(ctx);
            const v7779 = ctx.isPrimKey;
            const v7780 = !hangsOnDeleteLargeKeyRange;
            const v7781 = v7779 && v7780;
            const v7782 = range.type;
            const v7783 = v7782 === 3;
            const v7784 = v7781 || v7783;
            const v7785 = v7778 && v7784;
            if (v7785) {
                const v7811 = function (trans) {
                    const v7786 = ctx.table;
                    const v7787 = v7786.core;
                    const v7788 = v7787.schema;
                    var primaryKey = v7788.primaryKey;
                    var coreRange = range;
                    const v7789 = ctx.table;
                    const v7790 = v7789.core;
                    const v7791 = {};
                    v7791.index = primaryKey;
                    v7791.range = coreRange;
                    const v7792 = {
                        trans: trans,
                        query: v7791
                    };
                    const v7793 = v7790.count(v7792);
                    const v7809 = function (count) {
                        const v7794 = ctx.table;
                        const v7795 = v7794.core;
                        const v7796 = {
                            trans: trans,
                            type: 'deleteRange',
                            range: coreRange
                        };
                        const v7797 = v7795.mutate(v7796);
                        const v7807 = function (_a) {
                            var failures = _a.failures;
                            const v7798 = _a.lastResult;
                            v7798;
                            const v7799 = _a.results;
                            v7799;
                            var numFailures = _a.numFailures;
                            if (numFailures) {
                                const v7800 = Object.keys(failures);
                                const v7802 = function (pos) {
                                    const v7801 = failures[pos];
                                    return v7801;
                                };
                                const v7803 = v7800.map(v7802);
                                const v7804 = count - numFailures;
                                const v7805 = new ModifyError('Could not delete some values', v7803, v7804);
                                throw v7805;
                            }
                            const v7806 = count - numFailures;
                            return v7806;
                        };
                        const v7808 = v7797.then(v7807);
                        return v7808;
                    };
                    const v7810 = v7793.then(v7809);
                    return v7810;
                };
                const v7812 = this._write(v7811);
                return v7812;
            }
            const v7813 = this.modify(deleteCallback);
            return v7813;
        };
        v7777.delete = v7814;
        return Collection;
    };
    var Collection = v7815();
    var deleteCallback = function (value, ctx) {
        return ctx.value = null;
    };
    const createCollectionConstructor = function (db) {
        const v7816 = Collection.prototype;
        const v7836 = function Collection(whereClause, keyRangeGenerator) {
            this.db = db;
            var keyRange = AnyRange;
            var error = null;
            if (keyRangeGenerator) {
                try {
                    keyRange = keyRangeGenerator();
                } catch (ex) {
                    error = ex;
                }
            }
            var whereCtx = whereClause._ctx;
            var table = whereCtx.table;
            const v7817 = table.hook;
            const v7818 = v7817.reading;
            var readingHook = v7818.fire;
            const v7819 = whereCtx.index;
            const v7820 = whereCtx.index;
            const v7821 = !v7820;
            const v7822 = table.schema;
            const v7823 = v7822.primKey;
            const v7824 = v7823.keyPath;
            const v7825 = whereCtx.index;
            const v7826 = table.schema;
            const v7827 = v7826.primKey;
            const v7828 = v7827.name;
            const v7829 = v7825 === v7828;
            const v7830 = v7824 && v7829;
            const v7831 = v7821 || v7830;
            const v7832 = whereCtx.or;
            const v7833 = readingHook !== mirror;
            let v7834;
            if (v7833) {
                v7834 = readingHook;
            } else {
                v7834 = null;
            }
            const v7835 = {};
            v7835.table = table;
            v7835.index = v7819;
            v7835.isPrimKey = v7831;
            v7835.range = keyRange;
            v7835.keysOnly = false;
            v7835.dir = 'next';
            v7835.unique = '';
            v7835.algorithm = null;
            v7835.filter = null;
            v7835.replayFilter = null;
            v7835.justLimit = true;
            v7835.isMatch = null;
            v7835.offset = 0;
            v7835.limit = Infinity;
            v7835.error = error;
            v7835.or = v7832;
            v7835.valueMapper = v7834;
            this._ctx = v7835;
        };
        const v7837 = makeClassConstructor(v7816, v7836);
        return v7837;
    };
    const simpleCompare = function (a, b) {
        const v7838 = a < b;
        const v7839 = -1;
        const v7840 = a === b;
        let v7841;
        if (v7840) {
            v7841 = 0;
        } else {
            v7841 = 1;
        }
        let v7842;
        if (v7838) {
            v7842 = v7839;
        } else {
            v7842 = v7841;
        }
        return v7842;
    };
    const simpleCompareReverse = function (a, b) {
        const v7843 = a > b;
        const v7844 = -1;
        const v7845 = a === b;
        let v7846;
        if (v7845) {
            v7846 = 0;
        } else {
            v7846 = 1;
        }
        let v7847;
        if (v7843) {
            v7847 = v7844;
        } else {
            v7847 = v7846;
        }
        return v7847;
    };
    const fail = function (collectionOrWhereClause, err, T) {
        let collection;
        const v7848 = collectionOrWhereClause instanceof WhereClause;
        const v7849 = new collectionOrWhereClause.Collection(collectionOrWhereClause);
        if (v7848) {
            collection = v7849;
        } else {
            collection = collectionOrWhereClause;
        }
        const v7850 = collection._ctx;
        const v7851 = new T(err);
        const v7852 = new TypeError(err);
        let v7853;
        if (T) {
            v7853 = v7851;
        } else {
            v7853 = v7852;
        }
        v7850.error = v7853;
        return collection;
    };
    const emptyCollection = function (whereClause) {
        const v7855 = function () {
            const v7854 = rangeEqual('');
            return v7854;
        };
        const v7856 = new whereClause.Collection(whereClause, v7855);
        const v7857 = v7856.limit(0);
        return v7857;
    };
    const upperFactory = function (dir) {
        const v7858 = dir === 'next';
        const v7860 = function (s) {
            const v7859 = s.toUpperCase();
            return v7859;
        };
        const v7862 = function (s) {
            const v7861 = s.toLowerCase();
            return v7861;
        };
        let v7863;
        if (v7858) {
            v7863 = v7860;
        } else {
            v7863 = v7862;
        }
        return v7863;
    };
    const lowerFactory = function (dir) {
        const v7864 = dir === 'next';
        const v7866 = function (s) {
            const v7865 = s.toLowerCase();
            return v7865;
        };
        const v7868 = function (s) {
            const v7867 = s.toUpperCase();
            return v7867;
        };
        let v7869;
        if (v7864) {
            v7869 = v7866;
        } else {
            v7869 = v7868;
        }
        return v7869;
    };
    const nextCasing = function (key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
        const v7870 = key.length;
        const v7871 = lowerNeedle.length;
        var length = Math.min(v7870, v7871);
        const v7872 = -1;
        var llp = v7872;
        var i = 0;
        let v7873 = i < length;
        while (v7873) {
            var lwrKeyChar = lowerKey[i];
            const v7875 = lowerNeedle[i];
            const v7876 = lwrKeyChar !== v7875;
            if (v7876) {
                const v7877 = key[i];
                const v7878 = upperNeedle[i];
                const v7879 = cmp(v7877, v7878);
                const v7880 = v7879 < 0;
                if (v7880) {
                    const v7881 = key.substr(0, i);
                    const v7882 = upperNeedle[i];
                    const v7883 = v7881 + v7882;
                    const v7884 = i + 1;
                    const v7885 = upperNeedle.substr(v7884);
                    const v7886 = v7883 + v7885;
                    return v7886;
                }
                const v7887 = key[i];
                const v7888 = lowerNeedle[i];
                const v7889 = cmp(v7887, v7888);
                const v7890 = v7889 < 0;
                if (v7890) {
                    const v7891 = key.substr(0, i);
                    const v7892 = lowerNeedle[i];
                    const v7893 = v7891 + v7892;
                    const v7894 = i + 1;
                    const v7895 = upperNeedle.substr(v7894);
                    const v7896 = v7893 + v7895;
                    return v7896;
                }
                const v7897 = llp >= 0;
                if (v7897) {
                    const v7898 = key.substr(0, llp);
                    const v7899 = lowerKey[llp];
                    const v7900 = v7898 + v7899;
                    const v7901 = llp + 1;
                    const v7902 = upperNeedle.substr(v7901);
                    const v7903 = v7900 + v7902;
                    return v7903;
                }
                return null;
            }
            const v7904 = key[i];
            const v7905 = cmp(v7904, lwrKeyChar);
            const v7906 = v7905 < 0;
            if (v7906) {
                llp = i;
            }
            const v7874 = ++i;
            v7873 = i < length;
        }
        const v7907 = lowerNeedle.length;
        const v7908 = length < v7907;
        const v7909 = dir === 'next';
        const v7910 = v7908 && v7909;
        if (v7910) {
            const v7911 = key.length;
            const v7912 = upperNeedle.substr(v7911);
            const v7913 = key + v7912;
            return v7913;
        }
        const v7914 = key.length;
        const v7915 = length < v7914;
        const v7916 = dir === 'prev';
        const v7917 = v7915 && v7916;
        if (v7917) {
            const v7918 = upperNeedle.length;
            const v7919 = key.substr(0, v7918);
            return v7919;
        }
        const v7920 = llp < 0;
        const v7921 = key.substr(0, llp);
        const v7922 = lowerNeedle[llp];
        const v7923 = v7921 + v7922;
        const v7924 = llp + 1;
        const v7925 = upperNeedle.substr(v7924);
        const v7926 = v7923 + v7925;
        let v7927;
        if (v7920) {
            v7927 = null;
        } else {
            v7927 = v7926;
        }
        return v7927;
    };
    const addIgnoreCaseAlgorithm = function (whereClause, match, needles, suffix) {
        var upper;
        var lower;
        var compare;
        var upperNeedles;
        var lowerNeedles;
        var direction;
        var nextKeySuffix;
        var needlesLen = needles.length;
        const v7930 = function (s) {
            const v7928 = typeof s;
            const v7929 = v7928 === 'string';
            return v7929;
        };
        const v7931 = needles.every(v7930);
        const v7932 = !v7931;
        if (v7932) {
            const v7933 = fail(whereClause, STRING_EXPECTED);
            return v7933;
        }
        const initDirection = function (dir) {
            upper = upperFactory(dir);
            lower = lowerFactory(dir);
            const v7934 = dir === 'next';
            if (v7934) {
                compare = simpleCompare;
            } else {
                compare = simpleCompareReverse;
            }
            const v7938 = function (needle) {
                const v7935 = lower(needle);
                const v7936 = upper(needle);
                const v7937 = {};
                v7937.lower = v7935;
                v7937.upper = v7936;
                return v7937;
            };
            const v7939 = needles.map(v7938);
            const v7943 = function (a, b) {
                const v7940 = a.lower;
                const v7941 = b.lower;
                const v7942 = compare(v7940, v7941);
                return v7942;
            };
            var needleBounds = v7939.sort(v7943);
            const v7945 = function (nb) {
                const v7944 = nb.upper;
                return v7944;
            };
            upperNeedles = needleBounds.map(v7945);
            const v7947 = function (nb) {
                const v7946 = nb.lower;
                return v7946;
            };
            lowerNeedles = needleBounds.map(v7947);
            direction = dir;
            const v7948 = dir === 'next';
            if (v7948) {
                nextKeySuffix = '';
            } else {
                nextKeySuffix = suffix;
            }
        };
        const v7949 = initDirection('next');
        v7949;
        const v7955 = function () {
            const v7950 = upperNeedles[0];
            const v7951 = needlesLen - 1;
            const v7952 = lowerNeedles[v7951];
            const v7953 = v7952 + suffix;
            const v7954 = createRange(v7950, v7953);
            return v7954;
        };
        var c = new whereClause.Collection(whereClause, v7955);
        const v7957 = function (direction) {
            const v7956 = initDirection(direction);
            v7956;
        };
        c._ondirectionchange = v7957;
        var firstPossibleNeedle = 0;
        const v7978 = function (cursor, advance, resolve) {
            var key = cursor.key;
            const v7958 = typeof key;
            const v7959 = v7958 !== 'string';
            if (v7959) {
                return false;
            }
            var lowerKey = lower(key);
            const v7960 = match(lowerKey, lowerNeedles, firstPossibleNeedle);
            if (v7960) {
                return true;
            } else {
                var lowestPossibleCasing = null;
                var i = firstPossibleNeedle;
                let v7961 = i < needlesLen;
                while (v7961) {
                    const v7963 = upperNeedles[i];
                    const v7964 = lowerNeedles[i];
                    var casing = nextCasing(key, lowerKey, v7963, v7964, compare, direction);
                    const v7965 = casing === null;
                    const v7966 = lowestPossibleCasing === null;
                    const v7967 = v7965 && v7966;
                    if (v7967) {
                        firstPossibleNeedle = i + 1;
                    } else {
                        const v7968 = lowestPossibleCasing === null;
                        const v7969 = compare(lowestPossibleCasing, casing);
                        const v7970 = v7969 > 0;
                        const v7971 = v7968 || v7970;
                        if (v7971) {
                            lowestPossibleCasing = casing;
                        }
                    }
                    const v7962 = ++i;
                    v7961 = i < needlesLen;
                }
                const v7972 = lowestPossibleCasing !== null;
                if (v7972) {
                    const v7975 = function () {
                        const v7973 = lowestPossibleCasing + nextKeySuffix;
                        const v7974 = cursor.continue(v7973);
                        v7974;
                    };
                    const v7976 = advance(v7975);
                    v7976;
                } else {
                    const v7977 = advance(resolve);
                    v7977;
                }
                return false;
            }
        };
        const v7979 = c._addAlgorithm(v7978);
        v7979;
        return c;
    };
    const createRange = function (lower, upper, lowerOpen, upperOpen) {
        const v7980 = {};
        v7980.type = 2;
        v7980.lower = lower;
        v7980.upper = upper;
        v7980.lowerOpen = lowerOpen;
        v7980.upperOpen = upperOpen;
        return v7980;
    };
    const rangeEqual = function (value) {
        const v7981 = {};
        v7981.type = 1;
        v7981.lower = value;
        v7981.upper = value;
        return v7981;
    };
    const v8290 = function () {
        const WhereClause = function () {
        };
        const v7982 = WhereClause.prototype;
        const v7987 = function () {
            const v7983 = this._ctx;
            const v7984 = v7983.table;
            const v7985 = v7984.db;
            const v7986 = v7985.Collection;
            return v7986;
        };
        const v7988 = {
            get: v7987,
            enumerable: false,
            configurable: true
        };
        const v7989 = Object.defineProperty(v7982, 'Collection', v7988);
        v7989;
        const v7990 = WhereClause.prototype;
        const v8008 = function (lower, upper, includeLower, includeUpper) {
            includeLower = includeLower !== false;
            includeUpper = includeUpper === true;
            try {
                const v7991 = this._cmp(lower, upper);
                const v7992 = v7991 > 0;
                const v7993 = this._cmp(lower, upper);
                const v7994 = v7993 === 0;
                const v7995 = includeLower || includeUpper;
                const v7996 = v7994 && v7995;
                const v7997 = includeLower && includeUpper;
                const v7998 = !v7997;
                const v7999 = v7996 && v7998;
                const v8000 = v7992 || v7999;
                if (v8000) {
                    const v8001 = emptyCollection(this);
                    return v8001;
                }
                const v8005 = function () {
                    const v8002 = !includeLower;
                    const v8003 = !includeUpper;
                    const v8004 = createRange(lower, upper, v8002, v8003);
                    return v8004;
                };
                const v8006 = new this.Collection(this, v8005);
                return v8006;
            } catch (e) {
                const v8007 = fail(this, INVALID_KEY_ARGUMENT);
                return v8007;
            }
        };
        v7990.between = v8008;
        const v8009 = WhereClause.prototype;
        const v8015 = function (value) {
            const v8010 = value == null;
            if (v8010) {
                const v8011 = fail(this, INVALID_KEY_ARGUMENT);
                return v8011;
            }
            const v8013 = function () {
                const v8012 = rangeEqual(value);
                return v8012;
            };
            const v8014 = new this.Collection(this, v8013);
            return v8014;
        };
        v8009.equals = v8015;
        const v8016 = WhereClause.prototype;
        const v8022 = function (value) {
            const v8017 = value == null;
            if (v8017) {
                const v8018 = fail(this, INVALID_KEY_ARGUMENT);
                return v8018;
            }
            const v8020 = function () {
                const v8019 = createRange(value, undefined, true);
                return v8019;
            };
            const v8021 = new this.Collection(this, v8020);
            return v8021;
        };
        v8016.above = v8022;
        const v8023 = WhereClause.prototype;
        const v8029 = function (value) {
            const v8024 = value == null;
            if (v8024) {
                const v8025 = fail(this, INVALID_KEY_ARGUMENT);
                return v8025;
            }
            const v8027 = function () {
                const v8026 = createRange(value, undefined, false);
                return v8026;
            };
            const v8028 = new this.Collection(this, v8027);
            return v8028;
        };
        v8023.aboveOrEqual = v8029;
        const v8030 = WhereClause.prototype;
        const v8036 = function (value) {
            const v8031 = value == null;
            if (v8031) {
                const v8032 = fail(this, INVALID_KEY_ARGUMENT);
                return v8032;
            }
            const v8034 = function () {
                const v8033 = createRange(undefined, value, false, true);
                return v8033;
            };
            const v8035 = new this.Collection(this, v8034);
            return v8035;
        };
        v8030.below = v8036;
        const v8037 = WhereClause.prototype;
        const v8043 = function (value) {
            const v8038 = value == null;
            if (v8038) {
                const v8039 = fail(this, INVALID_KEY_ARGUMENT);
                return v8039;
            }
            const v8041 = function () {
                const v8040 = createRange(undefined, value);
                return v8040;
            };
            const v8042 = new this.Collection(this, v8041);
            return v8042;
        };
        v8037.belowOrEqual = v8043;
        const v8044 = WhereClause.prototype;
        const v8050 = function (str) {
            const v8045 = typeof str;
            const v8046 = v8045 !== 'string';
            if (v8046) {
                const v8047 = fail(this, STRING_EXPECTED);
                return v8047;
            }
            const v8048 = str + maxString;
            const v8049 = this.between(str, v8048, true, true);
            return v8049;
        };
        v8044.startsWith = v8050;
        const v8051 = WhereClause.prototype;
        const v8060 = function (str) {
            const v8052 = str === '';
            if (v8052) {
                const v8053 = this.startsWith(str);
                return v8053;
            }
            const v8057 = function (x, a) {
                const v8054 = a[0];
                const v8055 = x.indexOf(v8054);
                const v8056 = v8055 === 0;
                return v8056;
            };
            const v8058 = [str];
            const v8059 = addIgnoreCaseAlgorithm(this, v8057, v8058, maxString);
            return v8059;
        };
        v8051.startsWithIgnoreCase = v8060;
        const v8061 = WhereClause.prototype;
        const v8067 = function (str) {
            const v8064 = function (x, a) {
                const v8062 = a[0];
                const v8063 = x === v8062;
                return v8063;
            };
            const v8065 = [str];
            const v8066 = addIgnoreCaseAlgorithm(this, v8064, v8065, '');
            return v8066;
        };
        v8061.equalsIgnoreCase = v8067;
        const v8068 = WhereClause.prototype;
        const v8077 = function () {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            const v8069 = set.length;
            const v8070 = v8069 === 0;
            if (v8070) {
                const v8071 = emptyCollection(this);
                return v8071;
            }
            const v8075 = function (x, a) {
                const v8072 = a.indexOf(x);
                const v8073 = -1;
                const v8074 = v8072 !== v8073;
                return v8074;
            };
            const v8076 = addIgnoreCaseAlgorithm(this, v8075, set, '');
            return v8076;
        };
        v8068.anyOfIgnoreCase = v8077;
        const v8078 = WhereClause.prototype;
        const v8088 = function () {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            const v8079 = set.length;
            const v8080 = v8079 === 0;
            if (v8080) {
                const v8081 = emptyCollection(this);
                return v8081;
            }
            const v8086 = function (x, a) {
                const v8084 = function (n) {
                    const v8082 = x.indexOf(n);
                    const v8083 = v8082 === 0;
                    return v8083;
                };
                const v8085 = a.some(v8084);
                return v8085;
            };
            const v8087 = addIgnoreCaseAlgorithm(this, v8086, set, maxString);
            return v8087;
        };
        v8078.startsWithAnyOfIgnoreCase = v8088;
        const v8089 = WhereClause.prototype;
        const v8122 = function () {
            var _this = this;
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            var compare = this._cmp;
            try {
                const v8090 = set.sort(compare);
                v8090;
            } catch (e) {
                const v8091 = fail(this, INVALID_KEY_ARGUMENT);
                return v8091;
            }
            const v8092 = set.length;
            const v8093 = v8092 === 0;
            if (v8093) {
                const v8094 = emptyCollection(this);
                return v8094;
            }
            const v8100 = function () {
                const v8095 = set[0];
                const v8096 = set.length;
                const v8097 = v8096 - 1;
                const v8098 = set[v8097];
                const v8099 = createRange(v8095, v8098);
                return v8099;
            };
            var c = new this.Collection(this, v8100);
            const v8105 = function (direction) {
                const v8101 = direction === 'next';
                const v8102 = _this._ascending;
                const v8103 = _this._descending;
                if (v8101) {
                    compare = v8102;
                } else {
                    compare = v8103;
                }
                const v8104 = set.sort(compare);
                v8104;
            };
            c._ondirectionchange = v8105;
            var i = 0;
            const v8120 = function (cursor, advance, resolve) {
                var key = cursor.key;
                const v8106 = set[i];
                const v8107 = compare(key, v8106);
                let v8108 = v8107 > 0;
                while (v8108) {
                    const v8109 = ++i;
                    v8109;
                    const v8110 = set.length;
                    const v8111 = i === v8110;
                    if (v8111) {
                        const v8112 = advance(resolve);
                        v8112;
                        return false;
                    }
                    v8108 = v8107 > 0;
                }
                const v8113 = set[i];
                const v8114 = compare(key, v8113);
                const v8115 = v8114 === 0;
                if (v8115) {
                    return true;
                } else {
                    const v8118 = function () {
                        const v8116 = set[i];
                        const v8117 = cursor.continue(v8116);
                        v8117;
                    };
                    const v8119 = advance(v8118);
                    v8119;
                    return false;
                }
            };
            const v8121 = c._addAlgorithm(v8120);
            v8121;
            return c;
        };
        v8089.anyOf = v8122;
        const v8123 = WhereClause.prototype;
        const v8131 = function (value) {
            const v8124 = [
                minKey,
                value
            ];
            const v8125 = this.db;
            const v8126 = v8125._maxKey;
            const v8127 = [
                value,
                v8126
            ];
            const v8128 = [
                v8124,
                v8127
            ];
            const v8129 = {
                includeLowers: false,
                includeUppers: false
            };
            const v8130 = this.inAnyRange(v8128, v8129);
            return v8130;
        };
        v8123.notEqual = v8131;
        const v8132 = WhereClause.prototype;
        const v8159 = function () {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            const v8133 = set.length;
            const v8134 = v8133 === 0;
            if (v8134) {
                const v8135 = new this.Collection(this);
                return v8135;
            }
            try {
                const v8136 = this._ascending;
                const v8137 = set.sort(v8136);
                v8137;
            } catch (e) {
                const v8138 = fail(this, INVALID_KEY_ARGUMENT);
                return v8138;
            }
            const v8149 = function (res, val) {
                const v8139 = res.length;
                const v8140 = v8139 - 1;
                const v8141 = res[v8140];
                const v8142 = v8141[1];
                const v8143 = [
                    v8142,
                    val
                ];
                const v8144 = [v8143];
                const v8145 = res.concat(v8144);
                const v8146 = [
                    minKey,
                    val
                ];
                const v8147 = [v8146];
                let v8148;
                if (res) {
                    v8148 = v8145;
                } else {
                    v8148 = v8147;
                }
                return v8148;
            };
            var ranges = set.reduce(v8149, null);
            const v8150 = set.length;
            const v8151 = v8150 - 1;
            const v8152 = set[v8151];
            const v8153 = this.db;
            const v8154 = v8153._maxKey;
            const v8155 = [
                v8152,
                v8154
            ];
            const v8156 = ranges.push(v8155);
            v8156;
            const v8157 = {
                includeLowers: false,
                includeUppers: false
            };
            const v8158 = this.inAnyRange(ranges, v8157);
            return v8158;
        };
        v8132.noneOf = v8159;
        const v8160 = WhereClause.prototype;
        const v8273 = function (ranges, options) {
            var _this = this;
            var cmp = this._cmp;
            var ascending = this._ascending;
            var descending = this._descending;
            var min = this._min;
            var max = this._max;
            const v8161 = ranges.length;
            const v8162 = v8161 === 0;
            if (v8162) {
                const v8163 = emptyCollection(this);
                return v8163;
            }
            const v8174 = function (range) {
                const v8164 = range[0];
                const v8165 = v8164 !== undefined;
                const v8166 = range[1];
                const v8167 = v8166 !== undefined;
                const v8168 = v8165 && v8167;
                const v8169 = range[0];
                const v8170 = range[1];
                const v8171 = ascending(v8169, v8170);
                const v8172 = v8171 <= 0;
                const v8173 = v8168 && v8172;
                return v8173;
            };
            const v8175 = ranges.every(v8174);
            const v8176 = !v8175;
            if (v8176) {
                const v8177 = exceptions.InvalidArgument;
                const v8178 = fail(this, 'First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower', v8177);
                return v8178;
            }
            const v8179 = !options;
            const v8180 = options.includeLowers;
            const v8181 = v8180 !== false;
            var includeLowers = v8179 || v8181;
            const v8182 = options.includeUppers;
            const v8183 = v8182 === true;
            var includeUppers = options && v8183;
            const addRange = function (ranges, newRange) {
                var i = 0;
                var l = ranges.length;
                let v8184 = i < l;
                while (v8184) {
                    var range = ranges[i];
                    const v8186 = newRange[0];
                    const v8187 = range[1];
                    const v8188 = cmp(v8186, v8187);
                    const v8189 = v8188 < 0;
                    const v8190 = newRange[1];
                    const v8191 = range[0];
                    const v8192 = cmp(v8190, v8191);
                    const v8193 = v8192 > 0;
                    const v8194 = v8189 && v8193;
                    if (v8194) {
                        const v8195 = range[0];
                        const v8196 = newRange[0];
                        const v8197 = min(v8195, v8196);
                        range[0] = v8197;
                        const v8198 = range[1];
                        const v8199 = newRange[1];
                        const v8200 = max(v8198, v8199);
                        range[1] = v8200;
                        break;
                    }
                    const v8185 = ++i;
                    v8184 = i < l;
                }
                const v8201 = i === l;
                if (v8201) {
                    const v8202 = ranges.push(newRange);
                    v8202;
                }
                return ranges;
            };
            var sortDirection = ascending;
            const rangeSorter = function (a, b) {
                const v8203 = a[0];
                const v8204 = b[0];
                const v8205 = sortDirection(v8203, v8204);
                return v8205;
            };
            var set;
            try {
                const v8206 = [];
                set = ranges.reduce(addRange, v8206);
                const v8207 = set.sort(rangeSorter);
                v8207;
            } catch (ex) {
                const v8208 = fail(this, INVALID_KEY_ARGUMENT);
                return v8208;
            }
            var rangePos = 0;
            let keyIsBeyondCurrentEntry;
            const v8213 = function (key) {
                const v8209 = set[rangePos];
                const v8210 = v8209[1];
                const v8211 = ascending(key, v8210);
                const v8212 = v8211 > 0;
                return v8212;
            };
            const v8218 = function (key) {
                const v8214 = set[rangePos];
                const v8215 = v8214[1];
                const v8216 = ascending(key, v8215);
                const v8217 = v8216 >= 0;
                return v8217;
            };
            if (includeUppers) {
                keyIsBeyondCurrentEntry = v8213;
            } else {
                keyIsBeyondCurrentEntry = v8218;
            }
            let keyIsBeforeCurrentEntry;
            const v8223 = function (key) {
                const v8219 = set[rangePos];
                const v8220 = v8219[0];
                const v8221 = descending(key, v8220);
                const v8222 = v8221 > 0;
                return v8222;
            };
            const v8228 = function (key) {
                const v8224 = set[rangePos];
                const v8225 = v8224[0];
                const v8226 = descending(key, v8225);
                const v8227 = v8226 >= 0;
                return v8227;
            };
            if (includeLowers) {
                keyIsBeforeCurrentEntry = v8223;
            } else {
                keyIsBeforeCurrentEntry = v8228;
            }
            const keyWithinCurrentRange = function (key) {
                const v8229 = keyIsBeyondCurrentEntry(key);
                const v8230 = !v8229;
                const v8231 = keyIsBeforeCurrentEntry(key);
                const v8232 = !v8231;
                const v8233 = v8230 && v8232;
                return v8233;
            };
            var checkKey = keyIsBeyondCurrentEntry;
            const v8243 = function () {
                const v8234 = set[0];
                const v8235 = v8234[0];
                const v8236 = set.length;
                const v8237 = v8236 - 1;
                const v8238 = set[v8237];
                const v8239 = v8238[1];
                const v8240 = !includeLowers;
                const v8241 = !includeUppers;
                const v8242 = createRange(v8235, v8239, v8240, v8241);
                return v8242;
            };
            var c = new this.Collection(this, v8243);
            const v8246 = function (direction) {
                const v8244 = direction === 'next';
                if (v8244) {
                    checkKey = keyIsBeyondCurrentEntry;
                    sortDirection = ascending;
                } else {
                    checkKey = keyIsBeforeCurrentEntry;
                    sortDirection = descending;
                }
                const v8245 = set.sort(rangeSorter);
                v8245;
            };
            c._ondirectionchange = v8246;
            const v8271 = function (cursor, advance, resolve) {
                var key = cursor.key;
                let v8247 = checkKey(key);
                while (v8247) {
                    const v8248 = ++rangePos;
                    v8248;
                    const v8249 = set.length;
                    const v8250 = rangePos === v8249;
                    if (v8250) {
                        const v8251 = advance(resolve);
                        v8251;
                        return false;
                    }
                    v8247 = checkKey(key);
                }
                const v8252 = keyWithinCurrentRange(key);
                if (v8252) {
                    return true;
                } else {
                    const v8253 = set[rangePos];
                    const v8254 = v8253[1];
                    const v8255 = _this._cmp(key, v8254);
                    const v8256 = v8255 === 0;
                    const v8257 = set[rangePos];
                    const v8258 = v8257[0];
                    const v8259 = _this._cmp(key, v8258);
                    const v8260 = v8259 === 0;
                    const v8261 = v8256 || v8260;
                    if (v8261) {
                        return false;
                    } else {
                        const v8269 = function () {
                            const v8262 = sortDirection === ascending;
                            if (v8262) {
                                const v8263 = set[rangePos];
                                const v8264 = v8263[0];
                                const v8265 = cursor.continue(v8264);
                                v8265;
                            } else {
                                const v8266 = set[rangePos];
                                const v8267 = v8266[1];
                                const v8268 = cursor.continue(v8267);
                                v8268;
                            }
                        };
                        const v8270 = advance(v8269);
                        v8270;
                        return false;
                    }
                }
            };
            const v8272 = c._addAlgorithm(v8271);
            v8272;
            return c;
        };
        v8160.inAnyRange = v8273;
        const v8274 = WhereClause.prototype;
        const v8289 = function () {
            var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
            const v8277 = function (s) {
                const v8275 = typeof s;
                const v8276 = v8275 === 'string';
                return v8276;
            };
            const v8278 = set.every(v8277);
            const v8279 = !v8278;
            if (v8279) {
                const v8280 = fail(this, 'startsWithAnyOf() only works with strings');
                return v8280;
            }
            const v8281 = set.length;
            const v8282 = v8281 === 0;
            if (v8282) {
                const v8283 = emptyCollection(this);
                return v8283;
            }
            const v8286 = function (str) {
                const v8284 = str + maxString;
                const v8285 = [
                    str,
                    v8284
                ];
                return v8285;
            };
            const v8287 = set.map(v8286);
            const v8288 = this.inAnyRange(v8287);
            return v8288;
        };
        v8274.startsWithAnyOf = v8289;
        return WhereClause;
    };
    var WhereClause = v8290();
    const createWhereClauseConstructor = function (db) {
        const v8291 = WhereClause.prototype;
        const v8312 = function WhereClause(table, index, orCollection) {
            this.db = db;
            const v8292 = index === ':id';
            let v8293;
            if (v8292) {
                v8293 = null;
            } else {
                v8293 = index;
            }
            const v8294 = {};
            v8294.table = table;
            v8294.index = v8293;
            v8294.or = orCollection;
            this._ctx = v8294;
            const v8295 = db._deps;
            var indexedDB = v8295.indexedDB;
            const v8296 = !indexedDB;
            if (v8296) {
                const v8297 = new exceptions.MissingAPI();
                throw v8297;
            }
            const v8298 = indexedDB.cmp;
            const v8299 = v8298.bind(indexedDB);
            this._cmp = this._ascending = v8299;
            const v8301 = function (a, b) {
                const v8300 = indexedDB.cmp(b, a);
                return v8300;
            };
            this._descending = v8301;
            const v8305 = function (a, b) {
                const v8302 = indexedDB.cmp(a, b);
                const v8303 = v8302 > 0;
                let v8304;
                if (v8303) {
                    v8304 = a;
                } else {
                    v8304 = b;
                }
                return v8304;
            };
            this._max = v8305;
            const v8309 = function (a, b) {
                const v8306 = indexedDB.cmp(a, b);
                const v8307 = v8306 < 0;
                let v8308;
                if (v8307) {
                    v8308 = a;
                } else {
                    v8308 = b;
                }
                return v8308;
            };
            this._min = v8309;
            const v8310 = db._deps;
            const v8311 = v8310.IDBKeyRange;
            this._IDBKeyRange = v8311;
        };
        const v8313 = makeClassConstructor(v8291, v8312);
        return v8313;
    };
    const eventRejectHandler = function (reject) {
        const v8318 = function (event) {
            const v8314 = preventDefault(event);
            v8314;
            const v8315 = event.target;
            const v8316 = v8315.error;
            const v8317 = reject(v8316);
            v8317;
            return false;
        };
        const v8319 = wrap(v8318);
        return v8319;
    };
    const preventDefault = function (event) {
        const v8320 = event.stopPropagation;
        if (v8320) {
            const v8321 = event.stopPropagation();
            v8321;
        }
        const v8322 = event.preventDefault;
        if (v8322) {
            const v8323 = event.preventDefault();
            v8323;
        }
    };
    var DEXIE_STORAGE_MUTATED_EVENT_NAME = 'storagemutated';
    var STORAGE_MUTATED_DOM_EVENT_NAME = 'x-storagemutated-1';
    var globalEvents = Events(null, DEXIE_STORAGE_MUTATED_EVENT_NAME);
    const v8527 = function () {
        const Transaction = function () {
        };
        const v8324 = Transaction.prototype;
        const v8335 = function () {
            const v8325 = PSD.global;
            const v8326 = !v8325;
            const v8327 = assert(v8326);
            v8327;
            const v8328 = this._reculock;
            const v8329 = ++v8328;
            v8329;
            const v8330 = this._reculock;
            const v8331 = v8330 === 1;
            const v8332 = PSD.global;
            const v8333 = !v8332;
            const v8334 = v8331 && v8333;
            if (v8334) {
                PSD.lockOwnerFor = this;
            }
            return this;
        };
        v8324._lock = v8335;
        const v8336 = Transaction.prototype;
        const v8355 = function () {
            const v8337 = PSD.global;
            const v8338 = !v8337;
            const v8339 = assert(v8338);
            v8339;
            const v8340 = this._reculock;
            const v8341 = --v8340;
            const v8342 = v8341 === 0;
            if (v8342) {
                const v8343 = PSD.global;
                const v8344 = !v8343;
                if (v8344) {
                    PSD.lockOwnerFor = null;
                }
                const v8345 = this._blockedFuncs;
                const v8346 = v8345.length;
                const v8347 = v8346 > 0;
                const v8348 = this._locked();
                const v8349 = !v8348;
                let v8350 = v8347 && v8349;
                while (v8350) {
                    const v8351 = this._blockedFuncs;
                    var fnAndPSD = v8351.shift();
                    try {
                        const v8352 = fnAndPSD[1];
                        const v8353 = fnAndPSD[0];
                        const v8354 = usePSD(v8352, v8353);
                        v8354;
                    } catch (e) {
                    }
                    v8350 = v8347 && v8349;
                }
            }
            return this;
        };
        v8336._unlock = v8355;
        const v8356 = Transaction.prototype;
        const v8361 = function () {
            const v8357 = this._reculock;
            const v8358 = PSD.lockOwnerFor;
            const v8359 = v8358 !== this;
            const v8360 = v8357 && v8359;
            return v8360;
        };
        v8356._locked = v8361;
        const v8362 = Transaction.prototype;
        const v8424 = function (idbtrans) {
            var _this = this;
            const v8363 = this.mode;
            const v8364 = !v8363;
            if (v8364) {
                return this;
            }
            const v8365 = this.db;
            var idbdb = v8365.idbdb;
            const v8366 = this.db;
            const v8367 = v8366._state;
            var dbOpenError = v8367.dbOpenError;
            const v8368 = this.idbtrans;
            const v8369 = !v8368;
            const v8370 = assert(v8369);
            v8370;
            const v8371 = !idbtrans;
            const v8372 = !idbdb;
            const v8373 = v8371 && v8372;
            if (v8373) {
                const v8374 = dbOpenError.name;
                const v8375 = dbOpenError && v8374;
                switch (v8375) {
                case 'DatabaseClosedError':
                    const v8376 = new exceptions.DatabaseClosed(dbOpenError);
                    throw v8376;
                case 'MissingAPIError':
                    const v8377 = dbOpenError.message;
                    const v8378 = new exceptions.MissingAPI(v8377, dbOpenError);
                    throw v8378;
                default:
                    const v8379 = new exceptions.OpenFailed(dbOpenError);
                    throw v8379;
                }
            }
            const v8380 = this.active;
            const v8381 = !v8380;
            if (v8381) {
                const v8382 = new exceptions.TransactionInactive();
                throw v8382;
            }
            const v8383 = this._completion;
            const v8384 = v8383._state;
            const v8385 = v8384 === null;
            const v8386 = assert(v8385);
            v8386;
            const v8387 = this.db;
            const v8388 = v8387.core;
            const v8389 = this.db;
            const v8390 = v8389.core;
            const v8391 = this.storeNames;
            const v8392 = this.mode;
            const v8393 = this.chromeTransactionDurability;
            const v8394 = { durability: v8393 };
            const v8395 = v8390.transaction(v8391, v8392, v8394);
            const v8396 = this.storeNames;
            const v8397 = this.mode;
            const v8398 = this.chromeTransactionDurability;
            const v8399 = { durability: v8398 };
            const v8400 = idbdb.transaction(v8396, v8397, v8399);
            let v8401;
            if (v8388) {
                v8401 = v8395;
            } else {
                v8401 = v8400;
            }
            idbtrans = this.idbtrans = idbtrans || v8401;
            const v8405 = function (ev) {
                const v8402 = preventDefault(ev);
                v8402;
                const v8403 = idbtrans.error;
                const v8404 = _this._reject(v8403);
                v8404;
            };
            const v8406 = wrap(v8405);
            idbtrans.onerror = v8406;
            const v8415 = function (ev) {
                const v8407 = preventDefault(ev);
                v8407;
                const v8408 = _this.active;
                const v8409 = idbtrans.error;
                const v8410 = new exceptions.Abort(v8409);
                const v8411 = _this._reject(v8410);
                const v8412 = v8408 && v8411;
                v8412;
                _this.active = false;
                const v8413 = _this.on('abort');
                const v8414 = v8413.fire(ev);
                v8414;
            };
            const v8416 = wrap(v8415);
            idbtrans.onabort = v8416;
            const v8422 = function () {
                _this.active = false;
                const v8417 = _this._resolve();
                v8417;
                const v8418 = 'mutatedParts' in idbtrans;
                if (v8418) {
                    const v8419 = globalEvents.storagemutated;
                    const v8420 = idbtrans['mutatedParts'];
                    const v8421 = v8419.fire(v8420);
                    v8421;
                }
            };
            const v8423 = wrap(v8422);
            idbtrans.oncomplete = v8423;
            return this;
        };
        v8362.create = v8424;
        const v8425 = Transaction.prototype;
        const v8459 = function (mode, fn, bWriteLock) {
            var _this = this;
            const v8426 = mode === 'readwrite';
            const v8427 = this.mode;
            const v8428 = v8427 !== 'readwrite';
            const v8429 = v8426 && v8428;
            if (v8429) {
                const v8430 = new exceptions.ReadOnly('Transaction is readonly');
                const v8431 = rejection(v8430);
                return v8431;
            }
            const v8432 = this.active;
            const v8433 = !v8432;
            if (v8433) {
                const v8434 = new exceptions.TransactionInactive();
                const v8435 = rejection(v8434);
                return v8435;
            }
            const v8436 = this._locked();
            if (v8436) {
                const v8443 = function (resolve, reject) {
                    const v8437 = _this._blockedFuncs;
                    const v8440 = function () {
                        const v8438 = _this._promise(mode, fn, bWriteLock);
                        const v8439 = v8438.then(resolve, reject);
                        v8439;
                    };
                    const v8441 = [
                        v8440,
                        PSD
                    ];
                    const v8442 = v8437.push(v8441);
                    v8442;
                };
                const v8444 = new DexiePromise(v8443);
                return v8444;
            } else {
                if (bWriteLock) {
                    const v8453 = function () {
                        const v8449 = function (resolve, reject) {
                            const v8445 = _this._lock();
                            v8445;
                            var rv = fn(resolve, reject, _this);
                            const v8446 = rv.then;
                            const v8447 = rv && v8446;
                            if (v8447) {
                                const v8448 = rv.then(resolve, reject);
                                v8448;
                            }
                        };
                        var p = new DexiePromise(v8449);
                        const v8451 = function () {
                            const v8450 = _this._unlock();
                            return v8450;
                        };
                        const v8452 = p.finally(v8451);
                        v8452;
                        p._lib = true;
                        return p;
                    };
                    const v8454 = newScope(v8453);
                    return v8454;
                } else {
                    const v8458 = function (resolve, reject) {
                        var rv = fn(resolve, reject, _this);
                        const v8455 = rv.then;
                        const v8456 = rv && v8455;
                        if (v8456) {
                            const v8457 = rv.then(resolve, reject);
                            v8457;
                        }
                    };
                    var p = new DexiePromise(v8458);
                    p._lib = true;
                    return p;
                }
            }
        };
        v8425._promise = v8459;
        const v8460 = Transaction.prototype;
        const v8465 = function () {
            const v8461 = this.parent;
            const v8462 = this.parent;
            const v8463 = v8462._root();
            let v8464;
            if (v8461) {
                v8464 = v8463;
            } else {
                v8464 = this;
            }
            return v8464;
        };
        v8460._root = v8465;
        const v8466 = Transaction.prototype;
        const v8503 = function (promiseLike) {
            var root = this._root();
            var promise = DexiePromise.resolve(promiseLike);
            const v8467 = root._waitingFor;
            if (v8467) {
                const v8468 = root._waitingFor;
                const v8469 = function () {
                    return promise;
                };
                const v8470 = v8468.then(v8469);
                root._waitingFor = v8470;
            } else {
                root._waitingFor = promise;
                root._waitingQueue = [];
                const v8471 = root.idbtrans;
                const v8472 = root.storeNames;
                const v8473 = v8472[0];
                var store = v8471.objectStore(v8473);
                const v8484 = function spin() {
                    const v8474 = root._spinCount;
                    const v8475 = ++v8474;
                    v8475;
                    const v8476 = root._waitingQueue;
                    let v8477 = v8476.length;
                    while (v8477) {
                        const v8478 = root._waitingQueue;
                        const v8479 = v8478.shift();
                        const v8480 = v8479();
                        v8480;
                        v8477 = v8476.length;
                    }
                    const v8481 = root._waitingFor;
                    if (v8481) {
                        const v8482 = -Infinity;
                        const v8483 = store.get(v8482);
                        v8483.onsuccess = spin;
                    }
                };
                const v8485 = v8484();
                v8485;
            }
            var currentWaitPromise = root._waitingFor;
            const v8501 = function (resolve, reject) {
                const v8490 = function (res) {
                    const v8486 = root._waitingQueue;
                    const v8487 = resolve.bind(null, res);
                    const v8488 = wrap(v8487);
                    const v8489 = v8486.push(v8488);
                    return v8489;
                };
                const v8495 = function (err) {
                    const v8491 = root._waitingQueue;
                    const v8492 = reject.bind(null, err);
                    const v8493 = wrap(v8492);
                    const v8494 = v8491.push(v8493);
                    return v8494;
                };
                const v8496 = promise.then(v8490, v8495);
                const v8499 = function () {
                    const v8497 = root._waitingFor;
                    const v8498 = v8497 === currentWaitPromise;
                    if (v8498) {
                        root._waitingFor = null;
                    }
                };
                const v8500 = v8496.finally(v8499);
                v8500;
            };
            const v8502 = new DexiePromise(v8501);
            return v8502;
        };
        v8466.waitFor = v8503;
        const v8504 = Transaction.prototype;
        const v8511 = function () {
            const v8505 = this.active;
            if (v8505) {
                this.active = false;
                const v8506 = this.idbtrans;
                if (v8506) {
                    const v8507 = this.idbtrans;
                    const v8508 = v8507.abort();
                    v8508;
                }
                const v8509 = new exceptions.Abort();
                const v8510 = this._reject(v8509);
                v8510;
            }
        };
        v8504.abort = v8511;
        const v8512 = Transaction.prototype;
        const v8526 = function (tableName) {
            const v8513 = this._memoizedTables;
            const v8514 = {};
            var memoizedTables = v8513 || (this._memoizedTables = v8514);
            const v8515 = hasOwn(memoizedTables, tableName);
            if (v8515) {
                const v8516 = memoizedTables[tableName];
                return v8516;
            }
            const v8517 = this.schema;
            var tableSchema = v8517[tableName];
            const v8518 = !tableSchema;
            if (v8518) {
                const v8519 = 'Table ' + tableName;
                const v8520 = v8519 + ' not part of transaction';
                const v8521 = new exceptions.NotFound(v8520);
                throw v8521;
            }
            const v8522 = this.db;
            var transactionBoundTable = new v8522.Table(tableName, tableSchema, this);
            const v8523 = this.db;
            const v8524 = v8523.core;
            const v8525 = v8524.table(tableName);
            transactionBoundTable.core = v8525;
            memoizedTables[tableName] = transactionBoundTable;
            return transactionBoundTable;
        };
        v8512.table = v8526;
        return Transaction;
    };
    var Transaction = v8527();
    const createTransactionConstructor = function (db) {
        const v8528 = Transaction.prototype;
        const v8551 = function Transaction(mode, storeNames, dbschema, chromeTransactionDurability, parent) {
            var _this = this;
            this.db = db;
            this.mode = mode;
            this.storeNames = storeNames;
            this.schema = dbschema;
            this.chromeTransactionDurability = chromeTransactionDurability;
            this.idbtrans = null;
            const v8529 = Events(this, 'complete', 'error', 'abort');
            this.on = v8529;
            this.parent = parent || null;
            this.active = true;
            this._reculock = 0;
            this._blockedFuncs = [];
            this._resolve = null;
            this._reject = null;
            this._waitingFor = null;
            this._waitingQueue = null;
            this._spinCount = 0;
            const v8530 = function (resolve, reject) {
                _this._resolve = resolve;
                _this._reject = reject;
            };
            this._completion = new DexiePromise(v8530);
            const v8531 = this._completion;
            const v8535 = function () {
                _this.active = false;
                const v8532 = _this.on;
                const v8533 = v8532.complete;
                const v8534 = v8533.fire();
                v8534;
            };
            const v8549 = function (e) {
                var wasActive = _this.active;
                _this.active = false;
                const v8536 = _this.on;
                const v8537 = v8536.error;
                const v8538 = v8537.fire(e);
                v8538;
                const v8539 = _this.parent;
                const v8540 = _this.parent;
                const v8541 = v8540._reject(e);
                const v8542 = _this.idbtrans;
                const v8543 = wasActive && v8542;
                const v8544 = _this.idbtrans;
                const v8545 = v8544.abort();
                const v8546 = v8543 && v8545;
                let v8547;
                if (v8539) {
                    v8547 = v8541;
                } else {
                    v8547 = v8546;
                }
                v8547;
                const v8548 = rejection(e);
                return v8548;
            };
            const v8550 = v8531.then(v8535, v8549);
            v8550;
        };
        const v8552 = makeClassConstructor(v8528, v8551);
        return v8552;
    };
    const createIndexSpec = function (name, keyPath, unique, multi, auto, compound, isPrimKey) {
        const v8553 = !isPrimKey;
        const v8554 = unique && v8553;
        let v8555;
        if (v8554) {
            v8555 = '&';
        } else {
            v8555 = '';
        }
        let v8556;
        if (multi) {
            v8556 = '*';
        } else {
            v8556 = '';
        }
        const v8557 = v8555 + v8556;
        let v8558;
        if (auto) {
            v8558 = '++';
        } else {
            v8558 = '';
        }
        const v8559 = v8557 + v8558;
        const v8560 = nameFromKeyPath(keyPath);
        const v8561 = v8559 + v8560;
        const v8562 = {};
        v8562.name = name;
        v8562.keyPath = keyPath;
        v8562.unique = unique;
        v8562.multi = multi;
        v8562.auto = auto;
        v8562.compound = compound;
        v8562.src = v8561;
        return v8562;
    };
    const nameFromKeyPath = function (keyPath) {
        const v8563 = typeof keyPath;
        const v8564 = v8563 === 'string';
        const v8565 = [];
        const v8566 = v8565.join;
        const v8567 = v8566.call(keyPath, '+');
        const v8568 = '[' + v8567;
        const v8569 = v8568 + ']';
        let v8570;
        if (keyPath) {
            v8570 = v8569;
        } else {
            v8570 = '';
        }
        let v8571;
        if (v8564) {
            v8571 = keyPath;
        } else {
            v8571 = v8570;
        }
        return v8571;
    };
    const createTableSchema = function (name, primKey, indexes) {
        const v8574 = function (index) {
            const v8572 = index.name;
            const v8573 = [
                v8572,
                index
            ];
            return v8573;
        };
        const v8575 = arrayToObject(indexes, v8574);
        const v8576 = {};
        v8576.name = name;
        v8576.primKey = primKey;
        v8576.indexes = indexes;
        v8576.mappedClass = null;
        v8576.idxByName = v8575;
        return v8576;
    };
    const safariMultiStoreFix = function (storeNames) {
        const v8577 = storeNames.length;
        const v8578 = v8577 === 1;
        const v8579 = storeNames[0];
        let v8580;
        if (v8578) {
            v8580 = v8579;
        } else {
            v8580 = storeNames;
        }
        return v8580;
    };
    var getMaxKey = function (IdbKeyRange) {
        try {
            const v8581 = [];
            const v8582 = [v8581];
            const v8583 = IdbKeyRange.only(v8582);
            v8583;
            const v8586 = function () {
                const v8584 = [];
                const v8585 = [v8584];
                return v8585;
            };
            getMaxKey = v8586;
            const v8587 = [];
            const v8588 = [v8587];
            return v8588;
        } catch (e) {
            const v8589 = function () {
                return maxString;
            };
            getMaxKey = v8589;
            return maxString;
        }
    };
    const getKeyExtractor = function (keyPath) {
        const v8590 = keyPath == null;
        if (v8590) {
            const v8591 = function () {
                return undefined;
            };
            return v8591;
        } else {
            const v8592 = typeof keyPath;
            const v8593 = v8592 === 'string';
            if (v8593) {
                const v8594 = getSinglePathKeyExtractor(keyPath);
                return v8594;
            } else {
                const v8596 = function (obj) {
                    const v8595 = getByKeyPath(obj, keyPath);
                    return v8595;
                };
                return v8596;
            }
        }
    };
    const getSinglePathKeyExtractor = function (keyPath) {
        var split = keyPath.split('.');
        const v8597 = split.length;
        const v8598 = v8597 === 1;
        if (v8598) {
            const v8600 = function (obj) {
                const v8599 = obj[keyPath];
                return v8599;
            };
            return v8600;
        } else {
            const v8602 = function (obj) {
                const v8601 = getByKeyPath(obj, keyPath);
                return v8601;
            };
            return v8602;
        }
    };
    const arrayify = function (arrayLike) {
        const v8603 = [];
        const v8604 = v8603.slice;
        const v8605 = v8604.call(arrayLike);
        return v8605;
    };
    var _id_counter = 0;
    const getKeyPathAlias = function (keyPath) {
        const v8606 = keyPath == null;
        const v8607 = typeof keyPath;
        const v8608 = v8607 === 'string';
        const v8609 = keyPath.join('+');
        const v8610 = '[' + v8609;
        const v8611 = v8610 + ']';
        let v8612;
        if (v8608) {
            v8612 = keyPath;
        } else {
            v8612 = v8611;
        }
        let v8613;
        if (v8606) {
            v8613 = ':id';
        } else {
            v8613 = v8612;
        }
        return v8613;
    };
    const createDBCore = function (db, IdbKeyRange, tmpTrans) {
        const extractSchema = function (db, trans) {
            const v8614 = db.objectStoreNames;
            var tables = arrayify(v8614);
            const v8615 = db.name;
            const v8617 = function (table) {
                const v8616 = trans.objectStore(table);
                return v8616;
            };
            const v8618 = tables.map(v8617);
            const v8638 = function (store) {
                var keyPath = store.keyPath;
                var autoIncrement = store.autoIncrement;
                var compound = isArray(keyPath);
                var outbound = keyPath == null;
                var indexByKeyPath = {};
                const v8619 = store.name;
                const v8620 = getKeyExtractor(keyPath);
                const v8621 = {};
                v8621.name = null;
                v8621.isPrimaryKey = true;
                v8621.outbound = outbound;
                v8621.compound = compound;
                v8621.keyPath = keyPath;
                v8621.autoIncrement = autoIncrement;
                v8621.unique = true;
                v8621.extractKey = v8620;
                const v8622 = store.indexNames;
                const v8623 = arrayify(v8622);
                const v8625 = function (indexName) {
                    const v8624 = store.index(indexName);
                    return v8624;
                };
                const v8626 = v8623.map(v8625);
                const v8629 = function (index) {
                    var name = index.name;
                    var unique = index.unique;
                    var multiEntry = index.multiEntry;
                    var keyPath = index.keyPath;
                    var compound = isArray(keyPath);
                    const v8627 = getKeyExtractor(keyPath);
                    var result = {};
                    result.name = name;
                    result.compound = compound;
                    result.keyPath = keyPath;
                    result.unique = unique;
                    result.multiEntry = multiEntry;
                    result.extractKey = v8627;
                    const v8628 = getKeyPathAlias(keyPath);
                    indexByKeyPath[v8628] = result;
                    return result;
                };
                const v8630 = v8626.map(v8629);
                const v8633 = function (keyPath) {
                    const v8631 = getKeyPathAlias(keyPath);
                    const v8632 = indexByKeyPath[v8631];
                    return v8632;
                };
                var result = {};
                result.name = v8619;
                result.primaryKey = v8621;
                result.indexes = v8630;
                result.getIndexByKeyPath = v8633;
                const v8634 = result.primaryKey;
                indexByKeyPath[':id'] = v8634;
                const v8635 = keyPath != null;
                if (v8635) {
                    const v8636 = getKeyPathAlias(keyPath);
                    const v8637 = result.primaryKey;
                    indexByKeyPath[v8636] = v8637;
                }
                return result;
            };
            const v8639 = v8618.map(v8638);
            const v8640 = {};
            v8640.name = v8615;
            v8640.tables = v8639;
            const v8641 = tables.length;
            const v8642 = v8641 > 0;
            const v8643 = tables[0];
            const v8644 = trans.objectStore(v8643);
            const v8645 = 'getAll' in v8644;
            const v8646 = v8642 && v8645;
            const v8647 = typeof navigator;
            const v8648 = v8647 !== 'undefined';
            const v8649 = navigator.userAgent;
            const v8650 = /Safari/.test(v8649);
            const v8651 = v8648 && v8650;
            const v8652 = navigator.userAgent;
            const v8653 = /(Chrome\/|Edge\/)/.test(v8652);
            const v8654 = !v8653;
            const v8655 = v8651 && v8654;
            const v8656 = [];
            const v8657 = navigator.userAgent;
            const v8658 = v8657.match(/Safari\/(\d*)/);
            const v8659 = v8656.concat(v8658);
            const v8660 = v8659[1];
            const v8661 = v8660 < 604;
            const v8662 = v8655 && v8661;
            const v8663 = !v8662;
            const v8664 = v8646 && v8663;
            const v8665 = {};
            v8665.schema = v8640;
            v8665.hasGetAll = v8664;
            return v8665;
        };
        const makeIDBKeyRange = function (range) {
            const v8666 = range.type;
            const v8667 = v8666 === 3;
            if (v8667) {
                return null;
            }
            const v8668 = range.type;
            const v8669 = v8668 === 4;
            if (v8669) {
                const v8670 = new Error('Cannot convert never type to IDBKeyRange');
                throw v8670;
            }
            var lower = range.lower;
            var upper = range.upper;
            var lowerOpen = range.lowerOpen;
            var upperOpen = range.upperOpen;
            let idbRange;
            const v8671 = lower === undefined;
            const v8672 = upper === undefined;
            const v8673 = !upperOpen;
            const v8674 = !v8673;
            const v8675 = IdbKeyRange.upperBound(upper, v8674);
            let v8676;
            if (v8672) {
                v8676 = null;
            } else {
                v8676 = v8675;
            }
            const v8677 = upper === undefined;
            const v8678 = !lowerOpen;
            const v8679 = !v8678;
            const v8680 = IdbKeyRange.lowerBound(lower, v8679);
            const v8681 = !lowerOpen;
            const v8682 = !v8681;
            const v8683 = !upperOpen;
            const v8684 = !v8683;
            const v8685 = IdbKeyRange.bound(lower, upper, v8682, v8684);
            let v8686;
            if (v8677) {
                v8686 = v8680;
            } else {
                v8686 = v8685;
            }
            if (v8671) {
                idbRange = v8676;
            } else {
                idbRange = v8686;
            }
            return idbRange;
        };
        const createDbCoreTable = function (tableSchema) {
            var tableName = tableSchema.name;
            const mutate = function (_a) {
                var trans = _a.trans;
                var type = _a.type;
                var keys = _a.keys;
                var values = _a.values;
                var range = _a.range;
                const v8760 = function (resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    const v8687 = store.keyPath;
                    var outbound = v8687 == null;
                    const v8688 = type === 'put';
                    const v8689 = type === 'add';
                    var isAddOrPut = v8688 || v8689;
                    const v8690 = !isAddOrPut;
                    const v8691 = type !== 'delete';
                    const v8692 = v8690 && v8691;
                    const v8693 = type !== 'deleteRange';
                    const v8694 = v8692 && v8693;
                    if (v8694) {
                        const v8695 = 'Invalid operation type: ' + type;
                        const v8696 = new Error(v8695);
                        throw v8696;
                    }
                    const v8697 = keys || values;
                    const v8698 = { length: 1 };
                    const v8699 = v8697 || v8698;
                    var length = v8699.length;
                    const v8700 = keys && values;
                    const v8701 = keys.length;
                    const v8702 = values.length;
                    const v8703 = v8701 !== v8702;
                    const v8704 = v8700 && v8703;
                    if (v8704) {
                        const v8705 = new Error('Given keys array must have same length as given values array.');
                        throw v8705;
                    }
                    const v8706 = length === 0;
                    if (v8706) {
                        const v8707 = {};
                        const v8708 = [];
                        const v8709 = {
                            numFailures: 0,
                            failures: v8707,
                            results: v8708,
                            lastResult: undefined
                        };
                        const v8710 = resolve(v8709);
                        return v8710;
                    }
                    var req;
                    var reqs = [];
                    var failures = [];
                    var numFailures = 0;
                    var errorHandler = function (event) {
                        const v8711 = ++numFailures;
                        v8711;
                        const v8712 = preventDefault(event);
                        v8712;
                    };
                    const v8713 = type === 'deleteRange';
                    if (v8713) {
                        const v8714 = range.type;
                        const v8715 = v8714 === 4;
                        if (v8715) {
                            const v8716 = [];
                            const v8717 = {
                                numFailures: numFailures,
                                failures: failures,
                                results: v8716,
                                lastResult: undefined
                            };
                            const v8718 = resolve(v8717);
                            return v8718;
                        }
                        const v8719 = range.type;
                        const v8720 = v8719 === 3;
                        if (v8720) {
                            const v8721 = reqs.push(req = store.clear());
                            v8721;
                        } else {
                            const v8722 = makeIDBKeyRange(range);
                            const v8723 = reqs.push(req = store.delete(v8722));
                            v8723;
                        }
                    } else {
                        let _a;
                        const v8724 = [
                            values,
                            keys
                        ];
                        const v8725 = [
                            values,
                            null
                        ];
                        let v8726;
                        if (outbound) {
                            v8726 = v8724;
                        } else {
                            v8726 = v8725;
                        }
                        const v8727 = [
                            keys,
                            null
                        ];
                        if (isAddOrPut) {
                            _a = v8726;
                        } else {
                            _a = v8727;
                        }
                        var args1 = _a[0];
                        var args2 = _a[1];
                        if (isAddOrPut) {
                            var i = 0;
                            let v8728 = i < length;
                            while (v8728) {
                                const v8730 = args2[i];
                                const v8731 = v8730 !== undefined;
                                const v8732 = args2 && v8731;
                                const v8733 = args1[i];
                                const v8734 = args2[i];
                                const v8735 = store[type](v8733, v8734);
                                const v8736 = args1[i];
                                const v8737 = store[type](v8736);
                                if (v8732) {
                                    req = v8735;
                                } else {
                                    req = v8737;
                                }
                                const v8738 = reqs.push(req);
                                v8738;
                                req.onerror = errorHandler;
                                const v8729 = ++i;
                                v8728 = i < length;
                            }
                        } else {
                            var i = 0;
                            let v8739 = i < length;
                            while (v8739) {
                                const v8741 = args1[i];
                                const v8742 = reqs.push(req = store[type](v8741));
                                v8742;
                                req.onerror = errorHandler;
                                const v8740 = ++i;
                                v8739 = i < length;
                            }
                        }
                    }
                    var done = function (event) {
                        const v8743 = event.target;
                        var lastResult = v8743.result;
                        const v8748 = function (req, i) {
                            const v8744 = req.error;
                            const v8745 = v8744 != null;
                            const v8746 = req.error;
                            const v8747 = v8745 && (failures[i] = v8746);
                            return v8747;
                        };
                        const v8749 = reqs.forEach(v8748);
                        v8749;
                        const v8750 = type === 'delete';
                        const v8752 = function (req) {
                            const v8751 = req.result;
                            return v8751;
                        };
                        const v8753 = reqs.map(v8752);
                        let v8754;
                        if (v8750) {
                            v8754 = keys;
                        } else {
                            v8754 = v8753;
                        }
                        const v8755 = {
                            numFailures: numFailures,
                            failures: failures,
                            results: v8754,
                            lastResult: lastResult
                        };
                        const v8756 = resolve(v8755);
                        v8756;
                    };
                    const v8759 = function (event) {
                        const v8757 = errorHandler(event);
                        v8757;
                        const v8758 = done(event);
                        v8758;
                    };
                    req.onerror = v8759;
                    req.onsuccess = done;
                };
                const v8761 = new Promise(v8760);
                return v8761;
            };
            const openCursor = function (_a) {
                var trans = _a.trans;
                var values = _a.values;
                var query = _a.query;
                var reverse = _a.reverse;
                var unique = _a.unique;
                const v8810 = function (resolve, reject) {
                    resolve = wrap(resolve);
                    var index = query.index;
                    var range = query.range;
                    var store = trans.objectStore(tableName);
                    let source;
                    const v8762 = index.isPrimaryKey;
                    const v8763 = index.name;
                    const v8764 = store.index(v8763);
                    if (v8762) {
                        source = store;
                    } else {
                        source = v8764;
                    }
                    let direction;
                    let v8765;
                    if (unique) {
                        v8765 = 'prevunique';
                    } else {
                        v8765 = 'prev';
                    }
                    let v8766;
                    if (unique) {
                        v8766 = 'nextunique';
                    } else {
                        v8766 = 'next';
                    }
                    if (reverse) {
                        direction = v8765;
                    } else {
                        direction = v8766;
                    }
                    let req;
                    const v8767 = 'openKeyCursor' in source;
                    const v8768 = !v8767;
                    const v8769 = values || v8768;
                    const v8770 = makeIDBKeyRange(range);
                    const v8771 = source.openCursor(v8770, direction);
                    const v8772 = makeIDBKeyRange(range);
                    const v8773 = source.openKeyCursor(v8772, direction);
                    if (v8769) {
                        req = v8771;
                    } else {
                        req = v8773;
                    }
                    const v8774 = eventRejectHandler(reject);
                    req.onerror = v8774;
                    const v8808 = function (ev) {
                        var cursor = req.result;
                        const v8775 = !cursor;
                        if (v8775) {
                            const v8776 = resolve(null);
                            v8776;
                            return;
                        }
                        const v8777 = ++_id_counter;
                        cursor.___id = v8777;
                        cursor.done = false;
                        const v8778 = cursor.continue;
                        var _cursorContinue = v8778.bind(cursor);
                        var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
                        if (_cursorContinuePrimaryKey) {
                            _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);
                        }
                        const v8779 = cursor.advance;
                        var _cursorAdvance = v8779.bind(cursor);
                        var doThrowCursorIsNotStarted = function () {
                            const v8780 = new Error('Cursor not started');
                            throw v8780;
                        };
                        var doThrowCursorIsStopped = function () {
                            const v8781 = new Error('Cursor not stopped');
                            throw v8781;
                        };
                        cursor.trans = trans;
                        cursor.advance = doThrowCursorIsNotStarted;
                        cursor.continuePrimaryKey = cursor.advance;
                        cursor.continue = cursor.continuePrimaryKey;
                        cursor.stop = cursor.continue;
                        const v8782 = wrap(reject);
                        cursor.fail = v8782;
                        const v8791 = function () {
                            var _this = this;
                            var gotOne = 1;
                            const v8787 = function () {
                                const v8783 = gotOne--;
                                const v8784 = _this.continue();
                                const v8785 = _this.stop();
                                let v8786;
                                if (v8783) {
                                    v8786 = v8784;
                                } else {
                                    v8786 = v8785;
                                }
                                return v8786;
                            };
                            const v8788 = this.start(v8787);
                            const v8789 = function () {
                                return _this;
                            };
                            const v8790 = v8788.then(v8789);
                            return v8790;
                        };
                        cursor.next = v8791;
                        const v8806 = function (callback) {
                            const v8795 = function (resolveIteration, rejectIteration) {
                                resolveIteration = wrap(resolveIteration);
                                const v8792 = eventRejectHandler(rejectIteration);
                                req.onerror = v8792;
                                cursor.fail = rejectIteration;
                                const v8794 = function (value) {
                                    cursor.advance = doThrowCursorIsStopped;
                                    cursor.continuePrimaryKey = cursor.advance;
                                    cursor.continue = cursor.continuePrimaryKey;
                                    cursor.stop = cursor.continue;
                                    const v8793 = resolveIteration(value);
                                    v8793;
                                };
                                cursor.stop = v8794;
                            };
                            var iterationPromise = new Promise(v8795);
                            var guardedCallback = function () {
                                const v8796 = req.result;
                                if (v8796) {
                                    try {
                                        const v8797 = callback();
                                        v8797;
                                    } catch (err) {
                                        const v8798 = cursor.fail(err);
                                        v8798;
                                    }
                                } else {
                                    cursor.done = true;
                                    const v8800 = function () {
                                        const v8799 = new Error('Cursor behind last entry');
                                        throw v8799;
                                    };
                                    cursor.start = v8800;
                                    const v8801 = cursor.stop();
                                    v8801;
                                }
                            };
                            const v8803 = function (ev) {
                                req.onsuccess = guardedCallback;
                                const v8802 = guardedCallback();
                                v8802;
                            };
                            const v8804 = wrap(v8803);
                            req.onsuccess = v8804;
                            cursor.continue = _cursorContinue;
                            cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                            cursor.advance = _cursorAdvance;
                            const v8805 = guardedCallback();
                            v8805;
                            return iterationPromise;
                        };
                        cursor.start = v8806;
                        const v8807 = resolve(cursor);
                        v8807;
                    };
                    const v8809 = wrap(v8808, reject);
                    req.onsuccess = v8809;
                };
                const v8811 = new Promise(v8810);
                return v8811;
            };
            const query = function (hasGetAll) {
                const v8849 = function (request) {
                    const v8847 = function (resolve, reject) {
                        resolve = wrap(resolve);
                        var trans = request.trans;
                        var values = request.values;
                        var limit = request.limit;
                        var query = request.query;
                        let nonInfinitLimit;
                        const v8812 = limit === Infinity;
                        if (v8812) {
                            nonInfinitLimit = undefined;
                        } else {
                            nonInfinitLimit = limit;
                        }
                        var index = query.index;
                        var range = query.range;
                        var store = trans.objectStore(tableName);
                        let source;
                        const v8813 = index.isPrimaryKey;
                        const v8814 = index.name;
                        const v8815 = store.index(v8814);
                        if (v8813) {
                            source = store;
                        } else {
                            source = v8815;
                        }
                        var idbKeyRange = makeIDBKeyRange(range);
                        const v8816 = limit === 0;
                        if (v8816) {
                            const v8817 = [];
                            const v8818 = { result: v8817 };
                            const v8819 = resolve(v8818);
                            return v8819;
                        }
                        if (hasGetAll) {
                            let req;
                            const v8820 = source.getAll(idbKeyRange, nonInfinitLimit);
                            const v8821 = source.getAllKeys(idbKeyRange, nonInfinitLimit);
                            if (values) {
                                req = v8820;
                            } else {
                                req = v8821;
                            }
                            const v8826 = function (event) {
                                const v8822 = event.target;
                                const v8823 = v8822.result;
                                const v8824 = { result: v8823 };
                                const v8825 = resolve(v8824);
                                return v8825;
                            };
                            req.onsuccess = v8826;
                            const v8827 = eventRejectHandler(reject);
                            req.onerror = v8827;
                        } else {
                            var count_1 = 0;
                            let req_1;
                            const v8828 = 'openKeyCursor' in source;
                            const v8829 = !v8828;
                            const v8830 = values || v8829;
                            const v8831 = source.openCursor(idbKeyRange);
                            const v8832 = source.openKeyCursor(idbKeyRange);
                            if (v8830) {
                                req_1 = v8831;
                            } else {
                                req_1 = v8832;
                            }
                            var result_1 = [];
                            const v8845 = function (event) {
                                var cursor = req_1.result;
                                const v8833 = !cursor;
                                if (v8833) {
                                    const v8834 = { result: result_1 };
                                    const v8835 = resolve(v8834);
                                    return v8835;
                                }
                                const v8836 = cursor.value;
                                const v8837 = cursor.primaryKey;
                                let v8838;
                                if (values) {
                                    v8838 = v8836;
                                } else {
                                    v8838 = v8837;
                                }
                                const v8839 = result_1.push(v8838);
                                v8839;
                                const v8840 = ++count_1;
                                const v8841 = v8840 === limit;
                                if (v8841) {
                                    const v8842 = { result: result_1 };
                                    const v8843 = resolve(v8842);
                                    return v8843;
                                }
                                const v8844 = cursor.continue();
                                v8844;
                            };
                            req_1.onsuccess = v8845;
                            const v8846 = eventRejectHandler(reject);
                            req_1.onerror = v8846;
                        }
                    };
                    const v8848 = new Promise(v8847);
                    return v8848;
                };
                return v8849;
            };
            const v8865 = function (_a) {
                var trans = _a.trans;
                var keys = _a.keys;
                const v8863 = function (resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var length = keys.length;
                    var result = new Array(length);
                    var keyCount = 0;
                    var callbackCount = 0;
                    var req;
                    var successHandler = function (event) {
                        var req = event.target;
                        const v8850 = req._pos;
                        const v8851 = req.result;
                        const v8852 = (result[v8850] = v8851) != null;
                        if (v8852) {
                            ;
                        }
                        const v8853 = ++callbackCount;
                        const v8854 = v8853 === keyCount;
                        if (v8854) {
                            const v8855 = resolve(result);
                            v8855;
                        }
                    };
                    var errorHandler = eventRejectHandler(reject);
                    var i = 0;
                    let v8856 = i < length;
                    while (v8856) {
                        var key = keys[i];
                        const v8858 = key != null;
                        if (v8858) {
                            const v8859 = keys[i];
                            req = store.get(v8859);
                            req._pos = i;
                            req.onsuccess = successHandler;
                            req.onerror = errorHandler;
                            const v8860 = ++keyCount;
                            v8860;
                        }
                        const v8857 = ++i;
                        v8856 = i < length;
                    }
                    const v8861 = keyCount === 0;
                    if (v8861) {
                        const v8862 = resolve(result);
                        v8862;
                    }
                };
                const v8864 = new Promise(v8863);
                return v8864;
            };
            const v8873 = function (_a) {
                var trans = _a.trans;
                var key = _a.key;
                const v8871 = function (resolve, reject) {
                    resolve = wrap(resolve);
                    var store = trans.objectStore(tableName);
                    var req = store.get(key);
                    const v8869 = function (event) {
                        const v8866 = event.target;
                        const v8867 = v8866.result;
                        const v8868 = resolve(v8867);
                        return v8868;
                    };
                    req.onsuccess = v8869;
                    const v8870 = eventRejectHandler(reject);
                    req.onerror = v8870;
                };
                const v8872 = new Promise(v8871);
                return v8872;
            };
            const v8874 = query(hasGetAll);
            const v8888 = function (_a) {
                var query = _a.query;
                var trans = _a.trans;
                var index = query.index;
                var range = query.range;
                const v8886 = function (resolve, reject) {
                    var store = trans.objectStore(tableName);
                    let source;
                    const v8875 = index.isPrimaryKey;
                    const v8876 = index.name;
                    const v8877 = store.index(v8876);
                    if (v8875) {
                        source = store;
                    } else {
                        source = v8877;
                    }
                    var idbKeyRange = makeIDBKeyRange(range);
                    let req;
                    const v8878 = source.count(idbKeyRange);
                    const v8879 = source.count();
                    if (idbKeyRange) {
                        req = v8878;
                    } else {
                        req = v8879;
                    }
                    const v8883 = function (ev) {
                        const v8880 = ev.target;
                        const v8881 = v8880.result;
                        const v8882 = resolve(v8881);
                        return v8882;
                    };
                    const v8884 = wrap(v8883);
                    req.onsuccess = v8884;
                    const v8885 = eventRejectHandler(reject);
                    req.onerror = v8885;
                };
                const v8887 = new Promise(v8886);
                return v8887;
            };
            const v8889 = {};
            v8889.name = tableName;
            v8889.schema = tableSchema;
            v8889.mutate = mutate;
            v8889.getMany = v8865;
            v8889.get = v8873;
            v8889.query = v8874;
            v8889.openCursor = openCursor;
            v8889.count = v8888;
            return v8889;
        };
        var _a = extractSchema(db, tmpTrans);
        var schema = _a.schema;
        var hasGetAll = _a.hasGetAll;
        const v8890 = schema.tables;
        const v8892 = function (tableSchema) {
            const v8891 = createDbCoreTable(tableSchema);
            return v8891;
        };
        var tables = v8890.map(v8892);
        var tableMap = {};
        const v8894 = function (table) {
            const v8893 = table.name;
            return tableMap[v8893] = table;
        };
        const v8895 = tables.forEach(v8894);
        v8895;
        const v8896 = db.transaction;
        const v8897 = v8896.bind(db);
        const v8903 = function (name) {
            var result = tableMap[name];
            const v8898 = !result;
            if (v8898) {
                const v8899 = 'Table \'' + name;
                const v8900 = v8899 + '\' not found';
                const v8901 = new Error(v8900);
                throw v8901;
            }
            const v8902 = tableMap[name];
            return v8902;
        };
        const v8904 = -Infinity;
        const v8905 = getMaxKey(IdbKeyRange);
        const v8906 = {};
        v8906.stack = 'dbcore';
        v8906.transaction = v8897;
        v8906.table = v8903;
        v8906.MIN_KEY = v8904;
        v8906.MAX_KEY = v8905;
        v8906.schema = schema;
        return v8906;
    };
    const createMiddlewareStack = function (stackImpl, middlewares) {
        const v8911 = function (down, _a) {
            var create = _a.create;
            const v8907 = {};
            const v8908 = __assign(v8907, down);
            const v8909 = create(down);
            const v8910 = __assign(v8908, v8909);
            return v8910;
        };
        const v8912 = middlewares.reduce(v8911, stackImpl);
        return v8912;
    };
    const createMiddlewareStacks = function (middlewares, idbdb, _a, tmpTrans) {
        var IDBKeyRange = _a.IDBKeyRange;
        const v8913 = _a.indexedDB;
        v8913;
        const v8914 = createDBCore(idbdb, IDBKeyRange, tmpTrans);
        const v8915 = middlewares.dbcore;
        var dbcore = createMiddlewareStack(v8914, v8915);
        const v8916 = {};
        v8916.dbcore = dbcore;
        return v8916;
    };
    const generateMiddlewareStacks = function (_a, tmpTrans) {
        var db = _a._novip;
        var idbdb = tmpTrans.db;
        const v8917 = db._middlewares;
        const v8918 = db._deps;
        var stacks = createMiddlewareStacks(v8917, idbdb, v8918, tmpTrans);
        const v8919 = stacks.dbcore;
        db.core = v8919;
        const v8920 = db.tables;
        const v8935 = function (table) {
            var tableName = table.name;
            const v8921 = db.core;
            const v8922 = v8921.schema;
            const v8923 = v8922.tables;
            const v8926 = function (tbl) {
                const v8924 = tbl.name;
                const v8925 = v8924 === tableName;
                return v8925;
            };
            const v8927 = v8923.some(v8926);
            if (v8927) {
                const v8928 = db.core;
                const v8929 = v8928.table(tableName);
                table.core = v8929;
                const v8930 = db[tableName];
                const v8931 = db.Table;
                const v8932 = v8930 instanceof v8931;
                if (v8932) {
                    const v8933 = db[tableName];
                    const v8934 = table.core;
                    v8933.core = v8934;
                }
            }
        };
        const v8936 = v8920.forEach(v8935);
        v8936;
    };
    const setApiOnPlace = function (_a, objs, tableNames, dbschema) {
        var db = _a._novip;
        const v8958 = function (tableName) {
            var schema = dbschema[tableName];
            const v8956 = function (obj) {
                var propDesc = getPropertyDescriptor(obj, tableName);
                const v8937 = !propDesc;
                const v8938 = 'value' in propDesc;
                const v8939 = propDesc.value;
                const v8940 = v8939 === undefined;
                const v8941 = v8938 && v8940;
                const v8942 = v8937 || v8941;
                if (v8942) {
                    const v8943 = db.Transaction;
                    const v8944 = v8943.prototype;
                    const v8945 = obj === v8944;
                    const v8946 = db.Transaction;
                    const v8947 = obj instanceof v8946;
                    const v8948 = v8945 || v8947;
                    if (v8948) {
                        const v8950 = function () {
                            const v8949 = this.table(tableName);
                            return v8949;
                        };
                        const v8953 = function (value) {
                            const v8951 = {
                                value: value,
                                writable: true,
                                configurable: true,
                                enumerable: true
                            };
                            const v8952 = defineProperty(this, tableName, v8951);
                            v8952;
                        };
                        const v8954 = {
                            get: v8950,
                            set: v8953
                        };
                        const v8955 = setProp(obj, tableName, v8954);
                        v8955;
                    } else {
                        obj[tableName] = new db.Table(tableName, schema);
                    }
                }
            };
            const v8957 = objs.forEach(v8956);
            v8957;
        };
        const v8959 = tableNames.forEach(v8958);
        v8959;
    };
    const removeTablesApi = function (_a, objs) {
        var db = _a._novip;
        const v8965 = function (obj) {
            let key;
            for (key in obj) {
                const v8960 = obj[key];
                const v8961 = db.Table;
                const v8962 = v8960 instanceof v8961;
                if (v8962) {
                    const v8963 = obj[key];
                    const v8964 = delete v8963;
                    v8964;
                }
            }
        };
        const v8966 = objs.forEach(v8965);
        v8966;
    };
    const lowerVersionFirst = function (a, b) {
        const v8967 = a._cfg;
        const v8968 = v8967.version;
        const v8969 = b._cfg;
        const v8970 = v8969.version;
        const v8971 = v8968 - v8970;
        return v8971;
    };
    const runUpgraders = function (db, oldVersion, idbUpgradeTrans, reject) {
        var globalSchema = db._dbSchema;
        const v8972 = db._storeNames;
        var trans = db._createTransaction('readwrite', v8972, globalSchema);
        const v8973 = trans.create(idbUpgradeTrans);
        v8973;
        const v8974 = trans._completion;
        const v8975 = v8974.catch(reject);
        v8975;
        const v8976 = trans._reject;
        var rejectTransaction = v8976.bind(trans);
        const v8977 = PSD.transless;
        var transless = v8977 || PSD;
        const v8996 = function () {
            PSD.trans = trans;
            PSD.transless = transless;
            const v8978 = oldVersion === 0;
            if (v8978) {
                const v8979 = keys(globalSchema);
                const v8985 = function (tableName) {
                    const v8980 = globalSchema[tableName];
                    const v8981 = v8980.primKey;
                    const v8982 = globalSchema[tableName];
                    const v8983 = v8982.indexes;
                    const v8984 = createTable(idbUpgradeTrans, tableName, v8981, v8983);
                    v8984;
                };
                const v8986 = v8979.forEach(v8985);
                v8986;
                const v8987 = generateMiddlewareStacks(db, idbUpgradeTrans);
                v8987;
                const v8991 = function () {
                    const v8988 = db.on;
                    const v8989 = v8988.populate;
                    const v8990 = v8989.fire(trans);
                    return v8990;
                };
                const v8992 = DexiePromise.follow(v8991);
                const v8993 = v8992.catch(rejectTransaction);
                v8993;
            } else {
                const v8994 = updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans);
                const v8995 = v8994.catch(rejectTransaction);
                v8995;
            }
        };
        const v8997 = newScope(v8996);
        v8997;
    };
    const updateTablesAndIndexes = function (_a, oldVersion, trans, idbUpgradeTrans) {
        var db = _a._novip;
        var queue = [];
        var versions = db._versions;
        const v8998 = db.idbdb;
        const v8999 = buildGlobalSchema(db, v8998, idbUpgradeTrans);
        db._dbSchema = v8999;
        var globalSchema = db._dbSchema;
        var anyContentUpgraderHasRun = false;
        const v9003 = function (v) {
            const v9000 = v._cfg;
            const v9001 = v9000.version;
            const v9002 = v9001 >= oldVersion;
            return v9002;
        };
        var versToRun = versions.filter(v9003);
        const v9087 = function (version) {
            const v9067 = function () {
                var oldSchema = globalSchema;
                const v9004 = version._cfg;
                var newSchema = v9004.dbschema;
                const v9005 = adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
                v9005;
                const v9006 = adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
                v9006;
                db._dbSchema = newSchema;
                globalSchema = db._dbSchema;
                var diff = getSchemaDiff(oldSchema, newSchema);
                const v9007 = diff.add;
                const v9014 = function (tuple) {
                    const v9008 = tuple[0];
                    const v9009 = tuple[1];
                    const v9010 = v9009.primKey;
                    const v9011 = tuple[1];
                    const v9012 = v9011.indexes;
                    const v9013 = createTable(idbUpgradeTrans, v9008, v9010, v9012);
                    v9013;
                };
                const v9015 = v9007.forEach(v9014);
                v9015;
                const v9016 = diff.change;
                const v9034 = function (change) {
                    const v9017 = change.recreate;
                    if (v9017) {
                        const v9018 = new exceptions.Upgrade('Not yet support for changing primary key');
                        throw v9018;
                    } else {
                        const v9019 = change.name;
                        var store_1 = idbUpgradeTrans.objectStore(v9019);
                        const v9020 = change.add;
                        const v9022 = function (idx) {
                            const v9021 = addIndex(store_1, idx);
                            return v9021;
                        };
                        const v9023 = v9020.forEach(v9022);
                        v9023;
                        const v9024 = change.change;
                        const v9028 = function (idx) {
                            const v9025 = idx.name;
                            const v9026 = store_1.deleteIndex(v9025);
                            v9026;
                            const v9027 = addIndex(store_1, idx);
                            v9027;
                        };
                        const v9029 = v9024.forEach(v9028);
                        v9029;
                        const v9030 = change.del;
                        const v9032 = function (idxName) {
                            const v9031 = store_1.deleteIndex(idxName);
                            return v9031;
                        };
                        const v9033 = v9030.forEach(v9032);
                        v9033;
                    }
                };
                const v9035 = v9016.forEach(v9034);
                v9035;
                const v9036 = version._cfg;
                var contentUpgrade = v9036.contentUpgrade;
                const v9037 = version._cfg;
                const v9038 = v9037.version;
                const v9039 = v9038 > oldVersion;
                const v9040 = contentUpgrade && v9039;
                if (v9040) {
                    const v9041 = generateMiddlewareStacks(db, idbUpgradeTrans);
                    v9041;
                    const v9042 = {};
                    trans._memoizedTables = v9042;
                    anyContentUpgraderHasRun = true;
                    var upgradeSchema_1 = shallowClone(newSchema);
                    const v9043 = diff.del;
                    const v9045 = function (table) {
                        const v9044 = oldSchema[table];
                        upgradeSchema_1[table] = v9044;
                    };
                    const v9046 = v9043.forEach(v9045);
                    v9046;
                    const v9047 = db.Transaction;
                    const v9048 = v9047.prototype;
                    const v9049 = [v9048];
                    const v9050 = removeTablesApi(db, v9049);
                    v9050;
                    const v9051 = db.Transaction;
                    const v9052 = v9051.prototype;
                    const v9053 = [v9052];
                    const v9054 = keys(upgradeSchema_1);
                    const v9055 = setApiOnPlace(db, v9053, v9054, upgradeSchema_1);
                    v9055;
                    trans.schema = upgradeSchema_1;
                    var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);
                    if (contentUpgradeIsAsync_1) {
                        const v9056 = incrementExpectedAwaits();
                        v9056;
                    }
                    var returnValue_1;
                    const v9058 = function () {
                        returnValue_1 = contentUpgrade(trans);
                        if (returnValue_1) {
                            if (contentUpgradeIsAsync_1) {
                                var decrementor = decrementExpectedAwaits.bind(null, null);
                                const v9057 = returnValue_1.then(decrementor, decrementor);
                                v9057;
                            }
                        }
                    };
                    var promiseFollowed = DexiePromise.follow(v9058);
                    const v9059 = returnValue_1.then;
                    const v9060 = typeof v9059;
                    const v9061 = v9060 === 'function';
                    const v9062 = returnValue_1 && v9061;
                    const v9063 = DexiePromise.resolve(returnValue_1);
                    const v9064 = function () {
                        return returnValue_1;
                    };
                    const v9065 = promiseFollowed.then(v9064);
                    let v9066;
                    if (v9062) {
                        v9066 = v9063;
                    } else {
                        v9066 = v9065;
                    }
                    return v9066;
                }
            };
            const v9068 = queue.push(v9067);
            v9068;
            const v9085 = function (idbtrans) {
                const v9069 = !anyContentUpgraderHasRun;
                const v9070 = !hasIEDeleteObjectStoreBug;
                const v9071 = v9069 || v9070;
                if (v9071) {
                    const v9072 = version._cfg;
                    var newSchema = v9072.dbschema;
                    const v9073 = deleteRemovedTables(newSchema, idbtrans);
                    v9073;
                }
                const v9074 = db.Transaction;
                const v9075 = v9074.prototype;
                const v9076 = [v9075];
                const v9077 = removeTablesApi(db, v9076);
                v9077;
                const v9078 = db.Transaction;
                const v9079 = v9078.prototype;
                const v9080 = [v9079];
                const v9081 = db._storeNames;
                const v9082 = db._dbSchema;
                const v9083 = setApiOnPlace(db, v9080, v9081, v9082);
                v9083;
                const v9084 = db._dbSchema;
                trans.schema = v9084;
            };
            const v9086 = queue.push(v9085);
            v9086;
        };
        const v9088 = versToRun.forEach(v9087);
        v9088;
        const runQueue = function () {
            const v9089 = queue.length;
            const v9090 = queue.shift();
            const v9091 = trans.idbtrans;
            const v9092 = v9090(v9091);
            const v9093 = DexiePromise.resolve(v9092);
            const v9094 = v9093.then(runQueue);
            const v9095 = DexiePromise.resolve();
            let v9096;
            if (v9089) {
                v9096 = v9094;
            } else {
                v9096 = v9095;
            }
            return v9096;
        };
        const v9097 = runQueue();
        const v9099 = function () {
            const v9098 = createMissingTables(globalSchema, idbUpgradeTrans);
            v9098;
        };
        const v9100 = v9097.then(v9099);
        return v9100;
    };
    const getSchemaDiff = function (oldSchema, newSchema) {
        const v9101 = [];
        const v9102 = [];
        const v9103 = [];
        var diff = {};
        diff.del = v9101;
        diff.add = v9102;
        diff.change = v9103;
        var table;
        for (table in oldSchema) {
            const v9104 = newSchema[table];
            const v9105 = !v9104;
            if (v9105) {
                const v9106 = diff.del;
                const v9107 = v9106.push(table);
                v9107;
            }
        }
        for (table in newSchema) {
            var oldDef = oldSchema[table];
            var newDef = newSchema[table];
            const v9108 = !oldDef;
            if (v9108) {
                const v9109 = diff.add;
                const v9110 = [
                    table,
                    newDef
                ];
                const v9111 = v9109.push(v9110);
                v9111;
            } else {
                const v9112 = [];
                const v9113 = [];
                const v9114 = [];
                var change = {};
                change.name = table;
                change.def = newDef;
                change.recreate = false;
                change.del = v9112;
                change.add = v9113;
                change.change = v9114;
                const v9115 = oldDef.primKey;
                const v9116 = v9115.keyPath;
                const v9117 = v9116 || '';
                const v9118 = '' + v9117;
                const v9119 = newDef.primKey;
                const v9120 = v9119.keyPath;
                const v9121 = v9120 || '';
                const v9122 = '' + v9121;
                const v9123 = v9118 !== v9122;
                const v9124 = oldDef.primKey;
                const v9125 = v9124.auto;
                const v9126 = newDef.primKey;
                const v9127 = v9126.auto;
                const v9128 = v9125 !== v9127;
                const v9129 = !isIEOrEdge;
                const v9130 = v9128 && v9129;
                const v9131 = v9123 || v9130;
                if (v9131) {
                    change.recreate = true;
                    const v9132 = diff.change;
                    const v9133 = v9132.push(change);
                    v9133;
                } else {
                    var oldIndexes = oldDef.idxByName;
                    var newIndexes = newDef.idxByName;
                    const v9134 = void 0;
                    var idxName = v9134;
                    for (idxName in oldIndexes) {
                        const v9135 = newIndexes[idxName];
                        const v9136 = !v9135;
                        if (v9136) {
                            const v9137 = change.del;
                            const v9138 = v9137.push(idxName);
                            v9138;
                        }
                    }
                    for (idxName in newIndexes) {
                        var oldIdx = oldIndexes[idxName];
                        var newIdx = newIndexes[idxName];
                        const v9139 = !oldIdx;
                        if (v9139) {
                            const v9140 = change.add;
                            const v9141 = v9140.push(newIdx);
                            v9141;
                        } else {
                            const v9142 = oldIdx.src;
                            const v9143 = newIdx.src;
                            const v9144 = v9142 !== v9143;
                            if (v9144) {
                                const v9145 = change.change;
                                const v9146 = v9145.push(newIdx);
                                v9146;
                            }
                        }
                    }
                    const v9147 = change.del;
                    const v9148 = v9147.length;
                    const v9149 = v9148 > 0;
                    const v9150 = change.add;
                    const v9151 = v9150.length;
                    const v9152 = v9151 > 0;
                    const v9153 = v9149 || v9152;
                    const v9154 = change.change;
                    const v9155 = v9154.length;
                    const v9156 = v9155 > 0;
                    const v9157 = v9153 || v9156;
                    if (v9157) {
                        const v9158 = diff.change;
                        const v9159 = v9158.push(change);
                        v9159;
                    }
                }
            }
        }
        return diff;
    };
    const createTable = function (idbtrans, tableName, primKey, indexes) {
        const v9160 = idbtrans.db;
        const v9161 = primKey.keyPath;
        const v9162 = primKey.keyPath;
        const v9163 = primKey.auto;
        const v9164 = {
            keyPath: v9162,
            autoIncrement: v9163
        };
        const v9165 = primKey.auto;
        const v9166 = { autoIncrement: v9165 };
        let v9167;
        if (v9161) {
            v9167 = v9164;
        } else {
            v9167 = v9166;
        }
        var store = v9160.createObjectStore(tableName, v9167);
        const v9169 = function (idx) {
            const v9168 = addIndex(store, idx);
            return v9168;
        };
        const v9170 = indexes.forEach(v9169);
        v9170;
        return store;
    };
    const createMissingTables = function (newSchema, idbtrans) {
        const v9171 = keys(newSchema);
        const v9181 = function (tableName) {
            const v9172 = idbtrans.db;
            const v9173 = v9172.objectStoreNames;
            const v9174 = v9173.contains(tableName);
            const v9175 = !v9174;
            if (v9175) {
                const v9176 = newSchema[tableName];
                const v9177 = v9176.primKey;
                const v9178 = newSchema[tableName];
                const v9179 = v9178.indexes;
                const v9180 = createTable(idbtrans, tableName, v9177, v9179);
                v9180;
            }
        };
        const v9182 = v9171.forEach(v9181);
        v9182;
    };
    const deleteRemovedTables = function (newSchema, idbtrans) {
        const v9183 = [];
        const v9184 = v9183.slice;
        const v9185 = idbtrans.db;
        const v9186 = v9185.objectStoreNames;
        const v9187 = v9184.call(v9186);
        const v9193 = function (storeName) {
            const v9188 = newSchema[storeName];
            const v9189 = v9188 == null;
            const v9190 = idbtrans.db;
            const v9191 = v9190.deleteObjectStore(storeName);
            const v9192 = v9189 && v9191;
            return v9192;
        };
        const v9194 = v9187.forEach(v9193);
        v9194;
    };
    const addIndex = function (store, idx) {
        const v9195 = idx.name;
        const v9196 = idx.keyPath;
        const v9197 = idx.unique;
        const v9198 = idx.multi;
        const v9199 = {
            unique: v9197,
            multiEntry: v9198
        };
        const v9200 = store.createIndex(v9195, v9196, v9199);
        v9200;
    };
    const buildGlobalSchema = function (db, idbdb, tmpTrans) {
        var globalSchema = {};
        const v9201 = idbdb.objectStoreNames;
        var dbStoreNames = slice(v9201, 0);
        const v9228 = function (storeName) {
            var store = tmpTrans.objectStore(storeName);
            var keyPath = store.keyPath;
            const v9202 = nameFromKeyPath(keyPath);
            const v9203 = keyPath || '';
            const v9204 = store.autoIncrement;
            const v9205 = !v9204;
            const v9206 = !v9205;
            const v9207 = typeof keyPath;
            const v9208 = v9207 !== 'string';
            const v9209 = keyPath && v9208;
            var primKey = createIndexSpec(v9202, v9203, false, false, v9206, v9209, true);
            var indexes = [];
            var j = 0;
            const v9210 = store.indexNames;
            const v9211 = v9210.length;
            let v9212 = j < v9211;
            while (v9212) {
                const v9214 = store.indexNames;
                const v9215 = v9214[j];
                var idbindex = store.index(v9215);
                keyPath = idbindex.keyPath;
                const v9216 = idbindex.name;
                const v9217 = idbindex.unique;
                const v9218 = !v9217;
                const v9219 = !v9218;
                const v9220 = idbindex.multiEntry;
                const v9221 = !v9220;
                const v9222 = !v9221;
                const v9223 = typeof keyPath;
                const v9224 = v9223 !== 'string';
                const v9225 = keyPath && v9224;
                var index = createIndexSpec(v9216, keyPath, v9219, v9222, false, v9225, false);
                const v9226 = indexes.push(index);
                v9226;
                const v9213 = ++j;
                v9212 = j < v9211;
            }
            const v9227 = createTableSchema(storeName, primKey, indexes);
            globalSchema[storeName] = v9227;
        };
        const v9229 = dbStoreNames.forEach(v9228);
        v9229;
        return globalSchema;
    };
    const readGlobalSchema = function (_a, idbdb, tmpTrans) {
        var db = _a._novip;
        const v9230 = idbdb.version;
        db.verno = v9230 / 10;
        const v9231 = buildGlobalSchema(db, idbdb, tmpTrans);
        db._dbSchema = v9231;
        var globalSchema = db._dbSchema;
        const v9232 = idbdb.objectStoreNames;
        const v9233 = slice(v9232, 0);
        db._storeNames = v9233;
        const v9234 = db._allTables;
        const v9235 = [v9234];
        const v9236 = keys(globalSchema);
        const v9237 = setApiOnPlace(db, v9235, v9236, globalSchema);
        v9237;
    };
    const verifyInstalledSchema = function (db, tmpTrans) {
        const v9238 = db.idbdb;
        var installedSchema = buildGlobalSchema(db, v9238, tmpTrans);
        const v9239 = db._dbSchema;
        var diff = getSchemaDiff(installedSchema, v9239);
        const v9240 = diff.add;
        const v9241 = v9240.length;
        const v9242 = diff.change;
        const v9248 = function (ch) {
            const v9243 = ch.add;
            const v9244 = v9243.length;
            const v9245 = ch.change;
            const v9246 = v9245.length;
            const v9247 = v9244 || v9246;
            return v9247;
        };
        const v9249 = v9242.some(v9248);
        const v9250 = v9241 || v9249;
        const v9251 = !v9250;
        return v9251;
    };
    const adjustToExistingIndexNames = function (_a, schema, idbtrans) {
        var db = _a._novip;
        const v9252 = idbtrans.db;
        var storeNames = v9252.objectStoreNames;
        var i = 0;
        const v9253 = storeNames.length;
        let v9254 = i < v9253;
        while (v9254) {
            var storeName = storeNames[i];
            var store = idbtrans.objectStore(storeName);
            db._hasGetAll = 'getAll' in store;
            var j = 0;
            const v9256 = store.indexNames;
            const v9257 = v9256.length;
            let v9258 = j < v9257;
            while (v9258) {
                const v9260 = store.indexNames;
                var indexName = v9260[j];
                const v9261 = store.index(indexName);
                var keyPath = v9261.keyPath;
                let dexieName;
                const v9262 = typeof keyPath;
                const v9263 = v9262 === 'string';
                const v9264 = slice(keyPath);
                const v9265 = v9264.join('+');
                const v9266 = '[' + v9265;
                const v9267 = v9266 + ']';
                if (v9263) {
                    dexieName = keyPath;
                } else {
                    dexieName = v9267;
                }
                const v9268 = schema[storeName];
                if (v9268) {
                    const v9269 = schema[storeName];
                    const v9270 = v9269.idxByName;
                    var indexSpec = v9270[dexieName];
                    if (indexSpec) {
                        indexSpec.name = indexName;
                        const v9271 = schema[storeName];
                        const v9272 = v9271.idxByName;
                        const v9273 = v9272[dexieName];
                        const v9274 = delete v9273;
                        v9274;
                        const v9275 = schema[storeName];
                        const v9276 = v9275.idxByName;
                        v9276[indexName] = indexSpec;
                    }
                }
                const v9259 = ++j;
                v9258 = j < v9257;
            }
            const v9255 = ++i;
            v9254 = i < v9253;
        }
        const v9277 = typeof navigator;
        const v9278 = v9277 !== 'undefined';
        const v9279 = navigator.userAgent;
        const v9280 = /Safari/.test(v9279);
        const v9281 = v9278 && v9280;
        const v9282 = navigator.userAgent;
        const v9283 = /(Chrome\/|Edge\/)/.test(v9282);
        const v9284 = !v9283;
        const v9285 = v9281 && v9284;
        const v9286 = _global.WorkerGlobalScope;
        const v9287 = v9285 && v9286;
        const v9288 = _global.WorkerGlobalScope;
        const v9289 = _global instanceof v9288;
        const v9290 = v9287 && v9289;
        const v9291 = [];
        const v9292 = navigator.userAgent;
        const v9293 = v9292.match(/Safari\/(\d*)/);
        const v9294 = v9291.concat(v9293);
        const v9295 = v9294[1];
        const v9296 = v9295 < 604;
        const v9297 = v9290 && v9296;
        if (v9297) {
            db._hasGetAll = false;
        }
    };
    const parseIndexSyntax = function (primKeyAndIndexes) {
        const v9298 = primKeyAndIndexes.split(',');
        const v9310 = function (index, indexNum) {
            index = index.trim();
            var name = index.replace(/([&*]|\+\+)/g, '');
            let keyPath;
            const v9299 = /^\[/.test(name);
            const v9300 = name.match(/^\[(.*)\]$/);
            const v9301 = v9300[1];
            const v9302 = v9301.split('+');
            if (v9299) {
                keyPath = v9302;
            } else {
                keyPath = name;
            }
            const v9303 = keyPath || null;
            const v9304 = /\&/.test(index);
            const v9305 = /\*/.test(index);
            const v9306 = /\+\+/.test(index);
            const v9307 = isArray(keyPath);
            const v9308 = indexNum === 0;
            const v9309 = createIndexSpec(name, v9303, v9304, v9305, v9306, v9307, v9308);
            return v9309;
        };
        const v9311 = v9298.map(v9310);
        return v9311;
    };
    const v9368 = function () {
        const Version = function () {
        };
        const v9312 = Version.prototype;
        const v9329 = function (stores, outSchema) {
            const v9313 = keys(stores);
            const v9327 = function (tableName) {
                const v9314 = stores[tableName];
                const v9315 = v9314 !== null;
                if (v9315) {
                    const v9316 = stores[tableName];
                    var indexes = parseIndexSyntax(v9316);
                    var primKey = indexes.shift();
                    const v9317 = primKey.multi;
                    if (v9317) {
                        const v9318 = new exceptions.Schema('Primary key cannot be multi-valued');
                        throw v9318;
                    }
                    const v9324 = function (idx) {
                        const v9319 = idx.auto;
                        if (v9319) {
                            const v9320 = new exceptions.Schema('Only primary key can be marked as autoIncrement (++)');
                            throw v9320;
                        }
                        const v9321 = idx.keyPath;
                        const v9322 = !v9321;
                        if (v9322) {
                            const v9323 = new exceptions.Schema('Index must have a name and cannot be an empty string');
                            throw v9323;
                        }
                    };
                    const v9325 = indexes.forEach(v9324);
                    v9325;
                    const v9326 = createTableSchema(tableName, primKey, indexes);
                    outSchema[tableName] = v9326;
                }
            };
            const v9328 = v9313.forEach(v9327);
            v9328;
        };
        v9312._parseStoresSpec = v9329;
        const v9330 = Version.prototype;
        const v9360 = function (stores) {
            var db = this.db;
            const v9331 = this._cfg;
            const v9332 = this._cfg;
            const v9333 = v9332.storesSource;
            const v9334 = this._cfg;
            const v9335 = v9334.storesSource;
            const v9336 = extend(v9335, stores);
            let v9337;
            if (v9333) {
                v9337 = v9336;
            } else {
                v9337 = stores;
            }
            v9331.storesSource = v9337;
            var versions = db._versions;
            var storesSpec = {};
            var dbschema = {};
            const v9344 = function (version) {
                const v9338 = version._cfg;
                const v9339 = v9338.storesSource;
                const v9340 = extend(storesSpec, v9339);
                v9340;
                const v9341 = version._cfg;
                const v9342 = {};
                v9341.dbschema = v9342;
                dbschema = v9341.dbschema;
                const v9343 = version._parseStoresSpec(storesSpec, dbschema);
                v9343;
            };
            const v9345 = versions.forEach(v9344);
            v9345;
            db._dbSchema = dbschema;
            const v9346 = db._allTables;
            const v9347 = db.Transaction;
            const v9348 = v9347.prototype;
            const v9349 = [
                v9346,
                db,
                v9348
            ];
            const v9350 = removeTablesApi(db, v9349);
            v9350;
            const v9351 = db._allTables;
            const v9352 = db.Transaction;
            const v9353 = v9352.prototype;
            const v9354 = this._cfg;
            const v9355 = v9354.tables;
            const v9356 = [
                v9351,
                db,
                v9353,
                v9355
            ];
            const v9357 = keys(dbschema);
            const v9358 = setApiOnPlace(db, v9356, v9357, dbschema);
            v9358;
            const v9359 = keys(dbschema);
            db._storeNames = v9359;
            return this;
        };
        v9330.stores = v9360;
        const v9361 = Version.prototype;
        const v9367 = function (upgradeFunction) {
            const v9363 = this._cfg;
            const v9364 = v9363.contentUpgrade;
            const v9365 = v9364 || nop;
            const v9366 = promisableChain(v9365, upgradeFunction);
            v9362.contentUpgrade = v9366;
            return this;
        };
        v9361.upgrade = v9367;
        return Version;
    };
    var Version = v9368();
    const createVersionConstructor = function (db) {
        const v9369 = Version.prototype;
        const v9373 = function Version(versionNumber) {
            this.db = db;
            const v9370 = {};
            const v9371 = {};
            const v9372 = {};
            v9372.version = versionNumber;
            v9372.storesSource = null;
            v9372.dbschema = v9370;
            v9372.tables = v9371;
            v9372.contentUpgrade = null;
            this._cfg = v9372;
        };
        const v9374 = makeClassConstructor(v9369, v9373);
        return v9374;
    };
    const getDbNamesTable = function (indexedDB, IDBKeyRange) {
        var dbNamesDB = indexedDB['_dbNamesDB'];
        const v9375 = !dbNamesDB;
        if (v9375) {
            const v9376 = [];
            const v9377 = {
                addons: v9376,
                indexedDB: indexedDB,
                IDBKeyRange: IDBKeyRange
            };
            dbNamesDB = indexedDB['_dbNamesDB'] = new Dexie$1(DBNAMES_DB, v9377);
            const v9378 = dbNamesDB.version(1);
            const v9379 = { dbnames: 'name' };
            const v9380 = v9378.stores(v9379);
            v9380;
        }
        const v9381 = dbNamesDB.table('dbnames');
        return v9381;
    };
    const hasDatabasesNative = function (indexedDB) {
        const v9382 = indexedDB.databases;
        const v9383 = typeof v9382;
        const v9384 = v9383 === 'function';
        const v9385 = indexedDB && v9384;
        return v9385;
    };
    const getDatabaseNames = function (_a) {
        var indexedDB = _a.indexedDB;
        var IDBKeyRange = _a.IDBKeyRange;
        const v9386 = hasDatabasesNative(indexedDB);
        const v9387 = indexedDB.databases();
        const v9388 = Promise.resolve(v9387);
        const v9395 = function (infos) {
            const v9390 = function (info) {
                const v9389 = info.name;
                return v9389;
            };
            const v9391 = infos.map(v9390);
            const v9393 = function (name) {
                const v9392 = name !== DBNAMES_DB;
                return v9392;
            };
            const v9394 = v9391.filter(v9393);
            return v9394;
        };
        const v9396 = v9388.then(v9395);
        const v9397 = getDbNamesTable(indexedDB, IDBKeyRange);
        const v9398 = v9397.toCollection();
        const v9399 = v9398.primaryKeys();
        let v9400;
        if (v9386) {
            v9400 = v9396;
        } else {
            v9400 = v9399;
        }
        return v9400;
    };
    const _onDatabaseCreated = function (_a, name) {
        var indexedDB = _a.indexedDB;
        var IDBKeyRange = _a.IDBKeyRange;
        const v9401 = hasDatabasesNative(indexedDB);
        const v9402 = !v9401;
        const v9403 = name !== DBNAMES_DB;
        const v9404 = v9402 && v9403;
        const v9405 = getDbNamesTable(indexedDB, IDBKeyRange);
        const v9406 = { name: name };
        const v9407 = v9405.put(v9406);
        const v9408 = v9407.catch(nop);
        const v9409 = v9404 && v9408;
        v9409;
    };
    const _onDatabaseDeleted = function (_a, name) {
        var indexedDB = _a.indexedDB;
        var IDBKeyRange = _a.IDBKeyRange;
        const v9410 = hasDatabasesNative(indexedDB);
        const v9411 = !v9410;
        const v9412 = name !== DBNAMES_DB;
        const v9413 = v9411 && v9412;
        const v9414 = getDbNamesTable(indexedDB, IDBKeyRange);
        const v9415 = v9414.delete(name);
        const v9416 = v9415.catch(nop);
        const v9417 = v9413 && v9416;
        v9417;
    };
    const vip = function (fn) {
        const v9419 = function () {
            PSD.letThrough = true;
            const v9418 = fn();
            return v9418;
        };
        const v9420 = newScope(v9419);
        return v9420;
    };
    const idbReady = function () {
        const v9421 = navigator.userAgentData;
        const v9422 = !v9421;
        const v9423 = navigator.userAgent;
        const v9424 = /Safari\//.test(v9423);
        const v9425 = v9422 && v9424;
        const v9426 = navigator.userAgent;
        const v9427 = /Chrom(e|ium)\//.test(v9426);
        const v9428 = !v9427;
        var isSafari = v9425 && v9428;
        const v9429 = !isSafari;
        const v9430 = indexedDB.databases;
        const v9431 = !v9430;
        const v9432 = v9429 || v9431;
        if (v9432) {
            const v9433 = Promise.resolve();
            return v9433;
        }
        var intervalId;
        const v9437 = function (resolve) {
            var tryIdb = function () {
                const v9434 = indexedDB.databases();
                const v9435 = v9434.finally(resolve);
                return v9435;
            };
            intervalId = setInterval(tryIdb, 100);
            const v9436 = tryIdb();
            v9436;
        };
        const v9438 = new Promise(v9437);
        const v9440 = function () {
            const v9439 = clearInterval(intervalId);
            return v9439;
        };
        const v9441 = v9438.finally(v9440);
        return v9441;
    };
    const dexieOpen = function (db) {
        var state = db._state;
        const v9442 = db._deps;
        var indexedDB = v9442.indexedDB;
        const v9443 = state.isBeingOpened;
        const v9444 = db.idbdb;
        const v9445 = v9443 || v9444;
        if (v9445) {
            const v9446 = state.dbReadyPromise;
            const v9451 = function () {
                const v9447 = state.dbOpenError;
                const v9448 = state.dbOpenError;
                const v9449 = rejection(v9448);
                let v9450;
                if (v9447) {
                    v9450 = v9449;
                } else {
                    v9450 = db;
                }
                return v9450;
            };
            const v9452 = v9446.then(v9451);
            return v9452;
        }
        const v9454 = getErrorWithStack();
        const v9455 = debug && (v9453._stackHolder = v9454);
        v9455;
        state.isBeingOpened = true;
        state.dbOpenError = null;
        state.openComplete = false;
        var openCanceller = state.openCanceller;
        const throwIfCancelled = function () {
            const v9456 = state.openCanceller;
            const v9457 = v9456 !== openCanceller;
            if (v9457) {
                const v9458 = new exceptions.DatabaseClosed('db.open() was cancelled');
                throw v9458;
            }
        };
        var resolveDbReady = state.dbReadyResolve;
        var upgradeTransaction = null;
        var wasCreated = false;
        const v9459 = typeof navigator;
        const v9460 = v9459 === 'undefined';
        const v9461 = DexiePromise.resolve();
        const v9462 = idbReady();
        let v9463;
        if (v9460) {
            v9463 = v9461;
        } else {
            v9463 = v9462;
        }
        const v9533 = function () {
            const v9531 = function (resolve, reject) {
                const v9464 = throwIfCancelled();
                v9464;
                const v9465 = !indexedDB;
                if (v9465) {
                    const v9466 = new exceptions.MissingAPI();
                    throw v9466;
                }
                var dbName = db.name;
                let req;
                const v9467 = state.autoSchema;
                const v9468 = indexedDB.open(dbName);
                const v9469 = db.verno;
                const v9470 = v9469 * 10;
                const v9471 = Math.round(v9470);
                const v9472 = indexedDB.open(dbName, v9471);
                if (v9467) {
                    req = v9468;
                } else {
                    req = v9472;
                }
                const v9473 = !req;
                if (v9473) {
                    const v9474 = new exceptions.MissingAPI();
                    throw v9474;
                }
                const v9475 = eventRejectHandler(reject);
                req.onerror = v9475;
                const v9476 = db._fireOnBlocked;
                const v9477 = wrap(v9476);
                req.onblocked = v9477;
                const v9501 = function (e) {
                    upgradeTransaction = req.transaction;
                    const v9478 = state.autoSchema;
                    const v9479 = db._options;
                    const v9480 = v9479.allowEmptyDB;
                    const v9481 = !v9480;
                    const v9482 = v9478 && v9481;
                    if (v9482) {
                        req.onerror = preventDefault;
                        const v9483 = upgradeTransaction.abort();
                        v9483;
                        const v9484 = req.result;
                        const v9485 = v9484.close();
                        v9485;
                        var delreq = indexedDB.deleteDatabase(dbName);
                        const v9490 = function () {
                            const v9486 = 'Database ' + dbName;
                            const v9487 = v9486 + ' doesnt exist';
                            const v9488 = new exceptions.NoSuchDatabase(v9487);
                            const v9489 = reject(v9488);
                            v9489;
                        };
                        const v9491 = wrap(v9490);
                        delreq.onerror = v9491;
                        delreq.onsuccess = delreq.onerror;
                    } else {
                        const v9492 = eventRejectHandler(reject);
                        upgradeTransaction.onerror = v9492;
                        let oldVer;
                        const v9493 = e.oldVersion;
                        const v9494 = Math.pow(2, 62);
                        const v9495 = v9493 > v9494;
                        const v9496 = e.oldVersion;
                        if (v9495) {
                            oldVer = 0;
                        } else {
                            oldVer = v9496;
                        }
                        wasCreated = oldVer < 1;
                        const v9497 = db._novip;
                        const v9498 = req.result;
                        v9497.idbdb = v9498;
                        const v9499 = oldVer / 10;
                        const v9500 = runUpgraders(db, v9499, upgradeTransaction, reject);
                        v9500;
                    }
                };
                const v9502 = wrap(v9501, reject);
                req.onupgradeneeded = v9502;
                const v9529 = function () {
                    upgradeTransaction = null;
                    const v9503 = db._novip;
                    const v9504 = req.result;
                    v9503.idbdb = v9504;
                    var idbdb = v9503.idbdb;
                    const v9505 = idbdb.objectStoreNames;
                    var objectStoreNames = slice(v9505);
                    const v9506 = objectStoreNames.length;
                    const v9507 = v9506 > 0;
                    if (v9507) {
                        try {
                            const v9508 = safariMultiStoreFix(objectStoreNames);
                            var tmpTrans = idbdb.transaction(v9508, 'readonly');
                            const v9509 = state.autoSchema;
                            if (v9509) {
                                const v9510 = readGlobalSchema(db, idbdb, tmpTrans);
                                v9510;
                            } else {
                                const v9511 = db._dbSchema;
                                const v9512 = adjustToExistingIndexNames(db, v9511, tmpTrans);
                                v9512;
                                const v9513 = verifyInstalledSchema(db, tmpTrans);
                                const v9514 = !v9513;
                                if (v9514) {
                                    const v9515 = console.warn('Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.');
                                    v9515;
                                }
                            }
                            const v9516 = generateMiddlewareStacks(db, tmpTrans);
                            v9516;
                        } catch (e) {
                        }
                    }
                    const v9517 = connections.push(db);
                    v9517;
                    const v9520 = function (ev) {
                        state.vcFired = true;
                        const v9518 = db.on('versionchange');
                        const v9519 = v9518.fire(ev);
                        v9519;
                    };
                    const v9521 = wrap(v9520);
                    idbdb.onversionchange = v9521;
                    const v9524 = function (ev) {
                        const v9522 = db.on('close');
                        const v9523 = v9522.fire(ev);
                        v9523;
                    };
                    const v9525 = wrap(v9524);
                    idbdb.onclose = v9525;
                    if (wasCreated) {
                        const v9526 = db._deps;
                        const v9527 = _onDatabaseCreated(v9526, dbName);
                        v9527;
                    }
                    const v9528 = resolve();
                    v9528;
                };
                const v9530 = wrap(v9529, reject);
                req.onsuccess = v9530;
            };
            const v9532 = new DexiePromise(v9531);
            return v9532;
        };
        const v9534 = v9463.then(v9533);
        const v9535 = [
            openCanceller,
            v9534
        ];
        const v9536 = DexiePromise.race(v9535);
        const v9557 = function () {
            const v9537 = throwIfCancelled();
            v9537;
            state.onReadyBeingFired = [];
            const v9542 = function () {
                const v9538 = db.on;
                const v9539 = v9538.ready;
                const v9540 = db.vip;
                const v9541 = v9539.fire(v9540);
                return v9541;
            };
            const v9543 = vip(v9542);
            const v9544 = DexiePromise.resolve(v9543);
            const v9555 = function fireRemainders() {
                const v9545 = state.onReadyBeingFired;
                const v9546 = v9545.length;
                const v9547 = v9546 > 0;
                if (v9547) {
                    const v9548 = state.onReadyBeingFired;
                    var remainders_1 = v9548.reduce(promisableChain, nop);
                    state.onReadyBeingFired = [];
                    const v9551 = function () {
                        const v9549 = db.vip;
                        const v9550 = remainders_1(v9549);
                        return v9550;
                    };
                    const v9552 = vip(v9551);
                    const v9553 = DexiePromise.resolve(v9552);
                    const v9554 = v9553.then(fireRemainders);
                    return v9554;
                }
            };
            const v9556 = v9544.then(v9555);
            return v9556;
        };
        const v9558 = v9536.then(v9557);
        const v9559 = function () {
            state.onReadyBeingFired = null;
            state.isBeingOpened = false;
        };
        const v9560 = v9558.finally(v9559);
        const v9561 = function () {
            return db;
        };
        const v9562 = v9560.then(v9561);
        const v9569 = function (err) {
            state.dbOpenError = err;
            try {
                const v9563 = upgradeTransaction.abort();
                const v9564 = upgradeTransaction && v9563;
                v9564;
            } catch (_a) {
            }
            const v9565 = state.openCanceller;
            const v9566 = openCanceller === v9565;
            if (v9566) {
                const v9567 = db._close();
                v9567;
            }
            const v9568 = rejection(err);
            return v9568;
        };
        const v9570 = v9562.catch(v9569);
        const v9572 = function () {
            state.openComplete = true;
            const v9571 = resolveDbReady();
            v9571;
        };
        const v9573 = v9570.finally(v9572);
        return v9573;
    };
    const awaitIterator = function (iterator) {
        var callNext = function (result) {
            const v9574 = iterator.next(result);
            return v9574;
        };
        var doThrow = function (error) {
            const v9575 = iterator.throw(error);
            return v9575;
        };
        var onSuccess = step(callNext);
        var onError = step(doThrow);
        const step = function (getNext) {
            const v9590 = function (val) {
                var next = getNext(val);
                var value = next.value;
                const v9576 = next.done;
                const v9577 = !value;
                const v9578 = value.then;
                const v9579 = typeof v9578;
                const v9580 = v9579 !== 'function';
                const v9581 = v9577 || v9580;
                const v9582 = isArray(value);
                const v9583 = Promise.all(value);
                const v9584 = v9583.then(onSuccess, onError);
                const v9585 = onSuccess(value);
                let v9586;
                if (v9582) {
                    v9586 = v9584;
                } else {
                    v9586 = v9585;
                }
                const v9587 = value.then(onSuccess, onError);
                let v9588;
                if (v9581) {
                    v9588 = v9586;
                } else {
                    v9588 = v9587;
                }
                let v9589;
                if (v9576) {
                    v9589 = value;
                } else {
                    v9589 = v9588;
                }
                return v9589;
            };
            return v9590;
        };
        const v9591 = step(callNext);
        const v9592 = v9591();
        return v9592;
    };
    const extractTransactionArgs = function (mode, _tableArgs_, scopeFunc) {
        var i = arguments.length;
        const v9593 = i < 2;
        if (v9593) {
            const v9594 = new exceptions.InvalidArgument('Too few arguments');
            throw v9594;
        }
        const v9595 = i - 1;
        var args = new Array(v9595);
        let v9596 = --i;
        while (v9596) {
            const v9597 = i - 1;
            const v9598 = arguments[i];
            args[v9597] = v9598;
            v9596 = --i;
        }
        scopeFunc = args.pop();
        var tables = flatten(args);
        const v9599 = [
            mode,
            tables,
            scopeFunc
        ];
        return v9599;
    };
    const enterTransactionScope = function (db, mode, storeNames, parentTransaction, scopeFunc) {
        const v9600 = DexiePromise.resolve();
        const v9657 = function () {
            const v9601 = PSD.transless;
            var transless = v9601 || PSD;
            const v9602 = db._dbSchema;
            var trans = db._createTransaction(mode, storeNames, v9602, parentTransaction);
            var zoneProps = {};
            zoneProps.trans = trans;
            zoneProps.transless = transless;
            if (parentTransaction) {
                const v9603 = parentTransaction.idbtrans;
                trans.idbtrans = v9603;
            } else {
                try {
                    const v9604 = trans.create();
                    v9604;
                    const v9605 = db._state;
                    v9605.PR1398_maxLoop = 3;
                } catch (ex) {
                    const v9606 = ex.name;
                    const v9607 = errnames.InvalidState;
                    const v9608 = v9606 === v9607;
                    const v9609 = db.isOpen();
                    const v9610 = v9608 && v9609;
                    const v9611 = db._state;
                    const v9612 = v9611.PR1398_maxLoop;
                    const v9613 = --v9612;
                    const v9614 = v9613 > 0;
                    const v9615 = v9610 && v9614;
                    if (v9615) {
                        const v9616 = console.warn('Dexie: Need to reopen db');
                        v9616;
                        const v9617 = db._close();
                        v9617;
                        const v9618 = db.open();
                        const v9620 = function () {
                            const v9619 = enterTransactionScope(db, mode, storeNames, null, scopeFunc);
                            return v9619;
                        };
                        const v9621 = v9618.then(v9620);
                        return v9621;
                    }
                    const v9622 = rejection(ex);
                    return v9622;
                }
            }
            var scopeFuncIsAsync = isAsyncFunction(scopeFunc);
            if (scopeFuncIsAsync) {
                const v9623 = incrementExpectedAwaits();
                v9623;
            }
            var returnValue;
            const v9632 = function () {
                returnValue = scopeFunc.call(trans, trans);
                if (returnValue) {
                    if (scopeFuncIsAsync) {
                        var decrementor = decrementExpectedAwaits.bind(null, null);
                        const v9624 = returnValue.then(decrementor, decrementor);
                        v9624;
                    } else {
                        const v9625 = returnValue.next;
                        const v9626 = typeof v9625;
                        const v9627 = v9626 === 'function';
                        const v9628 = returnValue.throw;
                        const v9629 = typeof v9628;
                        const v9630 = v9629 === 'function';
                        const v9631 = v9627 && v9630;
                        if (v9631) {
                            returnValue = awaitIterator(returnValue);
                        }
                    }
                }
            };
            var promiseFollowed = DexiePromise.follow(v9632, zoneProps);
            const v9633 = returnValue.then;
            const v9634 = typeof v9633;
            const v9635 = v9634 === 'function';
            const v9636 = returnValue && v9635;
            const v9637 = DexiePromise.resolve(returnValue);
            const v9642 = function (x) {
                const v9638 = trans.active;
                const v9639 = new exceptions.PrematureCommit('Transaction committed too early. See http://bit.ly/2kdckMn');
                const v9640 = rejection(v9639);
                let v9641;
                if (v9638) {
                    v9641 = x;
                } else {
                    v9641 = v9640;
                }
                return v9641;
            };
            const v9643 = v9637.then(v9642);
            const v9644 = function () {
                return returnValue;
            };
            const v9645 = promiseFollowed.then(v9644);
            let v9646;
            if (v9636) {
                v9646 = v9643;
            } else {
                v9646 = v9645;
            }
            const v9651 = function (x) {
                if (parentTransaction) {
                    const v9647 = trans._resolve();
                    v9647;
                }
                const v9648 = trans._completion;
                const v9649 = function () {
                    return x;
                };
                const v9650 = v9648.then(v9649);
                return v9650;
            };
            const v9652 = v9646.then(v9651);
            const v9655 = function (e) {
                const v9653 = trans._reject(e);
                v9653;
                const v9654 = rejection(e);
                return v9654;
            };
            const v9656 = v9652.catch(v9655);
            return v9656;
        };
        const v9658 = v9600.then(v9657);
        return v9658;
    };
    const pad = function (a, value, count) {
        let result;
        const v9659 = isArray(a);
        const v9660 = a.slice();
        const v9661 = [a];
        if (v9659) {
            result = v9660;
        } else {
            result = v9661;
        }
        var i = 0;
        let v9662 = i < count;
        while (v9662) {
            const v9664 = result.push(value);
            v9664;
            const v9663 = ++i;
            v9662 = i < count;
        }
        return result;
    };
    const createVirtualIndexMiddleware = function (down) {
        const v9665 = {};
        const v9666 = __assign(v9665, down);
        const v9798 = function (tableName) {
            var table = down.table(tableName);
            var schema = table.schema;
            var indexLookup = {};
            var allVirtualIndexes = [];
            const addVirtualIndexes = function (keyPath, keyTail, lowLevelIndex) {
                var keyPathAlias = getKeyPathAlias(keyPath);
                const v9667 = indexLookup[keyPathAlias];
                const v9668 = [];
                indexLookup[keyPathAlias] = v9667 || v9668;
                var indexList = indexLookup[keyPathAlias];
                let keyLength;
                const v9669 = keyPath == null;
                const v9670 = typeof keyPath;
                const v9671 = v9670 === 'string';
                const v9672 = keyPath.length;
                let v9673;
                if (v9671) {
                    v9673 = 1;
                } else {
                    v9673 = v9672;
                }
                if (v9669) {
                    keyLength = 0;
                } else {
                    keyLength = v9673;
                }
                var isVirtual = keyTail > 0;
                const v9674 = {};
                const v9675 = __assign(v9674, lowLevelIndex);
                const v9676 = getKeyExtractor(keyPath);
                const v9677 = !isVirtual;
                const v9678 = lowLevelIndex.unique;
                const v9679 = v9677 && v9678;
                const v9680 = {
                    isVirtual: isVirtual,
                    keyTail: keyTail,
                    keyLength: keyLength,
                    extractKey: v9676,
                    unique: v9679
                };
                var virtualIndex = __assign(v9675, v9680);
                const v9681 = indexList.push(virtualIndex);
                v9681;
                const v9682 = virtualIndex.isPrimaryKey;
                const v9683 = !v9682;
                if (v9683) {
                    const v9684 = allVirtualIndexes.push(virtualIndex);
                    v9684;
                }
                const v9685 = keyLength > 1;
                if (v9685) {
                    let virtualKeyPath;
                    const v9686 = keyLength === 2;
                    const v9687 = keyPath[0];
                    const v9688 = keyLength - 1;
                    const v9689 = keyPath.slice(0, v9688);
                    if (v9686) {
                        virtualKeyPath = v9687;
                    } else {
                        virtualKeyPath = v9689;
                    }
                    const v9690 = keyTail + 1;
                    const v9691 = addVirtualIndexes(virtualKeyPath, v9690, lowLevelIndex);
                    v9691;
                }
                const v9695 = function (a, b) {
                    const v9692 = a.keyTail;
                    const v9693 = b.keyTail;
                    const v9694 = v9692 - v9693;
                    return v9694;
                };
                const v9696 = indexList.sort(v9695);
                v9696;
                return virtualIndex;
            };
            const v9697 = schema.primaryKey;
            const v9698 = v9697.keyPath;
            const v9699 = schema.primaryKey;
            var primaryKey = addVirtualIndexes(v9698, 0, v9699);
            indexLookup[':id'] = [primaryKey];
            var _i = 0;
            var _a = schema.indexes;
            const v9700 = _a.length;
            let v9701 = _i < v9700;
            while (v9701) {
                var index = _a[_i];
                const v9703 = index.keyPath;
                const v9704 = addVirtualIndexes(v9703, 0, index);
                v9704;
                const v9702 = _i++;
                v9701 = _i < v9700;
            }
            const findBestIndex = function (keyPath) {
                const v9705 = getKeyPathAlias(keyPath);
                var result = indexLookup[v9705];
                const v9706 = result[0];
                const v9707 = result && v9706;
                return v9707;
            };
            const translateRange = function (range, keyTail) {
                const v9708 = range.type;
                const v9709 = v9708 === 1;
                const v9710 = range.type;
                let v9711;
                if (v9709) {
                    v9711 = 2;
                } else {
                    v9711 = v9710;
                }
                const v9712 = range.lower;
                const v9713 = range.lowerOpen;
                const v9714 = down.MAX_KEY;
                const v9715 = down.MIN_KEY;
                let v9716;
                if (v9713) {
                    v9716 = v9714;
                } else {
                    v9716 = v9715;
                }
                const v9717 = pad(v9712, v9716, keyTail);
                const v9718 = range.upper;
                const v9719 = range.upperOpen;
                const v9720 = down.MIN_KEY;
                const v9721 = down.MAX_KEY;
                let v9722;
                if (v9719) {
                    v9722 = v9720;
                } else {
                    v9722 = v9721;
                }
                const v9723 = pad(v9718, v9722, keyTail);
                const v9724 = {};
                v9724.type = v9711;
                v9724.lower = v9717;
                v9724.lowerOpen = true;
                v9724.upper = v9723;
                v9724.upperOpen = true;
                return v9724;
            };
            const translateRequest = function (req) {
                const v9725 = req.query;
                var index = v9725.index;
                const v9726 = index.isVirtual;
                const v9727 = {};
                const v9728 = __assign(v9727, req);
                const v9729 = req.query;
                const v9730 = v9729.range;
                const v9731 = index.keyTail;
                const v9732 = translateRange(v9730, v9731);
                const v9733 = {};
                v9733.index = index;
                v9733.range = v9732;
                const v9734 = { query: v9733 };
                const v9735 = __assign(v9728, v9734);
                let v9736;
                if (v9726) {
                    v9736 = v9735;
                } else {
                    v9736 = req;
                }
                return v9736;
            };
            const v9737 = {};
            const v9738 = __assign(v9737, table);
            const v9739 = {};
            const v9740 = __assign(v9739, schema);
            const v9741 = {
                primaryKey: primaryKey,
                indexes: allVirtualIndexes,
                getIndexByKeyPath: findBestIndex
            };
            const v9742 = __assign(v9740, v9741);
            const v9745 = function (req) {
                const v9743 = translateRequest(req);
                const v9744 = table.count(v9743);
                return v9744;
            };
            const v9748 = function (req) {
                const v9746 = translateRequest(req);
                const v9747 = table.query(v9746);
                return v9747;
            };
            const v9796 = function (req) {
                const v9749 = req.query;
                var _a = v9749.index;
                var keyTail = _a.keyTail;
                var isVirtual = _a.isVirtual;
                var keyLength = _a.keyLength;
                const v9750 = !isVirtual;
                if (v9750) {
                    const v9751 = table.openCursor(req);
                    return v9751;
                }
                const createVirtualCursor = function (cursor) {
                    const _continue = function (key) {
                        const v9752 = key != null;
                        const v9753 = req.reverse;
                        const v9754 = down.MAX_KEY;
                        const v9755 = down.MIN_KEY;
                        let v9756;
                        if (v9753) {
                            v9756 = v9754;
                        } else {
                            v9756 = v9755;
                        }
                        const v9757 = pad(key, v9756, keyTail);
                        const v9758 = cursor.continue(v9757);
                        const v9759 = req.unique;
                        const v9760 = cursor.key;
                        const v9761 = v9760.slice(0, keyLength);
                        const v9762 = req.reverse;
                        const v9763 = down.MIN_KEY;
                        const v9764 = down.MAX_KEY;
                        let v9765;
                        if (v9762) {
                            v9765 = v9763;
                        } else {
                            v9765 = v9764;
                        }
                        const v9766 = v9761.concat(v9765, keyTail);
                        const v9767 = cursor.continue(v9766);
                        const v9768 = cursor.continue();
                        let v9769;
                        if (v9759) {
                            v9769 = v9767;
                        } else {
                            v9769 = v9768;
                        }
                        let v9770;
                        if (v9752) {
                            v9770 = v9758;
                        } else {
                            v9770 = v9769;
                        }
                        v9770;
                    };
                    const v9771 = {};
                    v9771.value = _continue;
                    const v9775 = function (key, primaryKey) {
                        const v9772 = down.MAX_KEY;
                        const v9773 = pad(key, v9772, keyTail);
                        const v9774 = cursor.continuePrimaryKey(v9773, primaryKey);
                        v9774;
                    };
                    const v9776 = {};
                    v9776.value = v9775;
                    const v9778 = function () {
                        const v9777 = cursor.primaryKey;
                        return v9777;
                    };
                    const v9779 = {};
                    v9779.get = v9778;
                    const v9784 = function () {
                        var key = cursor.key;
                        const v9780 = keyLength === 1;
                        const v9781 = key[0];
                        const v9782 = key.slice(0, keyLength);
                        let v9783;
                        if (v9780) {
                            v9783 = v9781;
                        } else {
                            v9783 = v9782;
                        }
                        return v9783;
                    };
                    const v9785 = {};
                    v9785.get = v9784;
                    const v9787 = function () {
                        const v9786 = cursor.value;
                        return v9786;
                    };
                    const v9788 = {};
                    v9788.get = v9787;
                    const v9789 = {
                        continue: v9771,
                        continuePrimaryKey: v9776,
                        primaryKey: v9779,
                        key: v9785,
                        value: v9788
                    };
                    var virtualCursor = Object.create(cursor, v9789);
                    return virtualCursor;
                };
                const v9790 = translateRequest(req);
                const v9791 = table.openCursor(v9790);
                const v9794 = function (cursor) {
                    const v9792 = createVirtualCursor(cursor);
                    const v9793 = cursor && v9792;
                    return v9793;
                };
                const v9795 = v9791.then(v9794);
                return v9795;
            };
            const v9797 = {
                schema: v9742,
                count: v9745,
                query: v9748,
                openCursor: v9796
            };
            var result = __assign(v9738, v9797);
            return result;
        };
        const v9799 = { table: v9798 };
        const v9800 = __assign(v9666, v9799);
        return v9800;
    };
    var virtualIndexMiddleware = {};
    virtualIndexMiddleware.stack = 'dbcore';
    virtualIndexMiddleware.name = 'VirtualIndexMiddleware';
    virtualIndexMiddleware.level = 1;
    virtualIndexMiddleware.create = createVirtualIndexMiddleware;
    const getObjectDiff = function (a, b, rv, prfx) {
        const v9801 = {};
        rv = rv || v9801;
        prfx = prfx || '';
        const v9802 = keys(a);
        const v9826 = function (prop) {
            const v9803 = hasOwn(b, prop);
            const v9804 = !v9803;
            if (v9804) {
                const v9805 = prfx + prop;
                rv[v9805] = undefined;
            } else {
                var ap = a[prop];
                var bp = b[prop];
                const v9806 = typeof ap;
                const v9807 = v9806 === 'object';
                const v9808 = typeof bp;
                const v9809 = v9808 === 'object';
                const v9810 = v9807 && v9809;
                const v9811 = v9810 && ap;
                const v9812 = v9811 && bp;
                if (v9812) {
                    var apTypeName = toStringTag(ap);
                    var bpTypeName = toStringTag(bp);
                    const v9813 = apTypeName !== bpTypeName;
                    if (v9813) {
                        const v9814 = prfx + prop;
                        const v9815 = b[prop];
                        rv[v9814] = v9815;
                    } else {
                        const v9816 = apTypeName === 'Object';
                        if (v9816) {
                            const v9817 = prfx + prop;
                            const v9818 = v9817 + '.';
                            const v9819 = getObjectDiff(ap, bp, rv, v9818);
                            v9819;
                        } else {
                            const v9820 = ap !== bp;
                            if (v9820) {
                                const v9821 = prfx + prop;
                                const v9822 = b[prop];
                                rv[v9821] = v9822;
                            }
                        }
                    }
                } else {
                    const v9823 = ap !== bp;
                    if (v9823) {
                        const v9824 = prfx + prop;
                        const v9825 = b[prop];
                        rv[v9824] = v9825;
                    }
                }
            }
        };
        const v9827 = v9802.forEach(v9826);
        v9827;
        const v9828 = keys(b);
        const v9833 = function (prop) {
            const v9829 = hasOwn(a, prop);
            const v9830 = !v9829;
            if (v9830) {
                const v9831 = prfx + prop;
                const v9832 = b[prop];
                rv[v9831] = v9832;
            }
        };
        const v9834 = v9828.forEach(v9833);
        v9834;
        return rv;
    };
    const getEffectiveKeys = function (primaryKey, req) {
        const v9835 = req.type;
        const v9836 = v9835 === 'delete';
        if (v9836) {
            const v9837 = req.keys;
            return v9837;
        }
        const v9838 = req.keys;
        const v9839 = req.values;
        const v9840 = primaryKey.extractKey;
        const v9841 = v9839.map(v9840);
        const v9842 = v9838 || v9841;
        return v9842;
    };
    const v10000 = function (downCore) {
        const v9843 = {};
        const v9844 = __assign(v9843, downCore);
        const v9997 = function (tableName) {
            var downTable = downCore.table(tableName);
            const v9845 = downTable.schema;
            var primaryKey = v9845.primaryKey;
            const v9846 = {};
            const v9847 = __assign(v9846, downTable);
            const v9995 = function (req) {
                var dxTrans = PSD.trans;
                const v9848 = dxTrans.table(tableName);
                var _a = v9848.hook;
                var deleting = _a.deleting;
                var creating = _a.creating;
                var updating = _a.updating;
                const v9849 = req.type;
                switch (v9849) {
                case 'add':
                    const v9850 = creating.fire;
                    const v9851 = v9850 === nop;
                    if (v9851) {
                        break;
                    }
                    const v9853 = function () {
                        const v9852 = addPutOrDelete(req);
                        return v9852;
                    };
                    const v9854 = dxTrans._promise('readwrite', v9853, true);
                    return v9854;
                case 'put':
                    const v9855 = creating.fire;
                    const v9856 = v9855 === nop;
                    const v9857 = updating.fire;
                    const v9858 = v9857 === nop;
                    const v9859 = v9856 && v9858;
                    if (v9859) {
                        break;
                    }
                    const v9861 = function () {
                        const v9860 = addPutOrDelete(req);
                        return v9860;
                    };
                    const v9862 = dxTrans._promise('readwrite', v9861, true);
                    return v9862;
                case 'delete':
                    const v9863 = deleting.fire;
                    const v9864 = v9863 === nop;
                    if (v9864) {
                        break;
                    }
                    const v9866 = function () {
                        const v9865 = addPutOrDelete(req);
                        return v9865;
                    };
                    const v9867 = dxTrans._promise('readwrite', v9866, true);
                    return v9867;
                case 'deleteRange':
                    const v9868 = deleting.fire;
                    const v9869 = v9868 === nop;
                    if (v9869) {
                        break;
                    }
                    const v9871 = function () {
                        const v9870 = deleteRange(req);
                        return v9870;
                    };
                    const v9872 = dxTrans._promise('readwrite', v9871, true);
                    return v9872;
                }
                const v9873 = downTable.mutate(req);
                return v9873;
                const addPutOrDelete = function (req) {
                    var dxTrans = PSD.trans;
                    const v9874 = req.keys;
                    const v9875 = getEffectiveKeys(primaryKey, req);
                    var keys = v9874 || v9875;
                    const v9876 = !keys;
                    if (v9876) {
                        const v9877 = new Error('Keys missing');
                        throw v9877;
                    }
                    const v9878 = req.type;
                    const v9879 = v9878 === 'add';
                    const v9880 = req.type;
                    const v9881 = v9880 === 'put';
                    const v9882 = v9879 || v9881;
                    const v9883 = {};
                    const v9884 = __assign(v9883, req);
                    const v9885 = { keys: keys };
                    const v9886 = __assign(v9884, v9885);
                    const v9887 = {};
                    const v9888 = __assign(v9887, req);
                    if (v9882) {
                        req = v9886;
                    } else {
                        req = v9888;
                    }
                    const v9889 = req.type;
                    const v9890 = v9889 !== 'delete';
                    if (v9890) {
                        const v9891 = [];
                        const v9892 = req.values;
                        const v9893 = __spreadArray(v9891, v9892, true);
                        req.values = v9893;
                    }
                    const v9894 = req.keys;
                    if (v9894) {
                        const v9895 = [];
                        const v9896 = req.keys;
                        const v9897 = __spreadArray(v9895, v9896, true);
                        req.keys = v9897;
                    }
                    const v9898 = getExistingValues(downTable, req, keys);
                    const v9964 = function (existingValues) {
                        const v9931 = function (key, i) {
                            var existingValue = existingValues[i];
                            var ctx = {};
                            ctx.onerror = null;
                            ctx.onsuccess = null;
                            const v9899 = req.type;
                            const v9900 = v9899 === 'delete';
                            if (v9900) {
                                const v9901 = deleting.fire;
                                const v9902 = v9901.call(ctx, key, existingValue, dxTrans);
                                v9902;
                            } else {
                                const v9903 = req.type;
                                const v9904 = v9903 === 'add';
                                const v9905 = existingValue === undefined;
                                const v9906 = v9904 || v9905;
                                if (v9906) {
                                    const v9907 = creating.fire;
                                    const v9908 = req.values;
                                    const v9909 = v9908[i];
                                    var generatedPrimaryKey = v9907.call(ctx, key, v9909, dxTrans);
                                    const v9910 = key == null;
                                    const v9911 = generatedPrimaryKey != null;
                                    const v9912 = v9910 && v9911;
                                    if (v9912) {
                                        key = generatedPrimaryKey;
                                        const v9913 = req.keys;
                                        v9913[i] = key;
                                        const v9914 = primaryKey.outbound;
                                        const v9915 = !v9914;
                                        if (v9915) {
                                            const v9916 = req.values;
                                            const v9917 = v9916[i];
                                            const v9918 = primaryKey.keyPath;
                                            const v9919 = setByKeyPath(v9917, v9918, key);
                                            v9919;
                                        }
                                    }
                                } else {
                                    const v9920 = req.values;
                                    const v9921 = v9920[i];
                                    var objectDiff = getObjectDiff(existingValue, v9921);
                                    const v9922 = updating.fire;
                                    var additionalChanges_1 = v9922.call(ctx, objectDiff, key, existingValue, dxTrans);
                                    if (additionalChanges_1) {
                                        const v9923 = req.values;
                                        var requestedValue_1 = v9923[i];
                                        const v9924 = Object.keys(additionalChanges_1);
                                        const v9929 = function (keyPath) {
                                            const v9925 = hasOwn(requestedValue_1, keyPath);
                                            if (v9925) {
                                                const v9926 = additionalChanges_1[keyPath];
                                                requestedValue_1[keyPath] = v9926;
                                            } else {
                                                const v9927 = additionalChanges_1[keyPath];
                                                const v9928 = setByKeyPath(requestedValue_1, keyPath, v9927);
                                                v9928;
                                            }
                                        };
                                        const v9930 = v9924.forEach(v9929);
                                        v9930;
                                    }
                                }
                            }
                            return ctx;
                        };
                        var contexts = keys.map(v9931);
                        const v9932 = downTable.mutate(req);
                        const v9954 = function (_a) {
                            var failures = _a.failures;
                            var results = _a.results;
                            var numFailures = _a.numFailures;
                            var lastResult = _a.lastResult;
                            var i = 0;
                            const v9933 = keys.length;
                            let v9934 = i < v9933;
                            while (v9934) {
                                let primKey;
                                const v9936 = results[i];
                                const v9937 = keys[i];
                                if (results) {
                                    primKey = v9936;
                                } else {
                                    primKey = v9937;
                                }
                                var ctx = contexts[i];
                                const v9938 = primKey == null;
                                if (v9938) {
                                    const v9939 = ctx.onerror;
                                    const v9940 = failures[i];
                                    const v9941 = ctx.onerror(v9940);
                                    const v9942 = v9939 && v9941;
                                    v9942;
                                } else {
                                    const v9943 = ctx.onsuccess;
                                    const v9944 = req.type;
                                    const v9945 = v9944 === 'put';
                                    const v9946 = existingValues[i];
                                    const v9947 = v9945 && v9946;
                                    const v9948 = req.values;
                                    const v9949 = v9948[i];
                                    let v9950;
                                    if (v9947) {
                                        v9950 = v9949;
                                    } else {
                                        v9950 = primKey;
                                    }
                                    const v9951 = ctx.onsuccess(v9950);
                                    const v9952 = v9943 && v9951;
                                    v9952;
                                }
                                const v9935 = ++i;
                                v9934 = i < v9933;
                            }
                            const v9953 = {};
                            v9953.failures = failures;
                            v9953.results = results;
                            v9953.numFailures = numFailures;
                            v9953.lastResult = lastResult;
                            return v9953;
                        };
                        const v9955 = v9932.then(v9954);
                        const v9962 = function (error) {
                            const v9959 = function (ctx) {
                                const v9956 = ctx.onerror;
                                const v9957 = ctx.onerror(error);
                                const v9958 = v9956 && v9957;
                                return v9958;
                            };
                            const v9960 = contexts.forEach(v9959);
                            v9960;
                            const v9961 = Promise.reject(error);
                            return v9961;
                        };
                        const v9963 = v9955.catch(v9962);
                        return v9963;
                    };
                    const v9965 = v9898.then(v9964);
                    return v9965;
                };
                const deleteRange = function (req) {
                    const v9966 = req.trans;
                    const v9967 = req.range;
                    const v9968 = deleteNextChunk(v9966, v9967, 10000);
                    return v9968;
                };
                const deleteNextChunk = function (trans, range, limit) {
                    const v9969 = {};
                    v9969.index = primaryKey;
                    v9969.range = range;
                    const v9970 = {
                        trans: trans,
                        values: false,
                        query: v9969,
                        limit: limit
                    };
                    const v9971 = downTable.query(v9970);
                    const v9993 = function (_a) {
                        var result = _a.result;
                        const v9972 = {
                            type: 'delete',
                            keys: result,
                            trans: trans
                        };
                        const v9973 = addPutOrDelete(v9972);
                        const v9991 = function (res) {
                            const v9974 = res.numFailures;
                            const v9975 = v9974 > 0;
                            if (v9975) {
                                const v9976 = res.failures;
                                const v9977 = v9976[0];
                                const v9978 = Promise.reject(v9977);
                                return v9978;
                            }
                            const v9979 = result.length;
                            const v9980 = v9979 < limit;
                            if (v9980) {
                                const v9981 = [];
                                const v9982 = {};
                                v9982.failures = v9981;
                                v9982.numFailures = 0;
                                v9982.lastResult = undefined;
                                return v9982;
                            } else {
                                const v9983 = {};
                                const v9984 = __assign(v9983, range);
                                const v9985 = result.length;
                                const v9986 = v9985 - 1;
                                const v9987 = result[v9986];
                                const v9988 = {
                                    lower: v9987,
                                    lowerOpen: true
                                };
                                const v9989 = __assign(v9984, v9988);
                                const v9990 = deleteNextChunk(trans, v9989, limit);
                                return v9990;
                            }
                        };
                        const v9992 = v9973.then(v9991);
                        return v9992;
                    };
                    const v9994 = v9971.then(v9993);
                    return v9994;
                };
            };
            const v9996 = { mutate: v9995 };
            var tableMiddleware = __assign(v9847, v9996);
            return tableMiddleware;
        };
        const v9998 = { table: v9997 };
        const v9999 = __assign(v9844, v9998);
        return v9999;
    };
    var hooksMiddleware = {};
    hooksMiddleware.stack = 'dbcore';
    hooksMiddleware.name = 'HooksMiddleware';
    hooksMiddleware.level = 2;
    hooksMiddleware.create = v10000;
    const getExistingValues = function (table, req, effectiveKeys) {
        const v10001 = req.type;
        const v10002 = v10001 === 'add';
        const v10003 = [];
        const v10004 = Promise.resolve(v10003);
        const v10005 = req.trans;
        const v10006 = {
            trans: v10005,
            keys: effectiveKeys,
            cache: 'immutable'
        };
        const v10007 = table.getMany(v10006);
        let v10008;
        if (v10002) {
            v10008 = v10004;
        } else {
            v10008 = v10007;
        }
        return v10008;
    };
    const getFromTransactionCache = function (keys, cache, clone) {
        try {
            const v10009 = !cache;
            if (v10009) {
                return null;
            }
            const v10010 = cache.keys;
            const v10011 = v10010.length;
            const v10012 = keys.length;
            const v10013 = v10011 < v10012;
            if (v10013) {
                return null;
            }
            var result = [];
            var i = 0;
            var j = 0;
            const v10014 = cache.keys;
            const v10015 = v10014.length;
            const v10016 = i < v10015;
            const v10017 = keys.length;
            const v10018 = j < v10017;
            let v10019 = v10016 && v10018;
            while (v10019) {
                const v10021 = cache.keys;
                const v10022 = v10021[i];
                const v10023 = keys[j];
                const v10024 = cmp(v10022, v10023);
                const v10025 = v10024 !== 0;
                if (v10025) {
                    continue;
                }
                const v10026 = cache.values;
                const v10027 = v10026[i];
                const v10028 = deepClone(v10027);
                const v10029 = cache.values;
                const v10030 = v10029[i];
                let v10031;
                if (clone) {
                    v10031 = v10028;
                } else {
                    v10031 = v10030;
                }
                const v10032 = result.push(v10031);
                v10032;
                const v10033 = ++j;
                v10033;
                const v10020 = ++i;
                v10019 = v10016 && v10018;
            }
            const v10034 = result.length;
            const v10035 = keys.length;
            const v10036 = v10034 === v10035;
            let v10037;
            if (v10036) {
                v10037 = result;
            } else {
                v10037 = null;
            }
            return v10037;
        } catch (_a) {
            return null;
        }
    };
    const v10038 = -1;
    const v10070 = function (core) {
        const v10068 = function (tableName) {
            var table = core.table(tableName);
            const v10039 = {};
            const v10040 = __assign(v10039, table);
            const v10060 = function (req) {
                const v10041 = req.cache;
                const v10042 = !v10041;
                if (v10042) {
                    const v10043 = table.getMany(req);
                    return v10043;
                }
                const v10044 = req.keys;
                const v10045 = req.trans;
                const v10046 = v10045['_cache'];
                const v10047 = req.cache;
                const v10048 = v10047 === 'clone';
                var cachedResult = getFromTransactionCache(v10044, v10046, v10048);
                if (cachedResult) {
                    const v10049 = DexiePromise.resolve(cachedResult);
                    return v10049;
                }
                const v10050 = table.getMany(req);
                const v10058 = function (res) {
                    const v10051 = req.trans;
                    const v10052 = req.keys;
                    const v10053 = req.cache;
                    const v10054 = v10053 === 'clone';
                    const v10055 = deepClone(res);
                    let v10056;
                    if (v10054) {
                        v10056 = v10055;
                    } else {
                        v10056 = res;
                    }
                    const v10057 = {};
                    v10057.keys = v10052;
                    v10057.values = v10056;
                    v10051['_cache'] = v10057;
                    return res;
                };
                const v10059 = v10050.then(v10058);
                return v10059;
            };
            const v10065 = function (req) {
                const v10061 = req.type;
                const v10062 = v10061 !== 'add';
                if (v10062) {
                    const v10063 = req.trans;
                    v10063['_cache'] = null;
                }
                const v10064 = table.mutate(req);
                return v10064;
            };
            const v10066 = {
                getMany: v10060,
                mutate: v10065
            };
            const v10067 = __assign(v10040, v10066);
            return v10067;
        };
        const v10069 = {};
        v10069.table = v10068;
        return v10069;
    };
    var cacheExistingValuesMiddleware = {};
    cacheExistingValuesMiddleware.stack = 'dbcore';
    cacheExistingValuesMiddleware.level = v10038;
    cacheExistingValuesMiddleware.create = v10070;
    var _a;
    const isEmptyRange = function (node) {
        const v10071 = 'from' in node;
        const v10072 = !v10071;
        return v10072;
    };
    var RangeSet = function (fromOrTree, to) {
        if (this) {
            const v10073 = arguments.length;
            const v10074 = arguments.length;
            const v10075 = v10074 > 1;
            let v10076;
            if (v10075) {
                v10076 = to;
            } else {
                v10076 = fromOrTree;
            }
            const v10077 = {
                d: 1,
                from: fromOrTree,
                to: v10076
            };
            const v10078 = { d: 0 };
            let v10079;
            if (v10073) {
                v10079 = v10077;
            } else {
                v10079 = v10078;
            }
            const v10080 = extend(this, v10079);
            v10080;
        } else {
            var rv = new RangeSet();
            const v10081 = 'd' in fromOrTree;
            const v10082 = fromOrTree && v10081;
            if (v10082) {
                const v10083 = extend(rv, fromOrTree);
                v10083;
            }
            return rv;
        }
    };
    const v10084 = RangeSet.prototype;
    const v10086 = function (rangeSet) {
        const v10085 = mergeRanges(this, rangeSet);
        v10085;
        return this;
    };
    const v10088 = function (key) {
        const v10087 = addRange(this, key, key);
        v10087;
        return this;
    };
    const v10092 = function (keys) {
        var _this = this;
        const v10090 = function (key) {
            const v10089 = addRange(_this, key, key);
            return v10089;
        };
        const v10091 = keys.forEach(v10090);
        v10091;
        return this;
    };
    const v10093 = {};
    v10093.add = v10086;
    v10093.addKey = v10088;
    v10093.addKeys = v10092;
    const v10095 = function () {
        const v10094 = getRangeSetIterator(this);
        return v10094;
    };
    const v10096 = props(v10084, (_a = v10093, _a[iteratorSymbol] = v10095, _a));
    v10096;
    const addRange = function (target, from, to) {
        var diff = cmp(from, to);
        const v10097 = isNaN(diff);
        if (v10097) {
            return;
        }
        const v10098 = diff > 0;
        if (v10098) {
            const v10099 = RangeError();
            throw v10099;
        }
        const v10100 = isEmptyRange(target);
        if (v10100) {
            const v10101 = {
                from: from,
                to: to,
                d: 1
            };
            const v10102 = extend(target, v10101);
            return v10102;
        }
        var left = target.l;
        var right = target.r;
        const v10103 = target.from;
        const v10104 = cmp(to, v10103);
        const v10105 = v10104 < 0;
        if (v10105) {
            const v10106 = addRange(left, from, to);
            const v10107 = {};
            v10107.from = from;
            v10107.to = to;
            v10107.d = 1;
            v10107.l = null;
            v10107.r = null;
            let v10108;
            if (left) {
                v10108 = v10106;
            } else {
                v10108 = target.l = v10107;
            }
            v10108;
            const v10109 = rebalance(target);
            return v10109;
        }
        const v10110 = target.to;
        const v10111 = cmp(from, v10110);
        const v10112 = v10111 > 0;
        if (v10112) {
            const v10113 = addRange(right, from, to);
            const v10114 = {};
            v10114.from = from;
            v10114.to = to;
            v10114.d = 1;
            v10114.l = null;
            v10114.r = null;
            let v10115;
            if (right) {
                v10115 = v10113;
            } else {
                v10115 = target.r = v10114;
            }
            v10115;
            const v10116 = rebalance(target);
            return v10116;
        }
        const v10117 = target.from;
        const v10118 = cmp(from, v10117);
        const v10119 = v10118 < 0;
        if (v10119) {
            target.from = from;
            target.l = null;
            const v10120 = right.d;
            const v10121 = v10120 + 1;
            let v10122;
            if (right) {
                v10122 = v10121;
            } else {
                v10122 = 1;
            }
            target.d = v10122;
        }
        const v10123 = target.to;
        const v10124 = cmp(to, v10123);
        const v10125 = v10124 > 0;
        if (v10125) {
            target.to = to;
            target.r = null;
            const v10126 = target.l;
            const v10127 = target.l;
            const v10128 = v10127.d;
            const v10129 = v10128 + 1;
            let v10130;
            if (v10126) {
                v10130 = v10129;
            } else {
                v10130 = 1;
            }
            target.d = v10130;
        }
        const v10131 = target.r;
        const v10132 = !v10131;
        var rightWasCutOff = v10132;
        const v10133 = target.l;
        const v10134 = !v10133;
        const v10135 = left && v10134;
        if (v10135) {
            const v10136 = mergeRanges(target, left);
            v10136;
        }
        const v10137 = right && rightWasCutOff;
        if (v10137) {
            const v10138 = mergeRanges(target, right);
            v10138;
        }
    };
    const mergeRanges = function (target, newSet) {
        const _addRangeSet = function (target, _a) {
            var from = _a.from;
            var to = _a.to;
            var l = _a.l;
            var r = _a.r;
            const v10139 = addRange(target, from, to);
            v10139;
            if (l) {
                const v10140 = _addRangeSet(target, l);
                v10140;
            }
            if (r) {
                const v10141 = _addRangeSet(target, r);
                v10141;
            }
        };
        const v10142 = isEmptyRange(newSet);
        const v10143 = !v10142;
        if (v10143) {
            const v10144 = _addRangeSet(target, newSet);
            v10144;
        }
    };
    const rangesOverlap = function (rangeSet1, rangeSet2) {
        var i1 = getRangeSetIterator(rangeSet2);
        var nextResult1 = i1.next();
        const v10145 = nextResult1.done;
        if (v10145) {
            return false;
        }
        var a = nextResult1.value;
        var i2 = getRangeSetIterator(rangeSet1);
        const v10146 = a.from;
        var nextResult2 = i2.next(v10146);
        var b = nextResult2.value;
        const v10147 = nextResult1.done;
        const v10148 = !v10147;
        const v10149 = nextResult2.done;
        const v10150 = !v10149;
        let v10151 = v10148 && v10150;
        while (v10151) {
            const v10152 = b.from;
            const v10153 = a.to;
            const v10154 = cmp(v10152, v10153);
            const v10155 = v10154 <= 0;
            const v10156 = b.to;
            const v10157 = a.from;
            const v10158 = cmp(v10156, v10157);
            const v10159 = v10158 >= 0;
            const v10160 = v10155 && v10159;
            if (v10160) {
                return true;
            }
            const v10161 = a.from;
            const v10162 = b.from;
            const v10163 = cmp(v10161, v10162);
            const v10164 = v10163 < 0;
            const v10165 = b.from;
            const v10166 = a.from;
            let v10167;
            if (v10164) {
                a = (nextResult1 = i1.next(v10165)).value;
                v10167 = a;
            } else {
                v10167 = b = (nextResult2 = i2.next(v10166)).value;
            }
            v10167;
            v10151 = v10148 && v10150;
        }
        return false;
    };
    const getRangeSetIterator = function (node) {
        let state;
        const v10168 = isEmptyRange(node);
        const v10169 = {
            s: 0,
            n: node
        };
        if (v10168) {
            state = null;
        } else {
            state = v10169;
        }
        const v10198 = function (key) {
            const v10170 = arguments.length;
            var keyProvided = v10170 > 0;
            while (state) {
                const v10171 = state.s;
                switch (v10171) {
                case 0:
                    state.s = 1;
                    if (keyProvided) {
                        const v10172 = state.n;
                        const v10173 = v10172.l;
                        const v10174 = state.n;
                        const v10175 = v10174.from;
                        const v10176 = cmp(key, v10175);
                        const v10177 = v10176 < 0;
                        let v10178 = v10173 && v10177;
                        while (v10178) {
                            const v10179 = state.n;
                            const v10180 = v10179.l;
                            state.up = state;
                            state.n = v10180;
                            state.s = 1;
                            state = {};
                            state = {};
                            v10178 = v10173 && v10177;
                        }
                    } else {
                        const v10181 = state.n;
                        let v10182 = v10181.l;
                        while (v10182) {
                            const v10183 = state.n;
                            const v10184 = v10183.l;
                            state.up = state;
                            state.n = v10184;
                            state.s = 1;
                            state = {};
                            state = {};
                            v10182 = v10181.l;
                        }
                    }
                case 1:
                    state.s = 2;
                    const v10185 = !keyProvided;
                    const v10186 = state.n;
                    const v10187 = v10186.to;
                    const v10188 = cmp(key, v10187);
                    const v10189 = v10188 <= 0;
                    const v10190 = v10185 || v10189;
                    if (v10190) {
                        const v10191 = state.n;
                        const v10192 = {};
                        v10192.value = v10191;
                        v10192.done = false;
                        return v10192;
                    }
                case 2:
                    const v10193 = state.n;
                    const v10194 = v10193.r;
                    if (v10194) {
                        state.s = 3;
                        const v10195 = state.n;
                        const v10196 = v10195.r;
                        state.up = state;
                        state.n = v10196;
                        state.s = 0;
                        state = {};
                        state = {};
                        continue;
                    }
                case 3:
                    state = state.up;
                }
            }
            const v10197 = {};
            v10197.done = true;
            return v10197;
        };
        const v10199 = {};
        v10199.next = v10198;
        return v10199;
    };
    const rebalance = function (target) {
        var _a;
        var _b;
        const v10200 = (_a = target.r) === null;
        const v10201 = void 0;
        const v10202 = _a === v10201;
        const v10203 = v10200 || v10202;
        const v10204 = void 0;
        const v10205 = _a.d;
        let v10206;
        if (v10203) {
            v10206 = v10204;
        } else {
            v10206 = v10205;
        }
        const v10207 = v10206 || 0;
        const v10208 = (_b = target.l) === null;
        const v10209 = void 0;
        const v10210 = _b === v10209;
        const v10211 = v10208 || v10210;
        const v10212 = void 0;
        const v10213 = _b.d;
        let v10214;
        if (v10211) {
            v10214 = v10212;
        } else {
            v10214 = v10213;
        }
        const v10215 = v10214 || 0;
        var diff = v10207 - v10215;
        let r;
        const v10216 = diff > 1;
        const v10217 = -1;
        const v10218 = diff < v10217;
        let v10219;
        if (v10218) {
            v10219 = 'l';
        } else {
            v10219 = '';
        }
        if (v10216) {
            r = 'r';
        } else {
            r = v10219;
        }
        if (r) {
            let l;
            const v10220 = r === 'r';
            if (v10220) {
                l = 'l';
            } else {
                l = 'r';
            }
            const v10221 = {};
            var rootClone = __assign(v10221, target);
            var oldRootRight = target[r];
            const v10222 = oldRootRight.from;
            target.from = v10222;
            const v10223 = oldRootRight.to;
            target.to = v10223;
            const v10224 = oldRootRight[r];
            target[r] = v10224;
            const v10225 = oldRootRight[l];
            rootClone[r] = v10225;
            target[l] = rootClone;
            const v10226 = computeDepth(rootClone);
            rootClone.d = v10226;
        }
        const v10227 = computeDepth(target);
        target.d = v10227;
    };
    const computeDepth = function (_a) {
        var r = _a.r;
        var l = _a.l;
        const v10228 = r.d;
        const v10229 = l.d;
        const v10230 = Math.max(v10228, v10229);
        const v10231 = r.d;
        let v10232;
        if (l) {
            v10232 = v10230;
        } else {
            v10232 = v10231;
        }
        const v10233 = l.d;
        let v10234;
        if (l) {
            v10234 = v10233;
        } else {
            v10234 = 0;
        }
        let v10235;
        if (r) {
            v10235 = v10232;
        } else {
            v10235 = v10234;
        }
        const v10236 = v10235 + 1;
        return v10236;
    };
    const v10386 = function (core) {
        const v10237 = core.schema;
        var dbName = v10237.name;
        const v10238 = core.MIN_KEY;
        const v10239 = core.MAX_KEY;
        var FULL_RANGE = new RangeSet(v10238, v10239);
        const v10240 = {};
        const v10241 = __assign(v10240, core);
        const v10383 = function (tableName) {
            var table = core.table(tableName);
            var schema = table.schema;
            var primaryKey = schema.primaryKey;
            var extractKey = primaryKey.extractKey;
            var outbound = primaryKey.outbound;
            const v10242 = {};
            const v10243 = __assign(v10242, table);
            const v10294 = function (req) {
                var trans = req.trans;
                const v10244 = trans.mutatedParts;
                const v10245 = {};
                var mutatedParts = v10244 || (trans.mutatedParts = v10245);
                var getRangeSet = function (indexName) {
                    const v10246 = 'idb://' + dbName;
                    const v10247 = v10246 + '/';
                    const v10248 = v10247 + tableName;
                    const v10249 = v10248 + '/';
                    var part = v10249 + indexName;
                    const v10250 = mutatedParts[part];
                    const v10251 = v10250 || (mutatedParts[part] = new RangeSet());
                    return v10251;
                };
                var pkRangeSet = getRangeSet('');
                var delsRangeSet = getRangeSet(':dels');
                var type = req.type;
                let _a;
                const v10252 = req.type;
                const v10253 = v10252 === 'deleteRange';
                const v10254 = req.range;
                const v10255 = [v10254];
                const v10256 = req.type;
                const v10257 = v10256 === 'delete';
                const v10258 = req.keys;
                const v10259 = [v10258];
                const v10260 = req.values;
                const v10261 = v10260.length;
                const v10262 = v10261 < 50;
                const v10263 = [];
                const v10264 = req.values;
                const v10265 = [
                    v10263,
                    v10264
                ];
                const v10266 = [];
                let v10267;
                if (v10262) {
                    v10267 = v10265;
                } else {
                    v10267 = v10266;
                }
                let v10268;
                if (v10257) {
                    v10268 = v10259;
                } else {
                    v10268 = v10267;
                }
                if (v10253) {
                    _a = v10255;
                } else {
                    _a = v10268;
                }
                var keys = _a[0];
                var newObjs = _a[1];
                const v10269 = req.trans;
                var oldCache = v10269['_cache'];
                const v10270 = table.mutate(req);
                const v10292 = function (res) {
                    const v10271 = isArray(keys);
                    if (v10271) {
                        const v10272 = type !== 'delete';
                        if (v10272) {
                            keys = res.results;
                        }
                        const v10273 = pkRangeSet.addKeys(keys);
                        v10273;
                        var oldObjs = getFromTransactionCache(keys, oldCache);
                        const v10274 = !oldObjs;
                        const v10275 = type !== 'add';
                        const v10276 = v10274 && v10275;
                        if (v10276) {
                            const v10277 = delsRangeSet.addKeys(keys);
                            v10277;
                        }
                        const v10278 = oldObjs || newObjs;
                        if (v10278) {
                            const v10279 = trackAffectedIndexes(getRangeSet, schema, oldObjs, newObjs);
                            v10279;
                        }
                    } else {
                        if (keys) {
                            const v10280 = keys.lower;
                            const v10281 = keys.upper;
                            var range = {};
                            range.from = v10280;
                            range.to = v10281;
                            const v10282 = delsRangeSet.add(range);
                            v10282;
                            const v10283 = pkRangeSet.add(range);
                            v10283;
                        } else {
                            const v10284 = pkRangeSet.add(FULL_RANGE);
                            v10284;
                            const v10285 = delsRangeSet.add(FULL_RANGE);
                            v10285;
                            const v10286 = schema.indexes;
                            const v10290 = function (idx) {
                                const v10287 = idx.name;
                                const v10288 = getRangeSet(v10287);
                                const v10289 = v10288.add(FULL_RANGE);
                                return v10289;
                            };
                            const v10291 = v10286.forEach(v10290);
                            v10291;
                        }
                    }
                    return res;
                };
                const v10293 = v10270.then(v10292);
                return v10293;
            };
            const v10295 = { mutate: v10294 };
            var tableClone = __assign(v10243, v10295);
            var getRange = function (_a) {
                var _b;
                var _c;
                var _d = _a.query;
                var index = _d.index;
                var range = _d.range;
                const v10296 = (_b = range.lower) !== null;
                const v10297 = void 0;
                const v10298 = _b !== v10297;
                const v10299 = v10296 && v10298;
                const v10300 = core.MIN_KEY;
                let v10301;
                if (v10299) {
                    v10301 = _b;
                } else {
                    v10301 = v10300;
                }
                const v10302 = (_c = range.upper) !== null;
                const v10303 = void 0;
                const v10304 = _c !== v10303;
                const v10305 = v10302 && v10304;
                const v10306 = core.MAX_KEY;
                let v10307;
                if (v10305) {
                    v10307 = _c;
                } else {
                    v10307 = v10306;
                }
                const v10308 = new RangeSet(v10301, v10307);
                const v10309 = [
                    index,
                    v10308
                ];
                return v10309;
            };
            const v10313 = function (req) {
                const v10310 = req.key;
                const v10311 = new RangeSet(v10310);
                const v10312 = [
                    primaryKey,
                    v10311
                ];
                return v10312;
            };
            const v10318 = function (req) {
                const v10314 = new RangeSet();
                const v10315 = req.keys;
                const v10316 = v10314.addKeys(v10315);
                const v10317 = [
                    primaryKey,
                    v10316
                ];
                return v10317;
            };
            var readSubscribers = {};
            readSubscribers.get = v10313;
            readSubscribers.getMany = v10318;
            readSubscribers.count = getRange;
            readSubscribers.query = getRange;
            readSubscribers.openCursor = getRange;
            const v10319 = keys(readSubscribers);
            const v10381 = function (method) {
                const v10380 = function (req) {
                    var subscr = PSD.subscr;
                    if (subscr) {
                        var getRangeSet = function (indexName) {
                            const v10320 = 'idb://' + dbName;
                            const v10321 = v10320 + '/';
                            const v10322 = v10321 + tableName;
                            const v10323 = v10322 + '/';
                            var part = v10323 + indexName;
                            const v10324 = subscr[part];
                            const v10325 = v10324 || (subscr[part] = new RangeSet());
                            return v10325;
                        };
                        var pkRangeSet_1 = getRangeSet('');
                        var delsRangeSet_1 = getRangeSet(':dels');
                        var _a = readSubscribers[method](req);
                        var queriedIndex = _a[0];
                        var queriedRanges = _a[1];
                        const v10326 = queriedIndex.name;
                        const v10327 = v10326 || '';
                        const v10328 = getRangeSet(v10327);
                        const v10329 = v10328.add(queriedRanges);
                        v10329;
                        const v10330 = queriedIndex.isPrimaryKey;
                        const v10331 = !v10330;
                        if (v10331) {
                            const v10332 = method === 'count';
                            if (v10332) {
                                const v10333 = delsRangeSet_1.add(FULL_RANGE);
                                v10333;
                            } else {
                                const v10334 = method === 'query';
                                const v10335 = v10334 && outbound;
                                const v10336 = req.values;
                                const v10337 = v10335 && v10336;
                                const v10338 = {};
                                const v10339 = __assign(v10338, req);
                                const v10340 = { values: false };
                                const v10341 = __assign(v10339, v10340);
                                const v10342 = table.query(v10341);
                                var keysPromise_1 = v10337 && v10342;
                                const v10343 = table[method];
                                const v10344 = v10343.apply(this, arguments);
                                const v10376 = function (res) {
                                    const v10345 = method === 'query';
                                    if (v10345) {
                                        const v10346 = req.values;
                                        const v10347 = outbound && v10346;
                                        if (v10347) {
                                            const v10349 = function (_a) {
                                                var resultingKeys = _a.result;
                                                const v10348 = pkRangeSet_1.addKeys(resultingKeys);
                                                v10348;
                                                return res;
                                            };
                                            const v10350 = keysPromise_1.then(v10349);
                                            return v10350;
                                        }
                                        let pKeys;
                                        const v10351 = req.values;
                                        const v10352 = res.result;
                                        const v10353 = v10352.map(extractKey);
                                        const v10354 = res.result;
                                        if (v10351) {
                                            pKeys = v10353;
                                        } else {
                                            pKeys = v10354;
                                        }
                                        const v10355 = req.values;
                                        if (v10355) {
                                            const v10356 = pkRangeSet_1.addKeys(pKeys);
                                            v10356;
                                        } else {
                                            const v10357 = delsRangeSet_1.addKeys(pKeys);
                                            v10357;
                                        }
                                    } else {
                                        const v10358 = method === 'openCursor';
                                        if (v10358) {
                                            var cursor_1 = res;
                                            var wantValues_1 = req.values;
                                            const v10362 = function () {
                                                const v10359 = cursor_1.primaryKey;
                                                const v10360 = delsRangeSet_1.addKey(v10359);
                                                v10360;
                                                const v10361 = cursor_1.key;
                                                return v10361;
                                            };
                                            const v10363 = {};
                                            v10363.get = v10362;
                                            const v10365 = function () {
                                                var pkey = cursor_1.primaryKey;
                                                const v10364 = delsRangeSet_1.addKey(pkey);
                                                v10364;
                                                return pkey;
                                            };
                                            const v10366 = {};
                                            v10366.get = v10365;
                                            const v10371 = function () {
                                                const v10367 = cursor_1.primaryKey;
                                                const v10368 = pkRangeSet_1.addKey(v10367);
                                                const v10369 = wantValues_1 && v10368;
                                                v10369;
                                                const v10370 = cursor_1.value;
                                                return v10370;
                                            };
                                            const v10372 = {};
                                            v10372.get = v10371;
                                            const v10373 = {
                                                key: v10363,
                                                primaryKey: v10366,
                                                value: v10372
                                            };
                                            const v10374 = Object.create(cursor_1, v10373);
                                            const v10375 = cursor_1 && v10374;
                                            return v10375;
                                        }
                                    }
                                    return res;
                                };
                                const v10377 = v10344.then(v10376);
                                return v10377;
                            }
                        }
                    }
                    const v10378 = table[method];
                    const v10379 = v10378.apply(this, arguments);
                    return v10379;
                };
                tableClone[method] = v10380;
            };
            const v10382 = v10319.forEach(v10381);
            v10382;
            return tableClone;
        };
        const v10384 = { table: v10383 };
        const v10385 = __assign(v10241, v10384);
        return v10385;
    };
    var observabilityMiddleware = {};
    observabilityMiddleware.stack = 'dbcore';
    observabilityMiddleware.level = 0;
    observabilityMiddleware.create = v10386;
    const trackAffectedIndexes = function (getRangeSet, schema, oldObjs, newObjs) {
        const addAffectedIndex = function (ix) {
            const v10387 = ix.name;
            const v10388 = v10387 || '';
            var rangeSet = getRangeSet(v10388);
            const extractKey = function (obj) {
                const v10389 = obj != null;
                const v10390 = ix.extractKey(obj);
                let v10391;
                if (v10389) {
                    v10391 = v10390;
                } else {
                    v10391 = null;
                }
                return v10391;
            };
            var addKeyOrKeys = function (key) {
                const v10392 = ix.multiEntry;
                const v10393 = isArray(key);
                const v10394 = v10392 && v10393;
                const v10396 = function (key) {
                    const v10395 = rangeSet.addKey(key);
                    return v10395;
                };
                const v10397 = key.forEach(v10396);
                const v10398 = rangeSet.addKey(key);
                let v10399;
                if (v10394) {
                    v10399 = v10397;
                } else {
                    v10399 = v10398;
                }
                return v10399;
            };
            const v10400 = oldObjs || newObjs;
            const v10411 = function (_, i) {
                const v10401 = oldObjs[i];
                const v10402 = extractKey(v10401);
                var oldKey = oldObjs && v10402;
                const v10403 = newObjs[i];
                const v10404 = extractKey(v10403);
                var newKey = newObjs && v10404;
                const v10405 = cmp(oldKey, newKey);
                const v10406 = v10405 !== 0;
                if (v10406) {
                    const v10407 = oldKey != null;
                    if (v10407) {
                        const v10408 = addKeyOrKeys(oldKey);
                        v10408;
                    }
                    const v10409 = newKey != null;
                    if (v10409) {
                        const v10410 = addKeyOrKeys(newKey);
                        v10410;
                    }
                }
            };
            const v10412 = v10400.forEach(v10411);
            v10412;
        };
        const v10413 = schema.indexes;
        const v10414 = v10413.forEach(addAffectedIndex);
        v10414;
    };
    const v10771 = function () {
        const Dexie = function (name, options) {
            var _this = this;
            const v10415 = {};
            this._middlewares = v10415;
            this.verno = 0;
            var deps = Dexie.dependencies;
            const v10416 = Dexie.addons;
            const v10417 = deps.indexedDB;
            const v10418 = deps.IDBKeyRange;
            const v10419 = {
                addons: v10416,
                autoOpen: true,
                indexedDB: v10417,
                IDBKeyRange: v10418
            };
            options = __assign(v10419, options);
            this._options = options;
            const v10420 = options.indexedDB;
            const v10421 = options.IDBKeyRange;
            const v10422 = {};
            v10422.indexedDB = v10420;
            v10422.IDBKeyRange = v10421;
            this._deps = v10422;
            var addons = options.addons;
            const v10423 = {};
            this._dbSchema = v10423;
            this._versions = [];
            this._storeNames = [];
            const v10424 = {};
            this._allTables = v10424;
            this.idbdb = null;
            this._novip = this;
            var state = {};
            state.dbOpenError = null;
            state.isBeingOpened = false;
            state.onReadyBeingFired = null;
            state.openComplete = false;
            state.dbReadyResolve = nop;
            state.dbReadyPromise = null;
            state.cancelOpen = nop;
            state.openCanceller = null;
            state.autoSchema = true;
            state.PR1398_maxLoop = 3;
            const v10425 = function (resolve) {
                state.dbReadyResolve = resolve;
            };
            state.dbReadyPromise = new DexiePromise(v10425);
            const v10426 = function (_, reject) {
                state.cancelOpen = reject;
            };
            state.openCanceller = new DexiePromise(v10426);
            this._state = state;
            this.name = name;
            const v10427 = [
                promisableChain,
                nop
            ];
            const v10428 = { ready: v10427 };
            const v10429 = Events(this, 'populate', 'blocked', 'versionchange', 'close', v10428);
            this.on = v10429;
            const v10432 = this.on;
            const v10433 = v10432.ready;
            const v10434 = v10433.subscribe;
            const v10458 = function (subscribe) {
                const v10457 = function (subscriber, bSticky) {
                    const v10455 = function () {
                        var state = _this._state;
                        const v10435 = state.openComplete;
                        if (v10435) {
                            const v10436 = state.dbOpenError;
                            const v10437 = !v10436;
                            if (v10437) {
                                const v10438 = DexiePromise.resolve();
                                const v10439 = v10438.then(subscriber);
                                v10439;
                            }
                            if (bSticky) {
                                const v10440 = subscribe(subscriber);
                                v10440;
                            }
                        } else {
                            const v10441 = state.onReadyBeingFired;
                            if (v10441) {
                                const v10442 = state.onReadyBeingFired;
                                const v10443 = v10442.push(subscriber);
                                v10443;
                                if (bSticky) {
                                    const v10444 = subscribe(subscriber);
                                    v10444;
                                }
                            } else {
                                const v10445 = subscribe(subscriber);
                                v10445;
                                var db_1 = _this;
                                const v10446 = !bSticky;
                                if (v10446) {
                                    const v10453 = function unsubscribe() {
                                        const v10447 = db_1.on;
                                        const v10448 = v10447.ready;
                                        const v10449 = v10448.unsubscribe(subscriber);
                                        v10449;
                                        const v10450 = db_1.on;
                                        const v10451 = v10450.ready;
                                        const v10452 = v10451.unsubscribe(unsubscribe);
                                        v10452;
                                    };
                                    const v10454 = subscribe(v10453);
                                    v10454;
                                }
                            }
                        }
                    };
                    const v10456 = Dexie.vip(v10455);
                    v10456;
                };
                return v10457;
            };
            const v10459 = override(v10434, v10458);
            v10431.subscribe = v10459;
            const v10460 = createCollectionConstructor(this);
            this.Collection = v10460;
            const v10461 = createTableConstructor(this);
            this.Table = v10461;
            const v10462 = createTransactionConstructor(this);
            this.Transaction = v10462;
            const v10463 = createVersionConstructor(this);
            this.Version = v10463;
            const v10464 = createWhereClauseConstructor(this);
            this.WhereClause = v10464;
            const v10476 = function (ev) {
                const v10465 = ev.newVersion;
                const v10466 = v10465 > 0;
                if (v10466) {
                    const v10467 = _this.name;
                    const v10468 = 'Another connection wants to upgrade database \'' + v10467;
                    const v10469 = v10468 + '\'. Closing db now to resume the upgrade.';
                    const v10470 = console.warn(v10469);
                    v10470;
                } else {
                    const v10471 = _this.name;
                    const v10472 = 'Another connection wants to delete database \'' + v10471;
                    const v10473 = v10472 + '\'. Closing db now to resume the delete request.';
                    const v10474 = console.warn(v10473);
                    v10474;
                }
                const v10475 = _this.close();
                v10475;
            };
            const v10477 = this.on('versionchange', v10476);
            v10477;
            const v10495 = function (ev) {
                const v10478 = ev.newVersion;
                const v10479 = !v10478;
                const v10480 = ev.newVersion;
                const v10481 = ev.oldVersion;
                const v10482 = v10480 < v10481;
                const v10483 = v10479 || v10482;
                if (v10483) {
                    const v10484 = _this.name;
                    const v10485 = 'Dexie.delete(\'' + v10484;
                    const v10486 = v10485 + '\') was blocked';
                    const v10487 = console.warn(v10486);
                    v10487;
                } else {
                    const v10488 = _this.name;
                    const v10489 = 'Upgrade \'' + v10488;
                    const v10490 = v10489 + '\' blocked by other connection holding version ';
                    const v10491 = ev.oldVersion;
                    const v10492 = v10491 / 10;
                    const v10493 = v10490 + v10492;
                    const v10494 = console.warn(v10493);
                    v10494;
                }
            };
            const v10496 = this.on('blocked', v10495);
            v10496;
            const v10497 = options.IDBKeyRange;
            const v10498 = getMaxKey(v10497);
            this._maxKey = v10498;
            const v10502 = function (mode, storeNames, dbschema, parentTransaction) {
                const v10499 = _this._options;
                const v10500 = v10499.chromeTransactionDurability;
                const v10501 = new _this.Transaction(mode, storeNames, dbschema, v10500, parentTransaction);
                return v10501;
            };
            this._createTransaction = v10502;
            const v10520 = function (ev) {
                const v10503 = _this.on('blocked');
                const v10504 = v10503.fire(ev);
                v10504;
                const v10514 = function (c) {
                    const v10505 = c.name;
                    const v10506 = _this.name;
                    const v10507 = v10505 === v10506;
                    const v10508 = c !== _this;
                    const v10509 = v10507 && v10508;
                    const v10510 = c._state;
                    const v10511 = v10510.vcFired;
                    const v10512 = !v10511;
                    const v10513 = v10509 && v10512;
                    return v10513;
                };
                const v10515 = connections.filter(v10514);
                const v10518 = function (c) {
                    const v10516 = c.on('versionchange');
                    const v10517 = v10516.fire(ev);
                    return v10517;
                };
                const v10519 = v10515.map(v10518);
                v10519;
            };
            this._fireOnBlocked = v10520;
            const v10521 = this.use(virtualIndexMiddleware);
            v10521;
            const v10522 = this.use(hooksMiddleware);
            v10522;
            const v10523 = this.use(observabilityMiddleware);
            v10523;
            const v10524 = this.use(cacheExistingValuesMiddleware);
            v10524;
            const v10525 = {};
            v10525.value = true;
            const v10526 = { _vip: v10525 };
            const v10527 = Object.create(this, v10526);
            this.vip = v10527;
            const v10529 = function (addon) {
                const v10528 = addon(_this);
                return v10528;
            };
            const v10530 = addons.forEach(v10529);
            v10530;
        };
        const v10531 = Dexie.prototype;
        const v10555 = function (versionNumber) {
            const v10532 = isNaN(versionNumber);
            const v10533 = versionNumber < 0.1;
            const v10534 = v10532 || v10533;
            if (v10534) {
                const v10535 = new exceptions.Type('Given version is not a positive number');
                throw v10535;
            }
            const v10536 = versionNumber * 10;
            const v10537 = Math.round(v10536);
            versionNumber = v10537 / 10;
            const v10538 = this.idbdb;
            const v10539 = this._state;
            const v10540 = v10539.isBeingOpened;
            const v10541 = v10538 || v10540;
            if (v10541) {
                const v10542 = new exceptions.Schema('Cannot add version when database is open');
                throw v10542;
            }
            const v10543 = this.verno;
            const v10544 = Math.max(v10543, versionNumber);
            this.verno = v10544;
            var versions = this._versions;
            const v10548 = function (v) {
                const v10545 = v._cfg;
                const v10546 = v10545.version;
                const v10547 = v10546 === versionNumber;
                return v10547;
            };
            const v10549 = versions.filter(v10548);
            var versionInstance = v10549[0];
            if (versionInstance) {
                return versionInstance;
            }
            versionInstance = new this.Version(versionNumber);
            const v10550 = versions.push(versionInstance);
            v10550;
            const v10551 = versions.sort(lowerVersionFirst);
            v10551;
            const v10552 = {};
            const v10553 = versionInstance.stores(v10552);
            v10553;
            const v10554 = this._state;
            v10554.autoSchema = false;
            return versionInstance;
        };
        v10531.version = v10555;
        const v10556 = Dexie.prototype;
        const v10589 = function (fn) {
            var _this = this;
            const v10557 = this.idbdb;
            const v10558 = this._state;
            const v10559 = v10558.openComplete;
            const v10560 = PSD.letThrough;
            const v10561 = v10559 || v10560;
            const v10562 = this._vip;
            const v10563 = v10561 || v10562;
            const v10564 = v10557 && v10563;
            const v10565 = fn();
            const v10585 = function (resolve, reject) {
                const v10566 = _this._state;
                const v10567 = v10566.openComplete;
                if (v10567) {
                    const v10568 = _this._state;
                    const v10569 = v10568.dbOpenError;
                    const v10570 = new exceptions.DatabaseClosed(v10569);
                    const v10571 = reject(v10570);
                    return v10571;
                }
                const v10572 = _this._state;
                const v10573 = v10572.isBeingOpened;
                const v10574 = !v10573;
                if (v10574) {
                    const v10575 = _this._options;
                    const v10576 = v10575.autoOpen;
                    const v10577 = !v10576;
                    if (v10577) {
                        const v10578 = new exceptions.DatabaseClosed();
                        const v10579 = reject(v10578);
                        v10579;
                        return;
                    }
                    const v10580 = _this.open();
                    const v10581 = v10580.catch(nop);
                    v10581;
                }
                const v10582 = _this._state;
                const v10583 = v10582.dbReadyPromise;
                const v10584 = v10583.then(resolve, reject);
                v10584;
            };
            const v10586 = new DexiePromise(v10585);
            const v10587 = v10586.then(fn);
            let v10588;
            if (v10564) {
                v10588 = v10565;
            } else {
                v10588 = v10587;
            }
            return v10588;
        };
        v10556._whenReady = v10589;
        const v10590 = Dexie.prototype;
        const v10605 = function (_a) {
            var stack = _a.stack;
            var create = _a.create;
            var level = _a.level;
            var name = _a.name;
            if (name) {
                const v10591 = {
                    stack: stack,
                    name: name
                };
                const v10592 = this.unuse(v10591);
                v10592;
            }
            const v10593 = this._middlewares;
            const v10594 = v10593[stack];
            const v10595 = this._middlewares;
            var middlewares = v10594 || (v10595[stack] = []);
            const v10596 = level == null;
            let v10597;
            if (v10596) {
                v10597 = 10;
            } else {
                v10597 = level;
            }
            const v10598 = {
                stack: stack,
                create: create,
                level: v10597,
                name: name
            };
            const v10599 = middlewares.push(v10598);
            v10599;
            const v10603 = function (a, b) {
                const v10600 = a.level;
                const v10601 = b.level;
                const v10602 = v10600 - v10601;
                return v10602;
            };
            const v10604 = middlewares.sort(v10603);
            v10604;
            return this;
        };
        v10590.use = v10605;
        const v10606 = Dexie.prototype;
        const v10621 = function (_a) {
            var stack = _a.stack;
            var name = _a.name;
            var create = _a.create;
            const v10607 = this._middlewares;
            const v10608 = v10607[stack];
            const v10609 = stack && v10608;
            if (v10609) {
                const v10611 = this._middlewares;
                const v10612 = v10611[stack];
                const v10619 = function (mw) {
                    const v10613 = mw.create;
                    const v10614 = v10613 !== create;
                    const v10615 = mw.name;
                    const v10616 = v10615 !== name;
                    let v10617;
                    if (name) {
                        v10617 = v10616;
                    } else {
                        v10617 = false;
                    }
                    let v10618;
                    if (create) {
                        v10618 = v10614;
                    } else {
                        v10618 = v10617;
                    }
                    return v10618;
                };
                const v10620 = v10612.filter(v10619);
                v10610[stack] = v10620;
            }
            return this;
        };
        v10606.unuse = v10621;
        const v10622 = Dexie.prototype;
        const v10624 = function () {
            const v10623 = dexieOpen(this);
            return v10623;
        };
        v10622.open = v10624;
        const v10625 = Dexie.prototype;
        const v10634 = function () {
            var state = this._state;
            var idx = connections.indexOf(this);
            const v10626 = idx >= 0;
            if (v10626) {
                const v10627 = connections.splice(idx, 1);
                v10627;
            }
            const v10628 = this.idbdb;
            if (v10628) {
                try {
                    const v10629 = this.idbdb;
                    const v10630 = v10629.close();
                    v10630;
                } catch (e) {
                }
                const v10631 = this._novip;
                v10631.idbdb = null;
            }
            const v10632 = function (resolve) {
                state.dbReadyResolve = resolve;
            };
            state.dbReadyPromise = new DexiePromise(v10632);
            const v10633 = function (_, reject) {
                state.cancelOpen = reject;
            };
            state.openCanceller = new DexiePromise(v10633);
        };
        v10625._close = v10634;
        const v10635 = Dexie.prototype;
        const v10641 = function () {
            const v10636 = this._close();
            v10636;
            var state = this._state;
            const v10637 = this._options;
            v10637.autoOpen = false;
            state.dbOpenError = new exceptions.DatabaseClosed();
            const v10638 = state.isBeingOpened;
            if (v10638) {
                const v10639 = state.dbOpenError;
                const v10640 = state.cancelOpen(v10639);
                v10640;
            }
        };
        v10635.close = v10641;
        const v10642 = Dexie.prototype;
        const v10663 = function () {
            var _this = this;
            const v10643 = arguments.length;
            var hasArguments = v10643 > 0;
            var state = this._state;
            const v10661 = function (resolve, reject) {
                var doDelete = function () {
                    const v10644 = _this.close();
                    v10644;
                    const v10645 = _this._deps;
                    const v10646 = v10645.indexedDB;
                    const v10647 = _this.name;
                    var req = v10646.deleteDatabase(v10647);
                    const v10652 = function () {
                        const v10648 = _this._deps;
                        const v10649 = _this.name;
                        const v10650 = _onDatabaseDeleted(v10648, v10649);
                        v10650;
                        const v10651 = resolve();
                        v10651;
                    };
                    const v10653 = wrap(v10652);
                    req.onsuccess = v10653;
                    const v10654 = eventRejectHandler(reject);
                    req.onerror = v10654;
                    const v10655 = _this._fireOnBlocked;
                    req.onblocked = v10655;
                };
                if (hasArguments) {
                    const v10656 = new exceptions.InvalidArgument('Arguments not allowed in db.delete()');
                    throw v10656;
                }
                const v10657 = state.isBeingOpened;
                if (v10657) {
                    const v10658 = state.dbReadyPromise;
                    const v10659 = v10658.then(doDelete);
                    v10659;
                } else {
                    const v10660 = doDelete();
                    v10660;
                }
            };
            const v10662 = new DexiePromise(v10661);
            return v10662;
        };
        v10642.delete = v10663;
        const v10664 = Dexie.prototype;
        const v10666 = function () {
            const v10665 = this.idbdb;
            return v10665;
        };
        v10664.backendDB = v10666;
        const v10667 = Dexie.prototype;
        const v10670 = function () {
            const v10668 = this.idbdb;
            const v10669 = v10668 !== null;
            return v10669;
        };
        v10667.isOpen = v10670;
        const v10671 = Dexie.prototype;
        const v10676 = function () {
            const v10672 = this._state;
            var dbOpenError = v10672.dbOpenError;
            const v10673 = dbOpenError.name;
            const v10674 = v10673 === 'DatabaseClosed';
            const v10675 = dbOpenError && v10674;
            return v10675;
        };
        v10671.hasBeenClosed = v10676;
        const v10677 = Dexie.prototype;
        const v10681 = function () {
            const v10678 = this._state;
            const v10679 = v10678.dbOpenError;
            const v10680 = v10679 !== null;
            return v10680;
        };
        v10677.hasFailed = v10681;
        const v10682 = Dexie.prototype;
        const v10685 = function () {
            const v10683 = this._state;
            const v10684 = v10683.autoSchema;
            return v10684;
        };
        v10682.dynamicallyOpened = v10685;
        const v10686 = Dexie.prototype;
        const v10693 = function () {
            var _this = this;
            const v10687 = this._allTables;
            const v10688 = keys(v10687);
            const v10691 = function (name) {
                const v10689 = _this._allTables;
                const v10690 = v10689[name];
                return v10690;
            };
            const v10692 = v10688.map(v10691);
            return v10692;
        };
        const v10694 = {
            get: v10693,
            enumerable: false,
            configurable: true
        };
        const v10695 = Object.defineProperty(v10686, 'tables', v10694);
        v10695;
        const v10696 = Dexie.prototype;
        const v10699 = function () {
            var args = extractTransactionArgs.apply(this, arguments);
            const v10697 = this._transaction;
            const v10698 = v10697.apply(this, args);
            return v10698;
        };
        v10696.transaction = v10699;
        const v10700 = Dexie.prototype;
        const v10760 = function (mode, tables, scopeFunc) {
            var _this = this;
            var parentTransaction = PSD.trans;
            const v10701 = !parentTransaction;
            const v10702 = parentTransaction.db;
            const v10703 = v10702 !== this;
            const v10704 = v10701 || v10703;
            const v10705 = mode.indexOf('!');
            const v10706 = -1;
            const v10707 = v10705 !== v10706;
            const v10708 = v10704 || v10707;
            if (v10708) {
                parentTransaction = null;
            }
            const v10709 = mode.indexOf('?');
            const v10710 = -1;
            var onlyIfCompatible = v10709 !== v10710;
            const v10711 = mode.replace('!', '');
            mode = v10711.replace('?', '');
            var idbMode;
            var storeNames;
            try {
                const v10718 = function (table) {
                    let storeName;
                    const v10712 = _this.Table;
                    const v10713 = table instanceof v10712;
                    const v10714 = table.name;
                    if (v10713) {
                        storeName = v10714;
                    } else {
                        storeName = table;
                    }
                    const v10715 = typeof storeName;
                    const v10716 = v10715 !== 'string';
                    if (v10716) {
                        const v10717 = new TypeError('Invalid table argument to Dexie.transaction(). Only Table or String are allowed');
                        throw v10717;
                    }
                    return storeName;
                };
                storeNames = tables.map(v10718);
                const v10719 = mode == 'r';
                const v10720 = mode === READONLY;
                const v10721 = v10719 || v10720;
                if (v10721) {
                    idbMode = READONLY;
                } else {
                    const v10722 = mode == 'rw';
                    const v10723 = mode == READWRITE;
                    const v10724 = v10722 || v10723;
                    if (v10724) {
                        idbMode = READWRITE;
                    } else {
                        const v10725 = 'Invalid transaction mode: ' + mode;
                        const v10726 = new exceptions.InvalidArgument(v10725);
                        throw v10726;
                    }
                }
                if (parentTransaction) {
                    const v10727 = parentTransaction.mode;
                    const v10728 = v10727 === READONLY;
                    const v10729 = idbMode === READWRITE;
                    const v10730 = v10728 && v10729;
                    if (v10730) {
                        if (onlyIfCompatible) {
                            parentTransaction = null;
                        } else {
                            const v10731 = new exceptions.SubTransaction('Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY');
                            throw v10731;
                        }
                    }
                    if (parentTransaction) {
                        const v10740 = function (storeName) {
                            const v10732 = parentTransaction.storeNames;
                            const v10733 = v10732.indexOf(storeName);
                            const v10734 = -1;
                            const v10735 = v10733 === v10734;
                            const v10736 = parentTransaction && v10735;
                            if (v10736) {
                                if (onlyIfCompatible) {
                                    parentTransaction = null;
                                } else {
                                    const v10737 = 'Table ' + storeName;
                                    const v10738 = v10737 + ' not included in parent transaction.';
                                    const v10739 = new exceptions.SubTransaction(v10738);
                                    throw v10739;
                                }
                            }
                        };
                        const v10741 = storeNames.forEach(v10740);
                        v10741;
                    }
                    const v10742 = onlyIfCompatible && parentTransaction;
                    const v10743 = parentTransaction.active;
                    const v10744 = !v10743;
                    const v10745 = v10742 && v10744;
                    if (v10745) {
                        parentTransaction = null;
                    }
                }
            } catch (e) {
                const v10747 = function (_, reject) {
                    const v10746 = reject(e);
                    v10746;
                };
                const v10748 = parentTransaction._promise(null, v10747);
                const v10749 = rejection(e);
                let v10750;
                if (parentTransaction) {
                    v10750 = v10748;
                } else {
                    v10750 = v10749;
                }
                return v10750;
            }
            var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
            const v10751 = parentTransaction._promise(idbMode, enterTransaction, 'lock');
            const v10752 = PSD.trans;
            const v10753 = PSD.transless;
            const v10755 = function () {
                const v10754 = _this._whenReady(enterTransaction);
                return v10754;
            };
            const v10756 = usePSD(v10753, v10755);
            const v10757 = this._whenReady(enterTransaction);
            let v10758;
            if (v10752) {
                v10758 = v10756;
            } else {
                v10758 = v10757;
            }
            let v10759;
            if (parentTransaction) {
                v10759 = v10751;
            } else {
                v10759 = v10758;
            }
            return v10759;
        };
        v10700._transaction = v10760;
        const v10761 = Dexie.prototype;
        const v10770 = function (tableName) {
            const v10762 = this._allTables;
            const v10763 = hasOwn(v10762, tableName);
            const v10764 = !v10763;
            if (v10764) {
                const v10765 = 'Table ' + tableName;
                const v10766 = v10765 + ' does not exist';
                const v10767 = new exceptions.InvalidTable(v10766);
                throw v10767;
            }
            const v10768 = this._allTables;
            const v10769 = v10768[tableName];
            return v10769;
        };
        v10761.table = v10770;
        return Dexie;
    };
    var Dexie$1 = v10771();
    let symbolObservable;
    const v10772 = typeof Symbol;
    const v10773 = v10772 !== 'undefined';
    const v10774 = 'observable' in Symbol;
    const v10775 = v10773 && v10774;
    const v10776 = Symbol.observable;
    if (v10775) {
        symbolObservable = v10776;
    } else {
        symbolObservable = '@@observable';
    }
    const v10788 = function () {
        const Observable = function (subscribe) {
            this._subscribe = subscribe;
        };
        const v10777 = Observable.prototype;
        const v10785 = function (x, error, complete) {
            const v10778 = !x;
            const v10779 = typeof x;
            const v10780 = v10779 === 'function';
            const v10781 = v10778 || v10780;
            const v10782 = {
                next: x,
                error: error,
                complete: complete
            };
            let v10783;
            if (v10781) {
                v10783 = v10782;
            } else {
                v10783 = x;
            }
            const v10784 = this._subscribe(v10783);
            return v10784;
        };
        v10777.subscribe = v10785;
        const v10786 = Observable.prototype;
        const v10787 = function () {
            return this;
        };
        v10786[symbolObservable] = v10787;
        return Observable;
    };
    var Observable = v10788();
    const extendObservabilitySet = function (target, newSet) {
        const v10789 = keys(newSet);
        const v10793 = function (part) {
            const v10790 = target[part];
            var rangeSet = v10790 || (target[part] = new RangeSet());
            const v10791 = newSet[part];
            const v10792 = mergeRanges(rangeSet, v10791);
            v10792;
        };
        const v10794 = v10789.forEach(v10793);
        v10794;
        return target;
    };
    const liveQuery = function (querier) {
        const v10837 = function (observer) {
            var scopeFuncIsAsync = isAsyncFunction(querier);
            const execute = function (subscr) {
                if (scopeFuncIsAsync) {
                    const v10795 = incrementExpectedAwaits();
                    v10795;
                }
                var exec = function () {
                    const v10796 = {
                        subscr: subscr,
                        trans: null
                    };
                    const v10797 = newScope(querier, v10796);
                    return v10797;
                };
                let rv;
                const v10798 = PSD.trans;
                const v10799 = PSD.transless;
                const v10800 = usePSD(v10799, exec);
                const v10801 = exec();
                if (v10798) {
                    rv = v10800;
                } else {
                    rv = v10801;
                }
                if (scopeFuncIsAsync) {
                    const v10802 = rv.then(decrementExpectedAwaits, decrementExpectedAwaits);
                    v10802;
                }
                return rv;
            };
            var closed = false;
            var accumMuts = {};
            var currentObs = {};
            const v10805 = function () {
                closed = true;
                const v10803 = globalEvents.storagemutated;
                const v10804 = v10803.unsubscribe(mutationListener);
                v10804;
            };
            var subscription = {};
            subscription.closed = function () {
                return closed;
            };
            subscription.unsubscribe = v10805;
            const v10806 = observer.start;
            const v10807 = observer.start(subscription);
            const v10808 = v10806 && v10807;
            v10808;
            var querying = false;
            var startedListening = false;
            const shouldNotify = function () {
                const v10809 = keys(currentObs);
                const v10815 = function (key) {
                    const v10810 = accumMuts[key];
                    const v10811 = accumMuts[key];
                    const v10812 = currentObs[key];
                    const v10813 = rangesOverlap(v10811, v10812);
                    const v10814 = v10810 && v10813;
                    return v10814;
                };
                const v10816 = v10809.some(v10815);
                return v10816;
            };
            var mutationListener = function (parts) {
                const v10817 = extendObservabilitySet(accumMuts, parts);
                v10817;
                const v10818 = shouldNotify();
                if (v10818) {
                    const v10819 = doQuery();
                    v10819;
                }
            };
            var doQuery = function () {
                const v10820 = querying || closed;
                if (v10820) {
                    return;
                }
                accumMuts = {};
                var subscr = {};
                var ret = execute(subscr);
                const v10821 = !startedListening;
                if (v10821) {
                    const v10822 = globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, mutationListener);
                    v10822;
                    startedListening = true;
                }
                querying = true;
                const v10823 = Promise.resolve(ret);
                const v10829 = function (result) {
                    querying = false;
                    if (closed) {
                        return;
                    }
                    const v10824 = shouldNotify();
                    if (v10824) {
                        const v10825 = doQuery();
                        v10825;
                    } else {
                        accumMuts = {};
                        currentObs = subscr;
                        const v10826 = observer.next;
                        const v10827 = observer.next(result);
                        const v10828 = v10826 && v10827;
                        v10828;
                    }
                };
                const v10834 = function (err) {
                    querying = false;
                    const v10830 = observer.error;
                    const v10831 = observer.error(err);
                    const v10832 = v10830 && v10831;
                    v10832;
                    const v10833 = subscription.unsubscribe();
                    v10833;
                };
                const v10835 = v10823.then(v10829, v10834);
                v10835;
            };
            const v10836 = doQuery();
            v10836;
            return subscription;
        };
        const v10838 = new Observable(v10837);
        return v10838;
    };
    var domDeps;
    try {
        const v10839 = _global.indexedDB;
        const v10840 = _global.mozIndexedDB;
        const v10841 = v10839 || v10840;
        const v10842 = _global.webkitIndexedDB;
        const v10843 = v10841 || v10842;
        const v10844 = _global.msIndexedDB;
        const v10845 = v10843 || v10844;
        const v10846 = _global.IDBKeyRange;
        const v10847 = _global.webkitIDBKeyRange;
        const v10848 = v10846 || v10847;
        domDeps.indexedDB = v10845;
        domDeps.IDBKeyRange = v10848;
        domDeps = {};
        domDeps = {};
    } catch (e) {
        domDeps.indexedDB = null;
        domDeps.IDBKeyRange = null;
        domDeps = {};
        domDeps = {};
    }
    var Dexie = Dexie$1;
    const v10849 = {};
    const v10850 = __assign(v10849, fullNameExceptions);
    const v10854 = function (databaseName) {
        const v10851 = [];
        const v10852 = { addons: v10851 };
        var db = new Dexie(databaseName, v10852);
        const v10853 = db.delete();
        return v10853;
    };
    const v10864 = function (name) {
        const v10855 = [];
        const v10856 = { addons: v10855 };
        const v10857 = new Dexie(name, v10856);
        const v10858 = v10857.open();
        const v10860 = function (db) {
            const v10859 = db.close();
            v10859;
            return true;
        };
        const v10861 = v10858.then(v10860);
        const v10862 = function () {
            return false;
        };
        const v10863 = v10861.catch('NoSuchDatabaseError', v10862);
        return v10863;
    };
    const v10870 = function (cb) {
        try {
            const v10865 = Dexie.dependencies;
            const v10866 = getDatabaseNames(v10865);
            const v10867 = v10866.then(cb);
            return v10867;
        } catch (_a) {
            const v10868 = new exceptions.MissingAPI();
            const v10869 = rejection(v10868);
            return v10869;
        }
    };
    const v10872 = function () {
        const Class = function (content) {
            const v10871 = extend(this, content);
            v10871;
        };
        return Class;
    };
    const v10878 = function (scopeFunc) {
        const v10873 = PSD.trans;
        const v10874 = PSD.transless;
        const v10875 = usePSD(v10874, scopeFunc);
        const v10876 = scopeFunc();
        let v10877;
        if (v10873) {
            v10877 = v10875;
        } else {
            v10877 = v10876;
        }
        return v10877;
    };
    const v10888 = function (generatorFn) {
        const v10887 = function () {
            try {
                const v10879 = generatorFn.apply(this, arguments);
                var rv = awaitIterator(v10879);
                const v10880 = !rv;
                const v10881 = rv.then;
                const v10882 = typeof v10881;
                const v10883 = v10882 !== 'function';
                const v10884 = v10880 || v10883;
                if (v10884) {
                    const v10885 = DexiePromise.resolve(rv);
                    return v10885;
                }
                return rv;
            } catch (e) {
                const v10886 = rejection(e);
                return v10886;
            }
        };
        return v10887;
    };
    const v10899 = function (generatorFn, args, thiz) {
        try {
            const v10889 = [];
            const v10890 = args || v10889;
            const v10891 = generatorFn.apply(thiz, v10890);
            var rv = awaitIterator(v10891);
            const v10892 = !rv;
            const v10893 = rv.then;
            const v10894 = typeof v10893;
            const v10895 = v10894 !== 'function';
            const v10896 = v10892 || v10895;
            if (v10896) {
                const v10897 = DexiePromise.resolve(rv);
                return v10897;
            }
            return rv;
        } catch (e) {
            const v10898 = rejection(e);
            return v10898;
        }
    };
    const v10902 = function () {
        const v10900 = PSD.trans;
        const v10901 = v10900 || null;
        return v10901;
    };
    const v10903 = {};
    v10903.get = v10902;
    const v10914 = function (promiseOrFunction, optionalTimeout) {
        const v10904 = typeof promiseOrFunction;
        const v10905 = v10904 === 'function';
        const v10906 = Dexie.ignoreTransaction(promiseOrFunction);
        let v10907;
        if (v10905) {
            v10907 = v10906;
        } else {
            v10907 = promiseOrFunction;
        }
        const v10908 = DexiePromise.resolve(v10907);
        const v10909 = optionalTimeout || 60000;
        var promise = v10908.timeout(v10909);
        const v10910 = PSD.trans;
        const v10911 = PSD.trans;
        const v10912 = v10911.waitFor(promise);
        let v10913;
        if (v10910) {
            v10913 = v10912;
        } else {
            v10913 = promise;
        }
        return v10913;
    };
    const v10915 = function () {
        return debug;
    };
    const v10920 = function (value) {
        const v10916 = value === 'dexie';
        const v10917 = function () {
            return true;
        };
        let v10918;
        if (v10916) {
            v10918 = v10917;
        } else {
            v10918 = dexieStackFrameFilter;
        }
        const v10919 = setDebug(value, v10918);
        v10919;
    };
    const v10921 = {};
    v10921.get = v10915;
    v10921.set = v10920;
    const v10922 = [];
    const v10923 = DEXIE_VERSION.split('.');
    const v10925 = function (n) {
        const v10924 = parseInt(n);
        return v10924;
    };
    const v10926 = v10923.map(v10925);
    const v10931 = function (p, c, i) {
        const v10927 = i * 2;
        const v10928 = Math.pow(10, v10927);
        const v10929 = c / v10928;
        const v10930 = p + v10929;
        return v10930;
    };
    const v10932 = v10926.reduce(v10931);
    const v10933 = {
        delete: v10854,
        exists: v10864,
        getDatabaseNames: v10870,
        defineClass: v10872,
        ignoreTransaction: v10878,
        vip: vip,
        async: v10888,
        spawn: v10899,
        currentTransaction: v10903,
        waitFor: v10914,
        Promise: DexiePromise,
        debug: v10921,
        derive: derive,
        extend: extend,
        props: props,
        override: override,
        Events: Events,
        on: globalEvents,
        liveQuery: liveQuery,
        extendObservabilitySet: extendObservabilitySet,
        getByKeyPath: getByKeyPath,
        setByKeyPath: setByKeyPath,
        delByKeyPath: delByKeyPath,
        shallowClone: shallowClone,
        deepClone: deepClone,
        getObjectDiff: getObjectDiff,
        cmp: cmp,
        asap: asap$1,
        minKey: minKey,
        addons: v10922,
        connections: connections,
        errnames: errnames,
        dependencies: domDeps,
        semVer: DEXIE_VERSION,
        version: v10932
    };
    const v10934 = __assign(v10850, v10933);
    const v10935 = props(Dexie, v10934);
    v10935;
    const v10936 = Dexie.dependencies;
    const v10937 = v10936.IDBKeyRange;
    const v10938 = getMaxKey(v10937);
    Dexie.maxKey = v10938;
    const v10939 = typeof dispatchEvent;
    const v10940 = v10939 !== 'undefined';
    const v10941 = typeof addEventListener;
    const v10942 = v10941 !== 'undefined';
    const v10943 = v10940 && v10942;
    if (v10943) {
        const v10948 = function (updatedParts) {
            const v10944 = !propagatingLocally;
            if (v10944) {
                var event_1;
                if (isIEOrEdge) {
                    event_1 = document.createEvent('CustomEvent');
                    const v10945 = event_1.initCustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, true, true, updatedParts);
                    v10945;
                } else {
                    const v10946 = { detail: updatedParts };
                    event_1 = new CustomEvent(STORAGE_MUTATED_DOM_EVENT_NAME, v10946);
                }
                propagatingLocally = true;
                const v10947 = dispatchEvent(event_1);
                v10947;
                propagatingLocally = false;
            }
        };
        const v10949 = globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, v10948);
        v10949;
        const v10952 = function (_a) {
            var detail = _a.detail;
            const v10950 = !propagatingLocally;
            if (v10950) {
                const v10951 = propagateLocally(detail);
                v10951;
            }
        };
        const v10953 = addEventListener(STORAGE_MUTATED_DOM_EVENT_NAME, v10952);
        v10953;
    }
    const propagateLocally = function (updateParts) {
        var wasMe = propagatingLocally;
        try {
            propagatingLocally = true;
            const v10954 = globalEvents.storagemutated;
            const v10955 = v10954.fire(updateParts);
            v10955;
        } finally {
            propagatingLocally = wasMe;
        }
    };
    var propagatingLocally = false;
    const v10956 = typeof BroadcastChannel;
    const v10957 = v10956 !== 'undefined';
    if (v10957) {
        var bc_1 = new BroadcastChannel(STORAGE_MUTATED_DOM_EVENT_NAME);
        const v10960 = function (changedParts) {
            const v10958 = !propagatingLocally;
            if (v10958) {
                const v10959 = bc_1.postMessage(changedParts);
                v10959;
            }
        };
        const v10961 = globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, v10960);
        v10961;
        const v10965 = function (ev) {
            const v10962 = ev.data;
            if (v10962) {
                const v10963 = ev.data;
                const v10964 = propagateLocally(v10963);
                v10964;
            }
        };
        bc_1.onmessage = v10965;
    } else {
        const v10966 = typeof self;
        const v10967 = v10966 !== 'undefined';
        const v10968 = typeof navigator;
        const v10969 = v10968 !== 'undefined';
        const v10970 = v10967 && v10969;
        if (v10970) {
            const v10990 = function (changedParts) {
                try {
                    const v10971 = !propagatingLocally;
                    if (v10971) {
                        const v10972 = typeof localStorage;
                        const v10973 = v10972 !== 'undefined';
                        if (v10973) {
                            const v10974 = Math.random();
                            const v10975 = {
                                trig: v10974,
                                changedParts: changedParts
                            };
                            const v10976 = JSON.stringify(v10975);
                            const v10977 = localStorage.setItem(STORAGE_MUTATED_DOM_EVENT_NAME, v10976);
                            v10977;
                        }
                        const v10978 = self['clients'];
                        const v10979 = typeof v10978;
                        const v10980 = v10979 === 'object';
                        if (v10980) {
                            const v10981 = [];
                            const v10982 = self['clients'];
                            const v10983 = { includeUncontrolled: true };
                            const v10984 = v10982.matchAll(v10983);
                            const v10985 = __spreadArray(v10981, v10984, true);
                            const v10988 = function (client) {
                                const v10986 = {
                                    type: STORAGE_MUTATED_DOM_EVENT_NAME,
                                    changedParts: changedParts
                                };
                                const v10987 = client.postMessage(v10986);
                                return v10987;
                            };
                            const v10989 = v10985.forEach(v10988);
                            v10989;
                        }
                    }
                } catch (_a) {
                }
            };
            const v10991 = globalEvents(DEXIE_STORAGE_MUTATED_EVENT_NAME, v10990);
            v10991;
            const v10997 = function (ev) {
                const v10992 = ev.key;
                const v10993 = v10992 === STORAGE_MUTATED_DOM_EVENT_NAME;
                if (v10993) {
                    const v10994 = ev.newValue;
                    var data = JSON.parse(v10994);
                    if (data) {
                        const v10995 = data.changedParts;
                        const v10996 = propagateLocally(v10995);
                        v10996;
                    }
                }
            };
            const v10998 = addEventListener('storage', v10997);
            v10998;
            const v10999 = self.document;
            const v11000 = navigator.serviceWorker;
            var swContainer = v10999 && v11000;
            if (swContainer) {
                const v11001 = swContainer.addEventListener('message', propagateMessageLocally);
                v11001;
            }
        }
    }
    const propagateMessageLocally = function (_a) {
        var data = _a.data;
        const v11002 = data.type;
        const v11003 = v11002 === STORAGE_MUTATED_DOM_EVENT_NAME;
        const v11004 = data && v11003;
        if (v11004) {
            const v11005 = data.changedParts;
            const v11006 = propagateLocally(v11005);
            v11006;
        }
    };
    DexiePromise.rejectionMapper = mapError;
    const v11007 = setDebug(debug, dexieStackFrameFilter);
    v11007;
    const v11008 = {
        __proto__: null,
        Dexie: Dexie$1,
        liveQuery: liveQuery,
        'default': Dexie$1,
        RangeSet: RangeSet,
        mergeRanges: mergeRanges,
        rangesOverlap: rangesOverlap
    };
    var namedExports = Object.freeze(v11008);
    const v11009 = { default: Dexie$1 };
    const v11010 = __assign(Dexie$1, namedExports, v11009);
    v11010;
    return Dexie$1;
};
const v11012 = v5524(this, v11011);
v11012;