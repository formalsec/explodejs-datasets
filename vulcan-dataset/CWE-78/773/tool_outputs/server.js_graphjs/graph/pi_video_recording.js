'use strict';
const childProcess = require('child_process');
const fs = require('fs');
const treeKill = require('tree-kill');
const v1 = {};
v1.width = 80;
v1.height = 240;
const globalConf = {};
globalConf.writePath = './';
globalConf.livePort = '8888';
globalConf.size = v1;
const execSync = childProcess.execSync;
const writePath = globalConf.writePath;
const livePort = globalConf.livePort;
const v2 = globalConf.size;
const width = v2.width;
const v3 = globalConf.size;
const height = v3.height;
const v4 = execSync('hostname');
let hostname = ` ${ v4 }`;
hostname = hostname.replace(/\s/g, '');
let logStream;
let proc;
const writeLogs = function (fileName) {
    const logPath = `${ writePath }/${ hostname }_${ fileName }.log`;
    const v5 = `Writing logs in ${ logPath }`;
    const v6 = console.log(v5);
    v6;
    const v7 = { flags: 'a' };
    logStream = fs.createWriteStream(logPath, v7);
    const v8 = proc.stdout;
    const v9 = v8.pipe(logStream);
    v9;
    const v10 = proc.stderr;
    const v11 = v10.pipe(logStream);
    v11;
};
const v14 = function () {
    const v12 = `raspivid -o - -t 0 -ih -n -pf high -ISO 800 -ex night -vs -drc high -fps 30 -w ${ width } -h ${ height } -r ${ hostname }
      | cvlc -vvv stream:///dev/stdin --sout '#standard{access=http,mux=ts,dst=:${ livePort }}' --demux=h264 --h264-fps=30.0000`;
    proc = childProcess.exec(v12);
    proc.title = 'live';
    const v13 = writeLogs('live');
    v13;
};
const v23 = function (callback) {
    const v15 = proc.pid;
    const v16 = 'killing pid : ' + v15;
    const v17 = console.log(v16);
    v17;
    const v18 = proc.pid;
    const v19 = treeKill(v18, 'SIGINT');
    v19;
    const v21 = function () {
        const v20 = callback();
        v20;
    };
    const v22 = setTimeout(v21, 2500);
    v22;
};
const v27 = function (file) {
    const v24 = file + '.h264';
    const v25 = [
        '-o',
        v24,
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
    proc = childProcess.spawn('raspivid', v25);
    proc.title = 'record';
    const v26 = writeLogs('record');
    v26;
};
const v33 = function (file, callback) {
    const v28 = proc.kill('SIGINT');
    v28;
    const parent = this;
    const v31 = function () {
        const v29 = parent.encodeRecord(file);
        v29;
        const v30 = callback();
        v30;
    };
    const v32 = setTimeout(v31, 2500);
    v32;
};
const v37 = function (file) {
    const v34 = `Encoding file ${ file } from h264 to mp4 (also removing h264)`;
    const v35 = console.log(v34);
    v35;
    const v36 = `avconv -r 30 -i ${ file }.h264 -threads 8 -y -loglevel quiet -vcodec copy ${ file }.mp4 && rm ${ file }.h264`;
    const process = childProcess.exec(v36);
    process.title = 'VIDEO_ENCODING';
};
const v38 = {};
v38.startLive = v14;
v38.stopLive = v23;
v38.startRecord = v27;
v38.stopRecord = v33;
v38.encodeRecord = v37;
module.exports = v38;