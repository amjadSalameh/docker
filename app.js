var http = require('http');
var hd= require('./myfuncs');
var url= require('url');
var web= require("./files");
var events = require("events");

const hostname='127.0.0.1';
const port=3000;

const server = http.createServer((req,res)=>{
  var from = req.headers.from;
  var q = url.parse(req.url,true);
  var file = q.path.substring(1);

  var eventEmitter = new events.EventEmitter();

  if(file){
     
     web.myweb(file,req,res);
  }
  else{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<html><head><title></title></head><body>");
    res.end(
      '</br>host: ' + q.host +
    '</br>hostname: ' + q.hostname +
    '</br>href: ' + q.href +
    '</br>path: ' + q.path +
    '</br>query.month: ' + q.query.month +
    '</br>query.year : ' + q.query.year +
    '</br>' + hd.hDate() +
    "</body></html>");
  }
  /* 
  res.statusCode = 200;
  res.setHeader('Content-Type','text/html');
  */
}).listen(port,hostname,(p)=>{
    console.log("Server Started"); 
});