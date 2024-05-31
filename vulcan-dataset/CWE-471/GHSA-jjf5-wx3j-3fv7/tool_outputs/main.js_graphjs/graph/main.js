'use strict';
const fs = require('fs');
const parseArgs = require('yargs-parser');
const cloneDeep = require('lodash.clonedeep');
const FORBIDDEN_KEY_PATHS = [
    '__proto__',
    'this.constructor.prototype'
];
const ALLOWED_OPTION_STRICT = 'strict';
const ALLOWED_OPTION_WARN = 'warn';
const assert = function (assertion, err_msg) {
    const v541 = !assertion;
    if (v541) {
        const v542 = new Error(err_msg);
        throw v542;
    }
};
const isPort = function (x) {
    const v543 = Number.isInteger(x);
    const v544 = x >= 0;
    const v545 = v543 && v544;
    const v546 = x <= 65535;
    const v547 = v545 && v546;
    return v547;
};
const isWindowsNamedPipe = function (x) {
    const v548 = String(x);
    const v549 = v548.includes('\\\\.\\pipe\\');
    return v549;
};
const v550 = function () {
};
const v553 = function (x) {
    const v551 = Number.isInteger(x);
    const v552 = assert(v551, 'must be an integer');
    v552;
};
const v558 = function (x) {
    const v554 = Number.isInteger(x);
    const v555 = x >= 0;
    const v556 = v554 && v555;
    const v557 = assert(v556, 'must be a positive integer');
    v557;
};
const v561 = function (x) {
    const v559 = isPort(x);
    const v560 = assert(v559, 'ports must be within range 0 - 65535');
    v560;
};
const v564 = function (x) {
    const v562 = isWindowsNamedPipe(x);
    const v563 = assert(v562, 'must be a valid pipe');
    v563;
};
const v569 = function (x) {
    const v565 = isWindowsNamedPipe(x);
    const v566 = !v565;
    if (v566) {
        const v567 = isPort(x);
        const v568 = assert(v567, 'must be a windows named pipe or a number within range 0 - 65535');
        v568;
    }
};
const types = {};
types['*'] = v550;
types.int = v553;
types.nat = v558;
types.port = v561;
types.windows_named_pipe = v564;
types.port_or_windows_named_pipe = v569;
const v570 = types.int;
types.integer = v570;
const custom_converters = new Map();
const v571 = JSON.parse;
const parsers_registry = {};
parsers_registry['*'] = v571;
const flatten = function (obj, useProperties) {
    const stack = Object.keys(obj);
    let key;
    const entries = [];
    let v572 = stack.length;
    while (v572) {
        key = stack.shift();
        let val = walk(obj, key);
        const v573 = typeof val;
        const v574 = v573 === 'object';
        const v575 = Array.isArray(val);
        const v576 = !v575;
        const v577 = v574 && v576;
        const v578 = val != null;
        const v579 = v577 && v578;
        if (v579) {
            if (useProperties) {
                const v580 = '_cvtProperties' in val;
                if (v580) {
                    val = val._cvtProperties;
                    key = key + '._cvtProperties';
                } else {
                    const v581 = [
                        key,
                        val
                    ];
                    const v582 = entries.push(v581);
                    v582;
                    continue;
                }
            }
            const subkeys = Object.keys(val);
            const v583 = subkeys.length;
            const v584 = v583 > 0;
            if (v584) {
                const v588 = function (subkey) {
                    const v585 = key + '.';
                    const v586 = v585 + subkey;
                    const v587 = stack.push(v586);
                    v587;
                };
                const v589 = subkeys.forEach(v588);
                v589;
                continue;
            }
        }
        const v590 = [
            key,
            val
        ];
        const v591 = entries.push(v590);
        v591;
        v572 = stack.length;
    }
    const flattened = {};
    const v592 = function (entry) {
        let key = entry[0];
        if (useProperties) {
            key = key.replace(/\._cvtProperties/g, '');
        }
        const val = entry[1];
        flattened[key] = val;
    };
    const v593 = entries.forEach(v592);
    v593;
    return flattened;
};
const validate = function (instance, schema, strictValidation) {
    const v594 = [];
    const v595 = [];
    const v596 = [];
    const errors = {};
    errors.undeclared = v594;
    errors.invalid_type = v595;
    errors.missing = v596;
    const flatInstance = flatten(instance);
    const v597 = schema._cvtProperties;
    const flatSchema = flatten(v597, true);
    const v598 = Object.keys(flatSchema);
    const v641 = function (name) {
        const schemaItem = flatSchema[name];
        let instanceItem = flatInstance[name];
        const v599 = name in flatInstance;
        const v600 = !v599;
        if (v600) {
            try {
                const v601 = schemaItem.default;
                const v602 = typeof v601;
                const v603 = v602 === 'object';
                const v604 = schemaItem.default;
                const v605 = Array.isArray(v604);
                const v606 = !v605;
                const v607 = v603 && v606;
                if (v607) {
                    instanceItem = walk(instance, name);
                } else {
                    const v608 = new Error('missing');
                    throw v608;
                }
            } catch (e) {
                const v609 = 'configuration param \'' + name;
                const v610 = v609 + '\' missing from config, did you override its parent?';
                const err = new Error(v610);
                const v611 = errors.missing;
                const v612 = v611.push(err);
                v612;
                return;
            }
        }
        const v613 = flatInstance[name];
        const v614 = delete v613;
        v614;
        const v615 = schemaItem.format;
        const v616 = v615 === 'object';
        const v617 = schemaItem.default;
        const v618 = typeof v617;
        const v619 = v618 === 'object';
        const v620 = v616 || v619;
        if (v620) {
            const v621 = Object.keys(flatInstance);
            const v625 = function (key) {
                const v622 = name + '.';
                const v623 = key.lastIndexOf(v622, 0);
                const v624 = v623 === 0;
                return v624;
            };
            const v626 = v621.filter(v625);
            const v629 = function (key) {
                const v627 = flatInstance[key];
                const v628 = delete v627;
                v628;
            };
            const v630 = v626.forEach(v629);
            v630;
        }
        const v631 = schemaItem.default;
        const v632 = typeof v631;
        const v633 = v632 === 'undefined';
        const v634 = schemaItem.default;
        const v635 = instanceItem === v634;
        const v636 = v633 && v635;
        const v637 = !v636;
        if (v637) {
            try {
                const v638 = schemaItem._format(instanceItem);
                v638;
            } catch (err) {
                const v639 = errors.invalid_type;
                const v640 = v639.push(err);
                v640;
            }
        }
        return;
    };
    const v642 = v598.forEach(v641);
    v642;
    if (strictValidation) {
        const v643 = Object.keys(flatInstance);
        const v648 = function (name) {
            const v644 = 'configuration param \'' + name;
            const v645 = v644 + '\' not declared in the schema';
            const err = new Error(v645);
            const v646 = errors.undeclared;
            const v647 = v646.push(err);
            v647;
        };
        const v649 = v643.forEach(v648);
        v649;
    }
    return errors;
};
const contains = function (options, x) {
    const v650 = options.indexOf(x);
    const v651 = -1;
    const v652 = v650 !== v651;
    const v653 = JSON.stringify(options);
    const v654 = 'must be one of the possible values: ' + v653;
    const v655 = assert(v652, v654);
    v655;
};
const BUILT_INS_BY_NAME = {};
BUILT_INS_BY_NAME.Object = Object;
BUILT_INS_BY_NAME.Array = Array;
BUILT_INS_BY_NAME.String = String;
BUILT_INS_BY_NAME.Number = Number;
BUILT_INS_BY_NAME.Boolean = Boolean;
BUILT_INS_BY_NAME.RegExp = RegExp;
const BUILT_IN_NAMES = Object.keys(BUILT_INS_BY_NAME);
const v657 = function (name) {
    const v656 = BUILT_INS_BY_NAME[name];
    return v656;
};
const BUILT_INS = BUILT_IN_NAMES.map(v657);
const normalizeSchema = function (name, node, props, fullName, env, argv, sensitive) {
    const v658 = name === '_cvtProperties';
    if (v658) {
        const v659 = '\'' + fullName;
        const v660 = v659 + '\': \'_cvtProperties\' is reserved word of convict.';
        const v661 = new Error(v660);
        throw v661;
    }
    const v662 = typeof node;
    const v663 = v662 === 'object';
    const v664 = node !== null;
    const v665 = v663 && v664;
    const v666 = Array.isArray(node);
    const v667 = !v666;
    const v668 = v665 && v667;
    const v669 = Object.keys(node);
    const v670 = v669.length;
    const v671 = v670 > 0;
    const v672 = v668 && v671;
    const v673 = 'default' in node;
    const v674 = !v673;
    const v675 = v672 && v674;
    if (v675) {
        const v676 = {};
        const v677 = {};
        v677._cvtProperties = v676;
        props[name] = v677;
        const v678 = Object.keys(node);
        const v685 = function (k) {
            const v679 = node[k];
            const v680 = props[name];
            const v681 = v680._cvtProperties;
            const v682 = fullName + '.';
            const v683 = v682 + k;
            const v684 = normalizeSchema(k, v679, v681, v683, env, argv, sensitive);
            v684;
        };
        const v686 = v678.forEach(v685);
        v686;
        return;
    } else {
        const v687 = typeof node;
        const v688 = v687 !== 'object';
        const v689 = Array.isArray(node);
        const v690 = v688 || v689;
        const v691 = node === null;
        const v692 = v690 || v691;
        const v693 = Object.keys(node);
        const v694 = v693.length;
        const v695 = v694 == 0;
        const v696 = v692 || v695;
        if (v696) {
            node.default = node;
            node = {};
            node = {};
        }
    }
    const o = cloneDeep(node);
    props[name] = o;
    const v697 = o.env;
    if (v697) {
        const v698 = o.env;
        const v699 = env[v698];
        const v700 = !v699;
        if (v700) {
            const v701 = o.env;
            env[v701] = [];
        }
        const v702 = o.env;
        const v703 = env[v702];
        const v704 = v703.push(fullName);
        v704;
    }
    const v705 = o.arg;
    if (v705) {
        const v706 = o.arg;
        const v707 = argv[v706];
        if (v707) {
            const v708 = '\'' + fullName;
            const v709 = v708 + '\' reuses a command-line argument: ';
            const v710 = o.arg;
            const v711 = v709 + v710;
            const v712 = new Error(v711);
            throw v712;
        }
        const v713 = o.arg;
        argv[v713] = fullName;
    }
    const v714 = o.sensitive;
    const v715 = v714 === true;
    if (v715) {
        const v716 = sensitive.add(fullName);
        v716;
    }
    const format = o.format;
    let newFormat;
    const v717 = BUILT_INS.indexOf(format);
    const v718 = v717 >= 0;
    const v719 = BUILT_IN_NAMES.indexOf(format);
    const v720 = v719 >= 0;
    const v721 = v718 || v720;
    if (v721) {
        let Format;
        const v722 = typeof format;
        const v723 = v722 === 'string';
        const v724 = BUILT_INS_BY_NAME[format];
        if (v723) {
            Format = v724;
        } else {
            Format = format;
        }
        const v736 = function (x) {
            const v725 = Object.prototype;
            const v726 = v725.toString;
            const v727 = v726.call(x);
            const v728 = Object.prototype;
            const v729 = v728.toString;
            const v730 = new Format();
            const v731 = v729.call(v730);
            const v732 = v727 == v731;
            const v733 = Format.name;
            const v734 = 'must be of type ' + v733;
            const v735 = assert(v732, v734);
            v735;
        };
        newFormat = v736;
        const v737 = Format.name;
        const v738 = v737.toLowerCase();
        o.format = v738;
    } else {
        const v739 = typeof format;
        const v740 = v739 === 'string';
        if (v740) {
            const v741 = types[format];
            const v742 = !v741;
            if (v742) {
                const v743 = '\'' + fullName;
                const v744 = v743 + '\' uses an unknown format type: ';
                const v745 = v744 + format;
                const v746 = new Error(v745);
                throw v746;
            }
            newFormat = types[format];
        } else {
            const v747 = Array.isArray(format);
            if (v747) {
                newFormat = contains.bind(null, format);
            } else {
                const v748 = typeof format;
                const v749 = v748 === 'function';
                if (v749) {
                    newFormat = format;
                } else {
                    const v750 = typeof format;
                    const v751 = v750 !== 'function';
                    const v752 = format && v751;
                    if (v752) {
                        const v753 = '\'' + fullName;
                        const v754 = v753 + '\': `format` must be a function or a known format type.';
                        const v755 = new Error(v754);
                        throw v755;
                    }
                }
            }
        }
    }
    const v756 = !newFormat;
    const v757 = !format;
    const v758 = v756 && v757;
    if (v758) {
        const v759 = Object.prototype;
        const v760 = v759.toString;
        const v761 = o.default;
        const type = v760.call(v761);
        const v769 = function (x) {
            const v762 = Object.prototype;
            const v763 = v762.toString;
            const v764 = v763.call(x);
            const v765 = v764 == type;
            const v766 = type.replace(/\[.* |]/g, '');
            const v767 = ' should be of type ' + v766;
            const v768 = assert(v765, v767);
            v768;
        };
        newFormat = v769;
    }
    const v774 = function (x) {
        const v770 = this.nullable;
        const v771 = x === null;
        const v772 = v770 && v771;
        if (v772) {
            return;
        }
        try {
            const v773 = newFormat(x, this);
            v773;
        } catch (e) {
            e.fullName = fullName;
            e.value = x;
            throw e;
        }
    };
    o._format = v774;
};
const importEnvironment = function (o) {
    const env = o.getEnv();
    const v775 = o._env;
    const v776 = Object.keys(v775);
    const v784 = function (envStr) {
        const v777 = env[envStr];
        const v778 = v777 !== undefined;
        if (v778) {
            const v779 = o._env;
            const ks = v779[envStr];
            const v782 = function (k) {
                const v780 = env[envStr];
                const v781 = o.set(k, v780);
                v781;
            };
            const v783 = ks.forEach(v782);
            v783;
        }
    };
    const v785 = v776.forEach(v784);
    v785;
};
const importArguments = function (o) {
    const v786 = o.getArgs();
    const v787 = {};
    v787['dot-notation'] = false;
    const v788 = { configuration: v787 };
    const argv = parseArgs(v786, v788);
    const v789 = o._argv;
    const v790 = Object.keys(v789);
    const v797 = function (argStr) {
        const v791 = o._argv;
        const k = v791[argStr];
        const v792 = argv[argStr];
        const v793 = v792 !== undefined;
        if (v793) {
            const v794 = argv[argStr];
            const v795 = String(v794);
            const v796 = o.set(k, v795);
            v796;
        }
    };
    const v798 = v790.forEach(v797);
    v798;
};
const addDefaultValues = function (schema, c, instance) {
    const v799 = schema._cvtProperties;
    const v800 = Object.keys(v799);
    const v809 = function (name) {
        const v801 = schema._cvtProperties;
        const p = v801[name];
        const v802 = p._cvtProperties;
        if (v802) {
            const v803 = c[name];
            const v804 = {};
            const kids = v803 || v804;
            const v805 = addDefaultValues(p, kids, instance);
            v805;
            c[name] = kids;
        } else {
            const v806 = p.default;
            const v807 = cloneDeep(v806);
            const v808 = coerce(name, v807, schema, instance);
            c[name] = v808;
        }
    };
    const v810 = v800.forEach(v809);
    v810;
};
const isObj = function (o) {
    const v811 = typeof o;
    const v812 = v811 === 'object';
    const v813 = o !== null;
    const v814 = v812 && v813;
    return v814;
};
const overlay = function (from, to, schema) {
    const v815 = Object.keys(from);
    const v838 = function (k) {
        const v816 = from[k];
        const v817 = Array.isArray(v816);
        const v818 = from[k];
        const v819 = isObj(v818);
        const v820 = !v819;
        const v821 = v817 || v820;
        const v822 = !schema;
        const v823 = v821 || v822;
        const v824 = schema.format;
        const v825 = v824 === 'object';
        const v826 = v823 || v825;
        if (v826) {
            const v827 = from[k];
            const v828 = coerce(k, v827, schema);
            to[k] = v828;
        } else {
            const v829 = to[k];
            const v830 = isObj(v829);
            const v831 = !v830;
            if (v831) {
                const v832 = {};
                to[k] = v832;
            }
            const v833 = from[k];
            const v834 = to[k];
            const v835 = schema._cvtProperties;
            const v836 = v835[k];
            const v837 = overlay(v833, v834, v836);
            v837;
        }
    };
    const v839 = v815.forEach(v838);
    v839;
};
const traverseSchema = function (schema, path) {
    const ar = path.split('.');
    let o = schema;
    const v840 = ar.length;
    let v841 = v840 > 0;
    while (v841) {
        const k = ar.shift();
        const v842 = o._cvtProperties;
        const v843 = o && v842;
        const v844 = o._cvtProperties;
        const v845 = v844[k];
        const v846 = v843 && v845;
        if (v846) {
            const v847 = o._cvtProperties;
            o = v847[k];
        } else {
            o = null;
            break;
        }
        v841 = v840 > 0;
    }
    return o;
};
const getFormat = function (schema, path) {
    const o = traverseSchema(schema, path);
    const v848 = o == null;
    if (v848) {
        return null;
    }
    const v849 = o.format;
    const v850 = typeof v849;
    const v851 = v850 === 'string';
    if (v851) {
        const v852 = o.format;
        return v852;
    }
    const v853 = o.default;
    const v854 = v853 != null;
    if (v854) {
        const v855 = o.default;
        const v856 = typeof v855;
        return v856;
    }
    return null;
};
const coerce = function (k, v, schema, instance) {
    const format = getFormat(schema, k);
    const v857 = typeof v;
    const v858 = v857 === 'string';
    if (v858) {
        const v859 = custom_converters.has(format);
        if (v859) {
            const v860 = custom_converters.get(format);
            const v861 = v860(v, instance, k);
            return v861;
        }
        switch (format) {
        case 'port':
        case 'nat':
        case 'integer':
        case 'int':
            v = parseInt(v, 10);
            break;
        case 'port_or_windows_named_pipe':
            const v862 = isWindowsNamedPipe(v);
            const v863 = parseInt(v, 10);
            if (v862) {
                v = v;
            } else {
                v = v863;
            }
            break;
        case 'number':
            v = parseFloat(v);
            break;
        case 'boolean':
            const v864 = String(v);
            const v865 = v864.toLowerCase();
            v = v865 !== 'false';
            break;
        case 'array':
            v = v.split(',');
            break;
        case 'object':
            v = JSON.parse(v);
            break;
        case 'regexp':
            v = new RegExp(v);
            break;
        default:
        }
    }
    return v;
};
const loadFile = function (path) {
    const segments = path.split('.');
    let extension;
    const v866 = segments.length;
    const v867 = v866 > 1;
    const v868 = segments.pop();
    if (v867) {
        extension = v868;
    } else {
        extension = '';
    }
    const v869 = parsers_registry[extension];
    const v870 = parsers_registry['*'];
    const parse = v869 || v870;
    const v871 = fs.readFileSync(path, 'utf-8');
    const v872 = parse(v871);
    return v872;
};
const walk = function (obj, path, initializeMissing) {
    if (path) {
        const ar = path.split('.');
        let v873 = ar.length;
        while (v873) {
            const k = ar.shift();
            const v874 = obj[k];
            const v875 = v874 == null;
            const v876 = initializeMissing && v875;
            if (v876) {
                const v877 = {};
                obj[k] = v877;
                obj = obj[k];
            } else {
                const v878 = k in obj;
                if (v878) {
                    obj = obj[k];
                } else {
                    const v879 = 'cannot find configuration param \'' + path;
                    const v880 = v879 + '\'';
                    const v881 = new Error(v880);
                    throw v881;
                }
            }
            v873 = ar.length;
        }
    }
    return obj;
};
const convict = function convict(def, opts) {
    const v887 = function () {
        const v882 = opts.args;
        const v883 = opts && v882;
        const v884 = process.argv;
        const v885 = v884.slice(2);
        const v886 = v883 || v885;
        return v886;
    };
    const v892 = function () {
        const v888 = opts.env;
        const v889 = opts && v888;
        const v890 = process.env;
        const v891 = v889 || v890;
        return v891;
    };
    const v895 = function () {
        const v893 = this._instance;
        const v894 = cloneDeep(v893);
        return v894;
    };
    const v901 = function () {
        const v896 = this._instance;
        const clone = cloneDeep(v896);
        const v897 = this._sensitive;
        const v898 = function (key) {
            const path = key.split('.');
            const childKey = path.pop();
            const parentKey = path.join('.');
            const parent = walk(clone, parentKey);
            parent[childKey] = '[Sensitive]';
        };
        const v899 = v897.forEach(v898);
        v899;
        const v900 = JSON.stringify(clone, null, 2);
        return v900;
    };
    const v905 = function () {
        const v902 = this._schema;
        const v903 = JSON.stringify(v902);
        const v904 = JSON.parse(v903);
        return v904;
    };
    const v908 = function () {
        const v906 = this._schema;
        const v907 = JSON.stringify(v906, null, 2);
        return v907;
    };
    const v911 = function (path) {
        const v909 = this._instance;
        const o = walk(v909, path);
        const v910 = cloneDeep(o);
        return v910;
    };
    const v917 = function (path) {
        const v912 = path.split('.');
        const v913 = v912.join('._cvtProperties.');
        path = v913 + '.default';
        const v914 = this._schema;
        const v915 = v914._cvtProperties;
        const o = walk(v915, path);
        const v916 = cloneDeep(o);
        return v916;
    };
    const v920 = function (prop_name) {
        const v918 = this.default(prop_name);
        const v919 = this.set(prop_name, v918);
        v919;
    };
    const v923 = function (path) {
        try {
            const r = this.get(path);
            const v921 = typeof r;
            const v922 = v921 !== 'undefined';
            return v922;
        } catch (e) {
            return false;
        }
    };
    const v928 = function (k, v) {
        let path;
        for (path of FORBIDDEN_KEY_PATHS) {
            const v924 = `${ path }.`;
            const v925 = k.startsWith(v924);
            if (v925) {
                return this;
            }
        }
        const v926 = this._schema;
        v = coerce(k, v, v926, this);
        const path = k.split('.');
        const childKey = path.pop();
        const parentKey = path.join('.');
        const v927 = this._instance;
        const parent = walk(v927, parentKey, true);
        parent[childKey] = v;
        return this;
    };
    const v934 = function (conf) {
        const v929 = this._instance;
        const v930 = this._schema;
        const v931 = overlay(conf, v929, v930);
        v931;
        const v932 = importEnvironment(rv);
        v932;
        const v933 = importArguments(rv);
        v933;
        return this;
    };
    const v944 = function (paths) {
        const self = this;
        const v935 = Array.isArray(paths);
        const v936 = !v935;
        if (v936) {
            paths = [paths];
        }
        const v940 = function (path) {
            const result = loadFile(path);
            if (result) {
                const v937 = self._instance;
                const v938 = self._schema;
                const v939 = overlay(result, v937, v938);
                v939;
            }
        };
        const v941 = paths.forEach(v940);
        v941;
        const v942 = importEnvironment(rv);
        v942;
        const v943 = importArguments(rv);
        v943;
        return this;
    };
    const v1002 = function (options) {
        const v945 = {};
        options = options || v945;
        const v946 = options.allowed;
        options.allowed = v946 || ALLOWED_OPTION_WARN;
        const v947 = options.output;
        const v948 = options.output;
        const v949 = typeof v948;
        const v950 = v949 !== 'function';
        const v951 = v947 && v950;
        if (v951) {
            const v952 = new Error('options.output is optional and must be a function.');
            throw v952;
        }
        const v953 = options.output;
        const v954 = global.console;
        const v955 = v954.log;
        const output_function = v953 || v955;
        const v956 = this._instance;
        const v957 = this._schema;
        const v958 = options.allowed;
        const errors = validate(v956, v957, v958);
        const v959 = errors.invalid_type;
        const v960 = v959.length;
        const v961 = errors.undeclared;
        const v962 = v961.length;
        const v963 = v960 + v962;
        const v964 = errors.missing;
        const v965 = v964.length;
        const v966 = v963 + v965;
        if (v966) {
            const sensitive = this._sensitive;
            const fillErrorBuffer = function (errors) {
                let err_buf = '';
                let i = 0;
                const v967 = errors.length;
                let v968 = i < v967;
                while (v968) {
                    const v970 = err_buf.length;
                    if (v970) {
                        err_buf += '\n';
                    }
                    const e = errors[i];
                    const v971 = e.fullName;
                    if (v971) {
                        const v972 = e.fullName;
                        err_buf += v972 + ': ';
                    }
                    const v973 = e.message;
                    if (v973) {
                        err_buf += e.message;
                    }
                    const v974 = e.value;
                    const v975 = e.fullName;
                    const v976 = sensitive.has(v975);
                    const v977 = !v976;
                    const v978 = v974 && v977;
                    if (v978) {
                        const v979 = e.value;
                        const v980 = JSON.stringify(v979);
                        err_buf += ': value was ' + v980;
                    }
                    const v969 = i++;
                    v968 = i < v967;
                }
                return err_buf;
            };
            const v981 = errors.invalid_type;
            const types_err_buf = fillErrorBuffer(v981);
            const v982 = errors.undeclared;
            const params_err_buf = fillErrorBuffer(v982);
            const v983 = errors.missing;
            const missing_err_buf = fillErrorBuffer(v983);
            const output_err_bufs = [
                types_err_buf,
                missing_err_buf
            ];
            const v984 = options.allowed;
            const v985 = v984 === ALLOWED_OPTION_WARN;
            const v986 = params_err_buf.length;
            const v987 = v985 && v986;
            if (v987) {
                let warning = 'Warning:';
                const v988 = process.stdout;
                const v989 = v988.isTTY;
                if (v989) {
                    const SET_BOLD_YELLOW_TEXT = '\x1B[33;1m';
                    const RESET_ALL_ATTRIBUTES = '\x1B[0m';
                    const v990 = SET_BOLD_YELLOW_TEXT + warning;
                    warning = v990 + RESET_ALL_ATTRIBUTES;
                }
                const v991 = warning + ' ';
                const v992 = v991 + params_err_buf;
                const v993 = output_function(v992);
                v993;
            } else {
                const v994 = options.allowed;
                const v995 = v994 === ALLOWED_OPTION_STRICT;
                if (v995) {
                    const v996 = output_err_bufs.push(params_err_buf);
                    v996;
                }
            }
            const v998 = function (str) {
                const v997 = str.length;
                return v997;
            };
            const v999 = output_err_bufs.filter(v998);
            const output = v999.join('\n');
            const v1000 = output.length;
            if (v1000) {
                const v1001 = new Error(output);
                throw v1001;
            }
        }
        return this;
    };
    const rv = {};
    rv.getArgs = v887;
    rv.getEnv = v892;
    rv.getProperties = v895;
    rv.toString = v901;
    rv.getSchema = v905;
    rv.getSchemaString = v908;
    rv.get = v911;
    rv.default = v917;
    rv.reset = v920;
    rv.has = v923;
    rv.set = v928;
    rv.load = v934;
    rv.loadFile = v944;
    rv.validate = v1002;
    const v1003 = typeof def;
    const v1004 = v1003 === 'string';
    if (v1004) {
        const v1005 = loadFile(def);
        rv._def = v1005;
    } else {
        rv._def = def;
    }
    const v1006 = {};
    const v1007 = {};
    v1007._cvtProperties = v1006;
    rv._schema = v1007;
    const v1008 = {};
    rv._env = v1008;
    const v1009 = {};
    rv._argv = v1009;
    rv._sensitive = new Set();
    const v1010 = rv._def;
    const v1011 = Object.keys(v1010);
    const v1020 = function (k) {
        const v1012 = rv._def;
        const v1013 = v1012[k];
        const v1014 = rv._schema;
        const v1015 = v1014._cvtProperties;
        const v1016 = rv._env;
        const v1017 = rv._argv;
        const v1018 = rv._sensitive;
        const v1019 = normalizeSchema(k, v1013, v1015, k, v1016, v1017, v1018);
        v1019;
    };
    const v1021 = v1011.forEach(v1020);
    v1021;
    const v1022 = {};
    rv._instance = v1022;
    const v1023 = rv._schema;
    const v1024 = rv._instance;
    const v1025 = addDefaultValues(v1023, v1024, rv);
    v1025;
    const v1026 = importEnvironment(rv);
    v1026;
    const v1027 = importArguments(rv);
    v1027;
    return rv;
};
const v1042 = function (name, validate, coerce) {
    const v1028 = typeof name;
    const v1029 = v1028 === 'object';
    if (v1029) {
        validate = name.validate;
        coerce = name.coerce;
        name = name.name;
    }
    const v1030 = typeof validate;
    const v1031 = v1030 !== 'function';
    if (v1031) {
        const v1032 = 'Validation function for ' + name;
        const v1033 = v1032 + ' must be a function.';
        const v1034 = new Error(v1033);
        throw v1034;
    }
    const v1035 = typeof coerce;
    const v1036 = v1035 !== 'function';
    const v1037 = coerce && v1036;
    if (v1037) {
        const v1038 = 'Coerce function for ' + name;
        const v1039 = v1038 + ' must be a function.';
        const v1040 = new Error(v1039);
        throw v1040;
    }
    types[name] = validate;
    if (coerce) {
        const v1041 = custom_converters.set(name, coerce);
        v1041;
    }
};
convict.addFormat = v1042;
const v1051 = function (formats) {
    const v1043 = Object.keys(formats);
    const v1049 = function (type) {
        const v1044 = formats[type];
        const v1045 = v1044.validate;
        const v1046 = formats[type];
        const v1047 = v1046.coerce;
        const v1048 = convict.addFormat(type, v1045, v1047);
        v1048;
    };
    const v1050 = v1043.forEach(v1049);
    v1050;
};
convict.addFormats = v1051;
const v1080 = function (parsers) {
    const v1052 = Array.isArray(parsers);
    const v1053 = !v1052;
    if (v1053) {
        parsers = [parsers];
    }
    const v1078 = function (parser) {
        const v1054 = !parser;
        if (v1054) {
            const v1055 = new Error('Invalid parser');
            throw v1055;
        }
        const v1056 = parser.extension;
        const v1057 = !v1056;
        if (v1057) {
            const v1058 = new Error('Missing parser.extension');
            throw v1058;
        }
        const v1059 = parser.parse;
        const v1060 = !v1059;
        if (v1060) {
            const v1061 = new Error('Missing parser.parse function');
            throw v1061;
        }
        const v1062 = parser.parse;
        const v1063 = typeof v1062;
        const v1064 = v1063 !== 'function';
        if (v1064) {
            const v1065 = new Error('Invalid parser.parse function');
            throw v1065;
        }
        let extensions;
        const v1066 = parser.extension;
        const v1067 = Array.isArray(v1066);
        const v1068 = !v1067;
        const v1069 = parser.extension;
        const v1070 = [v1069];
        const v1071 = parser.extension;
        if (v1068) {
            extensions = v1070;
        } else {
            extensions = v1071;
        }
        const v1076 = function (extension) {
            const v1072 = typeof extension;
            const v1073 = v1072 !== 'string';
            if (v1073) {
                const v1074 = new Error('Invalid parser.extension');
                throw v1074;
            }
            const v1075 = parser.parse;
            parsers_registry[extension] = v1075;
        };
        const v1077 = extensions.forEach(v1076);
        v1077;
    };
    const v1079 = parsers.forEach(v1078);
    v1079;
};
convict.addParser = v1080;
module.exports = convict;