const v165 = function () {
    'use strict';
    var fs = require('fs');
    const Storage = function (path, opts) {
        const v84 = {};
        opts = opts || v84;
        var db;
        const v85 = {};
        v85.path = path;
        const v86 = {
            value: v85,
            writable: false,
            enumerable: false
        };
        const v87 = Object.defineProperty(this, '___priv_bk___', v86);
        v87;
        const v88 = opts.strict;
        const v89 = !v88;
        const v90 = !v89;
        const v91 = {
            value: v90,
            writable: false,
            enumerable: false
        };
        const v92 = Object.defineProperty(this, '___priv_strict___', v91);
        v92;
        const v93 = opts.ws;
        const v94 = v93 || '  ';
        const v95 = {
            value: v94,
            writable: false,
            enumerable: false
        };
        const v96 = Object.defineProperty(this, '___priv_ws___', v95);
        v96;
        try {
            const v97 = fs.readFileSync(path);
            db = JSON.parse(v97);
        } catch (e) {
            db = {};
        }
        const v98 = Object.keys(db);
        const v100 = function (key) {
            const v99 = db[key];
            this[key] = v99;
        };
        const v101 = v98.forEach(v100, this);
        v101;
    };
    const v102 = Storage.prototype;
    const v108 = function (key) {
        const v103 = this.hasOwnProperty(key);
        if (v103) {
            const v104 = this.___priv_strict___;
            if (v104) {
                const v105 = this[key];
                const v106 = String(v105);
                return v106;
            } else {
                const v107 = this[key];
                return v107;
            }
        }
        return null;
    };
    v102.getItem = v108;
    const v109 = Storage.prototype;
    const v114 = function (key, val) {
        const v110 = val === undefined;
        if (v110) {
            this[key] = null;
        } else {
            const v111 = this.___priv_strict___;
            if (v111) {
                const v112 = String(val);
                this[key] = v112;
            } else {
                this[key] = val;
            }
        }
        const v113 = this.___save___();
        v113;
    };
    v109.setItem = v114;
    const v115 = Storage.prototype;
    const v119 = function (key) {
        const v116 = this[key];
        const v117 = delete v116;
        v117;
        const v118 = this.___save___();
        v118;
    };
    v115.removeItem = v119;
    const v120 = Storage.prototype;
    const v126 = function () {
        var self = this;
        const v121 = Object.keys(self);
        const v124 = function (key) {
            self[key] = undefined;
            const v122 = self[key];
            const v123 = delete v122;
            v123;
        };
        const v125 = v121.forEach(v124);
        v125;
    };
    v120.clear = v126;
    const v127 = Storage.prototype;
    const v130 = function (i) {
        i = i || 0;
        const v128 = Object.keys(this);
        const v129 = v128[i];
        return v129;
    };
    v127.key = v130;
    const v131 = Storage.prototype;
    const v134 = function () {
        const v132 = Object.keys(this);
        const v133 = v132.length;
        return v133;
    };
    const v135 = { get: v134 };
    const v136 = Object.defineProperty(v131, 'length', v135);
    v136;
    const v137 = Storage.prototype;
    const v160 = function () {
        var self = this;
        const v138 = this.___priv_bk___;
        const v139 = v138.path;
        const v140 = !v139;
        if (v140) {
            return;
        }
        const v141 = this.___priv_bk___;
        const v142 = v141.lock;
        if (v142) {
            const v143 = this.___priv_bk___;
            v143.wait = true;
            return;
        }
        const v144 = this.___priv_bk___;
        v144.lock = true;
        const v145 = this.___priv_bk___;
        const v146 = v145.path;
        const v147 = this.___priv_ws___;
        const v148 = JSON.stringify(this, null, v147);
        const v158 = function (e) {
            const v149 = self.___priv_bk___;
            v149.lock = false;
            if (e) {
                const v150 = self.___priv_bk___;
                const v151 = v150.path;
                const v152 = console.error('Could not write to database', v151);
                v152;
                const v153 = console.error(e);
                v153;
                return;
            }
            const v154 = self.___priv_bk___;
            const v155 = v154.wait;
            if (v155) {
                const v156 = self.___priv_bk___;
                v156.wait = false;
                const v157 = self.___save___();
                v157;
            }
        };
        const v159 = fs.writeFile(v146, v148, 'utf8', v158);
        v159;
    };
    v137.___save___ = v160;
    const v162 = function (path, opts) {
        const v161 = new Storage(path, opts);
        return v161;
    };
    const v163 = {
        value: v162,
        writable: false,
        enumerable: false
    };
    const v164 = Object.defineProperty(Storage, 'create', v163);
    v164;
    module.exports = Storage;
};
const v166 = v165();
v166;