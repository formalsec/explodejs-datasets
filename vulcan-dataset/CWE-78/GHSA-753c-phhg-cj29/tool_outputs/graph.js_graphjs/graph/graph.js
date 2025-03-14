'use strict';
const path = require('path');
const graphviz = require('graphviz');
const v109 = require('child_process');
const exec = v109.exec;
const v110 = require('fs');
const writeFile = v110.writeFile;
const setNodeColor = function (node, color) {
    const v111 = node.set('color', color);
    v111;
    const v112 = node.set('fontcolor', color);
    v112;
};
const checkGraphvizInstalled = function (config) {
    const v113 = config.graphVizPath;
    if (v113) {
        const v114 = config.graphVizPath;
        const cmd = path.join(v114, 'gvpr -V');
        const v115 = exec(cmd);
        const v118 = () => {
            const v116 = 'Could not execute ' + cmd;
            const v117 = new Error(v116);
            throw v117;
        };
        const v119 = v115.catch(v118);
        return v119;
    }
    const v120 = exec('gvpr -V');
    const v123 = error => {
        const v121 = 'Graphviz could not be found. Ensure that "gvpr" is in your $PATH.\n' + error;
        const v122 = new Error(v121);
        throw v122;
    };
    const v124 = v120.catch(v123);
    return v124;
};
const createGraphvizOptions = function (config) {
    const v125 = config.graphVizOptions;
    const v126 = {};
    const graphVizOptions = v125 || v126;
    const v127 = config.rankdir;
    const v128 = config.layout;
    const v129 = config.backgroundColor;
    const v130 = {
        overlap: false,
        pad: 0.3,
        rankdir: v127,
        layout: v128,
        bgcolor: v129
    };
    const v131 = graphVizOptions.G;
    const v132 = Object.assign(v130, v131);
    const v133 = config.edgeColor;
    const v134 = { color: v133 };
    const v135 = graphVizOptions.E;
    const v136 = Object.assign(v134, v135);
    const v137 = config.fontName;
    const v138 = config.fontSize;
    const v139 = config.nodeColor;
    const v140 = config.nodeShape;
    const v141 = config.nodeStyle;
    const v142 = config.nodeColor;
    const v143 = {
        fontname: v137,
        fontsize: v138,
        color: v139,
        shape: v140,
        style: v141,
        height: 0,
        fontcolor: v142
    };
    const v144 = graphVizOptions.N;
    const v145 = Object.assign(v143, v144);
    const v146 = {};
    v146.G = v132;
    v146.E = v136;
    v146.N = v145;
    return v146;
};
const createGraph = function (modules, circular, config, options) {
    const g = graphviz.digraph('G');
    const nodes = {};
    const v148 = (a, b) => {
        const v147 = a.concat(b);
        return v147;
    };
    const v149 = [];
    const cyclicModules = circular.reduce(v148, v149);
    const v150 = config.graphVizPath;
    if (v150) {
        const v151 = config.graphVizPath;
        const v152 = g.setGraphVizPath(v151);
        v152;
    }
    const v153 = Object.keys(modules);
    const v180 = id => {
        const v154 = nodes[id];
        const v155 = g.addNode(id);
        nodes[id] = v154 || v155;
        const v156 = modules[id];
        const v157 = v156.length;
        const v158 = !v157;
        if (v158) {
            const v159 = nodes[id];
            const v160 = config.noDependencyColor;
            const v161 = setNodeColor(v159, v160);
            v161;
        } else {
            const v162 = cyclicModules.indexOf(id);
            const v163 = v162 >= 0;
            if (v163) {
                const v164 = nodes[id];
                const v165 = config.cyclicNodeColor;
                const v166 = setNodeColor(v164, v165);
                v166;
            }
        }
        const v167 = modules[id];
        const v178 = depId => {
            const v168 = nodes[depId];
            const v169 = g.addNode(depId);
            nodes[depId] = v168 || v169;
            const v170 = modules[depId];
            const v171 = !v170;
            if (v171) {
                const v172 = nodes[depId];
                const v173 = config.noDependencyColor;
                const v174 = setNodeColor(v172, v173);
                v174;
            }
            const v175 = nodes[id];
            const v176 = nodes[depId];
            const v177 = g.addEdge(v175, v176);
            v177;
        };
        const v179 = v167.forEach(v178);
        v179;
    };
    const v181 = v153.forEach(v180);
    v181;
    const v186 = (resolve, reject) => {
        const v184 = (code, out, err) => {
            const v182 = new Error(err);
            const v183 = reject(v182);
            v183;
        };
        const v185 = g.output(options, resolve, v184);
        v185;
    };
    const v187 = new Promise(v186);
    return v187;
};
const v188 = module.exports;
const v193 = function (modules, circular, config) {
    const options = createGraphvizOptions(config);
    options.type = 'svg';
    const v189 = checkGraphvizInstalled(config);
    const v191 = () => {
        const v190 = createGraph(modules, circular, config, options);
        return v190;
    };
    const v192 = v189.then(v191);
    return v192;
};
v188.svg = v193;
const v194 = module.exports;
const v207 = function (modules, circular, imagePath, config) {
    const options = createGraphvizOptions(config);
    const v195 = path.extname(imagePath);
    const v196 = v195.replace('.', '');
    options.type = v196 || 'png';
    const v197 = checkGraphvizInstalled(config);
    const v205 = () => {
        const v198 = createGraph(modules, circular, config, options);
        const v200 = image => {
            const v199 = writeFile(imagePath, image);
            return v199;
        };
        const v201 = v198.then(v200);
        const v203 = () => {
            const v202 = path.resolve(imagePath);
            return v202;
        };
        const v204 = v201.then(v203);
        return v204;
    };
    const v206 = v197.then(v205);
    return v206;
};
v194.image = v207;
const v208 = module.exports;
const v216 = function (modules, circular, config) {
    const options = createGraphvizOptions(config);
    options.type = 'dot';
    const v209 = checkGraphvizInstalled(config);
    const v211 = () => {
        const v210 = createGraph(modules, circular, config, options);
        return v210;
    };
    const v212 = v209.then(v211);
    const v214 = output => {
        const v213 = output.toString('utf8');
        return v213;
    };
    const v215 = v212.then(v214);
    return v215;
};
v208.dot = v216;