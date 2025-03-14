'use strict';
const v39 = { value: true };
const v40 = Object.defineProperty(exports, '__esModule', v39);
v40;
const v41 = void 0;
exports.compile = v41;
exports.template = exports.compile;
const INPUT_VAR_NAME = 'it';
const QUOTE_CHAR = '"';
const ESCAPE_CHAR = '\\';
const compile = function (value, displayName = 'template') {
    let result = QUOTE_CHAR;
    let i = 0;
    const v42 = value.length;
    let v43 = i < v42;
    while (v43) {
        const char = value[i];
        const v45 = char === QUOTE_CHAR;
        const v46 = char === ESCAPE_CHAR;
        const v47 = v45 || v46;
        if (v47) {
            result += ESCAPE_CHAR;
        }
        const v48 = char === '{';
        const v49 = i + 1;
        const v50 = value[v49];
        const v51 = v50 === '{';
        const v52 = v48 && v51;
        if (v52) {
            const start = i + 2;
            let end = 0;
            let withinString = '';
            let j = start;
            const v53 = value.length;
            let v54 = j < v53;
            while (v54) {
                const char = value[j];
                if (withinString) {
                    const v56 = char === ESCAPE_CHAR;
                    if (v56) {
                        const v57 = j++;
                        v57;
                    } else {
                        const v58 = char === withinString;
                        if (v58) {
                            withinString = '';
                        }
                    }
                    continue;
                } else {
                    const v59 = char === '}';
                    const v60 = j + 1;
                    const v61 = value[v60];
                    const v62 = v61 === '}';
                    const v63 = v59 && v62;
                    if (v63) {
                        i = j + 1;
                        end = j;
                        break;
                    } else {
                        const v64 = char === '"';
                        const v65 = char === '\'';
                        const v66 = v64 || v65;
                        const v67 = char === '`';
                        const v68 = v66 || v67;
                        if (v68) {
                            withinString = char;
                        }
                    }
                }
                const v55 = j++;
                v54 = j < v53;
            }
            const v69 = !end;
            if (v69) {
                const v70 = new TypeError(`Template parameter not closed at ${ i }`);
                throw v70;
            }
            const v71 = value.slice(start, end);
            const param = v71.trim();
            let sep;
            const v72 = param[0];
            const v73 = v72 === '[';
            if (v73) {
                sep = '';
            } else {
                sep = '.';
            }
            result += `${ QUOTE_CHAR } + (${ INPUT_VAR_NAME }${ sep }${ param }) + ${ QUOTE_CHAR }`;
            continue;
        }
        result += char;
        const v44 = i++;
        v43 = i < v42;
    }
    result += QUOTE_CHAR;
    const v74 = `function ${ displayName }(${ INPUT_VAR_NAME }) { return ${ result }; }`;
    return v74;
};
exports.compile = compile;
const template = function (value, displayName) {
    const body = compile(value, displayName);
    const v75 = new Function(`return (${ body });`);
    const v76 = v75();
    return v76;
};
exports.template = template;