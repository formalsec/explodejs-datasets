'use strict';
const childProcess = require('child_process');
const fs = require('fs');
const treeKill = require('tree-kill');
const globalConf = require('./config.json');
const execSync = childProcess.execSync;
const writePath = globalConf.writePath;
const livePort = globalConf.livePort;
const v1 = globalConf.size;
const width = v1.width;
const v2 = globalConf.size;
const height = v2.height;
const v3 = execSync('hostname');
let hostname = ` ${ v3 }`;
hostname = hostname.replace(/\s/g, '');
let logStream;
let proc;
const writeLogs = function (fileName) {
    const logPath = `${ writePath }/${ hostname }_${ fileName }.log`;
    const v4 = `Writing logs in ${ logPath }`;
    const v5 = console.log(v4);
    v5;
    const v6 = { flags: 'a' };
    logStream = fs.createWriteStream(logPath, v6);
    const v7 = proc.stdout;
    const v8 = v7.pipe(logStream);
    v8;
    const v9 = proc.stderr;
    const v10 = v9.pipe(logStream);
    v10;
};
const v13 = function () {
    const v11 = `raspivid -o - -t 0 -ih -n -pf high -ISO 800 -ex night -vs -drc high -fps 30 -w ${ width } -h ${ height } -r ${ hostname } 
      | cvlc -vvv stream:///dev/stdin --sout '#standard{access=http,mux=ts,dst=:${ livePort }}' --demux=h264 --h264-fps=30.0000`;
    proc = childProcess.exec(v11);
    proc.title = 'live';
    const v12 = writeLogs('live');
    v12;
};
const v22 = function (callback) {
    const v14 = proc.pid;
    const v15 = 'killing pid : ' + v14;
    const v16 = console.log(v15);
    v16;
    const v17 = proc.pid;
    const v18 = treeKill(v17, 'SIGINT');
    v18;
    const v20 = function () {
        const v19 = callback();
        v19;
    };
    const v21 = setTimeout(v20, 2500);
    v21;
};
const v26 = function (file) {
    const v23 = file + '.h264';
    const v24 = [
        '-o',
        v23,
        '-t',
        '0',
        '-ih',
        '-pf',
        'high',
        '-ISO',
        '800',
        '-ex',
        'night',
        '-drc',
        'high',
        '-n',
        '-fps',
        '30',
        '-w',
        `${ width }`,
        '-h',
        `${ height }`,
        '-r',
        '90',
        '-b',
        '8000000',
        '-r',
        hostname
    ];
    proc = childProcess.spawn('raspivid', v24);
    proc.title = 'record';
    const v25 = writeLogs('record');
    v25;
};
const v32 = function (file, callback) {
    const v27 = proc.kill('SIGINT');
    v27;
    const parent = this;
    const v30 = function () {
        const v28 = parent.encodeRecord(file);
        v28;
        const v29 = callback();
        v29;
    };
    const v31 = setTimeout(v30, 2500);
    v31;
};
const v36 = function (file) {
    const v33 = `Encoding file ${ file } from h264 to mp4 (also removing h264)`;
    const v34 = console.log(v33);
    v34;
    const v35 = `avconv -r 30 -i ${ file }.h264 -threads 8 -y -loglevel quiet -vcodec copy ${ file }.mp4 && rm ${ file }.h264`;
    const process = childProcess.exec(v35);
    process.title = 'VIDEO_ENCODING';
};
const v37 = {};
v37.startLive = v13;
v37.stopLive = v22;
v37.startRecord = v26;
v37.stopRecord = v32;
v37.encodeRecord = v36;
module.exports = v37;