var http=require("http");
//发送一个请求，相当于http://
var fs=require("fs");
//fs代表文件系统
http.createServer(function(request,response){
    //创建一个服务器        请求参数 发送参数
    var path="./"+request.url;
    //访问文件请求地址
    fs.readFile(path,function(error,data){
        //访问文件系统readFile方法 接收错误提示和数据
        response.end(data);
        //访问response对象end方法
    })
}).listen("8888");
//监听8888端口