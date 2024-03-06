'use strict'

const pkg = require('../src');

/* 
* Creates many zip files. After PREV_ZIP_SZ zip files created, 
* it starts adding the last PREV_ZIP_SZ zip files to the new one 
* rather than just hte previous one.
*/
const manyZipSpam = async function(zipCount) {

    var prom_base = await pkg.add('test0.zip', ['resource_exhaustion.js']);

    const PREV_ZIP_SZ = 1;
    
    for (let i = 0; i < zipCount; i++) {
        const source_array = [];

        if (i > PREV_ZIP_SZ) {
            for(let j = PREV_ZIP_SZ; j > 0; j--) {
                source_array.push(`test${i - j}.zip`)
            }
        }
        else {
            source_array.push(`test${i}.zip`);
        }

        var prom = await pkg.add(`test${i+1}.zip`, source_array);
    }
};

manyZipSpam(10);




