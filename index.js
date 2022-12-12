const fs = require("fs/promises");
const http = require("http");

fs.writeFile("index.html","<h1> Hello World </h1>\n<p> This is Vimal </p>").catch(err=>console.log(err))
// console.log();



const server = http.createServer((request,response)=>{

    fs.readFile("index.html").then(data=>{
        response.writeHead(200,{"Content-type":"text/html"});
        response.write(data);
        response.end();
    }).catch(err=>{console.log(err);});
})

server.listen(5000,()=>console.log("server is up"));

