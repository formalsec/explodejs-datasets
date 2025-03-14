const v61 = function () {
    var fs;
    var timeout;
    fs = require('fs');
    timeout = require('./timeout');
    const v60 = function (dir, max_wait) {
        var deleted;
        var i;
        var len;
        var pipe;
        var read;
        var ref;
        var result;
        var t_limit;
        const v38 = Date.now();
        t_limit = v38 + max_wait;
        let v39 = !read;
        while (v39) {
            try {
                const v40 = dir + '/done';
                const v41 = fs.readFileSync(v40);
                const v42 = v41.length;
                if (v42) {
                    read = true;
                }
            } catch (_error) {
            }
            const v43 = timeout(t_limit, 'Process execution timeout or exit flag read failure');
            v43;
            v39 = !read;
        }
        let v44 = !deleted;
        while (v44) {
            try {
                const v45 = dir + '/done';
                const v46 = fs.unlinkSync(v45);
                v46;
                deleted = true;
            } catch (_error) {
            }
            const v47 = timeout(t_limit, 'Can not delete exit code file');
            v47;
            v44 = !deleted;
        }
        result = {};
        ref = [
            'stdout',
            'stderr',
            'status'
        ];
        (i = 0, len = ref.length)
        let v48 = i < len;
        while (v48) {
            pipe = ref[i];
            const v50 = dir + '/';
            const v51 = v50 + pipe;
            const v52 = { encoding: 'utf-8' };
            const v53 = fs.readFileSync(v51, v52);
            result[pipe] = v53;
            read = true;
            const v54 = dir + '/';
            const v55 = v54 + pipe;
            const v56 = fs.unlinkSync(v55);
            v56;
            const v49 = i++;
            v48 = i < len;
        }
        try {
            const v57 = fs.rmdirSync(dir);
            v57;
        } catch (_error) {
        }
        const v58 = result.status;
        const v59 = Number(v58);
        result.status = v59;
        return result;
    };
    module.exports = v60;
};
const v62 = v61.call(this);
v62;