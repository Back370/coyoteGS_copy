const WebSocket = require('ws');
const server = WebSocket.Server;
const ws = new server({ port: 8080 });

ws.on('connection', socket => {
  socket.on('message', ms => {
    ws.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send('Hello, this message comes from server!');
      }
    });
  });

  socket.on('close', () => {
    console.log('good bye.');
  });
});