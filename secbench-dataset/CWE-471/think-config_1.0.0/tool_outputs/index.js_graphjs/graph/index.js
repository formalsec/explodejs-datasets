const helper = require('think-helper');
const Config = function Config(config = {}) {
    this.config = config;
};
const get = function get(name, config) {
    const v27 = !name;
    if (v27) {
        const v28 = this.config;
        return v28;
    }
    const v29 = this.config;
    config = config || v29;
    const v30 = name.indexOf('.');
    const v31 = -1;
    const v32 = v30 === v31;
    if (v32) {
        const v33 = config[name];
        return v33;
    }
    name = name.split('.');
    let length = name.length;
    const v39 = (item, index) => {
        config = config[item];
        const v34 = length - 1;
        const v35 = index !== v34;
        const v36 = helper.isObject(config);
        const v37 = !v36;
        const v38 = v35 && v37;
        if (v38) {
            config = undefined;
            return true;
        }
    };
    const v40 = name.some(v39);
    v40;
    return config;
};
Config.get = get;
const set = function set(name, value) {
    const v41 = name.indexOf('.');
    const v42 = -1;
    const v43 = v41 === v42;
    if (v43) {
        const v44 = this.config;
        v44[name] = value;
    }
    let config = this.config;
    name = name.split('.');
    let length = name.length;
    const v51 = (item, index) => {
        const v45 = length - 1;
        const v46 = index === v45;
        if (v46) {
            config[item] = value;
        } else {
            const v47 = config[item];
            const v48 = helper.isObject(v47);
            const v49 = !v48;
            if (v49) {
                const v50 = {};
                config[item] = v50;
            }
            config = config[item];
        }
    };
    const v52 = name.forEach(v51);
    v52;
    return this;
};
Config.set = set;
Config['is_class'] = true;
module.exports = Config;