const fs = require('fs');
const os = require('os');
const path = require('path');
const lunr = require('lunr');
const v176 = require('worker_threads');
const Worker = v176.Worker;
const Guage = require('gauge');
const utils = require('./utils');
const v239 = function (context, options) {
    const v177 = {};
    options = options || v177;
    let languages;
    const v178 = Date.now();
    const guid = String(v178);
    const fileNames = {};
    fileNames.searchDoc = `search-doc-${ guid }.json`;
    fileNames.lunrIndex = `lunr-index-${ guid }.json`;
    const v180 = function () {
        const v179 = path.resolve(__dirname, './theme');
        return v179;
    };
    const v185 = function (config) {
        const v181 = config.resolve;
        const v182 = v181.alias;
        const generatedFilesDir = v182['@generated'];
        const v183 = options.languages;
        languages = utils.generateLunrClientJS(generatedFilesDir, v183);
        const v184 = {};
        return v184;
    };
    const v188 = async function ({actions}) {
        const v186 = { 'fileNames': fileNames };
        const v187 = actions.setGlobalData(v186);
        v187;
    };
    const v237 = async function ({routesPaths = [], outDir, baseUrl}) {
        const v189 = console.log('docusaurus-lunr-search:: Building search docs and lunr index file');
        v189;
        const v190 = console.time('docusaurus-lunr-search:: Indexing time');
        v190;
        const v191 = utils.getFilePaths(routesPaths, outDir, baseUrl, options);
        const files = v191[0];
        const meta = v191[1];
        const v192 = meta.excludedCount;
        if (v192) {
            const v193 = meta.excludedCount;
            const v194 = `docusaurus-lunr-search:: ${ v193 } documents were excluded from the search by excludeRoutes config`;
            const v195 = console.log(v194);
            v195;
        }
        const searchDocuments = [];
        const v206 = function (builder) {
            if (languages) {
                const v196 = this.use(languages);
                v196;
            }
            const v197 = this.ref('id');
            v197;
            const v198 = { boost: 200 };
            const v199 = this.field('title', v198);
            v199;
            const v200 = { boost: 2 };
            const v201 = this.field('content', v200);
            v201;
            const v202 = { boost: 100 };
            const v203 = this.field('keywords', v202);
            v203;
            this.metadataWhitelist = ['position'];
            const v204 = builder;
            const build = v204.build;
            const v205 = () => {
                builder.build = build;
                return builder;
            };
            builder.build = v205;
        };
        const lunrBuilder = lunr(v206);
        const addToSearchData = d => {
            const v207 = searchDocuments.length;
            const v208 = d.title;
            const v209 = d.content;
            const v210 = d.keywords;
            const v211 = {
                id: v207,
                title: v208,
                content: v209,
                keywords: v210
            };
            const v212 = lunrBuilder.add(v211);
            v212;
            const v213 = searchDocuments.push(d);
            v213;
        };
        const indexedDocuments = await buildSearchData(files, addToSearchData);
        const lunrIndex = lunrBuilder.build();
        const v214 = console.timeEnd('docusaurus-lunr-search:: Indexing time');
        v214;
        const v215 = files.length;
        const v216 = `docusaurus-lunr-search:: indexed ${ indexedDocuments } documents out of ${ v215 }`;
        const v217 = console.log(v216);
        v217;
        const searchDocFileContents = JSON.stringify(searchDocuments);
        const v218 = console.log('docusaurus-lunr-search:: writing search-doc.json');
        v218;
        const v219 = path.join(outDir, 'search-doc.json');
        const v220 = fs.writeFileSync(v219, searchDocFileContents);
        v220;
        const v221 = fileNames.searchDoc;
        const v222 = `docusaurus-lunr-search:: writing ${ v221 }`;
        const v223 = console.log(v222);
        v223;
        const v224 = fileNames.searchDoc;
        const v225 = path.join(outDir, v224);
        const v226 = fs.writeFileSync(v225, searchDocFileContents);
        v226;
        const lunrIndexFileContents = JSON.stringify(lunrIndex);
        const v227 = console.log('docusaurus-lunr-search:: writing lunr-index.json');
        v227;
        const v228 = path.join(outDir, 'lunr-index.json');
        const v229 = fs.writeFileSync(v228, lunrIndexFileContents);
        v229;
        const v230 = fileNames.lunrIndex;
        const v231 = `docusaurus-lunr-search:: writing ${ v230 }`;
        const v232 = console.log(v231);
        v232;
        const v233 = fileNames.lunrIndex;
        const v234 = path.join(outDir, v233);
        const v235 = fs.writeFileSync(v234, lunrIndexFileContents);
        v235;
        const v236 = console.log('docusaurus-lunr-search:: End of process');
        v236;
    };
    const v238 = {};
    v238.name = 'docusaurus-lunr-search';
    v238.getThemePath = v180;
    v238.configureWebpack = v185;
    v238.contentLoaded = v188;
    v238.postBuild = v237;
    return v238;
};
module.exports = v239;
const buildSearchData = function (files, addToSearchData) {
    const v240 = files.length;
    const v241 = !v240;
    if (v241) {
        const v242 = Promise.resolve();
        return v242;
    }
    let activeWorkersCount = 0;
    const v243 = os.cpus();
    const v244 = v243.length;
    const workerCount = Math.max(2, v244);
    const v245 = files.length;
    const v246 = Math.min(workerCount, v245);
    const v247 = `docusaurus-lunr-search:: Start scanning documents in ${ v246 } threads`;
    const v248 = console.log(v247);
    v248;
    const gauge = new Guage();
    const v249 = gauge.show('scanning documents...');
    v249;
    let indexedDocuments = 0;
    const v286 = (resolve, reject) => {
        let nextIndex = 0;
        const handleMessage = ([isDoc, payload], worker) => {
            const v250 = gauge.pulse();
            v250;
            if (isDoc) {
                const v251 = addToSearchData(payload);
                v251;
            } else {
                indexedDocuments += payload;
                const v252 = files.length;
                const v253 = `scanned ${ nextIndex } files out of ${ v252 }`;
                const v254 = files.length;
                const v255 = nextIndex / v254;
                const v256 = gauge.show(v253, v255);
                v256;
                const v257 = files.length;
                const v258 = nextIndex < v257;
                if (v258) {
                    const v259 = nextIndex++;
                    const v260 = files[v259];
                    const v261 = worker.postMessage(v260);
                    v261;
                } else {
                    const v262 = worker.postMessage(null);
                    v262;
                }
            }
        };
        let i = 0;
        let v263 = i < workerCount;
        while (v263) {
            const v265 = files.length;
            const v266 = nextIndex >= v265;
            if (v266) {
                break;
            }
            const v267 = path.join(__dirname, 'html-to-doc.js');
            const worker = new Worker(v267);
            const v268 = worker.on('error', reject);
            v268;
            const v270 = message => {
                const v269 = handleMessage(message, worker);
                v269;
            };
            const v271 = worker.on('message', v270);
            v271;
            const v279 = code => {
                const v272 = code !== 0;
                if (v272) {
                    const v273 = new Error(`Scanner stopped with exit code ${ code }`);
                    const v274 = reject(v273);
                    v274;
                } else {
                    const v275 = activeWorkersCount--;
                    v275;
                    const v276 = activeWorkersCount <= 0;
                    if (v276) {
                        const v277 = gauge.hide();
                        v277;
                        const v278 = resolve(indexedDocuments);
                        v278;
                    }
                }
            };
            const v280 = worker.on('exit', v279);
            v280;
            const v281 = activeWorkersCount++;
            v281;
            const v282 = nextIndex++;
            const v283 = files[v282];
            const v284 = worker.postMessage(v283);
            v284;
            const v285 = gauge.pulse();
            v285;
            const v264 = i++;
            v263 = i < workerCount;
        }
    };
    const v287 = new Promise(v286);
    return v287;
};