const v42 = function (o) {
    const v35 = o !== null;
    const v36 = typeof o;
    const v37 = v36 === 'object';
    const v38 = v35 && v37;
    const v39 = Array.isArray(o);
    const v40 = !v39;
    const v41 = v38 && v40;
    return v41;
};
const helper = {};
helper.isObject = v42;
const Config = function Config(config = {}) {
    this.config = config;
};
const get = function get(name, config) {
    const v43 = !name;
    if (v43) {
        const v44 = this.config;
        return v44;
    }
    const v45 = this.config;
    config = config || v45;
    const v46 = name.indexOf('.');
    const v47 = -1;
    const v48 = v46 === v47;
    if (v48) {
        const v49 = config[name];
        return v49;
    }
    name = name.split('.');
    let length = name.length;
    const v55 = (item, index) => {
        config = config[item];
        const v50 = length - 1;
        const v51 = index !== v50;
        const v52 = helper.isObject(config);
        const v53 = !v52;
        const v54 = v51 && v53;
        if (v54) {
            config = undefined;
            return true;
        }
    };
    const v56 = name.some(v55);
    v56;
    return config;
};
Config.get = get;
const set = function set(name, value) {
    const v57 = name.indexOf('.');
    const v58 = -1;
    const v59 = v57 === v58;
    if (v59) {
        const v60 = this.config;
        v60[name] = value;
    }
    let config = this.config;
    name = name.split('.');
    let length = name.length;
    const v67 = (item, index) => {
        const v61 = length - 1;
        const v62 = index === v61;
        if (v62) {
            config[item] = value;
        } else {
            const v63 = config[item];
            const v64 = helper.isObject(v63);
            const v65 = !v64;
            if (v65) {
                const v66 = {};
                config[item] = v66;
            }
            config = config[item];
        }
    };
    const v68 = name.forEach(v67);
    v68;
    return this;
};
Config.set = set;
Config['is_class'] = true;
module.exports = Config;