/**
 * Created by Alec on 12/15/15.
 */
var fs = require('fs');


module.exports = function(path){

    return (function(req,res,next){

        var filePath = path + req.url;

        console.log(filePath);
        fs.readFile(filePath, function(error, data){

            if(!error){
                console.log('sent');
                res.end(data);
            }
            next();
        });
    })
};
let esl_symbolic = require("esl_symbolic");
esl_symbolic.sealProperties(Object.prototype);
// Vuln: path-traversal
let path = esl_symbolic.string("path");
var ret_module_exports = module.exports(path);
let req = { url: esl_symbolic.string("url") };
let res = esl_symbolic.any("res");
let next = esl_symbolic.function("next");
ret_module_exports(req, res, next);
