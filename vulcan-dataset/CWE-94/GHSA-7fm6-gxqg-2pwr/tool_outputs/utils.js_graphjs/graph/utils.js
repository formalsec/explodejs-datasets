'use strict';
const Dns = require('dns');
const Url = require('url');
const Qs = require('querystring');
const Http = require('http');
const Https = require('https');
const Path = require('path');
const Fs = require('fs');
const Events = require('events');
const Crypto = require('crypto');
const Zlib = require('zlib');
const Tls = require('tls');
const v5311 = {
    keepAlive: true,
    timeout: 60000
};
const KeepAlive = new Http.Agent(v5311);
const COMPRESS = {};
COMPRESS.gzip = 1;
COMPRESS.deflate = 1;
const CONCAT = [
    null,
    null
];
let COMPARER;
const v5312 = global.Intl;
const v5313 = global.Intl;
const v5314 = v5313.Collator();
const v5315 = v5314.compare;
const v5319 = function (a, b) {
    const v5316 = a.removeDiacritics();
    const v5317 = b.removeDiacritics();
    const v5318 = v5316.localeCompare(v5317);
    return v5318;
};
if (v5312) {
    COMPARER = v5315;
} else {
    COMPARER = v5319;
}
const v5320 = global.framework_utils;
const v5321 = !v5320;
if (v5321) {
    global.framework_utils = exports;
}
const Internal = require('./internal');
var regexpSTATIC = /\.\w{2,8}($|\?)+/;
const regexpTRIM = /^[\s]+|[\s]+$/g;
const regexpDATE = /(\d{1,2}\.\d{1,2}\.\d{4})|(\d{4}-\d{1,2}-\d{1,2})|(\d{1,2}:\d{1,2}(:\d{1,2})?)/g;
const regexpDATEFORMAT = /YYYY|yyyy|YY|yy|MMMM|MMM|MM|M|dddd|DDDD|DDD|ddd|DD|dd|D|d|HH|H|hh|h|mm|m|ss|s|a|ww|w/g;
const regexpSTRINGFORMAT = /\{\d+\}/g;
const regexpPATH = /\\/g;
const regexpTags = /<\/?[^>]+(>|$)/g;
const regexpDiacritics = /[^\u0000-\u007e]/g;
const regexpUA = /[a-z]+/gi;
const regexpXML = /\w+=".*?"/g;
const regexpDECODE = /&#?[a-z0-9]+;/g;
const regexpPARAM = /\{{2}[^}\n]*\}{2}/g;
const regexpARG = /\{{1,2}[a-z0-9_.-\s]+\}{1,2}/gi;
const regexpINTEGER = /(^-|\s-)?[0-9]+/g;
const regexpFLOAT = /(^-|\s-)?[0-9.,]+/g;
const regexpALPHA = /^[A-Za-z0-9]+$/;
const regexpSEARCH = /[^a-zA-Zá-žÁ-Ž\d\s:]/g;
const regexpTERMINAL = /[\w\S]+/g;
const regexpCONFIGURE = /\[\w+\]/g;
const regexpY = /y/g;
const regexpN = /\n/g;
const regexpCHARS = /\W|_/g;
const regexpCHINA = /[\u3400-\u9FBF]/;
const regexpLINES = /\n|\r|\r\n/;
const regexpBASE64 = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/;
const SOUNDEX = {};
SOUNDEX.a = '';
SOUNDEX.e = '';
SOUNDEX.i = '';
SOUNDEX.o = '';
SOUNDEX.u = '';
SOUNDEX.b = 1;
SOUNDEX.f = 1;
SOUNDEX.p = 1;
SOUNDEX.v = 1;
SOUNDEX.c = 2;
SOUNDEX.g = 2;
SOUNDEX.j = 2;
SOUNDEX.k = 2;
SOUNDEX.q = 2;
SOUNDEX.s = 2;
SOUNDEX.x = 2;
SOUNDEX.z = 2;
SOUNDEX.d = 3;
SOUNDEX.t = 3;
SOUNDEX.l = 4;
SOUNDEX.m = 5;
SOUNDEX.n = 5;
SOUNDEX.r = 6;
const ENCODING = 'utf8';
const NEWLINE = '\r\n';
const v5322 = require('os');
const v5323 = v5322.platform();
const v5324 = v5323.substring(0, 3);
const v5325 = v5324.toLowerCase();
const isWindows = v5325 === 'win';
const DIACRITICSMAP = {};
const STREAM_READONLY = {};
STREAM_READONLY.flags = 'r';
const STREAM_END = {};
STREAM_END.end = false;
const ALPHA_INDEX = {};
ALPHA_INDEX['&lt'] = '<';
ALPHA_INDEX['&gt'] = '>';
ALPHA_INDEX['&quot'] = '"';
ALPHA_INDEX['&apos'] = '\'';
ALPHA_INDEX['&amp'] = '&';
ALPHA_INDEX['&lt;'] = '<';
ALPHA_INDEX['&gt;'] = '>';
ALPHA_INDEX['&quot;'] = '"';
ALPHA_INDEX['&apos;'] = '\'';
ALPHA_INDEX['&amp;'] = '&';
const v5326 = process.version;
const v5327 = v5326.toString();
const v5328 = v5327.replace('v', '');
const v5329 = v5328.replace(/\./g, '');
const NODEVERSION = parseFloat(v5329);
const STREAMPIPE = {};
STREAMPIPE.end = false;
const CT = 'Content-Type';
const v5330 = '00000000,77073096,EE0E612C,990951BA,076DC419,706AF48F,E963A535,9E6495A3,0EDB8832,79DCB8A4,E0D5E91E,97D2D988,09B64C2B,7EB17CBD,E7B82D07,90BF1D91,1DB71064,6AB020F2,F3B97148,84BE41DE,1ADAD47D,6DDDE4EB,F4D4B551,83D385C7,136C9856,646BA8C0,FD62F97A,8A65C9EC,14015C4F,63066CD9,FA0F3D63,8D080DF5,3B6E20C8,4C69105E,D56041E4,A2677172,3C03E4D1,4B04D447,D20D85FD,A50AB56B,35B5A8FA,42B2986C,DBBBC9D6,ACBCF940,32D86CE3,45DF5C75,DCD60DCF,ABD13D59,26D930AC,51DE003A,C8D75180,BFD06116,21B4F4B5,56B3C423,CFBA9599,B8BDA50F,2802B89E,5F058808,C60CD9B2,B10BE924,2F6F7C87,58684C11,C1611DAB,B6662D3D,76DC4190,01DB7106,98D220BC,EFD5102A,71B18589,06B6B51F,9FBFE4A5,E8B8D433,7807C9A2,0F00F934,9609A88E,E10E9818,7F6A0DBB,086D3D2D,91646C97,E6635C01,6B6B51F4,1C6C6162,856530D8,F262004E,6C0695ED,1B01A57B,8208F4C1,F50FC457,65B0D9C6,12B7E950,8BBEB8EA,FCB9887C,62DD1DDF,15DA2D49,8CD37CF3,FBD44C65,4DB26158,3AB551CE,A3BC0074,D4BB30E2,4ADFA541,3DD895D7,A4D1C46D,D3D6F4FB,4369E96A,346ED9FC,AD678846,DA60B8D0,44042D73,33031DE5,AA0A4C5F,DD0D7CC9,5005713C,270241AA,BE0B1010,C90C2086,5768B525,206F85B3,B966D409,CE61E49F,5EDEF90E,29D9C998,B0D09822,C7D7A8B4,59B33D17,2EB40D81,B7BD5C3B,C0BA6CAD,EDB88320,9ABFB3B6,03B6E20C,74B1D29A,EAD54739,9DD277AF,04DB2615,73DC1683,E3630B12,94643B84,0D6D6A3E,7A6A5AA8,E40ECF0B,9309FF9D,0A00AE27,7D079EB1,F00F9344,8708A3D2,1E01F268,6906C2FE,F762575D,806567CB,196C3671,6E6B06E7,FED41B76,89D32BE0,10DA7A5A,67DD4ACC,F9B9DF6F,8EBEEFF9,17B7BE43,60B08ED5,D6D6A3E8,A1D1937E,38D8C2C4,4FDFF252,D1BB67F1,A6BC5767,3FB506DD,48B2364B,D80D2BDA,AF0A1B4C,36034AF6,41047A60,DF60EFC3,A867DF55,316E8EEF,4669BE79,CB61B38C,BC66831A,256FD2A0,5268E236,CC0C7795,BB0B4703,220216B9,5505262F,C5BA3BBE,B2BD0B28,2BB45A92,5CB36A04,C2D7FFA7,B5D0CF31,2CD99E8B,5BDEAE1D,9B64C2B0,EC63F226,756AA39C,026D930A,9C0906A9,EB0E363F,72076785,05005713,95BF4A82,E2B87A14,7BB12BAE,0CB61B38,92D28E9B,E5D5BE0D,7CDCEFB7,0BDBDF21,86D3D2D4,F1D4E242,68DDB3F8,1FDA836E,81BE16CD,F6B9265B,6FB077E1,18B74777,88085AE6,FF0F6A70,66063BCA,11010B5C,8F659EFF,F862AE69,616BFFD3,166CCF45,A00AE278,D70DD2EE,4E048354,3903B3C2,A7672661,D06016F7,4969474D,3E6E77DB,AED16A4A,D9D65ADC,40DF0B66,37D83BF0,A9BCAE53,DEBB9EC5,47B2CF7F,30B5FFE9,BDBDF21C,CABAC28A,53B39330,24B4A3A6,BAD03605,CDD70693,54DE5729,23D967BF,B3667A2E,C4614AB8,5D681B02,2A6F2B94,B40BBE37,C30C8EA1,5A05DF1B,2D02EF8D'.split(',');
const v5332 = s => {
    const v5331 = parseInt(s, 16);
    return v5331;
};
const CRC32TABLE = v5330.map(v5332);
const REGISARR = /\[\d+\]|\[\]$/;
const REGREPLACEARR = /\[\]/g;
const PROXYBLACKLIST = {};
PROXYBLACKLIST['localhost'] = 1;
PROXYBLACKLIST['127.0.0.1'] = 1;
PROXYBLACKLIST['0.0.0.0'] = 1;
const v5333 = {};
const PROXYOPTIONS = {};
PROXYOPTIONS.headers = v5333;
PROXYOPTIONS.method = 'CONNECT';
PROXYOPTIONS.agent = false;
const v5334 = {};
const PROXYTLS = {};
PROXYTLS.headers = v5334;
const PROXYOPTIONSHTTP = {};
const REG_ROOT = /@\{#\}(\/)?/g;
const REG_NOREMAP = /@\{noremap\}(\n)?/g;
const REG_REMAP = /href=".*?"|src=".*?"/gi;
const REG_AJAX = /('|")+(!)?(GET|POST|PUT|DELETE|PATCH)\s(\(.*?\)\s)?\//g;
const REG_URLEXT = /(https|http|wss|ws|file):\/\/|\/\/[a-z0-9]|[a-z]:/i;
const REG_TEXTAPPLICATION = /text|application/i;
const REG_TIME = /am|pm/i;
const REG_XMLKEY = /\[|\]|:|\.|_/g;
exports.MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
exports.DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];
const v5335 = {
    b: ' ',
    c: '\xA0'
};
const v5336 = {
    b: '0',
    c: '߀'
};
const v5337 = {
    b: 'A',
    c: '\u24B6ＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ'
};
const v5338 = {
    b: 'AA',
    c: 'Ꜳ'
};
const v5339 = {
    b: 'AE',
    c: 'ÆǼǢ'
};
const v5340 = {
    b: 'AO',
    c: 'Ꜵ'
};
const v5341 = {
    b: 'AU',
    c: 'Ꜷ'
};
const v5342 = {
    b: 'AV',
    c: 'ꜸꜺ'
};
const v5343 = {
    b: 'AY',
    c: 'Ꜽ'
};
const v5344 = {
    b: 'B',
    c: '\u24B7ＢḂḄḆɃƁ'
};
const v5345 = {
    b: 'C',
    c: '\u24B8ＣꜾḈĆCĈĊČÇƇȻ'
};
const v5346 = {
    b: 'D',
    c: '\u24B9ＤḊĎḌḐḒḎĐƊƉᴅꝹ'
};
const v5347 = {
    b: 'Dh',
    c: 'Ð'
};
const v5348 = {
    b: 'DZ',
    c: 'ǱǄ'
};
const v5349 = {
    b: 'Dz',
    c: 'ǲǅ'
};
const v5350 = {
    b: 'E',
    c: 'ɛ\u24BAＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ'
};
const v5351 = {
    b: 'F',
    c: 'ꝼ\u24BBＦḞƑꝻ'
};
const v5352 = {
    b: 'G',
    c: '\u24BCＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ'
};
const v5353 = {
    b: 'H',
    c: '\u24BDＨĤḢḦȞḤḨḪĦⱧⱵꞍ'
};
const v5354 = {
    b: 'I',
    c: '\u24BEＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ'
};
const v5355 = {
    b: 'J',
    c: '\u24BFＪĴɈȷ'
};
const v5356 = {
    b: 'K',
    c: '\u24C0ＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ'
};
const v5357 = {
    b: 'L',
    c: '\u24C1ＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ'
};
const v5358 = {
    b: 'LJ',
    c: 'Ǉ'
};
const v5359 = {
    b: 'Lj',
    c: 'ǈ'
};
const v5360 = {
    b: 'M',
    c: '\u24C2ＭḾṀṂⱮƜϻ'
};
const v5361 = {
    b: 'N',
    c: 'ꞤȠ\u24C3ＮǸŃÑṄŇṆŅṊṈƝꞐᴎ'
};
const v5362 = {
    b: 'NJ',
    c: 'Ǌ'
};
const v5363 = {
    b: 'Nj',
    c: 'ǋ'
};
const v5364 = {
    b: 'O',
    c: '\u24C4ＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ'
};
const v5365 = {
    b: 'OE',
    c: 'Œ'
};
const v5366 = {
    b: 'OI',
    c: 'Ƣ'
};
const v5367 = {
    b: 'OO',
    c: 'Ꝏ'
};
const v5368 = {
    b: 'OU',
    c: 'Ȣ'
};
const v5369 = {
    b: 'P',
    c: '\u24C5ＰṔṖƤⱣꝐꝒꝔ'
};
const v5370 = {
    b: 'Q',
    c: '\u24C6ＱꝖꝘɊ'
};
const v5371 = {
    b: 'R',
    c: '\u24C7ＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ'
};
const v5372 = {
    b: 'S',
    c: '\u24C8ＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ'
};
const v5373 = {
    b: 'T',
    c: '\u24C9ＴṪŤṬȚŢṰṮŦƬƮȾꞆ'
};
const v5374 = {
    b: 'Th',
    c: 'Þ'
};
const v5375 = {
    b: 'TZ',
    c: 'Ꜩ'
};
const v5376 = {
    b: 'U',
    c: '\u24CAＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ'
};
const v5377 = {
    b: 'V',
    c: '\u24CBＶṼṾƲꝞɅ'
};
const v5378 = {
    b: 'VY',
    c: 'Ꝡ'
};
const v5379 = {
    b: 'W',
    c: '\u24CCＷẀẂŴẆẄẈⱲ'
};
const v5380 = {
    b: 'X',
    c: '\u24CDＸẊẌ'
};
const v5381 = {
    b: 'Y',
    c: '\u24CEＹỲÝŶỸȲẎŸỶỴƳɎỾ'
};
const v5382 = {
    b: 'Z',
    c: '\u24CFＺŹẐŻŽẒẔƵȤⱿⱫꝢ'
};
const v5383 = {
    b: 'a',
    c: '\u24D0ａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ'
};
const v5384 = {
    b: 'aa',
    c: 'ꜳ'
};
const v5385 = {
    b: 'ae',
    c: 'æǽǣ'
};
const v5386 = {
    b: 'ao',
    c: 'ꜵ'
};
const v5387 = {
    b: 'au',
    c: 'ꜷ'
};
const v5388 = {
    b: 'av',
    c: 'ꜹꜻ'
};
const v5389 = {
    b: 'ay',
    c: 'ꜽ'
};
const v5390 = {
    b: 'b',
    c: '\u24D1ｂḃḅḇƀƃɓƂ'
};
const v5391 = {
    b: 'c',
    c: 'ｃ\u24D2ćĉċčçḉƈȼꜿↄ'
};
const v5392 = {
    b: 'd',
    c: '\u24D3ｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ'
};
const v5393 = {
    b: 'dh',
    c: 'ð'
};
const v5394 = {
    b: 'dz',
    c: 'ǳǆ'
};
const v5395 = {
    b: 'e',
    c: '\u24D4ｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ'
};
const v5396 = {
    b: 'f',
    c: '\u24D5ｆḟƒ'
};
const v5397 = {
    b: 'ff',
    c: 'ﬀ'
};
const v5398 = {
    b: 'fi',
    c: 'ﬁ'
};
const v5399 = {
    b: 'fl',
    c: 'ﬂ'
};
const v5400 = {
    b: 'ffi',
    c: 'ﬃ'
};
const v5401 = {
    b: 'ffl',
    c: 'ﬄ'
};
const v5402 = {
    b: 'g',
    c: '\u24D6ｇǵĝḡğġǧģǥɠꞡꝿᵹ'
};
const v5403 = {
    b: 'h',
    c: '\u24D7ｈĥḣḧȟḥḩḫẖħⱨⱶɥ'
};
const v5404 = {
    b: 'hv',
    c: 'ƕ'
};
const v5405 = {
    b: 'i',
    c: '\u24D8ｉìíîĩīĭïḯỉǐȉȋịįḭɨı'
};
const v5406 = {
    b: 'j',
    c: '\u24D9ｊĵǰɉ'
};
const v5407 = {
    b: 'k',
    c: '\u24DAｋḱǩḳķḵƙⱪꝁꝃꝅꞣ'
};
const v5408 = {
    b: 'l',
    c: '\u24DBｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ'
};
const v5409 = {
    b: 'lj',
    c: 'ǉ'
};
const v5410 = {
    b: 'm',
    c: '\u24DCｍḿṁṃɱɯ'
};
const v5411 = {
    b: 'n',
    c: '\u24DDｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ'
};
const v5412 = {
    b: 'nj',
    c: 'ǌ'
};
const v5413 = {
    b: 'o',
    c: '\u24DEｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ'
};
const v5414 = {
    b: 'oe',
    c: 'œ'
};
const v5415 = {
    b: 'oi',
    c: 'ƣ'
};
const v5416 = {
    b: 'oo',
    c: 'ꝏ'
};
const v5417 = {
    b: 'ou',
    c: 'ȣ'
};
const v5418 = {
    b: 'p',
    c: '\u24DFｐṕṗƥᵽꝑꝓꝕρ'
};
const v5419 = {
    b: 'q',
    c: '\u24E0ｑɋꝗꝙ'
};
const v5420 = {
    b: 'r',
    c: '\u24E1ｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ'
};
const v5421 = {
    b: 's',
    c: '\u24E2ｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ'
};
const v5422 = {
    b: 'ss',
    c: 'ß'
};
const v5423 = {
    b: 't',
    c: '\u24E3ｔṫẗťṭțţṱṯŧƭʈⱦꞇ'
};
const v5424 = {
    b: 'th',
    c: 'þ'
};
const v5425 = {
    b: 'tz',
    c: 'ꜩ'
};
const v5426 = {
    b: 'u',
    c: '\u24E4ｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ'
};
const v5427 = {
    b: 'v',
    c: '\u24E5ｖṽṿʋꝟʌ'
};
const v5428 = {
    b: 'vy',
    c: 'ꝡ'
};
const v5429 = {
    b: 'w',
    c: '\u24E6ｗẁẃŵẇẅẘẉⱳ'
};
const v5430 = {
    b: 'x',
    c: '\u24E7ｘẋẍ'
};
const v5431 = {
    b: 'y',
    c: '\u24E8ｙỳýŷỹȳẏÿỷẙỵƴɏỿ'
};
const v5432 = {
    b: 'z',
    c: '\u24E9ｚźẑżžẓẕƶȥɀⱬꝣ'
};
var DIACRITICS = [
    v5335,
    v5336,
    v5337,
    v5338,
    v5339,
    v5340,
    v5341,
    v5342,
    v5343,
    v5344,
    v5345,
    v5346,
    v5347,
    v5348,
    v5349,
    v5350,
    v5351,
    v5352,
    v5353,
    v5354,
    v5355,
    v5356,
    v5357,
    v5358,
    v5359,
    v5360,
    v5361,
    v5362,
    v5363,
    v5364,
    v5365,
    v5366,
    v5367,
    v5368,
    v5369,
    v5370,
    v5371,
    v5372,
    v5373,
    v5374,
    v5375,
    v5376,
    v5377,
    v5378,
    v5379,
    v5380,
    v5381,
    v5382,
    v5383,
    v5384,
    v5385,
    v5386,
    v5387,
    v5388,
    v5389,
    v5390,
    v5391,
    v5392,
    v5393,
    v5394,
    v5395,
    v5396,
    v5397,
    v5398,
    v5399,
    v5400,
    v5401,
    v5402,
    v5403,
    v5404,
    v5405,
    v5406,
    v5407,
    v5408,
    v5409,
    v5410,
    v5411,
    v5412,
    v5413,
    v5414,
    v5415,
    v5416,
    v5417,
    v5418,
    v5419,
    v5420,
    v5421,
    v5422,
    v5423,
    v5424,
    v5425,
    v5426,
    v5427,
    v5428,
    v5429,
    v5430,
    v5431,
    v5432
];
var i = 0;
const v5433 = DIACRITICS.length;
let v5434 = i < v5433;
while (v5434) {
    const v5435 = DIACRITICS[i];
    var chars = v5435.c;
    var j = 0;
    const v5436 = chars.length;
    let v5437 = j < v5436;
    while (v5437) {
        const v5438 = chars[j];
        const v5439 = DIACRITICS[i];
        const v5440 = v5439.b;
        DIACRITICSMAP[v5438] = v5440;
        v5437 = j < v5436;
    }
    v5434 = i < v5433;
}
const DP = Date.prototype;
const SP = String.prototype;
const NP = Number.prototype;
DIACRITICS = null;
var CONTENTTYPES = {};
CONTENTTYPES.aac = 'audio/aac';
CONTENTTYPES.ai = 'application/postscript';
CONTENTTYPES.appcache = 'text/cache-manifest';
CONTENTTYPES.avi = 'video/avi';
CONTENTTYPES.bin = 'application/octet-stream';
CONTENTTYPES.bmp = 'image/bmp';
CONTENTTYPES.coffee = 'text/coffeescript';
CONTENTTYPES.css = 'text/css';
CONTENTTYPES.csv = 'text/csv';
CONTENTTYPES.doc = 'application/msword';
CONTENTTYPES.docx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
CONTENTTYPES.dtd = 'application/xml-dtd';
CONTENTTYPES.eps = 'application/postscript';
CONTENTTYPES.exe = 'application/octet-stream';
CONTENTTYPES.flac = 'audio/x-flac';
CONTENTTYPES.geojson = 'application/json';
CONTENTTYPES.gif = 'image/gif';
CONTENTTYPES.gzip = 'application/x-gzip';
CONTENTTYPES.heic = 'image/heic';
CONTENTTYPES.heif = 'image/heif';
CONTENTTYPES.htm = 'text/html';
CONTENTTYPES.html = 'text/html';
CONTENTTYPES.ico = 'image/x-icon';
CONTENTTYPES.ics = 'text/calendar';
CONTENTTYPES.ifb = 'text/calendar';
CONTENTTYPES.jpe = 'image/jpeg';
CONTENTTYPES.jpeg = 'image/jpeg';
CONTENTTYPES.jpg = 'image/jpeg';
CONTENTTYPES.js = 'text/javascript';
CONTENTTYPES.json = 'application/json';
CONTENTTYPES.jsx = 'text/jsx';
CONTENTTYPES.less = 'text/css';
CONTENTTYPES.m4a = 'audio/mp4a-latm';
CONTENTTYPES.m4v = 'video/x-m4v';
CONTENTTYPES.manifest = 'text/cache-manifest';
CONTENTTYPES.md = 'text/x-markdown';
CONTENTTYPES.mid = 'audio/midi';
CONTENTTYPES.midi = 'audio/midi';
CONTENTTYPES.mjs = 'text/javascript';
CONTENTTYPES.mov = 'video/quicktime';
CONTENTTYPES.mp3 = 'audio/mpeg';
CONTENTTYPES.mp4 = 'video/mp4';
CONTENTTYPES.mpe = 'video/mpeg';
CONTENTTYPES.mpeg = 'video/mpeg';
CONTENTTYPES.mpg = 'video/mpeg';
CONTENTTYPES.mpga = 'audio/mpeg';
CONTENTTYPES.mtl = 'text/plain';
CONTENTTYPES.mv4 = 'video/mv4';
CONTENTTYPES.obj = 'text/plain';
CONTENTTYPES.ogg = 'application/ogg';
CONTENTTYPES.ogv = 'video/ogg';
CONTENTTYPES.package = 'text/plain';
CONTENTTYPES.pdf = 'application/pdf';
CONTENTTYPES.png = 'image/png';
CONTENTTYPES.ppt = 'application/vnd.ms-powerpoint';
CONTENTTYPES.pptx = 'application/vnd.ms-powerpoint';
CONTENTTYPES.ps = 'application/postscript';
CONTENTTYPES.rar = 'application/x-rar-compressed';
CONTENTTYPES.rtf = 'text/rtf';
CONTENTTYPES.sass = 'text/css';
CONTENTTYPES.scss = 'text/css';
CONTENTTYPES.sh = 'application/x-sh';
CONTENTTYPES.stl = 'application/sla';
CONTENTTYPES.svg = 'image/svg+xml';
CONTENTTYPES.swf = 'application/x-shockwave-flash';
CONTENTTYPES.tar = 'application/x-tar';
CONTENTTYPES.tif = 'image/tiff';
CONTENTTYPES.tiff = 'image/tiff';
CONTENTTYPES.txt = 'text/plain';
CONTENTTYPES.sql = 'text/plain';
CONTENTTYPES.wav = 'audio/x-wav';
CONTENTTYPES.webm = 'video/webm';
CONTENTTYPES.webp = 'image/webp';
CONTENTTYPES.woff = 'application/font-woff';
CONTENTTYPES.woff2 = 'application/font-woff2';
CONTENTTYPES.xht = 'application/xhtml+xml';
CONTENTTYPES.xhtml = 'application/xhtml+xml';
CONTENTTYPES.xls = 'application/vnd.ms-excel';
CONTENTTYPES.xlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
CONTENTTYPES.xml = 'application/xml';
CONTENTTYPES.xpm = 'image/x-xpixmap';
CONTENTTYPES.xsl = 'application/xml';
CONTENTTYPES.xslt = 'application/xslt+xml';
CONTENTTYPES.zip = 'application/zip';
var dnscache = {};
var datetimeformat = {};
const v5441 = Object.prototype;
const hasOwnProperty = v5441.hasOwnProperty;
const v5467 = function (prop, db, form) {
    var an = [];
    var au = [];
    var ar = [];
    var is;
    var oa;
    var ob;
    var i = 0;
    const v5442 = db.length;
    let v5443 = i < v5442;
    while (v5443) {
        oa = db[i];
        is = false;
        var j = 0;
        const v5445 = form.length;
        let v5446 = j < v5445;
        while (v5446) {
            ob = form[j];
            const v5448 = oa[prop];
            const v5449 = ob[prop];
            const v5450 = v5448 == v5449;
            if (v5450) {
                const v5451 = {
                    db: oa,
                    form: ob
                };
                const v5452 = au.push(v5451);
                v5452;
                is = true;
                break;
            }
            const v5447 = j++;
            v5446 = j < v5445;
        }
        const v5453 = !is;
        if (v5453) {
            const v5454 = oa[prop];
            const v5455 = ar.push(v5454);
            v5455;
        }
        const v5444 = i++;
        v5443 = i < v5442;
    }
    var i = 0;
    const v5456 = form.length;
    let v5457 = i < v5456;
    while (v5457) {
        ob = form[i];
        is = false;
        var j = 0;
        const v5459 = db.length;
        let v5460 = j < v5459;
        while (v5460) {
            oa = db[j];
            const v5462 = ob[prop];
            const v5463 = oa[prop];
            const v5464 = v5462 == v5463;
            if (v5464) {
                is = true;
                break;
            }
            const v5461 = j++;
            v5460 = j < v5459;
        }
        const v5465 = !is;
        if (v5465) {
            const v5466 = an.push(ob);
            v5466;
        }
        const v5458 = i++;
        v5457 = i < v5456;
    }
    var obj = {};
    obj.add = an;
    obj.upd = au;
    obj.rem = ar;
    return obj;
};
exports.diffarr = v5467;
global.DIFFARR = exports.diffarr;
const v5472 = function (obj) {
    const v5468 = !obj;
    const v5469 = obj instanceof Array;
    const v5470 = v5468 || v5469;
    if (v5470) {
        return true;
    }
    let key;
    for (key in obj) {
        const v5471 = hasOwnProperty.call(obj, key);
        if (v5471) {
            return false;
        }
    }
    return true;
};
exports.isEmpty = v5472;
const v5496 = function (obj1, obj2, properties) {
    let keys;
    const v5473 = Object.keys(obj1);
    if (properties) {
        keys = properties;
    } else {
        keys = v5473;
    }
    var i = 0;
    var length = keys.length;
    let v5474 = i < length;
    while (v5474) {
        var key = keys[i];
        var a = obj1[key];
        var b = obj2[key];
        const v5476 = typeof a;
        var ta = v5476;
        const v5477 = typeof b;
        var tb = v5477;
        const v5478 = ta !== tb;
        if (v5478) {
            return false;
        }
        const v5479 = a === b;
        if (v5479) {
            continue;
        }
        const v5480 = a instanceof Date;
        const v5481 = b instanceof Date;
        const v5482 = v5480 && v5481;
        if (v5482) {
            const v5483 = a.getTime();
            const v5484 = b.getTime();
            const v5485 = v5483 === v5484;
            if (v5485) {
                continue;
            }
            return false;
        } else {
            const v5486 = a instanceof Array;
            const v5487 = b instanceof Array;
            const v5488 = v5486 && v5487;
            if (v5488) {
                const v5489 = JSON.stringify(a);
                const v5490 = JSON.stringify(b);
                const v5491 = v5489 === v5490;
                if (v5491) {
                    continue;
                }
                return false;
            }
        }
        const v5492 = ta === 'object';
        const v5493 = tb === 'object';
        const v5494 = v5492 && v5493;
        if (v5494) {
            const v5495 = exports.isEqual(a, b);
            if (v5495) {
                continue;
            }
        }
        return false;
        const v5475 = i++;
        v5474 = i < length;
    }
    return true;
};
exports.isEqual = v5496;
const v5514 = function (fnValid, fnCallback, timeout, interval) {
    const v5497 = fnValid();
    const v5498 = v5497 === true;
    if (v5498) {
        const v5499 = fnCallback(null, true);
        return v5499;
    }
    var id_timeout = null;
    const v5506 = function () {
        const v5500 = fnValid();
        const v5501 = v5500 === true;
        if (v5501) {
            const v5502 = clearInterval(id_interval);
            v5502;
            const v5503 = clearTimeout(id_timeout);
            v5503;
            const v5504 = fnCallback(null, true);
            const v5505 = fnCallback && v5504;
            v5505;
        }
    };
    const v5507 = interval || 500;
    var id_interval = setInterval(v5506, v5507);
    const v5512 = function () {
        const v5508 = clearInterval(id_interval);
        v5508;
        const v5509 = new Error('Timeout.');
        const v5510 = fnCallback(v5509, false);
        const v5511 = fnCallback && v5510;
        v5511;
    };
    const v5513 = timeout || 5000;
    id_timeout = setTimeout(v5512, v5513);
};
exports.wait = v5514;
const v5517 = function (fnValid, timeout, interval) {
    const v5516 = function (callback) {
        const v5515 = exports.wait(fnValid, callback, timeout, interval);
        v5515;
    };
    return v5516;
};
exports.$$wait = v5517;
const v5534 = function (url, callback, param) {
    var uri = Url.parse(url);
    const v5518 = !callback;
    if (v5518) {
        const v5519 = uri.host;
        const v5520 = dnscache[v5519];
        return v5520;
    }
    const v5521 = uri.host;
    const v5522 = dnscache[v5521];
    if (v5522) {
        const v5523 = uri.host;
        const v5524 = dnscache[v5523];
        uri.host = v5524;
        const v5525 = callback(null, uri, param);
        v5525;
        return;
    }
    const v5526 = uri.hostname;
    const v5532 = function (e, addresses) {
        if (e) {
            const v5527 = setImmediate(dnsresolve_callback, uri, callback, param);
            v5527;
        } else {
            const v5528 = uri.host;
            const v5529 = addresses[0];
            dnscache[v5528] = v5529;
            const v5530 = addresses[0];
            uri.host = v5530;
            const v5531 = callback(null, uri, param);
            v5531;
        }
    };
    const v5533 = Dns.resolve4(v5526, v5532);
    v5533;
};
exports.resolve = v5534;
const dnsresolve_callback = function (uri, callback, param) {
    const v5535 = uri.hostname;
    const v5542 = function (e, addresses) {
        const v5536 = addresses.length;
        const v5537 = addresses && v5536;
        if (v5537) {
            const v5538 = uri.host;
            const v5539 = addresses[0];
            dnscache[v5538] = v5539;
            const v5540 = addresses[0];
            uri.host = v5540;
        }
        const v5541 = callback(e, uri, param);
        v5541;
    };
    const v5543 = Dns.resolve4(v5535, v5542);
    v5543;
};
const v5546 = function (url) {
    const v5545 = function (callback) {
        const v5544 = exports.resolve(url, callback);
        return v5544;
    };
    return v5545;
};
exports.$$resolve = v5546;
const v5549 = function () {
    const v5547 = OBSOLETE('U.clearDNS()', 'Use CMD(\'clear_dnscache\')');
    v5547;
    const v5548 = CMD('clear_dnscache');
    v5548;
};
exports.clearDNS = v5549;
const v5553 = function () {
    const v5550 = global.F;
    if (v5550) {
        const v5551 = function () {
            dnscache = {};
        };
        const v5552 = F.install('command', 'clear_dnscache', v5551);
        v5552;
    }
};
const v5554 = setImmediate(v5553);
v5554;
const v5620 = function (content, forSearch, alternative, max_count, max_length, min_length) {
    const v5555 = forSearch === undefined;
    if (v5555) {
        forSearch = true;
    }
    min_length = min_length || 2;
    max_count = max_count || 200;
    max_length = max_length || 20;
    var words = [];
    var isSoundex = alternative === 'soundex';
    const v5556 = content instanceof Array;
    if (v5556) {
        var i = 0;
        var length = content.length;
        let v5557 = i < length;
        while (v5557) {
            const v5559 = content[i];
            const v5560 = !v5559;
            if (v5560) {
                continue;
            }
            const v5561 = content[i];
            const v5562 = v5561.removeDiacritics();
            const v5563 = v5562.toLowerCase();
            const v5564 = v5563.replace(regexpY, 'i');
            const v5565 = content[i];
            const v5566 = v5565.toLowerCase();
            let v5567;
            if (forSearch) {
                v5567 = v5564;
            } else {
                v5567 = v5566;
            }
            const v5568 = v5567.replace(regexpN, ' ');
            var tmp = v5568.split(' ');
            const v5569 = !tmp;
            const v5570 = tmp.length;
            const v5571 = !v5570;
            const v5572 = v5569 || v5571;
            if (v5572) {
                continue;
            }
            var j = 0;
            var jl = tmp.length;
            let v5573 = j < jl;
            while (v5573) {
                const v5575 = tmp[j];
                const v5576 = words.push(v5575);
                v5576;
                const v5574 = j++;
                v5573 = j < jl;
            }
            const v5558 = i++;
            v5557 = i < length;
        }
    } else {
        const v5577 = content.removeDiacritics();
        const v5578 = v5577.toLowerCase();
        const v5579 = v5578.replace(regexpY, 'i');
        const v5580 = content.toLowerCase();
        let v5581;
        if (forSearch) {
            v5581 = v5579;
        } else {
            v5581 = v5580;
        }
        const v5582 = v5581.replace(regexpN, ' ');
        words = v5582.split(' ');
    }
    const v5583 = !words;
    if (v5583) {
        words = [];
    }
    var dic = {};
    var counter = 0;
    var i = 0;
    var length = words.length;
    let v5584 = i < length;
    while (v5584) {
        const v5586 = words[i];
        const v5587 = v5586.trim();
        var word = v5587.replace(regexpCHARS, keywordscleaner);
        const v5588 = regexpCHINA.test(word);
        if (v5588) {
            var tmpw = word.split('', max_count);
            var j = 0;
            const v5589 = tmpw.length;
            let v5590 = j < v5589;
            while (v5590) {
                word = tmpw[j];
                const v5592 = dic[word];
                if (v5592) {
                    const v5593 = dic[word];
                    const v5594 = v5593++;
                    v5594;
                } else {
                    dic[word] = 1;
                }
                const v5595 = counter++;
                v5595;
                const v5591 = j++;
                v5590 = j < v5589;
            }
            const v5596 = counter >= max_count;
            if (v5596) {
                break;
            }
            continue;
        }
        const v5597 = word.length;
        const v5598 = v5597 < min_length;
        if (v5598) {
            continue;
        }
        const v5599 = counter >= max_count;
        if (v5599) {
            break;
        }
        if (alternative) {
            if (isSoundex) {
                word = word.soundex();
            } else {
                const v5600 = word.length;
                const v5601 = v5600 / 100;
                var size = v5601 * 80;
                const v5602 = min_length + 1;
                const v5603 = size > v5602;
                if (v5603) {
                    word = word.substring(0, size);
                }
            }
        }
        const v5604 = word.length;
        const v5605 = v5604 < min_length;
        const v5606 = word.length;
        const v5607 = v5606 > max_length;
        const v5608 = v5605 || v5607;
        if (v5608) {
            continue;
        }
        const v5609 = dic[word];
        if (v5609) {
            const v5610 = dic[word];
            const v5611 = v5610++;
            v5611;
        } else {
            dic[word] = 1;
        }
        const v5612 = counter++;
        v5612;
        const v5585 = i++;
        v5584 = i < length;
    }
    var keys = Object.keys(dic);
    const v5618 = function (a, b) {
        var countA = dic[a];
        var countB = dic[b];
        const v5613 = countA > countB;
        const v5614 = -1;
        const v5615 = countA < countB;
        let v5616;
        if (v5615) {
            v5616 = 1;
        } else {
            v5616 = 0;
        }
        let v5617;
        if (v5613) {
            v5617 = v5614;
        } else {
            v5617 = v5616;
        }
        return v5617;
    };
    const v5619 = keys.sort(v5618);
    v5619;
    return keys;
};
exports.keywords = v5620;
const keywordscleaner = function (c) {
    const v5621 = c.charCodeAt(0);
    const v5622 = v5621 < 200;
    let v5623;
    if (v5622) {
        v5623 = '';
    } else {
        v5623 = c;
    }
    return v5623;
};
const parseProxy = function (p) {
    var key = 'proxy_' + p;
    const v5624 = F.temporary;
    const v5625 = v5624.other;
    const v5626 = v5625[key];
    if (v5626) {
        const v5627 = F.temporary;
        const v5628 = v5627.other;
        const v5629 = v5628[key];
        return v5629;
    }
    const v5630 = p.indexOf('://');
    const v5631 = -1;
    const v5632 = v5630 === v5631;
    if (v5632) {
        p = 'http://' + p;
    }
    var obj = Url.parse(p);
    const v5633 = obj.auth;
    if (v5633) {
        const v5634 = obj.auth;
        const v5635 = Buffer.from(v5634);
        const v5636 = v5635.toString('base64');
        obj._auth = 'Basic ' + v5636;
    }
    const v5637 = obj.port;
    const v5638 = +v5637;
    obj.port = v5638;
    const v5639 = F.temporary;
    const v5640 = v5639.other;
    return v5640[key] = obj;
};
const NOBODY = {};
NOBODY.GET = 1;
NOBODY.OPTIONS = 1;
NOBODY.HEAD = 1;
const v5798 = function (url, flags, data, callback, cookies, headers, encoding, timeout, files, param) {
    const v5641 = typeof data;
    const v5642 = v5641 === 'function';
    if (v5642) {
        encoding = headers;
        headers = cookies;
        cookies = callback;
        callback = data;
        data = '';
    } else {
        const v5643 = !data;
        if (v5643) {
            data = '';
        }
    }
    const v5644 = callback === NOOP;
    if (v5644) {
        callback = null;
    }
    const v5645 = global.F;
    if (v5645) {
        const v5646 = global.F;
        const v5647 = v5646.stats;
        const v5648 = v5647.performance;
        const v5649 = v5648.external;
        const v5650 = v5649++;
        v5650;
    }
    const v5651 = CONF.default_restbuilder_timeout;
    const v5652 = timeout || v5651;
    const v5653 = new EventEmitter2();
    const v5654 = typeof encoding;
    const v5655 = v5654 !== 'string';
    let v5656;
    if (v5655) {
        v5656 = ENCODING;
    } else {
        v5656 = encoding;
    }
    var options = {};
    options.length = 0;
    options.timeout = v5652;
    options.evt = v5653;
    options.encoding = v5656;
    options.callback = callback;
    options.post = false;
    options.redirect = 0;
    var method;
    var type = 0;
    var isCookies = false;
    var def;
    var proxy;
    if (headers) {
        const v5657 = {};
        headers = exports.extend(v5657, headers);
        def = headers[CT];
    } else {
        headers = {};
    }
    const v5658 = flags instanceof Array;
    if (v5658) {
        var i = 0;
        var length = flags.length;
        let v5659 = i < length;
        while (v5659) {
            const v5661 = flags[i];
            const v5662 = v5661 > 0;
            if (v5662) {
                const v5663 = flags[i];
                options.timeout = v5663;
                continue;
            }
            const v5664 = flags[i];
            const v5665 = v5664[0];
            const v5666 = v5665 === '<';
            if (v5666) {
                const v5667 = flags[i];
                const v5668 = v5667.substring(1);
                const v5669 = v5668.trim();
                const v5670 = v5669.parseInt();
                options.max = v5670 * 1024;
                continue;
            }
            const v5671 = flags[i];
            const v5672 = v5671[0];
            const v5673 = v5672 === 'p';
            const v5674 = flags[i];
            const v5675 = v5674[4];
            const v5676 = v5675 === 'y';
            const v5677 = v5673 && v5676;
            if (v5677) {
                const v5678 = flags[i];
                const v5679 = v5678.substring(6);
                proxy = parseProxy(v5679);
                continue;
            }
            const v5680 = flags[i];
            const v5681 = v5680.toLowerCase();
            switch (v5681) {
            case 'utf8':
            case 'ascii':
            case 'base64':
            case 'binary':
            case 'hex':
                const v5682 = flags[i];
                options.encoding = v5682;
                break;
            case 'xhr':
                headers['X-Requested-With'] = 'XMLHttpRequest';
                break;
            case 'plain':
                const v5683 = !def;
                if (v5683) {
                    headers[CT] = 'text/plain';
                }
                break;
            case 'html':
                const v5684 = !def;
                if (v5684) {
                    headers[CT] = 'text/html';
                }
                break;
            case 'raw':
                type = 3;
                const v5685 = !def;
                if (v5685) {
                    headers[CT] = 'application/octet-stream';
                }
                break;
            case 'json':
                const v5686 = !def;
                if (v5686) {
                    headers[CT] = 'application/json';
                }
                const v5687 = !method;
                const v5688 = v5687 && (method = 'POST');
                v5688;
                type = 1;
                break;
            case 'xml':
                const v5689 = !def;
                if (v5689) {
                    headers[CT] = 'text/xml';
                }
                const v5690 = !method;
                const v5691 = v5690 && (method = 'POST');
                v5691;
                type = 2;
                break;
            case 'get':
            case 'options':
            case 'head':
                const v5692 = flags[i];
                const v5693 = v5692.charCodeAt(0);
                const v5694 = v5693 > 96;
                const v5695 = flags[i];
                const v5696 = v5695.toUpperCase();
                const v5697 = flags[i];
                if (v5694) {
                    method = v5696;
                } else {
                    method = v5697;
                }
                break;
            case 'noredirect':
                options.noredirect = true;
                break;
            case 'upload':
                type = 4;
                options.upload = true;
                options.files = files || EMPTYARRAY;
                const v5698 = Math.random();
                const v5699 = v5698.toString(16);
                const v5700 = v5699.substring(2);
                options.boundary = '----totaljs' + v5700;
                const v5701 = options.boundary;
                headers[CT] = 'multipart/form-data; boundary=' + v5701;
                break;
            case 'post':
            case 'put':
            case 'delete':
            case 'patch':
                const v5702 = flags[i];
                method = v5702.toUpperCase();
                const v5703 = !def;
                const v5704 = headers[CT];
                const v5705 = !v5704;
                const v5706 = v5703 && v5705;
                const v5707 = v5706 && (headers[CT] = 'application/x-www-form-urlencoded');
                v5707;
                break;
            case 'dnscache':
                options.resolve = true;
                break;
            case 'keepalive':
                options.keepalive = true;
                break;
            case 'cookies':
                isCookies = true;
                break;
            default:
                const v5708 = !method;
                if (v5708) {
                    const v5709 = flags[i];
                    const v5710 = v5709.charCodeAt(0);
                    const v5711 = v5710 > 96;
                    const v5712 = flags[i];
                    const v5713 = v5712.toUpperCase();
                    const v5714 = flags[i];
                    if (v5711) {
                        method = v5713;
                    } else {
                        method = v5714;
                    }
                }
                break;
            }
            const v5660 = i++;
            v5659 = i < length;
        }
    }
    if (method) {
        const v5715 = NOBODY[method];
        const v5716 = !v5715;
        options.post = v5716;
    } else {
        method = 'GET';
    }
    const v5717 = type < 3;
    if (v5717) {
        const v5718 = typeof data;
        const v5719 = v5718 !== 'string';
        if (v5719) {
            const v5720 = type === 1;
            const v5721 = JSON.stringify(data);
            const v5722 = Qs.stringify(data);
            if (v5720) {
                data = v5721;
            } else {
                data = v5722;
            }
        } else {
            const v5723 = data[0];
            const v5724 = v5723 === '?';
            if (v5724) {
                data = data.substring(1);
            }
        }
        const v5725 = options.post;
        const v5726 = !v5725;
        if (v5726) {
            const v5727 = data.length;
            if (v5727) {
                const v5728 = url.indexOf('?');
                const v5729 = -1;
                const v5730 = v5728 === v5729;
                if (v5730) {
                    url += '?' + data;
                } else {
                    url += '&' + data;
                }
            }
            data = '';
        }
        const v5731 = type === 1;
        const v5732 = data === EMPTYOBJECT;
        const v5733 = data === undefined;
        const v5734 = v5732 || v5733;
        const v5735 = v5731 && v5734;
        const v5736 = options.post;
        const v5737 = v5735 && v5736;
        if (v5737) {
            data = BUFEMPTYJSON;
        }
    }
    const v5738 = type !== 4;
    const v5739 = data && v5738;
    if (v5739) {
        const v5740 = data instanceof Buffer;
        const v5741 = Buffer.from(data, ENCODING);
        let v5742;
        if (v5740) {
            v5742 = data;
        } else {
            v5742 = v5741;
        }
        options.data = v5742;
        const v5743 = options.data;
        const v5744 = v5743.length;
        headers['Content-Length'] = v5744;
    } else {
        options.data = data;
    }
    if (cookies) {
        if (isCookies) {
            options.cookies = cookies;
        }
        var builder = '';
        let m;
        for (m in cookies) {
            let v5745;
            if (builder) {
                v5745 = '; ';
            } else {
                v5745 = '';
            }
            const v5746 = v5745 + m;
            const v5747 = v5746 + '=';
            const v5748 = cookies[m];
            builder += v5747 + v5748;
        }
        if (builder) {
            headers['Cookie'] = builder;
        }
    }
    var uri = Url.parse(url);
    const v5749 = uri.hostname;
    const v5750 = !v5749;
    const v5751 = uri.host;
    const v5752 = !v5751;
    const v5753 = v5750 || v5752;
    if (v5753) {
        const v5754 = new Error('URL doesn\'t contain a hostname');
        const v5755 = callback(v5754, '', 0);
        const v5756 = callback && v5755;
        v5756;
        return;
    }
    uri.method = method;
    uri.headers = headers;
    options.uri = uri;
    const v5757 = options.resolve;
    const v5758 = uri.hostname;
    const v5759 = v5758 === 'localhost';
    const v5760 = uri.hostname;
    const v5761 = v5760.charCodeAt(0);
    const v5762 = v5761 < 64;
    const v5763 = v5759 || v5762;
    const v5764 = v5757 && v5763;
    if (v5764) {
        options.resolve = null;
    }
    const v5765 = CONF.default_proxy;
    const v5766 = !proxy;
    const v5767 = v5765 && v5766;
    const v5768 = uri.hostname;
    const v5769 = PROXYBLACKLIST[v5768];
    const v5770 = !v5769;
    const v5771 = v5767 && v5770;
    if (v5771) {
        const v5772 = CONF.default_proxy;
        proxy = parseProxy(v5772);
    }
    const v5773 = uri.hostname;
    const v5774 = v5773 === 'localhost';
    const v5775 = uri.hostname;
    const v5776 = v5775 === '127.0.0.1';
    const v5777 = v5774 || v5776;
    const v5778 = proxy && v5777;
    if (v5778) {
        proxy = null;
    }
    options.proxy = proxy;
    options.param = param;
    const v5779 = uri.protocol;
    const v5780 = v5779 === 'https:';
    const v5781 = proxy && v5780;
    if (v5781) {
        proxy.tls = true;
        uri.agent = new ProxyAgent(options);
        const v5782 = uri.agent;
        const v5783 = Http.request;
        v5782.request = v5783;
        const v5784 = uri.agent;
        v5784.createSocket = createSecureSocket;
        const v5785 = uri.agent;
        v5785.defaultPort = 443;
    }
    const v5786 = options.keepalive;
    const v5787 = options.proxy;
    const v5788 = !v5787;
    const v5789 = v5786 && v5788;
    const v5790 = uri.protocol;
    const v5791 = v5790 !== 'https:';
    const v5792 = v5789 && v5791;
    if (v5792) {
        uri.agent = KeepAlive;
    }
    if (proxy) {
        const v5793 = request_call(uri, options);
        v5793;
    } else {
        const v5794 = options.resolve;
        if (v5794) {
            const v5795 = exports.resolve(url, request_resolve, options);
            v5795;
        } else {
            const v5796 = request_call(uri, options);
            v5796;
        }
    }
    const v5797 = options.evt;
    return v5797;
};
exports.request = v5798;
global.REQUEST = exports.request;
const request_resolve = function (err, uri, options) {
    const v5799 = !err;
    if (v5799) {
        const v5800 = options.uri;
        const v5801 = uri.host;
        v5800.host = v5801;
    }
    const v5802 = options.uri;
    const v5803 = request_call(v5802, options);
    v5803;
};
const ProxyAgent = function (options) {
    var self = this;
    self.options = options;
    const v5804 = Http.Agent;
    const v5805 = v5804.defaultMaxSockets;
    self.maxSockets = v5805;
    self.requests = [];
};
const PAP = ProxyAgent.prototype;
const v5810 = function (pending) {
    var self = this;
    const v5808 = function (socket) {
        const v5806 = pending.request;
        const v5807 = v5806.onSocket(socket);
        v5807;
    };
    const v5809 = self.createSocket(pending, v5808);
    v5809;
};
PAP.createConnection = v5810;
const v5853 = function (options, callback) {
    var self = this;
    const v5811 = self.options;
    var proxy = v5811.proxy;
    const v5812 = self.options;
    var uri = v5812.uri;
    const v5813 = proxy.hostname;
    PROXYOPTIONS.host = v5813;
    const v5814 = proxy.port;
    PROXYOPTIONS.port = v5814;
    const v5815 = PROXYOPTIONS.headers;
    const v5816 = uri.hostname;
    const v5817 = v5816 + ':';
    const v5818 = uri.port;
    const v5819 = v5818 || '443';
    v5815.host = v5817 + v5819;
    PROXYOPTIONS.path = v5815.host;
    const v5820 = proxy._auth;
    if (v5820) {
        const v5821 = PROXYOPTIONS.headers;
        const v5822 = proxy._auth;
        v5821['Proxy-Authorization'] = v5822;
    }
    var req = self.request(PROXYOPTIONS);
    const v5823 = req.setTimeout(10000);
    v5823;
    const v5824 = req.on('response', proxyagent_response);
    v5824;
    const v5835 = function (res, socket) {
        const v5825 = res.statusCode;
        const v5826 = v5825 === 200;
        if (v5826) {
            socket.$req = req;
            const v5827 = callback(socket);
            v5827;
        } else {
            const v5828 = res.statusCode;
            const v5829 = 'Proxy could not be established (maybe a problem in auth), code: ' + v5828;
            var err = new Error(v5829);
            err.code = 'ECONNRESET';
            const v5830 = options.request;
            const v5831 = v5830.emit('error', err);
            v5831;
            const v5832 = req.destroy;
            const v5833 = req.destroy();
            const v5834 = v5832 && v5833;
            v5834;
            req = null;
            self.requests = null;
            self.options = null;
        }
    };
    const v5836 = req.on('connect', v5835);
    v5836;
    const v5850 = function (err) {
        const v5837 = PROXYOPTIONS.host;
        const v5838 = v5837 + ':';
        const v5839 = proxy.port;
        const v5840 = v5838 + v5839;
        const v5841 = PROXYOPTIONS.path;
        const v5842 = err.toString();
        const v5843 = 'Request Proxy "proxy {0} --> target {1}": {2}'.format(v5840, v5841, v5842);
        var e = new Error(v5843);
        const v5844 = err.code;
        e.code = v5844;
        const v5845 = options.request;
        const v5846 = v5845.emit('error', e);
        v5846;
        const v5847 = req.destroy;
        const v5848 = req.destroy();
        const v5849 = v5847 && v5848;
        v5849;
        req = null;
        self.requests = null;
        self.options = null;
    };
    const v5851 = req.on('error', v5850);
    v5851;
    const v5852 = req.end();
    v5852;
};
PAP.createSocket = v5853;
const proxyagent_response = function (res) {
    res.upgrade = true;
};
const v5858 = function (req, options) {
    const v5854 = options.host;
    const v5855 = options.port;
    const v5856 = {
        host: v5854,
        port: v5855,
        request: req
    };
    const v5857 = this.createConnection(v5856);
    v5857;
};
PAP.addRequest = v5858;
const createSecureSocket = function (options, callback) {
    var self = this;
    const v5859 = PAP.createSocket;
    const v5867 = function (socket) {
        const v5860 = self.options;
        const v5861 = v5860.uri;
        const v5862 = v5861.hostname;
        PROXYTLS.servername = v5862;
        const v5863 = self.options;
        const v5864 = v5863.uri;
        const v5865 = v5864.headers;
        PROXYTLS.headers = v5865;
        PROXYTLS.socket = socket;
        var tls = Tls.connect(0, PROXYTLS);
        const v5866 = callback(tls);
        v5866;
    };
    const v5868 = v5859.call(self, options, v5867);
    v5868;
};
const request_call = function (uri, options) {
    var opt;
    const v5869 = options.proxy;
    const v5870 = options.proxy;
    const v5871 = v5870.tls;
    const v5872 = !v5871;
    const v5873 = v5869 && v5872;
    if (v5873) {
        opt = PROXYOPTIONSHTTP;
        const v5874 = options.proxy;
        const v5875 = v5874.port;
        opt.port = v5875;
        const v5876 = options.proxy;
        const v5877 = v5876.hostname;
        opt.host = v5877;
        const v5878 = uri.href;
        opt.path = v5878;
        const v5879 = uri.headers;
        opt.headers = v5879;
        const v5880 = uri.method;
        opt.method = v5880;
        const v5881 = opt.headers;
        const v5882 = uri.host;
        v5881.host = v5882;
        const v5883 = options.proxy;
        const v5884 = v5883._auth;
        if (v5884) {
            const v5885 = opt.headers;
            const v5886 = options.proxy;
            const v5887 = v5886._auth;
            v5885['Proxy-Authorization'] = v5887;
        }
    } else {
        opt = uri;
    }
    let connection;
    const v5888 = uri.protocol;
    const v5889 = v5888 === 'https:';
    if (v5889) {
        connection = Https;
    } else {
        connection = Http;
    }
    let req;
    const v5890 = options.post;
    const v5891 = connection.request(opt, request_response);
    const v5892 = connection.get(opt, request_response);
    if (v5890) {
        req = v5891;
    } else {
        req = v5892;
    }
    req.$options = options;
    req.$uri = uri;
    const v5893 = options.callback;
    const v5894 = !v5893;
    if (v5894) {
        const v5895 = req.on('error', NOOP);
        v5895;
        return;
    }
    const v5896 = req.on('error', request_process_error);
    v5896;
    const v5897 = options.timeoutid;
    const v5898 = options.timeoutid;
    const v5899 = clearTimeout(v5898);
    const v5900 = v5897 && v5899;
    v5900;
    const v5901 = options.timeout;
    const v5902 = setTimeout(request_process_timeout, v5901, req);
    options.timeoutid = v5902;
    const v5903 = req.on('response', request_assign_res);
    v5903;
    const v5904 = options.upload;
    if (v5904) {
        options.first = true;
        const v5905 = options.files;
        const v5907 = function (file, next) {
            const v5906 = request_writefile(req, options, file, next);
            v5906;
        };
        const v5935 = function () {
            const v5908 = options.data;
            var keys = Object.keys(v5908);
            var i = 0;
            var length = keys.length;
            let v5909 = i < length;
            while (v5909) {
                const v5911 = options.data;
                const v5912 = keys[i];
                var value = v5911[v5912];
                const v5913 = value != null;
                if (v5913) {
                    const v5914 = options.first;
                    let v5915;
                    if (v5914) {
                        v5915 = '';
                    } else {
                        v5915 = NEWLINE;
                    }
                    const v5916 = v5915 + '--';
                    const v5917 = options.boundary;
                    const v5918 = v5916 + v5917;
                    const v5919 = v5918 + NEWLINE;
                    const v5920 = v5919 + 'Content-Disposition: form-data; name="';
                    const v5921 = keys[i];
                    const v5922 = v5920 + v5921;
                    const v5923 = v5922 + '"';
                    const v5924 = v5923 + NEWLINE;
                    const v5925 = v5924 + NEWLINE;
                    const v5926 = value.toString();
                    const v5927 = v5925 + v5926;
                    const v5928 = req.write(v5927);
                    v5928;
                    const v5929 = options.first;
                    if (v5929) {
                        options.first = false;
                    }
                }
                const v5910 = i++;
                v5909 = i < length;
            }
            const v5930 = NEWLINE + '--';
            const v5931 = options.boundary;
            const v5932 = v5930 + v5931;
            const v5933 = v5932 + '--';
            const v5934 = req.end(v5933);
            v5934;
        };
        const v5936 = v5905.wait(v5907, v5935);
        v5936;
    } else {
        const v5937 = options.data;
        const v5938 = req.end(v5937);
        v5938;
    }
};
const request_process_error = function (err) {
    var options = this.$options;
    const v5939 = options.callback;
    const v5940 = options.done;
    const v5941 = !v5940;
    const v5942 = v5939 && v5941;
    if (v5942) {
        const v5943 = options.timeoutid;
        if (v5943) {
            const v5944 = options.timeoutid;
            const v5945 = clearTimeout(v5944);
            v5945;
            options.timeoutid = null;
        }
        options.canceled = true;
        const v5946 = this.$uri;
        const v5947 = v5946.host;
        const v5948 = options.param;
        const v5949 = options.callback(err, '', 0, undefined, v5947, EMPTYOBJECT, v5948);
        v5949;
        options.callback = null;
        const v5950 = options.evt;
        const v5951 = v5950.removeAllListeners();
        v5951;
        options.evt = null;
    }
};
const request_process_timeout = function (req) {
    var options = req.$options;
    const v5952 = options.callback;
    if (v5952) {
        const v5953 = options.timeoutid;
        if (v5953) {
            const v5954 = options.timeoutid;
            const v5955 = clearTimeout(v5954);
            v5955;
            options.timeoutid = null;
        }
        const v5956 = req.socket;
        const v5957 = v5956.destroy();
        v5957;
        const v5958 = req.socket;
        const v5959 = v5958.end();
        v5959;
        const v5960 = req.abort();
        v5960;
        options.canceled = true;
        const v5961 = exports.httpStatus(408);
        const v5962 = new Error(v5961);
        const v5963 = req.$uri;
        const v5964 = v5963.host;
        const v5965 = options.param;
        const v5966 = options.callback(v5962, '', 0, undefined, v5964, EMPTYOBJECT, v5965);
        v5966;
        options.callback = null;
        const v5967 = options.evt;
        const v5968 = v5967.removeAllListeners();
        v5968;
        options.evt = null;
    }
};
const request_assign_res = function (response) {
    response.req = this;
};
const request_writefile = function (req, options, file, next) {
    const v5969 = file.buffer;
    const v5970 = typeof v5969;
    var type = v5970;
    let filename;
    const v5971 = type === 'string';
    const v5972 = file.buffer;
    const v5973 = file.filename;
    const v5974 = exports.getName(v5973);
    if (v5971) {
        filename = v5972;
    } else {
        filename = v5974;
    }
    const v5975 = options.first;
    let v5976;
    if (v5975) {
        v5976 = '';
    } else {
        v5976 = NEWLINE;
    }
    const v5977 = v5976 + '--';
    const v5978 = options.boundary;
    const v5979 = v5977 + v5978;
    const v5980 = v5979 + NEWLINE;
    const v5981 = v5980 + 'Content-Disposition: form-data; name="';
    const v5982 = file.name;
    const v5983 = v5981 + v5982;
    const v5984 = v5983 + '"; filename="';
    const v5985 = v5984 + filename;
    const v5986 = v5985 + '"';
    const v5987 = v5986 + NEWLINE;
    const v5988 = v5987 + 'Content-Type: ';
    const v5989 = exports.getExtension(filename);
    const v5990 = exports.getContentType(v5989);
    const v5991 = v5988 + v5990;
    const v5992 = v5991 + NEWLINE;
    const v5993 = v5992 + NEWLINE;
    const v5994 = req.write(v5993);
    v5994;
    const v5995 = options.first;
    if (v5995) {
        options.first = false;
    }
    const v5996 = file.buffer;
    const v5997 = type === 'object';
    const v5998 = v5996 && v5997;
    if (v5998) {
        const v5999 = file.buffer;
        const v6000 = req.write(v5999);
        v6000;
        const v6001 = next();
        v6001;
    } else {
        const v6002 = file.filename;
        var stream = Fs.createReadStream(v6002);
        const v6003 = stream.once('close', next);
        v6003;
        const v6004 = stream.pipe(req, STREAMPIPE);
        v6004;
    }
};
const request_response = function (res) {
    var options = this.$options;
    var uri = this.$uri;
    res._buffer = null;
    res._bufferlength = 0;
    const v6005 = res.statusCode;
    const v6006 = v6005 === 301;
    const v6007 = res.statusCode;
    const v6008 = v6007 === 302;
    const v6009 = v6006 || v6008;
    if (v6009) {
        const v6010 = options.noredirect;
        if (v6010) {
            const v6011 = options.timeoutid;
            const v6012 = options.timeoutid;
            const v6013 = clearTimeout(v6012);
            const v6014 = v6011 && v6013;
            v6014;
            options.canceled = true;
            const v6015 = options.callback;
            if (v6015) {
                const v6016 = res.statusCode;
                const v6017 = res.headers;
                const v6018 = uri.host;
                const v6019 = options.param;
                const v6020 = options.callback(null, '', v6016, v6017, v6018, EMPTYOBJECT, v6019);
                v6020;
                options.callback = null;
            }
            const v6021 = options.evt;
            if (v6021) {
                const v6022 = options.evt;
                const v6023 = v6022.removeAllListeners();
                v6023;
                options.evt = null;
            }
            const v6024 = res.req;
            const v6025 = v6024.removeAllListeners();
            v6025;
            const v6026 = res.removeAllListeners();
            v6026;
            res.req = null;
            res = null;
            return;
        }
        const v6027 = options.redirect;
        const v6028 = v6027 > 3;
        if (v6028) {
            const v6029 = options.timeoutid;
            const v6030 = options.timeoutid;
            const v6031 = clearTimeout(v6030);
            const v6032 = v6029 && v6031;
            v6032;
            options.canceled = true;
            const v6033 = options.callback;
            if (v6033) {
                const v6034 = new Error('Too many redirects.');
                const v6035 = uri.host;
                const v6036 = options.param;
                const v6037 = options.callback(v6034, '', 0, undefined, v6035, EMPTYOBJECT, v6036);
                v6037;
                options.callback = null;
            }
            const v6038 = options.evt;
            if (v6038) {
                const v6039 = options.evt;
                const v6040 = v6039.removeAllListeners();
                v6040;
                options.evt = null;
            }
            const v6041 = res.req;
            const v6042 = v6041.removeAllListeners();
            v6042;
            const v6043 = res.removeAllListeners();
            v6043;
            res.req = null;
            res = null;
            return;
        }
        const v6044 = options.redirect;
        const v6045 = v6044++;
        v6045;
        const v6046 = res.headers;
        var loc = v6046['location'];
        var proto = loc.substring(0, 6);
        const v6047 = proto !== 'http:/';
        const v6048 = proto !== 'https:';
        const v6049 = v6047 && v6048;
        if (v6049) {
            const v6050 = uri.protocol;
            const v6051 = v6050 + '//';
            const v6052 = uri.hostname;
            const v6053 = v6051 + v6052;
            loc = v6053 + loc;
        }
        var tmp = Url.parse(loc);
        const v6054 = uri.headers;
        tmp.headers = v6054;
        const v6055 = uri.method;
        tmp.method = v6055;
        const v6056 = res.req;
        const v6057 = v6056.removeAllListeners();
        v6057;
        res.req = null;
        const v6058 = options.proxy;
        const v6059 = tmp.protocol;
        const v6060 = v6059 === 'https:';
        const v6061 = v6058 && v6060;
        if (v6061) {
            const v6062 = options.proxy;
            v6062.tls = true;
            options.uri = tmp;
            const v6063 = options.uri;
            v6063.agent = new ProxyAgent(options);
            const v6064 = options.uri;
            const v6065 = v6064.agent;
            const v6066 = Http.request;
            v6065.request = v6066;
            const v6067 = options.uri;
            const v6068 = v6067.agent;
            v6068.createSocket = createSecureSocket;
            const v6069 = options.uri;
            const v6070 = v6069.agent;
            v6070.defaultPort = 443;
        }
        const v6071 = options.resolve;
        const v6072 = !v6071;
        if (v6072) {
            const v6073 = res.removeAllListeners();
            v6073;
            res = null;
            const v6074 = request_call(tmp, options);
            return v6074;
        }
        const v6079 = function (err, u) {
            const v6075 = !err;
            if (v6075) {
                const v6076 = u.host;
                tmp.host = v6076;
            }
            const v6077 = res.removeAllListeners();
            v6077;
            res = null;
            const v6078 = request_call(tmp, options);
            v6078;
        };
        const v6080 = exports.resolve(tmp, v6079);
        v6080;
        return;
    }
    const v6081 = res.headers;
    const v6082 = v6081['content-length'];
    const v6083 = +v6082;
    options.length = v6083 || 0;
    const v6084 = options.evt;
    const v6085 = options.evt;
    const v6086 = v6085.$events;
    const v6087 = v6086.begin;
    const v6088 = v6084 && v6087;
    const v6089 = options.evt;
    const v6090 = options.length;
    const v6091 = v6089.emit('begin', v6090);
    const v6092 = v6088 && v6091;
    v6092;
    const v6093 = options.cookies;
    if (v6093) {
        const v6094 = res.headers;
        const v6095 = v6094['set-cookie'];
        var arr = v6095 || '';
        const v6096 = arr instanceof Array;
        const v6097 = !v6096;
        const v6098 = arr && v6097;
        if (v6098) {
            arr = [arr];
        }
        const v6099 = arr instanceof Array;
        if (v6099) {
            var i = 0;
            var length = arr.length;
            let v6100 = i < length;
            while (v6100) {
                var line = arr[i];
                var end = line.indexOf(';');
                const v6102 = -1;
                const v6103 = end === v6102;
                if (v6103) {
                    end = line.length;
                }
                line = line.substring(0, end);
                var index = line.indexOf('=');
                const v6104 = -1;
                const v6105 = index !== v6104;
                if (v6105) {
                    const v6108 = index + 1;
                    const v6109 = line.substring(v6108);
                    const v6110 = decodeURIComponent(v6109);
                    v6106[v6107] = v6110;
                }
                const v6101 = i++;
                v6100 = i < length;
            }
        }
    }
    const v6111 = res.statusCode;
    const v6112 = v6111 === 204;
    if (v6112) {
        options.done = true;
        const v6113 = request_process_end.call(res);
        v6113;
        return;
    }
    const v6114 = res.headers;
    const v6115 = v6114['content-encoding'];
    var encoding = v6115 || '';
    if (encoding) {
        const v6116 = encoding.split(',');
        encoding = v6116[0];
    }
    const v6117 = COMPRESS[encoding];
    if (v6117) {
        let zlib;
        const v6118 = encoding === 'gzip';
        const v6119 = Zlib.createGunzip();
        const v6120 = Zlib.createInflate();
        if (v6118) {
            zlib = v6119;
        } else {
            zlib = v6120;
        }
        const v6121 = res.buffer;
        zlib._buffer = v6121;
        const v6122 = res.headers;
        zlib.headers = v6122;
        const v6123 = res.statusCode;
        zlib.statusCode = v6123;
        zlib.res = res;
        const v6124 = zlib.on('data', request_process_data);
        v6124;
        const v6125 = zlib.on('end', request_process_end);
        v6125;
        const v6126 = res.pipe(zlib);
        v6126;
    } else {
        const v6127 = res.on('data', request_process_data);
        v6127;
        const v6128 = res.on('end', request_process_end);
        v6128;
    }
    const v6129 = res.resume();
    v6129;
};
const request_process_data = function (chunk) {
    var self = this;
    const v6130 = self.req;
    const v6131 = !v6130;
    if (v6131) {
        self = self.res;
    }
    const v6132 = self.req;
    var options = v6132.$options;
    const v6133 = options.canceled;
    const v6134 = options.max;
    const v6135 = self._bufferlength;
    const v6136 = options.max;
    const v6137 = v6135 > v6136;
    const v6138 = v6134 && v6137;
    const v6139 = v6133 || v6138;
    if (v6139) {
        return;
    }
    const v6140 = self._buffer;
    if (v6140) {
        const v6141 = self._buffer;
        CONCAT[0] = v6141;
        CONCAT[1] = chunk;
        const v6142 = Buffer.concat(CONCAT);
        self._buffer = v6142;
    } else {
        self._buffer = chunk;
    }
    const v6143 = chunk.length;
    self._bufferlength += v6143;
    const v6144 = options.evt;
    const v6145 = options.evt;
    const v6146 = v6145.$events;
    const v6147 = v6146.data;
    const v6148 = v6144 && v6147;
    const v6149 = options.evt;
    const v6150 = options.length;
    const v6151 = self._bufferlength;
    const v6152 = options.length;
    const v6153 = v6151 / v6152;
    const v6154 = v6153 * 100;
    let v6155;
    if (v6150) {
        v6155 = v6154;
    } else {
        v6155 = 0;
    }
    const v6156 = v6149.emit('data', chunk, v6155);
    const v6157 = v6148 && v6156;
    v6157;
};
const request_process_end = function () {
    var res = this;
    const v6158 = res.req;
    const v6159 = !v6158;
    if (v6159) {
        res = res.res;
    }
    var self = res;
    const v6160 = self.req;
    var options = v6160.$options;
    const v6161 = self.req;
    var uri = v6161.$uri;
    var data;
    const v6162 = options.socket;
    const v6163 = options.uri;
    const v6164 = v6163.agent;
    const v6165 = v6164.destroy();
    const v6166 = v6162 && v6165;
    v6166;
    const v6167 = options.timeoutid;
    const v6168 = options.timeoutid;
    const v6169 = clearTimeout(v6168);
    const v6170 = v6167 && v6169;
    v6170;
    const v6171 = options.canceled;
    if (v6171) {
        return;
    }
    const v6172 = self.headers;
    var ct = v6172['content-type'];
    const v6173 = !ct;
    const v6174 = REG_TEXTAPPLICATION.test(ct);
    const v6175 = v6173 || v6174;
    if (v6175) {
        const v6176 = self._buffer;
        const v6177 = options.encoding;
        const v6178 = v6177 === 'binary';
        const v6179 = self._buffer;
        const v6180 = self._buffer;
        const v6181 = options.encoding;
        const v6182 = v6180.toString(v6181);
        let v6183;
        if (v6178) {
            v6183 = v6179;
        } else {
            v6183 = v6182;
        }
        if (v6176) {
            data = v6183;
        } else {
            data = '';
        }
    } else {
        data = self._buffer;
    }
    options.canceled = true;
    self._buffer = undefined;
    const v6184 = options.evt;
    if (v6184) {
        const v6185 = options.evt;
        const v6186 = v6185.$events;
        const v6187 = v6186.end;
        const v6188 = options.evt;
        const v6189 = self.statusCode;
        const v6190 = self.headers;
        const v6191 = uri.host;
        const v6192 = options.cookies;
        const v6193 = options.param;
        const v6194 = v6188.emit('end', data, v6189, v6190, v6191, v6192, v6193);
        const v6195 = v6187 && v6194;
        v6195;
        const v6196 = options.evt;
        const v6197 = v6196.removeAllListeners();
        v6197;
        options.evt = null;
    }
    const v6198 = options.callback;
    if (v6198) {
        const v6199 = uri.method;
        const v6200 = v6199 === 'HEAD';
        const v6201 = self.headers;
        let v6202;
        if (v6200) {
            v6202 = v6201;
        } else {
            v6202 = data;
        }
        const v6203 = self.statusCode;
        const v6204 = self.headers;
        const v6205 = uri.host;
        const v6206 = options.cookies;
        const v6207 = options.param;
        const v6208 = options.callback(null, v6202, v6203, v6204, v6205, v6206, v6207);
        v6208;
        options.callback = null;
    }
    const v6209 = res.statusCode;
    const v6210 = v6209 !== 204;
    if (v6210) {
        const v6211 = res.req;
        const v6212 = res.req;
        const v6213 = v6212.removeAllListeners();
        const v6214 = v6211 && v6213;
        v6214;
        const v6215 = res.removeAllListeners();
        v6215;
    }
};
const v6218 = function (url, flags, data, cookies, headers, encoding, timeout) {
    const v6217 = function (callback) {
        const v6216 = exports.request(url, flags, data, callback, cookies, headers, encoding, timeout);
        v6216;
    };
    return v6217;
};
exports.$$request = v6218;
const v6225 = function (str) {
    const v6219 = str instanceof Buffer;
    const v6220 = str.toString('base64');
    const v6221 = str.toString();
    const v6222 = Buffer.from(v6221, 'utf8');
    const v6223 = v6222.toString('base64');
    let v6224;
    if (v6219) {
        v6224 = v6220;
    } else {
        v6224 = v6223;
    }
    return v6224;
};
exports.btoa = v6225;
const v6228 = function (str) {
    const v6226 = Buffer.from(str, 'base64');
    const v6227 = v6226.toString('utf8');
    return v6227;
};
exports.atob = v6228;
const v6350 = function (url, flags, data, callback, cookies, headers, encoding, timeout, param) {
    const v6229 = typeof data;
    const v6230 = v6229 === 'function';
    if (v6230) {
        timeout = encoding;
        encoding = headers;
        headers = cookies;
        cookies = callback;
        callback = data;
        data = '';
    }
    const v6231 = typeof cookies;
    const v6232 = v6231 === 'number';
    if (v6232) {
        cookies = null;
        timeout = cookies;
    }
    const v6233 = typeof headers;
    const v6234 = v6233 === 'number';
    if (v6234) {
        headers = null;
        timeout = headers;
    }
    const v6235 = typeof encoding;
    const v6236 = v6235 === 'number';
    if (v6236) {
        encoding = null;
        timeout = encoding;
    }
    const v6237 = typeof encoding;
    const v6238 = v6237 !== 'string';
    if (v6238) {
        encoding = ENCODING;
    }
    var proxy;
    var type = 0;
    var method = 'GET';
    const v6239 = new EventEmitter2();
    const v6240 = timeout || 60000;
    var options = {};
    options.callback = callback;
    options.resolve = false;
    options.length = 0;
    options.evt = v6239;
    options.timeout = v6240;
    options.post = false;
    options.encoding = encoding;
    if (headers) {
        const v6241 = {};
        headers = exports.extend(v6241, headers);
    } else {
        headers = {};
    }
    const v6242 = data === null;
    if (v6242) {
        data = '';
    }
    const v6243 = flags instanceof Array;
    if (v6243) {
        var i = 0;
        var length = flags.length;
        let v6244 = i < length;
        while (v6244) {
            const v6246 = flags[i];
            const v6247 = v6246 > 0;
            if (v6247) {
                const v6248 = flags[i];
                options.timeout = v6248;
                continue;
            }
            const v6249 = flags[i];
            const v6250 = v6249[0];
            const v6251 = v6250 === '<';
            if (v6251) {
                continue;
            }
            const v6252 = flags[i];
            const v6253 = v6252[0];
            const v6254 = v6253 === 'p';
            const v6255 = flags[i];
            const v6256 = v6255[4];
            const v6257 = v6256 === 'y';
            const v6258 = v6254 && v6257;
            if (v6258) {
                const v6259 = flags[i];
                const v6260 = v6259.substring(6);
                proxy = parseProxy(v6260);
                continue;
            }
            const v6261 = flags[i];
            const v6262 = v6261.toLowerCase();
            switch (v6262) {
            case 'utf8':
            case 'ascii':
            case 'base64':
            case 'binary':
            case 'hex':
                const v6263 = flags[i];
                options.encoding = v6263;
                break;
            case 'xhr':
                headers['X-Requested-With'] = 'XMLHttpRequest';
                break;
            case 'plain':
                headers['Content-Type'] = 'text/plain';
                break;
            case 'html':
                headers['Content-Type'] = 'text/html';
                break;
            case 'json':
                headers['Content-Type'] = 'application/json';
                type = 1;
                break;
            case 'xml':
                headers['Content-Type'] = 'text/xml';
                type = 2;
                break;
            case 'get':
            case 'head':
            case 'options':
                const v6264 = flags[i];
                const v6265 = v6264.charCodeAt(0);
                const v6266 = v6265 > 96;
                const v6267 = flags[i];
                const v6268 = v6267.toUpperCase();
                const v6269 = flags[i];
                if (v6266) {
                    method = v6268;
                } else {
                    method = v6269;
                }
                break;
            case 'upload':
                headers['Content-Type'] = 'multipart/form-data';
                break;
            case 'post':
            case 'patch':
            case 'delete':
            case 'put':
                const v6270 = flags[i];
                const v6271 = v6270.charCodeAt(0);
                const v6272 = v6271 > 96;
                const v6273 = flags[i];
                const v6274 = v6273.toUpperCase();
                const v6275 = flags[i];
                if (v6272) {
                    method = v6274;
                } else {
                    method = v6275;
                }
                const v6276 = headers['Content-Type'];
                const v6277 = !v6276;
                if (v6277) {
                    headers['Content-Type'] = 'application/x-www-form-urlencoded';
                }
                break;
            case 'dnscache':
                options.resolve = true;
                break;
            case 'keepalive':
                options.keepalive = true;
                break;
            default:
                const v6278 = flags[i];
                const v6279 = v6278.charCodeAt(0);
                const v6280 = v6279 > 96;
                const v6281 = flags[i];
                const v6282 = v6281.toUpperCase();
                const v6283 = flags[i];
                if (v6280) {
                    method = v6282;
                } else {
                    method = v6283;
                }
                break;
            }
            const v6245 = i++;
            v6244 = i < length;
        }
    }
    const v6284 = !method;
    if (v6284) {
        method = 'GET';
    }
    const v6285 = NOBODY[method];
    const v6286 = !v6285;
    options.post = v6286;
    const v6287 = typeof data;
    const v6288 = v6287 !== 'string';
    if (v6288) {
        const v6289 = type === 1;
        const v6290 = JSON.stringify(data);
        const v6291 = Qs.stringify(data);
        if (v6289) {
            data = v6290;
        } else {
            data = v6291;
        }
    } else {
        const v6292 = data[0];
        const v6293 = v6292 === '?';
        if (v6293) {
            data = data.substring(1);
        }
    }
    const v6294 = options.post;
    const v6295 = !v6294;
    if (v6295) {
        const v6296 = data.length;
        const v6297 = url.indexOf('?');
        const v6298 = -1;
        const v6299 = v6297 === v6298;
        const v6300 = v6296 && v6299;
        if (v6300) {
            url += '?' + data;
        }
        data = '';
    }
    if (cookies) {
        var builder = '';
        let m;
        for (m in cookies) {
            let v6301;
            if (builder) {
                v6301 = '; ';
            } else {
                v6301 = '';
            }
            const v6302 = v6301 + m;
            const v6303 = v6302 + '=';
            const v6304 = cookies[m];
            builder += v6303 + v6304;
        }
        if (builder) {
            headers['Cookie'] = builder;
        }
    }
    var uri = Url.parse(url);
    uri.method = method;
    uri.headers = headers;
    options.uri = uri;
    options.param = param;
    const v6305 = options.resolve;
    const v6306 = uri.hostname;
    const v6307 = v6306 === 'localhost';
    const v6308 = uri.hostname;
    const v6309 = v6308.charCodeAt(0);
    const v6310 = v6309 < 64;
    const v6311 = v6307 || v6310;
    const v6312 = v6305 && v6311;
    if (v6312) {
        options.resolve = null;
    }
    const v6313 = data.length;
    if (v6313) {
        const v6314 = Buffer.from(data, ENCODING);
        options.data = v6314;
        const v6315 = options.data;
        const v6316 = v6315.length;
        headers['Content-Length'] = v6316;
    }
    const v6317 = CONF.default_proxy;
    const v6318 = !proxy;
    const v6319 = v6317 && v6318;
    const v6320 = uri.hostname;
    const v6321 = PROXYBLACKLIST[v6320];
    const v6322 = !v6321;
    const v6323 = v6319 && v6322;
    if (v6323) {
        const v6324 = CONF.default_proxy;
        proxy = parseProxy(v6324);
    }
    options.proxy = proxy;
    const v6325 = uri.protocol;
    const v6326 = v6325 === 'https:';
    const v6327 = proxy && v6326;
    if (v6327) {
        proxy.tls = true;
        uri.agent = new ProxyAgent(options);
        const v6328 = uri.agent;
        const v6329 = Http.request;
        v6328.request = v6329;
        const v6330 = uri.agent;
        v6330.createSocket = createSecureSocket;
        const v6331 = uri.agent;
        v6331.defaultPort = 443;
    }
    const v6332 = options.keepalive;
    const v6333 = options.proxy;
    const v6334 = !v6333;
    const v6335 = v6332 && v6334;
    const v6336 = uri.protocol;
    const v6337 = v6336 !== 'https:';
    const v6338 = v6335 && v6337;
    if (v6338) {
        uri.agent = KeepAlive;
    }
    const v6339 = global.F;
    if (v6339) {
        const v6340 = global.F;
        const v6341 = v6340.stats;
        const v6342 = v6341.performance;
        const v6343 = v6342.external;
        const v6344 = v6343++;
        v6344;
    }
    if (proxy) {
        const v6345 = download_call(uri, options);
        v6345;
    } else {
        const v6346 = options.resolve;
        if (v6346) {
            const v6347 = exports.resolve(url, download_resolve, options);
            v6347;
        } else {
            const v6348 = download_call(uri, options);
            v6348;
        }
    }
    const v6349 = options.evt;
    return v6349;
};
exports.download = v6350;
const download_resolve = function (err, uri, options) {
    const v6351 = !err;
    if (v6351) {
        const v6352 = options.uri;
        const v6353 = uri.host;
        v6352.host = v6353;
    }
    const v6354 = options.uri;
    const v6355 = download_call(v6354, options);
    v6355;
};
const download_call = function (uri, options) {
    var opt;
    options.length = 0;
    const v6356 = options.proxy;
    const v6357 = options.proxy;
    const v6358 = v6357.tls;
    const v6359 = !v6358;
    const v6360 = v6356 && v6359;
    if (v6360) {
        opt = PROXYOPTIONSHTTP;
        const v6361 = options.proxy;
        const v6362 = v6361.port;
        opt.port = v6362;
        const v6363 = options.proxy;
        const v6364 = v6363.hostname;
        opt.host = v6364;
        const v6365 = uri.href;
        opt.path = v6365;
        const v6366 = uri.headers;
        opt.headers = v6366;
        const v6367 = uri.method;
        opt.method = v6367;
        const v6368 = options.proxy;
        const v6369 = v6368._auth;
        if (v6369) {
            const v6370 = opt.headers;
            const v6371 = options.proxy;
            const v6372 = v6371._auth;
            v6370['Proxy-Authorization'] = v6372;
        }
    } else {
        opt = uri;
    }
    let connection;
    const v6373 = uri.protocol;
    const v6374 = v6373 === 'https:';
    if (v6374) {
        connection = Https;
    } else {
        connection = Http;
    }
    let req;
    const v6375 = options.post;
    const v6376 = connection.request(opt, download_response);
    const v6377 = connection.get(opt, download_response);
    if (v6375) {
        req = v6376;
    } else {
        req = v6377;
    }
    req.$options = options;
    req.$uri = uri;
    const v6378 = options.callback;
    const v6379 = !v6378;
    if (v6379) {
        const v6380 = req.on('error', NOOP);
        v6380;
        return;
    }
    const v6381 = req.on('error', download_process_error);
    v6381;
    const v6382 = options.timeoutid;
    const v6383 = options.timeoutid;
    const v6384 = clearTimeout(v6383);
    const v6385 = v6382 && v6384;
    v6385;
    const v6386 = options.timeout;
    const v6387 = setTimeout(download_process_timeout, v6386);
    options.timeoutid = v6387;
    const v6388 = req.on('response', download_assign_res);
    v6388;
    const v6389 = options.data;
    const v6390 = req.end(v6389);
    v6390;
};
const download_assign_res = function (response) {
    response.req = this;
    var options = this.$options;
    const v6391 = response.headers;
    const v6392 = v6391['content-length'];
    const v6393 = +v6392;
    options.length = v6393 || 0;
    const v6394 = options.evt;
    const v6395 = options.evt;
    const v6396 = v6395.$events;
    const v6397 = v6396.begin;
    const v6398 = v6394 && v6397;
    const v6399 = options.evt;
    const v6400 = options.length;
    const v6401 = v6399.emit('begin', v6400);
    const v6402 = v6398 && v6401;
    v6402;
};
const download_process_timeout = function (req) {
    var options = req.$options;
    const v6403 = options.callback;
    if (v6403) {
        const v6404 = options.timeoutid;
        const v6405 = options.timeoutid;
        const v6406 = clearTimeout(v6405);
        const v6407 = v6404 && v6406;
        v6407;
        options.timeoutid = null;
        const v6408 = req.abort();
        v6408;
        const v6409 = exports.httpStatus(408);
        const v6410 = new Error(v6409);
        const v6411 = options.param;
        const v6412 = options.callback(v6410, null, null, null, null, v6411);
        v6412;
        options.callback = null;
        const v6413 = options.evt;
        const v6414 = v6413.removeAllListeners();
        v6414;
        options.evt = null;
        options.canceled = true;
    }
};
const download_process_error = function (err) {
    var options = this.$options;
    const v6415 = options.callback;
    const v6416 = options.done;
    const v6417 = !v6416;
    const v6418 = v6415 && v6417;
    if (v6418) {
        const v6419 = options.timeoutid;
        const v6420 = options.timeoutid;
        const v6421 = clearTimeout(v6420);
        const v6422 = v6419 && v6421;
        v6422;
        options.timeoutid = null;
        const v6423 = options.param;
        const v6424 = options.callback(err, null, null, null, null, v6423);
        v6424;
        options.callback = null;
        const v6425 = options.evt;
        const v6426 = v6425.removeAllListeners();
        v6426;
        options.evt = null;
        options.canceled = true;
    }
};
const download_response = function (res) {
    var options = this.$options;
    var uri = this.$uri;
    res._bufferlength = 0;
    const v6427 = res.statusCode;
    const v6428 = v6427 === 301;
    const v6429 = res.statusCode;
    const v6430 = v6429 === 302;
    const v6431 = v6428 || v6430;
    if (v6431) {
        const v6432 = options.redirect;
        const v6433 = v6432 > 3;
        if (v6433) {
            options.canceled = true;
            const v6434 = options.timeoutid;
            const v6435 = options.timeoutid;
            const v6436 = clearTimeout(v6435);
            const v6437 = v6434 && v6436;
            v6437;
            const v6438 = options.callback;
            const v6439 = new Error('Too many redirects.');
            const v6440 = options.param;
            const v6441 = options.callback(v6439, null, null, null, null, v6440);
            const v6442 = v6438 && v6441;
            v6442;
            const v6443 = res.req;
            const v6444 = v6443.removeAllListeners();
            v6444;
            res.req = null;
            const v6445 = res.removeAllListeners();
            v6445;
            res = null;
            return;
        }
        const v6446 = options.redirect;
        const v6447 = v6446++;
        v6447;
        const v6448 = res.headers;
        var loc = v6448['location'];
        var proto = loc.substring(0, 6);
        const v6449 = proto !== 'http:/';
        const v6450 = proto !== 'https:';
        const v6451 = v6449 && v6450;
        if (v6451) {
            const v6452 = uri.protocol;
            const v6453 = v6452 + '//';
            const v6454 = uri.hostname;
            const v6455 = v6453 + v6454;
            loc = v6455 + loc;
        }
        var tmp = Url.parse(loc);
        const v6456 = uri.headers;
        tmp.headers = v6456;
        const v6457 = uri.method;
        tmp.method = v6457;
        const v6458 = res.req;
        const v6459 = v6458.removeAllListeners();
        v6459;
        res.req = null;
        const v6460 = options.proxy;
        const v6461 = tmp.protocol;
        const v6462 = v6461 === 'https:';
        const v6463 = v6460 && v6462;
        if (v6463) {
            options.uri = tmp;
            const v6464 = download_call(options, request_call);
            v6464;
            return;
        }
        const v6465 = options.resolve;
        const v6466 = !v6465;
        if (v6466) {
            const v6467 = res.removeAllListeners();
            v6467;
            res = null;
            const v6468 = download_call(tmp, options);
            return v6468;
        }
        const v6473 = function (err, u) {
            const v6469 = !err;
            if (v6469) {
                const v6470 = u.host;
                tmp.host = v6470;
            }
            const v6471 = res.removeAllListeners();
            v6471;
            res = null;
            const v6472 = download_call(tmp, options);
            v6472;
        };
        const v6474 = exports.resolve(loc, v6473);
        v6474;
        return;
    }
    const v6475 = res.on('data', download_process_data);
    v6475;
    const v6476 = res.on('end', download_process_end);
    v6476;
    const v6477 = res.resume();
    v6477;
    const v6478 = options.timeoutid;
    const v6479 = options.timeoutid;
    const v6480 = clearTimeout(v6479);
    const v6481 = v6478 && v6480;
    v6481;
    const v6482 = options.callback;
    const v6483 = res.statusCode;
    const v6484 = res.headers;
    const v6485 = uri.host;
    const v6486 = options.param;
    const v6487 = options.callback(null, res, v6483, v6484, v6485, v6486);
    const v6488 = v6482 && v6487;
    v6488;
};
const v6491 = function (url, flags, data, cookies, headers, encoding, timeout) {
    const v6490 = function (callback) {
        const v6489 = exports.download(url, flags, data, callback, cookies, headers, encoding, timeout);
        v6489;
    };
    return v6490;
};
exports.$$download = v6491;
const download_process_end = function () {
    var res = this;
    var self = this;
    const v6492 = self.req;
    var options = v6492.$options;
    const v6493 = self.req;
    var uri = v6493.$uri;
    const v6494 = options.canceled;
    const v6495 = !v6494;
    if (v6495) {
        let str;
        const v6496 = self._buffer;
        const v6497 = self._buffer;
        const v6498 = options.encoding;
        const v6499 = v6497.toString(v6498);
        if (v6496) {
            str = v6499;
        } else {
            str = '';
        }
        self._buffer = undefined;
        const v6500 = options.evt;
        const v6501 = options.evt;
        const v6502 = v6501.$events;
        const v6503 = v6502.end;
        const v6504 = v6500 && v6503;
        const v6505 = options.evt;
        const v6506 = self.statusCode;
        const v6507 = self.headers;
        const v6508 = uri.host;
        const v6509 = v6505.emit('end', str, v6506, v6507, v6508);
        const v6510 = v6504 && v6509;
        v6510;
    }
    const v6511 = options.evt;
    if (v6511) {
        const v6512 = options.evt;
        const v6513 = v6512.removeAllListeners();
        v6513;
        options.evt = null;
    }
    const v6514 = res.req;
    const v6515 = res.req;
    const v6516 = v6515.removeAllListeners();
    const v6517 = v6514 && v6516;
    v6517;
    const v6518 = res.removeAllListeners();
    v6518;
};
const download_process_data = function (chunk) {
    var self = this;
    const v6519 = self.req;
    var options = v6519.$options;
    const v6520 = options.canceled;
    const v6521 = !v6520;
    if (v6521) {
        const v6522 = chunk.length;
        self._bufferlength += v6522;
        const v6523 = options.evt;
        if (v6523) {
            const v6524 = options.evt;
            const v6525 = v6524.$events;
            const v6526 = v6525.data;
            const v6527 = options.evt;
            const v6528 = options.length;
            const v6529 = self._bufferlength;
            const v6530 = options.length;
            const v6531 = v6529 / v6530;
            const v6532 = v6531 * 100;
            let v6533;
            if (v6528) {
                v6533 = v6532;
            } else {
                v6533 = 0;
            }
            const v6534 = v6527.emit('data', chunk, v6533);
            const v6535 = v6526 && v6534;
            v6535;
            const v6536 = options.evt;
            const v6537 = v6536.$events;
            const v6538 = v6537.progress;
            const v6539 = options.evt;
            const v6540 = options.length;
            const v6541 = self._bufferlength;
            const v6542 = options.length;
            const v6543 = v6541 / v6542;
            const v6544 = v6543 * 100;
            let v6545;
            if (v6540) {
                v6545 = v6544;
            } else {
                v6545 = 0;
            }
            const v6546 = v6539.emit('progress', v6545);
            const v6547 = v6538 && v6546;
            v6547;
        }
    }
};
const v6661 = function (name, stream, url, callback, cookies, headers, method, timeout) {
    const v6548 = OBSOLETE('U.send()', 'Use U.upload() instead of U.send().');
    v6548;
    const v6549 = typeof stream;
    const v6550 = v6549 === 'string';
    if (v6550) {
        stream = Fs.createReadStream(stream, STREAM_READONLY);
    }
    const v6551 = Math.random();
    const v6552 = v6551.toString(16);
    const v6553 = v6552.substring(2);
    var BOUNDARY = '----totaljs' + v6553;
    var h = {};
    if (headers) {
        const v6554 = exports.extend(h, headers);
        v6554;
    }
    if (cookies) {
        var builder = '';
        let m;
        for (m in cookies) {
            let v6555;
            if (builder) {
                v6555 = '; ';
            } else {
                v6555 = '';
            }
            const v6556 = v6555 + m;
            const v6557 = v6556 + '=';
            const v6558 = cookies[m];
            builder += v6557 + v6558;
        }
        if (builder) {
            h['Cookie'] = builder;
        }
    }
    name = exports.getName(name);
    h['Cache-Control'] = 'max-age=0';
    h['Content-Type'] = 'multipart/form-data; boundary=' + BOUNDARY;
    const v6559 = global.F;
    if (v6559) {
        const v6560 = global.F;
        const v6561 = v6560.stats;
        const v6562 = v6561.performance;
        const v6563 = v6562.external;
        const v6564 = v6563++;
        v6564;
    }
    var e = new EventEmitter2();
    var uri = Url.parse(url);
    const v6565 = uri.protocol;
    const v6566 = uri.auth;
    const v6567 = method || 'POST';
    const v6568 = uri.hostname;
    const v6569 = uri.port;
    const v6570 = uri.path;
    var options = {};
    options.protocol = v6565;
    options.auth = v6566;
    options.method = v6567;
    options.hostname = v6568;
    options.port = v6569;
    options.path = v6570;
    options.agent = false;
    options.headers = h;
    var responseLength = 0;
    var response = function (res) {
        const v6571 = Buffer.alloc(0);
        res.body = v6571;
        res._bufferlength = 0;
        const v6583 = function (chunk) {
            const v6572 = res.body;
            CONCAT[0] = v6572;
            CONCAT[1] = chunk;
            const v6573 = Buffer.concat(CONCAT);
            res.body = v6573;
            const v6574 = chunk.length;
            res._bufferlength += v6574;
            const v6575 = e.$events;
            const v6576 = v6575.data;
            const v6577 = res._bufferlength;
            const v6578 = v6577 / responseLength;
            const v6579 = v6578 * 100;
            let v6580;
            if (responseLength) {
                v6580 = v6579;
            } else {
                v6580 = 0;
            }
            const v6581 = e.emit('data', chunk, v6580);
            const v6582 = v6576 && v6581;
            v6582;
        };
        const v6584 = res.on('data', v6583);
        v6584;
        const v6599 = function () {
            var self = this;
            const v6585 = e.$events;
            const v6586 = v6585.end;
            const v6587 = self.statusCode;
            const v6588 = self.headers;
            const v6589 = e.emit('end', v6587, v6588);
            const v6590 = v6586 && v6589;
            v6590;
            const v6591 = e.removeAllListeners();
            v6591;
            e = null;
            const v6592 = self.body;
            const v6593 = v6592.toString('utf8');
            const v6594 = self.statusCode;
            const v6595 = self.headers;
            const v6596 = uri.host;
            const v6597 = callback(null, v6593, v6594, v6595, v6596);
            const v6598 = callback && v6597;
            v6598;
            self.body = null;
        };
        const v6600 = res.on('end', v6599);
        v6600;
    };
    let connection;
    const v6601 = options.protocol;
    const v6602 = v6601 === 'https:';
    if (v6602) {
        connection = Https;
    } else {
        connection = Http;
    }
    var req = connection.request(options, response);
    const v6610 = function (response) {
        const v6603 = response.headers;
        const v6604 = v6603['content-length'];
        const v6605 = +v6604;
        responseLength = v6605 || 0;
        const v6606 = e.$events;
        const v6607 = v6606.begin;
        const v6608 = e.emit('begin', responseLength);
        const v6609 = v6607 && v6608;
        v6609;
    };
    const v6611 = req.on('response', v6610);
    v6611;
    const v6612 = timeout || 60000;
    const v6620 = function () {
        const v6613 = req.removeAllListeners();
        v6613;
        req = null;
        const v6614 = e.removeAllListeners();
        v6614;
        e = null;
        const v6615 = exports.httpStatus(408);
        const v6616 = new Error(v6615);
        const v6617 = uri.host;
        const v6618 = callback(v6616, '', 408, undefined, v6617);
        const v6619 = callback && v6618;
        v6619;
    };
    const v6621 = req.setTimeout(v6612, v6620);
    v6621;
    const v6627 = function (err) {
        const v6622 = req.removeAllListeners();
        v6622;
        req = null;
        const v6623 = e.removeAllListeners();
        v6623;
        e = null;
        const v6624 = uri.host;
        const v6625 = callback(err, '', 0, undefined, v6624);
        const v6626 = callback && v6625;
        v6626;
    };
    const v6628 = req.on('error', v6627);
    v6628;
    const v6630 = function () {
        const v6629 = req.removeAllListeners();
        v6629;
        req = null;
    };
    const v6631 = req.on('close', v6630);
    v6631;
    const v6632 = NEWLINE + NEWLINE;
    const v6633 = v6632 + '--';
    const v6634 = v6633 + BOUNDARY;
    const v6635 = v6634 + NEWLINE;
    const v6636 = v6635 + 'Content-Disposition: form-data; name="File"; filename="';
    const v6637 = v6636 + name;
    const v6638 = v6637 + '"';
    const v6639 = v6638 + NEWLINE;
    const v6640 = v6639 + 'Content-Type: ';
    const v6641 = exports.getExtension(name);
    const v6642 = exports.getContentType(v6641);
    const v6643 = v6640 + v6642;
    const v6644 = v6643 + NEWLINE;
    var header = v6644 + NEWLINE;
    const v6645 = req.write(header);
    v6645;
    const v6646 = stream.length;
    if (v6646) {
        const v6647 = req.write(stream);
        v6647;
        const v6648 = NEWLINE + NEWLINE;
        const v6649 = v6648 + '--';
        const v6650 = v6649 + BOUNDARY;
        const v6651 = v6650 + '--';
        const v6652 = req.end(v6651);
        v6652;
        return e;
    }
    const v6658 = () => {
        const v6653 = NEWLINE + NEWLINE;
        const v6654 = v6653 + '--';
        const v6655 = v6654 + BOUNDARY;
        const v6656 = v6655 + '--';
        const v6657 = req.end(v6656);
        return v6657;
    };
    const v6659 = stream.on('end', v6658);
    v6659;
    const v6660 = stream.pipe(req, STREAM_END);
    v6660;
    return e;
};
exports.send = v6661;
const v6664 = function (name, stream, url, cookies, headers, method, timeout) {
    const v6663 = function (callback) {
        const v6662 = exports.send(name, stream, url, callback, cookies, headers, method, timeout);
        v6662;
    };
    return v6663;
};
exports.$$send = v6664;
const v6795 = function (files, url, callback, cookies, headers, method, timeout) {
    const v6665 = Math.random();
    const v6666 = v6665.toString(16);
    const v6667 = v6666.substring(2);
    var BOUNDARY = '----totaljs' + v6667;
    var h = {};
    const v6668 = exports.extend_headers2(h, headers);
    const v6669 = headers && v6668;
    v6669;
    if (cookies) {
        var builder = '';
        let m;
        for (m in cookies) {
            let v6670;
            if (builder) {
                v6670 = '; ';
            } else {
                v6670 = '';
            }
            const v6671 = v6670 + m;
            const v6672 = v6671 + '=';
            const v6673 = cookies[m];
            builder += v6672 + v6673;
        }
        const v6674 = builder && (h['Cookie'] = builder);
        v6674;
    }
    const v6675 = global.F;
    if (v6675) {
        const v6676 = global.F;
        const v6677 = v6676.stats;
        const v6678 = v6677.performance;
        const v6679 = v6678.external;
        const v6680 = v6679++;
        v6680;
    }
    h['Cache-Control'] = 'max-age=0';
    h['Content-Type'] = 'multipart/form-data; boundary=' + BOUNDARY;
    var e = new EventEmitter2();
    var uri = Url.parse(url);
    const v6681 = uri.protocol;
    const v6682 = uri.auth;
    const v6683 = method || 'POST';
    const v6684 = uri.hostname;
    const v6685 = uri.port;
    const v6686 = uri.path;
    var options = {};
    options.protocol = v6681;
    options.auth = v6682;
    options.method = v6683;
    options.hostname = v6684;
    options.port = v6685;
    options.path = v6686;
    options.agent = false;
    options.headers = h;
    var responseLength = 0;
    var timeoutid;
    var done = false;
    var response = function (res) {
        const v6687 = Buffer.alloc(0);
        res.body = v6687;
        res._bufferlength = 0;
        const v6700 = function (chunk) {
            const v6688 = !done;
            if (v6688) {
                const v6689 = res.body;
                CONCAT[0] = v6689;
                CONCAT[1] = chunk;
                const v6690 = Buffer.concat(CONCAT);
                res.body = v6690;
                const v6691 = chunk.length;
                res._bufferlength += v6691;
                const v6692 = e.$events;
                const v6693 = v6692.data;
                const v6694 = res._bufferlength;
                const v6695 = v6694 / responseLength;
                const v6696 = v6695 * 100;
                let v6697;
                if (responseLength) {
                    v6697 = v6696;
                } else {
                    v6697 = 0;
                }
                const v6698 = e.emit('data', chunk, v6697);
                const v6699 = v6693 && v6698;
                v6699;
            }
        };
        const v6701 = res.on('data', v6700);
        v6701;
        const v6719 = function () {
            const v6702 = !done;
            if (v6702) {
                var self = this;
                const v6703 = e.$events;
                const v6704 = v6703.end;
                const v6705 = self.statusCode;
                const v6706 = self.headers;
                const v6707 = e.emit('end', v6705, v6706);
                const v6708 = v6704 && v6707;
                v6708;
                const v6709 = e.removeAllListeners();
                v6709;
                const v6710 = self.body;
                const v6711 = v6710.toString('utf8');
                const v6712 = self.statusCode;
                const v6713 = self.headers;
                const v6714 = uri.host;
                const v6715 = callback(null, v6711, v6712, v6713, v6714);
                const v6716 = callback && v6715;
                v6716;
                const v6717 = clearTimeout(timeoutid);
                const v6718 = timeoutid && v6717;
                v6718;
                self.body = null;
                e = null;
                done = true;
            }
        };
        const v6720 = res.on('end', v6719);
        v6720;
    };
    let connection;
    const v6721 = options.protocol;
    const v6722 = v6721 === 'https:';
    if (v6722) {
        connection = Https;
    } else {
        connection = Http;
    }
    var req = connection.request(options, response);
    const v6730 = function (response) {
        const v6723 = response.headers;
        const v6724 = v6723['content-length'];
        const v6725 = +v6724;
        responseLength = v6725 || 0;
        const v6726 = e.$events;
        const v6727 = v6726.begin;
        const v6728 = e.emit('begin', responseLength);
        const v6729 = v6727 && v6728;
        v6729;
    };
    const v6731 = req.on('response', v6730);
    v6731;
    var timeoutcallback = function () {
        const v6732 = !done;
        if (v6732) {
            const v6733 = req.removeAllListeners();
            v6733;
            const v6734 = e.removeAllListeners();
            v6734;
            const v6735 = exports.httpStatus(408);
            const v6736 = new Error(v6735);
            const v6737 = uri.host;
            const v6738 = callback(v6736, '', 408, undefined, v6737);
            const v6739 = callback && v6738;
            v6739;
            const v6740 = clearTimeout(timeoutid);
            const v6741 = timeoutid && v6740;
            v6741;
            req = null;
            e = null;
            done = true;
        }
    };
    if (timeout) {
        timeoutid = setTimeout(timeoutcallback, timeout);
    }
    const v6742 = timeout || 60000;
    const v6743 = req.setTimeout(v6742, timeoutcallback);
    v6743;
    const v6751 = function (err) {
        done = true;
        const v6744 = req.removeAllListeners();
        v6744;
        const v6745 = e.removeAllListeners();
        v6745;
        const v6746 = uri.host;
        const v6747 = callback(err, '', 0, undefined, v6746);
        const v6748 = callback && v6747;
        v6748;
        const v6749 = clearTimeout(timeoutid);
        const v6750 = timeoutid && v6749;
        v6750;
        req = null;
        e = null;
    };
    const v6752 = req.on('error', v6751);
    v6752;
    const v6754 = function () {
        const v6753 = req.removeAllListeners();
        v6753;
        req = null;
    };
    const v6755 = req.on('close', v6754);
    v6755;
    const v6756 = NEWLINE + NEWLINE;
    const v6757 = v6756 + '--';
    const v6758 = v6757 + BOUNDARY;
    const v6759 = v6758 + NEWLINE;
    const v6760 = v6759 + 'Content-Disposition: form-data; name="{0}"; filename="{1}"';
    const v6761 = v6760 + NEWLINE;
    const v6762 = v6761 + 'Content-Type: {2}';
    const v6763 = v6762 + NEWLINE;
    var header = v6763 + NEWLINE;
    const v6787 = function (item, next) {
        const v6764 = item.name;
        const v6765 = item.filename;
        const v6766 = U.getName(v6765);
        const v6767 = item.filename;
        const v6768 = exports.getExtension(v6767);
        const v6769 = exports.getContentType(v6768);
        const v6770 = header.format(v6764, v6766, v6769);
        const v6771 = req.write(v6770);
        v6771;
        const v6772 = item.buffer;
        if (v6772) {
            const v6773 = item.buffer;
            const v6774 = req.write(v6773);
            v6774;
            const v6775 = next();
            return v6775;
        }
        const v6776 = item.stream;
        const v6777 = !v6776;
        const v6778 = item.filename;
        const v6779 = Fs.createReadStream(v6778);
        const v6780 = v6777 && (item.stream = v6779);
        v6780;
        const v6781 = item.stream;
        const v6782 = v6781.pipe(req, STREAM_END);
        v6782;
        const v6783 = item.stream;
        const v6784 = v6783.on('error', next);
        v6784;
        const v6785 = item.stream;
        const v6786 = v6785.on('end', next);
        v6786;
    };
    const v6793 = () => {
        const v6788 = NEWLINE + NEWLINE;
        const v6789 = v6788 + '--';
        const v6790 = v6789 + BOUNDARY;
        const v6791 = v6790 + '--';
        const v6792 = req.end(v6791);
        return v6792;
    };
    const v6794 = files.wait(v6787, v6793);
    v6794;
    return e;
};
exports.upload = v6795;
const v6798 = function (files, url, cookies, headers, method, timeout) {
    const v6797 = function (callback) {
        const v6796 = exports.upload(files, url, callback, cookies, headers, method, timeout);
        v6796;
    };
    return v6797;
};
exports.$$upload = v6798;
const v6831 = function (obj, clean) {
    const v6799 = !obj;
    if (v6799) {
        return obj;
    }
    const v6800 = typeof obj;
    var type = v6800;
    const v6801 = type === 'string';
    if (v6801) {
        obj = obj.trim();
        const v6802 = !obj;
        const v6803 = clean && v6802;
        let v6804;
        if (v6803) {
            v6804 = undefined;
        } else {
            v6804 = obj;
        }
        return v6804;
    }
    const v6805 = obj instanceof Array;
    if (v6805) {
        var i = 0;
        var length = obj.length;
        let v6806 = i < length;
        while (v6806) {
            var item = obj[i];
            const v6808 = typeof item;
            type = v6808;
            const v6809 = type === 'object';
            if (v6809) {
                const v6810 = exports.trim(item, clean);
                v6810;
                continue;
            }
            const v6811 = type !== 'string';
            if (v6811) {
                continue;
            }
            const v6812 = item.trim();
            obj[i] = v6812;
            const v6813 = obj[i];
            const v6814 = !v6813;
            const v6815 = clean && v6814;
            if (v6815) {
                obj[i] = undefined;
            }
            const v6807 = i++;
            v6806 = i < length;
        }
        return obj;
    }
    const v6816 = type !== 'object';
    if (v6816) {
        return obj;
    }
    var keys = Object.keys(obj);
    var i = 0;
    var length = keys.length;
    let v6817 = i < length;
    while (v6817) {
        const v6819 = keys[i];
        var val = obj[v6819];
        const v6820 = typeof val;
        var type = v6820;
        const v6821 = type === 'object';
        if (v6821) {
            const v6822 = exports.trim(val, clean);
            v6822;
            continue;
        } else {
            const v6823 = type !== 'string';
            if (v6823) {
                continue;
            }
        }
        const v6825 = val.trim();
        obj[v6824] = v6825;
        const v6826 = keys[i];
        const v6827 = obj[v6826];
        const v6828 = !v6827;
        const v6829 = clean && v6828;
        if (v6829) {
            const v6830 = keys[i];
            obj[v6830] = undefined;
        }
        const v6818 = i++;
        v6817 = i < length;
    }
    return obj;
};
exports.trim = v6831;
const v6832 = function () {
};
global.NOOP = v6832;
global.noop = global.NOOP;
exports.noop = global.noop;
const v6839 = function (code, addCode) {
    const v6833 = addCode === undefined;
    if (v6833) {
        addCode = true;
    }
    const v6834 = code + ': ';
    let v6835;
    if (addCode) {
        v6835 = v6834;
    } else {
        v6835 = '';
    }
    const v6836 = Http.STATUS_CODES;
    const v6837 = v6836[code];
    const v6838 = v6835 + v6837;
    return v6838;
};
exports.httpStatus = v6839;
const v6855 = function (target, source, rewrite) {
    const v6840 = !target;
    const v6841 = !source;
    const v6842 = v6840 || v6841;
    if (v6842) {
        return target;
    }
    const v6843 = typeof target;
    const v6844 = v6843 !== 'object';
    const v6845 = typeof source;
    const v6846 = v6845 !== 'object';
    const v6847 = v6844 || v6846;
    if (v6847) {
        return target;
    }
    const v6848 = rewrite === undefined;
    if (v6848) {
        rewrite = true;
    }
    var keys = Object.keys(source);
    var i = keys.length;
    let v6849 = i--;
    while (v6849) {
        var key = keys[i];
        const v6850 = target[key];
        const v6851 = v6850 === undefined;
        const v6852 = rewrite || v6851;
        if (v6852) {
            const v6853 = source[key];
            const v6854 = exports.clone(v6853);
            target[key] = v6854;
        }
        v6849 = i--;
    }
    return target;
};
exports.extend = v6855;
const v6864 = function (first, second) {
    var keys = Object.keys(first);
    var headers = {};
    var i = keys.length;
    let v6856 = i--;
    while (v6856) {
        const v6857 = keys[i];
        const v6858 = keys[i];
        const v6859 = first[v6858];
        headers[v6857] = v6859;
        v6856 = i--;
    }
    keys = Object.keys(second);
    i = keys.length;
    let v6860 = i--;
    while (v6860) {
        const v6861 = keys[i];
        const v6862 = keys[i];
        const v6863 = second[v6862];
        headers[v6861] = v6863;
        v6860 = i--;
    }
    return headers;
};
exports.extend_headers = v6864;
const v6869 = function (first, second) {
    var keys = Object.keys(second);
    var i = keys.length;
    let v6865 = i--;
    while (v6865) {
        const v6866 = keys[i];
        const v6867 = keys[i];
        const v6868 = second[v6867];
        first[v6866] = v6868;
        v6865 = i--;
    }
    return first;
};
exports.extend_headers2 = v6869;
const v6909 = function (obj, skip, skipFunctions) {
    const v6870 = !obj;
    if (v6870) {
        return obj;
    }
    const v6871 = typeof obj;
    var type = v6871;
    const v6872 = type !== 'object';
    const v6873 = obj instanceof Date;
    const v6874 = v6872 || v6873;
    const v6875 = obj instanceof Error;
    const v6876 = v6874 || v6875;
    if (v6876) {
        return obj;
    }
    var length;
    var o;
    const v6877 = obj instanceof Array;
    if (v6877) {
        length = obj.length;
        o = new Array(length);
        var i = 0;
        let v6878 = i < length;
        while (v6878) {
            const v6880 = obj[i];
            const v6881 = typeof v6880;
            type = v6881;
            const v6882 = type !== 'object';
            const v6883 = obj[i];
            const v6884 = v6883 instanceof Date;
            const v6885 = v6882 || v6884;
            const v6886 = obj[i];
            const v6887 = v6886 instanceof Error;
            const v6888 = v6885 || v6887;
            if (v6888) {
                const v6889 = type === 'function';
                const v6890 = skipFunctions && v6889;
                if (v6890) {
                    continue;
                }
                const v6891 = obj[i];
                o[i] = v6891;
                continue;
            }
            const v6892 = obj[i];
            const v6893 = exports.clone(v6892, skip, skipFunctions);
            o[i] = v6893;
            const v6879 = i++;
            v6878 = i < length;
        }
        return o;
    }
    o = {};
    let m;
    for (m in obj) {
        const v6894 = skip[m];
        const v6895 = skip && v6894;
        if (v6895) {
            continue;
        }
        var val = obj[m];
        const v6896 = val instanceof Buffer;
        if (v6896) {
            const v6897 = val.length;
            var copy = Buffer.alloc(v6897);
            const v6898 = val.copy(copy);
            v6898;
            o[m] = copy;
            continue;
        }
        const v6899 = typeof val;
        var type = v6899;
        const v6900 = type !== 'object';
        const v6901 = val instanceof Date;
        const v6902 = v6900 || v6901;
        const v6903 = val instanceof Error;
        const v6904 = v6902 || v6903;
        if (v6904) {
            const v6905 = type === 'function';
            const v6906 = skipFunctions && v6905;
            if (v6906) {
                continue;
            }
            o[m] = val;
            continue;
        }
        const v6907 = obj[m];
        const v6908 = exports.clone(v6907, skip, skipFunctions);
        o[m] = v6908;
    }
    return o;
};
exports.clone = v6909;
global.CLONE = exports.clone;
const v6928 = function (source, target) {
    const v6910 = target === undefined;
    if (v6910) {
        const v6911 = {};
        const v6912 = exports.extend(v6911, source, true);
        return v6912;
    }
    const v6913 = !target;
    const v6914 = !source;
    const v6915 = v6913 || v6914;
    const v6916 = typeof target;
    const v6917 = v6916 !== 'object';
    const v6918 = v6915 || v6917;
    const v6919 = typeof source;
    const v6920 = v6919 !== 'object';
    const v6921 = v6918 || v6920;
    if (v6921) {
        return target;
    }
    var keys = Object.keys(source);
    var i = keys.length;
    let v6922 = i--;
    while (v6922) {
        var key = keys[i];
        const v6923 = target[key];
        const v6924 = v6923 !== undefined;
        const v6925 = source[key];
        const v6926 = exports.clone(v6925);
        const v6927 = v6924 && (target[key] = v6926);
        v6927;
        v6922 = i--;
    }
    return target;
};
exports.copy = v6928;
const v6952 = function (source, prop, reverse) {
    const v6929 = prop instanceof Array;
    const v6930 = !v6929;
    if (v6930) {
        const v6931 = typeof prop;
        const v6932 = v6931 === 'object';
        if (v6932) {
            const v6933 = Object.keys(prop);
            const v6934 = exports.reduce(source, v6933, reverse);
            return v6934;
        }
    }
    const v6935 = source instanceof Array;
    if (v6935) {
        var arr = [];
        var i = 0;
        var length = source.length;
        let v6936 = i < length;
        while (v6936) {
            const v6938 = source[i];
            const v6939 = exports.reduce(v6938, prop, reverse);
            const v6940 = arr.push(v6939);
            v6940;
            const v6937 = i++;
            v6936 = i < length;
        }
        return arr;
    }
    var output = {};
    var keys = Object.keys(source);
    var i = 0;
    const v6941 = keys.length;
    let v6942 = i < v6941;
    while (v6942) {
        var o = keys[i];
        if (reverse) {
            const v6944 = prop.indexOf(o);
            const v6945 = -1;
            const v6946 = v6944 === v6945;
            if (v6946) {
                const v6947 = source[o];
                output[o] = v6947;
            }
        } else {
            const v6948 = prop.indexOf(o);
            const v6949 = -1;
            const v6950 = v6948 !== v6949;
            if (v6950) {
                const v6951 = source[o];
                output[o] = v6951;
            }
        }
        const v6943 = i++;
        v6942 = i < v6941;
    }
    return output;
};
exports.reduce = v6952;
const v6971 = function (obj, path, fn) {
    const v6953 = obj == null;
    if (v6953) {
        return obj;
    }
    var arr = path.split('.');
    const v6954 = arr[0];
    var model = obj[v6954];
    var i = 1;
    const v6955 = arr.length;
    const v6956 = v6955 - 1;
    let v6957 = i < v6956;
    while (v6957) {
        const v6959 = arr[i];
        model = model[v6959];
        const v6958 = i++;
        v6957 = i < v6956;
    }
    const v6960 = arr.length;
    const v6961 = v6960 - 1;
    const v6962 = arr[v6961];
    const v6963 = typeof fn;
    const v6964 = v6963 === 'function';
    const v6965 = arr.length;
    const v6966 = v6965 - 1;
    const v6967 = arr[v6966];
    const v6968 = model[v6967];
    const v6969 = fn(v6968);
    let v6970;
    if (v6964) {
        v6970 = v6969;
    } else {
        v6970 = fn;
    }
    model[v6962] = v6970;
    return obj;
};
exports.assign = v6971;
const v6983 = function (url) {
    const v6972 = url.substring(0, 2);
    const v6973 = v6972 === '//';
    const v6974 = url.indexOf('http://');
    const v6975 = -1;
    const v6976 = v6974 !== v6975;
    const v6977 = v6973 || v6976;
    const v6978 = url.indexOf('https://');
    const v6979 = -1;
    const v6980 = v6978 !== v6979;
    const v6981 = v6977 || v6980;
    const v6982 = !v6981;
    return v6982;
};
exports.isRelative = v6983;
const v7058 = function (beg, end, callback, skip, stream, raw) {
    const v6984 = typeof end;
    const v6985 = v6984 === 'function';
    if (v6985) {
        stream = skip;
        skip = callback;
        callback = end;
        end = undefined;
    }
    const v6986 = typeof skip;
    const v6987 = v6986 === 'object';
    if (v6987) {
        stream = skip;
        skip = 0;
    }
    var indexer = 0;
    var buffer = Buffer.alloc(0);
    var canceled = false;
    var fn;
    const v6988 = skip === undefined;
    if (v6988) {
        skip = 0;
    }
    const v6989 = beg instanceof Buffer;
    const v6990 = !v6989;
    if (v6990) {
        beg = Buffer.from(beg, 'utf8');
    }
    const v6991 = end instanceof Buffer;
    const v6992 = !v6991;
    const v6993 = end && v6992;
    if (v6993) {
        end = Buffer.from(end, 'utf8');
    }
    const v6994 = !end;
    if (v6994) {
        var length = beg.length;
        const v7017 = function (chunk) {
            const v6995 = !chunk;
            const v6996 = v6995 || canceled;
            if (v6996) {
                return;
            }
            CONCAT[0] = buffer;
            CONCAT[1] = chunk;
            var f = 0;
            const v6997 = buffer.length;
            if (v6997) {
                const v6998 = buffer.length;
                const v6999 = beg.length;
                f = v6998 - v6999;
                const v7000 = f < 0;
                if (v7000) {
                    f = 0;
                }
            }
            buffer = Buffer.concat(CONCAT);
            var index = buffer.indexOf(beg, f);
            const v7001 = -1;
            const v7002 = index === v7001;
            if (v7002) {
                return;
            }
            const v7003 = -1;
            let v7004 = index !== v7003;
            while (v7004) {
                if (skip) {
                    const v7005 = skip--;
                    v7005;
                } else {
                    const v7006 = index + length;
                    const v7007 = buffer.slice(0, v7006);
                    const v7008 = index + length;
                    const v7009 = buffer.toString('utf8', 0, v7008);
                    let v7010;
                    if (raw) {
                        v7010 = v7007;
                    } else {
                        v7010 = v7009;
                    }
                    const v7011 = indexer++;
                    const v7012 = callback(v7010, v7011);
                    const v7013 = v7012 === false;
                    if (v7013) {
                        canceled = true;
                    }
                }
                if (canceled) {
                    return;
                }
                const v7014 = index + length;
                buffer = buffer.slice(v7014);
                index = buffer.indexOf(beg);
                const v7015 = -1;
                const v7016 = index === v7015;
                if (v7016) {
                    return;
                }
                v7004 = index !== v7003;
            }
        };
        fn = v7017;
        const v7019 = () => {
            const v7018 = fn(beg);
            return v7018;
        };
        const v7020 = stream.on('end', v7019);
        const v7021 = stream && v7020;
        v7021;
        return fn;
    }
    var blength = beg.length;
    var elength = end.length;
    const v7022 = -1;
    var bi = v7022;
    const v7023 = -1;
    var ei = v7023;
    var is = false;
    const v7053 = function (chunk) {
        const v7024 = !chunk;
        const v7025 = v7024 || canceled;
        if (v7025) {
            return;
        }
        CONCAT[0] = buffer;
        CONCAT[1] = chunk;
        buffer = Buffer.concat(CONCAT);
        const v7026 = !is;
        if (v7026) {
            const v7027 = CONCAT[0];
            const v7028 = v7027.length;
            const v7029 = beg.length;
            var f = v7028 - v7029;
            const v7030 = f < 0;
            if (v7030) {
                f = 0;
            }
            bi = buffer.indexOf(beg, f);
            const v7031 = -1;
            const v7032 = bi === v7031;
            if (v7032) {
                return;
            }
            is = true;
        }
        if (is) {
            const v7033 = bi + blength;
            ei = buffer.indexOf(end, v7033);
            const v7034 = -1;
            const v7035 = ei === v7034;
            if (v7035) {
                return;
            }
        }
        const v7036 = -1;
        let v7037 = bi !== v7036;
        while (v7037) {
            if (skip) {
                const v7038 = skip--;
                v7038;
            } else {
                const v7039 = ei + elength;
                const v7040 = buffer.slice(bi, v7039);
                const v7041 = ei + elength;
                const v7042 = buffer.toString('utf8', bi, v7041);
                let v7043;
                if (raw) {
                    v7043 = v7040;
                } else {
                    v7043 = v7042;
                }
                const v7044 = indexer++;
                const v7045 = callback(v7043, v7044);
                const v7046 = v7045 === false;
                if (v7046) {
                    canceled = true;
                }
            }
            if (canceled) {
                return;
            }
            const v7047 = ei + elength;
            buffer = buffer.slice(v7047);
            is = false;
            bi = buffer.indexOf(beg);
            const v7048 = -1;
            const v7049 = bi === v7048;
            if (v7049) {
                return;
            }
            is = true;
            const v7050 = bi + blength;
            ei = buffer.indexOf(end, v7050);
            const v7051 = -1;
            const v7052 = ei === v7051;
            if (v7052) {
                return;
            }
            v7037 = bi !== v7036;
        }
    };
    fn = v7053;
    const v7055 = () => {
        const v7054 = fn(end);
        return v7054;
    };
    const v7056 = stream.on('end', v7055);
    const v7057 = stream && v7056;
    v7057;
    return fn;
};
exports.streamer = v7058;
const v7060 = function (beg, end, callback, skip, stream) {
    const v7059 = exports.streamer(beg, end, callback, skip, stream, true);
    return v7059;
};
exports.streamer2 = v7060;
const v7065 = function (str) {
    const v7061 = str == null;
    if (v7061) {
        return '';
    }
    const v7062 = typeof str;
    var type = v7062;
    const v7063 = type !== 'string';
    if (v7063) {
        str = str.toString();
    }
    const v7064 = str.encode();
    return v7064;
};
exports.encode = v7065;
const v7070 = function (str) {
    const v7066 = str == null;
    if (v7066) {
        return '';
    }
    const v7067 = typeof str;
    var type = v7067;
    const v7068 = type !== 'string';
    if (v7068) {
        str = str.toString();
    }
    const v7069 = str.decode();
    return v7069;
};
exports.decode = v7070;
const v7072 = function (url) {
    const v7071 = regexpSTATIC.test(url);
    return v7071;
};
exports.isStaticFile = v7072;
const v7085 = function (obj, def) {
    const v7073 = obj == null;
    const v7074 = obj === '';
    const v7075 = v7073 || v7074;
    if (v7075) {
        const v7076 = def === undefined;
        let v7077;
        if (v7076) {
            v7077 = 0;
        } else {
            v7077 = def;
        }
        return v7077;
    }
    const v7078 = typeof obj;
    var type = v7078;
    const v7079 = type === 'number';
    const v7080 = type !== 'string';
    const v7081 = obj.toString();
    let v7082;
    if (v7080) {
        v7082 = v7081;
    } else {
        v7082 = obj;
    }
    const v7083 = v7082.parseInt(def);
    let v7084;
    if (v7079) {
        v7084 = obj;
    } else {
        v7084 = v7083;
    }
    return v7084;
};
exports.parseInt = v7085;
const v7099 = function (obj, def) {
    const v7086 = obj == null;
    if (v7086) {
        const v7087 = def === undefined;
        let v7088;
        if (v7087) {
            v7088 = false;
        } else {
            v7088 = def;
        }
        return v7088;
    }
    const v7089 = typeof obj;
    var type = v7089;
    const v7090 = type === 'boolean';
    const v7091 = type === 'number';
    const v7092 = obj > 0;
    const v7093 = type !== 'string';
    const v7094 = obj.toString();
    let v7095;
    if (v7093) {
        v7095 = v7094;
    } else {
        v7095 = obj;
    }
    const v7096 = v7095.parseBool(def);
    let v7097;
    if (v7091) {
        v7097 = v7092;
    } else {
        v7097 = v7096;
    }
    let v7098;
    if (v7090) {
        v7098 = obj;
    } else {
        v7098 = v7097;
    }
    return v7098;
};
exports.parseBoolean = v7099;
exports.parseBool = exports.parseBoolean;
const v7112 = function (obj, def) {
    const v7100 = obj == null;
    const v7101 = obj === '';
    const v7102 = v7100 || v7101;
    if (v7102) {
        const v7103 = def === undefined;
        let v7104;
        if (v7103) {
            v7104 = 0;
        } else {
            v7104 = def;
        }
        return v7104;
    }
    const v7105 = typeof obj;
    var type = v7105;
    const v7106 = type === 'number';
    const v7107 = type !== 'string';
    const v7108 = obj.toString();
    let v7109;
    if (v7107) {
        v7109 = v7108;
    } else {
        v7109 = obj;
    }
    const v7110 = v7109.parseFloat(def);
    let v7111;
    if (v7106) {
        v7111 = obj;
    } else {
        v7111 = v7110;
    }
    return v7111;
};
exports.parseFloat = v7112;
const v7114 = function (obj) {
    const v7113 = obj instanceof Array;
    return v7113;
};
exports.isArray = v7114;
const v7120 = function (obj) {
    const v7115 = obj.test;
    const v7116 = typeof v7115;
    const v7117 = v7116 === 'function';
    const v7118 = obj && v7117;
    let v7119;
    if (v7118) {
        v7119 = true;
    } else {
        v7119 = false;
    }
    return v7119;
};
exports.isRegExp = v7120;
const v7127 = function (obj) {
    const v7121 = obj instanceof Date;
    const v7122 = obj.getTime();
    const v7123 = isNaN(v7122);
    const v7124 = !v7123;
    const v7125 = v7121 && v7124;
    let v7126;
    if (v7125) {
        v7126 = true;
    } else {
        v7126 = false;
    }
    return v7126;
};
exports.isDate = v7127;
const v7131 = function (obj) {
    const v7128 = obj.stack;
    const v7129 = obj && v7128;
    let v7130;
    if (v7129) {
        v7130 = true;
    } else {
        v7130 = false;
    }
    return v7130;
};
exports.isError = v7131;
const v7137 = function (value) {
    try {
        const v7132 = Object.getPrototypeOf(value);
        const v7133 = Object.prototype;
        const v7134 = v7132 === v7133;
        const v7135 = value && v7134;
        let v7136;
        if (v7135) {
            v7136 = true;
        } else {
            v7136 = false;
        }
        return v7136;
    } catch (e) {
        return false;
    }
};
exports.isObject = v7137;
const v7142 = function (ext) {
    const v7138 = ext[0];
    const v7139 = v7138 === '.';
    if (v7139) {
        ext = ext.substring(1);
    }
    const v7140 = CONTENTTYPES[ext];
    const v7141 = v7140 || 'application/octet-stream';
    return v7141;
};
exports.getContentType = v7142;
const v7156 = function (filename, raw) {
    var end = filename.length;
    const v7143 = filename.length;
    var i = v7143 - 1;
    let v7144 = i > 0;
    while (v7144) {
        var c = filename[i];
        const v7146 = c === ' ';
        const v7147 = c === '?';
        const v7148 = v7146 || v7147;
        if (v7148) {
            end = i;
        } else {
            const v7149 = c === '.';
            if (v7149) {
                const v7150 = i + 1;
                c = filename.substring(v7150, end);
                const v7151 = c.toLowerCase();
                let v7152;
                if (raw) {
                    v7152 = c;
                } else {
                    v7152 = v7151;
                }
                return v7152;
            } else {
                const v7153 = c === '/';
                const v7154 = c === '\\';
                const v7155 = v7153 || v7154;
                if (v7155) {
                    return '';
                }
            }
        }
        const v7145 = i--;
        v7144 = i > 0;
    }
    return '';
};
exports.getExtension = v7156;
const v7170 = function (path) {
    const v7157 = path.length;
    var l = v7157 - 1;
    var c = path[l];
    const v7158 = c === '/';
    const v7159 = c === '\\';
    const v7160 = v7158 || v7159;
    if (v7160) {
        path = path.substring(0, l);
    }
    var index = path.lastIndexOf('/');
    const v7161 = -1;
    const v7162 = index !== v7161;
    if (v7162) {
        const v7163 = index + 1;
        const v7164 = path.substring(v7163);
        return v7164;
    }
    index = path.lastIndexOf('\\');
    const v7165 = -1;
    const v7166 = index === v7165;
    const v7167 = index + 1;
    const v7168 = path.substring(v7167);
    let v7169;
    if (v7166) {
        v7169 = path;
    } else {
        v7169 = v7168;
    }
    return v7169;
};
exports.getName = v7170;
const v7183 = function (ext, type) {
    const v7171 = ext[0];
    const v7172 = v7171 === '.';
    if (v7172) {
        ext = ext.substring(1);
    }
    const v7173 = ext.length;
    const v7174 = v7173 > 8;
    if (v7174) {
        const v7175 = regexpSTATIC.toString();
        const v7176 = ext.length;
        const v7177 = ',' + v7176;
        const v7178 = v7177 + '}';
        const v7179 = v7175.replace(/,\d+\}/, v7178);
        var tmp = v7179.substring(1);
        const v7180 = tmp.length;
        const v7181 = v7180 - 1;
        const v7182 = tmp.substring(0, v7181);
        regexpSTATIC = new RegExp(v7182);
    }
    CONTENTTYPES[ext] = type;
    return true;
};
exports.setContentType = v7183;
const v7191 = function (path, delimiter) {
    const v7184 = !path;
    if (v7184) {
        path = '';
    }
    delimiter = delimiter || '/';
    const v7185 = path.length;
    const v7186 = v7185 - 1;
    const v7187 = path[v7186];
    const v7188 = v7187 === delimiter;
    const v7189 = path + delimiter;
    let v7190;
    if (v7188) {
        v7190 = path;
    } else {
        v7190 = v7189;
    }
    return v7190;
};
exports.path = v7191;
const v7209 = function () {
    var path = [''];
    var i = 0;
    const v7192 = arguments.length;
    let v7193 = i < v7192;
    while (v7193) {
        var current = arguments[i];
        const v7195 = !current;
        if (v7195) {
            continue;
        }
        const v7196 = current[0];
        const v7197 = v7196 === '/';
        if (v7197) {
            current = current.substring(1);
        }
        const v7198 = current.length;
        var l = v7198 - 1;
        const v7199 = current[l];
        const v7200 = v7199 === '/';
        if (v7200) {
            current = current.substring(0, l);
        }
        const v7201 = path.push(current);
        v7201;
        const v7194 = i++;
        v7193 = i < v7192;
    }
    path = path.join('/');
    const v7202 = !isWindows;
    const v7203 = path.indexOf(':');
    const v7204 = -1;
    const v7205 = v7203 > v7204;
    const v7206 = path.substring(1);
    let v7207;
    if (v7205) {
        v7207 = v7206;
    } else {
        v7207 = path;
    }
    let v7208;
    if (v7202) {
        v7208 = path;
    } else {
        v7208 = v7207;
    }
    return v7208;
};
exports.join = v7209;
const v7212 = function (path) {
    const v7210 = path.replace(regexpPATH, '/');
    let v7211;
    if (isWindows) {
        v7211 = v7210;
    } else {
        v7211 = path;
    }
    return v7211;
};
exports.$normalize = v7212;
const v7219 = function (max, min) {
    max = max || 100000;
    min = min || 0;
    const v7213 = Math.random();
    const v7214 = max - min;
    const v7215 = v7214 + 1;
    const v7216 = v7213 * v7215;
    const v7217 = Math.floor(v7216);
    const v7218 = v7217 + min;
    return v7218;
};
exports.random = v7219;
const rnd = function () {
    const v7220 = Math.random();
    const v7221 = v7220 * 65536;
    const v7222 = Math.floor(v7221);
    const v7223 = v7222.toString(36);
    return v7223;
};
const v7229 = function (max) {
    max = max || 40;
    var str = '';
    var i = 0;
    const v7224 = max / 3;
    const v7225 = v7224 + 1;
    let v7226 = i < v7225;
    while (v7226) {
        str += rnd();
        const v7227 = i++;
        v7226 = i < v7225;
    }
    const v7228 = str.substring(0, max);
    return v7228;
};
exports.GUID = v7229;
global.GUID = exports.GUID;
const validate_builder_default = function (name, value, entity) {
    const v7230 = typeof value;
    var type = v7230;
    const v7231 = entity.type;
    const v7232 = v7231 === 12;
    if (v7232) {
        const v7233 = value != null;
        const v7234 = type === 'object';
        const v7235 = v7233 && v7234;
        const v7236 = value instanceof Array;
        const v7237 = !v7236;
        const v7238 = v7235 && v7237;
        return v7238;
    }
    const v7239 = entity.type;
    const v7240 = v7239 === 11;
    if (v7240) {
        const v7241 = type === 'number';
        return v7241;
    }
    const v7242 = entity.type;
    const v7243 = v7242 > 7;
    if (v7243) {
        const v7244 = value !== undefined;
        return v7244;
    }
    const v7245 = entity.subtype;
    switch (v7245) {
    case 'uid':
        const v7246 = value.isUID();
        return v7246;
    case 'zip':
        const v7247 = value.isZIP();
        return v7247;
    case 'email':
        const v7248 = value.isEmail();
        return v7248;
    case 'json':
        const v7249 = value.isJSON();
        return v7249;
    case 'url':
        const v7250 = value.isURL();
        return v7250;
    case 'phone':
        const v7251 = value.isPhone();
        return v7251;
    case 'base64':
        const v7252 = value.isBase64();
        return v7252;
    }
    const v7253 = type === 'number';
    if (v7253) {
        const v7254 = value > 0;
        return v7254;
    }
    const v7255 = type === 'string';
    const v7256 = value instanceof Array;
    const v7257 = v7255 || v7256;
    if (v7257) {
        const v7258 = value.length;
        const v7259 = v7258 > 0;
        return v7259;
    }
    const v7260 = type === 'boolean';
    if (v7260) {
        const v7261 = value === true;
        return v7261;
    }
    const v7262 = value == null;
    if (v7262) {
        return false;
    }
    const v7263 = value instanceof Date;
    if (v7263) {
        const v7264 = value.toString();
        const v7265 = v7264[0];
        const v7266 = v7265 !== 'I';
        return v7266;
    }
    return true;
};
const v7449 = function (model, error, schema, path, index, fields, pluspath) {
    const v7267 = schema.onValidate;
    const v7268 = F.onValidate;
    const v7269 = v7267 || v7268;
    var prepare = v7269 || NOOP;
    let current;
    const v7270 = path + '.';
    if (path) {
        current = v7270;
    } else {
        current = '';
    }
    let properties;
    const v7271 = model.$$keys;
    const v7272 = model && v7271;
    const v7273 = model.$$keys;
    const v7274 = schema.properties;
    if (v7272) {
        properties = v7273;
    } else {
        properties = v7274;
    }
    var result;
    const v7275 = !pluspath;
    if (v7275) {
        pluspath = '';
    }
    const v7276 = model == null;
    if (v7276) {
        model = {};
    }
    var i = 0;
    const v7277 = properties.length;
    let v7278 = i < v7277;
    while (v7278) {
        var name = properties[i];
        const v7280 = fields.indexOf(name);
        const v7281 = -1;
        const v7282 = v7280 === v7281;
        const v7283 = fields && v7282;
        if (v7283) {
            continue;
        }
        const v7284 = schema.schema;
        var TYPE = v7284[name];
        const v7285 = !TYPE;
        if (v7285) {
            continue;
        }
        const v7286 = TYPE.can;
        const v7287 = model.$$workflow;
        const v7288 = v7287 || EMPTYOBJECT;
        const v7289 = TYPE.can(model, v7288);
        const v7290 = !v7289;
        const v7291 = v7286 && v7290;
        if (v7291) {
            continue;
        }
        var value = model[name];
        const v7292 = typeof value;
        var type = v7292;
        let prefix;
        const v7293 = schema.resourcePrefix;
        const v7294 = schema.resourcePrefix;
        const v7295 = v7294 + name;
        if (v7293) {
            prefix = v7295;
        } else {
            prefix = name;
        }
        const v7296 = value === undefined;
        if (v7296) {
            const v7297 = pluspath + name;
            const v7298 = current + name;
            const v7299 = error.push(v7297, '@', v7298, undefined, prefix);
            v7299;
            continue;
        } else {
            const v7300 = type === 'function';
            if (v7300) {
                value = model[name]();
            }
        }
        const v7301 = TYPE.isArray;
        if (v7301) {
            const v7302 = TYPE.type;
            const v7303 = v7302 === 7;
            const v7304 = value instanceof Array;
            const v7305 = v7303 && v7304;
            const v7306 = value.length;
            const v7307 = v7305 && v7306;
            if (v7307) {
                const v7308 = schema.parent;
                const v7309 = v7308.collection;
                const v7310 = TYPE.raw;
                const v7311 = v7309[v7310];
                const v7312 = TYPE.raw;
                const v7313 = GETSCHEMA(v7312);
                var nestedschema = v7311 || v7313;
                if (nestedschema) {
                    var j = 0;
                    var jl = value.length;
                    let v7314 = j < jl;
                    while (v7314) {
                        const v7316 = value[j];
                        const v7317 = current + name;
                        const v7318 = v7317 + '[';
                        const v7319 = v7318 + j;
                        const v7320 = v7319 + ']';
                        const v7321 = exports.validate_builder(v7316, error, nestedschema, v7320, j, undefined, pluspath);
                        v7321;
                        const v7315 = j++;
                        v7314 = j < jl;
                    }
                } else {
                    const v7322 = TYPE.raw;
                    const v7323 = schema.parent;
                    const v7324 = v7323.name;
                    const v7325 = 'Nested schema "{0}" not found in "{1}".'.format(v7322, v7324);
                    const v7326 = new Error(v7325);
                    throw v7326;
                }
            } else {
                const v7327 = TYPE.required;
                const v7328 = !v7327;
                if (v7328) {
                    continue;
                }
                const v7329 = TYPE.validate;
                const v7330 = TYPE.validate(value, model);
                const v7331 = current + name;
                const v7332 = schema.name;
                const v7333 = prepare(name, value, v7331, model, v7332, TYPE);
                if (v7329) {
                    result = v7330;
                } else {
                    result = v7333;
                }
                const v7334 = result == null;
                if (v7334) {
                    const v7335 = value instanceof Array;
                    const v7336 = value.length;
                    const v7337 = v7336 > 0;
                    if (v7335) {
                        result = v7337;
                    } else {
                        result = false;
                    }
                    const v7338 = result == null;
                    const v7339 = result === true;
                    const v7340 = v7338 || v7339;
                    if (v7340) {
                        continue;
                    }
                }
                const v7341 = typeof result;
                type = v7341;
                const v7342 = type === 'string';
                if (v7342) {
                    const v7343 = result[0];
                    const v7344 = v7343 === '@';
                    if (v7344) {
                        const v7345 = pluspath + name;
                        const v7346 = current + name;
                        const v7347 = schema.resourcePrefix;
                        const v7348 = result.substring(1);
                        const v7349 = v7347 + v7348;
                        const v7350 = error.push(v7345, '@', v7346, index, v7349);
                        v7350;
                    } else {
                        const v7351 = pluspath + name;
                        const v7352 = current + name;
                        const v7353 = error.push(v7351, result, v7352, index, prefix);
                        v7353;
                    }
                } else {
                    const v7354 = type === 'boolean';
                    if (v7354) {
                        const v7355 = !result;
                        const v7356 = pluspath + name;
                        const v7357 = current + name;
                        const v7358 = error.push(v7356, '@', v7357, index, prefix);
                        const v7359 = v7355 && v7358;
                        v7359;
                    } else {
                        const v7360 = result.isValid;
                        const v7361 = v7360 === false;
                        if (v7361) {
                            const v7362 = pluspath + name;
                            const v7363 = result.error;
                            const v7364 = current + name;
                            const v7365 = error.push(v7362, v7363, v7364, index, prefix);
                            v7365;
                        }
                    }
                }
            }
            continue;
        }
        const v7366 = TYPE.type;
        const v7367 = v7366 === 7;
        if (v7367) {
            const v7368 = !value;
            const v7369 = TYPE.required;
            const v7370 = !v7369;
            const v7371 = v7368 && v7370;
            if (v7371) {
                continue;
            }
            const v7372 = TYPE.validate;
            const v7373 = TYPE.validate(value, model);
            if (v7372) {
                result = v7373;
            } else {
                result = null;
            }
            const v7374 = result == null;
            if (v7374) {
                const v7375 = schema.parent;
                const v7376 = v7375.collection;
                const v7377 = TYPE.raw;
                const v7378 = v7376[v7377];
                const v7379 = TYPE.raw;
                const v7380 = GETSCHEMA(v7379);
                var nestedschema = v7378 || v7380;
                if (nestedschema) {
                    const v7381 = current + name;
                    const v7382 = exports.validate_builder(value, error, nestedschema, v7381, undefined, undefined, pluspath);
                    v7382;
                } else {
                    const v7383 = TYPE.raw;
                    const v7384 = schema.parent;
                    const v7385 = v7384.name;
                    const v7386 = 'Nested schema "{0}" not found in "{1}".'.format(v7383, v7385);
                    const v7387 = new Error(v7386);
                    throw v7387;
                }
            } else {
                const v7388 = typeof result;
                type = v7388;
                const v7389 = type === 'string';
                if (v7389) {
                    const v7390 = result[0];
                    const v7391 = v7390 === '@';
                    if (v7391) {
                        const v7392 = pluspath + name;
                        const v7393 = current + name;
                        const v7394 = schema.resourcePrefix;
                        const v7395 = result.substring(1);
                        const v7396 = v7394 + v7395;
                        const v7397 = error.push(v7392, '@', v7393, index, v7396);
                        v7397;
                    } else {
                        const v7398 = pluspath + name;
                        const v7399 = current + name;
                        const v7400 = error.push(v7398, result, v7399, index, prefix);
                        v7400;
                    }
                } else {
                    const v7401 = type === 'boolean';
                    if (v7401) {
                        const v7402 = !result;
                        const v7403 = pluspath + name;
                        const v7404 = current + name;
                        const v7405 = error.push(v7403, '@', v7404, index, prefix);
                        const v7406 = v7402 && v7405;
                        v7406;
                    } else {
                        const v7407 = result.isValid;
                        const v7408 = v7407 === false;
                        if (v7408) {
                            const v7409 = pluspath + name;
                            const v7410 = result.error;
                            const v7411 = current + name;
                            const v7412 = error.push(v7409, v7410, v7411, index, prefix);
                            v7412;
                        }
                    }
                }
            }
            continue;
        }
        const v7413 = TYPE.required;
        const v7414 = !v7413;
        if (v7414) {
            continue;
        }
        const v7415 = TYPE.validate;
        const v7416 = TYPE.validate(value, model);
        const v7417 = current + name;
        const v7418 = schema.name;
        const v7419 = prepare(name, value, v7417, model, v7418, TYPE);
        if (v7415) {
            result = v7416;
        } else {
            result = v7419;
        }
        const v7420 = result == null;
        if (v7420) {
            result = validate_builder_default(name, value, TYPE);
            const v7421 = result == null;
            const v7422 = result === true;
            const v7423 = v7421 || v7422;
            if (v7423) {
                continue;
            }
        }
        const v7424 = typeof result;
        type = v7424;
        const v7425 = type === 'string';
        if (v7425) {
            const v7426 = result[0];
            const v7427 = v7426 === '@';
            if (v7427) {
                const v7428 = pluspath + name;
                const v7429 = current + name;
                const v7430 = schema.resourcePrefix;
                const v7431 = result.substring(1);
                const v7432 = v7430 + v7431;
                const v7433 = error.push(v7428, '@', v7429, index, v7432);
                v7433;
            } else {
                const v7434 = pluspath + name;
                const v7435 = current + name;
                const v7436 = error.push(v7434, result, v7435, index, prefix);
                v7436;
            }
        } else {
            const v7437 = type === 'boolean';
            if (v7437) {
                const v7438 = !result;
                const v7439 = pluspath + name;
                const v7440 = current + name;
                const v7441 = error.push(v7439, '@', v7440, index, prefix);
                const v7442 = v7438 && v7441;
                v7442;
            } else {
                const v7443 = result.isValid;
                const v7444 = v7443 === false;
                if (v7444) {
                    const v7445 = pluspath + name;
                    const v7446 = result.error;
                    const v7447 = current + name;
                    const v7448 = error.push(v7445, v7446, v7447, index, prefix);
                    v7448;
                }
            }
        }
        const v7279 = i++;
        v7278 = i < v7277;
    }
    return error;
};
exports.validate_builder = v7449;
const v7463 = function () {
    var p = F.directory;
    var i = 0;
    var length = arguments.length;
    let v7450 = i < length;
    while (v7450) {
        var v = arguments[i];
        const v7452 = !v;
        if (v7452) {
            continue;
        }
        const v7453 = v[0];
        const v7454 = v7453 === '/';
        if (v7454) {
            v = v.substring(1);
        }
        const v7455 = v[0];
        const v7456 = v7455 === '~';
        if (v7456) {
            p = v.substring(1);
        } else {
            const v7457 = p.length;
            const v7458 = v7457 - 1;
            const v7459 = p[v7458];
            const v7460 = v7459 !== '/';
            let v7461;
            if (v7460) {
                v7461 = '/';
            } else {
                v7461 = '';
            }
            p += v7461 + v;
        }
        const v7451 = i++;
        v7450 = i < length;
    }
    const v7462 = exports.$normalize(p);
    return v7462;
};
exports.combine = v7463;
const v7468 = function (str) {
    const v7466 = c => {
        const v7464 = DIACRITICSMAP[c];
        const v7465 = v7464 || c;
        return v7465;
    };
    const v7467 = str.replace(regexpDiacritics, v7466);
    return v7467;
};
exports.removeDiacritics = v7468;
const v7541 = function (xml, replace) {
    const v7469 = -1;
    var beg = v7469;
    var end = 0;
    var tmp = 0;
    var current = [];
    var obj = {};
    const v7470 = -1;
    var from = v7470;
    while (true) {
        beg = xml.indexOf('<![CDATA[', beg);
        const v7471 = -1;
        const v7472 = beg === v7471;
        if (v7472) {
            break;
        }
        const v7473 = beg + 9;
        end = xml.indexOf(']]>', v7473);
        const v7474 = xml.substring(0, beg);
        const v7475 = beg + 9;
        const v7476 = xml.substring(v7475, end);
        const v7477 = v7476.trim();
        const v7478 = v7477.encode();
        const v7479 = v7474 + v7478;
        const v7480 = end + 3;
        const v7481 = xml.substring(v7480);
        xml = v7479 + v7481;
        beg += 9;
    }
    const v7482 = -1;
    beg = v7482;
    end = 0;
    while (true) {
        const v7483 = beg + 1;
        beg = xml.indexOf('<', v7483);
        const v7484 = -1;
        const v7485 = beg === v7484;
        if (v7485) {
            break;
        }
        const v7486 = beg + 1;
        end = xml.indexOf('>', v7486);
        const v7487 = -1;
        const v7488 = end === v7487;
        if (v7488) {
            break;
        }
        const v7489 = end + 1;
        var el = xml.substring(beg, v7489);
        var c = el[1];
        const v7490 = c === '?';
        const v7491 = c === '/';
        const v7492 = v7490 || v7491;
        if (v7492) {
            var o = current.pop();
            const v7493 = -1;
            const v7494 = from === v7493;
            const v7495 = el.length;
            const v7496 = v7495 - 1;
            const v7497 = el.substring(2, v7496);
            const v7498 = o !== v7497;
            const v7499 = v7494 || v7498;
            if (v7499) {
                continue;
            }
            const v7500 = current.length;
            const v7501 = current.join('.');
            const v7502 = v7501 + '.';
            let v7503;
            if (v7500) {
                v7503 = v7502;
            } else {
                v7503 = '';
            }
            var path = v7503 + o;
            const v7504 = xml.substring(from, beg);
            var value = v7504.decode();
            if (replace) {
                path = path.replace(REG_XMLKEY, '_');
            }
            const v7505 = obj[path];
            const v7506 = v7505 === undefined;
            if (v7506) {
                obj[path] = value;
            } else {
                const v7507 = obj[path];
                const v7508 = v7507 instanceof Array;
                if (v7508) {
                    const v7509 = obj[path];
                    const v7510 = v7509.push(value);
                    v7510;
                } else {
                    const v7511 = obj[path];
                    obj[path] = [
                        v7511,
                        value
                    ];
                }
            }
            const v7512 = -1;
            from = v7512;
            continue;
        }
        tmp = el.indexOf(' ');
        var hasAttributes = true;
        const v7513 = -1;
        const v7514 = tmp === v7513;
        if (v7514) {
            const v7515 = el.length;
            tmp = v7515 - 1;
            hasAttributes = false;
        }
        const v7516 = el.length;
        from = beg + v7516;
        const v7517 = el.length;
        const v7518 = v7517 - 2;
        const v7519 = el[v7518];
        var isSingle = v7519 === '/';
        var name = el.substring(1, tmp);
        const v7520 = !isSingle;
        if (v7520) {
            const v7521 = current.push(name);
            v7521;
        }
        const v7522 = !hasAttributes;
        if (v7522) {
            continue;
        }
        var match = el.match(regexpXML);
        const v7523 = !match;
        if (v7523) {
            continue;
        }
        var attr = {};
        var length = match.length;
        var i = 0;
        let v7524 = i < length;
        while (v7524) {
            const v7526 = match[i];
            var index = v7526.indexOf('"');
            const v7530 = match[i];
            const v7531 = index + 1;
            const v7532 = match[i];
            const v7533 = v7532.length;
            const v7534 = v7533 - 1;
            const v7535 = v7530.substring(v7531, v7534);
            const v7536 = v7535.decode();
            attr[v7529] = v7536;
            const v7525 = i++;
            v7524 = i < length;
        }
        const v7537 = current.join('.');
        const v7538 = '.' + name;
        let v7539;
        if (isSingle) {
            v7539 = v7538;
        } else {
            v7539 = '';
        }
        const v7540 = v7537 + v7539;
        var k = v7540 + '[]';
        if (replace) {
            k = k.replace(REG_XMLKEY, '_');
        }
        obj[k] = attr;
    }
    return obj;
};
exports.parseXML = v7541;
const v7544 = function (value, date) {
    try {
        let v7542;
        if (date) {
            v7542 = jsonparser;
        } else {
            v7542 = undefined;
        }
        const v7543 = JSON.parse(value, v7542);
        return v7543;
    } catch (e) {
    }
};
exports.parseJSON = v7544;
const v7546 = function (value) {
    const v7545 = F.onParseQuery(value);
    return v7545;
};
exports.parseQuery = v7546;
const jsonparser = function (key, value) {
    const v7547 = typeof value;
    const v7548 = v7547 === 'string';
    const v7549 = value.isJSONDate();
    const v7550 = v7548 && v7549;
    const v7551 = new Date(value);
    let v7552;
    if (v7550) {
        v7552 = v7551;
    } else {
        v7552 = value;
    }
    return v7552;
};
const v7565 = function (code, message, type, compress) {
    var messageBuffer = getWebSocketFrameMessageBytes(code, message);
    const v7553 = messageBuffer.length;
    var lengthBuffer = getWebSocketFrameLengthBytes(v7553);
    const v7554 = lengthBuffer.length;
    const v7555 = 1 + v7554;
    const v7556 = messageBuffer.length;
    const v7557 = v7555 + v7556;
    var frameBuffer = Buffer.alloc(v7557);
    frameBuffer[0] = 128 | type;
    const v7558 = compress && (frameBuffer[0] |= 64);
    v7558;
    const v7559 = lengthBuffer.length;
    const v7560 = lengthBuffer.copy(frameBuffer, 1, 0, v7559);
    v7560;
    const v7561 = lengthBuffer.length;
    const v7562 = v7561 + 1;
    const v7563 = messageBuffer.length;
    const v7564 = messageBuffer.copy(frameBuffer, v7562, 0, v7563);
    v7564;
    return frameBuffer;
};
exports.getWebSocketFrame = v7565;
const getWebSocketFrameMessageBytes = function (code, message) {
    let index;
    if (code) {
        index = 2;
    } else {
        index = 0;
    }
    const v7566 = message instanceof Int8Array;
    const v7567 = message instanceof Buffer;
    var binary = v7566 || v7567;
    var length = message.length;
    const v7568 = length + index;
    var messageBuffer = Buffer.alloc(v7568);
    var i = 0;
    let v7569 = i < length;
    while (v7569) {
        if (binary) {
            const v7571 = i + index;
            const v7572 = message[i];
            messageBuffer[v7571] = v7572;
        } else {
            const v7574 = message.charCodeAt(i);
            messageBuffer[v7573] = v7574;
        }
        const v7570 = i++;
        v7569 = i < length;
    }
    if (code) {
        messageBuffer[0] = code >> 8;
        messageBuffer[1] = code;
    }
    return messageBuffer;
};
const getWebSocketFrameLengthBytes = function (length) {
    var lengthBuffer = null;
    const v7575 = length <= 125;
    if (v7575) {
        lengthBuffer = Buffer.alloc(1);
        lengthBuffer[0] = length;
        return lengthBuffer;
    }
    const v7576 = length <= 65535;
    if (v7576) {
        lengthBuffer = Buffer.alloc(3);
        lengthBuffer[0] = 126;
        const v7577 = length >> 8;
        lengthBuffer[1] = v7577 & 255;
        lengthBuffer[2] = length & 255;
        return lengthBuffer;
    }
    lengthBuffer = Buffer.alloc(9);
    lengthBuffer[0] = 127;
    lengthBuffer[1] = 0;
    lengthBuffer[2] = 0;
    lengthBuffer[3] = 0;
    lengthBuffer[4] = 0;
    const v7578 = length >> 24;
    lengthBuffer[5] = v7578 & 255;
    const v7579 = length >> 16;
    lengthBuffer[6] = v7579 & 255;
    const v7580 = length >> 8;
    lengthBuffer[7] = v7580 & 255;
    lengthBuffer[8] = length & 255;
    return lengthBuffer;
};
const v7605 = function (lat1, lon1, lat2, lon2) {
    var R = 6371;
    const v7581 = lat2 - lat1;
    var dLat = v7581.toRad();
    const v7582 = lon2 - lon1;
    var dLon = v7582.toRad();
    const v7583 = dLat / 2;
    const v7584 = Math.sin(v7583);
    const v7585 = dLat / 2;
    const v7586 = Math.sin(v7585);
    const v7587 = v7584 * v7586;
    const v7588 = lat1.toRad();
    const v7589 = Math.cos(v7588);
    const v7590 = lat2.toRad();
    const v7591 = Math.cos(v7590);
    const v7592 = v7589 * v7591;
    const v7593 = dLon / 2;
    const v7594 = Math.sin(v7593);
    const v7595 = v7592 * v7594;
    const v7596 = dLon / 2;
    const v7597 = Math.sin(v7596);
    const v7598 = v7595 * v7597;
    var a = v7587 + v7598;
    const v7599 = Math.sqrt(a);
    const v7600 = 1 - a;
    const v7601 = Math.sqrt(v7600);
    const v7602 = Math.atan2(v7599, v7601);
    var c = 2 * v7602;
    const v7603 = R * c;
    const v7604 = v7603.floor(3);
    return v7604;
};
exports.distance = v7605;
const ls = function (path, callback, advanced, filter) {
    var filelist = new FileList();
    var tmp;
    filelist.advanced = advanced;
    filelist.onComplete = callback;
    const v7606 = typeof filter;
    const v7607 = v7606 === 'string';
    if (v7607) {
        tmp = filter.toLowerCase();
        const v7613 = function (filename, is) {
            const v7608 = filename.toLowerCase();
            const v7609 = v7608.indexOf(tmp);
            const v7610 = -1;
            const v7611 = v7609 !== v7610;
            let v7612;
            if (is) {
                v7612 = true;
            } else {
                v7612 = v7611;
            }
            return v7612;
        };
        filelist.onFilter = v7613;
    } else {
        const v7614 = exports.isRegExp(filter);
        if (v7614) {
            tmp = filter;
            const v7617 = function (filename, is) {
                const v7615 = tmp.test(filename);
                let v7616;
                if (is) {
                    v7616 = true;
                } else {
                    v7616 = v7615;
                }
                return v7616;
            };
            filelist.onFilter = v7617;
        } else {
            filelist.onFilter = filter || null;
        }
    }
    const v7618 = filelist.walk(path);
    v7618;
};
const v7620 = function (path, callback, filter) {
    const v7619 = ls(path, callback, false, filter);
    v7619;
};
exports.ls = v7620;
const v7622 = function (path, callback, filter) {
    const v7621 = ls(path, callback, true, filter);
    v7621;
};
exports.ls2 = v7622;
const v7626 = function (timezone) {
    const v7623 = {
        timeZone: timezone,
        hour12: false,
        dateStyle: 'short',
        timeStyle: 'short'
    };
    var dt = this.toLocaleString('en-US', v7623);
    const v7624 = Date.parse(dt);
    const v7625 = new Date(v7624);
    return v7625;
};
DP.setTimeZone = v7626;
const v7659 = function (type, value) {
    var self = this;
    const v7627 = type.constructor;
    const v7628 = v7627 === Number;
    if (v7628) {
        const v7629 = self.getTime();
        const v7630 = type % 1;
        const v7631 = type - v7630;
        const v7632 = v7629 + v7631;
        const v7633 = new Date(v7632);
        return v7633;
    }
    const v7634 = value === undefined;
    if (v7634) {
        var arr = type.split(' ');
        type = arr[1];
        const v7635 = arr[0];
        value = exports.parseInt(v7635);
    }
    const v7636 = self.getTime();
    var dt = new Date(v7636);
    switch (type) {
    case 's':
    case 'ss':
    case 'sec':
    case 'second':
    case 'seconds':
        const v7637 = dt.getUTCSeconds();
        const v7638 = v7637 + value;
        const v7639 = dt.setUTCSeconds(v7638);
        v7639;
        return dt;
    case 'm':
    case 'mm':
    case 'minute':
    case 'min':
    case 'minutes':
        const v7640 = dt.getUTCMinutes();
        const v7641 = v7640 + value;
        const v7642 = dt.setUTCMinutes(v7641);
        v7642;
        return dt;
    case 'h':
    case 'hh':
    case 'hour':
    case 'hours':
        const v7643 = dt.getUTCHours();
        const v7644 = v7643 + value;
        const v7645 = dt.setUTCHours(v7644);
        v7645;
        return dt;
    case 'd':
    case 'dd':
    case 'day':
    case 'days':
        const v7646 = dt.getUTCDate();
        const v7647 = v7646 + value;
        const v7648 = dt.setUTCDate(v7647);
        v7648;
        return dt;
    case 'w':
    case 'ww':
    case 'week':
    case 'weeks':
        const v7649 = dt.getUTCDate();
        const v7650 = value * 7;
        const v7651 = v7649 + v7650;
        const v7652 = dt.setUTCDate(v7651);
        v7652;
        return dt;
    case 'M':
    case 'MM':
    case 'month':
    case 'months':
        const v7653 = dt.getUTCMonth();
        const v7654 = v7653 + value;
        const v7655 = dt.setUTCMonth(v7654);
        v7655;
        return dt;
    case 'y':
    case 'yyyy':
    case 'year':
    case 'years':
        const v7656 = dt.getUTCFullYear();
        const v7657 = v7656 + value;
        const v7658 = dt.setUTCFullYear(v7657);
        v7658;
        return dt;
    }
    return dt;
};
DP.add = v7659;
const v7693 = function (date, type) {
    const v7660 = arguments.length;
    const v7661 = v7660 === 1;
    if (v7661) {
        type = date;
        date = Date.now();
    } else {
        const v7662 = typeof date;
        var to = v7662;
        const v7663 = to === 'string';
        if (v7663) {
            date = Date.parse(date);
        } else {
            const v7664 = exports.isDate(date);
            if (v7664) {
                date = date.getTime();
            }
        }
    }
    const v7665 = this.getTime();
    var r = v7665 - date;
    switch (type) {
    case 's':
    case 'ss':
    case 'second':
    case 'seconds':
        const v7666 = r / 1000;
        const v7667 = Math.ceil(v7666);
        return v7667;
    case 'm':
    case 'mm':
    case 'minute':
    case 'minutes':
        const v7668 = r / 1000;
        const v7669 = v7668 / 60;
        const v7670 = Math.ceil(v7669);
        return v7670;
    case 'h':
    case 'hh':
    case 'hour':
    case 'hours':
        const v7671 = r / 1000;
        const v7672 = v7671 / 60;
        const v7673 = v7672 / 60;
        const v7674 = Math.ceil(v7673);
        return v7674;
    case 'd':
    case 'dd':
    case 'day':
    case 'days':
        const v7675 = r / 1000;
        const v7676 = v7675 / 60;
        const v7677 = v7676 / 60;
        const v7678 = v7677 / 24;
        const v7679 = Math.ceil(v7678);
        return v7679;
    case 'M':
    case 'MM':
    case 'month':
    case 'months':
        const v7680 = r / 1000;
        const v7681 = v7680 / 60;
        const v7682 = v7681 / 60;
        const v7683 = 24 * 28;
        const v7684 = v7682 / v7683;
        const v7685 = Math.ceil(v7684);
        return v7685;
    case 'y':
    case 'yyyy':
    case 'year':
    case 'years':
        const v7686 = r / 1000;
        const v7687 = v7686 / 60;
        const v7688 = v7687 / 60;
        const v7689 = 24 * 28;
        const v7690 = v7689 * 12;
        const v7691 = v7688 / v7690;
        const v7692 = Math.ceil(v7691);
        return v7692;
    }
    return NaN;
};
DP.diff = v7693;
const v7761 = function (date) {
    var dt = new Date(this);
    var match = date.match(regexpDATE);
    const v7694 = !match;
    if (v7694) {
        return dt;
    }
    var i = 0;
    var length = match.length;
    let v7695 = i < length;
    while (v7695) {
        var m = match[i];
        var arr;
        var tmp;
        const v7697 = m.indexOf(':');
        const v7698 = -1;
        const v7699 = v7697 !== v7698;
        if (v7699) {
            arr = m.split(':');
            const v7700 = arr[0];
            const v7701 = +v7700;
            tmp = v7701;
            const v7702 = tmp >= 0;
            const v7703 = dt.setUTCHours(tmp);
            const v7704 = v7702 && v7703;
            v7704;
            const v7705 = arr[1];
            if (v7705) {
                const v7706 = arr[1];
                const v7707 = +v7706;
                tmp = v7707;
                const v7708 = tmp >= 0;
                const v7709 = dt.setUTCMinutes(tmp);
                const v7710 = v7708 && v7709;
                v7710;
            }
            const v7711 = arr[2];
            if (v7711) {
                const v7712 = arr[2];
                const v7713 = +v7712;
                tmp = v7713;
                const v7714 = tmp >= 0;
                const v7715 = dt.setUTCSeconds(tmp);
                const v7716 = v7714 && v7715;
                v7716;
            }
            continue;
        }
        const v7717 = m.indexOf('-');
        const v7718 = -1;
        const v7719 = v7717 !== v7718;
        if (v7719) {
            arr = m.split('-');
            const v7720 = arr[0];
            const v7721 = +v7720;
            tmp = v7721;
            const v7722 = dt.setUTCFullYear(tmp);
            const v7723 = tmp && v7722;
            v7723;
            const v7724 = arr[1];
            if (v7724) {
                const v7725 = arr[1];
                const v7726 = +v7725;
                tmp = v7726;
                const v7727 = tmp >= 0;
                const v7728 = tmp - 1;
                const v7729 = dt.setUTCMonth(v7728);
                const v7730 = v7727 && v7729;
                v7730;
            }
            const v7731 = arr[2];
            if (v7731) {
                const v7732 = arr[2];
                const v7733 = +v7732;
                tmp = v7733;
                const v7734 = tmp >= 0;
                const v7735 = dt.setUTCDate(tmp);
                const v7736 = v7734 && v7735;
                v7736;
            }
            continue;
        }
        const v7737 = m.indexOf('.');
        const v7738 = -1;
        const v7739 = v7737 !== v7738;
        if (v7739) {
            arr = m.split('.');
            const v7740 = arr[2];
            if (v7740) {
                const v7741 = arr[2];
                const v7742 = +v7741;
                tmp = v7742;
                const v7743 = isNaN(tmp);
                const v7744 = !v7743;
                const v7745 = dt.setUTCFullYear(tmp);
                const v7746 = v7744 && v7745;
                v7746;
            }
            const v7747 = arr[1];
            if (v7747) {
                const v7748 = arr[1];
                const v7749 = +v7748;
                tmp = v7749;
                const v7750 = isNaN(tmp);
                const v7751 = !v7750;
                const v7752 = tmp - 1;
                const v7753 = dt.setUTCMonth(v7752);
                const v7754 = v7751 && v7753;
                v7754;
            }
            const v7755 = arr[0];
            const v7756 = +v7755;
            tmp = v7756;
            const v7757 = isNaN(tmp);
            const v7758 = !v7757;
            const v7759 = dt.setUTCDate(tmp);
            const v7760 = v7758 && v7759;
            v7760;
            continue;
        }
        const v7696 = i++;
        v7695 = i < length;
    }
    return dt;
};
DP.extend = v7761;
const v7767 = function (date) {
    var self = this;
    const v7762 = self.getTime();
    const v7763 = date.getTime();
    var r = v7762 - v7763;
    const v7764 = r === 0;
    if (v7764) {
        return 0;
    }
    const v7765 = r < 0;
    if (v7765) {
        const v7766 = -1;
        return v7766;
    }
    return 1;
};
DP.compare = v7767;
const v7773 = function (d1, d2) {
    const v7768 = typeof d1;
    const v7769 = v7768 === 'string';
    if (v7769) {
        d1 = d1.parseDate();
    }
    const v7770 = typeof d2;
    const v7771 = v7770 === 'string';
    if (v7771) {
        d2 = d2.parseDate();
    }
    const v7772 = d1.compare(d2);
    return v7772;
};
Date.compare = v7773;
const v7867 = function (format, resource) {
    const v7774 = !format;
    if (v7774) {
        const v7775 = this.getUTCFullYear();
        const v7776 = v7775 + '-';
        const v7777 = this.getUTCMonth();
        const v7778 = v7777 + 1;
        const v7779 = v7778.toString();
        const v7780 = v7779.padLeft(2, '0');
        const v7781 = v7776 + v7780;
        const v7782 = v7781 + '-';
        const v7783 = this.getUTCDate();
        const v7784 = v7783.toString();
        const v7785 = v7784.padLeft(2, '0');
        const v7786 = v7782 + v7785;
        const v7787 = v7786 + 'T';
        const v7788 = this.getUTCHours();
        const v7789 = v7788.toString();
        const v7790 = v7789.padLeft(2, '0');
        const v7791 = v7787 + v7790;
        const v7792 = v7791 + ':';
        const v7793 = this.getUTCMinutes();
        const v7794 = v7793.toString();
        const v7795 = v7794.padLeft(2, '0');
        const v7796 = v7792 + v7795;
        const v7797 = v7796 + ':';
        const v7798 = this.getUTCSeconds();
        const v7799 = v7798.toString();
        const v7800 = v7799.padLeft(2, '0');
        const v7801 = v7797 + v7800;
        const v7802 = v7801 + '.';
        const v7803 = this.getUTCMilliseconds();
        const v7804 = v7803.toString();
        const v7805 = v7804.padLeft(3, '0');
        const v7806 = v7802 + v7805;
        const v7807 = v7806 + 'Z';
        return v7807;
    }
    const v7808 = datetimeformat[format];
    if (v7808) {
        const v7809 = datetimeformat[format](this, resource);
        return v7809;
    }
    var key = format;
    var half = false;
    const v7810 = format[0];
    const v7811 = v7810 === '!';
    const v7812 = format && v7811;
    if (v7812) {
        half = true;
        format = format.substring(1);
    }
    var beg = '\'+';
    var end = '+\'';
    var before = [];
    var ismm = false;
    var isdd = false;
    var isww = false;
    const v7855 = function (key) {
        switch (key) {
        case 'yyyy':
        case 'YYYY':
            const v7813 = beg + 'd.getFullYear()';
            const v7814 = v7813 + end;
            return v7814;
        case 'yy':
        case 'YY':
            const v7815 = beg + 'd.getFullYear().toString().substring(2)';
            const v7816 = v7815 + end;
            return v7816;
        case 'MMM':
            ismm = true;
            const v7817 = beg + '(F.resource(resource, mm) || mm).substring(0, 3)';
            const v7818 = v7817 + end;
            return v7818;
        case 'MMMM':
            ismm = true;
            const v7819 = beg + '(F.resource(resource, mm) || mm)';
            const v7820 = v7819 + end;
            return v7820;
        case 'MM':
            const v7821 = beg + '(d.getMonth() + 1).toString().padLeft(2, \'0\')';
            const v7822 = v7821 + end;
            return v7822;
        case 'M':
            const v7823 = beg + '(d.getMonth() + 1)';
            const v7824 = v7823 + end;
            return v7824;
        case 'ddd':
        case 'DDD':
            isdd = true;
            const v7825 = beg + '(F.resource(resource, dd) || dd).substring(0, 2).toUpperCase()';
            const v7826 = v7825 + end;
            return v7826;
        case 'dddd':
        case 'DDDD':
            isdd = true;
            const v7827 = beg + '(F.resource(resource, dd) || dd)';
            const v7828 = v7827 + end;
            return v7828;
        case 'dd':
        case 'DD':
            const v7829 = beg + 'd.getDate().toString().padLeft(2, \'0\')';
            const v7830 = v7829 + end;
            return v7830;
        case 'd':
        case 'D':
            const v7831 = beg + 'd.getDate()';
            const v7832 = v7831 + end;
            return v7832;
        case 'HH':
        case 'hh':
            let v7833;
            if (half) {
                v7833 = 'framework_utils.$pmam(d.getHours()).toString().padLeft(2, \'0\')';
            } else {
                v7833 = 'd.getHours().toString().padLeft(2, \'0\')';
            }
            const v7834 = beg + v7833;
            const v7835 = v7834 + end;
            return v7835;
        case 'H':
        case 'h':
            let v7836;
            if (half) {
                v7836 = 'framework_utils(d.getHours())';
            } else {
                v7836 = 'd.getHours()';
            }
            const v7837 = beg + v7836;
            const v7838 = v7837 + end;
            return v7838;
        case 'mm':
            const v7839 = beg + 'd.getMinutes().toString().padLeft(2, \'0\')';
            const v7840 = v7839 + end;
            return v7840;
        case 'm':
            const v7841 = beg + 'd.getMinutes()';
            const v7842 = v7841 + end;
            return v7842;
        case 'ss':
            const v7843 = beg + 'd.getSeconds().toString().padLeft(2, \'0\')';
            const v7844 = v7843 + end;
            return v7844;
        case 's':
            const v7845 = beg + 'd.getSeconds()';
            const v7846 = v7845 + end;
            return v7846;
        case 'w':
        case 'ww':
            isww = true;
            const v7847 = key === 'ww';
            let v7848;
            if (v7847) {
                v7848 = 'ww.toString().padLeft(2, \'0\')';
            } else {
                v7848 = 'ww';
            }
            const v7849 = beg + v7848;
            const v7850 = v7849 + end;
            return v7850;
        case 'a':
            var b = '\'PM\':\'AM\'';
            const v7851 = beg + '(d.getHours() >= 12 ? ';
            const v7852 = v7851 + b;
            const v7853 = v7852 + ')';
            const v7854 = v7853 + end;
            return v7854;
        }
    };
    format = format.replace(regexpDATEFORMAT, v7855);
    const v7856 = before.push('var mm = framework_utils.MONTHS[d.getMonth()];');
    const v7857 = ismm && v7856;
    v7857;
    const v7858 = before.push('var dd = framework_utils.DAYS[d.getDay()];');
    const v7859 = isdd && v7858;
    v7859;
    const v7860 = before.push('var ww = new Date(+d);ww.setHours(0, 0, 0);ww.setDate(ww.getDate() + 4 - (ww.getDay() || 7));ww = Math.ceil((((ww - new Date(ww.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);');
    const v7861 = isww && v7860;
    v7861;
    const v7862 = before.join('\n');
    const v7863 = v7862 + 'return \'';
    const v7864 = v7863 + format;
    const v7865 = v7864 + '\';';
    datetimeformat[key] = new Function('d', 'resource', v7865);
    const v7866 = datetimeformat[key](this, resource);
    return v7866;
};
DP.format = v7867;
const v7871 = function (value) {
    const v7868 = value >= 12;
    const v7869 = value - 12;
    let v7870;
    if (v7868) {
        v7870 = v7869;
    } else {
        v7870 = value;
    }
    return v7870;
};
exports.$pmam = v7871;
const v7877 = function (ticks) {
    const v7872 = this.getTime();
    const v7873 = this.getTimezoneOffset();
    const v7874 = v7873 * 60000;
    var dt = v7872 + v7874;
    const v7875 = new Date(dt);
    let v7876;
    if (ticks) {
        v7876 = dt;
    } else {
        v7876 = v7875;
    }
    return v7876;
};
DP.toUTC = v7877;
const v7878 = function () {
    return this;
};
DP.parseDate = v7878;
const v7898 = function () {
    const v7879 = this.length;
    var l = v7879 - 1;
    const v7880 = l > 22;
    const v7881 = l < 30;
    const v7882 = v7880 && v7881;
    const v7883 = this[l];
    const v7884 = v7883 === 'Z';
    const v7885 = v7882 && v7884;
    const v7886 = this[10];
    const v7887 = v7886 === 'T';
    const v7888 = v7885 && v7887;
    const v7889 = this[4];
    const v7890 = v7889 === '-';
    const v7891 = v7888 && v7890;
    const v7892 = this[13];
    const v7893 = v7892 === ':';
    const v7894 = v7891 && v7893;
    const v7895 = this[16];
    const v7896 = v7895 === ':';
    const v7897 = v7894 && v7896;
    return v7897;
};
SP.isJSONDate = v7898;
const v7905 = function (noremap) {
    var str = this;
    const v7899 = function () {
        noremap = true;
        return '';
    };
    const v7900 = str.replace(REG_NOREMAP, v7899);
    str = v7900.replace(REG_ROOT, $urlmaker);
    const v7901 = !noremap;
    const v7902 = CONF.default_root;
    const v7903 = v7901 && v7902;
    if (v7903) {
        const v7904 = str.replace(REG_REMAP, $urlremap);
        str = v7904.replace(REG_AJAX, $urlajax);
    }
    return str;
};
SP.ROOT = v7905;
const $urlremap = function (text) {
    let pos;
    const v7906 = text[0];
    const v7907 = v7906 === 'h';
    if (v7907) {
        pos = 6;
    } else {
        pos = 5;
    }
    const v7908 = REG_URLEXT.test(text);
    const v7909 = text[0];
    const v7910 = v7909 === 'h';
    let v7911;
    if (v7910) {
        v7911 = 'href';
    } else {
        v7911 = 'src';
    }
    const v7912 = v7911 + '="';
    const v7913 = CONF.default_root;
    const v7914 = v7912 + v7913;
    const v7915 = text[pos];
    const v7916 = v7915 === '/';
    const v7917 = pos + 1;
    const v7918 = text.substring(v7917);
    let v7919;
    if (v7916) {
        v7919 = v7918;
    } else {
        v7919 = text;
    }
    const v7920 = v7914 + v7919;
    let v7921;
    if (v7908) {
        v7921 = text;
    } else {
        v7921 = v7920;
    }
    return v7921;
};
const $urlajax = function (text) {
    const v7922 = text.length;
    const v7923 = v7922 - 1;
    const v7924 = text.substring(0, v7923);
    const v7925 = CONF.default_root;
    const v7926 = v7924 + v7925;
    return v7926;
};
const $urlmaker = function (text) {
    var c = text[4];
    const v7927 = CONF.default_root;
    const v7928 = CONF.default_root;
    const v7929 = c || '';
    let v7930;
    if (v7927) {
        v7930 = v7928;
    } else {
        v7930 = v7929;
    }
    return v7930;
};
const v7931 = SP.trim;
const v7932 = !v7931;
if (v7932) {
    const v7934 = function () {
        const v7933 = this.replace(regexpTRIM, '');
        return v7933;
    };
    SP.trim = v7934;
}
const v7935 = SP.replaceAt;
const v7936 = !v7935;
if (v7936) {
    const v7943 = function (index, character) {
        const v7937 = this.substr(0, index);
        const v7938 = v7937 + character;
        const v7939 = character.length;
        const v7940 = index + v7939;
        const v7941 = this.substr(v7940);
        const v7942 = v7938 + v7941;
        return v7942;
    };
    SP.replaceAt = v7943;
}
const v7955 = function (text, ignoreCase) {
    var self = this;
    var length = text.length;
    var tmp;
    const v7944 = ignoreCase === true;
    if (v7944) {
        tmp = self.substring(0, length);
        const v7945 = tmp.length;
        const v7946 = v7945 === length;
        const v7947 = tmp.toLowerCase();
        const v7948 = text.toLowerCase();
        const v7949 = v7947 === v7948;
        const v7950 = v7946 && v7949;
        return v7950;
    }
    if (ignoreCase) {
        tmp = self.substr(ignoreCase, length);
    } else {
        tmp = self.substring(0, length);
    }
    const v7951 = tmp.length;
    const v7952 = v7951 === length;
    const v7953 = tmp === text;
    const v7954 = v7952 && v7953;
    return v7954;
};
SP.startsWith = v7955;
const v7974 = function (text, ignoreCase) {
    var self = this;
    var length = text.length;
    var tmp;
    const v7956 = ignoreCase === true;
    if (v7956) {
        const v7957 = self.length;
        const v7958 = v7957 - length;
        tmp = self.substring(v7958);
        const v7959 = tmp.length;
        const v7960 = v7959 === length;
        const v7961 = tmp.toLowerCase();
        const v7962 = text.toLowerCase();
        const v7963 = v7961 === v7962;
        const v7964 = v7960 && v7963;
        return v7964;
    }
    if (ignoreCase) {
        const v7965 = self.length;
        const v7966 = v7965 - ignoreCase;
        const v7967 = v7966 - length;
        tmp = self.substr(v7967, length);
    } else {
        const v7968 = self.length;
        const v7969 = v7968 - length;
        tmp = self.substring(v7969);
    }
    const v7970 = tmp.length;
    const v7971 = v7970 === length;
    const v7972 = tmp === text;
    const v7973 = v7971 && v7972;
    return v7973;
};
SP.endsWith = v7974;
const v7984 = function (find, text) {
    var self = this;
    var beg = self.indexOf(find);
    const v7975 = -1;
    const v7976 = beg === v7975;
    const v7977 = self.substring(0, beg);
    const v7978 = v7977 + text;
    const v7979 = find.length;
    const v7980 = beg + v7979;
    const v7981 = self.substring(v7980);
    const v7982 = v7978 + v7981;
    let v7983;
    if (v7976) {
        v7983 = self;
    } else {
        v7983 = v7982;
    }
    return v7983;
};
SP.replacer = v7984;
const v7995 = function (type, salt) {
    let str;
    const v7985 = this + salt;
    if (salt) {
        str = v7985;
    } else {
        str = this;
    }
    switch (type) {
    case 'md5':
        const v7986 = str.md5();
        return v7986;
    case 'sha1':
        const v7987 = str.sha1();
        return v7987;
    case 'sha256':
        const v7988 = str.sha256();
        return v7988;
    case 'sha512':
        const v7989 = str.sha512();
        return v7989;
    case 'crc32':
        const v7990 = str.crc32();
        return v7990;
    case 'crc32unsigned':
        const v7991 = str.crc32(true);
        return v7991;
    default:
        var val = string_hash(str);
        const v7992 = type === true;
        const v7993 = val >>> 0;
        let v7994;
        if (v7992) {
            v7994 = v7993;
        } else {
            v7994 = val;
        }
        return v7994;
    }
};
SP.hash = v7995;
const v7998 = function (value, type) {
    let v7996;
    if (type) {
        v7996 = type;
    } else {
        v7996 = true;
    }
    const v7997 = value.hash(v7996);
    return v7997;
};
global.HASH = v7998;
const v8001 = function () {
    const v7999 = this.hash(true);
    const v8000 = v7999.toString(16);
    return v8000;
};
SP.makeid = v8001;
const v8013 = function (unsigned) {
    const v8002 = -1;
    var crc = v8002;
    var i = 0;
    var length = this.length;
    let v8003 = i < length;
    while (v8003) {
        const v8005 = crc >>> 8;
        const v8006 = this.charCodeAt(i);
        const v8007 = crc ^ v8006;
        const v8008 = v8007 & 255;
        const v8009 = CRC32TABLE[v8008];
        crc = v8005 ^ v8009;
        const v8004 = i++;
        v8003 = i < length;
    }
    const v8010 = -1;
    var val = crc ^ v8010;
    const v8011 = val >>> 0;
    let v8012;
    if (unsigned) {
        v8012 = v8011;
    } else {
        v8012 = val;
    }
    return v8012;
};
SP.crc32 = v8013;
const string_hash = function (s, convert) {
    var hash = 0;
    const v8014 = s.length;
    const v8015 = v8014 === 0;
    if (v8015) {
        let v8016;
        if (convert) {
            v8016 = '';
        } else {
            v8016 = hash;
        }
        return v8016;
    }
    var i = 0;
    var l = s.length;
    let v8017 = i < l;
    while (v8017) {
        var char = s.charCodeAt(i);
        const v8019 = hash << 5;
        const v8020 = v8019 - hash;
        hash = v8020 + char;
        hash |= 0;
        const v8018 = i++;
        v8017 = i < l;
    }
    return hash;
};
const v8026 = function (text) {
    var index = 0;
    var count = 0;
    let v8021 = true;
    while (v8021) {
        const v8022 = text.length;
        const v8023 = index + v8022;
        index = this.indexOf(text, v8023);
        const v8024 = index > 0;
        if (v8024) {
            const v8025 = count++;
            v8025;
        }
        v8021 = index > 0;
    }
    return count;
};
SP.count = v8026;
const v8028 = function (replace) {
    const v8027 = F.onParseXML(this, replace);
    return v8027;
};
SP.parseXML = v8028;
const v8030 = function (date) {
    const v8029 = exports.parseJSON(this, date);
    return v8029;
};
SP.parseJSON = v8030;
const v8032 = function () {
    const v8031 = exports.parseQuery(this);
    return v8031;
};
SP.parseQuery = v8032;
const v8120 = function (structured) {
    var ua = this;
    const v8033 = !ua;
    if (v8033) {
        return '';
    }
    var arr = ua.match(regexpUA);
    var uid = '';
    if (arr) {
        var data = {};
        var i = 0;
        const v8034 = arr.length;
        let v8035 = i < v8034;
        while (v8035) {
            const v8037 = arr[i];
            const v8038 = v8037 === 'like';
            const v8039 = i + 1;
            const v8040 = arr[v8039];
            const v8041 = v8040 === 'Gecko';
            const v8042 = v8038 && v8041;
            if (v8042) {
                i += 1;
                continue;
            }
            const v8043 = arr[i];
            var key = v8043.toLowerCase();
            const v8044 = key === 'like';
            if (v8044) {
                break;
            }
            switch (key) {
            case 'linux':
            case 'windows':
            case 'mac':
            case 'symbian':
            case 'symbos':
            case 'tizen':
            case 'android':
                const v8045 = arr[i];
                data[v8045] = 2;
                const v8046 = key === 'tizen';
                const v8047 = key === 'android';
                const v8048 = v8046 || v8047;
                if (v8048) {
                    data.Mobile = 1;
                }
                break;
            case 'webos':
                data.WebOS = 2;
                break;
            case 'media':
            case 'center':
            case 'tv':
            case 'smarttv':
            case 'smart':
                const v8049 = arr[i];
                data[v8049] = 5;
                break;
            case 'iemobile':
            case 'mobile':
                const v8050 = arr[i];
                data[v8050] = 1;
                data.Mobile = 3;
                break;
            case 'ipad':
            case 'ipod':
            case 'iphone':
                data.iOS = 2;
                data.Mobile = 3;
                const v8051 = arr[i];
                data[v8051] = 1;
                const v8052 = key === 'ipad';
                if (v8052) {
                    data.Tablet = 4;
                }
                break;
            case 'phone':
                data.Mobile = 3;
                break;
            case 'tizenbrowser':
            case 'blackberry':
            case 'mini':
                data.Mobile = 3;
                const v8053 = arr[i];
                data[v8053] = 1;
                break;
            case 'samsungbrowser':
            case 'chrome':
            case 'firefox':
            case 'msie':
            case 'opera':
            case 'brave':
            case 'vivaldi':
            case 'outlook':
            case 'safari':
            case 'mail':
            case 'edge':
            case 'maxthon':
            case 'electron':
                const v8054 = arr[i];
                data[v8054] = 1;
                break;
            case 'trident':
                data.MSIE = 1;
                break;
            case 'opr':
                data.Opera = 1;
                break;
            case 'tablet':
                data.Tablet = 4;
                break;
            }
            const v8036 = i++;
            v8035 = i < v8034;
        }
        const v8055 = data.MSIE;
        if (v8055) {
            data.IE = 1;
            const v8056 = data.MSIE;
            const v8057 = delete v8056;
            v8057;
        }
        const v8058 = data.WebOS;
        const v8059 = data.Android;
        const v8060 = v8058 || v8059;
        if (v8060) {
            const v8061 = data.Linux;
            const v8062 = delete v8061;
            v8062;
        }
        const v8063 = data.IEMobile;
        if (v8063) {
            const v8064 = data.Android;
            if (v8064) {
                const v8065 = data.Android;
                const v8066 = delete v8065;
                v8066;
            }
            const v8067 = data.Safari;
            if (v8067) {
                const v8068 = data.Safari;
                const v8069 = delete v8068;
                v8069;
            }
            const v8070 = data.Chrome;
            if (v8070) {
                const v8071 = data.Chrome;
                const v8072 = delete v8071;
                v8072;
            }
        } else {
            const v8073 = data.MSIE;
            if (v8073) {
                const v8074 = data.Chrome;
                if (v8074) {
                    const v8075 = data.Chrome;
                    const v8076 = delete v8075;
                    v8076;
                }
                const v8077 = data.Safari;
                if (v8077) {
                    const v8078 = data.Safari;
                    const v8079 = delete v8078;
                    v8079;
                }
            } else {
                const v8080 = data.Edge;
                if (v8080) {
                    const v8081 = data.Chrome;
                    if (v8081) {
                        const v8082 = data.Chrome;
                        const v8083 = delete v8082;
                        v8083;
                    }
                    const v8084 = data.Safari;
                    if (v8084) {
                        const v8085 = data.Safari;
                        const v8086 = delete v8085;
                        v8086;
                    }
                } else {
                    const v8087 = data.Opera;
                    const v8088 = data.Electron;
                    const v8089 = v8087 || v8088;
                    if (v8089) {
                        const v8090 = data.Chrome;
                        if (v8090) {
                            const v8091 = data.Chrome;
                            const v8092 = delete v8091;
                            v8092;
                        }
                        const v8093 = data.Safari;
                        if (v8093) {
                            const v8094 = data.Safari;
                            const v8095 = delete v8094;
                            v8095;
                        }
                    } else {
                        const v8096 = data.Chrome;
                        if (v8096) {
                            const v8097 = data.Safari;
                            if (v8097) {
                                const v8098 = data.Safari;
                                const v8099 = delete v8098;
                                v8099;
                            }
                            const v8100 = data.SamsungBrowser;
                            if (v8100) {
                                const v8101 = data.SamsungBrowser;
                                const v8102 = delete v8101;
                                v8102;
                            }
                        } else {
                            const v8103 = data.SamsungBrowser;
                            if (v8103) {
                                const v8104 = data.Safari;
                                if (v8104) {
                                    const v8105 = data.Safari;
                                    const v8106 = delete v8105;
                                    v8106;
                                }
                            }
                        }
                    }
                }
            }
        }
        if (structured) {
            var keys = Object.keys(data);
            var output = {};
            output.os = '';
            output.browser = '';
            output.device = 'desktop';
            const v8107 = data.Tablet;
            if (v8107) {
                output.device = 'tablet';
            } else {
                const v8108 = data.Mobile;
                if (v8108) {
                    output.device = 'mobile';
                }
            }
            var i = 0;
            const v8109 = keys.length;
            let v8110 = i < v8109;
            while (v8110) {
                const v8112 = keys[i];
                var val = data[v8112];
                switch (val) {
                case 1:
                    const v8113 = output.browser;
                    let v8114;
                    if (v8113) {
                        v8114 = ' ';
                    } else {
                        v8114 = '';
                    }
                    const v8115 = keys[i];
                    output.browser += v8114 + v8115;
                    break;
                case 2:
                    const v8116 = output.os;
                    let v8117;
                    if (v8116) {
                        v8117 = ' ';
                    } else {
                        v8117 = '';
                    }
                    const v8118 = keys[i];
                    output.os += v8117 + v8118;
                    break;
                case 5:
                    output.device = 'tv';
                    break;
                }
                const v8111 = i++;
                v8110 = i < v8109;
            }
            return output;
        }
        const v8119 = Object.keys(data);
        uid = v8119.join(' ');
    }
    return uid;
};
SP.parseUA = v8120;
const v8145 = function (delimiter) {
    const v8121 = !delimiter;
    if (v8121) {
        delimiter = ',';
    }
    var delimiterstring = '"';
    var t = this;
    var scope;
    var tmp = {};
    var index = 1;
    var data = [];
    var current = 'a';
    var i = 0;
    const v8122 = t.length;
    let v8123 = i < v8122;
    while (v8123) {
        var c = t[i];
        const v8125 = !scope;
        if (v8125) {
            const v8126 = c === '\n';
            const v8127 = c === '\r';
            const v8128 = v8126 || v8127;
            if (v8128) {
                const v8129 = data.push(tmp);
                const v8130 = tmp && v8129;
                v8130;
                index = 1;
                current = 'a';
                tmp = null;
                continue;
            }
            const v8131 = c === delimiter;
            if (v8131) {
                const v8132 = 97 + index;
                current = String.fromCharCode(v8132);
                const v8133 = index++;
                v8133;
                continue;
            }
        }
        const v8134 = c === delimiterstring;
        if (v8134) {
            const v8135 = i + 1;
            const v8136 = t[v8135];
            const v8137 = v8136 === delimiterstring;
            const v8138 = scope && v8137;
            if (v8138) {
                const v8139 = i++;
                v8139;
            } else {
                const v8140 = c === scope;
                if (v8140) {
                    scope = '';
                } else {
                    scope = c;
                }
                continue;
            }
        }
        const v8141 = !tmp;
        if (v8141) {
            tmp = {};
        }
        const v8142 = tmp[current];
        if (v8142) {
            tmp[current] += c;
        } else {
            tmp[current] = c;
        }
        const v8124 = i++;
        v8123 = i < v8122;
    }
    const v8143 = data.push(tmp);
    const v8144 = tmp && v8143;
    v8144;
    return data;
};
SP.parseCSV = v8145;
const v8203 = function (fields, fn, skip, take) {
    var lines = this.split('\n');
    const v8146 = typeof fields;
    const v8147 = v8146 === 'function';
    if (v8147) {
        take = skip;
        skip = fn;
        fn = fields;
        const v8148 = parseTerminal2(lines, fn, skip, take);
        v8148;
        return this;
    }
    const v8149 = skip === undefined;
    if (v8149) {
        skip = 0;
    }
    const v8150 = take === undefined;
    if (v8150) {
        take = lines.length;
    }
    var headers = [];
    var indexer = 0;
    var line = lines[0];
    const v8151 = !line;
    if (v8151) {
        line = lines[1];
        const v8152 = skip++;
        v8152;
    }
    const v8153 = !line;
    if (v8153) {
        line = lines[2];
        const v8154 = skip++;
        v8154;
    }
    const v8155 = !line;
    if (v8155) {
        return this;
    }
    var fieldslength = fields.length;
    var tmp;
    var i = 0;
    var length = fieldslength;
    let v8156 = i < length;
    while (v8156) {
        var field = fields[i];
        const v8158 = -1;
        var beg = v8158;
        const v8159 = -1;
        var end = v8159;
        const v8160 = typeof field;
        var type = v8160;
        const v8161 = type === 'object';
        const v8162 = field.test;
        const v8163 = v8161 && v8162;
        if (v8163) {
            tmp = line.match(field);
            if (tmp) {
                beg = tmp.index;
                const v8164 = tmp.toString();
                const v8165 = v8164.length;
                end = beg + v8165;
            } else {
                const v8166 = -1;
                beg = v8166;
                const v8167 = -1;
                end = v8167;
            }
        } else {
            const v8168 = type === 'string';
            if (v8168) {
                tmp = line.indexOf(field);
                const v8169 = -1;
                const v8170 = tmp === v8169;
                if (v8170) {
                    const v8171 = -1;
                    beg = v8171;
                    const v8172 = -1;
                    end = v8172;
                } else {
                    beg = tmp;
                    const v8173 = field.length;
                    const v8174 = beg + v8173;
                    end = line.indexOf(' ', v8174);
                }
            }
        }
        const v8175 = {
            beg: beg,
            end: end
        };
        const v8176 = headers.push(v8175);
        v8176;
        const v8157 = i++;
        v8156 = i < length;
    }
    var i = skip + 1;
    const v8177 = skip + 1;
    var length = v8177 + take;
    let v8178 = i < length;
    while (v8178) {
        var line = lines[i];
        const v8180 = !line;
        if (v8180) {
            continue;
        }
        var arr = [];
        var is = false;
        var beg;
        var j = 0;
        let v8181 = j < fieldslength;
        while (v8181) {
            var header = headers[j];
            const v8183 = header.beg;
            const v8184 = -1;
            const v8185 = v8183 !== v8184;
            if (v8185) {
                is = true;
                beg = 0;
                var k = header.beg;
                const v8186 = -1;
                let v8187 = k > v8186;
                while (v8187) {
                    const v8189 = line[k];
                    const v8190 = v8189 === ' ';
                    if (v8190) {
                        beg = k + 1;
                        break;
                    }
                    const v8188 = k--;
                    v8187 = k > v8186;
                }
                const v8191 = header.end;
                const v8192 = -1;
                const v8193 = v8191 === v8192;
                const v8194 = header.end;
                let v8195;
                if (v8193) {
                    v8195 = undefined;
                } else {
                    v8195 = v8194;
                }
                const v8196 = line.substring(beg, v8195);
                const v8197 = v8196.trim();
                const v8198 = arr.push(v8197);
                v8198;
            } else {
                const v8199 = arr.push('');
                v8199;
            }
            const v8182 = j++;
            v8181 = j < fieldslength;
        }
        const v8200 = indexer++;
        const v8201 = fn(arr, v8200, length, i);
        const v8202 = is && v8201;
        v8202;
        const v8179 = i++;
        v8178 = i < length;
    }
    return this;
};
SP.parseTerminal = v8203;
const parseTerminal2 = function (lines, fn, skip, take) {
    var indexer = 0;
    const v8204 = skip === undefined;
    if (v8204) {
        skip = 0;
    }
    const v8205 = take === undefined;
    if (v8205) {
        take = lines.length;
    }
    var i = skip;
    var length = skip + take;
    let v8206 = i < length;
    while (v8206) {
        var line = lines[i];
        const v8208 = !line;
        if (v8208) {
            continue;
        }
        var m = line.match(regexpTERMINAL);
        const v8209 = indexer++;
        const v8210 = fn(m, v8209, length, i);
        const v8211 = m && v8210;
        v8211;
        const v8207 = i++;
        v8206 = i < length;
    }
};
const parseDateFormat = function (format, val) {
    var tmp = [];
    var tmpformat = [];
    var prev = '';
    var prevformat = '';
    var allowed = {};
    allowed.y = 1;
    allowed.Y = 1;
    allowed.M = 1;
    allowed.m = 1;
    allowed.d = 1;
    allowed.D = 1;
    allowed.H = 1;
    allowed.s = 1;
    allowed.a = 1;
    allowed.w = 1;
    var i = 0;
    const v8212 = format.length;
    let v8213 = i < v8212;
    while (v8213) {
        var c = format[i];
        const v8215 = allowed[c];
        const v8216 = !v8215;
        if (v8216) {
            continue;
        }
        const v8217 = prev !== c;
        if (v8217) {
            const v8218 = tmpformat.push(prevformat);
            const v8219 = prevformat && v8218;
            v8219;
            prevformat = c;
            prev = c;
        } else {
            prevformat += c;
        }
        const v8214 = i++;
        v8213 = i < v8212;
    }
    prev = '';
    var i = 0;
    const v8220 = val.length;
    let v8221 = i < v8220;
    while (v8221) {
        var code = val.charCodeAt(i);
        const v8223 = code >= 48;
        const v8224 = code <= 57;
        const v8225 = v8223 && v8224;
        if (v8225) {
            prev += val[i];
        }
        const v8222 = i++;
        v8221 = i < v8220;
    }
    const v8226 = tmpformat.push(prevformat);
    const v8227 = prevformat && v8226;
    v8227;
    var f = 0;
    var i = 0;
    const v8228 = tmpformat.length;
    let v8229 = i < v8228;
    while (v8229) {
        const v8231 = tmpformat[i];
        var l = v8231.length;
        const v8232 = f + l;
        const v8233 = prev.substring(f, v8232);
        const v8234 = tmp.push(v8233);
        v8234;
        f += l;
        const v8230 = i++;
        v8229 = i < v8228;
    }
    var dt = {};
    var i = 0;
    const v8235 = tmpformat.length;
    let v8236 = i < v8235;
    while (v8236) {
        var type = tmpformat[i];
        const v8238 = tmp[i];
        if (v8238) {
            const v8239 = type[0];
            const v8240 = tmp[i];
            const v8241 = +v8240;
            dt[v8239] = v8241;
        }
        const v8237 = i++;
        v8236 = i < v8235;
    }
    const v8242 = dt.h;
    const v8243 = dt.H;
    var h = v8242 || v8243;
    const v8244 = h != null;
    if (v8244) {
        var ampm = val.match(REG_TIME);
        const v8245 = ampm[0];
        const v8246 = v8245.toLowerCase();
        const v8247 = v8246 === 'pm';
        const v8248 = ampm && v8247;
        if (v8248) {
            h += 12;
        }
    }
    const v8249 = dt.y;
    const v8250 = dt.Y;
    const v8251 = v8249 || v8250;
    const v8252 = v8251 || 0;
    const v8253 = dt.M;
    const v8254 = v8253 || 1;
    const v8255 = v8254 - 1;
    const v8256 = dt.d;
    const v8257 = dt.D;
    const v8258 = v8256 || v8257;
    const v8259 = v8258 || 0;
    const v8260 = h || 0;
    const v8261 = dt.m;
    const v8262 = v8261 || 0;
    const v8263 = dt.s;
    const v8264 = v8263 || 0;
    const v8265 = new Date(v8252, v8255, v8259, v8260, v8262, v8264);
    return v8265;
};
const v8371 = function (format) {
    if (format) {
        const v8266 = parseDateFormat(format, this);
        return v8266;
    }
    var self = this.trim();
    const v8267 = self.length;
    const v8268 = v8267 - 1;
    var lc = self.charCodeAt(v8268);
    const v8269 = lc === 41;
    if (v8269) {
        const v8270 = new Date(self);
        return v8270;
    }
    const v8271 = lc === 90;
    if (v8271) {
        const v8272 = Date.parse(self);
        const v8273 = new Date(v8272);
        return v8273;
    }
    let arr;
    const v8274 = self.indexOf(' ');
    const v8275 = -1;
    const v8276 = v8274 === v8275;
    const v8277 = self.split('T');
    const v8278 = self.split(' ');
    if (v8276) {
        arr = v8277;
    } else {
        arr = v8278;
    }
    const v8279 = arr[0];
    var index = v8279.indexOf(':');
    const v8280 = arr[0];
    var length = v8280.length;
    const v8281 = -1;
    const v8282 = index !== v8281;
    if (v8282) {
        var tmp = arr[1];
        const v8283 = arr[0];
        arr[1] = v8283;
        arr[0] = tmp;
    }
    const v8284 = arr[0];
    const v8285 = v8284 === undefined;
    if (v8285) {
        arr[0] = '';
    }
    let noTime;
    const v8286 = arr[1];
    const v8287 = v8286 === undefined;
    const v8288 = arr[1];
    const v8289 = v8288.length;
    const v8290 = v8289 === 0;
    if (v8287) {
        noTime = true;
    } else {
        noTime = v8290;
    }
    var i = 0;
    let v8291 = i < length;
    while (v8291) {
        const v8293 = arr[0];
        var c = v8293.charCodeAt(i);
        const v8294 = c === 45;
        const v8295 = c === 46;
        const v8296 = v8294 || v8295;
        const v8297 = c > 47;
        const v8298 = c < 58;
        const v8299 = v8297 && v8298;
        const v8300 = v8296 || v8299;
        if (v8300) {
            continue;
        }
        if (noTime) {
            const v8301 = new Date(self);
            return v8301;
        }
        const v8292 = i++;
        v8291 = i < length;
    }
    const v8302 = arr[1];
    const v8303 = v8302 === undefined;
    if (v8303) {
        arr[1] = '00:00:00';
    }
    const v8304 = arr[0];
    const v8305 = v8304.indexOf('-');
    const v8306 = -1;
    var firstDay = v8305 === v8306;
    const v8307 = arr[0];
    const v8308 = v8307 || '';
    let v8309;
    if (firstDay) {
        v8309 = '.';
    } else {
        v8309 = '-';
    }
    var date = v8308.split(v8309);
    const v8310 = arr[1];
    const v8311 = v8310 || '';
    var time = v8311.split(':');
    var parsed = [];
    const v8312 = date.length;
    const v8313 = v8312 < 4;
    const v8314 = time.length;
    const v8315 = v8314 < 2;
    const v8316 = v8313 && v8315;
    if (v8316) {
        const v8317 = new Date(self);
        return v8317;
    }
    const v8318 = time[2];
    const v8319 = v8318 || '';
    index = v8319.indexOf('.');
    const v8320 = -1;
    const v8321 = index !== v8320;
    if (v8321) {
        const v8322 = time[2];
        const v8323 = index + 1;
        const v8324 = v8322.substring(v8323);
        time[3] = v8324;
        const v8325 = time[2];
        const v8326 = v8325.substring(0, index);
        time[2] = v8326;
    } else {
        time[3] = '0';
    }
    let v8327;
    if (firstDay) {
        v8327 = 2;
    } else {
        v8327 = 0;
    }
    const v8328 = date[v8327];
    const v8329 = +v8328;
    const v8330 = parsed.push(v8329);
    v8330;
    const v8331 = date[1];
    const v8332 = +v8331;
    const v8333 = parsed.push(v8332);
    v8333;
    let v8334;
    if (firstDay) {
        v8334 = 0;
    } else {
        v8334 = 2;
    }
    const v8335 = date[v8334];
    const v8336 = +v8335;
    const v8337 = parsed.push(v8336);
    v8337;
    const v8338 = time[0];
    const v8339 = +v8338;
    const v8340 = parsed.push(v8339);
    v8340;
    const v8341 = time[1];
    const v8342 = +v8341;
    const v8343 = parsed.push(v8342);
    v8343;
    const v8344 = time[2];
    const v8345 = +v8344;
    const v8346 = parsed.push(v8345);
    v8346;
    const v8347 = time[3];
    const v8348 = +v8347;
    const v8349 = parsed.push(v8348);
    v8349;
    var def = new Date();
    var i = 0;
    var length = parsed.length;
    let v8350 = i < length;
    while (v8350) {
        const v8352 = parsed[i];
        const v8353 = isNaN(v8352);
        if (v8353) {
            parsed[i] = 0;
        }
        var value = parsed[i];
        const v8354 = value !== 0;
        if (v8354) {
            continue;
        }
        switch (i) {
        case 0:
            const v8355 = value <= 0;
            if (v8355) {
                const v8356 = def.getFullYear();
                parsed[i] = v8356;
            }
            break;
        case 1:
            const v8357 = value <= 0;
            if (v8357) {
                const v8358 = def.getMonth();
                parsed[i] = v8358 + 1;
            }
            break;
        case 2:
            const v8359 = value <= 0;
            if (v8359) {
                const v8360 = def.getDate();
                parsed[i] = v8360;
            }
            break;
        }
        const v8351 = i++;
        v8350 = i < length;
    }
    const v8361 = parsed[0];
    const v8362 = parsed[1];
    const v8363 = v8362 - 1;
    const v8364 = parsed[2];
    const v8365 = parsed[3];
    const v8366 = parsed[4];
    const v8367 = NOW.getTimezoneOffset();
    const v8368 = v8366 - v8367;
    const v8369 = parsed[5];
    const v8370 = new Date(v8361, v8363, v8364, v8365, v8368, v8369);
    return v8370;
};
SP.parseDate = v8371;
const v8376 = function () {
    var self = this;
    var arr = self.split(' ');
    var dt = new Date();
    var length = arr.length;
    var i = 0;
    let v8372 = i < length;
    while (v8372) {
        const v8373 = arr[i];
        var num = v8373.parseInt();
        const v8374 = num === 0;
        if (v8374) {
            continue;
        }
        const v8375 = i + 1;
        var type = arr[v8375];
        if (type) {
            dt = dt.add(type, num);
        }
        v8372 = i < length;
    }
    return dt;
};
SP.parseDateExpiration = v8376;
const v8391 = function (value, mustAll) {
    var str = this;
    const v8377 = typeof value;
    const v8378 = v8377 === 'string';
    if (v8378) {
        const v8379 = typeof mustAll;
        const v8380 = v8379 === 'number';
        let v8381;
        if (v8380) {
            v8381 = mustAll;
        } else {
            v8381 = 0;
        }
        const v8382 = str.indexOf(value, v8381);
        const v8383 = -1;
        const v8384 = v8382 !== v8383;
        return v8384;
    }
    var i = 0;
    var length = value.length;
    let v8385 = i < length;
    while (v8385) {
        const v8387 = value[i];
        const v8388 = str.indexOf(v8387);
        const v8389 = -1;
        var exists = v8388 !== v8389;
        if (mustAll) {
            const v8390 = !exists;
            if (v8390) {
                return false;
            }
        } else {
            if (exists) {
                return true;
            }
        }
        const v8386 = i++;
        v8385 = i < length;
    }
    return mustAll;
};
SP.contains = v8391;
const v8393 = function (value) {
    const v8392 = COMPARER(this, value);
    return v8392;
};
SP.localeCompare2 = v8393;
var configurereplace = function (text) {
    const v8394 = text.length;
    const v8395 = v8394 - 1;
    const v8396 = text.substring(1, v8395);
    var val = CONF[v8396];
    const v8397 = val == null;
    let v8398;
    if (v8397) {
        v8398 = '';
    } else {
        v8398 = val;
    }
    return v8398;
};
const v8400 = function () {
    const v8399 = this.replace(regexpCONFIGURE, configurereplace);
    return v8399;
};
SP.env = v8400;
const v8452 = function (def, onerr) {
    const v8401 = typeof def;
    const v8402 = v8401 === 'function';
    if (v8402) {
        onerr = def;
        def = null;
    }
    var arr = this.split('\n');
    var length = arr.length;
    let obj;
    const v8403 = {};
    const v8404 = exports.extend(v8403, def);
    const v8405 = {};
    if (def) {
        obj = v8404;
    } else {
        obj = v8405;
    }
    var subtype;
    var name;
    var index;
    var value;
    var i = 0;
    let v8406 = i < length;
    while (v8406) {
        var str = arr[i];
        const v8408 = !str;
        const v8409 = str[0];
        const v8410 = v8409 === '#';
        const v8411 = v8408 || v8410;
        const v8412 = str.substring(0, 2);
        const v8413 = v8412 === '//';
        const v8414 = v8411 || v8413;
        if (v8414) {
            continue;
        }
        index = str.indexOf(':');
        const v8415 = -1;
        const v8416 = index === v8415;
        if (v8416) {
            index = str.indexOf('\t:');
            const v8417 = -1;
            const v8418 = index === v8417;
            if (v8418) {
                continue;
            }
        }
        const v8419 = str.substring(0, index);
        name = v8419.trim();
        const v8420 = index + 2;
        const v8421 = str.substring(v8420);
        value = v8421.trim();
        index = name.indexOf('(');
        const v8422 = -1;
        const v8423 = index !== v8422;
        if (v8423) {
            const v8424 = index + 1;
            const v8425 = name.indexOf(')');
            const v8426 = name.substring(v8424, v8425);
            const v8427 = v8426.trim();
            subtype = v8427.toLowerCase();
            const v8428 = name.substring(0, index);
            name = v8428.trim();
        } else {
            subtype = '';
        }
        switch (subtype) {
        case 'string':
            obj[name] = value;
            break;
        case 'number':
        case 'float':
        case 'double':
        case 'currency':
            const v8429 = value.isNumber(true);
            const v8430 = value.parseFloat2();
            const v8431 = value.parseInt2();
            let v8432;
            if (v8429) {
                v8432 = v8430;
            } else {
                v8432 = v8431;
            }
            obj[name] = v8432;
            break;
        case 'boolean':
        case 'bool':
            const v8433 = /true|on|1|enabled/i.test(value);
            obj[name] = v8433;
            break;
        case 'config':
            const v8434 = CONF[value];
            obj[name] = v8434;
            break;
        case 'eval':
        case 'object':
        case 'array':
            try {
                const v8435 = 'return ' + value;
                const v8436 = new Function(v8435);
                const v8437 = v8436();
                obj[name] = v8437;
            } catch (e) {
                if (onerr) {
                    const v8438 = arr[i];
                    const v8439 = onerr(e, v8438);
                    v8439;
                } else {
                    const v8440 = 'A value of "{0}" can\'t be converted to "{1}": '.format(name, subtype);
                    const v8441 = e.toString();
                    const v8442 = v8440 + v8441;
                    const v8443 = new Error(v8442);
                    throw v8443;
                }
            }
            break;
        case 'json':
            const v8444 = value.parseJSON(true);
            obj[name] = v8444;
            break;
        case 'env':
        case 'environment':
            const v8445 = process.env;
            const v8446 = v8445[value];
            obj[name] = v8446;
            break;
        case 'date':
        case 'time':
        case 'datetime':
            const v8447 = value.parseDate();
            obj[name] = v8447;
            break;
        case 'random':
            const v8448 = value || '0';
            const v8449 = v8448.parseInt();
            const v8450 = v8449 || 10;
            const v8451 = GUID(v8450);
            obj[name] = v8451;
            break;
        default:
            obj[name] = value;
            break;
        }
        const v8407 = i++;
        v8406 = i < length;
    }
    return obj;
};
SP.parseConfig = v8452;
const v8461 = function () {
    var arg = arguments;
    const v8459 = function (text) {
        const v8453 = text.length;
        const v8454 = v8453 - 1;
        const v8455 = text.substring(1, v8454);
        const v8456 = +v8455;
        var value = arg[v8456];
        const v8457 = value == null;
        let v8458;
        if (v8457) {
            v8458 = '';
        } else {
            v8458 = value;
        }
        return v8458;
    };
    const v8460 = this.replace(regexpSTRINGFORMAT, v8459);
    return v8460;
};
SP.format = v8461;
const v8463 = function (key) {
    const v8462 = exports.encryptUID(this, key);
    return v8462;
};
SP.encryptUID = v8463;
const v8465 = function (key) {
    const v8464 = exports.decryptUID(this, key);
    return v8464;
};
SP.decryptUID = v8465;
const v8468 = function () {
    var output = '';
    var i = 0;
    var length = this.length;
    let v8466 = i < length;
    while (v8466) {
        var c = this[i];
        switch (c) {
        case '<':
            output += '&lt;';
            break;
        case '>':
            output += '&gt;';
            break;
        case '"':
            output += '&quot;';
            break;
        case '\'':
            output += '&apos;';
            break;
        case '&':
            output += '&amp;';
            break;
        default:
            output += c;
            break;
        }
        const v8467 = i++;
        v8466 = i < length;
    }
    return output;
};
SP.encode = v8468;
const v8490 = function () {
    const v8488 = function (s) {
        const v8469 = s.charAt(1);
        const v8470 = v8469 !== '#';
        if (v8470) {
            const v8471 = ALPHA_INDEX[s];
            const v8472 = v8471 || s;
            return v8472;
        }
        let code;
        const v8473 = s[2];
        const v8474 = v8473.toLowerCase();
        const v8475 = v8474 === 'x';
        const v8476 = s.substr(3);
        const v8477 = parseInt(v8476, 16);
        const v8478 = s.substr(2);
        const v8479 = parseInt(v8478);
        if (v8475) {
            code = v8477;
        } else {
            code = v8479;
        }
        const v8480 = !code;
        const v8481 = -32768;
        const v8482 = code < v8481;
        const v8483 = v8480 || v8482;
        const v8484 = code > 65535;
        const v8485 = v8483 || v8484;
        const v8486 = String.fromCharCode(code);
        let v8487;
        if (v8485) {
            v8487 = '';
        } else {
            v8487 = v8486;
        }
        return v8487;
    };
    const v8489 = this.replace(regexpDECODE, v8488);
    return v8489;
};
SP.decode = v8490;
const v8492 = function () {
    const v8491 = encodeURIComponent(this);
    return v8491;
};
SP.urlEncode = v8492;
const v8494 = function () {
    const v8493 = decodeURIComponent(this);
    return v8493;
};
SP.urlDecode = v8494;
const v8519 = function (obj, encode, def) {
    const v8495 = typeof encode;
    const v8496 = v8495 === 'string';
    if (v8496) {
        def = encode;
    }
    const v8517 = function (text) {
        let l;
        const v8497 = text[1];
        const v8498 = v8497 === '{';
        if (v8498) {
            l = 2;
        } else {
            l = 1;
        }
        const v8499 = text.length;
        const v8500 = v8499 - l;
        const v8501 = text.substring(l, v8500);
        const v8502 = v8501.trim();
        var val = obj[v8502];
        const v8503 = encode === 'json';
        const v8504 = encode && v8503;
        if (v8504) {
            const v8505 = JSON.stringify(val);
            return v8505;
        }
        const v8506 = val == null;
        const v8507 = def == null;
        let v8508;
        if (v8507) {
            v8508 = text;
        } else {
            v8508 = def;
        }
        const v8509 = encode === 'html';
        const v8510 = val + '';
        const v8511 = v8510.encode();
        const v8512 = val + '';
        const v8513 = encodeURIComponent(v8512);
        let v8514;
        if (v8509) {
            v8514 = v8511;
        } else {
            v8514 = v8513;
        }
        let v8515;
        if (encode) {
            v8515 = v8514;
        } else {
            v8515 = val;
        }
        let v8516;
        if (v8506) {
            v8516 = v8508;
        } else {
            v8516 = v8515;
        }
        return v8516;
    };
    const v8518 = this.replace(regexpARG, v8517);
    return v8518;
};
SP.arg = v8519;
const v8635 = function (obj) {
    const v8520 = OBSOLETE('String.params()', 'The method is deprecated instead of it use F.viewCompile() or String.format().');
    v8520;
    var formatted = this;
    const v8521 = obj == null;
    if (v8521) {
        return formatted;
    }
    const v8633 = function (prop) {
        var isEncode = false;
        const v8522 = prop.length;
        const v8523 = v8522 - 2;
        const v8524 = prop.substring(2, v8523);
        var name = v8524.trim();
        var format = '';
        var index = name.indexOf('|');
        const v8525 = -1;
        const v8526 = index !== v8525;
        if (v8526) {
            const v8527 = index + 1;
            const v8528 = name.length;
            const v8529 = name.substring(v8527, v8528);
            format = v8529.trim();
            const v8530 = name.substring(0, index);
            name = v8530.trim();
        }
        const v8531 = name[0];
        const v8532 = v8531 === '!';
        if (v8532) {
            name = name.substring(1);
        } else {
            isEncode = true;
        }
        var val;
        const v8533 = name.indexOf('.');
        const v8534 = -1;
        const v8535 = v8533 !== v8534;
        if (v8535) {
            var arr = name.split('.');
            const v8536 = arr.length;
            const v8537 = v8536 === 2;
            if (v8537) {
                const v8538 = arr[0];
                const v8539 = obj[v8538];
                if (v8539) {
                    const v8540 = arr[0];
                    const v8541 = obj[v8540];
                    const v8542 = arr[1];
                    val = v8541[v8542];
                }
            } else {
                const v8543 = arr.length;
                const v8544 = v8543 === 3;
                if (v8544) {
                    const v8545 = arr[0];
                    const v8546 = obj[v8545];
                    const v8547 = arr[0];
                    const v8548 = obj[v8547];
                    const v8549 = arr[1];
                    const v8550 = v8548[v8549];
                    const v8551 = v8546 && v8550;
                    if (v8551) {
                        const v8552 = arr[0];
                        const v8553 = obj[v8552];
                        const v8554 = arr[1];
                        const v8555 = v8553[v8554];
                        const v8556 = arr[2];
                        val = v8555[v8556];
                    }
                } else {
                    const v8557 = arr.length;
                    const v8558 = v8557 === 4;
                    if (v8558) {
                        const v8559 = arr[0];
                        const v8560 = obj[v8559];
                        const v8561 = arr[0];
                        const v8562 = obj[v8561];
                        const v8563 = arr[1];
                        const v8564 = v8562[v8563];
                        const v8565 = v8560 && v8564;
                        const v8566 = arr[0];
                        const v8567 = obj[v8566];
                        const v8568 = arr[1];
                        const v8569 = v8567[v8568];
                        const v8570 = arr[2];
                        const v8571 = v8569[v8570];
                        const v8572 = v8565 && v8571;
                        if (v8572) {
                            const v8573 = arr[0];
                            const v8574 = obj[v8573];
                            const v8575 = arr[1];
                            const v8576 = v8574[v8575];
                            const v8577 = arr[2];
                            const v8578 = v8576[v8577];
                            const v8579 = arr[3];
                            val = v8578[v8579];
                        }
                    } else {
                        const v8580 = arr.length;
                        const v8581 = v8580 === 5;
                        if (v8581) {
                            const v8582 = arr[0];
                            const v8583 = obj[v8582];
                            const v8584 = arr[0];
                            const v8585 = obj[v8584];
                            const v8586 = arr[1];
                            const v8587 = v8585[v8586];
                            const v8588 = v8583 && v8587;
                            const v8589 = arr[0];
                            const v8590 = obj[v8589];
                            const v8591 = arr[1];
                            const v8592 = v8590[v8591];
                            const v8593 = arr[2];
                            const v8594 = v8592[v8593];
                            const v8595 = v8588 && v8594;
                            const v8596 = arr[0];
                            const v8597 = obj[v8596];
                            const v8598 = arr[1];
                            const v8599 = v8597[v8598];
                            const v8600 = arr[2];
                            const v8601 = v8599[v8600];
                            const v8602 = arr[3];
                            const v8603 = v8601[v8602];
                            const v8604 = v8595 && v8603;
                            if (v8604) {
                                const v8605 = arr[0];
                                const v8606 = obj[v8605];
                                const v8607 = arr[1];
                                const v8608 = v8606[v8607];
                                const v8609 = arr[2];
                                const v8610 = v8608[v8609];
                                const v8611 = arr[3];
                                const v8612 = v8610[v8611];
                                const v8613 = arr[4];
                                val = v8612[v8613];
                            }
                        }
                    }
                }
            }
        } else {
            const v8614 = name.length;
            const v8615 = obj[name];
            if (v8614) {
                val = v8615;
            } else {
                val = obj;
            }
        }
        const v8616 = typeof val;
        const v8617 = v8616 === 'function';
        if (v8617) {
            val = val(index);
        }
        const v8618 = val === undefined;
        if (v8618) {
            return prop;
        }
        const v8619 = format.length;
        if (v8619) {
            const v8620 = typeof val;
            var type = v8620;
            const v8621 = type === 'string';
            if (v8621) {
                const v8622 = +format;
                var max = v8622;
                const v8623 = isNaN(max);
                const v8624 = !v8623;
                if (v8624) {
                    const v8625 = max + 3;
                    val = val.max(v8625, '...');
                }
            } else {
                const v8626 = type === 'number';
                const v8627 = exports.isDate(val);
                const v8628 = v8626 || v8627;
                if (v8628) {
                    const v8629 = format.isNumber();
                    if (v8629) {
                        const v8630 = +format;
                        format = v8630;
                    }
                    val = val.format(format);
                }
            }
        }
        val = val.toString();
        const v8631 = exports.encode(val);
        let v8632;
        if (isEncode) {
            v8632 = v8631;
        } else {
            v8632 = val;
        }
        return v8632;
    };
    const v8634 = formatted.replace(regexpPARAM, v8633);
    return v8634;
};
SP.params = v8635;
const v8645 = function (length, chars) {
    var str = this;
    const v8636 = typeof chars;
    const v8637 = v8636 !== 'string';
    if (v8637) {
        chars = '...';
    }
    const v8638 = str.length;
    const v8639 = v8638 > length;
    const v8640 = chars.length;
    const v8641 = length - v8640;
    const v8642 = str.substring(0, v8641);
    const v8643 = v8642 + chars;
    let v8644;
    if (v8639) {
        v8644 = v8643;
    } else {
        v8644 = str;
    }
    return v8644;
};
SP.max = v8645;
const v8682 = function () {
    var self = this;
    const v8646 = self.length;
    const v8647 = v8646 <= 1;
    if (v8647) {
        return false;
    }
    const v8648 = self.length;
    var l = v8648 - 1;
    var a;
    var b;
    var i = 0;
    while (true) {
        const v8649 = i++;
        a = self[v8649];
        const v8650 = a === ' ';
        const v8651 = a === '\n';
        const v8652 = v8650 || v8651;
        const v8653 = a === '\r';
        const v8654 = v8652 || v8653;
        const v8655 = a === '\t';
        const v8656 = v8654 || v8655;
        if (v8656) {
            continue;
        }
        break;
    }
    while (true) {
        const v8657 = l--;
        b = self[v8657];
        const v8658 = b === ' ';
        const v8659 = b === '\n';
        const v8660 = v8658 || v8659;
        const v8661 = b === '\r';
        const v8662 = v8660 || v8661;
        const v8663 = b === '\t';
        const v8664 = v8662 || v8663;
        if (v8664) {
            continue;
        }
        break;
    }
    const v8665 = a === '"';
    const v8666 = b === '"';
    const v8667 = v8665 && v8666;
    const v8668 = a === '[';
    const v8669 = b === ']';
    const v8670 = v8668 && v8669;
    const v8671 = v8667 || v8670;
    const v8672 = a === '{';
    const v8673 = b === '}';
    const v8674 = v8672 && v8673;
    const v8675 = v8671 || v8674;
    const v8676 = a.charCodeAt(0);
    const v8677 = v8676 > 47;
    const v8678 = b.charCodeAt(0);
    const v8679 = v8678 < 57;
    const v8680 = v8677 && v8679;
    const v8681 = v8675 || v8680;
    return v8681;
};
SP.isJSON = v8682;
const v8689 = function () {
    const v8683 = this.length;
    const v8684 = v8683 <= 7;
    const v8685 = F.validators;
    const v8686 = v8685.url;
    const v8687 = v8686.test(this);
    let v8688;
    if (v8684) {
        v8688 = false;
    } else {
        v8688 = v8687;
    }
    return v8688;
};
SP.isURL = v8689;
const v8693 = function () {
    const v8690 = F.validators;
    const v8691 = v8690.zip;
    const v8692 = v8691.test(this);
    return v8692;
};
SP.isZIP = v8693;
const v8700 = function () {
    const v8694 = this.length;
    const v8695 = v8694 <= 4;
    const v8696 = F.validators;
    const v8697 = v8696.email;
    const v8698 = v8697.test(this);
    let v8699;
    if (v8695) {
        v8699 = false;
    } else {
        v8699 = v8698;
    }
    return v8699;
};
SP.isEmail = v8700;
const v8707 = function () {
    const v8701 = this.length;
    const v8702 = v8701 < 6;
    const v8703 = F.validators;
    const v8704 = v8703.phone;
    const v8705 = v8704.test(this);
    let v8706;
    if (v8702) {
        v8706 = false;
    } else {
        v8706 = v8705;
    }
    return v8706;
};
SP.isPhone = v8707;
const v8713 = function () {
    var str = this;
    const v8708 = str.length;
    const v8709 = v8708 % 4;
    const v8710 = v8709 === 0;
    const v8711 = regexpBASE64.test(str);
    const v8712 = v8710 && v8711;
    return v8712;
};
SP.isBase64 = v8713;
const v8758 = function () {
    var str = this;
    const v8714 = str.length;
    const v8715 = v8714 < 12;
    if (v8715) {
        return false;
    }
    const v8716 = DEF.validators;
    const v8717 = v8716.uid;
    var is = v8717.test(str);
    if (is) {
        var sum;
        var beg;
        var end;
        const v8718 = str.length;
        const v8719 = v8718 - 1;
        var e = str[v8719];
        const v8720 = e === 'b';
        const v8721 = e === 'c';
        const v8722 = v8720 || v8721;
        const v8723 = e === 'd';
        const v8724 = v8722 || v8723;
        if (v8724) {
            const v8725 = str.length;
            const v8726 = v8725 - 2;
            sum = str[v8726];
            const v8727 = str.length;
            const v8728 = v8727 - 3;
            const v8729 = str[v8728];
            const v8730 = +v8729;
            beg = v8730;
            const v8731 = str.length;
            end = v8731 - 5;
            let tmp;
            const v8732 = e === 'c';
            const v8733 = e === 'd';
            const v8734 = v8732 || v8733;
            const v8735 = str.substring(beg, end);
            const v8736 = +v8735;
            const v8737 = str.substring(beg, end);
            const v8738 = parseInt(v8737, 16);
            if (v8734) {
                tmp = v8736;
            } else {
                tmp = v8738;
            }
            const v8739 = tmp % 2;
            let v8740;
            if (v8739) {
                v8740 = '1';
            } else {
                v8740 = '0';
            }
            const v8741 = sum === v8740;
            return v8741;
        } else {
            const v8742 = e === 'a';
            if (v8742) {
                const v8743 = str.length;
                const v8744 = v8743 - 2;
                sum = str[v8744];
                beg = 6;
                const v8745 = str.length;
                end = v8745 - 4;
            } else {
                const v8746 = str.length;
                const v8747 = v8746 - 1;
                sum = str[v8747];
                beg = 10;
                const v8748 = str.length;
                end = v8748 - 4;
            }
        }
        const v8749 = beg++;
        let v8750 = v8749 < end;
        while (v8750) {
            const v8751 = str[beg];
            const v8752 = v8751 !== '0';
            if (v8752) {
                const v8753 = str.substring(beg, end);
                const v8754 = +v8753;
                const v8755 = v8754 % 2;
                let v8756;
                if (v8755) {
                    v8756 = '1';
                } else {
                    v8756 = '0';
                }
                const v8757 = v8756 === sum;
                if (v8757) {
                    return true;
                }
            }
            v8750 = v8749 < end;
        }
    }
    return false;
};
SP.isUID = v8758;
const v8844 = function () {
    var self = this;
    var obj = {};
    var hash;
    const v8759 = self.length;
    const v8760 = v8759 - 1;
    var e = self[v8760];
    const v8761 = e === 'b';
    const v8762 = e === 'c';
    const v8763 = v8761 || v8762;
    const v8764 = e === 'd';
    const v8765 = v8763 || v8764;
    if (v8765) {
        const v8766 = self.length;
        const v8767 = v8766 - 3;
        const v8768 = self[v8767];
        const v8769 = +v8768;
        end = v8769;
        const v8770 = e === 'b';
        const v8771 = self.substring(0, end);
        const v8772 = +v8771;
        const v8773 = self.substring(0, end);
        const v8774 = e === 'd';
        let v8775;
        if (v8774) {
            v8775 = 36;
        } else {
            v8775 = 16;
        }
        const v8776 = parseInt(v8773, v8775);
        let v8777;
        if (v8770) {
            v8777 = v8772;
        } else {
            v8777 = v8776;
        }
        const v8778 = v8777 * 1000;
        const v8779 = v8778 * 60;
        var ticks = v8779 + 1580511600000;
        obj.date = new Date(ticks);
        beg = end;
        const v8780 = self.length;
        end = v8780 - 5;
        const v8781 = end + 3;
        const v8782 = end + 4;
        const v8783 = self.substring(v8781, v8782);
        const v8784 = +v8783;
        hash = v8784;
        const v8785 = obj.date;
        const v8786 = v8785.getFullYear();
        const v8787 = v8786 - 1;
        const v8788 = v8787 / 100;
        const v8789 = Math.floor(v8788);
        obj.century = v8789 + 1;
        const v8790 = end + 2;
        const v8791 = self.substring(end, v8790);
        obj.hash = v8791;
    } else {
        const v8792 = e === 'a';
        if (v8792) {
            const v8793 = self.substring(0, 6);
            const v8794 = +v8793;
            const v8795 = v8794 * 1000;
            const v8796 = v8795 * 60;
            var ticks = v8796 + 1548975600000;
            obj.date = new Date(ticks);
            beg = 7;
            const v8797 = self.length;
            end = v8797 - 4;
            const v8798 = end + 2;
            const v8799 = end + 3;
            const v8800 = self.substring(v8798, v8799);
            const v8801 = +v8800;
            hash = v8801;
            const v8802 = obj.date;
            const v8803 = v8802.getFullYear();
            const v8804 = v8803 - 1;
            const v8805 = v8804 / 100;
            const v8806 = Math.floor(v8805);
            obj.century = v8806 + 1;
            const v8807 = end + 2;
            const v8808 = self.substring(end, v8807);
            obj.hash = v8808;
        } else {
            var y = self.substring(0, 2);
            var M = self.substring(2, 4);
            var d = self.substring(4, 6);
            var H = self.substring(6, 8);
            var m = self.substring(8, 10);
            const v8809 = '20' + y;
            const v8810 = +v8809;
            const v8811 = +M;
            const v8812 = v8811 - 1;
            const v8813 = +d;
            const v8814 = +H;
            const v8815 = +m;
            obj.date = new Date(v8810, v8812, v8813, v8814, v8815, 0);
            var beg = 0;
            var end = 0;
            var index = 10;
            while (true) {
                var c = self[index];
                const v8816 = !c;
                if (v8816) {
                    break;
                }
                const v8817 = !beg;
                const v8818 = c !== '0';
                const v8819 = v8817 && v8818;
                if (v8819) {
                    beg = index;
                }
                const v8820 = c.charCodeAt(0);
                const v8821 = v8820 > 96;
                if (v8821) {
                    end = index;
                    break;
                }
                const v8822 = index++;
                v8822;
            }
            const v8823 = end + 4;
            const v8824 = self.substring(v8823);
            obj.century = v8824;
            const v8825 = obj.century;
            if (v8825) {
                const v8826 = obj.century;
                const v8827 = +v8826;
                obj.century = 20 + v8827;
                const v8828 = obj.date;
                const v8829 = obj.date;
                const v8830 = v8829.getFullYear();
                const v8831 = v8830 + 100;
                const v8832 = v8828.setYear(v8831);
                v8832;
            } else {
                obj.century = 21;
            }
            const v8833 = end + 3;
            const v8834 = end + 4;
            const v8835 = self.substring(v8833, v8834);
            const v8836 = +v8835;
            hash = v8836;
            const v8837 = end + 3;
            const v8838 = self.substring(end, v8837);
            obj.hash = v8838;
        }
    }
    const v8839 = self.substring(beg, end);
    const v8840 = +v8839;
    obj.index = v8840;
    const v8841 = obj.index;
    const v8842 = v8841 % 2;
    let v8843;
    if (v8842) {
        v8843 = 1;
    } else {
        v8843 = 0;
    }
    obj.valid = v8843 === hash;
    return obj;
};
SP.parseUID = v8844;
const v8871 = function () {
    var arr = this.split(regexpLINES);
    var obj = {};
    var i = 0;
    const v8845 = arr.length;
    let v8846 = i < v8845;
    while (v8846) {
        var line = arr[i];
        const v8848 = !line;
        const v8849 = line.substring(0, 2);
        const v8850 = v8849 === '//';
        const v8851 = v8848 || v8850;
        const v8852 = line[0];
        const v8853 = v8852 === '#';
        const v8854 = v8851 || v8853;
        if (v8854) {
            continue;
        }
        var index = line.indexOf('=');
        const v8855 = -1;
        const v8856 = index === v8855;
        if (v8856) {
            continue;
        }
        var key = line.substring(0, index);
        const v8857 = index + 1;
        const v8858 = line.substring(v8857);
        var val = v8858.replace(/\\n/g, '\n');
        const v8859 = val.length;
        var end = v8859 - 1;
        const v8860 = val[0];
        const v8861 = v8860 === '"';
        const v8862 = val[end];
        const v8863 = v8862 === '"';
        const v8864 = v8861 && v8863;
        const v8865 = val[0];
        const v8866 = v8865 === '\'';
        const v8867 = val[end];
        const v8868 = v8867 === '\'';
        const v8869 = v8866 && v8868;
        const v8870 = v8864 || v8869;
        if (v8870) {
            val = val.substring(1, end);
        } else {
            val = val.trim();
        }
        obj[key] = val;
        const v8847 = i++;
        v8846 = i < v8845;
    }
    return obj;
};
SP.parseENV = v8871;
const v8877 = function (def) {
    var str = this.trim();
    const v8872 = +str;
    var num = v8872;
    const v8873 = isNaN(num);
    const v8874 = def === undefined;
    let v8875;
    if (v8874) {
        v8875 = 0;
    } else {
        v8875 = def;
    }
    let v8876;
    if (v8873) {
        v8876 = v8875;
    } else {
        v8876 = num;
    }
    return v8876;
};
SP.parseInt = v8877;
const v8883 = function (def) {
    var num = this.match(regexpINTEGER);
    const v8878 = num[0];
    const v8879 = +v8878;
    const v8880 = def === undefined;
    let v8881;
    if (v8880) {
        v8881 = 0;
    } else {
        v8881 = def;
    }
    let v8882;
    if (num) {
        v8882 = v8879;
    } else {
        v8882 = v8881;
    }
    return v8882;
};
SP.parseInt2 = v8883;
const v8891 = function (def) {
    var num = this.match(regexpFLOAT);
    const v8884 = num[0];
    const v8885 = v8884.toString();
    const v8886 = v8885.replace(/,/g, '.');
    const v8887 = +v8886;
    const v8888 = def === undefined;
    let v8889;
    if (v8888) {
        v8889 = 0;
    } else {
        v8889 = def;
    }
    let v8890;
    if (num) {
        v8890 = v8887;
    } else {
        v8890 = v8889;
    }
    return v8890;
};
SP.parseFloat2 = v8891;
const v8897 = function () {
    var self = this.toLowerCase();
    const v8892 = self === 'true';
    const v8893 = self === '1';
    const v8894 = v8892 || v8893;
    const v8895 = self === 'on';
    const v8896 = v8894 || v8895;
    return v8896;
};
SP.parseBoolean = v8897;
SP.parseBool = SP.parseBoolean;
const v8906 = function (def) {
    var str = this.trim();
    const v8898 = str.indexOf(',');
    const v8899 = -1;
    const v8900 = v8898 !== v8899;
    if (v8900) {
        str = str.replace(',', '.');
    }
    const v8901 = +str;
    var num = v8901;
    const v8902 = isNaN(num);
    const v8903 = def === undefined;
    let v8904;
    if (v8903) {
        v8904 = 0;
    } else {
        v8904 = def;
    }
    let v8905;
    if (v8902) {
        v8905 = v8904;
    } else {
        v8905 = num;
    }
    return v8905;
};
SP.parseFloat = v8906;
const v8923 = function (first) {
    if (first) {
        const v8907 = this[0];
        const v8908 = v8907 || '';
        const v8909 = v8908.toUpperCase();
        const v8910 = this.substring(1);
        const v8911 = v8909 + v8910;
        return v8911;
    }
    var builder = '';
    var c;
    var i = 0;
    var length = this.length;
    let v8912 = i < length;
    while (v8912) {
        const v8914 = i - 1;
        var c = this[v8914];
        const v8915 = !c;
        const v8916 = c === ' ';
        const v8917 = c === '\t';
        const v8918 = v8916 || v8917;
        const v8919 = c === '\n';
        const v8920 = v8918 || v8919;
        const v8921 = v8915 || v8920;
        if (v8921) {
            const v8922 = this[i];
            c = v8922.toUpperCase();
        } else {
            c = this[i];
        }
        builder += c;
        const v8913 = i++;
        v8912 = i < length;
    }
    return builder;
};
SP.capitalize = v8923;
const v8935 = function () {
    var output = '';
    var i = 0;
    const v8924 = this.length;
    let v8925 = i < v8924;
    while (v8925) {
        const v8927 = this[i];
        var c = v8927.charCodeAt(0);
        const v8928 = c > 126;
        const v8929 = c < 32;
        const v8930 = v8928 || v8929;
        if (v8930) {
            const v8931 = c.toString(16);
            const v8932 = '000' + v8931;
            const v8933 = -4;
            const v8934 = v8932.substr(v8933);
            output += '\\u' + v8934;
        } else {
            output += this[i];
        }
        const v8926 = i++;
        v8925 = i < v8924;
    }
    return output;
};
SP.toUnicode = v8935;
const v8957 = function () {
    var output = '';
    var i = 0;
    const v8936 = this.length;
    let v8937 = i < v8936;
    while (v8937) {
        const v8939 = this[i];
        const v8940 = v8939 === '\\';
        const v8941 = i + 1;
        const v8942 = this[v8941];
        const v8943 = v8942 === 'u';
        const v8944 = v8940 && v8943;
        if (v8944) {
            const v8945 = i + 2;
            const v8946 = this[v8945];
            const v8947 = i + 3;
            const v8948 = this[v8947];
            const v8949 = v8946 + v8948;
            const v8950 = i + 4;
            const v8951 = this[v8950];
            const v8952 = v8949 + v8951;
            const v8953 = i + 5;
            const v8954 = this[v8953];
            const v8955 = v8952 + v8954;
            const v8956 = parseInt(v8955, 16);
            output += String.fromCharCode(v8956);
            i += 5;
        } else {
            output += this[i];
        }
        const v8938 = i++;
        v8937 = i < v8936;
    }
    return output;
};
SP.fromUnicode = v8957;
const v8962 = function (salt) {
    var hash = Crypto.createHash('sha1');
    const v8958 = salt || '';
    const v8959 = this + v8958;
    const v8960 = hash.update(v8959, ENCODING);
    v8960;
    const v8961 = hash.digest('hex');
    return v8961;
};
SP.sha1 = v8962;
const v8967 = function (salt) {
    var hash = Crypto.createHash('sha256');
    const v8963 = salt || '';
    const v8964 = this + v8963;
    const v8965 = hash.update(v8964, ENCODING);
    v8965;
    const v8966 = hash.digest('hex');
    return v8966;
};
SP.sha256 = v8967;
const v8972 = function (salt) {
    var hash = Crypto.createHash('sha512');
    const v8968 = salt || '';
    const v8969 = this + v8968;
    const v8970 = hash.update(v8969, ENCODING);
    v8970;
    const v8971 = hash.digest('hex');
    return v8971;
};
SP.sha512 = v8972;
const v8977 = function (salt) {
    var hash = Crypto.createHash('md5');
    const v8973 = salt || '';
    const v8974 = this + v8973;
    const v8975 = hash.update(v8974, ENCODING);
    v8975;
    const v8976 = hash.digest('hex');
    return v8976;
};
SP.md5 = v8977;
const v8987 = function () {
    const v8978 = this.replace(regexpSEARCH, '');
    const v8979 = v8978.trim();
    const v8980 = v8979.toLowerCase();
    var str = v8980.removeDiacritics();
    var buf = [];
    var prev = '';
    var i = 0;
    var length = str.length;
    let v8981 = i < length;
    while (v8981) {
        var c = str[i];
        const v8983 = c === 'y';
        if (v8983) {
            c = 'i';
        }
        const v8984 = c === prev;
        if (v8984) {
            continue;
        }
        prev = c;
        const v8985 = buf.push(c);
        v8985;
        const v8982 = i++;
        v8981 = i < length;
    }
    const v8986 = buf.join('');
    return v8986;
};
SP.toSearch = v8987;
const v8989 = function (forSearch, alternative, max_count, max_length, min_length) {
    const v8988 = exports.keywords(this, forSearch, alternative, max_count, max_length, min_length);
    return v8988;
};
SP.keywords = v8989;
SP.toKeywords = SP.keywords;
const checksum = function (val) {
    var sum = 0;
    var i = 0;
    const v8990 = val.length;
    let v8991 = i < v8990;
    while (v8991) {
        sum += val.charCodeAt(i);
        const v8992 = i++;
        v8991 = i < v8990;
    }
    return sum;
};
const v9021 = function (key, isUnique, secret) {
    var str = '0' + this;
    var data_count = str.length;
    var key_count = key.length;
    let random;
    const v8993 = exports.random(120);
    const v8994 = v8993 + 40;
    if (isUnique) {
        random = v8994;
    } else {
        random = 65;
    }
    const v8995 = random % key_count;
    var count = data_count + v8995;
    var values = [];
    var index = 0;
    const v8996 = String.fromCharCode(random);
    values[0] = v8996;
    const v8997 = this.length;
    const v8998 = key.length;
    var counter = v8997 + v8998;
    var i = count - 1;
    let v8999 = i > 0;
    while (v8999) {
        const v9001 = i % data_count;
        index = str.charCodeAt(v9001);
        const v9002 = i % key_count;
        const v9003 = key.charCodeAt(v9002);
        const v9004 = v9003 ^ random;
        const v9005 = index ^ v9004;
        const v9006 = String.fromCharCode(v9005);
        values[i] = v9006;
        const v9000 = i--;
        v8999 = i > 0;
    }
    const v9007 = counter + '=';
    const v9008 = values.join('');
    const v9009 = v9007 + v9008;
    const v9010 = Buffer.from(v9009, ENCODING);
    str = v9010.toString('hex');
    var sum = 0;
    var i = 0;
    const v9011 = str.length;
    let v9012 = i < v9011;
    while (v9012) {
        sum += str.charCodeAt(i);
        const v9013 = i++;
        v9012 = i < v9011;
    }
    const v9014 = CONF.secret;
    const v9015 = secret || v9014;
    const v9016 = v9015 + key;
    const v9017 = checksum(v9016);
    const v9018 = sum + v9017;
    const v9019 = v9018 + '-';
    const v9020 = v9019 + str;
    return v9020;
};
SP.encrypt = v9021;
const v9057 = function (key, secret) {
    var index = this.indexOf('-');
    const v9022 = -1;
    const v9023 = index === v9022;
    if (v9023) {
        return null;
    }
    const v9024 = this.substring(0, index);
    const v9025 = +v9024;
    var cs = v9025;
    const v9026 = !cs;
    const v9027 = isNaN(cs);
    const v9028 = v9026 || v9027;
    if (v9028) {
        return null;
    }
    const v9029 = index + 1;
    var hash = this.substring(v9029);
    const v9030 = CONF.secret;
    const v9031 = secret || v9030;
    const v9032 = v9031 + key;
    var sum = checksum(v9032);
    var i = 0;
    const v9033 = hash.length;
    let v9034 = i < v9033;
    while (v9034) {
        sum += hash.charCodeAt(i);
        const v9035 = i++;
        v9034 = i < v9033;
    }
    const v9036 = sum !== cs;
    if (v9036) {
        return null;
    }
    const v9037 = Buffer.from(hash, 'hex');
    var values = v9037.toString(ENCODING);
    var index = values.indexOf('=');
    const v9038 = -1;
    const v9039 = index === v9038;
    if (v9039) {
        return null;
    }
    const v9040 = values.substring(0, index);
    const v9041 = +v9040;
    var counter = v9041;
    const v9042 = isNaN(counter);
    if (v9042) {
        return null;
    }
    const v9043 = index + 1;
    values = values.substring(v9043);
    var count = values.length;
    var random = values.charCodeAt(0);
    var key_count = key.length;
    const v9044 = random % key_count;
    var data_count = count - v9044;
    var decrypt_data = [];
    var i = data_count - 1;
    let v9045 = i > 0;
    while (v9045) {
        const v9047 = values.charCodeAt(i);
        const v9048 = i % key_count;
        const v9049 = key.charCodeAt(v9048);
        const v9050 = random ^ v9049;
        index = v9047 ^ v9050;
        const v9051 = String.fromCharCode(index);
        decrypt_data[i] = v9051;
        const v9046 = i--;
        v9045 = i > 0;
    }
    var val = decrypt_data.join('');
    const v9052 = val.length;
    const v9053 = key.length;
    const v9054 = v9052 + v9053;
    const v9055 = counter !== v9054;
    let v9056;
    if (v9055) {
        v9056 = null;
    } else {
        v9056 = val;
    }
    return v9056;
};
SP.decrypt = v9057;
const v9076 = function (val, key) {
    const v9058 = typeof val;
    var num = v9058 === 'number';
    var sum = 0;
    const v9059 = !key;
    if (v9059) {
        key = CONF.secret;
    }
    val = val + '';
    var i = 0;
    const v9060 = val.length;
    let v9061 = i < v9060;
    while (v9061) {
        sum += val.charCodeAt(i);
        const v9062 = i++;
        v9061 = i < v9060;
    }
    var i = 0;
    const v9063 = key.length;
    let v9064 = i < v9063;
    while (v9064) {
        sum += key.charCodeAt(i);
        const v9065 = i++;
        v9064 = i < v9063;
    }
    let v9066;
    if (num) {
        v9066 = 'n';
    } else {
        v9066 = 'x';
    }
    const v9067 = CONF.secret_uid;
    const v9068 = v9067 + val;
    const v9069 = v9068 + sum;
    const v9070 = v9069 + key;
    const v9071 = v9070.crc32(true);
    const v9072 = v9071.toString(16);
    const v9073 = v9066 + v9072;
    const v9074 = v9073 + 'x';
    const v9075 = v9074 + val;
    return v9075;
};
exports.encryptUID = v9076;
const v9084 = function (val, key) {
    const v9077 = val[0];
    var num = v9077 === 'n';
    const v9078 = val.indexOf('x', 1);
    const v9079 = v9078 + 1;
    var raw = val.substring(v9079);
    if (num) {
        const v9080 = +raw;
        raw = v9080;
    }
    const v9081 = exports.encryptUID(raw, key);
    const v9082 = v9081 === val;
    let v9083;
    if (v9082) {
        v9083 = raw;
    } else {
        v9083 = null;
    }
    return v9083;
};
exports.decryptUID = v9084;
const v9092 = function (filename, callback) {
    var self = this;
    var index = self.indexOf(',');
    const v9085 = -1;
    const v9086 = index === v9085;
    if (v9086) {
        index = 0;
    } else {
        const v9087 = index++;
        v9087;
    }
    const v9088 = self.substring(index);
    const v9089 = exports.noop;
    const v9090 = callback || v9089;
    const v9091 = Fs.writeFile(filename, v9088, 'base64', v9090);
    v9091;
    return this;
};
SP.base64ToFile = v9092;
const v9098 = function () {
    var self = this;
    var index = self.indexOf(',');
    const v9093 = -1;
    const v9094 = index === v9093;
    if (v9094) {
        index = 0;
    } else {
        const v9095 = index++;
        v9095;
    }
    const v9096 = self.substring(index);
    const v9097 = Buffer.from(v9096, 'base64');
    return v9097;
};
SP.base64ToBuffer = v9098;
const v9103 = function () {
    var self = this;
    var index = self.indexOf(';');
    const v9099 = -1;
    const v9100 = index === v9099;
    const v9101 = self.substring(5, index);
    let v9102;
    if (v9100) {
        v9102 = '';
    } else {
        v9102 = v9101;
    }
    return v9102;
};
SP.base64ContentType = v9103;
const v9105 = function () {
    const v9104 = exports.removeDiacritics(this);
    return v9104;
};
SP.removeDiacritics = v9105;
const v9109 = function (max, c) {
    var plus = '';
    const v9106 = c === undefined;
    if (v9106) {
        c = ' ';
    }
    let v9107 = max--;
    while (v9107) {
        plus += c;
        v9107 = max--;
    }
    const v9108 = plus + this;
    return v9108;
};
SP.indent = v9109;
const v9119 = function (isDecimal) {
    var self = this;
    var length = self.length;
    const v9110 = !length;
    if (v9110) {
        return false;
    }
    isDecimal = isDecimal || false;
    var i = 0;
    let v9111 = i < length;
    while (v9111) {
        var ascii = self.charCodeAt(i);
        if (isDecimal) {
            const v9113 = ascii === 44;
            const v9114 = ascii === 46;
            const v9115 = v9113 || v9114;
            if (v9115) {
                isDecimal = false;
                continue;
            }
        }
        const v9116 = ascii < 48;
        const v9117 = ascii > 57;
        const v9118 = v9116 || v9117;
        if (v9118) {
            return false;
        }
        const v9112 = i++;
        v9111 = i < length;
    }
    return true;
};
SP.isNumber = v9119;
const v9120 = SP.padLeft;
const v9121 = !v9120;
if (v9121) {
    const v9126 = function (max, c) {
        var self = this;
        const v9122 = self.length;
        var len = max - v9122;
        const v9123 = len < 0;
        if (v9123) {
            return self;
        }
        const v9124 = c === undefined;
        if (v9124) {
            c = ' ';
        }
        let v9125 = len--;
        while (v9125) {
            self = c + self;
            v9125 = len--;
        }
        return self;
    };
    SP.padLeft = v9126;
}
const v9127 = SP.padRight;
const v9128 = !v9127;
if (v9128) {
    const v9133 = function (max, c) {
        var self = this;
        const v9129 = self.length;
        var len = max - v9129;
        const v9130 = len < 0;
        if (v9130) {
            return self;
        }
        const v9131 = c === undefined;
        if (v9131) {
            c = ' ';
        }
        let v9132 = len--;
        while (v9132) {
            self += c;
            v9132 = len--;
        }
        return self;
    };
    SP.padRight = v9133;
}
const v9137 = function (index, value) {
    var str = this;
    var a = str.substring(0, index);
    const v9134 = value.toString();
    const v9135 = str.substring(index);
    var b = v9134 + v9135;
    const v9136 = a + b;
    return v9136;
};
SP.insert = v9137;
const v9180 = function (max) {
    max = max || 60;
    const v9138 = this.trim();
    const v9139 = v9138.toLowerCase();
    var self = v9139.removeDiacritics();
    var builder = '';
    var length = self.length;
    var i = 0;
    let v9140 = i < length;
    while (v9140) {
        var c = self[i];
        var code = self.charCodeAt(i);
        const v9142 = code > 540;
        if (v9142) {
            builder = '';
            break;
        }
        const v9143 = builder.length;
        const v9144 = v9143 >= max;
        if (v9144) {
            break;
        }
        const v9145 = code > 31;
        const v9146 = code < 48;
        const v9147 = v9145 && v9146;
        if (v9147) {
            const v9148 = builder.length;
            const v9149 = v9148 - 1;
            const v9150 = builder[v9149];
            const v9151 = v9150 !== '-';
            if (v9151) {
                builder += '-';
            }
            continue;
        }
        const v9152 = code > 47;
        const v9153 = code < 58;
        const v9154 = v9152 && v9153;
        const v9155 = code > 94;
        const v9156 = code < 123;
        const v9157 = v9155 && v9156;
        const v9158 = v9154 || v9157;
        if (v9158) {
            builder += c;
        }
        const v9141 = i++;
        v9140 = i < length;
    }
    const v9159 = builder.length;
    const v9160 = v9159 > 1;
    if (v9160) {
        const v9161 = builder.length;
        length = v9161 - 1;
        const v9162 = builder[length];
        const v9163 = v9162 === '-';
        const v9164 = builder.substring(0, length);
        let v9165;
        if (v9163) {
            v9165 = v9164;
        } else {
            v9165 = builder;
        }
        return v9165;
    } else {
        const v9166 = !length;
        if (v9166) {
            return '';
        }
    }
    length = self.length;
    self = self.replace(/\s/g, '');
    const v9167 = self.crc32(true);
    const v9168 = v9167.toString(36);
    builder = v9168 + '';
    const v9169 = self[0];
    const v9170 = v9169.charCodeAt(0);
    const v9171 = v9170.toString(32);
    const v9172 = v9171 + builder;
    const v9173 = self.length;
    const v9174 = v9173 - 1;
    const v9175 = self[v9174];
    const v9176 = v9175.charCodeAt(0);
    const v9177 = v9176.toString(32);
    const v9178 = v9172 + v9177;
    const v9179 = v9178 + length;
    return v9179;
};
SP.linker = v9180;
SP.toLinker = SP.linker;
SP.toSlug = SP.toLinker;
SP.slug = SP.toSlug;
const v9183 = function (zero, one, few, other) {
    const v9181 = this.parseInt();
    const v9182 = v9181.pluralize(zero, one, few, other);
    return v9182;
};
SP.pluralize = v9183;
const v9188 = function () {
    var self = this.toLowerCase();
    const v9184 = self === 'true';
    const v9185 = self === 'false';
    const v9186 = v9184 || v9185;
    let v9187;
    if (v9186) {
        v9187 = true;
    } else {
        v9187 = false;
    }
    return v9187;
};
SP.isBoolean = v9188;
const v9190 = function () {
    const v9189 = regexpALPHA.test(this);
    return v9189;
};
SP.isAlphaNumeric = v9190;
const v9203 = function () {
    const v9191 = this.toLowerCase();
    var arr = v9191.split('');
    var first = arr.shift();
    var builder = first.toUpperCase();
    var i = 0;
    var length = arr.length;
    let v9192 = i < length;
    while (v9192) {
        const v9194 = arr[i];
        var v = SOUNDEX[v9194];
        const v9195 = v === undefined;
        if (v9195) {
            continue;
        }
        if (i) {
            const v9196 = i - 1;
            const v9197 = arr[v9196];
            const v9198 = v !== v9197;
            if (v9198) {
                builder += v;
            }
        } else {
            const v9199 = SOUNDEX[first];
            const v9200 = v !== v9199;
            if (v9200) {
                builder += v;
            }
        }
        const v9193 = i++;
        v9192 = i < length;
    }
    const v9201 = builder + '000';
    const v9202 = v9201.substring(0, 4);
    return v9202;
};
SP.soundex = v9203;
const v9205 = function () {
    const v9204 = this.replace(regexpTags, '');
    return v9204;
};
SP.removeTags = v9205;
const v9211 = function (decimals) {
    const v9206 = Math.pow(10, decimals);
    const v9207 = this * v9206;
    const v9208 = Math.floor(v9207);
    const v9209 = Math.pow(10, decimals);
    const v9210 = v9208 / v9209;
    return v9210;
};
NP.floor = v9211;
const v9214 = function (decimals) {
    const v9212 = this.toFixed(decimals);
    const v9213 = +v9212;
    return v9213;
};
NP.fixed = v9214;
const v9218 = function (max, c) {
    const v9215 = this.toString();
    const v9216 = c || '0';
    const v9217 = v9215.padLeft(max, v9216);
    return v9217;
};
NP.padLeft = v9218;
const v9222 = function (max, c) {
    const v9219 = this.toString();
    const v9220 = c || '0';
    const v9221 = v9219.padRight(max, v9220);
    return v9221;
};
NP.padRight = v9222;
const v9227 = function (precision) {
    const v9223 = Math.pow(10, precision);
    var m = v9223 || 1;
    const v9224 = this * m;
    const v9225 = Math.round(v9224);
    const v9226 = v9225 / m;
    return v9226;
};
NP.round = v9227;
const v9232 = function (currency, a, b, c) {
    const v9228 = DEF.currencies;
    var curr = v9228[currency];
    const v9229 = curr(this, a, b, c);
    const v9230 = this.format(2);
    let v9231;
    if (curr) {
        v9231 = v9229;
    } else {
        v9231 = v9230;
    }
    return v9231;
};
NP.currency = v9232;
const v9241 = function (fn, callback) {
    var number = this;
    if (number) {
        const v9233 = number--;
        const v9237 = () => {
            const v9235 = () => {
                const v9234 = number.async(fn, callback);
                return v9234;
            };
            const v9236 = setImmediate(v9235);
            return v9236;
        };
        const v9238 = fn(v9233, v9237);
        v9238;
    } else {
        const v9239 = callback();
        const v9240 = callback && v9239;
        v9240;
    }
    return number;
};
NP.async = v9241;
const v9278 = function (decimals, separator, separatorDecimal) {
    var self = this;
    const v9242 = typeof decimals;
    const v9243 = v9242 === 'string';
    if (v9243) {
        const v9244 = self.format2(decimals);
        return v9244;
    }
    var num = self.toString();
    var dec = '';
    var output = '';
    let minus;
    const v9245 = num[0];
    const v9246 = v9245 === '-';
    if (v9246) {
        minus = '-';
    } else {
        minus = '';
    }
    if (minus) {
        num = num.substring(1);
    }
    var index = num.indexOf('.');
    const v9247 = typeof decimals;
    const v9248 = v9247 === 'string';
    if (v9248) {
        var tmp = separator;
        separator = decimals;
        decimals = tmp;
    }
    const v9249 = separator === undefined;
    if (v9249) {
        separator = ' ';
    }
    const v9250 = -1;
    const v9251 = index !== v9250;
    if (v9251) {
        const v9252 = index + 1;
        dec = num.substring(v9252);
        num = num.substring(0, index);
    }
    const v9253 = -1;
    index = v9253;
    const v9254 = num.length;
    var i = v9254 - 1;
    let v9255 = i >= 0;
    while (v9255) {
        const v9257 = index++;
        v9257;
        const v9258 = index > 0;
        const v9259 = index % 3;
        const v9260 = v9259 === 0;
        const v9261 = v9258 && v9260;
        if (v9261) {
            output = separator + output;
        }
        const v9262 = num[i];
        output = v9262 + output;
        const v9256 = i--;
        v9255 = i >= 0;
    }
    const v9263 = dec.length;
    const v9264 = decimals || v9263;
    if (v9264) {
        const v9265 = dec.length;
        const v9266 = v9265 > decimals;
        if (v9266) {
            const v9267 = decimals || 0;
            dec = dec.substring(0, v9267);
        } else {
            const v9268 = decimals || 0;
            dec = dec.padRight(v9268, '0');
        }
    }
    const v9269 = dec.length;
    const v9270 = separatorDecimal === undefined;
    const v9271 = v9269 && v9270;
    if (v9271) {
        const v9272 = separator === '.';
        if (v9272) {
            separatorDecimal = ',';
        } else {
            separatorDecimal = '.';
        }
    }
    const v9273 = minus + output;
    const v9274 = dec.length;
    const v9275 = separatorDecimal + dec;
    let v9276;
    if (v9274) {
        v9276 = v9275;
    } else {
        v9276 = '';
    }
    const v9277 = v9273 + v9276;
    return v9277;
};
NP.format = v9278;
const v9308 = function (value, decimals) {
    const v9279 = value == null;
    if (v9279) {
        return this;
    }
    const v9280 = typeof value;
    const v9281 = v9280 === 'number';
    if (v9281) {
        const v9282 = this + value;
        return v9282;
    }
    var first = value.charCodeAt(0);
    var is = false;
    const v9283 = first < 48;
    const v9284 = first > 57;
    const v9285 = v9283 || v9284;
    if (v9285) {
        is = true;
        value = value.substring(1);
    }
    var length = value.length;
    var num;
    const v9286 = length - 1;
    const v9287 = value[v9286];
    const v9288 = v9287 === '%';
    if (v9288) {
        const v9289 = length - 1;
        value = value.substring(0, v9289);
        if (is) {
            var val = value.parseFloat();
            switch (first) {
            case 42:
                const v9290 = this / 100;
                const v9291 = v9290 * val;
                num = this * v9291;
                break;
            case 43:
                const v9292 = this / 100;
                const v9293 = v9292 * val;
                num = this + v9293;
                break;
            case 45:
                const v9294 = this / 100;
                const v9295 = v9294 * val;
                num = this - v9295;
                break;
            case 47:
                const v9296 = this / 100;
                const v9297 = v9296 * val;
                num = this / v9297;
                break;
            }
            const v9298 = decimals !== undefined;
            const v9299 = num.floor(decimals);
            let v9300;
            if (v9298) {
                v9300 = v9299;
            } else {
                v9300 = num;
            }
            return v9300;
        } else {
            const v9301 = this / 100;
            const v9302 = value.parseFloat();
            num = v9301 * v9302;
            const v9303 = decimals !== undefined;
            const v9304 = num.floor(decimals);
            let v9305;
            if (v9303) {
                v9305 = v9304;
            } else {
                v9305 = num;
            }
            return v9305;
        }
    } else {
        num = value.parseFloat();
    }
    switch (first) {
    case 42:
        num = this * num;
        break;
    case 43:
        num = this + num;
        break;
    case 45:
        num = this - num;
        break;
    case 47:
        num = this / num;
        break;
    default:
        num = this;
        break;
    }
    const v9306 = decimals !== undefined;
    if (v9306) {
        const v9307 = num.floor(decimals);
        return v9307;
    }
    return num;
};
NP.add = v9308;
const v9352 = function (format) {
    var index = 0;
    var num = this.toString();
    var beg = 0;
    var end = 0;
    var max = 0;
    var output = '';
    var length = 0;
    const v9309 = typeof format;
    const v9310 = v9309 === 'string';
    if (v9310) {
        var d = false;
        length = format.length;
        var i = 0;
        let v9311 = i < length;
        while (v9311) {
            var c = format[i];
            const v9313 = c === '#';
            if (v9313) {
                if (d) {
                    const v9314 = end++;
                    v9314;
                } else {
                    const v9315 = beg++;
                    v9315;
                }
            }
            const v9316 = c === '.';
            if (v9316) {
                d = true;
            }
            const v9312 = i++;
            v9311 = i < length;
        }
        var strBeg = num;
        var strEnd = '';
        index = num.indexOf('.');
        const v9317 = -1;
        const v9318 = index !== v9317;
        if (v9318) {
            strBeg = num.substring(0, index);
            const v9319 = index + 1;
            strEnd = num.substring(v9319);
        }
        const v9320 = strBeg.length;
        const v9321 = v9320 > beg;
        if (v9321) {
            const v9322 = strBeg.length;
            max = v9322 - beg;
            var tmp = '';
            var i = 0;
            let v9323 = i < max;
            while (v9323) {
                tmp += '#';
                const v9324 = i++;
                v9323 = i < max;
            }
            format = tmp + format;
        }
        const v9325 = strBeg.length;
        const v9326 = v9325 < beg;
        if (v9326) {
            strBeg = strBeg.padLeft(beg, ' ');
        }
        const v9327 = strEnd.length;
        const v9328 = v9327 < end;
        if (v9328) {
            strEnd = strEnd.padRight(end, '0');
        }
        const v9329 = strEnd.length;
        const v9330 = v9329 > end;
        if (v9330) {
            strEnd = strEnd.substring(0, end);
        }
        d = false;
        index = 0;
        var skip = true;
        length = format.length;
        var i = 0;
        let v9331 = i < length;
        while (v9331) {
            var c = format[i];
            const v9333 = c !== '#';
            if (v9333) {
                if (skip) {
                    continue;
                }
                const v9334 = c === '.';
                if (v9334) {
                    d = true;
                    index = 0;
                }
                output += c;
                continue;
            }
            let value;
            const v9335 = strEnd[index];
            const v9336 = strBeg[index];
            if (d) {
                value = v9335;
            } else {
                value = v9336;
            }
            if (skip) {
                const v9337 = [
                    ',',
                    ' '
                ];
                const v9338 = v9337.indexOf(value);
                const v9339 = -1;
                skip = v9338 !== v9339;
            }
            const v9340 = !skip;
            if (v9340) {
                output += value;
            }
            const v9341 = index++;
            v9341;
            const v9332 = i++;
            v9331 = i < length;
        }
        return output;
    }
    output = '### ### ###';
    beg = num.indexOf('.');
    max = format || 0;
    const v9342 = max === 0;
    const v9343 = -1;
    const v9344 = beg !== v9343;
    const v9345 = v9342 && v9344;
    if (v9345) {
        const v9346 = num.length;
        const v9347 = beg + 1;
        max = v9346 - v9347;
    }
    const v9348 = max > 0;
    if (v9348) {
        output += '.';
        var i = 0;
        let v9349 = i < max;
        while (v9349) {
            output += '#';
            const v9350 = i++;
            v9349 = i < max;
        }
    }
    const v9351 = this.format(output);
    return v9351;
};
NP.format2 = v9352;
const v9364 = function (zero, one, few, other) {
    var num = this;
    var value = '';
    const v9353 = num == 0;
    if (v9353) {
        value = zero || '';
    } else {
        const v9354 = num == 1;
        if (v9354) {
            value = one || '';
        } else {
            const v9355 = num > 1;
            const v9356 = num < 5;
            const v9357 = v9355 && v9356;
            if (v9357) {
                value = few || '';
            } else {
                value = other;
            }
        }
    }
    var beg = value.indexOf('#');
    const v9358 = -1;
    const v9359 = beg === v9358;
    if (v9359) {
        return value;
    }
    var end = value.lastIndexOf('#');
    const v9360 = end + 1;
    var format = value.substring(beg, v9360);
    const v9361 = num.format(format);
    const v9362 = value.replace(format, '');
    const v9363 = v9361 + v9362;
    return v9363;
};
NP.pluralize = v9364;
const v9368 = function (length) {
    const v9365 = this.toString(16);
    var str = v9365.toUpperCase();
    const v9366 = str.length;
    let v9367 = v9366 < length;
    while (v9367) {
        str = '0' + str;
        v9367 = v9366 < length;
    }
    return str;
};
NP.hex = v9368;
const v9386 = function (percentage, decimals, includedVAT) {
    var num = this;
    const v9369 = typeof decimals;
    var type = v9369;
    const v9370 = type === 'boolean';
    if (v9370) {
        var tmp = includedVAT;
        includedVAT = decimals;
        decimals = tmp;
        const v9371 = typeof decimals;
        type = v9371;
    }
    const v9372 = type === 'undefined';
    if (v9372) {
        decimals = 2;
    }
    const v9373 = includedVAT === undefined;
    if (v9373) {
        includedVAT = true;
    }
    const v9374 = !percentage;
    const v9375 = !num;
    const v9376 = v9374 || v9375;
    if (v9376) {
        return num;
    }
    const v9377 = percentage / 100;
    const v9378 = v9377 + 1;
    const v9379 = num / v9378;
    const v9380 = v9379.round(decimals);
    const v9381 = percentage / 100;
    const v9382 = v9381 + 1;
    const v9383 = num * v9382;
    const v9384 = v9383.round(decimals);
    let v9385;
    if (includedVAT) {
        v9385 = v9380;
    } else {
        v9385 = v9384;
    }
    return v9385;
};
NP.VAT = v9386;
const v9392 = function (percentage, decimals) {
    var num = this;
    const v9387 = decimals === undefined;
    if (v9387) {
        decimals = 2;
    }
    const v9388 = num / 100;
    const v9389 = v9388 * percentage;
    const v9390 = num - v9389;
    const v9391 = v9390.floor(decimals);
    return v9391;
};
NP.discount = v9392;
const v9396 = function (plus) {
    const v9393 = plus || 0;
    const v9394 = this + v9393;
    const v9395 = new Date(v9394);
    return v9395;
};
NP.parseDate = v9396;
const v9397 = NP.toRad;
const v9398 = !v9397;
if (v9398) {
    const v9402 = function () {
        const v9399 = Math.PI;
        const v9400 = this * v9399;
        const v9401 = v9400 / 180;
        return v9401;
    };
    NP.toRad = v9402;
}
const v9415 = function (decimals, type) {
    const v9403 = typeof decimals;
    const v9404 = v9403 === 'string';
    if (v9404) {
        var tmp = type;
        type = decimals;
        decimals = tmp;
    }
    var value;
    switch (type) {
    case 'bytes':
        value = this;
        break;
    case 'KB':
        value = this / 1024;
        break;
    case 'MB':
        value = filesizehelper(this, 2);
        break;
    case 'GB':
        value = filesizehelper(this, 3);
        break;
    case 'TB':
        value = filesizehelper(this, 4);
        break;
    default:
        type = 'bytes';
        value = this;
        const v9405 = value > 1023;
        if (v9405) {
            value = value / 1024;
            type = 'KB';
        }
        const v9406 = value > 1023;
        if (v9406) {
            value = value / 1024;
            type = 'MB';
        }
        const v9407 = value > 1023;
        if (v9407) {
            value = value / 1024;
            type = 'GB';
        }
        const v9408 = value > 1023;
        if (v9408) {
            value = value / 1024;
            type = 'TB';
        }
        break;
    }
    type = ' ' + type;
    const v9409 = decimals === undefined;
    const v9410 = value.format(2);
    const v9411 = v9410.replace('.00', '');
    const v9412 = value.format(decimals);
    let v9413;
    if (v9409) {
        v9413 = v9411;
    } else {
        v9413 = v9412;
    }
    const v9414 = v9413 + type;
    return v9414;
};
NP.filesize = v9415;
const filesizehelper = function (number, count) {
    let v9416 = count--;
    while (v9416) {
        number = number / 1024;
        const v9417 = number.toFixed(3);
        const v9418 = v9417 === '0.000';
        if (v9418) {
            return 0;
        }
        v9416 = count--;
    }
    return number;
};
var AP = Array.prototype;
const v9425 = function (count) {
    var arr = [];
    var self = this;
    var length = self.length;
    var i = 0;
    let v9419 = i < length;
    while (v9419) {
        const v9421 = self[i];
        const v9422 = arr.push(v9421);
        v9422;
        const v9423 = arr.length;
        const v9424 = v9423 >= count;
        if (v9424) {
            return arr;
        }
        const v9420 = i++;
        v9419 = i < length;
    }
    return arr;
};
AP.take = v9425;
const v9433 = function (obj, rewrite) {
    const v9426 = typeof obj;
    var isFn = v9426 === 'function';
    var i = 0;
    var length = this.length;
    let v9427 = i < length;
    while (v9427) {
        if (isFn) {
            const v9429 = this[i];
            const v9430 = obj(v9429, i);
            this[i] = v9430;
        } else {
            const v9431 = this[i];
            const v9432 = exports.extend(v9431, obj, rewrite);
            this[i] = v9432;
        }
        const v9428 = i++;
        v9427 = i < length;
    }
    return this;
};
AP.extend = v9433;
const v9436 = function (def) {
    var item = this[0];
    const v9434 = item === undefined;
    let v9435;
    if (v9434) {
        v9435 = def;
    } else {
        v9435 = item;
    }
    return v9435;
};
AP.first = v9436;
const v9440 = function (name) {
    var self = this;
    var obj = {};
    var i = 0;
    var length = self.length;
    let v9437 = i < length;
    while (v9437) {
        var item = self[i];
        if (name) {
            const v9439 = item[name];
            obj[v9439] = item;
        } else {
            obj[item] = true;
        }
        const v9438 = i++;
        v9437 = i < length;
    }
    return obj;
};
AP.toObject = v9440;
const v9461 = function (id, b, executor) {
    var a = this;
    var ak = {};
    var bk = {};
    var al = a.length;
    var bl = b.length;
    var tl = Math.max(al, bl);
    var processed = {};
    var i = 0;
    let v9441 = i < tl;
    while (v9441) {
        var av = a[i];
        if (av) {
            const v9443 = av[id];
            ak[v9443] = i;
        }
        var bv = b[i];
        if (bv) {
            const v9444 = bv[id];
            bk[v9444] = i;
        }
        const v9442 = i++;
        v9441 = i < tl;
    }
    const v9445 = -1;
    var index = v9445;
    var i = 0;
    let v9446 = i < tl;
    while (v9446) {
        var av = a[i];
        var bv = b[i];
        var akk;
        var bkk;
        if (av) {
            akk = av[id];
            const v9448 = processed[akk];
            if (v9448) {
                continue;
            }
            processed[akk] = true;
            index = bk[akk];
            const v9449 = index === undefined;
            if (v9449) {
                const v9450 = -1;
                const v9451 = executor(av, undefined, i, v9450);
                v9451;
            } else {
                const v9452 = b[index];
                const v9453 = executor(av, v9452, i, index);
                v9453;
            }
        }
        if (bv) {
            bkk = bv[id];
            const v9454 = processed[bkk];
            if (v9454) {
                continue;
            }
            processed[bkk] = true;
            index = ak[bkk];
            const v9455 = index === undefined;
            if (v9455) {
                const v9456 = -1;
                const v9457 = executor(undefined, bv, v9456, i);
                v9457;
            } else {
                const v9458 = a[index];
                const v9459 = executor(v9458, bv, index, i);
                v9459;
            }
        }
        const v9447 = i++;
        v9446 = i < tl;
    }
    const v9460 = OBSOLETE('Array.compare()', 'Use U.diff() insteadof Array.compare()');
    v9460;
};
AP.compare = v9461;
const v9479 = function (property, arr, fn, remove) {
    const v9462 = property instanceof Array;
    if (v9462) {
        var tmp = property;
        property = arr;
        arr = tmp;
    }
    const v9463 = !arr;
    if (v9463) {
        arr = new Array(0);
    }
    var length = arr.length;
    var index = 0;
    while (true) {
        const v9464 = index++;
        var item = this[v9464];
        const v9465 = !item;
        if (v9465) {
            break;
        }
        var is = false;
        var i = 0;
        let v9466 = i < length;
        while (v9466) {
            const v9468 = item[property];
            const v9469 = arr[i];
            const v9470 = v9469[property];
            const v9471 = v9468 !== v9470;
            if (v9471) {
                continue;
            }
            const v9472 = arr[i];
            const v9473 = fn(item, v9472);
            v9473;
            is = true;
            break;
            const v9467 = i++;
            v9466 = i < length;
        }
        const v9474 = !remove;
        const v9475 = is || v9474;
        if (v9475) {
            continue;
        }
        const v9476 = index--;
        v9476;
        const v9477 = this.splice(index, 1);
        v9477;
    }
    const v9478 = OBSOLETE('Array.pair()', 'The method will be removed in Total.js v4');
    v9478;
    return this;
};
AP.pair = v9479;
const v9484 = function (def) {
    const v9480 = this.length;
    const v9481 = v9480 - 1;
    var item = this[v9481];
    const v9482 = item === undefined;
    let v9483;
    if (v9482) {
        v9483 = def;
    } else {
        v9483 = item;
    }
    return v9483;
};
AP.last = v9484;
const v9546 = function (name, asc) {
    var length = this.length;
    const v9485 = !length;
    const v9486 = length === 1;
    const v9487 = v9485 || v9486;
    if (v9487) {
        return this;
    }
    const v9488 = typeof name;
    const v9489 = v9488 === 'boolean';
    if (v9489) {
        asc = name;
        name = undefined;
    } else {
        const v9490 = asc === undefined;
        if (v9490) {
            asc = true;
        } else {
            switch (asc) {
            case 'asc':
            case 'ASC':
                asc = true;
                break;
            case 'desc':
            case 'DESC':
                asc = false;
                break;
            }
        }
    }
    var self = this;
    var type = 0;
    let field;
    const v9491 = self[0];
    const v9492 = v9491[name];
    const v9493 = self[0];
    if (name) {
        field = v9492;
    } else {
        field = v9493;
    }
    const v9494 = typeof field;
    switch (v9494) {
    case 'string':
        const v9495 = field.isJSONDate();
        if (v9495) {
            type = 4;
        } else {
            type = 1;
        }
        break;
    case 'number':
        type = 2;
        break;
    case 'boolean':
        type = 3;
        break;
    default:
        const v9496 = exports.isDate(field);
        const v9497 = !v9496;
        if (v9497) {
            return self;
        }
        type = 4;
        break;
    }
    const v9544 = function (a, b) {
        let va;
        const v9498 = a[name];
        if (name) {
            va = v9498;
        } else {
            va = a;
        }
        let vb;
        const v9499 = b[name];
        if (name) {
            vb = v9499;
        } else {
            vb = b;
        }
        const v9500 = type === 1;
        if (v9500) {
            const v9501 = va && vb;
            const v9502 = COMPARER(va, vb);
            const v9503 = COMPARER(vb, va);
            let v9504;
            if (asc) {
                v9504 = v9502;
            } else {
                v9504 = v9503;
            }
            let v9505;
            if (v9501) {
                v9505 = v9504;
            } else {
                v9505 = 0;
            }
            return v9505;
        } else {
            const v9506 = type === 2;
            if (v9506) {
                const v9507 = va > vb;
                const v9508 = -1;
                let v9509;
                if (asc) {
                    v9509 = 1;
                } else {
                    v9509 = v9508;
                }
                const v9510 = va < vb;
                const v9511 = -1;
                let v9512;
                if (asc) {
                    v9512 = v9511;
                } else {
                    v9512 = 1;
                }
                let v9513;
                if (v9510) {
                    v9513 = v9512;
                } else {
                    v9513 = 0;
                }
                let v9514;
                if (v9507) {
                    v9514 = v9509;
                } else {
                    v9514 = v9513;
                }
                return v9514;
            } else {
                const v9515 = type === 3;
                if (v9515) {
                    const v9516 = va === true;
                    const v9517 = vb === false;
                    const v9518 = v9516 && v9517;
                    const v9519 = -1;
                    let v9520;
                    if (asc) {
                        v9520 = 1;
                    } else {
                        v9520 = v9519;
                    }
                    const v9521 = va === false;
                    const v9522 = vb === true;
                    const v9523 = v9521 && v9522;
                    const v9524 = -1;
                    let v9525;
                    if (asc) {
                        v9525 = v9524;
                    } else {
                        v9525 = 1;
                    }
                    let v9526;
                    if (v9523) {
                        v9526 = v9525;
                    } else {
                        v9526 = 0;
                    }
                    let v9527;
                    if (v9518) {
                        v9527 = v9520;
                    } else {
                        v9527 = v9526;
                    }
                    return v9527;
                } else {
                    const v9528 = type === 4;
                    if (v9528) {
                        const v9529 = !va;
                        const v9530 = !vb;
                        const v9531 = v9529 || v9530;
                        if (v9531) {
                            return 0;
                        }
                        const v9532 = va.getTime;
                        const v9533 = !v9532;
                        if (v9533) {
                            va = new Date(va);
                        }
                        const v9534 = vb.getTime;
                        const v9535 = !v9534;
                        if (v9535) {
                            vb = new Date(vb);
                        }
                        var at = va.getTime();
                        var bt = vb.getTime();
                        const v9536 = at > bt;
                        const v9537 = -1;
                        let v9538;
                        if (asc) {
                            v9538 = 1;
                        } else {
                            v9538 = v9537;
                        }
                        const v9539 = at < bt;
                        const v9540 = -1;
                        let v9541;
                        if (asc) {
                            v9541 = v9540;
                        } else {
                            v9541 = 1;
                        }
                        let v9542;
                        if (v9539) {
                            v9542 = v9541;
                        } else {
                            v9542 = 0;
                        }
                        let v9543;
                        if (v9536) {
                            v9543 = v9538;
                        } else {
                            v9543 = v9542;
                        }
                        return v9543;
                    }
                }
            }
        }
        return 0;
    };
    const v9545 = shellsort(self, v9544);
    v9545;
    return self;
};
AP.orderBy = v9546;
AP.quicksort = AP.orderBy;
const v9558 = function () {
    var self = this;
    var output = [];
    var i = 0;
    var length = self.length;
    let v9547 = i < length;
    while (v9547) {
        const v9549 = self[i];
        const v9550 = typeof v9549;
        const v9551 = v9550 === 'string';
        if (v9551) {
            const v9552 = self[i];
            const v9553 = v9552.trim();
            self[i] = v9553;
        }
        const v9554 = self[i];
        const v9555 = self[i];
        const v9556 = output.push(v9555);
        const v9557 = v9554 && v9556;
        v9557;
        const v9548 = i++;
        v9547 = i < length;
    }
    return output;
};
AP.trim = v9558;
const v9565 = function (count) {
    var arr = [];
    var self = this;
    var length = self.length;
    var i = 0;
    let v9559 = i < length;
    while (v9559) {
        const v9561 = i >= count;
        const v9562 = self[i];
        const v9563 = arr.push(v9562);
        const v9564 = v9561 && v9563;
        v9564;
        const v9560 = i++;
        v9559 = i < length;
    }
    return arr;
};
AP.skip = v9565;
const v9587 = function (cb, value) {
    var self = this;
    var selected = [];
    const v9566 = typeof cb;
    var isFN = v9566 === 'function';
    var isV = value !== undefined;
    var i = 0;
    var length = self.length;
    let v9567 = i < length;
    while (v9567) {
        if (isFN) {
            const v9569 = self[i];
            const v9570 = cb.call(self, v9569, i);
            const v9571 = self[i];
            const v9572 = selected.push(v9571);
            const v9573 = v9570 && v9572;
            v9573;
            continue;
        }
        if (isV) {
            const v9574 = self[i];
            const v9575 = self[i];
            const v9576 = v9575[cb];
            const v9577 = v9576 === value;
            const v9578 = v9574 && v9577;
            const v9579 = self[i];
            const v9580 = selected.push(v9579);
            const v9581 = v9578 && v9580;
            v9581;
            continue;
        }
        const v9582 = self[i];
        const v9583 = v9582 === cb;
        const v9584 = self[i];
        const v9585 = selected.push(v9584);
        const v9586 = v9583 && v9585;
        v9586;
        const v9568 = i++;
        v9567 = i < length;
    }
    return selected;
};
AP.findAll = v9587;
AP.where = AP.findAll;
const v9591 = function (cb, value) {
    var self = this;
    var index = self.findIndex(cb, value);
    const v9588 = -1;
    const v9589 = index === v9588;
    if (v9589) {
        return null;
    }
    const v9590 = self[index];
    return v9590;
};
AP.findItem = v9591;
var arrfindobsolete;
const v9597 = function (cb, value) {
    const v9592 = !arrfindobsolete;
    if (v9592) {
        arrfindobsolete = true;
        const v9593 = OBSOLETE('Array.prototype.find()', 'will be removed in v4, use alternative "Array.prototype.findItem()"');
        v9593;
    }
    var self = this;
    var index = self.findIndex(cb, value);
    const v9594 = -1;
    const v9595 = index === v9594;
    if (v9595) {
        return null;
    }
    const v9596 = self[index];
    return v9596;
};
AP.find = v9597;
const v9611 = function (cb, value) {
    var self = this;
    const v9598 = typeof cb;
    var isFN = v9598 === 'function';
    var isV = value !== undefined;
    var i = 0;
    var length = self.length;
    let v9599 = i < length;
    while (v9599) {
        if (isFN) {
            const v9601 = self[i];
            const v9602 = cb.call(self, v9601, i);
            if (v9602) {
                return i;
            }
            continue;
        }
        if (isV) {
            const v9603 = self[i];
            const v9604 = self[i];
            const v9605 = v9604[cb];
            const v9606 = v9605 === value;
            const v9607 = v9603 && v9606;
            if (v9607) {
                return i;
            }
            continue;
        }
        const v9608 = self[i];
        const v9609 = v9608 === cb;
        if (v9609) {
            return i;
        }
        const v9600 = i++;
        v9599 = i < length;
    }
    const v9610 = -1;
    return v9610;
};
AP.findIndex = v9611;
const v9634 = function (cb, value) {
    var self = this;
    var arr = [];
    const v9612 = typeof cb;
    var isFN = v9612 === 'function';
    var isV = value !== undefined;
    var i = 0;
    var length = self.length;
    let v9613 = i < length;
    while (v9613) {
        if (isFN) {
            const v9615 = self[i];
            const v9616 = cb.call(self, v9615, i);
            const v9617 = !v9616;
            const v9618 = self[i];
            const v9619 = arr.push(v9618);
            const v9620 = v9617 && v9619;
            v9620;
            continue;
        }
        if (isV) {
            const v9621 = self[i];
            const v9622 = self[i];
            const v9623 = v9622[cb];
            const v9624 = v9623 !== value;
            const v9625 = v9621 && v9624;
            const v9626 = self[i];
            const v9627 = arr.push(v9626);
            const v9628 = v9625 && v9627;
            v9628;
            continue;
        }
        const v9629 = self[i];
        const v9630 = v9629 !== cb;
        const v9631 = self[i];
        const v9632 = arr.push(v9631);
        const v9633 = v9630 && v9632;
        v9633;
        const v9614 = i++;
        v9613 = i < length;
    }
    return arr;
};
AP.remove = v9634;
const v9662 = function (onItem, callback, thread, tmp) {
    var self = this;
    var init = false;
    const v9635 = !tmp;
    if (v9635) {
        const v9636 = typeof callback;
        const v9637 = v9636 !== 'function';
        if (v9637) {
            thread = callback;
            callback = null;
        }
        tmp = {};
        tmp.pending = 0;
        tmp.index = 0;
        tmp.thread = thread;
        init = true;
    }
    let item;
    const v9638 = thread === true;
    const v9639 = self.shift();
    const v9640 = tmp.index;
    const v9641 = v9640++;
    const v9642 = self[v9641];
    if (v9638) {
        item = v9639;
    } else {
        item = v9642;
    }
    const v9643 = item === undefined;
    if (v9643) {
        const v9644 = tmp.pending;
        const v9645 = !v9644;
        if (v9645) {
            const v9646 = callback();
            const v9647 = callback && v9646;
            v9647;
            tmp.cancel = true;
        }
        return self;
    }
    const v9648 = tmp.pending;
    const v9649 = v9648++;
    v9649;
    const v9651 = () => {
        const v9650 = setImmediate(next_wait, self, onItem, callback, thread, tmp);
        return v9650;
    };
    const v9652 = tmp.index;
    const v9653 = onItem.call(self, item, v9651, v9652);
    v9653;
    const v9654 = !init;
    const v9655 = tmp.thread;
    const v9656 = v9655 === 1;
    const v9657 = v9654 || v9656;
    if (v9657) {
        return self;
    }
    var i = 1;
    const v9658 = tmp.thread;
    let v9659 = i < v9658;
    while (v9659) {
        const v9661 = self.wait(onItem, callback, 1, tmp);
        v9661;
        const v9660 = i++;
        v9659 = i < v9658;
    }
    return self;
};
AP.waitFor = v9662;
AP.wait = AP.waitFor;
const next_wait = function (self, onItem, callback, thread, tmp) {
    const v9663 = tmp.pending;
    const v9664 = v9663--;
    v9664;
    const v9665 = self.wait(onItem, callback, thread, tmp);
    v9665;
};
const v9683 = function (thread, callback, pending) {
    var self = this;
    const v9666 = typeof thread;
    const v9667 = v9666 === 'function';
    if (v9667) {
        callback = thread;
        thread = 1;
    } else {
        const v9668 = thread === undefined;
        if (v9668) {
            thread = 1;
        }
    }
    const v9669 = pending === undefined;
    if (v9669) {
        pending = 0;
    }
    var item = self.shift();
    const v9670 = item === undefined;
    if (v9670) {
        const v9671 = !pending;
        if (v9671) {
            pending = undefined;
            const v9672 = callback();
            const v9673 = callback && v9672;
            v9673;
        }
        return self;
    }
    var i = 0;
    let v9674 = i < thread;
    while (v9674) {
        if (i) {
            item = self.shift();
        }
        const v9676 = pending++;
        v9676;
        const v9681 = function () {
            const v9679 = function () {
                const v9677 = pending--;
                v9677;
                const v9678 = self.async(1, callback, pending);
                v9678;
            };
            const v9680 = setImmediate(v9679);
            v9680;
        };
        const v9682 = item(v9681);
        v9682;
        const v9675 = i++;
        v9674 = i < thread;
    }
    return self;
};
AP.async = v9683;
const v9686 = function () {
    const v9684 = OBSOLETE('Array.randomize()', 'Use Array.random().');
    v9684;
    const v9685 = this.random();
    return v9685;
};
AP.randomize = v9686;
const v9694 = function () {
    const v9687 = this.length;
    var i = v9687 - 1;
    let v9688 = i > 0;
    while (v9688) {
        const v9690 = Math.random();
        const v9691 = i + 1;
        const v9692 = v9690 * v9691;
        var j = Math.floor(v9692);
        var temp = this[i];
        const v9693 = this[j];
        this[i] = v9693;
        this[j] = temp;
        const v9689 = i--;
        v9688 = i > 0;
    }
    return this;
};
AP.random = v9694;
const v9721 = function (max, fn, callback, index) {
    const v9695 = index === undefined;
    if (v9695) {
        index = 0;
    }
    var current = [];
    var self = this;
    var length = index + max;
    var i = index;
    let v9696 = i < length;
    while (v9696) {
        var item = self[i];
        const v9698 = item !== undefined;
        if (v9698) {
            const v9699 = current.push(item);
            v9699;
            continue;
        }
        const v9700 = current.length;
        const v9701 = !v9700;
        if (v9701) {
            const v9702 = callback();
            const v9703 = callback && v9702;
            v9703;
            return self;
        }
        const v9706 = () => {
            const v9704 = callback();
            const v9705 = callback && v9704;
            return v9705;
        };
        const v9707 = index + max;
        const v9708 = fn(current, v9706, index, v9707);
        v9708;
        return self;
        const v9697 = i++;
        v9696 = i < length;
    }
    const v9709 = current.length;
    const v9710 = !v9709;
    if (v9710) {
        const v9711 = callback();
        const v9712 = callback && v9711;
        v9712;
        return self;
    }
    const v9718 = function () {
        const v9713 = self.length;
        const v9714 = length < v9713;
        if (v9714) {
            const v9715 = self.limit(max, fn, callback, length);
            v9715;
        } else {
            const v9716 = callback();
            const v9717 = callback && v9716;
            v9717;
        }
    };
    const v9719 = index + max;
    const v9720 = fn(current, v9718, index, v9719);
    v9720;
    return self;
};
AP.limit = v9721;
const v9741 = function (property) {
    var self = this;
    var result = [];
    var sublength = 0;
    var i = 0;
    var length = self.length;
    let v9722 = i < length;
    while (v9722) {
        var value = self[i];
        const v9724 = !property;
        if (v9724) {
            const v9725 = result.indexOf(value);
            const v9726 = -1;
            const v9727 = v9725 === v9726;
            const v9728 = result.push(value);
            const v9729 = v9727 && v9728;
            v9729;
            continue;
        }
        const v9730 = sublength === 0;
        if (v9730) {
            const v9731 = result.push(value);
            v9731;
            const v9732 = sublength++;
            v9732;
            continue;
        }
        var is = true;
        var j = 0;
        let v9733 = j < sublength;
        while (v9733) {
            const v9735 = result[j];
            const v9736 = v9735[property];
            const v9737 = value[property];
            const v9738 = v9736 === v9737;
            if (v9738) {
                is = false;
                break;
            }
            const v9734 = j++;
            v9733 = j < sublength;
        }
        if (is) {
            const v9739 = result.push(value);
            v9739;
            const v9740 = sublength++;
            v9740;
        }
        const v9723 = i++;
        v9722 = i < length;
    }
    return result;
};
AP.unique = v9741;
const v9742 = ArrayBuffer.prototype;
const v9747 = function () {
    const v9743 = this.byteLength;
    var buf = new Buffer(v9743);
    var view = new Uint8Array(this);
    var i = 0;
    var length = buf.length;
    let v9744 = i < length;
    while (v9744) {
        const v9746 = view[i];
        buf[i] = v9746;
        const v9745 = ++i;
        v9744 = i < length;
    }
    return buf;
};
v9742.toBuffer = v9747;
const AsyncTask = function (owner, name, fn, cb, waiting) {
    this.isRunning = 0;
    this.owner = owner;
    this.name = name;
    this.fn = fn;
    this.cb = cb;
    this.waiting = waiting;
    this.interval = null;
    this.isCanceled = false;
};
const v9748 = AsyncTask.prototype;
const v9773 = function () {
    var self = this;
    try {
        const v9749 = self.isCanceled;
        if (v9749) {
            const v9750 = self.complete();
            v9750;
            return self;
        }
        self.isRunning = 1;
        const v9751 = self.owner;
        const v9752 = v9751.tasksWaiting;
        const v9753 = self.name;
        v9752[v9753] = true;
        const v9754 = self.owner;
        const v9755 = self.name;
        const v9756 = v9754.emit('begin', v9755);
        v9756;
        const v9757 = self.owner;
        const v9758 = v9757.tasksTimeout;
        const v9759 = self.name;
        var timeout = v9758[v9759];
        const v9760 = timeout > 0;
        if (v9760) {
            const v9762 = function () {
                const v9761 = self.timeout();
                v9761;
            };
            const v9763 = setTimeout(v9762, timeout);
            self.interval = v9763;
        }
        const v9767 = function () {
            const v9765 = () => {
                const v9764 = self.complete();
                return v9764;
            };
            const v9766 = setImmediate(v9765);
            v9766;
        };
        const v9768 = self.fn(v9767);
        v9768;
    } catch (ex) {
        const v9769 = self.owner;
        const v9770 = self.name;
        const v9771 = v9769.emit('error', v9770, ex);
        v9771;
        const v9772 = self.complete();
        v9772;
    }
    return self;
};
v9748.run = v9773;
const v9774 = AsyncTask.prototype;
const v9790 = function (timeout) {
    var self = this;
    const v9775 = timeout > 0;
    if (v9775) {
        const v9776 = self.interval;
        const v9777 = clearTimeout(v9776);
        v9777;
        const v9779 = function () {
            const v9778 = self.timeout();
            v9778;
        };
        const v9780 = setTimeout(v9779, timeout);
        v9780;
        return self;
    }
    const v9781 = timeout <= 0;
    if (v9781) {
        const v9782 = self.interval;
        const v9783 = clearTimeout(v9782);
        v9783;
        const v9785 = function () {
            const v9784 = self.timeout();
            v9784;
        };
        const v9786 = setTimeout(v9785, timeout);
        v9786;
        return self;
    }
    const v9788 = () => {
        const v9787 = self.cancel(true);
        return v9787;
    };
    const v9789 = setImmediate(v9788);
    v9789;
    return self;
};
v9774.timeout = v9790;
const v9791 = AsyncTask.prototype;
const v9799 = function (isTimeout) {
    var self = this;
    self.isCanceled = true;
    if (isTimeout) {
        const v9792 = self.owner;
        const v9793 = self.name;
        const v9794 = v9792.emit('timeout', v9793);
        v9794;
    } else {
        const v9795 = self.owner;
        const v9796 = self.name;
        const v9797 = v9795.emit('cancel', v9796);
        v9797;
    }
    self.fn = null;
    self.cb = null;
    const v9798 = self.complete();
    v9798;
    return self;
};
v9791.cancel = v9799;
const v9800 = AsyncTask.prototype;
const v9822 = function () {
    var item = this;
    var self = item.owner;
    item.isRunning = 2;
    const v9801 = self.tasksPending;
    const v9802 = item.name;
    const v9803 = v9801[v9802];
    const v9804 = delete v9803;
    v9804;
    const v9805 = self.tasksWaiting;
    const v9806 = item.name;
    const v9807 = v9805[v9806];
    const v9808 = delete v9807;
    v9808;
    const v9809 = item.isCanceled;
    const v9810 = !v9809;
    if (v9810) {
        try {
            const v9811 = item.name;
            const v9812 = self.emit('end', v9811);
            v9812;
            const v9813 = item.cb;
            const v9814 = item.cb();
            const v9815 = v9813 && v9814;
            v9815;
        } catch (ex) {
            const v9816 = item.name;
            const v9817 = self.emit('error', ex, v9816);
            v9817;
        }
    }
    const v9820 = function () {
        const v9818 = self.reload();
        v9818;
        const v9819 = self.refresh();
        v9819;
    };
    const v9821 = setImmediate(v9820);
    v9821;
    return self;
};
v9800.complete = v9822;
const Async = function (owner) {
    this._max = 0;
    this._count = 0;
    this._isRunning = false;
    this._isEnd = false;
    this.owner = owner;
    this.onComplete = [];
    const v9823 = {};
    this.tasksPending = v9823;
    const v9824 = {};
    this.tasksWaiting = v9824;
    this.tasksAll = [];
    const v9825 = {};
    this.tasksTimeout = v9825;
    this.isCanceled = false;
    const v9826 = Events.EventEmitter;
    const v9827 = v9826.call(this);
    v9827;
};
const v9835 = {};
v9835.count = function () {
    const v9828 = this._count;
    return v9828;
};
v9835.percentage = function () {
    const v9829 = this._count;
    const v9830 = v9829 * 100;
    const v9831 = this._max;
    const v9832 = v9830 / v9831;
    const v9833 = Math.floor(v9832);
    var p = 100 - v9833;
    let v9834;
    if (p) {
        v9834 = p;
    } else {
        v9834 = 0;
    }
    return v9834;
};
Async.prototype = v9835;
const ACP = Async.prototype;
const v9836 = Events.EventEmitter;
const v9837 = v9836.prototype;
const v9838 = {};
v9838.value = Async;
v9838.enumberable = false;
const v9839 = { constructor: v9838 };
const v9840 = Object.create(v9837, v9839);
ACP.__proto__ = v9840;
const v9845 = function () {
    var self = this;
    const v9841 = self.tasksPending;
    const v9842 = Object.keys(v9841);
    self.tasksAll = v9842;
    const v9843 = self.percentage;
    const v9844 = self.emit('percentage', v9843);
    v9844;
    return self;
};
ACP.reload = v9845;
const v9864 = function (name) {
    var self = this;
    const v9846 = name === undefined;
    if (v9846) {
        self.isCanceled = true;
        var i = 0;
        const v9847 = self._count;
        let v9848 = i < v9847;
        while (v9848) {
            const v9850 = self.tasksAll;
            const v9851 = v9850[i];
            const v9852 = self.cancel(v9851);
            v9852;
            const v9849 = i++;
            v9848 = i < v9847;
        }
        return true;
    }
    const v9853 = self.tasksPending;
    var task = v9853[name];
    const v9854 = !task;
    if (v9854) {
        return false;
    }
    const v9855 = self.tasksPending;
    const v9856 = v9855[name];
    const v9857 = delete v9856;
    v9857;
    const v9858 = self.tasksWaiting;
    const v9859 = v9858[name];
    const v9860 = delete v9859;
    v9860;
    const v9861 = task.cancel();
    v9861;
    task = null;
    const v9862 = self.reload();
    v9862;
    const v9863 = self.refresh();
    v9863;
    return true;
};
ACP.cancel = v9864;
const v9875 = function (name, fn, cb) {
    var self = this;
    const v9865 = self.isCanceled;
    if (v9865) {
        return false;
    }
    const v9866 = typeof name;
    const v9867 = v9866 === 'function';
    if (v9867) {
        cb = fn;
        fn = name;
        name = exports.GUID(6);
    }
    const v9868 = self.tasksPending;
    const v9869 = v9868[name];
    if (v9869) {
        return false;
    }
    const v9870 = self.tasksPending;
    v9870[name] = new AsyncTask(self, name, fn, cb, null);
    const v9871 = self._max;
    const v9872 = v9871++;
    v9872;
    const v9873 = self.reload();
    v9873;
    const v9874 = self.refresh();
    v9874;
    return true;
};
ACP.await = v9875;
const v9886 = function (name, waitingFor, fn, cb) {
    var self = this;
    const v9876 = self.isCanceled;
    if (v9876) {
        return false;
    }
    const v9877 = typeof waitingFor;
    const v9878 = v9877 === 'function';
    if (v9878) {
        cb = fn;
        fn = waitingFor;
        waitingFor = null;
    }
    const v9879 = self.tasksPending;
    const v9880 = v9879[name];
    if (v9880) {
        return false;
    }
    const v9881 = self.tasksPending;
    v9881[name] = new AsyncTask(self, name, fn, cb, waitingFor);
    const v9882 = self._max;
    const v9883 = v9882++;
    v9883;
    const v9884 = self.reload();
    v9884;
    const v9885 = self.refresh();
    v9885;
    return true;
};
ACP.wait = v9886;
const v9888 = function (fn) {
    const v9887 = this.run(fn);
    return v9887;
};
ACP.complete = v9888;
const v9893 = function (fn) {
    this._isRunning = true;
    const v9889 = this.onComplete;
    const v9890 = v9889.push(fn);
    const v9891 = fn && v9890;
    v9891;
    const v9892 = this.refresh();
    v9892;
    return this;
};
ACP.run = v9893;
const v9900 = function (name) {
    const v9894 = !name;
    if (v9894) {
        const v9895 = this._isRunning;
        return v9895;
    }
    const v9896 = this.tasksPending;
    var task = v9896[name];
    const v9897 = task.isRunning;
    const v9898 = v9897 === 1;
    let v9899;
    if (task) {
        v9899 = v9898;
    } else {
        v9899 = false;
    }
    return v9899;
};
ACP.isRunning = v9900;
const v9905 = function (name) {
    const v9901 = this.tasksPending;
    var task = v9901[name];
    const v9902 = task.isRunning;
    const v9903 = v9902 === 0;
    let v9904;
    if (task) {
        v9904 = v9903;
    } else {
        v9904 = false;
    }
    return v9904;
};
ACP.isWaiting = v9905;
const v9909 = function (name) {
    const v9906 = this.tasksPending;
    const v9907 = v9906[name];
    let v9908;
    if (v9907) {
        v9908 = true;
    } else {
        v9908 = false;
    }
    return v9908;
};
ACP.isPending = v9909;
const v9912 = function (name, timeout) {
    if (timeout) {
        const v9910 = this.tasksTimeout;
        v9910[name] = timeout;
    } else {
        const v9911 = this.tasksTimeout;
        v9911[name] = undefined;
    }
    return this;
};
ACP.timeout = v9912;
const v9957 = function (name) {
    var self = this;
    const v9913 = self._isRunning;
    const v9914 = !v9913;
    const v9915 = self._isEnd;
    const v9916 = v9914 || v9915;
    if (v9916) {
        return self;
    }
    const v9917 = self.tasksAll;
    const v9918 = v9917.length;
    self._count = v9918;
    var index = 0;
    while (true) {
        const v9919 = self.tasksAll;
        const v9920 = index++;
        var name = v9919[v9920];
        const v9921 = !name;
        if (v9921) {
            break;
        }
        const v9922 = self.tasksPending;
        var task = v9922[name];
        const v9923 = !task;
        if (v9923) {
            break;
        }
        const v9924 = self.isCanceled;
        const v9925 = task.isCanceled;
        const v9926 = v9924 || v9925;
        if (v9926) {
            const v9927 = self.tasksPending;
            const v9928 = v9927[name];
            const v9929 = delete v9928;
            v9929;
            const v9930 = self.tasksWaiting;
            const v9931 = v9930[name];
            const v9932 = delete v9931;
            v9932;
            const v9933 = self.tasksAll;
            const v9934 = v9933.splice(index, 1);
            v9934;
            const v9935 = self.tasksAll;
            const v9936 = v9935.length;
            self._count = v9936;
            const v9937 = index--;
            v9937;
            continue;
        }
        const v9938 = task.isRunning;
        const v9939 = v9938 !== 0;
        const v9940 = task.waiting;
        const v9941 = self.tasksPending;
        const v9942 = task.waiting;
        const v9943 = v9941[v9942];
        const v9944 = v9940 && v9943;
        const v9945 = v9939 || v9944;
        if (v9945) {
            continue;
        }
        const v9946 = task.run();
        v9946;
    }
    const v9947 = self._count;
    const v9948 = v9947 === 0;
    if (v9948) {
        self._isRunning = false;
        self._isEnd = true;
        const v9949 = self.emit('complete');
        v9949;
        const v9950 = self.emit('percentage', 100);
        v9950;
        self._max = 0;
        var complete = self.onComplete;
        var length = complete.length;
        self.onComplete = [];
        var i = 0;
        let v9951 = i < length;
        while (v9951) {
            try {
                const v9953 = complete[i]();
                v9953;
            } catch (ex) {
                const v9954 = self.emit('error', ex);
                v9954;
            }
            const v9952 = i++;
            v9951 = i < length;
        }
        const v9955 = () => {
            return self._isEnd = false;
        };
        const v9956 = setImmediate(v9955);
        v9956;
    }
    return self;
};
ACP.refresh = v9957;
const FileList = function () {
    this.pending = [];
    this.pendingDirectory = [];
    this.directory = [];
    this.file = [];
    this.onComplete = null;
    this.onFilter = null;
    this.advanced = false;
};
const FLP = FileList.prototype;
const v9961 = function () {
    const v9958 = this.file;
    v9958.length = 0;
    const v9959 = this.directory;
    v9959.length = 0;
    const v9960 = this.pendingDirectory;
    v9960.length = 0;
    return this;
};
FLP.reset = v9961;
const v9979 = function (directory) {
    var self = this;
    const v9962 = directory instanceof Array;
    if (v9962) {
        var length = directory.length;
        var i = 0;
        let v9963 = i < length;
        while (v9963) {
            const v9965 = self.pendingDirectory;
            const v9966 = directory[i];
            const v9967 = v9965.push(v9966);
            v9967;
            const v9964 = i++;
            v9963 = i < length;
        }
        const v9968 = self.next();
        v9968;
        return;
    }
    const v9977 = function (err, arr) {
        if (err) {
            const v9969 = self.next();
            return v9969;
        }
        var length = arr.length;
        var i = 0;
        let v9970 = i < length;
        while (v9970) {
            const v9972 = self.pending;
            const v9973 = arr[i];
            const v9974 = Path.join(directory, v9973);
            const v9975 = v9972.push(v9974);
            v9975;
            const v9971 = i++;
            v9970 = i < length;
        }
        const v9976 = self.next();
        v9976;
    };
    const v9978 = Fs.readdir(directory, v9977);
    v9978;
};
FLP.walk = v9979;
const v10002 = function (path) {
    var self = this;
    const v10000 = function (err, stats) {
        if (err) {
            const v9980 = self.next();
            return v9980;
        }
        const v9981 = stats.isDirectory();
        if (v9981) {
            path = self.clean(path);
            const v9982 = self.onFilter;
            const v9983 = !v9982;
            const v9984 = self.onFilter(path, true);
            const v9985 = v9983 || v9984;
            if (v9985) {
                const v9986 = self.directory;
                const v9987 = v9986.push(path);
                v9987;
                const v9988 = self.pendingDirectory;
                const v9989 = v9988.push(path);
                v9989;
            }
        } else {
            const v9990 = self.onFilter;
            const v9991 = !v9990;
            const v9992 = self.onFilter(path, false);
            const v9993 = v9991 || v9992;
            if (v9993) {
                const v9994 = self.file;
                const v9995 = self.advanced;
                const v9996 = {
                    filename: path,
                    stats: stats
                };
                let v9997;
                if (v9995) {
                    v9997 = v9996;
                } else {
                    v9997 = path;
                }
                const v9998 = v9994.push(v9997);
                v9998;
            }
        }
        const v9999 = self.next();
        v9999;
    };
    const v10001 = Fs.stat(path, v10000);
    v10001;
};
FLP.stat = v10002;
const v10011 = function (path) {
    const v10003 = path.length;
    const v10004 = v10003 - 1;
    const v10005 = path[v10004];
    const v10006 = Path.sep;
    const v10007 = v10005 === v10006;
    const v10008 = Path.sep;
    const v10009 = path + v10008;
    let v10010;
    if (v10007) {
        v10010 = path;
    } else {
        v10010 = v10009;
    }
    return v10010;
};
FLP.clean = v10011;
const v10023 = function () {
    var self = this;
    const v10012 = self.pending;
    const v10013 = v10012.length;
    if (v10013) {
        const v10014 = self.pending;
        var item = v10014.shift();
        const v10015 = self.stat(item);
        v10015;
        return;
    }
    const v10016 = self.pendingDirectory;
    const v10017 = v10016.length;
    if (v10017) {
        const v10018 = self.pendingDirectory;
        var directory = v10018.shift();
        const v10019 = self.walk(directory);
        v10019;
        return;
    }
    const v10020 = self.file;
    const v10021 = self.directory;
    const v10022 = self.onComplete(v10020, v10021);
    v10022;
};
FLP.next = v10023;
exports.Async = Async;
const v10037 = function (fn, owner) {
    const v10036 = function () {
        const v10024 = [];
        const v10025 = v10024.slice;
        var args = v10025.call(arguments);
        var params;
        var callback;
        var executed = false;
        var self = owner || this;
        const v10029 = function () {
            params = arguments;
            const v10026 = !executed;
            const v10027 = v10026 && callback;
            if (v10027) {
                executed = true;
                const v10028 = callback.apply(self, params);
                v10028;
            }
        };
        const v10030 = args.push(v10029);
        v10030;
        const v10031 = fn.apply(self, args);
        v10031;
        const v10035 = function (cb) {
            callback = cb;
            const v10032 = !executed;
            const v10033 = v10032 && params;
            if (v10033) {
                executed = true;
                const v10034 = callback.apply(self, params);
                v10034;
            }
        };
        return v10035;
    };
    return v10036;
};
exports.sync = v10037;
const v10052 = function (fn, owner) {
    const v10050 = function () {
        var params;
        var callback;
        var executed = false;
        var self = owner || this;
        const v10038 = [];
        const v10039 = v10038.slice;
        var args = v10039.call(arguments);
        const v10043 = function () {
            params = arguments;
            const v10040 = !executed;
            const v10041 = v10040 && callback;
            if (v10041) {
                executed = true;
                const v10042 = callback.apply(self, params);
                v10042;
            }
        };
        const v10044 = args.push(v10043);
        v10044;
        const v10045 = fn.apply(self, args);
        v10045;
        const v10049 = function (cb) {
            callback = cb;
            const v10046 = !executed;
            const v10047 = v10046 && params;
            if (v10047) {
                executed = true;
                const v10048 = callback.apply(self, params);
                v10048;
            }
        };
        return v10049;
    };
    const v10051 = v10050();
    return v10051;
};
exports.sync2 = v10052;
const v10100 = function (fn, isApply) {
    var context = this;
    const v10099 = function (complete) {
        var self = this;
        var argv;
        const v10053 = arguments.length;
        if (v10053) {
            if (isApply) {
                argv = arguments[1];
            } else {
                argv = [];
                var i = 1;
                const v10054 = arguments.length;
                let v10055 = i < v10054;
                while (v10055) {
                    const v10057 = arguments[i];
                    const v10058 = argv.push(v10057);
                    v10058;
                    const v10056 = i++;
                    v10055 = i < v10054;
                }
            }
        } else {
            argv = new Array(0);
        }
        var generator = fn.apply(context, argv);
        const v10059 = next(null);
        v10059;
        const next = function (err, result) {
            var g;
            var type;
            try {
                let can;
                if (err) {
                    can = false;
                } else {
                    can = true;
                }
                switch (can) {
                case true:
                    g = generator.next(result);
                    break;
                case false:
                    g = generator.throw(err);
                    break;
                }
            } catch (e) {
                const v10060 = !complete;
                if (v10060) {
                    return;
                }
                const v10061 = typeof complete;
                type = v10061;
                const v10062 = type === 'object';
                const v10063 = complete.isController;
                const v10064 = v10062 && v10063;
                if (v10064) {
                    const v10065 = e instanceof ErrorBuilder;
                    if (v10065) {
                        const v10066 = complete.content(e);
                        v10066;
                    } else {
                        const v10067 = complete.view500(e);
                        v10067;
                    }
                    return;
                }
                const v10068 = type === 'function';
                const v10070 = () => {
                    const v10069 = complete(e);
                    return v10069;
                };
                const v10071 = setImmediate(v10070);
                const v10072 = v10068 && v10071;
                v10072;
                return;
            }
            const v10073 = g.done;
            if (v10073) {
                const v10074 = typeof complete;
                const v10075 = v10074 === 'function';
                const v10076 = g.value;
                const v10077 = complete(null, v10076);
                const v10078 = v10075 && v10077;
                v10078;
                return;
            }
            const v10079 = g.value;
            var promise = v10079 instanceof Promise;
            const v10080 = g.value;
            const v10081 = typeof v10080;
            const v10082 = v10081 !== 'function';
            const v10083 = !promise;
            const v10084 = v10082 && v10083;
            if (v10084) {
                const v10085 = g.value;
                const v10086 = next.call(self, null, v10085);
                v10086;
                return;
            }
            try {
                if (promise) {
                    const v10087 = g.value;
                    const v10089 = value => {
                        const v10088 = next.call(self, null, value);
                        return v10088;
                    };
                    const v10090 = v10087.then(v10089);
                    v10090;
                    return;
                }
                const v10091 = g.value;
                const v10093 = function () {
                    const v10092 = next.apply(self, arguments);
                    v10092;
                };
                const v10094 = v10091.call(self, v10093);
                v10094;
            } catch (e) {
                const v10096 = () => {
                    const v10095 = next.call(self, e);
                    return v10095;
                };
                const v10097 = setImmediate(v10096);
                v10097;
            }
        };
        const v10098 = generator.value;
        return v10098;
    };
    return v10099;
};
exports.async = v10100;
const CACHE_GML1 = [
    null,
    null,
    0,
    0,
    0,
    0,
    0,
    0
];
const CACHE_GML2 = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
];
const v10122 = function (data, isLE) {
    const v10101 = data[1];
    var length = v10101 & 127;
    const v10102 = length === 126;
    if (v10102) {
        const v10103 = data.length;
        const v10104 = v10103 < 4;
        if (v10104) {
            const v10105 = -1;
            return v10105;
        }
        const v10106 = data[3];
        CACHE_GML1[0] = v10106;
        const v10107 = data[2];
        CACHE_GML1[1] = v10107;
        const v10108 = converBytesToInt64(CACHE_GML1, 0, isLE);
        return v10108;
    }
    const v10109 = length === 127;
    if (v10109) {
        const v10110 = data.Length;
        const v10111 = v10110 < 10;
        if (v10111) {
            const v10112 = -1;
            return v10112;
        }
        const v10113 = data[9];
        CACHE_GML2[0] = v10113;
        const v10114 = data[8];
        CACHE_GML2[1] = v10114;
        const v10115 = data[7];
        CACHE_GML2[2] = v10115;
        const v10116 = data[6];
        CACHE_GML2[3] = v10116;
        const v10117 = data[5];
        CACHE_GML2[4] = v10117;
        const v10118 = data[4];
        CACHE_GML2[5] = v10118;
        const v10119 = data[3];
        CACHE_GML2[6] = v10119;
        const v10120 = data[2];
        CACHE_GML2[7] = v10120;
        const v10121 = converBytesToInt64(CACHE_GML2, 0, isLE);
        return v10121;
    }
    return length;
};
exports.getMessageLength = v10122;
const converBytesToInt64 = function (data, startIndex, isLE) {
    const v10123 = data[startIndex];
    const v10124 = startIndex + 1;
    const v10125 = data[v10124];
    const v10126 = v10125 << 8;
    const v10127 = v10123 | v10126;
    const v10128 = startIndex + 2;
    const v10129 = data[v10128];
    const v10130 = v10129 << 16;
    const v10131 = v10127 | v10130;
    const v10132 = startIndex + 3;
    const v10133 = data[v10132];
    const v10134 = v10133 << 24;
    const v10135 = v10131 | v10134;
    const v10136 = startIndex + 4;
    const v10137 = data[v10136];
    const v10138 = v10137 << 32;
    const v10139 = v10135 | v10138;
    const v10140 = startIndex + 5;
    const v10141 = data[v10140];
    const v10142 = v10141 << 40;
    const v10143 = v10139 | v10142;
    const v10144 = startIndex + 6;
    const v10145 = data[v10144];
    const v10146 = v10145 << 48;
    const v10147 = v10143 | v10146;
    const v10148 = startIndex + 7;
    const v10149 = data[v10148];
    const v10150 = v10149 << 56;
    const v10151 = v10147 | v10150;
    const v10152 = startIndex + 7;
    const v10153 = data[v10152];
    const v10154 = v10153 << 32;
    const v10155 = startIndex + 6;
    const v10156 = data[v10155];
    const v10157 = v10156 << 40;
    const v10158 = v10154 | v10157;
    const v10159 = startIndex + 5;
    const v10160 = data[v10159];
    const v10161 = v10160 << 48;
    const v10162 = v10158 | v10161;
    const v10163 = startIndex + 4;
    const v10164 = data[v10163];
    const v10165 = v10164 << 56;
    const v10166 = v10162 | v10165;
    const v10167 = startIndex + 3;
    const v10168 = data[v10167];
    const v10169 = v10166 | v10168;
    const v10170 = startIndex + 2;
    const v10171 = data[v10170];
    const v10172 = v10171 << 8;
    const v10173 = v10169 | v10172;
    const v10174 = startIndex + 1;
    const v10175 = data[v10174];
    const v10176 = v10175 << 16;
    const v10177 = v10173 | v10176;
    const v10178 = data[startIndex];
    const v10179 = v10178 << 24;
    const v10180 = v10177 | v10179;
    let v10181;
    if (isLE) {
        v10181 = v10151;
    } else {
        v10181 = v10180;
    }
    return v10181;
};
const v10182 = {};
exports.queuecache = v10182;
const queue_next = function (name) {
    const v10183 = exports.queuecache;
    var item = v10183[name];
    const v10184 = !item;
    if (v10184) {
        return;
    }
    const v10185 = item.running;
    const v10186 = v10185--;
    v10186;
    const v10187 = item.running;
    const v10188 = v10187 < 0;
    if (v10188) {
        item.running = 0;
    }
    const v10189 = item.pending;
    const v10190 = v10189.length;
    if (v10190) {
        const v10191 = item.pending;
        var fn = v10191.shift();
        if (fn) {
            const v10192 = item.running;
            const v10193 = v10192++;
            v10193;
            const v10194 = setImmediate(queue_next_callback, fn, name);
            v10194;
        } else {
            item.running = 0;
        }
    }
};
const queue_next_callback = function (fn, name) {
    const v10196 = () => {
        const v10195 = queue_next(name);
        return v10195;
    };
    const v10197 = fn(v10196);
    v10197;
};
const v10216 = function (name, max, fn) {
    const v10198 = !fn;
    if (v10198) {
        return false;
    }
    const v10199 = !max;
    if (v10199) {
        const v10200 = fn(NOOP);
        v10200;
        return true;
    }
    const v10201 = exports.queuecache;
    const v10202 = v10201[name];
    const v10203 = !v10202;
    if (v10203) {
        const v10204 = exports.queuecache;
        const v10205 = [];
        const v10206 = {};
        v10206.limit = max;
        v10206.running = 0;
        v10206.pending = v10205;
        v10204[name] = v10206;
    }
    const v10207 = exports.queuecache;
    var item = v10207[name];
    const v10208 = item.running;
    const v10209 = item.limit;
    const v10210 = v10208 >= v10209;
    if (v10210) {
        const v10211 = item.pending;
        const v10212 = v10211.push(fn);
        v10212;
        return false;
    }
    const v10213 = item.running;
    const v10214 = v10213++;
    v10214;
    const v10215 = setImmediate(queue_next_callback, fn, name);
    v10215;
    return true;
};
exports.queue = v10216;
const v10218 = function (val) {
    const v10217 = Internal.compile_css(val);
    return v10217;
};
exports.minifyStyle = v10218;
const v10220 = function (val) {
    const v10219 = Internal.compile_javascript(val);
    return v10219;
};
exports.minifyScript = v10220;
const v10222 = function (val) {
    const v10221 = Internal.compile_html(val);
    return v10221;
};
exports.minifyHTML = v10222;
const v10230 = function (value) {
    const v10223 = value[0];
    const v10224 = v10223 !== '=';
    if (v10224) {
        return '';
    }
    var index = value.indexOf('/', 2);
    const v10225 = -1;
    const v10226 = index === v10225;
    if (v10226) {
        return '';
    }
    value = value.substring(1, index);
    const v10227 = value === '?';
    const v10228 = CONF.default_theme;
    let v10229;
    if (v10227) {
        v10229 = v10228;
    } else {
        v10229 = value;
    }
    return v10229;
};
exports.parseTheme = v10230;
const v10281 = function (obj, path, value) {
    var cachekey = 'S+' + path;
    const v10231 = F.temporary;
    const v10232 = v10231.other;
    const v10233 = v10232[cachekey];
    if (v10233) {
        const v10234 = F.temporary;
        const v10235 = v10234.other;
        const v10236 = v10235[cachekey](obj, value);
        return v10236;
    }
    var arr = parsepath(path);
    var builder = [];
    var i = 0;
    const v10237 = arr.length;
    const v10238 = v10237 - 1;
    let v10239 = i < v10238;
    while (v10239) {
        let type;
        const v10241 = i + 1;
        const v10242 = arr[v10241];
        const v10243 = i + 1;
        const v10244 = arr[v10243];
        const v10245 = REGISARR.test(v10244);
        let v10246;
        if (v10245) {
            v10246 = '[]';
        } else {
            v10246 = '{}';
        }
        if (v10242) {
            type = v10246;
        } else {
            type = '{}';
        }
        const v10247 = arr[i];
        const v10248 = v10247[0];
        const v10249 = v10248 === '[';
        let v10250;
        if (v10249) {
            v10250 = '';
        } else {
            v10250 = '.';
        }
        const v10251 = 'w' + v10250;
        const v10252 = arr[i];
        var p = v10251 + v10252;
        const v10253 = 'if(typeof(' + p;
        const v10254 = v10253 + ')!==\'object\'||';
        const v10255 = v10254 + p;
        const v10256 = v10255 + '==null)';
        const v10257 = v10256 + p;
        const v10258 = v10257 + '=';
        const v10259 = v10258 + type;
        const v10260 = v10259 + ';';
        const v10261 = builder.push(v10260);
        v10261;
        const v10240 = i++;
        v10239 = i < v10238;
    }
    const v10262 = arr.length;
    const v10263 = v10262 - 1;
    var v = arr[v10263];
    const v10264 = v.lastIndexOf('[]');
    const v10265 = -1;
    var ispush = v10264 !== v10265;
    const v10266 = builder.join(';');
    const v10267 = v10266 + ';var v=typeof(a)===\'function\'?a(U.get(b)):a;w';
    const v10268 = v[0];
    const v10269 = v10268 === '[';
    let v10270;
    if (v10269) {
        v10270 = '';
    } else {
        v10270 = '.';
    }
    const v10271 = v10267 + v10270;
    const v10272 = v.replace(REGREPLACEARR, '.push(v)');
    const v10273 = v + '=v';
    let v10274;
    if (ispush) {
        v10274 = v10272;
    } else {
        v10274 = v10273;
    }
    const v10275 = v10271 + v10274;
    var a = v10275 + ';return v';
    const v10276 = /__proto__|constructor|prototype|eval/.test(a);
    if (v10276) {
        const v10277 = new Error('Potential vulnerability');
        throw v10277;
    }
    var fn = new Function('w', 'a', 'b', a);
    const v10278 = F.temporary;
    const v10279 = v10278.other;
    v10279[cachekey] = fn;
    const v10280 = fn(obj, value, path);
    v10280;
};
exports.set = v10281;
const v10315 = function (obj, path) {
    var cachekey = 'G=' + path;
    const v10282 = F.temporary;
    const v10283 = v10282.other;
    const v10284 = v10283[cachekey];
    if (v10284) {
        const v10285 = F.temporary;
        const v10286 = v10285.other;
        const v10287 = v10286[cachekey](obj);
        return v10287;
    }
    var arr = parsepath(path);
    var builder = [];
    var i = 0;
    const v10288 = arr.length;
    var length = v10288 - 1;
    let v10289 = i < length;
    while (v10289) {
        const v10291 = arr[i];
        const v10292 = !v10291;
        const v10293 = arr[i];
        const v10294 = v10293[0];
        const v10295 = v10294 === '[';
        const v10296 = v10292 || v10295;
        let v10297;
        if (v10296) {
            v10297 = '';
        } else {
            v10297 = '.';
        }
        const v10298 = 'if(!w' + v10297;
        const v10299 = arr[i];
        const v10300 = v10298 + v10299;
        const v10301 = v10300 + ')return';
        const v10302 = builder.push(v10301);
        v10302;
        const v10290 = i++;
        v10289 = i < length;
    }
    const v10303 = arr.length;
    const v10304 = v10303 - 1;
    var v = arr[v10304];
    const v10305 = builder.join(';');
    const v10306 = v10305 + ';return w';
    const v10307 = v[0];
    const v10308 = v10307 === '[';
    let v10309;
    if (v10308) {
        v10309 = '';
    } else {
        v10309 = '.';
    }
    const v10310 = v10306 + v10309;
    const v10311 = v10310 + v;
    var fn = new Function('w', v10311);
    const v10312 = F.temporary;
    const v10313 = v10312.other;
    v10313[cachekey] = fn;
    const v10314 = fn(obj);
    return v10314;
};
exports.get = v10315;
const parsepath = function (path) {
    var arr = path.split('.');
    var builder = [];
    var all = [];
    var i = 0;
    const v10316 = arr.length;
    let v10317 = i < v10316;
    while (v10317) {
        var p = arr[i];
        var index = p.indexOf('[');
        const v10319 = -1;
        const v10320 = index === v10319;
        if (v10320) {
            const v10321 = p.indexOf('-');
            const v10322 = -1;
            const v10323 = v10321 === v10322;
            if (v10323) {
                const v10324 = all.push(p);
                v10324;
                const v10325 = all.join('.');
                const v10326 = builder.push(v10325);
                v10326;
            } else {
                const v10327 = all.length;
                const v10328 = v10327 - 1;
                var a = all.splice(v10328);
                const v10329 = a + '[\'';
                const v10330 = v10329 + p;
                const v10331 = v10330 + '\']';
                const v10332 = all.push(v10331);
                v10332;
                const v10333 = all.join('.');
                const v10334 = builder.push(v10333);
                v10334;
            }
        } else {
            const v10335 = p.indexOf('-');
            const v10336 = -1;
            const v10337 = v10335 === v10336;
            if (v10337) {
                const v10338 = p.substring(0, index);
                const v10339 = all.push(v10338);
                v10339;
                const v10340 = all.join('.');
                const v10341 = builder.push(v10340);
                v10341;
                const v10342 = all.length;
                const v10343 = v10342 - 1;
                const v10344 = all.splice(v10343);
                v10344;
                const v10345 = all.push(p);
                v10345;
                const v10346 = all.join('.');
                const v10347 = builder.push(v10346);
                v10347;
            } else {
                const v10348 = p.substring(0, index);
                const v10349 = '[\'' + v10348;
                const v10350 = v10349 + '\']';
                const v10351 = all.push(v10350);
                v10351;
                const v10352 = all.join('');
                const v10353 = builder.push(v10352);
                v10353;
                const v10354 = p.substring(index);
                const v10355 = all.push(v10354);
                v10355;
                const v10356 = all.join('');
                const v10357 = builder.push(v10356);
                v10357;
            }
        }
        const v10318 = i++;
        v10317 = i < v10316;
    }
    return builder;
};
const v10358 = exports.async;
global.async = v10358;
global.Async = global.async;
const v10359 = exports.sync;
global.SYNCHRONIZE = v10359;
global.sync = global.SYNCHRONIZE;
const v10360 = exports.sync2;
global.sync2 = v10360;
const _shellInsertionSort = function (list, length, gapSize, fn) {
    var temp;
    var i;
    var j;
    (i = gapSize)
    let v10361 = i < length;
    while (v10361) {
        j = i;
        const v10362 = j > 0;
        const v10363 = j - gapSize;
        const v10364 = list[v10363];
        const v10365 = list[j];
        const v10366 = fn(v10364, v10365);
        const v10367 = v10366 === 1;
        let v10368 = v10362 && v10367;
        while (v10368) {
            temp = list[j];
            const v10369 = j - gapSize;
            const v10370 = list[v10369];
            list[j] = v10370;
            const v10371 = j - gapSize;
            list[v10371] = temp;
            j -= gapSize;
            v10368 = v10362 && v10367;
        }
        v10361 = i < length;
    }
};
const shellsort = function (arr, fn) {
    var length = arr.length;
    const v10372 = length / 2;
    var gapSize = Math.floor(v10372);
    while (gapSize) {
        const v10373 = _shellInsertionSort(arr, length, gapSize, fn);
        v10373;
        const v10374 = gapSize / 2;
        gapSize = Math.floor(v10374);
    }
    return arr;
};
const EventEmitter2 = function (obj) {
    if (obj) {
        const v10375 = obj.emit;
        const v10376 = !v10375;
        const v10377 = EventEmitter2.extend(obj);
        const v10378 = v10376 && v10377;
        v10378;
        return obj;
    } else {
        const v10379 = {};
        this.$events = v10379;
    }
};
const EE2P = EventEmitter2.prototype;
const v10394 = function (name, a, b, c, d, e, f, g) {
    const v10380 = this.$events;
    const v10381 = !v10380;
    if (v10381) {
        return this;
    }
    const v10382 = this.$events;
    var evt = v10382[name];
    if (evt) {
        var clean = false;
        var i = 0;
        var length = evt.length;
        let v10383 = i < length;
        while (v10383) {
            const v10385 = evt[i];
            const v10386 = v10385.$once;
            if (v10386) {
                clean = true;
            }
            const v10387 = evt[i];
            const v10388 = v10387.call(this, a, b, c, d, e, f, g);
            v10388;
            const v10384 = i++;
            v10383 = i < length;
        }
        if (clean) {
            const v10390 = n => {
                const v10389 = n.$once;
                return v10389;
            };
            evt = evt.remove(v10390);
            const v10391 = evt.length;
            if (v10391) {
                const v10392 = this.$events;
                v10392[name] = evt;
            } else {
                const v10393 = this.$events;
                v10393[name] = undefined;
            }
        }
    }
    return this;
};
EE2P.emit = v10394;
const v10404 = function (name, fn) {
    const v10395 = this.$events;
    const v10396 = !v10395;
    if (v10396) {
        const v10397 = {};
        this.$events = v10397;
    }
    const v10398 = this.$events;
    const v10399 = v10398[name];
    if (v10399) {
        const v10400 = this.$events;
        const v10401 = v10400[name];
        const v10402 = v10401.push(fn);
        v10402;
    } else {
        const v10403 = this.$events;
        v10403[name] = [fn];
    }
    return this;
};
EE2P.on = v10404;
const v10406 = function (name, fn) {
    fn.$once = true;
    const v10405 = this.on(name, fn);
    return v10405;
};
EE2P.once = v10406;
const v10414 = function (name, fn) {
    const v10407 = this.$events;
    if (v10407) {
        const v10408 = this.$events;
        var evt = v10408[name];
        if (evt) {
            const v10410 = n => {
                const v10409 = n === fn;
                return v10409;
            };
            evt = evt.remove(v10410);
            const v10411 = evt.length;
            if (v10411) {
                const v10412 = this.$events;
                v10412[name] = evt;
            } else {
                const v10413 = this.$events;
                v10413[name] = undefined;
            }
        }
    }
    return this;
};
EE2P.removeListener = v10414;
const v10419 = function (name) {
    const v10415 = this.$events;
    if (v10415) {
        const v10416 = name === true;
        if (v10416) {
            this.$events = EMPTYOBJECT;
        } else {
            if (name) {
                const v10417 = this.$events;
                v10417[name] = undefined;
            } else {
                const v10418 = {};
                this.$events = v10418;
            }
        }
    }
    return this;
};
EE2P.removeAllListeners = v10419;
const v10425 = function (obj) {
    const v10420 = EE2P.emit;
    obj.emit = v10420;
    const v10421 = EE2P.on;
    obj.on = v10421;
    const v10422 = EE2P.once;
    obj.once = v10422;
    const v10423 = EE2P.removeListener;
    obj.removeListener = v10423;
    const v10424 = EE2P.removeAllListeners;
    obj.removeAllListeners = v10424;
};
EventEmitter2.extend = v10425;
exports.EventEmitter2 = EventEmitter2;
const Chunker = function (name, max) {
    this.name = name;
    this.max = max || 50;
    this.index = 0;
    const v10426 = '{0}-'.format(name);
    this.filename = v10426;
    this.stack = [];
    this.flushing = 0;
    this.pages = 0;
    this.count = 0;
    this.percentage = 0;
    this.autoremove = true;
    this.compress = true;
    const v10427 = F.path;
    const v10428 = this.filename;
    const v10429 = v10427.temp(v10428);
    this.filename = v10429;
};
const CHP = Chunker.prototype;
const v10463 = function (obj) {
    var self = this;
    const v10430 = self.stack;
    const v10431 = v10430.push(obj);
    v10431;
    const v10432 = self.stack;
    var tmp = v10432.length;
    const v10433 = self.max;
    const v10434 = tmp >= v10433;
    if (v10434) {
        const v10435 = self.flushing;
        const v10436 = v10435++;
        v10436;
        const v10437 = self.pages;
        const v10438 = v10437++;
        v10438;
        self.count += tmp;
        const v10439 = self.index;
        const v10440 = v10439++;
        var index = v10440;
        const v10441 = self.compress;
        if (v10441) {
            const v10442 = self.stack;
            const v10443 = JSON.stringify(v10442);
            const v10444 = Buffer.from(v10443, ENCODING);
            const v10452 = function (err, buffer) {
                const v10445 = self.filename;
                const v10446 = v10445 + index;
                const v10447 = v10446 + '.chunker';
                const v10450 = () => {
                    const v10448 = self.flushing;
                    const v10449 = v10448--;
                    return v10449;
                };
                const v10451 = Fs.writeFile(v10447, buffer, v10450);
                v10451;
            };
            const v10453 = Zlib.deflate(v10444, v10452);
            v10453;
        } else {
            const v10454 = self.filename;
            const v10455 = v10454 + index;
            const v10456 = v10455 + '.chunker';
            const v10457 = self.stack;
            const v10458 = JSON.stringify(v10457);
            const v10461 = () => {
                const v10459 = self.flushing;
                const v10460 = v10459--;
                return v10460;
            };
            const v10462 = Fs.writeFile(v10456, v10458, v10461);
            v10462;
        }
        self.stack = [];
    }
    return self;
};
CHP.write = v10463;
CHP.append = CHP.write;
const v10493 = function () {
    var self = this;
    const v10464 = self.stack;
    var tmp = v10464.length;
    if (tmp) {
        const v10465 = self.flushing;
        const v10466 = v10465++;
        v10466;
        const v10467 = self.pages;
        const v10468 = v10467++;
        v10468;
        self.count += tmp;
        const v10469 = self.index;
        const v10470 = v10469++;
        var index = v10470;
        const v10471 = self.compress;
        if (v10471) {
            const v10472 = self.stack;
            const v10473 = JSON.stringify(v10472);
            const v10474 = Buffer.from(v10473, ENCODING);
            const v10482 = function (err, buffer) {
                const v10475 = self.filename;
                const v10476 = v10475 + index;
                const v10477 = v10476 + '.chunker';
                const v10480 = () => {
                    const v10478 = self.flushing;
                    const v10479 = v10478--;
                    return v10479;
                };
                const v10481 = Fs.writeFile(v10477, buffer, v10480);
                v10481;
            };
            const v10483 = Zlib.deflate(v10474, v10482);
            v10483;
        } else {
            const v10484 = self.filename;
            const v10485 = v10484 + index;
            const v10486 = v10485 + '.chunker';
            const v10487 = self.stack;
            const v10488 = JSON.stringify(v10487);
            const v10491 = () => {
                const v10489 = self.flushing;
                const v10490 = v10489--;
                return v10490;
            };
            const v10492 = Fs.writeFile(v10486, v10488, v10491);
            v10492;
        }
        self.stack = [];
    }
    return self;
};
CHP.end = v10493;
const v10510 = function (onItem, onEnd, indexer) {
    var self = this;
    const v10494 = indexer == null;
    if (v10494) {
        self.percentage = 0;
        indexer = 0;
    }
    const v10495 = self.index;
    const v10496 = indexer >= v10495;
    if (v10496) {
        const v10497 = onEnd();
        const v10498 = onEnd && v10497;
        return v10498;
    }
    const v10499 = indexer++;
    const v10508 = function (err, items) {
        const v10500 = self.pages;
        const v10501 = indexer / v10500;
        const v10502 = v10501 * 100;
        const v10503 = Math.ceil(v10502);
        self.percentage = v10503;
        const v10505 = () => {
            const v10504 = self.each(onItem, onEnd, indexer);
            return v10504;
        };
        const v10506 = indexer - 1;
        const v10507 = onItem(items, v10505, v10506);
        v10507;
    };
    const v10509 = self.read(v10499, v10508);
    v10509;
    return self;
};
CHP.each = v10510;
const v10536 = function (index, callback) {
    var self = this;
    const v10511 = self.flushing;
    if (v10511) {
        const v10513 = () => {
            const v10512 = self.read(index, callback);
            return v10512;
        };
        const v10514 = setTimeout(v10513, 300);
        self.flushing_timeout = v10514;
        return;
    }
    const v10515 = self.filename;
    const v10516 = v10515 + index;
    var filename = v10516 + '.chunker';
    const v10534 = function (err, data) {
        if (err) {
            const v10517 = callback(null, EMPTYARRAY);
            v10517;
            return;
        }
        const v10518 = self.compress;
        if (v10518) {
            const v10526 = function (err, data) {
                if (err) {
                    const v10519 = callback(null, EMPTYARRAY);
                    v10519;
                } else {
                    const v10520 = self.autoremove;
                    const v10521 = Fs.unlink(filename, NOOP);
                    const v10522 = v10520 && v10521;
                    v10522;
                    const v10523 = data.toString('utf8');
                    const v10524 = v10523.parseJSON(true);
                    const v10525 = callback(null, v10524);
                    v10525;
                }
            };
            const v10527 = Zlib.inflate(data, v10526);
            v10527;
        } else {
            const v10528 = self.autoremove;
            const v10529 = Fs.unlink(filename, NOOP);
            const v10530 = v10528 && v10529;
            v10530;
            const v10531 = data.toString('utf8');
            const v10532 = v10531.parseJSON(true);
            const v10533 = callback(null, v10532);
            v10533;
        }
    };
    const v10535 = Fs.readFile(filename, v10534);
    v10535;
    return self;
};
CHP.read = v10536;
const v10547 = function () {
    var files = [];
    var i = 0;
    const v10537 = this.index;
    let v10538 = i < v10537;
    while (v10538) {
        const v10540 = this.filename;
        const v10541 = v10540 + i;
        const v10542 = v10541 + '.chunker';
        const v10543 = files.push(v10542);
        v10543;
        const v10539 = i++;
        v10538 = i < v10537;
    }
    const v10545 = (filename, next) => {
        const v10544 = Fs.unlink(filename, next);
        return v10544;
    };
    const v10546 = files.wait(v10545);
    v10546;
    return this;
};
CHP.clear = v10547;
const v10551 = function () {
    const v10548 = this.clear();
    v10548;
    this.indexer = 0;
    this.flushing = 0;
    const v10549 = this.flushing_timeout;
    const v10550 = clearTimeout(v10549);
    v10550;
    this.stack = null;
    return this;
};
CHP.destroy = v10551;
const v10553 = function (name, max) {
    const v10552 = new Chunker(name, max);
    return v10552;
};
exports.chunker = v10553;
exports.Chunker = Chunker;
const v10562 = function (obj) {
    const v10554 = obj == null;
    if (v10554) {
        return EMPTYARRAY;
    }
    var keys = Object.keys(obj);
    var output = [];
    var i = 0;
    var length = keys.length;
    let v10555 = i < length;
    while (v10555) {
        const v10557 = keys[i];
        const v10558 = keys[i];
        const v10559 = obj[v10558];
        const v10560 = {
            key: v10557,
            value: v10559
        };
        const v10561 = output.push(v10560);
        v10561;
        const v10556 = i++;
        v10555 = i < length;
    }
    return output;
};
exports.ObjectToArray = v10562;
const v10563 = NODEVERSION > 699;
if (v10563) {
    const v10566 = size => {
        const v10564 = size || 0;
        const v10565 = Buffer.alloc(v10564);
        return v10565;
    };
    exports.createBufferSize = v10566;
    const v10569 = (val, type) => {
        const v10567 = val || '';
        const v10568 = Buffer.from(v10567, type);
        return v10568;
    };
    exports.createBuffer = v10569;
} else {
    const v10572 = size => {
        const v10570 = size || 0;
        const v10571 = new Buffer(v10570);
        return v10571;
    };
    exports.createBufferSize = v10572;
    const v10575 = (val, type) => {
        const v10573 = val || '';
        const v10574 = new Buffer(v10573, type);
        return v10574;
    };
    exports.createBuffer = v10575;
}
const Callback = function (count, callback) {
    this.pending = count;
    this.$callback = callback;
};
const CP = Callback.prototype;
const v10576 = function (callback) {
    this.$callback = callback;
    return this;
};
CP.done = v10576;
const v10584 = function () {
    var self = this;
    const v10577 = self.pending;
    const v10578 = v10577--;
    v10578;
    const v10579 = self.pending;
    const v10580 = !v10579;
    const v10581 = self.$callback;
    const v10582 = v10580 && v10581;
    if (v10582) {
        const v10583 = self.$callback();
        v10583;
        self.$callback = null;
    }
    return self;
};
CP.next = v10584;
global.Callback = Callback;
const v10586 = function (count, callback) {
    const v10585 = new Callback(count, callback);
    return v10585;
};
exports.Callback = v10586;
const Reader = function () {
    var t = this;
    const v10590 = function (builder) {
        const v10587 = t.reader;
        if (v10587) {
            const v10588 = t.reader;
            const v10589 = v10588.add(builder);
            v10589;
        } else {
            t.reader = new framework_nosql.NoSQLReader(builder);
        }
    };
    t.$add = v10590;
};
const RP = Reader.prototype;
const v10593 = function () {
    var self = this;
    const v10591 = self.reader;
    const v10592 = v10591.done();
    v10592;
    return self;
};
RP.done = v10593;
const v10596 = function () {
    var self = this;
    const v10594 = self.reader;
    const v10595 = v10594.reset();
    v10595;
    return self;
};
RP.reset = v10596;
const v10605 = function (data) {
    const v10597 = data == null;
    if (v10597) {
        const v10598 = this.reader;
        const v10599 = v10598.done();
        v10599;
    } else {
        const v10600 = this.reader;
        const v10601 = data instanceof Array;
        const v10602 = [data];
        let v10603;
        if (v10601) {
            v10603 = data;
        } else {
            v10603 = v10602;
        }
        const v10604 = v10600.compare(v10603);
        v10604;
    }
    return this;
};
RP.push = v10605;
const v10608 = function () {
    var self = this;
    var builder = new framework_nosql.DatabaseBuilder();
    const v10606 = self.$add;
    const v10607 = setImmediate(v10606, builder);
    v10607;
    return builder;
};
RP.find = v10608;
const v10610 = function () {
    var builder = this.find();
    const v10609 = builder.$options;
    v10609.readertype = 1;
    return builder;
};
RP.count = v10610;
const v10613 = function (type, field) {
    const v10611 = this.find();
    const v10612 = v10611.scalar(type, field);
    return v10612;
};
RP.scalar = v10613;
const v10615 = function () {
    const v10614 = new Reader();
    return v10614;
};
exports.reader = v10615;
const BUFEMPTYJSON = Buffer.from('{}');
const v10616 = exports.wait;
global.WAIT = v10616;
const v10617 = global.F;
const v10618 = !v10617;
const v10619 = require('./index');
const v10620 = v10618 && v10619;
v10620;