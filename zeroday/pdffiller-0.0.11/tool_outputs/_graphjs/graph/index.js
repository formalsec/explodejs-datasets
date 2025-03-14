const v143 = function () {
    var child_process = require('child_process');
    const v73 = require('child_process');
    var execFile = v73.execFile;
    var fdf = require('utf8-fdf-generator');
    var _ = require('lodash');
    var fs = require('fs');
    const v77 = function (formFields, convMap) {
        var tmpFDFData = this.convFieldJson2FDF(formFields);
        const v76 = function (value, key) {
            try {
                const v74 = convMap[key];
                v74;
            } catch (err) {
                return key;
            }
            const v75 = convMap[key];
            return v75;
        };
        tmpFDFData = _.mapKeys(tmpFDFData, v76);
        return tmpFDFData;
    };
    const v81 = function (fieldJson) {
        var _keys = _.map(fieldJson, 'title');
        var _values = _.map(fieldJson, 'fieldValue');
        const v80 = function (val) {
            const v78 = val === true;
            if (v78) {
                return 'Yes';
            } else {
                const v79 = val === false;
                if (v79) {
                    return 'Off';
                }
            }
            return val;
        };
        _values = _.map(_values, v80);
        var jsonObj = _.zipObject(_keys, _values);
        return jsonObj;
    };
    const v109 = function (sourceFile, nameRegex, callback) {
        var regName = /FieldName: ([^\n]*)/;
        var regType = /FieldType: ([A-Za-z\t .]+)/;
        var regFlags = /FieldFlags: ([0-9\t .]+)/;
        var fieldArray = [];
        var currField = {};
        const v82 = nameRegex !== null;
        const v83 = typeof nameRegex;
        const v84 = v83 == 'object';
        const v85 = v82 && v84;
        if (v85) {
            regName = nameRegex;
        }
        const v86 = [
            sourceFile,
            'dump_data_fields_utf8'
        ];
        const v107 = function (error, stdout, stderr) {
            if (error) {
                const v87 = 'exec error: ' + error;
                const v88 = console.log(v87);
                v88;
                const v89 = callback(error, null);
                return v89;
            }
            const v90 = stdout.toString();
            const v91 = v90.split('---');
            fields = v91.slice(1);
            const v104 = function (field) {
                currField = {};
                const v92 = field.match(regName);
                const v93 = v92[1];
                const v94 = v93.trim();
                currField['title'] = v94 || '';
                const v95 = field.match(regType);
                if (v95) {
                    const v96 = field.match(regType);
                    const v97 = v96[1];
                    const v98 = v97.trim();
                    currField['fieldType'] = v98 || '';
                } else {
                    currField['fieldType'] = '';
                }
                const v99 = field.match(regFlags);
                if (v99) {
                    const v100 = field.match(regFlags);
                    const v101 = v100[1];
                    const v102 = v101.trim();
                    currField['fieldFlags'] = v102 || '';
                } else {
                    currField['fieldFlags'] = '';
                }
                currField['fieldValue'] = '';
                const v103 = fieldArray.push(currField);
                v103;
            };
            const v105 = fields.forEach(v104);
            v105;
            const v106 = callback(null, fieldArray);
            return v106;
        };
        const v108 = execFile('pdftk', v86, v107);
        v108;
    };
    const v118 = function (sourceFile, nameRegex, callback) {
        const v115 = function (err, _form_fields) {
            if (err) {
                const v110 = 'exec error: ' + err;
                const v111 = console.log(v110);
                v111;
                const v112 = callback(err, null);
                return v112;
            }
            const v113 = this.convFieldJson2FDF(_form_fields);
            const v114 = callback(null, v113);
            return v114;
        };
        const v116 = v115.bind(this);
        const v117 = this.generateFieldJson(sourceFile, nameRegex, v116);
        v117;
    };
    const v138 = function (sourceFile, destinationFile, fieldValues, shouldFlatten, tempFDFPath, callback) {
        const v119 = Math.random();
        const v120 = v119.toString(36);
        var randomSequence = v120.substring(7);
        const v121 = new Date();
        var currentTime = v121.getTime();
        const v122 = 'temp_data' + currentTime;
        const v123 = v122 + randomSequence;
        var tempFDFFile = v123 + '.fdf';
        let tempFDF;
        const v124 = typeof tempFDFPath;
        const v125 = v124 !== 'undefined';
        const v126 = tempFDFPath + '/';
        const v127 = v126 + tempFDFFile;
        if (v125) {
            tempFDF = v127;
        } else {
            tempFDF = tempFDFFile;
        }
        var formData = fdf.generator(fieldValues, tempFDF);
        var args = [
            sourceFile,
            'fill_form',
            tempFDF,
            'output',
            destinationFile
        ];
        if (shouldFlatten) {
            const v128 = args.push('flatten');
            v128;
        }
        const v136 = function (error, stdout, stderr) {
            if (error) {
                const v129 = 'exec error: ' + error;
                const v130 = console.log(v129);
                v130;
                const v131 = callback(error);
                return v131;
            }
            const v134 = function (err) {
                if (err) {
                    const v132 = callback(err);
                    return v132;
                }
                const v133 = callback();
                return v133;
            };
            const v135 = fs.unlink(tempFDF, v134);
            v135;
        };
        const v137 = execFile('pdftk', args, v136);
        v137;
    };
    const v140 = function (sourceFile, destinationFile, fieldValues, shouldFlatten, callback) {
        const v139 = this.fillFormWithOptions(sourceFile, destinationFile, fieldValues, shouldFlatten, undefined, callback);
        v139;
    };
    const v142 = function (sourceFile, destinationFile, fieldValues, callback) {
        const v141 = this.fillFormWithFlatten(sourceFile, destinationFile, fieldValues, true, callback);
        v141;
    };
    var pdffiller = {};
    pdffiller.mapForm2PDF = v77;
    pdffiller.convFieldJson2FDF = v81;
    pdffiller.generateFieldJson = v109;
    pdffiller.generateFDFTemplate = v118;
    pdffiller.fillFormWithOptions = v138;
    pdffiller.fillFormWithFlatten = v140;
    pdffiller.fillForm = v142;
    module.exports = pdffiller;
};
const v144 = v143();
v144;