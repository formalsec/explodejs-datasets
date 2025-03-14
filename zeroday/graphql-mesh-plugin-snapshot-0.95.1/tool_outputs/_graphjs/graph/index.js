'use strict';
const v68 = { value: true };
const v69 = Object.defineProperty(exports, '__esModule', v68);
v69;
const minimatch_1 = require('minimatch');
const cross_helpers_1 = require('@graphql-mesh/cross-helpers');
const string_interpolation_1 = require('@graphql-mesh/string-interpolation');
const utils_1 = require('@graphql-mesh/utils');
const fetch_1 = require('@whatwg-node/fetch');
const calculateCacheKey = function (url, options) {
    const v70 = string_interpolation_1.hashObject;
    const v71 = {
        url,
        options
    };
    const v72 = (0, v70)(v71);
    return v72;
};
const useSnapshot = function (pluginOptions) {
    const v73 = pluginOptions.if;
    const v74 = typeof v73;
    const v75 = v74 === 'boolean';
    if (v75) {
        const v76 = pluginOptions.if;
        const v77 = !v76;
        if (v77) {
            const v78 = {};
            return v78;
        }
    }
    const v79 = pluginOptions.if;
    const v80 = typeof v79;
    const v81 = v80 === 'string';
    if (v81) {
        const v82 = pluginOptions.if;
        const v83 = 'return ' + v82;
        const v84 = new Function('env', v83);
        const v85 = cross_helpers_1.process;
        const v86 = v85.env;
        const v87 = v84(v86);
        const v88 = !v87;
        if (v88) {
            const v89 = {};
            return v89;
        }
    }
    const v90 = pluginOptions.apply;
    const v92 = glob => {
        const v91 = new minimatch_1.Minimatch(glob);
        return v91;
    };
    const matches = v90.map(v92);
    const v93 = pluginOptions.outputDir;
    const snapshotsDir = v93 || '__snapshots__';
    const v133 = async function ({url, options, setFetchFn}) {
        const v95 = matcher => {
            const v94 = matcher.match(url);
            return v94;
        };
        const v96 = matches.some(v95);
        if (v96) {
            const snapshotFileName = calculateCacheKey(url, options);
            const v97 = cross_helpers_1.path;
            const v98 = pluginOptions.baseDir;
            const v99 = `${ snapshotFileName }.json`;
            const snapshotPath = v97.join(v98, snapshotsDir, v99);
            const v100 = utils_1.pathExists;
            if (await (0, v100)(snapshotPath)) {
                const v109 = async () => {
                    const v101 = cross_helpers_1.fs;
                    const v102 = v101.promises;
                    const snapshotFile = await v102.readFile(snapshotPath, 'utf-8');
                    const snapshot = JSON.parse(snapshotFile);
                    const v103 = snapshot.text;
                    const v104 = snapshot.headersObj;
                    const v105 = snapshot.status;
                    const v106 = snapshot.statusText;
                    const v107 = {
                        headers: v104,
                        status: v105,
                        statusText: v106
                    };
                    const v108 = new fetch_1.Response(v103, v107);
                    return v108;
                };
                const v110 = setFetchFn(v109);
                v110;
                const v111 = () => {
                };
                return v111;
            }
            const v131 = async ({response, setResponse}) => {
                const v112 = response.headers;
                const contentType = v112.get('content-type');
                const v113 = contentType.includes('json');
                const v114 = contentType.includes('text');
                const v115 = v113 || v114;
                const v116 = contentType.includes('xml');
                const v117 = v115 || v116;
                if (v117) {
                    const v118 = utils_1.getHeadersObj;
                    const v119 = response.headers;
                    const v120 = (0, v118)(v119);
                    const v121 = response.status;
                    const v122 = response.statusText;
                    const snapshot = {};
                    snapshot.text = await response.text();
                    snapshot.headersObj = v120;
                    snapshot.status = v121;
                    snapshot.statusText = v122;
                    const v123 = utils_1.writeJSON;
                    await (0, v123)(snapshotPath, snapshot, null, 2);
                    const v124 = snapshot.text;
                    const v125 = snapshot.headersObj;
                    const v126 = snapshot.status;
                    const v127 = snapshot.statusText;
                    const v128 = {
                        headers: v125,
                        status: v126,
                        statusText: v127
                    };
                    const v129 = new fetch_1.Response(v124, v128);
                    const v130 = setResponse(v129);
                    v130;
                }
            };
            return v131;
        }
        const v132 = () => {
        };
        return v132;
    };
    const v134 = {};
    v134.onFetch = v133;
    return v134;
};
exports.default = useSnapshot;