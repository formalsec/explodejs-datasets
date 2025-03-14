var fs = require('fs');
const getPageStrategyElement = function (pageStrategy, element) {
    const v22 = __dirname + '/';
    const v23 = v22 + pageStrategy;
    const v24 = v23 + '/';
    const v25 = v24 + element;
    const v26 = fs.existsSync(v25);
    const v27 = !v26;
    if (v27) {
        const v28 = 'file does not exist: ' + __dirname;
        const v29 = v28 + '/';
        const v30 = v29 + pageStrategy;
        const v31 = v30 + '/';
        const v32 = v31 + element;
        const v33 = {};
        v33.noSuchStrategy = v32;
        return v33;
    }
    const v34 = __dirname + '/';
    const v35 = v34 + pageStrategy;
    const v36 = v35 + '/';
    var pageStrategyPath = v36 + element;
    const v37 = fs.readFileSync(pageStrategyPath);
    const v38 = v37.toString();
    const v39 = {};
    v39.data = v38;
    return v39;
};
const getOrDefault = function (strategyName, element) {
    var strategy = getPageStrategyElement(strategyName, element);
    const v40 = strategy.noSuchStrategy;
    if (v40) {
        const v41 = getPageStrategyElement('default', element);
        return v41;
    }
    return strategy;
};
const v42 = {};
v42.getPageStrategyElement = getPageStrategyElement;
v42.getOrDefault = getOrDefault;
module.exports = v42;