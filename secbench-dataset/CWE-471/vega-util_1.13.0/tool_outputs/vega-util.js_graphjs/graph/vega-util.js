const accessor = function (fn, fields, name) {
    const v679 = [];
    fn.fields = fields || v679;
    fn.fname = name;
    return fn;
};
const accessorName = function (fn) {
    const v680 = fn == null;
    const v681 = fn.fname;
    let v682;
    if (v680) {
        v682 = null;
    } else {
        v682 = v681;
    }
    return v682;
};
const accessorFields = function (fn) {
    const v683 = fn == null;
    const v684 = fn.fields;
    let v685;
    if (v683) {
        v685 = null;
    } else {
        v685 = v684;
    }
    return v685;
};
const error = function (message) {
    const v686 = Error(message);
    throw v686;
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
        const v687 = p.substring(i, j);
        const v688 = s + v687;
        const v689 = path.push(v688);
        v689;
        s = '';
        i = j + 1;
    };
    j = 0;
    let v690 = j < n;
    while (v690) {
        c = p[j];
        const v692 = c === '\\';
        if (v692) {
            s += p.substring(i, j);
            const v693 = ++j;
            const v694 = ++j;
            s += p.substring(v693, v694);
            i = j;
        } else {
            const v695 = c === q;
            if (v695) {
                const v696 = push();
                v696;
                q = null;
                const v697 = -1;
                b = v697;
            } else {
                if (q) {
                    continue;
                } else {
                    const v698 = i === b;
                    const v699 = c === '"';
                    const v700 = v698 && v699;
                    if (v700) {
                        i = j + 1;
                        q = c;
                    } else {
                        const v701 = i === b;
                        const v702 = c === '\'';
                        const v703 = v701 && v702;
                        if (v703) {
                            i = j + 1;
                            q = c;
                        } else {
                            const v704 = c === '.';
                            const v705 = !b;
                            const v706 = v704 && v705;
                            if (v706) {
                                const v707 = j > i;
                                if (v707) {
                                    const v708 = push();
                                    v708;
                                } else {
                                    i = j + 1;
                                }
                            } else {
                                const v709 = c === '[';
                                if (v709) {
                                    const v710 = j > i;
                                    if (v710) {
                                        const v711 = push();
                                        v711;
                                    }
                                    i = j + 1;
                                    b = i;
                                } else {
                                    const v712 = c === ']';
                                    if (v712) {
                                        const v713 = !b;
                                        if (v713) {
                                            const v714 = 'Access path missing open bracket: ' + p;
                                            const v715 = error(v714);
                                            v715;
                                        }
                                        const v716 = b > 0;
                                        if (v716) {
                                            const v717 = push();
                                            v717;
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
        const v691 = ++j;
        v690 = j < n;
    }
    if (b) {
        const v718 = 'Access path missing closing bracket: ' + p;
        const v719 = error(v718);
        v719;
    }
    if (q) {
        const v720 = 'Access path missing closing quote: ' + p;
        const v721 = error(v720);
        v721;
    }
    const v722 = j > i;
    if (v722) {
        const v723 = j++;
        v723;
        const v724 = push();
        v724;
    }
    return path;
};
var isArray = Array.isArray;
const isObject = function (_) {
    const v725 = Object(_);
    const v726 = _ === v725;
    return v726;
};
const isString = function (_) {
    const v727 = typeof _;
    const v728 = v727 === 'string';
    return v728;
};
const $ = function (x) {
    const v729 = isArray(x);
    const v730 = x.map($);
    const v731 = '[' + v730;
    const v732 = v731 + ']';
    const v733 = isObject(x);
    const v734 = isString(x);
    const v735 = v733 || v734;
    const v736 = JSON.stringify(x);
    const v737 = v736.replace('\u2028', '\\u2028');
    const v738 = v737.replace('\u2029', '\\u2029');
    let v739;
    if (v735) {
        v739 = v738;
    } else {
        v739 = x;
    }
    let v740;
    if (v729) {
        v740 = v732;
    } else {
        v740 = v739;
    }
    return v740;
};
const field = function (field, name) {
    var path = splitAccessPath(field);
    const v741 = path.map($);
    const v742 = v741.join('][');
    const v743 = 'return _[' + v742;
    var code = v743 + '];';
    const v744 = Function('_', code);
    const v745 = path.length;
    const v746 = v745 === 1;
    const v747 = path[0];
    if (v746) {
        field = v747;
    } else {
        field = field;
    }
    const v748 = [,];
    const v749 = name || field;
    const v750 = accessor(v744, v748, v749);
    return v750;
};
var empty = [];
var id = field('id');
const v751 = function (_) {
    return _;
};
var identity = accessor(v751, empty, 'identity');
const v752 = function () {
    return 0;
};
var zero = accessor(v752, empty, 'zero');
const v753 = function () {
    return 1;
};
var one = accessor(v753, empty, 'one');
const v754 = function () {
    return true;
};
var truthy = accessor(v754, empty, 'true');
const v755 = function () {
    return false;
};
var falsy = accessor(v755, empty, 'false');
const log = function (method, level, input) {
    const v756 = [level];
    const v757 = [];
    const v758 = v757.slice;
    const v759 = v758.call(input);
    var args = v756.concat(v759);
    const v760 = console[method];
    const v761 = v760.apply(console, args);
    v761;
};
var None = 0;
var Error$1 = 1;
var Warn = 2;
var Info = 3;
var Debug = 4;
const logger = function (_, method) {
    var level = _ || None;
    const v764 = function (_) {
        const v762 = arguments.length;
        if (v762) {
            const v763 = +_;
            level = v763;
            return this;
        } else {
            return level;
        }
    };
    const v768 = function () {
        const v765 = level >= Error$1;
        if (v765) {
            const v766 = method || 'error';
            const v767 = log(v766, 'ERROR', arguments);
            v767;
        }
        return this;
    };
    const v772 = function () {
        const v769 = level >= Warn;
        if (v769) {
            const v770 = method || 'warn';
            const v771 = log(v770, 'WARN', arguments);
            v771;
        }
        return this;
    };
    const v776 = function () {
        const v773 = level >= Info;
        if (v773) {
            const v774 = method || 'log';
            const v775 = log(v774, 'INFO', arguments);
            v775;
        }
        return this;
    };
    const v780 = function () {
        const v777 = level >= Debug;
        if (v777) {
            const v778 = method || 'log';
            const v779 = log(v778, 'DEBUG', arguments);
            v779;
        }
        return this;
    };
    const v781 = {};
    v781.level = v764;
    v781.error = v768;
    v781.warn = v772;
    v781.info = v776;
    v781.debug = v780;
    return v781;
};
const mergeConfig = function (...configs) {
    const v792 = (out, source) => {
        let key;
        for (key in source) {
            const v782 = key === 'signals';
            if (v782) {
                const v783 = out.signals;
                const v784 = source.signals;
                const v785 = mergeNamed(v783, v784);
                out.signals = v785;
            } else {
                let r;
                const v786 = key === 'legend';
                const v787 = { 'layout': 1 };
                const v788 = key === 'style';
                let v789;
                if (v788) {
                    v789 = true;
                } else {
                    v789 = null;
                }
                if (v786) {
                    r = v787;
                } else {
                    r = v789;
                }
                const v790 = source[key];
                const v791 = writeConfig(out, key, v790, r);
                v791;
            }
        }
        return out;
    };
    const v793 = {};
    const v794 = configs.reduce(v792, v793);
    return v794;
};
const writeConfig = function (output, key, value, recurse) {
    var k;
    var o;
    const v795 = isObject(value);
    const v796 = isArray(value);
    const v797 = !v796;
    const v798 = v795 && v797;
    if (v798) {
        const v799 = output[key];
        const v800 = isObject(v799);
        const v801 = output[key];
        const v802 = {};
        if (v800) {
            o = v801;
        } else {
            o = output[key] = v802;
        }
        for (k in value) {
            const v803 = recurse === true;
            const v804 = recurse[k];
            const v805 = v803 || v804;
            const v806 = recurse && v805;
            if (v806) {
                const v807 = value[k];
                const v808 = writeConfig(o, k, v807);
                v808;
            } else {
                const v809 = value[k];
                o[k] = v809;
            }
        }
    } else {
        output[key] = value;
    }
};
const mergeNamed = function (a, b) {
    const v810 = a == null;
    if (v810) {
        return b;
    }
    const map = {};
    const out = [];
    const add = function (_) {
        const v811 = _.name;
        const v812 = map[v811];
        const v813 = !v812;
        if (v813) {
            const v814 = _.name;
            map[v814] = 1;
            const v815 = out.push(_);
            v815;
        }
    };
    const v816 = b.forEach(add);
    v816;
    const v817 = a.forEach(add);
    v817;
    return out;
};
const peek = function (array) {
    const v818 = array.length;
    const v819 = v818 - 1;
    const v820 = array[v819];
    return v820;
};
const toNumber = function (_) {
    const v821 = _ == null;
    const v822 = _ === '';
    const v823 = v821 || v822;
    const v824 = +_;
    let v825;
    if (v823) {
        v825 = null;
    } else {
        v825 = v824;
    }
    return v825;
};
const exp = function (sign) {
    const v828 = function (x) {
        const v826 = Math.exp(x);
        const v827 = sign * v826;
        return v827;
    };
    return v828;
};
const log$1 = function (sign) {
    const v831 = function (x) {
        const v829 = sign * x;
        const v830 = Math.log(v829);
        return v830;
    };
    return v831;
};
const symlog = function (c) {
    const v837 = function (x) {
        const v832 = Math.sign(x);
        const v833 = x / c;
        const v834 = Math.abs(v833);
        const v835 = Math.log1p(v834);
        const v836 = v832 * v835;
        return v836;
    };
    return v837;
};
const symexp = function (c) {
    const v843 = function (x) {
        const v838 = Math.sign(x);
        const v839 = Math.abs(x);
        const v840 = Math.expm1(v839);
        const v841 = v838 * v840;
        const v842 = v841 * c;
        return v842;
    };
    return v843;
};
const pow = function (exponent) {
    const v850 = function (x) {
        const v844 = x < 0;
        const v845 = -x;
        const v846 = Math.pow(v845, exponent);
        const v847 = -v846;
        const v848 = Math.pow(x, exponent);
        let v849;
        if (v844) {
            v849 = v847;
        } else {
            v849 = v848;
        }
        return v849;
    };
    return v850;
};
const pan = function (domain, delta, lift, ground) {
    const v851 = domain[0];
    var d0 = lift(v851);
    const v852 = peek(domain);
    var d1 = lift(v852);
    const v853 = d1 - d0;
    var dd = v853 * delta;
    const v854 = d0 - dd;
    const v855 = ground(v854);
    const v856 = d1 - dd;
    const v857 = ground(v856);
    const v858 = [
        v855,
        v857
    ];
    return v858;
};
const panLinear = function (domain, delta) {
    const v859 = pan(domain, delta, toNumber, identity);
    return v859;
};
const panLog = function (domain, delta) {
    const v860 = domain[0];
    var sign = Math.sign(v860);
    const v861 = log$1(sign);
    const v862 = exp(sign);
    const v863 = pan(domain, delta, v861, v862);
    return v863;
};
const panPow = function (domain, delta, exponent) {
    const v864 = pow(exponent);
    const v865 = 1 / exponent;
    const v866 = pow(v865);
    const v867 = pan(domain, delta, v864, v866);
    return v867;
};
const panSymlog = function (domain, delta, constant) {
    const v868 = symlog(constant);
    const v869 = symexp(constant);
    const v870 = pan(domain, delta, v868, v869);
    return v870;
};
const zoom = function (domain, anchor, scale, lift, ground) {
    const v871 = domain[0];
    var d0 = lift(v871);
    const v872 = peek(domain);
    var d1 = lift(v872);
    let da;
    const v873 = anchor != null;
    const v874 = lift(anchor);
    const v875 = d0 + d1;
    const v876 = v875 / 2;
    if (v873) {
        da = v874;
    } else {
        da = v876;
    }
    const v877 = d0 - da;
    const v878 = v877 * scale;
    const v879 = da + v878;
    const v880 = ground(v879);
    const v881 = d1 - da;
    const v882 = v881 * scale;
    const v883 = da + v882;
    const v884 = ground(v883);
    const v885 = [
        v880,
        v884
    ];
    return v885;
};
const zoomLinear = function (domain, anchor, scale) {
    const v886 = zoom(domain, anchor, scale, toNumber, identity);
    return v886;
};
const zoomLog = function (domain, anchor, scale) {
    const v887 = domain[0];
    var sign = Math.sign(v887);
    const v888 = log$1(sign);
    const v889 = exp(sign);
    const v890 = zoom(domain, anchor, scale, v888, v889);
    return v890;
};
const zoomPow = function (domain, anchor, scale, exponent) {
    const v891 = pow(exponent);
    const v892 = 1 / exponent;
    const v893 = pow(v892);
    const v894 = zoom(domain, anchor, scale, v891, v893);
    return v894;
};
const zoomSymlog = function (domain, anchor, scale, constant) {
    const v895 = symlog(constant);
    const v896 = symexp(constant);
    const v897 = zoom(domain, anchor, scale, v895, v896);
    return v897;
};
const quarter = function (date) {
    const v898 = new Date(date);
    const v899 = v898.getMonth();
    const v900 = v899 / 3;
    const v901 = ~v900;
    const v902 = ~v901;
    const v903 = 1 + v902;
    return v903;
};
const utcquarter = function (date) {
    const v904 = new Date(date);
    const v905 = v904.getUTCMonth();
    const v906 = v905 / 3;
    const v907 = ~v906;
    const v908 = ~v907;
    const v909 = 1 + v908;
    return v909;
};
const array = function (_) {
    const v910 = _ != null;
    const v911 = isArray(_);
    const v912 = [_];
    let v913;
    if (v911) {
        v913 = _;
    } else {
        v913 = v912;
    }
    const v914 = [];
    let v915;
    if (v910) {
        v915 = v913;
    } else {
        v915 = v914;
    }
    return v915;
};
const clampRange = function (range, min, max) {
    var lo = range[0];
    var hi = range[1];
    var span;
    const v916 = hi < lo;
    if (v916) {
        span = hi;
        hi = lo;
        lo = span;
    }
    span = hi - lo;
    const v917 = max - min;
    const v918 = span >= v917;
    const v919 = [
        min,
        max
    ];
    const v920 = Math.max(lo, min);
    const v921 = max - span;
    const v922 = lo + span;
    const v923 = [
        lo = Math.min(v920, v921),
        v922
    ];
    let v924;
    if (v918) {
        v924 = v919;
    } else {
        v924 = v923;
    }
    return v924;
};
const isFunction = function (_) {
    const v925 = typeof _;
    const v926 = v925 === 'function';
    return v926;
};
const compare = function (fields, orders) {
    var idx = [];
    const v934 = function (f, i) {
        const v927 = f == null;
        if (v927) {
            return null;
        } else {
            const v928 = idx.push(i);
            v928;
            const v929 = isFunction(f);
            const v930 = splitAccessPath(f);
            const v931 = v930.map($);
            const v932 = v931.join('][');
            let v933;
            if (v929) {
                v933 = f;
            } else {
                v933 = v932;
            }
            return v933;
        }
    };
    var cmp = (fields = array(fields)).map(v934);
    const v935 = idx.length;
    var n = v935 - 1;
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
    const v936 = n < 0;
    if (v936) {
        return null;
    }
    (j = 0)
    let v937 = j <= n;
    while (v937) {
        i = idx[j];
        f = cmp[i];
        const v939 = isFunction(f);
        if (v939) {
            d = 'f' + i;
            const v940 = '(u=this.' + d;
            u = v940 + '(a))';
            const v941 = '(v=this.' + d;
            v = v941 + '(b))';
            const v942 = {};
            (t = t || v942)[d] = f;
        } else {
            const v943 = '(u=a[' + f;
            u = v943 + '])';
            const v944 = '(v=b[' + f;
            v = v944 + '])';
        }
        d = '((v=v instanceof Date?+v:v),(u=u instanceof Date?+u:u))';
        const v945 = ord[i];
        const v946 = v945 !== 'descending';
        if (v946) {
            gt = 1;
            const v947 = -1;
            lt = v947;
        } else {
            const v948 = -1;
            gt = v948;
            lt = 1;
        }
        const v949 = '(' + u;
        const v950 = v949 + '<';
        const v951 = v950 + v;
        const v952 = v951 + '||u==null)&&v!=null?';
        const v953 = v952 + lt;
        const v954 = v953 + ':(u>v||v==null)&&u!=null?';
        const v955 = v954 + gt;
        const v956 = v955 + ':';
        const v957 = v956 + d;
        const v958 = v957 + '!==u&&v===v?';
        const v959 = v958 + lt;
        const v960 = v959 + ':v!==v&&u===u?';
        const v961 = v960 + gt;
        const v962 = i < n;
        let v963;
        if (v962) {
            v963 = ':';
        } else {
            v963 = ':0';
        }
        code += v961 + v963;
        const v938 = ++j;
        v937 = j <= n;
    }
    const v964 = code + ';';
    f = Function('a', 'b', v964);
    if (t) {
        f = f.bind(t);
    }
    const v973 = function (map, field) {
        const v965 = isFunction(field);
        if (v965) {
            const v966 = accessorFields(field);
            const v967 = [];
            const v968 = v966 || v967;
            const v969 = function (_) {
                map[_] = 1;
            };
            const v970 = v968.forEach(v969);
            v970;
        } else {
            const v971 = field != null;
            if (v971) {
                const v972 = field + '';
                map[v972] = 1;
            }
        }
        return map;
    };
    const v974 = {};
    fields = fields.reduce(v973, v974);
    const v975 = Object.keys(fields);
    const v976 = accessor(f, v975);
    return v976;
};
const constant = function (_) {
    const v977 = isFunction(_);
    const v978 = function () {
        return _;
    };
    let v979;
    if (v977) {
        v979 = _;
    } else {
        v979 = v978;
    }
    return v979;
};
const debounce = function (delay, handler) {
    var tid;
    var evt;
    const callback = function () {
        const v980 = handler(evt);
        v980;
        evt = null;
        tid = evt;
    };
    const v982 = function (e) {
        evt = e;
        if (tid) {
            const v981 = clearTimeout(tid);
            v981;
        }
        tid = setTimeout(callback, delay);
    };
    return v982;
};
const extend = function (_) {
    var x;
    var k;
    var i = 1;
    var len = arguments.length;
    let v983 = i < len;
    while (v983) {
        x = arguments[i];
        for (k in x) {
            const v985 = x[k];
            _[k] = v985;
        }
        const v984 = ++i;
        v983 = i < len;
    }
    return _;
};
const extent = function (array, f) {
    var i = 0;
    var n;
    var v;
    var min;
    var max;
    const v986 = array && (n = array.length);
    if (v986) {
        const v987 = f == null;
        if (v987) {
            v = array[i]
            const v988 = i < n;
            const v989 = v == null;
            const v990 = v !== v;
            const v991 = v989 || v990;
            let v992 = v988 && v991;
            while (v992) {
                ;
                const v993 = ++i;
                v992 = v988 && v991;
            }
            max = v;
            min = max;
            let v994 = i < n;
            while (v994) {
                v = array[i];
                const v996 = v != null;
                if (v996) {
                    const v997 = v < min;
                    if (v997) {
                        min = v;
                    }
                    const v998 = v > max;
                    if (v998) {
                        max = v;
                    }
                }
                const v995 = ++i;
                v994 = i < n;
            }
        } else {
            const v999 = array[i];
            const v1000 = i < n;
            const v1001 = v == null;
            const v1002 = v !== v;
            const v1003 = v1001 || v1002;
            let v1004 = v1000 && v1003;
            while (v1004) {
                ;
                const v1005 = ++i;
                const v1006 = array[v1005];
                v1004 = v1000 && v1003;
            }
            max = v;
            min = max;
            let v1007 = i < n;
            while (v1007) {
                const v1009 = array[i];
                v = f(v1009);
                const v1010 = v != null;
                if (v1010) {
                    const v1011 = v < min;
                    if (v1011) {
                        min = v;
                    }
                    const v1012 = v > max;
                    if (v1012) {
                        max = v;
                    }
                }
                const v1008 = ++i;
                v1007 = i < n;
            }
        }
    }
    const v1013 = [
        min,
        max
    ];
    return v1013;
};
const extentIndex = function (array, f) {
    const v1014 = -1;
    var i = v1014;
    var n = array.length;
    var a;
    var b;
    var c;
    var u;
    var v;
    const v1015 = f == null;
    if (v1015) {
        const v1016 = ++i;
        let v1017 = v1016 < n;
        while (v1017) {
            b = array[i];
            const v1018 = b != null;
            const v1019 = b >= b;
            const v1020 = v1018 && v1019;
            if (v1020) {
                c = b;
                a = c;
                break;
            }
            v1017 = v1016 < n;
        }
        const v1021 = i === n;
        if (v1021) {
            const v1022 = -1;
            const v1023 = -1;
            const v1024 = [
                v1022,
                v1023
            ];
            return v1024;
        }
        v = i;
        u = v;
        const v1025 = ++i;
        let v1026 = v1025 < n;
        while (v1026) {
            b = array[i];
            const v1027 = b != null;
            if (v1027) {
                const v1028 = a > b;
                if (v1028) {
                    a = b;
                    u = i;
                }
                const v1029 = c < b;
                if (v1029) {
                    c = b;
                    v = i;
                }
            }
            v1026 = v1025 < n;
        }
    } else {
        const v1030 = ++i;
        let v1031 = v1030 < n;
        while (v1031) {
            const v1032 = array[i];
            b = f(v1032, i, array);
            const v1033 = b != null;
            const v1034 = b >= b;
            const v1035 = v1033 && v1034;
            if (v1035) {
                c = b;
                a = c;
                break;
            }
            v1031 = v1030 < n;
        }
        const v1036 = i === n;
        if (v1036) {
            const v1037 = -1;
            const v1038 = -1;
            const v1039 = [
                v1037,
                v1038
            ];
            return v1039;
        }
        v = i;
        u = v;
        const v1040 = ++i;
        let v1041 = v1040 < n;
        while (v1041) {
            const v1042 = array[i];
            b = f(v1042, i, array);
            const v1043 = b != null;
            if (v1043) {
                const v1044 = a > b;
                if (v1044) {
                    a = b;
                    u = i;
                }
                const v1045 = c < b;
                if (v1045) {
                    c = b;
                    v = i;
                }
            }
            v1041 = v1040 < n;
        }
    }
    const v1046 = [
        u,
        v
    ];
    return v1046;
};
const v1047 = Object.prototype;
const hop = v1047.hasOwnProperty;
const has = function (object, property) {
    const v1048 = hop.call(object, property);
    return v1048;
};
var NULL = {};
const fastmap = function (input) {
    var obj = {};
    var map;
    var test;
    const has$1 = function (key) {
        const v1049 = has(obj, key);
        const v1050 = obj[key];
        const v1051 = v1050 !== NULL;
        const v1052 = v1049 && v1051;
        return v1052;
    };
    const v1056 = function (key) {
        const v1053 = has$1(key);
        const v1054 = obj[key];
        let v1055;
        if (v1053) {
            v1055 = v1054;
        } else {
            v1055 = undefined;
        }
        return v1055;
    };
    const v1065 = function (key, value) {
        const v1057 = has$1(key);
        const v1058 = !v1057;
        if (v1058) {
            const v1059 = map.size;
            const v1060 = ++v1059;
            v1060;
            const v1061 = obj[key];
            const v1062 = v1061 === NULL;
            if (v1062) {
                const v1063 = map.empty;
                const v1064 = --v1063;
                v1064;
            }
        }
        obj[key] = value;
        return this;
    };
    const v1071 = function (key) {
        const v1066 = has$1(key);
        if (v1066) {
            const v1067 = map.size;
            const v1068 = --v1067;
            v1068;
            const v1069 = map.empty;
            const v1070 = ++v1069;
            v1070;
            obj[key] = NULL;
        }
        return this;
    };
    const v1072 = function () {
        map.empty = 0;
        map.size = map.empty;
        obj = {};
        map.object = obj;
    };
    const v1074 = function (_) {
        const v1073 = arguments.length;
        if (v1073) {
            test = _;
            return map;
        } else {
            return test;
        }
    };
    const v1082 = function () {
        var next = {};
        var size = 0;
        var key;
        var value;
        for (key in obj) {
            value = obj[key];
            const v1075 = value !== NULL;
            const v1076 = !test;
            const v1077 = test(value);
            const v1078 = !v1077;
            const v1079 = v1076 || v1078;
            const v1080 = v1075 && v1079;
            if (v1080) {
                next[key] = value;
                const v1081 = ++size;
                v1081;
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
    map.get = v1056;
    map.set = v1065;
    map.delete = v1071;
    map.clear = v1072;
    map.test = v1074;
    map.clean = v1082;
    map = {};
    map = {};
    if (input) {
        const v1083 = Object.keys(input);
        const v1086 = function (key) {
            const v1084 = input[key];
            const v1085 = map.set(key, v1084);
            v1085;
        };
        const v1087 = v1083.forEach(v1086);
        v1087;
    }
    return map;
};
const flush = function (range, value, threshold, left, right, center) {
    const v1088 = !threshold;
    const v1089 = threshold !== 0;
    const v1090 = v1088 && v1089;
    if (v1090) {
        return center;
    }
    var a = range[0];
    var b = peek(range);
    const v1091 = +threshold;
    var t = v1091;
    var l;
    var r;
    const v1092 = b < a;
    if (v1092) {
        l = a;
        a = b;
        b = l;
    }
    const v1093 = value - a;
    l = Math.abs(v1093);
    const v1094 = b - value;
    r = Math.abs(v1094);
    const v1095 = l < r;
    const v1096 = l <= t;
    const v1097 = v1095 && v1096;
    const v1098 = r <= t;
    let v1099;
    if (v1098) {
        v1099 = right;
    } else {
        v1099 = center;
    }
    let v1100;
    if (v1097) {
        v1100 = left;
    } else {
        v1100 = v1099;
    }
    return v1100;
};
const inherits = function (child, parent) {
    const v1101 = parent.prototype;
    const v1102 = Object.create(v1101);
    child.prototype = v1102;
    var proto = child.prototype;
    proto.constructor = child;
    return proto;
};
const inrange = function (value, range, left, right) {
    var r0 = range[0];
    const v1103 = range.length;
    const v1104 = v1103 - 1;
    var r1 = range[v1104];
    var t;
    const v1105 = r0 > r1;
    if (v1105) {
        t = r0;
        r0 = r1;
        r1 = t;
    }
    const v1106 = left === undefined;
    left = v1106 || left;
    const v1107 = right === undefined;
    right = v1107 || right;
    const v1108 = r0 <= value;
    const v1109 = r0 < value;
    let v1110;
    if (left) {
        v1110 = v1108;
    } else {
        v1110 = v1109;
    }
    const v1111 = value <= r1;
    const v1112 = value < r1;
    let v1113;
    if (right) {
        v1113 = v1111;
    } else {
        v1113 = v1112;
    }
    const v1114 = v1110 && v1113;
    return v1114;
};
const isBoolean = function (_) {
    const v1115 = typeof _;
    const v1116 = v1115 === 'boolean';
    return v1116;
};
const isDate = function (_) {
    const v1117 = Object.prototype;
    const v1118 = v1117.toString;
    const v1119 = v1118.call(_);
    const v1120 = v1119 === '[object Date]';
    return v1120;
};
const isNumber = function (_) {
    const v1121 = typeof _;
    const v1122 = v1121 === 'number';
    return v1122;
};
const isRegExp = function (_) {
    const v1123 = Object.prototype;
    const v1124 = v1123.toString;
    const v1125 = v1124.call(_);
    const v1126 = v1125 === '[object RegExp]';
    return v1126;
};
const key = function (fields, flat) {
    if (fields) {
        const v1127 = array(fields);
        const v1129 = function (f) {
            const v1128 = f.replace(/\\(.)/g, '$1');
            return v1128;
        };
        const v1130 = v1127.map(v1129);
        const v1131 = array(fields);
        if (flat) {
            fields = v1130;
        } else {
            fields = v1131;
        }
    }
    let fn;
    const v1132 = fields.length;
    const v1133 = fields && v1132;
    const v1134 = !v1133;
    const v1135 = function () {
        return '';
    };
    const v1143 = function (f) {
        const v1136 = $(f);
        const v1137 = splitAccessPath(f);
        const v1138 = v1137.map($);
        const v1139 = v1138.join('][');
        let v1140;
        if (flat) {
            v1140 = v1136;
        } else {
            v1140 = v1139;
        }
        const v1141 = '_[' + v1140;
        const v1142 = v1141 + ']';
        return v1142;
    };
    const v1144 = fields.map(v1143);
    const v1145 = v1144.join('+\'|\'+');
    const v1146 = 'return \'\'+' + v1145;
    const v1147 = v1146 + ';';
    const v1148 = Function('_', v1147);
    if (v1134) {
        fn = v1135;
    } else {
        fn = v1148;
    }
    const v1149 = accessor(fn, fields, 'key');
    return v1149;
};
const lerp = function (array, frac) {
    const lo = array[0];
    const hi = peek(array);
    const v1150 = +frac;
    const f = v1150;
    const v1151 = !f;
    const v1152 = f === 1;
    const v1153 = hi - lo;
    const v1154 = f * v1153;
    const v1155 = lo + v1154;
    let v1156;
    if (v1152) {
        v1156 = hi;
    } else {
        v1156 = v1155;
    }
    let v1157;
    if (v1151) {
        v1157 = lo;
    } else {
        v1157 = v1156;
    }
    return v1157;
};
const DEFAULT_MAX_SIZE = 10000;
const lruCache = function (maxsize) {
    const v1158 = +maxsize;
    maxsize = v1158 || DEFAULT_MAX_SIZE;
    let curr;
    let prev;
    let size;
    const clear = () => {
        curr = {};
        prev = {};
        size = 0;
    };
    const update = (key, value) => {
        const v1159 = ++size;
        const v1160 = v1159 > maxsize;
        if (v1160) {
            prev = curr;
            curr = {};
            size = 1;
        }
        return curr[key] = value;
    };
    const v1161 = clear();
    v1161;
    const v1165 = key => {
        const v1162 = has(curr, key);
        const v1163 = has(prev, key);
        const v1164 = v1162 || v1163;
        return v1164;
    };
    const v1173 = key => {
        const v1166 = has(curr, key);
        const v1167 = curr[key];
        const v1168 = has(prev, key);
        const v1169 = prev[key];
        const v1170 = update(key, v1169);
        let v1171;
        if (v1168) {
            v1171 = v1170;
        } else {
            v1171 = undefined;
        }
        let v1172;
        if (v1166) {
            v1172 = v1167;
        } else {
            v1172 = v1171;
        }
        return v1172;
    };
    const v1177 = (key, value) => {
        const v1174 = has(curr, key);
        const v1175 = update(key, value);
        let v1176;
        if (v1174) {
            curr[key] = value;
            v1176 = curr[key];
        } else {
            v1176 = v1175;
        }
        return v1176;
    };
    const v1178 = {};
    v1178.clear = clear;
    v1178.has = v1165;
    v1178.get = v1173;
    v1178.set = v1177;
    return v1178;
};
const merge = function (compare, array0, array1, output) {
    var n0 = array0.length;
    var n1 = array1.length;
    const v1179 = !n1;
    if (v1179) {
        return array0;
    }
    const v1180 = !n0;
    if (v1180) {
        return array1;
    }
    const v1181 = n0 + n1;
    const v1182 = new array0.constructor(v1181);
    var merged = output || v1182;
    var i0 = 0;
    var i1 = 0;
    var i = 0;
    const v1183 = i0 < n0;
    const v1184 = i1 < n1;
    let v1185 = v1183 && v1184;
    while (v1185) {
        const v1187 = array0[i0];
        const v1188 = array1[i1];
        const v1189 = compare(v1187, v1188);
        const v1190 = v1189 > 0;
        const v1191 = i1++;
        const v1192 = array1[v1191];
        const v1193 = i0++;
        const v1194 = array0[v1193];
        let v1195;
        if (v1190) {
            v1195 = v1192;
        } else {
            v1195 = v1194;
        }
        merged[i] = v1195;
        const v1186 = ++i;
        v1185 = v1183 && v1184;
    }
    let v1196 = i0 < n0;
    while (v1196) {
        const v1199 = array0[i0];
        merged[i] = v1199;
        const v1197 = ++i0;
        const v1198 = ++i;
        v1196 = i0 < n0;
    }
    let v1200 = i1 < n1;
    while (v1200) {
        const v1203 = array1[i1];
        merged[i] = v1203;
        const v1201 = ++i1;
        const v1202 = ++i;
        v1200 = i1 < n1;
    }
    return merged;
};
const repeat = function (str, reps) {
    var s = '';
    const v1204 = --reps;
    let v1205 = v1204 >= 0;
    while (v1205) {
        s += str;
        v1205 = v1204 >= 0;
    }
    return s;
};
const pad = function (str, length, padchar, align) {
    var c = padchar || ' ';
    var s = str + '';
    const v1206 = s.length;
    var n = length - v1206;
    const v1207 = n <= 0;
    const v1208 = align === 'left';
    const v1209 = repeat(c, n);
    const v1210 = v1209 + s;
    const v1211 = align === 'center';
    const v1212 = n / 2;
    const v1213 = ~v1212;
    const v1214 = ~v1213;
    const v1215 = repeat(c, v1214);
    const v1216 = v1215 + s;
    const v1217 = n / 2;
    const v1218 = Math.ceil(v1217);
    const v1219 = repeat(c, v1218);
    const v1220 = v1216 + v1219;
    const v1221 = repeat(c, n);
    const v1222 = s + v1221;
    let v1223;
    if (v1211) {
        v1223 = v1220;
    } else {
        v1223 = v1222;
    }
    let v1224;
    if (v1208) {
        v1224 = v1210;
    } else {
        v1224 = v1223;
    }
    let v1225;
    if (v1207) {
        v1225 = s;
    } else {
        v1225 = v1224;
    }
    return v1225;
};
const span = function (array) {
    const v1226 = peek(array);
    const v1227 = array[0];
    const v1228 = v1226 - v1227;
    const v1229 = array && v1228;
    const v1230 = v1229 || 0;
    return v1230;
};
const toBoolean = function (_) {
    const v1231 = _ == null;
    const v1232 = _ === '';
    const v1233 = v1231 || v1232;
    const v1234 = !_;
    const v1235 = _ === 'false';
    const v1236 = v1234 || v1235;
    const v1237 = _ === '0';
    const v1238 = v1236 || v1237;
    const v1239 = !_;
    const v1240 = !v1239;
    let v1241;
    if (v1238) {
        v1241 = false;
    } else {
        v1241 = v1240;
    }
    let v1242;
    if (v1233) {
        v1242 = null;
    } else {
        v1242 = v1241;
    }
    return v1242;
};
const defaultParser = function (_) {
    const v1243 = isNumber(_);
    const v1244 = isDate(_);
    const v1245 = Date.parse(_);
    let v1246;
    if (v1244) {
        v1246 = _;
    } else {
        v1246 = v1245;
    }
    let v1247;
    if (v1243) {
        v1247 = _;
    } else {
        v1247 = v1246;
    }
    return v1247;
};
const toDate = function (_, parser) {
    parser = parser || defaultParser;
    const v1248 = _ == null;
    const v1249 = _ === '';
    const v1250 = v1248 || v1249;
    const v1251 = parser(_);
    let v1252;
    if (v1250) {
        v1252 = null;
    } else {
        v1252 = v1251;
    }
    return v1252;
};
const toString = function (_) {
    const v1253 = _ == null;
    const v1254 = _ === '';
    const v1255 = v1253 || v1254;
    const v1256 = _ + '';
    let v1257;
    if (v1255) {
        v1257 = null;
    } else {
        v1257 = v1256;
    }
    return v1257;
};
const toSet = function (_) {
    var s = {};
    var i = 0;
    var n = _.length;
    let v1258 = i < n;
    while (v1258) {
        const v1260 = _[i];
        s[v1260] = true;
        const v1259 = ++i;
        v1258 = i < n;
    }
    return s;
};
const truncate = function (str, length, align, ellipsis) {
    let e;
    const v1261 = ellipsis != null;
    if (v1261) {
        e = ellipsis;
    } else {
        e = '\u2026';
    }
    var s = str + '';
    var n = s.length;
    const v1262 = e.length;
    const v1263 = length - v1262;
    var l = Math.max(0, v1263);
    const v1264 = n <= length;
    const v1265 = align === 'left';
    const v1266 = n - l;
    const v1267 = s.slice(v1266);
    const v1268 = e + v1267;
    const v1269 = align === 'center';
    const v1270 = l / 2;
    const v1271 = Math.ceil(v1270);
    const v1272 = s.slice(0, v1271);
    const v1273 = v1272 + e;
    const v1274 = l / 2;
    const v1275 = ~v1274;
    const v1276 = ~v1275;
    const v1277 = n - v1276;
    const v1278 = s.slice(v1277);
    const v1279 = v1273 + v1278;
    const v1280 = s.slice(0, l);
    const v1281 = v1280 + e;
    let v1282;
    if (v1269) {
        v1282 = v1279;
    } else {
        v1282 = v1281;
    }
    let v1283;
    if (v1265) {
        v1283 = v1268;
    } else {
        v1283 = v1282;
    }
    let v1284;
    if (v1264) {
        v1284 = s;
    } else {
        v1284 = v1283;
    }
    return v1284;
};
const visitArray = function (array, filter, visitor) {
    if (array) {
        var i = 0;
        var n = array.length;
        var t;
        if (filter) {
            let v1285 = i < n;
            while (v1285) {
                const v1287 = array[i];
                if (t = filter(v1287)) {
                    const v1288 = visitor(t, i, array);
                    v1288;
                }
                const v1286 = ++i;
                v1285 = i < n;
            }
        } else {
            const v1289 = array.forEach(visitor);
            v1289;
        }
    }
};
const v1290 = module.exports;
v1290.Debug = Debug;
const v1291 = module.exports;
v1291.Error = Error$1;
const v1292 = module.exports;
v1292.Info = Info;
const v1293 = module.exports;
v1293.None = None;
const v1294 = module.exports;
v1294.Warn = Warn;
const v1295 = module.exports;
v1295.accessor = accessor;
const v1296 = module.exports;
v1296.accessorFields = accessorFields;
const v1297 = module.exports;
v1297.accessorName = accessorName;
const v1298 = module.exports;
v1298.array = array;
const v1299 = module.exports;
v1299.clampRange = clampRange;
const v1300 = module.exports;
v1300.compare = compare;
const v1301 = module.exports;
v1301.constant = constant;
const v1302 = module.exports;
v1302.debounce = debounce;
const v1303 = module.exports;
v1303.error = error;
const v1304 = module.exports;
v1304.extend = extend;
const v1305 = module.exports;
v1305.extent = extent;
const v1306 = module.exports;
v1306.extentIndex = extentIndex;
const v1307 = module.exports;
v1307.falsy = falsy;
const v1308 = module.exports;
v1308.fastmap = fastmap;
const v1309 = module.exports;
v1309.field = field;
const v1310 = module.exports;
v1310.flush = flush;
const v1311 = module.exports;
v1311.hasOwnProperty = has;
const v1312 = module.exports;
v1312.id = id;
const v1313 = module.exports;
v1313.identity = identity;
const v1314 = module.exports;
v1314.inherits = inherits;
const v1315 = module.exports;
v1315.inrange = inrange;
const v1316 = module.exports;
v1316.isArray = isArray;
const v1317 = module.exports;
v1317.isBoolean = isBoolean;
const v1318 = module.exports;
v1318.isDate = isDate;
const v1319 = module.exports;
v1319.isFunction = isFunction;
const v1320 = module.exports;
v1320.isNumber = isNumber;
const v1321 = module.exports;
v1321.isObject = isObject;
const v1322 = module.exports;
v1322.isRegExp = isRegExp;
const v1323 = module.exports;
v1323.isString = isString;
const v1324 = module.exports;
v1324.key = key;
const v1325 = module.exports;
v1325.lerp = lerp;
const v1326 = module.exports;
v1326.logger = logger;
const v1327 = module.exports;
v1327.lruCache = lruCache;
const v1328 = module.exports;
v1328.merge = merge;
const v1329 = module.exports;
v1329.mergeConfig = mergeConfig;
const v1330 = module.exports;
v1330.one = one;
const v1331 = module.exports;
v1331.pad = pad;
const v1332 = module.exports;
v1332.panLinear = panLinear;
const v1333 = module.exports;
v1333.panLog = panLog;
const v1334 = module.exports;
v1334.panPow = panPow;
const v1335 = module.exports;
v1335.panSymlog = panSymlog;
const v1336 = module.exports;
v1336.peek = peek;
const v1337 = module.exports;
v1337.quarter = quarter;
const v1338 = module.exports;
v1338.repeat = repeat;
const v1339 = module.exports;
v1339.span = span;
const v1340 = module.exports;
v1340.splitAccessPath = splitAccessPath;
const v1341 = module.exports;
v1341.stringValue = $;
const v1342 = module.exports;
v1342.toBoolean = toBoolean;
const v1343 = module.exports;
v1343.toDate = toDate;
const v1344 = module.exports;
v1344.toNumber = toNumber;
const v1345 = module.exports;
v1345.toSet = toSet;
const v1346 = module.exports;
v1346.toString = toString;
const v1347 = module.exports;
v1347.truncate = truncate;
const v1348 = module.exports;
v1348.truthy = truthy;
const v1349 = module.exports;
v1349.utcquarter = utcquarter;
const v1350 = module.exports;
v1350.visitArray = visitArray;
const v1351 = module.exports;
v1351.writeConfig = writeConfig;
const v1352 = module.exports;
v1352.zero = zero;
const v1353 = module.exports;
v1353.zoomLinear = zoomLinear;
const v1354 = module.exports;
v1354.zoomLog = zoomLog;
const v1355 = module.exports;
v1355.zoomPow = zoomPow;
const v1356 = module.exports;
v1356.zoomSymlog = zoomSymlog;