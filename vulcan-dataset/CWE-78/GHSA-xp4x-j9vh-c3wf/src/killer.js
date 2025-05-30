"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const os_1 = require("os");
const pidFromPort = require("pid-from-port");
class Killer {
    constructor(ports, options) {
        this.ports = ports;
        this.options = options;
    }
    kill() {
        return __awaiter(this, void 0, void 0, function* () {
            const killFunc = os_1.platform() === 'win32' ? this.win32Kill : this.unixKill;
            const promises = this.ports.map(killFunc);
            return Promise.all(promises);
        });
    }
    win32Kill(port) {
        return __awaiter(this, void 0, void 0, function* () {
            const pid = yield pidFromPort(port);
            return new Promise((resolve, reject) => {
                const taskkill = child_process_1.spawn('TASKKILL', ['/f', '/t', '/pid', pid.toString()]);
                taskkill.stdout.on('data', (data) => console.log(data.toString()));
                taskkill.stderr.on('data', (data) => console.error(data.toString()));
                taskkill.on('close', (code, signal) => {
                    if (code !== 0) {
                        reject(`taskkill process exited with code ${code} and signal ${signal}`);
                        return;
                    }
                    resolve();
                });
                taskkill.on('error', (err) => reject(err));
            });
        });
    }
    unixKill(port) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const lsof = child_process_1.spawn('lsof', ['-i', `tcp:${port}`]);
                const grep = child_process_1.spawn('grep', ['LISTEN']);
                const awk = child_process_1.spawn('awk', ['{print $2}']);
                const xargs = child_process_1.spawn('xargs', ['kill', '-9']);
                lsof.stdout.pipe(grep.stdin);
                lsof.stderr.on('data', logStderrData('lsof'));
                grep.stdout.pipe(awk.stdin);
                grep.stderr.on('data', logStderrData('grep'));
                awk.stdout.pipe(xargs.stdin);
                awk.stderr.on('data', logStderrData('awk'));
                xargs.stdout.pipe(process.stdin);
                xargs.stderr.on('data', logStderrData('xargs'));
                xargs.on('close', (code) => {
                    if (code !== 0) {
                        reject();
                        return;
                    }
                    resolve();
                });
                function logStderrData(command) {
                    return (data) => console.error(`${command} - ${data.toString()}`);
                }
            });
        });
    }
}
exports.Killer = Killer;
