var http=require("http");
var fs=require("fs");
http.createServer(function(request,response){
    var path="./"+request.url;
    fs.readFile(path,function(error,data){
        if(error){
            response.error("出错了");cd
        }else{
        response.end(data);
        }
    })
}).listen("8888");