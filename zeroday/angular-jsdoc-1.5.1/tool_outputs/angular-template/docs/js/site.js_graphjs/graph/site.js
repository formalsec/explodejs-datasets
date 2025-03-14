const v33 = document.getElementById('toc');
var tocElements = v33.getElementsByTagName('a');
const v34 = document.getElementById('filter-input');
const v63 = function (e) {
    var i;
    var element;
    const v35 = e.keyCode;
    const v36 = v35 === 13;
    if (v36) {
        i = 0
        const v37 = tocElements.length;
        let v38 = i < v37;
        while (v38) {
            element = tocElements[i];
            const v40 = element.classList;
            const v41 = v40.contains('hide');
            const v42 = !v41;
            if (v42) {
                const v43 = element.href;
                const v44 = location.replace(v43);
                v44;
                const v45 = e.preventDefault();
                return v45;
            }
            const v39 = i++;
            v38 = i < v37;
        }
    }
    var match = function () {
        return true;
    };
    const v46 = this.value;
    var value = v46.toLowerCase();
    const v47 = value.match(/^\s*$/);
    const v48 = !v47;
    if (v48) {
        const v53 = function (text) {
            const v49 = text.toLowerCase();
            const v50 = v49.indexOf(value);
            const v51 = -1;
            const v52 = v50 !== v51;
            return v52;
        };
        match = v53;
    }
    (i = 0)
    const v54 = tocElements.length;
    let v55 = i < v54;
    while (v55) {
        element = tocElements[i];
        const v57 = element.innerHTML;
        const v58 = match(v57);
        if (v58) {
            const v59 = element.classList;
            const v60 = v59.remove('hide');
            v60;
        } else {
            const v61 = element.classList;
            const v62 = v61.add('hide');
            v62;
        }
        const v56 = i++;
        v55 = i < v54;
    }
};
const v64 = v34.addEventListener('keyup', v63);
v64;