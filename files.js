const files = require("fs");
exports.myweb = (index, req,res)=>{
    if(index=="index.html" || index=="index"||index=="default" || index=="home"){
        files.readFile("index.html",(err,data)=>{
            if(err){
                res.writeHead(404,{"Content-Type":"text/html"});
                return res.end("cannot find resource!"); 
            }
            else{
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data);
                return res.end();
            }
        });
    }
    else{
        res.writeHead(300,{"Content-Type":"text/html"});
        return res.end("cannot find resource!"); 
    }
};