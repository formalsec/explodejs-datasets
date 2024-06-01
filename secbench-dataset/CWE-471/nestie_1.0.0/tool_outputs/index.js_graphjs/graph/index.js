const empty = function (key) {
    var char = key.charCodeAt(0);
    const v19 = char > 47;
    const v20 = char < 58;
    const v21 = v19 && v20;
    const v22 = [];
    const v23 = {};
    let v24;
    if (v21) {
        v24 = v22;
    } else {
        v24 = v23;
    }
    return v24;
};
const nestie = function (input, glue) {
    glue = glue || '.';
    var arr;
    var tmp;
    var output;
    var i = 0;
    var k;
    var key;
    for (k in input) {
        tmp = output;
        arr = k.split(glue);
        i = 0
        const v25 = arr.length;
        let v26 = i < v25;
        while (v26) {
            const v27 = i++;
            key = arr[v27];
            const v28 = tmp == null;
            if (v28) {
                const v29 = '' + key;
                tmp = empty(v29);
                output = output || tmp;
            }
            const v30 = arr.length;
            const v31 = i < v30;
            if (v31) {
                const v32 = key in tmp;
                if (v32) {
                    tmp = tmp[key];
                } else {
                    const v33 = arr[i];
                    const v34 = '' + v33;
                    const v35 = empty(v34);
                    tmp.key = v35;
                    tmp = tmp[key];
                }
            } else {
                const v36 = input[k];
                tmp[key] = v36;
            }
            v26 = i < v25;
        }
    }
    return output;
};
exports.nestie = nestie;