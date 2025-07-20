const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        // Check if it's a file or a normal message
        if (message.toString().startsWith("file:")) {
            // Broadcast file to all clients except sender
            wss.clients.forEach(client => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        } else {
            // Broadcast text message to all clients except sender
            wss.clients.forEach(client => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(`message:${message}`);
                }
            });
        }
    });

    ws.on('error', function error(err) {
        console.error('WebSocket error:', err);
    });
});

console.log('WebSocket server started on port 4000');
