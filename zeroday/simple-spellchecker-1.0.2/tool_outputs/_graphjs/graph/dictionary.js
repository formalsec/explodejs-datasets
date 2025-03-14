const BinarySearch = require('binarysearch');
const Levenshtien = require('damerau-levenshtein');
const v1 = { 'sensitivity': 'accent' };
var Collator = new Intl.Collator(undefined, v1);
var SuggestRadius = 1000;
const Dictionary = function (wordlist) {
    this.wordlist = [];
    const v2 = this.setWordlist(wordlist);
    v2;
    const v3 = this.clearRegexs();
    v3;
};
const v4 = Dictionary.prototype;
const v10 = function () {
    const v5 = this.wordlist;
    const v6 = v5 != null;
    const v7 = this.wordlist;
    const v8 = v7.length;
    let v9;
    if (v6) {
        v9 = v8;
    } else {
        v9 = 0;
    }
    return v9;
};
v4.getLength = v10;
const v11 = Dictionary.prototype;
const v15 = function (wordlist) {
    const v12 = wordlist != null;
    const v13 = Array.isArray(wordlist);
    const v14 = v12 && v13;
    if (v14) {
        this.wordlist = wordlist;
    }
};
v11.setWordlist = v15;
const v16 = Dictionary.prototype;
const v28 = function (word) {
    var i = 0;
    const v17 = this.regexs;
    const v18 = v17.length;
    let v19 = i < v18;
    while (v19) {
        const v21 = this.regexs;
        const v22 = v21[i];
        const v23 = v22.test(word);
        if (v23) {
            return true;
        }
        const v20 = i++;
        v19 = i < v18;
    }
    const v24 = this.wordlist;
    const v25 = word.toLowerCase();
    const v26 = Collator.compare;
    var res = BinarySearch(v24, v25, v26);
    const v27 = res >= 0;
    return v27;
};
v16.spellCheck = v28;
const v29 = Dictionary.prototype;
const v32 = function (word) {
    const v30 = this.spellCheck(word);
    const v31 = !v30;
    return v31;
};
v29.isMisspelled = v32;
const v33 = Dictionary.prototype;
const v93 = function (word, limit, maxDistance) {
    var suggestions = [];
    const v34 = word != null;
    const v35 = word.length;
    const v36 = v35 > 0;
    const v37 = v34 && v36;
    if (v37) {
        word = word.toLowerCase();
        const v38 = limit == null;
        const v39 = isNaN(limit);
        const v40 = v38 || v39;
        const v41 = limit <= 0;
        const v42 = v40 || v41;
        if (v42) {
            limit = 5;
        }
        const v43 = maxDistance == null;
        const v44 = isNaN(maxDistance);
        const v45 = v43 || v44;
        const v46 = maxDistance <= 0;
        const v47 = v45 || v46;
        if (v47) {
            maxDistance = 2;
        }
        const v48 = word.length;
        const v49 = maxDistance >= v48;
        if (v49) {
            const v50 = word.length;
            maxDistance = v50 - 1;
        }
        const v51 = this.wordlist;
        const v52 = Collator.compare;
        var closest = BinarySearch.closest(v51, word, v52);
        var res = [];
        var i = 0;
        let v53 = i <= maxDistance;
        while (v53) {
            const v55 = [];
            const v56 = res.push(v55);
            v56;
            const v54 = i++;
            v53 = i <= maxDistance;
        }
        var k;
        var dist;
        var i = 0;
        let v57 = i < SuggestRadius;
        while (v57) {
            const v59 = i % 2;
            const v60 = v59 != 0;
            const v61 = i + 1;
            const v62 = v61 / 2;
            const v63 = -i;
            const v64 = v63 / 2;
            let v65;
            if (v60) {
                v65 = v62;
            } else {
                v65 = v64;
            }
            k = closest + v65;
            const v66 = k >= 0;
            const v67 = this.wordlist;
            const v68 = v67.length;
            const v69 = k < v68;
            const v70 = v66 && v69;
            if (v70) {
                const v71 = this.wordlist;
                const v72 = v71[k];
                const v73 = v72.toLowerCase();
                const v74 = Levenshtien(word, v73);
                dist = v74.steps;
                const v75 = dist <= maxDistance;
                if (v75) {
                    const v76 = res[dist];
                    const v77 = this.wordlist;
                    const v78 = v77[k];
                    const v79 = v76.push(v78);
                    v79;
                }
            }
            const v58 = i++;
            v57 = i < SuggestRadius;
        }
        var d = 0;
        const v80 = d <= maxDistance;
        const v81 = suggestions.length;
        const v82 = v81 < limit;
        let v83 = v80 && v82;
        while (v83) {
            const v85 = suggestions.length;
            var remaining = limit - v85;
            const v86 = res[d];
            const v87 = v86.length;
            const v88 = v87 > remaining;
            const v89 = res[d];
            const v90 = v89.slice(0, remaining);
            const v91 = res[d];
            let v92;
            if (v88) {
                v92 = v90;
            } else {
                v92 = v91;
            }
            suggestions = suggestions.concat(v92);
            const v84 = d++;
            v83 = v80 && v82;
        }
    }
    return suggestions;
};
v33.getSuggestions = v93;
const v94 = Dictionary.prototype;
const v120 = function (word, limit, maxDistance) {
    const v95 = limit + 1;
    var suggestions = this.getSuggestions(word, v95, maxDistance);
    const v96 = [];
    var res = {};
    res['misspelled'] = true;
    res['suggestions'] = v96;
    const v97 = suggestions.length;
    const v98 = v97 == 0;
    const v99 = suggestions[0];
    const v100 = v99.toLowerCase();
    const v101 = word.toLowerCase();
    const v102 = v100 != v101;
    res.misspelled = v98 || v102;
    res.suggestions = suggestions;
    const v103 = res.misspelled;
    const v104 = suggestions.length;
    const v105 = v104 > limit;
    const v106 = v103 && v105;
    if (v106) {
        const v107 = suggestions.slice(0, limit);
        res.suggestions = v107;
    }
    const v108 = res.misspelled;
    const v109 = !v108;
    if (v109) {
        const v110 = suggestions.length;
        const v111 = suggestions.slice(1, v110);
        res.suggestions = v111;
    }
    const v112 = res.misspelled;
    if (v112) {
        var i = 0;
        const v113 = this.regexs;
        const v114 = v113.length;
        let v115 = i < v114;
        while (v115) {
            const v117 = this.regexs;
            const v118 = v117[i];
            const v119 = v118.test(word);
            if (v119) {
                res.misspelled = false;
            }
            const v116 = i++;
            v115 = i < v114;
        }
    }
    return res;
};
v94.checkAndSuggest = v120;
const v121 = Dictionary.prototype;
const v124 = function (regex) {
    const v122 = this.regexs;
    const v123 = v122.push(regex);
    v123;
};
v121.addRegex = v124;
const v125 = Dictionary.prototype;
const v126 = function () {
    this.regexs = [];
};
v125.clearRegexs = v126;
module.exports = Dictionary;