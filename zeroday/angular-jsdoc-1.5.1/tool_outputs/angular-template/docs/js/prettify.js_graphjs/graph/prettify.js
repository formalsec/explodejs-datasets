var IN_GLOBAL_SCOPE = true;
window['PR_SHOULD_USE_CONTINUATION'] = true;
var prettyPrintOne;
var prettyPrint;
const v1465 = function () {
    var win = window;
    var FLOW_CONTROL_KEYWORDS = ['break,continue,do,else,for,if,return,while'];
    const v734 = 'auto,case,char,const,default,' + 'double,enum,extern,float,goto,inline,int,long,register,short,signed,';
    const v735 = v734 + 'sizeof,static,struct,switch,typedef,union,unsigned,void,volatile';
    var C_KEYWORDS = [
        FLOW_CONTROL_KEYWORDS,
        v735
    ];
    const v736 = 'catch,class,delete,false,import,' + 'new,operator,private,protected,public,this,throw,true,try,typeof';
    var COMMON_KEYWORDS = [
        C_KEYWORDS,
        v736
    ];
    const v737 = 'alignof,align_union,asm,axiom,bool,' + 'concept,concept_map,const_cast,constexpr,decltype,delegate,';
    const v738 = v737 + 'dynamic_cast,explicit,export,friend,generic,late_check,';
    const v739 = v738 + 'mutable,namespace,nullptr,property,reinterpret_cast,static_assert,';
    const v740 = v739 + 'static_cast,template,typeid,typename,using,virtual,where';
    var CPP_KEYWORDS = [
        COMMON_KEYWORDS,
        v740
    ];
    const v741 = 'abstract,assert,boolean,byte,extends,final,finally,implements,import,' + 'instanceof,interface,null,native,package,strictfp,super,synchronized,';
    const v742 = v741 + 'throws,transient';
    var JAVA_KEYWORDS = [
        COMMON_KEYWORDS,
        v742
    ];
    const v743 = 'abstract,as,base,bool,by,byte,checked,decimal,delegate,descending,' + 'dynamic,event,finally,fixed,foreach,from,group,implicit,in,interface,';
    const v744 = v743 + 'internal,into,is,let,lock,null,object,out,override,orderby,params,';
    const v745 = v744 + 'partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,';
    const v746 = v745 + 'unchecked,unsafe,ushort,var,virtual,where';
    var CSHARP_KEYWORDS = [
        COMMON_KEYWORDS,
        v746
    ];
    const v747 = 'all,and,by,catch,class,else,extends,false,finally,' + 'for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,';
    var COFFEE_KEYWORDS = v747 + 'throw,true,try,unless,until,when,while,yes';
    const v748 = 'debugger,eval,export,function,get,null,set,undefined,var,with,' + 'Infinity,NaN';
    var JSCRIPT_KEYWORDS = [
        COMMON_KEYWORDS,
        v748
    ];
    const v749 = 'caller,delete,die,do,dump,elsif,eval,exit,foreach,for,' + 'goto,if,import,last,local,my,next,no,our,print,package,redo,require,';
    var PERL_KEYWORDS = v749 + 'sub,undef,unless,until,use,wantarray,while,BEGIN,END';
    const v750 = 'and,as,assert,class,def,del,' + 'elif,except,exec,finally,from,global,import,in,is,lambda,';
    const v751 = v750 + 'nonlocal,not,or,pass,print,raise,try,with,yield,';
    const v752 = v751 + 'False,True,None';
    var PYTHON_KEYWORDS = [
        FLOW_CONTROL_KEYWORDS,
        v752
    ];
    const v753 = 'alias,and,begin,case,class,' + 'def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,';
    const v754 = v753 + 'rescue,retry,self,super,then,true,undef,unless,until,when,yield,';
    const v755 = v754 + 'BEGIN,END';
    var RUBY_KEYWORDS = [
        FLOW_CONTROL_KEYWORDS,
        v755
    ];
    const v756 = 'as,assert,const,copy,drop,' + 'enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,';
    const v757 = v756 + 'pub,pure,ref,self,static,struct,true,trait,type,unsafe,use';
    var RUST_KEYWORDS = [
        FLOW_CONTROL_KEYWORDS,
        v757
    ];
    const v758 = 'case,done,elif,esac,eval,fi,' + 'function,in,local,set,then,until';
    var SH_KEYWORDS = [
        FLOW_CONTROL_KEYWORDS,
        v758
    ];
    var ALL_KEYWORDS = [
        CPP_KEYWORDS,
        CSHARP_KEYWORDS,
        JSCRIPT_KEYWORDS,
        PERL_KEYWORDS,
        PYTHON_KEYWORDS,
        RUBY_KEYWORDS,
        SH_KEYWORDS
    ];
    var C_TYPES = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/;
    var PR_STRING = 'str';
    var PR_KEYWORD = 'kwd';
    var PR_COMMENT = 'com';
    var PR_TYPE = 'typ';
    var PR_LITERAL = 'lit';
    var PR_PUNCTUATION = 'pun';
    var PR_PLAIN = 'pln';
    var PR_TAG = 'tag';
    var PR_DECLARATION = 'dec';
    var PR_SOURCE = 'src';
    var PR_ATTRIB_NAME = 'atn';
    var PR_ATTRIB_VALUE = 'atv';
    var PR_NOCODE = 'nocode';
    var REGEXP_PRECEDER_PATTERN = '(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*';
    const combinePrefixPatterns = function (regexs) {
        var capturedGroupIndex = 0;
        var needToFoldCase = false;
        var ignoreCase = false;
        var i = 0;
        var n = regexs.length;
        let v759 = i < n;
        while (v759) {
            var regex = regexs[i];
            const v761 = regex.ignoreCase;
            if (v761) {
                ignoreCase = true;
            } else {
                const v762 = regex.source;
                const v763 = v762.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi, '');
                const v764 = /[a-z]/i.test(v763);
                if (v764) {
                    needToFoldCase = true;
                    ignoreCase = false;
                    break;
                }
            }
            const v760 = ++i;
            v759 = i < n;
        }
        var escapeCharToCodeUnit = {};
        escapeCharToCodeUnit['b'] = 8;
        escapeCharToCodeUnit['t'] = 9;
        escapeCharToCodeUnit['n'] = 10;
        escapeCharToCodeUnit['v'] = 11;
        escapeCharToCodeUnit['f'] = 12;
        escapeCharToCodeUnit['r'] = 13;
        const decodeEscape = function (charsetPart) {
            var cc0 = charsetPart.charCodeAt(0);
            const v765 = cc0 !== 92;
            if (v765) {
                return cc0;
            }
            var c1 = charsetPart.charAt(1);
            cc0 = escapeCharToCodeUnit[c1];
            if (cc0) {
                return cc0;
            } else {
                const v766 = '0' <= c1;
                const v767 = c1 <= '7';
                const v768 = v766 && v767;
                if (v768) {
                    const v769 = charsetPart.substring(1);
                    const v770 = parseInt(v769, 8);
                    return v770;
                } else {
                    const v771 = c1 === 'u';
                    const v772 = c1 === 'x';
                    const v773 = v771 || v772;
                    if (v773) {
                        const v774 = charsetPart.substring(2);
                        const v775 = parseInt(v774, 16);
                        return v775;
                    } else {
                        const v776 = charsetPart.charCodeAt(1);
                        return v776;
                    }
                }
            }
        };
        const encodeEscape = function (charCode) {
            const v777 = charCode < 32;
            if (v777) {
                const v778 = charCode < 16;
                let v779;
                if (v778) {
                    v779 = '\\x0';
                } else {
                    v779 = '\\x';
                }
                const v780 = charCode.toString(16);
                const v781 = v779 + v780;
                return v781;
            }
            var ch = String.fromCharCode(charCode);
            const v782 = ch === '\\';
            const v783 = ch === '-';
            const v784 = v782 || v783;
            const v785 = ch === ']';
            const v786 = v784 || v785;
            const v787 = ch === '^';
            const v788 = v786 || v787;
            const v789 = '\\' + ch;
            let v790;
            if (v788) {
                v790 = v789;
            } else {
                v790 = ch;
            }
            return v790;
        };
        const caseFoldCharset = function (charSet) {
            const v791 = charSet.length;
            const v792 = v791 - 1;
            const v793 = charSet.substring(1, v792);
            const v794 = '\\\\u[0-9A-Fa-f]{4}' + '|\\\\x[0-9A-Fa-f]{2}';
            const v795 = v794 + '|\\\\[0-3][0-7]{0,2}';
            const v796 = v795 + '|\\\\[0-7]{1,2}';
            const v797 = v796 + '|\\\\[\\s\\S]';
            const v798 = v797 + '|-';
            const v799 = v798 + '|[^-\\\\]';
            const v800 = new RegExp(v799, 'g');
            var charsetParts = v793.match(v800);
            var ranges = [];
            const v801 = charsetParts[0];
            var inverse = v801 === '^';
            var out = ['['];
            if (inverse) {
                const v802 = out.push('^');
                v802;
            }
            let i;
            if (inverse) {
                i = 1;
            } else {
                i = 0;
            }
            var n = charsetParts.length;
            let v803 = i < n;
            while (v803) {
                var p = charsetParts[i];
                const v805 = /\\[bdsw]/i.test(p);
                if (v805) {
                    const v806 = out.push(p);
                    v806;
                } else {
                    var start = decodeEscape(p);
                    var end;
                    const v807 = i + 2;
                    const v808 = v807 < n;
                    const v809 = i + 1;
                    const v810 = charsetParts[v809];
                    const v811 = '-' === v810;
                    const v812 = v808 && v811;
                    if (v812) {
                        const v813 = i + 2;
                        const v814 = charsetParts[v813];
                        end = decodeEscape(v814);
                        i += 2;
                    } else {
                        end = start;
                    }
                    const v815 = [
                        start,
                        end
                    ];
                    const v816 = ranges.push(v815);
                    v816;
                    const v817 = end < 65;
                    const v818 = start > 122;
                    const v819 = v817 || v818;
                    const v820 = !v819;
                    if (v820) {
                        const v821 = end < 65;
                        const v822 = start > 90;
                        const v823 = v821 || v822;
                        const v824 = !v823;
                        if (v824) {
                            const v825 = Math.max(65, start);
                            const v826 = v825 | 32;
                            const v827 = Math.min(end, 90);
                            const v828 = v827 | 32;
                            const v829 = [
                                v826,
                                v828
                            ];
                            const v830 = ranges.push(v829);
                            v830;
                        }
                        const v831 = end < 97;
                        const v832 = start > 122;
                        const v833 = v831 || v832;
                        const v834 = !v833;
                        if (v834) {
                            const v835 = Math.max(97, start);
                            const v836 = ~32;
                            const v837 = v835 & v836;
                            const v838 = Math.min(end, 122);
                            const v839 = ~32;
                            const v840 = v838 & v839;
                            const v841 = [
                                v837,
                                v840
                            ];
                            const v842 = ranges.push(v841);
                            v842;
                        }
                    }
                }
                const v804 = ++i;
                v803 = i < n;
            }
            const v850 = function (a, b) {
                const v843 = a[0];
                const v844 = b[0];
                const v845 = v843 - v844;
                const v846 = b[1];
                const v847 = a[1];
                const v848 = v846 - v847;
                const v849 = v845 || v848;
                return v849;
            };
            const v851 = ranges.sort(v850);
            v851;
            var consolidatedRanges = [];
            var lastRange = [];
            var i = 0;
            const v852 = ranges.length;
            let v853 = i < v852;
            while (v853) {
                var range = ranges[i];
                const v855 = range[0];
                const v856 = lastRange[1];
                const v857 = v856 + 1;
                const v858 = v855 <= v857;
                if (v858) {
                    const v859 = lastRange[1];
                    const v860 = range[1];
                    const v861 = Math.max(v859, v860);
                    lastRange[1] = v861;
                } else {
                    lastRange = range;
                    const v862 = consolidatedRanges.push(lastRange);
                    v862;
                }
                const v854 = ++i;
                v853 = i < v852;
            }
            var i = 0;
            const v863 = consolidatedRanges.length;
            let v864 = i < v863;
            while (v864) {
                var range = consolidatedRanges[i];
                const v866 = range[0];
                const v867 = encodeEscape(v866);
                const v868 = out.push(v867);
                v868;
                const v869 = range[1];
                const v870 = range[0];
                const v871 = v869 > v870;
                if (v871) {
                    const v872 = range[1];
                    const v873 = v872 + 1;
                    const v874 = range[0];
                    const v875 = v873 > v874;
                    if (v875) {
                        const v876 = out.push('-');
                        v876;
                    }
                    const v877 = range[1];
                    const v878 = encodeEscape(v877);
                    const v879 = out.push(v878);
                    v879;
                }
                const v865 = ++i;
                v864 = i < v863;
            }
            const v880 = out.push(']');
            v880;
            const v881 = out.join('');
            return v881;
        };
        const allowAnywhereFoldCaseAndRenumberGroups = function (regex) {
            const v882 = regex.source;
            const v883 = '(?:' + '\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]';
            const v884 = v883 + '|\\\\u[A-Fa-f0-9]{4}';
            const v885 = v884 + '|\\\\x[A-Fa-f0-9]{2}';
            const v886 = v885 + '|\\\\[0-9]+';
            const v887 = v886 + '|\\\\[^ux0-9]';
            const v888 = v887 + '|\\(\\?[:!=]';
            const v889 = v888 + '|[\\(\\)\\^]';
            const v890 = v889 + '|[^\\x5B\\x5C\\(\\)\\^]+';
            const v891 = v890 + ')';
            const v892 = new RegExp(v891, 'g');
            var parts = v882.match(v892);
            var n = parts.length;
            var capturedGroups = [];
            var i = 0;
            var groupIndex = 0;
            let v893 = i < n;
            while (v893) {
                var p = parts[i];
                const v895 = p === '(';
                if (v895) {
                    const v896 = ++groupIndex;
                    v896;
                } else {
                    const v897 = p.charAt(0);
                    const v898 = '\\' === v897;
                    if (v898) {
                        const v899 = p.substring(1);
                        const v900 = +v899;
                        var decimalValue = v900;
                        if (decimalValue) {
                            const v901 = decimalValue <= groupIndex;
                            if (v901) {
                                const v902 = -1;
                                capturedGroups[decimalValue] = v902;
                            } else {
                                const v903 = encodeEscape(decimalValue);
                                parts[i] = v903;
                            }
                        }
                    }
                }
                const v894 = ++i;
                v893 = i < n;
            }
            var i = 1;
            const v904 = capturedGroups.length;
            let v905 = i < v904;
            while (v905) {
                const v907 = -1;
                const v908 = capturedGroups[i];
                const v909 = v907 === v908;
                if (v909) {
                    const v910 = ++capturedGroupIndex;
                    capturedGroups[i] = v910;
                }
                const v906 = ++i;
                v905 = i < v904;
            }
            var i = 0;
            var groupIndex = 0;
            let v911 = i < n;
            while (v911) {
                var p = parts[i];
                const v913 = p === '(';
                if (v913) {
                    const v914 = ++groupIndex;
                    v914;
                    const v915 = capturedGroups[groupIndex];
                    const v916 = !v915;
                    if (v916) {
                        parts[i] = '(?:';
                    }
                } else {
                    const v917 = p.charAt(0);
                    const v918 = '\\' === v917;
                    if (v918) {
                        const v919 = p.substring(1);
                        const v920 = +v919;
                        var decimalValue = v920;
                        const v921 = decimalValue <= groupIndex;
                        const v922 = decimalValue && v921;
                        if (v922) {
                            const v923 = capturedGroups[decimalValue];
                            parts[i] = '\\' + v923;
                        }
                    }
                }
                const v912 = ++i;
                v911 = i < n;
            }
            var i = 0;
            let v924 = i < n;
            while (v924) {
                const v926 = parts[i];
                const v927 = '^' === v926;
                const v928 = i + 1;
                const v929 = parts[v928];
                const v930 = '^' !== v929;
                const v931 = v927 && v930;
                if (v931) {
                    parts[i] = '';
                }
                const v925 = ++i;
                v924 = i < n;
            }
            const v932 = regex.ignoreCase;
            const v933 = v932 && needToFoldCase;
            if (v933) {
                var i = 0;
                let v934 = i < n;
                while (v934) {
                    var p = parts[i];
                    var ch0 = p.charAt(0);
                    const v936 = p.length;
                    const v937 = v936 >= 2;
                    const v938 = ch0 === '[';
                    const v939 = v937 && v938;
                    if (v939) {
                        const v940 = caseFoldCharset(p);
                        parts[i] = v940;
                    } else {
                        const v941 = ch0 !== '\\';
                        if (v941) {
                            const v948 = function (ch) {
                                var cc = ch.charCodeAt(0);
                                const v942 = ~32;
                                const v943 = cc & v942;
                                const v944 = cc | 32;
                                const v945 = String.fromCharCode(v943, v944);
                                const v946 = '[' + v945;
                                const v947 = v946 + ']';
                                return v947;
                            };
                            const v949 = p.replace(/[a-zA-Z]/g, v948);
                            parts[i] = v949;
                        }
                    }
                    const v935 = ++i;
                    v934 = i < n;
                }
            }
            const v950 = parts.join('');
            return v950;
        };
        var rewritten = [];
        var i = 0;
        var n = regexs.length;
        let v951 = i < n;
        while (v951) {
            var regex = regexs[i];
            const v953 = regex.global;
            const v954 = regex.multiline;
            const v955 = v953 || v954;
            if (v955) {
                const v956 = '' + regex;
                const v957 = new Error(v956);
                throw v957;
            }
            const v958 = allowAnywhereFoldCaseAndRenumberGroups(regex);
            const v959 = '(?:' + v958;
            const v960 = v959 + ')';
            const v961 = rewritten.push(v960);
            v961;
            const v952 = ++i;
            v951 = i < n;
        }
        const v962 = rewritten.join('|');
        let v963;
        if (ignoreCase) {
            v963 = 'gi';
        } else {
            v963 = 'g';
        }
        const v964 = new RegExp(v962, v963);
        return v964;
    };
    const extractSourceSpans = function (node, isPreformatted) {
        var nocode = /(?:^|\s)nocode(?:\s|$)/;
        var chunks = [];
        var length = 0;
        var spans = [];
        var k = 0;
        const walk = function (node) {
            var type = node.nodeType;
            const v965 = type == 1;
            if (v965) {
                const v966 = node.className;
                const v967 = nocode.test(v966);
                if (v967) {
                    return;
                }
                var child = node.firstChild;
                while (child) {
                    const v968 = walk(child);
                    v968;
                }
                const v969 = node.nodeName;
                var nodeName = v969.toLowerCase();
                const v970 = 'br' === nodeName;
                const v971 = 'li' === nodeName;
                const v972 = v970 || v971;
                if (v972) {
                    chunks[k] = '\n';
                    const v973 = k << 1;
                    const v974 = length++;
                    spans[v973] = v974;
                    const v975 = k++;
                    const v976 = v975 << 1;
                    const v977 = v976 | 1;
                    spans[v977] = node;
                }
            } else {
                const v978 = type == 3;
                const v979 = type == 4;
                const v980 = v978 || v979;
                if (v980) {
                    var text = node.nodeValue;
                    const v981 = text.length;
                    if (v981) {
                        const v982 = !isPreformatted;
                        if (v982) {
                            text = text.replace(/[ \t\r\n]+/g, ' ');
                        } else {
                            text = text.replace(/\r\n?/g, '\n');
                        }
                        chunks[k] = text;
                        const v983 = k << 1;
                        spans[v983] = length;
                        length += text.length;
                        const v984 = k++;
                        const v985 = v984 << 1;
                        const v986 = v985 | 1;
                        spans[v986] = node;
                    }
                }
            }
        };
        const v987 = walk(node);
        v987;
        const v988 = chunks.join('');
        const v989 = v988.replace(/\n$/, '');
        const v990 = {};
        v990.sourceCode = v989;
        v990.spans = spans;
        return v990;
    };
    const appendDecorations = function (basePos, sourceCode, langHandler, out) {
        const v991 = !sourceCode;
        if (v991) {
            return;
        }
        var job = {};
        job.sourceCode = sourceCode;
        job.basePos = basePos;
        const v992 = langHandler(job);
        v992;
        const v993 = out.push;
        const v994 = job.decorations;
        const v995 = v993.apply(out, v994);
        v995;
    };
    var notWs = /\S/;
    const childContentWrapper = function (element) {
        var wrapper = undefined;
        var c = element.firstChild;
        while (c) {
            var type = c.nodeType;
            const v996 = type === 1;
            let v997;
            if (wrapper) {
                v997 = element;
            } else {
                v997 = c;
            }
            const v998 = type === 3;
            const v999 = c.nodeValue;
            const v1000 = notWs.test(v999);
            let v1001;
            if (v1000) {
                v1001 = element;
            } else {
                v1001 = wrapper;
            }
            let v1002;
            if (v998) {
                v1002 = v1001;
            } else {
                v1002 = wrapper;
            }
            if (v996) {
                wrapper = v997;
            } else {
                wrapper = v1002;
            }
        }
        const v1003 = wrapper === element;
        let v1004;
        if (v1003) {
            v1004 = undefined;
        } else {
            v1004 = wrapper;
        }
        return v1004;
    };
    const createSimpleLexer = function (shortcutStylePatterns, fallthroughStylePatterns) {
        var shortcuts = {};
        var tokenizer;
        const v1014 = function () {
            var allPatterns = shortcutStylePatterns.concat(fallthroughStylePatterns);
            var allRegexs = [];
            var regexKeys = {};
            var i = 0;
            var n = allPatterns.length;
            let v1005 = i < n;
            while (v1005) {
                var patternParts = allPatterns[i];
                var shortcutChars = patternParts[3];
                if (shortcutChars) {
                    var c = shortcutChars.length;
                    const v1007 = --c;
                    let v1008 = v1007 >= 0;
                    while (v1008) {
                        const v1009 = shortcutChars.charAt(c);
                        shortcuts[v1009] = patternParts;
                        v1008 = v1007 >= 0;
                    }
                }
                var regex = patternParts[1];
                var k = '' + regex;
                const v1010 = regexKeys.hasOwnProperty(k);
                const v1011 = !v1010;
                if (v1011) {
                    const v1012 = allRegexs.push(regex);
                    v1012;
                    regexKeys[k] = null;
                }
                const v1006 = ++i;
                v1005 = i < n;
            }
            const v1013 = allRegexs.push(/[\0-\uffff]/);
            v1013;
            tokenizer = combinePrefixPatterns(allRegexs);
        };
        const v1015 = v1014();
        v1015;
        var nPatterns = fallthroughStylePatterns.length;
        var decorate = function (job) {
            var sourceCode = job.sourceCode;
            var basePos = job.basePos;
            var decorations = [
                basePos,
                PR_PLAIN
            ];
            var pos = 0;
            const v1016 = sourceCode.match(tokenizer);
            const v1017 = [];
            var tokens = v1016 || v1017;
            var styleCache = {};
            var ti = 0;
            var nTokens = tokens.length;
            let v1018 = ti < nTokens;
            while (v1018) {
                var token = tokens[ti];
                var style = styleCache[token];
                const v1020 = void 0;
                var match = v1020;
                var isEmbedded;
                const v1021 = typeof style;
                const v1022 = v1021 === 'string';
                if (v1022) {
                    isEmbedded = false;
                } else {
                    const v1023 = token.charAt(0);
                    var patternParts = shortcuts[v1023];
                    if (patternParts) {
                        const v1024 = patternParts[1];
                        match = token.match(v1024);
                        style = patternParts[0];
                    } else {
                        var i = 0;
                        let v1025 = i < nPatterns;
                        while (v1025) {
                            patternParts = fallthroughStylePatterns[i];
                            const v1027 = patternParts[1];
                            match = token.match(v1027);
                            if (match) {
                                style = patternParts[0];
                                break;
                            }
                            const v1026 = ++i;
                            v1025 = i < nPatterns;
                        }
                        const v1028 = !match;
                        if (v1028) {
                            style = PR_PLAIN;
                        }
                    }
                    const v1029 = style.length;
                    const v1030 = v1029 >= 5;
                    const v1031 = style.substring(0, 5);
                    const v1032 = 'lang-' === v1031;
                    isEmbedded = v1030 && v1032;
                    const v1033 = match[1];
                    const v1034 = typeof v1033;
                    const v1035 = v1034 === 'string';
                    const v1036 = match && v1035;
                    const v1037 = !v1036;
                    const v1038 = isEmbedded && v1037;
                    if (v1038) {
                        isEmbedded = false;
                        style = PR_SOURCE;
                    }
                    const v1039 = !isEmbedded;
                    if (v1039) {
                        styleCache[token] = style;
                    }
                }
                var tokenStart = pos;
                pos += token.length;
                const v1040 = !isEmbedded;
                if (v1040) {
                    const v1041 = basePos + tokenStart;
                    const v1042 = decorations.push(v1041, style);
                    v1042;
                } else {
                    var embeddedSource = match[1];
                    var embeddedSourceStart = token.indexOf(embeddedSource);
                    const v1043 = embeddedSource.length;
                    var embeddedSourceEnd = embeddedSourceStart + v1043;
                    const v1044 = match[2];
                    if (v1044) {
                        const v1045 = token.length;
                        const v1046 = match[2];
                        const v1047 = v1046.length;
                        embeddedSourceEnd = v1045 - v1047;
                        const v1048 = embeddedSource.length;
                        embeddedSourceStart = embeddedSourceEnd - v1048;
                    }
                    var lang = style.substring(5);
                    const v1049 = basePos + tokenStart;
                    const v1050 = token.substring(0, embeddedSourceStart);
                    const v1051 = appendDecorations(v1049, v1050, decorate, decorations);
                    v1051;
                    const v1052 = basePos + tokenStart;
                    const v1053 = v1052 + embeddedSourceStart;
                    const v1054 = langHandlerForExtension(lang, embeddedSource);
                    const v1055 = appendDecorations(v1053, embeddedSource, v1054, decorations);
                    v1055;
                    const v1056 = basePos + tokenStart;
                    const v1057 = v1056 + embeddedSourceEnd;
                    const v1058 = token.substring(embeddedSourceEnd);
                    const v1059 = appendDecorations(v1057, v1058, decorate, decorations);
                    v1059;
                }
                const v1019 = ++ti;
                v1018 = ti < nTokens;
            }
            job.decorations = decorations;
        };
        return decorate;
    };
    const sourceDecorator = function (options) {
        var shortcutStylePatterns = [];
        var fallthroughStylePatterns = [];
        const v1060 = options['tripleQuotedStrings'];
        if (v1060) {
            const v1061 = [
                PR_STRING,
                /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
                null,
                '\'"'
            ];
            const v1062 = shortcutStylePatterns.push(v1061);
            v1062;
        } else {
            const v1063 = options['multiLineStrings'];
            if (v1063) {
                const v1064 = [
                    PR_STRING,
                    /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,
                    null,
                    '\'"`'
                ];
                const v1065 = shortcutStylePatterns.push(v1064);
                v1065;
            } else {
                const v1066 = [
                    PR_STRING,
                    /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,
                    null,
                    '"\''
                ];
                const v1067 = shortcutStylePatterns.push(v1066);
                v1067;
            }
        }
        const v1068 = options['verbatimStrings'];
        if (v1068) {
            const v1069 = [
                PR_STRING,
                /^@\"(?:[^\"]|\"\")*(?:\"|$)/,
                null
            ];
            const v1070 = fallthroughStylePatterns.push(v1069);
            v1070;
        }
        var hc = options['hashComments'];
        if (hc) {
            const v1071 = options['cStyleComments'];
            if (v1071) {
                const v1072 = hc > 1;
                if (v1072) {
                    const v1073 = [
                        PR_COMMENT,
                        /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,
                        null,
                        '#'
                    ];
                    const v1074 = shortcutStylePatterns.push(v1073);
                    v1074;
                } else {
                    const v1075 = [
                        PR_COMMENT,
                        /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\r\n]*)/,
                        null,
                        '#'
                    ];
                    const v1076 = shortcutStylePatterns.push(v1075);
                    v1076;
                }
                const v1077 = [
                    PR_STRING,
                    /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,
                    null
                ];
                const v1078 = fallthroughStylePatterns.push(v1077);
                v1078;
            } else {
                const v1079 = [
                    PR_COMMENT,
                    /^#[^\r\n]*/,
                    null,
                    '#'
                ];
                const v1080 = shortcutStylePatterns.push(v1079);
                v1080;
            }
        }
        const v1081 = options['cStyleComments'];
        if (v1081) {
            const v1082 = [
                PR_COMMENT,
                /^\/\/[^\r\n]*/,
                null
            ];
            const v1083 = fallthroughStylePatterns.push(v1082);
            v1083;
            const v1084 = [
                PR_COMMENT,
                /^\/\*[\s\S]*?(?:\*\/|$)/,
                null
            ];
            const v1085 = fallthroughStylePatterns.push(v1084);
            v1085;
        }
        var regexLiterals = options['regexLiterals'];
        if (regexLiterals) {
            let regexExcls;
            const v1086 = regexLiterals > 1;
            if (v1086) {
                regexExcls = '';
            } else {
                regexExcls = '\n\r';
            }
            let regexAny;
            if (regexExcls) {
                regexAny = '.';
            } else {
                regexAny = '[\\S\\s]';
            }
            const v1087 = '/(?=[^/*' + regexExcls;
            const v1088 = v1087 + '])';
            const v1089 = v1088 + '(?:[^/\\x5B\\x5C';
            const v1090 = v1089 + regexExcls;
            const v1091 = v1090 + ']';
            const v1092 = v1091 + '|\\x5C';
            const v1093 = v1092 + regexAny;
            const v1094 = v1093 + '|\\x5B(?:[^\\x5C\\x5D';
            const v1095 = v1094 + regexExcls;
            const v1096 = v1095 + ']';
            const v1097 = v1096 + '|\\x5C';
            const v1098 = v1097 + regexAny;
            const v1099 = v1098 + ')*(?:\\x5D|$))+';
            var REGEX_LITERAL = v1099 + '/';
            const v1100 = '^' + REGEXP_PRECEDER_PATTERN;
            const v1101 = v1100 + '(';
            const v1102 = v1101 + REGEX_LITERAL;
            const v1103 = v1102 + ')';
            const v1104 = RegExp(v1103);
            const v1105 = [
                'lang-regex',
                v1104
            ];
            const v1106 = fallthroughStylePatterns.push(v1105);
            v1106;
        }
        var types = options['types'];
        if (types) {
            const v1107 = [
                PR_TYPE,
                types
            ];
            const v1108 = fallthroughStylePatterns.push(v1107);
            v1108;
        }
        const v1109 = options['keywords'];
        const v1110 = '' + v1109;
        var keywords = v1110.replace(/^ | $/g, '');
        const v1111 = keywords.length;
        if (v1111) {
            const v1112 = keywords.replace(/[\s,]+/g, '|');
            const v1113 = '^(?:' + v1112;
            const v1114 = v1113 + ')\\b';
            const v1115 = new RegExp(v1114);
            const v1116 = [
                PR_KEYWORD,
                v1115,
                null
            ];
            const v1117 = fallthroughStylePatterns.push(v1116);
            v1117;
        }
        const v1118 = [
            PR_PLAIN,
            /^\s+/,
            null,
            ' \r\n\t\xA0'
        ];
        const v1119 = shortcutStylePatterns.push(v1118);
        v1119;
        var punctuation = '^.[^\\s\\w.$@\'"`/\\\\]*';
        const v1120 = options['regexLiterals'];
        if (v1120) {
            punctuation += '(?!s*/)';
        }
        const v1121 = [
            PR_LITERAL,
            /^@[a-z_$][a-z_$@0-9]*/i,
            null
        ];
        const v1122 = [
            PR_TYPE,
            /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,
            null
        ];
        const v1123 = [
            PR_PLAIN,
            /^[a-z_$][a-z_$@0-9]*/i,
            null
        ];
        const v1124 = '^(?:' + '0x[a-f0-9]+';
        const v1125 = v1124 + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)';
        const v1126 = v1125 + '(?:e[+\\-]?\\d+)?';
        const v1127 = v1126 + ')';
        const v1128 = v1127 + '[a-z]*';
        const v1129 = new RegExp(v1128, 'i');
        const v1130 = [
            PR_LITERAL,
            v1129,
            null,
            '0123456789'
        ];
        const v1131 = [
            PR_PLAIN,
            /^\\[\s\S]?/,
            null
        ];
        const v1132 = new RegExp(punctuation);
        const v1133 = [
            PR_PUNCTUATION,
            v1132,
            null
        ];
        const v1134 = fallthroughStylePatterns.push(v1121, v1122, v1123, v1130, v1131, v1133);
        v1134;
        const v1135 = createSimpleLexer(shortcutStylePatterns, fallthroughStylePatterns);
        return v1135;
    };
    const v1136 = {
        'keywords': ALL_KEYWORDS,
        'hashComments': true,
        'cStyleComments': true,
        'multiLineStrings': true,
        'regexLiterals': true
    };
    var decorateSource = sourceDecorator(v1136);
    const numberLines = function (node, opt_startLineNum, isPreformatted) {
        var nocode = /(?:^|\s)nocode(?:\s|$)/;
        var lineBreak = /\r\n?|\n/;
        var document = node.ownerDocument;
        var li = document.createElement('li');
        let v1137 = node.firstChild;
        while (v1137) {
            const v1138 = node.firstChild;
            const v1139 = li.appendChild(v1138);
            v1139;
            v1137 = node.firstChild;
        }
        var listItems = [li];
        const walk = function (node) {
            var type = node.nodeType;
            const v1140 = type == 1;
            const v1141 = node.className;
            const v1142 = nocode.test(v1141);
            const v1143 = !v1142;
            const v1144 = v1140 && v1143;
            if (v1144) {
                const v1145 = node.nodeName;
                const v1146 = 'br' === v1145;
                if (v1146) {
                    const v1147 = breakAfter(node);
                    v1147;
                    const v1148 = node.parentNode;
                    if (v1148) {
                        const v1149 = node.parentNode;
                        const v1150 = v1149.removeChild(node);
                        v1150;
                    }
                } else {
                    var child = node.firstChild;
                    while (child) {
                        const v1151 = walk(child);
                        v1151;
                    }
                }
            } else {
                const v1152 = type == 3;
                const v1153 = type == 4;
                const v1154 = v1152 || v1153;
                const v1155 = v1154 && isPreformatted;
                if (v1155) {
                    var text = node.nodeValue;
                    var match = text.match(lineBreak);
                    if (match) {
                        const v1156 = match.index;
                        var firstLine = text.substring(0, v1156);
                        node.nodeValue = firstLine;
                        const v1157 = match.index;
                        const v1158 = match[0];
                        const v1159 = v1158.length;
                        const v1160 = v1157 + v1159;
                        var tail = text.substring(v1160);
                        if (tail) {
                            var parent = node.parentNode;
                            const v1161 = document.createTextNode(tail);
                            const v1162 = node.nextSibling;
                            const v1163 = parent.insertBefore(v1161, v1162);
                            v1163;
                        }
                        const v1164 = breakAfter(node);
                        v1164;
                        const v1165 = !firstLine;
                        if (v1165) {
                            const v1166 = node.parentNode;
                            const v1167 = v1166.removeChild(node);
                            v1167;
                        }
                    }
                }
            }
        };
        const breakAfter = function (lineEndNode) {
            const v1168 = lineEndNode.nextSibling;
            let v1169 = !v1168;
            while (v1169) {
                lineEndNode = lineEndNode.parentNode;
                const v1170 = !lineEndNode;
                if (v1170) {
                    return;
                }
                v1169 = !v1168;
            }
            const breakLeftOf = function (limit, copy) {
                let rightSide;
                const v1171 = limit.cloneNode(false);
                if (copy) {
                    rightSide = v1171;
                } else {
                    rightSide = limit;
                }
                var parent = limit.parentNode;
                if (parent) {
                    var parentClone = breakLeftOf(parent, 1);
                    var next = limit.nextSibling;
                    const v1172 = parentClone.appendChild(rightSide);
                    v1172;
                    var sibling = next;
                    while (sibling) {
                        next = sibling.nextSibling;
                        const v1173 = parentClone.appendChild(sibling);
                        v1173;
                    }
                }
                return rightSide;
            };
            const v1174 = lineEndNode.nextSibling;
            var copiedListItem = breakLeftOf(v1174, 0);
            var parent;
            const v1175 = parent.nodeType;
            const v1176 = v1175 === 1;
            let v1177 = (parent = copiedListItem.parentNode) && v1176;
            while (v1177) {
                copiedListItem = parent;
                v1177 = (parent = copiedListItem.parentNode) && v1176;
            }
            const v1178 = listItems.push(copiedListItem);
            v1178;
        };
        var i = 0;
        const v1179 = listItems.length;
        let v1180 = i < v1179;
        while (v1180) {
            const v1182 = listItems[i];
            const v1183 = walk(v1182);
            v1183;
            const v1181 = ++i;
            v1180 = i < v1179;
        }
        const v1184 = opt_startLineNum | 0;
        const v1185 = opt_startLineNum === v1184;
        if (v1185) {
            const v1186 = listItems[0];
            const v1187 = v1186.setAttribute('value', opt_startLineNum);
            v1187;
        }
        var ol = document.createElement('ol');
        ol.className = 'linenums';
        const v1188 = opt_startLineNum - 1;
        const v1189 = v1188 | 0;
        const v1190 = Math.max(0, v1189);
        var offset = v1190 || 0;
        var i = 0;
        var n = listItems.length;
        let v1191 = i < n;
        while (v1191) {
            li = listItems[i];
            const v1193 = i + offset;
            const v1194 = v1193 % 10;
            li.className = 'L' + v1194;
            const v1195 = li.firstChild;
            const v1196 = !v1195;
            if (v1196) {
                const v1197 = document.createTextNode('\xA0');
                const v1198 = li.appendChild(v1197);
                v1198;
            }
            const v1199 = ol.appendChild(li);
            v1199;
            const v1192 = ++i;
            v1191 = i < n;
        }
        const v1200 = node.appendChild(ol);
        v1200;
    };
    const recombineTagsAndDecorations = function (job) {
        const v1201 = navigator.userAgent;
        var isIE8OrEarlier = /\bMSIE\s(\d+)/.exec(v1201);
        const v1202 = isIE8OrEarlier[1];
        const v1203 = +v1202;
        const v1204 = v1203 <= 8;
        isIE8OrEarlier = isIE8OrEarlier && v1204;
        var newlineRe = /\n/g;
        var source = job.sourceCode;
        var sourceLength = source.length;
        var sourceIndex = 0;
        var spans = job.spans;
        var nSpans = spans.length;
        var spanIndex = 0;
        var decorations = job.decorations;
        var nDecorations = decorations.length;
        var decorationIndex = 0;
        decorations[nDecorations] = sourceLength;
        var decPos;
        var i;
        decPos = 0;
        let v1205 = i < nDecorations;
        while (v1205) {
            const v1206 = decorations[i];
            const v1207 = i + 2;
            const v1208 = decorations[v1207];
            const v1209 = v1206 !== v1208;
            if (v1209) {
                const v1210 = decPos++;
                const v1211 = i++;
                const v1212 = decorations[v1211];
                decorations[v1210] = v1212;
                const v1213 = decPos++;
                const v1214 = i++;
                const v1215 = decorations[v1214];
                decorations[v1213] = v1215;
            } else {
                i += 2;
            }
            v1205 = i < nDecorations;
        }
        nDecorations = decPos;
        decPos = 0;
        let v1216 = i < nDecorations;
        while (v1216) {
            var startPos = decorations[i];
            const v1217 = i + 1;
            var startDec = decorations[v1217];
            var end = i + 2;
            const v1218 = end + 2;
            const v1219 = v1218 <= nDecorations;
            const v1220 = end + 1;
            const v1221 = decorations[v1220];
            const v1222 = v1221 === startDec;
            let v1223 = v1219 && v1222;
            while (v1223) {
                end += 2;
                v1223 = v1219 && v1222;
            }
            const v1224 = decPos++;
            decorations[v1224] = startPos;
            const v1225 = decPos++;
            decorations[v1225] = startDec;
            i = end;
            v1216 = i < nDecorations;
        }
        decorations.length = decPos;
        nDecorations = decorations.length;
        var sourceNode = job.sourceNode;
        var oldDisplay;
        if (sourceNode) {
            const v1226 = sourceNode.style;
            oldDisplay = v1226.display;
            const v1227 = sourceNode.style;
            v1227.display = 'none';
        }
        try {
            var decoration = null;
            let v1228 = spanIndex < nSpans;
            while (v1228) {
                var spanStart = spans[spanIndex];
                const v1229 = spanIndex + 2;
                const v1230 = spans[v1229];
                var spanEnd = v1230 || sourceLength;
                const v1231 = decorationIndex + 2;
                const v1232 = decorations[v1231];
                var decEnd = v1232 || sourceLength;
                var end = Math.min(spanEnd, decEnd);
                const v1233 = spanIndex + 1;
                var textNode = spans[v1233];
                var styledText;
                const v1234 = textNode.nodeType;
                const v1235 = v1234 !== 1;
                const v1236 = v1235 && (styledText = source.substring(sourceIndex, end));
                if (v1236) {
                    if (isIE8OrEarlier) {
                        styledText = styledText.replace(newlineRe, '\r');
                    }
                    textNode.nodeValue = styledText;
                    var document = textNode.ownerDocument;
                    var span = document.createElement('span');
                    const v1237 = decorationIndex + 1;
                    const v1238 = decorations[v1237];
                    span.className = v1238;
                    var parentNode = textNode.parentNode;
                    const v1239 = parentNode.replaceChild(span, textNode);
                    v1239;
                    const v1240 = span.appendChild(textNode);
                    v1240;
                    const v1241 = sourceIndex < spanEnd;
                    if (v1241) {
                        const v1242 = spanIndex + 1;
                        const v1243 = source.substring(end, spanEnd);
                        textNode = document.createTextNode(v1243);
                        spans[v1242] = textNode;
                        const v1244 = span.nextSibling;
                        const v1245 = parentNode.insertBefore(textNode, v1244);
                        v1245;
                    }
                }
                sourceIndex = end;
                const v1246 = sourceIndex >= spanEnd;
                if (v1246) {
                    spanIndex += 2;
                }
                const v1247 = sourceIndex >= decEnd;
                if (v1247) {
                    decorationIndex += 2;
                }
                v1228 = spanIndex < nSpans;
            }
        } finally {
            if (sourceNode) {
                const v1248 = sourceNode.style;
                v1248.display = oldDisplay;
            }
        }
    };
    var langHandlerRegistry = {};
    const registerLangHandler = function (handler, fileExtensions) {
        var i = fileExtensions.length;
        const v1249 = --i;
        let v1250 = v1249 >= 0;
        while (v1250) {
            var ext = fileExtensions[i];
            const v1251 = langHandlerRegistry.hasOwnProperty(ext);
            const v1252 = !v1251;
            if (v1252) {
                langHandlerRegistry[ext] = handler;
            } else {
                const v1253 = win['console'];
                if (v1253) {
                    const v1254 = console['warn']('cannot override language handler %s', ext);
                    v1254;
                }
            }
            v1250 = v1249 >= 0;
        }
    };
    const langHandlerForExtension = function (extension, source) {
        const v1255 = langHandlerRegistry.hasOwnProperty(extension);
        const v1256 = extension && v1255;
        const v1257 = !v1256;
        if (v1257) {
            const v1258 = /^\s*</.test(source);
            if (v1258) {
                extension = 'default-markup';
            } else {
                extension = 'default-code';
            }
        }
        const v1259 = langHandlerRegistry[extension];
        return v1259;
    };
    const v1260 = ['default-code'];
    const v1261 = registerLangHandler(decorateSource, v1260);
    v1261;
    const v1262 = [];
    const v1263 = [
        PR_PLAIN,
        /^[^<?]+/
    ];
    const v1264 = [
        PR_DECLARATION,
        /^<!\w[^>]*(?:>|$)/
    ];
    const v1265 = [
        PR_COMMENT,
        /^<\!--[\s\S]*?(?:-\->|$)/
    ];
    const v1266 = [
        'lang-',
        /^<\?([\s\S]+?)(?:\?>|$)/
    ];
    const v1267 = [
        'lang-',
        /^<%([\s\S]+?)(?:%>|$)/
    ];
    const v1268 = [
        PR_PUNCTUATION,
        /^(?:<[%?]|[%?]>)/
    ];
    const v1269 = [
        'lang-',
        /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i
    ];
    const v1270 = [
        'lang-js',
        /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i
    ];
    const v1271 = [
        'lang-css',
        /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i
    ];
    const v1272 = [
        'lang-in.tag',
        /^(<\/?[a-z][^<>]*>)/i
    ];
    const v1273 = [
        v1263,
        v1264,
        v1265,
        v1266,
        v1267,
        v1268,
        v1269,
        v1270,
        v1271,
        v1272
    ];
    const v1274 = createSimpleLexer(v1262, v1273);
    const v1275 = [
        'default-markup',
        'htm',
        'html',
        'mxml',
        'xhtml',
        'xml',
        'xsl'
    ];
    const v1276 = registerLangHandler(v1274, v1275);
    v1276;
    const v1277 = [
        PR_PLAIN,
        /^[\s]+/,
        null,
        ' \t\r\n'
    ];
    const v1278 = [
        PR_ATTRIB_VALUE,
        /^(?:\"[^\"]*\"?|\'[^\']*\'?)/,
        null,
        '"\''
    ];
    const v1279 = [
        v1277,
        v1278
    ];
    const v1280 = [
        PR_TAG,
        /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i
    ];
    const v1281 = [
        PR_ATTRIB_NAME,
        /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i
    ];
    const v1282 = [
        'lang-uq.val',
        /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/
    ];
    const v1283 = [
        PR_PUNCTUATION,
        /^[=<>\/]+/
    ];
    const v1284 = [
        'lang-js',
        /^on\w+\s*=\s*\"([^\"]+)\"/i
    ];
    const v1285 = [
        'lang-js',
        /^on\w+\s*=\s*\'([^\']+)\'/i
    ];
    const v1286 = [
        'lang-js',
        /^on\w+\s*=\s*([^\"\'>\s]+)/i
    ];
    const v1287 = [
        'lang-css',
        /^style\s*=\s*\"([^\"]+)\"/i
    ];
    const v1288 = [
        'lang-css',
        /^style\s*=\s*\'([^\']+)\'/i
    ];
    const v1289 = [
        'lang-css',
        /^style\s*=\s*([^\"\'>\s]+)/i
    ];
    const v1290 = [
        v1280,
        v1281,
        v1282,
        v1283,
        v1284,
        v1285,
        v1286,
        v1287,
        v1288,
        v1289
    ];
    const v1291 = createSimpleLexer(v1279, v1290);
    const v1292 = ['in.tag'];
    const v1293 = registerLangHandler(v1291, v1292);
    v1293;
    const v1294 = [];
    const v1295 = [
        PR_ATTRIB_VALUE,
        /^[\s\S]+/
    ];
    const v1296 = [v1295];
    const v1297 = createSimpleLexer(v1294, v1296);
    const v1298 = ['uq.val'];
    const v1299 = registerLangHandler(v1297, v1298);
    v1299;
    const v1300 = {
        'keywords': CPP_KEYWORDS,
        'hashComments': true,
        'cStyleComments': true,
        'types': C_TYPES
    };
    const v1301 = sourceDecorator(v1300);
    const v1302 = [
        'c',
        'cc',
        'cpp',
        'cxx',
        'cyc',
        'm'
    ];
    const v1303 = registerLangHandler(v1301, v1302);
    v1303;
    const v1304 = { 'keywords': 'null,true,false' };
    const v1305 = sourceDecorator(v1304);
    const v1306 = ['json'];
    const v1307 = registerLangHandler(v1305, v1306);
    v1307;
    const v1308 = {
        'keywords': CSHARP_KEYWORDS,
        'hashComments': true,
        'cStyleComments': true,
        'verbatimStrings': true,
        'types': C_TYPES
    };
    const v1309 = sourceDecorator(v1308);
    const v1310 = ['cs'];
    const v1311 = registerLangHandler(v1309, v1310);
    v1311;
    const v1312 = {
        'keywords': JAVA_KEYWORDS,
        'cStyleComments': true
    };
    const v1313 = sourceDecorator(v1312);
    const v1314 = ['java'];
    const v1315 = registerLangHandler(v1313, v1314);
    v1315;
    const v1316 = {
        'keywords': SH_KEYWORDS,
        'hashComments': true,
        'multiLineStrings': true
    };
    const v1317 = sourceDecorator(v1316);
    const v1318 = [
        'bash',
        'bsh',
        'csh',
        'sh'
    ];
    const v1319 = registerLangHandler(v1317, v1318);
    v1319;
    const v1320 = {
        'keywords': PYTHON_KEYWORDS,
        'hashComments': true,
        'multiLineStrings': true,
        'tripleQuotedStrings': true
    };
    const v1321 = sourceDecorator(v1320);
    const v1322 = [
        'cv',
        'py',
        'python'
    ];
    const v1323 = registerLangHandler(v1321, v1322);
    v1323;
    const v1324 = {
        'keywords': PERL_KEYWORDS,
        'hashComments': true,
        'multiLineStrings': true,
        'regexLiterals': 2
    };
    const v1325 = sourceDecorator(v1324);
    const v1326 = [
        'perl',
        'pl',
        'pm'
    ];
    const v1327 = registerLangHandler(v1325, v1326);
    v1327;
    const v1328 = {
        'keywords': RUBY_KEYWORDS,
        'hashComments': true,
        'multiLineStrings': true,
        'regexLiterals': true
    };
    const v1329 = sourceDecorator(v1328);
    const v1330 = [
        'rb',
        'ruby'
    ];
    const v1331 = registerLangHandler(v1329, v1330);
    v1331;
    const v1332 = {
        'keywords': JSCRIPT_KEYWORDS,
        'cStyleComments': true,
        'regexLiterals': true
    };
    const v1333 = sourceDecorator(v1332);
    const v1334 = [
        'javascript',
        'js'
    ];
    const v1335 = registerLangHandler(v1333, v1334);
    v1335;
    const v1336 = {
        'keywords': COFFEE_KEYWORDS,
        'hashComments': 3,
        'cStyleComments': true,
        'multilineStrings': true,
        'tripleQuotedStrings': true,
        'regexLiterals': true
    };
    const v1337 = sourceDecorator(v1336);
    const v1338 = ['coffee'];
    const v1339 = registerLangHandler(v1337, v1338);
    v1339;
    const v1340 = {
        'keywords': RUST_KEYWORDS,
        'cStyleComments': true,
        'multilineStrings': true
    };
    const v1341 = sourceDecorator(v1340);
    const v1342 = [
        'rc',
        'rs',
        'rust'
    ];
    const v1343 = registerLangHandler(v1341, v1342);
    v1343;
    const v1344 = [];
    const v1345 = [
        PR_STRING,
        /^[\s\S]+/
    ];
    const v1346 = [v1345];
    const v1347 = createSimpleLexer(v1344, v1346);
    const v1348 = ['regex'];
    const v1349 = registerLangHandler(v1347, v1348);
    v1349;
    const applyDecorator = function (job) {
        var opt_langExtension = job.langExtension;
        try {
            const v1350 = job.sourceNode;
            const v1351 = job.pre;
            var sourceAndSpans = extractSourceSpans(v1350, v1351);
            var source = sourceAndSpans.sourceCode;
            job.sourceCode = source;
            const v1352 = sourceAndSpans.spans;
            job.spans = v1352;
            job.basePos = 0;
            const v1353 = langHandlerForExtension(opt_langExtension, source);
            const v1354 = v1353(job);
            v1354;
            const v1355 = recombineTagsAndDecorations(job);
            v1355;
        } catch (e) {
            const v1356 = win['console'];
            if (v1356) {
                const v1357 = e['stack'];
                const v1358 = e && v1357;
                const v1359 = v1358 || e;
                const v1360 = console['log'](v1359);
                v1360;
            }
        }
    };
    const $prettyPrintOne = function (sourceCodeHtml, opt_langExtension, opt_numberLines) {
        var container = document.createElement('div');
        const v1361 = '<pre>' + sourceCodeHtml;
        container.innerHTML = v1361 + '</pre>';
        container = container.firstChild;
        if (opt_numberLines) {
            const v1362 = numberLines(container, opt_numberLines, true);
            v1362;
        }
        var job = {};
        job.langExtension = opt_langExtension;
        job.numberLines = opt_numberLines;
        job.sourceNode = container;
        job.pre = 1;
        const v1363 = applyDecorator(job);
        v1363;
        const v1364 = container.innerHTML;
        return v1364;
    };
    const $prettyPrint = function (opt_whenDone, opt_root) {
        const v1365 = document.body;
        var root = opt_root || v1365;
        const v1366 = root.ownerDocument;
        var doc = v1366 || document;
        const byTagName = function (tn) {
            const v1367 = root.getElementsByTagName(tn);
            return v1367;
        };
        const v1368 = byTagName('pre');
        const v1369 = byTagName('code');
        const v1370 = byTagName('xmp');
        var codeSegments = [
            v1368,
            v1369,
            v1370
        ];
        var elements = [];
        var i = 0;
        const v1371 = codeSegments.length;
        let v1372 = i < v1371;
        while (v1372) {
            var j = 0;
            const v1374 = codeSegments[i];
            var n = v1374.length;
            let v1375 = j < n;
            while (v1375) {
                const v1377 = codeSegments[i];
                const v1378 = v1377[j];
                const v1379 = elements.push(v1378);
                v1379;
                const v1376 = ++j;
                v1375 = j < n;
            }
            const v1373 = ++i;
            v1372 = i < v1371;
        }
        codeSegments = null;
        var clock = Date;
        const v1380 = clock['now'];
        const v1381 = !v1380;
        if (v1381) {
            const v1384 = function () {
                const v1382 = new Date();
                const v1383 = +v1382;
                return v1383;
            };
            clock['now'] = v1384;
            clock = {};
            clock = {};
        }
        var k = 0;
        var prettyPrintingJob;
        var langExtensionRe = /\blang(?:uage)?-([\w.]+)(?!\S)/;
        var prettyPrintRe = /\bprettyprint\b/;
        var prettyPrintedRe = /\bprettyprinted\b/;
        var preformattedTagNameRe = /pre|xmp/i;
        var codeRe = /^code$/i;
        var preCodeXmpRe = /^(?:pre|code|xmp)$/i;
        var EMPTY = {};
        const doWork = function () {
            let endTime;
            const v1385 = win['PR_SHOULD_USE_CONTINUATION'];
            const v1386 = clock['now']();
            const v1387 = v1386 + 250;
            if (v1385) {
                endTime = v1387;
            } else {
                endTime = Infinity;
            }
            const v1388 = elements.length;
            const v1389 = k < v1388;
            const v1390 = clock['now']();
            const v1391 = v1390 < endTime;
            let v1392 = v1389 && v1391;
            while (v1392) {
                var cs = elements[k];
                var attrs = EMPTY;
                {
                    var preceder = cs;
                    while (preceder = preceder.previousSibling) {
                        var nt = preceder.nodeType;
                        const v1394 = nt === 7;
                        const v1395 = nt === 8;
                        const v1396 = v1394 || v1395;
                        const v1397 = preceder.nodeValue;
                        var value = v1396 && v1397;
                        const v1398 = /^\??prettify\b/.test(value);
                        const v1399 = !v1398;
                        const v1400 = nt !== 3;
                        const v1401 = preceder.nodeValue;
                        const v1402 = /\S/.test(v1401);
                        const v1403 = v1400 || v1402;
                        let v1404;
                        if (value) {
                            v1404 = v1399;
                        } else {
                            v1404 = v1403;
                        }
                        if (v1404) {
                            break;
                        }
                        if (value) {
                            attrs = {};
                            const v1405 = function (_, name, value) {
                                attrs[name] = value;
                            };
                            const v1406 = value.replace(/\b(\w+)=([\w:.%+-]+)/g, v1405);
                            v1406;
                            break;
                        }
                    }
                }
                var className = cs.className;
                const v1407 = attrs !== EMPTY;
                const v1408 = prettyPrintRe.test(className);
                const v1409 = v1407 || v1408;
                const v1410 = prettyPrintedRe.test(className);
                const v1411 = !v1410;
                const v1412 = v1409 && v1411;
                if (v1412) {
                    var nested = false;
                    var p = cs.parentNode;
                    while (p) {
                        var tn = p.tagName;
                        const v1413 = preCodeXmpRe.test(tn);
                        const v1414 = p.className;
                        const v1415 = v1413 && v1414;
                        const v1416 = p.className;
                        const v1417 = prettyPrintRe.test(v1416);
                        const v1418 = v1415 && v1417;
                        if (v1418) {
                            nested = true;
                            break;
                        }
                    }
                    const v1419 = !nested;
                    if (v1419) {
                        cs.className += ' prettyprinted';
                        var langExtension = attrs['lang'];
                        const v1420 = !langExtension;
                        if (v1420) {
                            langExtension = className.match(langExtensionRe);
                            var wrapper;
                            const v1421 = !langExtension;
                            const v1422 = v1421 && (wrapper = childContentWrapper(cs));
                            const v1423 = wrapper.tagName;
                            const v1424 = codeRe.test(v1423);
                            const v1425 = v1422 && v1424;
                            if (v1425) {
                                const v1426 = wrapper.className;
                                langExtension = v1426.match(langExtensionRe);
                            }
                            if (langExtension) {
                                langExtension = langExtension[1];
                            }
                        }
                        var preformatted;
                        const v1427 = cs.tagName;
                        const v1428 = preformattedTagNameRe.test(v1427);
                        if (v1428) {
                            preformatted = 1;
                        } else {
                            var currentStyle = cs['currentStyle'];
                            var defaultView = doc.defaultView;
                            let whitespace;
                            const v1429 = currentStyle['whiteSpace'];
                            const v1430 = defaultView.getComputedStyle;
                            const v1431 = defaultView && v1430;
                            const v1432 = defaultView.getComputedStyle(cs, null);
                            const v1433 = v1432.getPropertyValue('white-space');
                            let v1434;
                            if (v1431) {
                                v1434 = v1433;
                            } else {
                                v1434 = 0;
                            }
                            if (currentStyle) {
                                whitespace = v1429;
                            } else {
                                whitespace = v1434;
                            }
                            const v1435 = whitespace.substring(0, 3);
                            const v1436 = 'pre' === v1435;
                            preformatted = whitespace && v1436;
                        }
                        var lineNums = attrs['linenums'];
                        const v1437 = lineNums === 'true';
                        const v1438 = +lineNums;
                        const v1439 = !(lineNums = v1437 || v1438);
                        if (v1439) {
                            lineNums = className.match(/\blinenums\b(?::(\d+))?/);
                            const v1440 = lineNums[1];
                            const v1441 = lineNums[1];
                            const v1442 = v1441.length;
                            const v1443 = v1440 && v1442;
                            const v1444 = lineNums[1];
                            const v1445 = +v1444;
                            let v1446;
                            if (v1443) {
                                v1446 = v1445;
                            } else {
                                v1446 = true;
                            }
                            if (lineNums) {
                                lineNums = v1446;
                            } else {
                                lineNums = false;
                            }
                        }
                        if (lineNums) {
                            const v1447 = numberLines(cs, lineNums, preformatted);
                            v1447;
                        }
                        prettyPrintingJob.langExtension = langExtension;
                        prettyPrintingJob.sourceNode = cs;
                        prettyPrintingJob.numberLines = lineNums;
                        prettyPrintingJob.pre = preformatted;
                        prettyPrintingJob = {};
                        prettyPrintingJob = {};
                        const v1448 = applyDecorator(prettyPrintingJob);
                        v1448;
                    }
                }
                const v1393 = k++;
                v1392 = v1389 && v1391;
            }
            const v1449 = elements.length;
            const v1450 = k < v1449;
            if (v1450) {
                const v1451 = setTimeout(doWork, 250);
                v1451;
            } else {
                const v1452 = typeof opt_whenDone;
                const v1453 = 'function' === v1452;
                if (v1453) {
                    const v1454 = opt_whenDone();
                    v1454;
                }
            }
        };
        const v1455 = doWork();
        v1455;
    };
    let v1456;
    if (IN_GLOBAL_SCOPE) {
        win['prettyPrintOne'] = $prettyPrintOne;
        v1456 = win['prettyPrintOne'];
    } else {
        v1456 = prettyPrintOne = $prettyPrintOne;
    }
    if (IN_GLOBAL_SCOPE) {
        prettyPrint = win['prettyPrint'] = $prettyPrint;
    } else {
        prettyPrint = prettyPrint = $prettyPrint;
    }
    const v1457 = {};
    v1457['createSimpleLexer'] = createSimpleLexer;
    v1457['registerLangHandler'] = registerLangHandler;
    v1457['sourceDecorator'] = sourceDecorator;
    v1457['PR_ATTRIB_NAME'] = PR_ATTRIB_NAME;
    v1457['PR_ATTRIB_VALUE'] = PR_ATTRIB_VALUE;
    v1457['PR_COMMENT'] = PR_COMMENT;
    v1457['PR_DECLARATION'] = PR_DECLARATION;
    v1457['PR_KEYWORD'] = PR_KEYWORD;
    v1457['PR_LITERAL'] = PR_LITERAL;
    v1457['PR_NOCODE'] = PR_NOCODE;
    v1457['PR_PLAIN'] = PR_PLAIN;
    v1457['PR_PUNCTUATION'] = PR_PUNCTUATION;
    v1457['PR_SOURCE'] = PR_SOURCE;
    v1457['PR_STRING'] = PR_STRING;
    v1457['PR_TAG'] = PR_TAG;
    v1457['PR_TYPE'] = PR_TYPE;
    v1457['prettyPrintOne'] = v1456;
    win['PR'] = v1457;
    var PR = win['PR'];
    const v1458 = typeof define;
    const v1459 = v1458 === 'function';
    const v1460 = define['amd'];
    const v1461 = v1459 && v1460;
    if (v1461) {
        const v1462 = [];
        const v1463 = function () {
            return PR;
        };
        const v1464 = define('google-code-prettify', v1462, v1463);
        v1464;
    }
};
const v1466 = v1465();
v1466;