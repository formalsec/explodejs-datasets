'use strict';
const fs = require('fs');
const parseArgs = require('yargs-parser');
const cloneDeep = require('lodash.clonedeep');
const assert = function (assertion, err_msg) {
    const v536 = !assertion;
    if (v536) {
        const v537 = new Error(err_msg);
        throw v537;
    }
};
const isPort = function (x) {
    const v538 = Number.isInteger(x);
    const v539 = x >= 0;
    const v540 = v538 && v539;
    const v541 = x <= 65535;
    const v542 = v540 && v541;
    return v542;
};
const isWindowsNamedPipe = function (x) {
    const v543 = String(x);
    const v544 = v543.includes('\\\\.\\pipe\\');
    return v544;
};
const v545 = function () {
};
const v548 = function (x) {
    const v546 = Number.isInteger(x);
    const v547 = assert(v546, 'must be an integer');
    v547;
};
const v553 = function (x) {
    const v549 = Number.isInteger(x);
    const v550 = x >= 0;
    const v551 = v549 && v550;
    const v552 = assert(v551, 'must be a positive integer');
    v552;
};
const v556 = function (x) {
    const v554 = isPort(x);
    const v555 = assert(v554, 'ports must be within range 0 - 65535');
    v555;
};
const v559 = function (x) {
    const v557 = isWindowsNamedPipe(x);
    const v558 = assert(v557, 'must be a valid pipe');
    v558;
};
const v564 = function (x) {
    const v560 = isWindowsNamedPipe(x);
    const v561 = !v560;
    if (v561) {
        const v562 = isPort(x);
        const v563 = assert(v562, 'must be a windows named pipe or a number within range 0 - 65535');
        v563;
    }
};
const types = {};
types['*'] = v545;
types.int = v548;
types.nat = v553;
types.port = v556;
types.windows_named_pipe = v559;
types.port_or_windows_named_pipe = v564;
const v565 = types.int;
types.integer = v565;
const converters = new Map();
const v566 = JSON.parse;
const parsers_registry = {};
parsers_registry['*'] = v566;
const ALLOWED_OPTION_STRICT = 'strict';
const ALLOWED_OPTION_WARN = 'warn';
const flatten = function (obj, useProperties) {
    const stack = Object.keys(obj);
    let key;
    const entries = [];
    let v567 = stack.length;
    while (v567) {
        key = stack.shift();
        let val = walk(obj, key);
        const v568 = typeof val;
        const v569 = v568 === 'object';
        const v570 = Array.isArray(val);
        const v571 = !v570;
        const v572 = v569 && v571;
        const v573 = val != null;
        const v574 = v572 && v573;
        if (v574) {
            if (useProperties) {
                const v575 = '_cvtProperties' in val;
                if (v575) {
                    val = val._cvtProperties;
                    key = key + '._cvtProperties';
                } else {
                    const v576 = [
                        key,
                        val
                    ];
                    const v577 = entries.push(v576);
                    v577;
                    continue;
                }
            }
            const subkeys = Object.keys(val);
            const v578 = subkeys.length;
            const v579 = v578 > 0;
            if (v579) {
                const v583 = function (subkey) {
                    const v580 = key + '.';
                    const v581 = v580 + subkey;
                    const v582 = stack.push(v581);
                    v582;
                };
                const v584 = subkeys.forEach(v583);
                v584;
                continue;
            }
        }
        const v585 = [
            key,
            val
        ];
        const v586 = entries.push(v585);
        v586;
        v567 = stack.length;
    }
    const flattened = {};
    const v587 = function (entry) {
        let key = entry[0];
        if (useProperties) {
            key = key.replace(/\._cvtProperties/g, '');
        }
        const val = entry[1];
        flattened[key] = val;
    };
    const v588 = entries.forEach(v587);
    v588;
    return flattened;
};
const validate = function (instance, schema, strictValidation) {
    const v589 = [];
    const v590 = [];
    const v591 = [];
    const errors = {};
    errors.undeclared = v589;
    errors.invalid_type = v590;
    errors.missing = v591;
    const flatInstance = flatten(instance);
    const v592 = schema._cvtProperties;
    const flatSchema = flatten(v592, true);
    const v593 = Object.keys(flatSchema);
    const v636 = function (name) {
        const schemaItem = flatSchema[name];
        let instanceItem = flatInstance[name];
        const v594 = name in flatInstance;
        const v595 = !v594;
        if (v595) {
            try {
                const v596 = schemaItem.default;
                const v597 = typeof v596;
                const v598 = v597 === 'object';
                const v599 = schemaItem.default;
                const v600 = Array.isArray(v599);
                const v601 = !v600;
                const v602 = v598 && v601;
                if (v602) {
                    instanceItem = walk(instance, name);
                } else {
                    const v603 = new Error('missing');
                    throw v603;
                }
            } catch (e) {
                const v604 = 'configuration param \'' + name;
                const v605 = v604 + '\' missing from config, did you override its parent?';
                const err = new Error(v605);
                const v606 = errors.missing;
                const v607 = v606.push(err);
                v607;
                return;
            }
        }
        const v608 = flatInstance[name];
        const v609 = delete v608;
        v609;
        const v610 = schemaItem.format;
        const v611 = v610 === 'object';
        const v612 = schemaItem.default;
        const v613 = typeof v612;
        const v614 = v613 === 'object';
        const v615 = v611 || v614;
        if (v615) {
            const v616 = Object.keys(flatInstance);
            const v620 = function (key) {
                const v617 = name + '.';
                const v618 = key.lastIndexOf(v617, 0);
                const v619 = v618 === 0;
                return v619;
            };
            const v621 = v616.filter(v620);
            const v624 = function (key) {
                const v622 = flatInstance[key];
                const v623 = delete v622;
                v623;
            };
            const v625 = v621.forEach(v624);
            v625;
        }
        const v626 = schemaItem.default;
        const v627 = typeof v626;
        const v628 = v627 === 'undefined';
        const v629 = schemaItem.default;
        const v630 = instanceItem === v629;
        const v631 = v628 && v630;
        const v632 = !v631;
        if (v632) {
            try {
                const v633 = schemaItem._format(instanceItem);
                v633;
            } catch (err) {
                const v634 = errors.invalid_type;
                const v635 = v634.push(err);
                v635;
            }
        }
        return;
    };
    const v637 = v593.forEach(v636);
    v637;
    if (strictValidation) {
        const v638 = Object.keys(flatInstance);
        const v643 = function (name) {
            const v639 = 'configuration param \'' + name;
            const v640 = v639 + '\' not declared in the schema';
            const err = new Error(v640);
            const v641 = errors.undeclared;
            const v642 = v641.push(err);
            v642;
        };
        const v644 = v638.forEach(v643);
        v644;
    }
    return errors;
};
const contains = function (options, x) {
    const v645 = options.indexOf(x);
    const v646 = -1;
    const v647 = v645 !== v646;
    const v648 = JSON.stringify(options);
    const v649 = 'must be one of the possible values: ' + v648;
    const v650 = assert(v647, v649);
    v650;
};
const BUILT_INS_BY_NAME = {};
BUILT_INS_BY_NAME.Object = Object;
BUILT_INS_BY_NAME.Array = Array;
BUILT_INS_BY_NAME.String = String;
BUILT_INS_BY_NAME.Number = Number;
BUILT_INS_BY_NAME.Boolean = Boolean;
BUILT_INS_BY_NAME.RegExp = RegExp;
const BUILT_IN_NAMES = Object.keys(BUILT_INS_BY_NAME);
const v652 = function (name) {
    const v651 = BUILT_INS_BY_NAME[name];
    return v651;
};
const BUILT_INS = BUILT_IN_NAMES.map(v652);
const normalizeSchema = function (name, node, props, fullName, env, argv, sensitive) {
    const v653 = name === '_cvtProperties';
    if (v653) {
        const v654 = '\'' + fullName;
        const v655 = v654 + '\': \'_cvtProperties\' is reserved word of convict.';
        const v656 = new Error(v655);
        throw v656;
    }
    const v657 = typeof node;
    const v658 = v657 === 'object';
    const v659 = node !== null;
    const v660 = v658 && v659;
    const v661 = Array.isArray(node);
    const v662 = !v661;
    const v663 = v660 && v662;
    const v664 = Object.keys(node);
    const v665 = v664.length;
    const v666 = v665 > 0;
    const v667 = v663 && v666;
    const v668 = 'default' in node;
    const v669 = !v668;
    const v670 = v667 && v669;
    if (v670) {
        const v671 = {};
        const v672 = {};
        v672._cvtProperties = v671;
        props[name] = v672;
        const v673 = Object.keys(node);
        const v680 = function (k) {
            const v674 = node[k];
            const v675 = props[name];
            const v676 = v675._cvtProperties;
            const v677 = fullName + '.';
            const v678 = v677 + k;
            const v679 = normalizeSchema(k, v674, v676, v678, env, argv, sensitive);
            v679;
        };
        const v681 = v673.forEach(v680);
        v681;
        return;
    } else {
        const v682 = typeof node;
        const v683 = v682 !== 'object';
        const v684 = Array.isArray(node);
        const v685 = v683 || v684;
        const v686 = node === null;
        const v687 = v685 || v686;
        const v688 = Object.keys(node);
        const v689 = v688.length;
        const v690 = v689 == 0;
        const v691 = v687 || v690;
        if (v691) {
            node.default = node;
            node = {};
            node = {};
        }
    }
    const o = cloneDeep(node);
    props[name] = o;
    const v692 = o.env;
    if (v692) {
        const v693 = o.env;
        const v694 = env[v693];
        const v695 = !v694;
        if (v695) {
            const v696 = o.env;
            env[v696] = [];
        }
        const v697 = o.env;
        const v698 = env[v697];
        const v699 = v698.push(fullName);
        v699;
    }
    const v700 = o.arg;
    if (v700) {
        const v701 = o.arg;
        const v702 = argv[v701];
        if (v702) {
            const v703 = '\'' + fullName;
            const v704 = v703 + '\' reuses a command-line argument: ';
            const v705 = o.arg;
            const v706 = v704 + v705;
            const v707 = new Error(v706);
            throw v707;
        }
        const v708 = o.arg;
        argv[v708] = fullName;
    }
    const v709 = o.sensitive;
    const v710 = v709 === true;
    if (v710) {
        const v711 = sensitive.add(fullName);
        v711;
    }
    const format = o.format;
    let newFormat;
    const v712 = BUILT_INS.indexOf(format);
    const v713 = v712 >= 0;
    const v714 = BUILT_IN_NAMES.indexOf(format);
    const v715 = v714 >= 0;
    const v716 = v713 || v715;
    if (v716) {
        let Format;
        const v717 = typeof format;
        const v718 = v717 === 'string';
        const v719 = BUILT_INS_BY_NAME[format];
        if (v718) {
            Format = v719;
        } else {
            Format = format;
        }
        const v731 = function (x) {
            const v720 = Object.prototype;
            const v721 = v720.toString;
            const v722 = v721.call(x);
            const v723 = Object.prototype;
            const v724 = v723.toString;
            const v725 = new Format();
            const v726 = v724.call(v725);
            const v727 = v722 == v726;
            const v728 = Format.name;
            const v729 = 'must be of type ' + v728;
            const v730 = assert(v727, v729);
            v730;
        };
        newFormat = v731;
        const v732 = Format.name;
        const v733 = v732.toLowerCase();
        o.format = v733;
    } else {
        const v734 = typeof format;
        const v735 = v734 === 'string';
        if (v735) {
            const v736 = types[format];
            const v737 = !v736;
            if (v737) {
                const v738 = '\'' + fullName;
                const v739 = v738 + '\' uses an unknown format type: ';
                const v740 = v739 + format;
                const v741 = new Error(v740);
                throw v741;
            }
            newFormat = types[format];
        } else {
            const v742 = Array.isArray(format);
            if (v742) {
                newFormat = contains.bind(null, format);
            } else {
                const v743 = typeof format;
                const v744 = v743 === 'function';
                if (v744) {
                    newFormat = format;
                } else {
                    const v745 = typeof format;
                    const v746 = v745 !== 'function';
                    const v747 = format && v746;
                    if (v747) {
                        const v748 = '\'' + fullName;
                        const v749 = v748 + '\': `format` must be a function or a known format type.';
                        const v750 = new Error(v749);
                        throw v750;
                    }
                }
            }
        }
    }
    const v751 = !newFormat;
    const v752 = !format;
    const v753 = v751 && v752;
    if (v753) {
        const v754 = Object.prototype;
        const v755 = v754.toString;
        const v756 = o.default;
        const type = v755.call(v756);
        const v764 = function (x) {
            const v757 = Object.prototype;
            const v758 = v757.toString;
            const v759 = v758.call(x);
            const v760 = v759 == type;
            const v761 = type.replace(/\[.* |]/g, '');
            const v762 = ' should be of type ' + v761;
            const v763 = assert(v760, v762);
            v763;
        };
        newFormat = v764;
    }
    const v766 = function (x) {
        try {
            const v765 = newFormat(x, this);
            v765;
        } catch (e) {
            e.fullName = fullName;
            e.value = x;
            throw e;
        }
    };
    o._format = v766;
};
const importEnvironment = function (o) {
    const env = o.getEnv();
    const v767 = o._env;
    const v768 = Object.keys(v767);
    const v776 = function (envStr) {
        const v769 = env[envStr];
        const v770 = v769 !== undefined;
        if (v770) {
            const v771 = o._env;
            const ks = v771[envStr];
            const v774 = function (k) {
                const v772 = env[envStr];
                const v773 = o.set(k, v772);
                v773;
            };
            const v775 = ks.forEach(v774);
            v775;
        }
    };
    const v777 = v768.forEach(v776);
    v777;
};
const importArguments = function (o) {
    const v778 = o.getArgs();
    const v779 = {};
    v779['dot-notation'] = false;
    const v780 = { configuration: v779 };
    const argv = parseArgs(v778, v780);
    const v781 = o._argv;
    const v782 = Object.keys(v781);
    const v789 = function (argStr) {
        const v783 = o._argv;
        const k = v783[argStr];
        const v784 = argv[argStr];
        const v785 = v784 !== undefined;
        if (v785) {
            const v786 = argv[argStr];
            const v787 = String(v786);
            const v788 = o.set(k, v787);
            v788;
        }
    };
    const v790 = v782.forEach(v789);
    v790;
};
const addDefaultValues = function (schema, c, instance) {
    const v791 = schema._cvtProperties;
    const v792 = Object.keys(v791);
    const v801 = function (name) {
        const v793 = schema._cvtProperties;
        const p = v793[name];
        const v794 = p._cvtProperties;
        if (v794) {
            const v795 = c[name];
            const v796 = {};
            const kids = v795 || v796;
            const v797 = addDefaultValues(p, kids, instance);
            v797;
            c[name] = kids;
        } else {
            const v798 = p.default;
            const v799 = cloneDeep(v798);
            const v800 = coerce(name, v799, schema, instance);
            c[name] = v800;
        }
    };
    const v802 = v792.forEach(v801);
    v802;
};
const isObj = function (o) {
    const v803 = typeof o;
    const v804 = v803 === 'object';
    const v805 = o !== null;
    const v806 = v804 && v805;
    return v806;
};
const overlay = function (from, to, schema) {
    const v807 = Object.keys(from);
    const v830 = function (k) {
        const v808 = from[k];
        const v809 = Array.isArray(v808);
        const v810 = from[k];
        const v811 = isObj(v810);
        const v812 = !v811;
        const v813 = v809 || v812;
        const v814 = !schema;
        const v815 = v813 || v814;
        const v816 = schema.format;
        const v817 = v816 === 'object';
        const v818 = v815 || v817;
        if (v818) {
            const v819 = from[k];
            const v820 = coerce(k, v819, schema);
            to[k] = v820;
        } else {
            const v821 = to[k];
            const v822 = isObj(v821);
            const v823 = !v822;
            if (v823) {
                const v824 = {};
                to[k] = v824;
            }
            const v825 = from[k];
            const v826 = to[k];
            const v827 = schema._cvtProperties;
            const v828 = v827[k];
            const v829 = overlay(v825, v826, v828);
            v829;
        }
    };
    const v831 = v807.forEach(v830);
    v831;
};
const traverseSchema = function (schema, path) {
    const ar = path.split('.');
    let o = schema;
    const v832 = ar.length;
    let v833 = v832 > 0;
    while (v833) {
        const k = ar.shift();
        const v834 = o._cvtProperties;
        const v835 = o && v834;
        const v836 = o._cvtProperties;
        const v837 = v836[k];
        const v838 = v835 && v837;
        if (v838) {
            const v839 = o._cvtProperties;
            o = v839[k];
        } else {
            o = null;
            break;
        }
        v833 = v832 > 0;
    }
    return o;
};
const getFormat = function (schema, path) {
    const o = traverseSchema(schema, path);
    const v840 = o == null;
    if (v840) {
        return null;
    }
    const v841 = o.format;
    const v842 = typeof v841;
    const v843 = v842 === 'string';
    if (v843) {
        const v844 = o.format;
        return v844;
    }
    const v845 = o.default;
    const v846 = v845 != null;
    if (v846) {
        const v847 = o.default;
        const v848 = typeof v847;
        return v848;
    }
    return null;
};
const coerce = function (k, v, schema, instance) {
    const format = getFormat(schema, k);
    const v849 = typeof v;
    const v850 = v849 === 'string';
    if (v850) {
        const v851 = converters.has(format);
        if (v851) {
            const v852 = converters.get(format);
            const v853 = v852(v, instance, k);
            return v853;
        }
        switch (format) {
        case 'port':
        case 'nat':
        case 'integer':
        case 'int':
            v = parseInt(v, 10);
            break;
        case 'port_or_windows_named_pipe':
            const v854 = isWindowsNamedPipe(v);
            const v855 = parseInt(v, 10);
            if (v854) {
                v = v;
            } else {
                v = v855;
            }
            break;
        case 'number':
            v = parseFloat(v);
            break;
        case 'boolean':
            const v856 = String(v);
            const v857 = v856.toLowerCase();
            v = v857 !== 'false';
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
    const v858 = segments.length;
    const v859 = v858 > 1;
    const v860 = segments.pop();
    if (v859) {
        extension = v860;
    } else {
        extension = '';
    }
    const v861 = parsers_registry[extension];
    const v862 = parsers_registry['*'];
    const parse = v861 || v862;
    const v863 = fs.readFileSync(path, 'utf-8');
    const v864 = parse(v863);
    return v864;
};
const walk = function (obj, path, initializeMissing) {
    if (path) {
        const ar = path.split('.');
        let v865 = ar.length;
        while (v865) {
            const k = ar.shift();
            const v866 = obj[k];
            const v867 = v866 == null;
            const v868 = initializeMissing && v867;
            if (v868) {
                const v869 = {};
                obj[k] = v869;
                obj = obj[k];
            } else {
                const v870 = k in obj;
                if (v870) {
                    obj = obj[k];
                } else {
                    const v871 = 'cannot find configuration param \'' + path;
                    const v872 = v871 + '\'';
                    const v873 = new Error(v872);
                    throw v873;
                }
            }
            v865 = ar.length;
        }
    }
    return obj;
};
const convict = function convict(def, opts) {
    const v879 = function () {
        const v874 = opts.args;
        const v875 = opts && v874;
        const v876 = process.argv;
        const v877 = v876.slice(2);
        const v878 = v875 || v877;
        return v878;
    };
    const v884 = function () {
        const v880 = opts.env;
        const v881 = opts && v880;
        const v882 = process.env;
        const v883 = v881 || v882;
        return v883;
    };
    const v887 = function () {
        const v885 = this._instance;
        const v886 = cloneDeep(v885);
        return v886;
    };
    const v893 = function () {
        const v888 = this._instance;
        const clone = cloneDeep(v888);
        const v889 = this._sensitive;
        const v890 = function (key) {
            const path = key.split('.');
            const childKey = path.pop();
            const parentKey = path.join('.');
            const parent = walk(clone, parentKey);
            parent[childKey] = '[Sensitive]';
        };
        const v891 = v889.forEach(v890);
        v891;
        const v892 = JSON.stringify(clone, null, 2);
        return v892;
    };
    const v897 = function () {
        const v894 = this._schema;
        const v895 = JSON.stringify(v894);
        const v896 = JSON.parse(v895);
        return v896;
    };
    const v900 = function () {
        const v898 = this._schema;
        const v899 = JSON.stringify(v898, null, 2);
        return v899;
    };
    const v903 = function (path) {
        const v901 = this._instance;
        const o = walk(v901, path);
        const v902 = cloneDeep(o);
        return v902;
    };
    const v909 = function (path) {
        const v904 = path.split('.');
        const v905 = v904.join('._cvtProperties.');
        path = v905 + '.default';
        const v906 = this._schema;
        const v907 = v906._cvtProperties;
        const o = walk(v907, path);
        const v908 = cloneDeep(o);
        return v908;
    };
    const v912 = function (prop_name) {
        const v910 = this.default(prop_name);
        const v911 = this.set(prop_name, v910);
        v911;
    };
    const v915 = function (path) {
        try {
            const r = this.get(path);
            const v913 = typeof r;
            const v914 = v913 !== 'undefined';
            return v914;
        } catch (e) {
            return false;
        }
    };
    const v918 = function (k, v) {
        const v916 = this._schema;
        v = coerce(k, v, v916, this);
        const path = k.split('.');
        const childKey = path.pop();
        const parentKey = path.join('.');
        const v917 = this._instance;
        const parent = walk(v917, parentKey, true);
        parent[childKey] = v;
        return this;
    };
    const v924 = function (conf) {
        const v919 = this._instance;
        const v920 = this._schema;
        const v921 = overlay(conf, v919, v920);
        v921;
        const v922 = importEnvironment(rv);
        v922;
        const v923 = importArguments(rv);
        v923;
        return this;
    };
    const v934 = function (paths) {
        const self = this;
        const v925 = Array.isArray(paths);
        const v926 = !v925;
        if (v926) {
            paths = [paths];
        }
        const v930 = function (path) {
            const result = loadFile(path);
            if (result) {
                const v927 = self._instance;
                const v928 = self._schema;
                const v929 = overlay(result, v927, v928);
                v929;
            }
        };
        const v931 = paths.forEach(v930);
        v931;
        const v932 = importEnvironment(rv);
        v932;
        const v933 = importArguments(rv);
        v933;
        return this;
    };
    const v992 = function (options) {
        const v935 = {};
        options = options || v935;
        const v936 = options.allowed;
        options.allowed = v936 || ALLOWED_OPTION_WARN;
        const v937 = options.output;
        const v938 = options.output;
        const v939 = typeof v938;
        const v940 = v939 !== 'function';
        const v941 = v937 && v940;
        if (v941) {
            const v942 = new Error('options.output is optionnal and must be a function.');
            throw v942;
        }
        const v943 = options.output;
        const v944 = global.console;
        const v945 = v944.log;
        const output_function = v943 || v945;
        const v946 = this._instance;
        const v947 = this._schema;
        const v948 = options.allowed;
        const errors = validate(v946, v947, v948);
        const v949 = errors.invalid_type;
        const v950 = v949.length;
        const v951 = errors.undeclared;
        const v952 = v951.length;
        const v953 = v950 + v952;
        const v954 = errors.missing;
        const v955 = v954.length;
        const v956 = v953 + v955;
        if (v956) {
            const sensitive = this._sensitive;
            const fillErrorBuffer = function (errors) {
                let err_buf = '';
                let i = 0;
                const v957 = errors.length;
                let v958 = i < v957;
                while (v958) {
                    const v960 = err_buf.length;
                    if (v960) {
                        err_buf += '\n';
                    }
                    const e = errors[i];
                    const v961 = e.fullName;
                    if (v961) {
                        const v962 = e.fullName;
                        err_buf += v962 + ': ';
                    }
                    const v963 = e.message;
                    if (v963) {
                        err_buf += e.message;
                    }
                    const v964 = e.value;
                    const v965 = e.fullName;
                    const v966 = sensitive.has(v965);
                    const v967 = !v966;
                    const v968 = v964 && v967;
                    if (v968) {
                        const v969 = e.value;
                        const v970 = JSON.stringify(v969);
                        err_buf += ': value was ' + v970;
                    }
                    const v959 = i++;
                    v958 = i < v957;
                }
                return err_buf;
            };
            const v971 = errors.invalid_type;
            const types_err_buf = fillErrorBuffer(v971);
            const v972 = errors.undeclared;
            const params_err_buf = fillErrorBuffer(v972);
            const v973 = errors.missing;
            const missing_err_buf = fillErrorBuffer(v973);
            const output_err_bufs = [
                types_err_buf,
                missing_err_buf
            ];
            const v974 = options.allowed;
            const v975 = v974 === ALLOWED_OPTION_WARN;
            const v976 = params_err_buf.length;
            const v977 = v975 && v976;
            if (v977) {
                let warning = 'Warning:';
                const v978 = process.stdout;
                const v979 = v978.isTTY;
                if (v979) {
                    const SET_BOLD_YELLOW_TEXT = '\x1B[33;1m';
                    const RESET_ALL_ATTRIBUTES = '\x1B[0m';
                    const v980 = SET_BOLD_YELLOW_TEXT + warning;
                    warning = v980 + RESET_ALL_ATTRIBUTES;
                }
                const v981 = warning + ' ';
                const v982 = v981 + params_err_buf;
                const v983 = output_function(v982);
                v983;
            } else {
                const v984 = options.allowed;
                const v985 = v984 === ALLOWED_OPTION_STRICT;
                if (v985) {
                    const v986 = output_err_bufs.push(params_err_buf);
                    v986;
                }
            }
            const v988 = function (str) {
                const v987 = str.length;
                return v987;
            };
            const v989 = output_err_bufs.filter(v988);
            const output = v989.join('\n');
            const v990 = output.length;
            if (v990) {
                const v991 = new Error(output);
                throw v991;
            }
        }
        return this;
    };
    const rv = {};
    rv.getArgs = v879;
    rv.getEnv = v884;
    rv.getProperties = v887;
    rv.toString = v893;
    rv.getSchema = v897;
    rv.getSchemaString = v900;
    rv.get = v903;
    rv.default = v909;
    rv.reset = v912;
    rv.has = v915;
    rv.set = v918;
    rv.load = v924;
    rv.loadFile = v934;
    rv.validate = v992;
    const v993 = typeof def;
    const v994 = v993 === 'string';
    if (v994) {
        const v995 = loadFile(def);
        rv._def = v995;
    } else {
        rv._def = def;
    }
    const v996 = {};
    const v997 = {};
    v997._cvtProperties = v996;
    rv._schema = v997;
    const v998 = {};
    rv._env = v998;
    const v999 = {};
    rv._argv = v999;
    rv._sensitive = new Set();
    const v1000 = rv._def;
    const v1001 = Object.keys(v1000);
    const v1010 = function (k) {
        const v1002 = rv._def;
        const v1003 = v1002[k];
        const v1004 = rv._schema;
        const v1005 = v1004._cvtProperties;
        const v1006 = rv._env;
        const v1007 = rv._argv;
        const v1008 = rv._sensitive;
        const v1009 = normalizeSchema(k, v1003, v1005, k, v1006, v1007, v1008);
        v1009;
    };
    const v1011 = v1001.forEach(v1010);
    v1011;
    const v1012 = {};
    rv._instance = v1012;
    const v1013 = rv._schema;
    const v1014 = rv._instance;
    const v1015 = addDefaultValues(v1013, v1014, rv);
    v1015;
    const v1016 = importEnvironment(rv);
    v1016;
    const v1017 = importArguments(rv);
    v1017;
    return rv;
};
const v1032 = function (name, validate, coerce) {
    const v1018 = typeof name;
    const v1019 = v1018 === 'object';
    if (v1019) {
        validate = name.validate;
        coerce = name.coerce;
        name = name.name;
    }
    const v1020 = typeof validate;
    const v1021 = v1020 !== 'function';
    if (v1021) {
        const v1022 = 'Validation function for ' + name;
        const v1023 = v1022 + ' must be a function.';
        const v1024 = new Error(v1023);
        throw v1024;
    }
    const v1025 = typeof coerce;
    const v1026 = v1025 !== 'function';
    const v1027 = coerce && v1026;
    if (v1027) {
        const v1028 = 'Coerce function for ' + name;
        const v1029 = v1028 + ' must be a function.';
        const v1030 = new Error(v1029);
        throw v1030;
    }
    types[name] = validate;
    if (coerce) {
        const v1031 = converters.set(name, coerce);
        v1031;
    }
};
convict.addFormat = v1032;
const v1041 = function (formats) {
    const v1033 = Object.keys(formats);
    const v1039 = function (type) {
        const v1034 = formats[type];
        const v1035 = v1034.validate;
        const v1036 = formats[type];
        const v1037 = v1036.coerce;
        const v1038 = convict.addFormat(type, v1035, v1037);
        v1038;
    };
    const v1040 = v1033.forEach(v1039);
    v1040;
};
convict.addFormats = v1041;
const v1070 = function (parsers) {
    const v1042 = Array.isArray(parsers);
    const v1043 = !v1042;
    if (v1043) {
        parsers = [parsers];
    }
    const v1068 = function (parser) {
        const v1044 = !parser;
        if (v1044) {
            const v1045 = new Error('Invalid parser');
            throw v1045;
        }
        const v1046 = parser.extension;
        const v1047 = !v1046;
        if (v1047) {
            const v1048 = new Error('Missing parser.extension');
            throw v1048;
        }
        const v1049 = parser.parse;
        const v1050 = !v1049;
        if (v1050) {
            const v1051 = new Error('Missing parser.parse function');
            throw v1051;
        }
        const v1052 = parser.parse;
        const v1053 = typeof v1052;
        const v1054 = v1053 !== 'function';
        if (v1054) {
            const v1055 = new Error('Invalid parser.parse function');
            throw v1055;
        }
        let extensions;
        const v1056 = parser.extension;
        const v1057 = Array.isArray(v1056);
        const v1058 = !v1057;
        const v1059 = parser.extension;
        const v1060 = [v1059];
        const v1061 = parser.extension;
        if (v1058) {
            extensions = v1060;
        } else {
            extensions = v1061;
        }
        const v1066 = function (extension) {
            const v1062 = typeof extension;
            const v1063 = v1062 !== 'string';
            if (v1063) {
                const v1064 = new Error('Invalid parser.extension');
                throw v1064;
            }
            const v1065 = parser.parse;
            parsers_registry[extension] = v1065;
        };
        const v1067 = extensions.forEach(v1066);
        v1067;
    };
    const v1069 = parsers.forEach(v1068);
    v1069;
};
convict.addParser = v1070;
module.exports = convict;