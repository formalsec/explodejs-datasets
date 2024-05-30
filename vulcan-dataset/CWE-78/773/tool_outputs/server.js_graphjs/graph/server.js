'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dns = require('dns');
const rpi_live_module = require('./pi_video_recording');
const globalConf = require('./config.json');
const v156 = { extended: true };
const v157 = bodyParser.urlencoded(v156);
const v158 = app.use(v157);
v158;
const v159 = bodyParser.json();
const v160 = app.use(v159);
v160;
const port = globalConf.port;
process.title = 'pi_video_recording';
const router = express.Router();
let state = 0;
let video = {};
let recordTimer;
const recordTimeout = globalConf.recordTimeout;
const allowedOrigins = globalConf.allowedOrigins;
const videoFolderPath = globalConf.writePath;
const v178 = function (req, res, next) {
    const v161 = req.headers;
    const v162 = v161.host;
    const v163 = v162.split(':');
    const host = v163[0];
    const v164 = req.connection;
    const v165 = v164.remoteAddress;
    const ip = v165.replace(/^.*:/, '');
    const v166 = `Request received from ${ host } -> ${ ip }`;
    const v167 = console.log(v166);
    v167;
    const v168 = allowedOrigins[0];
    const v169 = v168 == '*';
    if (v169) {
        const v170 = res.header('Access-Control-Allow-Origin', host);
        v170;
    } else {
        const v171 = allowedOrigins.indexOf(host);
        const v172 = -1;
        const v173 = v171 > v172;
        if (v173) {
            const v174 = res.header('Access-Control-Allow-Origin', host);
            v174;
        }
    }
    const v175 = res.header('Access-Control-Allow-Methods', 'GET,POST');
    v175;
    const v176 = res.header('Access-Control-Allow-Headers', 'Content-Type');
    v176;
    const v177 = next();
    v177;
};
const v179 = router.use(v178);
v179;
const v182 = function (req, res) {
    const v180 = { message: 'It works ! You\'re plugged into pi_video_recording' };
    const v181 = res.json(v180);
    v181;
};
const v183 = router.get('/', v182);
v183;
const v193 = function (req, res) {
    const v184 = console.log('Getting the state');
    v184;
    switch (state) {
    case 0:
        const v185 = {
            message: 'Raspberry is ready',
            state: state
        };
        const v186 = res.json(v185);
        v186;
        break;
    case 1:
        const v187 = {
            message: 'Live streaming is started',
            state: state
        };
        const v188 = res.json(v187);
        v188;
        break;
    case 2:
        const v189 = {
            message: 'video recording is started',
            state: state
        };
        const v190 = res.json(v189);
        v190;
        break;
    default:
        const v191 = res.status(500);
        v191;
        const v192 = res.send('Oops! There is a problem with the server');
        v192;
        break;
    }
};
const v194 = router.get('/state', v193);
v194;
const v195 = router.route('/live/start');
const v206 = function (req, res) {
    const v196 = globalConf.livePort;
    const v197 = `Starting the live on port ${ v196 }`;
    const v198 = console.log(v197);
    v198;
    const v199 = state == 0;
    if (v199) {
        const v200 = rpi_live_module.startLive();
        v200;
        state = 1;
        const v201 = { message: 'Starting the live !' };
        const v202 = res.json(v201);
        v202;
    } else {
        const v203 = res.status(401);
        v203;
        const v204 = { message: 'Server is buzy, please stop current task' };
        const v205 = res.json(v204);
        v205;
    }
};
const v207 = v195.post(v206);
v207;
const v208 = router.route('/live/stop');
const v218 = function (req, res) {
    const v209 = console.log('Stopping the live');
    v209;
    const v210 = state == 1;
    if (v210) {
        const v213 = function () {
            state = 0;
            const v211 = { message: 'Live stopped !' };
            const v212 = res.json(v211);
            v212;
        };
        const v214 = rpi_live_module.stopLive(v213);
        v214;
    } else {
        const v215 = res.status(401);
        v215;
        const v216 = { message: 'Server is buzy, please stop current task' };
        const v217 = res.json(v216);
        v217;
    }
};
const v219 = v208.post(v218);
v219;
const v220 = router.route('/record/start');
const v249 = function (req, res) {
    const v221 = console.log('Calling /record/start');
    v221;
    const v222 = req.body;
    let filename = v222.filename;
    const v223 = new Date();
    const v224 = v223.getTime();
    video.start = v224;
    const v225 = filename == undefined;
    if (v225) {
        const v226 = res.status(403);
        v226;
        const v227 = { message: 'This method requires filename parameter' };
        const v228 = res.json(v227);
        v228;
    } else {
        const v229 = state == 0;
        if (v229) {
            video.filename = `${ videoFolderPath }/${ filename }`;
            const v230 = video.filename;
            const v231 = `Trying to start record in ${ v230 }`;
            const v232 = console.log(v231);
            v232;
            const v233 = video.filename;
            const v234 = `${ v233 }`;
            const v235 = rpi_live_module.startRecord(v234);
            v235;
            state = 2;
            const v236 = video.filename;
            const v237 = { message: `Video recording started -> ${ v236 }` };
            const v238 = res.json(v237);
            v238;
            const v245 = function () {
                const v239 = video.filename;
                const v243 = function () {
                    const v240 = video.filename;
                    const v241 = `Timeout reached for file ${ v240 }`;
                    const v242 = console.log(v241);
                    v242;
                };
                const v244 = rpi_live_module.stopRecord(v239, v243);
                v244;
                video = {};
                state = 0;
            };
            recordTimer = setTimeout(v245, recordTimeout);
        } else {
            const v246 = res.status(401);
            v246;
            const v247 = { message: 'Server is buzy, please stop current task' };
            const v248 = res.json(v247);
            v248;
        }
    }
};
const v250 = v220.post(v249);
v250;
const v251 = router.route('/record/stop');
const v268 = function (req, res) {
    const v252 = console.log('Trying to stop video recording');
    v252;
    const v253 = state == 2;
    if (v253) {
        const v254 = clearTimeout(recordTimer);
        v254;
        const v255 = new Date();
        const v256 = v255.getTime();
        const v257 = video.start;
        video.length = v256 - v257;
        const v258 = video.filename;
        const v263 = function () {
            state = 0;
            const v259 = video.length;
            const v260 = video.filename;
            const v261 = {
                message: 'Video recording stopped !',
                length: v259,
                filename: v260
            };
            const v262 = res.json(v261);
            v262;
            video = {};
        };
        const v264 = rpi_live_module.stopRecord(v258, v263);
        v264;
    } else {
        const v265 = res.status(401);
        v265;
        const v266 = { message: 'Server is buzy, please stop current task' };
        const v267 = res.json(v266);
        v267;
    }
};
const v269 = v251.post(v268);
v269;
const v270 = app.use('/api', router);
v270;
const v271 = app.listen(port);
v271;
const v272 = 'Projet started on port ' + port;
const v273 = console.log(v272);
v273;