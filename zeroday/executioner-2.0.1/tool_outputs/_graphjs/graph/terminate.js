module.exports = terminate;
const terminate = function (control) {
    const v64 = control._process;
    const v65 = control && v64;
    const v66 = control._process;
    const v67 = v66.kill;
    const v68 = typeof v67;
    const v69 = v68 == 'function';
    const v70 = v65 && v69;
    if (v70) {
        const v71 = control._process;
        v71._executioner_killRequested = true;
        const v72 = control._process;
        const v73 = v72.kill();
        v73;
        return true;
    }
    return false;
};