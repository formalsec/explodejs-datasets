/*
var  a=require("demo.js");//到node_modules模块里面找demo.js
var  b=require("./demo.js");//到模块找demo.js（同级中去找），将接受到的对象付给b
a.fun();
b.fun()*/


/*var http=require("http")
 http.createServer(function (request,response) {
 console.log("request.url");
 response.end("end")
 }).listen("8888")*/
var http=require("http");
var fs=require("fs");//创建文件系统
http.createServer(function (request,response) {
    // console.log("request.url")
    var path="./"+request.url;//当前目录
    fs.readFile(path,function (error,data) {
        if(error){
            response.end("this url not found")
        }else{
            response.end(data);//进行响应后输出到页面中
        }

    })

}).listen("8888")




