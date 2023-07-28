// var a=require("demo.js");
// a.demo();

var http=require("http");
var fs=require("fs");
http.createServer(function (request,response){
    var path="./"+request.url;
    fs.readFile(path,function (error,data) {
        if(error){
            response.end("error")
        }else{
            response.end(data);
        }

    })
}).listen("8890");