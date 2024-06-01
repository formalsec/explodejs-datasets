var https = require('https');
var util = require('util');
var adaptiveAccountsMethods = [
    'AddBankAccount',
    'AddPaymentCard',
    'CheckComplianceStatus',
    'CreateAccount',
    'GetUserAgreement',
    'GetVerifiedStatus',
    'SetFundingSourceConfirmed',
    'UpdateComplianceStatus'
];
var adaptivePaymentsMethods = [
    'CancelPreapproval',
    'ConvertCurrency',
    'ExecutePayment',
    'GetFundingPlans',
    'GetShippingAddresses',
    'PreapprovalDetails',
    'SetPaymentOptions'
];
const merge = function (a, b) {
    let p;
    for (p in b) {
        try {
            const v170 = b[p];
            const v171 = v170.constructor;
            const v172 = v171 === Object;
            if (v172) {
                const v173 = a[p];
                const v174 = b[p];
                const v175 = merge(v173, v174);
                a[p] = v175;
            } else {
                const v176 = b[p];
                a[p] = v176;
            }
        } catch (e) {
            const v177 = b[p];
            a[p] = v177;
        }
    }
    return a;
};
const defaultPayload = function () {
    const v178 = {};
    v178.errorLanguage = 'en_US';
    v178.detailLevel = 'ReturnAll';
    const v179 = {};
    v179.requestEnvelope = v178;
    return v179;
};
const httpsPost = function (options, callback) {
    options.method = 'POST';
    const v180 = options.headers;
    const v181 = {};
    options.headers = v180 || v181;
    let data;
    const v182 = options.data;
    const v183 = typeof v182;
    const v184 = v183 !== 'string';
    const v185 = options.data;
    const v186 = JSON.stringify(v185);
    const v187 = options.data;
    if (v184) {
        data = v186;
    } else {
        data = v187;
    }
    const v188 = options.headers;
    const v189 = data.length;
    v188['Content-Length'] = v189;
    var req = https.request(options);
    const v198 = function (res) {
        var response = '';
        const v190 = res.setEncoding('utf8');
        v190;
        const v191 = function (chunk) {
            response += chunk;
        };
        const v192 = res.on('data', v191);
        v192;
        const v196 = function () {
            const v193 = res.statusCode;
            const v194 = {
                statusCode: v193,
                body: response
            };
            const v195 = callback(null, v194);
            return v195;
        };
        const v197 = res.on('end', v196);
        v197;
    };
    const v199 = req.on('response', v198);
    v199;
    const v201 = function (e) {
        const v200 = callback(e);
        v200;
    };
    const v202 = req.on('error', v201);
    v202;
    if (data) {
        const v203 = req.write(data);
        v203;
    }
    const v204 = req.end();
    v204;
};
var Paypal = function (config) {
    const v205 = !config;
    if (v205) {
        const v206 = new Error('Config is required');
        throw v206;
    }
    const v207 = config.userId;
    const v208 = !v207;
    if (v208) {
        const v209 = new Error('Config must have userId');
        throw v209;
    }
    const v210 = config.password;
    const v211 = !v210;
    if (v211) {
        const v212 = new Error('Config must have password');
        throw v212;
    }
    const v213 = config.signature;
    const v214 = !v213;
    if (v214) {
        const v215 = new Error('Config must have signature');
        throw v215;
    }
    const v216 = config.appId;
    const v217 = !v216;
    const v218 = config.sandbox;
    const v219 = !v218;
    const v220 = v217 && v219;
    if (v220) {
        const v221 = new Error('Config must have appId');
        throw v221;
    }
    var defaultConfig = {};
    defaultConfig.requestFormat = 'JSON';
    defaultConfig.responseFormat = 'JSON';
    defaultConfig.sandbox = false;
    defaultConfig.productionHostname = 'svcs.paypal.com';
    defaultConfig.sandboxHostname = 'svcs.sandbox.paypal.com';
    defaultConfig.appId = 'APP-80W284485P519543T';
    defaultConfig.approvalUrl = 'https://www.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey=%s';
    defaultConfig.sandboxApprovalUrl = 'https://www.sandbox.paypal.com/cgi-bin/webscr?cmd=_ap-payment&paykey=%s';
    defaultConfig.preapprovalUrl = 'https://www.paypal.com/webscr?cmd=_ap-preapproval&preapprovalkey=%s';
    defaultConfig.sandboxPreapprovalUrl = 'https://www.sandbox.paypal.com/webscr?cmd=_ap-preapproval&preapprovalkey=%s';
    const v222 = merge(defaultConfig, config);
    this.config = v222;
};
const v223 = Paypal.prototype;
const v263 = function (apiMethod, data, callback) {
    var config = this.config;
    const v224 = config.sandbox;
    const v225 = config.sandboxHostname;
    const v226 = config.productionHostname;
    let v227;
    if (v224) {
        v227 = v225;
    } else {
        v227 = v226;
    }
    const v228 = '/' + apiMethod;
    const v229 = config.userId;
    const v230 = config.password;
    const v231 = config.signature;
    const v232 = config.appId;
    const v233 = config.requestFormat;
    const v234 = config.responseFormat;
    const v235 = {};
    v235['X-PAYPAL-SECURITY-USERID'] = v229;
    v235['X-PAYPAL-SECURITY-PASSWORD'] = v230;
    v235['X-PAYPAL-SECURITY-SIGNATURE'] = v231;
    v235['X-PAYPAL-APPLICATION-ID'] = v232;
    v235['X-PAYPAL-REQUEST-DATA-FORMAT'] = v233;
    v235['X-PAYPAL-RESPONSE-DATA-FORMAT'] = v234;
    var options = {};
    options.hostname = v227;
    options.path = v228;
    options.data = data;
    options.headers = v235;
    const v236 = config.sandboxEmailAddress;
    if (v236) {
        const v237 = options.headers;
        const v238 = config.sandboxEmailAddress;
        v237['X-PAYPAL-SANDBOX-EMAIL-ADDRESS'] = v238;
    }
    const v239 = config.deviceIpAddress;
    if (v239) {
        const v240 = options.headers;
        const v241 = config.deviceIpAddress;
        v240['X-PAYPAL-DEVICE-IPADDRESS'] = v241;
    }
    const v261 = function (error, response) {
        if (error) {
            const v242 = callback(error);
            return v242;
        }
        var body = response.body;
        var statusCode = response.statusCode;
        const v243 = config.responseFormat;
        const v244 = v243 === 'JSON';
        if (v244) {
            try {
                body = JSON.parse(body);
            } catch (e) {
                var err = new Error('Invalid JSON Response Received');
                err.response = body;
                const v245 = response.statusCode;
                err.httpStatusCode = v245;
                const v246 = callback(err);
                return v246;
            }
        }
        const v247 = statusCode < 200;
        const v248 = statusCode >= 300;
        const v249 = v247 || v248;
        if (v249) {
            const v250 = 'Response Status: ' + statusCode;
            error = new Error(v250);
            error.response = body;
            error.httpStatusCode = statusCode;
            const v251 = callback(error);
            return v251;
        }
        body.httpStatusCode = statusCode;
        const v252 = body.responseEnvelope;
        const v253 = v252.ack;
        const v254 = /^(Success|SuccessWithWarning)$/.test(v253);
        if (v254) {
            const v255 = callback(null, body);
            v255;
        } else {
            const v256 = body.responseEnvelope;
            const v257 = v256.ack;
            const v258 = 'Response ack is ' + v257;
            const v259 = v258 + '. Check the response for more info';
            var err = new Error(v259);
            const v260 = callback(err, body);
            return v260;
        }
    };
    const v262 = httpsPost(options, v261);
    v262;
};
v223.callApi = v263;
const v264 = Paypal.prototype;
const v269 = function (payKey, callback) {
    const v265 = !payKey;
    if (v265) {
        const v266 = new Error('Required "payKey"');
        const v267 = callback(v266);
        return v267;
    }
    var data = defaultPayload();
    data.payKey = payKey;
    const v268 = this.callApi('AdaptivePayments/GetPaymentOptions', data, callback);
    v268;
};
v264.getPaymentOptions = v269;
const v270 = Paypal.prototype;
const v283 = function (params, callback) {
    const v271 = params.payKey;
    const v272 = !v271;
    const v273 = params.transactionId;
    const v274 = !v273;
    const v275 = v272 && v274;
    const v276 = params.trackingId;
    const v277 = !v276;
    const v278 = v275 && v277;
    if (v278) {
        const v279 = new Error('Required "payKey" or "transactionId" or "trackingId" on first param');
        const v280 = callback(v279);
        return v280;
    }
    const v281 = defaultPayload();
    var data = merge(v281, params);
    const v282 = this.callApi('AdaptivePayments/PaymentDetails', data, callback);
    v282;
};
v270.paymentDetails = v283;
const v284 = Paypal.prototype;
const v296 = function (data, callback) {
    var config = this.config;
    const v294 = function (err, res) {
        if (err) {
            const v285 = callback(err, res);
            return v285;
        }
        const v286 = res.paymentExecStatus;
        const v287 = v286 === 'CREATED';
        if (v287) {
            let url;
            const v288 = config.sandbox;
            const v289 = config.sandboxApprovalUrl;
            const v290 = config.approvalUrl;
            if (v288) {
                url = v289;
            } else {
                url = v290;
            }
            const v291 = res.payKey;
            const v292 = util.format(url, v291);
            res.paymentApprovalUrl = v292;
        }
        const v293 = callback(null, res);
        return v293;
    };
    const v295 = this.callApi('AdaptivePayments/Pay', data, v294);
    v295;
};
v284.pay = v296;
const v297 = Paypal.prototype;
const v308 = function (data, callback) {
    var config = this.config;
    const v306 = function (err, res) {
        if (err) {
            const v298 = callback(err, res);
            return v298;
        }
        const v299 = res.preapprovalKey;
        if (v299) {
            let url;
            const v300 = config.sandbox;
            const v301 = config.sandboxPreapprovalUrl;
            const v302 = config.preapprovalUrl;
            if (v300) {
                url = v301;
            } else {
                url = v302;
            }
            const v303 = res.preapprovalKey;
            const v304 = util.format(url, v303);
            res.preapprovalUrl = v304;
        }
        const v305 = callback(null, res);
        return v305;
    };
    const v307 = this.callApi('AdaptivePayments/Preapproval', data, v306);
    v307;
};
v297.preapproval = v308;
const v309 = Paypal.prototype;
const v322 = function (params, callback) {
    const v310 = params.payKey;
    const v311 = !v310;
    const v312 = params.transactionId;
    const v313 = !v312;
    const v314 = v311 && v313;
    const v315 = params.trackingId;
    const v316 = !v315;
    const v317 = v314 && v316;
    if (v317) {
        const v318 = new Error('Required "payKey" or "transactionId" or "trackingId" on first param');
        const v319 = callback(v318);
        return v319;
    }
    const v320 = defaultPayload();
    var data = merge(v320, params);
    const v321 = this.callApi('AdaptivePayments/Refund', data, callback);
    v321;
};
v309.refund = v322;
const v329 = function (method) {
    const v323 = method.charAt(0);
    const v324 = v323.toLowerCase();
    const v325 = method.slice(1);
    var prototypeMethodName = v324 + v325;
    var apiMethodName = 'AdaptivePayments/' + method;
    const v326 = Paypal.prototype;
    const v328 = function (data, callback) {
        const v327 = this.callApi(apiMethodName, data, callback);
        v327;
    };
    v326[prototypeMethodName] = v328;
};
const v330 = adaptivePaymentsMethods.forEach(v329);
v330;
const v337 = function (method) {
    const v331 = method.charAt(0);
    const v332 = v331.toLowerCase();
    const v333 = method.slice(1);
    var prototypeMethodName = v332 + v333;
    var apiMethodName = 'AdaptiveAccounts/' + method;
    const v334 = Paypal.prototype;
    const v336 = function (data, callback) {
        const v335 = this.callApi(apiMethodName, data, callback);
        v335;
    };
    v334[prototypeMethodName] = v336;
};
const v338 = adaptiveAccountsMethods.forEach(v337);
v338;
module.exports = Paypal;