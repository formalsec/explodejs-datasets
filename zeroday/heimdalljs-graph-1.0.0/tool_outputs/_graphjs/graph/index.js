'use strict';
const v634 = { value: true };
const v635 = Object.defineProperty(exports, '__esModule', v634);
v635;
const _interopDefault = function (ex) {
    const v636 = typeof ex;
    const v637 = v636 === 'object';
    const v638 = ex && v637;
    const v639 = 'default' in ex;
    const v640 = v638 && v639;
    const v641 = ex['default'];
    let v642;
    if (v640) {
        v642 = v641;
    } else {
        v642 = ex;
    }
    return v642;
};
const v643 = require('fs');
var fs = _interopDefault(v643);
let commonjsGlobal;
const v644 = typeof window;
const v645 = v644 !== 'undefined';
const v646 = typeof global;
const v647 = v646 !== 'undefined';
const v648 = typeof self;
const v649 = v648 !== 'undefined';
const v650 = {};
let v651;
if (v649) {
    v651 = self;
} else {
    v651 = v650;
}
let v652;
if (v647) {
    v652 = global;
} else {
    v652 = v651;
}
if (v645) {
    commonjsGlobal = window;
} else {
    commonjsGlobal = v652;
}
const createCommonjsModule = function (fn, module) {
    const v653 = {};
    const v654 = {};
    v654.exports = v653;
    const v655 = module.exports;
    const v656 = fn(module, v655);
    const v657 = module.exports;
    return module = v654, v656, v657;
};
const v979 = function (module) {
    const v967 = function (global) {
        'use strict';
        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined;
        let $Symbol;
        const v658 = typeof Symbol;
        const v659 = v658 === 'function';
        const v660 = {};
        if (v659) {
            $Symbol = Symbol;
        } else {
            $Symbol = v660;
        }
        const v661 = $Symbol.iterator;
        var iteratorSymbol = v661 || '@@iterator';
        const v662 = $Symbol.toStringTag;
        var toStringTagSymbol = v662 || '@@toStringTag';
        const v663 = typeof module;
        var inModule = v663 === 'object';
        var runtime = global.regeneratorRuntime;
        if (runtime) {
            if (inModule) {
                module.exports = runtime;
            }
            return;
        }
        const v664 = module.exports;
        const v665 = {};
        let v666;
        if (inModule) {
            v666 = v664;
        } else {
            v666 = v665;
        }
        global.regeneratorRuntime = v666;
        runtime = global.regeneratorRuntime;
        const wrap = function (innerFn, outerFn, self, tryLocsList) {
            let protoGenerator;
            const v667 = outerFn.prototype;
            const v668 = v667 instanceof Generator;
            const v669 = outerFn && v668;
            if (v669) {
                protoGenerator = outerFn;
            } else {
                protoGenerator = Generator;
            }
            const v670 = protoGenerator.prototype;
            var generator = Object.create(v670);
            const v671 = [];
            const v672 = tryLocsList || v671;
            var context = new Context(v672);
            const v673 = makeInvokeMethod(innerFn, self, context);
            generator._invoke = v673;
            return generator;
        };
        runtime.wrap = wrap;
        const tryCatch = function (fn, obj, arg) {
            try {
                const v674 = fn.call(obj, arg);
                const v675 = {};
                v675.type = 'normal';
                v675.arg = v674;
                return v675;
            } catch (err) {
                const v676 = {};
                v676.type = 'throw';
                v676.arg = err;
                return v676;
            }
        };
        var GenStateSuspendedStart = 'suspendedStart';
        var GenStateSuspendedYield = 'suspendedYield';
        var GenStateExecuting = 'executing';
        var GenStateCompleted = 'completed';
        var ContinueSentinel = {};
        const Generator = function () {
        };
        const GeneratorFunction = function () {
        };
        const GeneratorFunctionPrototype = function () {
        };
        var IteratorPrototype = {};
        const v677 = function () {
            return this;
        };
        IteratorPrototype[iteratorSymbol] = v677;
        var getProto = Object.getPrototypeOf;
        const v678 = [];
        const v679 = values(v678);
        const v680 = getProto(v679);
        const v681 = getProto(v680);
        var NativeIteratorPrototype = getProto && v681;
        const v682 = NativeIteratorPrototype !== Op;
        const v683 = NativeIteratorPrototype && v682;
        const v684 = hasOwn.call(NativeIteratorPrototype, iteratorSymbol);
        const v685 = v683 && v684;
        if (v685) {
            IteratorPrototype = NativeIteratorPrototype;
        }
        const v686 = Object.create(IteratorPrototype);
        Generator.prototype = v686;
        GeneratorFunctionPrototype.prototype = Generator.prototype;
        var Gp = GeneratorFunctionPrototype.prototype;
        Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunction.prototype = Gp.constructor;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = 'GeneratorFunction';
        GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName;
        const defineIteratorMethods = function (prototype) {
            const v687 = [
                'next',
                'throw',
                'return'
            ];
            const v690 = function (method) {
                const v689 = function (arg) {
                    const v688 = this._invoke(method, arg);
                    return v688;
                };
                prototype[method] = v689;
            };
            const v691 = v687.forEach(v690);
            v691;
        };
        const v702 = function (genFun) {
            const v692 = typeof genFun;
            const v693 = v692 === 'function';
            const v694 = genFun.constructor;
            var ctor = v693 && v694;
            const v695 = ctor === GeneratorFunction;
            const v696 = ctor.displayName;
            const v697 = ctor.name;
            const v698 = v696 || v697;
            const v699 = v698 === 'GeneratorFunction';
            const v700 = v695 || v699;
            let v701;
            if (ctor) {
                v701 = v700;
            } else {
                v701 = false;
            }
            return v701;
        };
        runtime.isGeneratorFunction = v702;
        const v708 = function (genFun) {
            const v703 = Object.setPrototypeOf;
            if (v703) {
                const v704 = Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                v704;
            } else {
                genFun.__proto__ = GeneratorFunctionPrototype;
                const v705 = toStringTagSymbol in genFun;
                const v706 = !v705;
                if (v706) {
                    genFun[toStringTagSymbol] = 'GeneratorFunction';
                }
            }
            const v707 = Object.create(Gp);
            genFun.prototype = v707;
            return genFun;
        };
        runtime.mark = v708;
        const v710 = function (arg) {
            const v709 = {};
            v709.__await = arg;
            return v709;
        };
        runtime.awrap = v710;
        const AsyncIterator = function (generator) {
            const invoke = function (method, arg, resolve, reject) {
                const v711 = generator[method];
                var record = tryCatch(v711, generator, arg);
                const v712 = record.type;
                const v713 = v712 === 'throw';
                if (v713) {
                    const v714 = record.arg;
                    const v715 = reject(v714);
                    v715;
                } else {
                    var result = record.arg;
                    var value = result.value;
                    const v716 = typeof value;
                    const v717 = v716 === 'object';
                    const v718 = value && v717;
                    const v719 = hasOwn.call(value, '__await');
                    const v720 = v718 && v719;
                    if (v720) {
                        const v721 = value.__await;
                        const v722 = Promise.resolve(v721);
                        const v724 = function (value) {
                            const v723 = invoke('next', value, resolve, reject);
                            v723;
                        };
                        const v726 = function (err) {
                            const v725 = invoke('throw', err, resolve, reject);
                            v725;
                        };
                        const v727 = v722.then(v724, v726);
                        return v727;
                    }
                    const v728 = Promise.resolve(value);
                    const v730 = function (unwrapped) {
                        result.value = unwrapped;
                        const v729 = resolve(result);
                        v729;
                    };
                    const v731 = v728.then(v730, reject);
                    return v731;
                }
            };
            const v732 = typeof process;
            const v733 = v732 === 'object';
            const v734 = process.domain;
            const v735 = v733 && v734;
            if (v735) {
                const v736 = process.domain;
                invoke = v736.bind(invoke);
            }
            var previousPromise;
            const enqueue = function (method, arg) {
                const callInvokeWithMethodAndArg = function () {
                    const v738 = function (resolve, reject) {
                        const v737 = invoke(method, arg, resolve, reject);
                        v737;
                    };
                    const v739 = new Promise(v738);
                    return v739;
                };
                const v740 = previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
                const v741 = callInvokeWithMethodAndArg();
                if (previousPromise) {
                    previousPromise = v740;
                } else {
                    previousPromise = v741;
                }
                return;
            };
            this._invoke = enqueue;
        };
        const v742 = AsyncIterator.prototype;
        const v743 = defineIteratorMethods(v742);
        v743;
        runtime.AsyncIterator = AsyncIterator;
        const v754 = function (innerFn, outerFn, self, tryLocsList) {
            const v744 = wrap(innerFn, outerFn, self, tryLocsList);
            var iter = new AsyncIterator(v744);
            const v745 = runtime.isGeneratorFunction(outerFn);
            const v746 = iter.next();
            const v751 = function (result) {
                const v747 = result.done;
                const v748 = result.value;
                const v749 = iter.next();
                let v750;
                if (v747) {
                    v750 = v748;
                } else {
                    v750 = v749;
                }
                return v750;
            };
            const v752 = v746.then(v751);
            let v753;
            if (v745) {
                v753 = iter;
            } else {
                v753 = v752;
            }
            return v753;
        };
        runtime.async = v754;
        const makeInvokeMethod = function (innerFn, self, context) {
            var state = GenStateSuspendedStart;
            const v799 = function invoke(method, arg) {
                const v755 = state === GenStateExecuting;
                if (v755) {
                    const v756 = new Error('Generator is already running');
                    throw v756;
                }
                const v757 = state === GenStateCompleted;
                if (v757) {
                    const v758 = method === 'throw';
                    if (v758) {
                        throw arg;
                    }
                    const v759 = doneResult();
                    return v759;
                }
                while (true) {
                    var delegate = context.delegate;
                    if (delegate) {
                        const v760 = method === 'return';
                        const v761 = method === 'throw';
                        const v762 = delegate.iterator;
                        const v763 = v762[method];
                        const v764 = v763 === undefined;
                        const v765 = v761 && v764;
                        const v766 = v760 || v765;
                        if (v766) {
                            context.delegate = null;
                            const v767 = delegate.iterator;
                            var returnMethod = v767['return'];
                            if (returnMethod) {
                                const v768 = delegate.iterator;
                                var record = tryCatch(returnMethod, v768, arg);
                                const v769 = record.type;
                                const v770 = v769 === 'throw';
                                if (v770) {
                                    method = 'throw';
                                    arg = record.arg;
                                    continue;
                                }
                            }
                            const v771 = method === 'return';
                            if (v771) {
                                continue;
                            }
                        }
                        const v772 = delegate.iterator;
                        const v773 = v772[method];
                        const v774 = delegate.iterator;
                        var record = tryCatch(v773, v774, arg);
                        const v775 = record.type;
                        const v776 = v775 === 'throw';
                        if (v776) {
                            context.delegate = null;
                            method = 'throw';
                            arg = record.arg;
                            continue;
                        }
                        method = 'next';
                        arg = undefined;
                        var info = record.arg;
                        const v777 = info.done;
                        if (v777) {
                            const v778 = delegate.resultName;
                            const v779 = info.value;
                            context[v778] = v779;
                            const v780 = delegate.nextLoc;
                            context.next = v780;
                        } else {
                            state = GenStateSuspendedYield;
                            return info;
                        }
                        context.delegate = null;
                    }
                    const v781 = method === 'next';
                    if (v781) {
                        context._sent = arg;
                        context.sent = context._sent;
                    } else {
                        const v782 = method === 'throw';
                        if (v782) {
                            const v783 = state === GenStateSuspendedStart;
                            if (v783) {
                                state = GenStateCompleted;
                                throw arg;
                            }
                            const v784 = context.dispatchException(arg);
                            if (v784) {
                                method = 'next';
                                arg = undefined;
                            }
                        } else {
                            const v785 = method === 'return';
                            if (v785) {
                                const v786 = context.abrupt('return', arg);
                                v786;
                            }
                        }
                    }
                    state = GenStateExecuting;
                    var record = tryCatch(innerFn, self, context);
                    const v787 = record.type;
                    const v788 = v787 === 'normal';
                    if (v788) {
                        const v789 = context.done;
                        if (v789) {
                            state = GenStateCompleted;
                        } else {
                            state = GenStateSuspendedYield;
                        }
                        const v790 = record.arg;
                        const v791 = context.done;
                        var info = {};
                        info.value = v790;
                        info.done = v791;
                        const v792 = record.arg;
                        const v793 = v792 === ContinueSentinel;
                        if (v793) {
                            const v794 = context.delegate;
                            const v795 = method === 'next';
                            const v796 = v794 && v795;
                            if (v796) {
                                arg = undefined;
                            }
                        } else {
                            return info;
                        }
                    } else {
                        const v797 = record.type;
                        const v798 = v797 === 'throw';
                        if (v798) {
                            state = GenStateCompleted;
                            method = 'throw';
                            arg = record.arg;
                        }
                    }
                }
            };
            return v799;
        };
        const v800 = defineIteratorMethods(Gp);
        v800;
        Gp[toStringTagSymbol] = 'Generator';
        const v801 = function () {
            return '[object Generator]';
        };
        Gp.toString = v801;
        const pushTryEntry = function (locs) {
            const v802 = locs[0];
            var entry = {};
            entry.tryLoc = v802;
            const v803 = 1 in locs;
            if (v803) {
                const v804 = locs[1];
                entry.catchLoc = v804;
            }
            const v805 = 2 in locs;
            if (v805) {
                const v806 = locs[2];
                entry.finallyLoc = v806;
                const v807 = locs[3];
                entry.afterLoc = v807;
            }
            const v808 = this.tryEntries;
            const v809 = v808.push(entry);
            v809;
        };
        const resetTryEntry = function (entry) {
            const v810 = entry.completion;
            const v811 = {};
            var record = v810 || v811;
            record.type = 'normal';
            const v812 = record.arg;
            const v813 = delete v812;
            v813;
            entry.completion = record;
        };
        const Context = function (tryLocsList) {
            const v814 = { tryLoc: 'root' };
            this.tryEntries = [v814];
            const v815 = tryLocsList.forEach(pushTryEntry, this);
            v815;
            const v816 = this.reset(true);
            v816;
        };
        const v822 = function (object) {
            var keys = [];
            let key;
            for (key in object) {
                const v817 = keys.push(key);
                v817;
            }
            const v818 = keys.reverse();
            v818;
            const v821 = function next() {
                let v819 = keys.length;
                while (v819) {
                    var key = keys.pop();
                    const v820 = key in object;
                    if (v820) {
                        next.value = key;
                        next.done = false;
                        return next;
                    }
                    v819 = keys.length;
                }
                next.done = true;
                return next;
            };
            return v821;
        };
        runtime.keys = v822;
        const values = function (iterable) {
            if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod) {
                    const v823 = iteratorMethod.call(iterable);
                    return v823;
                }
                const v824 = iterable.next;
                const v825 = typeof v824;
                const v826 = v825 === 'function';
                if (v826) {
                    return iterable;
                }
                const v827 = iterable.length;
                const v828 = isNaN(v827);
                const v829 = !v828;
                if (v829) {
                    const v830 = -1;
                    var i = v830;
                    var next = function next() {
                        const v831 = ++i;
                        const v832 = iterable.length;
                        let v833 = v831 < v832;
                        while (v833) {
                            const v834 = hasOwn.call(iterable, i);
                            if (v834) {
                                const v835 = iterable[i];
                                next.value = v835;
                                next.done = false;
                                return next;
                            }
                            v833 = v831 < v832;
                        }
                        next.value = undefined;
                        next.done = true;
                        return next;
                    };
                    return next.next = next;
                }
            }
            const v836 = {};
            v836.next = doneResult;
            return v836;
        };
        runtime.values = values;
        const doneResult = function () {
            const v837 = {};
            v837.value = undefined;
            v837.done = true;
            return v837;
        };
        const v850 = function (skipTempReset) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            const v838 = this.tryEntries;
            const v839 = v838.forEach(resetTryEntry);
            v839;
            const v840 = !skipTempReset;
            if (v840) {
                let name;
                for (name in this) {
                    const v841 = name.charAt(0);
                    const v842 = v841 === 't';
                    const v843 = hasOwn.call(this, name);
                    const v844 = v842 && v843;
                    const v845 = name.slice(1);
                    const v846 = +v845;
                    const v847 = isNaN(v846);
                    const v848 = !v847;
                    const v849 = v844 && v848;
                    if (v849) {
                        this[name] = undefined;
                    }
                }
            }
        };
        const v856 = function () {
            this.done = true;
            const v851 = this.tryEntries;
            var rootEntry = v851[0];
            var rootRecord = rootEntry.completion;
            const v852 = rootRecord.type;
            const v853 = v852 === 'throw';
            if (v853) {
                const v854 = rootRecord.arg;
                throw v854;
            }
            const v855 = this.rval;
            return v855;
        };
        const v893 = function (exception) {
            const v857 = this.done;
            if (v857) {
                throw exception;
            }
            var context = this;
            const handle = function (loc, caught) {
                record.type = 'throw';
                record.arg = exception;
                context.next = loc;
                const v858 = !caught;
                const v859 = !v858;
                return v859;
            };
            const v860 = this.tryEntries;
            const v861 = v860.length;
            var i = v861 - 1;
            let v862 = i >= 0;
            while (v862) {
                const v864 = this.tryEntries;
                var entry = v864[i];
                var record = entry.completion;
                const v865 = entry.tryLoc;
                const v866 = v865 === 'root';
                if (v866) {
                    const v867 = handle('end');
                    return v867;
                }
                const v868 = entry.tryLoc;
                const v869 = this.prev;
                const v870 = v868 <= v869;
                if (v870) {
                    var hasCatch = hasOwn.call(entry, 'catchLoc');
                    var hasFinally = hasOwn.call(entry, 'finallyLoc');
                    const v871 = hasCatch && hasFinally;
                    if (v871) {
                        const v872 = this.prev;
                        const v873 = entry.catchLoc;
                        const v874 = v872 < v873;
                        if (v874) {
                            const v875 = entry.catchLoc;
                            const v876 = handle(v875, true);
                            return v876;
                        } else {
                            const v877 = this.prev;
                            const v878 = entry.finallyLoc;
                            const v879 = v877 < v878;
                            if (v879) {
                                const v880 = entry.finallyLoc;
                                const v881 = handle(v880);
                                return v881;
                            }
                        }
                    } else {
                        if (hasCatch) {
                            const v882 = this.prev;
                            const v883 = entry.catchLoc;
                            const v884 = v882 < v883;
                            if (v884) {
                                const v885 = entry.catchLoc;
                                const v886 = handle(v885, true);
                                return v886;
                            }
                        } else {
                            if (hasFinally) {
                                const v887 = this.prev;
                                const v888 = entry.finallyLoc;
                                const v889 = v887 < v888;
                                if (v889) {
                                    const v890 = entry.finallyLoc;
                                    const v891 = handle(v890);
                                    return v891;
                                }
                            } else {
                                const v892 = new Error('try statement without catch or finally');
                                throw v892;
                            }
                        }
                    }
                }
                const v863 = --i;
                v862 = i >= 0;
            }
        };
        const v922 = function (type, arg) {
            const v894 = this.tryEntries;
            const v895 = v894.length;
            var i = v895 - 1;
            let v896 = i >= 0;
            while (v896) {
                const v898 = this.tryEntries;
                var entry = v898[i];
                const v899 = entry.tryLoc;
                const v900 = this.prev;
                const v901 = v899 <= v900;
                const v902 = hasOwn.call(entry, 'finallyLoc');
                const v903 = v901 && v902;
                const v904 = this.prev;
                const v905 = entry.finallyLoc;
                const v906 = v904 < v905;
                const v907 = v903 && v906;
                if (v907) {
                    var finallyEntry = entry;
                    break;
                }
                const v897 = --i;
                v896 = i >= 0;
            }
            const v908 = type === 'break';
            const v909 = type === 'continue';
            const v910 = v908 || v909;
            const v911 = finallyEntry && v910;
            const v912 = finallyEntry.tryLoc;
            const v913 = v912 <= arg;
            const v914 = v911 && v913;
            const v915 = finallyEntry.finallyLoc;
            const v916 = arg <= v915;
            const v917 = v914 && v916;
            if (v917) {
                finallyEntry = null;
            }
            let record;
            const v918 = finallyEntry.completion;
            const v919 = {};
            if (finallyEntry) {
                record = v918;
            } else {
                record = v919;
            }
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                const v920 = finallyEntry.finallyLoc;
                this.next = v920;
            } else {
                const v921 = this.complete(record);
                v921;
            }
            return ContinueSentinel;
        };
        const v938 = function (record, afterLoc) {
            const v923 = record.type;
            const v924 = v923 === 'throw';
            if (v924) {
                const v925 = record.arg;
                throw v925;
            }
            const v926 = record.type;
            const v927 = v926 === 'break';
            const v928 = record.type;
            const v929 = v928 === 'continue';
            const v930 = v927 || v929;
            if (v930) {
                const v931 = record.arg;
                this.next = v931;
            } else {
                const v932 = record.type;
                const v933 = v932 === 'return';
                if (v933) {
                    const v934 = record.arg;
                    this.rval = v934;
                    this.next = 'end';
                } else {
                    const v935 = record.type;
                    const v936 = v935 === 'normal';
                    const v937 = v936 && afterLoc;
                    if (v937) {
                        this.next = afterLoc;
                    }
                }
            }
        };
        const v950 = function (finallyLoc) {
            const v939 = this.tryEntries;
            const v940 = v939.length;
            var i = v940 - 1;
            let v941 = i >= 0;
            while (v941) {
                const v943 = this.tryEntries;
                var entry = v943[i];
                const v944 = entry.finallyLoc;
                const v945 = v944 === finallyLoc;
                if (v945) {
                    const v946 = entry.completion;
                    const v947 = entry.afterLoc;
                    const v948 = this.complete(v946, v947);
                    v948;
                    const v949 = resetTryEntry(entry);
                    v949;
                    return ContinueSentinel;
                }
                const v942 = --i;
                v941 = i >= 0;
            }
        };
        const v962 = function (tryLoc) {
            const v951 = this.tryEntries;
            const v952 = v951.length;
            var i = v952 - 1;
            let v953 = i >= 0;
            while (v953) {
                const v955 = this.tryEntries;
                var entry = v955[i];
                const v956 = entry.tryLoc;
                const v957 = v956 === tryLoc;
                if (v957) {
                    var record = entry.completion;
                    const v958 = record.type;
                    const v959 = v958 === 'throw';
                    if (v959) {
                        var thrown = record.arg;
                        const v960 = resetTryEntry(entry);
                        v960;
                    }
                    return thrown;
                }
                const v954 = --i;
                v953 = i >= 0;
            }
            const v961 = new Error('illegal catch attempt');
            throw v961;
        };
        const v965 = function (iterable, resultName, nextLoc) {
            const v963 = values(iterable);
            const v964 = {};
            v964.iterator = v963;
            v964.resultName = resultName;
            v964.nextLoc = nextLoc;
            this.delegate = v964;
            return ContinueSentinel;
        };
        const v966 = {};
        v966.constructor = Context;
        v966.reset = v850;
        v966.stop = v856;
        v966.dispatchException = v893;
        v966.abrupt = v922;
        v966.complete = v938;
        v966.finish = v950;
        v966['catch'] = v962;
        v966.delegateYield = v965;
        Context.prototype = v966;
    };
    const v968 = typeof commonjsGlobal;
    const v969 = v968 === 'object';
    const v970 = typeof window;
    const v971 = v970 === 'object';
    const v972 = typeof self;
    const v973 = v972 === 'object';
    let v974;
    if (v973) {
        v974 = self;
    } else {
        v974 = commonjsGlobal;
    }
    let v975;
    if (v971) {
        v975 = window;
    } else {
        v975 = v974;
    }
    let v976;
    if (v969) {
        v976 = commonjsGlobal;
    } else {
        v976 = v975;
    }
    const v977 = v967(v976);
    const v978 = !v977;
    v978;
};
var runtime = createCommonjsModule(v979);
let g;
const v980 = typeof commonjsGlobal;
const v981 = v980 === 'object';
const v982 = typeof window;
const v983 = v982 === 'object';
const v984 = typeof self;
const v985 = v984 === 'object';
let v986;
if (v985) {
    v986 = self;
} else {
    v986 = commonjsGlobal;
}
let v987;
if (v983) {
    v987 = window;
} else {
    v987 = v986;
}
if (v981) {
    g = commonjsGlobal;
} else {
    g = v987;
}
const v988 = g.regeneratorRuntime;
const v989 = Object.getOwnPropertyNames(g);
const v990 = v989.indexOf('regeneratorRuntime');
const v991 = v990 >= 0;
var hadRuntime = v988 && v991;
const v992 = g.regeneratorRuntime;
var oldRuntime = hadRuntime && v992;
g.regeneratorRuntime = undefined;
var runtimeModule = runtime;
if (hadRuntime) {
    g.regeneratorRuntime = oldRuntime;
} else {
    try {
        const v993 = g.regeneratorRuntime;
        const v994 = delete v993;
        v994;
    } catch (e) {
        g.regeneratorRuntime = undefined;
    }
}
var index = runtimeModule;
let _typeof;
const v995 = typeof Symbol;
const v996 = v995 === 'function';
const v997 = Symbol.iterator;
const v998 = typeof v997;
const v999 = v998 === 'symbol';
const v1000 = v996 && v999;
const v1002 = function (obj) {
    const v1001 = typeof obj;
    return v1001;
};
const v1014 = function (obj) {
    const v1003 = typeof Symbol;
    const v1004 = v1003 === 'function';
    const v1005 = obj && v1004;
    const v1006 = obj.constructor;
    const v1007 = v1006 === Symbol;
    const v1008 = v1005 && v1007;
    const v1009 = Symbol.prototype;
    const v1010 = obj !== v1009;
    const v1011 = v1008 && v1010;
    const v1012 = typeof obj;
    let v1013;
    if (v1011) {
        v1013 = 'symbol';
    } else {
        v1013 = v1012;
    }
    return v1013;
};
if (v1000) {
    _typeof = v1002;
} else {
    _typeof = v1014;
}
var classCallCheck = function (instance, Constructor) {
    const v1015 = instance instanceof Constructor;
    const v1016 = !v1015;
    if (v1016) {
        const v1017 = new TypeError('Cannot call a class as a function');
        throw v1017;
    }
};
const v1029 = function () {
    const defineProperties = function (target, props) {
        var i = 0;
        const v1018 = props.length;
        let v1019 = i < v1018;
        while (v1019) {
            var descriptor = props[i];
            const v1021 = descriptor.enumerable;
            descriptor.enumerable = v1021 || false;
            descriptor.configurable = true;
            const v1022 = 'value' in descriptor;
            if (v1022) {
                descriptor.writable = true;
            }
            const v1023 = descriptor.key;
            const v1024 = Object.defineProperty(target, v1023, descriptor);
            v1024;
            const v1020 = i++;
            v1019 = i < v1018;
        }
    };
    const v1028 = function (Constructor, protoProps, staticProps) {
        if (protoProps) {
            const v1025 = Constructor.prototype;
            const v1026 = defineProperties(v1025, protoProps);
            v1026;
        }
        if (staticProps) {
            const v1027 = defineProperties(Constructor, staticProps);
            v1027;
        }
        return Constructor;
    };
    return v1028;
};
var createClass = v1029();
var get$1 = function get$1(object, property, receiver) {
    const v1030 = object === null;
    if (v1030) {
        object = Function.prototype;
    }
    var desc = Object.getOwnPropertyDescriptor(object, property);
    const v1031 = desc === undefined;
    if (v1031) {
        var parent = Object.getPrototypeOf(object);
        const v1032 = parent === null;
        if (v1032) {
            return undefined;
        } else {
            const v1033 = get$1(parent, property, receiver);
            return v1033;
        }
    } else {
        const v1034 = 'value' in desc;
        if (v1034) {
            const v1035 = desc.value;
            return v1035;
        } else {
            var getter = desc.get;
            const v1036 = getter === undefined;
            if (v1036) {
                return undefined;
            }
            const v1037 = getter.call(receiver);
            return v1037;
        }
    }
};
var set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);
    const v1038 = desc === undefined;
    if (v1038) {
        var parent = Object.getPrototypeOf(object);
        const v1039 = parent !== null;
        if (v1039) {
            const v1040 = set(parent, property, value, receiver);
            v1040;
        }
    } else {
        const v1041 = 'value' in desc;
        const v1042 = desc.writable;
        const v1043 = v1041 && v1042;
        if (v1043) {
            desc.value = value;
        } else {
            var setter = desc.set;
            const v1044 = setter !== undefined;
            if (v1044) {
                const v1045 = setter.call(receiver, value);
                v1045;
            }
        }
    }
    return value;
};
const v1046 = [keyValueIterator];
const v1047 = index.mark;
var _marked = v1046.map(v1047);
const keyValueIterator = function (obj) {
    let prefix;
    const v1048 = arguments.length;
    const v1049 = v1048 > 1;
    const v1050 = arguments[1];
    const v1051 = v1050 !== undefined;
    const v1052 = v1049 && v1051;
    const v1053 = arguments[1];
    if (v1052) {
        prefix = v1053;
    } else {
        prefix = '';
    }
    var key;
    var value;
    const v1074 = function keyValueIterator$(_context) {
        while (1) {
            const v1054 = _context.next;
            switch (_context.prev = v1054) {
            case 0:
                const v1055 = index.keys(obj);
                _context.t0 = v1055;
            case 1:
                const v1056 = _context.t0();
                const v1057 = (_context.t1 = v1056).done;
                if (v1057) {
                    _context.next = 12;
                    break;
                }
                const v1058 = _context.t1;
                key = v1058.value;
                value = obj[key];
                const v1059 = typeof value;
                const v1060 = v1059 === 'undefined';
                const v1061 = _typeof(value);
                let v1062;
                if (v1060) {
                    v1062 = 'undefined';
                } else {
                    v1062 = v1061;
                }
                const v1063 = v1062 === 'object';
                const v1064 = !v1063;
                if (v1064) {
                    _context.next = 8;
                    break;
                }
                const v1065 = '' + prefix;
                const v1066 = v1065 + key;
                const v1067 = v1066 + '.';
                const v1068 = keyValueIterator(value, v1067);
                const v1069 = _context.delegateYield(v1068, 't2', 6);
                return v1069;
            case 6:
                _context.next = 10;
                break;
            case 8:
                _context.next = 10;
                const v1070 = '' + prefix;
                const v1071 = v1070 + key;
                const v1072 = [
                    v1071,
                    value
                ];
                return v1072;
            case 10:
                _context.next = 1;
                break;
            case 12:
            case 'end':
                const v1073 = _context.stop();
                return v1073;
            }
        }
    };
    const v1075 = _marked[0];
    const v1076 = index.wrap(v1074, v1075, this);
    return v1076;
};
const v1230 = function () {
    const Node = function (id, label, stats) {
        let children;
        const v1077 = arguments.length;
        const v1078 = v1077 > 3;
        const v1079 = arguments[3];
        const v1080 = v1079 !== undefined;
        const v1081 = v1078 && v1080;
        const v1082 = arguments[3];
        const v1083 = [];
        if (v1081) {
            children = v1082;
        } else {
            children = v1083;
        }
        const v1084 = classCallCheck(this, Node);
        v1084;
        this._id = id;
        this._label = label;
        this._stats = stats;
        this._parent = null;
        this._children = children;
    };
    const v1115 = function dfsIterator() {
        let until;
        const v1085 = arguments.length;
        const v1086 = v1085 > 0;
        const v1087 = arguments[0];
        const v1088 = v1087 !== undefined;
        const v1089 = v1086 && v1088;
        const v1090 = arguments[0];
        const v1091 = function () {
            return false;
        };
        if (v1089) {
            until = v1090;
        } else {
            until = v1091;
        }
        var _iteratorNormalCompletion;
        var _didIteratorError;
        var _iteratorError;
        var _iterator;
        var _step;
        var child;
        const v1110 = function dfsIterator$(_context) {
            while (1) {
                const v1092 = _context.next;
                switch (_context.prev = v1092) {
                case 0:
                    _context.next = 2;
                    return this;
                case 2:
                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context.prev = 5;
                    const v1093 = this._children;
                    const v1094 = Symbol.iterator;
                    _iterator = v1093[v1094]();
                case 7:
                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                        _context.next = 15;
                        break;
                    }
                    child = _step.value;
                    const v1095 = until(child);
                    const v1096 = until && v1095;
                    const v1097 = !v1096;
                    if (v1097) {
                        _context.next = 11;
                        break;
                    }
                    const v1098 = _context.abrupt('continue', 12);
                    return v1098;
                case 11:
                    const v1099 = child.dfsIterator(until);
                    const v1100 = _context.delegateYield(v1099, 't0', 12);
                    return v1100;
                case 12:
                    _iteratorNormalCompletion = true;
                    _context.next = 7;
                    break;
                case 15:
                    _context.next = 21;
                    break;
                case 17:
                    _context.prev = 17;
                    const v1101 = _context['catch'](5);
                    _context.t1 = v1101;
                    _didIteratorError = true;
                    _iteratorError = _context.t1;
                case 21:
                    _context.prev = 21;
                    _context.prev = 22;
                    const v1102 = !_iteratorNormalCompletion;
                    const v1103 = _iterator.return;
                    const v1104 = v1102 && v1103;
                    if (v1104) {
                        const v1105 = _iterator.return();
                        v1105;
                    }
                case 24:
                    _context.prev = 24;
                    const v1106 = !_didIteratorError;
                    if (v1106) {
                        _context.next = 27;
                        break;
                    }
                    throw _iteratorError;
                case 27:
                    const v1107 = _context.finish(24);
                    return v1107;
                case 28:
                    const v1108 = _context.finish(21);
                    return v1108;
                case 29:
                case 'end':
                    const v1109 = _context.stop();
                    return v1109;
                }
            }
        };
        const v1111 = [
            5,
            17,
            21,
            29
        ];
        const v1112 = [
            22,
            ,
            24,
            28
        ];
        const v1113 = [
            v1111,
            v1112
        ];
        const v1114 = index.wrap(v1110, dfsIterator, this, v1113);
        return v1114;
    };
    const v1116 = index.mark(v1115);
    const v1117 = {
        key: 'dfsIterator',
        value: v1116
    };
    const v1118 = Symbol.iterator;
    const v1125 = function value() {
        const v1123 = function value$(_context2) {
            while (1) {
                const v1119 = _context2.next;
                switch (_context2.prev = v1119) {
                case 0:
                    const v1120 = this.dfsIterator();
                    const v1121 = _context2.delegateYield(v1120, 't0', 1);
                    return v1121;
                case 1:
                case 'end':
                    const v1122 = _context2.stop();
                    return v1122;
                }
            }
        };
        const v1124 = index.wrap(v1123, value, this);
        return v1124;
    };
    const v1126 = index.mark(v1125);
    const v1127 = {
        key: v1118,
        value: v1126
    };
    const v1160 = function bfsIterator() {
        let until;
        const v1128 = arguments.length;
        const v1129 = v1128 > 0;
        const v1130 = arguments[0];
        const v1131 = v1130 !== undefined;
        const v1132 = v1129 && v1131;
        const v1133 = arguments[0];
        const v1134 = function () {
            return false;
        };
        if (v1132) {
            until = v1133;
        } else {
            until = v1134;
        }
        var queue;
        var node;
        var _iteratorNormalCompletion2;
        var _didIteratorError2;
        var _iteratorError2;
        var _iterator2;
        var _step2;
        var child;
        const v1155 = function bfsIterator$(_context3) {
            while (1) {
                const v1135 = _context3.next;
                switch (_context3.prev = v1135) {
                case 0:
                    queue = [this];
                case 1:
                    const v1136 = queue.length;
                    const v1137 = v1136 > 0;
                    const v1138 = !v1137;
                    if (v1138) {
                        _context3.next = 34;
                        break;
                    }
                    node = queue.shift();
                    _context3.next = 5;
                    return node;
                case 5:
                    _iteratorNormalCompletion2 = true;
                    _didIteratorError2 = false;
                    _iteratorError2 = undefined;
                    _context3.prev = 8;
                    const v1139 = node.adjacentIterator();
                    const v1140 = Symbol.iterator;
                    _iterator2 = v1139[v1140]();
                case 10:
                    if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                        _context3.next = 18;
                        break;
                    }
                    child = _step2.value;
                    const v1141 = until(child);
                    const v1142 = until && v1141;
                    const v1143 = !v1142;
                    if (v1143) {
                        _context3.next = 14;
                        break;
                    }
                    const v1144 = _context3.abrupt('continue', 15);
                    return v1144;
                case 14:
                    const v1145 = queue.push(child);
                    v1145;
                case 15:
                    _iteratorNormalCompletion2 = true;
                    _context3.next = 10;
                    break;
                case 18:
                    _context3.next = 24;
                    break;
                case 20:
                    _context3.prev = 20;
                    const v1146 = _context3['catch'](8);
                    _context3.t0 = v1146;
                    _didIteratorError2 = true;
                    _iteratorError2 = _context3.t0;
                case 24:
                    _context3.prev = 24;
                    _context3.prev = 25;
                    const v1147 = !_iteratorNormalCompletion2;
                    const v1148 = _iterator2.return;
                    const v1149 = v1147 && v1148;
                    if (v1149) {
                        const v1150 = _iterator2.return();
                        v1150;
                    }
                case 27:
                    _context3.prev = 27;
                    const v1151 = !_didIteratorError2;
                    if (v1151) {
                        _context3.next = 30;
                        break;
                    }
                    throw _iteratorError2;
                case 30:
                    const v1152 = _context3.finish(27);
                    return v1152;
                case 31:
                    const v1153 = _context3.finish(24);
                    return v1153;
                case 32:
                    _context3.next = 1;
                    break;
                case 34:
                case 'end':
                    const v1154 = _context3.stop();
                    return v1154;
                }
            }
        };
        const v1156 = [
            8,
            20,
            24,
            32
        ];
        const v1157 = [
            25,
            ,
            27,
            31
        ];
        const v1158 = [
            v1156,
            v1157
        ];
        const v1159 = index.wrap(v1155, bfsIterator, this, v1158);
        return v1159;
    };
    const v1161 = index.mark(v1160);
    const v1162 = {
        key: 'bfsIterator',
        value: v1161
    };
    const v1180 = function adjacentIterator() {
        var _iteratorNormalCompletion3;
        var _didIteratorError3;
        var _iteratorError3;
        var _iterator3;
        var _step3;
        var child;
        const v1175 = function adjacentIterator$(_context4) {
            while (1) {
                const v1163 = _context4.next;
                switch (_context4.prev = v1163) {
                case 0:
                    _iteratorNormalCompletion3 = true;
                    _didIteratorError3 = false;
                    _iteratorError3 = undefined;
                    _context4.prev = 3;
                    const v1164 = this._children;
                    const v1165 = Symbol.iterator;
                    _iterator3 = v1164[v1165]();
                case 5:
                    if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                        _context4.next = 12;
                        break;
                    }
                    child = _step3.value;
                    _context4.next = 9;
                    return child;
                case 9:
                    _iteratorNormalCompletion3 = true;
                    _context4.next = 5;
                    break;
                case 12:
                    _context4.next = 18;
                    break;
                case 14:
                    _context4.prev = 14;
                    const v1166 = _context4['catch'](3);
                    _context4.t0 = v1166;
                    _didIteratorError3 = true;
                    _iteratorError3 = _context4.t0;
                case 18:
                    _context4.prev = 18;
                    _context4.prev = 19;
                    const v1167 = !_iteratorNormalCompletion3;
                    const v1168 = _iterator3.return;
                    const v1169 = v1167 && v1168;
                    if (v1169) {
                        const v1170 = _iterator3.return();
                        v1170;
                    }
                case 21:
                    _context4.prev = 21;
                    const v1171 = !_didIteratorError3;
                    if (v1171) {
                        _context4.next = 24;
                        break;
                    }
                    throw _iteratorError3;
                case 24:
                    const v1172 = _context4.finish(21);
                    return v1172;
                case 25:
                    const v1173 = _context4.finish(18);
                    return v1173;
                case 26:
                case 'end':
                    const v1174 = _context4.stop();
                    return v1174;
                }
            }
        };
        const v1176 = [
            3,
            14,
            18,
            26
        ];
        const v1177 = [
            19,
            ,
            21,
            25
        ];
        const v1178 = [
            v1176,
            v1177
        ];
        const v1179 = index.wrap(v1175, adjacentIterator, this, v1178);
        return v1179;
    };
    const v1181 = index.mark(v1180);
    const v1182 = {
        key: 'adjacentIterator',
        value: v1181
    };
    const v1193 = function ancestorsIterator() {
        const v1191 = function ancestorsIterator$(_context5) {
            while (1) {
                const v1183 = _context5.next;
                switch (_context5.prev = v1183) {
                case 0:
                    const v1184 = this._parent;
                    const v1185 = !v1184;
                    if (v1185) {
                        _context5.next = 4;
                        break;
                    }
                    _context5.next = 3;
                    const v1186 = this._parent;
                    return v1186;
                case 3:
                    const v1187 = this._parent;
                    const v1188 = v1187.ancestorsIterator();
                    const v1189 = _context5.delegateYield(v1188, 't0', 4);
                    return v1189;
                case 4:
                case 'end':
                    const v1190 = _context5.stop();
                    return v1190;
                }
            }
        };
        const v1192 = index.wrap(v1191, ancestorsIterator, this);
        return v1192;
    };
    const v1194 = index.mark(v1193);
    const v1195 = {
        key: 'ancestorsIterator',
        value: v1194
    };
    const v1203 = function statsIterator() {
        const v1201 = function statsIterator$(_context6) {
            while (1) {
                const v1196 = _context6.next;
                switch (_context6.prev = v1196) {
                case 0:
                    const v1197 = this._stats;
                    const v1198 = keyValueIterator(v1197);
                    const v1199 = _context6.delegateYield(v1198, 't0', 1);
                    return v1199;
                case 1:
                case 'end':
                    const v1200 = _context6.stop();
                    return v1200;
                }
            }
        };
        const v1202 = index.wrap(v1201, statsIterator, this);
        return v1202;
    };
    const v1204 = index.mark(v1203);
    const v1205 = {
        key: 'statsIterator',
        value: v1204
    };
    const v1223 = function toJSON() {
        var nodes = [];
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;
        try {
            const v1206 = this.dfsIterator();
            const v1207 = Symbol.iterator;
            var _iterator4 = v1206[v1207]();
            var _step4;
            let v1208 = !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);
            while (v1208) {
                var node = _step4.value;
                const v1209 = node._id;
                const v1210 = node._label;
                const v1211 = node._stats;
                const v1212 = node._children;
                const v1214 = function (x) {
                    const v1213 = x._id;
                    return v1213;
                };
                const v1215 = v1212.map(v1214);
                const v1216 = {
                    id: v1209,
                    label: v1210,
                    stats: v1211,
                    children: v1215
                };
                const v1217 = nodes.push(v1216);
                v1217;
                v1208 = !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done);
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                const v1218 = !_iteratorNormalCompletion4;
                const v1219 = _iterator4.return;
                const v1220 = v1218 && v1219;
                if (v1220) {
                    const v1221 = _iterator4.return();
                    v1221;
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
        const v1222 = {};
        v1222.nodes = nodes;
        return v1222;
    };
    const v1224 = {
        key: 'toJSON',
        value: v1223
    };
    const v1226 = function get() {
        const v1225 = this._label;
        return v1225;
    };
    const v1227 = {
        key: 'label',
        get: v1226
    };
    const v1228 = [
        v1117,
        v1127,
        v1162,
        v1182,
        v1195,
        v1205,
        v1224,
        v1227
    ];
    const v1229 = createClass(Node, v1228);
    v1229;
    return Node;
};
var Node = v1230();
const loadFromNode$1 = function (heimdallNode) {
    var nodesJSON = heimdallNode.toJSONSubgraph();
    const v1231 = loadFromV02Nodes(nodesJSON);
    return v1231;
};
const loadFromJSON$1 = function (json) {
    var nodesJSON = json.nodes;
    const v1232 = loadFromV02Nodes(nodesJSON);
    return v1232;
};
const loadFromV02Nodes = function (nodesJSON) {
    var nodesById = {};
    var root = null;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        const v1233 = Symbol.iterator;
        var _iterator = nodesJSON[v1233]();
        var _step;
        let v1234 = !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        while (v1234) {
            var jsonNode = _step.value;
            const v1235 = void 0;
            var id = v1235;
            const v1236 = void 0;
            var label = v1236;
            const v1237 = jsonNode._id;
            if (v1237) {
                const v1238 = jsonNode._id;
                const v1239 = jsonNode.id;
                var _ref = [
                    v1238,
                    v1239
                ];
                id = _ref[0];
                label = _ref[1];
            } else {
                const v1240 = jsonNode.id;
                const v1241 = jsonNode.label;
                var _ref2 = [
                    v1240,
                    v1241
                ];
                id = _ref2[0];
                label = _ref2[1];
            }
            const v1242 = jsonNode.stats;
            nodesById[id] = new Node(id, label, v1242);
            const v1243 = root === null;
            if (v1243) {
                root = nodesById[id];
            }
            v1234 = !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            const v1244 = !_iteratorNormalCompletion;
            const v1245 = _iterator.return;
            const v1246 = v1244 && v1245;
            if (v1246) {
                const v1247 = _iterator.return();
                v1247;
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;
    try {
        var _loop = function _loop() {
            var jsonNode = _step2.value;
            const v1248 = jsonNode._id;
            const v1249 = jsonNode.id;
            var id = v1248 || v1249;
            var node = nodesById[id];
            const v1250 = jsonNode.children;
            const v1255 = function (childId) {
                var child = nodesById[childId];
                const v1251 = !child;
                if (v1251) {
                    const v1252 = 'No child with id \'' + childId;
                    const v1253 = v1252 + '\' found.';
                    const v1254 = new Error(v1253);
                    throw v1254;
                }
                child._parent = node;
                return child;
            };
            var children = v1250.map(v1255);
            node._children = children;
        };
        const v1256 = Symbol.iterator;
        var _iterator2 = nodesJSON[v1256]();
        var _step2;
        let v1257 = !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
        while (v1257) {
            const v1258 = _loop();
            v1258;
            v1257 = !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            const v1259 = !_iteratorNormalCompletion2;
            const v1260 = _iterator2.return;
            const v1261 = v1259 && v1260;
            if (v1261) {
                const v1262 = _iterator2.return();
                v1262;
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    return root;
};
const loadFromFile = function (path) {
    const v1263 = fs.readFileSync(path, 'UTF8');
    var json = JSON.parse(v1263);
    const v1264 = loadFromJSON$$1(json);
    return v1264;
};
const loadFromNode$$1 = function () {
    const v1265 = loadFromNode$1.apply(undefined, arguments);
    return v1265;
};
const loadFromJSON$$1 = function () {
    const v1266 = loadFromJSON$1.apply(undefined, arguments);
    return v1266;
};
exports.loadFromFile = loadFromFile;
exports.loadFromNode = loadFromNode$$1;
exports.loadFromJSON = loadFromJSON$$1;