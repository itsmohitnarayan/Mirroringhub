const WebSocket = require('ws');
const { captureAndroidScreen } = require('./capture');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.send('Welcome to the WebSocket server!'); // Send a welcome message

    // Start capturing screen from Android device
    captureAndroidScreen(ws);

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server started on ws://localhost:8080');
