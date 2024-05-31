const v608 = typeof define;
const v609 = v608 !== 'function';
if (v609) {
    const v610 = require('amdefine');
    var define = v610(module);
}
const v611 = typeof window;
const v612 = v611 === 'undefined';
if (v612) {
    var Stream = require('stream');
} else {
}
const v1213 = function () {
    var initializing = false;
    let fnTest;
    const v613 = function () {
        xyz;
    };
    const v614 = /xyz/.test(v613);
    if (v614) {
        fnTest = /\b_super\b/;
    } else {
        fnTest = /.*/;
    }
    var Class = function () {
    };
    const v644 = function (prop) {
        var _super = this.prototype;
        initializing = true;
        var prototype = new this();
        initializing = false;
        let name;
        for (name in prop) {
            const v615 = name.charAt(0);
            const v616 = v615 === '#';
            if (v616) {
                const v617 = name.substring(1);
                const v618 = prop[name];
                const v619 = prototype[v618];
                prototype[v617] = v619;
            } else {
                const v620 = prop[name];
                const v621 = typeof v620;
                const v622 = v621 === 'function';
                const v623 = _super[name];
                const v624 = typeof v623;
                const v625 = v624 === 'function';
                const v626 = v622 && v625;
                const v627 = prop[name];
                const v628 = fnTest.test(v627);
                const v629 = v626 && v628;
                const v632 = function (name, fn) {
                    const v631 = function () {
                        var tmp = this._super;
                        const v630 = _super[name];
                        this._super = v630;
                        var res = fn.apply(this, arguments);
                        this._super = tmp;
                        return res;
                    };
                    return v631;
                };
                const v633 = prop[name];
                const v634 = v632(name, v633);
                const v635 = prop[name];
                let v636;
                if (v629) {
                    v636 = v634;
                } else {
                    v636 = v635;
                }
                prototype[name] = v636;
            }
            ;
        }
        ;
        const Class = function () {
            const v637 = !initializing;
            const v638 = this.init;
            const v639 = v637 && v638;
            if (v639) {
                const v640 = this.init;
                const v641 = v640.apply(this, arguments);
                v641;
            }
        };
        ;
        Class.prototype = prototype;
        const v642 = Class.prototype;
        v642.constructor = Class;
        const v643 = arguments.callee;
        Class.extend = v643;
        Class._superclass = this;
        return Class;
    };
    Class.extend = v644;
    var each = function (collection, fn, context) {
        if (collection) {
            const v645 = collection.__type;
            const v646 = v645 == 'collection';
            if (v646) {
                const v647 = collection.each(fn, context);
                return v647;
            }
            var ctu = true;
            var stop = function () {
                ctu = false;
            };
            const v648 = is_array(collection);
            if (v648) {
                var res = [];
                var res_item;
                var c = 0;
                var l = collection.length;
                let v649 = c < l;
                while (v649) {
                    res_item;
                    const v651 = ctu == false;
                    if (v651) {
                        break;
                    }
                    if (context) {
                        const v652 = collection[c];
                        res_item = fn.call(context, c, v652, stop);
                    } else {
                        const v653 = collection[c];
                        res_item = fn(c, v653, stop);
                    }
                    const v654 = res.push(res_item);
                    v654;
                    const v650 = c++;
                    v649 = c < l;
                }
                return res;
            } else {
                var name;
                var res = {};
                for (name in collection) {
                    const v655 = ctu == false;
                    if (v655) {
                        break;
                    }
                    if (context) {
                        const v656 = collection[name];
                        const v657 = fn.call(context, name, v656, stop);
                        res[name] = v657;
                    } else {
                        const v658 = collection[name];
                        const v659 = fn(name, v658);
                        res[name] = v659;
                    }
                }
                return res;
            }
        }
    };
    var jq_class2type = {};
    var jq_type = function (obj) {
        const v660 = obj == null;
        const v661 = String(obj);
        const v662 = toString.call(obj);
        const v663 = jq_class2type[v662];
        const v664 = v663 || 'object';
        let v665;
        if (v660) {
            v665 = v661;
        } else {
            v665 = v664;
        }
        return v665;
    };
    const v666 = Array.isArray;
    const v669 = function (obj) {
        const v667 = jq_type(obj);
        const v668 = v667 === 'array';
        return v668;
    };
    var is_array = v666 || v669;
    var is_dom_node = function isDomNode(o) {
        const v670 = o.nodeType;
        const v671 = typeof v670;
        const v672 = v671 != 'undefined';
        const v673 = o.childNodes;
        const v674 = typeof v673;
        const v675 = v674 != 'undefined';
        const v676 = v672 && v675;
        return v676;
    };
    const v677 = 'Boolean Number String Function Array Date RegExp Object'.split(' ');
    const v683 = function (i, name) {
        const v678 = typeof name;
        const v679 = v678 == 'string';
        if (v679) {
            const v682 = name.toLowerCase();
            jq_class2type[v681] = v682;
        }
    };
    const v684 = each(v677, v683);
    v684;
    var jq_isFunction = function (obj) {
        const v685 = jq_type(obj);
        const v686 = v685 === 'function';
        return v686;
    };
    var jq_isWindow = function (obj) {
        const v687 = typeof obj;
        const v688 = v687 === 'object';
        const v689 = obj && v688;
        const v690 = 'setInterval' in obj;
        const v691 = v689 && v690;
        return v691;
    };
    const v692 = Object.prototype;
    var hasOwn = v692.hasOwnProperty;
    var jq_isPlainObject = function (obj) {
        const v693 = !obj;
        const v694 = jq_type(obj);
        const v695 = v694 !== 'object';
        const v696 = v693 || v695;
        const v697 = obj.nodeType;
        const v698 = v696 || v697;
        const v699 = jq_isWindow(obj);
        const v700 = v698 || v699;
        if (v700) {
            return false;
        }
        const v701 = obj.constructor;
        const v702 = hasOwn.call(obj, 'constructor');
        const v703 = !v702;
        const v704 = v701 && v703;
        const v705 = obj.constructor;
        const v706 = v705.prototype;
        const v707 = hasOwn.call(v706, 'isPrototypeOf');
        const v708 = !v707;
        const v709 = v704 && v708;
        if (v709) {
            return false;
        }
        var key;
        for (key in obj) {
        }
        const v710 = key === undefined;
        const v711 = hasOwn.call(obj, key);
        const v712 = v710 || v711;
        return v712;
    };
    var jq_extend = function () {
        var options;
        var name;
        var src;
        var copy;
        var copyis_array;
        var clone;
        const v713 = arguments[0];
        const v714 = {};
        var target = v713 || v714;
        var i = 1;
        var length = arguments.length;
        var deep = false;
        const v715 = typeof target;
        const v716 = v715 === 'boolean';
        if (v716) {
            deep = target;
            const v717 = arguments[1];
            const v718 = {};
            target = v717 || v718;
            i = 2;
        }
        const v719 = typeof target;
        const v720 = v719 !== 'object';
        const v721 = jq_isFunction(target);
        const v722 = !v721;
        const v723 = v720 && v722;
        if (v723) {
            target = {};
        }
        const v724 = length === i;
        if (v724) {
            target = this;
            const v725 = --i;
            v725;
        }
        let v726 = i < length;
        while (v726) {
            const v728 = (options = arguments[i]) != null;
            if (v728) {
                const v729 = is_array(options);
                if (v729) {
                    var name = 0;
                    var l = options.length;
                    let v730 = name < l;
                    while (v730) {
                        src = target[name];
                        copy = options[name];
                        const v732 = target === copy;
                        if (v732) {
                            continue;
                        }
                        const v733 = deep && copy;
                        const v734 = jq_isPlainObject(copy);
                        const v735 = v734 || (copyis_array = is_array(copy));
                        const v736 = v733 && v735;
                        if (v736) {
                            if (copyis_array) {
                                copyis_array = false;
                                const v737 = is_array(src);
                                const v738 = src && v737;
                                const v739 = [];
                                if (v738) {
                                    clone = src;
                                } else {
                                    clone = v739;
                                }
                            } else {
                                const v740 = jq_isPlainObject(src);
                                const v741 = src && v740;
                                const v742 = {};
                                if (v741) {
                                    clone = src;
                                } else {
                                    clone = v742;
                                }
                            }
                            const v743 = jq_extend(deep, clone, copy);
                            target[name] = v743;
                        } else {
                            target[name] = copy;
                        }
                        const v731 = name++;
                        v730 = name < l;
                    }
                } else {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        const v744 = target === copy;
                        if (v744) {
                            continue;
                        }
                        const v745 = deep && copy;
                        const v746 = jq_isPlainObject(copy);
                        const v747 = v746 || (copyis_array = is_array(copy));
                        const v748 = v745 && v747;
                        if (v748) {
                            if (copyis_array) {
                                copyis_array = false;
                                const v749 = is_array(src);
                                const v750 = src && v749;
                                const v751 = [];
                                if (v750) {
                                    clone = src;
                                } else {
                                    clone = v751;
                                }
                            } else {
                                const v752 = jq_isPlainObject(src);
                                const v753 = src && v752;
                                const v754 = {};
                                if (v753) {
                                    clone = src;
                                } else {
                                    clone = v754;
                                }
                            }
                            const v755 = jq_extend(deep, clone, copy);
                            target[name] = v755;
                        } else {
                            const v756 = copy !== undefined;
                            if (v756) {
                                target[name] = copy;
                            }
                        }
                    }
                }
            }
            const v727 = i++;
            v726 = i < length;
        }
        return target;
    };
    var extend = jq_extend;
    var get_truth_map_from_arr = function (arr) {
        var res = {};
        const v757 = function (i, v) {
            res[v] = true;
        };
        const v758 = each(arr, v757);
        v758;
        return res;
    };
    var get_map_from_arr = function (arr) {
        var res = {};
        var c = 0;
        var l = arr.length;
        let v759 = c < l;
        while (v759) {
            const v761 = arr[c];
            res[v761] = c;
            const v760 = c++;
            v759 = c < l;
        }
        return res;
    };
    var arr_like_to_arr = function (arr_like) {
        const v762 = arr_like.length;
        var res = new Array(v762);
        var c = 0;
        var l = arr_like.length;
        let v763 = c < l;
        while (v763) {
            const v765 = arr_like[c];
            res[c] = v765;
            const v764 = c++;
            v763 = c < l;
        }
        ;
        return res;
    };
    var is_ctrl = function (obj) {
        const v766 = typeof obj;
        const v767 = v766 != 'undefined';
        const v768 = obj != null;
        const v769 = v767 && v768;
        const v770 = obj._;
        const v771 = is_defined(v770);
        const v772 = v769 && v771;
        const v773 = obj.__type_name;
        const v774 = is_defined(v773);
        const v775 = v772 && v774;
        return v775;
    };
    var tof = function (obj, t1) {
        const v776 = typeof obj;
        var res = t1 || v776;
        const v777 = res == 'number';
        const v778 = res == 'string';
        const v779 = v777 || v778;
        const v780 = res == 'function';
        const v781 = v779 || v780;
        const v782 = res == 'boolean';
        const v783 = v781 || v782;
        if (v783) {
            return res;
        }
        const v784 = res == 'object';
        if (v784) {
            const v785 = typeof obj;
            const v786 = v785 != 'undefined';
            if (v786) {
                const v787 = obj === null;
                if (v787) {
                    return 'null';
                }
                const v788 = obj.__type;
                if (v788) {
                    const v789 = obj.__type;
                    return v789;
                } else {
                    const v790 = is_array(obj);
                    if (v790) {
                        return 'array';
                    } else {
                        const v791 = is_ctrl(obj);
                        if (v791) {
                            return 'control';
                        } else {
                            const v792 = obj instanceof RegExp;
                            if (v792) {
                                res = 'regex';
                            }
                            const v793 = typeof window;
                            const v794 = v793 === 'undefined';
                            if (v794) {
                                const v795 = obj instanceof Buffer;
                                if (v795) {
                                    res = 'buffer';
                                }
                                const v796 = Stream.Readable;
                                const v797 = obj instanceof v796;
                                if (v797) {
                                    res = 'readable_stream';
                                }
                                const v798 = Stream.Writable;
                                const v799 = obj instanceof v798;
                                if (v799) {
                                    res = 'writable_stream';
                                }
                            }
                        }
                    }
                    return res;
                }
            } else {
                return 'undefined';
            }
        }
        return res;
    };
    var atof = function (arr) {
        const v800 = arr.length;
        var res = new Array(v800);
        const v803 = function (i, v) {
            const v801 = tof(v);
            const v802 = res.push(v801);
            v802;
        };
        const v804 = each(arr, v803);
        v804;
        return res;
    };
    var is_defined = function (value) {
        const v805 = typeof value;
        const v806 = v805 != 'undefined';
        return v806;
    };
    var isdef = is_defined;
    var is_data_object = function (obj) {
        if (obj) {
            const v807 = obj.__type;
            const v808 = v807 == 'data_object';
            if (v808) {
                return true;
            }
            const v809 = obj.__type;
            const v810 = v809 == 'collection';
            if (v810) {
                return true;
            }
        }
        return false;
    };
    var is_collection = function (obj) {
        if (obj) {
            const v811 = obj.__type;
            const v812 = v811 == 'collection';
            if (v812) {
                return true;
            }
        }
        return false;
    };
    var stringify = function (obj, includeFunctions) {
        const v813 = typeof obj;
        var t = v813;
        var res = [];
        const v814 = obj === String;
        if (v814) {
            return 'JS_String';
        }
        const v815 = t == 'object';
        if (v815) {
            const v816 = obj.stringify;
            const v817 = is_defined(v816);
            const v818 = obj && v817;
            if (v818) {
                const v819 = obj.stringify();
                return v819;
            } else {
                var ia = is_array(obj);
                if (ia) {
                    const v820 = res.push('[');
                    v820;
                    var first = true;
                    var c = 0;
                    const v821 = obj.length;
                    let v822 = c < v821;
                    while (v822) {
                        const v824 = !first;
                        if (v824) {
                            const v825 = res.push(', ');
                            v825;
                        }
                        const v826 = obj[c];
                        const v827 = stringify(v826);
                        const v828 = res.push(v827);
                        v828;
                        first = false;
                        const v823 = c++;
                        v822 = c < v821;
                    }
                    ;
                    const v829 = res.push(']');
                    v829;
                } else {
                    const v830 = obj == null;
                    if (v830) {
                        res = ['null'];
                    } else {
                        const v831 = obj.toString;
                        const v832 = is_defined(v831);
                        const v833 = obj.toString;
                        const v834 = v833.stringify;
                        const v835 = v834 === true;
                        const v836 = v832 && v835;
                        if (v836) {
                            const v837 = obj.toString();
                            const v838 = '"' + v837;
                            const v839 = v838 + '"';
                            const v840 = res.push(v839);
                            v840;
                        } else {
                            var first = true;
                            const v841 = res.push('{');
                            v841;
                            const v853 = function (i, v) {
                                const v842 = includeFunctions !== false;
                                const v843 = tof(v);
                                const v844 = v843 !== 'function';
                                const v845 = v842 && v844;
                                if (v845) {
                                    const v846 = !first;
                                    if (v846) {
                                        const v847 = res.push(', ');
                                        v847;
                                    }
                                    const v848 = '"' + i;
                                    const v849 = v848 + '": ';
                                    const v850 = stringify(v);
                                    const v851 = v849 + v850;
                                    const v852 = res.push(v851);
                                    v852;
                                    first = false;
                                }
                            };
                            const v854 = each(obj, v853);
                            v854;
                            const v855 = res.push('}');
                            v855;
                        }
                    }
                }
                ;
            }
        } else {
            const v856 = t == 'string';
            if (v856) {
                const v857 = '"' + obj;
                const v858 = v857 + '"';
                const v859 = res.push(v858);
                v859;
            } else {
                const v860 = t == 'undefined';
                if (v860) {
                    res = ['undefined'];
                } else {
                    const v861 = t == 'function';
                    if (v861) {
                        const v862 = includeFunctions !== false;
                        if (v862) {
                            const v863 = obj.toString();
                            res = [v863];
                        }
                    } else {
                        const v864 = obj.toString();
                        res = [v864];
                    }
                }
            }
        }
        const v865 = res.join('');
        return v865;
    };
    var get_item_sig = function (i, arr_depth) {
        var res;
        const v866 = typeof i;
        var t1 = v866;
        const v867 = t1 == 'string';
        if (v867) {
            res = 's';
        } else {
            const v868 = t1 == 'number';
            if (v868) {
                res = 'n';
            } else {
                const v869 = t1 == 'boolean';
                if (v869) {
                    res = 'b';
                } else {
                    const v870 = t1 == 'function';
                    if (v870) {
                        res = 'f';
                    } else {
                        var t = tof(i, t1);
                        const v871 = t == 'array';
                        if (v871) {
                            if (arr_depth) {
                                res = '[';
                                var c = 0;
                                var l = i.length;
                                let v872 = c < l;
                                while (v872) {
                                    const v874 = c > 0;
                                    if (v874) {
                                        res = res + ',';
                                    }
                                    const v875 = i[c];
                                    const v876 = arr_depth - 1;
                                    const v877 = get_item_sig(v875, v876);
                                    res = res + v877;
                                    const v873 = c++;
                                    v872 = c < l;
                                }
                                res = res + ']';
                            } else {
                                res = 'a';
                            }
                        } else {
                            const v878 = t == 'control';
                            if (v878) {
                                res = 'c';
                            } else {
                                const v879 = t == 'regex';
                                if (v879) {
                                    res = 'r';
                                } else {
                                    const v880 = t == 'buffer';
                                    if (v880) {
                                        res = 'B';
                                    } else {
                                        const v881 = t == 'readable_stream';
                                        if (v881) {
                                            res = 'R';
                                        } else {
                                            const v882 = t == 'writable_stream';
                                            if (v882) {
                                                res = 'W';
                                            } else {
                                                const v883 = t == 'object';
                                                if (v883) {
                                                    res = 'o';
                                                } else {
                                                    const v884 = t == 'undefined';
                                                    if (v884) {
                                                        res = 'u';
                                                    } else {
                                                        const v885 = t == 'collection_index';
                                                        if (v885) {
                                                            return 'X';
                                                        } else {
                                                            const v886 = t == 'data_object';
                                                            if (v886) {
                                                                const v887 = i._abstract;
                                                                if (v887) {
                                                                    res = '~D';
                                                                } else {
                                                                    res = 'D';
                                                                }
                                                            } else {
                                                                const v888 = t == 'data_value';
                                                                if (v888) {
                                                                    const v889 = i._abstract;
                                                                    if (v889) {
                                                                        res = '~V';
                                                                    } else {
                                                                        res = 'V';
                                                                    }
                                                                } else {
                                                                    const v890 = t == 'collection';
                                                                    if (v890) {
                                                                        const v891 = i._abstract;
                                                                        if (v891) {
                                                                            res = '~C';
                                                                        } else {
                                                                            res = 'C';
                                                                        }
                                                                    } else {
                                                                        const v892 = 't ' + t;
                                                                        const v893 = console.log(v892);
                                                                        v893;
                                                                        const v894 = 'Unexpected object type ' + t;
                                                                        throw v894;
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return res;
    };
    var trim_sig_brackets = function (sig) {
        const v895 = tof(sig);
        const v896 = v895 == 'string';
        if (v896) {
            const v897 = sig[0];
            const v898 = v897 == '[';
            const v899 = sig.length;
            const v900 = v899 - 1;
            const v901 = sig[v900];
            const v902 = v901 == ']';
            const v903 = v898 && v902;
            if (v903) {
                const v904 = sig.length;
                const v905 = v904 - 1;
                const v906 = sig.substring(1, v905);
                return v906;
            } else {
                return sig;
            }
        }
    };
    var arr_trim_undefined = function (arr_like) {
        var res = [];
        const v907 = -1;
        var last_defined = v907;
        var t;
        var v;
        var c = 0;
        var l = arr_like.length;
        let v908 = c < l;
        while (v908) {
            v = arr_like[c];
            t = tof(v);
            const v910 = t == 'undefined';
            if (v910) {
            } else {
                last_defined = c;
            }
            const v909 = c++;
            v908 = c < l;
        }
        var c = 0;
        var l = arr_like.length;
        let v911 = c < l;
        while (v911) {
            const v913 = c <= last_defined;
            if (v913) {
                const v914 = arr_like[c];
                const v915 = res.push(v914);
                v915;
            }
            const v912 = c++;
            v911 = c < l;
        }
        return res;
    };
    var functional_polymorphism = function (options, fn) {
        var a0 = arguments;
        const v916 = a0.length;
        const v917 = v916 == 1;
        if (v917) {
            fn = a0[0];
            options = null;
        }
        const v918 = Array.prototype;
        var arr_slice = v918.slice;
        var arr;
        var sig;
        var a2;
        var l;
        var a;
        const v930 = function () {
            a = arguments;
            l = a.length;
            const v919 = l == 1;
            if (v919) {
                const v920 = a[0];
                const v921 = [v920];
                sig = get_item_sig(v921, 1);
                const v922 = a[0];
                a2 = [v922];
                a2.l = 1;
                const v923 = fn.call(this, a2, sig);
                return v923;
            } else {
                const v924 = l > 1;
                if (v924) {
                    const v925 = arr_slice.call(a, 0);
                    arr = arr_trim_undefined(v925);
                    sig = get_item_sig(arr, 1);
                    arr.l = l;
                    const v926 = fn.call(this, arr, sig);
                    return v926;
                } else {
                    const v927 = a.length;
                    const v928 = v927 == 0;
                    if (v928) {
                        arr = new Array(0);
                        arr.l = 0;
                        const v929 = fn.call(this, arr, '[]');
                        return v929;
                    }
                }
            }
        };
        return v930;
    };
    var fp = functional_polymorphism;
    const v973 = function (a, sig) {
        var param_index;
        var fn;
        var res;
        var process_as_fn = function () {
            const v962 = function () {
                var a = arr_like_to_arr(arguments);
                var ts = atof(a);
                var t = this;
                const v931 = a.length;
                const v932 = v931 - 1;
                var last_arg = a[v932];
                const v933 = last_arg == 'function';
                const v934 = tof(v933);
                if (v934) {
                    const v935 = typeof param_index;
                    const v936 = v935 !== 'undefined';
                    const v937 = ts[param_index];
                    const v938 = v937 == 'array';
                    const v939 = v936 && v938;
                    if (v939) {
                        var res = [];
                        var fns = [];
                        const v940 = a[param_index];
                        const v945 = function (i, v) {
                            const v941 = a.length;
                            const v942 = v941 - 1;
                            var new_params = a.slice(0, v942);
                            new_params[param_index] = v;
                            const v943 = [
                                t,
                                fn,
                                new_params
                            ];
                            const v944 = fns.push(v943);
                            v944;
                        };
                        const v946 = each(v940, v945);
                        v946;
                        const v949 = function (err, res) {
                            if (err) {
                                throw err;
                            } else {
                                var a = [];
                                const v947 = a.concat;
                                a = v947.apply(a, res);
                                var callback = last_arg;
                                const v948 = callback(null, a);
                                v948;
                            }
                        };
                        const v950 = call_multiple_callback_functions(fns, v949);
                        v950;
                    } else {
                        const v951 = fn.apply(t, a);
                        return v951;
                    }
                } else {
                    const v952 = typeof param_index;
                    const v953 = v952 !== 'undefined';
                    const v954 = ts[param_index];
                    const v955 = v954 == 'array';
                    const v956 = v953 && v955;
                    if (v956) {
                        var res = [];
                        const v957 = a[param_index];
                        const v959 = function (i, v) {
                            var new_params = a;
                            new_params[param_index] = v;
                            var result = fn.apply(t, new_params);
                            const v958 = res.push(result);
                            v958;
                        };
                        const v960 = each(v957, v959);
                        v960;
                        return res;
                    } else {
                        const v961 = fn.apply(t, a);
                        return v961;
                    }
                }
            };
            res = v962;
        };
        const v963 = sig == '[o]';
        if (v963) {
            var res = [];
            const v964 = a[0];
            const v967 = function (i, v) {
                const v965 = [
                    i,
                    v
                ];
                const v966 = res.push(v965);
                v966;
            };
            const v968 = each(v964, v967);
            v968;
        } else {
            const v969 = sig == '[f]';
            if (v969) {
                param_index = 0, fn = a[0];
                const v970 = process_as_fn();
                v970;
            } else {
                const v971 = sig == '[n,f]';
                if (v971) {
                    param_index = a[0], fn = a[1];
                    const v972 = process_as_fn();
                    v972;
                }
            }
        }
        return res;
    };
    var arrayify = fp(v973);
    var mapify = function (target) {
        var tt = tof(target);
        const v974 = tt == 'function';
        if (v974) {
            const v994 = function (a, sig) {
                var that = this;
                const v975 = 'mapified fn sig ' + sig;
                const v976 = console.log(v975);
                v976;
                const v977 = sig == '[o]';
                if (v977) {
                    var map = a[0];
                    const v979 = function (i, v) {
                        const v978 = fn.call(that, i, v);
                        v978;
                    };
                    const v980 = each(map, v979);
                    v980;
                } else {
                    const v981 = sig == '[o,f]';
                    if (v981) {
                        var map = a[0];
                        var callback = a[1];
                        var fns = [];
                        const v985 = function (i, v) {
                            const v982 = [
                                i,
                                v
                            ];
                            const v983 = [
                                target,
                                v982
                            ];
                            const v984 = fns.push(v983);
                            v984;
                        };
                        const v986 = each(map, v985);
                        v986;
                        const v989 = function (err_multi, res_multi) {
                            if (err_multi) {
                                const v987 = callback(err_multi);
                                v987;
                            } else {
                                const v988 = callback(null, res_multi);
                                v988;
                            }
                        };
                        const v990 = call_multi(fns, v989);
                        v990;
                    } else {
                        const v991 = a.length;
                        const v992 = v991 >= 2;
                        if (v992) {
                            const v993 = target.apply(this, a);
                            v993;
                        }
                    }
                }
            };
            var res = fp(v994);
            return res;
        } else {
            const v995 = tt == 'array';
            if (v995) {
                var res = {};
                const v996 = arguments.length;
                const v997 = v996 == 1;
                if (v997) {
                    const v1000 = function (i, v) {
                        const v998 = v[0];
                        const v999 = v[1];
                        res[v998] = v999;
                    };
                    const v1001 = each(target, v1000);
                    v1001;
                } else {
                    var by_property_name = arguments[1];
                    const v1003 = function (i, v) {
                        const v1002 = v[by_property_name];
                        res[v1002] = v;
                    };
                    const v1004 = each(target, v1003);
                    v1004;
                }
                return res;
            }
        }
    };
    const v1024 = function (a, sig) {
        var obj = a[0];
        const v1005 = a.l;
        const v1006 = v1005 == 1;
        if (v1006) {
            var t = tof(obj);
            const v1007 = t == 'array';
            if (v1007) {
                const v1008 = obj.slice();
                return v1008;
            } else {
                const v1009 = t == 'undefined';
                if (v1009) {
                    return undefined;
                } else {
                    const v1010 = t == 'string';
                    if (v1010) {
                        return obj;
                    } else {
                        const v1011 = {};
                        const v1012 = extend(true, v1011, obj);
                        return v1012;
                    }
                }
            }
        } else {
            const v1013 = a.l;
            const v1014 = v1013 == 2;
            const v1015 = a[1];
            const v1016 = tof(v1015);
            const v1017 = v1016 == 'number';
            const v1018 = v1014 && v1017;
            if (v1018) {
                var res = [];
                var c = 0;
                const v1019 = a[1];
                let v1020 = c < v1019;
                while (v1020) {
                    const v1022 = clone(obj);
                    const v1023 = res.push(v1022);
                    v1023;
                    const v1021 = c++;
                    v1020 = c < v1019;
                }
                return res;
            }
        }
    };
    var clone = fp(v1024);
    var are_equal = function () {
        var a = arguments;
        const v1025 = a.length;
        const v1026 = v1025 == 0;
        if (v1026) {
            return null;
        }
        const v1027 = a.length;
        const v1028 = v1027 == 1;
        if (v1028) {
            const v1029 = a[0];
            var t = jsgui.tof(v1029);
            const v1030 = t == 'array';
            const v1031 = a[0];
            const v1032 = v1031.length;
            const v1033 = v1032 > 1;
            const v1034 = v1030 && v1033;
            if (v1034) {
                var c = 1;
                const v1035 = a[0];
                var l = v1035.length;
                let v1036 = c < l;
                while (v1036) {
                    const v1038 = a[0];
                    const v1039 = v1038[0];
                    const v1040 = a[0];
                    const v1041 = v1040[c];
                    const v1042 = jsgui.are_equal(v1039, v1041);
                    const v1043 = !v1042;
                    if (v1043) {
                        return false;
                    }
                    const v1037 = c++;
                    v1036 = c < l;
                }
            } else {
                return true;
            }
        }
        const v1044 = a.length;
        const v1045 = v1044 == 2;
        if (v1045) {
            var ts = jsgui.atof(a);
            const v1046 = ts[0];
            const v1047 = ts[1];
            const v1048 = v1046 != v1047;
            if (v1048) {
                return false;
            }
            var t = ts[0];
            const v1049 = t == 'string';
            const v1050 = t == 'number';
            const v1051 = v1049 || v1050;
            if (v1051) {
                const v1052 = a[0];
                const v1053 = a[1];
                const v1054 = v1052 == v1053;
                return v1054;
            }
            const v1055 = t == 'array';
            if (v1055) {
                const v1056 = a[0];
                const v1057 = v1056.length;
                const v1058 = a[1];
                const v1059 = v1058.length;
                const v1060 = v1057 != v1059;
                if (v1060) {
                    return false;
                }
                var c = 0;
                const v1061 = a[0];
                var l = v1061.length;
                let v1062 = c < l;
                while (v1062) {
                    const v1064 = a[0];
                    const v1065 = v1064[c];
                    const v1066 = a[1];
                    const v1067 = v1066[c];
                    const v1068 = jsgui.are_equal(v1065, v1067);
                    const v1069 = !v1068;
                    if (v1069) {
                        return false;
                    }
                    const v1063 = c++;
                    v1062 = c < l;
                }
                ;
            } else {
                const v1070 = a[0];
                const v1071 = typeof v1070;
                const v1072 = v1071 == 'object';
                if (v1072) {
                    var merged_key_truth_map = {};
                    var c1 = 0;
                    const v1073 = a[0];
                    const v1075 = function (i, v) {
                        merged_key_truth_map[i] = true;
                        const v1074 = c1++;
                        v1074;
                    };
                    const v1076 = each(v1073, v1075);
                    v1076;
                    var c2 = 0;
                    const v1077 = a[1];
                    const v1079 = function (i, v) {
                        merged_key_truth_map[i] = true;
                        const v1078 = c2++;
                        v1078;
                    };
                    const v1080 = each(v1077, v1079);
                    v1080;
                    const v1081 = c1 != c2;
                    if (v1081) {
                        return false;
                    }
                    const v1088 = function (i, v) {
                        const v1082 = a[0];
                        const v1083 = v1082[i];
                        const v1084 = a[1];
                        const v1085 = v1084[i];
                        const v1086 = jsgui.are_equal(v1083, v1085);
                        const v1087 = !v1086;
                        if (v1087) {
                            return false;
                        }
                    };
                    const v1089 = each(merged_key_truth_map, v1088);
                    v1089;
                }
            }
        }
        const v1090 = a.length;
        const v1091 = v1090 > 2;
        if (v1091) {
            var ts = jsgui.atof(a);
            const v1092 = jsgui.are_equal(ts);
            const v1093 = !v1092;
            if (v1093) {
                return false;
            }
            var o = a[0];
            var c = 1;
            var l = a.length;
            let v1094 = c < l;
            while (v1094) {
                const v1096 = a[c];
                const v1097 = v1096 !== o;
                if (v1097) {
                    return false;
                }
                const v1095 = c++;
                v1094 = c < l;
            }
        }
        ;
        return true;
    };
    var set_vals = function (obj, map) {
        const v1098 = function (i, v) {
            obj[i] = v;
        };
        const v1099 = each(map, v1098);
        v1099;
    };
    var ll_set = function (obj, prop_name, prop_value) {
        var arr = prop_name.split('.');
        var c = 0;
        var l = arr.length;
        const v1100 = obj._;
        var i = v1100 || obj;
        var s;
        let v1101 = c < l;
        while (v1101) {
            s = arr[c];
            const v1102 = i[s];
            const v1103 = typeof v1102;
            const v1104 = v1103 == 'undefined';
            if (v1104) {
                const v1105 = c - l;
                const v1106 = -1;
                const v1107 = v1105 == v1106;
                if (v1107) {
                    i[s] = prop_value;
                } else {
                    const v1108 = {};
                    i[s] = v1108;
                }
            } else {
                const v1109 = c - l;
                const v1110 = -1;
                const v1111 = v1109 == v1110;
                if (v1111) {
                    i[s] = prop_value;
                }
            }
            i = i[s];
            const v1112 = c++;
            v1112;
            v1101 = c < l;
        }
        ;
        return prop_value;
    };
    var ll_get = function (a0, a1) {
        const v1113 = a0 && a1;
        if (v1113) {
            const v1114 = a0._;
            var i = v1114 || a0;
            const v1115 = a1 == '.';
            if (v1115) {
                const v1116 = i['.'];
                const v1117 = typeof v1116;
                const v1118 = v1117 == 'undefined';
                if (v1118) {
                    return undefined;
                } else {
                    const v1119 = i['.'];
                    return v1119;
                }
            } else {
                var arr = a1.split('.');
                var c = 0;
                var l = arr.length;
                var s;
                let v1120 = c < l;
                while (v1120) {
                    s = arr[c];
                    const v1121 = i[s];
                    const v1122 = typeof v1121;
                    const v1123 = v1122 == 'undefined';
                    if (v1123) {
                        const v1124 = c - l;
                        const v1125 = -1;
                        const v1126 = v1124 == v1125;
                        if (v1126) {
                        } else {
                            const v1127 = 'object ' + s;
                            const v1128 = v1127 + ' not found';
                            throw v1128;
                        }
                    } else {
                        const v1129 = c - l;
                        const v1130 = -1;
                        const v1131 = v1129 == v1130;
                        if (v1131) {
                            const v1132 = i[s];
                            return v1132;
                        }
                    }
                    i = i[s];
                    const v1133 = c++;
                    v1133;
                    v1120 = c < l;
                }
            }
        }
    };
    var truth = function (value) {
        const v1134 = value === true;
        return v1134;
    };
    var iterate_ancestor_classes = function (obj, callback) {
        var ctu = true;
        var stop = function () {
            ctu = false;
        };
        const v1135 = callback(obj, stop);
        v1135;
        const v1136 = obj._superclass;
        const v1137 = v1136 && ctu;
        if (v1137) {
            const v1138 = obj._superclass;
            const v1139 = iterate_ancestor_classes(v1138, callback);
            v1139;
        }
    };
    var is_arr_of_t = function (obj, type_name) {
        var t = tof(obj);
        var tv;
        const v1140 = t == 'array';
        if (v1140) {
            var res = true;
            const v1142 = function (i, v) {
                tv = tof(v);
                const v1141 = tv != type_name;
                if (v1141) {
                    res = false;
                }
            };
            const v1143 = each(obj, v1142);
            v1143;
            return res;
        } else {
            return false;
        }
    };
    var is_arr_of_arrs = function (obj) {
        const v1144 = is_arr_of_t(obj, 'array');
        return v1144;
    };
    var is_arr_of_strs = function (obj) {
        const v1145 = is_arr_of_t(obj, 'string');
        return v1145;
    };
    var input_processors = {};
    var output_processors = {};
    var is_constructor_fn = function (fn) {
        const v1146 = fn.prototype;
        const v1147 = is_defined(v1146);
        return v1147;
    };
    const v1202 = function (a, sig) {
        var arr_functions_params_pairs;
        var callback;
        var return_params = false;
        var num_parallel = 1;
        const v1148 = a.l;
        const v1149 = v1148 == 2;
        if (v1149) {
            arr_functions_params_pairs = a[0];
            callback = a[1];
        }
        const v1150 = a.l;
        const v1151 = v1150 == 3;
        if (v1151) {
            const v1152 = sig == '[a,n,f]';
            if (v1152) {
                arr_functions_params_pairs = a[0];
                num_parallel = a[1];
                callback = a[2];
            }
            const v1153 = sig == '[a,f,b]';
            if (v1153) {
                arr_functions_params_pairs = a[0];
                callback = a[1];
                return_params = a[2];
            }
        }
        var res = [];
        var l = arr_functions_params_pairs.length;
        var c = 0;
        var that = this;
        var num_currently_executing = 0;
        var process = function () {
            const v1154 = num_currently_executing++;
            v1154;
            var pair = arr_functions_params_pairs[c];
            var context;
            var fn;
            var params;
            var fn_callback;
            var pair_sig = get_item_sig(pair);
            const v1155 = pair.length;
            const v1156 = v1155 == 2;
            if (v1156) {
                const v1157 = pair[1];
                const v1158 = tof(v1157);
                const v1159 = v1158 == 'function';
                if (v1159) {
                    context = pair[0];
                    fn = pair[1];
                    params = [];
                } else {
                    fn = pair[0];
                    params = pair[1];
                }
            }
            const v1160 = pair.length;
            const v1161 = v1160 == 3;
            if (v1161) {
                const v1162 = pair[0];
                const v1163 = tof(v1162);
                const v1164 = v1163 == 'function';
                const v1165 = pair[1];
                const v1166 = tof(v1165);
                const v1167 = v1166 == 'array';
                const v1168 = v1164 && v1167;
                const v1169 = pair[2];
                const v1170 = tof(v1169);
                const v1171 = v1170 == 'function';
                const v1172 = v1168 && v1171;
                if (v1172) {
                    fn = pair[0];
                    params = pair[1];
                    fn_callback = pair[2];
                }
                const v1173 = pair[1];
                const v1174 = tof(v1173);
                const v1175 = v1174 == 'function';
                const v1176 = pair[2];
                const v1177 = tof(v1176);
                const v1178 = v1177 == 'array';
                const v1179 = v1175 && v1178;
                if (v1179) {
                    context = pair[0];
                    fn = pair[1];
                    params = pair[2];
                }
            }
            const v1180 = pair.length;
            const v1181 = v1180 == 4;
            if (v1181) {
                context = pair[0];
                fn = pair[1];
                params = pair[2];
                fn_callback = pair[3];
            }
            var i = c;
            const v1182 = c++;
            v1182;
            var cb = function (err, res2) {
                const v1183 = num_currently_executing--;
                v1183;
                if (err) {
                    const v1184 = new Error();
                    var stack = v1184.stack;
                    const v1185 = console.log(stack);
                    v1185;
                    throw err;
                } else {
                    if (return_params) {
                        res[i] = [
                            params,
                            res2
                        ];
                    } else {
                        res[i] = res2;
                    }
                    if (fn_callback) {
                        const v1186 = fn_callback(null, res2);
                        v1186;
                    }
                    const v1187 = c < l;
                    if (v1187) {
                        const v1188 = num_currently_executing < num_parallel;
                        if (v1188) {
                            const v1189 = process();
                            v1189;
                        }
                    } else {
                        const v1190 = callback(null, res);
                        v1190;
                    }
                }
            };
            var arr_to_call = clone(params);
            const v1191 = arr_to_call.push(cb);
            v1191;
            if (context) {
                const v1192 = fn.apply(context, arr_to_call);
                v1192;
            } else {
                const v1193 = fn.apply(that, arr_to_call);
                v1193;
            }
        };
        const v1194 = arr_functions_params_pairs.length;
        const v1195 = v1194 > 0;
        if (v1195) {
            const v1196 = arr_functions_params_pairs.length;
            const v1197 = v1196 > 0;
            const v1198 = num_currently_executing < num_parallel;
            let v1199 = v1197 && v1198;
            while (v1199) {
                const v1200 = process();
                v1200;
                v1199 = v1197 && v1198;
            }
        } else {
            if (callback) {
                const v1201 = callback(null, null);
                v1201;
            }
        }
    };
    var call_multiple_callback_functions = fp(v1202);
    var multi = call_multiple_callback_functions;
    var call_multi = call_multiple_callback_functions;
    var Fns = function () {
        var fns = [];
        const v1204 = function (callback) {
            const v1203 = call_multi(fns, callback);
            v1203;
        };
        fns.go = v1204;
        return fns;
    };
    var native_constructor_tof = function (value) {
        const v1205 = value === String;
        if (v1205) {
            return 'String';
        }
        const v1206 = value === Number;
        if (v1206) {
            return 'Number';
        }
        const v1207 = value === Boolean;
        if (v1207) {
            return 'Boolean';
        }
        const v1208 = value === Array;
        if (v1208) {
            return 'Array';
        }
        const v1209 = value === Object;
        if (v1209) {
            return 'Object';
        }
    };
    var storage_map = {};
    var get = function (key) {
        const v1210 = storage_map[key];
        return v1210;
    };
    var set = function (key, value) {
        storage_map[key] = value;
    };
    var jsgui = {};
    jsgui['Class'] = Class;
    jsgui['each'] = each;
    jsgui['is_array'] = is_array;
    jsgui['is_dom_node'] = is_dom_node;
    jsgui['is_ctrl'] = is_ctrl;
    jsgui['extend'] = extend;
    jsgui['clone'] = clone;
    jsgui['get_truth_map_from_arr'] = get_truth_map_from_arr;
    jsgui['arr_trim_undefined'] = arr_trim_undefined;
    jsgui['get_map_from_arr'] = get_map_from_arr;
    jsgui['arr_like_to_arr'] = arr_like_to_arr;
    jsgui['tof'] = tof;
    jsgui['atof'] = atof;
    jsgui['is_defined'] = is_defined;
    jsgui['stringify'] = stringify;
    jsgui['functional_polymorphism'] = functional_polymorphism;
    jsgui['fp'] = fp;
    jsgui['arrayify'] = arrayify;
    jsgui['mapify'] = mapify;
    jsgui['are_equal'] = are_equal;
    jsgui['get_item_sig'] = get_item_sig;
    jsgui['set_vals'] = set_vals;
    jsgui['truth'] = truth;
    jsgui['trim_sig_brackets'] = trim_sig_brackets;
    jsgui['ll_set'] = ll_set;
    jsgui['ll_get'] = ll_get;
    jsgui['iterate_ancestor_classes'] = iterate_ancestor_classes;
    jsgui['is_constructor_fn'] = is_constructor_fn;
    jsgui['is_arr_of_t'] = is_arr_of_t;
    jsgui['is_arr_of_arrs'] = is_arr_of_arrs;
    jsgui['is_arr_of_strs'] = is_arr_of_strs;
    jsgui['input_processors'] = input_processors;
    jsgui['output_processors'] = output_processors;
    jsgui['call_multiple_callback_functions'] = call_multiple_callback_functions;
    jsgui['call_multi'] = call_multi;
    jsgui['native_constructor_tof'] = native_constructor_tof;
    jsgui['Fns'] = Fns;
    jsgui['get'] = get;
    jsgui['set'] = set;
    const v1211 = jsgui.data_types_info;
    const v1212 = {};
    jsgui.data_types_info = v1211 || v1212;
    return jsgui;
};
const v1214 = define(v1213);
v1214;