var http=require("http");//引入它的模块
var fs=require("fs");
http.createServer(function(request,response){//请求、输出
    var path="./"+request.url;
    fs.readFile(path,function(error,data){
        response.end(data);
    })
}).listen("8888");//>1024端口