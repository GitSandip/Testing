const http = require('http');

var server = http.createServer((req, res) => {
    res.write('<h1>Testing for Node.js</h1>');
    res.end('<h5>First Time Using pure node.js</h5>');
});

server.listen(4000, () => {
    console.log("server started on port number 4000");
});


