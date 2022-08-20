var http = require('http');

const hostname='127.0.0.1';
const port=8080;

const server = http.createServer((req,res)=>{
  var from = req.headers.from;
  res.statusCode = 200;
  res.setHeader('Content-Type','txt/html');
  res.write("<html><head><title>"+from+"</title></head><body>");
  res.end('Welcom to first node application! </br>'+req.url +"</body></html>");
}).listen(port,hostname,(p)=>{
    console.log(p);
});