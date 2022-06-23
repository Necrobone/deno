const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hello World from node');
});

server.listen(3000);
