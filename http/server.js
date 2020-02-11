const http = require('http');

const port = 3000;

const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    console.log('client connnected');

    req.on('end', () => {
        console.log('client disconnected');
    });

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello client!');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
