const http = require('http');

var server = http.createServer((req, res) => {

    if(req.url === '/api' && req.method === 'GET'){
        res.writeHead(200,{"contentType": "application/json"});
        res.write('api fetched at endpoint /api');
        res.end();
    }
    else{
        res.writeHead(400,{"contentType":"application/json"});
        res.end('server error..');
    }
});

server.listen(4000, () => {
    console.log("server started on port number 4000");
});
