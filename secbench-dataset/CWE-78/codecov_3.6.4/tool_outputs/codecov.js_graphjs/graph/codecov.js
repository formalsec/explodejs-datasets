var fs = require('fs');
var path = require('path');
const v469 = require('teeny-request');
var request = v469.teenyRequest;
var urlgrey = require('urlgrey');
var jsYaml = require('js-yaml');
var walk = require('ignore-walk');
const v470 = require('child_process');
var execSync = v470.execSync;
var validator = require('validator');
var detectProvider = require('./detect');
const v471 = require('../package.json');
const v472 = v471.version;
var version = 'v' + v472;
var patterns;
var more_patterns = '';
const v473 = process.platform;
const v474 = v473.match(/win32/);
const v475 = process.platform;
const v476 = v475.match(/win64/);
var isWindows = v474 || v476;
const v477 = !isWindows;
if (v477) {
    const v478 = '-type f \\( -name \'*coverage.*\' ' + '-or -name \'nosetests.xml\' ';
    const v479 = v478 + '-or -name \'jacoco*.xml\' ';
    const v480 = v479 + '-or -name \'clover.xml\' ';
    const v481 = v480 + '-or -name \'report.xml\' ';
    const v482 = v481 + '-or -name \'cobertura.xml\' ';
    const v483 = v482 + '-or -name \'luacov.report.out\' ';
    const v484 = v483 + '-or -name \'lcov.info\' ';
    const v485 = v484 + '-or -name \'*.lcov\' ';
    const v486 = v485 + '-or -name \'gcov.info\' ';
    const v487 = v486 + '-or -name \'*.gcov\' ';
    const v488 = v487 + '-or -name \'*.lst\' \\) ';
    const v489 = v488 + '-not -name \'*.sh\' ';
    const v490 = v489 + '-not -name \'*.data\' ';
    const v491 = v490 + '-not -name \'*.py\' ';
    const v492 = v491 + '-not -name \'*.class\' ';
    const v493 = v492 + '-not -name \'*.xcconfig\' ';
    const v494 = v493 + '-not -name \'Coverage.profdata\' ';
    const v495 = v494 + '-not -name \'phpunit-code-coverage.xml\' ';
    const v496 = v495 + '-not -name \'coverage.serialized\' ';
    const v497 = v496 + '-not -name \'*.pyc\' ';
    const v498 = v497 + '-not -name \'*.cfg\' ';
    const v499 = v498 + '-not -name \'*.egg\' ';
    const v500 = v499 + '-not -name \'*.whl\' ';
    const v501 = v500 + '-not -name \'*.html\' ';
    const v502 = v501 + '-not -name \'*.js\' ';
    const v503 = v502 + '-not -name \'*.cpp\' ';
    const v504 = v503 + '-not -name \'coverage.jade\' ';
    const v505 = v504 + '-not -name \'include.lst\' ';
    const v506 = v505 + '-not -name \'inputFiles.lst\' ';
    const v507 = v506 + '-not -name \'createdFiles.lst\' ';
    const v508 = v507 + '-not -name \'coverage.html\' ';
    const v509 = v508 + '-not -name \'scoverage.measurements.*\' ';
    const v510 = v509 + '-not -name \'test_*_coverage.txt\' ';
    const v511 = v510 + '-not -path \'*/vendor/*\' ';
    const v512 = v511 + '-not -path \'*/htmlcov/*\' ';
    const v513 = v512 + '-not -path \'*/home/cainus/*\' ';
    const v514 = v513 + '-not -path \'*/virtualenv/*\' ';
    const v515 = v514 + '-not -path \'*/js/generated/coverage/*\' ';
    const v516 = v515 + '-not -path \'*/.virtualenv/*\' ';
    const v517 = v516 + '-not -path \'*/virtualenvs/*\' ';
    const v518 = v517 + '-not -path \'*/.virtualenvs/*\' ';
    const v519 = v518 + '-not -path \'*/.env/*\' ';
    const v520 = v519 + '-not -path \'*/.envs/*\' ';
    const v521 = v520 + '-not -path \'*/env/*\' ';
    const v522 = v521 + '-not -path \'*/envs/*\' ';
    const v523 = v522 + '-not -path \'*/.venv/*\' ';
    const v524 = v523 + '-not -path \'*/.venvs/*\' ';
    const v525 = v524 + '-not -path \'*/venv/*\' ';
    const v526 = v525 + '-not -path \'*/venvs/*\' ';
    const v527 = v526 + '-not -path \'*/.git/*\' ';
    const v528 = v527 + '-not -path \'*/.hg/*\' ';
    const v529 = v528 + '-not -path \'*/.tox/*\' ';
    const v530 = v529 + '-not -path \'*/__pycache__/*\' ';
    const v531 = v530 + '-not -path \'*/.egg-info*\' ';
    const v532 = v531 + '-not -path \'*/$bower_components/*\' ';
    const v533 = v532 + '-not -path \'*/node_modules/*\' ';
    patterns = v533 + '-not -path \'*/conftest_*.c.gcov\'';
} else {
    const v534 = '/a-d /b /s *coverage.* ' + '/s nosetests.xml ';
    const v535 = v534 + '/s jacoco*.xml ';
    const v536 = v535 + '/s clover.xml ';
    const v537 = v536 + '/s report.xml ';
    const v538 = v537 + '/s cobertura.xml ';
    const v539 = v538 + '/s luacov.report.out ';
    const v540 = v539 + '/s lcov.info ';
    const v541 = v540 + '/s *.lcov ';
    const v542 = v541 + '/s gcov.info ';
    const v543 = v542 + '/s *.gcov ';
    const v544 = v543 + '/s *.lst';
    const v545 = v544 + '| findstr /i /v \\.sh$ ';
    const v546 = v545 + '| findstr /i /v \\.data$ ';
    const v547 = v546 + '| findstr /i /v \\.py$ ';
    const v548 = v547 + '| findstr /i /v \\.class$ ';
    const v549 = v548 + '| findstr /i /v \\.xcconfig$ ';
    const v550 = v549 + '| findstr /i /v Coverage\\.profdata$ ';
    const v551 = v550 + '| findstr /i /v phpunit-code-coverage\\.xml$ ';
    const v552 = v551 + '| findstr /i /v coverage\\.serialized$ ';
    const v553 = v552 + '| findstr /i /v \\.pyc$ ';
    const v554 = v553 + '| findstr /i /v \\.cfg$ ';
    const v555 = v554 + '| findstr /i /v \\.egg$ ';
    const v556 = v555 + '| findstr /i /v \\.whl$ ';
    const v557 = v556 + '| findstr /i /v \\.html$ ';
    const v558 = v557 + '| findstr /i /v \\.js$ ';
    const v559 = v558 + '| findstr /i /v \\.cpp$ ';
    const v560 = v559 + '| findstr /i /v coverage\\.jade$ ';
    const v561 = v560 + '| findstr /i /v include\\.lst$ ';
    const v562 = v561 + '| findstr /i /v inputFiles\\.lst$ ';
    const v563 = v562 + '| findstr /i /v createdFiles\\.lst$ ';
    const v564 = v563 + '| findstr /i /v coverage\\.html$ ';
    const v565 = v564 + '| findstr /i /v scoverage\\.measurements\\..* ';
    const v566 = v565 + '| findstr /i /v test_.*_coverage\\.txt ';
    const v567 = v566 + '| findstr /i /v \\vendor\\ ';
    const v568 = v567 + '| findstr /i /v \\htmlcov\\ ';
    const v569 = v568 + '| findstr /i /v \\home\\cainus\\ ';
    const v570 = v569 + '| findstr /i /v \\js\\generated\\coverage\\ ';
    const v571 = v570 + '| findstr /i /v \\virtualenv\\ ';
    const v572 = v571 + '| findstr /i /v \\virtualenvs\\ ';
    const v573 = v572 + '| findstr /i /v \\\\.virtualenv\\ ';
    const v574 = v573 + '| findstr /i /v \\\\.virtualenvs\\ ';
    const v575 = v574 + '| findstr /i /v \\\\.env\\ ';
    const v576 = v575 + '| findstr /i /v \\\\.envs\\ ';
    const v577 = v576 + '| findstr /i /v \\env\\ ';
    const v578 = v577 + '| findstr /i /v \\envs\\ ';
    const v579 = v578 + '| findstr /i /v \\\\.venv\\ ';
    const v580 = v579 + '| findstr /i /v \\\\.venvs\\ ';
    const v581 = v580 + '| findstr /i /v \\venv\\ ';
    const v582 = v581 + '| findstr /i /v \\venvs\\ ';
    const v583 = v582 + '| findstr /i /v \\\\.git\\ ';
    const v584 = v583 + '| findstr /i /v \\\\.hg\\ ';
    const v585 = v584 + '| findstr /i /v \\\\.tox\\ ';
    const v586 = v585 + '| findstr /i /v \\__pycache__\\ ';
    const v587 = v586 + '| findstr /i /v \\\\.egg-info* ';
    const v588 = v587 + '| findstr /i /v \\\\$bower_components\\ ';
    const v589 = v588 + '| findstr /i /v \\node_modules\\ ';
    patterns = v589 + '| findstr /i /v \\conftest_.*\\.c\\.gcov ';
}
var sendToCodecovV2 = function (codecov_endpoint, query, upload_body, on_success, on_failure) {
    const v590 = codecov_endpoint + '/upload/v2';
    const v591 = urlgrey(v590);
    const v592 = v591.query(query);
    const v593 = v592.toString();
    const v594 = {};
    v594['Content-Type'] = 'text/plain';
    v594.Accept = 'text/plain';
    const v595 = {
        uri: v593,
        method: 'POST',
        body: upload_body,
        headers: v594
    };
    const v616 = function (err, response) {
        const v596 = response.statusCode;
        const v597 = v596 !== 200;
        const v598 = err || v597;
        if (v598) {
            const v599 = response.body;
            const v600 = err || v599;
            const v601 = '    ' + v600;
            const v602 = console.log(v601);
            v602;
            const v603 = response.statusCode;
            const v604 = response.body;
            const v605 = on_failure(v603, v604);
            const v606 = err.code;
            const v607 = err.message;
            const v608 = on_failure(v606, v607);
            let v609;
            if (response) {
                v609 = v605;
            } else {
                v609 = v608;
            }
            return v609;
        } else {
            const v610 = console.log('    Success!');
            v610;
            const v611 = response.body;
            const v612 = '    View report at: ' + v611;
            const v613 = console.log(v612);
            v613;
            const v614 = response.body;
            const v615 = on_success(v614);
            return v615;
        }
    };
    const v617 = request(v595, v616);
    v617;
};
var sendToCodecovV3 = function (codecov_endpoint, query, upload_body, on_success, on_failure) {
    const v618 = codecov_endpoint + '/upload/v4';
    const v619 = urlgrey(v618);
    const v620 = v619.query(query);
    const v621 = v620.toString();
    const v622 = {};
    v622['Content-Type'] = 'text/plain';
    v622.Accept = 'text/plain';
    const v623 = {
        uri: v621,
        method: 'POST',
        body: '',
        headers: v622
    };
    const v637 = function (err, response, result) {
        if (err) {
            const v624 = sendToCodecovV2(codecov_endpoint, query, upload_body, on_success, on_failure);
            v624;
        } else {
            const v625 = result.split('\n');
            var codecov_report_url = v625[0];
            const v626 = result.split('\n');
            const v627 = v626[1];
            const v628 = {};
            v628['Content-Type'] = 'text/plain';
            v628['x-amz-acl'] = 'public-read';
            const v629 = {
                uri: v627,
                method: 'PUT',
                body: upload_body,
                headers: v628
            };
            const v635 = function (err) {
                if (err) {
                    const v630 = sendToCodecovV2(codecov_endpoint, query, upload_body, on_success, on_failure);
                    v630;
                } else {
                    const v631 = console.log('    Success!');
                    v631;
                    const v632 = '    View report at: ' + codecov_report_url;
                    const v633 = console.log(v632);
                    v633;
                    const v634 = on_success(codecov_report_url);
                    v634;
                }
            };
            const v636 = request(v629, v635);
            v636;
        }
    };
    const v638 = request(v623, v637);
    v638;
};
var upload = function (args, on_success, on_failure) {
    const v639 = args.options;
    const v640 = v639.url;
    const v641 = process.env;
    const v642 = v641.codecov_url;
    const v643 = v640 || v642;
    const v644 = process.env;
    const v645 = v644.CODECOV_URL;
    const v646 = v643 || v645;
    var codecov_endpoint = v646 || 'https://codecov.io';
    var query = {};
    var debug = [];
    const v647 = args.options;
    const v648 = v647.yml;
    const v649 = process.env;
    const v650 = v649.codecov_yml;
    const v651 = v648 || v650;
    const v652 = process.env;
    const v653 = v652.CODECOV_YML;
    const v654 = v651 || v653;
    var yamlFile = v654 || 'codecov.yml';
    const v655 = '' + '  _____          _  \n';
    const v656 = v655 + ' / ____|        | |  \n';
    const v657 = v656 + '| |     ___   __| | ___  ___ _____   __  \n';
    const v658 = v657 + '| |    / _ \\ / _` |/ _ \\/ __/ _ \\ \\ / /  \n';
    const v659 = v658 + '| |___| (_) | (_| |  __/ (_| (_) \\ V /  \n';
    const v660 = v659 + ' \\_____\\___/ \\__,_|\\___|\\___\\___/ \\_/  \n';
    const v661 = v660 + '                                ';
    const v662 = v661 + version;
    const v663 = console.log(v662);
    v663;
    const v664 = args.options;
    const v665 = v664.disable;
    const v666 = v665 || '';
    const v667 = v666.split(',');
    const v668 = v667.indexOf('detect');
    const v669 = -1;
    const v670 = v668 === v669;
    if (v670) {
        const v671 = console.log('==> Detecting CI Provider');
        v671;
        query = detectProvider();
    } else {
        const v672 = debug.push('disabled detect');
        v672;
    }
    const v673 = [
        yamlFile,
        '.codecov.yml'
    ];
    const v681 = function (result, file) {
        const v674 = process.cwd();
        const v675 = path.resolve(v674, file);
        const v676 = fs.existsSync(v675);
        const v677 = process.cwd();
        const v678 = path.resolve(v677, file);
        let v679;
        if (v676) {
            v679 = v678;
        } else {
            v679 = undefined;
        }
        const v680 = result || v679;
        return v680;
    };
    const v682 = v673.reduce(v681, undefined);
    query.yaml = v682;
    const v683 = args.options;
    const v684 = v683.build;
    if (v684) {
        const v685 = args.options;
        const v686 = v685.build;
        query.build = v686;
    }
    const v687 = args.options;
    const v688 = v687.commit;
    if (v688) {
        const v689 = args.options;
        const v690 = v689.commit;
        query.commit = v690;
    }
    const v691 = args.options;
    const v692 = v691.branch;
    if (v692) {
        const v693 = args.options;
        const v694 = v693.branch;
        query.branch = v694;
    }
    const v695 = args.options;
    const v696 = v695.slug;
    if (v696) {
        const v697 = args.options;
        const v698 = v697.slug;
        query.slug = v698;
    }
    const v699 = args.options;
    const v700 = v699.flags;
    const v701 = process.env;
    const v702 = v701.codecov_flags;
    const v703 = v700 || v702;
    const v704 = process.env;
    const v705 = v704.CODECOV_FLAGS;
    var flags = v703 || v705;
    if (flags) {
        query.flags = flags;
    }
    var yamlToken;
    try {
        const v706 = query.yaml;
        const v707 = fs.readFileSync(v706, 'utf8');
        var loadedYamlFile = jsYaml.safeLoad(v707);
        const v708 = loadedYamlFile.codecov;
        const v709 = loadedYamlFile && v708;
        const v710 = loadedYamlFile.codecov;
        const v711 = v710.token;
        yamlToken = v709 && v711;
    } catch (e) {
    }
    const v712 = args.options;
    const v713 = v712.token;
    const v714 = v713 || yamlToken;
    const v715 = process.env;
    const v716 = v715.codecov_token;
    const v717 = v714 || v716;
    const v718 = process.env;
    const v719 = v718.CODECOV_TOKEN;
    var token = v717 || v719;
    if (token) {
        query.token = token;
    }
    query.package = 'node-' + version;
    const v720 = console.log('==> Configuration: ');
    v720;
    const v721 = '    Endpoint: ' + codecov_endpoint;
    const v722 = console.log(v721);
    v722;
    const v723 = query.commit;
    const v724 = query.branch;
    const v725 = query.package;
    const v726 = {
        commit: v723,
        branch: v724,
        package: v725
    };
    const v727 = console.log(v726);
    v727;
    var upload = '';
    var env_found = false;
    const v728 = args.options;
    const v729 = v728.env;
    const v730 = process.env;
    const v731 = v730.CODECOV_ENV;
    const v732 = v729 || v731;
    const v733 = process.env;
    const v734 = v733.codecov_env;
    const v735 = v732 || v734;
    if (v735) {
        const v736 = args.options;
        const v737 = v736.env;
        const v738 = v737 + ',';
        const v739 = process.env;
        const v740 = v739.CODECOV_ENV;
        const v741 = v740 || '';
        const v742 = v738 + v741;
        const v743 = v742 + ',';
        const v744 = process.env;
        const v745 = v744.codecov_env;
        const v746 = v745 || '';
        const v747 = v743 + v746;
        var env = v747.split(',');
        const v748 = env.length;
        var i = v748 - 1;
        let v749 = i >= 0;
        while (v749) {
            const v751 = env[i];
            if (v751) {
                const v752 = env[i];
                const v753 = v752 + '=';
                const v754 = process.env;
                const v755 = env[i];
                const v756 = v754[v755];
                const v757 = v756 || '';
                const v758 = v757.toString();
                const v759 = v753 + v758;
                upload += v759 + '\n';
                env_found = true;
            }
            const v750 = i--;
            v749 = i >= 0;
        }
        if (env_found) {
            upload += '<<<<<< ENV\n';
        }
    }
    const v760 = args.options;
    const v761 = v760.root;
    const v762 = query.root;
    const v763 = v761 || v762;
    const v764 = v763 || '.';
    var root = path.resolve(v764);
    const v765 = console.log('==> Building file structure');
    v765;
    try {
        const v766 = { cwd: root };
        const v767 = execSync('git ls-files || hg locate', v766);
        const v768 = v767.toString();
        const v769 = v768.trim();
        upload += v769 + '\n<<<<<< network\n';
    } catch (err) {
        const v770 = [
            '.gitignore',
            '.hgignore'
        ];
        const v771 = {
            path: root,
            ignoreFiles: v770
        };
        const v772 = walk.sync(v771);
        const v773 = v772.join('\n');
        const v774 = v773.trim();
        upload += v774 + '\n<<<<<< network\n';
    }
    const v775 = args.options;
    const v776 = v775.disable;
    const v777 = v776 || '';
    const v778 = v777.split(',');
    const v779 = v778.indexOf('gcov');
    const v780 = -1;
    const v781 = v779 === v780;
    if (v781) {
        try {
            const v782 = console.log('==> Generating gcov reports (skip via --disable=gcov)');
            v782;
            const v783 = args.options;
            const v784 = v783['gcov-glob'];
            var gcg = v784 || '';
            if (gcg) {
                const v785 = !isWindows;
                if (v785) {
                    const v786 = gcg.split(' ');
                    const v789 = function (p) {
                        const v787 = '-not -path \'' + p;
                        const v788 = v787 + '\'';
                        return v788;
                    };
                    const v790 = v786.map(v789);
                    gcg = v790.join(' ');
                } else {
                    const v791 = gcg.split(' ');
                    const v793 = function (p) {
                        const v792 = '^| findstr /i /v ' + p;
                        return v792;
                    };
                    const v794 = v791.map(v793);
                    gcg = v794.join(' ');
                }
            }
            var gcov;
            const v795 = !isWindows;
            if (v795) {
                const v796 = args.options;
                const v797 = v796['gcov-root'];
                const v798 = v797 || root;
                const v799 = 'find ' + v798;
                const v800 = v799 + ' -type f -name \'*.gcno\' ';
                const v801 = v800 + gcg;
                const v802 = v801 + ' -exec ';
                const v803 = args.options;
                const v804 = v803['gcov-exec'];
                const v805 = validator.escape(v804);
                const v806 = v805 || 'gcov';
                const v807 = v802 + v806;
                const v808 = v807 + ' ';
                const v809 = args.options;
                const v810 = v809['gcov-args'];
                const v811 = validator.escape(v810);
                const v812 = v811 || '';
                const v813 = v808 + v812;
                gcov = v813 + ' {} +';
            } else {
                const v814 = 'for /f "delims=" %g in (\'dir /a-d /b /s *.gcno ' + gcg;
                const v815 = v814 + '\') do ';
                const v816 = args.options;
                const v817 = v816['gcov-exec'];
                const v818 = v817 || 'gcov';
                const v819 = v815 + v818;
                const v820 = v819 + ' ';
                const v821 = args.options;
                const v822 = v821['gcov-args'];
                const v823 = v822 || '';
                const v824 = v820 + v823;
                gcov = v824 + ' %g';
            }
            const v825 = debug.push(gcov);
            v825;
            const v826 = '    $ ' + gcov;
            const v827 = console.log(v826);
            v827;
            const v828 = execSync(gcov);
            v828;
        } catch (e) {
            const v829 = console.log('    Failed to run gcov command.');
            v829;
        }
    } else {
        const v830 = debug.push('disabled gcov');
        v830;
    }
    var bowerrc;
    const v831 = !isWindows;
    if (v831) {
        const v832 = { cwd: root };
        const v833 = execSync('test -f .bowerrc && cat .bowerrc || echo ""', v832);
        const v834 = v833.toString();
        bowerrc = v834.trim();
    } else {
        const v835 = { cwd: root };
        const v836 = execSync('if exist .bowerrc type .bowerrc', v835);
        const v837 = v836.toString();
        bowerrc = v837.trim();
    }
    if (bowerrc) {
        const v838 = JSON.parse(bowerrc);
        bowerrc = v838.directory;
        if (bowerrc) {
            const v839 = !isWindows;
            if (v839) {
                const v840 = bowerrc.toString();
                const v841 = v840.replace(/\/$/, '');
                const v842 = ' -not -path \'*/' + v841;
                more_patterns = v842 + '/*\'';
            } else {
                const v843 = bowerrc.toString();
                const v844 = v843.replace(/\/$/, '');
                const v845 = '| findstr /i /v \\' + v844;
                more_patterns = v845 + '\\';
            }
        }
    }
    var files = [];
    var file = null;
    const v846 = args.options;
    const v847 = v846.pipe;
    if (v847) {
        const v848 = args.options;
        const v849 = v848.pipe;
        const v850 = v849.join('');
        const v851 = '# path=piped\n' + v850;
        upload += v851 + '\n<<<<<< EOF\n';
        const v852 = console.log('==> Reading report from stdin');
        v852;
    } else {
        const v853 = args.options;
        const v854 = v853.file;
        if (v854) {
            const v855 = args.options;
            file = v855.file;
            const v856 = console.log('==> Targeting specific file');
            v856;
            try {
                const v857 = '# path=' + file;
                const v858 = v857 + '\n';
                const v859 = fs.readFileSync(file, 'utf8');
                const v860 = v859.toString();
                const v861 = v858 + v860;
                upload += v861 + '\n<<<<<< EOF\n';
                const v862 = '    + ' + file;
                const v863 = console.log(v862);
                v863;
                const v864 = files.push(file);
                v864;
            } catch (e) {
                const v865 = file.split('/');
                const v866 = v865.pop();
                const v867 = 'failed: ' + v866;
                const v868 = debug.push(v867);
                v868;
                const v869 = '    X Failed to read file at ' + file;
                const v870 = console.log(v869);
                v870;
            }
        } else {
            const v871 = args.options;
            const v872 = v871.disable;
            const v873 = v872 || '';
            const v874 = v873.split(',');
            const v875 = v874.indexOf('search');
            const v876 = -1;
            const v877 = v875 === v876;
            if (v877) {
                const v878 = console.log('==> Scanning for reports');
                v878;
                var _files;
                const v879 = !isWindows;
                if (v879) {
                    const v880 = 'find ' + root;
                    const v881 = v880 + ' ';
                    const v882 = v881 + patterns;
                    const v883 = v882 + more_patterns;
                    const v884 = execSync(v883);
                    const v885 = v884.toString();
                    const v886 = v885.trim();
                    _files = v886.split('\n');
                } else {
                    const v887 = 'dir ' + patterns;
                    const v888 = v887 + more_patterns;
                    const v889 = execSync(v888);
                    const v890 = v889.toString();
                    const v891 = v890.trim();
                    _files = v891.split('\r\n');
                }
                if (_files) {
                    const v892 = _files.length;
                    var i2 = v892 - 1;
                    let v893 = i2 >= 0;
                    while (v893) {
                        file = _files[i2];
                        try {
                            const v895 = '# path=' + file;
                            const v896 = v895 + '\n';
                            const v897 = fs.readFileSync(file, 'utf8');
                            const v898 = v897.toString();
                            const v899 = v896 + v898;
                            upload += v899 + '\n<<<<<< EOF\n';
                            const v900 = '    + ' + file;
                            const v901 = console.log(v900);
                            v901;
                            const v902 = files.push(file);
                            v902;
                        } catch (e) {
                            const v903 = file.split('/');
                            const v904 = v903.pop();
                            const v905 = 'failed: ' + v904;
                            const v906 = debug.push(v905);
                            v906;
                            const v907 = '    X Failed to read file at ' + file;
                            const v908 = console.log(v907);
                            v908;
                        }
                        const v894 = i2--;
                        v893 = i2 >= 0;
                    }
                }
            } else {
                const v909 = debug.push('disabled search');
                v909;
            }
        }
    }
    if (files) {
        const v910 = args.options;
        const v911 = v910.dump;
        if (v911) {
            const v912 = console.log('-------- DEBUG START --------');
            v912;
            const v913 = console.log(upload);
            v913;
            const v914 = console.log('-------- DEBUG END --------');
            v914;
        } else {
            const v915 = console.log('==> Uploading reports');
            v915;
            var _upload;
            const v916 = args.options;
            const v917 = v916.disable;
            const v918 = v917 || '';
            const v919 = v918.split(',');
            const v920 = v919.indexOf('s3');
            const v921 = -1;
            const v922 = v920 === v921;
            if (v922) {
                _upload = sendToCodecovV3;
            } else {
                _upload = sendToCodecovV2;
            }
            const v931 = function () {
                const v923 = args.options;
                const v924 = v923.clear;
                if (v924) {
                    const v925 = files.length;
                    var i = v925 - 1;
                    let v926 = i >= 0;
                    while (v926) {
                        try {
                            const v928 = files[i];
                            const v929 = fs.unlinkSync(v928);
                            v929;
                        } catch (e) {
                        }
                        const v927 = i--;
                        v926 = i >= 0;
                    }
                }
                if (on_success) {
                    const v930 = on_success.apply(this, arguments);
                    v930;
                }
            };
            const v932 = function () {
            };
            const v933 = on_failure || v932;
            const v934 = _upload(codecov_endpoint, query, upload, v931, v933);
            v934;
        }
    }
    const v935 = {};
    v935.body = upload;
    v935.files = files;
    v935.query = query;
    v935.debug = debug;
    v935.url = codecov_endpoint;
    return v935;
};
const v936 = {};
v936.upload = upload;
v936.version = version;
v936.sendToCodecovV2 = sendToCodecovV2;
v936.sendToCodecovV3 = sendToCodecovV3;
module.exports = v936;