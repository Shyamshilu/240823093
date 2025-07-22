<<<<<<< HEAD
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;              
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');            
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
=======
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;              
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');            
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
>>>>>>> c68975005cb4976833e002d60faca1d1a0bb4f62
