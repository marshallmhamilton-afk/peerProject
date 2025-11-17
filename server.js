import express from 'express';
import { WebSocketServer } from 'ws';
import http from 'http';

const app = express();
const server = http.createServer(app);
const webSocketServer = new WebSocketServer({ server });

webSocketServer.on('connection', (client) => {
  console.log('Client connected');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
