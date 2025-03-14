'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dns = require('dns');
const rpi_live_module = require('./pi_video_recording');
const globalConf = require('./config.json');
const v157 = { extended: true };
const v158 = bodyParser.urlencoded(v157);
const v159 = app.use(v158);
v159;
const v160 = bodyParser.json();
const v161 = app.use(v160);
v161;
const port = globalConf.port;
process.title = 'pi_video_recording';
const router = express.Router();
let state = 0;
let video = {};
let recordTimer;
const recordTimeout = globalConf.recordTimeout;
const allowedOrigins = globalConf.allowedOrigins;
const videoFolderPath = globalConf.writePath;
const v179 = function (req, res, next) {
    const v162 = req.headers;
    const v163 = v162.host;
    const v164 = v163.split(':');
    const host = v164[0];
    const v165 = req.connection;
    const v166 = v165.remoteAddress;
    const ip = v166.replace(/^.*:/, '');
    const v167 = `Request received from ${ host } -> ${ ip }`;
    const v168 = console.log(v167);
    v168;
    const v169 = allowedOrigins[0];
    const v170 = v169 == '*';
    if (v170) {
        const v171 = res.header('Access-Control-Allow-Origin', host);
        v171;
    } else {
        const v172 = allowedOrigins.indexOf(host);
        const v173 = -1;
        const v174 = v172 > v173;
        if (v174) {
            const v175 = res.header('Access-Control-Allow-Origin', host);
            v175;
        }
    }
    const v176 = res.header('Access-Control-Allow-Methods', 'GET,POST');
    v176;
    const v177 = res.header('Access-Control-Allow-Headers', 'Content-Type');
    v177;
    const v178 = next();
    v178;
};
const v180 = router.use(v179);
v180;
const v183 = function (req, res) {
    const v181 = { message: 'It works ! You\'re plugged into pi_video_recording' };
    const v182 = res.json(v181);
    v182;
};
const v184 = router.get('/', v183);
v184;
const v194 = function (req, res) {
    const v185 = console.log('Getting the state');
    v185;
    switch (state) {
    case 0:
        const v186 = {
            message: 'Raspberry is ready',
            state: state
        };
        const v187 = res.json(v186);
        v187;
        break;
    case 1:
        const v188 = {
            message: 'Live streaming is started',
            state: state
        };
        const v189 = res.json(v188);
        v189;
        break;
    case 2:
        const v190 = {
            message: 'video recording is started',
            state: state
        };
        const v191 = res.json(v190);
        v191;
        break;
    default:
        const v192 = res.status(500);
        v192;
        const v193 = res.send('Oops! There is a problem with the server');
        v193;
        break;
    }
};
const v195 = router.get('/state', v194);
v195;
const v196 = router.route('/live/start');
const v207 = function (req, res) {
    const v197 = globalConf.livePort;
    const v198 = `Starting the live on port ${ v197 }`;
    const v199 = console.log(v198);
    v199;
    const v200 = state == 0;
    if (v200) {
        const v201 = rpi_live_module.startLive();
        v201;
        state = 1;
        const v202 = { message: 'Starting the live !' };
        const v203 = res.json(v202);
        v203;
    } else {
        const v204 = res.status(401);
        v204;
        const v205 = { message: 'Server is buzy, please stop current task' };
        const v206 = res.json(v205);
        v206;
    }
};
const v208 = v196.post(v207);
v208;
const v209 = router.route('/live/stop');
const v219 = function (req, res) {
    const v210 = console.log('Stopping the live');
    v210;
    const v211 = state == 1;
    if (v211) {
        const v214 = function () {
            state = 0;
            const v212 = { message: 'Live stopped !' };
            const v213 = res.json(v212);
            v213;
        };
        const v215 = rpi_live_module.stopLive(v214);
        v215;
    } else {
        const v216 = res.status(401);
        v216;
        const v217 = { message: 'Server is buzy, please stop current task' };
        const v218 = res.json(v217);
        v218;
    }
};
const v220 = v209.post(v219);
v220;
const v221 = router.route('/record/start');
const v250 = function (req, res) {
    const v222 = console.log('Calling /record/start');
    v222;
    const v223 = req.body;
    let filename = v223.filename;
    const v224 = new Date();
    const v225 = v224.getTime();
    video.start = v225;
    const v226 = filename == undefined;
    if (v226) {
        const v227 = res.status(403);
        v227;
        const v228 = { message: 'This method requires filename parameter' };
        const v229 = res.json(v228);
        v229;
    } else {
        const v230 = state == 0;
        if (v230) {
            video.filename = `${ videoFolderPath }/${ filename }`;
            const v231 = video.filename;
            const v232 = `Trying to start record in ${ v231 }`;
            const v233 = console.log(v232);
            v233;
            const v234 = video.filename;
            const v235 = `${ v234 }`;
            const v236 = rpi_live_module.startRecord(v235);
            v236;
            state = 2;
            const v237 = video.filename;
            const v238 = { message: `Video recording started -> ${ v237 }` };
            const v239 = res.json(v238);
            v239;
            const v246 = function () {
                const v240 = video.filename;
                const v244 = function () {
                    const v241 = video.filename;
                    const v242 = `Timeout reached for file ${ v241 }`;
                    const v243 = console.log(v242);
                    v243;
                };
                const v245 = rpi_live_module.stopRecord(v240, v244);
                v245;
                video = {};
                state = 0;
            };
            recordTimer = setTimeout(v246, recordTimeout);
        } else {
            const v247 = res.status(401);
            v247;
            const v248 = { message: 'Server is buzy, please stop current task' };
            const v249 = res.json(v248);
            v249;
        }
    }
};
const v251 = v221.post(v250);
v251;
const v252 = router.route('/record/stop');
const v269 = function (req, res) {
    const v253 = console.log('Trying to stop video recording');
    v253;
    const v254 = state == 2;
    if (v254) {
        const v255 = clearTimeout(recordTimer);
        v255;
        const v256 = new Date();
        const v257 = v256.getTime();
        const v258 = video.start;
        video.length = v257 - v258;
        const v259 = video.filename;
        const v264 = function () {
            state = 0;
            const v260 = video.length;
            const v261 = video.filename;
            const v262 = {
                message: 'Video recording stopped !',
                length: v260,
                filename: v261
            };
            const v263 = res.json(v262);
            v263;
            video = {};
        };
        const v265 = rpi_live_module.stopRecord(v259, v264);
        v265;
    } else {
        const v266 = res.status(401);
        v266;
        const v267 = { message: 'Server is buzy, please stop current task' };
        const v268 = res.json(v267);
        v268;
    }
};
const v270 = v252.post(v269);
v270;
const v271 = app.use('/api', router);
v271;
const v272 = app.listen(port);
v272;
const v273 = 'Projet started on port ' + port;
const v274 = console.log(v273);
v274;