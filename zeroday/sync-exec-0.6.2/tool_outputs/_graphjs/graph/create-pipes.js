const v20 = function () {
    var fs;
    var timeout;
    fs = require('fs');
    timeout = require('./timeout');
    const v19 = function () {
        var created;
        var dir;
        var i;
        var len;
        var name;
        var ref;
        var t_limit;
        var tmp_dir;
        const v7 = Date.now();
        t_limit = v7 + 1000;
        tmp_dir = '/tmp';
        ref = [
            'TMPDIR',
            'TMP',
            'TEMP'
        ];
        (i = 0, len = ref.length)
        let v8 = i < len;
        while (v8) {
            name = ref[i];
            const v10 = process.env;
            const v11 = (dir = v10[name]) != null;
            if (v11) {
                tmp_dir = dir.replace(/\/$/, '');
            }
            const v9 = i++;
            v8 = i < len;
        }
        let v12 = !created;
        while (v12) {
            try {
                const v13 = tmp_dir + '/sync-exec-';
                const v14 = Math.random();
                const v15 = v14 * 1000000000;
                const v16 = Math.floor(v15);
                dir = v13 + v16;
                const v17 = fs.mkdir(dir);
                v17;
                created = true;
            } catch (_error) {
            }
            const v18 = timeout(t_limit, 'Can not create sync-exec directory');
            v18;
            v12 = !created;
        }
        return dir;
    };
    module.exports = v19;
};
const v21 = v20.call(this);
v21;