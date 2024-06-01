const v974 = function () {
    const v710 = {};
    const v711 = function () {
    };
    const v739 = function () {
        var config = {};
        const v712 = typeof window;
        const v713 = v712 !== 'undefined';
        const v714 = v713 && window;
        const v715 = typeof document;
        const v716 = v715 !== 'undefined';
        const v717 = v714 && v716;
        const v718 = v717 && document;
        if (v718) {
            this.runtime = 'browser';
            config.global = window;
        } else {
            this.runtime = 'node';
            config.global = global;
        }
        config.proxyName = 'proxy';
        const v719 = this.runtime;
        const v720 = v719 === 'node';
        const v721 = process.cwd();
        const v722 = v721 + '/src/';
        let v723;
        if (v720) {
            v723 = v722;
        } else {
            v723 = '/src/';
        }
        config.path = v723;
        const v724 = typeof $oojs_config;
        const v725 = v724 !== 'undefined';
        if (v725) {
            let key;
            for (key in $oojs_config) {
                const v726 = $oojs_config.hasOwnProperty(key);
                const v727 = key && v726;
                if (v727) {
                    const v728 = $oojs_config[key];
                    config[key] = v728;
                }
            }
        }
        const v729 = config.global;
        this.global = v729;
        const v730 = config.proxyName;
        if (v730) {
            const v731 = Function.prototype;
            const v732 = config.proxyName;
            const v733 = this.proxy;
            v731[v732] = v733;
        }
        const v734 = config.path;
        const v735 = this.setPath(v734);
        v735;
        const v736 = this.global;
        const v737 = this.global;
        const v738 = v737.oojs;
        v736.oojs = v738 || this;
    };
    const v740 = {};
    const v741 = {};
    const v748 = function (namespace) {
        let namespaceArray;
        const v742 = namespace.split('.');
        if (namespace) {
            namespaceArray = v742;
        } else {
            namespaceArray = false;
        }
        var node = this.path;
        if (namespaceArray) {
            var i = 0;
            var count = namespaceArray.length;
            let v743 = i < count;
            while (v743) {
                const v745 = namespaceArray[i];
                var currentName = v745.toLowerCase();
                const v746 = node[currentName];
                if (v746) {
                    node = node[currentName];
                } else {
                    break;
                }
                const v744 = i++;
                v743 = i < count;
            }
        }
        const v747 = node.pathValue;
        return v747;
    };
    const v763 = function (namespace, path) {
        var node = this.path;
        const v749 = typeof namespace;
        const v750 = v749 === 'object';
        if (v750) {
            let key;
            for (key in namespace) {
                const v751 = namespace.hasOwnProperty(key);
                const v752 = key && v751;
                if (v752) {
                    const v753 = namespace[key];
                    const v754 = this.setPath(key, v753);
                    v754;
                }
            }
            return;
        }
        const v755 = !path;
        if (v755) {
            path = namespace;
        } else {
            var namespaceArray = namespace.split('.');
            var i = 0;
            var count = namespaceArray.length;
            let v756 = i < count;
            while (v756) {
                const v758 = namespaceArray[i];
                var currentName = v758.toLowerCase();
                const v759 = node[currentName];
                const v760 = node.pathValue;
                const v761 = { pathValue: v760 };
                node[currentName] = v759 || v761;
                node = node[currentName];
                const v757 = i++;
                v756 = i < count;
            }
        }
        node.pathValue = path;
        const v762 = {};
        this.pathCache = v762;
    };
    const v782 = function (name) {
        const v764 = this.pathCache;
        const v765 = v764[name];
        const v766 = !v765;
        if (v766) {
            const v767 = this.pathCache;
            const v768 = this.getPath(name);
            const v769 = name.replace(/\./gi, '/');
            const v770 = v768 + v769;
            v767[name] = v770 + '.js';
            var basePath = this.getPath(name);
            const v771 = basePath.length;
            var basePathIndex = v771 - 1;
            const v772 = basePath.lastIndexOf('\\');
            const v773 = v772 !== basePathIndex;
            const v774 = basePath.lastIndexOf('/');
            const v775 = v774 !== basePathIndex;
            const v776 = v773 && v775;
            if (v776) {
                basePath = basePath + '/';
            }
            const v777 = this.pathCache;
            const v778 = name.replace(/\./gi, '/');
            const v779 = basePath + v778;
            v777[name] = v779 + '.js';
        }
        const v780 = this.pathCache;
        const v781 = v780[name];
        return v781;
    };
    const v814 = function (classObj, recording) {
        const v783 = {};
        recording = recording || v783;
        var deps = classObj.__deps;
        var namespace = classObj.__namespace;
        var unloadClass = [];
        let key;
        for (key in deps) {
            const v784 = deps.hasOwnProperty(key);
            const v785 = deps[key];
            const v786 = v784 && v785;
            if (v786) {
                var classFullName;
                const v787 = deps[key];
                const v788 = typeof v787;
                const v789 = v788 !== 'string';
                if (v789) {
                    const v790 = deps[key];
                    classObj[key] = v790;
                    const v791 = classObj[key];
                    const v792 = classObj[key];
                    const v793 = v792.__name;
                    const v794 = v791 && v793;
                    if (v794) {
                        const v795 = classObj[key];
                        classFullName = v795.__full;
                    }
                } else {
                    classFullName = deps[key];
                    const v796 = this.find(classFullName);
                    classObj[key] = v796;
                }
                const v797 = !classFullName;
                const v798 = recording[classFullName];
                const v799 = v797 || v798;
                if (v799) {
                    continue;
                }
                recording[classFullName] = true;
                const v800 = classObj[key];
                const v801 = !v800;
                if (v801) {
                    const v802 = this.runtime;
                    const v803 = v802 === 'node';
                    if (v803) {
                        try {
                            const v804 = this.getClassPath(classFullName);
                            const v805 = require(v804);
                            classObj[key] = v805;
                        } catch (ex) {
                            const v806 = unloadClass.push(classFullName);
                            v806;
                        }
                    }
                    const v807 = classObj[key];
                    const v808 = !v807;
                    if (v808) {
                        const v809 = unloadClass.push(classFullName);
                        v809;
                    }
                } else {
                    const v810 = classObj[key];
                    const v811 = v810.__deps;
                    if (v811) {
                        const v812 = classObj[key];
                        const v813 = this.loadDeps(v812, recording);
                        unloadClass = unloadClass.concat(v813);
                    }
                }
            }
        }
        return unloadClass;
    };
    const v815 = function (source) {
        var Temp = function () {
        };
        Temp.prototype = source;
        var result = new Temp();
        return result;
    };
    const v831 = function (source, depth) {
        const v816 = typeof depth;
        const v817 = v816 !== 'number';
        if (v817) {
            depth = 10;
        }
        var to;
        var nextDepth = depth - 1;
        const v818 = depth > 0;
        if (v818) {
            const v819 = source instanceof Date;
            if (v819) {
                to = new Date();
                const v820 = source.getTime();
                const v821 = to.setTime(v820);
                v821;
            } else {
                const v822 = source instanceof Array;
                if (v822) {
                    to = [];
                    var i = 0;
                    var count = source.length;
                    let v823 = i < count;
                    while (v823) {
                        const v825 = source[i];
                        const v826 = this.deepClone(v825, nextDepth);
                        to[i] = v826;
                        const v824 = i++;
                        v823 = i < count;
                    }
                } else {
                    const v827 = typeof source;
                    const v828 = v827 === 'object';
                    if (v828) {
                        to = {};
                        let key;
                        for (key in source) {
                            const v829 = source.hasOwnProperty(key);
                            if (v829) {
                                var item = source[key];
                                const v830 = this.deepClone(item, nextDepth);
                                to[key] = v830;
                            }
                        }
                    } else {
                        to = source;
                    }
                }
            }
        } else {
            to = source;
        }
        return to;
    };
    const v842 = function (context, method) {
        const v832 = Array.prototype;
        const v833 = v832.slice;
        var thisArgs = v833.apply(arguments);
        var thisObj = thisArgs.shift();
        let thisMethod;
        const v834 = typeof this;
        const v835 = v834 === 'function';
        const v836 = thisArgs.shift();
        if (v835) {
            thisMethod = this;
        } else {
            thisMethod = v836;
        }
        const v841 = function () {
            const v837 = Array.prototype;
            const v838 = v837.slice;
            var tempArgs = v838.apply(arguments);
            const v839 = tempArgs.concat(thisArgs);
            const v840 = thisMethod.apply(thisObj, v839);
            return v840;
        };
        return v841;
    };
    const v851 = function (name) {
        var result;
        var nameArray = name.split('.');
        const v843 = this.classes;
        const v844 = nameArray[0];
        result = v843[v844];
        var i = 1;
        var count = nameArray.length;
        let v845 = i < count;
        while (v845) {
            const v847 = nameArray[i];
            const v848 = result[v847];
            const v849 = result && v848;
            if (v849) {
                const v850 = nameArray[i];
                result = result[v850];
            } else {
                result = null;
                break;
            }
            const v846 = i++;
            v845 = i < count;
        }
        return result;
    };
    const v858 = function (name) {
        var result = this.find(name);
        if (result) {
            result.__registed = false;
            const v852 = this.runtime;
            const v853 = v852 === 'node';
            if (v853) {
                var classPath = this.getClassPath(name);
                const v854 = require.cache;
                const v855 = require.resolve(classPath);
                const v856 = v854[v855];
                const v857 = delete v856;
                v857;
                result = require(classPath);
            } else {
                result = this.define(result);
            }
        } else {
            result = this.using(name);
        }
        return result;
    };
    const v861 = function (classObj, p1, p2, p3, p4, p5) {
        const v859 = typeof classObj;
        const v860 = v859 === 'string';
        if (v860) {
            classObj = this.using(classObj);
        }
        var result = new classObj.__constructor(p1, p2, p3, p4, p5);
        return result;
    };
    const v867 = function (name) {
        var result = this.find(name);
        const v862 = !result;
        if (v862) {
            const v863 = this.runtime;
            const v864 = v863 === 'node';
            if (v864) {
                const v865 = this.getClassPath(name);
                const v866 = require(v865);
                v866;
                result = this.find(name);
            }
        }
        return result;
    };
    const v972 = function (classObj) {
        const v868 = classObj.name;
        var name = v868 || '__tempName';
        const v869 = classObj.namespace;
        var namespace = v869 || '';
        classObj.__name = name;
        classObj.__namespace = namespace;
        const v870 = namespace.length;
        const v871 = v870 > 1;
        const v872 = namespace + '.';
        const v873 = v872 + name;
        let v874;
        if (v871) {
            v874 = v873;
        } else {
            v874 = name;
        }
        classObj.__full = v874;
        const v875 = classObj.deps;
        classObj.__deps = v875;
        classObj.__oojs = this;
        const v889 = function (p1, p2, p3, p4, p5) {
            const v876 = this.__clones;
            const v877 = this.__clones;
            const v878 = v877.length;
            const v879 = v878 > 0;
            const v880 = v876 && v879;
            if (v880) {
                var i = 0;
                const v881 = this.__clones;
                var count = v881.length;
                let v882 = i < count;
                while (v882) {
                    const v884 = this.__clones;
                    var key = v884[i];
                    const v885 = this.__oojs;
                    const v886 = this[key];
                    const v887 = v885.deepClone(v886);
                    this[key] = v887;
                    const v883 = i++;
                    v882 = i < count;
                }
            }
            const v888 = this.__constructorSource(p1, p2, p3, p4, p5);
            v888;
        };
        classObj.__constructor = v889;
        const v890 = classObj[name];
        const v891 = this.noop;
        classObj.__constructorSource = v890 || v891;
        const v892 = '$' + name;
        const v893 = classObj[v892];
        const v894 = this.noop;
        classObj.__staticSource = v893 || v894;
        const v914 = function () {
            var needCloneKeyArray = [];
            let key;
            for (key in this) {
                const v895 = this.hasOwnProperty(key);
                if (v895) {
                    var item = this[key];
                    const v896 = typeof item;
                    const v897 = v896 === 'object';
                    const v898 = item !== null;
                    const v899 = v897 && v898;
                    const v900 = key !== 'deps';
                    const v901 = v899 && v900;
                    const v902 = key.indexOf('__');
                    const v903 = v902 !== 0;
                    const v904 = v901 && v903;
                    const v905 = classObj.__deps;
                    const v906 = !v905;
                    const v907 = classObj.__deps;
                    const v908 = v907[key];
                    const v909 = !v908;
                    const v910 = v906 || v909;
                    const v911 = v904 && v910;
                    if (v911) {
                        const v912 = needCloneKeyArray.push(key);
                        v912;
                    }
                }
            }
            this.__clones = needCloneKeyArray;
            const v913 = this.__constructor;
            v913.prototype = this;
        };
        classObj.__staticUpdate = v914;
        const v917 = function () {
            const v915 = this.__staticSource();
            v915;
            const v916 = this.__staticUpdate();
            v916;
        };
        classObj.__static = v917;
        var isRegisted = false;
        var isPartClass = false;
        var preNamespaces = namespace.split('.');
        var count = preNamespaces.length;
        var currentClassObj = this.classes;
        var tempName;
        var i = 0;
        let v918 = i < count;
        while (v918) {
            tempName = preNamespaces[i];
            if (tempName) {
                const v920 = currentClassObj[tempName];
                const v921 = {};
                currentClassObj[tempName] = v920 || v921;
                currentClassObj = currentClassObj[tempName];
            }
            const v919 = i++;
            v918 = i < count;
        }
        const v922 = currentClassObj[name];
        const v923 = {};
        currentClassObj[name] = v922 || v923;
        var currentNamespace = currentClassObj;
        currentClassObj = currentClassObj[name];
        const v924 = currentClassObj.__name;
        const v925 = !v924;
        const v926 = currentClassObj.__registed;
        const v927 = !v926;
        const v928 = v925 || v927;
        if (v928) {
            classObj.__registed = true;
            currentNamespace[name] = classObj;
        } else {
            const v929 = currentClassObj.__registed;
            if (v929) {
                isRegisted = true;
                let key;
                for (key in classObj) {
                    const v930 = classObj.hasOwnProperty(key);
                    const v931 = key && v930;
                    const v932 = currentClassObj[key];
                    const v933 = typeof v932;
                    const v934 = v933 === 'undefined';
                    const v935 = currentClassObj[key];
                    const v936 = this.noop;
                    const v937 = v935 === v936;
                    const v938 = v934 || v937;
                    const v939 = v931 && v938;
                    if (v939) {
                        isPartClass = true;
                        const v940 = classObj[key];
                        currentClassObj[key] = v940;
                    }
                }
            }
        }
        classObj = currentNamespace[name];
        const v941 = !isRegisted;
        const v942 = v941 || isPartClass;
        if (v942) {
            var unloadClass = this.loadDeps(classObj);
            const v943 = unloadClass.length;
            const v944 = v943 > 0;
            if (v944) {
                const v945 = this.loader;
                const v946 = this.using('oojs.loader');
                this.loader = v945 || v946;
                const v947 = this.runtime;
                const v948 = v947 === 'browser';
                const v949 = this.loader;
                const v950 = v948 && v949;
                if (v950) {
                    const v951 = this.loader;
                    const v952 = v951.loadDepsBrowser(classObj, unloadClass);
                    v952;
                } else {
                    const v953 = classObj.name;
                    const v954 = 'class "' + v953;
                    const v955 = v954 + '"';
                    const v956 = v955 + ' loadDeps error:';
                    const v957 = unloadClass.join(',');
                    const v958 = v956 + v957;
                    const v959 = new Error(v958);
                    throw v959;
                }
            } else {
                const v960 = classObj.__static();
                v960;
            }
        }
        const v961 = this.runtime;
        const v962 = v961 === 'node';
        const v963 = arguments.callee;
        const v964 = v963.caller;
        const v965 = v964.arguments;
        const v966 = v965[2];
        const v967 = v962 && v966;
        if (v967) {
            const v968 = arguments.callee;
            const v969 = v968.caller;
            const v970 = v969.arguments;
            const v971 = v970[2];
            v971.exports = classObj;
        }
        return classObj;
    };
    var oojs = {};
    oojs.name = 'oojs';
    oojs.namespace = '';
    oojs.classes = v710;
    oojs.noop = v711;
    oojs.$oojs = v739;
    oojs.path = v740;
    oojs.pathCache = v741;
    oojs.getPath = v748;
    oojs.setPath = v763;
    oojs.getClassPath = v782;
    oojs.loadDeps = v814;
    oojs.fastClone = v815;
    oojs.deepClone = v831;
    oojs.proxy = v842;
    oojs.find = v851;
    oojs.reload = v858;
    oojs.create = v861;
    oojs.using = v867;
    oojs.define = v972;
    const v973 = oojs.define(oojs);
    v973;
};
const v975 = v974();
v975;
const v976 = function () {
};
const v980 = function () {
    const v977 = {};
    this.eventList = v977;
    const v978 = {};
    this.groupList = v978;
    const v979 = {};
    this.eventGroupIndexer = v979;
};
const v990 = function (callback, needTimes, emitTimes) {
    const v981 = typeof callback;
    const v982 = v981 !== 'undefined';
    const v983 = function () {
    };
    if (v982) {
        callback = callback;
    } else {
        callback = v983;
    }
    const v984 = typeof needTimes;
    const v985 = v984 !== 'undefined';
    const v986 = -1;
    if (v985) {
        needTimes = needTimes;
    } else {
        needTimes = v986;
    }
    const v987 = typeof emitTimes;
    const v988 = v987 !== 'undefined';
    if (v988) {
        emitTimes = emitTimes;
    } else {
        emitTimes = 0;
    }
    const v989 = {};
    v989.callback = callback;
    v989.data = null;
    v989.needTimes = needTimes;
    v989.emitTimes = emitTimes;
    return v989;
};
const v995 = function (eventName) {
    const v991 = [];
    const v992 = [];
    const v993 = [];
    const v994 = {};
    var result = {};
    result.name = eventName;
    result.callbacks = v991;
    result.callbackData = v992;
    result.emitData = v993;
    result.status = false;
    result.groups = v994;
    return result;
};
const v1002 = function (groupName) {
    const v996 = [];
    const v997 = [];
    const v998 = [];
    const v999 = {};
    const v1000 = {};
    const v1001 = {};
    var result = {};
    result.name = groupName;
    result.callbacks = v996;
    result.callbackData = v997;
    result.emitData = v998;
    result.status = false;
    result.events = v999;
    result.previousGroups = v1000;
    result.afterGroups = v1001;
    return result;
};
const v1021 = function (eventName, callback, times) {
    const v1003 = this.eventList;
    const v1004 = this.eventList;
    const v1005 = v1004[eventName];
    const v1006 = this.createEvent(eventName);
    v1003[eventName] = v1005 || v1006;
    var ev = v1003[eventName];
    const v1007 = ev.callbacks;
    const v1008 = this.createCallback(callback, times);
    const v1009 = v1007.push(v1008);
    v1009;
    const v1010 = ev.status;
    const v1011 = ev.emitData;
    const v1012 = v1011.length;
    const v1013 = v1010 && v1012;
    if (v1013) {
        var i = 0;
        const v1014 = ev.emitData;
        var count = v1014.length;
        let v1015 = i < count;
        while (v1015) {
            const v1017 = ev.name;
            const v1018 = ev.emitData;
            const v1019 = v1018[i];
            const v1020 = this.emit(v1017, v1019);
            v1020;
            const v1016 = i++;
            v1015 = i < count;
        }
        ev.emitData = [];
    }
    return this;
};
const v1054 = function (eventName, callback) {
    const v1022 = !eventName;
    const v1023 = !callback;
    const v1024 = v1022 && v1023;
    if (v1024) {
        let key;
        const v1025 = this.eventList;
        for (key in v1025) {
            const v1026 = this.eventList;
            const v1027 = v1026[key];
            const v1028 = key && v1027;
            const v1029 = this.eventList;
            const v1030 = v1029.hasOwnProperty(key);
            const v1031 = v1028 && v1030;
            if (v1031) {
                const v1032 = this.unbind(key);
                v1032;
            }
        }
    } else {
        const v1033 = this.eventList;
        var eventItem = v1033[eventName];
        const v1034 = eventItem.callbacks;
        const v1035 = eventItem && v1034;
        const v1036 = eventItem.callbacks;
        const v1037 = v1036.length;
        const v1038 = v1035 && v1037;
        if (v1038) {
            var i = 0;
            const v1039 = eventItem.callbacks;
            var count = v1039.length;
            let v1040 = i < count;
            while (v1040) {
                if (callback) {
                    const v1042 = eventItem.callbacks;
                    const v1043 = v1042[i];
                    const v1044 = v1043.callback;
                    const v1045 = v1044 === callback;
                    if (v1045) {
                        const v1046 = eventItem.callbacks;
                        const v1047 = v1046[i];
                        v1047.callback = null;
                        const v1048 = eventItem.callbacks;
                        const v1049 = v1048[i];
                        v1049.needTimes = 0;
                    }
                } else {
                    const v1050 = eventItem.callbacks;
                    const v1051 = v1050[i];
                    v1051.callback = null;
                    const v1052 = eventItem.callbacks;
                    const v1053 = v1052[i];
                    v1053.needTimes = 0;
                }
                const v1041 = i++;
                v1040 = i < count;
            }
        }
    }
};
const v1096 = function (eventName, data) {
    const v1055 = this.eventList;
    const v1056 = this.eventList;
    const v1057 = v1056[eventName];
    const v1058 = this.createEvent(eventName);
    v1055[eventName] = v1057 || v1058;
    var ev = v1055[eventName];
    ev.status = true;
    const v1059 = ev.callbacks;
    const v1060 = !v1059;
    const v1061 = ev.callbacks;
    const v1062 = v1061.length;
    const v1063 = !v1062;
    const v1064 = v1060 || v1063;
    if (v1064) {
        const v1065 = ev.emitData;
        const v1066 = v1065.push(data);
        v1066;
    } else {
        const v1067 = ev.callbacks;
        const v1068 = ev.callbacks;
        const v1069 = v1068.length;
        const v1070 = v1067 && v1069;
        if (v1070) {
            var i = 0;
            const v1071 = ev.callbacks;
            var count = v1071.length;
            let v1072 = i < count;
            while (v1072) {
                const v1074 = ev.callbacks;
                var callbackItem = v1074[i];
                var callbackFunction = callbackItem.callback;
                var needRun = false;
                const v1075 = callbackItem.needTimes;
                const v1076 = -1;
                const v1077 = v1075 === v1076;
                if (v1077) {
                    needRun = true;
                } else {
                    const v1078 = callbackItem.needTimes;
                    const v1079 = v1078 > 0;
                    const v1080 = callbackItem.emitTimes;
                    const v1081 = callbackItem.needTimes;
                    const v1082 = v1080 < v1081;
                    const v1083 = v1079 && v1082;
                    if (v1083) {
                        needRun = true;
                    }
                }
                const v1084 = callbackItem.emitTimes;
                const v1085 = v1084++;
                v1085;
                const v1086 = needRun && callbackFunction;
                if (v1086) {
                    const v1087 = callbackFunction(data);
                    callbackItem.data = v1087;
                }
                const v1073 = i++;
                v1072 = i < count;
            }
        }
    }
    let groupName;
    const v1088 = ev.groups;
    for (groupName in v1088) {
        const v1089 = ev.groups;
        const v1090 = v1089.hasOwnProperty(groupName);
        const v1091 = groupName && v1090;
        const v1092 = ev.groups;
        const v1093 = v1092[groupName];
        const v1094 = v1091 && v1093;
        if (v1094) {
            const v1095 = this.groupEmit(groupName);
            v1095;
        }
    }
    return this;
};
const v1126 = function (groupName, eventNames, callback, times) {
    const v1097 = this.groupList;
    const v1098 = this.groupList;
    const v1099 = v1098[groupName];
    const v1100 = this.createGroup(groupName);
    v1097[groupName] = v1099 || v1100;
    var group = v1097[groupName];
    if (callback) {
        const v1101 = callback instanceof Array;
        const v1102 = [callback];
        if (v1101) {
            callback = callback;
        } else {
            callback = v1102;
        }
        var i = 0;
        var count = callback.length;
        let v1103 = i < count;
        while (v1103) {
            const v1105 = group.callbacks;
            const v1106 = callback[i];
            const v1107 = this.createCallback(v1106, times);
            const v1108 = v1105.push(v1107);
            v1108;
            const v1104 = i++;
            v1103 = i < count;
        }
    }
    var eventName;
    const v1109 = typeof eventNames;
    const v1110 = v1109 === 'string';
    const v1111 = [eventNames];
    if (v1110) {
        eventNames = v1111;
    } else {
        eventNames = eventNames;
    }
    var i = 0;
    var count = eventNames.length;
    let v1112 = i < count;
    while (v1112) {
        eventName = eventNames[i];
        const v1114 = group.events;
        const v1115 = v1114[eventName];
        const v1116 = !v1115;
        if (v1116) {
            group.status = false;
            const v1117 = this.eventList;
            const v1118 = this.eventList;
            const v1119 = v1118[eventName];
            const v1120 = this.createEvent(eventName);
            v1117[eventName] = v1119 || v1120;
            var ev = v1117[eventName];
            const v1121 = ev.groups;
            v1121[groupName] = 1;
            const v1122 = group.events;
            v1122[eventName] = 1;
        }
        const v1113 = i++;
        v1112 = i < count;
    }
    const v1123 = eventNames.length;
    const v1124 = v1123 > 0;
    if (v1124) {
        const v1125 = this.groupEmit(groupName);
        v1125;
    }
    return this;
};
const v1191 = function (groupName) {
    const v1127 = this.groupList;
    const v1128 = this.groupList;
    const v1129 = v1128[groupName];
    const v1130 = this.createGroup(groupName);
    v1127[groupName] = v1129 || v1130;
    var group = v1127[groupName];
    var afterGroups = group.afterGroups;
    var afterGroupFinished = true;
    let afterGroupName;
    for (afterGroupName in afterGroups) {
        const v1131 = afterGroups.hasOwnProperty(afterGroupName);
        const v1132 = afterGroupName && v1131;
        if (v1132) {
            const v1133 = this.groupList;
            const v1134 = v1133[afterGroupName];
            if (v1134) {
                const v1135 = this.groupList;
                const v1136 = v1135[afterGroupName];
                const v1137 = v1136.status;
                const v1138 = !v1137;
                if (v1138) {
                    afterGroupFinished = false;
                }
            }
        }
    }
    const v1139 = !afterGroupFinished;
    if (v1139) {
        return this;
    }
    var events = group.events;
    var eventFinished = true;
    var ev;
    let eventName;
    for (eventName in events) {
        const v1140 = events.hasOwnProperty(eventName);
        const v1141 = eventName && v1140;
        const v1142 = events[eventName];
        const v1143 = v1141 && v1142;
        if (v1143) {
            const v1144 = this.eventList;
            const v1145 = this.eventList;
            const v1146 = v1145[eventName];
            const v1147 = this.createEvent(eventName);
            v1144.eventName = v1146 || v1147;
            ev = v1144[eventName];
            const v1148 = ev.status;
            const v1149 = !v1148;
            if (v1149) {
                eventFinished = false;
                break;
            }
        }
    }
    if (eventFinished) {
        group.status = true;
        var eventCallbackData = {};
        let eventName;
        for (eventName in events) {
            const v1150 = events.hasOwnProperty(eventName);
            const v1151 = eventName && v1150;
            const v1152 = events[eventName];
            const v1153 = v1151 && v1152;
            if (v1153) {
                const v1154 = this.eventList;
                const v1155 = v1154[eventName];
                var callbacks = v1155.callbacks;
                eventCallbackData[eventName] = [];
                var i = 0;
                var count = callbacks.length;
                let v1156 = i < count;
                while (v1156) {
                    const v1158 = eventCallbackData[eventName];
                    const v1159 = callbacks[i];
                    const v1160 = v1159.data;
                    const v1161 = v1158.push(v1160);
                    v1161;
                    const v1157 = i++;
                    v1156 = i < count;
                }
                const v1162 = eventCallbackData[eventName];
                const v1163 = v1162.length;
                const v1164 = v1163 === 1;
                if (v1164) {
                    const v1165 = eventCallbackData[eventName];
                    const v1166 = v1165[0];
                    eventCallbackData[eventName] = v1166;
                }
            }
        }
        const v1167 = group.callbacks;
        const v1168 = group.callbacks;
        const v1169 = v1168.length;
        const v1170 = v1167 && v1169;
        if (v1170) {
            var i = 0;
            const v1171 = group.callbacks;
            var count = v1171.length;
            let v1172 = i < count;
            while (v1172) {
                const v1174 = group.callbacks;
                var callbackItem = v1174[i];
                var callbackFunction = callbackItem.callback;
                var needRun = false;
                const v1175 = callbackItem.needTimes;
                const v1176 = -1;
                const v1177 = v1175 === v1176;
                if (v1177) {
                    needRun = true;
                } else {
                    const v1178 = callbackItem.needTimes;
                    const v1179 = v1178 > 0;
                    const v1180 = callbackItem.emitTimes;
                    const v1181 = callbackItem.needTimes;
                    const v1182 = v1180 < v1181;
                    const v1183 = v1179 && v1182;
                    if (v1183) {
                        needRun = true;
                    }
                }
                const v1184 = callbackItem.emitTimes;
                const v1185 = v1184++;
                v1185;
                const v1186 = needRun && callbackFunction;
                if (v1186) {
                    const v1187 = callbackFunction(eventCallbackData);
                    callbackItem.data = v1187;
                }
                const v1173 = i++;
                v1172 = i < count;
            }
        }
        var previousGroups = group.previousGroups;
        let previousGroupName;
        for (previousGroupName in previousGroups) {
            const v1188 = previousGroups.hasOwnProperty(previousGroupName);
            const v1189 = previousGroupName && v1188;
            if (v1189) {
                const v1190 = this.groupEmit(previousGroupName);
                v1190;
            }
        }
    }
    return this;
};
const v1217 = function (previousGroupName, nextGroupName) {
    const v1192 = Array.prototype;
    const v1193 = v1192.slice;
    var args = v1193.apply(arguments);
    var previousGroups;
    var nextGroups;
    var i = 1;
    var count = args.length;
    let v1194 = i < count;
    while (v1194) {
        const v1196 = i - 1;
        previousGroups = args[v1196];
        nextGroups = args[i];
        const v1197 = previousGroups instanceof Array;
        const v1198 = [previousGroups];
        if (v1197) {
            previousGroups = previousGroups;
        } else {
            previousGroups = v1198;
        }
        const v1199 = nextGroups instanceof Array;
        const v1200 = [nextGroups];
        if (v1199) {
            nextGroups = nextGroups;
        } else {
            nextGroups = v1200;
        }
        var j = 0;
        var jcount = previousGroups.length;
        let v1201 = j < jcount;
        while (v1201) {
            var previousGroupName = previousGroups[j];
            const v1203 = this.groupList;
            const v1204 = this.groupList;
            const v1205 = v1204[previousGroupName];
            const v1206 = this.createGroup(previousGroupName);
            v1203[previousGroupName] = v1205 || v1206;
            const v1207 = this.groupList;
            var previousGroup = v1207[previousGroupName];
            var k = 0;
            var kcount = nextGroups.length;
            let v1208 = k < kcount;
            while (v1208) {
                var nextGroupName = nextGroups[k];
                const v1210 = this.groupList;
                const v1211 = this.groupList;
                const v1212 = v1211[nextGroupName];
                const v1213 = this.createGroup(nextGroupName);
                v1210[nextGroupName] = v1212 || v1213;
                const v1214 = this.groupList;
                var nextGroup = v1214[nextGroupName];
                const v1215 = previousGroup.afterGroups;
                v1215[nextGroupName] = 1;
                const v1216 = nextGroup.previousGroups;
                v1216[previousGroupName] = 1;
                const v1209 = k++;
                v1208 = k < kcount;
            }
            const v1202 = j++;
            v1201 = j < jcount;
        }
        const v1195 = i++;
        v1194 = i < count;
    }
};
const v1218 = {
    name: 'event',
    namespace: 'oojs',
    eventList: null,
    groupList: null,
    $event: v976,
    event: v980,
    createCallback: v990,
    createEvent: v995,
    createGroup: v1002,
    bind: v1021,
    unbind: v1054,
    emit: v1096,
    group: v1126,
    groupEmit: v1191,
    queue: v1217
};
const v1219 = oojs.define(v1218);
v1219;
const v1220 = {};
v1220.event = 'oojs.event';
const v1229 = function (func) {
    const v1221 = this.event;
    const v1222 = oojs.create(v1221);
    this.ev = v1222;
    if (func) {
        try {
            const v1223 = this._resolve;
            const v1224 = oojs.proxy(this, v1223);
            const v1225 = this._reject;
            const v1226 = oojs.proxy(this, v1225);
            const v1227 = func(v1224, v1226);
            v1227;
        } catch (ex) {
            const v1228 = this._reject(ex);
            v1228;
        }
    }
};
const v1230 = function (data) {
    return data;
};
const v1249 = function (data) {
    const v1231 = data.then;
    const v1232 = typeof v1231;
    const v1233 = v1232 === 'function';
    const v1234 = data && v1233;
    if (v1234) {
        var insidePromise = data;
        const v1236 = function (data) {
            const v1235 = this._resolve(data);
            v1235;
        };
        var onFullfulled = oojs.proxy(this, v1236);
        const v1238 = function (data) {
            const v1237 = this._reject(data);
            v1237;
        };
        var onRejected = oojs.proxy(this, v1238);
        const v1239 = insidePromise.then(onFullfulled, onRejected);
        v1239;
    } else {
        this.status = 'fulfilled';
        this.data = data;
        const v1240 = this.ev;
        const v1241 = v1240.eventList;
        const v1242 = this.ev;
        const v1243 = v1242.eventList;
        const v1244 = v1243['onRejected'];
        const v1245 = v1241 && v1244;
        if (v1245) {
            try {
                const v1246 = this.ev;
                const v1247 = v1246.emit('onFulfilled', data);
                v1247;
            } catch (ex) {
                const v1248 = this._reject(ex);
                v1248;
            }
        }
    }
};
const v1251 = function (data) {
    var promise = oojs.create(this);
    const v1250 = promise._resolve(data);
    v1250;
    return promise;
};
const v1260 = function (data) {
    this.status = 'rejected';
    this.data = data;
    const v1252 = this.ev;
    const v1253 = v1252.eventList;
    const v1254 = this.ev;
    const v1255 = v1254.eventList;
    const v1256 = v1255['onRejected'];
    const v1257 = v1253 && v1256;
    if (v1257) {
        const v1258 = this.ev;
        const v1259 = v1258.emit('onRejected', data);
        v1259;
    }
    return data;
};
const v1262 = function (data) {
    var promise = oojs.create(this);
    const v1261 = promise._reject(data);
    v1261;
    return promise;
};
const v1274 = function (func, thisObj) {
    var result = function () {
        var promise = oojs.create('oojs.promise');
        const v1263 = Array.prototype;
        const v1264 = v1263.slice;
        var args = v1264.apply(arguments);
        var callback = function (err) {
            if (err) {
                const v1265 = this._reject(err);
                v1265;
            } else {
                const v1266 = Array.prototype;
                const v1267 = v1266.slice;
                var returnDataArray = v1267.call(arguments, 1);
                const v1268 = returnDataArray.length;
                const v1269 = v1268 <= 1;
                if (v1269) {
                    returnDataArray = returnDataArray[0];
                }
                const v1270 = this._resolve(returnDataArray);
                v1270;
            }
        };
        const v1271 = oojs.proxy(promise, callback);
        const v1272 = args.push(v1271);
        v1272;
        const v1273 = func.apply(thisObj, args);
        v1273;
        return promise;
    };
    return result;
};
const v1305 = function (onFulfilled, onRejected) {
    const v1275 = this.defaultFunc;
    onFulfilled = onFulfilled || v1275;
    const v1276 = this.defaultFunc;
    onRejected = onRejected || v1276;
    var promise = oojs.create('oojs.promise');
    const v1279 = function (data) {
        const v1277 = data['onFulfilled'];
        const v1278 = this._resolve(v1277);
        v1278;
    };
    var promiseResolveCallback = oojs.proxy(promise, v1279);
    const v1282 = function (data) {
        const v1280 = data['onRejected'];
        const v1281 = this._reject(v1280);
        v1281;
    };
    var promiseRejectCallback = oojs.proxy(promise, v1282);
    const v1283 = this.ev;
    const v1284 = v1283.bind('onFulfilled', onFulfilled);
    v1284;
    const v1285 = this.ev;
    const v1286 = v1285.group('onFulfilledGroup', 'onFulfilled', promiseResolveCallback);
    v1286;
    const v1287 = this.ev;
    const v1288 = v1287.bind('onRejected', onRejected);
    v1288;
    const v1289 = this.ev;
    const v1290 = v1289.group('onRejectedGroup', 'onRejected', promiseRejectCallback);
    v1290;
    const v1291 = this.status;
    const v1292 = v1291 === 'fulfilled';
    if (v1292) {
        const v1295 = function () {
            const v1293 = this.data;
            const v1294 = this._resolve(v1293);
            v1294;
        };
        const v1296 = oojs.proxy(this, v1295);
        const v1297 = setTimeout(v1296, 0);
        v1297;
    } else {
        const v1298 = this.status;
        const v1299 = v1298 === 'rejected';
        if (v1299) {
            const v1302 = function () {
                const v1300 = this.data;
                const v1301 = this._reject(v1300);
                v1301;
            };
            const v1303 = oojs.proxy(this, v1302);
            const v1304 = setTimeout(v1303, 0);
            v1304;
        }
    }
    return promise;
};
const v1307 = function (onRejected) {
    const v1306 = this.then(null, onRejected);
    v1306;
};
const v1334 = function (promiseArray) {
    var promise = oojs.create(this);
    var ev = oojs.create('oojs.event');
    const v1309 = function (error) {
        const v1308 = this._reject(error);
        v1308;
    };
    const v1310 = oojs.proxy(promise, v1309);
    const v1311 = ev.bind('error', v1310);
    v1311;
    var eventGroup = [];
    var i = 0;
    var count = promiseArray.length;
    let v1312 = i < count;
    while (v1312) {
        const v1314 = i + 1;
        var tempEventName = 'event-' + v1314;
        const v1315 = eventGroup.push(tempEventName);
        v1315;
        var tempPromise = promiseArray[i];
        tempPromise.__eventName = tempEventName;
        tempPromise.allEvent = ev;
        const v1316 = function (data) {
            return data;
        };
        const v1317 = ev.bind(tempEventName, v1316);
        v1317;
        const v1321 = function (data) {
            const v1318 = this.allEvent;
            const v1319 = this.__eventName;
            const v1320 = v1318.emit(v1319, data);
            v1320;
        };
        var tempPromiseOnFullfilled = v1321.proxy(tempPromise);
        const v1326 = function (error) {
            const v1322 = this.allEvent;
            const v1323 = v1322.emit('error', error);
            v1323;
            const v1324 = this.allEvent;
            const v1325 = v1324.unbind();
            v1325;
        };
        var tempPromiseOnRejected = v1326.proxy(tempPromise);
        const v1327 = tempPromise.then(tempPromiseOnFullfilled, tempPromiseOnRejected);
        v1327;
        const v1313 = i++;
        v1312 = i < count;
    }
    const v1331 = function (data) {
        var promiseData = [];
        let key;
        for (key in data) {
            const v1328 = data[key];
            const v1329 = promiseData.push(v1328);
            v1329;
        }
        const v1330 = this._resolve(promiseData);
        v1330;
    };
    const v1332 = v1331.proxy(promise);
    const v1333 = ev.group('all', eventGroup, v1332);
    v1333;
    return promise;
};
const v1354 = function (promiseArray) {
    var promise = oojs.create(this);
    var ev = oojs.create('oojs.event');
    const v1336 = function (data) {
        const v1335 = this._resolve(data);
        v1335;
    };
    const v1337 = oojs.proxy(promise, v1336);
    const v1338 = ev.bind('success', v1337);
    v1338;
    const v1340 = function (error) {
        const v1339 = this._reject(error);
        v1339;
    };
    const v1341 = oojs.proxy(promise, v1340);
    const v1342 = ev.bind('error', v1341);
    v1342;
    var eventGroup = [];
    var i = 0;
    var count = promiseArray.length;
    let v1343 = i < count;
    while (v1343) {
        const v1345 = i + 1;
        var tempEventName = 'event-' + v1345;
        const v1346 = eventGroup.push(tempEventName);
        v1346;
        var tempPromise = promiseArray[i];
        const v1349 = function (data) {
            const v1347 = this.emit('success', data);
            v1347;
            const v1348 = this.unbind();
            v1348;
        };
        var tempPromiseOnFullfilled = v1349.proxy(ev);
        const v1352 = function (error) {
            const v1350 = this.emit('error', error);
            v1350;
            const v1351 = this.unbind();
            v1351;
        };
        var tempPromiseOnRejected = v1352.proxy(ev);
        const v1353 = tempPromise.then(tempPromiseOnFullfilled, tempPromiseOnRejected);
        v1353;
        const v1344 = i++;
        v1343 = i < count;
    }
    return promise;
};
const v1355 = {
    name: 'promise',
    namespace: 'oojs',
    deps: v1220,
    promise: v1229,
    status: 'pending',
    data: null,
    ev: null,
    defaultFunc: v1230,
    _resolve: v1249,
    resolve: v1251,
    _reject: v1260,
    reject: v1262,
    promisify: v1274,
    then: v1305,
    'catch': v1307,
    all: v1334,
    race: v1354
};
const v1356 = oojs.define(v1355);
v1356;
const v1357 = {};
v1357.event = 'oojs.event';
const v1360 = function () {
    const v1358 = this.event;
    const v1359 = oojs.create(v1358);
    this.ev = v1359;
};
const v1376 = function (url, version, callback) {
    const v1361 = typeof version;
    const v1362 = v1361 === 'function';
    if (v1362) {
        callback = version;
        version = '1.0.0';
    }
    version = version || '1.0.0';
    if (version) {
        url += '?v=' + version;
    }
    const v1363 = function () {
    };
    callback = callback || v1363;
    const v1364 = this.loading;
    const v1365 = {};
    this.loading = v1364 || v1365;
    const v1366 = this.loading;
    const v1367 = v1366[url];
    if (v1367) {
        return;
    }
    const v1368 = this.loading;
    v1368[url] = 1;
    var loader = document.createElement('script');
    loader.type = 'text/javascript';
    loader.async = true;
    loader.src = url;
    const v1372 = function (e) {
        const v1369 = loader.readyState;
        const v1370 = /loaded|complete|undefined/.test(v1369);
        if (v1370) {
            loader.onreadystatechange = null;
            loader.onerror = loader.onreadystatechange;
            loader.onload = loader.onerror;
            loader = undefined;
            const v1371 = callback();
            v1371;
        }
    };
    loader.onreadystatechange = v1372;
    loader.onerror = loader.onreadystatechange;
    loader.onload = loader.onerror;
    const v1373 = document.getElementsByTagName('script');
    var s = v1373[0];
    const v1374 = s.parentNode;
    const v1375 = v1374.insertBefore(loader, s);
    v1375;
    return this;
};
const v1416 = function (classObj, unloadClassArray) {
    var parentFullClassName = classObj.__full;
    const v1377 = this.ev;
    const v1378 = v1377.groupList;
    const v1379 = v1378[parentFullClassName];
    const v1380 = !v1379;
    if (v1380) {
        const v1381 = this.ev;
        const v1382 = [];
        const v1384 = function () {
            const v1383 = oojs.reload(parentFullClassName);
            v1383;
        };
        const v1385 = v1381.group(parentFullClassName, v1382, v1384);
        v1385;
    }
    var i = 0;
    var count = unloadClassArray.length;
    let v1386 = i < count;
    while (v1386) {
        var classFullName = unloadClassArray[i];
        const v1388 = this.ev;
        const v1389 = v1388.eventList;
        const v1390 = v1389[classFullName];
        const v1391 = !v1390;
        if (v1391) {
            const v1392 = this.ev;
            const v1393 = function () {
                return true;
            };
            const v1394 = v1392.bind(classFullName, v1393);
            v1394;
        }
        const v1395 = this.ev;
        const v1396 = v1395.group(parentFullClassName, classFullName);
        v1396;
        const v1397 = this.ev;
        const v1398 = v1397.groupList;
        const v1399 = v1398[classFullName];
        const v1400 = !v1399;
        if (v1400) {
            const v1401 = this.ev;
            const v1402 = [];
            const v1404 = function (data, className) {
                const v1403 = oojs.reload(className);
                v1403;
            };
            const v1405 = v1404.proxy(this, classFullName);
            const v1406 = v1401.group(classFullName, v1402, v1405);
            v1406;
            const v1407 = this.ev;
            const v1408 = v1407.groupList;
            const v1409 = v1408[classFullName];
            v1409.status = true;
        }
        const v1410 = this.ev;
        const v1411 = v1410.queue(parentFullClassName, classFullName);
        v1411;
        var url = oojs.getClassPath(classFullName);
        const v1414 = function (classFullName) {
            const v1412 = this.ev;
            const v1413 = v1412.emit(classFullName, classFullName);
            v1413;
        };
        var jsCallBack = oojs.proxy(this, v1414, classFullName);
        const v1415 = this.loadScript(url, jsCallBack);
        v1415;
        const v1387 = i++;
        v1386 = i < count;
    }
    return this;
};
const v1417 = {
    name: 'loader',
    namespace: 'oojs',
    deps: v1357,
    $loader: v1360,
    loadScript: v1376,
    loadDepsBrowser: v1416
};
const v1418 = oojs.define(v1417);
v1418;