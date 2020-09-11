const server = require('http');
const PORT = '8080';
const serverHandel = require('./app');

server.createServer(serverHandel).listen(PORT);