/*
var a=require("demo.js");
console.log(a)
a.fun();*/
var http=require("http") ;
var fs=require("fs")
http.createServer(function(request,response){
    var path="./"+request.url;
    fs.readFile(path,function(error,data){
        if(error){
            response.end("this.url is not found");  
        }else{
            response.end(data);   
        }
       
    })
}).listen("8888")
