'use strict';
const wrote = require('wrote');
const v176 = require('stream');
const Readable = v176.Readable;
const executeWithRs = function (rs, args, executeCommand) {
    const v177 = rs instanceof Readable;
    const v178 = !v177;
    if (v178) {
        const v179 = new Error('Please pass a readable stream');
        const v180 = Promise.reject(v179);
        return v180;
    }
    const v181 = typeof executeCommand;
    const v182 = v181 !== 'function';
    if (v182) {
        const v183 = new Error('executeCommand must be a function');
        const v184 = Promise.reject(v183);
        return v184;
    }
    let ws;
    const v185 = wrote();
    const v189 = res => {
        ws = res;
        const v186 = rs.pipe(ws);
        v186;
        const v187 = ws.path;
        const v188 = executeCommand(v187, args);
        return v188;
    };
    const v190 = v185.then(v189);
    const v194 = res => {
        const v191 = wrote.erase(ws);
        const v192 = () => {
            return res;
        };
        const v193 = v191.then(v192);
        return v193;
    };
    const v198 = err => {
        const v195 = wrote.erase(ws);
        const v196 = () => {
            throw err;
        };
        const v197 = v195.then(v196);
        return v197;
    };
    const v199 = v190.then(v194, v198);
    return v199;
};
module.exports = executeWithRs;