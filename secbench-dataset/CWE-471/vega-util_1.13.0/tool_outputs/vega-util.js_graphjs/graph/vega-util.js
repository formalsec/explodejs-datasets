const v649 = function (global, factory) {
    const v633 = typeof exports;
    const v634 = v633 === 'object';
    const v635 = typeof module;
    const v636 = v635 !== 'undefined';
    const v637 = v634 && v636;
    const v638 = factory(exports);
    const v639 = typeof define;
    const v640 = v639 === 'function';
    const v641 = define.amd;
    const v642 = v640 && v641;
    const v643 = ['exports'];
    const v644 = define(v643, factory);
    const v645 = {};
    undefined = {};
    const v646 = factory(global.vega);
    let v647;
    if (v642) {
        v647 = v644;
    } else {
        v647 = (global = global || self, v646);
    }
    let v648;
    if (v637) {
        v648 = v638;
    } else {
        v648 = v647;
    }
    v648;
};
const v1263 = function (exports) {
    'use strict';
    const accessor = function (fn, fields, name) {
        const v650 = [];
        fn.fields = fields || v650;
        fn.fname = name;
        return fn;
    };
    const accessorName = function (fn) {
        const v651 = fn == null;
        const v652 = fn.fname;
        let v653;
        if (v651) {
            v653 = null;
        } else {
            v653 = v652;
        }
        return v653;
    };
    const accessorFields = function (fn) {
        const v654 = fn == null;
        const v655 = fn.fields;
        let v656;
        if (v654) {
            v656 = null;
        } else {
            v656 = v655;
        }
        return v656;
    };
    const error = function (message) {
        const v657 = Error(message);
        throw v657;
    };
    const splitAccessPath = function (p) {
        var path = [];
        var q = null;
        var b = 0;
        var n = p.length;
        var s = '';
        var i;
        var j;
        var c;
        p = p + '';
        const push = function () {
            const v658 = p.substring(i, j);
            const v659 = s + v658;
            const v660 = path.push(v659);
            v660;
            s = '';
            i = j + 1;
        };
        j = 0;
        let v661 = j < n;
        while (v661) {
            c = p[j];
            const v663 = c === '\\';
            if (v663) {
                s += p.substring(i, j);
                const v664 = ++j;
                const v665 = ++j;
                s += p.substring(v664, v665);
                i = j;
            } else {
                const v666 = c === q;
                if (v666) {
                    const v667 = push();
                    v667;
                    q = null;
                    const v668 = -1;
                    b = v668;
                } else {
                    if (q) {
                        continue;
                    } else {
                        const v669 = i === b;
                        const v670 = c === '"';
                        const v671 = v669 && v670;
                        if (v671) {
                            i = j + 1;
                            q = c;
                        } else {
                            const v672 = i === b;
                            const v673 = c === '\'';
                            const v674 = v672 && v673;
                            if (v674) {
                                i = j + 1;
                                q = c;
                            } else {
                                const v675 = c === '.';
                                const v676 = !b;
                                const v677 = v675 && v676;
                                if (v677) {
                                    const v678 = j > i;
                                    if (v678) {
                                        const v679 = push();
                                        v679;
                                    } else {
                                        i = j + 1;
                                    }
                                } else {
                                    const v680 = c === '[';
                                    if (v680) {
                                        const v681 = j > i;
                                        if (v681) {
                                            const v682 = push();
                                            v682;
                                        }
                                        i = j + 1;
                                        b = i;
                                    } else {
                                        const v683 = c === ']';
                                        if (v683) {
                                            const v684 = !b;
                                            if (v684) {
                                                const v685 = 'Access path missing open bracket: ' + p;
                                                const v686 = error(v685);
                                                v686;
                                            }
                                            const v687 = b > 0;
                                            if (v687) {
                                                const v688 = push();
                                                v688;
                                            }
                                            b = 0;
                                            i = j + 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            const v662 = ++j;
            v661 = j < n;
        }
        if (b) {
            const v689 = 'Access path missing closing bracket: ' + p;
            const v690 = error(v689);
            v690;
        }
        if (q) {
            const v691 = 'Access path missing closing quote: ' + p;
            const v692 = error(v691);
            v692;
        }
        const v693 = j > i;
        if (v693) {
            const v694 = j++;
            v694;
            const v695 = push();
            v695;
        }
        return path;
    };
    var isArray = Array.isArray;
    const isObject = function (_) {
        const v696 = Object(_);
        const v697 = _ === v696;
        return v697;
    };
    const isString = function (_) {
        const v698 = typeof _;
        const v699 = v698 === 'string';
        return v699;
    };
    const $ = function (x) {
        const v700 = isArray(x);
        const v701 = x.map($);
        const v702 = '[' + v701;
        const v703 = v702 + ']';
        const v704 = isObject(x);
        const v705 = isString(x);
        const v706 = v704 || v705;
        const v707 = JSON.stringify(x);
        const v708 = v707.replace('\u2028', '\\u2028');
        const v709 = v708.replace('\u2029', '\\u2029');
        let v710;
        if (v706) {
            v710 = v709;
        } else {
            v710 = x;
        }
        let v711;
        if (v700) {
            v711 = v703;
        } else {
            v711 = v710;
        }
        return v711;
    };
    const field = function (field, name) {
        var path = splitAccessPath(field);
        const v712 = path.map($);
        const v713 = v712.join('][');
        const v714 = 'return _[' + v713;
        var code = v714 + '];';
        const v715 = Function('_', code);
        const v716 = path.length;
        const v717 = v716 === 1;
        const v718 = path[0];
        if (v717) {
            field = v718;
        } else {
            field = field;
        }
        const v719 = [,];
        const v720 = name || field;
        const v721 = accessor(v715, v719, v720);
        return v721;
    };
    var empty = [];
    var id = field('id');
    const v722 = function (_) {
        return _;
    };
    var identity = accessor(v722, empty, 'identity');
    const v723 = function () {
        return 0;
    };
    var zero = accessor(v723, empty, 'zero');
    const v724 = function () {
        return 1;
    };
    var one = accessor(v724, empty, 'one');
    const v725 = function () {
        return true;
    };
    var truthy = accessor(v725, empty, 'true');
    const v726 = function () {
        return false;
    };
    var falsy = accessor(v726, empty, 'false');
    const log = function (method, level, input) {
        const v727 = [level];
        const v728 = [];
        const v729 = v728.slice;
        const v730 = v729.call(input);
        var args = v727.concat(v730);
        const v731 = console[method];
        const v732 = v731.apply(console, args);
        v732;
    };
    var None = 0;
    var Error$1 = 1;
    var Warn = 2;
    var Info = 3;
    var Debug = 4;
    const logger = function (_, method) {
        var level = _ || None;
        const v735 = function (_) {
            const v733 = arguments.length;
            if (v733) {
                const v734 = +_;
                level = v734;
                return this;
            } else {
                return level;
            }
        };
        const v739 = function () {
            const v736 = level >= Error$1;
            if (v736) {
                const v737 = method || 'error';
                const v738 = log(v737, 'ERROR', arguments);
                v738;
            }
            return this;
        };
        const v743 = function () {
            const v740 = level >= Warn;
            if (v740) {
                const v741 = method || 'warn';
                const v742 = log(v741, 'WARN', arguments);
                v742;
            }
            return this;
        };
        const v747 = function () {
            const v744 = level >= Info;
            if (v744) {
                const v745 = method || 'log';
                const v746 = log(v745, 'INFO', arguments);
                v746;
            }
            return this;
        };
        const v751 = function () {
            const v748 = level >= Debug;
            if (v748) {
                const v749 = method || 'log';
                const v750 = log(v749, 'DEBUG', arguments);
                v750;
            }
            return this;
        };
        const v752 = {};
        v752.level = v735;
        v752.error = v739;
        v752.warn = v743;
        v752.info = v747;
        v752.debug = v751;
        return v752;
    };
    const mergeConfig = function (...configs) {
        const v763 = (out, source) => {
            let key;
            for (key in source) {
                const v753 = key === 'signals';
                if (v753) {
                    const v754 = out.signals;
                    const v755 = source.signals;
                    const v756 = mergeNamed(v754, v755);
                    out.signals = v756;
                } else {
                    let r;
                    const v757 = key === 'legend';
                    const v758 = { 'layout': 1 };
                    const v759 = key === 'style';
                    let v760;
                    if (v759) {
                        v760 = true;
                    } else {
                        v760 = null;
                    }
                    if (v757) {
                        r = v758;
                    } else {
                        r = v760;
                    }
                    const v761 = source[key];
                    const v762 = writeConfig(out, key, v761, r);
                    v762;
                }
            }
            return out;
        };
        const v764 = {};
        const v765 = configs.reduce(v763, v764);
        return v765;
    };
    const writeConfig = function (output, key, value, recurse) {
        var k;
        var o;
        const v766 = isObject(value);
        const v767 = isArray(value);
        const v768 = !v767;
        const v769 = v766 && v768;
        if (v769) {
            const v770 = output[key];
            const v771 = isObject(v770);
            const v772 = output[key];
            const v773 = {};
            if (v771) {
                o = v772;
            } else {
                o = output[key] = v773;
            }
            for (k in value) {
                const v774 = recurse === true;
                const v775 = recurse[k];
                const v776 = v774 || v775;
                const v777 = recurse && v776;
                if (v777) {
                    const v778 = value[k];
                    const v779 = writeConfig(o, k, v778);
                    v779;
                } else {
                    const v780 = value[k];
                    o[k] = v780;
                }
            }
        } else {
            output[key] = value;
        }
    };
    const mergeNamed = function (a, b) {
        const v781 = a == null;
        if (v781) {
            return b;
        }
        const map = {};
        const out = [];
        const add = function (_) {
            const v782 = _.name;
            const v783 = map[v782];
            const v784 = !v783;
            if (v784) {
                const v785 = _.name;
                map[v785] = 1;
                const v786 = out.push(_);
                v786;
            }
        };
        const v787 = b.forEach(add);
        v787;
        const v788 = a.forEach(add);
        v788;
        return out;
    };
    const peek = function (array) {
        const v789 = array.length;
        const v790 = v789 - 1;
        const v791 = array[v790];
        return v791;
    };
    const toNumber = function (_) {
        const v792 = _ == null;
        const v793 = _ === '';
        const v794 = v792 || v793;
        const v795 = +_;
        let v796;
        if (v794) {
            v796 = null;
        } else {
            v796 = v795;
        }
        return v796;
    };
    const exp = function (sign) {
        const v799 = function (x) {
            const v797 = Math.exp(x);
            const v798 = sign * v797;
            return v798;
        };
        return v799;
    };
    const log$1 = function (sign) {
        const v802 = function (x) {
            const v800 = sign * x;
            const v801 = Math.log(v800);
            return v801;
        };
        return v802;
    };
    const symlog = function (c) {
        const v808 = function (x) {
            const v803 = Math.sign(x);
            const v804 = x / c;
            const v805 = Math.abs(v804);
            const v806 = Math.log1p(v805);
            const v807 = v803 * v806;
            return v807;
        };
        return v808;
    };
    const symexp = function (c) {
        const v814 = function (x) {
            const v809 = Math.sign(x);
            const v810 = Math.abs(x);
            const v811 = Math.expm1(v810);
            const v812 = v809 * v811;
            const v813 = v812 * c;
            return v813;
        };
        return v814;
    };
    const pow = function (exponent) {
        const v821 = function (x) {
            const v815 = x < 0;
            const v816 = -x;
            const v817 = Math.pow(v816, exponent);
            const v818 = -v817;
            const v819 = Math.pow(x, exponent);
            let v820;
            if (v815) {
                v820 = v818;
            } else {
                v820 = v819;
            }
            return v820;
        };
        return v821;
    };
    const pan = function (domain, delta, lift, ground) {
        const v822 = domain[0];
        var d0 = lift(v822);
        const v823 = peek(domain);
        var d1 = lift(v823);
        const v824 = d1 - d0;
        var dd = v824 * delta;
        const v825 = d0 - dd;
        const v826 = ground(v825);
        const v827 = d1 - dd;
        const v828 = ground(v827);
        const v829 = [
            v826,
            v828
        ];
        return v829;
    };
    const panLinear = function (domain, delta) {
        const v830 = pan(domain, delta, toNumber, identity);
        return v830;
    };
    const panLog = function (domain, delta) {
        const v831 = domain[0];
        var sign = Math.sign(v831);
        const v832 = log$1(sign);
        const v833 = exp(sign);
        const v834 = pan(domain, delta, v832, v833);
        return v834;
    };
    const panPow = function (domain, delta, exponent) {
        const v835 = pow(exponent);
        const v836 = 1 / exponent;
        const v837 = pow(v836);
        const v838 = pan(domain, delta, v835, v837);
        return v838;
    };
    const panSymlog = function (domain, delta, constant) {
        const v839 = symlog(constant);
        const v840 = symexp(constant);
        const v841 = pan(domain, delta, v839, v840);
        return v841;
    };
    const zoom = function (domain, anchor, scale, lift, ground) {
        const v842 = domain[0];
        var d0 = lift(v842);
        const v843 = peek(domain);
        var d1 = lift(v843);
        let da;
        const v844 = anchor != null;
        const v845 = lift(anchor);
        const v846 = d0 + d1;
        const v847 = v846 / 2;
        if (v844) {
            da = v845;
        } else {
            da = v847;
        }
        const v848 = d0 - da;
        const v849 = v848 * scale;
        const v850 = da + v849;
        const v851 = ground(v850);
        const v852 = d1 - da;
        const v853 = v852 * scale;
        const v854 = da + v853;
        const v855 = ground(v854);
        const v856 = [
            v851,
            v855
        ];
        return v856;
    };
    const zoomLinear = function (domain, anchor, scale) {
        const v857 = zoom(domain, anchor, scale, toNumber, identity);
        return v857;
    };
    const zoomLog = function (domain, anchor, scale) {
        const v858 = domain[0];
        var sign = Math.sign(v858);
        const v859 = log$1(sign);
        const v860 = exp(sign);
        const v861 = zoom(domain, anchor, scale, v859, v860);
        return v861;
    };
    const zoomPow = function (domain, anchor, scale, exponent) {
        const v862 = pow(exponent);
        const v863 = 1 / exponent;
        const v864 = pow(v863);
        const v865 = zoom(domain, anchor, scale, v862, v864);
        return v865;
    };
    const zoomSymlog = function (domain, anchor, scale, constant) {
        const v866 = symlog(constant);
        const v867 = symexp(constant);
        const v868 = zoom(domain, anchor, scale, v866, v867);
        return v868;
    };
    const quarter = function (date) {
        const v869 = new Date(date);
        const v870 = v869.getMonth();
        const v871 = v870 / 3;
        const v872 = ~v871;
        const v873 = ~v872;
        const v874 = 1 + v873;
        return v874;
    };
    const utcquarter = function (date) {
        const v875 = new Date(date);
        const v876 = v875.getUTCMonth();
        const v877 = v876 / 3;
        const v878 = ~v877;
        const v879 = ~v878;
        const v880 = 1 + v879;
        return v880;
    };
    const array = function (_) {
        const v881 = _ != null;
        const v882 = isArray(_);
        const v883 = [_];
        let v884;
        if (v882) {
            v884 = _;
        } else {
            v884 = v883;
        }
        const v885 = [];
        let v886;
        if (v881) {
            v886 = v884;
        } else {
            v886 = v885;
        }
        return v886;
    };
    const clampRange = function (range, min, max) {
        var lo = range[0];
        var hi = range[1];
        var span;
        const v887 = hi < lo;
        if (v887) {
            span = hi;
            hi = lo;
            lo = span;
        }
        span = hi - lo;
        const v888 = max - min;
        const v889 = span >= v888;
        const v890 = [
            min,
            max
        ];
        const v891 = Math.max(lo, min);
        const v892 = max - span;
        const v893 = lo + span;
        const v894 = [
            lo = Math.min(v891, v892),
            v893
        ];
        let v895;
        if (v889) {
            v895 = v890;
        } else {
            v895 = v894;
        }
        return v895;
    };
    const isFunction = function (_) {
        const v896 = typeof _;
        const v897 = v896 === 'function';
        return v897;
    };
    const compare = function (fields, orders) {
        var idx = [];
        const v905 = function (f, i) {
            const v898 = f == null;
            if (v898) {
                return null;
            } else {
                const v899 = idx.push(i);
                v899;
                const v900 = isFunction(f);
                const v901 = splitAccessPath(f);
                const v902 = v901.map($);
                const v903 = v902.join('][');
                let v904;
                if (v900) {
                    v904 = f;
                } else {
                    v904 = v903;
                }
                return v904;
            }
        };
        var cmp = (fields = array(fields)).map(v905);
        const v906 = idx.length;
        var n = v906 - 1;
        var ord = array(orders);
        var code = 'var u,v;return ';
        var i;
        var j;
        var f;
        var u;
        var v;
        var d;
        var t;
        var lt;
        var gt;
        const v907 = n < 0;
        if (v907) {
            return null;
        }
        (j = 0)
        let v908 = j <= n;
        while (v908) {
            i = idx[j];
            f = cmp[i];
            const v910 = isFunction(f);
            if (v910) {
                d = 'f' + i;
                const v911 = '(u=this.' + d;
                u = v911 + '(a))';
                const v912 = '(v=this.' + d;
                v = v912 + '(b))';
                const v913 = {};
                (t = t || v913)[d] = f;
            } else {
                const v914 = '(u=a[' + f;
                u = v914 + '])';
                const v915 = '(v=b[' + f;
                v = v915 + '])';
            }
            d = '((v=v instanceof Date?+v:v),(u=u instanceof Date?+u:u))';
            const v916 = ord[i];
            const v917 = v916 !== 'descending';
            if (v917) {
                gt = 1;
                const v918 = -1;
                lt = v918;
            } else {
                const v919 = -1;
                gt = v919;
                lt = 1;
            }
            const v920 = '(' + u;
            const v921 = v920 + '<';
            const v922 = v921 + v;
            const v923 = v922 + '||u==null)&&v!=null?';
            const v924 = v923 + lt;
            const v925 = v924 + ':(u>v||v==null)&&u!=null?';
            const v926 = v925 + gt;
            const v927 = v926 + ':';
            const v928 = v927 + d;
            const v929 = v928 + '!==u&&v===v?';
            const v930 = v929 + lt;
            const v931 = v930 + ':v!==v&&u===u?';
            const v932 = v931 + gt;
            const v933 = i < n;
            let v934;
            if (v933) {
                v934 = ':';
            } else {
                v934 = ':0';
            }
            code += v932 + v934;
            const v909 = ++j;
            v908 = j <= n;
        }
        const v935 = code + ';';
        f = Function('a', 'b', v935);
        if (t) {
            f = f.bind(t);
        }
        const v944 = function (map, field) {
            const v936 = isFunction(field);
            if (v936) {
                const v937 = accessorFields(field);
                const v938 = [];
                const v939 = v937 || v938;
                const v940 = function (_) {
                    map[_] = 1;
                };
                const v941 = v939.forEach(v940);
                v941;
            } else {
                const v942 = field != null;
                if (v942) {
                    const v943 = field + '';
                    map[v943] = 1;
                }
            }
            return map;
        };
        const v945 = {};
        fields = fields.reduce(v944, v945);
        const v946 = Object.keys(fields);
        const v947 = accessor(f, v946);
        return v947;
    };
    const constant = function (_) {
        const v948 = isFunction(_);
        const v949 = function () {
            return _;
        };
        let v950;
        if (v948) {
            v950 = _;
        } else {
            v950 = v949;
        }
        return v950;
    };
    const debounce = function (delay, handler) {
        var tid;
        var evt;
        const callback = function () {
            const v951 = handler(evt);
            v951;
            evt = null;
            tid = evt;
        };
        const v953 = function (e) {
            evt = e;
            if (tid) {
                const v952 = clearTimeout(tid);
                v952;
            }
            tid = setTimeout(callback, delay);
        };
        return v953;
    };
    const extend = function (_) {
        var x;
        var k;
        var i = 1;
        var len = arguments.length;
        let v954 = i < len;
        while (v954) {
            x = arguments[i];
            for (k in x) {
                const v956 = x[k];
                _[k] = v956;
            }
            const v955 = ++i;
            v954 = i < len;
        }
        return _;
    };
    const extent = function (array, f) {
        var i = 0;
        var n;
        var v;
        var min;
        var max;
        const v957 = array && (n = array.length);
        if (v957) {
            const v958 = f == null;
            if (v958) {
                v = array[i]
                const v959 = i < n;
                const v960 = v == null;
                const v961 = v !== v;
                const v962 = v960 || v961;
                let v963 = v959 && v962;
                while (v963) {
                    ;
                    const v964 = ++i;
                    v963 = v959 && v962;
                }
                max = v;
                min = max;
                let v965 = i < n;
                while (v965) {
                    v = array[i];
                    const v967 = v != null;
                    if (v967) {
                        const v968 = v < min;
                        if (v968) {
                            min = v;
                        }
                        const v969 = v > max;
                        if (v969) {
                            max = v;
                        }
                    }
                    const v966 = ++i;
                    v965 = i < n;
                }
            } else {
                const v970 = array[i];
                const v971 = i < n;
                const v972 = v == null;
                const v973 = v !== v;
                const v974 = v972 || v973;
                let v975 = v971 && v974;
                while (v975) {
                    ;
                    const v976 = ++i;
                    const v977 = array[v976];
                    v975 = v971 && v974;
                }
                max = v;
                min = max;
                let v978 = i < n;
                while (v978) {
                    const v980 = array[i];
                    v = f(v980);
                    const v981 = v != null;
                    if (v981) {
                        const v982 = v < min;
                        if (v982) {
                            min = v;
                        }
                        const v983 = v > max;
                        if (v983) {
                            max = v;
                        }
                    }
                    const v979 = ++i;
                    v978 = i < n;
                }
            }
        }
        const v984 = [
            min,
            max
        ];
        return v984;
    };
    const extentIndex = function (array, f) {
        const v985 = -1;
        var i = v985;
        var n = array.length;
        var a;
        var b;
        var c;
        var u;
        var v;
        const v986 = f == null;
        if (v986) {
            const v987 = ++i;
            let v988 = v987 < n;
            while (v988) {
                b = array[i];
                const v989 = b != null;
                const v990 = b >= b;
                const v991 = v989 && v990;
                if (v991) {
                    c = b;
                    a = c;
                    break;
                }
                v988 = v987 < n;
            }
            const v992 = i === n;
            if (v992) {
                const v993 = -1;
                const v994 = -1;
                const v995 = [
                    v993,
                    v994
                ];
                return v995;
            }
            v = i;
            u = v;
            const v996 = ++i;
            let v997 = v996 < n;
            while (v997) {
                b = array[i];
                const v998 = b != null;
                if (v998) {
                    const v999 = a > b;
                    if (v999) {
                        a = b;
                        u = i;
                    }
                    const v1000 = c < b;
                    if (v1000) {
                        c = b;
                        v = i;
                    }
                }
                v997 = v996 < n;
            }
        } else {
            const v1001 = ++i;
            let v1002 = v1001 < n;
            while (v1002) {
                const v1003 = array[i];
                b = f(v1003, i, array);
                const v1004 = b != null;
                const v1005 = b >= b;
                const v1006 = v1004 && v1005;
                if (v1006) {
                    c = b;
                    a = c;
                    break;
                }
                v1002 = v1001 < n;
            }
            const v1007 = i === n;
            if (v1007) {
                const v1008 = -1;
                const v1009 = -1;
                const v1010 = [
                    v1008,
                    v1009
                ];
                return v1010;
            }
            v = i;
            u = v;
            const v1011 = ++i;
            let v1012 = v1011 < n;
            while (v1012) {
                const v1013 = array[i];
                b = f(v1013, i, array);
                const v1014 = b != null;
                if (v1014) {
                    const v1015 = a > b;
                    if (v1015) {
                        a = b;
                        u = i;
                    }
                    const v1016 = c < b;
                    if (v1016) {
                        c = b;
                        v = i;
                    }
                }
                v1012 = v1011 < n;
            }
        }
        const v1017 = [
            u,
            v
        ];
        return v1017;
    };
    const v1018 = Object.prototype;
    const hop = v1018.hasOwnProperty;
    const has = function (object, property) {
        const v1019 = hop.call(object, property);
        return v1019;
    };
    var NULL = {};
    const fastmap = function (input) {
        var obj = {};
        var map;
        var test;
        const has$1 = function (key) {
            const v1020 = has(obj, key);
            const v1021 = obj[key];
            const v1022 = v1021 !== NULL;
            const v1023 = v1020 && v1022;
            return v1023;
        };
        const v1027 = function (key) {
            const v1024 = has$1(key);
            const v1025 = obj[key];
            let v1026;
            if (v1024) {
                v1026 = v1025;
            } else {
                v1026 = undefined;
            }
            return v1026;
        };
        const v1036 = function (key, value) {
            const v1028 = has$1(key);
            const v1029 = !v1028;
            if (v1029) {
                const v1030 = map.size;
                const v1031 = ++v1030;
                v1031;
                const v1032 = obj[key];
                const v1033 = v1032 === NULL;
                if (v1033) {
                    const v1034 = map.empty;
                    const v1035 = --v1034;
                    v1035;
                }
            }
            obj[key] = value;
            return this;
        };
        const v1042 = function (key) {
            const v1037 = has$1(key);
            if (v1037) {
                const v1038 = map.size;
                const v1039 = --v1038;
                v1039;
                const v1040 = map.empty;
                const v1041 = ++v1040;
                v1041;
                obj[key] = NULL;
            }
            return this;
        };
        const v1043 = function () {
            map.empty = 0;
            map.size = map.empty;
            obj = {};
            map.object = obj;
        };
        const v1045 = function (_) {
            const v1044 = arguments.length;
            if (v1044) {
                test = _;
                return map;
            } else {
                return test;
            }
        };
        const v1053 = function () {
            var next = {};
            var size = 0;
            var key;
            var value;
            for (key in obj) {
                value = obj[key];
                const v1046 = value !== NULL;
                const v1047 = !test;
                const v1048 = test(value);
                const v1049 = !v1048;
                const v1050 = v1047 || v1049;
                const v1051 = v1046 && v1050;
                if (v1051) {
                    next[key] = value;
                    const v1052 = ++size;
                    v1052;
                }
            }
            map.size = size;
            map.empty = 0;
            obj = next;
            map.object = obj;
        };
        map.size = 0;
        map.empty = 0;
        map.object = obj;
        map.has = has$1;
        map.get = v1027;
        map.set = v1036;
        map.delete = v1042;
        map.clear = v1043;
        map.test = v1045;
        map.clean = v1053;
        map = {};
        map = {};
        if (input) {
            const v1054 = Object.keys(input);
            const v1057 = function (key) {
                const v1055 = input[key];
                const v1056 = map.set(key, v1055);
                v1056;
            };
            const v1058 = v1054.forEach(v1057);
            v1058;
        }
        return map;
    };
    const flush = function (range, value, threshold, left, right, center) {
        const v1059 = !threshold;
        const v1060 = threshold !== 0;
        const v1061 = v1059 && v1060;
        if (v1061) {
            return center;
        }
        var a = range[0];
        var b = peek(range);
        const v1062 = +threshold;
        var t = v1062;
        var l;
        var r;
        const v1063 = b < a;
        if (v1063) {
            l = a;
            a = b;
            b = l;
        }
        const v1064 = value - a;
        l = Math.abs(v1064);
        const v1065 = b - value;
        r = Math.abs(v1065);
        const v1066 = l < r;
        const v1067 = l <= t;
        const v1068 = v1066 && v1067;
        const v1069 = r <= t;
        let v1070;
        if (v1069) {
            v1070 = right;
        } else {
            v1070 = center;
        }
        let v1071;
        if (v1068) {
            v1071 = left;
        } else {
            v1071 = v1070;
        }
        return v1071;
    };
    const inherits = function (child, parent) {
        const v1072 = parent.prototype;
        const v1073 = Object.create(v1072);
        child.prototype = v1073;
        var proto = child.prototype;
        proto.constructor = child;
        return proto;
    };
    const inrange = function (value, range, left, right) {
        var r0 = range[0];
        const v1074 = range.length;
        const v1075 = v1074 - 1;
        var r1 = range[v1075];
        var t;
        const v1076 = r0 > r1;
        if (v1076) {
            t = r0;
            r0 = r1;
            r1 = t;
        }
        const v1077 = left === undefined;
        left = v1077 || left;
        const v1078 = right === undefined;
        right = v1078 || right;
        const v1079 = r0 <= value;
        const v1080 = r0 < value;
        let v1081;
        if (left) {
            v1081 = v1079;
        } else {
            v1081 = v1080;
        }
        const v1082 = value <= r1;
        const v1083 = value < r1;
        let v1084;
        if (right) {
            v1084 = v1082;
        } else {
            v1084 = v1083;
        }
        const v1085 = v1081 && v1084;
        return v1085;
    };
    const isBoolean = function (_) {
        const v1086 = typeof _;
        const v1087 = v1086 === 'boolean';
        return v1087;
    };
    const isDate = function (_) {
        const v1088 = Object.prototype;
        const v1089 = v1088.toString;
        const v1090 = v1089.call(_);
        const v1091 = v1090 === '[object Date]';
        return v1091;
    };
    const isNumber = function (_) {
        const v1092 = typeof _;
        const v1093 = v1092 === 'number';
        return v1093;
    };
    const isRegExp = function (_) {
        const v1094 = Object.prototype;
        const v1095 = v1094.toString;
        const v1096 = v1095.call(_);
        const v1097 = v1096 === '[object RegExp]';
        return v1097;
    };
    const key = function (fields, flat) {
        if (fields) {
            const v1098 = array(fields);
            const v1100 = function (f) {
                const v1099 = f.replace(/\\(.)/g, '$1');
                return v1099;
            };
            const v1101 = v1098.map(v1100);
            const v1102 = array(fields);
            if (flat) {
                fields = v1101;
            } else {
                fields = v1102;
            }
        }
        let fn;
        const v1103 = fields.length;
        const v1104 = fields && v1103;
        const v1105 = !v1104;
        const v1106 = function () {
            return '';
        };
        const v1114 = function (f) {
            const v1107 = $(f);
            const v1108 = splitAccessPath(f);
            const v1109 = v1108.map($);
            const v1110 = v1109.join('][');
            let v1111;
            if (flat) {
                v1111 = v1107;
            } else {
                v1111 = v1110;
            }
            const v1112 = '_[' + v1111;
            const v1113 = v1112 + ']';
            return v1113;
        };
        const v1115 = fields.map(v1114);
        const v1116 = v1115.join('+\'|\'+');
        const v1117 = 'return \'\'+' + v1116;
        const v1118 = v1117 + ';';
        const v1119 = Function('_', v1118);
        if (v1105) {
            fn = v1106;
        } else {
            fn = v1119;
        }
        const v1120 = accessor(fn, fields, 'key');
        return v1120;
    };
    const lerp = function (array, frac) {
        const lo = array[0];
        const hi = peek(array);
        const v1121 = +frac;
        const f = v1121;
        const v1122 = !f;
        const v1123 = f === 1;
        const v1124 = hi - lo;
        const v1125 = f * v1124;
        const v1126 = lo + v1125;
        let v1127;
        if (v1123) {
            v1127 = hi;
        } else {
            v1127 = v1126;
        }
        let v1128;
        if (v1122) {
            v1128 = lo;
        } else {
            v1128 = v1127;
        }
        return v1128;
    };
    const DEFAULT_MAX_SIZE = 10000;
    const lruCache = function (maxsize) {
        const v1129 = +maxsize;
        maxsize = v1129 || DEFAULT_MAX_SIZE;
        let curr;
        let prev;
        let size;
        const clear = () => {
            curr = {};
            prev = {};
            size = 0;
        };
        const update = (key, value) => {
            const v1130 = ++size;
            const v1131 = v1130 > maxsize;
            if (v1131) {
                prev = curr;
                curr = {};
                size = 1;
            }
            return curr[key] = value;
        };
        const v1132 = clear();
        v1132;
        const v1136 = key => {
            const v1133 = has(curr, key);
            const v1134 = has(prev, key);
            const v1135 = v1133 || v1134;
            return v1135;
        };
        const v1144 = key => {
            const v1137 = has(curr, key);
            const v1138 = curr[key];
            const v1139 = has(prev, key);
            const v1140 = prev[key];
            const v1141 = update(key, v1140);
            let v1142;
            if (v1139) {
                v1142 = v1141;
            } else {
                v1142 = undefined;
            }
            let v1143;
            if (v1137) {
                v1143 = v1138;
            } else {
                v1143 = v1142;
            }
            return v1143;
        };
        const v1148 = (key, value) => {
            const v1145 = has(curr, key);
            const v1146 = update(key, value);
            let v1147;
            if (v1145) {
                curr[key] = value;
                v1147 = curr[key];
            } else {
                v1147 = v1146;
            }
            return v1147;
        };
        const v1149 = {};
        v1149.clear = clear;
        v1149.has = v1136;
        v1149.get = v1144;
        v1149.set = v1148;
        return v1149;
    };
    const merge = function (compare, array0, array1, output) {
        var n0 = array0.length;
        var n1 = array1.length;
        const v1150 = !n1;
        if (v1150) {
            return array0;
        }
        const v1151 = !n0;
        if (v1151) {
            return array1;
        }
        const v1152 = n0 + n1;
        const v1153 = new array0.constructor(v1152);
        var merged = output || v1153;
        var i0 = 0;
        var i1 = 0;
        var i = 0;
        const v1154 = i0 < n0;
        const v1155 = i1 < n1;
        let v1156 = v1154 && v1155;
        while (v1156) {
            const v1158 = array0[i0];
            const v1159 = array1[i1];
            const v1160 = compare(v1158, v1159);
            const v1161 = v1160 > 0;
            const v1162 = i1++;
            const v1163 = array1[v1162];
            const v1164 = i0++;
            const v1165 = array0[v1164];
            let v1166;
            if (v1161) {
                v1166 = v1163;
            } else {
                v1166 = v1165;
            }
            merged[i] = v1166;
            const v1157 = ++i;
            v1156 = v1154 && v1155;
        }
        let v1167 = i0 < n0;
        while (v1167) {
            const v1170 = array0[i0];
            merged[i] = v1170;
            const v1168 = ++i0;
            const v1169 = ++i;
            v1167 = i0 < n0;
        }
        let v1171 = i1 < n1;
        while (v1171) {
            const v1174 = array1[i1];
            merged[i] = v1174;
            const v1172 = ++i1;
            const v1173 = ++i;
            v1171 = i1 < n1;
        }
        return merged;
    };
    const repeat = function (str, reps) {
        var s = '';
        const v1175 = --reps;
        let v1176 = v1175 >= 0;
        while (v1176) {
            s += str;
            v1176 = v1175 >= 0;
        }
        return s;
    };
    const pad = function (str, length, padchar, align) {
        var c = padchar || ' ';
        var s = str + '';
        const v1177 = s.length;
        var n = length - v1177;
        const v1178 = n <= 0;
        const v1179 = align === 'left';
        const v1180 = repeat(c, n);
        const v1181 = v1180 + s;
        const v1182 = align === 'center';
        const v1183 = n / 2;
        const v1184 = ~v1183;
        const v1185 = ~v1184;
        const v1186 = repeat(c, v1185);
        const v1187 = v1186 + s;
        const v1188 = n / 2;
        const v1189 = Math.ceil(v1188);
        const v1190 = repeat(c, v1189);
        const v1191 = v1187 + v1190;
        const v1192 = repeat(c, n);
        const v1193 = s + v1192;
        let v1194;
        if (v1182) {
            v1194 = v1191;
        } else {
            v1194 = v1193;
        }
        let v1195;
        if (v1179) {
            v1195 = v1181;
        } else {
            v1195 = v1194;
        }
        let v1196;
        if (v1178) {
            v1196 = s;
        } else {
            v1196 = v1195;
        }
        return v1196;
    };
    const span = function (array) {
        const v1197 = peek(array);
        const v1198 = array[0];
        const v1199 = v1197 - v1198;
        const v1200 = array && v1199;
        const v1201 = v1200 || 0;
        return v1201;
    };
    const toBoolean = function (_) {
        const v1202 = _ == null;
        const v1203 = _ === '';
        const v1204 = v1202 || v1203;
        const v1205 = !_;
        const v1206 = _ === 'false';
        const v1207 = v1205 || v1206;
        const v1208 = _ === '0';
        const v1209 = v1207 || v1208;
        const v1210 = !_;
        const v1211 = !v1210;
        let v1212;
        if (v1209) {
            v1212 = false;
        } else {
            v1212 = v1211;
        }
        let v1213;
        if (v1204) {
            v1213 = null;
        } else {
            v1213 = v1212;
        }
        return v1213;
    };
    const defaultParser = function (_) {
        const v1214 = isNumber(_);
        const v1215 = isDate(_);
        const v1216 = Date.parse(_);
        let v1217;
        if (v1215) {
            v1217 = _;
        } else {
            v1217 = v1216;
        }
        let v1218;
        if (v1214) {
            v1218 = _;
        } else {
            v1218 = v1217;
        }
        return v1218;
    };
    const toDate = function (_, parser) {
        parser = parser || defaultParser;
        const v1219 = _ == null;
        const v1220 = _ === '';
        const v1221 = v1219 || v1220;
        const v1222 = parser(_);
        let v1223;
        if (v1221) {
            v1223 = null;
        } else {
            v1223 = v1222;
        }
        return v1223;
    };
    const toString = function (_) {
        const v1224 = _ == null;
        const v1225 = _ === '';
        const v1226 = v1224 || v1225;
        const v1227 = _ + '';
        let v1228;
        if (v1226) {
            v1228 = null;
        } else {
            v1228 = v1227;
        }
        return v1228;
    };
    const toSet = function (_) {
        var s = {};
        var i = 0;
        var n = _.length;
        let v1229 = i < n;
        while (v1229) {
            const v1231 = _[i];
            s[v1231] = true;
            const v1230 = ++i;
            v1229 = i < n;
        }
        return s;
    };
    const truncate = function (str, length, align, ellipsis) {
        let e;
        const v1232 = ellipsis != null;
        if (v1232) {
            e = ellipsis;
        } else {
            e = '\u2026';
        }
        var s = str + '';
        var n = s.length;
        const v1233 = e.length;
        const v1234 = length - v1233;
        var l = Math.max(0, v1234);
        const v1235 = n <= length;
        const v1236 = align === 'left';
        const v1237 = n - l;
        const v1238 = s.slice(v1237);
        const v1239 = e + v1238;
        const v1240 = align === 'center';
        const v1241 = l / 2;
        const v1242 = Math.ceil(v1241);
        const v1243 = s.slice(0, v1242);
        const v1244 = v1243 + e;
        const v1245 = l / 2;
        const v1246 = ~v1245;
        const v1247 = ~v1246;
        const v1248 = n - v1247;
        const v1249 = s.slice(v1248);
        const v1250 = v1244 + v1249;
        const v1251 = s.slice(0, l);
        const v1252 = v1251 + e;
        let v1253;
        if (v1240) {
            v1253 = v1250;
        } else {
            v1253 = v1252;
        }
        let v1254;
        if (v1236) {
            v1254 = v1239;
        } else {
            v1254 = v1253;
        }
        let v1255;
        if (v1235) {
            v1255 = s;
        } else {
            v1255 = v1254;
        }
        return v1255;
    };
    const visitArray = function (array, filter, visitor) {
        if (array) {
            var i = 0;
            var n = array.length;
            var t;
            if (filter) {
                let v1256 = i < n;
                while (v1256) {
                    const v1258 = array[i];
                    if (t = filter(v1258)) {
                        const v1259 = visitor(t, i, array);
                        v1259;
                    }
                    const v1257 = ++i;
                    v1256 = i < n;
                }
            } else {
                const v1260 = array.forEach(visitor);
                v1260;
            }
        }
    };
    exports.Debug = Debug;
    exports.Error = Error$1;
    exports.Info = Info;
    exports.None = None;
    exports.Warn = Warn;
    exports.accessor = accessor;
    exports.accessorFields = accessorFields;
    exports.accessorName = accessorName;
    exports.array = array;
    exports.clampRange = clampRange;
    exports.compare = compare;
    exports.constant = constant;
    exports.debounce = debounce;
    exports.error = error;
    exports.extend = extend;
    exports.extent = extent;
    exports.extentIndex = extentIndex;
    exports.falsy = falsy;
    exports.fastmap = fastmap;
    exports.field = field;
    exports.flush = flush;
    exports.hasOwnProperty = has;
    exports.id = id;
    exports.identity = identity;
    exports.inherits = inherits;
    exports.inrange = inrange;
    exports.isArray = isArray;
    exports.isBoolean = isBoolean;
    exports.isDate = isDate;
    exports.isFunction = isFunction;
    exports.isNumber = isNumber;
    exports.isObject = isObject;
    exports.isRegExp = isRegExp;
    exports.isString = isString;
    exports.key = key;
    exports.lerp = lerp;
    exports.logger = logger;
    exports.lruCache = lruCache;
    exports.merge = merge;
    exports.mergeConfig = mergeConfig;
    exports.one = one;
    exports.pad = pad;
    exports.panLinear = panLinear;
    exports.panLog = panLog;
    exports.panPow = panPow;
    exports.panSymlog = panSymlog;
    exports.peek = peek;
    exports.quarter = quarter;
    exports.repeat = repeat;
    exports.span = span;
    exports.splitAccessPath = splitAccessPath;
    exports.stringValue = $;
    exports.toBoolean = toBoolean;
    exports.toDate = toDate;
    exports.toNumber = toNumber;
    exports.toSet = toSet;
    exports.toString = toString;
    exports.truncate = truncate;
    exports.truthy = truthy;
    exports.utcquarter = utcquarter;
    exports.visitArray = visitArray;
    exports.writeConfig = writeConfig;
    exports.zero = zero;
    exports.zoomLinear = zoomLinear;
    exports.zoomLog = zoomLog;
    exports.zoomPow = zoomPow;
    exports.zoomSymlog = zoomSymlog;
    const v1261 = { value: true };
    const v1262 = Object.defineProperty(exports, '__esModule', v1261);
    v1262;
};
const v1264 = v649(this, v1263);
v1264;