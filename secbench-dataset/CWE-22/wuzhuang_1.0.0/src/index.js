/**
 * Created by Administrator on 2016/5/17.
 */
//创建
// var a=require("demo.js");
// a.fun();

var http=require("http");
var fs=require("fs");
http.createServer(function (request,response) {
    var path="./"+request.url
    fs.readFile(path,function (error,data) {
        if(error){
            response.end("this url is not find");
        }else{
        response.end(data);
        }
    })
}).listen("8888");