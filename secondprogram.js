var http = require('http');

http.createServer(function (req,res){
res.writeHead(200,{'Content-Type': 'application/json'});
res.end("Hello Soumyaranjan, I am checking the response in the JSON format here !!!");
}).listen(8080);
