'use strict';
const childProcess = require('child_process');
const fs = require('fs');
const treeKill = require('tree-kill');
const v39 = {};
v39.width = 80;
v39.height = 240;
const globalConf = {};
globalConf.writePath = './';
globalConf.livePort = '8888';
globalConf.size = v39;
const execSync = childProcess.execSync;
const writePath = globalConf.writePath;
const livePort = globalConf.livePort;
const v40 = globalConf.size;
const width = v40.width;
const v41 = globalConf.size;
const height = v41.height;
const v42 = execSync('hostname');
let hostname = ` ${ v42 }`;
hostname = hostname.replace(/\s/g, '');
let logStream;
let proc;
const writeLogs = function (fileName) {
    const logPath = `${ writePath }/${ hostname }_${ fileName }.log`;
    const v43 = `Writing logs in ${ logPath }`;
    const v44 = console.log(v43);
    v44;
    const v45 = { flags: 'a' };
    logStream = fs.createWriteStream(logPath, v45);
    const v46 = proc.stdout;
    const v47 = v46.pipe(logStream);
    v47;
    const v48 = proc.stderr;
    const v49 = v48.pipe(logStream);
    v49;
};
const v52 = function () {
    const v50 = `raspivid -o - -t 0 -ih -n -pf high -ISO 800 -ex night -vs -drc high -fps 30 -w ${ width } -h ${ height } -r ${ hostname }
      | cvlc -vvv stream:///dev/stdin --sout '#standard{access=http,mux=ts,dst=:${ livePort }}' --demux=h264 --h264-fps=30.0000`;
    proc = childProcess.exec(v50);
    proc.title = 'live';
    const v51 = writeLogs('live');
    v51;
};
const v61 = function (callback) {
    const v53 = proc.pid;
    const v54 = 'killing pid : ' + v53;
    const v55 = console.log(v54);
    v55;
    const v56 = proc.pid;
    const v57 = treeKill(v56, 'SIGINT');
    v57;
    const v59 = function () {
        const v58 = callback();
        v58;
    };
    const v60 = setTimeout(v59, 2500);
    v60;
};
const v65 = function (file) {
    const v62 = file + '.h264';
    const v63 = [
        '-o',
        v62,
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
    proc = childProcess.spawn('raspivid', v63);
    proc.title = 'record';
    const v64 = writeLogs('record');
    v64;
};
const v71 = function (file, callback) {
    const v66 = proc.kill('SIGINT');
    v66;
    const parent = this;
    const v69 = function () {
        const v67 = parent.encodeRecord(file);
        v67;
        const v68 = callback();
        v68;
    };
    const v70 = setTimeout(v69, 2500);
    v70;
};
const v75 = function (file) {
    const v72 = `Encoding file ${ file } from h264 to mp4 (also removing h264)`;
    const v73 = console.log(v72);
    v73;
    const v74 = `avconv -r 30 -i ${ file }.h264 -threads 8 -y -loglevel quiet -vcodec copy ${ file }.mp4 && rm ${ file }.h264`;
    const process = childProcess.exec(v74);
    process.title = 'VIDEO_ENCODING';
};
const v76 = {};
v76.startLive = v52;
v76.stopLive = v61;
v76.startRecord = v65;
v76.stopRecord = v71;
v76.encodeRecord = v75;
module.exports = v76;