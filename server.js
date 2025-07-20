const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 4000 });

wss.on('connection', function connection(ws) {
    console.log('New client connected');
    
    ws.on('message', function incoming(message) {
        const messageStr = message.toString();
        
        // Check if it's a file or a normal message
        if (messageStr.startsWith("file:")) {
            console.log('File message received, broadcasting to clients...');
            // Broadcast file to all clients except sender
            wss.clients.forEach(client => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(messageStr); // Send the complete file message
                }
            });
        } else {
            console.log('Text message received:', messageStr);
            // Broadcast text message to all clients except sender
            wss.clients.forEach(client => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(`message:${messageStr}`);
                }
            });
        }
    });

    ws.on('close', function() {
        console.log('Client disconnected');
    });

    ws.on('error', function error(err) {
        console.error('WebSocket error:', err);
    });
});

console.log('WebSocket server started on port 4000');