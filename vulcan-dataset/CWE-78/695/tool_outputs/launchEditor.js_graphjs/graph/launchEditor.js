'use strict';
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const os = require('os');
const chalk = require('chalk');
const shellQuote = require('shell-quote');
const isTerminalEditor = function (editor) {
    switch (editor) {
    case 'vim':
    case 'emacs':
    case 'nano':
        return true;
    }
    return false;
};
const COMMON_EDITORS_OSX = {};
COMMON_EDITORS_OSX['/Applications/Atom.app/Contents/MacOS/Atom'] = 'atom';
COMMON_EDITORS_OSX['/Applications/Atom Beta.app/Contents/MacOS/Atom Beta'] = '/Applications/Atom Beta.app/Contents/MacOS/Atom Beta';
COMMON_EDITORS_OSX['/Applications/Brackets.app/Contents/MacOS/Brackets'] = 'brackets';
COMMON_EDITORS_OSX['/Applications/Sublime Text.app/Contents/MacOS/Sublime Text'] = '/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl';
COMMON_EDITORS_OSX['/Applications/Sublime Text Dev.app/Contents/MacOS/Sublime Text'] = '/Applications/Sublime Text Dev.app/Contents/SharedSupport/bin/subl';
COMMON_EDITORS_OSX['/Applications/Sublime Text 2.app/Contents/MacOS/Sublime Text 2'] = '/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl';
COMMON_EDITORS_OSX['/Applications/Visual Studio Code.app/Contents/MacOS/Electron'] = 'code';
COMMON_EDITORS_OSX['/Applications/Visual Studio Code - Insiders.app/Contents/MacOS/Electron'] = 'code-insiders';
COMMON_EDITORS_OSX['/Applications/AppCode.app/Contents/MacOS/appcode'] = '/Applications/AppCode.app/Contents/MacOS/appcode';
COMMON_EDITORS_OSX['/Applications/CLion.app/Contents/MacOS/clion'] = '/Applications/CLion.app/Contents/MacOS/clion';
COMMON_EDITORS_OSX['/Applications/IntelliJ IDEA.app/Contents/MacOS/idea'] = '/Applications/IntelliJ IDEA.app/Contents/MacOS/idea';
COMMON_EDITORS_OSX['/Applications/PhpStorm.app/Contents/MacOS/phpstorm'] = '/Applications/PhpStorm.app/Contents/MacOS/phpstorm';
COMMON_EDITORS_OSX['/Applications/PyCharm.app/Contents/MacOS/pycharm'] = '/Applications/PyCharm.app/Contents/MacOS/pycharm';
COMMON_EDITORS_OSX['/Applications/PyCharm CE.app/Contents/MacOS/pycharm'] = '/Applications/PyCharm CE.app/Contents/MacOS/pycharm';
COMMON_EDITORS_OSX['/Applications/RubyMine.app/Contents/MacOS/rubymine'] = '/Applications/RubyMine.app/Contents/MacOS/rubymine';
COMMON_EDITORS_OSX['/Applications/WebStorm.app/Contents/MacOS/webstorm'] = '/Applications/WebStorm.app/Contents/MacOS/webstorm';
COMMON_EDITORS_OSX['/Applications/MacVim.app/Contents/MacOS/MacVim'] = 'mvim';
const COMMON_EDITORS_LINUX = {};
COMMON_EDITORS_LINUX.atom = 'atom';
COMMON_EDITORS_LINUX.Brackets = 'brackets';
COMMON_EDITORS_LINUX.code = 'code';
COMMON_EDITORS_LINUX['code-insiders'] = 'code-insiders';
COMMON_EDITORS_LINUX.emacs = 'emacs';
COMMON_EDITORS_LINUX['idea.sh'] = 'idea';
COMMON_EDITORS_LINUX['phpstorm.sh'] = 'phpstorm';
COMMON_EDITORS_LINUX['pycharm.sh'] = 'pycharm';
COMMON_EDITORS_LINUX['rubymine.sh'] = 'rubymine';
COMMON_EDITORS_LINUX.sublime_text = 'sublime_text';
COMMON_EDITORS_LINUX.vim = 'vim';
COMMON_EDITORS_LINUX['webstorm.sh'] = 'webstorm';
const COMMON_EDITORS_WIN = [
    'Brackets.exe',
    'Code.exe',
    'Code - Insiders.exe',
    'atom.exe',
    'sublime_text.exe',
    'notepad++.exe',
    'clion.exe',
    'clion64.exe',
    'idea.exe',
    'idea64.exe',
    'phpstorm.exe',
    'phpstorm64.exe',
    'pycharm.exe',
    'pycharm64.exe',
    'rubymine.exe',
    'rubymine64.exe',
    'webstorm.exe',
    'webstorm64.exe'
];
const addWorkspaceToArgumentsIfExists = function (args, workspace) {
    if (workspace) {
        const v150 = args.unshift(workspace);
        v150;
    }
    return args;
};
const getArgumentsForLineNumber = function (editor, fileName, lineNumber, colNumber, workspace) {
    const v151 = path.basename(editor);
    const editorBasename = v151.replace(/\.(exe|cmd|bat)$/i, '');
    switch (editorBasename) {
    case 'atom':
    case 'Atom':
    case 'Atom Beta':
    case 'subl':
    case 'sublime':
    case 'sublime_text':
        const v152 = fileName + ':';
        const v153 = v152 + lineNumber;
        const v154 = v153 + ':';
        const v155 = v154 + colNumber;
        const v156 = [v155];
        return v156;
    case 'wstorm':
    case 'charm':
        const v157 = fileName + ':';
        const v158 = v157 + lineNumber;
        const v159 = [v158];
        return v159;
    case 'notepad++':
        const v160 = '-n' + lineNumber;
        const v161 = '-c' + colNumber;
        const v162 = [
            v160,
            v161,
            fileName
        ];
        return v162;
    case 'vim':
    case 'mvim':
    case 'joe':
        const v163 = '+' + lineNumber;
        const v164 = [
            v163,
            fileName
        ];
        return v164;
    case 'emacs':
    case 'emacsclient':
        const v165 = '+' + lineNumber;
        const v166 = v165 + ':';
        const v167 = v166 + colNumber;
        const v168 = [
            v167,
            fileName
        ];
        return v168;
    case 'rmate':
    case 'mate':
    case 'mine':
        const v169 = [
            '--line',
            lineNumber,
            fileName
        ];
        return v169;
    case 'code':
    case 'Code':
    case 'code-insiders':
    case 'Code - Insiders':
        const v170 = fileName + ':';
        const v171 = v170 + lineNumber;
        const v172 = v171 + ':';
        const v173 = v172 + colNumber;
        const v174 = [
            '-g',
            v173
        ];
        const v175 = addWorkspaceToArgumentsIfExists(v174, workspace);
        return v175;
    case 'appcode':
    case 'clion':
    case 'clion64':
    case 'idea':
    case 'idea64':
    case 'phpstorm':
    case 'phpstorm64':
    case 'pycharm':
    case 'pycharm64':
    case 'rubymine':
    case 'rubymine64':
    case 'webstorm':
    case 'webstorm64':
        const v176 = [
            '--line',
            lineNumber,
            fileName
        ];
        const v177 = addWorkspaceToArgumentsIfExists(v176, workspace);
        return v177;
    }
    const v178 = [fileName];
    return v178;
};
const guessEditor = function () {
    const v179 = process.env;
    const v180 = v179.REACT_EDITOR;
    if (v180) {
        const v181 = process.env;
        const v182 = v181.REACT_EDITOR;
        const v183 = shellQuote.parse(v182);
        return v183;
    }
    try {
        const v184 = process.platform;
        const v185 = v184 === 'darwin';
        if (v185) {
            const v186 = child_process.execSync('ps x');
            const output = v186.toString();
            const processNames = Object.keys(COMMON_EDITORS_OSX);
            let i = 0;
            const v187 = processNames.length;
            let v188 = i < v187;
            while (v188) {
                const processName = processNames[i];
                const v190 = output.indexOf(processName);
                const v191 = -1;
                const v192 = v190 !== v191;
                if (v192) {
                    const v193 = COMMON_EDITORS_OSX[processName];
                    const v194 = [v193];
                    return v194;
                }
                const v189 = i++;
                v188 = i < v187;
            }
        } else {
            const v195 = process.platform;
            const v196 = v195 === 'win32';
            if (v196) {
                const v197 = [
                    'pipe',
                    'pipe',
                    'ignore'
                ];
                const v198 = { stdio: v197 };
                const v199 = child_process.execSync('powershell -Command "Get-Process | Select-Object Path"', v198);
                const output = v199.toString();
                const runningProcesses = output.split('\r\n');
                let i = 0;
                const v200 = runningProcesses.length;
                let v201 = i < v200;
                while (v201) {
                    const v203 = runningProcesses[i];
                    const v204 = !v203;
                    if (v204) {
                        continue;
                    }
                    const v205 = runningProcesses[i];
                    const fullProcessPath = v205.trim();
                    const shortProcessName = path.basename(fullProcessPath);
                    const v206 = COMMON_EDITORS_WIN.indexOf(shortProcessName);
                    const v207 = -1;
                    const v208 = v206 !== v207;
                    if (v208) {
                        const v209 = [fullProcessPath];
                        return v209;
                    }
                    const v202 = i++;
                    v201 = i < v200;
                }
            } else {
                const v210 = process.platform;
                const v211 = v210 === 'linux';
                if (v211) {
                    const v212 = child_process.execSync('ps x --no-heading -o comm --sort=comm');
                    const output = v212.toString();
                    const processNames = Object.keys(COMMON_EDITORS_LINUX);
                    let i = 0;
                    const v213 = processNames.length;
                    let v214 = i < v213;
                    while (v214) {
                        const processName = processNames[i];
                        const v216 = output.indexOf(processName);
                        const v217 = -1;
                        const v218 = v216 !== v217;
                        if (v218) {
                            const v219 = COMMON_EDITORS_LINUX[processName];
                            const v220 = [v219];
                            return v220;
                        }
                        const v215 = i++;
                        v214 = i < v213;
                    }
                }
            }
        }
    } catch (error) {
    }
    const v221 = process.env;
    const v222 = v221.VISUAL;
    if (v222) {
        const v223 = process.env;
        const v224 = v223.VISUAL;
        const v225 = [v224];
        return v225;
    } else {
        const v226 = process.env;
        const v227 = v226.EDITOR;
        if (v227) {
            const v228 = process.env;
            const v229 = v228.EDITOR;
            const v230 = [v229];
            return v230;
        }
    }
    const v231 = [null];
    return v231;
};
const printInstructions = function (fileName, errorMessage) {
    const v232 = console.log();
    v232;
    const v233 = path.basename(fileName);
    const v234 = 'Could not open ' + v233;
    const v235 = v234 + ' in the editor.';
    const v236 = chalk.red(v235);
    const v237 = console.log(v236);
    v237;
    if (errorMessage) {
        const v238 = errorMessage.length;
        const v239 = v238 - 1;
        const v240 = errorMessage[v239];
        const v241 = v240 !== '.';
        if (v241) {
            errorMessage += '.';
        }
        const v242 = 'The editor process exited with an error: ' + errorMessage;
        const v243 = chalk.red(v242);
        const v244 = console.log(v243);
        v244;
    }
    const v245 = console.log();
    v245;
    const v246 = chalk.cyan('REACT_EDITOR=atom');
    const v247 = 'To set up the editor integration, add something like ' + v246;
    const v248 = v247 + ' to the ';
    const v249 = chalk.green('.env.local');
    const v250 = v248 + v249;
    const v251 = v250 + ' file in your project folder ';
    const v252 = v251 + 'and restart the development server. Learn more: ';
    const v253 = chalk.green('https://goo.gl/MMTaZt');
    const v254 = v252 + v253;
    const v255 = console.log(v254);
    v255;
    const v256 = console.log();
    v256;
};
let _childProcess = null;
const launchEditor = function (fileName, lineNumber, colNumber) {
    const v257 = fs.existsSync(fileName);
    const v258 = !v257;
    if (v258) {
        return;
    }
    const v259 = Number.isInteger(lineNumber);
    const v260 = lineNumber > 0;
    const v261 = v259 && v260;
    const v262 = !v261;
    if (v262) {
        return;
    }
    const v263 = Number.isInteger(colNumber);
    const v264 = colNumber > 0;
    const v265 = v263 && v264;
    const v266 = !v265;
    if (v266) {
        colNumber = 1;
    }
    const v267 = guessEditor();
    let [editor, ...args] = v267;
    const v268 = !editor;
    if (v268) {
        const v269 = printInstructions(fileName, null);
        v269;
        return;
    }
    const v270 = editor.toLowerCase();
    const v271 = v270 === 'none';
    if (v271) {
        return;
    }
    const v272 = process.platform;
    const v273 = v272 === 'linux';
    const v274 = fileName.startsWith('/mnt/');
    const v275 = v273 && v274;
    const v276 = os.release();
    const v277 = /Microsoft/i.test(v276);
    const v278 = v275 && v277;
    if (v278) {
        fileName = path.relative('', fileName);
    }
    let workspace = null;
    if (lineNumber) {
        const v279 = getArgumentsForLineNumber(editor, fileName, lineNumber, colNumber, workspace);
        args = args.concat(v279);
    } else {
        const v280 = args.push(fileName);
        v280;
    }
    const v281 = isTerminalEditor(editor);
    const v282 = _childProcess && v281;
    if (v282) {
        const v283 = _childProcess.kill('SIGKILL');
        v283;
    }
    const v284 = process.platform;
    const v285 = v284 === 'win32';
    if (v285) {
        const v286 = [
            '/C',
            editor
        ];
        const v287 = v286.concat(args);
        const v288 = { stdio: 'inherit' };
        _childProcess = child_process.spawn('cmd.exe', v287, v288);
    } else {
        const v289 = { stdio: 'inherit' };
        _childProcess = child_process.spawn(editor, args, v289);
    }
    const v293 = function (errorCode) {
        _childProcess = null;
        if (errorCode) {
            const v290 = '(code ' + errorCode;
            const v291 = v290 + ')';
            const v292 = printInstructions(fileName, v291);
            v292;
        }
    };
    const v294 = _childProcess.on('exit', v293);
    v294;
    const v297 = function (error) {
        const v295 = error.message;
        const v296 = printInstructions(fileName, v295);
        v296;
    };
    const v298 = _childProcess.on('error', v297);
    v298;
};
module.exports = launchEditor;