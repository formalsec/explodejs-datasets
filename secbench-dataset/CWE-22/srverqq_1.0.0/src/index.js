/**
 * Created by Administrator on 2016/6/23.
 */
/*
var a=10;
var b=10;
console.log(a*b)
*/



/*包   模块
* 为了程序更条理，写代码更轻松
* 模块：一个小的功能,一个文件里边有很多功能，引入用路径    同级./文件名
* 包：一堆文件，文件夹   默认node_modules   直接写文件名
* */


/*
 var math=require("math.js");
 math.math(1,2)*/
var http=require("http");
var url=require("url");
var fs=require("fs");
//console.log(http);

http.createServer(function (request/*接收*/,response/*发送*/) {
    //console.log(request.url);
    var path="."+url.parse(request.url).pathname;
    console.log(path);
    response.writeHead("200",{"content-type":"text/html"});
    fs.readFile(path, function (error, file) {
        if(error){
            response.write("<meta charset=utf-8>");
            response.write("<strong>文件不存在</strong>")
            response.end();
        } else{
            response.write(file);
            response.end();
        }
    })
    //response.write("<em>这是斜体</em>")

    //response.end();


}).listen(8888);//端口