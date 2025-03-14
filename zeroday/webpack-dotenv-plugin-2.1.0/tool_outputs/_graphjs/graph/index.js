const dotenv = require('dotenv-safe');
const fs = require('fs');
const v29 = require('webpack');
const DefinePlugin = v29.DefinePlugin;
module.exports = DotenvPlugin;
const DotenvPlugin = function (options) {
    const v30 = {};
    options = options || v30;
    const v31 = options.sample;
    const v32 = !v31;
    if (v32) {
        options.sample = './.env.sample';
    }
    const v33 = options.path;
    const v34 = !v33;
    if (v34) {
        options.path = './.env';
    }
    const v35 = dotenv.config(options);
    v35;
    const v36 = options.sample;
    const v37 = fs.readFileSync(v36);
    const v38 = dotenv.parse(v37);
    this.example = v38;
    const v39 = {};
    this.env = v39;
    const v40 = options.path;
    const v41 = fs.existsSync(v40);
    if (v41) {
        const v42 = options.path;
        const v43 = fs.readFileSync(v42);
        const v44 = dotenv.parse(v43);
        this.env = v44;
    }
};
const v45 = DotenvPlugin.prototype;
const v56 = function (compiler) {
    const v46 = this.example;
    const v47 = Object.keys(v46);
    const v52 = (definitions, key) => {
        const v48 = process.env;
        const existing = v48[key];
        if (existing) {
            const v49 = JSON.stringify(existing);
            definitions[key] = v49;
            return definitions;
        }
        const v50 = this.env;
        const value = v50[key];
        if (value) {
            const v51 = JSON.stringify(value);
            definitions[key] = v51;
        }
        return definitions;
    };
    const v53 = {};
    const definitions = v47.reduce(v52, v53);
    const plugin = {};
    plugin['process.env'] = definitions;
    const v54 = new DefinePlugin(plugin);
    const v55 = v54.apply(compiler);
    v55;
};
v45.apply = v56;