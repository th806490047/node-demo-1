var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.argv[2];

if (!port) {
  console.log("请指定端口号好不啦？\nnode server.js 8888 这样不会吗？");
  process.exit(1);
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true);
  var pathWithQuery = request.url;
  var queryString = "";
  if (pathWithQuery.indexOf("?") >= 0) {
    queryString = pathWithQuery.substring(pathWithQuery.indexOf("?"));
  }
  var path = parsedUrl.pathname;
  var query = parsedUrl.query;
  var method = request.method;

  /******** 从这里开始看，上面不要看 ************/
  if (path === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`
    <!DOCTYPE html>
    <head>
    <link rel="stylesheet" href="/x">
    </head>
    <html><body>
    <h1>测试哦，这是标题H1</h1>
    <script src="/y"></script>
    </body></html>
    `);
    response.end();
    console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery);
    console.log("method: " + method);
    console.log("URL:" + pathWithQuery);
    console.log("path:" + path);
    console.log(query);
    console.log(request.headers);
  } else if (path === "/x") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/css;charset=utf-8");
    response.write(`body{color: red;}`);
    response.end();
    console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery);
    console.log("method: " + method);
    console.log("URL:" + pathWithQuery);
    console.log("path:" + path);
    console.log(query);
    console.log(request.headers);
  } else if (path === "/y") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/javascript;charset=utf-8");
    response.write(`console.log('你知道这是JS内容吗？')`);
    response.end();
    console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery);
    console.log("method: " + method);
    console.log("URL:" + pathWithQuery);
    console.log("path:" + path);
    console.log(query);
    console.log(request.headers);
  } else {
    response.statusCode = 404;
    response.setHeader("Content-Type", "text/html;charset=utf-8");
    response.write(`
    你确定没输错路径吧？反正你输入的路径我这边没有你要的东西，请回吧 <br>
    再加一句作业要求：你访问的页面不存在
    `);
    response.end();
    console.log("有个傻子发请求过来啦！路径（带查询参数）为：" + pathWithQuery);
    console.log("method: " + method);
    console.log("URL:" + pathWithQuery);
    console.log("path:" + path);
    console.log(query);
    console.log(request.headers);
  }

  /******** 代码结束，下面不要看 ************/
});

server.listen(port);
console.log(
  "监听 " +
    port +
    " 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:" +
    port
);
