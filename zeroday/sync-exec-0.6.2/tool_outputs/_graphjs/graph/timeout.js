const v5 = function () {
    const v4 = function (limit, msg) {
        const v1 = Date.now();
        const v2 = v1 > limit;
        if (v2) {
            const v3 = new Error(msg);
            throw v3;
        }
    };
    module.exports = v4;
};
const v6 = v5.call(this);
v6;