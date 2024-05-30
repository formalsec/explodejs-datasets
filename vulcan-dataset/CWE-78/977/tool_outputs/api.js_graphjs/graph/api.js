var request = require('request');
const API = function (domain) {
    this.domain = domain;
};
const v115 = API.prototype;
const v131 = function (name, password, cb) {
    var domain = this.domain;
    const v116 = 'http://' + domain;
    const v117 = v116 + '/admin/api/user/login';
    const v118 = {
        'name': name,
        'password': password
    };
    const v119 = JSON.stringify(v118);
    const v120 = {};
    v120['Content-type'] = 'application/json';
    const v121 = {
        url: v117,
        method: 'POST',
        body: v119,
        headers: v120
    };
    const v129 = function (error, response, body) {
        const v122 = !error;
        const v123 = response.statusCode;
        const v124 = v123 == 200;
        const v125 = v122 && v124;
        if (v125) {
            const v126 = JSON.parse(body);
            const v127 = cb(v126);
            v127;
        } else {
            const v128 = cb();
            v128;
        }
    };
    const v130 = request(v121, v129);
    v130;
};
v115.login = v131;
const v132 = API.prototype;
const v149 = function (user, widget, comment, cb) {
    var domain = this.domain;
    const v133 = user.id;
    const v134 = 'u=' + v133;
    var cookie = request.cookie(v134);
    var jar = request.jar();
    const v135 = jar.add(cookie);
    v135;
    var content = {};
    content.widget = widget;
    content.comment = comment;
    const v136 = 'http://' + domain;
    const v137 = v136 + '/admin/api/widget/commit';
    const v138 = {};
    v138['Content-type'] = 'application/json';
    const v139 = JSON.stringify(content);
    const v140 = {
        url: v137,
        headers: v138,
        jar: jar,
        method: 'POST',
        body: v139
    };
    const v147 = function (error, response, body) {
        const v141 = !error;
        const v142 = response.statusCode;
        const v143 = v142 == 200;
        const v144 = v141 && v143;
        if (v144) {
            const v145 = cb(200);
            v145;
        } else {
            const v146 = cb(403);
            v146;
        }
    };
    const v148 = request(v140, v147);
    v148;
};
v132.commit = v149;
const v150 = API.prototype;
const v169 = function (user, widgetName, cb) {
    var domain = this.domain;
    const v151 = user.id;
    const v152 = 'u=' + v151;
    var cookie = request.cookie(v152);
    var jar = request.jar();
    const v153 = jar.add(cookie);
    v153;
    const v154 = 'http://' + domain;
    const v155 = v154 + '/admin/api/widget/';
    const v156 = v155 + widgetName;
    const v157 = v156 + '/extInfo';
    const v158 = {};
    v158['Content-type'] = 'application/json';
    const v159 = {
        url: v157,
        headers: v158,
        jar: jar,
        method: 'GET'
    };
    const v167 = function (error, response, body) {
        const v160 = !error;
        const v161 = response.statusCode;
        const v162 = v161 == 200;
        const v163 = v160 && v162;
        if (v163) {
            const v164 = JSON.parse(body);
            const v165 = cb(v164);
            v165;
        } else {
            const v166 = cb(403);
            v166;
        }
    };
    const v168 = request(v159, v167);
    v168;
};
v150.loadWidgetExtInfo = v169;
const v170 = API.prototype;
const v187 = function (user, cb) {
    var domain = this.domain;
    const v171 = user.id;
    const v172 = 'u=' + v171;
    var cookie = request.cookie(v172);
    var jar = request.jar();
    const v173 = jar.add(cookie);
    v173;
    const v174 = 'http://' + domain;
    const v175 = v174 + '/admin/api/widget';
    const v176 = {};
    v176['Content-type'] = 'application/json';
    const v177 = {
        url: v175,
        headers: v176,
        jar: jar,
        method: 'GET'
    };
    const v185 = function (error, response, body) {
        const v178 = !error;
        const v179 = response.statusCode;
        const v180 = v179 == 200;
        const v181 = v178 && v180;
        if (v181) {
            const v182 = JSON.parse(body);
            const v183 = cb(v182);
            v183;
        } else {
            const v184 = cb(403);
            v184;
        }
    };
    const v186 = request(v177, v185);
    v186;
};
v170.loadAllWidget = v187;
const v188 = API.prototype;
const v205 = function (user, cb) {
    var domain = this.domain;
    const v189 = user.id;
    const v190 = 'u=' + v189;
    var cookie = request.cookie(v190);
    var jar = request.jar();
    const v191 = jar.add(cookie);
    v191;
    const v192 = 'http://' + domain;
    const v193 = v192 + '/admin/api/layout';
    const v194 = {};
    v194['Content-type'] = 'application/json';
    const v195 = {
        url: v193,
        headers: v194,
        jar: jar,
        method: 'GET'
    };
    const v203 = function (error, response, body) {
        const v196 = !error;
        const v197 = response.statusCode;
        const v198 = v197 == 200;
        const v199 = v196 && v198;
        if (v199) {
            const v200 = JSON.parse(body);
            const v201 = cb(v200);
            v201;
        } else {
            const v202 = cb(403);
            v202;
        }
    };
    const v204 = request(v195, v203);
    v204;
};
v188.loadAllLayout = v205;
const v206 = API.prototype;
const v222 = function (user, shopId, widget, cb) {
    var domain = this.domain;
    const v207 = user.id;
    const v208 = 'u=' + v207;
    var cookie = request.cookie(v208);
    var jar = request.jar();
    const v209 = jar.add(cookie);
    v209;
    const v210 = 'http://' + domain;
    const v211 = v210 + '/admin/wizardPreviewAction.action';
    const v212 = {};
    v212['Content-type'] = 'application/x-www-form-urlencoded';
    const v213 = 'shopId=' + shopId;
    const v214 = v213 + '&widgetString=';
    const v215 = JSON.stringify(widget);
    const v216 = encodeURIComponent(v215);
    const v217 = v214 + v216;
    const v218 = {
        url: v211,
        headers: v212,
        jar: jar,
        method: 'POST',
        body: v217
    };
    const v220 = function (error, response, body) {
        const v219 = cb(body);
        v219;
    };
    const v221 = request(v218, v220);
    v221;
};
v206.preview = v222;
const v223 = new API('alpha.wizard.dp');
const v224 = new API('beta.wizard.dp');
const v225 = new API('pre.wizard.dp');
const v226 = new API('wizard.dp');
var apiPool = {};
apiPool.alpha = v223;
apiPool.beta = v224;
apiPool.pre = v225;
apiPool.product = v226;
const v228 = function (env) {
    const v227 = apiPool[env];
    return v227;
};
exports.getAPI = v228;