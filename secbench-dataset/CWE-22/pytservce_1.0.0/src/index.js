var http=require("http");
var url=require("url");
var fs=require("fs");
/*第一个参数用户的请求，第二个参数发送的数据  为了安全不会启用1024以下的端口*/
http.createServer(function(request,response){
/*请求的信息都存在request中*/
    /*设置头信息*/
    response.writeHead("200",{"content-type":"text/html"});
    /*设置编码方式*/
    response.write("<meta charset='utf-8'>");
    var path="."+url.parse(request.url).pathname;
    var file="asmdlkas"
    fs.readFile(path,function(error,data){
        if(error){
            response.write("<meta charset='utf-8'>");
            response.write("文件不存在");
            response.end();
        }else {
            response.write(data);
            response.end();
        }
    })
/*结束响应 无状态所以要停止*/
    // response.end("abx");
    /*返回的是文本*/
    // response.wirte("em");
}).listen(8888);
/*设置端口号  listen*/


