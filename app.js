var http = require('http');
var hd= require('./myfuncs');
var url= require('url');

const hostname='127.0.0.1';
const port=8080;

const server = http.createServer((req,res)=>{
  var from = req.headers.from;
 
  /* 
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  */
  //or 
  res.writeHead(200,{"Content-Type":"text/html"});
  var q=url.parse(req.url,true).query;
  var txt = q.year + " " + q.month;
  res.write("<html><head><title>"+txt+"</title></head><body>");
  res.end('Custom Server! </br>' + req.url +"</br>"+
   hd.hDate() +
  "</body></html>");
}).listen(port,hostname,(p)=>{
    console.log("Server Started"); 
});