'use strict';
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const deepmerge = require('deepmerge');
const loadConfigurationYaml = function (filePath, options) {
    const v34 = !options;
    if (v34) {
        options = {};
    }
    let absoluteFilePath = path.resolve(filePath);
    let readFlag = fs.R_OK;
    const v35 = !readFlag;
    const v36 = fs.constants;
    const v37 = v35 && v36;
    if (v37) {
        const v38 = fs.constants;
        readFlag = v38.R_OK;
    }
    try {
        const v39 = fs.accessSync(absoluteFilePath, readFlag);
        v39;
    } catch (error) {
        const v40 = new Error(`Unable to read file: ${ absoluteFilePath }`);
        throw v40;
    }
    let encoding = 'utf8';
    const v41 = options.encoding;
    if (v41) {
        encoding = options.encoding;
    }
    let content = fs.readFileSync(filePath, encoding);
    const v42 = path.dirname(absoluteFilePath);
    content = content.replace(/%__dirname%/g, v42);
    content = content.replace(/%__filename%/g, absoluteFilePath);
    let config = yaml.safeLoad(content);
    const v43 = typeof config;
    const v44 = v43 !== 'object';
    if (v44) {
        config = {};
    }
    const v45 = config.hasOwnProperty('imports');
    const v46 = config.imports;
    const v47 = Array.isArray(v46);
    const v48 = v45 && v47;
    if (v48) {
        let relativeDirectory = path.dirname(absoluteFilePath);
        let baseConfig = {};
        let importEntry;
        const v49 = config.imports;
        for (importEntry of v49) {
            const v50 = importEntry.hasOwnProperty('resource');
            const v51 = !v50;
            if (v51) {
                continue;
            }
            const v52 = importEntry.resource;
            const v53 = `${ relativeDirectory }/${ v52 }`;
            let entryConfig = loadConfigurationYaml(v53, options);
            let targetProperty = null;
            let property = baseConfig;
            const v54 = importEntry.hasOwnProperty('property');
            if (v54) {
                targetProperty = importEntry.property;
            }
            const v55 = targetProperty.length;
            const v56 = v55 > 0;
            const v57 = targetProperty && v56;
            if (v57) {
                let propertyPath = targetProperty.split('.');
                let parentProperty = property;
                let lastPropertyName = null;
                let propertyName;
                for (propertyName of propertyPath) {
                    lastPropertyName = propertyName;
                    parentProperty = property;
                    const v58 = typeof property;
                    const v59 = v58 === 'object';
                    const v60 = property.hasOwnProperty(propertyName);
                    const v61 = v59 && v60;
                    if (v61) {
                        property = property[propertyName];
                    } else {
                        const v62 = {};
                        property.propertyName = v62;
                        property = property[propertyName];
                    }
                }
                const v63 = lastPropertyName !== null;
                if (v63) {
                    const v64 = deepmerge(property, entryConfig);
                    parentProperty[lastPropertyName] = v64;
                }
            } else {
                baseConfig = deepmerge(baseConfig, entryConfig);
            }
        }
        config = deepmerge(baseConfig, config);
        const v65 = config.imports;
        const v66 = delete v65;
        v66;
    }
    return config;
};
module.exports = loadConfigurationYaml;