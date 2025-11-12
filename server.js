const express = require('express');
const http = require('http');
const { ExpressPeerServer } = require('peer');

const app = express();
// Use process.env.PORT for compatibility with hosting platforms
const port = process.env.PORT || 9000;

const server = http.createServer(app);

const peerServer = ExpressPeerServer(server, {
    proxied: true,
    debug: false,
    path: "/main"
});

app.use('/peerjs', peerServer);
console.log(`path is: ${process.env.PATH}`)
server.listen(port, () => {
    console.log(`PeerServer running on port ${port}`);
});

peerServer.on("connection",(connection) => {
    console.log(`peer connected: port ${connection.getId()}`);
});




