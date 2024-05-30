'use strict';
const v145 = this.__awaiter;
const v146 = this && v145;
const v169 = function (thisArg, _arguments, P, generator) {
    const v147 = P || (P = Promise);
    const v167 = function (resolve, reject) {
        const fulfilled = function (value) {
            try {
                const v148 = generator.next(value);
                const v149 = step(v148);
                v149;
            } catch (e) {
                const v150 = reject(e);
                v150;
            }
        };
        const rejected = function (value) {
            try {
                const v151 = generator['throw'](value);
                const v152 = step(v151);
                v152;
            } catch (e) {
                const v153 = reject(e);
                v153;
            }
        };
        const step = function (result) {
            const v154 = result.done;
            const v155 = result.value;
            const v156 = resolve(v155);
            const v159 = function (resolve) {
                const v157 = result.value;
                const v158 = resolve(v157);
                v158;
            };
            const v160 = new P(v159);
            const v161 = v160.then(fulfilled, rejected);
            let v162;
            if (v154) {
                v162 = v156;
            } else {
                v162 = v161;
            }
            v162;
        };
        const v163 = [];
        const v164 = _arguments || v163;
        const v165 = (generator = generator.apply(thisArg, v164)).next();
        const v166 = step(v165);
        v166;
    };
    const v168 = new v147(v167);
    return v168;
};
var __awaiter = v146 || v169;
const v170 = { value: true };
const v171 = Object.defineProperty(exports, '__esModule', v170);
v171;
const helpers_1 = require('./helpers');
const killer_1 = require('./killer');
const killPortProcess = function (input, options = {}) {
    const v172 = void 0;
    const v173 = void 0;
    const v179 = function* () {
        try {
            const validInput = helpers_1.IsInputValid(input);
            const v174 = !validInput;
            if (v174) {
                const v175 = new helpers_1.InvalidInputError('Invalid input', input);
                throw v175;
            }
            const mergedOptions = helpers_1.mergeOptions(options);
            const toNumber = value => {
                const v176 = Number(value);
                return v176;
            };
            const v177 = helpers_1.arrayifyInput(input);
            const ports = v177.map(toNumber);
            const killer = new killer_1.Killer(ports, mergedOptions);
            const v178 = killer.kill();
            yield v178;
        } catch (error) {
            throw error;
        }
    };
    const v180 = __awaiter(this, v172, v173, v179);
    return v180;
};
exports.killPortProcess = killPortProcess;